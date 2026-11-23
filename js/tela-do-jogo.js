'use strict'

const jt = (k, ...a) => { const v = JT[LANG][k] !== undefined ? JT[LANG][k] : JT.pt[k]; return typeof v === 'function' ? v(...a) : v }
// Blocos do menu lateral da tela do jogo, agrupados por função. A ordem aqui é a ordem no menu.
const JGRUPOS = [
  { id: 'comeco', secs: ['visao', 'novidades', 'dicas', 'trilha', 'detalhes', 'curiosidades', 'vozes', 'desenvolvedores'] },
  { id: 'jogo',   secs: ['jogabilidade', 'modos', 'roteiro', 'mapas', 'bestiario', 'personagens'] },
  { id: 'equip',  secs: ['equipamentos', 'armaduras'] },
  { id: 'mundo',  secs: ['atividades', 'colecionaveis', 'segredos', 'missoes', 'organizacoes', 'servicos', 'animais'], extra: true },
  { id: 'sist',   secs: ['evolucoes', 'recompensas', 'arcanas', 'objetos', 'veiculos', 'profissoes', 'tracos', 'habilidades', 'gatepal', 'policia', 'negocios', 'personalizacao', 'propriedades', 'relacionamento', 'atributos'], extra: true },
  { id: 'lore',   secs: ['lore', 'compendio', 'hologramas', 'emails', 'registro', 'anteversos'], extra: true },
  { id: 'estr',   secs: ['gate101', 'metajogo', 'bugs'], extra: true },
  { id: 'trof',   secs: ['trofeus', 'perdiveis'] }
]
const JSECOES = JGRUPOS.flatMap(x => x.secs)
// Grupos com extra: true (tópicos extras da Wiki) só aparecem no menu dos jogos que listam a seção em JOGOS[id].secoesExtra
const WIKI_SECS = JGRUPOS.filter(x => x.extra).flatMap(x => x.secs)
const WIKI_PAG = { objetos: 'Objects', veiculos: 'Vehicles', profissoes: 'Jobs', tracos: 'Traits', habilidades: 'Skills', gatepal: 'GATEPal', lore: 'Lore', compendio: 'Compendium_Entries', hologramas: 'Holograms', emails: 'Emails', registro: 'Immurement_Registry', anteversos: 'Anteverse', gate101: 'GATE-101', bugs: 'Bugs_and_Glitches' }   // página da Wiki de cada tópico
const jSecsDe = (id, gr) => (gr.extra ? gr.secs.filter(k => ((JOGOS[id] || {}).secoesExtra || []).includes(k)) : gr.secs).filter(k => !((JOGOS[id] || {}).ocultas || []).includes(k))
const jRot = sec => { const o = ((JOGOS[JOGO_UI.id] || {}).rotulos || {})[sec]; return o ? L(o) : jt('s')[sec] }   // rótulo da aba: o jogo pode trocar o nome (rotulos: { equipamentos: { pt, en } })
/* % descoberto de cada aba do jogo (número pequeno no menu do guia). Só as abas do jogo: Visão geral, Novidades e Dicas não têm.
   Quem manda é o JOGOS[id].descoberto, valor de 0 a 100 que você escreve à mão conforme vai preenchendo a aba.
   Aba sem número ali usa o automático: 0% se estiver vazia, 5% se já tiver conteúdo. Jogo sem 'descoberto' não mostra nada. */
const JPCT_FORA = ['visao', 'novidades', 'dicas', 'modos']
function jPct(id, sec) {
  const d = JOGOS[id] || {}
  if (!d.descoberto || JPCT_FORA.includes(sec)) return null
  let v = d.descoberto[sec]
  if (typeof v !== 'number' || !isFinite(v)) v = jogoSecCont(id, sec) === 0 ? 0 : 5
  return Math.max(0, Math.min(100, Math.round(v)))
}
function progMedia(id) {                      // média do % de todas as abas do jogo que mostram porcentagem (as vazias entram com 0)
  const d = JOGOS[id]; if (!d || !d.descoberto) return null
  const v = JGRUPOS.flatMap(gr => jSecsDe(id, gr)).map(k => jPct(id, k)).filter(x => x !== null)
  return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null
}
const jSecOk = (id, sec) => { const gr = JGRUPOS.find(x => x.secs.includes(sec)); return !!gr && jSecsDe(id, gr).includes(sec) }
const JOGO_UI = { id: '', sec: 'visao', sub: '' }
const JCOR = { rose: 'var(--rose)', butter: 'var(--butter)' }

function jogoSecCont(id, sec) {            // quantos itens a seção tem (null = sem contador)
  const d = JOGOS[id] || {}, g = GUIAS.find(x => x.id === id)
  if (sec === 'roteiro') return (d.roteiro || []).length
  if (sec === 'trofeus') return (d.trofeus || []).length
  if (TXT_SECS.includes(sec)) return (d[sec] || []).length ? null : 0   // texto corrido: sem contador de itens
  if (WIKI_SECS.includes(sec)) return (d[sec] || []).length
  if (sec === 'perdiveis') return (d.perdiveis || []).length
  if (sec === 'dicas') return g ? DICAS.filter(x => x.jogo === g.jogo).length : 0
  if (sec === 'mapas') return (d.mapas || []).length
  if (sec === 'trilha') return (d.trilha || []).length
  if (sec === 'detalhes') return (d.detalhes || []).length
  if (['curiosidades', 'vozes', 'desenvolvedores'].includes(sec)) return (d[sec] || []).length
  if (sec === 'jogabilidade') return (d[sec] || []).length ? null : 0   // texto corrido: sem contador de itens
  if (['bestiario', 'personagens', 'equipamentos', 'armaduras', 'novidades'].includes(sec)) return (d[sec] || []).length
  return null
}

function jCardPerd(p) {
  /* Todo perdível mostra o troféu que ele representa (puxado de "trofeus" do mesmo guia, pelo código em p.trofeus): imagem, nome claro e a descrição curta;
     o passo a passo fica no card que expande. Sem troféu ligado, aparece a moldura vazia e o título do perdível no lugar do nome. Campos: trofeus: ['ex do troféu'], passos: [ { cap, t, sub: [ ] } ], fonte */
  const lista = (JOGOS[JOGO_UI.id] || {}).trofeus || [], T = jt('perdx')
  const trs = (p.trofeus || []).map(ex => lista.find(t => t.ex === ex)).filter(Boolean)
  const cab = `<header><span class="pill ${p.cor === 'butter' ? 'warn' : 'bad'}">${jt(p.cor === 'butter' ? 'atencao' : 'alerta')}</span><span class="mono">${esc(p.onde || '')}</span></header>`
  const imgs = (trs.length ? trs : [null]).map(t => `<span class="pd-tr">${trofIcone()}${t && trofImg(t) ? `<img src="${esc(trofImg(t))}" alt="" loading="lazy" decoding="async" width="64" height="64" onerror="this.remove()">` : ''}</span>`).join('')
  const nome = trs.length ? trs.map(t => esc(L(t.nome))).join(' · ') : esc(L(p.t))
  const topo = `<span class="pd-trs">${imgs}</span><span class="pd-cab">${cab}<h3>${nome}</h3><p class="pd-d">${esc(L(p.d))}</p>`
  if (!p.passos || !p.passos.length) return `<article class="jv-card pd-card" style="--cor:${JCOR[p.cor] || JCOR.rose}"><div class="pd-sum">${topo}</span></div></article>`
  return `<details class="jv-card pd-card" style="--cor:${JCOR[p.cor] || JCOR.rose}">
    <summary>${topo}<span class="pd-abrir mono">${T.abrir}</span></span></summary>
    ${trs.length ? `<p class="pd-tit mono">${esc(L(p.t))}</p>` : ''}
    <ol class="pd-passos">${p.passos.map(x => `<li class="pd-passo">${x.cap ? `<span class="pd-cap mono">${esc(L(x.cap))}</span>` : ''}<p>${esc(L(x.t))}</p>${x.sub && x.sub.length ? `<ul class="pd-sub">${x.sub.map(y => `<li>${esc(L(y))}</li>`).join('')}</ul>` : ''}</li>`).join('')}</ol>
    ${p.fonte ? `<p class="pd-fonte">${T.fonte} ${esc(L(p.fonte))}</p>` : ''}</details>`
}
const jVazio = () => `<p class="jv-vazio">${jt('preparo')}</p>`

