'use strict'

const CV_PESSOA = '<svg class="ico" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false"><circle cx="128" cy="96" r="48"/><path d="M32 224a96 96 0 0 1 192 0Z"/></svg>'
function cvCuriosidades(d, sec = 'curiosidades') {
  const T = jt('cv'), l = d[sec] || []
  return `${jCab(sec)}${l.length ? `${sec === 'curiosidades' ? jNota(T.intro_c) : ''}<div class="cv-lista">${l.map((x, i) => `<article class="cv-card">${x.img ? `<img class="cv-img" src="${esc(x.img)}" alt="${esc(L(x.alt || x.t || ''))}" loading="lazy" decoding="async" onerror="this.remove()">` : ''}<div class="cv-txt"><span class="cv-n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(L(x.t || ''))}</h3><p>${esc(L(x.d || ''))}</p></div></article>`).join('')}</div>` : jVazio()}`
}
const cvNorm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f"]/g, '').replace(/\s+/g, ' ').trim()
const cvTipo = t => ['jogo', 'filme', 'serie', 'anime', 'livro', 'outro'].includes(t.tipo) ? t.tipo : (t.tipo ? 'outro' : 'jogo')
const cvTrabs = x => (x.trabalhos || []).filter(t => t && t.t).slice().sort((a, b) => (b.ano || 0) - (a.ano || 0))
function cvPessoas(d, sec) {
  const T = jt('cv'), l = d[sec] || [], papel = sec === 'vozes' ? 'papel' : 'cargo', outro = sec === 'vozes' ? 'desenvolvedores' : 'vozes'
  return `${jCab(sec)}${l.length ? `${jNota(sec === 'vozes' ? T.intro_v : T.intro_d)}<div class="cv-pessoas" data-s="${sec}">${l.map((x, i) => cvPessoa(x, i, sec, papel, outro)).join('')}</div><p class="cv-fonte">${esc((d.notas && d.notas.pessoas) ? L(d.notas.pessoas) : T.fonte)}</p>` : jVazio()}`
}
function cvPessoa(x, i, sec, papel, outro) {
  const T = jt('cv'), tr = cvTrabs(x), rico = !!(x.bio || x.neste || tr.length || (x.galeria || []).length || (x.links || []).length)
  const topo = `<span class="cv-foto">${CV_PESSOA}${x.img ? `<img src="${esc(x.img)}" alt="${esc(x.nome || '')}" loading="lazy" decoding="async" onerror="this.remove()">` : ''}</span>
    <span class="cv-info"><span class="cv-nome">${esc(x.nome || '')}</span>${x[papel] ? `<span class="cv-papel">${sec === 'vozes' ? `${esc(T.voz_de)} ` : ''}<b>${esc(L(x[papel]))}</b></span>` : ''}${tr.length ? `<span class="cv-cont">${tr.length} ${tr.length === 1 ? T.trab1 : T.trabs}</span>` : ''}</span>${rico ? '<span class="cv-seta" aria-hidden="true"></span>' : ''}`
  if (!rico) return `<article class="cv-pessoa"><div class="cv-topo">${topo}</div></article>`
  return `<article class="cv-pessoa" data-i="${i}"><button class="cv-topo" type="button" data-action="cvabre" data-s="${sec}" data-i="${i}" aria-expanded="false">${topo}</button><div class="cv-ficha" hidden>${cvFicha(x, sec, papel, outro, tr)}</div></article>`
}
function cvTrab(t) {
  const T = jt('cv'), k = cvTipo(t), sub = [T.tipo1[k], t.ano].filter(Boolean).join(' · ')
  return `<li class="cv-trab" data-tipo="${k}"><span class="cv-capa">${ICONE_IMG}${t.img ? `<img src="${esc(t.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''}</span>
    <span class="cv-tt"><b>${esc(L(t.t))}</b><span class="cv-sub">${esc(sub)}</span>${t.papel ? `<span class="cv-pp">${esc(L(t.papel))}</span>` : ''}${t.d ? `<span class="cv-dd">${esc(L(t.d))}</span>` : ''}${t.link ? `<a class="cv-link" href="${esc(t.link)}" target="_blank" rel="noopener noreferrer">${esc(T.link)} →</a>` : ''}</span></li>`
}
function cvFicha(x, sec, papel, outro, tr) {
  const T = jt('cv'), gal = (x.galeria || []).filter(g => g && g.img)
  const tipos = [...new Set(tr.map(cvTipo))]
  const neste = x.neste || x[papel] ? `<section class="cv-sec"><h4>${esc(T.neste)}</h4><p>${sec === 'vozes' && x[papel] ? `${esc(T.voz_de)} <b>${esc(L(x[papel]))}</b>${x.neste ? '. ' : ''}` : ''}${x.neste ? esc(L(x.neste)) : (sec === 'vozes' ? '' : `<b>${esc(L(x[papel]))}</b>`)}</p></section>` : ''
  const bio = x.bio ? `<section class="cv-sec"><h4>${esc(T.bio)}</h4><p>${esc(L(x.bio))}</p></section>` : ''
  const links = (x.links || []).map(k => `<a class="cv-bt" href="${esc(k.url)}" target="_blank" rel="noopener noreferrer">${esc(k.t || k.url)} ↗</a>`).join('')
  const d = JOGOS[JOGO_UI.id] || {}, tambem = (d[outro] || []).some(y => cvNorm(y.nome) === cvNorm(x.nome))
    ? `<a class="cv-bt cv-tambem" href="#jogo/${esc(JOGO_UI.id)}/${outro}">${esc(outro === 'vozes' ? T.tambem_v : T.tambem_d)} →</a>` : ''
  const chips = tipos.length > 1 ? `<div class="cv-chips" role="group">${['todos', ...tipos].map((k, n) => `<button type="button" class="cv-chip" data-action="cvtipo" data-v="${k}" aria-pressed="${n === 0}">${esc(k === 'todos' ? T.todos : T.tipos[k])}</button>`).join('')}</div>` : ''
  const car = gal.length ? `<section class="cv-sec cv-dir"><h4>${esc(T[sec === 'vozes' ? 'gal_v' : 'gal_d'])}</h4><div class="cv-car">
      <button class="cv-roda ant" type="button" data-action="cvroda" data-d="-1" aria-label="${esc(T.ant)}" aria-disabled="true">‹</button>
      <div class="cv-pista" tabindex="0" role="region" aria-label="${esc(T[sec === 'vozes' ? 'gal_v' : 'gal_d'])}">${gal.map(g => `<figure><img src="${esc(g.img)}" alt="${esc(L(g.alt || g.t || ''))}" loading="lazy" decoding="async" onload="cvCarEstado(this)" onerror="this.closest('figure').remove()">${g.t ? `<figcaption>${esc(L(g.t))}</figcaption>` : ''}</figure>`).join('')}</div>
      <button class="cv-roda prox" type="button" data-action="cvroda" data-d="1" aria-label="${esc(T.prox)}">›</button></div></section>` : ''
  return `<div class="cv-cabeca${car ? ' com-gal' : ''}"><div class="cv-esq">${bio}${neste}${links || tambem ? `<div class="cv-links">${links}${tambem}</div>` : ''}</div>${car}</div>
    <section class="cv-sec"><h4>${esc(T.trabalhos)}</h4>${tr.length ? `${chips}<ul class="cv-trabs" data-f="">${tr.map(cvTrab).join('')}</ul>` : `<p class="cv-vazio">${esc(T.sem)}</p>`}</section>
    <button class="cv-bt cv-fecha" type="button" data-action="cvabre" data-s="${sec}" data-i="${(d[sec] || []).indexOf(x)}">${esc(T.fechar)}</button>`
}
function cvCarEstado(el) {                         // setas da galeria: some a que não tem mais para onde rolar
  const c = el.closest('.cv-car'); if (!c) return
  const p = c.querySelector('.cv-pista'), max = p.scrollWidth - p.clientWidth
  c.querySelector('.ant').setAttribute('aria-disabled', String(p.scrollLeft < 4))
  c.querySelector('.prox').setAttribute('aria-disabled', String(p.scrollLeft > max - 4))
}
function cvRoda(el) {
  const p = el.closest('.cv-car').querySelector('.cv-pista')
  p.scrollBy({ left: +el.dataset.d * p.clientWidth * .8, behavior: 'smooth' })
}
document.addEventListener('scroll', e => { if (e.target && e.target.classList && e.target.classList.contains('cv-pista')) cvCarEstado(e.target) }, true)
function cvAbre(s, i) {                            // abre a ficha ali mesmo (uma por vez); tocar de novo fecha
  const gr = document.querySelector(`.cv-pessoas[data-s="${s}"]`); if (!gr) return
  gr.querySelectorAll('.cv-pessoa[data-i]').forEach(p => {
    const on = +p.dataset.i === i && !p.classList.contains('aberta')
    p.classList.toggle('aberta', on); p.querySelector('.cv-ficha').hidden = !on; p.querySelector('.cv-topo').setAttribute('aria-expanded', String(on))
  })
  const a = gr.querySelector('.aberta')
  if (a) { a.querySelectorAll('.cv-pista').forEach(cvCarEstado); a.scrollIntoView({ block: 'nearest', behavior: 'smooth' }) }
}
function cvTipoFiltro(el) {
  const f = el.closest('.cv-ficha'), v = el.dataset.v
  f.querySelector('.cv-trabs').dataset.f = v === 'todos' ? '' : v
  f.querySelectorAll('.cv-chip').forEach(b => b.setAttribute('aria-pressed', String(b === el)))
}

/* Personalização (seção 'personalizacao'): a figura fica ao centro; cada ponto (bolinha) sobre ela é ligado por uma linha ao item PNG ao lado.
   JOGOS[id].personalizacao: [ { id: 'curto', nome: { pt, en }, nota: { pt, en } (opcional), tipo: 'pessoa' | 'carro' | 'arma' (silhueta e proporção quando não há img),
     img: 'imagens/x.png' (PNG da figura; sem img aparece a silhueta), ar: '3 / 5' (proporção da figura, opcional),
     pontos: [ { x: 50, y: 8 (posição da bolinha na figura, em %), ty: 8 (altura do item na lateral, em %; padrão = y), lado: 'e' | 'd' (padrão: esquerda se x < 50),
       nome: { pt, en }, d: { pt, en } (opcional), img: 'imagens/item.png' (PNG do item; sem img aparece a moldura vazia),
       itens: [ { nome, d, img }, ... ] (os itens do ponto, ex.: boné, touca, chapéu; o bloco mostra um e a seta › troca pelo próximo; use itens em todos os pontos; sem itens, o ponto vira um item só, sem seta) } ] } ]
   Itens do mesmo lado precisam de ty com pelo menos ~14% de diferença para não se sobreporem. Entradas sem pontos (blocos h/p) continuam saindo como artigo, depois. */
const PZ_SIL = {
  pessoa: ['3 / 5', '<svg viewBox="0 0 60 100" aria-hidden="true" focusable="false"><circle cx="30" cy="11" r="7"/><path d="M19 22H41Q47 23 48 30L51 58H45L43 38L42 58L41 96H32L30 66L28 96H19L18 58L17 38L15 58H9L12 30Q13 23 19 22Z"/></svg>'],
  carro: ['1 / 1', '<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false"><path d="M6 62V54Q7 49 18 47L34 44L42 32Q44 30 48 30H66Q72 31 76 40L88 46Q95 48 95 56V62Z"/><circle cx="27" cy="63" r="8"/><circle cx="74" cy="63" r="8"/></svg>'],
  arma: ['1 / 1', '<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false"><path d="M12 38H78V50H58L54 58H46V80Q46 84 42 84H34Q30 84 30 80V50H12Z"/></svg>']
}
function jPersonaliza(d, sec, semCab) {
  const l = (d[sec] || []).filter(x => x.pontos), resto = (d[sec] || []).filter(x => !x.pontos)
  const item = x => {
    const sil = PZ_SIL[x.tipo] || PZ_SIL.pessoa, ar = x.ar || sil[0]
    const ps = x.pontos.map(p => Object.assign({}, p, { lado: p.lado || (p.x < 50 ? 'e' : 'd'), ty: typeof p.ty === 'number' ? p.ty : p.y }))
    const fig = x.img ? `<img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : sil[1]
    const pv = v => `<span class="pz-th">${ICONE_IMG}${v.img ? `<img src="${esc(v.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''}</span><span class="pz-tx"><b>${esc(L(v.nome))}</b>${v.d ? `<small>${esc(L(v.d))}</small>` : ''}</span>`
    const col = lado => ps.filter(p => p.lado === lado).map(p => {
      const vs = (p.itens || []).length ? p.itens : [p]           // todo ponto é um bloco só: mostra um item e a seta › troca pelo próximo
      const mais = vs.length > 1
      return `<div class="pz-it ${lado}${mais ? ' pz-multi' : ''}" style="top:${p.ty}%">${vs.map((v, k) => `<div class="pz-v"${k ? ' hidden' : ''}>${pv(v)}</div>`).join('')}${mais ? `<div class="pz-nav"><button class="pz-seta" type="button" data-action="pzvar" aria-label="${esc(L({ pt: 'Próximo item', en: 'Next item' }))}">›</button><span class="pz-pts" aria-hidden="true">${vs.map((v, k) => `<i${k ? '' : ' class="on"'}></i>`).join('')}</span></div>` : ''}</div>`
    }).join('')
    const linhas = ps.map(p => `<line x1="${p.lado === 'e' ? 30 : 70}" y1="${p.ty}" x2="${30 + p.x * 0.4}" y2="${p.y}"/>`).join('')
    return `<section class="pz-sub"><h3>${esc(L(x.nome))}</h3>${x.nota ? `<p>${esc(L(x.nota))}</p>` : ''}
      <div class="pz-stage"><svg class="pz-lin" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${linhas}</svg>
        <div class="pz-col">${col('e')}</div>
        <div class="pz-fig" style="--ar:${esc(ar)}">${fig}${ps.map(p => `<i class="pz-dot" style="left:${p.x}%;top:${p.y}%"></i>`).join('')}</div>
        <div class="pz-col">${col('d')}</div></div></section>`
  }
  return `${semCab ? '' : jCab(sec)}<div class="pz-lista">${l.map(item).join('')}</div>${resto.length ? jArtigo({ [sec]: resto }, sec) : ''}`
}
/* Atributos e progressão (seção 'atributos'): lista de tópicos; cada linha tem o ícone, o nome, a barra de progresso e o número máximo; clicar na linha (ícone incluído) abre o texto do tópico.
   JOGOS[id].atributos: [ { id, grupo: { pt, en } (opcional: abre um subtítulo quando muda), nome: { pt, en }, img: 'imagens/icone.png' (sem img aparece um ícone padrão),
     max: 100 (número máximo; sem max a barra fica vazia e o número vira —), unid: '%' (opcional), atual: 40 (opcional: preenche a barra até aí; sem atual a barra fica cheia),
     evolui: { pt, en }, onde: { pt, en }, d: { pt, en } (textos do tópico; linha em branco = novo parágrafo) } ]. Entradas sem nome (blocos h/p) continuam saindo como artigo, depois. */
