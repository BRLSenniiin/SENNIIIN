'use strict'

JOGOS['gta-vi'] = {
// ══════════════════════════════════════════════════════════════════════════
// GUIA DESTE ARQUIVO — conteúdo do jogo Grand Theft Auto VI (base de sistemas: abas com 1–2 exemplos)
// ══════════════════════════════════════════════════════════════════════════
// Cada chave abaixo vira uma aba do guia: abertura (texto do topo), visaoGeral (aba Visão geral), jogabilidade, roteiro (aba "Guia"), mapas,
// bestiario, personagens, equipamentos, armaduras, trofeus, perdiveis, novidades, trilha, detalhes, curiosidades, vozes, desenvolvedores...
// (a aba Dicas do guia não tem chave aqui: usa as dicas de dados/dicas.js com o campo jogo igual ao deste jogo)
// secoesExtra: lista das abas opcionais ligadas neste jogo (atividades, objetos, veiculos...). Só as listadas aparecem no menu.
// ocultas: abas que existem, mas ficam escondidas.   descoberto: % de cada aba (número pequeno no menu), escrito por você.
// atualizado: data 'AAAA-MM-DD' da última mudança (ordena os jogos da home).   img: capa do jogo.
//
// COMO ESCREVER (vale para qualquer aba):
// • Texto com idioma: { pt: '...', en: '...' }. Texto simples (entre aspas) vale para os dois.
// • Negrito/itálico dentro do texto: <strong>assim</strong> e <em>assim</em>. Aspas simples dentro do texto: escreva \'.
// • IMAGEM: coloque o arquivo na pasta imagens/ e use img: 'imagens/nome.jpg' (sem img, aparece a moldura vazia).
//   Em blocos de texto: { img: 'imagens/x.jpg', razao: '16 / 9', alt: { pt, en }, leg: { pt, en } }  (razao = proporção; alt = descrição; leg = legenda).
// • Blocos de texto corrido (visaoGeral, jogabilidade e páginas de novidade): { h: título } { p: parágrafo } { ul: [lista] }
//   { img: ... } { dest: { tag, t, d } } (destaque curto) { destaque: texto } { ir: 'aba', t: texto do botão }.
// • Palavra-chave clicável na Visão geral: escreva [[id|palavra]] no texto e crie o id em "refs" (imagem + legenda) no fim deste arquivo.
// • Vírgula entre itens de uma lista, nenhuma depois do último. Chaves { } e colchetes [ ] precisam fechar.
// • Dúvida se quebrou algo? Abra o site: se uma aba ficar vazia ou der erro, desfaça a última mudança.
// • As abas com exemplos (atividades, propriedades, missões...) mostram o formato de cada sistema: copie um item e troque os dados.
// ══════════════════════════════════════════════════════════════════════════
    atualizado: '2026-11-19',
    img: '',
    abertura: [
      { pt: '<strong>Grand Theft Auto VI</strong> é da Rockstar Games, para PlayStation 5 e Xbox Series X|S, com lançamento marcado para <strong>19 de novembro de 2026</strong>. A história se passa em Leonida, um estado fictício inspirado na Flórida que inclui Vice City, e tem Jason Duval e Lucia Caminos como protagonistas.', en: '<strong>Grand Theft Auto VI</strong> is from Rockstar Games, for PlayStation 5 and Xbox Series X|S, scheduled for release on <strong>November 19, 2026</strong>. The story takes place in Leonida, a fictional state based on Florida that includes Vice City, with Jason Duval and Lucia Caminos as the protagonists.' },
      { pt: 'A platina, <strong>Vice Got a Price</strong>, vem de <strong>55 troféus</strong> (1 platina, 2 ouros, 6 pratas e 46 bronzes), todos offline. A dificuldade é baixa, mas o tempo é longo: cerca de <strong>200 horas</strong>. Só um troféu é possivelmente perdível; abra Perdíveis antes de avançar no Capítulo 1.', en: 'The platinum, <strong>Vice Got a Price</strong>, comes from <strong>55 trophies</strong> (1 platinum, 2 gold, 6 silver and 46 bronze), all offline. The difficulty is low but the time is long: about <strong>200 hours</strong>. Only one trophy is possibly missable; open Missables before moving on in Chapter 1.' }
    ],
    perdiveis: [
      {
        cor: 'butter',
        onde: 'Capítulo 1',
        t: { pt: 'Meditação do Capítulo 1', en: 'Chapter 1 meditation' },
        d: { pt: 'O troféu Positive Mental Attitude pede meditar em todos os pontos de Leonida, e a primeira meditação acontece logo no Capítulo 1, fora dos pontos comuns.', en: 'The Positive Mental Attitude trophy asks you to meditate at every spot in Leonida, and the first meditation happens right in Chapter 1, outside the regular spots.' },
        trofeus: ['positive-mental-attitude'],
        passos: [
          {
            cap: { pt: 'O troféu', en: 'The trophy' },
            t: { pt: 'Positive Mental Attitude (bronze): meditar em todos os pontos de Leonida.', en: 'Positive Mental Attitude (bronze): meditate at every spot in Leonida.' }
          },
          {
            cap: { pt: 'Capítulo 1', en: 'Chapter 1' },
            t: { pt: 'Depois da missão Down to Earth, converse com a Lucia na cozinha, de manhã. Ela diz que vai meditar e vai para a varanda.', en: 'After the mission Down to Earth, talk to Lucia in the kitchen in the morning. She says she is going to meditate and heads to the balcony.' }
          },
          {
            cap: { pt: 'Aceite a missão', en: 'Accept the quest' },
            t: { pt: 'Siga a Lucia e aceite a missão opcional de aprender a meditação com ela. Essa meditação aumenta o contador do troféu, mas não aparece como um ponto de meditação comum.', en: 'Follow Lucia and accept the optional quest to learn meditation from her. This meditation raises the trophy counter but does not show up as a regular meditation spot.' }
          },
          {
            cap: { pt: 'Por precaução', en: 'To be safe' },
            t: { pt: 'O guia consultado não confirma se essa sessão é obrigatória. O autor fez e o troféu liberou depois, então não pule.', en: 'The guide consulted does not confirm whether this session is required. The author did it and the trophy unlocked afterwards, so do not skip it.' },
            sub: [
              { pt: 'A última meditação só pode ser feita quando Jason e Lucia puderem jogar juntos, o que libera depois do Capítulo 2.', en: 'The final meditation can only be done once Jason and Lucia can play together, which unlocks after Chapter 2.' }
            ]
          }
        ],
        fonte: { pt: 'Guia de troféus do PowerPyx.', en: 'PowerPyx trophy guide.' }
      }
    ],
    notas: {
      perdiveis: { pt: 'Toque no card para abrir o passo a passo. É um troféu possivelmente perdível: o guia de origem não confirma se a sessão do Capítulo 1 é obrigatória.', en: 'Tap the card to open its step by step. It is a possibly missable trophy: the source guide does not confirm whether the Chapter 1 session is required.' },
      trofeus: { pt: 'Troféus do jogo base no PS5. A raridade e a EXP ainda não foram preenchidas.', en: 'Base game trophies on PS5. Rarity and EXP have not been filled in yet.' },
      pessoas: { pt: 'Fonte: Wikipedia.', en: 'Source: Wikipedia.' },
      colecionaveis: { pt: 'Números tirados da lista de troféus (guia do PowerPyx).', en: 'Numbers taken from the trophy list (PowerPyx guide).' },
      animais: { pt: 'Número tirado do 100% (guia do PowerPyx).', en: 'Number taken from the 100% checklist (PowerPyx guide).' },
      veiculos: { pt: 'O 100% pede escanear 200 dos 277 modelos de veículos (número tirado do guia do PowerPyx).', en: '100% asks you to scan 200 of the 277 vehicle models (number taken from the PowerPyx guide).' },
      equipamentos: { pt: 'Armas identificadas por fãs em trailers e imagens (Gfinity Esports, atualizado em 31/08/2026); a Rockstar não publicou uma lista oficial. Sem números de dano por enquanto.', en: 'Weapons identified by fans from trailers and screenshots (Gfinity Esports, updated 08/31/2026); Rockstar has not published an official list. No damage numbers yet.' }
    },
    descoberto: {
      jogabilidade: 5,
      roteiro: 5,
      mapas: 0,
      personagens: 5,
      equipamentos: 5,
      trofeus: 5,
      perdiveis: 5,
      veiculos: 0
    },
    ocultas: ['bestiario', 'armaduras'],
    rotulos: { equipamentos: { pt: 'Armamentos', en: 'Weapons' }, veiculos: { pt: 'Transportes', en: 'Transport' } },
    // Troféus (aba Troféus), lista do Exophase (PS5), na ordem do jogo. Mesmos campos do Abiotic Factor; sem pct/exp/rar porque os números do Exophase ainda são provisórios (lançamento).
    // Nomes: pt = como aparecem no console em português; en = título em inglês tirado do endereço do troféu. Sem link para fora: o código 'ex' é só identificador.
    trofeus: [
      { ex: 'vice-got-a-price', tipo: 'platina', nome: { pt: 'Vice City cobra caro!', en: 'Vice Got a Price' }, desc: { pt: 'Parabéns! Você é uma lenda de Leonida.', en: 'Congratulations! You are a Leonida legend.' }, img: '00g4656j' },
      { ex: 'just-like-paradise', tipo: 'bronze', nome: { pt: 'Vivendo no paraíso', en: 'Just Like Paradise' }, desc: { pt: 'Conclua "Tá nervoso? Vai pescar".', en: 'Complete the mission “Tá nervoso? Vai pescar”.' }, img: '8jgdb3b4', oculto: true },
      { ex: 'paradise-lost', tipo: 'bronze', nome: { pt: 'Paraíso perdido', en: 'Paradise Lost' }, desc: { pt: 'Conclua o Capítulo 1.', en: 'Complete Chapter 1.' }, img: 'ee40jbj6', oculto: true },
      { ex: 'ts-ass-drug-money', tipo: 'bronze', nome: { pt: 'T***, rabeta, droga e grana', en: 'T**s, Ass, Drug Money' }, desc: { pt: 'Conclua o Capítulo 2.', en: 'Complete Chapter 2.' }, img: '4037jgjj', oculto: true },
      { ex: 'vice-city-baby', tipo: 'bronze', nome: { pt: 'Vice City, baby!', en: 'Vice City, Baby!' }, desc: { pt: 'Conclua o Capítulo 3.', en: 'Complete Chapter 3.' }, img: '6d64eje6', oculto: true },
      { ex: 'top-of-the-world-ma', tipo: 'bronze', nome: { pt: 'No topo do mundo', en: 'Top of the World, Ma' }, desc: { pt: 'Conclua o Capítulo 4.', en: 'Complete Chapter 4.' }, img: 'b80db5bj', oculto: true },
      { ex: 'you-gotta-know-when-to-get-off', tipo: 'ouro', nome: { pt: 'Tem que saber a hora de sair', en: 'You Gotta Know When to Get Off' }, desc: { pt: 'Conclua a última missão.', en: 'Complete the final mission.' }, img: 'gjeb8d8d', oculto: true },
      { ex: 'trust', tipo: 'bronze', nome: { pt: 'Confia', en: 'Trust' }, desc: { pt: 'Conclua "Café da manhã pra viagem".', en: 'Complete the mission “Café da manhã pra viagem”.' }, img: 'dg57d6de', oculto: true },
      { ex: 'break-the-bank', tipo: 'bronze', nome: { pt: 'Fechando a conta', en: 'Break the Bank' }, desc: { pt: 'Conclua "Golpe do cartel".', en: 'Complete the mission “Golpe do cartel”.' }, img: 'j0j78387', oculto: true },
      { ex: 'family-matters', tipo: 'bronze', nome: { pt: 'Questões de família', en: 'Family Matters' }, desc: { pt: 'Conclua "Brincadeira de criança".', en: 'Complete the mission “Brincadeira de criança”.' }, img: '13dbe4d5', oculto: true },
      { ex: 'dwnfall', tipo: 'bronze', nome: { pt: 'DWNGRADE', en: 'DWNFALL' }, desc: { pt: 'Conclua "Atrações principais".', en: 'Complete the mission “Atrações principais”.' }, img: '35e1dbe5', oculto: true },
      { ex: 'hi-jacked', tipo: 'bronze', nome: { pt: 'Extraviado', en: 'Hi-Jacked' }, desc: { pt: 'Conclua "Turbulência no Aeroporto de Vice City".', en: 'Complete the mission “Turbulência no Aeroporto de Vice City”.' }, img: '77eb61e0', oculto: true },
      { ex: 'snow-storm', tipo: 'bronze', nome: { pt: 'Empoderado', en: 'Snow Storm' }, desc: { pt: 'Conclua "Operação glória brutal".', en: 'Complete the mission “Operação glória brutal”.' }, img: '55401d43', oculto: true },
      { ex: 'a-long-road', tipo: 'ouro', nome: { pt: 'Longa estrada', en: 'A Long Road' }, desc: { pt: 'Conclua 100% do jogo.', en: 'Complete 100% of the game.' }, img: '00g465gj' },
      { ex: 'cunning-stunts', tipo: 'prata', nome: { pt: 'Manobras e crânios rachados', en: 'Cunning Stunts' }, desc: { pt: 'Conclua 250 acrobacias.', en: 'Complete 250 stunts.' }, img: '8jgdb3g4' },
      { ex: 'master-of-none', tipo: 'bronze', nome: { pt: 'Pau pra toda obra', en: 'Master of None' }, desc: { pt: 'Tente todos os tipos de atividade uma vez.', en: 'Try every type of activity once.' }, img: 'ee40jb46' },
      { ex: 'the-shootist', tipo: 'prata', nome: { pt: 'O atirador', en: 'The Shootist' }, desc: { pt: 'Conquiste medalha de ouro em todos os desafios de Estandes de Tiro.', en: 'Earn a gold medal in every Shooting Range challenge.' }, img: '4037jg3j' },
      { ex: 'top-fun', tipo: 'bronze', nome: { pt: 'Top Fun', en: 'Top Fun' }, desc: { pt: 'Vença uma Corrida de Drones da Top Fun em todos os locais.', en: 'Win a Top Fun Drone Race at every location.' }, img: '6d64ej66' },
      { ex: 'earn-cash-not-kudos', tipo: 'bronze', nome: { pt: 'Sempre no corre', en: 'Earn Cash, Not Kudos' }, desc: { pt: 'Vença 20 corridas diferentes.', en: 'Win 20 different races.' }, img: 'b80db50j' },
      { ex: 'baited-my-tackle', tipo: 'bronze', nome: { pt: 'Pega na minha vara', en: 'Baited My Tackle' }, desc: { pt: 'Derrote o Cal em um desafio de Pesca.', en: 'Defeat Cal in a Fishing challenge.' }, img: 'gjeb8ded' },
      { ex: 'stick-fiddler', tipo: 'bronze', nome: { pt: 'Meia-lua e soco', en: 'Stick Fiddler' }, desc: { pt: 'Conclua um jogo de fliperama.', en: 'Complete an arcade game.' }, img: 'dg57d65e' },
      { ex: 'road-to-rehabilitation', tipo: 'bronze', nome: { pt: 'Rumo à reabilitação', en: 'Road to Rehabilitation' }, desc: { pt: 'Conclua a última missão da Andy.', en: 'Complete Andy\'s final mission.' }, img: 'j0j783j7', oculto: true },
      { ex: 'this-was-no-boat-accident', tipo: 'bronze', nome: { pt: 'Não foi acidente de barco', en: 'This Was No Boat Accident' }, desc: { pt: 'Conclua a última missão do Kenton.', en: 'Complete Kenton\'s final mission.' }, img: '13dbe485', oculto: true },
      { ex: 'the-lone-rider', tipo: 'bronze', nome: { pt: 'Estrada solitária', en: 'The Lone Rider' }, desc: { pt: 'Conclua a última missão do Billy.', en: 'Complete Billy\'s final mission.' }, img: '35e1db85', oculto: true },
      { ex: 'strangers-freaks', tipo: 'prata', nome: { pt: 'Estranhos e doidos', en: 'Strangers & Freaks' }, desc: { pt: 'Conclua 8 segmentos de missões para pessoas desconhecidas ao longo do estado de Leonida.', en: 'Complete 8 stranger mission segments across the state of Leonida.' }, img: '77eb6180' },
      { ex: 'supply-demand', tipo: 'bronze', nome: { pt: 'Oferta e procura', en: 'Supply & Demand' }, desc: { pt: 'Conclua a última missão do Randy.', en: 'Complete Randy\'s final mission.' }, img: '55401d83', oculto: true },
      { ex: 'spin-on-this', tipo: 'bronze', nome: { pt: 'Spin On This!', en: 'Spin On This!' }, desc: { pt: 'Conclua a última missão do Tyrone.', en: 'Complete Tyrone\'s final mission.' }, img: '00g4658j', oculto: true },
      { ex: 'positive-mental-attitude', tipo: 'bronze', nome: { pt: 'Pensamentos positivos', en: 'Positive Mental Attitude' }, desc: { pt: 'Medite em todos os Locais de Meditação em Leonida.', en: 'Meditate at every Meditation Spot in Leonida.' }, img: '8jgdb384', perdivel: 'atencao', como: { pt: 'Inclui a meditação opcional do Capítulo 1 (a Lucia ensina depois de Down to Earth), que não aparece como ponto comum. Não pule essa sessão.', en: 'Includes the optional Chapter 1 meditation (Lucia teaches it after Down to Earth), which does not show up as a regular spot. Do not skip that session.' } },
      { ex: 'fair-game', tipo: 'bronze', nome: { pt: 'Presa fácil', en: 'Fair Game' }, desc: { pt: 'Cace um animal notável para o Bret.', en: 'Hunt a notable animal for Bret.' }, img: 'ee40jb76', oculto: true },
      { ex: 'dont-touch-my-deck', tipo: 'prata', nome: { pt: 'Não toca no meu baralho', en: 'Don\'t Touch My Deck' }, desc: { pt: 'Complete 3 conjuntos de cartas colecionáveis.', en: 'Complete 3 collectible card sets.' }, img: '4037jg8j' },
      { ex: 'you-wainker', tipo: 'prata', nome: { pt: 'Só no WAiNK', en: 'You WAiNKer' }, desc: { pt: 'Use o WAiNK IT em 100 locais.', en: 'Use WAiNK IT at 100 locations.' }, img: '6d64ej86' },
      { ex: 'one-last-thing', tipo: 'bronze', nome: { pt: 'Só mais uma coisa', en: 'One Last Thing' }, desc: { pt: 'Conclua 50 desafios.', en: 'Complete 50 challenges.' }, img: 'b80db5jj' },
      { ex: 'hot-together', tipo: 'bronze', nome: { pt: 'Pressão a dois', en: 'Hot Together' }, desc: { pt: 'Perca um Nível de Procurado de 4 estrelas com seu parceiro e se livre da Pressão.', en: 'Lose a 4-star Wanted Level with your partner and shake the Heat.' }, img: 'gjeb8d6d' },
      { ex: 'retail-therapy', tipo: 'bronze', nome: { pt: 'Banho de loja', en: 'Retail Therapy' }, desc: { pt: 'Roube 3 lojas consecutivas com seu parceiro sem perder o seu Nível de Procurado.', en: 'Rob 3 stores in a row with your partner without losing your Wanted Level.' }, img: 'dg57d63e' },
      { ex: 'whip-it-good', tipo: 'bronze', nome: { pt: 'Autos achados', en: 'Whip It Good' }, desc: { pt: 'Descubra 100 veículos.', en: 'Discover 100 vehicles.' }, img: 'j0j783d7' },
      { ex: 'gunslinger', tipo: 'bronze', nome: { pt: 'Pontaria focada', en: 'Gunslinger' }, desc: { pt: 'Mate 5 inimigos em um único uso do Foco de Combate.', en: 'Kill 5 enemies in a single use of Combat Focus.' }, img: '13dbe445' },
      { ex: 'catch-me-if-you-can', tipo: 'bronze', nome: { pt: 'Prenda-me se for capaz', en: 'Catch Me If You Can' }, desc: { pt: 'Faça uma decolagem improvisada no Aeroporto Internacional de Vice City.', en: 'Pull off an improvised takeoff at Vice City International Airport.' }, img: '35e1dbb5', oculto: true },
      { ex: 'challenging-tank', tipo: 'bronze', nome: { pt: 'Tanquinho invejável', en: 'Challenging Tank' }, desc: { pt: 'É meio quente dentro desses Rhinos.', en: 'It\'s kind of hot inside these Rhinos.' }, img: '77eb6110', oculto: true },
      { ex: 'sneakthief', tipo: 'bronze', nome: { pt: 'Mão leve', en: 'Sneakthief' }, desc: { pt: 'Roube uma joalheria sem detectarem você.', en: 'Rob a jewelry store without being detected.' }, img: '55401dd3' },
      { ex: 'maximum-withdrawal', tipo: 'prata', nome: { pt: 'Sacou, vazou', en: 'Maximum Withdrawal' }, desc: { pt: 'Roube 5 caixas-fortes de banco e escape.', en: 'Rob 5 bank vaults and escape.' }, img: '00g4655j' },
      { ex: 'a-classic-blitz-play', tipo: 'bronze', nome: { pt: 'Jogada ensaiada clássica', en: 'A Classic Blitz Play' }, desc: { pt: 'Roube um carro-forte e escape.', en: 'Rob an armored truck and escape.' }, img: '8jgdb334' },
      { ex: 'the-goodtime-state', tipo: 'bronze', nome: { pt: 'O Estado da Curtição', en: 'The Goodtime State' }, desc: { pt: 'Explore toda Leonida.', en: 'Explore all of Leonida.' }, img: 'ee40jbb6' },
      { ex: 'pest-control', tipo: 'bronze', nome: { pt: 'Fazendo a limpa', en: 'Pest Control' }, desc: { pt: 'Roube uma operação ilegal de cada gangue.', en: 'Rob an illegal operation from each gang.' }, img: '4037jggj' },
      { ex: 'in-the-beginning', tipo: 'bronze', nome: { pt: 'No início…', en: 'In the Beginning…' }, desc: { pt: 'Saboreie um coquetel com vista em Ocean Beach.', en: 'Savor a cocktail with a view in Ocean Beach.' }, img: '6d64ejj6', oculto: true },
      { ex: 'capital-offense', tipo: 'bronze', nome: { pt: 'Infração capital', en: 'Capital Offense' }, desc: { pt: 'Saia de uma concessionária quebrando tudo como nos velhos tempos.', en: 'Leave a dealership smashing everything like in the old days.' }, img: 'b80db55j', oculto: true },
      { ex: 'lets-go-bowling', tipo: 'bronze', nome: { pt: 'Bora pro boliche', en: 'Let’s Go Bowling' }, desc: { pt: 'Faça tudo na pista de boliche da Kolt e Associados.', en: 'Do everything at the Kolt & Associates bowling alley.' }, img: 'gjeb8ddd', oculto: true },
      { ex: 'personal-best', tipo: 'bronze', nome: { pt: 'Recorde pessoal', en: 'Personal Best' }, desc: { pt: 'Uma parceria massa.', en: 'A great partnership.' }, img: 'dg57d66e', oculto: true },
      { ex: 'actions-speak-louder', tipo: 'bronze', nome: { pt: 'Melhor fazer do que falar', en: 'Actions Speak Louder' }, desc: { pt: 'Escolhas foram feitas (para melhor ou para pior).', en: 'Choices were made (for better or for worse).' }, img: 'j0j78337', oculto: true },
      { ex: 'bad-luck-i-guess', tipo: 'bronze', nome: { pt: 'Azar, eu acho', en: 'Bad Luck, I Guess' }, desc: { pt: 'Na segunda vez, vai.', en: 'Second time’s the charm.' }, img: '13dbe465', oculto: true },
      { ex: 'the-truth-is-out-there', tipo: 'bronze', nome: { pt: 'A verdade está lá fora', en: 'The Truth Is Out There' }, desc: { pt: 'Caraca, o que foi isso?', en: 'Damn, what was that?' }, img: '35e1dbg5', oculto: true },
      { ex: 'ten-pin', tipo: 'bronze', nome: { pt: 'Strike', en: 'Ten Pin' }, desc: { pt: 'Derrube geral com golpes passando com seu veículo.', en: 'Knock everything down by sweeping through with your vehicle.' }, img: '77eb6130', oculto: true },
      { ex: 'dime-on-the-dollar', tipo: 'bronze', nome: { pt: 'Lavou, tá novo', en: 'Dime on the Dollar' }, desc: { pt: 'Ganhe $250.000 lavando cédulas marcadas por meio dos seus contatos.', en: 'Earn $250,000 laundering marked bills through your contacts.' }, img: '4037jgd1' },
      { ex: 'treat-yo-self', tipo: 'bronze', nome: { pt: 'Eu mereço', en: 'Treat Yo Self' }, desc: { pt: 'Gaste $100.000 em todas as lojas.', en: 'Spend $100,000 at every store.' }, img: '6d64ej13' },
      { ex: 'little-boxes', tipo: 'bronze', nome: { pt: 'Tudo reservado', en: 'Little Boxes' }, desc: { pt: 'Compre todas as propriedades de garagem.', en: 'Buy all the garage properties.' }, img: 'b80db513' },
      { ex: 'on-the-spot', tipo: 'bronze', nome: { pt: 'Tá na mão', en: 'On the Spot' }, desc: { pt: 'Registre 10 veículos no aplicativo Scooter Bros.', en: 'Register 10 vehicles in the Scooter Bros. app.' }, img: 'gjeb8d4g', como: { pt: 'A platina libera ao conquistar os outros 54 troféus. O guia do PowerPyx estima cerca de 200 horas e dificuldade 4/10, sem níveis de dificuldade no jogo.', en: 'The platinum unlocks once you earn the other 54 trophies. The PowerPyx guide estimates about 200 hours and a 4/10 difficulty, with no difficulty settings in the game.' }, como: { pt: 'A lista de 100% libera depois da história, em Progresso > Estatísticas. Pede 70 dos 80 desafios, 200 dos 277 modelos de veículos e 100 dos 255 animais. Assaltos, descobertas subaquáticas, estandes de tiro, corridas de drone e as missões do Bret precisam estar completos.', en: 'The 100% checklist unlocks after the story, under Progress > Stats. It asks for 70 of the 80 challenges, 200 of the 277 vehicle models and 100 of the 255 animals. Robberies, underwater discoveries, shooting ranges, drone races and Bret\'s quests must be fully completed.' }, dica: { pt: 'É o troféu mais difícil da lista, segundo o guia do PowerPyx.', en: 'It is the hardest trophy on the list, according to the PowerPyx guide.' } }
    ],
    secoesExtra: ['atividades', 'colecionaveis', 'propriedades', 'segredos', 'missoes', 'organizacoes', 'relacionamento', 'veiculos', 'servicos', 'negocios', 'animais', 'policia', 'personalizacao', 'atributos'],
    veiculos: [
      { id: 'exemplo-1', nome: { pt: 'Exemplo: Veículo 1', en: 'Example: Vehicle 1' }, tipo: { pt: 'Carro', en: 'Car' }, img: '',
        d: { pt: 'Texto de exemplo. Descreva aqui o veículo, onde encontrar e como ele se comporta.\n\nUma linha em branco separa os parágrafos.', en: 'Example text. Describe the vehicle here, where to find it and how it handles.\n\nA blank line separates paragraphs.' },
        fatos: [ { k: { pt: 'Velocidade', en: 'Speed' }, v: '—' }, { k: { pt: 'Aceleração', en: 'Acceleration' }, v: '—' }, { k: { pt: 'Preço', en: 'Price' }, v: '—' }, { k: { pt: 'Onde achar', en: 'Where to find' }, v: '—' } ] },
      { id: 'exemplo-2', nome: { pt: 'Exemplo: Veículo 2', en: 'Example: Vehicle 2' }, tipo: { pt: 'Moto', en: 'Motorcycle' }, img: '' }
    ],
    atividades: [
      { id: 'estandes-de-tiro', status: 'base', t: { pt: 'Estandes de tiro', en: 'Shooting ranges' }, d: { pt: 'Uma das atividades exigidas para o 100%.', en: 'One of the activities required for 100%.' },
        corpo: [
          { h: { pt: 'O que se sabe', en: 'What is known' } },
          { p: { pt: 'O 100% pede os estandes de tiro completos, segundo o guia de troféus do PowerPyx. Os detalhes de cada estande entram aqui conforme forem jogados.', en: '100% asks for the shooting ranges to be fully completed, according to the PowerPyx trophy guide. Details of each range will be added here as they are played.' } }
        ] },
      { id: 'corridas-de-drone', status: 'base', t: { pt: 'Corridas de drone', en: 'Drone races' }, d: { pt: 'Outra atividade exigida para o 100%.', en: 'Another activity required for 100%.' },
        corpo: [
          { h: { pt: 'O que se sabe', en: 'What is known' } },
          { p: { pt: 'O 100% pede as corridas de drone completas, segundo o guia de troféus do PowerPyx. Os detalhes de cada corrida entram aqui conforme forem jogadas.', en: '100% asks for the drone races to be fully completed, according to the PowerPyx trophy guide. Details of each race will be added here as they are played.' } }
        ] }
    ],
    colecionaveis: [
      { nome: 'Manobras', cat: 'desafio', nota: { pt: 'Existe um troféu para fazer 250 manobras.', en: 'There is a trophy for performing 250 stunts.' } },
      { nome: 'Locais de WAiNK', cat: 'desafio', nota: { pt: 'Existe um troféu para encontrar 100 locais de WAiNK.', en: 'There is a trophy for finding 100 WAiNK locations.' } }
    ],
    propriedades: [
      { id: 'casa', img: '', setor: 'Casa',
        t: { pt: 'Exemplo: Casa', en: 'Example: House' },
        d: { pt: 'Resumo curto: o que é este lugar e para que serve. Cada propriedade aparece com uma capa e abre em página própria, como as novidades.', en: 'Short summary: what this place is and what it is for. Each property shows a cover and opens on its own page, like the news items.' },
        legCapa: { pt: 'Troque esta moldura por uma imagem do local.', en: 'Replace this frame with an image of the place.' },
        corpo: [
          { h: { pt: 'O que é', en: 'What it is' } },
          { p: { pt: 'Descreva aqui a propriedade e o que ela oferece.', en: 'Describe the property here and what it offers.' } },
          { img: '', razao: '16 / 9', alt: { pt: 'Imagem do local', en: 'Image of the place' }, leg: { pt: 'Imagem do local.', en: 'Image of the place.' } },
          { h: { pt: 'Como conseguir', en: 'How to get it' } },
          { p: { pt: 'Explique como adquirir ou liberar, o custo e o que muda depois.', en: 'Explain how to buy or unlock it, the cost and what changes afterwards.' } },
          { h: { pt: 'Onde fica', en: 'Where it is' } },
          { p: { pt: 'Diga a região do mapa e como chegar.', en: 'Give the map area and how to get there.' } }
        ] },
      { id: 'garagem', img: '', setor: 'Garagem',
        t: { pt: 'Exemplo: Garagem', en: 'Example: Garage' },
        d: { pt: 'Resumo curto: o que é este lugar e para que serve. Cada propriedade aparece com uma capa e abre em página própria, como as novidades.', en: 'Short summary: what this place is and what it is for. Each property shows a cover and opens on its own page, like the news items.' },
        legCapa: { pt: 'Troque esta moldura por uma imagem do local.', en: 'Replace this frame with an image of the place.' },
        corpo: [
          { h: { pt: 'O que é', en: 'What it is' } },
          { p: { pt: 'Descreva aqui a propriedade e o que ela oferece.', en: 'Describe the property here and what it offers.' } },
          { img: '', razao: '16 / 9', alt: { pt: 'Imagem do local', en: 'Image of the place' }, leg: { pt: 'Imagem do local.', en: 'Image of the place.' } },
          { h: { pt: 'Como conseguir', en: 'How to get it' } },
          { p: { pt: 'Explique como adquirir ou liberar, o custo e o que muda depois.', en: 'Explain how to buy or unlock it, the cost and what changes afterwards.' } },
          { h: { pt: 'Onde fica', en: 'Where it is' } },
          { p: { pt: 'Diga a região do mapa e como chegar.', en: 'Give the map area and how to get there.' } }
        ] }
    ],
    segredos: [
      { id: 'exemplo-segredo', img: '',
        t: { pt: 'Exemplo: um segredo do jogo', en: 'Example: a game secret' },
        d: { pt: 'Card de exemplo. Cada segredo aparece com uma capa e abre em página própria, como as novidades.', en: 'Example card. Each secret shows a cover and opens on its own page, like the news items.' },
        legCapa: { pt: 'Troque esta moldura por uma imagem do segredo.', en: 'Replace this frame with an image of the secret.' },
        corpo: [
          { h: { pt: 'O que é', en: 'What it is' } },
          { p: { pt: 'Descreva aqui o segredo, o que ele revela e onde ele fica.', en: 'Describe the secret here: what it reveals and where it is.' } },
          { img: '', razao: '16 / 9', alt: { pt: 'Imagem do segredo', en: 'Image of the secret' }, leg: { pt: 'Imagem do segredo.', en: 'Image of the secret.' } },
          { h: { pt: 'Como encontrar', en: 'How to find it' } },
          { p: { pt: 'Explique o caminho até ele.', en: 'Explain the way to it.' } }
        ] }
    ],
    missoes: [
      { n: 1, t: { pt: 'Exemplo: missão curta', en: 'Example: short mission' },
        d: { pt: 'Descreva aqui, em poucas linhas, o que acontece na missão.', en: 'Describe here, in a few lines, what happens in the mission.' } },
      { n: 2, t: { pt: 'Exemplo: missão longa', en: 'Example: long mission' },
        d: { pt: 'Quando a missão tem mais coisa para contar, o texto pode ser longo: o card cresce junto e ocupa a largura toda da página.\n\nUma linha em branco no texto separa os parágrafos, para contar a missão por etapas: como ela começa, o que muda no meio e como termina.', en: 'When the mission has more to tell, the text can be long: the card grows with it and takes the full width of the page.\n\nA blank line in the text separates paragraphs, so you can tell the mission in stages: how it starts, what changes in the middle and how it ends.' } }
    ],
    organizacoes: [
      { id: 'exemplo-1', nome: { pt: 'Exemplo: Organização 1', en: 'Example: Organization 1' }, tipo: { pt: 'Gangue', en: 'Gang' }, img: '', lider: 'Personagem principal',
        d: { pt: 'Texto de exemplo. Aqui entra o que a organização é, o que ela faz e como aparece na história.\n\nUma linha em branco separa os parágrafos.', en: 'Example text. This is where what the organization is, what it does and how it appears in the story goes.\n\nA blank line separates paragraphs.' },
        fatos: [ { k: { pt: 'Base', en: 'Base' }, v: { pt: 'Local de exemplo', en: 'Example place' } }, { k: { pt: 'Membros', en: 'Members' }, v: { pt: 'A definir', en: 'To be defined' } } ] },
      { id: 'exemplo-2', nome: { pt: 'Exemplo: Organização 2', en: 'Example: Organization 2' }, tipo: { pt: 'Grupo', en: 'Group' }, img: '',
        d: { pt: 'Texto de exemplo da segunda organização.', en: 'Example text for the second organization.' } },
      { id: 'exemplo-3', nome: { pt: 'Exemplo: Organização 3', en: 'Example: Organization 3' }, tipo: { pt: 'Empresa', en: 'Company' }, img: '' },
      { id: 'exemplo-4', nome: { pt: 'Exemplo: Organização 4', en: 'Example: Organization 4' }, tipo: { pt: 'Facção', en: 'Faction' }, img: '' },
      { id: 'exemplo-5', nome: { pt: 'Exemplo: Organização 5', en: 'Example: Organization 5' }, tipo: { pt: 'Gangue', en: 'Gang' }, img: '' }
    ],
    relacionamento: [
      { id: 'pessoa-1', nome: { pt: 'Exemplo: Pessoa 1', en: 'Example: Person 1' }, papel: { pt: 'Parceira', en: 'Partner' }, img: '',
        d: { pt: 'Texto de exemplo. Diga quem é a pessoa e como o relacionamento com ela funciona.\n\nUma linha em branco separa os parágrafos.', en: 'Example text. Say who the person is and how the relationship with them works.\n\nA blank line separates paragraphs.' },
        etapas: [
          { nome: { pt: 'Conhecidos', en: 'Acquaintances' }, req: { pt: 'Começa na história principal.', en: 'Starts in the main story.' },
            d: { pt: 'Descreva aqui o que acontece nesta etapa.', en: 'Describe here what happens in this stage.' },
            atos: [ { pt: 'Conversar', en: 'Talk' }, { pt: 'Ligar', en: 'Call' } ] },
          { nome: { pt: 'Amigos', en: 'Friends' }, req: { pt: 'Descreva o que é preciso fazer.', en: 'Describe what you need to do.' },
            d: { pt: 'Descreva aqui o que muda nesta etapa.', en: 'Describe here what changes in this stage.' },
            atos: [ { pt: 'Sair juntos', en: 'Hang out' }, { pt: 'Presentear', en: 'Give a gift' } ], recompensa: { pt: 'Descreva a recompensa.', en: 'Describe the reward.' } },
          { nome: { pt: 'Próximos', en: 'Close' }, perdivel: true, req: { pt: 'Descreva o que é preciso fazer.', en: 'Describe what you need to do.' },
            d: { pt: 'Descreva aqui a etapa final e se algo pode ser perdido.', en: 'Describe here the final stage and whether anything can be missed.' },
            atos: [ { pt: 'Abraçar', en: 'Hug' }, { pt: 'Ajudar em missão', en: 'Help on a mission' } ], recompensa: { pt: 'Descreva a recompensa ou o troféu.', en: 'Describe the reward or trophy.' } }
        ] },
      { id: 'pessoa-2', nome: { pt: 'Exemplo: Pessoa 2', en: 'Example: Person 2' }, papel: { pt: 'Amigo', en: 'Friend' }, img: '',
        d: { pt: 'Texto de exemplo de uma pessoa sem etapas.', en: 'Example text for a person without stages.' }, etapas: [] }
    ],
    servicos: [
      { id: 'cabeleireiro', nome: { pt: 'Cabeleireiro', en: 'Hairdresser' }, img: '',
        d: { pt: 'Descreva aqui o que este serviço faz, onde encontrar e quanto custa.', en: 'Describe here what this service does, where to find it and how much it costs.' } },
      { id: 'mecanico', nome: { pt: 'Mecânico', en: 'Mechanic' }, img: '',
        d: { pt: 'Descreva aqui o que este serviço faz, onde encontrar e quanto custa.', en: 'Describe here what this service does, where to find it and how much it costs.' } }
    ],
    negocios: [
      { id: 'roubo-revenda', nome: { pt: 'Roubo e revenda', en: 'Theft and resale' }, img: '',
        d: { pt: 'Descreva aqui o que se faz neste negócio: roubar carros e revendê-los. Explique como começar, o que é preciso e como o lucro é calculado.', en: 'Describe here what this business involves: stealing cars and reselling them. Explain how to start, what you need and how the profit is calculated.' },
        lucros: [
          { nome: { pt: 'Carro 1', en: 'Car 1' }, v: { pt: '$ —', en: '$ —' }, nota: { pt: 'Modelo e lucro a preencher', en: 'Model and profit to fill in' } },
          { nome: { pt: 'Carro 2', en: 'Car 2' }, v: { pt: '$ —', en: '$ —' }, nota: { pt: 'Modelo e lucro a preencher', en: 'Model and profit to fill in' } },
          { nome: { pt: 'Carro 3', en: 'Car 3' }, v: { pt: '$ —', en: '$ —' }, nota: { pt: 'Modelo e lucro a preencher', en: 'Model and profit to fill in' } }
        ],
        venda: { nome: { pt: 'Local de venda', en: 'Sale location' }, d: { pt: 'Descreva aqui onde os carros são vendidos e o que saber antes de chegar lá.', en: 'Describe here where the cars are sold and what to know before getting there.' } },
        mais: [
          { pt: 'Mais dicas e observações sobre o negócio entram aqui.', en: 'More tips and notes about the business go here.' }
        ] }
    ],
    animais: [
      { nome: 'Animais', cat: 'estudo', nota: { pt: 'O 100% pede estudar 100 dos 255 animais do jogo.', en: '100% asks you to study 100 of the game\'s 255 animals.' } }
    ],
    policia: [
      { h: { pt: 'Escapar com o parceiro', en: 'Escaping with your partner' } },
      { p: { pt: 'Um dos troféus pede escapar de 4 estrelas de procurado com o seu parceiro. Isso só fica possível depois do Capítulo 2, quando Jason e Lucia podem jogar juntos.', en: 'One of the trophies asks you to escape a 4-star wanted level with your partner. That only becomes possible after Chapter 2, when Jason and Lucia can play together.' } },
      { img: '', razao: '16 / 9', alt: { pt: 'Perseguição policial', en: 'Police chase' }, leg: { pt: 'Troque esta moldura por uma imagem da perseguição policial.', en: 'Replace this frame with an image of the police chase.' } }
    ],
    personalizacao: [
      { id: 'personagem', tipo: 'pessoa', nome: { pt: 'Personagem', en: 'Character' }, img: '',
        pontos: [
          { x: 50, y: 6, ty: 10, lado: 'e',
            itens: [ { nome: { pt: 'Boné', en: 'Cap' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Touca', en: 'Beanie' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Chapéu', en: 'Hat' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' } ] },
          { x: 44, y: 10, ty: 28,
            itens: [ { nome: { pt: 'Óculos', en: 'Glasses' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Escuros', en: 'Shades' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' } ] },
          { x: 56, y: 8, ty: 10,
            itens: [ { nome: { pt: 'Cabelo curto', en: 'Short hair' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Cabelo longo', en: 'Long hair' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Moicano', en: 'Mohawk' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' } ] },
          { x: 40, y: 36, ty: 46,
            itens: [ { nome: { pt: 'Camiseta', en: 'T-shirt' }, d: { pt: 'Torso do personagem', en: 'Character torso' }, img: '' }, { nome: { pt: 'Jaqueta', en: 'Jacket' }, d: { pt: 'Torso do personagem', en: 'Character torso' }, img: '' }, { nome: { pt: 'Regata', en: 'Tank top' }, d: { pt: 'Torso do personagem', en: 'Character torso' }, img: '' } ] },
          { x: 60, y: 52, ty: 30,
            itens: [ { nome: { pt: 'Tatuagem no braço', en: 'Arm tattoo' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Tatuagem no peito', en: 'Chest tattoo' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' } ] },
          { x: 45, y: 70, ty: 66,
            itens: [ { nome: { pt: 'Calça', en: 'Pants' }, d: { pt: 'Parte de baixo do personagem', en: 'Character lower body' }, img: '' }, { nome: { pt: 'Bermuda', en: 'Shorts' }, d: { pt: 'Parte de baixo do personagem', en: 'Character lower body' }, img: '' }, { nome: { pt: 'Short', en: 'Trunks' }, d: { pt: 'Parte de baixo do personagem', en: 'Character lower body' }, img: '' } ] },
          { x: 55, y: 94, ty: 86,
            itens: [ { nome: { pt: 'Tênis', en: 'Kicks' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Botas', en: 'Boots' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Sapatos', en: 'Shoes' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' } ] }
        ] },
      { id: 'carro', tipo: 'carro', nome: { pt: 'Veículo', en: 'Vehicle' }, img: '',
        pontos: [
          { x: 18, y: 55, ty: 22,
            itens: [ { nome: { pt: 'Para-choque', en: 'Bumper' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Grade', en: 'Grille' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' } ] },
          { x: 45, y: 36, ty: 52,
            itens: [ { nome: { pt: 'Pintura', en: 'Paint' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Brilho', en: 'Gloss' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Fosca', en: 'Matte' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' } ] },
          { x: 27, y: 64, ty: 82,
            itens: [ { nome: { pt: 'Rodas', en: 'Wheels' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Aros esportivos', en: 'Sport rims' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' } ] },
          { x: 60, y: 35, ty: 22,
            itens: [ { nome: { pt: 'Teto', en: 'Roof' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Teto solar', en: 'Sunroof' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' } ] },
          { x: 85, y: 50, ty: 52,
            itens: [ { nome: { pt: 'Aerofólio', en: 'Spoiler' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Aerofólio alto', en: 'Tall spoiler' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' } ] },
          { x: 75, y: 64, ty: 82,
            itens: [ { nome: { pt: 'Pneus', en: 'Tires' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' }, { nome: { pt: 'Pneus off-road', en: 'Off-road tires' }, d: { pt: 'Descreva aqui', en: 'Describe here' }, img: '' } ] }
        ] }
    ],
    atributos: [
      { id: 'forca', grupo: { pt: 'Personagem', en: 'Character' }, nome: { pt: 'Força', en: 'Strength' }, max: 100, unid: '%', img: '',
        evolui: { pt: 'Explique como este atributo evolui.', en: 'Explain how this attribute grows.' },
        onde: { pt: 'Diga onde ele é encontrado ou treinado.', en: 'Say where it is found or trained.' } },
      { id: 'cardio', grupo: { pt: 'Personagem', en: 'Character' }, nome: { pt: 'Cardio', en: 'Cardio' }, max: 100, unid: '%', img: '',
        evolui: { pt: 'Explique como este atributo evolui.', en: 'Explain how this attribute grows.' },
        onde: { pt: 'Diga onde ele é encontrado ou treinado.', en: 'Say where it is found or trained.' } },
      { id: 'corridas', grupo: { pt: 'Mundo', en: 'World' }, nome: { pt: 'Corridas', en: 'Races' }, img: '',
        evolui: { pt: 'Explique como este atributo evolui.', en: 'Explain how this attribute grows.' },
        onde: { pt: 'Diga onde ele é encontrado ou treinado.', en: 'Say where it is found or trained.' } },
      { id: 'animais', grupo: { pt: 'Mundo', en: 'World' }, nome: { pt: 'Animais', en: 'Animals' }, max: 255, img: '',
        evolui: { pt: 'Cada animal estudado conta para o progresso. O troféu de 100% pede estudar 100 dos 255 animais do jogo.', en: 'Each studied animal counts toward progress. The 100% trophy asks you to study 100 of the game\'s 255 animals.' },
        onde: { pt: 'Diga onde ele é encontrado ou treinado.', en: 'Say where it is found or trained.' } },
      { id: 'veiculos', grupo: { pt: 'Mundo', en: 'World' }, nome: { pt: 'Veículos', en: 'Vehicles' }, max: 277, img: '',
        evolui: { pt: 'O progresso conta os modelos de veículos do jogo. O 100% pede 200 dos 277 modelos.', en: 'Progress counts the game\'s vehicle models. 100% asks for 200 of the 277 models.' },
        onde: { pt: 'Diga onde ele é encontrado ou treinado.', en: 'Say where it is found or trained.' } },
      { id: 'lojas', grupo: { pt: 'Mundo', en: 'World' }, nome: { pt: 'Lojas', en: 'Stores' }, img: '',
        evolui: { pt: 'Explique como este atributo evolui.', en: 'Explain how this attribute grows.' },
        onde: { pt: 'Diga onde ele é encontrado ou treinado.', en: 'Say where it is found or trained.' } }
    ],
    roteiro: [
      {
        id: 'roteiro-platina',
        setor: 'Platina',
        status: 'base',
        img: '',
        t: { pt: 'Roteiro da platina em 3 fases', en: 'Platinum roadmap in 3 phases' },
        d: { pt: 'Da história ao 100%: as três fases sugeridas e quanto tempo cada uma costuma levar.', en: 'From the story to 100%: the three suggested phases and how long each usually takes.' },
        legCapa: { pt: 'Leonida, o cenário das três fases.', en: 'Leonida, the setting for all three phases.' },
        corpo: [
          {
            h: { pt: 'Fase 1: a história e o opcional', en: 'Phase 1: the story and optional content' }
          },
          {
            p: { pt: 'Cerca de <strong>60 a 80 horas</strong>. Termine a história e as missões opcionais conforme aparecem.', en: 'About <strong>60 to 80 hours</strong>. Finish the story and optional missions as they appear.' }
          },
          {
            ul: [
              { pt: 'Escaneie veículos: o 100% pede 200 dos 277 modelos básicos.', en: 'Scan vehicles: 100% asks for 200 of the 277 base models.' },
              { pt: 'Estude animais: o 100% pede 100 dos 255.', en: 'Study animals: 100% asks for 100 of the 255.' },
              { pt: 'Faça a meditação do Capítulo 1 com a Lucia.', en: 'Do the Chapter 1 meditation with Lucia.' }
            ]
          },
          {
            ir: 'perdiveis',
            t: { pt: 'Ver o perdível do Capítulo 1 →', en: 'See the Chapter 1 missable →' }
          },
          {
            h: { pt: 'Fase 2: checklist de 100% e desafios', en: 'Phase 2: 100% checklist and challenges' }
          },
          {
            p: { pt: 'Cerca de <strong>100 horas</strong>. A lista de 100% libera depois da história, em Progresso > Estatísticas.', en: 'About <strong>100 hours</strong>. The 100% checklist unlocks after the story, under Progress > Stats.' }
          },
          {
            ul: [
              { pt: 'Complete 70 dos 80 desafios.', en: 'Complete 70 of the 80 challenges.' },
              { pt: 'Assaltos, descobertas subaquáticas, estandes de tiro, corridas de drone e as missões do Bret precisam estar completos.', en: 'Robberies, underwater discoveries, shooting ranges, drone races and Bret\'s quests must be fully completed.' }
            ]
          },
          {
            h: { pt: 'Fase 3: Strangers & Freaks e o que sobrou', en: 'Phase 3: Strangers & Freaks and cleanup' }
          },
          {
            p: { pt: 'Cerca de <strong>10 horas</strong>. Termine o que faltar em Strangers & Freaks e as tarefas avulsas.', en: 'About <strong>10 hours</strong>. Finish whatever is left of Strangers & Freaks and the miscellaneous tasks.' }
          },
          {
            destaque: { pt: 'Tempos e passos conforme o guia de troféus do PowerPyx; podem mudar com atualizações do jogo.', en: 'Times and steps per the PowerPyx trophy guide; they may change with game updates.' }
          }
        ]
      }
    ],
    jogabilidade: [
      {
        h: { pt: 'Dois protagonistas', en: 'Two protagonists' }
      },
      {
        p: { pt: 'A história gira em torno de <strong>Jason Duval</strong> e <strong>Lucia Caminos</strong>. Só depois do Capítulo 2 os dois podem jogar juntos, e alguns troféus pedem ações com o seu parceiro, como escapar de 4 estrelas de procurado e roubar 3 lojas em sequência.', en: 'The story revolves around <strong>Jason Duval</strong> and <strong>Lucia Caminos</strong>. Only after Chapter 2 can the two play together, and some trophies ask for actions with your partner, such as escaping a 4-star wanted level and robbing 3 shops back to back.' }
      },
      {
        h: { pt: 'Assaltos', en: 'Robberies' }
      },
      {
        p: { pt: 'Os troféus citam vários tipos de assalto:', en: 'The trophies mention several kinds of robbery:' }
      },
      {
        ul: [
          { pt: 'Joalheria sem ser detectado.', en: 'A jewelry store without being detected.' },
          { pt: 'Cofres de 5 bancos, com fuga.', en: '5 bank vaults, with an escape.' },
          { pt: 'Um carro-forte, com fuga.', en: 'An armored truck, with an escape.' },
          { pt: 'Uma operação ilegal de cada gangue.', en: 'An illegal operation from each gang.' }
        ]
      },
      {
        h: { pt: 'Atividades e extras', en: 'Activities and extras' }
      },
      {
        ul: [
          { pt: 'Estandes de tiro, corridas de drone e jogos de fliperama.', en: 'Shooting ranges, drone races and arcade games.' },
          { pt: 'Pescaria, boliche e coquetel na praia.', en: 'Fishing, bowling and a cocktail on the beach.' },
          { pt: '250 manobras, 100 locais de WAiNK e 3 coleções de cartas.', en: '250 stunts, 100 WAiNK locations and 3 card collections.' },
          { pt: 'Caça a um animal único para o Bret e meditação em cada ponto de Leonida.', en: 'Hunting a unique animal for Bret and meditating at every spot in Leonida.' }
        ]
      },
      {
        destaque: { pt: 'Lista tirada dos nomes e requisitos dos troféus; o guia ganha mais detalhes conforme o jogo for explorado.', en: 'List taken from the trophy names and requirements; the guide gains more detail as the game is explored.' }
      }
    ],
    visaoGeral: [
      {
        h: { pt: 'O jogo em poucas linhas', en: 'The game in a few lines' }
      },
      {
        p: { pt: '<strong>Grand Theft Auto VI</strong> é publicado pela Rockstar Games, e a Rockstar North é o estúdio principal de desenvolvimento. A história se passa em Leonida, um estado fictício inspirado na Flórida que inclui Vice City, inspirada em Miami.', en: '<strong>Grand Theft Auto VI</strong> is published by Rockstar Games, with Rockstar North as the lead development studio. The story takes place in Leonida, a fictional state based on Florida that includes Vice City, inspired by Miami.' }
      },
      {
        p: { pt: 'O roteiro é de Rupert Humphries e Michael Wiafe, e o produtor é Rob Nelson. O jogo foi adiado duas vezes até chegar à data de 19 de novembro de 2026.', en: 'The writers are Rupert Humphries and Michael Wiafe, and the producer is Rob Nelson. The game was delayed twice before landing on the November 19, 2026 date.' }
      },
      {
        h: { pt: 'Sobre este guia', en: 'About this guide' }
      },
      {
        destaque: { pt: 'O guia está <strong>em construção</strong>. Já tem a base de Troféus, Perdíveis, Roteiro, Jogabilidade, Personagens, Curiosidades e Desenvolvedores, cada uma com poucos exemplos por enquanto.', en: 'The guide is <strong>under construction</strong>. It already has the base for Trophies, Missables, Walkthrough, Gameplay, Characters, Curiosities and Developers, each with a few examples for now.' }
      },
      {
        ir: 'trofeus',
        t: { pt: 'Ver os troféus →', en: 'See the trophies →' }
      },
      {
        ir: 'perdiveis',
        t: { pt: 'Ver os perdíveis →', en: 'See the missables →' }
      }
    ],
    personagens: [
      {
        id: 'jason',
        nome: 'Jason Duval',
        funcao: { pt: 'Protagonista', en: 'Protagonist' },
        img: '',
        resumo: { pt: 'Um dos dois protagonistas do jogo. A casa dele é onde, no Capítulo 1, a Lucia medita na varanda.', en: 'One of the game\'s two protagonists. His house is where, in Chapter 1, Lucia meditates on the balcony.' },
        tags: [{ pt: 'Protagonista', en: 'Protagonist' }],
        descricao: { pt: 'Cresceu cercado de golpistas e criminosos e é ex-militar. Quer uma vida mais tranquila, mas continua preso ao mundo do crime.', en: 'Grew up around grifters and crooks and is a former soldier. He wants a quieter life but is still tied to the criminal world.' },
        fisico: [
          { rot: { pt: 'Altura', en: 'Height' }, v: { pt: 'Não divulgado oficialmente', en: 'Not officially disclosed' } },
          { rot: { pt: 'Peso', en: 'Weight' }, v: { pt: 'Não divulgado oficialmente', en: 'Not officially disclosed' } },
          { rot: { pt: 'Porte físico', en: 'Build' }, v: { pt: 'Não divulgado oficialmente', en: 'Not officially disclosed' } }
        ],
        jogo: [
          { rot: { pt: 'Papel', en: 'Role' }, v: { pt: 'Protagonista jogável', en: 'Playable protagonist' } },
          { rot: { pt: 'Parceira', en: 'Partner' }, v: { pt: 'Lucia Caminos', en: 'Lucia Caminos' } },
          { rot: { pt: 'Amigo', en: 'Friend' }, v: { pt: 'Cal Hampton', en: 'Cal Hampton' } },
          { rot: { pt: 'Chefe / senhorio', en: 'Boss / landlord' }, v: { pt: 'Brian', en: 'Brian' } },
          { rot: { pt: 'Jogo em dupla', en: 'Co-op play' }, v: { pt: 'Depois do Capítulo 2', en: 'After Chapter 2' } }
        ],
        frases: [],
        mais: [
          { pt: 'Jogar junto com a Lucia só fica disponível depois do Capítulo 2.', en: 'Playing together with Lucia only becomes available after Chapter 2.' }
        ],
        fontes: [
          {
            n: 'Wikipedia',
            u: 'https://en.wikipedia.org/wiki/Grand_Theft_Auto_VI'
          }
        ]
      },
      {
        id: 'lucia',
        nome: 'Lucia Caminos',
        funcao: { pt: 'Protagonista', en: 'Protagonist' },
        img: '',
        resumo: { pt: 'Uma das duas protagonistas do jogo. No Capítulo 1, medita na varanda da casa de Jason e oferece ensinar a meditação em uma missão opcional.', en: 'One of the game\'s two protagonists. In Chapter 1, she meditates on the balcony of Jason\'s house and offers to teach meditation in an optional quest.' },
        tags: [{ pt: 'Protagonista', en: 'Protagonist' }],
        alerta: {
          t: { pt: 'Ligada ao troféu Positive Mental Attitude.', en: 'Tied to the Positive Mental Attitude trophy.' },
          ir: 'perdiveis'
        },
        descricao: { pt: 'Primeira protagonista feminina da série. O pai ensinou a lutar desde pequena e ela foi presa em Leonida por brigar pela família. Quer deixar a mãe orgulhosa e segue um plano.', en: 'The first female lead in the series. Her father taught her to fight from a young age and she was jailed in Leonida over a fight for her family. She wants to make her mother proud and is committed to a plan.' },
        fisico: [
          { rot: { pt: 'Altura', en: 'Height' }, v: { pt: 'Não divulgado oficialmente', en: 'Not officially disclosed' } },
          { rot: { pt: 'Peso', en: 'Weight' }, v: { pt: 'Não divulgado oficialmente', en: 'Not officially disclosed' } },
          { rot: { pt: 'Porte físico', en: 'Build' }, v: { pt: 'Não divulgado oficialmente', en: 'Not officially disclosed' } }
        ],
        jogo: [
          { rot: { pt: 'Papel', en: 'Role' }, v: { pt: 'Protagonista jogável', en: 'Playable protagonist' } },
          { rot: { pt: 'Parceiro', en: 'Partner' }, v: { pt: 'Jason Duval', en: 'Jason Duval' } },
          { rot: { pt: 'Origem no enredo', en: 'Story origin' }, v: { pt: 'Presa na Penitenciária de Leonida', en: 'Jailed in Leonida Penitentiary' } },
          { rot: { pt: 'Missão opcional', en: 'Optional quest' }, v: { pt: 'Ensinar meditação (Cap. 1)', en: 'Teach meditation (Ch. 1)' } },
          { rot: { pt: 'Jogo em dupla', en: 'Co-op play' }, v: { pt: 'Depois do Capítulo 2', en: 'After Chapter 2' } }
        ],
        frases: [
          { t: { pt: '"Comprometida com o plano dela" (descrição oficial da Rockstar, parafraseada)', en: '"Committed to her plan" (Rockstar\'s official description)' }, de: { pt: 'Rockstar Games', en: 'Rockstar Games' } }
        ],
        mais: [
          { pt: 'Depois do Capítulo 2, ela e Jason podem jogar juntos.', en: 'After Chapter 2, she and Jason can play together.' }
        ],
        fontes: [
          {
            n: 'Wikipedia',
            u: 'https://en.wikipedia.org/wiki/Grand_Theft_Auto_VI'
          }
        ]
      }
    ],
    curiosidades: [
      {
        t: { pt: 'Adiado duas vezes', en: 'Delayed twice' },
        d: { pt: 'O lançamento foi adiado para 26 de maio de 2026 e, depois, para 19 de novembro de 2026.', en: 'The release was delayed to May 26, 2026 and then to November 19, 2026.' }
      },
      {
        t: { pt: 'Platina toda offline', en: 'An all-offline platinum' },
        d: { pt: 'Os 55 troféus são offline: nenhum depende de modo online, segundo o guia do PowerPyx.', en: 'All 55 trophies are offline: none depends on an online mode, according to the PowerPyx guide.' }
      }
    ],
    desenvolvedores: [
      {
        nome: 'Rockstar North',
        cargo: { pt: 'Estúdio principal de desenvolvimento', en: 'Lead development studio' },
        neste: { pt: 'A Wikipedia aponta a Rockstar North como o estúdio principal do jogo, que a Rockstar Games publica.', en: 'Wikipedia lists Rockstar North as the game\'s lead studio, with Rockstar Games publishing it.' },
        trabalhos: [
          {
            t: 'Grand Theft Auto V',
            ano: 2013,
            tipo: 'jogo',
            papel: { pt: 'Desenvolvedor', en: 'Developer' }
          },
          {
            t: 'Grand Theft Auto IV',
            ano: 2008,
            tipo: 'jogo',
            papel: { pt: 'Desenvolvedor', en: 'Developer' }
          }
        ],
        links: [
          {
            t: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Grand_Theft_Auto_VI'
          }
        ]
      }
    ],
    novidades: [
      {
        id: 'guia-criado',
        badge: 'novo',
        data: '2026-11-19',
        img: '',
        t: { pt: 'Guia do GTA VI criado', en: 'GTA VI guide created' },
        d: { pt: 'A base do guia já está no ar: troféus, perdíveis, roteiro, jogabilidade, personagens e mais, com poucos exemplos.', en: 'The base of the guide is up: trophies, missables, walkthrough, gameplay, characters and more, with a few examples.' },
        legCapa: { pt: 'Leonida, o estado fictício do jogo.', en: 'Leonida, the game\'s fictional state.' },
        corpo: [
          {
            h: { pt: 'O que já existe', en: 'What already exists' }
          },
          {
            ul: [
              { pt: 'Troféus: a platina Vice Got a Price e o ouro A Long Road.', en: 'Trophies: the Vice Got a Price platinum and the A Long Road gold.' },
              { pt: 'Perdíveis: a meditação do Capítulo 1, com passo a passo.', en: 'Missables: the Chapter 1 meditation, with a step by step.' },
              { pt: 'Guia: o roteiro da platina em 3 fases.', en: 'Walkthrough: the platinum roadmap in 3 phases.' },
              { pt: 'Jogabilidade, Personagens, Curiosidades e Desenvolvedores, com poucos exemplos.', en: 'Gameplay, Characters, Curiosities and Developers, with a few examples.' }
            ]
          },
          {
            h: { pt: 'O que vem a seguir', en: 'What comes next' }
          },
          {
            p: { pt: 'As demais abas continuam vazias e serão preenchidas conforme o jogo for explorado.', en: 'The other tabs are still empty and will be filled in as the game is explored.' }
          },
          {
            ir: 'roteiro',
            t: { pt: 'Ver o roteiro →', en: 'See the walkthrough →' }
          }
        ]
      }
    ],
    mapas: [   // EXEMPLO (formato { t, d, href }): troque pelo mapa real
      { t: { pt: 'Exemplo: nome do mapa', en: 'Example: map name' }, d: { pt: 'Descrição curta do mapa.', en: 'Short map description.' }, href: '#jogo/gta-vi/mapas' }
    ],
    bestiario: [],
    equipamentos: [
      { cat: 'melee', nome: 'Baseball Bat' },
      { cat: 'ranged', nome: 'Pump Action Shotgun' }
    ],
    armaduras: [],
    trilha: [
      { por: 'Tom Petty', t: 'Love Is a Long Road', youtube: 'QdBZY2fkU-0', onde: { pt: 'Trailer 1', en: 'Trailer 1' }, d: { pt: 'Canção de 1989 usada no Trailer 1. O botão abre o vídeo do trailer no YouTube.', en: 'A 1989 song used in Trailer 1. The button opens the trailer video on YouTube.' } }
    ],
    trilhaTexto: [],
    detalhes: [
      // EXEMPLO: ilustração feita para o guia (não é imagem do jogo). Troque 'img' e os textos por capturas suas; clique na imagem para ver as linhas.
      { t: { pt: 'Exemplo: Leonida', en: 'Example: Leonida' }, larg: 2, prop: '2 / 1', img: 'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22600%22 viewBox=%220 0 1200 600%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%220%22 y2=%221%22%3E%3Cstop offset=%220%22 stop-color=%22%231a0f2e%22/%3E%3Cstop offset=%22.55%22 stop-color=%22%23a42a44%22/%3E%3Cstop offset=%221%22 stop-color=%22%23f2a65a%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%221200%22 height=%22600%22 fill=%22url(%23g)%22/%3E%3Ccircle cx=%22840%22 cy=%22330%22 r=%2290%22 fill=%22%23ffd9a0%22 opacity=%22.9%22/%3E%3Cg fill=%22%231a0f2e%22%3E%3Crect x=%22640%22 y=%22300%22 width=%2250%22 height=%22170%22/%3E%3Crect x=%22700%22 y=%22260%22 width=%2264%22 height=%22210%22/%3E%3Crect x=%22775%22 y=%22330%22 width=%2244%22 height=%22140%22/%3E%3Crect x=%22830%22 y=%22280%22 width=%2258%22 height=%22190%22/%3E%3Crect x=%22900%22 y=%22340%22 width=%2270%22 height=%22130%22/%3E%3Crect x=%22985%22 y=%22310%22 width=%2248%22 height=%22160%22/%3E%3Crect x=%221045%22 y=%22360%22 width=%2260%22 height=%22110%22/%3E%3C/g%3E%3Crect y=%22470%22 width=%221200%22 height=%22130%22 fill=%22%232a1218%22/%3E%3Crect y=%22470%22 width=%221200%22 height=%226%22 fill=%22%23f2a65a%22 opacity=%22.6%22/%3E%3Cg fill=%22%231a0f2e%22%3E%3Cpath d=%22M170 470 C176 380 186 330 196 300 L206 300 C202 340 196 400 192 470Z%22/%3E%3Cpath d=%22M200 300 C150 280 120 290 96 318 C130 300 160 296 200 300Z%22/%3E%3Cpath d=%22M200 300 C250 276 290 288 312 320 C276 300 236 296 200 300Z%22/%3E%3Cpath d=%22M200 300 C190 250 214 226 240 218 C222 242 210 268 200 300Z%22/%3E%3Cpath d=%22M200 300 C186 256 160 236 132 232 C160 250 182 272 200 300Z%22/%3E%3C/g%3E%3C/svg%3E', alt: { pt: 'Ilustração de exemplo: pôr do sol sobre uma cidade litorânea', en: 'Example illustration: sunset over a coastal city' },
        d: { pt: 'Ilustração de exemplo feita para o guia, não é imagem do jogo. Clique para abrir; clique de novo para fechar.', en: 'Example illustration made for the guide, not a game image. Click to open; click again to close.' },
        notas: [
          { x: 72, y: 34, t: { pt: 'Vice City', en: 'Vice City' }, d: { pt: 'A cidade do jogo, inspirada em Miami.', en: 'The game\'s city, inspired by Miami.' } },
          { x: 20, y: 52, t: { pt: 'Leonida', en: 'Leonida' }, d: { pt: 'Estado fictício inspirado na Flórida, onde a história acontece.', en: 'A fictional state based on Florida, where the story takes place.' } }
        ] }
    ],
    vozes: [
      { nome: 'Manni L. Perez', papel: { pt: 'Lucia Caminos (rumor)', en: 'Lucia Caminos (rumored)' },
        neste: { pt: 'A Rockstar não confirmou o elenco de vozes. Este é o nome mais citado por fãs para a protagonista.', en: 'Rockstar has not confirmed the voice cast. This is the name fans most often attach to the protagonist.' },
        links: [ { t: 'Fonte (Of Zen and Computing)', url: 'https://www.ofzenandcomputing.com/gta-6-characters-jason-duval-lucia-caminos/' } ] },
      { nome: 'Dylan Rourke', papel: { pt: 'Jason Duval (rumor)', en: 'Jason Duval (rumored)' },
        neste: { pt: 'A Rockstar não confirmou o elenco de vozes. Este é o nome mais citado por fãs para o protagonista; há fontes que apontam outros nomes.', en: 'Rockstar has not confirmed the voice cast. This is the name fans most often attach to the protagonist; some sources list other names.' },
        links: [ { t: 'Fonte (esports.gg)', url: 'https://esports.gg/news/gaming/gta-6-voice-actors-who-voices-jason-lucia-and-the-other-characters' } ] },
      { nome: 'Bobby Moynihan', papel: { pt: 'Cal Hampton (rumor)', en: 'Cal Hampton (rumored)' } },
      { nome: 'Stephen Root', papel: { pt: 'Brian Heder (rumor)', en: 'Brian Heder (rumored)' } },
      { nome: 'Oscar Jaenada', papel: { pt: 'Raul Bautista (rumor)', en: 'Raul Bautista (rumored)' } }
    ],
    refs: {}
}
