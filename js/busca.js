'use strict'

/* ════════════════════════════════════════════
   BUSCA UNIVERSAL — botão flutuante fixo em todas as telas; o resultado leva direto ao guia do jogo
   (a busca do Início e a tecla / abrem este mesmo painel; o filtro da aba Guias continua separado)
   ════════════════════════════════════════════ */
const BUSCA = { aberta: false, q: '', i: 0, voltar: null, lista: [] }
const buscaFiltrar = q => GUIAS.filter(g => !q.trim() || casa([g.jogo, allL(g.subtitulo), allL(g.resumo), allL(g.tags)].join(' '), q))

function buscaItem(g, i) {
  const foto = g.img ? `<img src="${esc(g.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''
  return `<a class="bu-item" id="bu-i${i}" role="option" aria-selected="${i === BUSCA.i}" data-i="${i}" href="${esc(g.href)}" style="--h:${g.hue}">
    <span class="bu-img"><span aria-hidden="true">${esc(g.jogo.charAt(0))}</span>${foto}</span>
    <span class="bu-info"><b>${esc(g.jogo)}</b><span class="bu-meta">${esc(g.plataformas.join(' · '))} · ${g.horasMin}–${g.horasMax}h · ${g.perdiveis} ${tx('c_perd')}</span></span>
    ${g.platina ? `<span class="pill plat">${tx('c_plat')}</span>` : ''}
  </a>`
}

function renderBusca() {
  BUSCA.lista = BUSCA.q.trim() ? buscaFiltrar(BUSCA.q) : GUIAS.slice(0, LIMITES.buscaUltimos)   // sem digitar: só os últimos guias; digitando: busca em todos
  const n = BUSCA.lista.length
  BUSCA.i = Math.min(BUSCA.i, Math.max(0, n - 1))
  $('bu-cont').textContent = BUSCA.q.trim() ? tx('bu_res', n) : tx('bu_todos', n)
  $('bu-lista').innerHTML = n
    ? BUSCA.lista.map(buscaItem).join('')
    : `<div class="bu-vazio"><p>${tx('bu_nada')}</p><small>${tx('bu_nada2')}</small></div>`
  if (n) $('bu-q').setAttribute('aria-activedescendant', 'bu-i' + BUSCA.i); else $('bu-q').removeAttribute('aria-activedescendant')
}

function buscaMarcar(i) {                                    // setas: move o destaque sem recriar a lista
  const n = BUSCA.lista.length; if (!n) return
  BUSCA.i = (i + n) % n
  document.querySelectorAll('#bu-lista .bu-item').forEach((el, k) => el.setAttribute('aria-selected', k === BUSCA.i))
  $('bu-q').setAttribute('aria-activedescendant', 'bu-i' + BUSCA.i)
  $('bu-i' + BUSCA.i).scrollIntoView({ block: 'nearest' })
}

function buscaAbrir(q) {
  if (BUSCA.aberta) return
  BUSCA.aberta = true; BUSCA.q = q || ''; BUSCA.i = 0
  BUSCA.voltar = document.activeElement
  const sbw = window.innerWidth - document.documentElement.clientWidth     // evita o salto da página ao sumir a barra de rolagem
  document.documentElement.style.paddingRight = sbw > 0 ? sbw + 'px' : ''
  document.documentElement.classList.add('busca-aberta')
  $('busca').classList.add('on')
  $('bu-q').value = BUSCA.q
  renderBusca()
  $('bu-q').focus()
}

function buscaFechar(devolverFoco = true) {
  if (!BUSCA.aberta) return
  BUSCA.aberta = false
  $('busca').classList.remove('on')
  document.documentElement.classList.remove('busca-aberta')
  document.documentElement.style.paddingRight = ''
  const v = BUSCA.voltar; BUSCA.voltar = null
  if (devolverFoco) (v && v !== document.body && document.contains(v) ? v : $('bu-fab')).focus()
}

function buscaIr(g) {                                        // vai direto ao guia do jogo, nunca à aba Guias
  buscaFechar(false)
  showTab(g.href.slice(1))
}

function iniciarBusca() {
  $('bu-fab').addEventListener('click', () => buscaAbrir())
  $('bu-fundo').addEventListener('click', () => buscaFechar())
  $('bu-x').addEventListener('click', () => buscaFechar())
  $('bu-q').addEventListener('input', e => { BUSCA.q = e.target.value; BUSCA.i = 0; renderBusca() })
  $('bu-lista').addEventListener('click', e => {
    const a = e.target.closest('.bu-item')
    if (!a || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return    // com modificador, o link abre normalmente
    e.preventDefault()
    buscaIr(BUSCA.lista[+a.dataset.i])
  })
  $('busca').addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.preventDefault(); buscaFechar() }
    else if (e.key === 'ArrowDown') { e.preventDefault(); buscaMarcar(BUSCA.i + 1) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); buscaMarcar(BUSCA.i - 1) }
    else if (e.key === 'Enter' && e.target.id === 'bu-q') { e.preventDefault(); if (BUSCA.lista[BUSCA.i]) buscaIr(BUSCA.lista[BUSCA.i]) }
    else if (e.key === 'Tab') {                                                // o foco não sai do painel
      const f = [...$('busca').querySelectorAll('input, button, a[href]')].filter(el => el.offsetParent !== null)
      if (!f.length) return
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus() }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus() }
    }
  })
}
