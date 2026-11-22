'use strict'

/* ════════════════════════════════════════════
   TROFÉUS (estilo Exophase) — aba Troféus de cada jogo
   Dados: JOGOS[id].trofeus. Aqui só a montagem da tela: resumo, filtros, lista/mosaico e ficha de cada troféu.
   O "conquistado" que o leitor marca fica só no navegador dele (chave própria no localStorage).
   ════════════════════════════════════════════ */
const TROF_UI = { tipo: 'todos', estado: 'todos', so_perd: false, ord: 'jogo', dir: 1, vista: 'lista', q: '', aberto: '' }
const TROF_TIPOS = ['platina', 'ouro', 'prata', 'bronze']
const TROF_PONTOS = { platina: 300, ouro: 90, prata: 30, bronze: 15 }
const TROF_LS = 'diario-platina-trofeus-v1'
const TROF_FEITOS = {}
const trofTpl = (s, o) => String(s).replace(/\{(\w+)\}/g, (_, k) => o[k])
const trofKey = t => String(t.ex || '').replace(/^\d+-/, '') || String(L(t.nome)).toLowerCase().replace(/[^a-z0-9]+/g, '-')
const trofImg = t => !t.img ? '' : /\//.test(t.img) ? t.img : 'https://m.exophase.com/psn/awards/s/' + t.img + '.png'
const trofNum = (n, dec) => Number(n).toLocaleString(LANG === 'pt' ? 'pt-BR' : 'en-US', { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 })
const trofIcone = () => icoSec('trofeus')
const trofCheck = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polyline points="4 12.5 9.5 18 20 6.5"/></svg>'

function trofSet(gid) {                    // conjunto dos troféus marcados como conquistados neste jogo
  if (!TROF_FEITOS[gid]) {
    let arr = []
    try { const d = JSON.parse(localStorage.getItem(TROF_LS) || '{}'); if (Array.isArray(d[gid])) arr = d[gid] } catch (e) { /* storage indisponível: fica só na página */ }
    TROF_FEITOS[gid] = new Set(arr)
  }
  return TROF_FEITOS[gid]
}
function trofSalvar(gid) {
  try { const d = JSON.parse(localStorage.getItem(TROF_LS) || '{}'); d[gid] = [...trofSet(gid)]; localStorage.setItem(TROF_LS, JSON.stringify(d)) } catch (e) {}
}

function trofResumo(lista, feitos) {
  const T = jt('tf'), n = { platina: 0, ouro: 0, prata: 0, bronze: 0 }
  let pts = 0, exp = 0, ok = 0
  lista.forEach(t => { n[t.tipo]++; pts += TROF_PONTOS[t.tipo] || 0; exp += t.exp || 0; if (feitos.has(trofKey(t))) ok++ })
  const pc = lista.length ? Math.round(ok / lista.length * 100) : 0
  const caixa = (v, rot, tipo) => `<div class="tf-n"${tipo ? ` data-t="${tipo}"` : ''}>${tipo ? trofIcone() : ''}<b>${v}</b><span>${rot}</span></div>`
  return caixa(trofNum(lista.length), T.total) + TROF_TIPOS.map(k => caixa(n[k], T[k], k)).join('') + caixa(trofNum(pts), T.pontos) + caixa(trofNum(exp), T.exp)
    + `<div class="tf-prog" style="grid-column:1/-1"><div class="tf-prog-l"><span>${T.progresso}</span><b>${trofTpl(T.n_de, { n: ok, t: lista.length })} · ${pc}%</b></div><div class="tf-barra" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pc}"><i style="width:${pc}%"></i></div></div>`
}

function trofFiltrados(lista, feitos) {
  const U = TROF_UI, q = U.q.trim()
  const cmp = { jogo: (a, b) => a.i - b.i, nome: (a, b) => String(L(a.t.nome)).localeCompare(String(L(b.t.nome))) || a.i - b.i,
    pontos: (a, b) => (TROF_PONTOS[a.t.tipo] - TROF_PONTOS[b.t.tipo]) || a.i - b.i, raridade: (a, b) => ((a.t.pct == null ? 101 : a.t.pct) - (b.t.pct == null ? 101 : b.t.pct)) || a.i - b.i }[U.ord] || ((a, b) => a.i - b.i)
  return lista.map((t, i) => ({ t, i })).filter(({ t }) => {
    const f = feitos.has(trofKey(t))
    return (U.tipo === 'todos' || t.tipo === U.tipo) && (U.estado === 'todos' || (U.estado === 'feitos' ? f : !f)) && (!U.so_perd || t.perdivel)
      && (!q || casa([L(t.nome), L(t.desc)].join(' '), q))
  }).sort((a, b) => cmp(a, b) * U.dir)
}

