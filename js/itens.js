'use strict'

/* ════════════════════════════════════════════
   EQUIPAMENTOS / ARMADURAS — grade de ícones por categoria, filtros e pop-up de detalhes (mesma base nas duas páginas)
   Dados: JOGOS[id].equipamentos e JOGOS[id].armaduras. Campos opcionais de cada item:
     img: 'imagens/itens/arquivo.png' (PNG do item; sem img aparece o ícone padrão)
     equipamentos: tipo ('Blunt'|'Sharp'|'Heavy Blunt'|'Heavy Sharp'|'Science'|'Overworld'), dano, dur, peso, municao, cap, reparo, nota { pt, en }
     armaduras: arm, frio, calor, dur, peso, reparo, slots (mochila), reducao (% de peso), res { pt, en }, efeito { pt, en }, nota { pt, en }
   ════════════════════════════════════════════ */
/* Sistemas base reaproveitados pelas páginas que cada jogo liga em secoesExtra: grade de itens (como Objetos), texto corrido (como Jogabilidade),
   fichas (como Personagens) e páginas por parte (como o Guia). Cada página usa um só sistema. */
const IT_GEN = ['objetos', 'colecionaveis', 'animais', 'veiculos', 'propriedades']
const TXT_SECS = ['policia', 'atributos', 'personalizacao', 'negocios', 'modos', 'dlcs', 'evolucoes', 'recompensas', 'arcanas']
const FICHA_SECS = ['relacionamento']
const PARTES_SECS = ['atividades', 'segredos', 'propriedades']
const IT_CATS = {
  equipamentos: ['melee', 'ranged', 'ammo', 'throw', 'shield'],
  armaduras: ['headlamp', 'head', 'chest', 'arms', 'legs', 'backpack', 'suit', 'trinket', 'watch', 'hacker'],
  objetos: ['recurso'], colecionaveis: [], animais: [], veiculos: [], propriedades: []
}
const IT_CHAVE = { equipamentos: 'cat', armaduras: 'slot', objetos: 'cat', colecionaveis: 'cat', animais: 'cat', veiculos: 'cat', propriedades: 'cat' }
const IT_UI = {}
const IT_POP = { aberto: false, sec: '', lista: [], pos: 0, voltar: null }

