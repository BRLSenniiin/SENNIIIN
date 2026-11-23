'use strict'

/* ════════════════════════════════════════════
   RENDERIZAÇÃO — funções puras, uma injeção por container
   ════════════════════════════════════════════ */
function cardGuia(g, i) {
  const pills = [
    g.platina ? `<span class="pill plat">${tx('c_plat')}</span>` : '',
    `<span class="pill">${esc(g.plataformas.join(' · '))}</span>`,
    `<span class="pill">${tx('c_trof', g.trofeus)}</span>`,
    g.raridade != null ? `<span class="pill">${tx('c_raro', g.raridade.toLocaleString(loc()))}</span>` : ''
  ].join('')
  const medidor = Array.from({ length: 10 }, (_, k) => `<i class="${k < g.dif ? 'on' : ''}"></i>`).join('')
  const stats = [
    [`${g.dif}/10`, tx('c_dif')],
    [`${g.horasMin}–${g.horasMax}h`, tx('c_tempo')],
    [L(g.playthroughs), tx('c_jog')],
    [g.perdiveis, tx('c_perd')]
  ].map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join('')
  return `
    <article class="card" style="--h:${g.hue};--i:${i || 0}">
      <div class="cover">
        <span class="glyph" aria-hidden="true">${esc(g.jogo.charAt(0))}</span>
        <span class="stamp">${esc(L(SITE.selo))}</span>
        <div class="cover-row">${pills}</div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${esc(g.jogo)}</h3>
        <p class="card-sub">${esc(L(g.subtitulo))}</p>
        <p class="card-text">${esc(L(g.resumo))}</p>
        <div class="meter" data-t="${tier(g.dif)}" role="img" aria-label="${esc(tx('c_aria_dif', g.dif))}">${medidor}</div>
      </div>
      <div class="stats">${stats}</div>
      <div class="card-foot">
        <div class="tags">${L(g.tags).map(tg => `<span class="tag">${esc(tg)}</span>`).join('')}</div>
        <a class="btn" href="${esc(g.href)}">${tx('c_abrir')}</a>
      </div>
    </article>`
}

function cardSlot(i) {
  return `
    <article class="card slot" style="--i:${i || 0}">
      <div class="slot-in">
        <span class="mono">${tx('slot_k')}</span>
        <h3>${tx('slot_h')}</h3>
        <p>${tx('slot_p')}</p>
        <button class="btn ghost" data-action="tab" data-tab="sobre">${tx('slot_btn')}</button>
      </div>
    </article>`
}

function cardDica(d, i) {
  const fav = !!ESTADO.favs[d.id]
  return `
    <article class="tip" style="--c:${CATEGORIAS[d.cat].cor};--i:${i || 0}">
      <header>
        <span class="mono">${esc(L(CATEGORIAS[d.cat].rot))}${d.jogo ? ' · ' + esc(d.jogo) : ''}</span>
        <button class="star ${fav ? 'on' : ''}" data-action="fav" data-id="${d.id}" aria-pressed="${fav}" aria-label="${esc(fav ? tx('fav_rm') : tx('fav_add'))}">${fav ? '★' : '☆'}</button>
      </header>
      <h3>${esc(L(d.titulo))}</h3>
      <p>${esc(L(d.texto))}</p>
    </article>`
}