const AT_ICO = '<svg viewBox="0 0 256 256" aria-hidden="true" focusable="false"><path d="M40 216V120M104 216V72M168 216V152M232 216V40" fill="none" stroke="currentColor" stroke-width="20" stroke-linecap="round"/></svg>'
/* Ícones dos atributos (base reutilizável para os guias de progressão de outros jogos): cada ícone é uma chave. Em cada atributo, `ico: 'chave'` escolhe o ícone;
   sem `ico`, vale o `id` do atributo; sem nenhum dos dois, aparece o ícone de barras padrão. Estilo único: traço de 2px, 24x24, cor do site. */
const AT_SEG = 10   // quantos retângulos tem a barra de progresso
const AT_SVG = d => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`
const AT_ICOS = {
  forca: AT_SVG('<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>'),
  cardio: AT_SVG('<path d="M12 20.5S4 15.8 4 9.8A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 8 2.2c0 6-8 10.7-8 10.7z"/><path d="M7 12h3l1.5-3 2 6 1.5-3h2"/>'),
  resistencia: AT_SVG('<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/>'),
  mira: AT_SVG('<circle cx="12" cy="12" r="6.5"/><path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5"/>'),
  furtividade: AT_SVG('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
  conducao: AT_SVG('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M3.5 11.5L10 12M20.5 11.5L14 12M12 14v7"/>'),
  corridas: AT_SVG('<path d="M5 21V4M5 4h13l-2.5 4 2.5 4H5"/>'),
  nado: AT_SVG('<path d="M3 9c2 2 4 2 6 0s4-2 6 0 4 2 6 0M3 15c2 2 4 2 6 0s4-2 6 0 4 2 6 0"/>'),
  animais: AT_SVG('<circle cx="6.5" cy="10" r="1.8"/><circle cx="10.5" cy="6.5" r="1.8"/><circle cx="15.5" cy="6.5" r="1.8"/><circle cx="19" cy="10" r="1.8"/><path d="M8 17c0-3 2-5 4.5-5s4.5 2 4.5 5c0 1.6-1.8 2.2-4.5 2.2S8 18.6 8 17z"/>'),
  veiculos: AT_SVG('<path d="M4 17v-5l2-5h12l2 5v5zM4 12h16"/><circle cx="8" cy="17" r="1.6"/><circle cx="16" cy="17" r="1.6"/>'),
  lojas: AT_SVG('<path d="M4 8h16l-1 12H5zM9 8V6a3 3 0 0 1 6 0v2"/>'),
  dinheiro: AT_SVG('<circle cx="12" cy="12" r="9"/><path d="M14.5 9.2c-.4-.8-1.300-1.200-2.500-1.200-1.500 0-2.500.7-2.500 1.800s1 1.500 2.500 1.800 2.500.7 2.500 1.900-1 1.800-2.500 1.800c-1.200 0-2.100-.4-2.500-1.300M12 6.500V8M12 16v1.500"/>'),
  nivel: AT_SVG('<path d="M12 3l2.700 5.600 6.100.9-4.400 4.300 1 6.100L12 17l-5.400 2.900 1-6.100L3.200 9.500l6.100-.9z"/>'),
  tempo: AT_SVG('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  colecionaveis: AT_SVG('<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9 4l-1 5 4 11M15 4l1 5-4 11"/>')
}
Object.assign(AT_ICOS, { forca_bruta: AT_ICOS.forca, folego: AT_ICOS.cardio, vida: AT_ICOS.resistencia, saude: AT_ICOS.resistencia, pontaria: AT_ICOS.mira, tiro: AT_ICOS.mira, furtivo: AT_ICOS.furtividade, direcao: AT_ICOS.conducao, natacao: AT_ICOS.nado, corrida: AT_ICOS.corridas, bichos: AT_ICOS.animais, carros: AT_ICOS.veiculos, lojas_: AT_ICOS.lojas, grana: AT_ICOS.dinheiro, xp: AT_ICOS.nivel, horas: AT_ICOS.tempo })
const atIco = x => AT_ICOS[x.ico] || AT_ICOS[x.id] || AT_ICO
function jAtributos(d, sec) {
  const l = (d[sec] || []).filter(x => x.nome), resto = (d[sec] || []).filter(x => !x.nome), T = jt('at')
  const par = v => L(v || '').split(/\n\s*\n/).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join('')
  const bloco = (rot, v) => v ? `<div><span class="ng-t">${rot}</span>${par(v)}</div>` : ''
  let g = ''
  const linha = x => {
    const tem = typeof x.max === 'number', pct = tem ? Math.max(0, Math.min(100, typeof x.atual === 'number' ? x.atual / x.max * 100 : 100)) : 0, cheios = pct > 0 ? Math.max(1, Math.round(pct / 100 * AT_SEG)) : 0
    const gr = x.grupo && L(x.grupo) !== g ? (g = L(x.grupo), `<p class="at-grupo">${esc(g)}</p>`) : ''
    const num = tem ? `${typeof x.atual === 'number' ? x.atual.toLocaleString(loc()) + ' / ' : ''}${x.max.toLocaleString(loc())}${x.unid ? esc(x.unid) : ''}` : '—'
    const det = bloco(T.evolui, x.evolui) + bloco(T.onde, x.onde) + par(x.d)
    return `${gr}<details class="at-row"><summary><span class="at-ico">${atIco(x)}${x.img ? `<img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''}</span><span class="at-nome">${esc(L(x.nome))}</span><span class="at-bar${tem ? '' : ' vazia'}" role="img" aria-label="${esc(num)}">${Array.from({ length: AT_SEG }, (_, k) => `<i${k < cheios ? ' class="on"' : ''}></i>`).join('')}</span><span class="at-num">${num}</span></summary>${det ? `<div class="at-det">${det}</div>` : ''}</details>`
  }
  return `${jCab(sec)}<div class="at-lista">${l.map(linha).join('')}</div>${resto.length ? jArtigo({ [sec]: resto }, sec) : ''}`
}
/* Relacionamento (seção 'relacionamento'): em cima, o personagem em pé com pontos ligados aos possíveis atos do relacionamento (mesmo sistema da Personalização);
   embaixo, uma página única de texto (feitos, desenvolvimento...). JOGOS[id].relacionamento: [ { id, tipo: 'pessoa', nome, nota, img, pontos: [ ...como na Personalização, cada ponto é um ato ],
   corpo: [ ...blocos da Visão geral: { h }, { p }, { destaque }, { ul }, { img, razao, alt, leg } ] } ]. Entradas sem pontos nem corpo continuam saindo como ficha de pessoa. */
