'use strict'

const ACOES = {
  tab:    el => showTab(el.dataset.tab),
  jsec:   el => showJogo(JOGO_UI.id + '/' + el.dataset.sec),
  jnov:   el => showJogo(JOGO_UI.id + '/novidades/' + el.dataset.nid),
  jpar:   el => showJogo(JOGO_UI.id + '/' + (el.dataset.sec || 'roteiro') + '/' + el.dataset.pid),
  jdic:   el => showJogo(JOGO_UI.id + '/dicas/' + el.dataset.did),
  pzvar:  el => { const it = el.closest('.pz-it'), vs = [...it.querySelectorAll('.pz-v')]; if (vs.length < 2) return; const k = (Math.max(0, vs.findIndex(v => !v.hidden)) + 1) % vs.length; vs.forEach((v, j) => { v.hidden = j !== k }); it.querySelectorAll('.pz-pts i').forEach((i, j) => i.classList.toggle('on', j === k)) },   // Personalização: troca o item mostrado no bloco
  jmenu:  el => { const w = el.closest('.jv-selwrap'), on = w.classList.toggle('aberto'); el.setAttribute('aria-expanded', on) },   // celular: abre/fecha a lista de abas
  bsab:   el => {                                      // abre/fecha a ficha de campo do Bestiário
    const c = el.closest('.bs-card'), aberto = c.classList.toggle('aberto')
    el.setAttribute('aria-expanded', aberto)
    BS_UI[c.dataset.bid] = Object.assign(BS_UI[c.dataset.bid] || {}, { open: aberto })
  },
  bstab:  el => {                                      // escolhe o assunto dentro da ficha
    const c = el.closest('.bs-card'), k = el.dataset.k
    c.querySelectorAll('.bs-tab').forEach(t => { const on = t === el; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1 })
    c.querySelectorAll('.bs-painel').forEach(p => { p.hidden = p.dataset.k !== k })
    BS_UI[c.dataset.bid] = Object.assign(BS_UI[c.dataset.bid] || {}, { tab: k })
  },
  jnovh:  el => { const h = document.getElementById('jv-nh-' + el.dataset.h); if (h) h.scrollIntoView({ behavior: 'smooth', block: 'start' }) },
  ref:    el => jRefAbrir(el),
  ttipo:  el => { TROF_UI.tipo = el.dataset.v; trofAtualizar() },                         // Troféus: filtro por tipo
  test:   el => { TROF_UI.estado = el.dataset.v; trofAtualizar() },                       // Troféus: todos / faltando / conquistados
  tperd:  el => { TROF_UI.so_perd = !TROF_UI.so_perd; trofAtualizar() },                  // Troféus: só os perdíveis
  tord:   el => { if (TROF_UI.ord === el.dataset.v) TROF_UI.dir *= -1; else { TROF_UI.ord = el.dataset.v; TROF_UI.dir = trofRotulosDir(el.dataset.v) } trofAtualizar() },
  tvista: el => { TROF_UI.vista = el.dataset.v; trofAtualizar() },                        // Troféus: lista ou mosaico
  tlimpa: el => { Object.assign(TROF_UI, { tipo: 'todos', estado: 'todos', so_perd: false, q: '' }); const q = $('tf-q'); if (q) q.value = ''; trofAtualizar() },
  tabre:  el => { TROF_UI.aberto = TROF_UI.aberto === el.dataset.k ? '' : el.dataset.k; trofAtualizar(); trofFoco('tabre', el.dataset.k) },
  tchk:   el => {
    const s = trofSet(JOGO_UI.id), k = el.dataset.k
    if (s.has(k)) s.delete(k); else s.add(k)
    trofSalvar(JOGO_UI.id); trofAtualizar(); trofFoco('tchk', k)
  },
  lang:   el => {
    if (el.dataset.v === LANG) return
    LANG = el.dataset.v
    ESTADO.lang = LANG
    salvar(); aplicarIdioma()
  },
  nv:     el => { UI.nv = el.dataset.v; renderNovidades() },
  plat:   el => { UI.plat = el.dataset.v; renderGuias() },
  cat:    el => { UI.cat = el.dataset.v; renderDicas() },
  atalho: el => { UI.q = el.dataset.q; sincronizarBusca(); renderGuias(); showTab('guias') },
  limpar: () => { UI.q = ''; UI.plat = 'todas'; UI.dif = 'todas'; sincronizarBusca(); renderGuias() },
  outra:  () => { UI.dica = (UI.dica + 1) % DICAS.length; renderDicaDia() },
  escala: el => { UI.escala = +el.dataset.v; renderEscala() },
  rail:   el => {
    const r = $(el.dataset.alvo || 'g-ultimos')
    const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    r.scrollBy({ left: +el.dataset.dir * r.clientWidth * 0.8, behavior: suave ? 'smooth' : 'auto' })
  },
  mais:   () => { UI.limite += LIMITES.grade; renderGuias() },
  rapida:      el => irRapida(rapidaI + +el.dataset.dir),
  rapidair:    el => irRapida(+el.dataset.i),
  rapidapausa: () => { rapidaPausa = !rapidaPausa; marcarRapida() },
  dicasjogo: el => {                      // abre a aba Dicas já filtrada pelo jogo
    UI.dq = el.dataset.jogo; UI.cat = 'Todas'
    $('d-q').value = UI.dq
    renderDicas(); showTab('dicas')
  },
  fav: el => {
    const id = el.dataset.id
    if (ESTADO.favs[id]) delete ESTADO.favs[id]; else ESTADO.favs[id] = true
    salvar(); renderDicaDia(); renderDicas()
    if (UI.q.trim()) renderGuias()
  },
  'fila-rm': el => {
    ESTADO.fila = ESTADO.fila.filter(x => x.id !== el.dataset.id)
    salvar(); renderFila()
  }
}