/* Blocos novos da tela do jogo: cada seção tem um cartão próprio; a Visão geral reaproveita os mesmos cartões como prévia. */
/* Ícones dos blocos do guia: Phosphor Icons, versão duotone (licença MIT), embutidos como SVG, sem hotlink, então funcionam offline.
   Para trocar um ícone, substitua o conteúdo da chave (viewBox 0 0 256 256, cor vem de currentColor). */
const ICONES_SEC = {
  visao: '<path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm16,112L80,176l32-64,64-32Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"/>',
  jogabilidade: '<path d="M216.86,207.57a28,28,0,0,1-24.66-7.77L150.09,152H172a51.94,51.94,0,0,0,51.2-61h0l16.36,84.17A28,28,0,0,1,216.86,207.57Z" opacity="0.2"/><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"/>',
  bestiario: '<path d="M232,108a20,20,0,1,1-20-20A20,20,0,0,1,232,108ZM64,108a20,20,0,1,0-20,20A20,20,0,0,0,64,108ZM92,80A20,20,0,1,0,72,60,20,20,0,0,0,92,80Zm72,0a20,20,0,1,0-20-20A20,20,0,0,0,164,80Zm19.24,75.85A43.46,43.46,0,0,1,162.57,130a36,36,0,0,0-69.14,0,43.49,43.49,0,0,1-20.67,25.9,32,32,0,0,0,27.73,57.62,72.49,72.49,0,0,1,55,0,32,32,0,0,0,27.73-57.62Z" opacity="0.2"/><path d="M212,80a28,28,0,1,0,28,28A28,28,0,0,0,212,80Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,120ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM44,120a12,12,0,1,1,12-12A12,12,0,0,1,44,120ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm0-40A12,12,0,1,1,80,60,12,12,0,0,1,92,48Zm72,40a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,48Zm23.12,100.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72ZM168,208a24,24,0,0,1-9.45-1.93,80.14,80.14,0,0,0-61.19,0,24,24,0,0,1-20.71-43.26,51.22,51.22,0,0,0,24.46-30.67,28,28,0,0,1,53.78,0,51.27,51.27,0,0,0,24.53,30.71A24,24,0,0,1,168,208Z"/>',
  personagens: '<path d="M168,144a40,40,0,1,1-40-40A40,40,0,0,1,168,144ZM64,56A32,32,0,1,0,96,88,32,32,0,0,0,64,56Zm128,0a32,32,0,1,0,32,32A32,32,0,0,0,192,56Z" opacity="0.2"/><path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1,0-16,24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.85,8,57,57,0,0,0-98.15,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"/>',
  equipamentos: '<path d="M141.66,201,129,213.66a8,8,0,0,1-11.32,0L92,188,58.35,221.66a8,8,0,0,1-11.32,0L34.34,209a8,8,0,0,1,0-11.31L68,164,42.34,138.36a8,8,0,0,1,0-11.32L55,114.34a8,8,0,0,1,11.32,0l75.3,75.3A8,8,0,0,1,141.66,201Z" opacity="0.2"/><path d="M216,32H152a8,8,0,0,0-6.34,3.12l-64,83.21L72,108.69a16,16,0,0,0-22.64,0l-12.69,12.7a16,16,0,0,0,0,22.63l20,20-28,28a16,16,0,0,0,0,22.63l12.69,12.68a16,16,0,0,0,22.62,0l28-28,20,20a16,16,0,0,0,22.64,0l12.69-12.7a16,16,0,0,0,0-22.63l-9.64-9.64,83.21-64A8,8,0,0,0,224,104V40A8,8,0,0,0,216,32ZM52.69,216,40,203.32l28-28L80.68,188Zm70.61-8L48,132.71,60.7,120,136,195.31ZM208,100.06l-81.74,62.88L115.32,152l50.34-50.34a8,8,0,0,0-11.32-11.31L104,140.68,93.07,129.74,155.94,48H208Z"/>',
  armaduras: '<path d="M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z" opacity="0.2"/><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0Z"/>',
  roteiro: '<path d="M240,112l-33.62,37.35a8,8,0,0,1-5.94,2.65H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200.44a8,8,0,0,1,5.94,2.65Z" opacity="0.2"/><path d="M246,106.65,212.33,69.3A16,16,0,0,0,200.44,64H136V32a8,8,0,0,0-16,0V64H40A16,16,0,0,0,24,80v64a16,16,0,0,0,16,16h80v64a8,8,0,0,0,16,0V160h64.44a16,16,0,0,0,11.89-5.3L246,117.35A8,8,0,0,0,246,106.65ZM200.44,144H40V80H200.44l28.8,32Z"/>',
  mapas: '<path d="M160,72V216L96,184V40Z" opacity="0.2"/><path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"/>',
  novidades: '<path d="M224,64V184a16,16,0,0,1-16,16H32a16,16,0,0,0,16-16V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z" opacity="0.2"/><path d="M88,112a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm8,40h80a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,64V184a24,24,0,0,1-24,24H32A24,24,0,0,1,8,184.11V88a8,8,0,0,1,16,0v96a8,8,0,0,0,16,0V64A16,16,0,0,1,56,48H216A16,16,0,0,1,232,64Zm-16,0H56V184a23.84,23.84,0,0,1-1.37,8H208a8,8,0,0,0,8-8Z"/>',
  trofeus: '<path d="M200,48v63.1c0,39.7-31.75,72.6-71.45,72.9A72,72,0,0,1,56,112V48Z" opacity="0.2"/><path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"/>',
  perdiveis: '<path d="M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z" opacity="0.2"/><path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"/>',
  dicas: '<path d="M208,104a79.86,79.86,0,0,1-30.59,62.92A24.29,24.29,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6a24.11,24.11,0,0,0-9.3-19A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24A80,80,0,0,1,208,104Z" opacity="0.2"/><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"/>'
}
Object.assign(ICONES_SEC, {   // ícones dos tópicos extras da Wiki (Phosphor Icons duotone, MIT)
  evolucoes: '<path d="M128,40 L208,128 H160 V216 H96 V128 H48 Z" opacity="0.2"/><path d="M128,40 L208,128 H160 V216 H96 V128 H48 Z" fill="none" stroke="currentColor" stroke-width="16" stroke-linejoin="round" stroke-linecap="round"/>',
  recompensas: '<rect x="40" y="112" width="176" height="104" rx="8" opacity="0.2"/><rect x="32" y="72" width="192" height="40" rx="8" fill="none" stroke="currentColor" stroke-width="16" stroke-linejoin="round" stroke-linecap="round"/><path d="M40,112 V208 a8,8,0,0,0,8,8 H208 a8,8,0,0,0,8-8 V112 M128,72 V216 M128,72 C112,36 72,36 76,60 C80,76 112,76 128,72 M128,72 C144,36 184,36 180,60 C176,76 144,76 128,72" fill="none" stroke="currentColor" stroke-width="16" stroke-linejoin="round" stroke-linecap="round"/>',
  arcanas: '<rect x="64" y="32" width="128" height="192" rx="16" opacity="0.2"/><rect x="64" y="32" width="128" height="192" rx="16" fill="none" stroke="currentColor" stroke-width="16" stroke-linejoin="round" stroke-linecap="round"/><path d="M128,84 L141,111 L170,115 L149,135 L154,164 L128,150 L102,164 L107,135 L86,115 L115,111 Z" fill="none" stroke="currentColor" stroke-width="16" stroke-linejoin="round" stroke-linecap="round"/>',
  modos: '<rect x="48" y="48" width="56" height="56" rx="8" opacity="0.2"/><rect x="152" y="48" width="56" height="56" rx="8" opacity="0.2"/><rect x="48" y="152" width="56" height="56" rx="8" opacity="0.2"/><rect x="152" y="152" width="56" height="56" rx="8" opacity="0.2"/><path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48Z"/>',
  objetos: '<path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"/><path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"/>',
  atividades: '<rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2"/><rect x="40" y="40" width="176" height="176" rx="24" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><circle cx="92" cy="92" r="12"/><circle cx="164" cy="92" r="12"/><circle cx="128" cy="128" r="12"/><circle cx="92" cy="164" r="12"/><circle cx="164" cy="164" r="12"/>',
  colecionaveis: '<path d="M128,32L216,112L128,224L40,112Z" opacity="0.2"/><path d="M128,32L216,112L128,224L40,112Z" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M40,112H216" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M96,112L128,32L160,112L128,224L96,112" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>',
  propriedades: '<path d="M56,104L128,40L200,104V216H56Z" opacity="0.2"/><path d="M32,120L128,40L224,120" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M56,104V216H200V104" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M104,216V152H152V216" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>',
  segredos: '<rect x="48" y="112" width="160" height="104" rx="16" opacity="0.2"/><rect x="48" y="112" width="160" height="104" rx="16" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M80,112V80a48,48,0,0,1,96,0v32" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><circle cx="128" cy="164" r="12"/>',
  missoes: '<circle cx="128" cy="128" r="96" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><circle cx="128" cy="128" r="52" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><circle cx="128" cy="128" r="12"/>',
  organizacoes: '<circle cx="128" cy="64" r="28" opacity="0.2"/><circle cx="60" cy="184" r="28" opacity="0.2"/><circle cx="196" cy="184" r="28" opacity="0.2"/><circle cx="128" cy="64" r="28" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="184" r="28" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><circle cx="196" cy="184" r="28" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M114,90L74,158" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M142,90L182,158" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M88,184H168" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>',
  relacionamento: '<path d="M128,216S32,160,32,92A52,52,0,0,1,128,68A52,52,0,0,1,224,92C224,160,128,216,128,216Z" opacity="0.2"/><path d="M128,216S32,160,32,92A52,52,0,0,1,128,68A52,52,0,0,1,224,92C224,160,128,216,128,216Z" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>',
  servicos: '<path d="M56,184V112a72,72,0,0,1,144,0v72Z" opacity="0.2"/><path d="M56,184V112a72,72,0,0,1,144,0v72" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M40,184H216" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M104,208a24,24,0,0,0,48,0" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>',
  negocios: '<rect x="32" y="80" width="192" height="128" rx="16" opacity="0.2"/><rect x="32" y="80" width="192" height="128" rx="16" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M96,80V64a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V80" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M32,140H224" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>',
  animais: '<circle cx="60" cy="112" r="20"/><circle cx="100" cy="68" r="20"/><circle cx="156" cy="68" r="20"/><circle cx="196" cy="112" r="20"/><path d="M128,120c-36,0-60,36-60,60c0,24,24,28,60,28s60-4,60-28c0-24-24-60-60-60Z"/>',
  policia: '<path d="M128,32L48,60V120c0,50,34,82,80,104c46-22,80-54,80-104V60Z" opacity="0.2"/><path d="M128,32L48,60V120c0,50,34,82,80,104c46-22,80-54,80-104V60Z" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M128,88l12,24h26l-21,16l8,26l-25-16l-25,16l8-26l-21-16h26Z" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>',
  personalizacao: '<circle cx="128" cy="128" r="96" opacity="0.2"/><path d="M128,32a96,96,0,1,0,0,192c16,0,20-12,12-24s-4-24,12-24h24a40,40,0,0,0,40-40C216,68,176,32,128,32Z" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><circle cx="84" cy="112" r="12"/><circle cx="124" cy="76" r="12"/><circle cx="172" cy="96" r="12"/>',
  atributos: '<rect x="40" y="136" width="40" height="80" rx="8" opacity="0.2"/><rect x="108" y="96" width="40" height="120" rx="8" opacity="0.2"/><rect x="176" y="56" width="40" height="160" rx="8" opacity="0.2"/><path d="M40,216H216" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M60,136V216M128,96V216M196,56V216" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>',
  veiculos: '<path d="M208,72v56H48V72Z" opacity="0.2"/><path d="M184,24H72A32,32,0,0,0,40,56V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V56A32,32,0,0,0,184,24ZM56,120V80h64v40Zm80-40h64v40H136ZM72,40H184a16,16,0,0,1,16,16v8H56V56A16,16,0,0,1,72,40ZM184,200H72a16,16,0,0,1-16-16V136H200v48A16,16,0,0,1,184,200ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"/>',
  profissoes: '<path d="M224,118.31V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V118.31h0A191.14,191.14,0,0,0,128,144,191.08,191.08,0,0,0,224,118.31Z" opacity="0.2"/><path d="M104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112ZM232,72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8ZM40,72v41.62A184.07,184.07,0,0,0,128,136a184,184,0,0,0,88-22.39V72ZM216,200V131.63A200.25,200.25,0,0,1,128,152a200.19,200.19,0,0,1-88-20.36V200H216Z"/>',
  tracos: '<path d="M103.8,140.1,128,128l24.2,12.1A72,72,0,0,1,192,204.5V208H64v-3.5A72,72,0,0,1,103.8,140.1ZM192,51.5V48H64v3.5a72,72,0,0,0,39.8,64.4L128,128l24.2-12.1A72,72,0,0,0,192,51.5Z" opacity="0.2"/><path d="M200,204.5V232a8,8,0,0,1-16,0V204.5a63.67,63.67,0,0,0-35.38-57.25l-48.4-24.19A79.58,79.58,0,0,1,56,51.5V24a8,8,0,0,1,16,0V51.5a63.67,63.67,0,0,0,35.38,57.25l48.4,24.19A79.58,79.58,0,0,1,200,204.5ZM160,200H72.17a63.59,63.59,0,0,1,3.23-16h72.71a8,8,0,0,0,0-16H83.46a63.71,63.71,0,0,1,14.65-15.08A8,8,0,1,0,88.64,140,80.27,80.27,0,0,0,56,204.5V232a8,8,0,0,0,16,0V216h88a8,8,0,0,0,0-16ZM192,16a8,8,0,0,0-8,8V40H96a8,8,0,0,0,0,16h87.83a63.59,63.59,0,0,1-3.23,16H107.89a8,8,0,1,0,0,16h64.65a63.71,63.71,0,0,1-14.65,15.08,8,8,0,0,0,9.47,12.9A80.27,80.27,0,0,0,200,51.5V24A8,8,0,0,0,192,16Z"/>',
  habilidades: '<path d="M96,240l16-80L48,136,160,16,144,96l64,24Z" opacity="0.2"/><path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"/>',
  gatepal: '<path d="M192,56V200H64V56Z" opacity="0.2"/><path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"/>',
  lore: '<path d="M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z" opacity="0.2"/><path d="M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"/>',
  compendio: '<path d="M80,40V216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8Z" opacity="0.2"/><path d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"/>',
  hologramas: '<path d="M208,72V184H48V72Z" opacity="0.2"/><path d="M232,64V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V64A16,16,0,0,0,40,80v96H32a8,8,0,0,0,0,16h88v17.38a24,24,0,1,0,16,0V192h88a8,8,0,0,0,0-16h-8V80A16,16,0,0,0,232,64ZM128,240a8,8,0,1,1,8-8A8,8,0,0,1,128,240ZM40,48H216V64H40ZM200,176H56V80H200Z"/>',
  emails: '<path d="M224,56l-96,88L32,56Z" opacity="0.2"/><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"/>',
  registro: '<path d="M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z" opacity="0.2"/><path d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"/>',
  anteversos: '<path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" opacity="0.2"/><path d="M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"/>',
  gate101: '<path d="M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07L128,160Z" opacity="0.2"/><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"/>',
  metajogo: '<path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" opacity="0.2"/><path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"/>',
  bugs: '<path d="M208,128v16a80,80,0,0,1-160,0V128Z" opacity="0.2"/><path d="M144,92a12,12,0,1,1,12,12A12,12,0,0,1,144,92ZM100,80a12,12,0,1,0,12,12A12,12,0,0,0,100,80Zm116,64A87.76,87.76,0,0,1,213,167l22.24,9.72A8,8,0,0,1,232,192a7.89,7.89,0,0,1-3.2-.67L207.38,182a88,88,0,0,1-158.76,0L27.2,191.33A7.89,7.89,0,0,1,24,192a8,8,0,0,1-3.2-15.33L43,167A87.76,87.76,0,0,1,40,144v-8H16a8,8,0,0,1,0-16H40v-8a87.76,87.76,0,0,1,3-23L20.8,79.33a8,8,0,1,1,6.4-14.66L48.62,74a88,88,0,0,1,158.76,0l21.42-9.36a8,8,0,0,1,6.4,14.66L213,89.05a87.76,87.76,0,0,1,3,23v8h24a8,8,0,0,1,0,16H216ZM56,120H200v-8a72,72,0,0,0-144,0Zm64,95.54V136H56v8A72.08,72.08,0,0,0,120,215.54ZM200,144v-8H136v79.54A72.08,72.08,0,0,0,200,144Z"/>'
})
const icoSec = k => ICONES_SEC[k] ? `<svg class="ico" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false">${ICONES_SEC[k]}</svg>` : ''