function jRelacionamento(d, sec) {
  const l = (d[sec] || []).filter(x => x.pontos || x.corpo), resto = (d[sec] || []).filter(x => !(x.pontos || x.corpo))
  const item = x => `${x.pontos ? jPersonaliza({ r: [x] }, 'r', true) : ''}${(x.corpo || []).length ? `<div class="rl-pag">${jArtigo({ c: x.corpo }, 'c')}</div>` : ''}`
  return `${jCab(sec)}${l.map(item).join('')}${resto.length ? `<div class="jv-lista pe-lista">${resto.map(x => jCardPers(x)).join('')}</div>` : ''}`
}
/* Negócios (seção 'negocios'): card com a imagem do negócio (sem img aparece a moldura vazia) e o nome no topo, ao centro; dentro, descrição, os 3 produtos de maior lucro (esquerda → direita) e, abaixo, o local de venda.
   JOGOS[id].negocios: [ { id: 'curto', nome: { pt, en }, img: 'imagens/x.jpg', d: { pt, en } (linha em branco = novo parágrafo),
     lucros: [ { nome: { pt, en }, v: { pt, en } | 'texto' (lucro), nota: { pt, en } (opcional) } ] (3 itens),
     venda: { nome: { pt, en }, d: { pt, en } } (local de venda), mais: [ { pt, en } ] (parágrafos extras, opcional) } ]
   Entradas sem nome (blocos h/p) continuam saindo como artigo, depois dos cards. */