function trofDetalhe(t, k) {
  const T = jt('tf'), pts = TROF_PONTOS[t.tipo] || 0
  const aviso = t.perdivel ? `<div class="tf-aviso" data-a="${t.perdivel === 'atencao' ? 'atencao' : 'perdivel'}"><span class="pill ${t.perdivel === 'atencao' ? 'warn' : 'bad'}">${jt(t.perdivel === 'atencao' ? 'atencao' : 'alerta')}</span><button class="link" type="button" data-action="jsec" data-sec="perdiveis">${T.ver_perd}</button></div>` : ''
  const fatos = [[T.tipo, T[t.tipo]], [T.pontos, trofNum(pts)], [T.rar_l, t.pct == null ? '—' : `${trofNum(t.pct, 2)}% · ${T.rar[t.rar]}`], [T.exp, t.exp == null && t.pct == null ? '—' : trofNum(t.exp || 0, 2)]]
  if (t.oculto) fatos.push([T.status, T.oculto])
  return `<li class="tf-dl" id="tf-d-${k}">
    <p>${esc(L(t.desc))}</p>
    <dl class="tf-fatos">${fatos.map(f => `<div><dt>${f[0]}</dt><dd>${esc(f[1])}</dd></div>`).join('')}</dl>
    ${aviso}
    <div class="tf-bloco"><h4>${T.como}</h4>${t.como ? `<p>${esc(L(t.como))}</p>` : `<p class="tf-vazio">${T.sem_guia}</p>`}</div>
    ${t.dica ? `<div class="tf-bloco"><h4>${T.dica}</h4><p>${esc(L(t.dica))}</p></div>` : ''}
    ${/^\d+-/.test(t.ex || '') ? `<p class="tf-fonte">${T.fonte} <a href="https://www.exophase.com/trophy/abiotic-factor-psn/${esc(t.ex)}" target="_blank" rel="noopener noreferrer">Exophase</a></p>` : ''}
  </li>`
}

function trofItem(t, feitos) {
  const T = jt('tf'), k = trofKey(t), f = feitos.has(k), aberto = TROF_UI.aberto === k, img = trofImg(t)
  const tags = (t.oculto ? `<span class="pill">${T.oculto}</span>` : '') + (t.perdivel ? `<span class="pill ${t.perdivel === 'atencao' ? 'warn' : 'bad'}">${jt(t.perdivel === 'atencao' ? 'atencao' : 'alerta')}</span>` : '')
  const nome = esc(L(t.nome))
  return `<li class="tf" data-t="${t.tipo}" data-k="${k}" data-feito="${f ? 1 : 0}" data-aberto="${aberto ? 1 : 0}"><div class="tf-row">
    <button class="tf-main" type="button" data-action="tabre" data-k="${k}" aria-expanded="${aberto}" aria-controls="tf-d-${k}">
      <span class="tf-img">${trofIcone()}${img ? `<img src="${esc(img)}" alt="" loading="lazy" decoding="async" width="64" height="64" onerror="this.remove()">` : ''}</span>
      <span><b class="tf-nome">${nome}</b><span class="tf-desc">${esc(L(t.desc))}</span><span class="tf-tags">${tags}</span></span>
      <span class="tf-tipo">${trofIcone()}<i>${T[t.tipo]}</i><em>${TROF_PONTOS[t.tipo]} ${T.pts}</em></span>
      ${t.pct == null ? `<span class="tf-rar" data-r=""><strong>—</strong><i>${LANG === 'pt' ? 'sem dados' : 'no data'}</i></span>` : `<span class="tf-rar" data-r="${t.rar}"><strong>${trofNum(t.pct, 2)}%</strong><i>${T.rar[t.rar]}</i><span class="tf-barra"><i style="width:${Math.max(2, Math.min(100, t.pct))}%"></i></span><em>${trofNum(t.exp || 0)} ${T.exp}</em></span>`}
    </button>
    <button class="tf-chk" type="button" data-action="tchk" data-k="${k}" aria-pressed="${f}" aria-label="${f ? T.desmarcar : T.marcar}: ${nome}" title="${f ? T.desmarcar : T.marcar}">${trofCheck}</button>
  </div></li>${aberto ? trofDetalhe(t, k) : ''}`
}