const jGrupoDe = sec => JGRUPOS.find(x => x.secs.includes(sec)).id
const jCab = (sec, extra) => `<div class="sec-head"><div class="jv-cab"><span class="jv-ico" aria-hidden="true">${icoSec(sec)}</span><div><p class="kicker">${jt('g')[jGrupoDe(sec)]}</p><h2 class="h2">${jRot(sec)}</h2></div></div>${extra || ''}</div>`
const jNota = t => `<p class="jv-nota">${esc(t)}</p>`

function jCardJog(x) {
  return `<article class="jv-card"><header><span class="mono">${esc(L(x.tag || ''))}</span></header><h3>${esc(L(x.t))}</h3><p>${esc(L(x.d))}</p></article>`
}
/* Bestiário: cartão simples (sem ficha) ou FICHA DE CAMPO que abre ao toque (veja os campos no comentário dos dados). */
const BS_UI = {}                                   // estado das fichas (aberta, aba escolhida), mantido ao trocar de idioma
const BS_ICO = {
  onde: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  comportamento: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  ataques: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  fracos: '<circle cx="12" cy="12" r="7.5"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>',
  enfrentar: '<path d="M12 3l8 3v6c0 4.5-3.2 7.7-8 9-4.8-1.3-8-4.5-8-9V6z"/>',
  solta: '<path d="M6 8h12l1 12H5z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  detalhes: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>'
}
const bsIco = k => `<svg class="bs-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${BS_ICO[k] || BS_ICO.detalhes}</svg>`
const bsChips = arr => `<ul class="bs-chips">${arr.map(c => { c = typeof c === 'string' ? { n: c } : c; return `<li>${esc(c.n)}${c.p ? `<em>${esc(c.p)}</em>` : ''}</li>` }).join('')}</ul>`
function jFichaBest(x) {
  const B = jt('bs'), id = x.id || x.nome.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const num = String(((JOGOS[JOGO_UI.id] || {}).bestiario || []).indexOf(x) + 1).padStart(2, '0')
  const cls = x.tipo === 'criatura' ? 'warn' : x.tipo === 'robo' ? 'plat' : ''
  const cor = x.tipo === 'criatura' ? 'var(--butter)' : x.tipo === 'robo' ? 'var(--plat)' : 'var(--rose)'
  const abas = (x.info || []).map(b => ({ k: b.k, itens: b.itens }))
  if ((x.solta && x.solta.length) || (x.coleta && x.coleta.length)) abas.push({ k: 'solta' })
  const st = BS_UI[id] || {}
  const ativa = abas.some(a => a.k === st.tab) ? st.tab : (abas[0] || {}).k
  const max = Math.max(1, ...(x.vida || []).map(v => v.v))
  const painel = a => a.k === 'solta'
    ? `${x.solta && x.solta.length ? `<h4 class="mono">${jt('solta')}</h4>${bsChips(x.solta)}` : ''}${x.coleta && x.coleta.length ? `<h4 class="mono">${B.coleta}</h4>${bsChips(x.coleta)}` : ''}${x.soltaNota ? `<p class="bs-nota">${esc(L(x.soltaNota))}</p>` : ''}`
    : `<ul class="bs-ul">${a.itens.map(t => `<li>${L(t)}</li>`).join('')}</ul>`
  return `<article class="jv-card bs-card${st.open ? ' aberto' : ''}" data-bid="${esc(id)}" style="--cor:${cor}">
    <button class="bs-cab" type="button" data-action="bsab" aria-expanded="${!!st.open}" aria-controls="bs-c-${esc(id)}">
      <span class="bs-retrato${x.img ? '' : ' vazio'}">${ICONE_IMG}${x.img ? `<img src="${esc(x.img)}" alt="${esc(x.nome)}" loading="lazy" decoding="async" onerror="this.parentNode.classList.add('vazio');this.remove()">` : ''}</span>
      <span class="bs-topo"><span class="pill ${cls}">${esc(jt('tipos')[x.tipo] || '')}</span><span class="mono">${B.ficha} ${num}</span></span>
      <span class="bs-nome">${esc(x.nome)}</span>
      ${x.codigo ? `<span class="mono bs-cod">${esc(x.codigo)}</span>` : ''}
      ${x.resumo ? `<span class="bs-resumo">${esc(L(x.resumo))}</span>` : ''}
      ${x.locais && x.locais.length ? `<span class="bs-locais">${x.locais.map(l => `<span>${esc(l)}</span>`).join('')}</span>` : ''}
      <span class="bs-abrir mono" aria-hidden="true"><span class="bs-a1">${B.abrir}</span><span class="bs-a2">${B.fechar}</span><b>+</b></span>
    </button>
    <div class="bs-corpo" id="bs-c-${esc(id)}">
      <div class="bs-col">
        ${x.vida && x.vida.length ? `<h4 class="mono">${B.vida}</h4><div class="bs-barras">${x.vida.map(v => `<div class="bs-bar"><span>${esc(L(v.rot))}</span><i style="--w:${Math.round(v.v / max * 100)}%"></i><b>${v.v}</b></div>`).join('')}</div>` : ''}
        ${x.stats && x.stats.length ? `<h4 class="mono">${B.numeros}</h4><dl class="bs-stats">${x.stats.map(t => `<div><dt>${esc(L(t.rot))}</dt><dd>${esc(L(t.v))}</dd></div>`).join('')}</dl>` : ''}
        ${x.alerta ? `<aside class="jv-art-dest bs-alerta"><span>${esc(L(x.alerta.t))}</span>${x.alerta.ir ? ` <button class="link" type="button" data-action="jsec" data-sec="${esc(x.alerta.ir)}">${jt('s')[x.alerta.ir]} →</button>` : ''}</aside>` : ''}
      </div>
      <div class="bs-col">
        ${abas.length ? `<div class="bs-tabs" role="tablist" aria-label="${esc(x.nome)}">${abas.map(a => `<button class="bs-tab" type="button" role="tab" data-action="bstab" data-k="${a.k}" aria-selected="${a.k === ativa}" tabindex="${a.k === ativa ? 0 : -1}">${bsIco(a.k)}<span>${B.abas[a.k] || a.k}</span></button>`).join('')}</div>
        ${abas.map(a => `<div class="bs-painel" role="tabpanel" data-k="${a.k}"${a.k === ativa ? '' : ' hidden'}>${painel(a)}</div>`).join('')}` : ''}
        ${x.fontes && x.fontes.length ? `<p class="bs-fonte mono">${B.fontes}: ${x.fontes.map(f => `<a href="${esc(f.u)}" target="_blank" rel="noopener noreferrer">${esc(f.n)}</a>`).join(' · ')}</p>` : ''}
      </div>
    </div>
  </article>`
}
function jCardBest(x) {
  if (x.info || x.vida || x.stats || x.resumo) return jFichaBest(x)
  const cls = x.tipo === 'criatura' ? 'warn' : x.tipo === 'robo' ? 'plat' : ''
  return `<article class="jv-card"><header><span class="pill ${cls}">${esc(jt('tipos')[x.tipo] || '')}</span></header>
    <h3>${esc(x.nome)}</h3>
    ${x.solta && x.solta.length ? `<p>${jt('solta')}: ${esc(x.solta.join(', '))}</p>` : ''}
    ${x.nota ? `<p>${esc(L(x.nota))}</p>` : ''}</article>`
}
/* Personagens: cartão simples ou FICHA DE PESSOA (texto à esquerda, retrato em pé à direita, "Mais detalhes" que abre embaixo). */
function jFichaPers(x) {
  const P = jt('pe')
  const dados = (x.dados || []).map(t => `<div><dt>${esc(L(t.rot))}</dt><dd>${esc(L(t.v))}</dd></div>`).join('')
  const lista = rs => `<dl class="bs-stats">${rs.map(t => `<div><dt>${esc(L(t.rot))}</dt><dd>${esc(L(t.v))}</dd></div>`).join('')}</dl>`
  const extra = (x.descricao ? `<div class="pe-sec"><span class="pe-sec-t">${P.desc}</span><p>${esc(L(x.descricao))}</p></div>` : '')
    + (x.fisico && x.fisico.length ? `<div class="pe-sec"><span class="pe-sec-t">${P.fisico}</span>${lista(x.fisico)}</div>` : '')
    + (x.jogo && x.jogo.length ? `<div class="pe-sec"><span class="pe-sec-t">${P.jogo}</span>${lista(x.jogo)}</div>` : '')
    + (x.frases ? `<div class="pe-sec"><span class="pe-sec-t">${P.frases}</span>${x.frases.length ? x.frases.map(f => `<blockquote class="pe-frase">${esc(L(f.t))}${f.de ? `<cite>${esc(L(f.de))}</cite>` : ''}</blockquote>`).join('') : `<p>${P.nenhuma}</p>`}</div>` : '')
  const mais = (x.mais && x.mais.length) || extra
    ? `<details class="pe-mais"><summary><span>${P.mais}</span>${x.spoiler ? `<span class="pill warn">${P.spoiler}</span>` : ''}</summary>
        ${extra}
        ${x.mais && x.mais.length ? `<ul class="bs-ul">${x.mais.map(t => `<li>${L(t)}</li>`).join('')}</ul>` : ''}
        ${x.fontes && x.fontes.length ? `<p class="bs-fonte mono">${jt('bs').fontes}: ${x.fontes.map(f => `<a href="${esc(f.u)}" target="_blank" rel="noopener noreferrer">${esc(f.n)}</a>`).join(' · ')}</p>` : ''}</details>` : ''
  return `<article class="jv-card pe-card" style="--cor:var(--ember)">
    <div class="pe-topo">
      <div class="pe-info">
        ${x.funcao ? `<span class="mono pe-fn">${esc(L(x.funcao))}</span>` : ''}
        <h3 class="pe-nome">${esc(x.nome)}</h3>
        ${x.resumo ? `<p class="pe-resumo">${esc(L(x.resumo))}</p>` : ''}
        ${x.tags && x.tags.length ? `<span class="bs-locais">${x.tags.map(t => `<span>${esc(L(t))}</span>`).join('')}</span>` : ''}
        ${dados ? `<dl class="bs-stats pe-dados">${dados}</dl>` : ''}
        ${x.alerta ? `<p class="pe-alerta">${esc(L(x.alerta.t))}${x.alerta.ir ? ` <button class="link" type="button" data-action="jsec" data-sec="${esc(x.alerta.ir)}">${jt('s')[x.alerta.ir]} →</button>` : ''}</p>` : ''}
      </div>
      <span class="bs-retrato pe-retrato${x.img ? '' : ' vazio'}">${ICONE_IMG}${x.img ? `<img src="${esc(x.img)}" alt="${esc(x.nome)}" loading="lazy" decoding="async" onerror="this.parentNode.classList.add('vazio');this.remove()">` : ''}</span>
    </div>
    ${mais}
  </article>`
}
function jCardPers(x) {
  if (x.resumo || x.dados || x.mais || x.descricao || x.fisico || x.jogo || x.frases) return jFichaPers(x)
  return `<article class="jv-card"><h3>${esc(x.nome)}</h3><p>${esc(L(x.papel))}</p>${x.nota ? `<p>${esc(L(x.nota))}</p>` : ''}</article>`
}
function jCardEquip(x) {
  return `<article class="jv-card"><header><span class="mono">${esc(jt('cats')[x.cat] || '')}</span>${x.dano != null ? `<span class="pill">${x.dano.toLocaleString(loc())} ${jt('dano')}</span>` : ''}</header>
    <h3>${esc(x.nome)}</h3>${x.nota ? `<p>${esc(L(x.nota))}</p>` : ''}</article>`
}
function jCardArm(x) {
  const f = n => Number(n).toLocaleString(loc(), { minimumFractionDigits: 1, maximumFractionDigits: 1 })
  const st = x.arm != null
    ? `<div class="jv-st"><div><b>${x.arm}</b><span>${jt('arm')}</span></div><div><b>${x.dur}</b><span>${jt('dur')}</span></div><div><b>${f(x.peso)}</b><span>${jt('peso')}</span></div></div>`
    : ''
  return `<article class="jv-card"><header><span class="mono">${esc(jt('slots')[x.slot] || '')}</span>${x.res ? `<span class="pill warn">${esc(L(x.res))}</span>` : ''}</header>
    <h3>${esc(x.nome)}</h3>${st}${x.nota ? `<p>${esc(L(x.nota))}</p>` : ''}</article>`
}
const nvId = (x, i) => x.id || String(i)
function jCardNov(x, i) {
  const b = BADGES_NV[x.badge] !== undefined ? x.badge : 'novo'
  const capa = x.img ? `<span class="jv-nov-thumb"><img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onerror="this.parentNode.remove()"></span>` : ''
  return `<button class="jv-card jv-nov" type="button" data-action="jnov" data-nid="${esc(nvId(x, i))}">${capa}<header><span class="pill ${BADGES_NV[b]}">${tx('b_' + b)}</span><span class="mono">${esc(quando(x.data))}</span></header><h3>${esc(L(x.t))}</h3><p>${esc(L(x.d))}</p><span class="jv-nov-go" aria-hidden="true">${jt('ler')}</span></button>`
}
/* Página própria de uma novidade: capa larga, título, abertura, índice "Nesta novidade", corpo em blocos (mesmos da Visão geral) e vizinhas. */
function jNovPagina(lista, i) {
  const x = lista[i], b = BADGES_NV[x.badge] !== undefined ? x.badge : 'novo'
  const corpo = x.corpo || []
  let n = 0
  const idx = corpo.filter(k => k.h)
  const html = corpo.map(k => k.h ? `<h2 class="jv-art-h" id="jv-nh-${n++}">${esc(L(k.h))}</h2>` : jBloco(k)).join('')
  const txt = [L(x.d)].concat(corpo.map(k => k.p ? L(k.p) : k.destaque ? L(k.destaque) : k.ul ? k.ul.map(L).join(' ') : '')).join(' ')
  const min = Math.max(1, Math.round(txt.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length / 200))
  const viz = (k, rot) => k < 0 || k >= lista.length ? '' :
    `<button class="jv-nov-viz-b" type="button" data-action="jnov" data-nid="${esc(nvId(lista[k], k))}"><span class="mono">${rot}</span><b>${esc(L(lista[k].t))}</b><span class="mono">${esc(quando(lista[k].data))}</span></button>`
  return `<div class="jv-nov-pag">
    <button class="link jv-nov-volta" type="button" data-action="jsec" data-sec="novidades">${jt('voltar_nov')}</button>
    <div class="jv-nov-capa">${jBloco({ img: x.img || '', razao: '21 / 9', alt: x.t, leg: x.legCapa })}</div>
    <div class="jv-nov-cab"><span class="pill ${BADGES_NV[b]}">${tx('b_' + b)}</span><span class="mono">${esc(quando(x.data))}</span><span class="mono">${jt('leitura', min)}</span></div>
    <h1 class="h1 jv-nov-h1">${esc(L(x.t))}</h1>
    <p class="jv-nov-lead">${esc(L(x.d))}</p>
    ${idx.length > 1 ? `<nav class="jv-nov-idx" aria-label="${jt('nesta')}"><p class="mono">${jt('nesta')}</p><ol>${idx.map((k, j) => `<li><button class="link" type="button" data-action="jnovh" data-h="${j}">${esc(L(k.h))}</button></li>`).join('')}</ol></nav>` : ''}
    ${corpo.length ? `<article class="jv-art">${html}<svg class="jv-ref-svg" aria-hidden="true"><path pathLength="1" d=""/><circle r="3.5" cx="-99" cy="-99"/><circle r="4" cx="-99" cy="-99"/></svg></article>` : ''}
    <nav class="jv-nov-viz" aria-label="${jt('mais_nov')}">${viz(i - 1, jt('mais_nova'))}${viz(i + 1, jt('mais_antiga'))}</nav>
  </div>`
}
const dicaCat = x => x.cat && CATEGORIAS[x.cat] ? L(CATEGORIAS[x.cat].rot) : (x.cat || '')
function jCardDica(x, i) {
  const capa = x.img ? `<span class="jv-nov-thumb"><img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onerror="this.parentNode.remove()"></span>` : ''
  return `<button class="jv-card jv-nov" type="button" data-action="jdic" data-did="${esc(nvId(x, i))}"${x.cat && CATEGORIAS[x.cat] ? ` style="--cor:${CATEGORIAS[x.cat].cor}"` : ''}>${capa}<header><span class="mono">${esc(dicaCat(x))}</span></header><h3>${esc(L(x.titulo))}</h3><p>${esc(L(x.texto))}</p><span class="jv-nov-go" aria-hidden="true">${jt('ler_dica')}</span></button>`
}
/* Página própria de uma dica: mesma estrutura da página de novidade (capa, título, abertura, índice, corpo em blocos e vizinhas). */
function jDicaPagina(lista, i) {
  const x = lista[i], corpo = x.corpo || []
  let n = 0
  const idx = corpo.filter(k => k.h)
  const html = corpo.map(k => k.h ? `<h2 class="jv-art-h" id="jv-nh-${n++}">${esc(L(k.h))}</h2>` : jBloco(k)).join('')
  const txt = [L(x.texto)].concat(corpo.map(k => k.p ? L(k.p) : k.destaque ? L(k.destaque) : k.ul ? k.ul.map(L).join(' ') : '')).join(' ')
  const min = Math.max(1, Math.round(txt.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length / 200))
  const viz = (k, rot) => k < 0 || k >= lista.length ? '' :
    `<button class="jv-nov-viz-b" type="button" data-action="jdic" data-did="${esc(nvId(lista[k], k))}"><span class="mono">${rot}</span><b>${esc(L(lista[k].titulo))}</b><span class="mono">${esc(dicaCat(lista[k]))}</span></button>`
  return `<div class="jv-nov-pag">
    <button class="link jv-nov-volta" type="button" data-action="jsec" data-sec="dicas">${jt('voltar_dicas')}</button>
    <div class="jv-nov-capa">${jBloco({ img: x.img || '', razao: '21 / 9', alt: x.titulo, leg: x.legCapa })}</div>
    <div class="jv-nov-cab"><span class="mono">${esc(dicaCat(x))}</span><span class="mono">${jt('leitura', min)}</span></div>
    <h1 class="h1 jv-nov-h1">${esc(L(x.titulo))}</h1>
    <p class="jv-nov-lead">${esc(L(x.texto))}</p>
    ${idx.length > 1 ? `<nav class="jv-nov-idx" aria-label="${jt('nesta')}"><p class="mono">${jt('nesta')}</p><ol>${idx.map((k, j) => `<li><button class="link" type="button" data-action="jnovh" data-h="${j}">${esc(L(k.h))}</button></li>`).join('')}</ol></nav>` : ''}
    ${corpo.length ? `<article class="jv-art">${html}<svg class="jv-ref-svg" aria-hidden="true"><path pathLength="1" d=""/><circle r="3.5" cx="-99" cy="-99"/><circle r="4" cx="-99" cy="-99"/></svg></article>` : ''}
    <nav class="jv-nov-viz" aria-label="${jt('mais_dicas')}">${viz(i - 1, jt('dica_ant'))}${viz(i + 1, jt('dica_prox'))}</nav>
  </div>`
}
function jCardParte(x, i, sec = 'roteiro') {
  const capa = x.img ? `<span class="jv-nov-thumb"><img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onerror="this.parentNode.remove()"></span>` : (sec === 'segredos' || sec === 'propriedades' || sec === 'atividades' ? `<span class="jv-nov-thumb jv-nov-ph" aria-hidden="true">${ICONE_IMG}</span>` : '')
  return `<button class="jv-card jv-nov" type="button" data-action="jpar" data-sec="${sec}" data-pid="${esc(nvId(x, i))}">${capa}<header><span class="mono">${sec === 'roteiro' ? jt('parte') + ' ' : ''}${String(i + 1).padStart(2, '0')}${x.setor ? ' · ' + esc(x.setor) : ''}</span>${x.status === 'base' ? `<span class="pill warn">${jt('base')}</span>` : ''}</header><h3>${esc(L(x.t))}</h3><p>${esc(L(x.d))}</p><span class="jv-nov-go" aria-hidden="true">${sec === 'segredos' ? jt('adentrar') : jt('abrir_parte')}</span></button>`
}
/* Página própria de uma parte do Guia - Passo a passo: mesma estrutura da página de novidade (capa, título, abertura, índice, corpo, vizinhas). */
function jPartePagina(lista, i, sec = 'roteiro') {
  const x = lista[i], corpo = x.corpo || []
  let n = 0
  const idx = corpo.filter(k => k.h)
  const html = corpo.map(k => k.h ? `<h2 class="jv-art-h" id="jv-nh-${n++}">${esc(L(k.h))}</h2>` : jBloco(k)).join('')
  const txt = [L(x.d)].concat(corpo.map(k => k.p ? L(k.p) : k.destaque ? L(k.destaque) : k.ul ? k.ul.map(L).join(' ') : '')).join(' ')
  const min = Math.max(1, Math.round(txt.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length / 200))
  const viz = (k, rot) => k < 0 || k >= lista.length ? '' :
    `<button class="jv-nov-viz-b" type="button" data-action="jpar" data-sec="${sec}" data-pid="${esc(nvId(lista[k], k))}"><span class="mono">${rot}</span><b>${esc(L(lista[k].t))}</b><span class="mono">${esc(lista[k].setor || '')}</span></button>`
  return `<div class="jv-nov-pag">
    <button class="link jv-nov-volta" type="button" data-action="jsec" data-sec="${sec}">${sec === 'roteiro' ? jt('voltar_guia') : '← ' + esc(jRot(sec))}</button>
    <div class="jv-nov-capa">${jBloco({ img: x.img || '', razao: '21 / 9', alt: x.t, leg: x.legCapa })}</div>
    <div class="jv-nov-cab"><span class="mono">${sec === 'roteiro' ? jt('parte') + ' ' : ''}${String(i + 1).padStart(2, '0')} / ${String(lista.length).padStart(2, '0')}</span>${x.setor ? `<span class="mono">${esc(x.setor)}</span>` : ''}${x.status === 'base' ? `<span class="pill warn">${jt('base')}</span>` : ''}<span class="mono">${jt('leitura', min)}</span></div>
    <h1 class="h1 jv-nov-h1">${esc(L(x.t))}</h1>
    <p class="jv-nov-lead">${esc(L(x.d))}</p>
    ${x.status === 'base' ? `<aside class="jv-art-dest jv-nov-base">${jt('base_aviso')}</aside>` : ''}
    ${idx.length > 1 ? `<nav class="jv-nov-idx" aria-label="${jt('nesta_parte')}"><p class="mono">${jt('nesta_parte')}</p><ol>${idx.map((k, j) => `<li><button class="link" type="button" data-action="jnovh" data-h="${j}">${esc(L(k.h))}</button></li>`).join('')}</ol></nav>` : ''}
    ${corpo.length ? `<article class="jv-art">${html}<svg class="jv-ref-svg" aria-hidden="true"><path pathLength="1" d=""/><circle r="3.5" cx="-99" cy="-99"/><circle r="4" cx="-99" cy="-99"/></svg></article>` : ''}
    <nav class="jv-nov-viz" aria-label="${jt('passo')}">${viz(i - 1, jt('parte_ant'))}${viz(i + 1, jt('parte_prox'))}</nav>
  </div>`
}
/* Missões: cards longos em retângulo, com número, nome e a descrição do que acontece (curta ou longa; linha em branco = novo parágrafo).
   JOGOS[id].missoes: [ { n: 1 (opcional, senão vale a posição), t: { pt, en }, d: { pt, en } } ] */
