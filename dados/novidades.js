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
