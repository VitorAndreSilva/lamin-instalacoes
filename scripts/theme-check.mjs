import { globSync } from 'node:fs'
import { readFileSync } from 'node:fs'

const cssPath = globSync('dist/assets/index-*.css')[0]
const css = readFileSync(cssPath, 'utf8')

const { Window } = await import('happy-dom')

function makeWindow() {
  const window = new Window({ url: 'http://localhost/' })
  const document = window.document
  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)
  // marca: superfície que deve permanecer preta nos dois temas
  document.body.innerHTML =
    '<div class="section">x</div><header class="hero surface-brand" id="brand">y</header>'
  return { window, document }
}

const light = makeWindow()
const dark = makeWindow()
dark.document.documentElement.classList.add('dark')

function read({ window, document }, sel, prop = 'backgroundColor') {
  return window.getComputedStyle(document.querySelector(sel))[prop]
}

const cases = [
  ['modo claro', light],
  ['modo escuro', dark],
]

for (const [name, w] of cases) {
  console.log(`${name}:`)
  console.log('  body     bg =', read(w, 'body'))
  console.log('  body    cor =', read(w, 'body', 'color'))
  console.log('  .section bg =', read(w, '.section') || '(happy-dom não resolve var encadeada)')
  console.log('  .surface-bg =', read(w, '.hero.surface-brand'))
  console.log('  .surface-cor =', read(w, '.hero.surface-brand', 'color'))
}

const bodyBgL = read(light, 'body')
const bodyBgD = read(dark, 'body')
const textL = read(light, 'body', 'color')
const textD = read(dark, 'body', 'color')
const brandL = read(light, '.hero.surface-brand')
const brandD = read(dark, '.hero.surface-brand')

const ok =
  bodyBgL !== bodyBgD && textL !== textD && brandL === brandD && brandL !== 'transparent'

console.log(
  ok
    ? 'OK — tema alterna cores computadas (body/texto) e a superfície da marca permanece preta nos dois temas.'
    : 'FALHOU — verificação de alternância inconsistente.',
)
if (!ok) process.exitCode = 1