function jCardMissao(x, i) {
  const n = x.n != null ? x.n : i + 1
  const ps = L(x.d || '').split(/\n\s*\n/).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join('')
  const img = x.img ? `<img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ICONE_IMG
  return `<article class="jv-card jv-mis"><div class="jv-mis-lado"><span class="jv-mis-n mono" aria-hidden="true">${esc(String(n).padStart(2, '0'))}</span><span class="jv-mis-img" aria-hidden="true">${img}</span></div><div class="jv-mis-txt"><h3>${esc(L(x.t || ''))}</h3>${ps}</div></article>`
}
/* Organizações: trilho horizontal de caixas altas; cada caixa mostra o personagem principal em pé (PNG) e, ao tocar, abre só o painel de informações dela.
   JOGOS[id].organizacoes: [ { id: 'curto', nome: { pt, en }, tipo: { pt, en } (ex.: Gangue), img: 'imagens/x.png' (PNG do personagem em pé; sem img aparece uma silhueta),
     h: 345 (matiz 0-360 do fundo, opcional), lider: 'Nome do personagem' (opcional), d: { pt, en } (texto; linha em branco = novo parágrafo),
     fatos: [ { k: { pt, en }, v: { pt, en } } ] (opcional), corpo: [ ...blocos da Visão geral: h, p, ul, destaque, img ] (opcional) } ] */
const OG_SIL = '<svg viewBox="0 0 120 300" aria-hidden="true" focusable="false"><circle cx="60" cy="40" r="26"/><path d="M28 92Q60 78 92 92L100 190H84L82 292H64L60 200L56 292H38L36 190H20Z"/></svg>'
const OG_HUES = [345, 28, 205, 150, 270, 45]
function jCardOrg(x, i) {
  const id = String(nvId(x, i)), nome = L(x.nome || ''), T = jt('og')
  const fig = x.img ? `<img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onerror="this.replaceWith(Object.assign(document.createElement('span'),{innerHTML:OG_SIL}).firstChild)">` : OG_SIL
  const ps = L(x.d || '').split(/\n\s*\n/).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join('')
  const fatos = (x.fatos || []).length ? `<dl class="og-fatos">${x.fatos.map(f => `<dt>${esc(L(f.k))}</dt><dd>${esc(L(f.v))}</dd>`).join('')}</dl>` : ''
  const corpo = (x.corpo || []).map(b => jBloco(b)).join('')
  const lider = x.lider ? `<p><b>${esc(T.lider)}:</b> ${esc(x.lider)}</p>` : ''
  const h = typeof x.h === 'number' ? x.h : OG_HUES[i % OG_HUES.length]
  return `<article class="og-card" style="--h:${h}">
    <button class="og-capa" type="button" data-action="og" aria-expanded="false" aria-controls="og-i-${esc(id)}"><span class="og-fig">${fig}</span><span class="og-seta" aria-hidden="true">›</span><span class="og-nome">${x.tipo ? `<span class="mono og-tag">${esc(L(x.tipo))}</span>` : ''}<b>${esc(nome)}</b></span></button>
    <div class="og-info" id="og-i-${esc(id)}" role="region" aria-label="${esc(nome)}"><div class="og-info-in">${x.tipo ? `<span class="mono">${esc(L(x.tipo))}</span>` : ''}<h3>${esc(nome)}</h3>${lider}${ps}${fatos}${corpo}${ps || fatos || corpo || lider ? '' : `<p class="jv-vazio">${jt('preparo')}</p>`}</div></div>
  </article>`
}
function jOrgs(d, sec) {
  const l = d[sec] || [], T = jt('og')
  const nav = l.length > 1 ? `<div class="og-nav"><button type="button" data-action="ogrola" data-dir="-1" aria-label="${esc(T.ant)}">‹</button><button type="button" data-action="ogrola" data-dir="1" aria-label="${esc(T.prox)}">›</button></div>` : ''
  return `${jCab(sec, nav)}${l.length ? `${jNota(T.intro)}<div class="og-trilho" role="group" aria-label="${esc(jRot(sec))}">${l.map((x, k) => jCardOrg(x, k)).join('')}</div>` : jVazio()}`
}
function ogAbre(el) {
  const c = el.closest('.og-card'), t = c.parentNode, abrir = !c.classList.contains('aberto')
  t.querySelectorAll('.og-card.aberto').forEach(o => { o.classList.remove('aberto'); o.querySelector('.og-capa').setAttribute('aria-expanded', 'false') })
  if (!abrir) return
  c.classList.add('aberto'); el.setAttribute('aria-expanded', 'true')
  setTimeout(() => { if (c.offsetLeft < t.scrollLeft || c.offsetLeft + c.offsetWidth > t.scrollLeft + t.clientWidth) t.scrollTo({ left: Math.max(0, c.offsetLeft - 8), behavior: 'smooth' }) }, 400)
}
function ogRola(el) {
  const t = document.querySelector('#jv-main .og-trilho'); if (!t) return
  t.scrollBy({ left: +el.dataset.dir * Math.max(240, t.clientWidth * .8), behavior: 'smooth' })
}
/* Serviços: quadrados de imagem colados lado a lado, cada um com o nome da função; de cada quadrado desce uma linha que liga ao bloco de informações, com um círculo no fim.
   JOGOS[id].servicos: [ { id: 'curto', nome: { pt, en }, img: 'imagens/x.jpg' (sem img aparece a moldura vazia), h: 345 (matiz do fundo, opcional),
     d: { pt, en } (texto; linha em branco = novo parágrafo), fatos: [ { k: { pt, en }, v: { pt, en } } ] (opcional), corpo: [ ...blocos da Visão geral ] (opcional) } ] */
function jServicos(d, sec) {
  const l = d[sec] || []
  const item = (x, i) => {
    const nome = L(x.nome || ''), h = typeof x.h === 'number' ? x.h : OG_HUES[i % OG_HUES.length]
    const foto = x.img ? `<img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''
    const ps = L(x.d || '').split(/\n\s*\n/).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join('')
    const fatos = (x.fatos || []).length ? `<dl class="og-fatos">${x.fatos.map(f => `<dt>${esc(L(f.k))}</dt><dd>${esc(L(f.v))}</dd>`).join('')}</dl>` : ''
    const corpo = (x.corpo || []).map(b => jBloco(b)).join('')
    return `<article class="sv-item" style="--h:${h}"><div class="sv-quad">${ICONE_IMG}${foto}<span class="sv-nome">${esc(nome)}</span></div><div class="sv-lig" aria-hidden="true"></div><div class="sv-info"><h3>${esc(nome)}</h3>${ps}${fatos}${corpo}${ps || fatos || corpo ? '' : `<p class="jv-vazio">${jt('preparo')}</p>`}</div></article>`
  }
  return `${jCab(sec)}${l.length ? `<div class="sv-grade">${l.map(item).join('')}</div>` : jVazio()}`
}
/* Transportes (seção 'veiculos'): o veículo de lado, de frente para a esquerda, entra da direita para a esquerda sobre um palco; logo abaixo, a base de informações.
   JOGOS[id].veiculos: [ { id: 'curto', nome: { pt, en }, tipo: { pt, en } (ex.: Carro), img: 'imagens/x.png' (PNG de lado; sem img aparece uma silhueta),
     inverter: true (opcional: use se o PNG estiver virado para a direita), h: 345 (matiz do fundo, opcional),
     d: { pt, en } (texto; linha em branco = novo parágrafo), fatos: [ { k: { pt, en }, v: { pt, en } | 'texto' } ] (opcional), corpo: [ ...blocos da Visão geral ] (opcional) } ]
   Uma nota da seção vem de JOGOS[id].notas.veiculos. */
