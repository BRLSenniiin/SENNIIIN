'use strict'

/* ════════════════════════════════════════════
   TRILHA SONORA e DETALHES — duas abas do bloco "O jogo". Dados em JOGOS[id]:
     trilhaTexto: [ blocos ]  texto sobre a dinâmica da trilha (mesmos blocos da Jogabilidade: h, p, ul, dest, img)
     trilha: [ { t: 'Nome da música', por: 'Nome do artista', d: { pt, en } (descrição curta, aparece abaixo do cartão),
                 audio: 'audio/faixa.mp3' (arquivo na sua pasta: é o que o botão de play toca; sem ele o play fica desativado; dur: '3:12' mostra o tempo total),
                 youtube: 'ID_DO_VIDEO' (só o botão da direita, que abre o vídeo no YouTube; não há player embutido),
                 link: 'https://…' (opcional: troca o destino do botão da direita),
                 img: 'imagens/trilha/local.webp' (opcional: imagem do local onde a música toca; o play fica sobre ela),
                 onde: { pt: 'Setor de escritórios', en: 'Office Sector' } (opcional: etiqueta do local; com 2 ou mais locais aparece o filtro),
                 cor: '#c0392b' (opcional: cor do setor, no contorno e no equalizador enquanto toca) } ]
     detalhes: [ { cat: 'graficos'|'itens'|'combate'|'movimento'|'interface'|'mundo'|'jogatina' (ou outra chave sua), t: { pt, en }, d: { pt, en },
                   img: 'imagens/detalhes/x.webp', alt: { pt, en }, video: 'imagens/detalhes/x.mp4' (opcional, abre no pop-up) } ]
   ════════════════════════════════════════════ */
Object.assign(JT.pt.s, { trilha: 'Trilha sonora', detalhes: 'Detalhes', curiosidades: 'Curiosidades', vozes: 'Vozes', desenvolvedores: 'Desenvolvedores' })
Object.assign(JT.en.s, { trilha: 'Soundtrack', detalhes: 'Details', curiosidades: 'Trivia', vozes: 'Voices', desenvolvedores: 'Developers' })
JT.pt.adentrar = 'Adentrar →'
JT.en.adentrar = 'Step inside →'
JT.pt.og = { intro: 'Role para os lados e toque numa organização para abrir as informações dela.', ant: 'Anterior', prox: 'Próxima', lider: 'Personagem principal' }
JT.en.og = { intro: 'Scroll sideways and tap an organization to open its information.', ant: 'Previous', prox: 'Next', lider: 'Main character' }
Object.assign(ICONES_SEC, {   // Phosphor Icons duotone (MIT), embutidos como os demais
  trilha: '<path d="M208,164a28,28,0,1,1-28-28A28,28,0,0,1,208,164ZM52,168a28,28,0,1,0,28,28A28,28,0,0,0,52,168Z" opacity="0.2"/><path d="M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V110.25l112-28v51.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69ZM52,216a20,20,0,1,1,20-20A20,20,0,0,1,52,216ZM88,93.75V62.25l112-28v31.5ZM180,184a20,20,0,1,1,20-20A20,20,0,0,1,180,184Z"/>',
  detalhes: '<path d="M224,56v82.06l-23.72-23.72a8,8,0,0,0-11.31,0L163.31,140,113.66,90.34a8,8,0,0,0-11.32,0L64,128.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"/><path d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,56H216v62.75l-10.07-10.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L72,109.37ZM184,200H40V88H56v80a16,16,0,0,0,16,16H184Zm32-32H72V132l36-36,49.66,49.66a8,8,0,0,0,11.31,0L194.63,120,216,141.38V168ZM160,84a12,12,0,1,1,12,12A12,12,0,0,1,160,84Z"/>',
  curiosidades: '<circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M96 100a32 32 0 1 1 44 29.6c-8 3.6-12 9.6-12 18.4" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="128" cy="184" r="9" fill="currentColor"/>',
  vozes: '<rect x="80" y="24" width="96" height="144" rx="48" opacity="0.2" fill="currentColor"/><rect x="80" y="24" width="96" height="144" rx="48" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M48 128a80 80 0 0 0 160 0M128 208v24M96 232h64" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  desenvolvedores: '<rect x="24" y="48" width="208" height="160" rx="16" opacity="0.2" fill="currentColor"/><rect x="24" y="48" width="208" height="160" rx="16" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M92 104l-28 24 28 24M164 104l28 24-28 24M142 96l-28 64" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
})
JPCT_FORA.push('trilha', 'detalhes', 'curiosidades', 'vozes', 'desenvolvedores')                 // sem porcentagem "descoberto": são abas de conteúdo livre
JT.pt.cv = { intro_c: 'Fatos e bastidores do jogo.', intro_v: 'Quem dá voz aos personagens. Toque em um nome para ver a ficha, com outros trabalhos e galeria.', intro_d: 'Quem criou e desenvolveu o jogo. Toque em um nome para ver a ficha, com outros projetos e galeria.', voz_de: 'Voz de', link: 'Saiba mais', fonte: 'Fontes: créditos na wiki oficial do jogo, Wikipedia e imprensa especializada.',
  neste: 'Neste jogo', bio: 'Sobre', trabalhos: 'Outros trabalhos', galeria: 'Galeria', todos: 'Todos', trab1: 'trabalho', trabs: 'trabalhos', sem: 'Nenhum outro trabalho cadastrado ainda.', gal_v: 'Personagens mais dublados', gal_d: 'Outros projetos', ant: 'Anterior', prox: 'Próxima', tambem_v: 'Também está em Vozes', tambem_d: 'Também está em Desenvolvedores', fechar: 'Fechar ficha',
  tipos: { jogo: 'Jogos', filme: 'Filmes', serie: 'Séries', anime: 'Animes', livro: 'Livros', outro: 'Outros' }, tipo1: { jogo: 'Jogo', filme: 'Filme', serie: 'Série', anime: 'Anime', livro: 'Livro', outro: 'Outro' } }
