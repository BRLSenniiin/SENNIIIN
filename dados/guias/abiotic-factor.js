'use strict'

JOGOS['abiotic-factor'] = {
// ══════════════════════════════════════════════════════════════════════════
// GUIA DESTE ARQUIVO — conteúdo do jogo Abiotic Factor (o guia mais completo: use como exemplo)
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
// • Modelos de cada tipo de item (troféu, perdível, objeto...) estão nos comentários ao lado de cada seção abaixo.
// ══════════════════════════════════════════════════════════════════════════
    atualizado: '2026-11-13',
    img: '',   // capa, ex.: 'imagens/abiotic.jpg'. Vazio = capa colorida com a letra
    abertura: [
      { pt: '<strong>Abiotic Factor</strong> tem <strong>54 troféus</strong> e uma platina de volume e paciência, não de habilidade: dá para fazer tudo em <strong>uma única jogatina</strong>, em cerca de 60 a 100 horas.',
        en: '<strong>Abiotic Factor</strong> has <strong>54 trophies</strong> and a platinum of volume and patience, not skill: everything can be done in <strong>a single playthrough</strong>, in roughly 60 to 100 hours.' },
      { pt: 'O que pede atenção são <strong>7 perdíveis</strong>. Abra a seção Perdíveis antes de avançar de setor.',
        en: 'What needs attention is <strong>7 missables</strong>. Open the Missables section before moving on to the next sector.' }
    ],
    // cor: 'rose' = perdível de verdade | 'butter' = atenção/planejamento. Faltam 4 dos 7.
    perdiveis: [
      { cor: 'rose', onde: 'Lab Rats',
        t: { pt: 'Net Launcher antes dos Lab Rats', en: 'Net Launcher before the Lab Rats' },
        d: { pt: 'O troféu do Rato de Laboratório precisa de um Lab Rat capturado vivo. Construa o Net Launcher antes de matar todos eles.', en: 'The Lab Rat trophy needs a Lab Rat captured alive. Build the Net Launcher before you kill them all.' },
        trofeus: ['956781-lab-rat'],
        passos: [
          { cap: { pt: 'Regra do troféu', en: 'Trophy rule' }, t: { pt: 'Equipe o Rat Suit e o Rat Pack ao mesmo tempo.', en: 'Wear the Rat Suit and the Rat Pack at the same time.' } },
          { cap: { pt: 'Rat Suit', en: 'Rat Suit' }, t: { pt: 'Mate um Lab Rat e pique o cadáver para receber o traje.', en: 'Kill a Lab Rat and chop up the corpse to get the suit.' } },
          { cap: { pt: 'Rat Pack', en: 'Rat Pack' }, t: { pt: 'Capture um Lab Rat vivo com o Net Launcher e mate-o com uma arma contundente para receber a mochila. Por isso o Net Launcher precisa estar pronto antes de você matar todos eles.', en: 'Capture a live Lab Rat with the Net Launcher and kill it with a blunt weapon to get the pack. That is why the Net Launcher must be ready before you kill them all.' } }
        ],
        fonte: { pt: 'Lista de troféus do guia (Exophase). Passos conferidos nos guias de conquistas da HolyHosting (jul/2025).', en: 'The guide\'s trophy list (Exophase). Steps checked against the HolyHosting achievement guides (Jul 2025).' } },
      { cor: 'rose', onde: 'Manufacturing · Hydroplant',
        t: { pt: 'Examine os corpos de uniforme', en: 'Check the uniform bodies' },
        d: { pt: 'Os uniformes de Manufacturing (Upper Shipping) e da Hidroplanta (elevador subaquático) vêm de corpos. Passar correndo é como se perde.', en: 'The Manufacturing (Upper Shipping) and Hydroplant (underwater elevator) uniforms come from bodies. Running past them is how they get missed.' },
        trofeus: ['956779-engineering-success', '956780-go-with-the-flow'],
        passos: [
          { cap: { pt: 'Manufacturing · Upper Shipping', en: 'Manufacturing · Upper Shipping' }, t: { pt: 'Pegue o uniforme (troféu Engineering Success) do corpo no Upper Shipping, em Manufacturing West.', en: 'Loot the uniform (Engineering Success trophy) from the body in Upper Shipping, in Manufacturing West.' } },
          { cap: { pt: 'Hidroplanta · elevador subaquático', en: 'Hydroplant · underwater elevator' }, t: { pt: 'Interaja com o trabalhador morto de uniforme no poço do elevador subaquático (troféu Go With The Flow).', en: 'Interact with the dead uniformed worker in the underwater elevator shaft (Go With The Flow trophy).' } },
          { cap: { pt: 'Como se perde', en: 'How it gets missed' }, t: { pt: 'Passar correndo pelas áreas é o que faz as peças escaparem.', en: 'Running through the areas is what makes pieces slip by.' } }
        ],
        fonte: { pt: 'Lista de troféus do guia (Exophase) e guias de conquistas da HolyHosting (jul/2025).', en: 'The guide\'s trophy list (Exophase) and HolyHosting achievement guides (Jul 2025).' } },
      { cor: 'butter', onde: 'Hydroplant · Robotics',
        t: { pt: 'A quest da Kylie começa cedo', en: 'Kylie\'s quest starts early' },
        d: { pt: 'O troféu Sonhos Elétricos pede o Hyper-Dense Neural Chip na Robotics da Hidroplanta e uma sequência longa. Comece assim que chegar lá.', en: 'The Electric Dreams trophy needs the Hyper-Dense Neural Chip in the Hydroplant\'s Robotics section and a long sequence. Start as soon as you get there.' },
        trofeus: ['956817-electric-dreams'],
        passos: [
          { cap: { pt: 'Hidroplanta · Robotics', en: 'Hydroplant · Robotics' }, t: { pt: 'Use um Hyper-Dense Neural Chip no tanque com o cérebro da Kylie Muir, na Robotics, para obter a Kylie (berloque). Comece assim que chegar lá, em vez de deixar para o fim.', en: 'Use a Hyper-Dense Neural Chip on the tank with Kylie Muir\'s brain in Robotics to get Kylie (trinket). Start as soon as you get there instead of leaving it for the end.' } },
          { cap: { pt: 'Até o fim', en: 'To the end' }, t: { pt: 'Leve a Kylie aos laboratórios botânicos, coloque-a em um robô de segurança e vá até o Albatross.', en: 'Bring Kylie to the botanical labs, put her in a security bot and go to the Albatross.' } },
          { cap: { pt: 'Se já terminou o jogo', en: 'If you already finished the game' }, t: { pt: 'Ainda dá para fazer depois dos créditos, segundo jogadores do Steam. Se a Kylie já foi transferida para outro corpo, leve a versão dela em gerador no inventário (sem equipar) para colocá-la no corpo.', en: 'It can still be done after the credits, according to Steam players. If Kylie was already moved into another body, carry her generator version in your inventory (not equipped) to put her in the body.' }, sub: [{ pt: 'Relatos da comunidade, sem confirmação oficial: um jogador diz que concluiu depois do remake dela.', en: 'Community reports, not officially confirmed: one player says they finished it after her remake.' }] }
        ],
        fonte: { pt: 'Lista de troféus do guia (Exophase), guias da HolyHosting e discussões da comunidade no Steam (ago/2025).', en: 'The guide\'s trophy list (Exophase), HolyHosting guides and Steam community discussions (Aug 2025).' } },
      { cor: 'rose', onde: 'Registro', t: { pt: 'Entradas do Registro que se perdem', en: 'Registry entries that can be lost' }, d: { pt: 'Algumas entradas do Registro dependem de conversar com NPCs que mudam de lugar, mudam de fala ou morrem com o avanço da história. Passado o ponto, elas somem.', en: 'Some Registry entries depend on talking to NPCs who move, change their dialogue or die as the story advances. Once you pass that point, they are gone.' }, trofeus: [], passos: [{ cap: { pt: 'Quais entradas', en: 'Which entries' }, t: { pt: 'Segundo relatos, as que mais escapam são as ligadas a estes NPCs:', en: 'According to reports, the ones that slip away most are tied to these NPCs:' }, sub: [{ pt: 'Ferreiro e Order Grunt: falar antes de encontrar a Frake.', en: 'Blacksmith and Order Grunt: talk to them before you meet Frake.' }, { pt: 'Marion: falar antes da segunda metade do diálogo dele. Hoje ele vira trader e repete essa metade, mas a primeira se perde.', en: 'Marion: talk to him before the second half of his dialogue. He now becomes a trader and repeats that half, but the first half is lost.' }, { pt: 'Manufacturing West: a NPC da entrada morre.', en: 'Manufacturing West: the NPC for the entry dies.' }, { pt: 'Dark Lens: a NPC se muda e precisa ser contatada antes de certo ponto da história.', en: 'Dark Lens: the NPC moves and must be talked to before a certain story point.' }, { pt: 'Order Medic (primeira entrada): quem dispara a entrada deixa de aparecer no lugar.', en: 'Order Medic (first entry): the one that triggers the entry no longer spawns in place.' }] }, { cap: { pt: 'Antes de avançar', en: 'Before moving on' }, t: { pt: 'Converse com todos os NPCs do setor antes de cruzar um marco de história, principalmente os que se mudam.', en: 'Talk to every NPC in the sector before crossing a story milestone, especially the ones who relocate.' } }, { cap: { pt: 'Se já perdeu', en: 'If you already missed one' }, t: { pt: 'Jogadores de PC relatam que dá para copiar os dados do personagem para um mundo novo e reiniciar a história para pegar as entradas.', en: 'PC players report you can copy your character data to a new world and restart the story to get the entries.' }, sub: [{ pt: 'Faça backup de todos os saves antes. Em geral só funciona em solo.', en: 'Back up all your saves first. It usually only works in solo.' }, { pt: 'Deixe o personagem novo e o antigo perto do elevador inicial. Você perde o progresso de história, mas mantém o equipamento.', en: 'Leave the new and old characters near the starting elevator. You lose story progress but keep your gear.' }, { pt: 'Esse truque é de edição de arquivo no PC (Steam); não há relato dele no console.', en: 'This trick is a PC (Steam) file edit; there are no reports of it on console.' }] }], fonte: { pt: 'Discussão "Missables?" no Steam (fev–ago/2025). Há divergência entre os jogadores sobre algumas entradas; as fontes não dizem se algum troféu depende do Registro.', en: '"Missables?" discussion on Steam (Feb–Aug 2025). Players disagree on some entries; the sources do not say whether any trophy depends on the Registry.' } },
      { cor: 'butter', onde: 'IS-0091 · Leyak', t: { pt: 'Friendly Presence: prenda um Leyak', en: 'Friendly Presence: trap a Leyak' }, d: { pt: 'O troféu pede reconter o IS-0091 (ou uma variante). Não é um perdível de verdade, mas exige preparo: uma Unidade de Contenção.', en: 'The trophy asks you to re-contain IS-0091 (or a variant). It is not a true missable, but it needs preparation: a Containment Unit.' }, trofeus: ['956816-friendly-presence'], passos: [{ cap: { pt: 'Prepare', en: 'Prepare' }, t: { pt: 'Fabrique a Containment Unit: 91.', en: 'Craft the Containment Unit: 91.' } }, { cap: { pt: 'Prenda', en: 'Trap it' }, t: { pt: 'Use uma lâmpada de raio-X ou uma torre de raio-X em um Leyak perto da unidade, para prendê-lo dentro dela.', en: 'Use an X-ray lamp or X-ray tower on a Leyak near the unit to trap it inside.' } }, { cap: { pt: 'Alternativa', en: 'Alternative' }, t: { pt: 'Também funciona com um Krause, nas áreas congeladas. O autor achou o Leyak mais fácil porque ele nunca deixa o jogador em paz.', en: 'It also works with a Krause in the frozen areas. The author found the Leyak easier because it never leaves you alone.' } }, { cap: { pt: 'Depois de prender', en: 'After trapping' }, t: { pt: 'Manter o Leyak contido exige o Greyeb, mas não é necessário: só prendê-lo já libera o troféu.', en: 'Keeping the Leyak contained takes Greyeb, but you do not need it: just trapping it unlocks the trophy.' } }], fonte: { pt: 'Guia no TrueAchievements por RhinoceRoss (ago/2025) e guias da HolyHosting.', en: 'TrueAchievements guide by RhinoceRoss (Aug 2025) and HolyHosting guides.' } },
      { cor: 'butter', onde: 'Mines', t: { pt: 'Dummy: o boneco atrás do portal', en: 'Dummy: the pet dummy behind the portal' }, d: { pt: 'O troféu está numa área escondida nas Minas. É fácil de passar batido e exige levar um jump pad para chegar lá.', en: 'The trophy sits in a hidden area in the Mines. It is easy to overlook and you must bring a jump pad to reach it.' }, trofeus: ['956802-dummy'], passos: [{ cap: { pt: 'Leve um jump pad', en: 'Bring a jump pad' }, t: { pt: 'Você precisa de um jump pad para subir até o ponto do portal.', en: 'You need a jump pad to climb up to the portal.' } }, { cap: { pt: 'Nas Minas', en: 'In the Mines' }, t: { pt: 'Vá à sala onde dá para definir o ponto de respawn. Na sala em frente, com armários, há um caminho elevado com uma escada quebrada.', en: 'Go to the room where you can set your respawn point. In the room across from it, with lockers, there is a raised path with a broken ladder.' } }, { cap: { pt: 'Suba', en: 'Climb up' }, t: { pt: 'Use o jump pad para chegar ao caminho elevado.', en: 'Use the jump pad to reach the raised path.' }, sub: [{ pt: 'Dica da comunidade: dá para pular no banco, depois na máquina de venda e passar o corrimão. Cadeiras ajudam a ganhar altura, e há algumas no escritório ao lado.', en: 'Community tip: you can jump onto the bench, then the vending machine, then over the rail. Chairs help with height, and there are some in the office next door.' }] }, { cap: { pt: 'O portal', en: 'The portal' }, t: { pt: 'Lá em cima há um portal para a área do tutorial. Interaja com o Pest Dummy que está lá para liberar o troféu.', en: 'Up there is a portal to the tutorial area. Interact with the Pest Dummy there to unlock the trophy.' } }], fonte: { pt: 'Guias no TrueAchievements por RhinoceRoss e chief btww (jul/2025) e guias da HolyHosting.', en: 'TrueAchievements guides by RhinoceRoss and chief btww (Jul 2025) and HolyHosting guides.' } },
      { cor: 'butter', onde: 'Mycofields', t: { pt: 'Mycelium about the Consilium: o Mushroom Helmet', en: 'Mycelium about the Consilium: the Mushroom Helmet' }, d: { pt: 'O troféu pede fabricar e vestir o Mushroom Helmet. Não é perdível, mas precisa de três materiais, um deles um crânio.', en: 'The trophy asks you to craft and wear the Mushroom Helmet. It is not missable, but it takes three materials, one of them a skull.' }, trofeus: ['956786-mycelium-about-the-consilium'], passos: [{ cap: { pt: 'Materiais', en: 'Materials' }, t: { pt: 'Junte 1 Mushroom Peccary Skull, 1 Giga Glue e 2 Refined Carbon.', en: 'Gather 1 Mushroom Peccary Skull, 1 Giga Glue and 2 Refined Carbon.' } }, { cap: { pt: 'Fabrique', en: 'Craft' }, t: { pt: 'Fabrique o Mushroom Helmet com esses materiais.', en: 'Craft the Mushroom Helmet with those materials.' } }, { cap: { pt: 'Vista', en: 'Wear it' }, t: { pt: 'Equipe o capacete para liberar o troféu.', en: 'Equip the helmet to unlock the trophy.' } }], fonte: { pt: 'Guias de conquistas da HolyHosting (jul/2025)', en: 'HolyHosting achievement guides (Jul 2025)' } },
      { cor: 'butter', onde: 'Village Den da\'ko Yeer', t: { pt: 'The Village: o portal vermelho', en: 'The Village: the red portal' }, d: { pt: 'O troféu libera ao sair da Village Den da\'ko Yeer pelo portal vermelho, que só aparece depois de obter a Anti-Fungal Gelatin.', en: 'The trophy unlocks when you leave Village Den da\'ko Yeer through the red portal, which only appears after you obtain the Anti-Fungal Gelatin.' }, trofeus: ['956809-the-village'], passos: [{ cap: { pt: 'Antes de sair', en: 'Before leaving' }, t: { pt: 'Obtenha a Anti-Fungal Gelatin dentro da Village Den da\'ko Yeer.', en: 'Obtain the Anti-Fungal Gelatin inside Village Den da\'ko Yeer.' } }, { cap: { pt: 'O portal', en: 'The portal' }, t: { pt: 'Depois de obtê-la, aparece um portal vermelho.', en: 'After you get it, a red portal appears.' } }, { cap: { pt: 'Saia', en: 'Exit' }, t: { pt: 'Saia da Village pelo portal vermelho para liberar o troféu.', en: 'Exit the Village through the red portal to unlock the trophy.' } }], fonte: { pt: 'Guias de conquistas da HolyHosting (jul/2025)', en: 'HolyHosting achievement guides (Jul 2025)' } }
    ],
    // Tópicos extras da Wiki que este jogo mostra no menu (Sistemas, Lore, Estratégia). Tire um nome da lista para esconder a aba.
    // Cada tópico recebe cartões numa lista com o mesmo nome (ex: objetos: [ { tag: 'Tipo', t: { pt: '...', en: '...' }, d: { pt: '...', en: '...' } } ]).
    // % descoberto de cada aba do jogo (número pequeno no menu do guia), de 0 a 100, escrito por você. Visão geral, Novidades e Dicas ficam de fora.
    // Aba sem número aqui usa o automático (0% se vazia, 5% se tiver conteúdo). Sem este bloco, o jogo não mostra porcentagem nenhuma.
    descoberto: { jogabilidade: 5, roteiro: 5, mapas: 0, bestiario: 5, personagens: 5, equipamentos: 5, armaduras: 5, trofeus: 100, perdiveis: 100,
      objetos: 0, veiculos: 0, profissoes: 0, tracos: 0, habilidades: 0, gatepal: 0, lore: 0, compendio: 0, hologramas: 0, emails: 0, registro: 0, anteversos: 0, gate101: 0, metajogo: 0, bugs: 0 },
    wiki: 'https://abioticfactor.wiki.gg/wiki/',
    // Objetos (aba Objetos): grade de 3 colunas; cada item abre um pop-up centralizado. Campos opcionais por item:
    //   nome, cat: 'recurso', img: 'imagens/objetos/arquivo.png', tipo: { pt, en }, peso, dur, reparo,
    //   dados: [ [ { pt, en } (rótulo), { pt, en } ou texto (valor) ] ], efeito: { pt, en }, nota: { pt, en }
    objetos: [
      { nome: 'Agents of the Deceiver', cat: 'recurso', img: 'imagens/objetos/agents-of-the-deceiver.png' },
      { nome: 'Air Compressor', cat: 'recurso', img: 'imagens/objetos/air-compressor.png', tipo: { pt: 'Subcomponente', en: 'Sub-component' } },
      { nome: 'Alien Distillation', cat: 'recurso', img: 'imagens/objetos/alien-distillation.png' },
      { nome: 'Aloe', cat: 'recurso', img: 'imagens/objetos/aloe.png' },
      { nome: 'Anomaly', cat: 'recurso', img: 'imagens/objetos/anomaly.png' },
      { nome: 'Anteverse Gel', cat: 'recurso', img: 'imagens/objetos/anteverse-gel.png' },
      { nome: 'Anteverse Gem', cat: 'recurso', img: 'imagens/objetos/anteverse-gem.png' },
      { nome: 'Anvil', cat: 'recurso', img: 'imagens/objetos/anvil.png' },
      { nome: 'Arcane Scrap', cat: 'recurso', img: 'imagens/objetos/arcane-scrap.png' }
    ],
    secoesExtra: ['objetos', 'veiculos', 'profissoes', 'tracos', 'habilidades', 'gatepal', 'lore', 'compendio', 'hologramas', 'emails', 'registro', 'anteversos', 'gate101', 'metajogo', 'bugs'],
    // nomes das abas alinhados ao guia de GTA VI (a base de sistemas): Equipamentos = Armamentos, Veículos = Transportes, Habilidades = Atributos e progressão
    rotulos: { equipamentos: { pt: 'Armamentos', en: 'Weapons' }, veiculos: { pt: 'Transportes', en: 'Transport' }, habilidades: { pt: 'Atributos e progressão', en: 'Attributes and progression' } },
    // Troféus (aba Troféus). Um item por troféu, na ordem do jogo. Campos:
    //   ex: final do link do Exophase (ex: '956766-pure-science') — também é o "código" do troféu; não repita entre troféus
    //   tipo: 'platina' | 'ouro' | 'prata' | 'bronze'      (os pontos saem do tipo: 300 / 90 / 30 / 15)
    //   nome: texto (ou { pt, en });  desc: { pt, en }       (nomes ficam no original em inglês; descrições em PT são tradução)
    //   pct: % de jogadores que têm o troféu;  exp: pontos EXP do Exophase;  rar: 'comum' | 'incomum' | 'raro' | 'muito-raro'
    //   img: código do ícone no Exophase (ou um caminho/link completo, ex: 'Images/Troféus/Pure-Science.webp')
    //   oculto: true  → mostra o selo "Oculto"
    //   perdivel: true | 'atencao'  → selo Perdível / Atenção + atalho para a aba Perdíveis (opcional)
    //   como: { pt, en }  → "Como conseguir" na ficha;  dica: { pt, en }  → "Dica" na ficha (opcionais)
    trofeus: [
      { ex: '956766-pure-science', tipo: 'platina', nome: 'Pure Science', desc: { pt: 'Sua dedicação à pesquisa não deixou pedra sobre pedra.', en: 'Your dedication to research has left no stone unturned.' }, pct: 6.87, exp: 338, rar: 'muito-raro', img: 'dg8g1358' },
      { ex: '956767-down-under', tipo: 'bronze', nome: 'Down Under', desc: { pt: 'Você deu seus primeiros passos na Instalação de Pesquisa GATE Cascade.', en: 'You\'ve taken your first steps into the GATE Cascade Research Facility.' }, pct: 79.83, exp: 29, rar: 'comum', img: 'j0105dj4' },
      { ex: '956768-office-managed', tipo: 'bronze', nome: 'Office: Managed', desc: { pt: 'Você abriu caminho pelo Setor de Escritórios com, no máximo, um corte de papel.', en: 'You\'ve scrambled through the Office Sector with barely a papercut.' }, pct: 34.41, exp: 68, rar: 'incomum', img: '131308de', oculto: true },
      { ex: '956769-synced-up', tipo: 'prata', nome: 'Synced Up', desc: { pt: 'Você perfurou seu caminho até Manufacturing West e engenhou uma fuga.', en: 'You\'ve bored your way into Manufacturing West and engineered an escape.' }, pct: 24.06, exp: 97, rar: 'raro', img: '354508ee', oculto: true },
      { ex: '956770-regaining-control', tipo: 'prata', nome: 'Regaining Control', desc: { pt: 'Você escapou das falhas de contenção e explorou além dos Laboratórios Cascade.', en: 'You\'ve broken free of containment failures and explored beyond the Cascade Laboratories.' }, pct: 17.81, exp: 130, rar: 'raro', img: '77d748e8', oculto: true },
      { ex: '956771-survive-the-night', tipo: 'prata', nome: 'Survive the Night', desc: { pt: 'Você encarou a escuridão do Setor de Segurança e saiu do outro lado, diferente, mas vivo.', en: 'You faced the dark of Security Sector and came out the other side, different, but alive.' }, pct: 16.91, exp: 137, rar: 'raro', img: '55b5384d', oculto: true },
      { ex: '956772-the-darkwater', tipo: 'prata', nome: 'The Darkwater', desc: { pt: 'Você reativou a Hidroplanta e saiu calejado da batalha.', en: 'You\'ve reactivated the Hydroplant and are battle-hardened as a result.' }, pct: 14.83, exp: 157, rar: 'muito-raro', img: '0010d8ge', oculto: true },
      { ex: '956773-dark-energy', tipo: 'prata', nome: 'Dark Energy', desc: { pt: 'Você desceu às profundezas dos Reatores. Sente-se renovado e cheio de energia... e algo mais.', en: 'You descended into the depths of the Reactors. You feel renewed and full of energy... And something more.' }, pct: 12.65, exp: 184, rar: 'muito-raro', img: '8j4j68gd', oculto: true },
      { ex: '956774-end-of-the-earth', tipo: 'prata', nome: 'End of the Earth', desc: { pt: 'Você abriu caminho a fogo pelo gélido Setor Residencial e agora está bem longe da Instalação de Pesquisa GATE Cascade.', en: 'You\'ve torched your way through the frigid Residential Sector and you find yourself far away from the GATE Cascade Research Facility.' }, pct: 11.09, exp: 209, rar: 'muito-raro', img: 'ee8e177d', oculto: true },
      { ex: '956775-apocalypse-now', tipo: 'ouro', nome: 'Apocalypse Now', desc: { pt: 'Você sobreviveu do jeito de sempre, com o universo se rasgando em seu rastro. Não dá para dizer que você não deixou marca.', en: 'You\'ve survived the way you always have, with the universe rending in your wake. You can\'t say you didn\'t make an impact.' }, pct: 10.85, exp: 214, rar: 'muito-raro', img: '40601880', oculto: true },
      { ex: '956776-crafty-creations', tipo: 'bronze', nome: 'Crafty Creations', desc: { pt: 'Você criou seu primeiro item, sozinho, provavelmente.', en: 'You created your very first item, all by yourself, probably.' }, pct: 98.93, exp: 23, rar: 'comum', img: '6dgd5887' },
      { ex: '956777-kitted-out', tipo: 'bronze', nome: 'Kitted Out', desc: { pt: 'Equipe um item em cada slot disponível, ao mesmo tempo.', en: 'Equip an item into every available slot, at the same time.' }, pct: 22.59, exp: 103, rar: 'raro', img: 'b8386jj6' },
      { ex: '956778-fashion-spec', tipo: 'prata', nome: 'Fashion Spec', desc: { pt: 'Equipe um conjunto de armadura completo com um bônus único.', en: 'Equip a complete armor set with a unique buff.' }, pct: 19.46, exp: 119, rar: 'raro', img: 'gj7j3665' },
      { ex: '956779-engineering-success', tipo: 'bronze', nome: 'Engineering Success', desc: { pt: 'Colete o uniforme completo de Manufacturing.', en: 'Collect the full Manufacturing uniform.' }, pct: 18.65, exp: 125, rar: 'raro', img: 'dg8g1338', perdivel: true, como: { pt: 'O uniforme de Manufacturing (Upper Shipping) vem de corpos. Passar correndo é como se perde.', en: 'The Manufacturing (Upper Shipping) uniform comes from bodies. Running past them is how it gets missed.' } },
      { ex: '956780-go-with-the-flow', tipo: 'bronze', nome: 'Go With The Flow', desc: { pt: 'Colete o uniforme completo da Hidroplanta.', en: 'Collect the full Hydroplant uniform.' }, pct: 11.04, exp: 210, rar: 'muito-raro', img: 'j0105dd4', perdivel: true, como: { pt: 'O uniforme da Hidroplanta (elevador subaquático) vem de corpos. Passar correndo é como se perde.', en: 'The Hydroplant (underwater elevator) uniform comes from bodies. Running past them is how it gets missed.' } },
      { ex: '956781-lab-rat', tipo: 'prata', nome: 'Lab Rat', desc: { pt: 'Nunca vire rato de vez.', en: 'Never go full rat.' }, pct: 9.83, exp: 236, rar: 'muito-raro', img: '1313088e', oculto: true, perdivel: true, como: { pt: 'O troféu precisa de um Lab Rat capturado vivo. Construa o Net Launcher antes de matar todos eles.', en: 'The trophy needs a Lab Rat captured alive. Build the Net Launcher before you kill them all.' } },
      { ex: '956782-hackerman', tipo: 'bronze', nome: 'Hackerman', desc: { pt: 'Hackeie uma porta ou outro recurso de segurança.', en: 'Hack a door or other security feature.' }, pct: 28.36, exp: 82, rar: 'raro', img: '3545088e' },
      { ex: '956783-green-thumb', tipo: 'bronze', nome: 'Green Thumb', desc: { pt: 'Cultive qualquer plantação.', en: 'Cultivate any crop' }, pct: 25.83, exp: 90, rar: 'raro', img: '77d74888' },
      { ex: '956784-catch-a-fish', tipo: 'bronze', nome: 'Catch a Fish', desc: { pt: 'Você pescou um peixe com sucesso, mas não era bem o que esperava!', en: 'You\'ve successfully caught a fish, but it isn\'t quite what you expected!' }, pct: 17.88, exp: 130, rar: 'raro', img: '55b5388d' },
      { ex: '956785-rare-catch', tipo: 'prata', nome: 'Rare Catch', desc: { pt: 'Você pescou algo raro! Que sorte.', en: 'You\'ve fished up something rare! Lucky you.' }, pct: 8.18, exp: 284, rar: 'muito-raro', img: '0010d88e', oculto: true },
      { ex: '956786-mycelium-about-the-consilium', tipo: 'bronze', nome: 'Mycelium about the Consilium', desc: { pt: 'Aproveite os sonhos dos Mycofields.', en: 'Enjoy the dreams of the Mycofields.' }, pct: 9.42, exp: 247, rar: 'muito-raro', img: '8j4j688d', oculto: true },
      { ex: '956787-one-down-one-million-to-go', tipo: 'bronze', nome: 'One Down, One Million To Go', desc: { pt: 'Mate uma praga pela primeira vez.', en: 'Kill a pest for the very first time.' }, pct: 85.19, exp: 27, rar: 'comum', img: 'ee8e17bd' },
      { ex: '956788-supremus-ordo-petrae', tipo: 'bronze', nome: 'Supremus Ordo Petrae', desc: { pt: 'Derrote 50 combatentes da Ordem, por qualquer meio disponível.', en: 'Take down 50 combatants from The Order, by any means available.' }, pct: 19.06, exp: 122, rar: 'raro', img: '406018g0' },
      { ex: '956789-sjaund', tipo: 'prata', nome: 'Sjaund', desc: { pt: 'Você derrubou um gigante, apesar do custo.', en: 'You\'ve felled a giant, despite the cost.' }, pct: 13.74, exp: 169, rar: 'muito-raro', img: '6dgd58j7', oculto: true },
      { ex: '956790-ragnarok', tipo: 'prata', nome: 'Ragnarok', desc: { pt: 'Você derrotou 100 dos melhores da GATE, por um motivo ou outro.', en: 'You\'ve bested 100 of GATE\'s finest, for one reason or another.' }, pct: 19.06, exp: 122, rar: 'raro', img: 'b8386j56', oculto: true },
      { ex: '956791-music-box', tipo: 'bronze', nome: 'Music Box', desc: { pt: 'Você abriu uma Caixa Cacofônica.', en: 'You\'ve unlocked a Cacophonous Crate.' }, pct: 16.18, exp: 144, rar: 'raro', img: 'gj7j36d5', oculto: true },
      { ex: '956792-nosy-neighbor', tipo: 'bronze', nome: 'Nosy Neighbor', desc: { pt: 'Você abriu uma Caixa Ornamentada.', en: 'You\'ve unlocked an Ornate Crate.' }, pct: 21.31, exp: 109, rar: 'raro', img: 'dg8g1368', oculto: true },
      { ex: '956793-security-breach', tipo: 'bronze', nome: 'Security Breach', desc: { pt: 'Você abriu uma Caixa de Segurança da GATE.', en: 'You\'ve unlocked a GATE Security Crate.' }, pct: 9.51, exp: 244, rar: 'muito-raro', img: 'j0105d34', oculto: true },
      { ex: '956794-ancient-treasure', tipo: 'bronze', nome: 'Ancient Treasure', desc: { pt: 'Você abriu uma Caixa Rúnica.', en: 'You\'ve unlocked a Runic Crate' }, pct: 10.79, exp: 215, rar: 'muito-raro', img: '1313084e', oculto: true },
      { ex: '956795-it-only-gets-stranger-from-here', tipo: 'bronze', nome: 'It Only Gets Stranger From Here', desc: { pt: 'Você deu seus primeiros passos nos mundos além do nosso.', en: 'You\'ve taken your first steps into the worlds beyond our own.' }, pct: 42.24, exp: 55, rar: 'incomum', img: '354508be', oculto: true },
      { ex: '956796-the-composers', tipo: 'bronze', nome: 'The Composers', desc: { pt: 'Você se aventurou em Flathill e saiu com os olhos marejados.', en: 'You\'ve ventured to Flathill and it left you misty-eyed.' }, pct: 30.31, exp: 77, rar: 'raro', img: '77d74818', oculto: true },
      { ex: '956797-all-aboard', tipo: 'bronze', nome: 'All Aboard', desc: { pt: 'Você fez uma viagem a bordo do IS-0138.', en: 'You\'ve taken a journey aboard IS-0138.' }, pct: 23.32, exp: 100, rar: 'raro', img: '55b538dd', oculto: true },
      { ex: '956798-no-more-room-in-helmholtz', tipo: 'bronze', nome: 'No More Room In Helmholtz', desc: { pt: 'Você se demorou em meio a um apocalipse.', en: 'You\'ve lingered through an apocalypse.' }, pct: 19.34, exp: 120, rar: 'raro', img: '0010d85e', oculto: true },
      { ex: '956799-sleepwalking', tipo: 'bronze', nome: 'Sleepwalking', desc: { pt: 'Você vagou à deriva pelo Reino da Noite.', en: 'You\'ve drifted through the Night Realm.' }, pct: 16.22, exp: 143, rar: 'raro', img: '8j4j683d', oculto: true },
      { ex: '956800-field-of-dreams', tipo: 'bronze', nome: 'Field of Dreams', desc: { pt: 'Você saltou entre os cogumelos dos Mycofields.', en: 'You\'ve leapt through the mushrooms of the Mycofields.' }, pct: 16.29, exp: 143, rar: 'raro', img: 'ee8e175d', oculto: true },
      { ex: '956801-je-suis-perdu', tipo: 'bronze', nome: 'Je Suis Perdu!', desc: { pt: 'Você teve umas férias de esqui e tanto.', en: 'You\'ve had one heck of a ski holiday.' }, pct: 14.14, exp: 164, rar: 'muito-raro', img: '406018d0', oculto: true },
      { ex: '956802-dummy', tipo: 'bronze', nome: 'Dummy', desc: { pt: 'Você encontrou um velho amigo em um lugar familiar. Nada fora do Ordo por aqui.', en: 'You\'ve found a familiar friend in a familiar place. Nothing out of the Ordo here.' }, pct: 17.61, exp: 132, rar: 'raro', img: '6dgd5817', oculto: true },
      { ex: '956803-the-big-apple', tipo: 'bronze', nome: 'The Big Apple', desc: { pt: 'Você viu como vive a outra metade. Pelo jeito, não muito bem.', en: 'You\'ve seen how the other half lives. Turns out, not very well.' }, pct: 13.29, exp: 175, rar: 'muito-raro', img: 'b8386j16', oculto: true },
      { ex: '956804-a-lode-off-my-mind', tipo: 'bronze', nome: 'A Lode Off My Mind', desc: { pt: 'Você conheceu os moradores animados do vilarejo litorâneo de Canaan.', en: 'You\'ve met the excitable locals at the seaside hamlet of Canaan.' }, pct: 16.42, exp: 141, rar: 'raro', img: 'gj7j3645', oculto: true },
      { ex: '956805-flat-as-a-pancake', tipo: 'bronze', nome: 'Flat as a Pancake', desc: { pt: 'Você entrou por engano no reflexo de outra realidade.', en: 'You\'ve wandered into a reflection of another reality.' }, pct: 12.02, exp: 193, rar: 'muito-raro', img: 'dg8g13e8', oculto: true },
      { ex: '956806-no-running', tipo: 'bronze', nome: 'No Running', desc: { pt: 'Você se sentou na Cadeira Vermelha.', en: 'You\'ve sat in the Red Chair.' }, pct: 10.92, exp: 213, rar: 'muito-raro', img: 'j0105dg4', oculto: true },
      { ex: '956807-rumble-on-the-royal-range', tipo: 'bronze', nome: 'Rumble on the Royal Range', desc: { pt: 'Você concluiu um capítulo gelado de um videogame esquecido há muito tempo.', en: 'You\'ve completed a chilling chapter of a long lost video game.' }, pct: 12.08, exp: 192, rar: 'muito-raro', img: '1313086e', oculto: true },
      { ex: '956808-we-dont-talk-about-that-place', tipo: 'bronze', nome: 'We Don\'t Talk About That Place', desc: { pt: 'Você se viu em uma praia distante...', en: 'You found yourself upon some distant shore...' }, pct: 8.76, exp: 265, rar: 'muito-raro', img: '354508ge', oculto: true },
      { ex: '956809-the-village', tipo: 'bronze', nome: 'The Village', desc: { pt: 'Você tropeçou em algo alienígena e algo ancestral.', en: 'You\'ve stumbled across something alien, and something ancient.' }, pct: 13.97, exp: 166, rar: 'muito-raro', img: '77d74838', oculto: true },
      { ex: '956810-dawn-til-dusk', tipo: 'bronze', nome: 'Dawn Til\' Dusk', desc: { pt: 'Um por um, você faz o trabalho.', en: 'One by one, you get the job done.' }, pct: 14.61, exp: 159, rar: 'muito-raro', img: '406018dg', oculto: true },
      { ex: '956811-shadowgate', tipo: 'bronze', nome: 'Shadowgate', desc: { pt: 'Você descobriu algo sombrio nas florestas do norte.', en: 'You uncovered something dark in the forests of the north.' }, pct: 12.28, exp: 189, rar: 'muito-raro', img: '6dgd5811', oculto: true },
      { ex: '956812-coreverse', tipo: 'bronze', nome: 'Coreverse', desc: { pt: 'Você sobreviveu à Invasão da Anteverse 299 e restaurou um pouco de esperança numa caverna mal iluminada... Talvez ainda haja mais a explorar.', en: 'You survived the Encroachment of Anteverse 299, and restored a bit of hope in a dimly lit cavern... There may yet be more to explore.' }, pct: 13.78, exp: 169, rar: 'muito-raro', img: 'b8386j1d', oculto: true },
      { ex: '956813-the-inquisition', tipo: 'bronze', nome: 'The Inquisition', desc: { pt: 'Você atravessou salões antigos e levou um pedaço deles consigo.', en: 'You\'ve made your way through ancient halls and taken a piece of it with you.' }, pct: 12.24, exp: 190, rar: 'muito-raro', img: 'gj7j36b0', oculto: true },
      { ex: '956814-the-gardens', tipo: 'bronze', nome: 'The Gardens', desc: { pt: 'Você foi para, ou veio da, Ala Botânica, e não tem certeza de por que, nem de quando, isso aconteceu.', en: 'You went to, or from, the Botanical Wing, and you aren\'t really sure why, or when, it happened.' }, pct: 11.11, exp: 209, rar: 'muito-raro', img: 'dg8g137g', oculto: true },
      { ex: '956815-blind-luck', tipo: 'bronze', nome: 'Blind Luck', desc: { pt: 'Você desmontou uma das criações perdidas do Titereiro.', en: 'You\'ve dismantled one of the Puppeteer\'s wayward creations.' }, pct: 19.84, exp: 117, rar: 'raro', img: 'j0105d76', oculto: true },
      { ex: '956816-friendly-presence', tipo: 'bronze', nome: 'Friendly Presence', desc: { pt: 'Você recontém o IS-0091 (ou uma variante) por enquanto.', en: 'You\'ve re-contained IS-0091 - or a variant - for now.' }, pct: 10.24, exp: 227, rar: 'muito-raro', img: '131308b0', oculto: true },
      { ex: '956817-electric-dreams', tipo: 'prata', nome: 'Electric Dreams', desc: { pt: 'Você levou Kylie Muir até o fim, como prometido.', en: 'You took Kylie Muir to the end, as promised.' }, pct: 8.03, exp: 289, rar: 'muito-raro', img: '35450816', oculto: true, perdivel: 'atencao', como: { pt: 'O troféu pede o Hyper-Dense Neural Chip na Robotics da Hidroplanta e uma sequência longa. Comece assim que chegar lá.', en: 'The trophy needs the Hyper-Dense Neural Chip in the Hydroplant\'s Robotics section and a long sequence. Start as soon as you get there.' } },
      { ex: '956818-accidents-happen', tipo: 'bronze', nome: 'Accidents Happen', desc: { pt: 'Você não chegou ao banheiro a tempo.', en: 'You didn\'t make it to the toilet in time.' }, pct: 19.2, exp: 121, rar: 'raro', img: '77d748bd', oculto: true },
      { ex: '956819-coffee-in-the-coffee-hole', tipo: 'bronze', nome: 'Coffee in the Coffee Hole', desc: { pt: 'Você deu café a uma entidade que provavelmente não precisa de mais café.', en: 'You fed coffee to an entity that probably doesn\'t need more coffee.' }, pct: 12.78, exp: 182, rar: 'muito-raro', img: '55b53806', oculto: true }
    ],
    // Guia - Passo a passo (aba "Guia"): o jogo dividido em PARTES, na ordem do caminho. Cada parte abre uma página própria
    // (#jogo/ID/roteiro/ID-DA-PARTE), igual às Novidades: locais, trajeto e o decorrer do jogo falado.
    // Campos: id (curto, sem espaços), setor: 'Nome do setor/local', status: 'base' (mostra o aviso "Base"; apague quando a parte estiver completa),
    //         t: { pt, en }, d: { pt, en } (resumo do card e abertura da página).
    // Opcionais: img: 'imagens/capa.jpg' (capa larga), legCapa: { pt, en }, corpo: [ ...blocos: h, p, ul, destaque, dest, ir, img ]. Os títulos (h) viram o índice "Nesta parte".
    // A ordem do array é a ordem do caminho (Parte 01, 02, ...). Mude a ordem aqui se o trajeto for outro.
    roteiro: [
      { id: 'office-sector', setor: 'Office Sector', status: 'base', img: '',
        t: { pt: 'Começando: o Office Sector', en: 'Getting started: the Office Sector' },
        d: { pt: 'O primeiro dia, a emergência e a fenda: o ponto de partida da história.', en: 'The first day, the emergency and the rift: the story\'s starting point.' },
        legCapa: { pt: 'O Office Sector, onde tudo começa.', en: 'The Office Sector, where it all begins.' },
        corpo: [
          { h: { pt: 'Onde você está', en: 'Where you are' } },
          { p: { pt: 'A história começa em 1993, dentro da <strong>GATE</strong> (Garrick Advanced Technology Enterprises), um centro de pesquisa subterrâneo construído numa antiga mina de lítio. Você controla um cientista, e no primeiro dia uma emergência leva você ao <strong>Office Sector</strong>.',
                 en: 'The story starts in 1993, inside <strong>GATE</strong> (Garrick Advanced Technology Enterprises), an underground research facility built into a former lithium mine. You play a scientist, and on your first day an emergency sends you into the <strong>Office Sector</strong>.' } },
          { img: '', razao: '16 / 9', alt: { pt: 'Office Sector', en: 'Office Sector' },
            leg: { pt: 'Os corredores do Office Sector.', en: 'The Office Sector halls.' } },
          { h: { pt: 'O que acontece', en: 'What happens' } },
          { p: { pt: 'Uma fenda mata o Dr. Jaeger e criaturas hostis tomam os corredores. A partir daí a história avança, <strong>em linha reta</strong>, pelos setores do complexo.',
                 en: 'A rift kills Dr. Jaeger and hostile creatures overrun the halls. From there the story moves <strong>in a straight line</strong> through the facility\'s sectors.' } },
          { h: { pt: 'Como seguir adiante', en: 'How to move on' } },
          { p: { pt: 'Os setores se destravam fabricando tecnologia especializada. Enquanto isso, você cuida de fome, sede, cansaço, temperatura e radiação, e recolhe móveis e objetos para fabricar equipamentos.',
                 en: 'Sectors unlock by crafting specialized tech. Meanwhile, you manage hunger, thirst, fatigue, temperature and radiation, and salvage furniture and objects to craft gear.' } },
          { destaque: { pt: '<strong>Antes de avançar de setor, leia os perdíveis.</strong>', en: '<strong>Before moving on to the next sector, read the missables.</strong>' } },
          { ir: 'perdiveis', t: { pt: 'Ver os perdíveis →', en: 'See the missables →' } },
          { ir: 'jogabilidade', t: { pt: 'Ver a Jogabilidade →', en: 'See Gameplay →' } }
        ] },
      { id: 'manufacturing', setor: 'Manufacturing · Upper Shipping', status: 'base', img: '',
        t: { pt: 'Manufacturing: os corpos de uniforme', en: 'Manufacturing: the uniform bodies' },
        d: { pt: 'Os uniformes de Manufacturing vêm de corpos. Passar correndo é como se perde.', en: 'The Manufacturing uniforms come from bodies. Running past them is how they get missed.' },
        legCapa: { pt: 'Manufacturing, na área de Upper Shipping.', en: 'Manufacturing, in the Upper Shipping area.' },
        corpo: [
          { h: { pt: 'O que não perder', en: 'What not to miss' } },
          { p: { pt: 'Os uniformes de <strong>Manufacturing (Upper Shipping)</strong> vêm de corpos. Examine os corpos pelo caminho: passar correndo é como esse perdível escapa.',
                 en: 'The <strong>Manufacturing (Upper Shipping)</strong> uniforms come from bodies. Check the bodies along the way: running past them is how this missable slips away.' } },
          { img: '', razao: '16 / 9', alt: { pt: 'Upper Shipping', en: 'Upper Shipping' },
            leg: { pt: 'A área de Upper Shipping.', en: 'The Upper Shipping area.' } },
          { ir: 'perdiveis', t: { pt: 'Ver os perdíveis →', en: 'See the missables →' } }
        ] },
      { id: 'hidroplanta', setor: 'Hydroplant · Robotics', status: 'base', img: '',
        t: { pt: 'Hidroplanta: uniforme e a quest da Kylie', en: 'Hydroplant: uniform and Kylie\'s quest' },
        d: { pt: 'O uniforme do elevador subaquático e a sequência longa que pede para começar cedo.', en: 'The underwater elevator uniform and the long sequence that asks to be started early.' },
        legCapa: { pt: 'A Hidroplanta.', en: 'The Hydroplant.' },
        corpo: [
          { h: { pt: 'O uniforme do elevador subaquático', en: 'The underwater elevator uniform' } },
          { p: { pt: 'O uniforme da Hidroplanta (elevador subaquático) também vem de corpo. Passar correndo é como se perde.',
                 en: 'The Hydroplant uniform (underwater elevator) also comes from a body. Running past it is how it gets missed.' } },
          { img: '', razao: '21 / 9', alt: { pt: 'Hidroplanta', en: 'Hydroplant' },
            leg: { pt: 'O elevador subaquático da Hidroplanta.', en: 'The Hydroplant\'s underwater elevator.' } },
          { h: { pt: 'A quest da Kylie', en: 'Kylie\'s quest' } },
          { p: { pt: 'O troféu <strong>Sonhos Elétricos</strong> pede o <strong>Hyper-Dense Neural Chip</strong> na Robotics da Hidroplanta e uma sequência longa. Comece assim que chegar lá.',
                 en: 'The <strong>Electric Dreams</strong> trophy needs the <strong>Hyper-Dense Neural Chip</strong> in the Hydroplant\'s Robotics section and a long sequence. Start as soon as you get there.' } },
          { ir: 'perdiveis', t: { pt: 'Ver os perdíveis →', en: 'See the missables →' } }
        ] }
    ],
    // Mapas: { t: { pt, en }, d: { pt, en }, href: '...' }
    mapas: [   // EXEMPLO (formato { t, d, href }): troque pelo mapa real
      { t: { pt: 'Exemplo: nome do mapa', en: 'Example: map name' }, d: { pt: 'Descrição curta do mapa.', en: 'Short map description.' }, href: '#jogo/abiotic-factor/mapas' }
    ],
    // Jogabilidade (texto corrido, mesmos tipos de bloco da Visão geral): h, p, ul, destaque, ir, img + dest: { tag, t, d } (cartão curto e esticado dentro do texto)
    jogabilidade: [
      { img: '', razao: '21 / 9', alt: { pt: 'Vida dentro do complexo', en: 'Life inside the facility' },
        leg: { pt: 'Sobreviver, fabricar e construir dentro do complexo.', en: 'Surviving, crafting and building inside the facility.' } },

      { h: { pt: 'Jogar sozinho ou em grupo', en: 'Solo or in a group' } },
      { p: { pt: 'O jogo aceita de <strong>1 a 6 jogadores</strong>, sozinho ou online. Este guia conta a platina em <strong>uma única jogatina</strong>.',
             en: 'The game supports <strong>1 to 6 players</strong>, solo or online. This guide counts the platinum in <strong>a single playthrough</strong>.' } },
      { dest: { tag: { pt: 'Multiplayer', en: 'Multiplayer' },
                t: { pt: 'Co-op de 1 a 6 jogadores', en: 'Co-op for 1–6 players' },
                d: { pt: 'A platina cabe em uma jogatina.', en: 'The platinum fits in one playthrough.' } } },

      { h: { pt: 'Sobreviver e fabricar', en: 'Surviving and crafting' } },
      { p: { pt: 'O dia a dia é sobreviver e se preparar: fome, sede, cansaço, temperatura e radiação. Você recolhe móveis e objetos para fabricar armas e equipamentos improvisados e constrói bases para se proteger. À noite a energia pode cair e portais podem se abrir perto da base, trazendo ataques.',
             en: 'Day to day it is about surviving and getting ready: hunger, thirst, fatigue, temperature and radiation. You salvage furniture and objects to craft improvised weapons and gear, and build bases to protect yourself. At night the power can go out and portals can open near your base, bringing attacks.' } },
      { p: { pt: 'Os setores se destravam fabricando tecnologia especializada. Os [[anteverses|Anteverses]] são mundos alternativos acessados por portais, com recursos que só existem lá e que se renovam duas vezes por semana.',
             en: 'Sectors unlock by crafting specialized tech. The [[anteverses|Anteverses]] are alternate worlds reached through portals, with resources found only there that reset twice a week.' } },
      { dest: { tag: { pt: 'Ritmo', en: 'Pace' },
                t: { pt: 'Volume e paciência, não habilidade', en: 'Volume and patience, not skill' },
                d: { pt: 'Pede tempo, não reflexo: calcule de 60 a 100 horas.', en: 'It asks for time, not reflexes: budget 60 to 100 hours.' } } },

      { img: '', razao: '16 / 9', alt: { pt: 'Combate', en: 'Combat' },
        leg: { pt: 'Armas, escudo e redes em ação.', en: 'Weapons, shield and nets in action.' } },

      { h: { pt: 'Combate', en: 'Combat' } },
      { p: { pt: 'Há quatro tipos de equipamento ofensivo e defensivo:',
             en: 'There are four kinds of offensive and defensive gear:' } },
      { ul: [
        { pt: '<strong>Corpo a corpo:</strong> armas contundentes, cortantes e pesadas.', en: '<strong>Melee:</strong> blunt, sharp and heavy weapons.' },
        { pt: '<strong>Distância:</strong> armas de longo alcance.', en: '<strong>Ranged:</strong> long-range weapons.' },
        { pt: '<strong>Arremesso:</strong> redes, arremessadas ou disparadas pelo Net Launcher.', en: '<strong>Throwable:</strong> nets, thrown or fired from the Net Launcher.' },
        { pt: '<strong>Escudo:</strong> bloqueia dano.', en: '<strong>Shield:</strong> blocks damage.' }
      ] },
      { dest: { tag: { pt: 'Combate', en: 'Combat' },
                t: { pt: 'Escudo exige arma não pesada', en: 'Shield needs a non-heavy weapon' },
                d: { pt: 'Funciona junto com uma arma corpo a corpo não pesada.', en: 'Works alongside a non-heavy melee weapon.' } } },
      { ir: 'equipamentos', t: { pt: 'Ver os equipamentos →', en: 'See the equipment →' } },

      { h: { pt: 'Durabilidade, reparo e proteção', en: 'Durability, repair and protection' } },
      { p: { pt: 'Armas e armaduras têm durabilidade. Cada peça de armadura também tem peso, e algumas dão resistência a calor ou frio.',
             en: 'Weapons and armor have durability. Each armor piece also has weight, and some grant heat or cold resistance.' } },
      { dest: { tag: { pt: 'Manutenção', en: 'Upkeep' },
                t: { pt: 'Reparo com sucata', en: 'Repair with scrap' },
                d: { pt: 'O Pipe Club usa Metal Scrap; a Hardlight Sledge usa Arcane Scrap.', en: 'The Pipe Club uses Metal Scrap; the Hardlight Sledge uses Arcane Scrap.' } } },
      { dest: { tag: { pt: 'Proteção', en: 'Protection' },
                t: { pt: 'Bônus de conjunto', en: 'Set bonus' },
                d: { pt: 'Peças do mesmo conjunto, metade ou completo, ativam um bônus.', en: 'Pieces of the same set, half or full, activate a bonus.' } } },
      { ir: 'armaduras', t: { pt: 'Ver as armaduras →', en: 'See the armor →' } },

      { h: { pt: 'O que pede paciência', en: 'What takes patience' } },
      { p: { pt: 'A pesca envolve RNG, e o grind do jogo é leve. O ponto que merece atenção de verdade são os perdíveis.',
             en: 'Fishing involves RNG, and the game\'s grind is light. What really deserves attention are the missables.' } },
      { dest: { tag: { pt: 'RNG', en: 'RNG' },
                t: { pt: 'Pesca e grind leve', en: 'Fishing and light grind' },
                d: { pt: 'A pesca depende de sorte; o resto é tempo.', en: 'Fishing depends on luck; the rest is time.' } } },
      { ir: 'perdiveis', t: { pt: 'Ver os perdíveis →', en: 'See the missables →' } }
    ],
    // Bestiário: cada criatura pode ser um cartão simples ({ tipo, nome, solta, nota }) ou uma FICHA DE CAMPO completa, que abre ao toque.
    // Campos da ficha (todos opcionais, exceto tipo e nome):
    //   tipo: 'criatura'|'humano'|'robo'   nome: 'Nome'   id: 'curto-sem-espacos'   codigo: 'Codinome ou título' (linha pequena sob o nome)
    //   resumo: { pt, en }                 locais: ['Setor', ...] (etiquetas do cartão fechado)
    //   vida: [ { rot: { pt, en }, v: 120 }, ... ]   barras por parte do corpo (a maior define a escala); some se não houver
    //   stats: [ { rot: { pt, en }, v: { pt, en } | 'texto' }, ... ]   números rápidos (dano, origem, reaparição...)
    //   alerta: { t: { pt, en }, ir: 'perdiveis' }   aviso em destaque que liga a outra página do guia
    //   info: [ { k: 'onde'|'comportamento'|'ataques'|'fracos'|'enfrentar'|'detalhes', itens: [ { pt, en }, ... ] }, ... ]   uma aba por item
    //   solta: [ 'Item' | { n: 'Item', p: '100%' } ]   coleta: [ ... ]   soltaNota: { pt, en }   (a aba "Drops" aparece sozinha)
    //   fontes: [ { n: 'Nome da fonte', u: 'https://...' } ]
    //   img: 'imagens/nome.png'   retrato da criatura. Use PNG com fundo transparente: ele fica sobre o brilho da cor do tipo. Vazio ('') mostra a moldura vazia. Mantenha o ícone/moldura se o arquivo não carregar.
    bestiario: [
      { id: 'leyak', tipo: 'criatura', nome: 'Leyak', codigo: 'IS-0091',
        img: '',
        resumo: { pt: 'Entidade da Anteverse 33 que persegue um jogador por vez e some quando é encarada.', en: 'An entity from Anteverse 33 that hunts one player at a time and vanishes when stared at.' },
        locais: ['Cascade Laboratories'],
        stats: [
          { rot: { pt: 'Dano corpo a corpo', en: 'Melee damage' }, v: { pt: '100 · Cortante', en: '100 · Sharp' } },
          { rot: { pt: 'Reaparece', en: 'Respawns' }, v: { pt: 'a cada 7,5 h no jogo (15 min reais)', en: 'every 7.5 in-game hours (15 real minutes)' } },
          { rot: { pt: 'Origem', en: 'Origin' }, v: 'Anteverse 33' }
        ],
        info: [
          { k: 'onde', itens: [
            { pt: 'Aparece depois que você entra em XR Containment, em Cascade Laboratories.', en: 'Appears after you enter XR Containment in Cascade Laboratories.' },
            { pt: 'Não aparece nos Mundos de Portal (exceto Rise e The Pool Room) nem no Security Sector.', en: 'Cannot appear in Portal Worlds (except Rise and The Pool Room) or in the Security Sector.' }
          ] },
          { k: 'ataques', itens: [
            { pt: 'O ataque causa 100 de dano cortante e ignora a armadura.', en: 'Her attack deals 100 sharp damage and ignores armor.' },
            { pt: 'Ataca se você chega perto demais e persegue quem corre.', en: 'She attacks if you get too close and chases players who run.' },
            { pt: 'Mira um jogador por vez, e só ele consegue vê-la.', en: 'She targets one player at a time, and only that player can see her.' }
          ] },
          { k: 'fracos', itens: [
            { pt: 'Só se move quando você não a vê em linha reta ou está além de certa distância.', en: 'She only moves when not in your direct line of sight or beyond a certain distance.' },
            { pt: 'Some depois de 10 a 30 segundos sendo observada sem obstáculos.', en: 'She vanishes after about 10 to 30 seconds of unobstructed observation.' },
            { pt: 'Não atravessa paredes, mas passa por portas e itens colocados.', en: 'She cannot pass through walls, but can pass through doors and deployables.' },
            { pt: 'Dano de campo de raios X a afeta; meios convencionais não a ferem.', en: 'X-Ray Field damage affects her; conventional means cannot harm her.' }
          ] },
          { k: 'enfrentar', itens: [
            { pt: 'Afaste-a com X-Ray Tower, X-Ray Lamp ou as variantes OX.', en: 'Repel her with an X-Ray Tower, X-Ray Lamp or the OX variants.' },
            { pt: 'Janelas quebráveis parecem contar como "encarar"; portas, janelas inquebráveis e cercas, em geral, não.', en: 'Breakable windows seem to count as staring; doors, unbreakable windows and fences generally do not.' },
            { pt: 'O Sensory Companion ou o pet Leyak Pest protegem bastante contra ela.', en: 'Equipping the Sensory Companion or the Leyak Pest pet mostly protects against her.' }
          ] }
        ],
        solta: ['Leyak Essence'],
        soltaNota: { pt: 'Com a Containment Unit: 91 abastecida (bastam dois Greyeb, que duram uma semana no jogo), a Leyak Essence cai da calha toda vez que chega às 6h.', en: 'With Containment Unit: 91 fueled (two Greyeb are enough, lasting one in-game week), the Leyak Essence drops from the chute every time it hits 6 AM.' },
        fontes: [ { n: 'Wiki do jogo', u: 'https://abioticfactor.wiki.gg/wiki/Leyak' }, { n: 'Game Rant', u: 'https://gamerant.com/abiotic-factor-all-enemies-types-strengths-weaknesses-what-they-do/' } ] },
      { id: 'lab-rat', tipo: 'humano', nome: 'Lab Rat', codigo: 'Order: Inquisitor',
        img: '',
        resumo: { pt: 'Soldado neutro da Order que prefere fugir a lutar. Um deles precisa ser capturado vivo para o troféu Rato de Laboratório.', en: 'A neutral Order soldier that would rather flee than fight. One must be captured alive for the Lab Rat trophy.' },
        locais: ['Facilities', 'Office Sector'],
        vida: [
          { rot: { pt: 'Cabeça', en: 'Head' }, v: 120 }, { rot: { pt: 'Tronco', en: 'Torso' }, v: 200 },
          { rot: { pt: 'Braços', en: 'Arms' }, v: 150 }, { rot: { pt: 'Pernas', en: 'Legs' }, v: 175 }
        ],
        stats: [
          { rot: { pt: 'Dano corpo a corpo', en: 'Melee damage' }, v: { pt: '65 · Contundente', en: '65 · Blunt' } },
          { rot: { pt: 'Radiação', en: 'Radiation' }, v: { pt: '1 r/s em raio pequeno', en: '1 r/sec in a small radius' } }
        ],
        alerta: { t: { pt: 'Perdível: construa o Net Launcher antes de matar todos os Lab Rats.', en: 'Missable: build the Net Launcher before you kill all the Lab Rats.' }, ir: 'perdiveis' },
        info: [
          { k: 'onde', itens: [
            { pt: 'Encontrado nas Facilities; aparece mais conforme você avança, principalmente no Office Sector.', en: 'Found in the Facilities; it appears more as you progress, mostly in the Office Sector.' },
            { pt: 'Patrulha áreas das Facilities e usa scanners para procurar ameaças.', en: 'Patrols Facilities areas and uses scanners to look for threats.' }
          ] },
          { k: 'comportamento', itens: [
            { pt: 'Costuma fugir em vez de lutar, mas às vezes revida.', en: 'Usually flees instead of fighting, but sometimes fights back.' },
            { pt: 'Ataca inimigos que não são da Order em autodefesa.', en: 'Attacks non-Order enemies in self-defense.' },
            { pt: 'Tem audição melhor que a de outros humanos e pode virar hostil se ouvir você.', en: 'Has better hearing than other humans and may turn hostile if it hears you.' }
          ] },
          { k: 'ataques', itens: [
            { pt: 'Golpe corpo a corpo de 65 de dano contundente.', en: 'Melee strike for 65 blunt damage.' },
            { pt: 'Às vezes dá uma única pancada forte, com muito empurrão.', en: 'Occasionally throws a single powerful swipe with heavy knockback.' },
            { pt: 'Emite radiação em um raio pequeno; ficar exposto demais dá o status Radiação.', en: 'Emits radiation in a small radius; staying exposed too long gives you the Radiation status.' }
          ] },
          { k: 'enfrentar', itens: [
            { pt: 'Chegue por trás, em silêncio, com uma arma forte. Ele só luta corpo a corpo, então atacar de longe também funciona.', en: 'Sneak up from behind with a strong weapon. It only fights in melee, so attacking from range also works.' },
            { pt: 'Se ele fugir, siga as partículas de radiação e o rastro de itens que deixa.', en: 'If it flees, follow the radiation particles and the item trail it leaves.' },
            { pt: 'Proteja-se da radiação ao lutar de perto.', en: 'Protect yourself from radiation when fighting up close.' },
            { pt: 'Atordoado pelo Net Launcher e morto com golpe contundente, solta Rat Scanner e Rat Pack (100%).', en: 'Stunned by the Net Launcher and killed with a blunt hit, it drops a Rat Scanner and a Rat Pack (100%).' },
            { pt: 'Armas contundentes com efeito de fogo são menos confiáveis nesse caso: ele costuma morrer pelo dano de fogo, e não pelo contundente.', en: 'Blunt weapons with fire effects are less reliable here: it often dies from the fire damage instead of the blunt damage.' }
          ] }
        ],
        solta: [ { n: 'Rat Scanner', p: '100%' }, { n: 'Rat Pack', p: '100% · Net Launcher' }, { n: 'Ornate Key', p: '3%' } ],
        coleta: [ { n: 'Human Skull', p: '100%' }, { n: 'Human Arm (Military)', p: '50%' }, { n: 'Rat Suit', p: '7,5%' }, 'Bio Scrap' ],
        soltaNota: { pt: 'Em fuga, ele também larga 1 sucata (Tech, Metal, Glass, Plastic ou Cloth) pelo caminho. Há drops que dependem do progresso, como Lodestone Fragment, Hexwood e Arcane Scrap.', en: 'While fleeing, it also drops 1 scrap (Tech, Metal, Glass, Plastic or Cloth) behind it. Some drops depend on progress, such as Lodestone Fragment, Hexwood and Arcane Scrap.' },
        fontes: [ { n: 'Wiki do jogo', u: 'https://abioticfactor.wiki.gg/wiki/Lab_Rat' }, { n: 'Game Rant', u: 'https://gamerant.com/abiotic-factor-all-enemies-types-strengths-weaknesses-what-they-do/' } ] },
      { id: 'containment-bot', tipo: 'robo', nome: 'Containment Bot', codigo: 'G.A.I.A.',
        img: '',
        resumo: { pt: 'Variante mais forte do Security Bot: dorme no pod de carga de dia, patrulha à noite e tenta capturar em vez de matar.', en: 'A stronger Security Bot variant: sleeps in its charging pod by day, patrols at night and tries to capture rather than kill.' },
        locais: ['Cascade Laboratories'],
        vida: [
          { rot: { pt: 'Cabeça', en: 'Head' }, v: 400 }, { rot: { pt: 'Tronco', en: 'Torso' }, v: 400 },
          { rot: { pt: 'Braços', en: 'Arms' }, v: 400 }, { rot: { pt: 'Pernas', en: 'Legs' }, v: 400 }
        ],
        stats: [
          { rot: { pt: 'Dano corpo a corpo', en: 'Melee damage' }, v: { pt: '40 · Contundente', en: '40 · Blunt' } },
          { rot: { pt: 'Nome completo', en: 'Full name' }, v: 'GATE Automated Immurement Automaton' },
          { rot: { pt: 'Movimento', en: 'Movement' }, v: { pt: 'corre em velocidade maior', en: 'sprints at increased speed' } }
        ],
        info: [
          { k: 'onde', itens: [
            { pt: 'Cascade Laboratories, logo antes da porta da Vacuum Chamber que leva ao Security Sector.', en: 'Cascade Laboratories, right before the Vacuum Chamber Door leading to the Security Sector.' },
            { pt: 'Wildlife Pens Lobby, perto do bonde, no Aquarium.', en: 'Wildlife Pens Lobby, by the tram in the Aquarium.' },
            { pt: 'Adjustment Wing.', en: 'Adjustment Wing.' },
            { pt: 'Containment Block Dirac, no posto de segurança antes do Containment Block Anning.', en: 'Containment Block Dirac, at the security checkpoint before Containment Block Anning.' }
          ] },
          { k: 'comportamento', itens: [
            { pt: 'Fica no pod de carga durante o dia e patrulha à noite.', en: 'Stays in its charging pod by day and patrols at night.' },
            { pt: 'Ativa quando algo chega perto do pod, marcado por listras roxas de perigo.', en: 'Activates when anything comes near its pod, marked by purple hazard stripes.' },
            { pt: 'É hostil a jogadores, soldados da Order e objetos colocados perto da rota de patrulha.', en: 'Hostile to players, Order soldiers and player-placed objects near its patrol path.' },
            { pt: 'Tenta capturar em vez de matar: prende o alvo numa cela.', en: 'Tries to capture targets rather than kill them, imprisoning them in a holding cell.' }
          ] },
          { k: 'ataques', itens: [
            { pt: '<strong>Thunder Fist:</strong> golpe corpo a corpo que atordoa quem está com escudo.', en: '<strong>Thunder Fist:</strong> a melee swing that stuns a shielded player.' },
            { pt: '<strong>Capture Target:</strong> agarra o alvo, impede usar itens e armas e sempre quebra uma perna (se não houver uma já quebrada).', en: '<strong>Capture Target:</strong> grabs the target, blocks item and weapon use, and always breaks a leg (unless one is already broken).' },
            { pt: 'Não consegue agarrar entidades não humanas: contra elas, ataca até matar.', en: 'Cannot grab non-human entities, so it attacks them until they die.' }
          ] },
          { k: 'fracos', itens: [
            { pt: 'Armas de alcance estendido, como lanças.', en: 'Extended-reach weapons, such as spears.' },
            { pt: 'Sofre menos dano de Door Bash.', en: 'Less affected by Door Bash damage.' },
            { pt: 'Zerar a vida do tronco não o mata: os golpes seguintes vão para a cabeça. Só pelo tronco, são na prática 800 de vida; acertar o olho (a cabeça) é a alternativa.', en: 'Torso reaching 0 HP does not kill it: further hits go to the head pool. Torso-only, that is effectively 800 HP; hitting the eye (its head) is the alternative.' }
          ] },
          { k: 'enfrentar', itens: [
            { pt: 'Electro-Thrower e Electron Grenade matam rápido.', en: 'The Electro-Thrower and Electron Grenade kill quickly.' },
            { pt: 'Shock Traps e Tesla Coils perto do pod são um método de baixo risco; o Glow Shard reduz o risco dos Tesla Coils.', en: 'Shock Traps and Tesla Coils near a pod are a relatively low-risk method; the Glow Shard reduces the risk from Tesla Coils.' },
            { pt: 'Com o Night Pass, ele ignora você e dá para passar pelos pods com segurança.', en: 'With the Night Pass it ignores you, letting you pass the pods safely.' },
            { pt: 'Se for capturado, causar muito dano para desequilibrá-lo faz ele soltar você.', en: 'If you are captured, staggering it with significant damage makes it drop you.' }
          ] }
        ],
        solta: [ { n: 'Jailbroken CPU', p: '100%' }, { n: 'Vit', p: '100%' }, { n: 'Fizz Bang', p: '100%' }, { n: 'Rootbear', p: '100%' }, { n: 'Pop Snarkle', p: '100%' }, { n: 'Kizz Cola', p: '100%' } ],
        coleta: [ { n: 'Metal Scrap', p: '×10' }, { n: 'Tech Scrap', p: '×5' }, { n: 'Glass Scrap', p: '×1' }, { n: 'Coil', p: '×1' }, { n: 'Robot Oil', p: '100%' } ],
        soltaNota: { pt: 'Na coleta, as quantidades são garantidas e há 50% de chance de um pouco mais.', en: 'On harvest, the amounts are guaranteed and there is a 50% chance of a few more.' },
        fontes: [ { n: 'Wiki do jogo', u: 'https://abioticfactor.wiki.gg/wiki/Containment_Bot' }, { n: 'Game Rant', u: 'https://gamerant.com/abiotic-factor-all-enemies-types-strengths-weaknesses-what-they-do/' } ] }
    ],
    // Personagens: cada pessoa pode ser um cartão simples ({ nome, papel, nota }) ou uma FICHA DE PESSOA (retrato em pé à direita, duas por fileira).
    // Campos da ficha (todos opcionais, exceto nome):
    //   id: 'curto-sem-espacos'   nome: 'Nome'   funcao: { pt, en } (cargo, linha pequena acima do nome)
    //   resumo: { pt, en }   tags: [ { pt, en }, ... ] (etiquetas curtas)   img: 'imagens/nome.png' (retrato em pé; PNG transparente fica melhor; '' mostra a moldura vazia)
    //   dados: [ { rot: { pt, en }, v: { pt, en } | 'texto' }, ... ]   linhas rápidas (onde encontrar, o que oferece...)
    //   alerta: { t: { pt, en }, ir: 'dicas' }   linha em destaque que liga a outra página do guia
    //   mais: [ { pt, en }, ... ]   detalhes que abrem em "Mais detalhes" (curiosidades, trocas, falas)   spoiler: true (marca "Spoiler" nos detalhes)
    //   fontes: [ { n: 'Nome da fonte', u: 'https://...' } ]
    personagens: [
      { id: 'gaz', nome: 'Gaz', funcao: { pt: 'Recepcionista', en: 'Receptionist' },
        img: '',
        resumo: { pt: 'Encontrado encolhido em um armário de suprimentos do Office Sector, assustado e sem treino para nada daquilo: "Eu não fui treinado para isso!"', en: 'Found cowering in an Office Sector supply closet, scared and untrained for any of this: "I wasn\'t trained for this!"' },
        tags: [ { pt: 'Sobrevivente', en: 'Survivor' } ],
        dados: [
          { rot: { pt: 'Onde', en: 'Where' }, v: { pt: 'Office Sector, armário de suprimentos', en: 'Office Sector, supply closet' } },
          { rot: { pt: 'Visual', en: 'Look' }, v: { pt: 'careca, barba preta, camisa de banana e óculos quebrados', en: 'bald, black beard, banana-print shirt and broken glasses' } }
        ],
        mais: [
          { pt: 'Ao se despedir, aconselha: "Se esconda em algum lugar, mas não aqui, certo? Feche a porta!"', en: 'As you leave, he advises: "Hide somewhere, but not here, alright? Close the door!"' },
          { pt: 'Curiosidade: o nome Gaz, lido de trás para frente, é "Zag", o diretor de design do jogo. Na versão 1.0, o personagem foi atualizado para ficar mais parecido com ele.', en: 'Trivia: Gaz spelled backwards is "Zag", the game\'s design director. In version 1.0 the character was updated to look more like him.' }
        ],
        fontes: [ { n: 'Wiki do jogo', u: 'https://abioticfactor.wiki.gg/wiki/Gaz' } ] },
      { id: 'warren-bunning', nome: 'Warren Bunning', funcao: { pt: 'Oficial de segurança', en: 'Security Officer' },
        img: '',
        resumo: { pt: 'Ex-segurança de shopping de Sydney que virou especialista em segurança subterrânea. Esperava bom salário e trabalho tranquilo, mas a mudança para Cascade "não saiu como esperado".', en: 'A Sydney ex-mall cop turned subterranean security specialist. He expected good pay and an easy job, but the move to Cascade "hasn\'t gone quite as expected".' },
        tags: [ { pt: 'Comerciante', en: 'Trader' }, { pt: 'Desde o início', en: 'From the start' } ],
        dados: [
          { rot: { pt: 'Onde', en: 'Where' }, v: { pt: 'quiosque de segurança da praça do Office Sector', en: 'Office Sector plaza security kiosk' } },
          { rot: { pt: 'Oferece', en: 'Offers' }, v: { pt: 'trocas de itens, parado no quiosque', en: 'item trades, stationed at the kiosk' } }
        ],
        mais: [
          { pt: 'Na primeira conversa, diz que os elevadores pararam e manda você para o túnel principal em Manufacturing, Nível 2. Ele avisa que fica onde está.', en: 'In the first conversation he says the elevators are dead and sends you to the main tunnel in Manufacturing, Level 2. He says he will stay where he is.' },
          { pt: '<strong>Troca:</strong> Rootbear por Canned Peas (liberada ao falar com ele).', en: '<strong>Trade:</strong> Rootbear for Canned Peas (unlocked by talking to him).' },
          { pt: '<strong>Troca:</strong> Computation Brick por Light Gun Repair Kit (liberada ao conhecer The Blacksmith).', en: '<strong>Trade:</strong> Computation Brick for Light Gun Repair Kit (unlocked by meeting The Blacksmith).' },
          { pt: '<strong>Troca:</strong> Night Essence por Magnetic Alloy (liberada ao abrir o Gate 2 no Security Sector).', en: '<strong>Trade:</strong> Night Essence for Magnetic Alloy (unlocked by opening Gate 2 in the Security Sector).' },
          { pt: '<strong>Troca:</strong> Raw Antefish Filet por Stapler (liberada ao passar pelo portal de saída do Far Garden).', en: '<strong>Trade:</strong> Raw Antefish Filet for Stapler (unlocked by going through the Far Garden exit portal).' },
          { pt: '<strong>Troca:</strong> Peccary Skull por Employee Locator.', en: '<strong>Trade:</strong> Peccary Skull for Employee Locator.' },
          { pt: 'Segundo a wiki, outros funcionários da GATE o chamam de incompetente.', en: 'According to the wiki, other GATE staff call him incompetent.' }
        ],
        fontes: [ { n: 'Wiki do jogo', u: 'https://abioticfactor.wiki.gg/wiki/Warren_Bunning' } ] },
      { id: 'kylie-muir', nome: 'Kylie Muir', funcao: { pt: 'Sujeita de experimento', en: 'Experimental Subject' },
        img: '',
        resumo: { pt: 'Paciente tratada de câncer linfático antes de ser recrutada pelo Dr. Stewart Wakeman. Curiosa, grata e carinhosa, chama você de "amigo".', en: 'A patient treated for lymphatic cancer before Dr. Stewart Wakeman recruited her. Curious, grateful and caring, she calls you "friend".' },
        tags: [ { pt: 'Missão', en: 'Quest' } ],
        dados: [
          { rot: { pt: 'Onde', en: 'Where' }, v: { pt: 'cérebro na seção subaquática de Robotics, na Hidroplanta', en: 'brain in the underwater Robotics sub-section of the Hydroplant' } },
          { rot: { pt: 'Oferece', en: 'Offers' }, v: { pt: 'missão de mover a consciência dela', en: 'quest to move her consciousness' } }
        ],
        alerta: { t: { pt: 'A missão começa cedo: veja a dica da Kylie.', en: 'The quest starts early: see the Kylie tip.' }, ir: 'dicas' },
        spoiler: true,
        mais: [
          { pt: 'Na Hidroplanta, é preciso um Hyper-Dense Neural Chip e reparar o Neural Transference Terminal para passar a consciência dela ao dispositivo de armazenamento, o Kylie Trinket.', en: 'In the Hydroplant you need a Hyper-Dense Neural Chip and to repair the Neural Transference Terminal to move her consciousness to the storage device, the Kylie Trinket.' },
          { pt: 'Ela pode ser um Trinket ou evoluir para um Shield Generator.', en: 'She can be a Trinket or upgrade into a Shield Generator.' },
          { pt: 'Na Botanical Wing, é colocada num Defense Bot modificado (exige entrar no "futuro", Divarication) e depois ajuda em Albatross com seu morteiro e foguetes.', en: 'In the Botanical Wing she is uploaded into a modified Defense Bot (requires entering the "future", Divarication) and later helps at Albatross with her mortar and rockets.' },
          { pt: 'O morteiro causa 200 de dano com 20 s de recarga; o ataque à distância causa 100.', en: 'Her mortar deals 200 damage with a 20 s cooldown; her ranged attack deals 100.' }
        ],
        fontes: [ { n: 'Wiki do jogo', u: 'https://abioticfactor.wiki.gg/wiki/Kylie_Muir' } ] }
    ],
    // Equipamentos: { cat: 'melee'|'ranged'|'throw'|'shield', nome: '...', dano: número|null, nota: { pt, en } }
    equipamentos: [
      { cat: 'melee', nome: 'Basic Baton', dano: 8, tipo: 'Blunt', dur: 15, peso: 3, reparo: 'Metal Scrap ×1' },
      { cat: 'melee', nome: 'Kitchen Knife', dano: 3, tipo: 'Sharp', dur: 20, peso: 1, reparo: 'Metal Scrap ×1' },
      { cat: 'melee', nome: 'Peccary Club', dano: 40, tipo: 'Heavy Sharp', dur: 15, peso: 4.5, reparo: 'Peccary Skull ×1' },
      { cat: 'ranged', nome: 'Security Pistol', dano: 26, tipo: 'Overworld', municao: '9mm Ammo', cap: 8, dur: 35, peso: 3, reparo: 'Light Gun Repair Kit ×1' },
      { cat: 'ranged', nome: 'Magma Skink', dano: 180, tipo: 'Science', dur: 60, peso: 10, reparo: 'Aloe ×1' },
      { cat: 'ammo', nome: '9mm Ammo', peso: 0.02 },
      { cat: 'ammo', nome: 'Makeshift Bolt', peso: 0.03 },
      { cat: 'ammo', nome: '12g Buckshot', peso: 0.03 },
      { cat: 'ammo', nome: '.357 Magnum Ammo', peso: 0.04 },
      { cat: 'ammo', nome: '.308 Ammo', peso: 0.06 },
      { cat: 'ammo', nome: 'Rebar Bolt', peso: 0.07 },
      { cat: 'ammo', nome: 'Rocket', peso: 1 },
      { cat: 'throw', nome: 'Throwing Dart', dano: 9, peso: 0.05 },
      { cat: 'throw', nome: 'Boom Bait', dano: 25, peso: 1 },
      { cat: 'throw', nome: 'Mugnade', dano: 350, peso: 0.35 },
      { cat: 'throw', nome: 'Frag Grenade', dano: 400, peso: 0.2 },
      { cat: 'throw', nome: 'Electron Grenade', dano: 75, peso: 0.2 },
      { cat: 'throw', nome: 'Megaton Flask', dano: 600, peso: 0.23 },
      { cat: 'shield', nome: 'Heater Shield', dur: 36, peso: 3, reparo: 'Tech Scrap ×1' },
      { cat: 'shield', nome: 'Kite Shield', dur: 40, peso: 5, reparo: 'Reinforced Wooden Plank ×1' },
      { cat: 'shield', nome: 'Riot Shield', dur: 40, peso: 10, reparo: 'Military Electronics ×1' },
      { cat: 'shield', nome: 'Lodestone Shield', dur: 46, peso: 3, reparo: 'Tech Scrap ×1' }
    ],
    // Armaduras: { slot: 'headlamp'|'head'|'arms'|'chest', nome: '...', arm, dur, peso, res: { pt, en }, nota: { pt, en } }
    armaduras: [
      { slot: 'head', nome: 'Hyperion Helm', arm: 26, frio: 1, dur: 45, peso: 7 },
      { slot: 'head', nome: 'Renovo Helmet', arm: 24, frio: 1, dur: 47, peso: 3.5 },
      { slot: 'head', nome: 'Yeti Helmet', arm: 10, frio: 2, dur: 25, peso: 10.5 },
      { slot: 'head', nome: 'Strange Top Hat', arm: 0, peso: 1 },
      { slot: 'arms', nome: 'Mountaineer Armguards', arm: 24, frio: 1, dur: 20, peso: 20 },
      { slot: 'arms', nome: 'F.O.R.G.E. Pauldrons', arm: 10, calor: 1, dur: 22, peso: 10 },
      { slot: 'chest', nome: 'Scarab Plackart', arm: 20, frio: 1, dur: 45, peso: 7, reparo: 'Metal Scrap' },
      { slot: 'chest', nome: 'Puffy Coat', arm: 4, frio: 2, dur: 30, peso: 3, reparo: 'Metal Scrap' },
      { slot: 'chest', nome: 'Ionized Coreplate', arm: 26, frio: 1, calor: 1, dur: 80, peso: 8, reparo: 'Transcendium' },
      { slot: 'chest', nome: 'Hyperion Hauberk', arm: 26, frio: 1, calor: 1, dur: 55, peso: 7, reparo: 'Metal Scrap' },
      { slot: 'legs', nome: 'Mud Waders', arm: 1, frio: 1, dur: 100, peso: 2, reparo: 'Metal Scrap' },
      { slot: 'legs', nome: 'Snow Pants', arm: 6, frio: 2, dur: 20, peso: 4.5, reparo: 'Metal Scrap' },
      { slot: 'legs', nome: 'Carapace Sabatons', arm: 18, dur: 25, peso: 7, reparo: 'Metal Scrap' },
      { slot: 'legs', nome: 'Hyperion Legplates', arm: 26, dur: 42, peso: 7, reparo: 'Metal Scrap' },
      { slot: 'legs', nome: 'Cerenkov Legplates', arm: 26, dur: 70, peso: 8, reparo: 'Transcendium' },
      { slot: 'backpack', nome: 'Makeshift Backpack', slots: 3, reducao: 10, peso: 2 },
      { slot: 'backpack', nome: 'Basic Backpack', slots: 6, reducao: 15, peso: 3 },
      { slot: 'backpack', nome: 'Military Pack', slots: 12, reducao: 20, peso: 4 },
      { slot: 'backpack', nome: 'Alpine Pack', slots: 18, reducao: 33, frio: 1, peso: 4 },
      { slot: 'backpack', nome: 'Jetpack', slots: 18, reducao: 28, peso: 10 },
      { slot: 'suit', nome: 'Rat Suit', peso: 4 },
      { slot: 'suit', nome: 'Fire Proximity Suit', calor: 3, peso: 6 },
      { slot: 'suit', nome: 'Excursion Suit', frio: 1, calor: 1, peso: 20 },
      { slot: 'trinket', nome: 'Fog Lantern', peso: 1 },
      { slot: 'trinket', nome: 'Glow Shard', peso: 1 },
      { slot: 'trinket', nome: 'Employee Locator', peso: 1 },
      { slot: 'trinket', nome: 'Pet Rock', peso: 1 },
      { slot: 'trinket', nome: 'Night Pass', peso: 1, efeito: { pt: 'Com ele equipado, o Containment Bot ignora você.', en: 'With it equipped, the Containment Bot ignores you.' } },
      { slot: 'trinket', nome: 'Sensory Companion', peso: 1, efeito: { pt: 'Dá consciência em todas as direções.', en: 'Grants awareness in all directions.' } },
      { slot: 'watch', nome: 'Communicator Watch', peso: 0.4, efeito: { pt: 'Função de walkie-talkie.', en: 'Walkie-talkie function.' } },
      { slot: 'watch', nome: 'Geiger Watch', peso: 0.4, efeito: { pt: 'Mostra a leitura de radiação ao ser consultado.', en: 'Shows a radiation reading when consulted.' } },
      { slot: 'watch', nome: 'Stealth Watch', peso: 0.4, efeito: { pt: 'Invisibilidade enquanto consultado, limitada pela bateria.', en: 'Invisibility while consulted, limited by battery.' } },
      { slot: 'hacker', nome: 'Keypad Hacker', peso: 2, efeito: { pt: 'Libera o nível de acesso 1.', en: 'Unlocks clearance level 1.' } },
      { slot: 'hacker', nome: 'Gatekey (Tier 6)', peso: 2, efeito: { pt: 'Libera os níveis de acesso 1 a 6.', en: 'Unlocks clearance levels 1 to 6.' } }
    ],
    // Trilha sonora: trilhaTexto = texto sobre a dinâmica da trilha (blocos h, p, ul, dest, img, como na Jogabilidade); trilha = cartões de música.
    // Cartão: { t: 'Nome da música', por: 'Nome do artista', d: { pt, en } (aparece abaixo do cartão), audio: 'audio/faixa.mp3' (o play toca este arquivo), dur: '3:12', youtube: 'ID_DO_VIDEO' (só o botão que leva ao YouTube), link: 'https://…' (opcional),
    //           img: 'imagens/trilha/local.webp' (imagem do local), onde: { pt, en } (etiqueta do local), cor: '#c0392b' (cor do setor) }
    // Faixas da playlist "Abiotic Factor OST" (LokaRips). Falta preencher "por" e "d" onde estiver vazio.
    trilhaTexto: [],
    trilha: [
      { t: 'Menu Theme', youtube: 'JdnNZij_p9Y', onde: { pt: 'Menu inicial', en: 'Main menu' }, d: { pt: 'Tema do menu inicial do jogo.', en: 'The game\'s main menu theme.' } },
      { t: 'Canaan Theme', youtube: '4fHGsXwsD44' },
      { t: 'Reactors Day Theme', youtube: 'e-PY_mczdq4' },
      { t: 'End Credits Music', youtube: 'QviOJsoU1KI', onde: { pt: 'Créditos finais', en: 'End credits' }, d: { pt: 'Música dos créditos finais.', en: 'The end credits music.' } }
    ],
    // Detalhes: mural de imagens. Cada imagem pode ter textos ligados por linhas a pontos dela (notas) e, se quiser, uma foto redonda (autor) no fim de uma linha.
    // Item: { t: {pt,en}, d: {pt,en}, img: 'imagens/detalhes/x.webp' (ou .gif), alt: {pt,en}, prop: '16 / 9', larg: 2 ou 3, video: 'x.mp4' (sem notas),
    //         notas: [ { x: 62, y: 38, t: {pt,en}, d: {pt,en} }  ou  { x: 80, y: 70, img: 'rosto.webp', alt: {pt,en} } ] }   (x e y em %, qualquer ponto da imagem)
    detalhes: [
      // EXEMPLOS (fotos da Wikimedia Commons, licença livre, só para demonstrar): troque 'img' e os textos pelos seus, ou apague os itens.
      // As imagens ficam coladas no mural. Ao clicar em uma que tem 'notas', ela abre ali mesmo mostrando as linhas, os textos e as fotos.
      { t: { pt: 'Exemplo 1: farol', en: 'Example 1: lighthouse' }, larg: 2, img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Westerhever_Nordostblick.jpg?width=1600', alt: { pt: 'Farol de exemplo', en: 'Example lighthouse' },
        d: { pt: 'Clique na imagem para abrir; clique de novo para fechar. Cada texto fica preso por uma linha a um ponto da imagem.', en: 'Click the image to open it; click again to close. Each text is tied by a line to a point on the image.' },
        notas: [
          { x: 18, y: 16, t: { pt: 'Primeiro ponto', en: 'First point' }, d: { pt: 'Texto sobre este detalhe da imagem.', en: 'Text about this detail of the image.' } },
          { x: 52, y: 46, t: { pt: 'Segundo ponto', en: 'Second point' }, d: { pt: 'Pode haver vários textos na mesma imagem.', en: 'There can be several texts on the same image.' } },
          { x: 30, y: 80, d: { pt: 'Um texto também pode ficar sem título.', en: 'A text can also have no title.' } },
          { x: 86, y: 70, img: 'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect width=%22200%22 height=%22200%22 fill=%22%232a1218%22/%3E%3Ccircle cx=%22100%22 cy=%2278%22 r=%2238%22 fill=%22%23a42a44%22/%3E%3Cpath d=%22M28 200 C34 138 70 122 100 122 C130 122 166 138 172 200 Z%22 fill=%22%23a42a44%22/%3E%3C/svg%3E', alt: { pt: 'Autor da imagem', en: 'Image author' } }
        ] },
      { t: { pt: 'Exemplo: imagem comum', en: 'Example: plain image' }, img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Upper_Yosemite_fall_with_reflection_1.jpg?width=900' },
      { t: { pt: 'Exemplo 2: cachoeira', en: 'Example 2: waterfall' }, img: 'https://commons.wikimedia.org/wiki/Special:FilePath/038_Svartifoss_waterfall_(Iceland)_Photo_by_Giles_Laurent.jpg?width=900', alt: { pt: 'Cachoeira de exemplo', en: 'Example waterfall' },
        d: { pt: 'Cada imagem tem a sua própria largura e altura.', en: 'Each image has its own width and height.' },
        notas: [
          { x: 50, y: 30, t: { pt: 'Ponto em foco', en: 'Focus point' }, d: { pt: 'Descrição do que está em destaque.', en: 'Description of what is in focus.' } },
          { x: 24, y: 72, d: { pt: 'Texto solto, ligado a um ponto qualquer.', en: 'Loose text, tied to any point.' } },
          { x: 78, y: 62, img: 'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect width=%22200%22 height=%22200%22 fill=%22%232a1218%22/%3E%3Ccircle cx=%22100%22 cy=%2278%22 r=%2238%22 fill=%22%23a42a44%22/%3E%3Cpath d=%22M28 200 C34 138 70 122 100 122 C130 122 166 138 172 200 Z%22 fill=%22%23a42a44%22/%3E%3C/svg%3E', alt: { pt: 'Quem criou', en: 'Who made it' } }
        ] },
      { t: { pt: 'Exemplo: imagem comum', en: 'Example: plain image' }, img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pigeon_Point_Lighthouse_(2016).jpg?width=900' },
      { t: { pt: 'Exemplo: imagem larga', en: 'Example: wide image' }, img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dry_Falls.jpg?width=1200', larg: 2 },
      { t: { pt: 'Exemplo: imagem comum', en: 'Example: plain image' }, img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wahkeena_Falls_October_2019.jpg?width=900' },
      { t: { pt: 'Exemplo: imagem comum', en: 'Example: plain image' }, img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Elakala_Waterfalls_Swirling_Pool_Mossy_Rocks.jpg?width=900' },
      { t: { pt: 'Exemplo: imagem comum', en: 'Example: plain image' }, img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rainbows_on_Yosemite_Lower_Falls.jpg?width=900' }
    ],
    // Curiosidades, Vozes e Desenvolvedores: dados de exemplo reais (wiki do jogo e Wikipedia). Troque, apague ou acrescente à vontade.
    curiosidades: [
      { t: { pt: 'Feito por quem já criou outro jogo', en: 'Made by people who made another game' }, d: { pt: 'A Deep Field Games, da Nova Zelândia, se formou no início de 2022. O diretor Geoff "Zag" Keene já tinha trabalhado em Unfortunate Spacemen.', en: 'Deep Field Games, from New Zealand, formed in early 2022. Director Geoff "Zag" Keene had previously worked on Unfortunate Spacemen.' } },
      { t: { pt: 'Inspirado em Half-Life', en: 'Inspired by Half-Life' }, d: { pt: 'Half-Life e Blue Shift são inspirações centrais, e o GATE foi modelado com base no complexo Black Mesa.', en: 'Half-Life and Blue Shift are core inspirations, and GATE is modeled on the Black Mesa complex.' } },
      { t: { pt: 'Estamos em 1993', en: 'It is 1993' }, d: { pt: 'A história se passa em 1993 no GATE, uma instalação de pesquisa subterrânea no interior da Austrália.', en: 'The story takes place in 1993 at GATE, an underground research facility in the Australian outback.' } },
      { t: { pt: 'Do acesso antecipado ao 1.0', en: 'From early access to 1.0' }, d: { pt: 'Chegou ao acesso antecipado no Steam em 2 de maio de 2024. A versão 1.0 saiu em 22 de julho de 2025, com a atualização Cold Fusion.', en: 'It reached Steam early access on 2 May 2024. Version 1.0 arrived on 22 July 2025 with the Cold Fusion update.' } },
      { t: { pt: 'Estreia forte', en: 'A strong start' }, d: { pt: 'Foram 250 mil cópias vendidas nos oito primeiros dias do acesso antecipado e 1,5 milhão em agosto de 2025.', en: 'It sold 250,000 copies in the first eight days of early access and 1.5 million by August 2025.' } }
    ],
    vozes: [
      { nome: 'Marc Vietor', papel: { pt: 'Dr. Manse', en: 'Dr. Manse' } },
      { nome: 'Oz Hansen', papel: { pt: 'Dr. Cahn', en: 'Dr. Cahn' } },
      { nome: 'Henry Feltham', papel: { pt: 'Abe', en: 'Abe' },
        neste: { pt: 'Também faz outras vozes do jogo.', en: 'Also voices other characters in the game.' },
        trabalhos: [
          { t: 'Abiotic Factor', ano: 2025, tipo: 'jogo', papel: { pt: 'Diretor de narrativa e de produção; voz de Abe', en: 'Narrative and Production Director; voice of Abe' }, d: { pt: 'Aparece nos créditos como Diretor de narrativa, Diretor de produção e voz de Abe.', en: 'Credited as Narrative Director, Production Director and voice of Abe.' } }
        ],
        links: [ { t: 'Créditos na wiki', url: 'https://abioticfactor.wiki.gg/wiki/Credits' } ] },
      { nome: 'Julia "CrissCrossGal" Rendell', papel: { pt: 'Janet', en: 'Janet' } },
      { nome: 'Alanah Pearce', papel: { pt: 'Kylie Muir', en: 'Kylie Muir' },
        neste: { pt: 'Também é roteirista: trabalhou na equipe de roteiro de God of War Ragnarök.', en: 'She is also a writer: she was on the writing team of God of War Ragnarök.' },
        bio: { pt: 'Roteirista e ex-jornalista australiana de games. Passou pela IGN e pela Rooster Teeth, entrou no Santa Monica Studio da Sony como roteirista em 2020 e saiu em dezembro de 2024 para trabalhar de forma independente, com transmissões e criação de conteúdo.', en: 'Australian game writer and former journalist. She worked at IGN and Rooster Teeth, joined Sony\'s Santa Monica Studio as a writer in 2020 and left in December 2024 to go freelance, streaming and creating content.' },
        trabalhos: [
          { t: 'God of War Ragnarök', ano: 2022, tipo: 'jogo', papel: { pt: 'Roteirista (equipe de roteiro)', en: 'Writer (writing team)' }, d: { pt: 'Parte da equipe de desenvolvimento, revelada em 2021.', en: 'Part of the development team, revealed in 2021.' } },
          { t: 'Cyberpunk 2077', ano: 2020, tipo: 'jogo', papel: { pt: 'Voz e imagem de uma personagem', en: 'Voice and likeness of a character' } },
          { t: 'Gears 5', ano: 2019, tipo: 'jogo', papel: { pt: 'Voz', en: 'Voice' } },
          { t: 'Afterparty', ano: 2019, tipo: 'jogo', papel: { pt: 'Voz', en: 'Voice' } },
          { t: 'V/H/S/Beyond', ano: 2024, tipo: 'filme', papel: { pt: 'Halley, no segmento "Stowaway"', en: 'Halley, in the "Stowaway" segment' } }
        ],
        galeria: [
          { img: 'data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22800%22%20height=%221000%22%20viewBox=%220%200%20800%201000%22%3E%3Crect%20width=%22800%22%20height=%221000%22%20fill=%22%231c1517%22/%3E%3Cpath%20d=%22M0%200L800%201000%20M800%200L0%201000%22%20stroke=%22%233a2b2f%22%20stroke-width=%223%22/%3E%3Ctext%20x=%2250%25%22%20y=%2250%25%22%20fill=%22%238c7378%22%20font-family=%22sans-serif%22%20font-size=%2280%22%20text-anchor=%22middle%22%20dominant-baseline=%22middle%22%3EPERSONAGEM%201%3C/text%3E%3C/svg%3E', t: { pt: 'Exemplo: personagem 1', en: 'Example: character 1' } },
          { img: 'data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22600%22%20height=%22800%22%20viewBox=%220%200%20600%20800%22%3E%3Crect%20width=%22600%22%20height=%22800%22%20fill=%22%231c1517%22/%3E%3Cpath%20d=%22M0%200L600%20800%20M600%200L0%20800%22%20stroke=%22%233a2b2f%22%20stroke-width=%223%22/%3E%3Ctext%20x=%2250%25%22%20y=%2250%25%22%20fill=%22%238c7378%22%20font-family=%22sans-serif%22%20font-size=%2260%22%20text-anchor=%22middle%22%20dominant-baseline=%22middle%22%3EPERSONAGEM%202%3C/text%3E%3C/svg%3E', t: { pt: 'Exemplo: personagem 2', en: 'Example: character 2' } },
          { img: 'data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22900%22%20height=%221000%22%20viewBox=%220%200%20900%201000%22%3E%3Crect%20width=%22900%22%20height=%221000%22%20fill=%22%231c1517%22/%3E%3Cpath%20d=%22M0%200L900%201000%20M900%200L0%201000%22%20stroke=%22%233a2b2f%22%20stroke-width=%223%22/%3E%3Ctext%20x=%2250%25%22%20y=%2250%25%22%20fill=%22%238c7378%22%20font-family=%22sans-serif%22%20font-size=%2290%22%20text-anchor=%22middle%22%20dominant-baseline=%22middle%22%3EPERSONAGEM%203%3C/text%3E%3C/svg%3E', t: { pt: 'Exemplo: personagem 3', en: 'Example: character 3' } },
          { img: 'data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22700%22%20height=%22900%22%20viewBox=%220%200%20700%20900%22%3E%3Crect%20width=%22700%22%20height=%22900%22%20fill=%22%231c1517%22/%3E%3Cpath%20d=%22M0%200L700%20900%20M700%200L0%20900%22%20stroke=%22%233a2b2f%22%20stroke-width=%223%22/%3E%3Ctext%20x=%2250%25%22%20y=%2250%25%22%20fill=%22%238c7378%22%20font-family=%22sans-serif%22%20font-size=%2270%22%20text-anchor=%22middle%22%20dominant-baseline=%22middle%22%3EPERSONAGEM%204%3C/text%3E%3C/svg%3E', t: { pt: 'Exemplo: personagem 4', en: 'Example: character 4' } },
          { img: 'data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22800%22%20height=%221000%22%20viewBox=%220%200%20800%201000%22%3E%3Crect%20width=%22800%22%20height=%221000%22%20fill=%22%231c1517%22/%3E%3Cpath%20d=%22M0%200L800%201000%20M800%200L0%201000%22%20stroke=%22%233a2b2f%22%20stroke-width=%223%22/%3E%3Ctext%20x=%2250%25%22%20y=%2250%25%22%20fill=%22%238c7378%22%20font-family=%22sans-serif%22%20font-size=%2280%22%20text-anchor=%22middle%22%20dominant-baseline=%22middle%22%3EPERSONAGEM%205%3C/text%3E%3C/svg%3E', t: { pt: 'Exemplo: personagem 5', en: 'Example: character 5' } }
        ],
        links: [ { t: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Alanah_Pearce' } ] },
      { nome: 'Sarah Daymond', papel: { pt: 'Tracy', en: 'Tracy' } }
    ],
    desenvolvedores: [
      { nome: 'Deep Field Games', cargo: { pt: 'Estúdio', en: 'Studio' },
        neste: { pt: 'Criador do jogo.', en: 'Creator of the game.' },
        bio: { pt: 'Estúdio independente de Dunedin, na Nova Zelândia, fundado por desenvolvedores experientes. Abiotic Factor foi anunciado em 29 de setembro de 2022 como o segundo jogo do estúdio.', en: 'Independent studio based in Dunedin, New Zealand, founded by veteran developers. Abiotic Factor was announced on 29 September 2022 as the studio\'s second game.' },
        trabalhos: [
          { t: 'Abiotic Factor', ano: 2025, tipo: 'jogo', papel: { pt: 'Desenvolvedor', en: 'Developer' }, d: { pt: 'Sobrevivência cooperativa com cientistas presos em uma instalação subterrânea.', en: 'Co-op survival with scientists trapped in an underground facility.' } },
          { t: 'Unfortunate Spacemen', tipo: 'jogo', papel: { pt: 'Desenvolvedor', en: 'Developer' }, d: { pt: 'Jogo anterior da equipe: mistura de tiro em primeira pessoa com dedução social.', en: 'The team\'s earlier game: a mix of first-person shooter and social deduction.' } }
        ],
        galeria: [
          { img: 'data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%221200%22%20height=%22800%22%20viewBox=%220%200%201200%20800%22%3E%3Crect%20width=%221200%22%20height=%22800%22%20fill=%22%231c1517%22/%3E%3Cpath%20d=%22M0%200L1200%20800%20M1200%200L0%20800%22%20stroke=%22%233a2b2f%22%20stroke-width=%223%22/%3E%3Ctext%20x=%2250%25%22%20y=%2250%25%22%20fill=%22%238c7378%22%20font-family=%22sans-serif%22%20font-size=%22120%22%20text-anchor=%22middle%22%20dominant-baseline=%22middle%22%3EPROJETO%201%3C/text%3E%3C/svg%3E', t: { pt: 'Exemplo: projeto 1', en: 'Example: project 1' } },
          { img: 'data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%221000%22%20height=%22800%22%20viewBox=%220%200%201000%20800%22%3E%3Crect%20width=%221000%22%20height=%22800%22%20fill=%22%231c1517%22/%3E%3Cpath%20d=%22M0%200L1000%20800%20M1000%200L0%20800%22%20stroke=%22%233a2b2f%22%20stroke-width=%223%22/%3E%3Ctext%20x=%2250%25%22%20y=%2250%25%22%20fill=%22%238c7378%22%20font-family=%22sans-serif%22%20font-size=%22100%22%20text-anchor=%22middle%22%20dominant-baseline=%22middle%22%3EPROJETO%202%3C/text%3E%3C/svg%3E', t: { pt: 'Exemplo: projeto 2', en: 'Example: project 2' } },
          { img: 'data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%221200%22%20height=%22700%22%20viewBox=%220%200%201200%20700%22%3E%3Crect%20width=%221200%22%20height=%22700%22%20fill=%22%231c1517%22/%3E%3Cpath%20d=%22M0%200L1200%20700%20M1200%200L0%20700%22%20stroke=%22%233a2b2f%22%20stroke-width=%223%22/%3E%3Ctext%20x=%2250%25%22%20y=%2250%25%22%20fill=%22%238c7378%22%20font-family=%22sans-serif%22%20font-size=%22120%22%20text-anchor=%22middle%22%20dominant-baseline=%22middle%22%3EPROJETO%203%3C/text%3E%3C/svg%3E', t: { pt: 'Exemplo: projeto 3', en: 'Example: project 3' } },
          { img: 'data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22900%22%20height=%22800%22%20viewBox=%220%200%20900%20800%22%3E%3Crect%20width=%22900%22%20height=%22800%22%20fill=%22%231c1517%22/%3E%3Cpath%20d=%22M0%200L900%20800%20M900%200L0%20800%22%20stroke=%22%233a2b2f%22%20stroke-width=%223%22/%3E%3Ctext%20x=%2250%25%22%20y=%2250%25%22%20fill=%22%238c7378%22%20font-family=%22sans-serif%22%20font-size=%2290%22%20text-anchor=%22middle%22%20dominant-baseline=%22middle%22%3EPROJETO%204%3C/text%3E%3C/svg%3E', t: { pt: 'Exemplo: projeto 4', en: 'Example: project 4' } }
        ],
        links: [ { t: 'Créditos na wiki', url: 'https://abioticfactor.wiki.gg/wiki/Credits' } ] },
      { nome: 'Playstack', cargo: { pt: 'Publicadora', en: 'Publisher' } },
      { nome: 'Geoff "Zag" Keene', cargo: { pt: 'Diretor de design e designer de níveis-chefe', en: 'Design Director and Lead Level Designer' },
        trabalhos: [
          { t: 'Abiotic Factor', ano: 2025, tipo: 'jogo', papel: { pt: 'Diretor de design e designer de níveis-chefe', en: 'Design Director and Lead Level Designer' } },
          { t: 'Unfortunate Spacemen', tipo: 'jogo', papel: { pt: 'Criador', en: 'Creator' }, d: { pt: 'Jogo anterior: mistura de tiro em primeira pessoa com dedução social.', en: 'Earlier game: a mix of first-person shooter and social deduction.' } }
        ] },
      { nome: 'Henry Feltham', cargo: { pt: 'Diretor de narrativa e de produção', en: 'Narrative and Production Director' },
        trabalhos: [
          { t: 'Abiotic Factor', ano: 2025, tipo: 'jogo', papel: { pt: 'Diretor de narrativa e de produção, e voz de Abe', en: 'Narrative and Production Director, and voice of Abe' } }
        ] },
      { nome: 'Jacob "Abiscuits" Kemp', cargo: { pt: 'Programador-chefe', en: 'Lead Programmer' } },
      { nome: 'Connor "MadDok" Moran', cargo: { pt: 'Diretor de arte', en: 'Art Director' } },
      { nome: 'Kate "KateitaK" Hansen', cargo: { pt: 'Diretora de operações', en: 'Chief Operations Officer' } },
      { nome: 'Tim Ponting', cargo: { pt: 'Diretor de desenvolvimento de negócios', en: 'Business Development Director' } }
    ],
    // Novidades do jogo: cada uma abre uma página própria (#jogo/ID/novidades/ID-DA-NOVIDADE). As mais novas primeiro.
    // Campos: id (curto, sem espaços), badge: 'novo'|'atualizado', data: 'AAAA-MM-DD', t: { pt, en }, d: { pt, en } (resumo do card e abertura da página).
    // Opcionais: img: 'imagens/capa.jpg' (capa larga da página e do card; sem img a página mostra a moldura vazia), legCapa: { pt, en },
    //            corpo: [ ...blocos da página, mesmos tipos da Visão geral: h, p, ul, destaque, dest, ir, img ]. Os títulos (h) viram o índice "Nesta novidade".
    novidades: [
      { id: 'novas-secoes', badge: 'atualizado', data: '2026-11-13', img: '',
        t: { pt: 'Guia ganhou novas seções', en: 'Guide gained new sections' },
        d: { pt: 'Jogabilidade, Bestiário, Personagens, Equipamentos, Armaduras e Novidades agora têm página própria, agrupadas no menu.', en: 'Gameplay, Bestiary, Characters, Equipment, Armor and News now have their own pages, grouped in the menu.' },
        legCapa: { pt: 'O menu do guia, agora dividido por função.', en: 'The guide menu, now split by function.' },
        corpo: [
          { h: { pt: 'O que mudou', en: 'What changed' } },
          { p: { pt: 'O guia deixou de ser uma página única e passou a ser dividido <strong>por função</strong>. Cada parte tem página própria, e o menu lateral agrupa tudo em quatro blocos: Começando, O jogo, Equipamento e Troféus.',
                 en: 'The guide is no longer a single page and is now split <strong>by function</strong>. Each part has its own page, and the side menu groups everything into four blocks: Getting started, The game, Equipment and Trophies.' } },
          { ul: [
            { pt: '<strong>Jogabilidade:</strong> texto corrido sobre como o jogo funciona, com destaques curtos e imagens.', en: '<strong>Gameplay:</strong> running text on how the game works, with short highlights and images.' },
            { pt: '<strong>Bestiário:</strong> criaturas, humanos e robôs, com o que cada um solta.', en: '<strong>Bestiary:</strong> creatures, humans and robots, with what each one drops.' },
            { pt: '<strong>Personagens:</strong> NPCs, aliados e figuras citadas no jogo.', en: '<strong>Characters:</strong> NPCs, allies and figures mentioned in the game.' },
            { pt: '<strong>Equipamentos e Armaduras:</strong> armas, escudo e peças de armadura, com os valores de cada uma e os bônus de conjunto.', en: '<strong>Equipment and Armor:</strong> weapons, shield and armor pieces, with each one\'s values and the set bonuses.' },
            { pt: '<strong>Novidades:</strong> esta aba, onde cada atualização abre em página própria.', en: '<strong>News:</strong> this tab, where each update opens on its own page.' }
          ] },
          { img: '', razao: '16 / 9', alt: { pt: 'Menu lateral do guia', en: 'Guide side menu' },
            leg: { pt: 'O menu lateral agrupa as páginas do guia.', en: 'The side menu groups the guide pages.' } },
          { h: { pt: 'Por onde começar', en: 'Where to start' } },
          { p: { pt: 'Quem chega agora pode ler a <strong>Visão geral</strong> e seguir para a <strong>Jogabilidade</strong>. Quem já está no meio do jogo pode ir direto às páginas de Equipamentos e Armaduras.',
                 en: 'If you are just arriving, read the <strong>Overview</strong> and move on to <strong>Gameplay</strong>. If you are already mid-game, go straight to the Equipment and Armor pages.' } },
          { destaque: { pt: 'As novidades passam a abrir em página própria, com mais texto e imagens do que cabe em um card.', en: 'News items now open on their own page, with more text and images than a card can hold.' } },
          { ir: 'jogabilidade', t: { pt: 'Ver a Jogabilidade →', en: 'See Gameplay →' } }
        ] },
      { id: 'net-launcher', badge: 'novo', data: '2026-11-11', img: '',
        t: { pt: 'Dica nova: Net Launcher antes dos Lab Rats', en: 'New tip: Net Launcher before the Lab Rats' },
        d: { pt: 'Sobre o troféu Rato de Laboratório. Veja Perdíveis e Dicas.', en: 'About the Lab Rat trophy. See Missables and Tips.' },
        legCapa: { pt: 'Os Lab Rats: um precisa ser capturado vivo.', en: 'The Lab Rats: one must be captured alive.' },
        corpo: [
          { h: { pt: 'O problema', en: 'The problem' } },
          { p: { pt: 'O troféu <strong>Rato de Laboratório</strong> precisa de um Lab Rat <strong>capturado vivo</strong>. Se você matar todos eles antes de ter como capturar, o troféu pode escapar.',
                 en: 'The <strong>Lab Rat</strong> trophy needs a Lab Rat <strong>captured alive</strong>. If you kill them all before you have a way to capture one, the trophy can slip away.' } },
          { img: '', razao: '16 / 9', alt: { pt: 'Lab Rats', en: 'Lab Rats' },
            leg: { pt: 'Lab Rats.', en: 'Lab Rats.' } },
          { h: { pt: 'Como evitar', en: 'How to avoid it' } },
          { p: { pt: 'Construa o <strong>Net Launcher</strong> antes de matar todos eles.',
                 en: 'Build the <strong>Net Launcher</strong> before you kill them all.' } },
          { destaque: { pt: 'Este é um dos perdíveis do guia: ele aparece com o selo Perdível na página de Perdíveis.', en: 'This is one of the guide\'s missables: it carries the Missable tag on the Missables page.' } },
          { ir: 'perdiveis', t: { pt: 'Ver os perdíveis →', en: 'See the missables →' } },
          { ir: 'dicas', t: { pt: 'Ver as dicas →', en: 'See the tips →' } }
        ] },
      { id: 'guia-publicado', badge: 'novo', data: '2026-11-11', img: '',
        t: { pt: 'Guia de platina publicado', en: 'Platinum guide published' },
        d: { pt: '54 troféus, 7 perdíveis marcados, roteiro por setor e checklist.', en: '54 trophies, 7 missables flagged, a sector-by-sector roadmap and a checklist.' },
        legCapa: { pt: 'A capa do guia de platina.', en: 'The platinum guide cover.' },
        corpo: [
          { h: { pt: 'A platina em números', en: 'The platinum in numbers' } },
          { p: { pt: 'É uma platina de <strong>volume e paciência</strong>, não de habilidade: são <strong>54 troféus</strong> em uma única jogatina, e a estimativa é de <strong>60 a 100 horas</strong>. A dificuldade é <strong>5 de 10</strong>.',
                 en: 'It is a platinum of <strong>volume and patience</strong>, not skill: <strong>54 trophies</strong> in a single playthrough, with an estimate of <strong>60 to 100 hours</strong>. Difficulty is <strong>5 out of 10</strong>.' } },
          { h: { pt: 'O que merece atenção', en: 'What deserves attention' } },
          { p: { pt: 'O guia marca <strong>7 perdíveis</strong>. Eles aparecem em destaque e com o ponto onde costumam escapar, para você ver o aviso antes do passo.',
                 en: 'The guide flags <strong>7 missables</strong>. They are highlighted with the spot where they usually slip away, so you see the warning before the step.' } },
          { img: '', razao: '21 / 9', alt: { pt: 'Perdíveis em destaque', en: 'Featured missables' },
            leg: { pt: 'Os perdíveis ganham selo e local.', en: 'Missables get a tag and a location.' } },
          { h: { pt: 'Guia em andamento', en: 'Guide in progress' } },
          { p: { pt: 'O guia está <strong>em progresso</strong> e segue sendo atualizado. As novidades como esta registram cada passo.',
                 en: 'The guide is <strong>in progress</strong> and keeps being updated. News items like this one record each step.' } },
          { ir: 'perdiveis', t: { pt: 'Ver os perdíveis →', en: 'See the missables →' } }
        ] }
    ],
    // Visão geral (texto corrido): lista de blocos na ordem da página. Tipos: h, p, ul, destaque, ir, img — veja jBloco().
    // Imagens: troque img: '' por img: 'imagens/arquivo.jpg'. Sem imagem, a moldura aparece vazia, só com a legenda.
    visaoGeral: [
      { img: '', razao: '21 / 9', alt: { pt: 'O complexo da GATE', en: 'The GATE facility' },
        leg: { pt: 'O complexo da GATE, construído numa antiga mina de lítio.', en: 'The GATE facility, built into a former lithium mine.' } },

      { h: { pt: 'O jogo em poucas linhas', en: 'The game in a few lines' } },
      { p: { pt: '<strong>Abiotic Factor</strong> é um jogo de sobrevivência e criação (<em>survival crafting</em>) da Deep Field Games, publicado pela Playstack. A história começa em 1993, dentro da GATE (Garrick Advanced Technology Enterprises), um centro de pesquisa subterrâneo construído numa antiga mina de lítio, no interior da Austrália Ocidental.',
             en: '<strong>Abiotic Factor</strong> is a survival crafting game by Deep Field Games, published by Playstack. The story starts in 1993, inside GATE (Garrick Advanced Technology Enterprises), an underground research facility built into a former lithium mine in the Western Australian outback.' } },
      { p: { pt: 'Você controla um cientista. No primeiro dia, uma emergência leva você ao Office Sector: uma fenda mata o Dr. Jaeger e criaturas hostis tomam os corredores. A partir daí a história avança, em linha reta, pelos setores do complexo.',
             en: 'You play a scientist. On your first day, an emergency sends you into the Office Sector: a rift kills Dr. Jaeger and hostile creatures overrun the halls. From there the story moves in a straight line through the facility\'s sectors.' } },
      { p: { pt: 'Dá para jogar sozinho ou online com até cinco outros jogadores, somando 6. A versão 1.0 saiu em 22 de julho de 2025 para PC, PlayStation 5 e Xbox Series X/S.',
             en: 'You can play solo or online with up to five other players, six in total. Version 1.0 came out on July 22, 2025 for PC, PlayStation 5 and Xbox Series X/S.' } },

      { h: { pt: 'Como se joga', en: 'How it plays' } },
      { p: { pt: 'O dia a dia é sobreviver e se preparar. Você cuida de fome, sede, cansaço, temperatura e radiação, recolhe móveis e objetos para fabricar armas e equipamentos improvisados e constrói bases para se proteger. À noite a energia pode cair e portais podem se abrir perto da sua base, trazendo ataques.',
             en: 'Day to day it is about surviving and getting ready. You manage hunger, thirst, fatigue, temperature and radiation, salvage furniture and objects to craft improvised weapons and gear, and build bases to protect yourself. At night the power can go out and portals can open near your base, bringing attacks.' } },
      { p: { pt: 'Os setores do complexo se destravam fabricando tecnologia especializada. Existem ainda os [[anteverses|Anteverses]], mundos alternativos acessados por portais, com recursos que só existem lá e que se renovam duas vezes por semana.',
             en: 'The facility\'s sectors unlock by crafting specialized tech. There are also the [[anteverses|Anteverses]], alternate worlds reached through portals, with resources found only there that reset twice a week.' } },
      { ir: 'jogabilidade', t: { pt: 'Ver as regras de jogabilidade →', en: 'See the gameplay rules →' } },

      { img: '', razao: '16 / 9', alt: { pt: 'Um setor do complexo', en: 'A sector of the facility' },
        leg: { pt: 'Um dos setores do complexo.', en: 'One of the facility\'s sectors.' } },

      { h: { pt: 'Do acesso antecipado à versão 1.0', en: 'From early access to version 1.0' } },
      { p: { pt: 'O jogo entrou em acesso antecipado no Steam em 2 de maio de 2024. Três grandes atualizações marcaram o caminho até a versão 1.0:',
             en: 'The game entered early access on Steam on May 2, 2024. Three major updates marked the road to version 1.0:' } },
      { ul: [
        { pt: '<strong>Crush Depth</strong> (12/08/2024): Security Sector, reservatório da Hidroplanta, veículos, pesca e jetpacks.',
          en: '<strong>Crush Depth</strong> (08/12/2024): Security Sector, Hydroplant reservoir, vehicles, fishing and jetpacks.' },
        { pt: '<strong>Dark Energy</strong> (04/02/2025): Power Services, Reactors e a facção dos Gatekeepers.',
          en: '<strong>Dark Energy</strong> (02/04/2025): Power Services, Reactors and the Gatekeepers faction.' },
        { pt: '<strong>Cold Fusion</strong> (22/07/2025): Residence Sector, Enhancement Bench e a transição para a versão 1.0.',
          en: '<strong>Cold Fusion</strong> (07/22/2025): Residence Sector, Enhancement Bench and the move to version 1.0.' }
      ] },

      { h: { pt: 'A platina', en: 'The platinum' } },
      { p: { pt: 'São <strong>54 troféus</strong>, com platina, e dá para conquistar todos em <strong>uma única jogatina</strong>. A nota de dificuldade é 5 de 10 e o tempo estimado vai de 60 a 100 horas. É uma platina de volume e paciência, não de habilidade.',
             en: 'There are <strong>54 trophies</strong>, including the platinum, and you can earn them all in <strong>a single playthrough</strong>. The difficulty rating is 5 out of 10 and the estimated time runs from 60 to 100 hours. It is a platinum of volume and patience, not skill.' } },
      { p: { pt: 'O que pede atenção são os <strong>7 perdíveis</strong>, um grind leve e o RNG da pesca.',
             en: 'What needs attention are the <strong>7 missables</strong>, a light grind and the fishing RNG.' } },
      { img: '', razao: '16 / 9', alt: { pt: 'A lista de troféus', en: 'The trophy list' },
        leg: { pt: 'A lista de troféus do jogo.', en: 'The game\'s trophy list.' } },
      { destaque: { pt: '<strong>Antes de avançar de setor, leia os perdíveis.</strong> O Net Launcher precisa estar pronto antes de você matar todos os Lab Rats, os uniformes de Manufacturing e da Hidroplanta vêm de corpos, e a quest da Kylie começa cedo.',
                    en: '<strong>Before moving on to the next sector, read the missables.</strong> The Net Launcher must be ready before you kill all the Lab Rats, the Manufacturing and Hydroplant uniforms come from bodies, and Kylie\'s quest starts early.' } },
      { ir: 'perdiveis', t: { pt: 'Ver todos os perdíveis →', en: 'See all the missables →' } },

      { h: { pt: 'Como usar este guia', en: 'How to use this guide' } },
      { p: { pt: 'O menu à esquerda separa o guia por função. <strong>Jogabilidade</strong> explica as regras; <strong>Bestiário</strong>, <strong>Personagens</strong>, <strong>Equipamentos</strong> e <strong>Armaduras</strong> servem de consulta rápida; <strong>Perdíveis</strong> e <strong>Dicas</strong> valem a leitura antes de cada setor.',
             en: 'The menu on the left splits the guide by function. <strong>Gameplay</strong> explains the rules; <strong>Bestiary</strong>, <strong>Characters</strong>, <strong>Equipment</strong> and <strong>Armor</strong> are for quick lookups; <strong>Missables</strong> and <strong>Tips</strong> are worth reading before each sector.' } }
    ],
    // Imagens das palavras-chave do texto ([[id|palavra]]). Troque img: '' por img: 'imagens/arquivo.jpg'.
    refs: {
      anteverses: { img: '', razao: '16 / 9', alt: { pt: 'Um Anteverse', en: 'An Anteverse' },
        leg: { pt: 'Um Anteverse: mundo alternativo acessado por portal, com recursos que só existem lá e que se renovam duas vezes por semana.',
               en: 'An Anteverse: an alternate world reached through a portal, with resources found only there that reset twice a week.' } }
    }
}