const TR_SIL = '<svg viewBox="0 0 410 140" aria-hidden="true" focusable="false"><path class="tp-sil-c" d="M14 104V88Q16 80 40 76L120 66L160 36Q168 30 182 30H268Q290 32 304 56L330 64Q388 70 392 92V104Z"/><path class="tp-sil-j" d="M150 62L170 40Q172 38 180 38H222V62ZM232 38H266Q282 40 292 62H232Z"/><g class="tp-sil-r"><circle cx="92" cy="106" r="25"/><circle cx="312" cy="106" r="25"/></g><g class="tp-sil-h"><circle cx="92" cy="106" r="10"/><circle cx="312" cy="106" r="10"/></g></svg>'
function jTransportes(d, sec) {
  const l = d[sec] || []
  const item = (x, i) => {
    const nome = L(x.nome || ''), h = typeof x.h === 'number' ? x.h : OG_HUES[i % OG_HUES.length]
    const fig = x.img ? `<img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onerror="this.replaceWith(Object.assign(document.createElement('span'),{innerHTML:TR_SIL}).firstChild)">` : TR_SIL
    const ps = L(x.d || '').split(/\n\s*\n/).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join('')
    const fatos = (x.fatos || []).length ? `<dl class="tp-fatos">${x.fatos.map(f => `<div><dt>${esc(L(f.k))}</dt><dd>${esc(L(f.v))}</dd></div>`).join('')}</dl>` : ''
    const corpo = (x.corpo || []).map(b => jBloco(b)).join('')
    return `<article class="tp-card${x.inverter ? ' tp-inv' : ''}" style="--h:${h};--i:${i}"><div class="tp-palco"><div class="tp-veic">${fig}</div></div><div class="tp-base">${x.tipo ? `<span class="mono tp-tipo">${esc(L(x.tipo))}</span>` : ''}<h3>${esc(nome)}</h3>${ps}${fatos}${corpo}${ps || fatos || corpo ? '' : `<p class="jv-vazio">${jt('preparo')}</p>`}</div></article>`
  }
  return `${jCab(sec)}${d.notas && d.notas[sec] ? jNota(L(d.notas[sec])) : ''}<div class="tp-lista">${l.map(item).join('')}</div>`
}
function jGrupos(itens, chave, rotulo, card) {          // agrupa por categoria, na ordem em que aparecem
  const ordem = []
  itens.forEach(x => { if (!ordem.includes(x[chave])) ordem.push(x[chave]) })
  return ordem.map(k => `<h3 class="jv-sub mono">${esc(rotulo(k))}</h3><div class="jv-lista">${itens.filter(x => x[chave] === k).map(x => card(x)).join('')}</div>`).join('')
}