JT.en.cv = { intro_c: 'Facts and behind-the-scenes of the game.', intro_v: 'Who voices the characters. Tap a name to see the profile, with other work and a gallery.', intro_d: 'Who created and developed the game. Tap a name to see the profile, with other projects and a gallery.', voz_de: 'Voice of', link: 'Learn more', fonte: 'Sources: credits on the game\'s official wiki, Wikipedia and specialist press.',
  neste: 'In this game', bio: 'About', trabalhos: 'Other work', galeria: 'Gallery', todos: 'All', trab1: 'credit', trabs: 'credits', sem: 'No other work added yet.', gal_v: 'Most voiced characters', gal_d: 'Other projects', ant: 'Previous', prox: 'Next', tambem_v: 'Also in Voices', tambem_d: 'Also in Developers', fechar: 'Close profile',
  tipos: { jogo: 'Games', filme: 'Films', serie: 'Series', anime: 'Anime', livro: 'Books', outro: 'Other' }, tipo1: { jogo: 'Game', filme: 'Film', serie: 'Series', anime: 'Anime', livro: 'Book', outro: 'Other' } }
JT.pt.tr = { faixas: 'Faixas', intro: 'Toque no botão de uma faixa para ouvir.', ouvir: 'Ouvir', pausar: 'Pausar', por: 'Por', onde: 'Onde toca', yt_abrir: 'Abrir no YouTube', sem_audio: 'Áudio em breve', erro: 'Não foi possível carregar o áudio.', pos: 'Posição na faixa', local: 'Local da música', todos: 'Todos' }
JT.en.tr = { faixas: 'Tracks', intro: 'Tap a track\'s button to listen.', ouvir: 'Play', pausar: 'Pause', por: 'By', onde: 'Plays at', yt_abrir: 'Open on YouTube', sem_audio: 'Audio coming soon', erro: 'Could not load the audio.', pos: 'Track position', local: 'Music location', todos: 'All' }

