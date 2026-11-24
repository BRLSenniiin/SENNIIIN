'use strict'

// ══════════════════════════════════════════════════════════════════════════
// dados/novidades.js — faixa de NOVIDADES do Início e filtros
// ══════════════════════════════════════════════════════════════════════════
// NOVIDADES ... o feed de avisos no topo do Início (os mais recentes primeiro). Detalhes de cada campo nos comentários logo abaixo.
// FILTROS_NV .. os botões de filtro desse feed.
// ATALHOS ..... botões de busca rápida (rótulo + palavra buscada).
// DICA: novidade DENTRO de um jogo (aba Novidades do guia) não é aqui: fica em dados/guias/<id>.js, em "novidades".
// ══════════════════════════════════════════════════════════════════════════

// Feed de novidades (topo do Início). data = 'AAAA-MM-DD' ou null.
// badge: 'novo' | 'atualizado' | 'breve'. Use href (arquivo/link) OU aba (id de aba).
// img (opcional): caminho da imagem do card, ex.: img: 'imagens/abiotic.jpg'. imgAlt (opcional): texto alternativo { pt, en }.
const NOVIDADES = [
  { tipo: 'guia', badge: 'novo', data: '2026-11-24', href: '#jogo/ball-x-pit',
    titulo: { pt: 'BALL x PIT — guia de platina', en: 'BALL x PIT — platinum guide' },
    texto: { pt: 'Guia em preparo com os 75 troféus (64 do jogo base e 11 da DLC), roteiro em 4 etapas, as 12 fases e os 16 personagens.', en: 'Guide in progress with the 75 trophies (64 base game and 11 DLC), a 4-step roadmap, the 12 stages and the 16 characters.' } },
  { tipo: 'guia', badge: 'novo', data: '2026-11-23', href: '#jogo/until-dawn',
    titulo: { pt: 'Until Dawn — guia de platina', en: 'Until Dawn — platinum guide' },
    texto:  { pt: 'Remake de 2024: 29 troféus, roteiro em 3 jogatinas e a lista de perdíveis.', en: '2024 remake: 29 trophies, a 3-playthrough roadmap and the missables list.' } },
  { tipo: 'site', badge: 'atualizado', data: '2026-11-23', aba: 'guias',
    titulo: { pt: 'Plataformas em todos os guias', en: 'Platforms on every guide' },
    texto:  { pt: 'Cada jogo mostra os consoles e o PC onde existe, e a aba Guias ganhou um filtro para cada plataforma.', en: 'Each game shows the consoles and PC it is on, and the Guides tab got a filter for each platform.' } },
  { tipo: 'site', badge: 'novo', data: '2026-11-23', aba: 'guias',
    titulo: { pt: 'Novas abas nos guias', en: 'New tabs in the guides' },
    texto:  { pt: 'Modos de jogo e o grupo Sistemas (evolução das armas, recompensas e arcanas) chegam aos guias.', en: 'Game modes and the Systems group (weapon evolution, rewards and arcanas) arrive in the guides.' } },
  { tipo: 'dica', badge: 'novo', data: '2026-11-23', aba: 'dicas',
    titulo: { pt: 'Vampire Survivors: comece pela lista base', en: 'Vampire Survivors: start with the base list' },
    texto:  { pt: 'Dos 284 troféus, só 41 são do jogo base. O resto vem de 29 seções de DLC e atualizações.', en: 'Of the 284 trophies, only 41 are from the base game. The rest come from 29 DLC and update sections.' } },
  { tipo: 'guia', badge: 'novo', data: '2026-11-23', href: '#jogo/vampire-survivors',
    titulo: { pt: 'Vampire Survivors — guia em preparo', en: 'Vampire Survivors — guide in progress' },
    texto:  { pt: 'Visão geral e a lista completa dos 284 troféus. As demais abas serão preenchidas aos poucos.', en: 'Overview and the full list of 284 trophies. The other tabs will be filled in over time.' } },
  { tipo: 'dica', badge: 'novo', data: '2026-11-19', aba: 'dicas',
    titulo: { pt: 'Medite com a Lucia no Capítulo 1', en: 'Meditate with Lucia in Chapter 1' },
    texto:  { pt: 'Dica do GTA VI sobre o troféu Positive Mental Attitude, que pode passar batido.', en: 'GTA VI tip about the Positive Mental Attitude trophy, which is easy to miss.' } },
  { tipo: 'guia', badge: 'novo', data: '2026-11-19', href: '#jogo/gta-vi',
    titulo: { pt: 'Grand Theft Auto VI — guia de platina', en: 'Grand Theft Auto VI — platinum guide' },
    texto:  { pt: '55 troféus, todos offline, com o perdível do Capítulo 1 e o roteiro em 3 fases.', en: '55 trophies, all offline, with the Chapter 1 missable and a 3-phase roadmap.' } },
  { tipo: 'guia', badge: 'novo', data: '2026-11-11', href: '#jogo/abiotic-factor',
    titulo: { pt: 'Abiotic Factor — guia de platina', en: 'Abiotic Factor — platinum guide' },
    texto:  { pt: '54 troféus, 7 perdíveis marcados, roteiro por setor e checklist.', en: '54 trophies, 7 missables flagged, a sector-by-sector roadmap and a checklist.' } },
  { tipo: 'site', badge: 'novo', data: '2026-11-11', aba: 'fila',
    titulo: { pt: 'Sua fila de platinas', en: 'Your platinum list' },
    texto:  { pt: 'Monte a lista de jogos e acompanhe o progresso, salvo no seu navegador.', en: 'Build your game list and track progress, saved in your browser.' } },
  { tipo: 'dica', badge: 'novo', data: '2026-11-11', aba: 'dicas',
    titulo: { pt: 'Net Launcher antes dos Lab Rats', en: 'Net Launcher before the Lab Rats' },
    texto:  { pt: 'Dica nova do Abiotic Factor sobre o troféu Rato de Laboratório.', en: 'New Abiotic Factor tip about the Lab Rat trophy.' } },
  { tipo: 'guia', badge: 'breve', data: null, aba: 'sobre',
    titulo: { pt: 'Próximo guia em preparo', en: 'Next guide in the works' },
    texto:  { pt: 'Sugira um jogo e ele sobe na fila.', en: 'Suggest a game and it moves up the queue.' } }
  // TODO: ajustar as datas reais e acrescentar uma linha a cada guia/dica/atualização publicada
]

const FILTROS_NV = [
  { id: 'todas', rot: { pt: 'Tudo',   en: 'All' } },
  { id: 'guia',  rot: { pt: 'Guias',  en: 'Guides' } },
  { id: 'dica',  rot: { pt: 'Dicas',  en: 'Tips' } },
  { id: 'site',  rot: { pt: 'Site',   en: 'Site' } }
]

const ATALHOS = [
  { rot: { pt: 'Perdíveis', en: 'Missables' }, q: { pt: 'perdíveis', en: 'missables' } },
  { rot: 'Co-op',    q: 'co-op' },
  { rot: 'Grind',    q: 'grind' },
  { rot: 'Survival', q: 'survival' },
  { rot: { pt: 'Ver todos', en: 'See all' }, q: '' }
]