/* Faixa "Dicas de caçador": cards com imagem, rolagem lateral, as últimas LIMITES.dicas dicas */
function cardDicaImg(d, i) {
  const fav = !!ESTADO.favs[d.id]
  const cat = CATEGORIAS[d.cat]
  const foto = d.img ? `<img src="${esc(d.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''
  const g = d.jogo ? GUIAS.find(x => x.jogo === d.jogo) : null
  const letra = (d.jogo || L(cat.rot)).charAt(0)
  return `
    <article class="dc" style="--c:${cat.cor};--h:${hueRapida(d)};--i:${i || 0}">
      <div class="dc-img">
        <span class="dc-glyph" aria-hidden="true">${esc(letra)}</span>${foto}
        <span class="dc-cat mono">${esc(L(cat.rot))}</span>
        <button class="star ${fav ? 'on' : ''}" data-action="fav" data-id="${d.id}" aria-pressed="${fav}" aria-label="${esc(fav ? tx('fav_rm') : tx('fav_add'))}">${fav ? '★' : '☆'}</button>
      </div>
      <div class="dc-corpo">
        ${d.jogo ? `<span class="dc-jogo mono">${esc(d.jogo)}</span>` : ''}
        <h3>${esc(L(d.titulo))}</h3>
        <p>${esc(L(d.texto))}</p>
        ${g ? `<a class="dc-link" href="${esc(g.href)}">${esc(tx('dc_guia', g.jogo))}</a>` : ''}
      </div>
    </article>`
}

function atualizarRailD() {
  const r = $('d-grid'), ctl = $('d-ctl')
  if (!r || !ctl) return
  ctl.hidden = !(r.scrollWidth - r.clientWidth > 4)
  const [ant, prox] = ctl.querySelectorAll('.rail-btn')
  ant.disabled = r.scrollLeft <= 4
  prox.disabled = r.scrollLeft >= r.scrollWidth - r.clientWidth - 4
}

function iniciarRailDicas() {
  const r = $('d-grid')
  r.addEventListener('scroll', atualizarRailD, { passive: true })
  if ('ResizeObserver' in window) new ResizeObserver(atualizarRailD).observe(r)
  window.addEventListener('resize', atualizarRailD)
}

function renderNav() {
  $('tabs').innerHTML = ABAS.map(a =>
    `<button class="tab" role="tab" id="tab-${a.id}" data-action="tab" data-tab="${a.id}" aria-selected="false">${esc(L(a.rot))}</button>`
  ).join('')
  ABAS.forEach(a => { PAINEIS[a.id] = $('panel-' + a.id); BOTOES[a.id] = $('tab-' + a.id) })
}

function renderStats() {
  const plats = ESTADO.fila.filter(f => f.status === 'platinado').length
  const soma = k => GUIAS.reduce((t, g) => t + (g[k] || 0), 0)
  $('home-stats').innerHTML = [
    [GUIAS.length, tx('st_guias')],
    [soma('trofeus'), tx('st_trof')],
    [soma('perdiveis'), tx('st_perd')],
    [plats, tx('st_plat')]
  ].map(([v, l]) => `<div class="stat"><b>${v}</b><span>${l}</span></div>`).join('')
}

function renderHome() {
  $('hero-ficha').innerHTML = renderHub()
  $('home-guias').innerHTML = GUIAS.slice(0, 3).map(cardGuia).join('') + cardSlot(GUIAS.length)
  $('home-recursos').innerHTML = RECURSOS.map(r =>
    `<div class="recurso"><b>${r.n}</b><div><h3>${esc(L(r.t))}</h3><p>${esc(L(r.d))}</p></div></div>`).join('')
  renderStats()
  renderDicaDia()
  renderNovidades()
}

/* Hero "jogo a jogo": nome do jogo + blocos com as últimas novidades dele (guia e dicas) */
function blocoHub(b) {
  const miolo = `
    <span class="hj-top">
      <span class="pill ${b.tipo === 'guia' ? 'plat' : ''}">${tx('tp_' + b.tipo)}</span>
      ${b.meta ? `<span class="hj-meta-b mono"${b.cor ? ` style="--c:${b.cor}"` : ''}>${esc(b.meta)}</span>` : ''}
    </span>
    <b class="hj-titulo">${esc(b.titulo)}</b>
    ${b.texto ? `<span class="hj-texto">${esc(b.texto)}</span>` : ''}
    <span class="hj-go" aria-hidden="true">→</span>`
  return b.href
    ? `<a class="hj-bloco" href="${esc(b.href)}">${miolo}</a>`
    : `<button class="hj-bloco" type="button" data-action="dicasjogo" data-jogo="${esc(b.jogo)}">${miolo}</button>`
}

function linhaJogo(g) {
  const dicas = DICAS.filter(d => d.jogo === g.jogo).reverse()          // as mais novas ficam no fim do array
  const nv = NOVIDADES.find(n => n.href === g.href)
  const nDicas = Math.max(0, LIMITES.blocos - 1)
  const blocos = [{
    tipo: 'guia', href: g.href, meta: nv && nv.data ? quando(nv.data) : '',
    titulo: tx('hj_guia'), texto: L(g.resumo)
  }].concat(dicas.slice(0, nDicas).map(d => ({
    tipo: 'dica', jogo: g.jogo, meta: L(CATEGORIAS[d.cat].rot), cor: CATEGORIAS[d.cat].cor,
    titulo: L(d.titulo), texto: L(d.texto)
  })))
  if (dicas.length > nDicas) {
    blocos.push({ tipo: 'dica', jogo: g.jogo, meta: '', titulo: tx('hj_todas', dicas.length), texto: '' })
  }
  const foto = g.img ? `<img src="${esc(g.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''
  return `
    <article class="hj-jogo" style="--h:${g.hue}">
      <a class="hj-capa" href="${esc(g.href)}" aria-label="${esc(tx('hj_abrir', g.jogo))}">
        <span class="hj-capa-img"><span class="poster-glyph" aria-hidden="true">${esc(g.jogo.charAt(0))}</span>${foto}</span>
        <span class="hj-capa-info">
          <b class="hj-nome">${esc(g.jogo)}</b>
          <span class="hj-meta mono">${esc(g.plataformas.join(' · '))} · ${g.horasMin}–${g.horasMax}h · ${g.perdiveis} ${tx('c_perd')}</span>
        </span>
      </a>
      <div class="hj-trilho" role="region" tabindex="0" aria-label="${esc(tx('hj_trilho', g.jogo))}">${blocos.map(blocoHub).join('')}</div>
    </article>`
}

