'use strict'

// ══════════════════════════════════════════════════════════════════════════
// GUIA DESTE ARQUIVO — conteúdo do jogo Until Dawn (remake de 2024, PS5 e PC), criado a partir do modelo novo-jogo.js
// Seções com [] mostram "em preparo" no site. Abas que o jogo não usa ficam em ocultas (Equipamentos, Armaduras, Bestiário, Vozes, DLCs).
// Trechos que começam com "Exemplo:" são modelos para você trocar.
// Troféus: 29 (1 platina, 6 ouros, 9 pratas, 13 bronzes), todos offline. Nomes em inglês como no jogo; descrições em português traduzidas por mim.
// Perdíveis: quase todos os troféus são perdíveis (só 3 não são), mas a seleção de capítulo permite refazer cenas.
// ══════════════════════════════════════════════════════════════════════════
JOGOS['until-dawn'] = {
  atualizado: '2026-11-23',
  img: '',                       // capa: 'imagens/until-dawn.jpg'. Vazio = capa colorida com a primeira letra
  abertura: [
    { pt: '<strong>Until Dawn</strong> (remake de 2024, para PS5 e PC) tem <strong>29 troféus</strong>, com platina, todos offline. A dificuldade é baixa, mas quase todos os troféus dependem de escolhas que não dá para desfazer no meio da partida.',
      en: '<strong>Until Dawn</strong> (2024 remake, for PS5 and PC) has <strong>29 trophies</strong>, including a platinum, all offline. Difficulty is low, but nearly every trophy depends on choices you cannot undo mid-run.' },
    { pt: 'Este guia foi montado a partir de uma análise da lista de troféus e está <strong>em preparo</strong>: o roteiro e os perdíveis já estão aqui, as demais abas serão preenchidas aos poucos.',
      en: 'This guide was built from an analysis of the trophy list and is <strong>in progress</strong>: the roadmap and missables are already here, and the other tabs will be filled in over time.' }
  ],
  visaoGeral: [
    { h: { pt: 'O jogo em poucas linhas', en: 'The game in a few lines' } },
    { p: { pt: '<strong>Until Dawn</strong> é um drama de terror interativo em que você controla oito amigos presos numa montanha, no inverno. O original saiu em 2015 no PS4, feito pela Supermassive Games. Esta versão é o <strong>remake de 2024</strong>, feito pela Ballistic Moon para PS5 e PC, lançado em 4 de outubro de 2024 e refeito em Unreal Engine 5.',
           en: '<strong>Until Dawn</strong> is an interactive horror drama in which you control eight friends stuck on a mountain in winter. The original came out in 2015 on PS4, made by Supermassive Games. This is the <strong>2024 remake</strong>, made by Ballistic Moon for PS5 and PC, released on October 4, 2024 and rebuilt in Unreal Engine 5.' } },
    { h: { pt: 'Como se joga', en: 'How it plays' } },
    { p: { pt: 'Você explora, escolhe respostas e falas, resolve eventos de reação rápida e, em certos momentos, precisa ficar imóvel. As escolhas mudam quem vive e quem morre até o amanhecer, e a lista de troféus gira em torno disso.',
           en: 'You explore, pick answers and lines, handle quick time events and, at certain moments, have to stay still. Your choices change who lives and who dies by dawn, and the trophy list revolves around that.' } },
    { h: { pt: 'O que mudou no remake', en: 'What changed in the remake' } },
    { ul: [
      { pt: 'Câmera por cima do ombro no lugar dos ângulos fixos, com gráficos e animações refeitos.', en: 'Over-the-shoulder camera instead of fixed angles, with rebuilt graphics and animations.' },
      { pt: 'Totens de Fome, 10 novos itens interativos e conteúdo bônus.', en: 'Hunger Totems, 10 new interactables and bonus content.' },
      { pt: '"Fique calmo" como alternativa ao "Não se mexa", prólogo refeito, mais cenas da Beth e um epílogo se a Sam sobreviver.', en: '"Stay Calm" as an alternative to "Don\'t Move", a reworked prologue, more Beth scenes and an epilogue if Sam survives.' },
      { pt: 'Trilha nova de Mark Korven e música de abertura nova.', en: 'New score by Mark Korven and a new intro song.' }
    ] },
    { h: { pt: 'A platina', en: 'The platinum' } },
    { p: { pt: 'São <strong>29 troféus</strong> (1 platina, 6 ouros, 9 pratas e 13 bronzes), todos offline e e o jogo não tem seletor de dificuldade. A dificuldade é <strong>3/10</strong> e o tempo é de cerca de <strong>15 horas ou mais</strong>. O desafio é a ordem: guarde um backup do save e siga o roteiro da aba Guia, em três jogatinas.',
           en: 'There are <strong>29 trophies</strong> (1 platinum, 6 gold, 9 silver and 13 bronze), all offline, and the game has no difficulty selector. Difficulty is <strong>3/10</strong> and it takes about <strong>15 hours or more</strong>. The challenge is the order: keep a backup of your save and follow the roadmap in the Guide tab, in three playthroughs.' } },
    { h: { pt: 'Como usar o guia', en: 'How to use the guide' } },
    { p: { pt: 'Comece pela aba <strong>Guia</strong> (o roteiro) e consulte <strong>Perdíveis</strong> antes de cada escolha importante. Os <strong>Troféus</strong> têm filtros por tipo e por perdível.',
           en: 'Start with the <strong>Guide</strong> tab (the roadmap) and check <strong>Missables</strong> before each important choice. <strong>Trophies</strong> has filters by type and by missable.' } }
  ],
  jogabilidade: [
    { h: { pt: 'Escolhas e consequências', en: 'Choices and consequences' } },
    { p: { pt: 'Cada decisão pode mudar o destino dos oito amigos. Por isso a platina pede finais opostos: <strong>todos vivos</strong>, <strong>só Matt e Jessica vivos</strong> e <strong>todos mortos</strong>.',
           en: 'Every decision can change the fate of the eight friends. That is why the platinum asks for opposite endings: <strong>everyone alive</strong>, <strong>only Matt and Jessica alive</strong> and <strong>everyone dead</strong>.' } },
    { h: { pt: 'Itens e pistas', en: 'Items and clues' } },
    { ul: [
      { pt: '36 totens espalhados pela montanha (troféu An Omen?).', en: '36 totems scattered across the mountain (An Omen? trophy).' },
      { pt: 'Três linhas de pistas: Gêmeas, Homem Misterioso e 1952. Cada uma tem um troféu de ouro.', en: 'Three clue lines: Twins, Mystery Man and 1952. Each has a gold trophy.' },
      { pt: '10 novos itens interativos do remake (troféu It\'s Shining).', en: '10 new interactables from the remake (It\'s Shining trophy).' }
    ] },
    { h: { pt: 'Seleção de capítulo', en: 'Chapter select' } },
    { p: { pt: 'Depois de terminar o jogo você pode escolher um capítulo e refazer cenas. É o que torna a limpeza final dos troféus possível, mas as mortes e vidas continuam valendo conforme o seu save.',
           en: 'After finishing the game you can pick a chapter and replay scenes. That is what makes the final trophy cleanup possible, though deaths and survivals still follow your save.' } }
  ],
  roteiro: [                     // aba "Guia": o roteiro em 4 etapas
    { id: 'etapa-1-todos-vivos', setor: 'Jogatina 1', status: 'base', img: '',
      t: { pt: 'Etapa 1: todos vivos', en: 'Step 1: everyone alive' },
      d: { pt: 'Primeira jogatina: os oito sobrevivem, e você coleta itens pelo caminho. Cerca de 5 horas.', en: 'First playthrough: all eight survive, collecting items along the way. About 5 hours.' },
      legCapa: { pt: '', en: '' },
      corpo: [
        { h: { pt: 'O que fazer', en: 'What to do' } },
        { p: { pt: 'Jogue do começo ao fim mantendo todos vivos. Aproveite para pegar totens, pistas e itens interativos, que contam para vários troféus.', en: 'Play from start to finish keeping everyone alive. Use it to pick up totems, clues and interactables, which count toward several trophies.' } },
        { ul: [ { pt: 'Troféu principal: They All Live.', en: 'Main trophy: They All Live.' }, { pt: 'Também vale para: The Cabin in the Blackwoods e I Know What You Did Last Year.', en: 'Also counts for: The Cabin in the Blackwoods and I Know What You Did Last Year.' } ] }
      ] },
    { id: 'etapa-2-matt-e-jessica', setor: 'Jogatina 2', status: 'base', img: '',
      t: { pt: 'Etapa 2: só Matt e Jessica vivos', en: 'Step 2: only Matt and Jessica alive' },
      d: { pt: 'Faça um backup do save e use a seleção de capítulo a partir do Capítulo 8. Cerca de 2 horas.', en: 'Back up your save and use chapter select from Chapter 8. About 2 hours.' },
      legCapa: { pt: '', en: '' },
      corpo: [
        { h: { pt: 'O que fazer', en: 'What to do' } },
        { p: { pt: 'Antes de começar, copie o save da etapa 1. Pela seleção de capítulo, volte ao Capítulo 8 e deixe os outros personagens morrerem, mantendo só Matt e Jessica.', en: 'Before starting, copy the Step 1 save. Using chapter select, go back to Chapter 8 and let the other characters die, keeping only Matt and Jessica.' } },
        { ul: [ { pt: 'Troféu principal: Only Others Left Alive.', en: 'Main trophy: Only Others Left Alive.' } ] }
      ] },
    { id: 'etapa-3-todos-mortos', setor: 'Jogatina 3', status: 'base', img: '',
      t: { pt: 'Etapa 3: todos mortos', en: 'Step 3: everyone dies' },
      d: { pt: 'Sobrescreva o save ou use um slot novo e deixe todos morrerem. Cerca de 5 horas.', en: 'Overwrite the save or use a new slot and let everyone die. About 5 hours.' },
      legCapa: { pt: '', en: '' },
      corpo: [
        { h: { pt: 'O que fazer', en: 'What to do' } },
        { p: { pt: 'Em um slot novo (ou sobrescrevendo), jogue fazendo as escolhas que levam à morte de todos.', en: 'In a new slot (or overwriting), play making the choices that lead to everyone\'s death.' } },
        { ul: [ { pt: 'Troféu principal: This Is THE End.', en: 'Main trophy: This Is THE End.' } ] }
      ] },
    { id: 'etapa-4-limpeza', setor: 'Limpeza', status: 'base', img: '',
      t: { pt: 'Etapa 4: limpeza', en: 'Step 4: cleanup' },
      d: { pt: 'Pegue o que sobrou pela seleção de capítulo.', en: 'Pick up what is left using chapter select.' },
      legCapa: { pt: '', en: '' },
      corpo: [
        { h: { pt: 'O que fazer', en: 'What to do' } },
        { p: { pt: 'Confira a aba Troféus, veja o que falta e refaça só as cenas necessárias pela seleção de capítulo.', en: 'Check the Trophies tab, see what is missing and replay only the needed scenes through chapter select.' } }
      ] }
  ],
  mapas: [                       // EXEMPLO: troque pelos lugares reais
    { t: { pt: 'Exemplo: nome do local', en: 'Example: location name' }, d: { pt: 'Descrição curta do local.', en: 'Short location description.' }, href: '#jogo/until-dawn/mapas' }
  ],
  bestiario: [],
  personagens: [
    { id: 'sam', nome: 'Sam', funcao: { pt: 'Uma dos oito amigos', en: 'One of the eight friends' }, img: '',
      resumo: { pt: 'Samantha Giddings. Escapar do Psicopata no fim do Capítulo 5 vale um troféu.', en: 'Samantha Giddings. Escaping the Psycho at the end of Chapter 5 earns a trophy.' },
      tags: [ { pt: 'Troféu: When a Psycho Calls', en: 'Trophy: When a Psycho Calls' } ], descricao: { pt: 'Samantha Giddings. Atacar o Psicopata com uma arma como Sam ou Ashley vale o troféu The Psycho Path.', en: 'Samantha Giddings. Attacking the Psycho with a weapon as Sam or Ashley earns The Psycho Path.' } },
    { id: 'mike', nome: 'Mike', funcao: { pt: 'Um dos oito amigos', en: 'One of the eight friends' }, img: '',
      resumo: { pt: 'Michael Munroe. Tem vários troféus: Sanatório, lobo, dedos e resgate da Jessica.', en: 'Michael Munroe. Has several trophies: Sanatorium, the wolf, fingers and Jessica\'s rescue.' },
      tags: [ { pt: 'Sanatório', en: 'Sanatorium' } ], descricao: { pt: 'Michael Munroe. Está ligado a The Skillful Wolf Man, Saw That Coming, An American Survivor in Canada, Drag Me Through Hell e Patient Sematary.', en: 'Michael Munroe. Tied to The Skillful Wolf Man, Saw That Coming, An American Survivor in Canada, Drag Me Through Hell and Patient Sematary.' } },
    { id: 'jessica', nome: 'Jessica', funcao: { pt: 'Uma dos oito amigos', en: 'One of the eight friends' }, img: '',
      resumo: { pt: 'Jessica Riley. Aparece na selfie do Capítulo 2 e é uma das duas sobreviventes do final da etapa 2.', en: 'Jessica Riley. Appears in the Chapter 2 selfie and is one of the two survivors in the step 2 ending.' },
      tags: [ { pt: 'Troféu: One Hour Selfie', en: 'Trophy: One Hour Selfie' } ], descricao: { pt: 'Jessica Riley. Mike a salva em Drag Me Through Hell, e ela e Matt são os únicos sobreviventes em Only Others Left Alive.', en: 'Jessica Riley. Mike saves her in Drag Me Through Hell, and she and Matt are the only survivors in Only Others Left Alive.' } },
    { id: 'ashley', nome: 'Ashley', funcao: { pt: 'Uma dos oito amigos', en: 'One of the eight friends' }, img: '',
      resumo: { pt: 'Ashley Brown. Ligada à cena da porta do alojamento e ao tapa da Emily.', en: 'Ashley Brown. Tied to the lodge door scene and Emily\'s slap.' },
      tags: [ { pt: 'Troféu: Nightmare on Ash Street', en: 'Trophy: Nightmare on Ash Street' } ], descricao: { pt: 'Ashley Brown. Está ligada a Nightmare on Ash Street, You Let The Wrong One In! e Talk to eM.', en: 'Ashley Brown. Tied to Nightmare on Ash Street, You Let The Wrong One In! and Talk to eM.' } },
    { id: 'chris', nome: 'Chris', funcao: { pt: 'Um dos oito amigos', en: 'One of the eight friends' }, img: '',
      resumo: { pt: 'Christopher Hartley. Aparece nos troféus da porta do alojamento e do alçapão.', en: 'Christopher Hartley. Appears in the lodge door and trap door trophies.' },
      tags: [ { pt: 'Troféu: You Let The Wrong One In!', en: 'Trophy: You Let The Wrong One In!' } ], descricao: { pt: 'Christopher Hartley. Ele ou a Ashley abrem a porta do alçapão no Capítulo 9.', en: 'Christopher Hartley. He or Ashley opens the trap door in Chapter 9.' } },
    { id: 'matt', nome: 'Matt', funcao: { pt: 'Um dos oito amigos', en: 'One of the eight friends' }, img: '',
      resumo: { pt: 'Matthew Taylor. Um dos dois sobreviventes do final pedido na etapa 2.', en: 'Matthew Taylor. One of the two survivors of the ending asked for in step 2.' },
      tags: [ { pt: 'Troféu: Lodge Fever', en: 'Trophy: Lodge Fever' } ], descricao: { pt: 'Matthew Taylor. Está ligado a Lodge Fever, Just Breathe e Only Others Left Alive.', en: 'Matthew Taylor. Tied to Lodge Fever, Just Breathe and Only Others Left Alive.' } },
    { id: 'emily', nome: 'Emily', funcao: { pt: 'Uma dos oito amigos', en: 'One of the eight friends' }, img: '',
      resumo: { pt: 'Emily Davis. Dá o tapa da cena do troféu Talk to eM.', en: 'Emily Davis. Delivers the slap in the Talk to eM scene.' },
      tags: [ { pt: 'Troféu: Talk to eM', en: 'Trophy: Talk to eM' } ], descricao: { pt: 'Emily Davis. Está ligada a Talk to eM, Lodge Fever e Just Breathe (com a pistola de sinalização).', en: 'Emily Davis. Tied to Talk to eM, Lodge Fever and Just Breathe (with the flare gun).' } },
    { id: 'josh', nome: 'Josh', funcao: { pt: 'Um dos oito amigos', en: 'One of the eight friends' }, img: '',
      resumo: { pt: 'Joshua Washington. O remake traz um terceiro final para ele.', en: 'Joshua Washington. The remake adds a third ending for him.' },
      tags: [ { pt: 'Troféu: We Need To Talk About Josh', en: 'Trophy: We Need To Talk About Josh' } ], descricao: { pt: 'Joshua Washington. O troféu We Need To Talk About Josh pede o melhor final dele, por escolhas e respostas nas sessões de terapia.', en: 'Joshua Washington. The We Need To Talk About Josh trophy asks for his best ending, through choices and therapy answers.' } }
  ],
  equipamentos: [],
  armaduras: [],
  perdiveis: [
    { cor: 'butter', onde: { pt: 'Toda a partida', en: 'Whole run' }, t: { pt: 'Quem vive e quem morre', en: 'Who lives and who dies' },
      d: { pt: 'Três troféus pedem finais opostos: todos vivos, só Matt e Jessica vivos e todos mortos. Por isso a platina pede três jogatinas.', en: 'Three trophies ask for opposite endings: everyone alive, only Matt and Jessica alive and everyone dead. That is why the platinum needs three playthroughs.' },
      trofeus: ['they-all-live', 'only-others-left-alive', 'this-is-the-end'],
      passos: [
        { cap: { pt: 'Todos vivos', en: 'Everyone alive' }, t: { pt: 'They All Live: os oito amigos sobrevivem até o amanhecer.', en: 'They All Live: all eight friends survive until dawn.' } },
        { cap: { pt: 'Só dois', en: 'Only two' }, t: { pt: 'Only Others Left Alive: Matt e Jessica são os únicos sobreviventes. Faça um backup do save e use a seleção de capítulo a partir do Capítulo 8.', en: 'Only Others Left Alive: Matt and Jessica are the only survivors. Back up your save and use chapter select from Chapter 8.' } },
        { cap: { pt: 'Todos mortos', en: 'Everyone dead' }, t: { pt: 'This Is THE End: ninguém sobrevive. Use um slot novo ou sobrescreva o save.', en: 'This Is THE End: nobody survives. Use a new slot or overwrite the save.' } }
      ] },
    { cor: 'butter', onde: { pt: 'Prólogo', en: 'Prologue' }, t: { pt: 'Mudar o passado', en: 'Changing the past' },
      d: { pt: 'O troféu Fatal Destination pede ignorar o aviso do Dr. Hill e tentar mudar o passado. Decida isso já na primeira vez que ele aparecer.', en: 'The Fatal Destination trophy asks you to ignore Dr. Hill\'s warning and try to change the past. Decide that the first time it comes up.' },
      trofeus: ['fatal-destination'],
      passos: [ { cap: { pt: 'O troféu', en: 'The trophy' }, t: { pt: 'Fatal Destination (prata): apesar do aviso do Dr. Hill, você tenta mudar o passado.', en: 'Fatal Destination (silver): despite Dr. Hill\'s warning, you try changing the past.' } } ] },
    { cor: 'butter', onde: { pt: 'Toda a partida', en: 'Whole run' }, t: { pt: 'Não machucar nenhum animal', en: 'Harm no animal' },
      d: { pt: 'Blackwood Country só vem se o grupo respeitar a vida selvagem da montanha. Evite qualquer ação contra animais durante toda a jogatina.', en: 'Blackwood Country only comes if the group respects the wildlife of the mountain. Avoid any action against animals throughout the run.' },
      trofeus: ['blackwood-country'],
      passos: [ { cap: { pt: 'O troféu', en: 'The trophy' }, t: { pt: 'Blackwood Country (prata): não machucar nenhum animal.', en: 'Blackwood Country (silver): do not harm any animal.' } } ] }
  ],
  novidades: [
    { id: 'guia-criado', badge: 'novo', data: '2026-11-23', img: '',
      t: { pt: 'Guia do Until Dawn criado', en: 'Until Dawn guide created' },
      d: { pt: 'A base do guia está no ar: visão geral, roteiro em 3 jogatinas, perdíveis e os 29 troféus.', en: 'The base of the guide is up: overview, a 3-playthrough roadmap, missables and the 29 trophies.' },
      legCapa: { pt: '', en: '' },
      corpo: [ { h: { pt: 'O que já existe', en: 'What already exists' } }, { ul: [ { pt: 'Visão geral e jogabilidade.', en: 'Overview and gameplay.' }, { pt: 'Roteiro e perdíveis.', en: 'Roadmap and missables.' }, { pt: 'Lista dos 29 troféus.', en: 'The 29-trophy list.' } ] } ] }
  ],
  trilha: [
    { por: 'Mark Korven', t: { pt: 'Nova trilha do remake', en: 'New score for the remake' }, youtube: '', onde: { pt: 'Durante todo o jogo', en: 'Throughout the game' }, d: { pt: 'O remake traz uma trilha nova, composta por Mark Korven, e uma música de abertura nova.', en: 'The remake brings a new score composed by Mark Korven and a new intro song.' } }
  ],
  detalhes: [                    // EXEMPLO: mural de imagens. Coloque o arquivo em imagens/ e escreva img: 'imagens/arquivo.jpg'
    { t: { pt: 'Exemplo: imagem do mural', en: 'Example: mural image' }, larg: 2, prop: '2 / 1', img: '', alt: { pt: 'Descrição da imagem', en: 'Image description' } }
  ],
  curiosidades: [
    { t: { pt: '10 troféus a mais que o original', en: '10 more trophies than the original' }, d: { pt: 'A lista do remake tem 29 troféus. O remake adicionou 20 e removeu 10 em relação ao jogo de 2015.', en: 'The remake\'s list has 29 trophies. It added 20 and removed 10 compared with the 2015 game.' } },
    { t: { pt: 'Epílogo só se a Sam sobreviver', en: 'Epilogue only if Sam survives' }, d: { pt: 'O remake tem um epílogo que só aparece quando a Sam sobrevive.', en: 'The remake has an epilogue that only plays if Sam survives.' } }
  ],
  desenvolvedores: [
    { nome: 'Ballistic Moon', cargo: { pt: 'Estúdio do remake', en: 'Remake studio' }, neste: { pt: 'Fez o remake de 2024, para PS5 e PC.', en: 'Made the 2024 remake, for PS5 and PC.' } },
    { nome: 'Supermassive Games', cargo: { pt: 'Estúdio do jogo original', en: 'Original game studio' }, neste: { pt: 'Fez o Until Dawn de 2015, para PS4.', en: 'Made the 2015 Until Dawn, for PS4.' } }
  ],
  trofeus: [
      { ex: 'a-symphony-of-horror', tipo: 'platina', nome: { pt: 'A Symphony of Horror', en: 'A Symphony of Horror' }, desc: { pt: 'Você conquistou todos os troféus de ouro, prata e bronze em Until Dawn.', en: 'You collected all Gold, Silver, and Bronze trophies in Until Dawn.' }, perdivel: 'atencao' },
      { ex: 'the-tale-of-the-two-sisters', tipo: 'ouro', nome: { pt: 'The Tale of The Two Sisters', en: 'The Tale of The Two Sisters' }, desc: { pt: 'O grupo encontrou todas as pistas da linha de pistas das Gêmeas.', en: 'The group found all the clues from the Twins Clueline.' }, perdivel: true },
      { ex: 'this-is-the-end', tipo: 'ouro', nome: { pt: 'This Is THE End', en: 'This Is THE End' }, desc: { pt: 'Ninguém sobreviveu até o amanhecer.', en: 'Nobody survived until dawn.' }, perdivel: true },
      { ex: 'they-all-live', tipo: 'ouro', nome: { pt: 'They All Live', en: 'They All Live' }, desc: { pt: 'Os oito amigos sobreviveram até o amanhecer.', en: 'All eight friends survived until dawn.' }, perdivel: true },
      { ex: 'you-opened-their-eyes', tipo: 'ouro', nome: { pt: 'You Opened Their Eyes', en: 'You Opened Their Eyes' }, desc: { pt: 'O grupo encontrou todas as pistas da linha de pistas do Homem Misterioso.', en: 'The group found all the clues from the Mystery Man Clueline.' }, perdivel: true },
      { ex: 'the-fateful-descent', tipo: 'ouro', nome: { pt: 'The Fateful Descent', en: 'The Fateful Descent' }, desc: { pt: 'O grupo encontrou todas as pistas da linha de pistas de 1952.', en: 'The group found all the clues from the 1952 Clueline.' }, perdivel: true },
      { ex: 'an-omen', tipo: 'ouro', nome: { pt: 'An Omen?', en: 'An Omen?' }, desc: { pt: 'O grupo encontrou todos os 36 totens da montanha.', en: 'The group found all 36 totems on the mountain.' }, perdivel: true },
      { ex: 'only-others-left-alive', tipo: 'prata', nome: { pt: 'Only Others Left Alive', en: 'Only Others Left Alive' }, desc: { pt: 'Matt e Jessica foram os únicos a sobreviver até o amanhecer.', en: 'Matt and Jessica were the only ones to survive until dawn.' }, perdivel: true },
      { ex: 'the-skillful-wolf-man', tipo: 'prata', nome: { pt: 'The Skillful Wolf Man', en: 'The Skillful Wolf Man' }, desc: { pt: 'Mike manteve o lobo vivo durante todo o Sanatório.', en: 'Mike kept the wolf alive throughout the Sanatorium.' }, perdivel: true },
      { ex: 'fatal-destination', tipo: 'prata', nome: { pt: 'Fatal Destination', en: 'Fatal Destination' }, desc: { pt: 'Apesar do aviso do Dr. Hill, você tentou mudar o passado.', en: 'Despite Dr. Hill\'s warning, you tried changing the past.' }, perdivel: true },
      { ex: 'blackwood-country', tipo: 'prata', nome: { pt: 'Blackwood Country', en: 'Blackwood Country' }, desc: { pt: 'O grupo respeitou a vida selvagem da montanha.', en: 'The group respected the wildlife of the mountain.' }, perdivel: true },
      { ex: 'when-a-psycho-calls', tipo: 'prata', nome: { pt: 'When a Psycho Calls', en: 'When a Psycho Calls' }, desc: { pt: 'Sam escapa do Psicopata.', en: 'Sam escapes from the Psycho.' }, perdivel: true },
      { ex: 'talk-to-em', tipo: 'prata', nome: { pt: 'Talk to eM', en: 'Talk to eM' }, desc: { pt: 'Emily deu um tapa em Ashley depois que a verdade foi revelada.', en: 'Emily slapped Ashley after the truth was revealed.' }, perdivel: true },
      { ex: 'the-cabin-in-the-blackwoods', tipo: 'prata', nome: { pt: 'The Cabin in the Blackwoods', en: 'The Cabin in the Blackwoods' }, desc: { pt: 'Conclua uma jogatina completa de Until Dawn.', en: 'Complete a full playthrough of Until Dawn.' } },
      { ex: 'we-need-to-talk-about-josh', tipo: 'prata', nome: { pt: 'We Need To Talk About Josh', en: 'We Need To Talk About Josh' }, desc: { pt: 'Você alcançou o melhor final para o Josh.', en: 'Achieved the best ending for Josh.' }, perdivel: true },
      { ex: 'its-shining', tipo: 'prata', nome: { pt: 'It\'s Shining', en: 'It\'s Shining' }, desc: { pt: 'Encontre todos os novos itens interativos pela Montanha Blackwood.', en: 'Find all the new interactables across Blackwood Mountain.' }, perdivel: true },
      { ex: 'the-psycho-path', tipo: 'bronze', nome: { pt: 'The Psycho Path', en: 'The Psycho Path' }, desc: { pt: 'Ataque o Psicopata com uma arma como Sam ou Ashley.', en: 'Attack the Psycho with a weapon as Sam or Ashley.' }, perdivel: true },
      { ex: 'saw-that-coming', tipo: 'bronze', nome: { pt: 'Saw That Coming', en: 'Saw That Coming' }, desc: { pt: 'Mike serrou os próprios dedos com o facão quebrado.', en: 'Mike sawed his fingers off with the broken machete.' }, perdivel: true },
      { ex: 'nightmare-on-ash-street', tipo: 'bronze', nome: { pt: 'Nightmare on Ash Street', en: 'Nightmare on Ash Street' }, desc: { pt: 'Ashley hesitou e não deixou Chris entrar a tempo.', en: 'Ashley hesitated and failed to let Chris inside in time.' }, perdivel: true },
      { ex: 'you-let-the-wrong-one-in', tipo: 'bronze', nome: { pt: 'You Let The Wrong One In!', en: 'You Let The Wrong One In!' }, desc: { pt: 'Ashley ou Chris abriu a porta do alçapão.', en: 'Ashley or Chris opened the trap door.' }, perdivel: true },
      { ex: 'patient-sematary', tipo: 'bronze', nome: { pt: 'Patient Sematary', en: 'Patient Sematary' }, desc: { pt: 'Mike pegou a estatueta estranha.', en: 'Mike picked up the odd figurine.' }, perdivel: true },
      { ex: 'an-american-survivor-in-canada', tipo: 'bronze', nome: { pt: 'An American Survivor in Canada', en: 'An American Survivor in Canada' }, desc: { pt: 'Mike escapou do Sanatório com sucesso no Capítulo 9.', en: 'Mike successfully escapes the Sanatorium in Chapter 9.' }, perdivel: true },
      { ex: 'drag-me-through-hell', tipo: 'bronze', nome: { pt: 'Drag Me Through Hell', en: 'Drag Me Through Hell' }, desc: { pt: 'Mike salvou Jessica de um atacante desconhecido sem errar nenhum evento de reação rápida.', en: 'Mike saved Jessica from an unknown attacker without failing a quick time event.' }, perdivel: true },
      { ex: 'one-hour-selfie', tipo: 'bronze', nome: { pt: 'One Hour Selfie', en: 'One Hour Selfie' }, desc: { pt: 'Tire uma selfie ruim com a Jessica.', en: 'Take a bad selfie with Jessica.' }, perdivel: true },
      { ex: 'lodge-fever', tipo: 'bronze', nome: { pt: 'Lodge Fever', en: 'Lodge Fever' }, desc: { pt: 'Matt e Emily começaram confrontos separados na cabana.', en: 'Both Matt and Emily started separate confrontations in the lodge.' }, perdivel: true },
      { ex: 'i-know-what-you-did-last-year', tipo: 'bronze', nome: { pt: 'I Know What You Did Last Year', en: 'I Know What You Did Last Year' }, desc: { pt: 'Conclua o Prólogo.', en: 'Complete the Prologue.' } },
      { ex: 'our-host', tipo: 'bronze', nome: { pt: 'Our Host', en: 'Our Host' }, desc: { pt: 'A identidade do Psicopata foi revelada.', en: 'The psycho\'s identity was revealed.' } },
      { ex: 'just-breathe', tipo: 'bronze', nome: { pt: 'Just Breathe', en: 'Just Breathe' }, desc: { pt: 'Emily ou Matt usou a pistola de sinalização para se defender de um atacante com sucesso.', en: 'Emily or Matt used the flare gun to successfully defend themselves against an attacker.' }, perdivel: true },
      { ex: 'carnival-of-solitude', tipo: 'bronze', nome: { pt: 'Carnival of Solitude', en: 'Carnival of Solitude' }, desc: { pt: 'Sacuda a esfera de neve.', en: 'Shake the Snow Globe.' }, perdivel: true }
  ],
  ocultas: ['vozes', 'equipamentos', 'armaduras', 'bestiario', 'dlcs'],   // abas que ficam escondidas do menu
  secoesExtra: [],
  refs: {}
}