Object.assign(ACOES, {                              // Equipamentos / Armaduras: filtros e pop-up de detalhes
  itabre:   el => itAbrir(el.dataset.sec, +el.dataset.i, el),
  itfechar: () => itFechar(),
  itprev:   () => itNav(-1, 'itprev'),
  itnext:   () => itNav(1, 'itnext'),
  itcat:    el => { IT_UI[JOGO_UI.sec].cat = el.dataset.v; itAtualizar() },
  itlimpa:  () => { Object.assign(IT_UI[JOGO_UI.sec], { q: '', cat: 'todas' }); const q = $('it-q'); if (q) q.value = ''; itAtualizar() }
})
document.addEventListener('input', e => { if (e.target && e.target.id === 'it-q' && IT_UI[JOGO_UI.sec]) { IT_UI[JOGO_UI.sec].q = e.target.value; itAtualizar() } })
document.addEventListener('change', e => { if (e.target && e.target.id === 'it-ord' && IT_UI[JOGO_UI.sec]) { IT_UI[JOGO_UI.sec].ord = e.target.value; itAtualizar() } })
document.addEventListener('keydown', e => {          // pop-up aberto: Esc fecha, setas trocam de item, Tab não sai do pop-up
  if (!IT_POP.aberto) return
  if (e.key === 'Escape') { e.preventDefault(); itFechar() }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); itNav(-1, 'itprev') }
  else if (e.key === 'ArrowRight') { e.preventDefault(); itNav(1, 'itnext') }
  else if (e.key === 'Tab') {
    const f = [...document.querySelectorAll('#it-pop button, #it-pop a[href]')]
    if (!f.length) return
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus() }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus() }
  }
})

Object.assign(ACOES, {                              // Trilha sonora e Detalhes
  trplay:   el => trTocar(+el.dataset.i),
  dtabre:   el => dtAbre(+el.dataset.i),
  cvabre:   el => cvAbre(el.dataset.s, +el.dataset.i),
  cvtipo:   el => cvTipoFiltro(el),
  cvroda:   el => cvRoda(el),
  og:       el => ogAbre(el),
  ogrola:   el => ogRola(el),
  trloc:    el => { trParar(); TR_UI.loc = el.dataset.v; $('tr-corpo').innerHTML = trCorpo(JOGOS[JOGO_UI.id]); document.querySelectorAll('.tr-filtros .tf-chip').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === TR_UI.loc)) },
})
document.addEventListener('input', e => {            // barra de posição da faixa
  const s = e.target
  if (!s || !s.classList || !s.classList.contains('tr-seek')) return
  const a = TR.audio
  if (a && TR.i === +s.dataset.i && isFinite(a.duration) && a.duration > 0) a.currentTime = s.value / 1000 * a.duration
})

