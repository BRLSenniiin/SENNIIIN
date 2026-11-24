'use strict'

// ══════════════════════════════════════════════════════════════════════════
// GUIA DESTE ARQUIVO — conteúdo do jogo BALL x PIT, criado a partir do modelo novo-jogo.js
// Seções com [] mostram "em preparo" no site. Abas que o jogo não usa ficam em ocultas (Equipamentos, Armaduras, Bestiário, Vozes, Perdíveis).
// Trechos que começam com "Exemplo:" são modelos para você trocar.
// Troféus: 75 no PS5 = 64 do jogo base (1 platina, 1 ouro, 1 prata, 61 bronzes) + 11 da DLC Risen Ballbylon (2 pratas, 9 bronzes). Nomes em inglês como no jogo; descrições em português traduzidas por mim.
// ══════════════════════════════════════════════════════════════════════════
JOGOS['ball-x-pit'] = {
  atualizado: '2026-11-24',
  img: '',                       // capa: 'imagens/ball-x-pit.jpg'. Vazio = capa colorida com a primeira letra
  abertura: [
    { pt: '<strong>BALL x PIT</strong> tem <strong>75 troféus no PS5</strong>: 64 no jogo base, com a platina, e 11 na DLC Risen Ballbylon. A lista é longa e quase toda de repetição: concluir cada zona, concluir com vários personagens, construir e coletar.',
      en: '<strong>BALL x PIT</strong> has <strong>75 trophies on PS5</strong>: 64 in the base game, including the platinum, and 11 in the Risen Ballbylon DLC. The list is long and mostly about repetition: clearing each zone, clearing with several characters, building and collecting.' },
    { pt: 'Este guia foi montado a partir de uma análise da lista de troféus e está <strong>em preparo</strong>: visão geral, roteiro, fases e personagens já estão aqui, as demais abas serão preenchidas aos poucos.',
      en: 'This guide was built from an analysis of the trophy list and is <strong>in progress</strong>: overview, roadmap, stages and characters are already here, and the other tabs will be filled in over time.' }
  ],
  visaoGeral: [
    { h: { pt: 'O jogo em poucas linhas', en: 'The game in a few lines' } },
    { p: { pt: '<strong>BALL x PIT</strong> mistura quebra-blocos com roguelite e construção de vila. Foi feito por Kenny Sun (direção, design e programação) e publicado pela Devolver Digital. Saiu em 15 de outubro de 2025 para PS5, Xbox Series X|S, Switch e PC, em 28 de outubro para o Switch 2 e em 12 de março de 2026 para iOS e Android.',
           en: '<strong>BALL x PIT</strong> mixes brick-breaker with roguelite and town building. It was made by Kenny Sun (director, designer and programmer) and published by Devolver Digital. It came out on October 15, 2025 for PS5, Xbox Series X|S, Switch and PC, on October 28 for Switch 2 and on March 12, 2026 for iOS and Android.' } },
    { h: { pt: 'Como se joga', en: 'How it plays' } },
    { p: { pt: 'Na fase de ação você lança bolas contra monstros que avançam até você. Se eles chegam à parte de baixo, o aventureiro perde vida, e a partida acaba quando a vida zera. As gemas coletadas sobem o nível do aventureiro e oferecem novas bolas, melhorias ou passivas. Cada partida tem trechos com mini-chefes e um chefe forte no final.',
           en: 'In the action stage you launch balls at monsters advancing toward you. If they reach the bottom, the adventurer loses health, and the run ends when health reaches zero. Collected gems level up the adventurer and offer new balls, upgrades or passives. Each run has segments with mini-bosses and a strong boss at the end.' } },
    { h: { pt: 'A vila', en: 'The village' } },
    { p: { pt: 'Entre as partidas você usa ouro, plantas (blueprints) e materiais para construir prédios que trazem personagens ou melhoram atributos, expandir a vila e colocar trabalhadores para coletar recursos. As engrenagens vindas dos chefes liberam andares mais fundos do elevador, com novos monstros e chefes.',
           en: 'Between runs you use gold, blueprints and materials to build structures that bring characters or boost stats, expand the village and put workers to gather resources. Gears from bosses unlock deeper elevator levels, with new monsters and bosses.' } },
    { h: { pt: 'Atualizações e DLC', en: 'Updates and DLC' } },
    { ul: [
      { pt: 'Regal Update (26 de janeiro de 2026): O Falcoeiro e O Boêmio, oito bolas especiais, três passivas e o modo infinito.', en: 'Regal Update (January 26, 2026): The Falconer and The Carouser, eight special balls, three passives and endless mode.' },
      { pt: 'Shadow Update (27 de abril de 2026): O Tuneleiro e O Furtivo, onze bolas especiais, quatro passivas e a opção de refazer melhorias passadas.', en: 'Shadow Update (April 27, 2026): The Tunneller and The Tiptoer, eleven special balls, four passives and an option to re-roll past upgrades.' },
      { pt: 'DLC Risen Ballbylon: quatro campos de batalha com chefe, novos personagens, bolas e prédios, e os cristais como novo recurso. Tem 11 troféus próprios.', en: 'Risen Ballbylon DLC: four battlefields with a boss, new characters, balls and buildings, and Crystals as a new resource. It has 11 trophies of its own.' }
    ] },
    { h: { pt: 'A platina', en: 'The platinum' } },
    { p: { pt: 'A platina <strong>Legend of New Ballbylon</strong> pede os troféus do jogo base (64). Os 11 da DLC ficam em um grupo à parte. Nenhum troféu é oculto, e a raridade da platina é de cerca de <strong>11%</strong>. O trabalho é de repetição: <strong>8 zonas</strong> concluídas, cada uma com 10 personagens diferentes, todas as fases com <strong>16 personagens</strong>, 100.000 inimigos derrotados e a vila inteira construída.',
           en: 'The <strong>Legend of New Ballbylon</strong> platinum asks for the base-game trophies (64). The 11 DLC ones are in a separate group. No trophy is hidden, and the platinum rarity is around <strong>11%</strong>. The work is repetition: <strong>8 zones</strong> cleared, each with 10 different characters, every level with <strong>16 characters</strong>, 100,000 enemies defeated and the whole village built.' } },
    { h: { pt: 'Como usar o guia', en: 'How to use the guide' } },
    { p: { pt: 'Comece pela aba <strong>Guia</strong> (o roteiro), veja as <strong>Fases</strong> e os <strong>Personagens</strong> e use os filtros da aba <strong>Troféus</strong> para ver o que falta.',
           en: 'Start with the <strong>Guide</strong> tab (the roadmap), see the <strong>Stages</strong> and <strong>Characters</strong> and use the filters in the <strong>Trophies</strong> tab to see what is left.' } }
  ],
  jogabilidade: [
    { h: { pt: 'Bolas, fissão, fusão e evolução', en: 'Balls, fission, fusion and evolution' } },
    { p: { pt: 'Os itens especiais podem ser divididos (fissão), fundidos ou evoluídos para criar bolas mais fortes. A lista de troféus pede a primeira evolução, a primeira fusão, a fusão de duas bolas já evoluídas e cinco criações específicas: Nosferatu, Nuclear Bomb, Satan, Soul Reaver e Deadeye\'s Cross.',
           en: 'Special items can be split (fission), fused or evolved to create stronger balls. The trophy list asks for the first evolution, the first fusion, the fusion of two already evolved balls and five specific creations: Nosferatu, Nuclear Bomb, Satan, Soul Reaver and Deadeye\'s Cross.' } },
    { h: { pt: 'Recursos', en: 'Resources' } },
    { ul: [
      { pt: 'Quatro recursos básicos (ouro, trigo, madeira e pedra), cada um com dois troféus: um pelo total e outro por uma única colheita.', en: 'Four basic resources (gold, wheat, wood and stone), each with two trophies: one for the total and another for a single harvest.' },
      { pt: '50 plantas (blueprints) para o troféu City Planner.', en: '50 blueprints for the City Planner trophy.' },
      { pt: 'Na DLC, os cristais: 1.000 no total para o troféu Crystalline.', en: 'In the DLC, Crystals: 1,000 in total for the Crystalline trophy.' }
    ] },
    { h: { pt: 'Enciclopédia', en: 'Encyclopedia' } },
    { p: { pt: 'O troféu Scholar pede todas as entradas do jogo base na Enciclopédia, e o Risen Scholar pede as da DLC.', en: 'The Scholar trophy asks for every base-game entry in the Encyclopedia, and Risen Scholar asks for the DLC ones.' } }
  ],
  roteiro: [                     // aba "Guia": roteiro sugerido, montado a partir da lista de troféus
    { id: 'etapa-1-zonas', setor: 'Etapa 1', status: 'base', img: '',
      t: { pt: 'Etapa 1: concluir as 8 zonas', en: 'Step 1: clear the 8 zones' },
      d: { pt: 'Avance zona por zona até zerar o jogo.', en: 'Move zone by zone until you finish the game.' },
      legCapa: { pt: '', en: '' },
      corpo: [
        { h: { pt: 'O que fazer', en: 'What to do' } },
        { p: { pt: 'Conclua BONExYARD, SNOWYxSHORES, LIMINALxDESERT, GORYxGRASSLANDS, FUNGALxFOREST, SMOLDERINGxDEPTHS, HEAVENLYxGATES e VASTxVOID. Isso rende 8 bronzes e o ouro Ballbylon Has Risen, ao concluir o jogo.', en: 'Clear BONExYARD, SNOWYxSHORES, LIMINALxDESERT, GORYxGRASSLANDS, FUNGALxFOREST, SMOLDERINGxDEPTHS, HEAVENLYxGATES and VASTxVOID. That earns 8 bronzes and the Ballbylon Has Risen gold, for finishing the game.' } }
      ] },
    { id: 'etapa-2-bolas-e-vila', setor: 'Etapa 2', status: 'base', img: '',
      t: { pt: 'Etapa 2: bolas e vila', en: 'Step 2: balls and village' },
      d: { pt: 'Troféus de fusão, recursos e construções, que vêm junto das partidas.', en: 'Fusion, resource and building trophies, which come along with your runs.' },
      legCapa: { pt: '', en: '' },
      corpo: [
        { h: { pt: 'O que fazer', en: 'What to do' } },
        { ul: [
          { pt: 'Evolução, fusão e as cinco criações (Nosferatu, Nuclear Bomb, Satan, Soul Reaver, Deadeye\'s Cross).', en: 'Evolution, fusion and the five creations (Nosferatu, Nuclear Bomb, Satan, Soul Reaver, Deadeye\'s Cross).' },
          { pt: 'Recursos: totais e colheitas únicas de ouro, trigo, madeira e pedra, e 50 plantas.', en: 'Resources: totals and single harvests of gold, wheat, wood and stone, and 50 blueprints.' },
          { pt: 'Vila: Worker\'s Guild, Evolution Chamber, Relic Collector, Bag Maker, Carpenter, 15 moradias, 5 expansões, um Monument e um troféu (Trophy).', en: 'Village: Worker\'s Guild, Evolution Chamber, Relic Collector, Bag Maker, Carpenter, 15 housing structures, 5 expansions, a Monument and a Trophy.' }
        ] }
      ] },
    { id: 'etapa-3-personagens', setor: 'Etapa 3', status: 'base', img: '',
      t: { pt: 'Etapa 3: personagens e zonas conquistadas', en: 'Step 3: characters and conquered zones' },
      d: { pt: 'A parte mais longa: 16 personagens e 8 zonas com 10 personagens.', en: 'The longest part: 16 characters and 8 zones with 10 characters.' },
      legCapa: { pt: '', en: '' },
      corpo: [
        { h: { pt: 'O que fazer', en: 'What to do' } },
        { p: { pt: 'Complete todas as fases com cada um dos 16 personagens e complete cada zona com 10 personagens diferentes (troféus "Conquered"). Planeje as partidas para ir avançando as duas listas ao mesmo tempo.', en: 'Clear every level with each of the 16 characters and clear each zone with 10 different characters ("Conquered" trophies). Plan your runs to move both lists forward at the same time.' } }
      ] },
    { id: 'etapa-4-limpeza', setor: 'Etapa 4', status: 'base', img: '',
      t: { pt: 'Etapa 4: limpeza e Enciclopédia', en: 'Step 4: cleanup and Encyclopedia' },
      d: { pt: 'Legion Slayer, Scholar e o que faltar.', en: 'Legion Slayer, Scholar and whatever is left.' },
      legCapa: { pt: '', en: '' },
      corpo: [
        { h: { pt: 'O que fazer', en: 'What to do' } },
        { p: { pt: 'Derrote 100.000 inimigos (Legion Slayer), desbloqueie todas as entradas da Enciclopédia do jogo base (Scholar) e confira a aba Troféus para fechar o que sobrou.', en: 'Defeat 100,000 enemies (Legion Slayer), unlock every base-game Encyclopedia entry (Scholar) and check the Trophies tab to close what is left.' } }
      ] }
  ],
  mapas: [                       // "Fases": as 8 zonas do jogo base e as 4 da DLC
    { t: 'BONExYARD', d: { pt: 'Zona do jogo base. Dois troféus: completar a zona e completar com 10 personagens diferentes.', en: 'Base-game zone. Two trophies: clear the zone and clear it with 10 different characters.' }, href: '#jogo/ball-x-pit/trofeus' },
    { t: 'SNOWYxSHORES', d: { pt: 'Zona do jogo base. Dois troféus: completar a zona e completar com 10 personagens diferentes.', en: 'Base-game zone. Two trophies: clear the zone and clear it with 10 different characters.' }, href: '#jogo/ball-x-pit/trofeus' },
    { t: 'LIMINALxDESERT', d: { pt: 'Zona do jogo base. Dois troféus: completar a zona e completar com 10 personagens diferentes.', en: 'Base-game zone. Two trophies: clear the zone and clear it with 10 different characters.' }, href: '#jogo/ball-x-pit/trofeus' },
    { t: 'GORYxGRASSLANDS', d: { pt: 'Zona do jogo base. Dois troféus: completar a zona e completar com 10 personagens diferentes.', en: 'Base-game zone. Two trophies: clear the zone and clear it with 10 different characters.' }, href: '#jogo/ball-x-pit/trofeus' },
    { t: 'FUNGALxFOREST', d: { pt: 'Zona do jogo base. Dois troféus: completar a zona e completar com 10 personagens diferentes.', en: 'Base-game zone. Two trophies: clear the zone and clear it with 10 different characters.' }, href: '#jogo/ball-x-pit/trofeus' },
    { t: 'SMOLDERINGxDEPTHS', d: { pt: 'Zona do jogo base. Dois troféus: completar a zona e completar com 10 personagens diferentes.', en: 'Base-game zone. Two trophies: clear the zone and clear it with 10 different characters.' }, href: '#jogo/ball-x-pit/trofeus' },
    { t: 'HEAVENLYxGATES', d: { pt: 'Zona do jogo base. Dois troféus: completar a zona e completar com 10 personagens diferentes.', en: 'Base-game zone. Two trophies: clear the zone and clear it with 10 different characters.' }, href: '#jogo/ball-x-pit/trofeus' },
    { t: 'VASTxVOID', d: { pt: 'Zona do jogo base. Dois troféus: completar a zona e completar com 10 personagens diferentes.', en: 'Base-game zone. Two trophies: clear the zone and clear it with 10 different characters.' }, href: '#jogo/ball-x-pit/trofeus' },
    { t: 'FLOODEDxSEWERS', d: { pt: 'Zona da DLC Risen Ballbylon. Dois troféus: completar e completar com 30 personagens.', en: 'Risen Ballbylon DLC zone. Two trophies: clear it and clear it with 30 characters.' }, href: '#jogo/ball-x-pit/trofeus' },
    { t: 'SHADOWEDxALLEYS', d: { pt: 'Zona da DLC Risen Ballbylon. Dois troféus: completar e completar com 30 personagens.', en: 'Risen Ballbylon DLC zone. Two trophies: clear it and clear it with 30 characters.' }, href: '#jogo/ball-x-pit/trofeus' },
    { t: 'CASTLExRAMPARTS', d: { pt: 'Zona da DLC Risen Ballbylon. Dois troféus: completar e completar com 30 personagens.', en: 'Risen Ballbylon DLC zone. Two trophies: clear it and clear it with 30 characters.' }, href: '#jogo/ball-x-pit/trofeus' },
    { t: 'OUTSTRETCHEDxSPIRE', d: { pt: 'Zona da DLC Risen Ballbylon. Dois troféus: completar e completar com 30 personagens.', en: 'Risen Ballbylon DLC zone. Two trophies: clear it and clear it with 30 characters.' }, href: '#jogo/ball-x-pit/trofeus' }
  ],
  bestiario: [],
  personagens: [                 // os 16 personagens com troféu próprio. Nomes em português traduzidos por mim; o nome em inglês é o do jogo
    { id: 'the-warrior', nome: 'The Warrior', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu True Warrior.', en: 'Clearing every level with this character earns the True Warrior trophy.' },
      tags: [ { pt: 'Troféu: True Warrior', en: 'Trophy: True Warrior' } ], descricao: { pt: 'Tradução do nome: O Guerreiro. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the True Warrior trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-repentant', nome: 'The Repentant', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Repentance.', en: 'Clearing every level with this character earns the Repentance trophy.' },
      tags: [ { pt: 'Troféu: Repentance', en: 'Trophy: Repentance' } ], descricao: { pt: 'Tradução do nome: O Arrependido. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Repentance trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-itchy-finger', nome: 'The Itchy Finger', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Itch Scratched.', en: 'Clearing every level with this character earns the Itch Scratched trophy.' },
      tags: [ { pt: 'Troféu: Itch Scratched', en: 'Trophy: Itch Scratched' } ], descricao: { pt: 'Tradução do nome: O Dedo Coçando. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Itch Scratched trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-cogitator', nome: 'The Cogitator', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Cogitated.', en: 'Clearing every level with this character earns the Cogitated trophy.' },
      tags: [ { pt: 'Troféu: Cogitated', en: 'Trophy: Cogitated' } ], descricao: { pt: 'Tradução do nome: O Pensador. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Cogitated trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-tactician', nome: 'The Tactician', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Master General.', en: 'Clearing every level with this character earns the Master General trophy.' },
      tags: [ { pt: 'Troféu: Master General', en: 'Trophy: Master General' } ], descricao: { pt: 'Tradução do nome: O Estrategista. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Master General trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-spendthrift', nome: 'The Spendthrift', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu All Spent.', en: 'Clearing every level with this character earns the All Spent trophy.' },
      tags: [ { pt: 'Troféu: All Spent', en: 'Trophy: All Spent' } ], descricao: { pt: 'Tradução do nome: O Esbanjador. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the All Spent trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-embedded', nome: 'The Embedded', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Embedder.', en: 'Clearing every level with this character earns the Embedder trophy.' },
      tags: [ { pt: 'Troféu: Embedder', en: 'Trophy: Embedder' } ], descricao: { pt: 'Tradução do nome: O Incrustado. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Embedder trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-radical', nome: 'The Radical', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Radicalized.', en: 'Clearing every level with this character earns the Radicalized trophy.' },
      tags: [ { pt: 'Troféu: Radicalized', en: 'Trophy: Radicalized' } ], descricao: { pt: 'Tradução do nome: O Radical. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Radicalized trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-empty-nester', nome: 'The Empty Nester', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Golden Years.', en: 'Clearing every level with this character earns the Golden Years trophy.' },
      tags: [ { pt: 'Troféu: Golden Years', en: 'Trophy: Golden Years' } ], descricao: { pt: 'Tradução do nome: O Ninho Vazio. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Golden Years trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-shade', nome: 'The Shade', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Long Shadow.', en: 'Clearing every level with this character earns the Long Shadow trophy.' },
      tags: [ { pt: 'Troféu: Long Shadow', en: 'Trophy: Long Shadow' } ], descricao: { pt: 'Tradução do nome: A Sombra. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Long Shadow trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-cohabitants', nome: 'The Cohabitants', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Unpacked.', en: 'Clearing every level with this character earns the Unpacked trophy.' },
      tags: [ { pt: 'Troféu: Unpacked', en: 'Trophy: Unpacked' } ], descricao: { pt: 'Tradução do nome: Os Coabitantes. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Unpacked trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-physicist', nome: 'The Physicist', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Gravity\'s Rainbow.', en: 'Clearing every level with this character earns the Gravity\'s Rainbow trophy.' },
      tags: [ { pt: 'Troféu: Gravity\'s Rainbow', en: 'Trophy: Gravity\'s Rainbow' } ], descricao: { pt: 'Tradução do nome: O Físico. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Gravity\'s Rainbow trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-shieldbearer', nome: 'The Shieldbearer', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Brick Breaker.', en: 'Clearing every level with this character earns the Brick Breaker trophy.' },
      tags: [ { pt: 'Troféu: Brick Breaker', en: 'Trophy: Brick Breaker' } ], descricao: { pt: 'Tradução do nome: O Porta-escudo. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Brick Breaker trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-makeshift-sisyphus', nome: 'The Makeshift Sisyphus', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Herculean.', en: 'Clearing every level with this character earns the Herculean trophy.' },
      tags: [ { pt: 'Troféu: Herculean', en: 'Trophy: Herculean' } ], descricao: { pt: 'Tradução do nome: O Sísifo Improvisado. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Herculean trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-flagellant', nome: 'The Flagellant', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Masochist.', en: 'Clearing every level with this character earns the Masochist trophy.' },
      tags: [ { pt: 'Troféu: Masochist', en: 'Trophy: Masochist' } ], descricao: { pt: 'Tradução do nome: O Flagelante. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Masochist trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } },
    { id: 'the-juggler', nome: 'The Juggler', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Completar todas as fases com este personagem vale o troféu Entertainer.', en: 'Clearing every level with this character earns the Entertainer trophy.' },
      tags: [ { pt: 'Troféu: Entertainer', en: 'Trophy: Entertainer' } ], descricao: { pt: 'Tradução do nome: O Malabarista. Entra nos troféus de completar todas as fases e, junto com outros, nos de completar cada zona com 10 personagens diferentes.', en: 'Clearing every level with this character earns the Entertainer trophy. Also counts toward the clear-each-zone-with-10-characters trophies.' } }
  ],
  equipamentos: [],
  armaduras: [],
  perdiveis: [],
  novidades: [
    { id: 'guia-criado', badge: 'novo', data: '2026-11-24', img: '',
      t: { pt: 'Guia do BALL x PIT criado', en: 'BALL x PIT guide created' },
      d: { pt: 'A base do guia está no ar: visão geral, roteiro, fases, personagens e os 75 troféus.', en: 'The base of the guide is up: overview, roadmap, stages, characters and the 75 trophies.' },
      legCapa: { pt: '', en: '' },
      corpo: [ { h: { pt: 'O que já existe', en: 'What already exists' } }, { ul: [ { pt: 'Visão geral e jogabilidade.', en: 'Overview and gameplay.' }, { pt: 'Roteiro em 4 etapas.', en: '4-step roadmap.' }, { pt: 'Lista dos 75 troféus, com os 11 da DLC.', en: 'The 75-trophy list, with the 11 DLC ones.' } ] } ] }
  ],
  trilha: [
    { por: 'Amos Roddy', t: { pt: 'Trilha do jogo', en: 'Game soundtrack' }, youtube: '', onde: { pt: 'Durante todo o jogo', en: 'Throughout the game' }, d: { pt: 'A trilha é de Amos Roddy.', en: 'The soundtrack is by Amos Roddy.' } }
  ],
  detalhes: [                    // EXEMPLO: mural de imagens. Coloque o arquivo em imagens/ e escreva img: 'imagens/arquivo.jpg'
    { t: { pt: 'Exemplo: imagem do mural', en: 'Example: mural image' }, larg: 2, prop: '2 / 1', img: '', alt: { pt: 'Descrição da imagem', en: 'Image description' } }
  ],
  curiosidades: [
    { t: { pt: 'Feito por uma pessoa só no design e na programação', en: 'Designed and programmed by one person' }, d: { pt: 'Kenny Sun foi diretor, designer e programador do jogo.', en: 'Kenny Sun was the game\'s director, designer and programmer.' } },
    { t: { pt: 'Mais de 1 milhão de cópias', en: 'Over 1 million copies' }, d: { pt: 'O jogo passou de 1 milhão de cópias vendidas até dezembro de 2025.', en: 'The game sold over 1 million copies by December 2025.' } }
  ],
  desenvolvedores: [
    { nome: 'Kenny Sun', cargo: { pt: 'Desenvolvedor', en: 'Developer' }, neste: { pt: 'Direção, design e programação.', en: 'Direction, design and programming.' } },
    { nome: 'Devolver Digital', cargo: { pt: 'Publicadora', en: 'Publisher' }, neste: { pt: 'Publicou o jogo.', en: 'Published the game.' } },
    { nome: 'Amos Roddy', cargo: { pt: 'Compositor', en: 'Composer' }, neste: { pt: 'Compôs a trilha.', en: 'Composed the soundtrack.' } }
  ],
  evolucoes: [
    { h: { pt: 'Fissão, fusão e evolução', en: 'Fission, fusion and evolution' } },
    { p: { pt: 'Itens especiais podem ser divididos (fissão), fundidos ou evoluídos para formar bolas mais fortes. É o coração do jogo e rende vários troféus.', en: 'Special items can be split (fission), fused or evolved to form stronger balls. It is the heart of the game and earns several trophies.' } },
    { ul: [
      { pt: 'Evolution: criar a primeira evolução.', en: 'Evolution: create your first evolution.' },
      { pt: 'Fusion: fundir duas bolas pela primeira vez.', en: 'Fusion: fuse two balls for the first time.' },
      { pt: 'Fusion Evolution: fundir duas bolas já evoluídas.', en: 'Fusion Evolution: fuse two evolved balls.' },
      { pt: 'Criações: Nosferatu, Nuclear Bomb, Satan, Soul Reaver e Deadeye\'s Cross.', en: 'Creations: Nosferatu, Nuclear Bomb, Satan, Soul Reaver and Deadeye\'s Cross.' }
    ] }
  ],
  dlcs: [
    { h: { pt: 'Risen Ballbylon', en: 'Risen Ballbylon' } },
    { p: { pt: 'Expansão que acrescenta quatro campos de batalha com chefe, novos personagens, bolas e prédios, e os cristais como novo recurso. Os 11 troféus dela ficam em um grupo à parte da platina.', en: 'Expansion that adds four battlefields with a boss, new characters, balls and buildings, and Crystals as a new resource. Its 11 trophies are in a group separate from the platinum.' } },
    { ul: [
      { pt: 'Campos de batalha: FLOODEDxSEWERS, SHADOWEDxALLEYS, CASTLExRAMPARTS e OUTSTRETCHEDxSPIRE, cada um com dois troféus (concluir e concluir com 30 personagens).', en: 'Battlefields: FLOODEDxSEWERS, SHADOWEDxALLEYS, CASTLExRAMPARTS and OUTSTRETCHEDxSPIRE, each with two trophies (clear it and clear it with 30 characters).' },
      { pt: 'Crystalline: coletar 1.000 cristais no total.', en: 'Crystalline: collect 1,000 Crystals in total.' },
      { pt: 'Risen Scholar e Ballbylon Falls Again: pratas por completar a Enciclopédia da DLC e por concluir a expansão.', en: 'Risen Scholar and Ballbylon Falls Again: silvers for completing the DLC Encyclopedia and for finishing the expansion.' }
    ] }
  ],
  trofeus: [
      // ── Jogo base (64) ──
      { ex: 'legend-of-new-ballbylon', tipo: 'platina', nome: { pt: 'Legend of New Ballbylon', en: 'Legend of New Ballbylon' }, desc: { pt: 'Obtenha todos os troféus de BALL x PIT.', en: 'Obtain all trophies in BALL x PIT' } },
      { ex: 'bonexyard', tipo: 'bronze', nome: { pt: 'BONExYARD', en: 'BONExYARD' }, desc: { pt: 'Complete BONExYARD.', en: 'Complete the BONExYARD' } },
      { ex: 'snowyxshores', tipo: 'bronze', nome: { pt: 'SNOWYxSHORES', en: 'SNOWYxSHORES' }, desc: { pt: 'Complete SNOWYxSHORES.', en: 'Complete the SNOWYxSHORES' } },
      { ex: 'liminalxdesert', tipo: 'bronze', nome: { pt: 'LIMINALxDESERT', en: 'LIMINALxDESERT' }, desc: { pt: 'Complete LIMINALxDESERT.', en: 'Complete the LIMINALxDESERT' } },
      { ex: 'goryxgrasslands', tipo: 'bronze', nome: { pt: 'GORYxGRASSLANDS', en: 'GORYxGRASSLANDS' }, desc: { pt: 'Complete GORYxGRASSLANDS.', en: 'Complete the GORYxGRASSLANDS' } },
      { ex: 'fungalxforest', tipo: 'bronze', nome: { pt: 'FUNGALxFOREST', en: 'FUNGALxFOREST' }, desc: { pt: 'Complete FUNGALxFOREST.', en: 'Complete the FUNGALxFOREST' } },
      { ex: 'smolderingxdepths', tipo: 'bronze', nome: { pt: 'SMOLDERINGxDEPTHS', en: 'SMOLDERINGxDEPTHS' }, desc: { pt: 'Complete SMOLDERINGxDEPTHS.', en: 'Complete the SMOLDERINGxDEPTHS' } },
      { ex: 'heavenlyxgates', tipo: 'bronze', nome: { pt: 'HEAVENLYxGATES', en: 'HEAVENLYxGATES' }, desc: { pt: 'Complete HEAVENLYxGATES.', en: 'Complete the HEAVENLYxGATES' } },
      { ex: 'vastxvoid', tipo: 'bronze', nome: { pt: 'VASTxVOID', en: 'VASTxVOID' }, desc: { pt: 'Complete VASTxVOID.', en: 'Complete the VASTxVOID' } },
      { ex: 'bonexyard-conquered', tipo: 'bronze', nome: { pt: 'BONExYARD Conquered', en: 'BONExYARD Conquered' }, desc: { pt: 'Complete BONExYARD com 10 personagens diferentes.', en: 'Complete the BONExYARD with 10 different characters' } },
      { ex: 'snowyxshores-conquered', tipo: 'bronze', nome: { pt: 'SNOWYxSHORES Conquered', en: 'SNOWYxSHORES Conquered' }, desc: { pt: 'Complete SNOWYxSHORES com 10 personagens diferentes.', en: 'Complete the SNOWYxSHORES with 10 different characters' } },
      { ex: 'liminalxdesert-conquered', tipo: 'bronze', nome: { pt: 'LIMINALxDESERT Conquered', en: 'LIMINALxDESERT Conquered' }, desc: { pt: 'Complete LIMINALxDESERT com 10 personagens diferentes.', en: 'Complete the LIMINALxDESERT with 10 different characters' } },
      { ex: 'goryxgrasslands-conquered', tipo: 'bronze', nome: { pt: 'GORYxGRASSLANDS Conquered', en: 'GORYxGRASSLANDS Conquered' }, desc: { pt: 'Complete GORYxGRASSLANDS com 10 personagens diferentes.', en: 'Complete the GORYxGRASSLANDS with 10 different characters' } },
      { ex: 'fungalxforest-conquered', tipo: 'bronze', nome: { pt: 'FUNGALxFOREST Conquered', en: 'FUNGALxFOREST Conquered' }, desc: { pt: 'Complete FUNGALxFOREST com 10 personagens diferentes.', en: 'Complete the FUNGALxFOREST with 10 different characters' } },
      { ex: 'smolderingxdepths-conquered', tipo: 'bronze', nome: { pt: 'SMOLDERINGxDEPTHS Conquered', en: 'SMOLDERINGxDEPTHS Conquered' }, desc: { pt: 'Complete SMOLDERINGxDEPTHS com 10 personagens diferentes.', en: 'Complete the SMOLDERINGxDEPTHS with 10 different characters' } },
      { ex: 'heavenlyxgates-conquered', tipo: 'bronze', nome: { pt: 'HEAVENLYxGATES Conquered', en: 'HEAVENLYxGATES Conquered' }, desc: { pt: 'Complete HEAVENLYxGATES com 10 personagens diferentes.', en: 'Complete the HEAVENLYxGATES with 10 different characters' } },
      { ex: 'vastxvoid-conquered', tipo: 'bronze', nome: { pt: 'VASTxVOID Conquered', en: 'VASTxVOID Conquered' }, desc: { pt: 'Complete VASTxVOID com 10 personagens diferentes.', en: 'Complete the VASTxVOID with 10 different characters' } },
      { ex: 'true-warrior', tipo: 'bronze', nome: { pt: 'True Warrior', en: 'True Warrior' }, desc: { pt: 'Complete todas as fases com O Guerreiro (The Warrior).', en: 'Complete every level with The Warrior' } },
      { ex: 'repentance', tipo: 'bronze', nome: { pt: 'Repentance', en: 'Repentance' }, desc: { pt: 'Complete todas as fases com O Arrependido (The Repentant).', en: 'Complete every level with The Repentant' } },
      { ex: 'itch-scratched', tipo: 'bronze', nome: { pt: 'Itch Scratched', en: 'Itch Scratched' }, desc: { pt: 'Complete todas as fases com O Dedo Coçando (The Itchy Finger).', en: 'Complete every level with The Itchy Finger' } },
      { ex: 'cogitated', tipo: 'bronze', nome: { pt: 'Cogitated', en: 'Cogitated' }, desc: { pt: 'Complete todas as fases com O Pensador (The Cogitator).', en: 'Complete every level with The Cogitator' } },
      { ex: 'master-general', tipo: 'bronze', nome: { pt: 'Master General', en: 'Master General' }, desc: { pt: 'Complete todas as fases com O Estrategista (The Tactician).', en: 'Complete every level with The Tactician' } },
      { ex: 'all-spent', tipo: 'bronze', nome: { pt: 'All Spent', en: 'All Spent' }, desc: { pt: 'Complete todas as fases com O Esbanjador (The Spendthrift).', en: 'Complete every level with The Spendthrift' } },
      { ex: 'embedder', tipo: 'bronze', nome: { pt: 'Embedder', en: 'Embedder' }, desc: { pt: 'Complete todas as fases com O Incrustado (The Embedded).', en: 'Complete every level with The Embedded' } },
      { ex: 'radicalized', tipo: 'bronze', nome: { pt: 'Radicalized', en: 'Radicalized' }, desc: { pt: 'Complete todas as fases com O Radical (The Radical).', en: 'Complete every level with The Radical' } },
      { ex: 'golden-years', tipo: 'bronze', nome: { pt: 'Golden Years', en: 'Golden Years' }, desc: { pt: 'Complete todas as fases com O Ninho Vazio (The Empty Nester).', en: 'Complete every level with The Empty Nester' } },
      { ex: 'long-shadow', tipo: 'bronze', nome: { pt: 'Long Shadow', en: 'Long Shadow' }, desc: { pt: 'Complete todas as fases com A Sombra (The Shade).', en: 'Complete every level with The Shade' } },
      { ex: 'unpacked', tipo: 'bronze', nome: { pt: 'Unpacked', en: 'Unpacked' }, desc: { pt: 'Complete todas as fases com Os Coabitantes (The Cohabitants).', en: 'Complete every level with The Cohabitants' } },
      { ex: 'gravitys-rainbow', tipo: 'bronze', nome: { pt: 'Gravity\'s Rainbow', en: 'Gravity\'s Rainbow' }, desc: { pt: 'Complete todas as fases com O Físico (The Physicist).', en: 'Complete every level with The Physicist' } },
      { ex: 'brick-breaker', tipo: 'bronze', nome: { pt: 'Brick Breaker', en: 'Brick Breaker' }, desc: { pt: 'Complete todas as fases com O Porta-escudo (The Shieldbearer).', en: 'Complete every level with The Shieldbearer' } },
      { ex: 'herculean', tipo: 'bronze', nome: { pt: 'Herculean', en: 'Herculean' }, desc: { pt: 'Complete todas as fases com O Sísifo Improvisado (The Makeshift Sisyphus).', en: 'Complete every level with The Makeshift Sisyphus' } },
      { ex: 'masochist', tipo: 'bronze', nome: { pt: 'Masochist', en: 'Masochist' }, desc: { pt: 'Complete todas as fases com O Flagelante (The Flagellant).', en: 'Complete every level with The Flagellant' } },
      { ex: 'entertainer', tipo: 'bronze', nome: { pt: 'Entertainer', en: 'Entertainer' }, desc: { pt: 'Complete todas as fases com O Malabarista (The Juggler).', en: 'Complete every level with The Juggler' } },
      { ex: 'evolution', tipo: 'bronze', nome: { pt: 'Evolution', en: 'Evolution' }, desc: { pt: 'Crie sua primeira evolução.', en: 'Create your first evolution' } },
      { ex: 'fusion', tipo: 'bronze', nome: { pt: 'Fusion', en: 'Fusion' }, desc: { pt: 'Funda duas bolas pela primeira vez.', en: 'Fuse two balls for the first time' } },
      { ex: 'nosferatu', tipo: 'bronze', nome: { pt: 'Nosferatu', en: 'Nosferatu' }, desc: { pt: 'Crie o Nosferatu.', en: 'Create Nosferatu' } },
      { ex: 'nuclear-bomb', tipo: 'bronze', nome: { pt: 'Nuclear Bomb', en: 'Nuclear Bomb' }, desc: { pt: 'Crie uma Bomba Nuclear.', en: 'Create a Nuclear Bomb' } },
      { ex: 'satan', tipo: 'bronze', nome: { pt: 'Satan', en: 'Satan' }, desc: { pt: 'Crie o Satan.', en: 'Create Satan' } },
      { ex: 'soul-reaver', tipo: 'bronze', nome: { pt: 'Soul Reaver', en: 'Soul Reaver' }, desc: { pt: 'Crie um Soul Reaver.', en: 'Create a Soul Reaver' } },
      { ex: 'deadeyes-cross', tipo: 'bronze', nome: { pt: 'Deadeye\'s Cross', en: 'Deadeye\'s Cross' }, desc: { pt: 'Crie a Deadeye\'s Cross.', en: 'Create Deadeye\'s Cross' } },
      { ex: 'legion-slayer', tipo: 'bronze', nome: { pt: 'Legion Slayer', en: 'Legion Slayer' }, desc: { pt: 'Derrote 100.000 inimigos.', en: 'Kill 100,000 enemies' } },
      { ex: 'riches', tipo: 'bronze', nome: { pt: 'Riches', en: 'Riches' }, desc: { pt: 'Colete 5.000 de ouro no total.', en: 'Collect 5000 gold in total' } },
      { ex: 'wheat-farmer', tipo: 'bronze', nome: { pt: 'Wheat Farmer', en: 'Wheat Farmer' }, desc: { pt: 'Colete 1.000 de trigo no total.', en: 'Collect 1000 wheat in total' } },
      { ex: 'woodcutter', tipo: 'bronze', nome: { pt: 'Woodcutter', en: 'Woodcutter' }, desc: { pt: 'Colete 1.000 de madeira no total.', en: 'Collect 1000 wood in total' } },
      { ex: 'stone-miner', tipo: 'bronze', nome: { pt: 'Stone Miner', en: 'Stone Miner' }, desc: { pt: 'Colete 1.000 de pedra no total.', en: 'Collect 1000 stone in total' } },
      { ex: 'gold-miner', tipo: 'bronze', nome: { pt: 'Gold Miner', en: 'Gold Miner' }, desc: { pt: 'Minere 1.000 de ouro em uma única colheita.', en: 'Mine 1000 gold in a single harvest' } },
      { ex: 'bountiful-harvest', tipo: 'bronze', nome: { pt: 'Bountiful Harvest', en: 'Bountiful Harvest' }, desc: { pt: 'Colete 100 de trigo em uma única colheita.', en: 'Collect 100 wheat in a single harvest' } },
      { ex: 'deforestation', tipo: 'bronze', nome: { pt: 'Deforestation', en: 'Deforestation' }, desc: { pt: 'Colete 100 de madeira em uma única colheita.', en: 'Collect 100 wood in a single harvest' } },
      { ex: 'boulder-breaker', tipo: 'bronze', nome: { pt: 'Boulder Breaker', en: 'Boulder Breaker' }, desc: { pt: 'Colete 100 de pedra em uma única colheita.', en: 'Collect 100 stone in a single harvest' } },
      { ex: 'city-planner', tipo: 'bronze', nome: { pt: 'City Planner', en: 'City Planner' }, desc: { pt: 'Colete 50 plantas (blueprints).', en: 'Collect 50 blueprints' } },
      { ex: 'trophy', tipo: 'bronze', nome: { pt: 'Trophy', en: 'Trophy' }, desc: { pt: 'Construa um troféu.', en: 'Construct a trophy' } },
      { ex: 'monument', tipo: 'bronze', nome: { pt: 'Monument', en: 'Monument' }, desc: { pt: 'Construa um prédio com melhoria infinita.', en: 'Construct an infinitely upgradeable building' } },
      { ex: 'workers-guild', tipo: 'bronze', nome: { pt: 'Worker\'s Guild', en: 'Worker\'s Guild' }, desc: { pt: 'Construa a Guilda dos Trabalhadores (Worker\'s Guild).', en: 'Construct the Worker\'s Guild' } },
      { ex: 'evolution-chamber', tipo: 'bronze', nome: { pt: 'Evolution Chamber', en: 'Evolution Chamber' }, desc: { pt: 'Construa a Câmara de Evolução (Evolution Chamber).', en: 'Construct the Evolution Chamber' } },
      { ex: 'relic-collector', tipo: 'bronze', nome: { pt: 'Relic Collector', en: 'Relic Collector' }, desc: { pt: 'Construa o Colecionador de Relíquias (Relic Collector).', en: 'Construct the Relic Collector' } },
      { ex: 'bag-maker', tipo: 'bronze', nome: { pt: 'Bag Maker', en: 'Bag Maker' }, desc: { pt: 'Construa o Fabricante de Bolsas (Bag Maker).', en: 'Construct the Bag Maker' } },
      { ex: 'carpenter', tipo: 'bronze', nome: { pt: 'Carpenter', en: 'Carpenter' }, desc: { pt: 'Construa o Carpinteiro (Carpenter).', en: 'Construct the Carpenter' } },
      { ex: 'land-grabber', tipo: 'bronze', nome: { pt: 'Land Grabber', en: 'Land Grabber' }, desc: { pt: 'Expanda sua base 5 vezes.', en: 'Expand your base 5 times' } },
      { ex: 'structural-power', tipo: 'bronze', nome: { pt: 'Structural Power', en: 'Structural Power' }, desc: { pt: 'Alcance +5 de bônus em qualquer atributo por meio de uma construção.', en: 'Reach +5 bonus in any attribute from a building' } },
      { ex: 's-rank', tipo: 'bronze', nome: { pt: 'S Rank', en: 'S Rank' }, desc: { pt: 'Alcance escala S em qualquer atributo.', en: 'Reach S stat scaling in any attribute' } },
      { ex: 'neighborhood', tipo: 'bronze', nome: { pt: 'Neighborhood', en: 'Neighborhood' }, desc: { pt: 'Construa 15 moradias.', en: 'Build 15 housing structures' } },
      { ex: 'fusion-evolution', tipo: 'bronze', nome: { pt: 'Fusion Evolution', en: 'Fusion Evolution' }, desc: { pt: 'Funda duas bolas já evoluídas.', en: 'Fuse two evolved balls' } },
      { ex: 'scholar', tipo: 'prata', nome: { pt: 'Scholar', en: 'Scholar' }, desc: { pt: 'Desbloqueie todas as entradas do jogo base na Enciclopédia.', en: 'Unlock every base game entry in the Encyclopedia' } },
      { ex: 'ballbylon-has-risen', tipo: 'ouro', nome: { pt: 'Ballbylon Has Risen', en: 'Ballbylon Has Risen' }, desc: { pt: 'Conclua o jogo.', en: 'Complete the game' } },
      // ── DLC Risen Ballbylon (11) ──
      { ex: 'floodedxsewers', tipo: 'bronze', nome: { pt: 'FLOODEDxSEWERS', en: 'FLOODEDxSEWERS' }, desc: { pt: 'Complete FLOODEDxSEWERS.', en: 'Complete the FLOODEDxSEWERS' } },
      { ex: 'floodedxsewers-dominated', tipo: 'bronze', nome: { pt: 'FLOODEDxSEWERS Dominated', en: 'FLOODEDxSEWERS Dominated' }, desc: { pt: 'Complete FLOODEDxSEWERS com 30 personagens.', en: 'Complete the FLOODEDxSEWERS with 30 characters' } },
      { ex: 'shadowedxalleys', tipo: 'bronze', nome: { pt: 'SHADOWEDxALLEYS', en: 'SHADOWEDxALLEYS' }, desc: { pt: 'Complete SHADOWEDxALLEYS.', en: 'Complete the SHADOWEDxALLEYS' } },
      { ex: 'shadowedxalleys-dominated', tipo: 'bronze', nome: { pt: 'SHADOWEDxALLEYS Dominated', en: 'SHADOWEDxALLEYS Dominated' }, desc: { pt: 'Complete SHADOWEDxALLEYS com 30 personagens.', en: 'Complete the SHADOWEDxALLEYS with 30 characters' } },
      { ex: 'castlexramparts', tipo: 'bronze', nome: { pt: 'CASTLExRAMPARTS', en: 'CASTLExRAMPARTS' }, desc: { pt: 'Complete CASTLExRAMPARTS.', en: 'Complete the CASTLExRAMPARTS' } },
      { ex: 'castlexramparts-dominated', tipo: 'bronze', nome: { pt: 'CASTLExRAMPARTS Dominated', en: 'CASTLExRAMPARTS Dominated' }, desc: { pt: 'Complete CASTLExRAMPARTS com 30 personagens.', en: 'Complete the CASTLExRAMPARTS with 30 characters' } },
      { ex: 'outstretchedxspire', tipo: 'bronze', nome: { pt: 'OUTSTRETCHEDxSPIRE', en: 'OUTSTRETCHEDxSPIRE' }, desc: { pt: 'Complete OUTSTRETCHEDxSPIRE.', en: 'Complete the OUTSTRETCHEDxSPIRE' } },
      { ex: 'outstretchedxspire-dominated', tipo: 'bronze', nome: { pt: 'OUTSTRETCHEDxSPIRE Dominated', en: 'OUTSTRETCHEDxSPIRE Dominated' }, desc: { pt: 'Complete OUTSTRETCHEDxSPIRE com 30 personagens.', en: 'Complete the OUTSTRETCHEDxSPIRE with 30 characters' } },
      { ex: 'crystalline', tipo: 'bronze', nome: { pt: 'Crystalline', en: 'Crystalline' }, desc: { pt: 'Colete 1.000 de cristais no total.', en: 'Collect 1000 Crystals in total' } },
      { ex: 'risen-scholar', tipo: 'prata', nome: { pt: 'Risen Scholar', en: 'Risen Scholar' }, desc: { pt: 'Desbloqueie todas as entradas de Risen Ballbylon na Enciclopédia.', en: 'Unlock every Risen Ballbylon entry in the Encyclopedia' } },
      { ex: 'ballbylon-falls-again', tipo: 'prata', nome: { pt: 'Ballbylon Falls Again', en: 'Ballbylon Falls Again' }, desc: { pt: 'Conclua a DLC Risen Ballbylon.', en: 'Complete the Risen Ballbylon DLC' } }
  ],
  ocultas: ['vozes', 'equipamentos', 'armaduras', 'bestiario', 'perdiveis'],   // abas escondidas: o jogo não as usa (sem perdíveis conhecidos)
  rotulos: { mapas: { pt: 'Fases', en: 'Stages' }, evolucoes: { pt: 'Fissão e evolução', en: 'Fission and evolution' } },
  secoesExtra: ['evolucoes'],
  refs: {}
}
