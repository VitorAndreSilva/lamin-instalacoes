import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import assert from 'node:assert/strict'

const base = process.env.URL ?? 'http://127.0.0.1:4173'
const outDir = resolve(process.env.SHOTS_DIR ?? '/tmp/lamin-v1')
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
    const context = await browser.newContext({
      viewport: size,
      colorScheme: 'dark',
      reducedMotion: 'reduce',
    })
    // A versão clara deve funcionar também para visitantes com a escolha antiga salva.
    await context.addInitScript(() => localStorage.setItem('theme', 'dark'))
    const page = await context.newPage()
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
    assert.equal(await page.locator('.whatsapp-float').count(), 0)
    assert.equal(await page.locator('button[aria-label*="modo"]').count(), 0)
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
    assert.equal(layout.background, 'rgb(246, 245, 238)')
    assert.equal(layout.brokenImages, 0)
    assert.deepEqual(layout.brokenAnchors, [])
    assert.equal(await page.locator('#contato a[href^="https://wa.me/554799587856"]').count(), 1)
    assert.equal(await page.locator('#contato a[href="mailto:cacolamin2009@gmail.com"]').count(), 1)
    assert.equal(await page.locator('#contato a[href="tel:+554799587856"]').count(), 1)

    await page.screenshot({ path: resolve(outDir, size.name + '.png'), fullPage: true })
    await page.screenshot({ path: resolve(outDir, size.name + '-hero.png') })

    if (size.width <= 900) {
      const menu = page.locator('.burger')
      await menu.click()
      assert.equal(await menu.getAttribute('aria-expanded'), 'true')
      await page.screenshot({ path: resolve(outDir, size.name + '-menu.png') })
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
        .getByRole('link', { name: 'Sobre', exact: true })
        .click()
      assert.equal(new URL(page.url()).hash, '#sobre')
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
    await page.screenshot({ path: resolve(outDir, size.name + '-faq.png') })
    await page.locator('#contato').scrollIntoViewIfNeeded()
    await page.screenshot({ path: resolve(outDir, size.name + '-contato.png') })
    console.log(
      size.name +
        ': navegação, FAQ por teclado, links, tema claro e layout OK; ' +
        JSON.stringify(layout),
    )
    await context.close()
  }
  assert.deepEqual(errors, [], 'Erros de navegador ou rede')
  console.log('Capturas finais: ' + outDir)
} finally {
  await browser.close()
}
