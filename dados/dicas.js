'use strict'

// ══════════════════════════════════════════════════════════════════════════
// dados/dicas.js — DICAS gerais (aba Dicas, "dica do dia" e dicas rápidas)
// ══════════════════════════════════════════════════════════════════════════
// CATEGORIAS ... os filtros da aba Dicas. A chave (ex.: 'Perdíveis') é o que as dicas usam no campo cat; rot é o nome mostrado.
// DICAS ........ uma dica por bloco: { id: 'd99', cat: '<chave de CATEGORIAS>', titulo: { pt, en }, texto: { pt, en } }.
//                Use um id que ninguém use ainda (o último + 1). Campos opcionais: jogo (veja abaixo) e img: 'imagens/x.jpg'.
// RAPIDAS ...... dicas curtas do topo da aba Dicas. Vazio = usa as dicas mais recentes de DICAS.
// DICA DE UM JOGO: escreva a dica aqui mesmo, com jogo: 'Nome exato do jogo' (igual ao campo jogo de dados/jogos-lista.js).
// Ela aparece na lista geral e também na aba Dicas do guia daquele jogo (veja as dicas d12, d13... do Abiotic Factor).
// ══════════════════════════════════════════════════════════════════════════

// A chave (pt) é o id interno da categoria; rot é o nome mostrado.
// As categorias valem para qualquer jogo; a ordem aqui é a ordem dos filtros na aba Dicas.
// Builds = armas, equipamentos e armaduras. Perdíveis = o que se perde sem volta. Farm = repetição/grind.
const CATEGORIAS = {
  'Colecionáveis': { cor: 'var(--sage)',   rot: { pt: 'Colecionáveis', en: 'Collectibles' } },
  'Exploração':    { cor: 'var(--teal)',   rot: { pt: 'Exploração',    en: 'Exploration' } },
  'Builds':        { cor: 'var(--ember)',  rot: { pt: 'Builds',        en: 'Builds' } },
  'Estratégias':   { cor: 'var(--plat)',   rot: { pt: 'Estratégias',   en: 'Strategies' } },
  'Perdíveis':     { cor: 'var(--rose)',   rot: { pt: 'Perdíveis',     en: 'Missables' } },
  'Farm':          { cor: 'var(--butter)', rot: { pt: 'Farm',          en: 'Farming' } },
  'Dicas gerais':  { cor: 'var(--dim)',    rot: { pt: 'Dicas gerais',  en: 'General tips' } },
  'Troféus':       { cor: 'var(--bronze)', rot: { pt: 'Troféus',       en: 'Trophies' } }
}