/* Visão geral como texto: d.visaoGeral é uma lista de blocos, na ordem em que aparecem na página.
   { h }  título de seção          { p }  parágrafo (aceita <strong> e <em>)    { ul: [ ... ] }  lista
   { destaque }  quadro de aviso   { ir: 'secao', t }  link para outra seção
   { img: 'imagens/x.jpg' (ou '' = moldura vazia), alt, leg, razao: '16 / 9' }  imagem grande com legenda
   Dentro de p, ul e destaque: [[id|palavra]] vira palavra-chave clicável (imagem em refs[id], veja jRefAbrir) */
/* Palavra-chave com linha: [[id|palavra]] no texto vira um botão na cor do site. Ao clicar, abre a figura d.refs[id]
   logo depois do parágrafo e uma linha SVG liga a palavra à imagem (a linha corre pela margem esquerda, sem cobrir o texto).
   Clicar de novo, clicar fora ou apertar Esc fecha. Funciona igual com toque e mouse. */
const jRefTxt = h => h.replace(/\[\[([\w-]+)\|([^\]]+)\]\]/g, (_, id, t) => `<button class="jv-ref" type="button" data-action="ref" data-ref="${id}" aria-expanded="false" aria-controls="jv-ref-fig">${t}</button>`)
const LR = x => jRefTxt(L(x))