function jNegocios(d, sec) {
  const l = (d[sec] || []).filter(x => x.nome), resto = (d[sec] || []).filter(x => !x.nome)
  const par = v => L(v || '').split(/\n\s*\n/).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join('')
  const item = x => {
    const foto = x.img ? `<img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''
    const carros = (x.lucros || []).length ? `<div><span class="ng-t">${jt('ng').lucros}</span><div class="ng-carros">${x.lucros.map(c => `<div class="ng-carro"><b>${esc(L(c.nome))}</b>${c.v ? `<span>${esc(L(c.v))}</span>` : ''}${c.nota ? `<small>${esc(L(c.nota))}</small>` : ''}</div>`).join('')}</div></div>` : ''
    const venda = x.venda ? `<div class="ng-venda"><span class="ng-t">${jt('ng').venda}</span><b>${esc(L(x.venda.nome || ''))}</b>${par(x.venda.d)}</div>` : ''
    const mais = (x.mais || []).map(m => `<p>${esc(L(m))}</p>`).join('')
    return `<article class="ng-card"><div class="ng-img">${ICONE_IMG}${foto}<span class="ng-nome">${esc(L(x.nome))}</span></div><div class="ng-corpo">${par(x.d)}${carros}${venda}${mais}</div></article>`
  }
  return `${jCab(sec)}<div class="ng-lista">${l.map(item).join('')}</div>${resto.length ? jArtigo({ [sec]: resto }, sec) : ''}`
}
/* Relacionamento (seção 'relacionamento'), versão em lista de pessoas: um card por pessoa (retrato quadrado, nome, papel e nº de etapas); ao abrir, o texto e a trilha de etapas.
   JOGOS[id].relacionamento: [ { id, nome: { pt, en }, papel: { pt, en } (opcional), img: 'imagens/x.jpg' (sem img aparece a moldura), d: { pt, en } (linha em branco = novo parágrafo),
     etapas: [ { nome: { pt, en }, req: { pt, en } (o que é preciso), d: { pt, en }, atos: [ { pt, en } ] (opcional), recompensa: { pt, en } (opcional), perdivel: true (opcional) } ] } ] */
function jRelacao(d, sec) {
  const l = (d[sec] || []).filter(x => x.etapas)
  const par = v => L(v || '').split(/\n\s*\n/).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join('')
  const R = { req: L({ pt: 'Para chegar aqui:', en: 'To get here:' }), rec: L({ pt: 'Recompensa:', en: 'Reward:' }), perd: L({ pt: 'Perdível', en: 'Missable' }), et: n => n + ' ' + L(n === 1 ? { pt: 'etapa', en: 'stage' } : { pt: 'etapas', en: 'stages' }) }
  const etapa = (e, k) => `<li class="rl-et"><span class="rl-n mono" aria-hidden="true">${k + 1}</span><div><h4>${esc(L(e.nome))}${e.perdivel ? ` <span class="pill warn">${R.perd}</span>` : ''}</h4>${e.req ? `<p class="rl-req"><b>${R.req}</b> ${esc(L(e.req))}</p>` : ''}${par(e.d)}${(e.atos || []).length ? `<ul class="rl-atos">${e.atos.map(a => `<li>${esc(L(a))}</li>`).join('')}</ul>` : ''}${e.recompensa ? `<p class="rl-rec"><b>${R.rec}</b> ${esc(L(e.recompensa))}</p>` : ''}</div></li>`
  const card = x => {
    const n = x.etapas.length, foto = x.img ? `<img src="${esc(x.img)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ''
    return `<details class="rl-card"><summary><span class="rl-img" aria-hidden="true">${ICONE_IMG}${foto}</span><span class="rl-id"><b>${esc(L(x.nome))}</b>${x.papel ? `<small>${esc(L(x.papel))}</small>` : ''}</span>${n ? `<span class="rl-cont mono">${R.et(n)}</span>` : ''}<span class="rl-seta" aria-hidden="true">›</span></summary><div class="rl-corpo">${par(x.d)}${n ? `<ol class="rl-trilha">${x.etapas.map(etapa).join('')}</ol>` : ''}</div></details>`
  }
  return `${jCab(sec)}<div class="rl-lista">${l.map(card).join('')}</div>`
}
function jogoConteudo(g, d, sec) {
  if (sec === 'veiculos' && (d[sec] || []).length) return jTransportes(d, sec)
  if (IT_GEN.includes(sec) && !PARTES_SECS.includes(sec) && (d[sec] || []).length) return `${jCab(sec)}${sec === 'objetos' ? jNota(jt('fonte_wiki')) : (d.notas && d.notas[sec]) ? jNota(L(d.notas[sec])) : ''}${itPagina(d, sec)}`
  if (sec === 'negocios' && (d[sec] || []).some(x => x.nome)) return jNegocios(d, sec)
  if ((sec === 'atributos' || sec === 'habilidades') && (d[sec] || []).some(x => x.nome)) return jAtributos(d, sec)   // Habilidades (Abiotic Factor) usa o mesmo sistema de Atributos e progressão
  if (sec === 'personalizacao' && (d[sec] || []).some(x => x.pontos)) return jPersonaliza(d, sec)
  if (TXT_SECS.includes(sec)) return `${jCab(sec)}${(d[sec] || []).length ? jArtigo(d, sec) : jVazio()}`
  if (sec === 'organizacoes') return jOrgs(d, sec)
  if (sec === 'servicos') return jServicos(d, sec)
  if (sec === 'relacionamento' && (d[sec] || []).some(x => x.etapas)) return jRelacao(d, sec)
  if (sec === 'relacionamento' && (d[sec] || []).some(x => x.pontos || x.corpo)) return jRelacionamento(d, sec)
  if (FICHA_SECS.includes(sec)) return `${jCab(sec)}${(d[sec] || []).length ? `<div class="jv-lista pe-lista">${d[sec].map(x => jCardPers(x)).join('')}</div>` : jVazio()}`
  if (sec === 'missoes') return `${jCab(sec)}${(d[sec] || []).length ? `<div class="jv-mis-lista">${d[sec].map((x, k) => jCardMissao(x, k)).join('')}</div>` : jVazio()}`
  if (PARTES_SECS.includes(sec)) {
    const l = d[sec] || [], pi = JOGO_UI.sub ? l.findIndex((x, k) => nvId(x, k) === JOGO_UI.sub) : -1
    if (pi >= 0) return jPartePagina(l, pi, sec)
    return `${jCab(sec)}${l.length ? `<div class="jv-lista jv-nov-lista">${l.map((x, k) => jCardParte(x, k, sec)).join('')}</div>` : jVazio()}`
  }
  if (WIKI_SECS.includes(sec)) return jExtra(g, d, sec)
  if (sec === 'trilha') return trPagina(d)
  if (sec === 'detalhes') return dtPagina(d)
  if (sec === 'curiosidades') return cvCuriosidades(d)
  if (sec === 'vozes') return cvPessoas(d, 'vozes')
  if (sec === 'desenvolvedores') return cvPessoas(d, 'desenvolvedores')
  if (sec === 'perdiveis') {
    return `<div class="sec-head"><div class="jv-cab"><span class="jv-ico" aria-hidden="true">${icoSec('perdiveis')}</span><div><p class="kicker">${jt('s').perdiveis}</p><h2 class="h2">${jt('s').perdiveis}</h2></div></div><span class="mono">${jt('perd_n', d.perdiveis.length, g.perdiveis)}</span></div>
      ${d.perdiveis.length ? `<div class="jv-lista pd-lista">${d.perdiveis.map(jCardPerd).join('')}</div>${d.perdiveis.some(x => x.passos) ? jNota((d.notas && d.notas.perdiveis) ? L(d.notas.perdiveis) : jt('perdx').nota) : ''}` : jVazio()}`
  }
  if (sec === 'trofeus') {
    return `<div class="sec-head"><div class="jv-cab"><span class="jv-ico" aria-hidden="true">${icoSec('trofeus')}</span><div><p class="kicker">${jt('s').trofeus}</p><h2 class="h2">${jt('s').trofeus}</h2></div></div></div>
      ${d.trofeus.length ? trofPagina(d) : jVazio()}`
  }
  if (sec === 'roteiro') {
    const i = JOGO_UI.sub ? d.roteiro.findIndex((x, k) => nvId(x, k) === JOGO_UI.sub) : -1
    if (i >= 0) return jPartePagina(d.roteiro, i)
    return `${jCab(sec)}${d.roteiro.length ? `<h3 class="jv-sub mono">${jt('passo_titulo')}</h3>${jNota(jt('passo_intro'))}<div class="jv-lista jv-nov-lista">${d.roteiro.map((x, k) => jCardParte(x, k)).join('')}</div>` : jVazio()}`
  }
  if (sec === 'dicas') {
    const ds = DICAS.filter(x => x.jogo === g.jogo)
    const di = JOGO_UI.sub ? ds.findIndex((x, k) => nvId(x, k) === JOGO_UI.sub) : -1
    if (di >= 0) return jDicaPagina(ds, di)
    return `<div class="sec-head"><div class="jv-cab"><span class="jv-ico" aria-hidden="true">${icoSec('dicas')}</span><div><p class="kicker">${jt('s').dicas}</p><h2 class="h2">${jt('s').dicas}</h2></div></div>${ds.length ? `<button class="link" type="button" data-action="dicasjogo" data-jogo="${esc(g.jogo)}">${jt('ver_dicas')}</button>` : ''}</div>
      ${ds.length ? `${jNota(jt('dicas_intro'))}<div class="jv-lista jv-nov-lista">${ds.map((x, k) => jCardDica(x, k)).join('')}</div>` : jVazio()}`
  }
  if (sec === 'mapas') {
    return `<div class="sec-head"><div class="jv-cab"><span class="jv-ico" aria-hidden="true">${icoSec('mapas')}</span><div><p class="kicker">${jRot('mapas')}</p><h2 class="h2">${jRot('mapas')}</h2></div></div></div>
      ${d.mapas.length ? `<div class="jv-lista">${d.mapas.map(m => `<a class="jv-card" href="${esc(m.href)}" style="text-decoration:none;color:inherit"><h3>${esc(L(m.t))}</h3><p>${esc(L(m.d || ''))}</p></a>`).join('')}</div>` : jVazio()}`
  }
  if (sec === 'jogabilidade') {
    return `${jCab(sec)}${d.jogabilidade.length ? jArtigo(d, 'jogabilidade') : jVazio()}`
  }
  if (sec === 'bestiario') {
    return `${jCab(sec)}${d.bestiario.some(x => x.info || x.vida || x.stats || x.resumo) ? jNota(jt('bs').intro + ' ' + jt('fonte_wiki')) : ''}${d.bestiario.length ? jGrupos(d.bestiario, 'tipo', k => jt('tipos')[k] || k, jCardBest) : jVazio()}`
  }
  if (sec === 'personagens') {
    return `${jCab(sec)}${jNota(jt('pers_intro'))}${d.personagens.length ? `<div class="jv-lista pe-lista">${d.personagens.map(x => jCardPers(x)).join('')}</div>` : jVazio()}`
  }
  if (sec === 'equipamentos') {
    return `${jCab(sec)}${d.equipamentos.length ? jNota((d.notas && d.notas.equipamentos) ? L(d.notas.equipamentos) : jt('fonte_wiki')) + itPagina(d, sec) : jVazio()}`
  }
  if (sec === 'armaduras') {
    return `${jCab(sec)}${d.armaduras.length ? jNota(jt('arm_intro') + ' ' + jt('fonte_wiki')) + itPagina(d, sec) : jVazio()}`
  }
  if (sec === 'novidades') {
    const i = JOGO_UI.sub ? d.novidades.findIndex((x, k) => nvId(x, k) === JOGO_UI.sub) : -1
    if (i >= 0) return jNovPagina(d.novidades, i)
    return `${jCab(sec)}${d.novidades.length ? `<div class="jv-lista jv-nov-lista">${d.novidades.map((x, k) => jCardNov(x, k)).join('')}</div>` : jVazio()}`
  }
  // visão geral
  const medidor = Array.from({ length: 10 }, (_, k) => `<i class="${k < g.dif ? 'on' : ''}"></i>`).join('')
  const pills = [
    g.platina ? `<span class="pill plat">${jt('plat')}</span>` : '',
    `<span class="pill">${esc(g.plataformas.join(' · '))}</span>`,
    `<span class="pill">${jt('trof', g.trofeus)}</span>`,
    g.raridade != null ? `<span class="pill">${jt('raro', g.raridade.toLocaleString(loc()))}</span>` : ''
  ].join('')
  const dt = d.atualizado ? (([a, m, dd]) => new Date(a, m - 1, dd).toLocaleDateString(loc(), { day: 'numeric', month: 'long', year: 'numeric' }))(d.atualizado.split('-').map(Number)) : ''
  return `
    <p class="kicker">${esc(L(g.subtitulo))}</p>
    <h1 class="h1 jv-h1">${esc(g.jogo)}</h1>
    ${dt ? `<p class="mono" style="margin-bottom:1rem">${jt('atual', dt)}</p>` : ''}
    <div class="chips">${pills}</div>
    <div class="jv-num">
      <div><div class="meter" data-t="${tier(g.dif)}" role="img" aria-label="${esc(tx('c_aria_dif', g.dif))}">${medidor}</div><b>${g.dif}/10</b><span>${jt('dif')}</span></div>
      <div><b>${g.horasMin}–${g.horasMax}h</b><span>${jt('tempo')}</span></div>
      <div><b>${L(g.playthroughs)}</b><span>${jt('jog')}</span></div>
      <div class="rose"><b>${g.perdiveis}</b><span>${jt('perd')}</span></div>
    </div>
    <div class="jv-intro">${(d.abertura || []).map(p => `<p>${L(p)}</p>`).join('')}</div>
    ${jArtigo(d)}`
}