function renderHub() {
  return `
    <div class="hj">
      <div class="sec-head hj-head">
        <div><p class="kicker">${tx('hj_k')}</p><h2 class="h2">${tx('hj_h')}</h2></div>
        <button class="link" data-action="tab" data-tab="guias">${tx('s_ver')}</button>
      </div>
      ${GUIAS.map((g, i) => ({ g, i, d: ((JOGOS[g.id] || {}).atualizado || '') })).sort((a, b) => (b.d > a.d ? 1 : b.d < a.d ? -1 : a.i - b.i)).slice(0, LIMITES.homeJogos).map(x => linhaJogo(x.g)).join('')}
      <aside class="hj-aviso" aria-label="${esc(tx('hj_av_t'))}"><span class="hj-aviso-i" aria-hidden="true">i</span><div><b>${tx('hj_av_t')}</b><p>${tx('hj_av_d', LIMITES.homeJogos)}</p></div><button class="link" type="button" data-action="tab" data-tab="guias">${tx('hj_av_b')}</button></aside>
      <div class="hj-slot"><b aria-hidden="true">···</b> ${tx('slot_h')}</div>
    </div>`
}

function hojeISO() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function quando(iso) {
  if (!iso) return tx('t_preparo')
  const [y, m, d] = iso.split('-').map(Number)
  const hoje = new Date()
  const dias = Math.round((new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) - new Date(y, m - 1, d)) / 864e5)
  if (dias <= 0) return tx('t_hoje')
  if (dias === 1) return tx('t_ontem')
  if (dias < 7) return tx('t_dias', dias)
  if (dias < 30) return tx('t_semanas', Math.floor(dias / 7))
  return new Date(y, m - 1, d).toLocaleDateString(loc())
}

const ICONE_IMG = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg>'

function imagemNv(n) {
  const foto = n.img
    ? `<img src="${esc(n.img)}" alt="${n.imgAlt ? esc(L(n.imgAlt)) : ''}" loading="lazy" decoding="async" onerror="this.remove()">`
    : ''
  return `<span class="nv-img">${ICONE_IMG}${foto}</span>`
}

function cardNovidade(n, i) {
  const badge = BADGES_NV[n.badge] !== undefined ? n.badge : 'novo'
  const novoPraVoce = UI.vistoAnterior && n.data && n.data > UI.vistoAnterior
  const miolo = `
    ${imagemNv(n)}
    <span class="nv-top">
      <span class="pill ${BADGES_NV[badge]}">${tx('b_' + badge)}</span>
      <span class="mono">${tx('tp_' + (n.tipo || 'site'))} · ${quando(n.data)}</span>
      ${novoPraVoce ? `<span class="nv-dot" title="${esc(tx('nv_dot'))}"></span>` : ''}
    </span>
    <b class="nv-titulo">${esc(L(n.titulo))}</b>
    <span class="nv-texto">${esc(L(n.texto))}</span>
    <span class="nv-go" aria-hidden="true">→</span>`
  return n.href
    ? `<a class="nv-card" style="--i:${i}" href="${esc(n.href)}">${miolo}</a>`
    : `<button class="nv-card" style="--i:${i}" data-action="tab" data-tab="${esc(n.aba || 'home')}">${miolo}</button>`
}

function renderNovidades() {
  $('nv-filtros').innerHTML = FILTROS_NV.map(f =>
    `<button class="chip ${UI.nv === f.id ? 'on' : ''}" data-action="nv" data-v="${f.id}">${esc(L(f.rot))}</button>`).join('')
  const ordem = NOVIDADES.slice().sort((a, b) => (b.data || '') > (a.data || '') ? 1 : (b.data || '') < (a.data || '') ? -1 : 0)
  const lista = ordem.filter(n => UI.nv === 'todas' || n.tipo === UI.nv).slice(0, UI.nv === 'todas' ? LIMITES.novidadesTudo : LIMITES.novidades)
  $('nv-lista').innerHTML = lista.length
    ? lista.map(cardNovidade).join('')
    : `<p class="vazio" style="flex:1 0 100%">${tx('nv_vazio')}</p>`
}