function jBloco(b) {
  if (b.h) return `<h2 class="jv-art-h">${esc(L(b.h))}</h2>`
  if (b.p) return `<p>${LR(b.p)}</p>`
  if (b.ul) return `<ul class="jv-art-ul">${b.ul.map(i => `<li>${LR(i)}</li>`).join('')}</ul>`
  if (b.destaque) return `<aside class="jv-art-dest">${LR(b.destaque)}</aside>`
  if (b.dest) return `<aside class="jv-art-card"><span class="mono">${esc(L(b.dest.tag || ''))}</span><div><b>${esc(L(b.dest.t))}</b><span>${esc(L(b.dest.d))}</span></div></aside>`
  if (b.ir) return `<p><button class="link" type="button" data-action="jsec" data-sec="${esc(b.ir)}">${esc(L(b.t))}</button></p>`
  if ('img' in b) {
    const foto = b.img ? `<img src="${esc(b.img)}" alt="${esc(L(b.alt || ''))}" loading="lazy" decoding="async" onerror="this.remove()">` : ''
    return `<figure class="jv-fig" style="--razao:${esc(b.razao || '16 / 9')}"><div class="jv-fig-img">${ICONE_IMG}${foto}</div>${b.leg ? `<figcaption>${esc(L(b.leg))}</figcaption>` : ''}</figure>`
  }
  return ''
}
const jArtigo = (d, k = 'visaoGeral') => (d[k] || []).length
  ? `<article class="jv-art">${d[k].map(b => jBloco(b)).join('')}<svg class="jv-ref-svg" aria-hidden="true"><path pathLength="1" d=""/><circle r="3.5" cx="-99" cy="-99"/><circle r="4" cx="-99" cy="-99"/></svg></article>`
  : ''