// DICAS: as mais novas ficam no FIM do array (a faixa mostra as últimas LIMITES.dicas, da mais nova para a mais antiga).
// img (opcional): imagem do card, ex.: img: 'imagens/dica.jpg'. Sem img, o card usa a cor do jogo/categoria.
const DICAS = [
  { id: 'd01', cat: 'Perdíveis',
    titulo: { pt: 'Leia a lista antes de apertar start', en: 'Read the list before you hit start' },
    texto:  { pt: 'Dois minutos olhando os troféus evitam dezenas de horas de replay. Marque de cabeça tudo o que parece perdível antes do primeiro capítulo.', en: 'Two minutes scanning the trophies saves dozens of hours of replay. Note anything that looks missable before the first chapter.' } },
  { id: 'd02', cat: 'Perdíveis',
    titulo: { pt: 'Salve em slots separados', en: 'Save in separate slots' },
    texto:  { pt: 'Se o jogo permite vários slots, crie um "antes do ponto sem volta" e não sobrescreva. É o seguro mais barato que existe.', en: 'If the game allows several slots, create a "before the point of no return" one and never overwrite it. It\'s the cheapest insurance there is.' } },
  { id: 'd03', cat: 'Estratégias',
    titulo: { pt: 'Um playthrough, uma meta', en: 'One playthrough, one goal' },
    texto:  { pt: 'Quando a lista exige uma segunda jogatina, decida desde já o que fica para ela — colecionáveis, finais, dificuldade — em vez de repetir tudo.', en: 'When the list demands a second run, decide now what is left for it — collectibles, endings, difficulty — instead of repeating everything.' } },
  { id: 'd04', cat: 'Troféus',
    titulo: { pt: 'Dificuldade acumula? Comece na difícil', en: 'Difficulty stacks? Start on hard' },
    texto:  { pt: 'Confira na lista se os troféus de dificuldade acumulam. Se sim, jogar direto na mais alta que eles pedem poupa uma jogatina inteira.', en: 'Check the list to see whether difficulty trophies stack. If they do, playing straight on the highest one they ask for saves an entire playthrough.' } },
  { id: 'd05', cat: 'Farm',
    titulo: { pt: 'Contador no menu, não sessão de grind', en: 'Menu counter, not a grind session' },
    texto:  { pt: 'Troféus de "mate 100" costumam acumular sozinhos. Vá conferindo o contador e só force o que sobrar no fim.', en: '"Kill 100" trophies usually add up on their own. Keep checking the counter and only force whatever is left at the end.' } },
  { id: 'd06', cat: 'Farm',
    titulo: { pt: 'RNG: ache o ciclo mais rápido', en: 'RNG: find the fastest loop' },
    texto:  { pt: 'Para drop raro, o que importa é tentativas por hora. Procure o método que reinicia mais rápido — recarregar checkpoint, por exemplo — e deixe um podcast rolando.', en: 'For a rare drop, what matters is attempts per hour. Look for the method that resets fastest — reloading a checkpoint, for example — and put a podcast on.' } },
  { id: 'd07', cat: 'Colecionáveis',
    titulo: { pt: 'Anote por área, na hora', en: 'Take notes per area, on the spot' },
    texto:  { pt: 'Tire um print do mapa ou anote o que falta ao sair de cada região. Voltar depois e tentar lembrar é o que mais custa tempo.', en: 'Take a screenshot of the map or jot down what is missing when you leave each region. Going back later and trying to remember is what costs the most time.' } },
  { id: 'd08', cat: 'Colecionáveis',
    titulo: { pt: 'Tem seleção de capítulo? Respire', en: 'Chapter select? Breathe' },
    texto:  { pt: 'Antes de entrar em pânico por um colecionável perdido, confira se o jogo deixa rejogar capítulos. Na maioria das vezes deixa.', en: 'Before panicking over a missed collectible, check whether the game lets you replay chapters. Most of the time it does.' } },
  { id: 'd09', cat: 'Dicas gerais',
    titulo: { pt: 'Pausas curtas vencem maratonas', en: 'Short breaks beat marathons' },
    texto:  { pt: 'Platina é trabalho de semanas, não de uma noite. Parar cedo e voltar descansado erra menos do que insistir cansado.', en: 'Platinum is weeks of work, not one night. Stopping early and coming back rested makes fewer mistakes than pushing on tired.' } },
  { id: 'd10', cat: 'Dicas gerais',
    titulo: { pt: 'Largar uma lista chata não é derrota', en: 'Dropping a boring list is not defeat' },
    texto:  { pt: 'Some as horas estimadas e pergunte se você ainda quer isso. Dar o tempo para outro jogo também é estratégia.', en: 'Add up the estimated hours and ask whether you still want this. Giving that time to another game is strategy too.' } },
  { id: 'd11', cat: 'Troféus',
    titulo: { pt: 'Olhe a raridade do troféu', en: 'Check the trophy\'s rarity' },
    texto:  { pt: 'Porcentagem muito baixa em um troféu comum costuma indicar perdível ou grind longo. Vale conferir antes de avançar.', en: 'A very low percentage on an ordinary trophy often points to a missable or a long grind. Worth checking before you move on.' } },
  { id: 'd12', cat: 'Perdíveis', jogo: 'Abiotic Factor', img: '',
    legCapa: { pt: 'Os Lab Rats: um precisa ser capturado vivo.', en: 'The Lab Rats: one must be captured alive.' },
    corpo: [
      { h: { pt: 'O problema', en: 'The problem' } },
      { p: { pt: 'O troféu <strong>Lab Rat</strong> precisa de um Lab Rat <strong>capturado vivo</strong>. Se você matar todos antes de ter como capturar um, o troféu pode escapar.', en: 'The <strong>Lab Rat</strong> trophy needs a Lab Rat <strong>captured alive</strong>. If you kill them all before you have a way to capture one, the trophy can slip away.' } },
      { img: '', razao: '16 / 9', alt: { pt: 'Lab Rat', en: 'Lab Rat' }, leg: { pt: 'Um Lab Rat, soldado da Order.', en: 'A Lab Rat, an Order soldier.' } },
      { h: { pt: 'Como evitar', en: 'How to avoid it' } },
      { p: { pt: 'Construa o <strong>Net Launcher</strong> antes de matar todos eles. Assim você já tem a ferramenta de captura quando encontrar o próximo.', en: 'Build the <strong>Net Launcher</strong> before you kill them all. That way you already have the capture tool when you meet the next one.' } },
      { h: { pt: 'O que saber sobre o Lab Rat', en: 'What to know about the Lab Rat' } },
      { ul: [
        { pt: 'Aparece nas Facilities e, conforme você avança, principalmente no Office Sector.', en: 'Shows up in the Facilities and, as you progress, mostly in the Office Sector.' },
        { pt: 'Costuma fugir em vez de lutar. Se fugir, siga as partículas de radiação e o rastro de itens que ele deixa.', en: 'Usually flees instead of fighting. If it flees, follow the radiation particles and the item trail it leaves.' },
        { pt: 'Emite radiação em um raio pequeno: proteja-se ao chegar perto.', en: 'Emits radiation in a small radius: protect yourself when you get close.' }
      ] },
      { destaque: { pt: 'Este é um dos perdíveis do guia e aparece com o selo Perdível na página de Perdíveis.', en: 'This is one of the guide\'s missables and carries the Missable tag on the Missables page.' } },
      { ir: 'bestiario', t: { pt: 'Ver a ficha do Lab Rat →', en: 'See the Lab Rat card →' } },
      { ir: 'perdiveis', t: { pt: 'Ver os perdíveis →', en: 'See the missables →' } }
    ],
    titulo: { pt: 'Net Launcher antes dos Lab Rats', en: 'Net Launcher before the Lab Rats' },
    texto:  { pt: 'O troféu do Rato de Laboratório precisa de um Lab Rat capturado vivo. Construa o Net Launcher antes de matar todos eles.', en: 'The Lab Rat trophy needs a Lab Rat captured alive. Build the Net Launcher before you kill them all.' } },
  { id: 'd13', cat: 'Perdíveis', jogo: 'Abiotic Factor', img: '',
    legCapa: { pt: 'Os uniformes vêm de corpos espalhados pelos setores.', en: 'The uniforms come from bodies scattered across the sectors.' },
    corpo: [
      { h: { pt: 'Dois uniformes, dois troféus', en: 'Two uniforms, two trophies' } },
      { p: { pt: 'Dois troféus dependem de uniformes completos que vêm de <strong>corpos</strong> pelo caminho. Passar correndo é como eles escapam.', en: 'Two trophies depend on full uniforms that come from <strong>bodies</strong> along the way. Running past them is how they slip away.' } },
      { ul: [
        { pt: '<strong>Engineering Success:</strong> uniforme completo de Manufacturing, em Upper Shipping.', en: '<strong>Engineering Success:</strong> the full Manufacturing uniform, in Upper Shipping.' },
        { pt: '<strong>Go With The Flow:</strong> uniforme completo da Hidroplanta, no elevador subaquático.', en: '<strong>Go With The Flow:</strong> the full Hydroplant uniform, at the underwater elevator.' }
      ] },
      { img: '', razao: '16 / 9', alt: { pt: 'Corpo com uniforme', en: 'Body with a uniform' }, leg: { pt: 'Examine os corpos pelo caminho.', en: 'Check the bodies along the way.' } },
      { h: { pt: 'Como não perder', en: 'How not to miss them' } },
      { p: { pt: 'Ao entrar nessas áreas, examine os corpos antes de seguir. Os dois troféus constam como perdíveis na lista.', en: 'When you enter these areas, check the bodies before moving on. Both trophies are flagged as missables in the list.' } },
      { ir: 'perdiveis', t: { pt: 'Ver os perdíveis →', en: 'See the missables →' } },
      { ir: 'trofeus', t: { pt: 'Ver os troféus →', en: 'See the trophies →' } }
    ],
    titulo: { pt: 'Examine os corpos de uniforme', en: 'Check the uniform bodies' },
    texto:  { pt: 'Os uniformes de Manufacturing (Upper Shipping) e da Hidroplanta (elevador subaquático) vêm de corpos. Passar correndo é como se perde.', en: 'The Manufacturing (Upper Shipping) and Hydroplant (underwater elevator) uniforms come from bodies. Running past them is how they get missed.' } },
  { id: 'd14', cat: 'Estratégias', jogo: 'Abiotic Factor', img: '',
    legCapa: { pt: 'A Robotics da Hidroplanta, onde a quest da Kylie começa.', en: 'The Hydroplant\'s Robotics section, where Kylie\'s quest begins.' },
    corpo: [
      { h: { pt: 'Por que começar cedo', en: 'Why start early' } },
      { p: { pt: 'O troféu <strong>Electric Dreams</strong> pede levar Kylie Muir até o fim, e a sequência é longa. Quanto antes você começar, menos você precisa voltar atrás.', en: 'The <strong>Electric Dreams</strong> trophy asks you to take Kylie Muir to the end, and the sequence is long. The sooner you start, the less you have to backtrack.' } },
      { h: { pt: 'O primeiro passo', en: 'The first step' } },
      { p: { pt: 'Na seção subaquática de Robotics, na Hidroplanta, você precisa do <strong>Hyper-Dense Neural Chip</strong> e de reparar o <strong>Neural Transference Terminal</strong> para passar a consciência dela ao dispositivo de armazenamento, o Kylie Trinket.', en: 'In the underwater Robotics sub-section of the Hydroplant you need the <strong>Hyper-Dense Neural Chip</strong> and to repair the <strong>Neural Transference Terminal</strong> to move her consciousness to the storage device, the Kylie Trinket.' } },
      { img: '', razao: '16 / 9', alt: { pt: 'Robotics da Hidroplanta', en: 'Hydroplant Robotics' }, leg: { pt: 'Robotics, na Hidroplanta.', en: 'Robotics, in the Hydroplant.' } },
      { h: { pt: 'Depois disso', en: 'After that' } },
      { p: { pt: 'A quest continua em outros setores: na Botanical Wing ela é colocada num Defense Bot modificado, o que exige entrar no "futuro" (Divarication), e depois ajuda em Albatross.', en: 'The quest continues in other sectors: in the Botanical Wing she is uploaded into a modified Defense Bot, which requires entering the "future" (Divarication), and she later helps at Albatross.' } },
      { destaque: { pt: 'Esta parte tem detalhes de história. Se quiser evitar spoilers, pare no primeiro passo.', en: 'This part has story details. If you want to avoid spoilers, stop at the first step.' } },
      { ir: 'personagens', t: { pt: 'Ver a ficha da Kylie →', en: 'See Kylie\'s card →' } },
      { ir: 'perdiveis', t: { pt: 'Ver os perdíveis →', en: 'See the missables →' } }
    ],
    titulo: { pt: 'A quest da Kylie começa cedo', en: 'Kylie\'s quest starts early' },
    texto:  { pt: 'O troféu Sonhos Elétricos pede o Hyper-Dense Neural Chip na Robotics da Hidroplanta e uma sequência longa. Comece assim que chegar lá.', en: 'The Electric Dreams trophy needs the Hyper-Dense Neural Chip in the Hydroplant\'s Robotics section and a long sequence. Start as soon as you get there.' } },
  {
    id: 'd15',
    cat: 'Perdíveis',
    jogo: 'Grand Theft Auto VI',
    img: '',
    legCapa: { pt: 'A casa de Jason, onde a Lucia medita na varanda.', en: 'Jason\'s house, where Lucia meditates on the balcony.' },
    corpo: [
      {
        h: { pt: 'O troféu', en: 'The trophy' }
      },
      {
        p: { pt: '<strong>Positive Mental Attitude</strong> pede meditar em todos os pontos de Leonida. A primeira meditação acontece logo no Capítulo 1 e <strong>não aparece como um ponto de meditação comum</strong>.', en: '<strong>Positive Mental Attitude</strong> asks you to meditate at every spot in Leonida. The first meditation happens right in Chapter 1 and <strong>does not show up as a regular meditation spot</strong>.' }
      },
      {
        h: { pt: 'Como fazer', en: 'How to do it' }
      },
      {
        p: { pt: 'Depois da missão <strong>Down to Earth</strong>, converse com a Lucia na cozinha, de manhã. Ela diz que vai meditar e vai para a varanda. Siga-a e aceite a missão opcional de aprender a meditação com ela.', en: 'After the mission <strong>Down to Earth</strong>, talk to Lucia in the kitchen in the morning. She says she is going to meditate and heads to the balcony. Follow her and accept the optional quest to learn meditation from her.' }
      },
      {
        destaque: { pt: 'O guia consultado não confirma se essa sessão é obrigatória para o troféu. O autor fez e o troféu liberou depois, então a escolha segura é não pular.', en: 'The guide consulted does not confirm whether this session is required for the trophy. The author did it and the trophy unlocked afterwards, so the safe choice is not to skip it.' }
      },
      {
        ir: 'perdiveis',
        t: { pt: 'Ver os perdíveis →', en: 'See the missables →' }
      }
    ],
    titulo: { pt: 'Medite com a Lucia no Capítulo 1', en: 'Meditate with Lucia in Chapter 1' },
    texto: { pt: 'Uma meditação opcional do Capítulo 1 conta para o troféu Positive Mental Attitude e não aparece como ponto comum.', en: 'An optional Chapter 1 meditation counts toward the Positive Mental Attitude trophy and does not show up as a regular spot.' }
  }
]

// Dicas rápidas (stories no topo da aba Dicas). Um objeto por dica, as mais novas primeiro.
// Campos: id, titulo { pt, en }, texto { pt, en }. Opcionais: jogo ('Abiotic Factor'), cat (chave de CATEGORIAS), img ('imagens/arquivo.jpg').
// Enquanto estiver vazio, a faixa mostra as dicas mais recentes de DICAS.
const RAPIDAS = []