/* ── Trilha sonora ── */
var TR = { audio: null, i: -1 }
const TR_UI = { loc: 'todos' }          // filtro de local da trilha
const TR_SVG_PL = '<svg class="pl" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.2v13.6a1 1 0 0 0 1.5.86l11-6.8a1 1 0 0 0 0-1.72l-11-6.8A1 1 0 0 0 8 5.2z"/></svg>'
const TR_SVG_PA = '<svg class="pa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4.2" height="14" rx="1.2"/><rect x="13.8" y="5" width="4.2" height="14" rx="1.2"/></svg>'
const trFmt = s => { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0') }

function jCardFaixa(x, i) {
  const T = jt('tr'), tem = !!x.audio, nome = esc(x.t)
  const cap = x.img ? `<img class="tr-cap" src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onload="this.parentNode.classList.add('tem')" onerror="this.remove()">` : ''
  const cor = x.cor && /^(#[0-9a-f]{3,8}|var\(--[a-z0-9-]+\))$/i.test(x.cor) ? ` style="--cor:${x.cor}"` : ''
  const onde = trLocRot(x)
  const url = x.link || (x.youtube ? 'https://www.youtube.com/watch?v=' + encodeURIComponent(x.youtube) : '')
  return `<article class="tr-item" id="tr-${i}"${cor}>
    <div class="tr-card">
      <button class="tr-play" type="button" data-action="trplay" data-i="${i}" aria-pressed="false" aria-label="${T.ouvir}: ${nome}"${tem ? '' : ` disabled title="${T.sem_audio}"`}>${cap}${TR_SVG_PL}${TR_SVG_PA}</button>
      <div class="tr-info">${x.por ? `<span class="tr-por mono">${esc(x.por)}</span>` : ''}<h3 class="tr-t">${nome}</h3></div>
      <span class="tr-eq" aria-hidden="true"><i></i><i></i><i></i></span>
      ${url ? `<a class="tr-ext" href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="${T.yt_abrir}: ${nome}" title="${T.yt_abrir}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor"/></svg></a>` : '<span></span>'}
    </div>
    ${onde ? `<p class="tr-onde mono"><i aria-hidden="true"></i>${esc(onde)}</p>` : ''}
    ${x.audio ? `<div class="tr-bar"><span class="mono tr-tempo">0:00</span><input class="tr-seek" type="range" min="0" max="1000" value="0" data-i="${i}" aria-label="${T.pos}"><span class="mono tr-total">${esc(x.dur || '0:00')}</span></div>` : ''}
    <p class="tr-erro" role="status"></p>
    ${x.d ? `<p class="tr-d">${esc(L(x.d))}</p>` : ''}
  </article>`
}

const trLocKey = x => x.onde ? (typeof x.onde === 'string' ? x.onde : (x.onde.pt || x.onde.en || '')) : ''
const trLocRot = x => x.onde ? (typeof x.onde === 'string' ? x.onde : L(x.onde)) : ''
function trCorpo(d) {
  const lista = (d.trilha || []).map((x, i) => ({ x, i })).filter(o => TR_UI.loc === 'todos' || trLocKey(o.x) === TR_UI.loc)
  return `<div class="tr-lista">${lista.map(o => jCardFaixa(o.x, o.i)).join('')}</div>`
}

function trPagina(d) {
  const T = jt('tr'), faixas = d.trilha || []
  const locs = [...new Set(faixas.map(trLocKey).filter(Boolean))]
  if (TR_UI.loc !== 'todos' && !locs.includes(TR_UI.loc)) TR_UI.loc = 'todos'
  const chip = (v, r, n) => `<button class="tf-chip" type="button" data-action="trloc" data-v="${esc(v)}" aria-pressed="${TR_UI.loc === v}">${esc(r)}<em>${n}</em></button>`
  const filtros = locs.length > 1 ? `<div class="tr-filtros"><div class="tf-grupo" role="group" aria-label="${T.local}">${chip('todos', T.todos, faixas.length)}${locs.map(k => chip(k, trLocRot(faixas.find(x => trLocKey(x) === k)), faixas.filter(x => trLocKey(x) === k).length)).join('')}</div></div>` : ''
  return `${jCab('trilha')}${(d.trilhaTexto || []).length ? jArtigo(d, 'trilhaTexto') : ''}${faixas.length
    ? `<h3 class="jv-sub mono">${T.faixas}<span class="it-n">${faixas.length}</span></h3>${jNota(T.intro)}${filtros}<div id="tr-corpo">${trCorpo(d)}</div>`
    : ((d.trilhaTexto || []).length ? '' : jVazio())}`
}

function trMarca(c, tocando) {                     // liga/desliga o estado "tocando" do cartão (botão, equalizador)
  const T = jt('tr'), b = c.querySelector('.tr-play')
  c.classList.toggle('tocando', tocando)
  b.setAttribute('aria-pressed', tocando)
  b.setAttribute('aria-label', (tocando ? T.pausar : T.ouvir) + ': ' + c.querySelector('.tr-t').textContent)
}

function trParar() {                               // para o que estiver tocando e devolve o cartão ao estado inicial
  const a = TR.audio
  if (a) { a.onplay = a.onpause = a.ontimeupdate = a.onloadedmetadata = a.onended = a.onerror = null; a.pause(); a.removeAttribute('src'); try { a.load() } catch (e) {} }
  TR.audio = null; TR.i = -1
  document.querySelectorAll('.tr-item.on').forEach(c => {
    c.classList.remove('on')
    trMarca(c, false)
    const s = c.querySelector('.tr-seek'), t = c.querySelector('.tr-tempo'), e = c.querySelector('.tr-erro')
    if (s) s.value = 0
    if (t) t.textContent = '0:00'
    if (e) e.textContent = ''
  })
}

function trTocar(i) {
  const d = JOGOS[JOGO_UI.id] || {}, x = (d.trilha || [])[i], c = $('tr-' + i), T = jt('tr')
  if (!x || !c) return
  if (TR.i === i && TR.audio) { if (TR.audio.paused) TR.audio.play().catch(() => {}); else TR.audio.pause(); return }   // mesma faixa: pausa / retoma
  if (!x.audio) return
  trParar()
  TR.i = i; c.classList.add('on')
  {
    const a = new Audio(x.audio); TR.audio = a
    const seek = c.querySelector('.tr-seek'), tempo = c.querySelector('.tr-tempo'), total = c.querySelector('.tr-total')
    a.onplay = () => trMarca(c, true)
    a.onpause = () => trMarca(c, false)
    a.onloadedmetadata = () => { if (isFinite(a.duration)) total.textContent = trFmt(a.duration) }
    a.ontimeupdate = () => {
      tempo.textContent = trFmt(a.currentTime)
      if (isFinite(a.duration) && a.duration > 0 && document.activeElement !== seek) seek.value = Math.round(a.currentTime / a.duration * 1000)
    }
    a.onended = () => trParar()
    a.onerror = () => { c.querySelector('.tr-erro').textContent = T.erro; trMarca(c, false) }
    a.play().catch(() => {})
  }
}

/* ── Detalhes: mural de imagens. JOGOS[id].detalhes — cada item é uma imagem do mural (imagens coladas, de tamanhos diferentes):
     { t: { pt, en }, d: { pt, en } (legenda, opcionais; aparecem quando a imagem com notas é aberta), img: 'imagens/detalhes/x.webp' (ou .gif), alt: { pt, en },
       prop: '16 / 9' (opcional: reserva o espaço antes de carregar), larg: 2 ou 3 (opcional: ocupa 2 ou 3 colunas no mural),
       video: 'imagens/detalhes/x.mp4' (opcional: toca no próprio mural; sem notas),
       notas: [ { x: 62, y: 38 (ponto qualquer da imagem, em %), t: { pt, en } e/ou d: { pt, en } (texto preso por uma linha ao ponto),
                  ou img: 'rosto.webp' + alt: { pt, en } (só a foto, sem texto; para indicar o autor),
                  lado: 'e' ou 'd' (opcional: de que lado fica; por padrão x < 50 vai para a esquerda) } ] }
   No mural as imagens ficam coladas. Ao clicar numa imagem com notas, ela se abre ali mesmo (sem pop-up), mostrando as linhas, os textos e as fotos; clicar de novo fecha. */
const DT_LADO_MIN = 640                            // largura do palco a partir da qual os textos ficam nas laterais
const dtNotasDe = x => x.video || !x.img ? [] : (x.notas || []).filter(o => isFinite(o.x) && isFinite(o.y) && (o.t || o.d || o.img))

function dtPeca(x, i) {
  const t = L(x.t || ''), notas = dtNotasDe(x), alt = x.alt ? L(x.alt) : t
  const l = x.larg >= 2 ? ' l' + Math.min(3, Math.floor(x.larg)) : ''
  const prop = x.prop && /^\d+(\.\d+)?\s*\/\s*\d+(\.\d+)?$/.test(x.prop) ? ` style="--p:${x.prop}"` : ''
  const midia = x.video
    ? `<video src="${esc(x.video)}"${x.img ? ` poster="${esc(x.img)}"` : ''} controls playsinline loop muted preload="metadata" onloadeddata="this.parentNode.classList.add('tem')"></video>`
    : x.img ? `<img src="${esc(x.img)}" alt="${esc(alt)}" loading="lazy" decoding="async" onload="dtCarregou(this)" onerror="this.remove()">` : ''
  if (!notas.length) return `<div class="dt-peca${l}"><figure class="dt-fig"><div class="dt-thumb"${prop}${t ? ` title="${esc(t)}"` : ''}>${ICONE_IMG}${midia}</div></figure></div>`
  const leg = t || x.d ? `<figcaption class="dt-leg">${t ? `<b class="dt-t">${esc(t)}</b>` : ''}${x.d ? `<span class="dt-d">${esc(L(x.d))}</span>` : ''}</figcaption>` : ''
  return `<div class="dt-peca${l}" data-i="${i}"><figure class="dt-fig" data-i="${i}">
    <button class="dt-thumb dt-capa" type="button" data-action="dtabre" data-i="${i}" aria-expanded="false"${prop}${t ? ` aria-label="${esc(t)}"` : ''}>${ICONE_IMG}${midia}</button>
    <div class="dt-palco" hidden>
      <div class="dt-col e"></div>
      <div class="dt-cima"></div>
      <div class="dt-quadro"><img class="dt-midia" src="${esc(x.img)}" alt="${esc(alt)}" decoding="async" data-action="dtabre" data-i="${i}" onload="dtFigImg(this)" onerror="this.remove()">${notas.map((o, k) => `<span class="dt-ponto" data-k="${k}" hidden></span>`).join('')}</div>
      <div class="dt-col d"></div><div class="dt-baixo"></div><svg class="dt-linhas" aria-hidden="true"></svg></div>${leg}</figure></div>`
}

function dtCarregou(im) {                          // a peça assume a proporção real da imagem assim que ela carrega
  const p = im.parentNode
  if (im.naturalWidth) p.style.setProperty('--p', im.naturalWidth + ' / ' + im.naturalHeight)
  p.classList.add('tem')
}

function dtPagina(d) {
  const tudo = d.detalhes || []
  return `${jCab('detalhes')}${tudo.length ? `<div class="dt-mural">${tudo.map(dtPeca).join('')}</div>` : jVazio()}`
}

/* Mural: cada peça ocupa tantas "linhas" de 4 px quanto a sua altura pede; assim as imagens se encaixam coladas, como tijolos */
const DT_RO = typeof ResizeObserver === 'function' ? new ResizeObserver(es => es.forEach(e => dtSpan(e.target.parentNode))) : null
const DT_RF = typeof ResizeObserver === 'function' ? new ResizeObserver(es => es.forEach(e => dtFigLayout(e.target))) : null
function dtSpan(p) {
  const h = p.firstElementChild ? p.firstElementChild.getBoundingClientRect().height : 0
  if (h) p.style.gridRowEnd = 'span ' + Math.ceil((h + 6) / 4)
}
function dtMural() {
  const m = document.querySelector('.dt-mural')
  if (DT_RO) DT_RO.disconnect()
  if (DT_RF) DT_RF.disconnect()
  if (!m || !DT_RO) return
  m.querySelectorAll('.dt-peca').forEach(p => { DT_RO.observe(p.firstElementChild); dtSpan(p) })
  m.querySelectorAll('.dt-fig[data-i]').forEach(f => { if (DT_RF) DT_RF.observe(f) })
  m.classList.add('pronto')
}
function dtAbre(i) {                               // clique na imagem: abre (mostra linhas e textos) ou fecha
  const p = document.querySelector(`.dt-peca[data-i="${i}"]`); if (!p) return
  const f = p.querySelector('.dt-fig'), pal = p.querySelector('.dt-palco'), cp = p.querySelector('.dt-capa')
  const abrir = !p.classList.contains('aberta')
  p.classList.toggle('aberta', abrir); pal.hidden = !abrir; cp.hidden = abrir; cp.setAttribute('aria-expanded', String(abrir))
  f.classList.remove('visto', 'ja')
  if (abrir) {
    dtFigLayout(f)
    requestAnimationFrame(() => { f.classList.add('visto'); setTimeout(() => f.classList.add('ja'), 1800) })
    p.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  } else cp.focus({ preventScroll: true })
  dtSpan(p)
}

/* Imagem com textos */
function dtFigImg(el) { dtFigLayout(el.closest('.dt-fig')) }

function dtNotaHTML(o, k, lado) {
  const rosto = o.img ? `<img class="dt-rosto" src="${esc(o.img)}" alt="${esc(L(o.alt || o.t || ''))}" decoding="async" onload="dtFigImg(this)" onerror="this.remove()">` : ''
  const txt = o.t || o.d ? `<div class="dt-nota-txt">${o.t ? `<h4 class="dt-nota-t">${esc(L(o.t))}</h4>` : ''}${o.d ? `<p class="dt-nota-d">${esc(L(o.d))}</p>` : ''}</div>` : ''
  return `<div class="dt-nota${txt ? '' : ' so-rosto'}" data-k="${k}" data-lado="${lado}">${rosto}${txt}</div>`
}
const dtLadoDe = o => o.lado === 'e' || o.lado === 'd' ? o.lado : (o.x < 50 ? 'e' : 'd')

function dtFigMontar(pal, notas, lado) {           // distribui os textos: laterais (largo) ou em volta da imagem, acima e abaixo, perto do seu ponto (estreito)
  const e = pal.querySelector('.dt-col.e'), d = pal.querySelector('.dt-col.d'), b = pal.querySelector('.dt-baixo'), c = pal.querySelector('.dt-cima')
  e.innerHTML = d.innerHTML = b.innerHTML = c.innerHTML = ''
  if (lado) {
    notas.map((o, k) => k).sort((a, z) => notas[a].y - notas[z].y).forEach(k => {
      const ld = dtLadoDe(notas[k])
      ;(ld === 'e' ? e : d).insertAdjacentHTML('beforeend', dtNotaHTML(notas[k], k, ld))
    })
  } else {
    const alto = [], baixo = [], ks = notas.map((o, k) => k)
    ks.forEach(k => (notas[k].y < 50 ? alto : baixo).push(k))
    while (alto.length > 3) baixo.push(alto.splice(alto.reduce((m, k, n) => notas[k].y > notas[alto[m]].y ? n : m, 0), 1)[0])
    while (baixo.length > 3) alto.push(baixo.splice(baixo.reduce((m, k, n) => notas[k].y < notas[baixo[m]].y ? n : m, 0), 1)[0])
    ;[[alto, c, 'c'], [baixo, b, 'b']].forEach(([lst, el, ld]) => lst.sort((a, z) => notas[a].x - notas[z].x).forEach(k => el.insertAdjacentHTML('beforeend', dtNotaHTML(notas[k], k, ld))))
  }
  pal.classList.toggle('lado', lado); pal.classList.remove('pronto'); pal.dataset.modo = lado ? 'l' : 'b'
  pal.style.setProperty('--ce', lado && e.children.length ? 'clamp(9rem, 22%, 14rem)' : '0px')
  pal.style.setProperty('--cd', lado && d.children.length ? 'clamp(9rem, 22%, 14rem)' : '0px')
}

function dtFigLayout(f) {
  if (!f || !f.dataset.i) return
  const x = ((JOGOS[JOGO_UI.id] || {}).detalhes || [])[+f.dataset.i]; if (!x) return
  const notas = dtNotasDe(x), pal = f.querySelector('.dt-palco'), W = f.getBoundingClientRect().width
  if (!W || !pal || pal.hidden) return
  const lado = W >= DT_LADO_MIN
  if (pal.dataset.modo !== (lado ? 'l' : 'b')) dtFigMontar(pal, notas, lado)
  const q = pal.querySelector('.dt-quadro'), im = q.querySelector('img.dt-midia')
  if (!im || !im.clientWidth) return
  q.querySelectorAll('.dt-ponto').forEach(p => {                   // pontos sobre a imagem, em % do tamanho real dela na tela
    const o = notas[+p.dataset.k]; if (!o) return
    p.style.left = (im.offsetLeft + im.clientWidth * o.x / 100) + 'px'
    p.style.top = (im.offsetTop + im.clientHeight * o.y / 100) + 'px'
    p.hidden = false
  })
  dtFigPosicionar(pal)
  dtFigLinhas(pal, notas)
}

const dtAlvo = c => c.classList.contains('so-rosto') ? c.querySelector('.dt-rosto') || c : c
function dtFigPosicionar(pal) {                    // largo: cada texto fica na altura do seu ponto; se baterem, o de baixo desce
  if (!pal.classList.contains('lado')) return
  const P = pal.getBoundingClientRect()
  pal.querySelectorAll('.dt-col').forEach(col => {
    const it = [...col.children].map(c => {
      const a = pal.querySelector(`.dt-ponto[data-k="${c.dataset.k}"]`).getBoundingClientRect(), h = c.offsetHeight
      return { c, y: a.top + a.height / 2 - P.top, h, m: c.classList.contains('so-rosto') ? h / 2 : Math.min(18, h / 2) }
    }).sort((a, b) => a.y - b.y)
    let fim = 0
    it.forEach(o => { const top = Math.max(0, o.y - o.m, fim); o.c.style.top = top + 'px'; fim = top + o.h + 10 })
    col.style.minHeight = Math.max(0, fim - 10) + 'px'
  })
  pal.classList.add('pronto')
}

function dtFigLinhas(pal, notas) {                 // uma linha por texto, no mesmo traço da palavra-chave da Visão Geral
  const svg = pal.querySelector('.dt-linhas'), P = pal.getBoundingClientRect(); if (!svg || !P.width) return
  const lado = pal.classList.contains('lado'), im = pal.querySelector('img.dt-midia'), I = im ? im.getBoundingClientRect() : null
  const itens = []
  pal.querySelectorAll('.dt-nota').forEach((c, i) => {
    const pt = pal.querySelector(`.dt-ponto[data-k="${c.dataset.k}"]`)
    if (!pt || pt.hidden) return
    const a = pt.getBoundingClientRect(), r = dtAlvo(c).getBoundingClientRect(), ld = c.dataset.lado
    const x1 = a.left + a.width / 2 - P.left, y1 = a.top + a.height / 2 - P.top
    if (lado) {
      const cy = c.classList.contains('so-rosto') ? r.top - P.top + r.height / 2 : r.top - P.top + Math.min(18, r.height / 2)
      const x2 = (ld === 'e' ? r.right : r.left) - P.left, gx = x2 + (ld === 'e' ? 12 : -12)
      itens.push({ i, x2, cy, d: `M${x1.toFixed(1)} ${y1.toFixed(1)}H${gx.toFixed(1)}V${cy.toFixed(1)}H${x2.toFixed(1)}` })
    } else {                                                       // estreito: o texto fica acima ou abaixo da imagem; a linha sobe/desce do ponto, anda de lado e entra no texto
      const x2 = r.left + r.width / 2 - P.left, cy = (ld === 'c' ? r.bottom : r.top) - P.top
      itens.push({ i, x1, x2, cy, ld, top: I ? I.top - P.top : 0, bot: I ? I.bottom - P.top : P.height, y1 })
    }
  })
  if (!lado) ['c', 'b'].forEach(ld => {
    const g = itens.filter(o => o.ld === ld), dir = g.filter(o => o.x2 > o.x1 + 2).sort((a, z) => z.x1 - a.x1).concat(g.filter(o => o.x2 < o.x1 - 2).sort((a, z) => a.x1 - z.x1))
    g.forEach(o => {
      const n = dir.indexOf(o), bus = ld === 'c' ? o.top - 6 - 5 * Math.max(0, n) : o.bot + 6 + 5 * Math.max(0, n)
      o.d = n < 0 ? `M${o.x1.toFixed(1)} ${o.y1.toFixed(1)}V${o.cy.toFixed(1)}` : `M${o.x1.toFixed(1)} ${o.y1.toFixed(1)}V${bus.toFixed(1)}H${o.x2.toFixed(1)}V${o.cy.toFixed(1)}`
    })
  })
  svg.setAttribute('viewBox', `0 0 ${P.width} ${P.height}`)
  svg.innerHTML = itens.map(o => `<path class="dt-fio" pathLength="1" style="--i:${o.i}" d="${o.d}"/><circle class="dt-fio-ponta" style="--i:${o.i}" r="3.5" cx="${o.x2.toFixed(1)}" cy="${o.cy.toFixed(1)}"/>`).join('')
}

/* ── Curiosidades, Vozes, Desenvolvedores. JOGOS[id].curiosidades / .vozes / .desenvolvedores
     curiosidades: [ { t: { pt, en }, d: { pt, en }, img: 'imagens/curiosidades/x.webp' (opcional), alt: { pt, en } } ]
     vozes e desenvolvedores usam a mesma ficha: um cartão que, ao tocar, abre ali mesmo a ficha completa da pessoa:
       { nome: 'Nome', papel: { pt, en } (vozes: personagem) ou cargo: { pt, en } (desenvolvedores), img: 'foto.webp' (opcional),
         neste: { pt, en } (opcional: o que fez neste jogo), bio: { pt, en } (opcional),
         links: [ { t: 'Wikipedia', url: 'https://…' } ] (opcional),
         trabalhos: [ { t: 'Título' ou { pt, en }, ano: 2019, tipo: 'jogo'|'filme'|'serie'|'anime'|'livro'|'outro', papel: { pt, en } (personagem ou função),
                        d: { pt, en } (opcional), img: 'capa.webp' (opcional), link: 'https://…' (opcional) } ],
         galeria: [ { img: 'x.webp', t: { pt, en } (legenda opcional), alt: { pt, en } } ] (opcional: personagens que dublou, arte, fotos de trabalho) }
     Sem bio, trabalhos, galeria, neste nem links o cartão fica simples, sem abrir. */