const jRefArt = () => document.querySelector('#jv-main .jv-art')
function jRefFechar() {
  document.querySelectorAll('.jv-ref-fig').forEach(f => f.remove())   // o cartão mora no <body> (fixo na tela; os painéis têm transform)
  const art = jRefArt(); if (!art) return
  art.querySelectorAll('.jv-ref[aria-expanded="true"]').forEach(b => b.setAttribute('aria-expanded', 'false'))
  const s = art.querySelector('.jv-ref-svg'); if (s) s.classList.remove('on')
}
function jRefDesenhar() {                                    // recalcula a linha: palavra → margem esquerda → borda da imagem
  const art = jRefArt(); if (!art) return
  const btn = art.querySelector('.jv-ref[aria-expanded="true"]'), im = document.querySelector('.jv-ref-fig .jv-ref-img'), s = art.querySelector('.jv-ref-svg')
  if (!btn || !im || !s) return
  const a = art.getBoundingClientRect(); if (!a.width) return   // painel escondido
  const r = btn.getClientRects()[0] || btn.getBoundingClientRect(), f = im.getBoundingClientRect()
  const x1 = r.left + r.width / 2 - a.left, y1 = r.bottom - a.top + 3
  const gx = -Math.max(4, Math.min(12, a.left - 4))             // corredor na margem esquerda, sem sair da tela
  const x2 = f.left - a.left, y2 = f.top - a.top + Math.min(28, f.height / 2)
  s.querySelector('path').setAttribute('d', `M${x1} ${y1}H${gx}V${y2}H${x2}`)
  const [c1, c2] = s.querySelectorAll('circle')
  c1.setAttribute('cx', x1); c1.setAttribute('cy', y1)
  c2.setAttribute('cx', x2); c2.setAttribute('cy', y2)
}
function jRefAbrir(btn) {
  const art = btn.closest('.jv-art'); if (!art) return
  const jaAberto = btn.getAttribute('aria-expanded') === 'true'
  jRefFechar()
  if (jaAberto) return                                          // segundo clique fecha
  const ref = ((JOGOS[JOGO_UI.id] || {}).refs || {})[btn.dataset.ref]; if (!ref) return
  const foto = ref.img ? `<img src="${esc(ref.img)}" alt="${esc(L(ref.alt || ''))}" loading="lazy" decoding="async" onerror="this.remove()">` : ''
  const larga = window.innerWidth >= 900, ab = art.getBoundingClientRect()
  const pos = larga ? `--fig-l:${Math.round(ab.left)}px;--fig-r:auto;--fig-w:26rem;margin:0;` : ''
  document.body.insertAdjacentHTML('beforeend', `<figure class="jv-ref-fig" id="jv-ref-fig" style="${pos}"><div class="jv-ref-img" style="--razao:${esc(ref.razao || '16 / 9')}">${ICONE_IMG}${foto}</div>${ref.leg ? `<figcaption>${esc(L(ref.leg))}</figcaption>` : ''}</figure>`)
  btn.setAttribute('aria-expanded', 'true')
  document.querySelector('.jv-ref-fig').addEventListener('animationend', jRefDesenhar)   // o cartão cresce ao aparecer: reencaixa a linha no tamanho final
  jRefDesenhar()
  const s = art.querySelector('.jv-ref-svg')
  s.getBoundingClientRect()                                     // fixa o estado inicial para a linha animar
  s.classList.add('on')
  const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const wb = btn.getBoundingClientRect(), fb = document.querySelector('.jv-ref-fig').getBoundingClientRect()
  if (wb.top < fb.bottom + 24) window.scrollBy({ top: wb.top - fb.bottom - 48, behavior: suave ? 'smooth' : 'auto' })   // a palavra não fica escondida atrás do cartão
}

/* Tópicos extras da Wiki (Objetos, Veículos, Profissões, ..., Bugs): cada um é uma página com cabeçalho, uma frase do que é e os cartões
   que você cadastrar em JOGOS[id][nome-da-seção] (campos: tag, t: { pt, en }, d: { pt, en } — mesmo formato dos cartões da Jogabilidade). */
function jExtra(g, d, sec) {
  const itens = d[sec] || [], pag = WIKI_PAG[sec]
  const link = d.wiki && pag ? `<p class="jv-nota" style="margin:1rem 0 0"><a href="${esc(d.wiki + pag)}" target="_blank" rel="noopener noreferrer">${jt('wk_link')}</a></p>` : ''
  return `${jCab(sec)}${jNota(jt('wk')[sec])}${itens.length ? `<div class="jv-lista">${itens.map(jCardJog).join('')}</div>` : jVazio()}${link}`
}