Object.assign(JT.pt.cats, { ammo: 'Munição' })
Object.assign(JT.en.cats, { ammo: 'Ammo' })
Object.assign(JT.pt, { voltar_dicas: '← Dicas', ler_dica: 'Ler a dica →', mais_dicas: 'Outras dicas', dica_ant: '← dica anterior', dica_prox: 'próxima dica →', dicas_intro: 'Cada dica abre em uma página com o passo a passo completo.' })
Object.assign(JT.en, { voltar_dicas: '← Tips', ler_dica: 'Read the tip →', mais_dicas: 'More tips', dica_ant: '← previous tip', dica_prox: 'next tip →', dicas_intro: 'Each tip opens on a page with the full walkthrough.' })
Object.assign(JT.pt, { objcats: { recurso: 'Recursos e subcomponentes' }, gcats: { colecionaveis: { desafio: 'Desafios' }, animais: { estudo: 'Estudo' }, veiculos: { escaneamento: 'Escaneamento' }, propriedades: {} } })
Object.assign(JT.en, { objcats: { recurso: 'Resources and Sub-components' }, gcats: { colecionaveis: { desafio: 'Challenges' }, animais: { estudo: 'Study' }, veiculos: { escaneamento: 'Scanning' }, propriedades: {} } })
Object.assign(JT.pt, { perdx: { abrir: 'Ver o passo a passo ▾', fonte: 'Fonte:', nota: 'Toque em um card para abrir o passo a passo. Segundo relatos de jogadores no Steam, fora as entradas do Registro nada fica bloqueado de vez; os avisos servem para você não refazer trechos.' } })
Object.assign(JT.en, { perdx: { abrir: 'See the step by step ▾', fonte: 'Source:', nota: 'Tap a card to open its step by step. According to Steam player reports, apart from Registry entries nothing is locked for good; the warnings are there so you do not have to redo sections.' } })
Object.assign(JT.pt.slots, { legs: 'Pernas', backpack: 'Mochila', suit: 'Traje completo', trinket: 'Berloque', watch: 'Relógio', hacker: 'Hackeador' })
Object.assign(JT.en.slots, { legs: 'Legs', backpack: 'Backpack', suit: 'Full body suit', trinket: 'Trinket', watch: 'Wristwatch', hacker: 'Hacking device' })
JT.pt.it = {
  busca_ph: 'Buscar item', busca_aria: 'Buscar item pelo nome', todas: 'Todos', ord: 'Ordenar',
  o_jogo: 'Ordem do jogo', o_nome: 'Nome', o_val_eq: 'Dano', o_val_ar: 'Armadura', o_peso: 'Peso',
  mostrando: 'Mostrando {n} de {t}', nenhum: 'Nenhum item com esses filtros.', limpar: 'Limpar filtros',
  dica: 'Toque na imagem de um item para ver os detalhes.', fechar: 'Fechar', ant: 'Item anterior', prox: 'Próximo item', wiki: 'Ver na Wiki →',
  c: { dano: 'dano', arm: 'arm.', peso: 'peso', slots: 'esp.', dur: 'dur.' },
  l: { tipo: 'Tipo', cat: 'Categoria', dano: 'Dano', municao: 'Munição', cap: 'Carregador', dur: 'Durabilidade', peso: 'Peso', reparo: 'Reparo', arm: 'Armadura', frio: 'Resist. ao frio', calor: 'Resist. ao calor', res: 'Resistência', slots: 'Espaços', reducao: 'Redução de peso' },
  tipos: { Blunt: 'Contundente', 'Heavy Blunt': 'Contundente pesada', Sharp: 'Cortante', 'Heavy Sharp': 'Cortante pesada', Science: 'Ciência', Overworld: 'Convencional' }
}
JT.en.it = {
  busca_ph: 'Search items', busca_aria: 'Search items by name', todas: 'All', ord: 'Sort',
  o_jogo: 'Game order', o_nome: 'Name', o_val_eq: 'Damage', o_val_ar: 'Armor', o_peso: 'Weight',
  mostrando: 'Showing {n} of {t}', nenhum: 'No items match these filters.', limpar: 'Clear filters',
  dica: 'Tap an item image to see its details.', fechar: 'Close', ant: 'Previous item', prox: 'Next item', wiki: 'See on the Wiki →',
  c: { dano: 'dmg', arm: 'arm.', peso: 'wt', slots: 'slots', dur: 'dur.' },
  l: { tipo: 'Type', cat: 'Category', dano: 'Damage', municao: 'Ammo', cap: 'Magazine', dur: 'Durability', peso: 'Weight', reparo: 'Repair', arm: 'Armor', frio: 'Cold resist', calor: 'Heat resist', res: 'Resistance', slots: 'Slots', reducao: 'Weight reduction' },
  tipos: { Blunt: 'Blunt', 'Heavy Blunt': 'Heavy blunt', Sharp: 'Sharp', 'Heavy Sharp': 'Heavy sharp', Science: 'Science', Overworld: 'Overworld' }
}

const itN = n => Number(n).toLocaleString(loc(), { maximumFractionDigits: 3 })
const itRotC = sec => IT_GEN.includes(sec) && sec !== 'objetos' ? (jt('gcats')[sec] || {}) : jt(sec === 'equipamentos' ? 'cats' : sec === 'objetos' ? 'objcats' : 'slots')
const itImg = (x, sec) => `<span class="it-img">${icoSec(sec)}${x.img ? `<img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onload="this.parentNode.classList.add('tem')" onerror="this.remove()">` : ''}</span>`

function itPrim(x, sec) {                         // o número de destaque do ícone: dano (equipamentos) ou armadura (armaduras); sem ele, espaços/peso/durabilidade
  if (sec === 'equipamentos') {
    if (x.dano != null) return ['dano', itN(x.dano)]
    if (x.peso != null) return ['peso', itN(x.peso)]
    if (x.dur != null) return ['dur', itN(x.dur)]
  } else {
    if (x.arm != null) return ['arm', itN(x.arm)]
    if (x.slots != null) return ['slots', '+' + x.slots]
    if (x.peso != null) return ['peso', itN(x.peso)]
  }
  return null
}

function itLinhas(x, sec) {                       // linhas de dados do pop-up, só as que o item tem
  const l = jt('it').l, tp = jt('it').tipos, r = []
  const add = (k, v) => { if (v != null && v !== '') r.push([l[k], v]) }
  const n = v => v != null ? itN(v) : null
  if (sec === 'equipamentos') {
    add('tipo', x.tipo ? (tp[x.tipo] || x.tipo) : ''); add('dano', n(x.dano)); add('municao', x.municao); add('cap', n(x.cap))
  } else if (IT_GEN.includes(sec)) {
    add('cat', itRotC(sec)[x.cat] || ''); add('tipo', x.tipo ? L(x.tipo) : '')
    ;(x.dados || []).forEach(r => { if (r && r[1] != null && r[1] !== '') r.push([L(r[0]), L(r[1])]) })
  } else {
    add('arm', n(x.arm)); add('frio', x.frio ? '+' + x.frio : null); add('calor', x.calor ? '+' + x.calor : null)
    add('res', x.res ? L(x.res) : null); add('slots', x.slots != null ? '+' + x.slots : null); add('reducao', x.reducao != null ? x.reducao + '%' : null)
  }
  add('dur', n(x.dur)); add('peso', n(x.peso)); add('reparo', x.reparo)
  return r
}

