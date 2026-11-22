'use strict'

// ══════════════════════════════════════════════════════════════════════════
// dados/sobre.js — textos do Início (recursos) e da aba SOBRE
// ══════════════════════════════════════════════════════════════════════════
// RECURSOS ........ os cartões numerados da home ("o que você encontra").
// MANIFESTO ....... texto de abertura do "Meu método".  PRINCIPIOS/FORCAS ... caixas do método (os marcados TODO esperam o seu texto).
// CLASSES_TROFEU .. como você classifica troféus.  ESCALA ... significado de cada nota de dificuldade (1 a 10, nesta ordem).
// SOBRE_TEXTO ..... parágrafos da aba Sobre.  SOCIAIS ... links de contato (preencha a url de cada um).
// FAQ ............. perguntas frequentes (q = pergunta, a = resposta).  STATUS_FILA ... os estados da "Minha fila".
// OBS: o texto da aba Sobre diz "sem anúncios". Se um dia colocar anúncios, atualize esse texto e as perguntas do FAQ.
// ══════════════════════════════════════════════════════════════════════════

const RECURSOS = [
  { n: '01', t: { pt: 'Ficha rápida', en: 'Quick sheet' },
    d: { pt: 'No topo de cada guia: dificuldade de 1 a 10, tempo até a platina, número de jogatinas, perdíveis e a porcentagem de jogadores que platinaram o jogo.', en: 'At the top of every guide: difficulty from 1 to 10, time to platinum, number of playthroughs, missables and the percentage of players who earned the game\'s platinum.' } },
  { n: '02', t: { pt: 'Alertas de perdíveis', en: 'Missable alerts' },
    d: { pt: 'Cada perdível ganha o selo Perdível ou Atenção e diz onde costuma escapar. Os troféus que podem ser perdidos também levam o aviso na lista.', en: 'Every missable gets a Missable or Heads up tag and says where it usually slips away. Trophies that can be missed also carry the warning in the list.' } },
  { n: '03', t: { pt: 'Roteiro em ordem', en: 'Roadmap in order' },
    d: { pt: 'A sequência que menos te faz voltar atrás, área por área do jogo, com uma página de mapas quando o jogo tem.', en: 'The sequence that makes you backtrack the least, area by area of the game, with a maps page when the game has one.' } },
  { n: '04', t: { pt: 'Cada jogo em páginas', en: 'Each game in pages' },
    d: { pt: 'Visão geral, jogabilidade, bestiário, personagens, equipamentos e armaduras: o jogo é dividido por função, e as armas e armaduras mostram dano, armadura, durabilidade e peso.', en: 'Overview, gameplay, bestiary, characters, equipment and armor: the game is split by function, and weapons and armor show damage, armor, durability and weight.' } },
  { n: '05', t: { pt: 'Troféus em PT-BR', en: 'Trophies in PT-BR' },
    d: { pt: 'Nomes e descrições como aparecem no console em português, com o tipo de cada um (platina, ouro, prata ou bronze) e o aviso nos que podem ser perdidos.', en: 'Names and descriptions as shown on a Portuguese-language console, with each one\'s type (platinum, gold, silver or bronze) and a warning on those that can be missed.' } },
  { n: '06', t: { pt: 'Dicas por jogo', en: 'Tips by game' },
    d: { pt: 'Dicas separadas por jogo e por categoria (colecionáveis, exploração, builds, estratégias, perdíveis, farm), com busca e uma estrela para salvar as suas favoritas neste navegador.', en: 'Tips split by game and by category (collectibles, exploration, builds, strategies, missables, farming), with search and a star to save your favorites in this browser.' } },
  { n: '07', t: { pt: 'Guia em progresso', en: 'Guide in progress' },
    d: { pt: 'Os guias ainda incompletos avisam "Em progresso" com a porcentagem do jogo já coberta, e cada um mostra a data da última atualização.', en: 'Guides that are still incomplete show "In progress" with the percentage of the game already covered, and each one shows its last update date.' } }
]