function renderDicaDia() {
  const d = DICAS[UI.dica % DICAS.length]
  const fav = !!ESTADO.favs[d.id]
  $('dica-dia').innerHTML = `
    <p class="kicker">${tx('dd_k')}</p>
    <h3>${esc(L(d.titulo))}</h3>
    <p>${esc(L(d.texto))}</p>
    <div class="row">
      <button class="btn ghost" data-action="outra">${tx('dd_outra')}</button>
      <button class="btn ghost" data-action="fav" data-id="${d.id}" aria-pressed="${fav}">${fav ? tx('dd_salva') : tx('dd_salvar')}</button>
    </div>`
}

function filtrarGuias() {
  let lista = GUIAS.filter(g => {
    if (UI.plat !== 'todas' && !g.plataformas.includes(UI.plat)) return false
    if (UI.dif === 'facil' && g.dif > 3) return false
    if (UI.dif === 'media' && (g.dif < 4 || g.dif > 6)) return false
    if (UI.dif === 'dificil' && g.dif < 7) return false
    if (UI.q.trim() && !casa([g.jogo, allL(g.subtitulo), allL(g.resumo), allL(g.tags)].join(' '), UI.q)) return false
    return true
  })
  if (UI.ord === 'facil') lista = lista.slice().sort((a, b) => a.dif - b.dif)
  if (UI.ord === 'curto') lista = lista.slice().sort((a, b) => a.horasMin - b.horasMin)
  return lista
}

function filtrarDicas(q, cat) {
  return DICAS.filter(d => {
    if (cat === 'Salvas' && !ESTADO.favs[d.id]) return false
    if (cat !== 'Todas' && cat !== 'Salvas' && d.cat !== cat) return false
    return !q.trim() || casa([allL(d.titulo), allL(d.texto), allL(CATEGORIAS[d.cat].rot), d.jogo || ''].join(' '), q)
  })
}

function renderGuias() {
  const lista = filtrarGuias()
  const plats = ['todas', ...new Set(GUIAS.flatMap(g => g.plataformas))]
  $('g-plats').innerHTML = plats.map(p =>
    `<button class="chip ${UI.plat === p ? 'on' : ''}" data-action="plat" data-v="${esc(p)}">${p === 'todas' ? tx('g_plat_todas') : esc(p)}</button>`).join('')
  $('g-count').textContent = tx('g_cont', lista.length, GUIAS.length)
  $('g-aviso').textContent = tx('g_aviso')

  const semFiltro = !UI.q.trim() && UI.plat === 'todas' && UI.dif === 'todas'
  const cols = colunasGrade()
  const vis = lista.slice(0, UI.limite)
  const comSlot = semFiltro && lista.length <= UI.limite
  const ocupadas = vis.length + (comSlot ? 1 : 0)
  const vazias = Math.max(LIMITES.linhasMin, Math.ceil(ocupadas / cols)) * cols - ocupadas
  $('g-grid').innerHTML = lista.length
    ? vis.map(cardTile).join('') + (comSlot ? tileSlot() : '') + Array.from({ length: vazias }, tileVazio).join('')
    : `<div class="vazio" style="grid-column:1/-1"><p>${tx('g_vazio')}</p><button class="btn ghost" data-action="limpar">${tx('g_limpar')}</button></div>`

  const restam = lista.length - UI.limite
  $('g-mais').innerHTML = restam > 0
    ? `<button class="btn ghost" type="button" data-action="mais">${tx('gu_mais', restam)}</button>`
    : ''

  const rel = UI.q.trim() ? filtrarDicas(UI.q, 'Todas').slice(0, 4) : []
  $('g-dicas').innerHTML = rel.length
    ? `<section class="sec"><p class="kicker">${tx('g_rel')}</p><div class="tips">${rel.map(cardDica).join('')}</div></section>`
    : ''
}

/* Lista "Todos os guias" em tabuleiro: quadrados compactos; casas vazias completam as linhas */
const MQ_COLS = [[window.matchMedia('(max-width: 560px)'), 2], [window.matchMedia('(max-width: 860px)'), 3]]   // espelha o CSS
const colunasGrade = () => { for (const [mq, n] of MQ_COLS) if (mq.matches) return n; return 5 }