function itVisiveis(d, sec) {                     // itens que passam nos filtros, já agrupados por categoria e ordenados
  const U = IT_UI[sec], q = U.q.trim(), chave = IT_CHAVE[sec], rot = itRotC(sec)
  const val = x => (sec === 'equipamentos' ? x.dano : x.arm) != null ? (sec === 'equipamentos' ? x.dano : x.arm) : -1
  const pes = x => x.peso != null ? x.peso : 9999
  const cmp = {
    jogo: (a, b) => a.i - b.i,
    nome: (a, b) => a.x.nome.localeCompare(b.x.nome) || a.i - b.i,
    valor: (a, b) => val(b.x) - val(a.x) || a.i - b.i,
    peso: (a, b) => pes(a.x) - pes(b.x) || a.i - b.i
  }[U.ord] || ((a, b) => a.i - b.i)
  const todos = (d[sec] || []).map((x, i) => ({ x, i })).filter(({ x }) =>
    (U.cat === 'todas' || x[chave] === U.cat) && (!q || casa([x.nome, rot[x[chave]] || '', x.reparo || '', x.municao || ''].join(' '), q)))
  const ordem = IT_CATS[sec].concat([...new Set(todos.map(o => o.x[chave]))].filter(c => !IT_CATS[sec].includes(c)))
  return ordem.map(c => ({ c, itens: todos.filter(o => o.x[chave] === c).sort(cmp) })).filter(g => g.itens.length)
}

function itTile(x, i, sec) {
  const p = itPrim(x, sec), T = jt('it')
  const nome = esc(x.nome)
  return `<button class="it-tile" type="button" data-action="itabre" data-sec="${sec}" data-i="${i}" aria-haspopup="dialog" aria-label="${nome}${p ? ' — ' + T.c[p[0]] + ' ' + p[1] : ''}">
    ${itImg(x, sec)}<b class="it-nome">${nome}</b><span class="it-v">${p ? `<i>${T.c[p[0]]}</i><b>${p[1]}</b>` : ''}</span></button>`
}

function itCorpo(d, sec) {
  const T = jt('it'), gr = itVisiveis(d, sec), rot = itRotC(sec)
  const total = (d[sec] || []).length, n = gr.reduce((a, g) => a + g.itens.length, 0)
  return `<p class="tf-cont" aria-live="polite">${trofTpl(T.mostrando, { n, t: total })}</p>` + (n
    ? gr.map(g => `<h3 class="jv-sub mono">${esc(rot[g.c] || g.c)}<span class="it-n">${g.itens.length}</span></h3><div class="it-grade${IT_GEN.includes(sec) ? ' it-3' : ''}">${g.itens.map(o => itTile(o.x, o.i, sec)).join('')}</div>`).join('')
    : `<p class="jv-vazio">${T.nenhum} <button class="link" type="button" data-action="itlimpa">${T.limpar}</button></p>`)
}

function itPagina(d, sec) {
  const T = jt('it'), U = IT_UI[sec] || (IT_UI[sec] = { q: '', cat: 'todas', ord: 'jogo' })
  const chave = IT_CHAVE[sec], rot = itRotC(sec), lista = d[sec] || []
  const cats = IT_CATS[sec].concat([...new Set(lista.map(x => x[chave]))].filter(c => !IT_CATS[sec].includes(c))).filter(c => lista.some(x => x[chave] === c))
  const chip = (v, r, n) => `<button class="tf-chip" type="button" data-action="itcat" data-v="${esc(v)}" aria-pressed="${U.cat === v}">${esc(r)}<em>${n}</em></button>`
  const opcao = (v, r) => `<option value="${v}"${U.ord === v ? ' selected' : ''}>${r}</option>`
  return `<div class="it-wrap" id="it-wrap">
    <div class="tf-bar">
      <div class="tf-grupo" role="group" aria-label="${esc(jRot(sec))}">${chip('todas', T.todas, lista.length)}${cats.map(c => chip(c, rot[c] || c, lista.filter(x => x[chave] === c).length)).join('')}</div>
      <div class="tf-grupo">
        <input class="tf-busca" id="it-q" type="search" value="${esc(U.q)}" placeholder="${T.busca_ph}" aria-label="${T.busca_aria}" autocomplete="off">
        <label><span class="sr">${T.ord}</span><select class="it-ord" id="it-ord">${opcao('jogo', T.o_jogo)}${opcao('nome', T.o_nome)}${IT_GEN.includes(sec) ? '' : opcao('valor', sec === 'equipamentos' ? T.o_val_eq : T.o_val_ar) + opcao('peso', T.o_peso)}</select></label>
      </div>
    </div>
    <p class="jv-nota" style="margin:0">${T.dica}</p>
    <div id="it-corpo">${itCorpo(d, sec)}</div>
  </div>`
}

