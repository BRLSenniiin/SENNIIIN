'use strict'

window.addEventListener('hashchange', () => showTab(location.hash.slice(1)))

/* ════════════════════════════════════════════
   INÍCIO
   ════════════════════════════════════════════ */
carregar()
LANG = ESTADO.lang || ((navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en')
UI.vistoAnterior = ESTADO.visto
UI.dica = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 864e5) % DICAS.length
renderNav()
aplicarIdioma()
iniciarRail()
iniciarRailDicas()
iniciarGrade()
iniciarRapidas()
iniciarBusca()
showTab(location.hash.slice(1) || window.PAGINA_INICIAL || 'home')   // PAGINA_INICIAL: definida só nas páginas de jogo (ex.: gta-vi.html abre direto no guia dele)
ESTADO.visto = hojeISO()
salvar()
