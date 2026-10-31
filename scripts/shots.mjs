import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import assert from 'node:assert/strict'

const base = process.env.URL ?? 'http://127.0.0.1:4173'
const outDir = resolve(process.env.SHOTS_DIR ?? '/tmp/lamin-refinamento')
await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()
const sizes = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
]
const errors = []
try {
  for (const size of sizes) {
    for (const colorScheme of ['light', 'dark']) {
      const name = size.name + '-' + colorScheme
      const context = await browser.newContext({
        viewport: size,
        colorScheme,
        reducedMotion: 'reduce',
      })
      const page = await context.newPage()
      page.setDefaultTimeout(10000)
      page.on('pageerror', (error) => errors.push(error.message))
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text())
      })
      page.on('response', (response) => {
        if (response.status() >= 400) errors.push(response.status() + ' ' + response.url())
      })
      await page.goto(base, { waitUntil: 'networkidle' })
      await page.evaluate(() => document.fonts.ready)
      assert.equal(await page.locator('h1').count(), 1)
      assert.equal(await page.locator('.index__row').count(), 8)
      assert.equal(await page.locator('.testimonios').count(), 0)
      assert.equal(await page.locator('.whatsapp-float').count(), 1)
      assert.equal(await page.locator('.whatsapp-float').isVisible(), false)
      assert.equal(await page.locator('button[aria-label*="modo"]').count(), 1)
      const originalTheme = await page.locator('html').getAttribute('data-theme')
      assert.equal(originalTheme, colorScheme)
      assert.equal(await page.evaluate(() => localStorage.getItem('theme')), null)
      // Sem escolha explícita, mudanças na preferência do sistema devem ser acompanhadas.
      const opposite = colorScheme === 'dark' ? 'light' : 'dark'
      await page.emulateMedia({ colorScheme: opposite })
      await page.waitForFunction(
        (value) => document.documentElement.dataset.theme === value,
        opposite,
      )
      await page.emulateMedia({ colorScheme })
      await page.waitForFunction(
        (value) => document.documentElement.dataset.theme === value,
        colorScheme,
      )
      const toggle = page.locator('.theme-toggle')
      await toggle.click()
      assert.equal(await page.evaluate(() => localStorage.getItem('theme')), opposite)
      await page.reload({ waitUntil: 'networkidle' })
      assert.equal(await page.locator('html').getAttribute('data-theme'), opposite)
      await page.emulateMedia({ colorScheme: opposite })
      await page.locator('.theme-toggle').click()
      assert.equal(await page.locator('html').getAttribute('data-theme'), colorScheme)
      await page.reload({ waitUntil: 'networkidle' })
      const layout = await page.evaluate(() => ({
        viewport: innerWidth,
        width: document.documentElement.scrollWidth,
        background: getComputedStyle(document.body).backgroundColor,
        brokenImages: [...document.images].filter((image) => !image.complete || !image.naturalWidth)
          .length,
        brokenAnchors: [...document.querySelectorAll('a[href^="#"]')]
          .filter((link) => !document.getElementById(link.hash.slice(1)))
          .map((link) => link.hash),
        sections: [...document.querySelectorAll('main > section, .header')].map((element) => ({
          name: element.id || element.className,
          background: getComputedStyle(element).backgroundColor,
        })),
      }))
      assert.ok(layout.width <= layout.viewport, JSON.stringify(layout))
      assert.equal(
        layout.background,
        colorScheme === 'light' ? 'rgb(246, 245, 238)' : 'rgb(25, 27, 22)',
      )
      assert.equal(layout.brokenImages, 0)
      assert.deepEqual(layout.brokenAnchors, [])
      assert.equal(await page.locator('#contato a[href^="https://wa.me/554799587856"]').count(), 1)
      assert.equal(
        await page.locator('#contato a[href="mailto:cacolamin2009@gmail.com"]').count(),
        1,
      )
      assert.equal(await page.locator('#contato a[href="tel:+554799587856"]').count(), 1)

      // Contraste de texto e fundo efetivo, inclusive em superfícies alternadas e no rodapé.
      const contrastFailures = await page.evaluate(() => {
        const rgb = (color) => color.match(/[0-9.]+/g).map(Number)
        const luminance = (color) =>
          rgb(color)
            .slice(0, 3)
            .map((v) => v / 255)
            .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
            .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0)
        return [...document.querySelectorAll('main *, header *, footer *')]
          .filter(
            (el) =>
              el.getClientRects().length &&
              [...el.childNodes].some((node) => node.nodeType === 3 && node.textContent.trim()),
          )
          .flatMap((el) => {
            const style = getComputedStyle(el)
            let parent = el
            while (
              parent.parentElement &&
              getComputedStyle(parent).backgroundColor === 'rgba(0, 0, 0, 0)'
            )
              parent = parent.parentElement
            const foreground = luminance(style.color),
              background = luminance(getComputedStyle(parent).backgroundColor)
            const ratio =
              (Math.max(foreground, background) + 0.05) / (Math.min(foreground, background) + 0.05)
            const large =
              parseFloat(style.fontSize) >= 24 ||
              (parseFloat(style.fontSize) >= 18.66 && Number(style.fontWeight) >= 700)
            return ratio < (large ? 3 : 4.5)
              ? [{ text: el.textContent.trim().slice(0, 60), ratio }]
              : []
          })
      })
      assert.deepEqual(contrastFailures, [], 'Contraste insuficiente')
      await page.screenshot({ path: resolve(outDir, name + '.png'), fullPage: true })
      await page.screenshot({ path: resolve(outDir, name + '-hero.png') })

      if (size.width <= 900) {
        const menu = page.locator('.burger')
        await menu.click()
        assert.equal(await menu.getAttribute('aria-expanded'), 'true')
        await page.screenshot({ path: resolve(outDir, name + '-menu.png') })
        await page.keyboard.press('Escape')
        assert.equal(await menu.getAttribute('aria-expanded'), 'false')
        assert.ok(await menu.evaluate((element) => element === document.activeElement))
        await menu.click()
        await page
          .getByRole('navigation', { name: 'Navegação principal' })
          .getByRole('link', { name: 'Serviços', exact: true })
          .click()
        assert.equal(await menu.getAttribute('aria-expanded'), 'false')
        assert.equal(new URL(page.url()).hash, '#servicos')
        const servicesTop = await page
          .locator('#servicos')
          .evaluate((element) => element.getBoundingClientRect().top)
        const headerBottom = await page
          .locator('.header')
          .evaluate((element) => element.getBoundingClientRect().bottom)
        assert.ok(servicesTop >= headerBottom, 'O Header cobre o destino da navegação')
      } else {
        await page
          .getByRole('navigation', { name: 'Navegação principal' })
          .getByRole('link', { name: 'Serviços', exact: true })
          .click()
        assert.equal(new URL(page.url()).hash, '#servicos')
        await page.waitForFunction(
          () => getComputedStyle(document.querySelector('.whatsapp-float')).display !== 'none',
        )
        const buttonBox = await page.locator('.whatsapp-float').boundingBox()
        const contentRight = await page
          .locator('#servicos .container')
          .evaluate((el) => el.getBoundingClientRect().right)
        assert.ok(buttonBox.x > contentRight, 'WhatsApp flutuante invade a coluna de conteúdo')
        await page.screenshot({ path: resolve(outDir, name + '-whatsapp.png') })
      }
      const summary = page.locator('.faq summary').first()
      await summary.focus()
      await page.keyboard.press('Enter')
      assert.ok(
        await page
          .locator('.faq details')
          .first()
          .evaluate((element) => element.open),
      )
      await page.locator('#faq').scrollIntoViewIfNeeded()
      await page.screenshot({ path: resolve(outDir, name + '-faq.png') })
      await page.locator('#contato').scrollIntoViewIfNeeded()
      if (size.width >= 1280)
        await page.waitForFunction(
          () => getComputedStyle(document.querySelector('.whatsapp-float')).display === 'none',
        )
      await page.screenshot({ path: resolve(outDir, name + '-contato.png') })
      console.log(
        name +
          ': navegação, FAQ por teclado, links, tema, persistência, contraste e layout OK; ' +
          JSON.stringify(layout),
      )
      await context.close()
    }
  }
  assert.deepEqual(errors, [], 'Erros de navegador ou rede')
  console.log('Capturas finais: ' + outDir)
} finally {
  await browser.close()
}
