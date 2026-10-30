import { chromium } from 'playwright'

const base = process.env.URL ?? 'http://localhost:4173'
const outDir = '/tmp/opencode/shots'

const combos = [
  { name: 'desktop-escuro', viewport: { width: 1440, height: 900 }, colorScheme: 'dark' },
  { name: 'desktop-claro', viewport: { width: 1440, height: 900 }, colorScheme: 'light' },
  { name: 'mobile-escuro', viewport: { width: 375, height: 812 }, colorScheme: 'dark' },
  { name: 'mobile-claro', viewport: { width: 375, height: 812 }, colorScheme: 'light' },
]

const browser = await chromium.launch()

for (const combo of combos) {
  const ctx = await browser.newContext({
    viewport: combo.viewport,
    colorScheme: combo.colorScheme,
  })
  const page = await ctx.newPage()
  await page.goto(base, { waitUntil: 'networkidle' })
  await page.waitForTimeout(400)
  const bodyBg = await page.evaluate(() =>
    getComputedStyle(document.body).backgroundColor,
  )
  await page.screenshot({ path: `${outDir}/${combo.name}.png`, fullPage: true })
  console.log(`${combo.name}: body=${bodyBg}`)
  await ctx.close()
}

// alternância perpendicular + correspondência de persistência
{
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: 'dark',
  })
  const page = await ctx.newPage()
  await page.goto(base, { waitUntil: 'networkidle' })
  const before = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
  const htmlClassBefore = await page.evaluate(() => document.documentElement.className)

  await page.click('button[aria-label="Ativar modo claro"]')
  await page.waitForTimeout(250)
  const after = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
  const stored = await page.evaluate(() => localStorage.getItem('theme'))
  const htmlClassAfter = await page.evaluate(() => document.documentElement.className)

  await page.reload({ waitUntil: 'networkidle' })
  await page.waitForTimeout(300)
  const afterReload = await page.evaluate(() =>
    getComputedStyle(document.body).backgroundColor,
  )

  console.log(
    `toggle: antes=${before} (${htmlClassBefore || 'sem classe'}) → depois=${after} (${htmlClassAfter}) · localStorage=${stored}`,
  )
  console.log(`persistencia: após reload body=${afterReload} → ${afterReload === after ? 'OK' : 'FALHOU'}`)

  // captura do menu mobile aberto
  const mob = await browser.newContext({ viewport: { width: 375, height: 812 } })
  const mpage = await mob.newPage()
  await mpage.goto(base, { waitUntil: 'networkidle' })
  await mpage.click('button[aria-label="Abrir menu"]')
  await mpage.waitForTimeout(300)
  await mpage.screenshot({ path: `${outDir}/mobile-menu.png` })
  console.log('mobile-menu aberto capturado')

  await ctx.close()
  await mob.close()
}

await browser.close()