document.addEventListener('click', e => {
  const el = e.target.closest('[data-action]')
  if (!el || el.tagName === 'SELECT') return
  const fn = ACOES[el.dataset.action]
  if (fn) fn(el)
})

document.addEventListener('click', e => { if (!e.target.closest('.jv-ref, .jv-ref-fig')) jRefFechar() })   // toque fora fecha a imagem
document.addEventListener('keydown', e => { if (e.key === 'Escape') jRefFechar() })
function trofFoco(acao, k) {               // depois de redesenhar a lista, devolve o foco ao botão usado (teclado)
  const b = document.querySelector(`#tf-corpo [data-action="${acao}"][data-k="${k}"]`)
  if (b) b.focus({ preventScroll: true })
}
document.addEventListener('input', e => { if (e.target && e.target.id === 'tf-q') { TROF_UI.q = e.target.value; trofAtualizar() } })   // busca de troféu (o campo fica fora da parte redesenhada)
let refRaf = 0
window.addEventListener('hashchange', jRefFechar)
window.addEventListener('resize', () => { cancelAnimationFrame(refRaf); refRaf = requestAnimationFrame(jRefDesenhar) })
window.addEventListener('scroll', () => {                       // o cartão é fixo: a linha acompanha a palavra e fecha se ela sair da tela
  if (!document.querySelector('.jv-ref-fig')) return
  cancelAnimationFrame(refRaf)
  refRaf = requestAnimationFrame(() => {
    const b = document.querySelector('.jv-ref[aria-expanded="true"]'), r = b && b.getBoundingClientRect()
    if (!r || r.bottom < 0 || r.top > window.innerHeight) { jRefFechar(); return }
    jRefDesenhar()
  })
}, { passive: true })

document.addEventListener('input', e => {
  const id = e.target.id
  if (id === 'g-q') { UI.q = e.target.value; renderGuias() }
  else if (id === 'd-q') { UI.dq = e.target.value; renderDicas() }
})

document.addEventListener('change', e => {
  const t = e.target
  if (t.id === 'g-dif') { UI.dif = t.value; renderGuias() }
  else if (t.id === 'g-ord') { UI.ord = t.value; renderGuias() }
  else if (t.dataset.action === 'st') {
    const item = ESTADO.fila.find(x => x.id === t.dataset.id)
    if (item) { item.status = t.value; salvar(); renderFila() }
  }
})

document.addEventListener('submit', e => {
  const form = e.target
  if (form.id === 'fila-form') {
    e.preventDefault()
    const nome = form.elements.nome.value.trim().slice(0, 60)
    if (!nome || ESTADO.fila.length >= 100) return
    ESTADO.fila.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), nome, status: form.elements.status.value })
    form.elements.nome.value = ''
    salvar(); renderFila()
  }
})

document.addEventListener('keydown', e => {
  if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return
  if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return
  e.preventDefault()
  buscaAbrir()                                    // "/" abre a busca universal de qualquer tela
})

const jFechaMenu = () => { const w = document.querySelector('.jv-selwrap.aberto'); if (w) { w.classList.remove('aberto'); w.querySelector('.jv-sel').setAttribute('aria-expanded', 'false') } }
document.addEventListener('click', e => { const w = document.querySelector('.jv-selwrap.aberto'); if (w && !w.contains(e.target)) jFechaMenu() })   // toque fora fecha a lista de abas
document.addEventListener('keydown', e => { if (e.key === 'Escape') jFechaMenu() })
document.addEventListener('keydown', e => {                   // setas esquerda/direita trocam de aba dentro da ficha
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
  const t = e.target.closest && e.target.closest('.bs-tab'); if (!t) return
  const abas = [...t.parentNode.querySelectorAll('.bs-tab')]
  const prox = abas[(abas.indexOf(t) + (e.key === 'ArrowRight' ? 1 : abas.length - 1)) % abas.length]
  e.preventDefault(); prox.focus(); prox.click()
})