function renderJogo() {
  itFechar(); trParar()
  const g = GUIAS.find(x => x.id === JOGO_UI.id)
  const box = $('jogo-conteudo')
  if (!g) { box.innerHTML = `<p class="jv-vazio">${jt('nao_achou')}</p>`; return }
  const d = Object.assign({ abertura: [], perdiveis: [], trofeus: [], roteiro: [], mapas: [], jogabilidade: [], bestiario: [], personagens: [], equipamentos: [], armaduras: [], novidades: [] }, JOGOS[g.id] || {})
  const sec = JSECOES.includes(JOGO_UI.sec) && jSecOk(g.id, JOGO_UI.sec) ? JOGO_UI.sec : 'visao'
  const menu = JGRUPOS.map(gr => Object.assign({}, gr, { secs: jSecsDe(g.id, gr) })).filter(gr => gr.secs.length).map(gr => `<p class="jv-grupo mono">${jt('g')[gr.id]}</p>` + gr.secs.map(k => {
    const n = jogoSecCont(g.id, k)
    const pc = jPct(g.id, k)
    const marca = n === null ? '' : n > 0 ? `<span class="n">${n}</span>` : `<span class="em">${jt('breve')}</span>`
    return `<button class="jv-item" type="button" data-action="jsec" data-sec="${k}" aria-current="${k === sec}"><span class="jv-lb">${icoSec(k)}<span>${jRot(k)}</span>${pc === null ? '' : `<small class="jv-pc" title="${jt('pc_dica', pc)}">${pc}%</small>`}</span>${marca}</button>`
  }).join('')).join('')
  const capa = d.img ? `<img src="${esc(d.img)}" alt="" decoding="async" onerror="this.remove()">` : ''
  box.style.setProperty('--h', g.hue)
  box.innerHTML = `
    <div class="jv">
      <aside class="jv-lado" aria-label="${jt('secoes')}">
        <button class="link jv-volta" type="button" data-action="tab" data-tab="guias">${jt('voltar')}</button>
        <div class="jv-mini"><span aria-hidden="true">${esc(g.jogo.charAt(0))}</span>${capa}${progFlag(g)}</div>
        <div class="jv-selwrap">
          <button class="jv-sel" type="button" data-action="jmenu" aria-expanded="false" aria-controls="jv-menu"><span class="jv-lb">${icoSec(sec)}<span>${jRot(sec)}</span></span><span class="jv-sel-d">${jt('secoes_btn')}<b aria-hidden="true">▾</b></span></button>
          <nav class="jv-menu" id="jv-menu">${menu}</nav>
        </div>
      </aside>
      <div class="jv-main" id="jv-main">${jogoConteudo(g, d, sec)}</div>
    </div>`
  dtMural()
  document.title = `${g.jogo} — ${tx('titulo_pag')}`
}