/* Aviso "Em progresso": faixa no topo da imagem do guia, preenchida até a porcentagem (g.progresso). Sem g.progresso ou com 100, não aparece. */
/* A porcentagem do guia é a MÉDIA do % descoberto das abas do jogo (JOGOS[id].descoberto, ver jPct). Jogo sem 'descoberto' usa o g.progresso escrito à mão. */
const progGuia = g => { const m = progMedia(g.id); return m !== null ? m : g.progresso }
const emProgresso = g => progGuia(g) != null && progGuia(g) < 100
const progFlag = g => emProgresso(g)
  ? `<em class="prog" style="--p:${Math.max(0, Math.min(100, +progGuia(g)))}%" role="img" aria-label="${esc(tx('c_prog_aria', Math.round(progGuia(g))))}"><b>${tx('c_prog')}</b><i>${Math.round(progGuia(g))}%</i></em>`
  : ''

function cardTile(g, i) {
  const foto = g.img ? `<img src="${esc(g.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''
  const medidor = Array.from({ length: 10 }, (_, k) => `<i class="${k < g.dif ? 'on' : ''}"></i>`).join('')
  return `
    <a class="tile" style="--h:${g.hue};--i:${i || 0}" href="${esc(g.href)}">
      <span class="tile-img"><span class="poster-glyph" aria-hidden="true">${esc(g.jogo.charAt(0))}</span>${foto}</span>
      ${progFlag(g)}
      ${g.platina ? `<span class="pill plat tile-badge">${tx('c_plat')}</span>` : ''}
      <span class="tile-info">
        <b class="tile-nome">${esc(g.jogo)}</b>
        <span class="tile-meta">${esc(g.plataformas.join(' · '))} · ${g.horasMin}–${g.horasMax}h · ${g.perdiveis} ${tx('c_perd')}</span>
        <span class="meter" data-t="${tier(g.dif)}" role="img" aria-label="${esc(tx('c_aria_dif', g.dif))}">${medidor}</span>
      </span>
    </a>`
}
const tileSlot = () => `
    <div class="tile tile-slot">
      <span class="tile-plus" aria-hidden="true">···</span>
      <span class="tile-nome">${tx('slot_h')}</span>
    </div>`
const tileVazio = () => '<span class="tile tile-vazio" aria-hidden="true"></span>'

function iniciarGrade() {
  MQ_COLS.forEach(([mq]) => mq.addEventListener('change', renderGuias))
}

/* Faixa "Últimos guias": capas verticais com rolagem lateral */
function cardPoster(g, i) {
  const foto = g.img ? `<img src="${esc(g.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''
  return `
    <a class="poster" style="--h:${g.hue};--i:${i || 0}" href="${esc(g.href)}">
      <span class="poster-img">
        <span class="poster-glyph" aria-hidden="true">${esc(g.jogo.charAt(0))}</span>${foto}
        ${progFlag(g)}
        ${g.platina ? `<span class="pill plat poster-badge">${tx('c_plat')}</span>` : ''}
      </span>
      <span class="poster-info">
        <b class="poster-nome">${esc(g.jogo)}</b>
        <span class="poster-meta">${esc(g.plataformas.join(' · '))} · ${g.dif}/10</span>
      </span>
    </a>`
}

function atualizarRail() {
  const r = $('g-ultimos'), ctl = $('ult-ctl')
  if (!r || !ctl) return
  ctl.hidden = !(r.scrollWidth - r.clientWidth > 4)
  const [ant, prox] = ctl.querySelectorAll('.rail-btn')
  ant.disabled = r.scrollLeft <= 4
  prox.disabled = r.scrollLeft >= r.scrollWidth - r.clientWidth - 4
}

function renderUltimos() {
  $('g-ultimos').innerHTML = GUIAS.slice(0, LIMITES.ultimos).map(cardPoster).join('') + `
    <div class="poster poster-slot">
      <span class="poster-img" aria-hidden="true">···</span>
      <span class="poster-info"><b class="poster-nome">${tx('slot_h')}</b></span>
    </div>`
  atualizarRail()
}

function iniciarRail() {
  const r = $('g-ultimos')
  r.addEventListener('scroll', atualizarRail, { passive: true })
  if ('ResizeObserver' in window) new ResizeObserver(atualizarRail).observe(r)
  window.addEventListener('resize', atualizarRail)
}

/* Dicas rápidas: stories com barra de progresso segmentada e avanço automático.
   O avanço é guiado pelo fim da animação CSS da barra (rp-enche): pausar = pausar a animação. */
let rapidaI = 0, rapidaPausa = false, rapidaMs = 0   // rapidaMs: tempo na dica atual, só usado quando o aparelho pede menos animação

const ICONE_PAUSA = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>'
const ICONE_PLAY  = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>'