function trofCorpo(lista, feitos) {
  const T = jt('tf'), l = trofFiltrados(lista, feitos)
  return `<p class="tf-cont" aria-live="polite">${trofTpl(T.mostrando, { n: l.length, t: lista.length })}</p>`
    + (l.length ? `<ol class="tf-lista" id="tf-lista" data-vista="${TROF_UI.vista}">${l.map(x => trofItem(x.t, feitos)).join('')}</ol>`
      : `<p class="jv-vazio">${T.nenhum} <button class="link" type="button" data-action="tlimpa">${T.limpar}</button></p>`)
}

function trofBarra(lista) {
  const T = jt('tf'), U = TROF_UI
  const chip = (acao, v, rot, extra) => `<button class="tf-chip" type="button" data-action="${acao}" data-v="${v}" aria-pressed="false">${extra || ''}${rot}</button>`
  const cnt = k => `<em>${k === 'todos' ? lista.length : lista.filter(t => t.tipo === k).length}</em>`
  return `<div class="tf-bar">
    <div class="tf-grupo" role="group" aria-label="${T.tipo}">${['todos'].concat(TROF_TIPOS).map(k => chip('ttipo', k, k === 'todos' ? T.todos : T[k], k === 'todos' ? '' : trofIcone()).replace('</button>', cnt(k) + '</button>')).join('')}</div>
    <div class="tf-grupo" role="group" aria-label="${T.estado}">${chip('test', 'todos', T.todos)}${chip('test', 'faltam', T.faltam)}${chip('test', 'feitos', T.feitos)}${chip('tperd', '1', T.perd)}
      <input class="tf-busca" id="tf-q" type="search" value="${esc(U.q)}" placeholder="${T.busca_ph}" aria-label="${T.busca_aria}" autocomplete="off"></div>
    <div class="tf-grupo" role="group" aria-label="${T.ord}"><span class="mono">${T.ord}</span>${chip('tord', 'jogo', T.o_jogo)}${chip('tord', 'nome', T.o_nome)}${chip('tord', 'pontos', T.o_pontos)}${chip('tord', 'raridade', T.o_rar)}
      <span class="mono" style="margin-left:.6rem">${T.vista}</span>${chip('tvista', 'lista', T.v_lista)}${chip('tvista', 'mosaico', T.v_mosaico)}</div>
  </div>`
}

function trofMarcar() {                    // atualiza o estado (marcado ou não) dos botões de filtro
  const U = TROF_UI, raiz = $('tf-wrap'); if (!raiz) return
  const on = { ttipo: v => v === U.tipo, test: v => v === U.estado, tperd: () => U.so_perd, tord: v => v === U.ord, tvista: v => v === U.vista }
  raiz.querySelectorAll('.tf-chip').forEach(b => {
    b.setAttribute('aria-pressed', !!on[b.dataset.action](b.dataset.v))
    if (b.dataset.action === 'tord') { const a = b.querySelector('.dir'); if (a) a.remove(); if (b.dataset.v === U.ord && U.ord !== 'jogo') b.insertAdjacentHTML('beforeend', `<span class="dir" aria-hidden="true">${U.dir > 0 ? '▲' : '▼'}</span>`) }
  })
}

function trofAtualizar() {
  const gid = JOGO_UI.id, d = JOGOS[gid]; if (!d || !$('tf-corpo')) return
  const feitos = trofSet(gid)
  $('tf-resumo').innerHTML = trofResumo(d.trofeus, feitos)
  $('tf-corpo').innerHTML = trofCorpo(d.trofeus, feitos)
  trofMarcar()
}

function trofPagina(d) {
  const T = jt('tf'), feitos = trofSet(JOGO_UI.id)
  return `<div class="tf-wrap" id="tf-wrap">
    <div class="tf-resumo" id="tf-resumo">${trofResumo(d.trofeus, feitos)}</div>
    ${trofBarra(d.trofeus)}
    <div id="tf-corpo">${trofCorpo(d.trofeus, feitos)}</div>
    <p class="tf-fonte mono" style="font-size:.62rem;color:var(--mute)">${(d.notas && d.notas.trofeus) ? esc(L(d.notas.trofeus)) : T.nota}</p>
  </div>`
}

function trofRotulosDir(ord) {            // sentido padrão ao escolher uma ordenação: pontos = maior primeiro; raridade = mais raro primeiro
  return ord === 'pontos' ? -1 : 1
}
