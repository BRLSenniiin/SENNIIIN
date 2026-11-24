'use strict'

window.addEventListener('hashchange', () => showTab(location.hash.slice(1)))

/* Wallpaper, Logo e Icon (nomes e pasta em dados/site.js, IMAGENS_SITE). Cada um só entra se o arquivo existir; senão fica o visual de sempre. */
function usarSeExistir(url, ao) {
  if (!url) return
  const im = new Image()
  im.onload = () => ao(url)
  im.src = url                                           // sem arquivo, onload nunca dispara e nada muda
}
function aplicarImagensSite() {
  usarSeExistir(IMAGENS_SITE.icon, url => {
    let l = document.querySelector('link[rel="icon"]')
    if (!l) { l = document.createElement('link'); l.rel = 'icon'; document.head.appendChild(l) }
    l.type = 'image/webp'; l.href = url
  })
  usarSeExistir(IMAGENS_SITE.logo, url => {
    const marca = document.querySelector('.brand svg')
    if (!marca) return
    const img = document.createElement('img')
    img.className = 'brand-logo'; img.src = url; img.alt = ''; img.setAttribute('aria-hidden', 'true')
    marca.replaceWith(img)
  })
  usarSeExistir(IMAGENS_SITE.wallpaper, url => {
    document.documentElement.style.setProperty('--wallpaper', 'url("' + new URL(url, location.href).href + '")')   // endereço completo: dentro do CSS, um caminho relativo seria lido a partir da pasta css/
    document.body.classList.add('tem-wallpaper')
  })
}

/* ════════════════════════════════════════════
   INÍCIO
   ════════════════════════════════════════════ */
carregar()
LANG = ESTADO.lang || ((navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en')
UI.vistoAnterior = ESTADO.visto
UI.dica = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 864e5) % DICAS.length
renderNav()
aplicarImagensSite()
aplicarIdioma()
iniciarRail()
iniciarRailDicas()
iniciarGrade()
iniciarRapidas()
iniciarBusca()
showTab(location.hash.slice(1) || window.PAGINA_INICIAL || 'home')   // PAGINA_INICIAL: definida só nas páginas de jogo (ex.: gta-vi.html abre direto no guia dele)
ESTADO.visto = hojeISO()
salvar()