function itensRapidos() {
  const base = RAPIDAS.length ? RAPIDAS : DICAS.slice().reverse()     // sem RAPIDAS ditadas, usa as dicas mais novas
  return base.slice(0, LIMITES.rapidas)
}

function hueRapida(r) {
  const g = GUIAS.find(x => x.jogo === r.jogo)
  if (g) return g.hue
  const k = Object.keys(CATEGORIAS).indexOf(r.cat)
  return (Math.max(k, 0) * 67 + 15) % 360
}

function renderRapidas() {
  const box = $('d-rapidas')
  if (!box) return
  const itens = itensRapidos(), n = itens.length
  box.parentElement.hidden = !n
  if (!n) { box.innerHTML = ''; return }
  rapidaI = Math.min(rapidaI, n - 1)
  box.style.setProperty('--rp-dur', LIMITES.rapidasSeg + 's')
  box.classList.toggle('rp-uma', n < 2)
  const slides = itens.map((r, i) => {
    const cat = CATEGORIAS[r.cat]
    const foto = r.img ? `<img src="${esc(r.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''
    const rotulo = [cat ? L(cat.rot) : '', r.jogo || ''].filter(Boolean).join(' · ')
    const letra = (r.jogo || (cat ? L(cat.rot) : '') || '#').charAt(0)
    return `
      <article class="rp-slide" style="--h:${hueRapida(r)};--c:${cat ? cat.cor : 'var(--ember)'}" role="group" aria-roledescription="slide" aria-label="${i + 1} / ${n}">
        <span class="rp-img"><span class="rp-glyph" aria-hidden="true">${esc(letra)}</span>${foto}</span>
        <div class="rp-txt">
          <span class="rp-meta mono">${esc(rotulo)}</span>
          <h3 class="rp-titulo">${esc(L(r.titulo))}</h3>
          <p class="rp-trecho">${esc(L(r.texto))}</p>
        </div>
      </article>`
  }).join('')
  const segs = itens.map((_, i) =>
    `<button class="rp-seg" type="button" data-action="rapidair" data-i="${i}" aria-label="${esc(tx('rp_ir', i + 1))}"><i></i></button>`).join('')
  box.innerHTML = `
    <div class="rp-stage">
      ${slides}
      <div class="rp-barra">${segs}</div>
      <span class="rp-cont mono" aria-hidden="true"></span>
      <button class="rp-pausa" type="button" data-action="rapidapausa"></button>
      <button class="rp-btn rp-prev" type="button" data-action="rapida" data-dir="-1" aria-label="${esc(tx('rp_prev'))}">←</button>
      <button class="rp-btn rp-next" type="button" data-action="rapida" data-dir="1" aria-label="${esc(tx('rp_next'))}">→</button>
    </div>`
  marcarRapida()
}

function marcarRapida() {
  const box = $('d-rapidas')
  if (!box) return
  const slides = box.querySelectorAll('.rp-slide'), segs = box.querySelectorAll('.rp-seg')
  slides.forEach((s, i) => { s.classList.toggle('on', i === rapidaI); s.setAttribute('aria-hidden', i === rapidaI ? 'false' : 'true') })
  segs.forEach((s, i) => {
    s.classList.toggle('feito', i < rapidaI); s.classList.toggle('on', i === rapidaI)
    if (i === rapidaI) s.setAttribute('aria-current', 'true'); else s.removeAttribute('aria-current')
  })
  const cont = box.querySelector('.rp-cont'), bp = box.querySelector('.rp-pausa')
  if (cont) cont.textContent = `${rapidaI + 1} / ${slides.length}`
  if (bp) {
    bp.innerHTML = rapidaPausa ? ICONE_PLAY : ICONE_PAUSA
    bp.setAttribute('aria-pressed', rapidaPausa)
    bp.setAttribute('aria-label', tx(rapidaPausa ? 'rp_retomar' : 'rp_pausar'))
  }
  box.classList.toggle('pausada', rapidaPausa)
  box.setAttribute('aria-live', rapidaPausa ? 'polite' : 'off')
}

function irRapida(i) {
  const n = document.querySelectorAll('#d-rapidas .rp-slide').length
  if (!n) return
  rapidaI = (i + n) % n
  rapidaMs = 0
  marcarRapida()
}

function iniciarRapidas() {
  const box = $('d-rapidas')
  box.addEventListener('animationend', e => { if (e.animationName === 'rp-enche') irRapida(rapidaI + 1) })
  let x0 = null                                    // toque: segurar pausa, arrastar para o lado troca
  box.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') { box.classList.add('segurando'); x0 = e.clientX } })
  const soltar = e => {
    box.classList.remove('segurando')
    if (x0 !== null && e.type === 'pointerup' && Math.abs(e.clientX - x0) > 48) irRapida(rapidaI + (e.clientX < x0 ? 1 : -1))
    x0 = null
  }
  box.addEventListener('pointerup', soltar)
  box.addEventListener('pointercancel', soltar)
  box.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); irRapida(rapidaI - 1) }
    if (e.key === 'ArrowRight') { e.preventDefault(); irRapida(rapidaI + 1) }
  })
  /* Aparelhos com "reduzir movimento" desligam a animação da barra (e com ela o avanço por animationend): a dica ficava travada na primeira.
     Nesse caso um relógio troca a dica sozinho, respeitando as mesmas pausas (botão, mouse em cima, dedo, foco, fora da tela). */
  const reduz = window.matchMedia('(prefers-reduced-motion: reduce)')
  setInterval(() => {
    if (!reduz.matches || document.hidden || rapidaPausa || box.parentElement.hidden || box.classList.contains('rp-uma')) return
    if (box.matches('.segurando, .fora') || box.matches(':hover') || box.querySelector(':focus-visible')) return
    rapidaMs += 250
    if (rapidaMs >= LIMITES.rapidasSeg * 1000) irRapida(rapidaI + 1)
  }, 250)
  if ('IntersectionObserver' in window)            // fora da tela, a barra não corre
    new IntersectionObserver(([en]) => box.classList.toggle('fora', !en.isIntersecting), { threshold: 0.35 }).observe(box)
}

function renderDicas() {
  const cats = ['Todas', 'Salvas', ...Object.keys(CATEGORIAS)]
  const rotulo = c => c === 'Todas' ? tx('cat_todas') : c === 'Salvas' ? tx('cat_salvas') : L(CATEGORIAS[c].rot)
  $('d-cats').innerHTML = cats.map(c =>
    `<button class="chip ${UI.cat === c ? 'on' : ''}" data-action="cat" data-v="${esc(c)}">${esc(rotulo(c))}</button>`).join('')
  const lista = filtrarDicas(UI.dq, UI.cat)
  // visão padrão (sem busca nem filtro): só as mais recentes, da mais nova para a mais antiga; com busca/filtro: todas as que casam
  const padrao = !UI.dq.trim() && UI.cat === 'Todas'
  const mostrar = padrao ? lista.slice().reverse().slice(0, LIMITES.dicas) : lista
  $('d-count').textContent = padrao && lista.length > mostrar.length ? tx('d_recentes', mostrar.length, lista.length) : tx('d_cont', lista.length)
  const chave = mostrar.map(d => d.id).join()
  const pos = $('d-grid').dataset.chave === chave ? $('d-grid').scrollLeft : 0     // favoritar/trocar idioma mantém a posição
  $('d-grid').innerHTML = mostrar.length
    ? mostrar.map(cardDicaImg).join('')
    : `<div class="vazio">${UI.cat === 'Salvas' ? tx('d_vazio_salvas') : (UI.cat !== 'Todas' && !UI.dq.trim()) ? tx('d_vazio_cat') : tx('d_vazio')}</div>`
  $('d-grid').dataset.chave = chave
  $('d-grid').scrollLeft = pos
  atualizarRailD()
}

function renderMetodo() {
  $('m-manifesto').innerHTML = L(MANIFESTO)
  const caixa = (a, i) => `<div class="box" style="--i:${i}"><span class="n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(L(a.t))}</h3><p>${esc(L(a.d))}</p></div>`
  $('m-principios').innerHTML = PRINCIPIOS.map(caixa).join('')
  $('m-forcas').innerHTML = FORCAS.map(caixa).join('')
  $('m-classes').innerHTML = CLASSES_TROFEU.map((c, i) =>
    `<div class="box" style="--i:${i}"><span class="pill ${c.cor}">${esc(L(c.nome))}</span><p>${esc(L(c.d))}</p></div>`).join('')
  renderEscala()
}

function renderEscala() {
  $('m-escala').innerHTML = `
    <div class="escala-row" role="group" aria-label="${esc(tx('m_escala_aria'))}">
      ${ESCALA.map((_, i) => `<button class="num ${UI.escala === i + 1 ? 'on' : ''}" data-action="escala" data-v="${i + 1}" aria-pressed="${UI.escala === i + 1}">${i + 1}</button>`).join('')}
    </div>
    <div class="escala-desc"><b>${UI.escala}/10</b><p>${esc(L(ESCALA[UI.escala - 1]))}</p></div>`
}

function renderFila() {
  const f = ESTADO.fila
  const plats = f.filter(x => x.status === 'platinado').length
  $('fila-resumo').textContent = tx('f_resumo', plats, f.length)
  $('fila-bar').style.transform = `scaleX(${f.length ? plats / f.length : 0})`
  const ordem = id => STATUS_FILA.findIndex(s => s.id === id)
  $('fila-lista').innerHTML = f.length
    ? f.slice().sort((a, b) => ordem(a.status) - ordem(b.status)).map(x => `
        <li class="fila-item" data-s="${esc(x.status)}">
          <span class="fila-nome">${esc(x.nome)}</span>
          <select data-action="st" data-id="${esc(x.id)}" aria-label="${esc(tx('f_aria_st', x.nome))}">
            ${STATUS_FILA.map(s => `<option value="${s.id}" ${s.id === x.status ? 'selected' : ''}>${esc(L(s.nome))}</option>`).join('')}
          </select>
          <button class="x" data-action="fila-rm" data-id="${esc(x.id)}" aria-label="${esc(tx('f_aria_rm', x.nome))}">×</button>
        </li>`).join('')
    : `<li class="vazio">${tx('f_vazio')}</li>`
  renderStats()
}

function renderSobre() {
  $('s-texto').innerHTML = SOBRE_TEXTO.map(p => `<p>${esc(L(p))}</p>`).join('')
  const links = SOCIAIS.slice()
  if (SITE.email) links.push({ nome: 'E-mail', url: 'mailto:' + SITE.email })
  $('s-links').innerHTML = links.map(l => l.url
    ? `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(L(l.nome))} <span aria-hidden="true">→</span></a></li>`
    : `<li><span>${esc(L(l.nome))} <em>${tx('s_breve')}</em></span></li>`).join('')
  $('s-faq').innerHTML = FAQ.map(f => `<details><summary>${esc(L(f.q))}</summary><p>${esc(L(f.a))}</p></details>`).join('')
  $('foot-a').textContent = `© ${new Date().getFullYear()} ${L(SITE.nome)}`
}

/* ════════════════════════════════════════════
   IDIOMA — aplica textos estáticos e re-renderiza tudo
   ════════════════════════════════════════════ */
function aplicarIdioma() {
  document.documentElement.lang = LANG === 'en' ? 'en' : 'pt-BR'
  document.title = tx('titulo_pag')
  document.querySelector('meta[name="description"]').setAttribute('content', tx('desc_pag'))

  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = tx(el.dataset.i18n) })
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = tx(el.dataset.i18nHtml) })
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = tx(el.dataset.i18nPh) })
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', tx(el.dataset.i18nAria)) })

  $('brand-name').textContent = L(SITE.nome)
  ABAS.forEach(a => { BOTOES[a.id].textContent = L(a.rot) })
  document.querySelectorAll('.lang-btn').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === LANG))

  const sel = $('fila-form').elements.status
  const atual = sel.value
  sel.innerHTML = STATUS_FILA.map(s => `<option value="${s.id}">${esc(L(s.nome))}</option>`).join('')
  if (atual) sel.value = atual

  renderHome(); renderUltimos(); renderGuias(); renderRapidas(); renderDicas(); renderFila(); renderSobre()
  if (BUSCA.aberta) renderBusca()
  if ($('panel-jogo').classList.contains('active')) renderJogo()
}

/* ════════════════════════════════════════════
   NAVEGAÇÃO POR ABAS
   ════════════════════════════════════════════ */
function showTab(nome) {
  if (nome.indexOf('jogo/') === 0) return showJogo(nome.slice(5))
  trParar(); itFechar()
  $('panel-jogo').classList.remove('active')
  if (document.title.indexOf(tx('titulo_pag')) !== 0) document.title = tx('titulo_pag')
  if (!PAINEIS[nome]) nome = 'home'
  ABAS.forEach(a => {
    const on = a.id === nome
    PAINEIS[a.id].classList.toggle('active', on)
    BOTOES[a.id].classList.toggle('active', on)
    BOTOES[a.id].setAttribute('aria-selected', on)
  })
  BOTOES[nome].scrollIntoView({ inline: 'center', block: 'nearest' })
  window.scrollTo(0, 0)
  try { history.replaceState(null, '', '#' + nome) } catch (e) {}
}

/* ════════════════════════════════════════════
   EVENTOS — delegação no document
   ════════════════════════════════════════════ */
function sincronizarBusca() { $('g-q').value = UI.q; $('g-dif').value = UI.dif; $('g-ord').value = UI.ord }