const MANIFESTO = {   // TODO: ajustar para a sua voz
  pt: 'Não é resenha, não é resumo da história. É o <em>caminho mais curto</em> até o último troféu, na ordem que menos te faz voltar atrás.',
  en: 'It is not a review, not a story recap. It is the <em>shortest path</em> to the last trophy, in the order that makes you backtrack the least.'
}

const PRINCIPIOS = [
  { t: { pt: 'Roteiro, não resumo', en: 'Roadmap, not recap' },
    d: { pt: 'Eu não conto a história. Digo o que fazer e em que ordem.', en: 'I don\'t retell the story. I tell you what to do and in what order.' } },
  { t: { pt: 'Perdível vem primeiro', en: 'Missables come first' },
    d: { pt: 'O aviso aparece antes do passo, não escondido no meio do texto.', en: 'The warning shows up before the step, not buried mid-text.' } },
  { t: { pt: 'Uma jogatina sempre que dá', en: 'One playthrough whenever possible' },
    d: { pt: 'Se a lista pede mais de uma, o guia diz exatamente o porquê.', en: 'If the list asks for more than one, the guide says exactly why.' } },
  { t: { pt: 'PT-BR de verdade', en: 'Real PT-BR' },
    d: { pt: 'Nomes de troféus como aparecem no console em português.', en: 'Trophy names as they appear on a Portuguese-language console.' } },
  { t: { pt: 'Abre e funciona', en: 'Open it and it works' },
    d: { pt: 'Um arquivo, sem conta, sem cadastro. Seu progresso fica no seu navegador.', en: 'One file, no account, no sign-up. Your progress stays in your browser.' } }
]

const FORCAS = [   // TODO: ajustar para os seus pontos fortes
  { t: { pt: 'Ordem que poupa retrabalho', en: 'Order that saves rework' },
    d: { pt: 'Cada roteiro é montado para você passar por cada área o mínimo de vezes possível.', en: 'Each roadmap is built so you pass through each area as few times as possible.' } },
  { t: { pt: 'Perdíveis em destaque', en: 'Missables highlighted' },
    d: { pt: 'Alerta visual claro, com o ponto exato do jogo onde o troféu escapa.', en: 'A clear visual alert, with the exact point in the game where the trophy slips away.' } },
  { t: { pt: 'Leitura rápida no celular', en: 'Fast reading on mobile' },
    d: { pt: 'Abas, filtros e checklist pensados para consultar com o controle na outra mão.', en: 'Tabs, filters and checklist designed for checking with the controller in your other hand.' } }
]

const CLASSES_TROFEU = [
  { cor: 'bad',  nome: { pt: 'Perdível',         en: 'Missable' },
    d: { pt: 'Se passar do ponto sem fazer, você pode precisar de outra jogatina. Sempre com alerta vermelho.', en: 'If you move past the point without doing it, you may need another playthrough. Always flagged in red.' } },
  { cor: 'ok',   nome: { pt: 'Destravável',      en: 'Recoverable' },
    d: { pt: 'Dá para voltar depois — seleção de capítulo, mundo aberto, portal de retorno. Sem pânico.', en: 'You can go back later — chapter select, open world, return portal. No panic.' } },
  { cor: 'warn', nome: { pt: 'Atenção especial', en: 'Special attention' },
    d: { pt: 'Não é perdível, mas pede método: RNG, grind longo ou uma sequência chata de executar.', en: 'Not missable, but it needs a method: RNG, a long grind or a tedious sequence to execute.' } }
]