function showJogo(resto) {
  const [id, sec, sub] = resto.split('/')
  if (!GUIAS.some(x => x.id === id)) return showTab('guias')
  JOGO_UI.id = id; JOGO_UI.sec = sec || 'visao'
  JOGO_UI.sub = (JOGO_UI.sec === 'novidades' || JOGO_UI.sec === 'roteiro' || JOGO_UI.sec === 'dicas' || PARTES_SECS.includes(JOGO_UI.sec)) && sub ? sub : ''   // página de uma novidade: #jogo/ID/novidades/ID-DA-NOVIDADE
  ABAS.forEach(a => {                       // "Guias" continua marcada no topo
    const on = a.id === 'guias'
    PAINEIS[a.id].classList.remove('active')
    BOTOES[a.id].classList.toggle('active', on)
    BOTOES[a.id].setAttribute('aria-selected', on)
  })
  const jaNoJogo = $('panel-jogo').classList.contains('active')    // já estava dentro de um guia: é troca de seção, não entrada
  $('panel-jogo').classList.add('active')
  renderJogo()
  if (jaNoJogo && window.matchMedia('(max-width: 860px)').matches) {  // celular: a troca de aba pousa no início do conteúdo, sem voltar ao topo da página
    const alvo = $('jv-main'), nav = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 56
    if (alvo) window.scrollTo(0, Math.max(0, alvo.getBoundingClientRect().top + window.scrollY - nav - (document.querySelector('.jv-selwrap') ? document.querySelector('.jv-selwrap').offsetHeight : 0) - 8))
  } else window.scrollTo(0, 0)
  try { history.replaceState(null, '', '#jogo/' + id + (sec && sec !== 'visao' ? '/' + sec + (JOGO_UI.sub ? '/' + JOGO_UI.sub : '') : '')) } catch (e) {}
}