function itAtualizar() {
  const sec = JOGO_UI.sec, d = JOGOS[JOGO_UI.id]
  if (!d || !IT_UI[sec] || !$('it-corpo')) return
  $('it-corpo').innerHTML = itCorpo(d, sec)
  document.querySelectorAll('#it-wrap .tf-chip').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === IT_UI[sec].cat))
}

function itPopDesenhar(abrir) {
  const d = JOGOS[JOGO_UI.id], sec = IT_POP.sec, x = d[sec][IT_POP.lista[IT_POP.pos]], T = jt('it')
  const n = IT_POP.lista.length, linhas = itLinhas(x, sec)
  const wiki = d.wiki ? d.wiki + encodeURIComponent(x.nome.replace(/ /g, '_')) : ''
  let el = $('it-pop')
  if (!el) {
    const sbw = window.innerWidth - document.documentElement.clientWidth        // evita o salto da página ao sumir a barra de rolagem
    document.documentElement.style.paddingRight = sbw > 0 ? sbw + 'px' : ''
    document.documentElement.classList.add('it-aberto')
    document.body.insertAdjacentHTML('beforeend', '<div class="it-pop' + (IT_GEN.includes(sec) ? ' it-centro' : '') + '" id="it-pop" role="dialog" aria-modal="true" aria-labelledby="it-pop-t"></div>')
    el = $('it-pop')
  }
  el.classList.toggle('troca', !abrir)
  el.innerHTML = `<div class="it-fundo" data-action="itfechar"></div>
    <div class="it-caixa">
      <button class="it-x" type="button" data-action="itfechar" aria-label="${T.fechar}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <div class="it-cab">${itImg(x, sec)}<div><span class="mono it-cat">${esc(itRotC(sec)[x[IT_CHAVE[sec]]] || '')}</span><h3 class="it-tit" id="it-pop-t">${esc(x.nome)}</h3></div></div>
      ${linhas.length ? `<dl class="it-fatos">${linhas.map(r => `<div><dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd></div>`).join('')}</dl>` : ''}
      ${x.efeito ? `<p class="it-txt">${esc(L(x.efeito))}</p>` : ''}
      ${x.nota ? `<p class="it-txt">${esc(L(x.nota))}</p>` : ''}
      <div class="it-rod">
        ${n > 1 ? `<div class="it-nav"><button class="it-seta" type="button" data-action="itprev" aria-label="${T.ant}">←</button><span class="mono">${IT_POP.pos + 1} / ${n}</span><button class="it-seta" type="button" data-action="itnext" aria-label="${T.prox}">→</button></div>` : '<span></span>'}
        ${wiki ? `<a href="${esc(wiki)}" target="_blank" rel="noopener noreferrer">${T.wiki}</a>` : ''}
      </div>
    </div>`
  if (abrir) el.querySelector('.it-x').focus({ preventScroll: true })
}

function itAbrir(sec, i, voltar) {
  const d = JOGOS[JOGO_UI.id]
  let lista = itVisiveis(d, sec).flatMap(g => g.itens.map(o => o.i))
  let pos = lista.indexOf(i)
  if (pos < 0) { lista = [i]; pos = 0 }
  Object.assign(IT_POP, { aberto: true, sec, lista, pos, voltar })
  itPopDesenhar(true)
}

function itNav(dir, acao) {
  const n = IT_POP.lista.length
  if (!IT_POP.aberto || n < 2) return
  IT_POP.pos = (IT_POP.pos + dir + n) % n
  itPopDesenhar(false)
  const b = acao && document.querySelector(`#it-pop [data-action="${acao}"]`)
  if (b) b.focus({ preventScroll: true })
}

function itFechar() {
  if (!IT_POP.aberto) return
  IT_POP.aberto = false
  const el = $('it-pop'); if (el) el.remove()
  document.documentElement.classList.remove('it-aberto')
  document.documentElement.style.paddingRight = ''
  const v = IT_POP.voltar; IT_POP.voltar = null
  if (v && document.contains(v)) v.focus({ preventScroll: true })
}
