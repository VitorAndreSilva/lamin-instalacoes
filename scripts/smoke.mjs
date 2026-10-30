const { createServer } = await import('vite')

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

const { GlobalRegistrator } = await import('@happy-dom/global-registrator')
GlobalRegistrator.register()

const { createSSRApp } = await import('vue')
const { createPinia } = await import('pinia')
const { renderToString } = await import('@vue/server-renderer')

const { default: App } = await server.ssrLoadModule('/src/App.vue')

const app = createSSRApp(App)
app.use(createPinia())
const html = await renderToString(app)

const expect = [
  'Ir para o conteúdo',
  'Instalações elétricas',
  'Lamin Instalações Elétricas',
  '9958-7856',
  '(47)',
  'Instalações Elétricas Residenciais',
  'Quadros de Distribuição',
  'Emergências Elétricas',
  'Tudo incluído',
  'Orçamento por escrito',
  'Fale conosco',
  'Simples, rápido e',
  'Perguntas frequentes',
  'Marcos A. Lamin',
  'Itinga',
  'wa.me/554799587856',
  'instagram.com/lamin.marcos',
  'Rua José Alves de Braga, 125',
]

const missing = expect.filter((s) => !html.includes(s))

if (missing.length > 0) {
  console.error('FALHOU — conteúdo ausente:', missing)
  process.exitCode = 1
} else {
  console.log(`OK — renderização SSR válida (${(html.length / 1024).toFixed(1)} kB HTML)`)
}

await server.close()