const ESCALA = [
  { pt: 'Cai sozinha: troféus de história e pouco mais.',                    en: 'Falls into your lap: story trophies and little else.' },
  { pt: 'Quase automática, com um ou dois colecionáveis.',                   en: 'Almost automatic, with a collectible or two.' },
  { pt: 'Fácil, com algum colecionável ou dificuldade baixa.',               en: 'Easy, with some collectibles or a low difficulty.' },
  { pt: 'Pede atenção a alguns detalhes, nada pesado.',                      en: 'Needs attention to a few details, nothing heavy.' },
  { pt: 'Moderada: tempo e volume, sem exigir habilidade alta.',             en: 'Moderate: time and volume, without demanding high skill.' },
  { pt: 'Pede planejamento e paciência; pode ter RNG.',                      en: 'Needs planning and patience; may involve RNG.' },
  { pt: 'Longa ou técnica: erros custam horas.',                             en: 'Long or technical: mistakes cost hours.' },
  { pt: 'Muito exigente: dificuldade alta, perdíveis duros ou grind pesado.',en: 'Very demanding: high difficulty, harsh missables or heavy grind.' },
  { pt: 'Quase proibitiva: habilidade alta e muito tempo.',                  en: 'Nearly prohibitive: high skill and lots of time.' },
  { pt: 'Reservada a quem realmente quer sofrer.',                           en: 'Reserved for those who truly want to suffer.' }
]

const SOBRE_TEXTO = [   // TODO: trocar pelo seu texto
  { pt: 'Eu monto roteiros de platina para jogos de PlayStation. Não é resenha nem resumo: é o caminho mais curto até o último troféu, na ordem que menos faz você voltar atrás.',
    en: 'I build platinum roadmaps for PlayStation games. Not a review, not a recap: the shortest path to the last trophy, in the order that makes you backtrack the least.' },
  { pt: 'Cada guia é pensado para evitar retrabalho — perdíveis avisados antes, ficha rápida no topo e checklist para acompanhar. Os nomes dos troféus seguem o PT-BR do próprio console.',
    en: 'Every guide is designed to avoid rework — missables flagged up front, a quick sheet at the top and a checklist to track progress. Trophy names follow the console\'s own PT-BR.' },
  { pt: 'O site é pessoal e aberto: sem cadastro e sem anúncios. O que você marca aqui fica só no seu navegador.',
    en: 'The site is personal and open: no sign-up and no ads. What you tick here stays only in your browser.' }
]

const SOCIAIS = [   // TODO: preencher links
  { nome: 'YouTube', url: '' },
  { nome: 'Discord', url: '' },
  { nome: { pt: 'Apoie o projeto', en: 'Support the project' }, url: '' }
]

const FAQ = [
  { q: { pt: 'Preciso criar conta?', en: 'Do I need an account?' },
    a: { pt: 'Não. Sua fila e as dicas salvas ficam no armazenamento do seu navegador — por isso não aparecem em outro aparelho.', en: 'No. Your list and saved tips live in your own browser\'s storage — so they don\'t show up on another device.' } },
  { q: { pt: 'Os guias têm spoiler?', en: 'Do the guides have spoilers?' },
    a: { pt: 'O foco é o roteiro, não a história. Quando um passo cita um chefe ou local, é só o necessário.', en: 'The focus is the roadmap, not the story. When a step mentions a boss or location, it is only what is necessary.' } },
  { q: { pt: 'Achei um erro em um guia.', en: 'I found a mistake in a guide.' },
    a: { pt: 'Me avise pelos contatos ao lado — correção de troféu perdível tem prioridade.', en: 'Let me know through the contacts next to this — fixes to missable trophies take priority.' } },
  { q: { pt: 'Como a dificuldade é calculada?', en: 'How is difficulty calculated?' },
    a: { pt: 'Veja a escala em "Meu método": a nota considera tempo, habilidade exigida e perdíveis.', en: 'See the scale in "My method": the score considers time, skill required and missables.' } }
]

const STATUS_FILA = [
  { id: 'fila',      nome: { pt: 'Na fila',   en: 'Queued' } },
  { id: 'jogando',   nome: { pt: 'Jogando',   en: 'Playing' } },
  { id: 'platinado', nome: { pt: 'Platinado', en: 'Platinumed' } },
  { id: 'largado',   nome: { pt: 'Largado',   en: 'Dropped' } }
]

const BADGES_NV = { novo: 'hot', atualizado: 'warn', breve: '' }   // classe visual de cada selo
