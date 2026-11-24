'use strict'

// ══════════════════════════════════════════════════════════════════════════
// GUIA DESTE ARQUIVO — conteúdo do jogo Vampire Survivors (base criada a partir do modelo novo-jogo.js)
// Seções com [] mostram "em preparo" no site, sem quebrar nada. Para preencher uma seção, copie o formato dela de
// dados/guias/abiotic-factor.js ou gta-vi.js (cada seção tem comentários explicando os campos).
// Troféus: 284 cadastrados a partir do Exophase (PS5, nov/2026), na ordem da página: 41 da lista base + 29 seções de DLC/atualização (separadas por comentários // ── ──).
// Descrições só em pt por enquanto (no modo inglês aparece o texto em português); os nomes em inglês saem do endereço do troféu no Exophase.
// ══════════════════════════════════════════════════════════════════════════
JOGOS['vampire-survivors'] = {
  atualizado: '2026-11-22',
  img: '',                       // capa: 'imagens/vampire-survivors.jpg'. Vazio = capa colorida com a primeira letra
  abertura: [
    { pt: '<strong>Vampire Survivors</strong> tem uma lista de <strong>284 troféus</strong> no PS5/PS4, com platina. A lista base tem <strong>41 troféus</strong>; o restante está distribuído em seções ligadas às atualizações e aos DLCs do jogo.',
      en: '<strong>Vampire Survivors</strong> has a <strong>284-trophy</strong> list on PS5/PS4, including a platinum. The base list has <strong>41 trophies</strong>; the rest is spread across sections tied to the game\'s updates and DLC packs.' },
    { pt: 'Este guia está <strong>em preparo</strong>: os troféus, o roteiro e as demais seções serão preenchidos conforme o material chegar.',
      en: 'This guide is <strong>in progress</strong>: trophies, roadmap and the other sections will be filled in as material arrives.' }
  ],
  visaoGeral: [
    { img: '', razao: '21 / 9', alt: { pt: 'Uma partida de Vampire Survivors', en: 'A Vampire Survivors run' },
      leg: { pt: 'Uma partida de Vampire Survivors: a tela se enche de inimigos e de ataques.', en: 'A Vampire Survivors run: the screen fills up with enemies and attacks.' } },

    { h: { pt: 'O jogo em poucas linhas', en: 'The game in a few lines' } },
    { p: { pt: '<strong>Vampire Survivors</strong> é um roguelite de sobrevivência criado por Luca "poncle" Galante, que o publica sob o nome <strong>poncle</strong>. O projeto começou em 2020, inspirado em <em>Magic Survival</em> (2019) e na série <em>Castlevania</em>.',
           en: '<strong>Vampire Survivors</strong> is a survival roguelite created by Luca "poncle" Galante, who publishes it under the name <strong>poncle</strong>. The project started in 2020, inspired by <em>Magic Survival</em> (2019) and the <em>Castlevania</em> series.' } },
    { p: { pt: 'Você escolhe um personagem e tenta sobreviver a ondas sem fim de monstros. As armas atacam sozinhas, então o que você controla é o movimento: desviar, fugir e coletar as gemas de experiência que os inimigos derrotados soltam.',
           en: 'You pick a character and try to survive endless waves of monsters. Weapons attack on their own, so what you control is movement: dodging, running and collecting the experience gems that defeated enemies drop.' } },
    { p: { pt: 'O jogo ganhou vários prêmios, entre eles dois BAFTA: Melhor Jogo e Game Design.',
           en: 'The game has won several awards, including two BAFTAs: Best Game and Game Design.' } },

    { h: { pt: 'Como se joga', en: 'How it plays' } },
    { p: { pt: 'A cada nível você escolhe entre três ou quatro armas ou itens passivos. Dá para ter até seis armas e seis itens passivos; quando todos estão no máximo, os níveis seguintes só rendem ouro ou frango. O frango, que aparece no chão, recupera vida.',
           en: 'At each level you choose among three or four weapons or passive items. You can hold up to six weapons and six passive items; once they are all maxed out, later levels only give gold or chicken. The chicken, found on the floor, restores health.' } },
    { p: { pt: 'Inimigos fortes soltam baús com um, três ou cinco itens, e a maioria das armas tem uma forma final, a [[evolucao|evolução]].',
           en: 'Strong enemies drop chests with one, three or five items, and most weapons have an ultimate form, the [[evolucao|evolution]].' } },
    { p: { pt: 'Cada fase tem um limite de tempo de 15, 20 ou 30 minutos. Quando ele acaba, os inimigos somem e surge o [[reaper|Ceifador]], com outro a cada minuto seguinte. Chegar ao limite já conta como fase concluída e rende ouro de bônus.',
           en: 'Each stage has a time limit of 15, 20 or 30 minutes. When it runs out, the enemies clear and the [[reaper|Reaper]] appears, with another one every minute after that. Reaching the limit already counts as completing the stage and earns bonus gold.' } },
    { ir: 'jogabilidade', t: { pt: 'Ver as regras de jogabilidade →', en: 'See the gameplay rules →' } },

    { h: { pt: 'O que você ganha entre as partidas', en: 'What you earn between runs' } },
    { p: { pt: 'O ouro das partidas compra personagens novos e melhorias permanentes. Os desafios liberam fases, armas, personagens e modificadores, como o <strong>modo infinito</strong> (sem limite de tempo), o <strong>modo Hiper</strong> (jogador e inimigos mais rápidos) e o <strong>Limit Break</strong> (que permite continuar melhorando as armas). Os ovos dourados dão bônus permanentes ao personagem escolhido.',
           en: 'The gold from your runs buys new characters and permanent upgrades. Challenges unlock stages, weapons, characters and modifiers, such as <strong>endless mode</strong> (no time limit), <strong>Hyper mode</strong> (faster player and enemies) and <strong>Limit Break</strong> (which lets you keep upgrading weapons). Golden eggs give permanent bonuses to the selected character.' } },

    { img: '', razao: '16 / 9', alt: { pt: 'Escolha de melhorias ao subir de nível', en: 'Choosing upgrades on level up' },
      leg: { pt: 'Ao subir de nível, o jogo oferece três ou quatro opções.', en: 'On level up, the game offers three or four options.' } },

    { h: { pt: 'As fases', en: 'The stages' } },
    { p: { pt: 'As fases principais são Floresta Insana (<em>Mad Forest</em>), Biblioteca Incrustada (<em>Inlaid Library</em>), Fábrica de Laticínios (<em>Dairy Plant</em>), Torre de Gallo (<em>Gallo Tower</em>) e Cappella Magna. Há também fases de bônus e desafio, como Il Molise, Moongolow, Planícies Verdes (<em>Green Acres</em>), Osseocidade (<em>The Bone Zone</em>) e Erupção de Chefes (<em>Boss Rash</em>), além de versões invertidas de algumas fases.',
           en: 'The main stages are Mad Forest, Inlaid Library, Dairy Plant, Gallo Tower and Cappella Magna. There are also bonus and challenge stages, such as Il Molise, Moongolow, Green Acres, The Bone Zone and Boss Rash, plus inverted versions of some stages.' } },
    { p: { pt: 'Atualizações gratuitas e DLCs trouxeram fases novas, como Whiteout, Laborratory, o Lago Foscari, o Monte Moonspell e a Mansão Lua Vermelha.',
           en: 'Free updates and DLC brought new stages, such as Whiteout, Laborratory, Lake Foscari, Mt. Moonspell and Red Moon Manor.' } },
    { ir: 'mapas', t: { pt: 'Ver as Fases →', en: 'See the Stages →' } },

    { h: { pt: 'Do lançamento aos DLCs', en: 'From launch to the DLC' } },
    { p: { pt: 'O jogo entrou em acesso antecipado no Steam em dezembro de 2021 e teve a versão 1.0 em 20 de outubro de 2022, para PC. Chegou às outras plataformas depois:',
           en: 'The game entered early access on Steam in December 2021 and reached version 1.0 on October 20, 2022, on PC. It came to the other platforms later:' } },
    { ul: [
      { pt: '<strong>Xbox One e Series X/S:</strong> 10/11/2022.', en: '<strong>Xbox One and Series X/S:</strong> 11/10/2022.' },
      { pt: '<strong>Android e iOS:</strong> 08/12/2022.', en: '<strong>Android and iOS:</strong> 12/08/2022.' },
      { pt: '<strong>Nintendo Switch:</strong> 17/08/2023.', en: '<strong>Nintendo Switch:</strong> 08/17/2023.' },
      { pt: '<strong>PlayStation 4 e 5:</strong> 29/08/2024.', en: '<strong>PlayStation 4 and 5:</strong> 08/29/2024.' },
      { pt: '<strong>Meta Quest:</strong> 13/11/2025.', en: '<strong>Meta Quest:</strong> 11/13/2025.' }
    ] },
    { p: { pt: 'DLCs e atualizações ampliaram o jogo ao longo do tempo:',
           en: 'DLC and updates have expanded the game over time:' } },
    { ul: [
      { pt: '<strong>Legacy of the Moonspell</strong> (15/12/2022): inspirado no folclore e nos animes japoneses.', en: '<strong>Legacy of the Moonspell</strong> (12/15/2022): inspired by Japanese folklore and anime.' },
      { pt: '<strong>Tides of the Foscari</strong> (abril/2023): inspirado em contos de fadas.', en: '<strong>Tides of the Foscari</strong> (April 2023): inspired by fairy tales.' },
      { pt: '<strong>Emergency Meeting</strong> (18/12/2023): colaboração com <em>Among Us</em>.', en: '<strong>Emergency Meeting</strong> (12/18/2023): a collaboration with <em>Among Us</em>.' },
      { pt: '<strong>Operation Guns</strong> (09/05/2024): colaboração com <em>Contra</em>.', en: '<strong>Operation Guns</strong> (05/09/2024): a collaboration with <em>Contra</em>.' },
      { pt: '<strong>Ode to Castlevania</strong> (31/10/2024): colaboração com <em>Castlevania</em>.', en: '<strong>Ode to Castlevania</strong> (10/31/2024): a collaboration with <em>Castlevania</em>.' },
      { pt: '<strong>Emerald Diorama</strong> (10/04/2025, gratuito): colaboração com <em>SaGa: Emerald Beyond</em>.', en: '<strong>Emerald Diorama</strong> (04/10/2025, free): a collaboration with <em>SaGa: Emerald Beyond</em>.' },
      { pt: '<strong>Ante Chamber</strong> (28/10/2025, gratuito): colaboração com <em>Balatro</em>.', en: '<strong>Ante Chamber</strong> (10/28/2025, free): a collaboration with <em>Balatro</em>.' },
      { pt: '<strong>Legacy of the Bloodmoon</strong> (28/08/2026): mais de 10 personagens novos, mais de 16 armas e a fase Red Moon Manor.', en: '<strong>Legacy of the Bloodmoon</strong> (08/28/2026): over 10 new characters, over 16 weapons and the Red Moon Manor stage.' }
    ] },
    { destaque: { pt: '<strong>Atenção:</strong> as datas dos DLCs são as do lançamento original. A chegada de cada um ao PlayStation pode ter acontecido em outro dia.',
                  en: '<strong>Note:</strong> the DLC dates are those of the original release. Each one may have reached PlayStation on a different day.' } },

    { h: { pt: 'A platina', en: 'The platinum' } },
    { p: { pt: 'A lista tem <strong>284 troféus</strong> no PS5: <strong>1 platina</strong>, 15 de ouro, 61 de prata e 207 de bronze. São <strong>41</strong> na lista base e os outros 243 estão distribuídos em 29 seções ligadas a atualizações e DLCs.',
           en: 'The list has <strong>284 trophies</strong> on PS5: <strong>1 platinum</strong>, 15 gold, 61 silver and 207 bronze. <strong>41</strong> are in the base list and the other 243 are spread across 29 sections tied to updates and DLC.' } },
    { p: { pt: 'É uma platina de <strong>fases repetitivas</strong>: os troféus pedem, entre outras coisas, evoluir e unir armas, sobreviver 15, 20 ou 30 minutos em cada fase, chegar ao nível 50 com cada personagem, liberar o modo Hiper nas fases e preencher a Coleção.',
           en: 'It is a platinum of <strong>repetitive stages</strong>: the trophies ask, among other things, for evolving and uniting weapons, surviving 15, 20 or 30 minutes in each stage, reaching level 50 with each character, unlocking Hyper mode in the stages and filling the Collection.' } },
    { img: '', razao: '16 / 9', alt: { pt: 'A lista de troféus', en: 'The trophy list' },
      leg: { pt: 'A lista de troféus do jogo.', en: 'The game\'s trophy list.' } },
    { destaque: { pt: '<strong>Não há troféus perdíveis.</strong> Como as fases se repetem, o que escapar em uma partida dá para fazer em outra.',
                  en: '<strong>There are no missable trophies.</strong> Since the stages repeat, whatever you miss in one run can be done in another.' } },
    { ir: 'trofeus', t: { pt: 'Ver todos os troféus →', en: 'See all the trophies →' } },

    { h: { pt: 'Como usar este guia', en: 'How to use this guide' } },
    { p: { pt: 'O menu à esquerda separa o guia por função. <strong>Jogabilidade</strong> explica as regras; <strong>Fases</strong>, <strong>Bestiário</strong>, <strong>Personagens</strong>, <strong>Armas</strong> e <strong>Passivas</strong> servem de consulta rápida; <strong>Sistemas</strong> reúne a evolução das armas, as recompensas e as arcanas; <strong>Troféus</strong> e <strong>Dicas</strong> valem a leitura antes de começar a platina.',
           en: 'The menu on the left splits the guide by function. <strong>Gameplay</strong> explains the rules; <strong>Stages</strong>, <strong>Bestiary</strong>, <strong>Characters</strong>, <strong>Weapons</strong> and <strong>Passives</strong> are for quick lookups; <strong>Systems</strong> gathers weapon evolution, rewards and arcanas; <strong>Trophies</strong> and <strong>Tips</strong> are worth reading before you start the platinum.' } }
  ],                // aba Visão geral (texto corrido com imagens)
  jogabilidade: [                // EXEMPLO (formato do GTA VI): troque pelos textos reais e acrescente mais blocos { h } { p } { ul }
    { h: { pt: 'Exemplo: como funciona uma partida', en: 'Example: how a run works' } },
    { p: { pt: 'Escreva aqui um parágrafo sobre a jogabilidade. Use <strong>negrito</strong> para destacar o que importa.', en: 'Write a paragraph about the gameplay here. Use <strong>bold</strong> to highlight what matters.' } },
    { ul: [ { pt: 'Item de lista de exemplo.', en: 'Example list item.' } ] }
  ],
  roteiro: [                     // aba "Guia" (passo a passo). EXEMPLO (formato do GTA VI): status 'base' = rascunho
    { id: 'roteiro-exemplo', setor: 'Exemplo', status: 'base', img: '',
      t: { pt: 'Exemplo: primeira parte do roteiro', en: 'Example: first part of the walkthrough' },
      d: { pt: 'Resumo curto desta parte, que aparece no card.', en: 'Short summary of this part, shown on the card.' },
      legCapa: { pt: 'Legenda da imagem de capa.', en: 'Cover image caption.' },
      corpo: [
        { h: { pt: 'Título do passo', en: 'Step title' } },
        { p: { pt: 'Descreva o passo aqui.', en: 'Describe the step here.' } },
        { ul: [ { pt: 'Ponto a lembrar.', en: 'Point to remember.' } ] }
      ] }
  ],
  mapas: [                       // "Fases". EXEMPLO (formato do GTA VI / Abiotic): t = nome, d = descrição, href = link da fase
    { t: { pt: 'Exemplo: nome da fase', en: 'Example: stage name' }, d: { pt: 'Descrição curta da fase.', en: 'Short stage description.' }, href: '#jogo/vampire-survivors/mapas' }
  ],
  bestiario: [                   // EXEMPLO (formato do Abiotic Factor): tipo = criatura | humano | robo
    { id: 'inimigo-exemplo', tipo: 'criatura', nome: 'Exemplo: inimigo', img: '',
      resumo: { pt: 'Resumo do inimigo: onde aparece e o que faz.', en: 'Enemy summary: where it appears and what it does.' },
      locais: ['Exemplo: fase'],
      stats: [ { rot: { pt: 'Vida', en: 'Health' }, v: { pt: 'a preencher', en: 'to fill in' } } ] }
  ],
  personagens: [                 // EXEMPLO (formato do GTA VI)
    { id: 'personagem-exemplo', nome: 'Exemplo: personagem', funcao: { pt: 'Personagem jogável', en: 'Playable character' }, img: '',
      resumo: { pt: 'Resumo curto do personagem.', en: 'Short character summary.' },
      tags: [ { pt: 'Exemplo', en: 'Example' } ],
      descricao: { pt: 'Descrição do personagem.', en: 'Character description.' },
      jogo: [ { rot: { pt: 'Arma inicial', en: 'Starting weapon' }, v: { pt: 'a preencher', en: 'to fill in' } } ] }
  ],
  equipamentos: [                // "Armas". EXEMPLO (formato do GTA VI): cat = categoria (o texto vira o título do grupo)
    { cat: 'Armas', nome: 'Exemplo: arma' }
  ],
  armaduras: [                   // "Passivas". EXEMPLO (formato do Abiotic Factor): slot = categoria (o texto vira o título do grupo)
    { slot: 'Passivas', nome: 'Exemplo: passiva' }
  ],
  trofeus: [                     // a lista de troféus; formato nos comentários do guia do Abiotic Factor
      // ── Lista base (41) ──
      { ex: '774086-cosmic-delight', tipo: 'platina', nome: { pt: 'Deleite Cósmico', en: 'Cosmic Delight' }, desc: { pt: 'Onde é que estava o vampiro mesmo?' }, pct: 40.15, exp: 21, rar: 'incomum', img: '5573ed67' },
      { ex: '774087-lightning-ring', tipo: 'bronze', nome: { pt: 'Anel de Raios', en: 'Lightning Ring' }, desc: { pt: 'Derrote 5.000 inimigos.' }, pct: 90.88, exp: 9, rar: 'comum', img: '003d75bd' },
      { ex: '774088-mortaccio', tipo: 'bronze', nome: { pt: 'Mortaccio', en: 'Mortaccio' }, desc: { pt: 'Derrote 3.000 Esqueletos.' }, pct: 79.92, exp: 10, rar: 'comum', img: '8j5613e0' },
      { ex: '774089-hyper-mad-forest', tipo: 'prata', nome: { pt: 'Hiper Floresta Insana', en: 'Hyper Mad Forest' }, desc: { pt: 'Derrote a Vênus Azul gigante na Floresta Insana.' }, pct: 71.17, exp: 12, rar: 'comum', img: 'ee31db68' },
      { ex: '774090-hyper-inlaid-library', tipo: 'prata', nome: { pt: 'Hiper Biblioteca Incrustada', en: 'Hyper Inlaid Library' }, desc: { pt: 'Derrote a Bruxa na Biblioteca Incrustada.' }, pct: 77.61, exp: 11, rar: 'comum', img: '40e15g44' },
      { ex: '774091-inlaid-library', tipo: 'bronze', nome: { pt: 'Biblioteca Incrustada', en: 'Inlaid Library' }, desc: { pt: 'Alcance o nível 20 na Floresta Insana.' }, pct: 88.63, exp: 9, rar: 'comum', img: '6d750jbe' },
      { ex: '774092-stone-mask', tipo: 'bronze', nome: { pt: 'Máscara de Pedra', en: 'Stone Mask' }, desc: { pt: 'Encontre uma Máscara de Pedra.' }, pct: 72.46, exp: 11, rar: 'comum', img: 'b8g675e0' },
      { ex: '774093-yatta-cavallo', tipo: 'bronze', nome: { pt: 'Yatta Cavallo', en: 'Yatta Cavallo' }, desc: { pt: 'Derrote 3.000 Cabeças de Leão.' }, pct: 69.99, exp: 12, rar: 'comum', img: 'gj130dg6' },
      { ex: '774094-dairy-plant', tipo: 'bronze', nome: { pt: 'Fábrica de Laticínios', en: 'Dairy Plant' }, desc: { pt: 'Alcance o nível 40 na Biblioteca Incrustada.' }, pct: 82.24, exp: 10, rar: 'comum', img: 'dg01j646' },
      { ex: '774095-hyper-dairy-plant', tipo: 'prata', nome: { pt: 'Hiper Fábrica de Laticínios', en: 'Hyper Dairy Plant' }, desc: { pt: 'Derrote o Guardião da Espada na Fábrica de Laticínios.' }, pct: 71.03, exp: 12, rar: 'comum', img: 'j065b34g' },
      { ex: '774096-milky-way-map', tipo: 'bronze', nome: { pt: 'Mapa da Via Láctea', en: 'Milky Way Map' }, desc: { pt: 'Encontre o Mapa da Via Láctea.' }, pct: 79.12, exp: 10, rar: 'comum', img: '137054gb' },
      { ex: '774097-coffin-dairy-plant', tipo: 'bronze', nome: { pt: 'Caixão: Fábrica de Laticínios', en: 'Coffin Dairy Plant' }, desc: { pt: 'Encontre e abra o caixão na Fábrica de Laticínios.' }, pct: 70.29, exp: 12, rar: 'comum', img: '35703bd3' },
      { ex: '774098-coffin-mad-forest', tipo: 'bronze', nome: { pt: 'Caixão: Floresta Insana', en: 'Coffin Mad Forest' }, desc: { pt: 'Encontre e abra o caixão na Floresta Insana.' }, pct: 67.49, exp: 12, rar: 'comum', img: '7704j167' },
      { ex: '774099-hyper-gallo-tower', tipo: 'prata', nome: { pt: 'Hiper Torre de Gallo', en: 'Hyper Gallo Tower' }, desc: { pt: 'Derrote o Caranguejo Gigante na Torre de Gallo.' }, pct: 66.41, exp: 12, rar: 'comum', img: '5573ed17' },
      { ex: '774100-sorceress-tears', tipo: 'bronze', nome: { pt: 'Lágrimas da Feiticeira', en: 'Sorceress Tears' }, desc: { pt: 'Encontre as Lágrimas da Feiticeira.' }, pct: 68.2, exp: 12, rar: 'comum', img: '003d756d' },
      { ex: '774101-gallo-tower', tipo: 'bronze', nome: { pt: 'Torre de Gallo', en: 'Gallo Tower' }, desc: { pt: 'Alcance o nível 60 na Fábrica de Laticínios.' }, pct: 71.92, exp: 11, rar: 'comum', img: '8j5613b0' },
      { ex: '774102-bianca-ramba', tipo: 'bronze', nome: { pt: 'Bianca Ramba', en: 'Bianca Ramba' }, desc: { pt: 'Derrote 3.000 Elementais de Leite.' }, pct: 51.35, exp: 16, rar: 'incomum', img: 'ee31dbj8' },
      { ex: '774103-randomazzo', tipo: 'bronze', nome: { pt: 'Randomazzo', en: 'Randomazzo' }, desc: { pt: 'Encontre o Randomazzo.' }, pct: 68.32, exp: 12, rar: 'comum', img: '40e15gj4' },
      { ex: '774104-coffin-inlaid-library', tipo: 'bronze', nome: { pt: 'Caixão: Biblioteca Incrustada', en: 'Coffin Inlaid Library' }, desc: { pt: 'Encontre e abra o caixão na Biblioteca Incrustada.' }, pct: 69.56, exp: 12, rar: 'comum', img: '6d750jee' },
      { ex: '774105-vi-sarabande-of-healing', tipo: 'bronze', nome: { pt: 'VI - Sarabanda da Cura', en: 'VI - Sarabande of Healing' }, desc: { pt: 'Encontre o Randomazzo.' }, pct: 68.32, exp: 12, rar: 'comum', img: 'b8g675b0' },
      { ex: '774106-osole-meeo', tipo: 'bronze', nome: { pt: 'O\'Sole Meeo', en: 'O\'Sole Meeo' }, desc: { pt: 'Derrote 3.000 Dragões-camarão.' }, pct: 57.19, exp: 14, rar: 'incomum', img: 'gj130d86' },
      { ex: '774107-coffin-gallo-tower', tipo: 'bronze', nome: { pt: 'Caixão: Torre de Gallo', en: 'Coffin Gallo Tower' }, desc: { pt: 'Encontre e abra o caixão na Torre de Gallo.' }, pct: 63.41, exp: 13, rar: 'comum', img: 'dg01j6d6' },
      { ex: '774108-magic-banger', tipo: 'bronze', nome: { pt: 'Sonzeira Mágica', en: 'Magic Banger' }, desc: { pt: 'Encontre a Sonzeira Mágica.' }, pct: 64.15, exp: 13, rar: 'comum', img: 'j065b38g' },
      { ex: '774109-glass-vizard', tipo: 'bronze', nome: { pt: 'Vizard de Vidro', en: 'Glass Vizard' }, desc: { pt: 'Encontre e compre o Vizard de Vidro.' }, pct: 57.03, exp: 14, rar: 'incomum', img: '137054eb' },
      { ex: '774110-yellow-sign', tipo: 'ouro', nome: { pt: 'Sinal Amarelo', en: 'Yellow Sign' }, desc: { pt: 'Encontre o Sinal Amarelo.' }, pct: 56.06, exp: 15, rar: 'incomum', img: '35703be3' },
      { ex: '774111-seeker-of-the-infinite-corridor', tipo: 'prata', nome: { pt: 'Em busca do Corredor Infinito', en: 'Seeker of the Infinite Corridor' }, desc: { pt: 'Obtenha o Corredor Infinito.' }, pct: 48.8, exp: 17, rar: 'incomum', img: '7704j1e7' },
      { ex: '774112-seeker-of-the-crimson-shroud', tipo: 'prata', nome: { pt: 'Em busca do Manto Carmesim', en: 'Seeker of the Crimson Shroud' }, desc: { pt: 'Obtenha o Manto Carmesim.' }, pct: 48.18, exp: 17, rar: 'incomum', img: '5573ed47' },
      { ex: '774113-cappella-magna', tipo: 'bronze', nome: { pt: 'Cappella Magna', en: 'Cappella Magna' }, desc: { pt: 'Alcance o nível 80 na Torre de Gallo.' }, pct: 62.86, exp: 13, rar: 'comum', img: '003d75gd' },
      { ex: '774114-coffin-cappella-magna', tipo: 'bronze', nome: { pt: 'Caixão: Cappella Magna', en: 'Coffin Cappella Magna' }, desc: { pt: 'Encontre e abra o caixão na Cappella Magna.' }, pct: 59.46, exp: 14, rar: 'incomum', img: '8j5613g0' },
      { ex: '774115-hyper-cappella-magna', tipo: 'prata', nome: { pt: 'Hiper Cappella Magna', en: 'Hyper Cappella Magna' }, desc: { pt: 'Derrote a Trinacria na Cappella Magna.' }, pct: 59.58, exp: 14, rar: 'incomum', img: 'ee31db48' },
      { ex: '774116-sir-ambrojoe', tipo: 'bronze', nome: { pt: 'Sir Ambrojão', en: 'Sir Ambrojoe' }, desc: { pt: 'Derrote 6.000 Extermina-fases.' }, pct: 49.4, exp: 17, rar: 'incomum', img: '40e15g34' },
      { ex: '774117-grim-grimoire', tipo: 'bronze', nome: { pt: 'Grimório Grimpante', en: 'Grim Grimoire' }, desc: { pt: 'Encontre o Grimório Grimpante.' }, pct: 84.46, exp: 10, rar: 'comum', img: '6d750j6e' },
      { ex: '774118-ars-gouda', tipo: 'bronze', nome: { pt: 'Ars Gouda', en: 'Ars Gouda' }, desc: { pt: 'Encontre o Ars Gouda.' }, pct: 78.56, exp: 11, rar: 'comum', img: 'b8g67500' },
      { ex: '774119-great-gospel', tipo: 'prata', nome: { pt: 'Grande Gospel', en: 'Great Gospel' }, desc: { pt: 'Encontre o Grande Gospel.' }, pct: 51.62, exp: 16, rar: 'incomum', img: 'gj130de6' },
      { ex: '774120-forbidden-scrolls', tipo: 'ouro', nome: { pt: 'Pergaminhos Proibidos', en: 'Forbidden Scrolls' }, desc: { pt: 'Encontre os Pergaminhos Proibidos de Morbane.' }, pct: 48.13, exp: 17, rar: 'incomum', img: 'dg01j656' },
      { ex: '774121-queen-sigma', tipo: 'ouro', nome: { pt: 'Rainha Sigma', en: 'Queen Sigma' }, desc: { pt: 'Complete a Coleção.' }, pct: 40.55, exp: 20, rar: 'incomum', img: 'j065b3jg' },
      { ex: '774122-victory-sword', tipo: 'bronze', nome: { pt: 'Espada da Vitória', en: 'Victory Sword' }, desc: { pt: 'Derrote 100 mil inimigos em uma só partida com Rainha Sigma.' }, pct: 41.57, exp: 20, rar: 'incomum', img: '137054db' },
      { ex: '774123-the-eudaimonia-machine', tipo: 'bronze', nome: { pt: 'A Máquina Eudaimonia', en: 'The Eudaimonia Machine' }, desc: { pt: 'Obtenha todas as relíquias normais de todas as fases.' }, pct: 47.27, exp: 17, rar: 'incomum', img: '35703b83' },
      { ex: '774124-seventh-trumpet', tipo: 'prata', nome: { pt: 'Sétima Trombeta', en: 'Seventh Trumpet' }, desc: { pt: 'Obtenha a Sétima Trombeta.' }, pct: 46.93, exp: 18, rar: 'incomum', img: '7704j187' },
      { ex: '774125-gracias-mirror', tipo: 'prata', nome: { pt: 'Espelho de Gracia', en: 'Gracias Mirror' }, desc: { pt: 'Obtenha o Espelho de Gracia.' }, pct: 46.8, exp: 18, rar: 'incomum', img: '5573ed87' },
      { ex: '774126-greatest-jubilee', tipo: 'ouro', nome: { pt: 'Grande Jubileu', en: 'Greatest Jubilee' }, desc: { pt: 'Veja os fogos de artifício finais.' }, pct: 43.24, exp: 19, rar: 'incomum', img: '003d758d' },
      // ── Weapon Evolutions Part 1 (13) ──
      { ex: '774127-death-spiral', tipo: 'bronze', nome: { pt: 'Espiral da Morte', en: 'Death Spiral' }, desc: { pt: 'Evolua o Machado.' }, pct: 70.95, exp: 12, rar: 'comum', img: '8j561380' },
      { ex: '774128-heaven-sword', tipo: 'bronze', nome: { pt: 'Espada Celeste', en: 'Heaven Sword' }, desc: { pt: 'Evolua a Cruz.' }, pct: 67.55, exp: 12, rar: 'comum', img: 'ee31db78' },
      { ex: '774129-hellfire', tipo: 'bronze', nome: { pt: 'Chamas Infernais', en: 'Hellfire' }, desc: { pt: 'Evolua a Varinha de Fogo.' }, pct: 73.18, exp: 11, rar: 'comum', img: '40e15g84' },
      { ex: '774130-soul-eater', tipo: 'bronze', nome: { pt: 'Devorador de Almas', en: 'Soul Eater' }, desc: { pt: 'Evolua o Alho.' }, pct: 70.79, exp: 12, rar: 'comum', img: '6d750j8e' },
      { ex: '774131-unholy-vespers', tipo: 'bronze', nome: { pt: 'Versículos Profanos', en: 'Unholy Vespers' }, desc: { pt: 'Evolua a Bíblia do Rei.' }, pct: 68.02, exp: 12, rar: 'comum', img: 'b8g675j0' },
      { ex: '774132-thousand-edge', tipo: 'bronze', nome: { pt: 'Milhares de Fios', en: 'Thousand Edge' }, desc: { pt: 'Evolua a Faca.' }, pct: 70.18, exp: 12, rar: 'comum', img: 'gj130d66' },
      { ex: '774133-thunder-loop', tipo: 'bronze', nome: { pt: 'Ciclo de Raios', en: 'Thunder Loop' }, desc: { pt: 'Evolua o Anel de Raios.' }, pct: 73.53, exp: 11, rar: 'comum', img: 'dg01j636' },
      { ex: '774134-holy-wand', tipo: 'bronze', nome: { pt: 'Varinha Sagrada.', en: 'Holy Wand' }, desc: { pt: 'Evolua a Varinha Mágica.' }, pct: 77.72, exp: 11, rar: 'comum', img: 'j065b3dg' },
      { ex: '774135-no-future', tipo: 'bronze', nome: { pt: 'SEM FUTURO', en: 'No Future' }, desc: { pt: 'Evolua a Runa Traçante.' }, pct: 68.27, exp: 12, rar: 'comum', img: '1370548b' },
      { ex: '774136-la-borra', tipo: 'bronze', nome: { pt: 'La Borra', en: 'La Borra' }, desc: { pt: 'Evolua a Água Benta.' }, pct: 70.7, exp: 12, rar: 'comum', img: '35703bb3' },
      { ex: '774137-valkyrie-turner', tipo: 'bronze', nome: { pt: 'Torneador de Valquírias', en: 'Valkyrie Turner' }, desc: { pt: 'Evolua o Pinhão Sombrio.' }, pct: 51.7, exp: 16, rar: 'incomum', img: '7704j117' },
      { ex: '774138-mannajja', tipo: 'bronze', nome: { pt: 'Mannajja', en: 'Mannajja' }, desc: { pt: 'Evolua a Canção de Mana.' }, pct: 52.77, exp: 16, rar: 'incomum', img: '40e15gge' },
      { ex: '774139-bloody-tear', tipo: 'bronze', nome: { pt: 'Laceração Sangrenta', en: 'Bloody Tear' }, desc: { pt: 'Evolua o Chicote.' }, pct: 72.26, exp: 11, rar: 'comum', img: '6d750jj5' },
      // ── Weapon Evolutions Part 2 (7) ──
      { ex: '774140-vicious-hunger', tipo: 'bronze', nome: { pt: 'Fome Voraz', en: 'Vicious Hunger' }, desc: { pt: 'Evolua o Gatti Amari.' }, pct: 52.13, exp: 16, rar: 'incomum', img: 'b8g67554' },
      { ex: '774141-phieraggi', tipo: 'prata', nome: { pt: 'Phieraggi', en: 'Phieraggi' }, desc: { pt: 'Evolua e faça a união de Phiera Der Tuphello e Otto, o Pardal.' }, pct: 53.81, exp: 15, rar: 'incomum', img: 'gj130dd7' },
      { ex: '774142-gorgeous-moon', tipo: 'prata', nome: { pt: 'Prisma Lunar', en: 'Gorgeous Moon' }, desc: { pt: 'Evolua o Pentagrama.' }, pct: 61.71, exp: 13, rar: 'comum', img: 'dg01j664' },
      { ex: '774143-vandalier', tipo: 'prata', nome: { pt: 'Vandalier', en: 'Vandalier' }, desc: { pt: 'Faça a união de Asas de Ébano e Peachone.' }, pct: 58.76, exp: 14, rar: 'incomum', img: 'j065b338' },
      { ex: '774144-fuwalafuwaloo', tipo: 'prata', nome: { pt: 'Fuwalafuwaloo', en: 'Fuwalafuwaloo' }, desc: { pt: 'Faça a união de Vento Sacro e Laceração Sangrenta.' }, pct: 49.31, exp: 17, rar: 'incomum', img: '1370544d' },
      { ex: '774145-candybox', tipo: 'prata', nome: { pt: 'Presentinho', en: 'Candybox' }, desc: { pt: 'Descubra todas evoluções e uniões normais.' }, pct: 43.15, exp: 19, rar: 'incomum', img: '35703bb8' },
      { ex: '774146-tri-bracelet', tipo: 'prata', nome: { pt: 'Tri-Bracelet', en: 'Tri-Bracelet' }, desc: { pt: 'Evolua a Pulseira e depois a Bipulseira.' }, pct: 45.2, exp: 18, rar: 'incomum', img: '7704j111' },
      // ── Randomazzo Part 1 (13) ──
      { ex: '774147-x-beginning', tipo: 'bronze', nome: { pt: 'X - Princípio', en: 'X - Beginning' }, desc: { pt: 'Alcance o nível 50 com Antonio.' }, pct: 47.66, exp: 17, rar: 'incomum', img: '5573eddj' },
      { ex: '774148-xix-heart-of-fire', tipo: 'bronze', nome: { pt: 'XIX - Coração de Fogo', en: 'XIX - Heart of Fire' }, desc: { pt: 'Alcance o nível 50 com Arca.' }, pct: 43.78, exp: 19, rar: 'incomum', img: '003d7554' },
      { ex: '774149-xiii-wicked-season', tipo: 'bronze', nome: { pt: 'XIII - Perversa Estação', en: 'XIII - Wicked Season' }, desc: { pt: 'Alcance o nível 50 com Christine.' }, pct: 44.1, exp: 19, rar: 'incomum', img: '8j561371' },
      { ex: '774150-ix-divine-bloodline', tipo: 'bronze', nome: { pt: 'IX - Linhagem Divina', en: 'IX - Divine Bloodline' }, desc: { pt: 'Alcance o nível 50 com Irmã Clerici.' }, pct: 45.09, exp: 18, rar: 'incomum', img: 'ee31db5e' },
      { ex: '774151-xviii-boogaloo-of-illusions', tipo: 'bronze', nome: { pt: 'XVIII - Dança das Ilusões', en: 'XVIII - Boogaloo of Illusions' }, desc: { pt: 'Alcance o nível 50 com Concetta.' }, pct: 50.42, exp: 16, rar: 'incomum', img: '40e15gde' },
      { ex: '774152-vii-iron-blue-will', tipo: 'bronze', nome: { pt: 'VII - Perseverança Azul', en: 'VII - Iron Blue Will' }, desc: { pt: 'Alcance o nível 50 com Gennaro.' }, pct: 47.79, exp: 17, rar: 'incomum', img: '6d750j15' },
      { ex: '774153-v-chaos-in-the-dark-night', tipo: 'bronze', nome: { pt: 'V - Caos na Noite Escura', en: 'V - Chaos in the Dark Night' }, desc: { pt: 'Alcance o nível 50 com Giovanna.' }, pct: 46.93, exp: 18, rar: 'incomum', img: 'b8g67514' },
      { ex: '774154-xi-waltz-of-pearls', tipo: 'bronze', nome: { pt: 'XI - Valsa das Pérolas', en: 'XI - Waltz of Pearls' }, desc: { pt: 'Alcance o nível 50 com Imelda.' }, pct: 47.55, exp: 17, rar: 'incomum', img: 'gj130d47' },
      { ex: '774155-iv-awake', tipo: 'bronze', nome: { pt: 'IV - Despertar', en: 'IV - Awake' }, desc: { pt: 'Alcance o nível 50 com Krochi.' }, pct: 51.35, exp: 16, rar: 'incomum', img: 'dg01j6e4' },
      { ex: '774156-xxi-blood-astronomia', tipo: 'bronze', nome: { pt: 'XXI - Astronomia Sangrenta', en: 'XXI - Blood Astronomia' }, desc: { pt: 'Alcance o nível 50 com Poe.' }, pct: 47.61, exp: 17, rar: 'incomum', img: 'j065b3g8' },
      { ex: '774157-xvii-lost-and-found-painting', tipo: 'bronze', nome: { pt: 'XVII - Pintura de Achados e Perdidos', en: 'XVII - Lost and Found Painting' }, desc: { pt: 'Alcance o nível 50 com Poppea.' }, pct: 53.3, exp: 16, rar: 'incomum', img: '1370546d' },
      { ex: '774158-iii-tragic-princess', tipo: 'bronze', nome: { pt: 'III - Princesa Trágica', en: 'III - Tragic Princess' }, desc: { pt: 'Alcance o nível 50 com Porta.' }, pct: 47.02, exp: 18, rar: 'incomum', img: '35703bg8' },
      { ex: '774159-i-gemini', tipo: 'bronze', nome: { pt: 'I - Gêmeos', en: 'I - Gemini' }, desc: { pt: 'Alcance o nível 50 com Pugnala.' }, pct: 54.5, exp: 15, rar: 'incomum', img: '7704j131' },
      // ── Randomazzo Part 2 (8) ──
      { ex: '774160-ii-twilight-requiem', tipo: 'bronze', nome: { pt: 'II - Réquiem Crepuscular', en: 'II - Twilight Requiem' }, desc: { pt: 'Alcance o nível 50 com Dommario.' }, pct: 47.22, exp: 18, rar: 'incomum', img: '5573edjj' },
      { ex: '774161-xiv-jail-of-crystal', tipo: 'bronze', nome: { pt: 'XIV - Prisão de Cristal', en: 'XIV - Jail of Crystal' }, desc: { pt: 'Alcance o nível 50 com Pasqualina.' }, pct: 45.98, exp: 18, rar: 'incomum', img: '003d75e4' },
      { ex: '774162-xvi-slash', tipo: 'bronze', nome: { pt: 'XVI - Corte', en: 'XVI - Slash' }, desc: { pt: 'Alcance o nível 50 com Lama.' }, pct: 49.04, exp: 17, rar: 'incomum', img: '8j5613d1' },
      { ex: '774163-xx-silent-old-sanctuary', tipo: 'prata', nome: { pt: 'XX - Antigo Santuário Silencioso', en: 'XX - Silent Old Sanctuary' }, desc: { pt: 'Chegue ao 31º minuto na Fábrica de Laticínios.' }, pct: 43.33, exp: 19, rar: 'incomum', img: 'ee31db0e' },
      { ex: '774164-viii-mad-groove', tipo: 'prata', nome: { pt: 'VIII - Ritmo Insano', en: 'VIII - Mad Groove' }, desc: { pt: 'Chegue ao 31º minuto na Floresta Insana.' }, pct: 45.49, exp: 18, rar: 'incomum', img: '40e15g7e' },
      { ex: '774165-xv-disco-of-gold', tipo: 'prata', nome: { pt: 'XV - Disco de Ouro', en: 'XV - Disco of Gold' }, desc: { pt: 'Chegue ao 31º minuto na Biblioteca Incrustada.' }, pct: 45.85, exp: 18, rar: 'incomum', img: '6d750j45' },
      { ex: '774166-xii-out-of-bounds', tipo: 'prata', nome: { pt: 'XII - Fora do Limite', en: 'XII - Out of Bounds' }, desc: { pt: 'Chegue ao 31º minuto na Torre de Gallo.' }, pct: 42.94, exp: 19, rar: 'incomum', img: 'b8g675d4' },
      { ex: '774167-game-killer', tipo: 'prata', nome: { pt: 'Mata-jogo', en: 'Game Killer' }, desc: { pt: 'Derrote o inimigo final na Cappella Magna.' }, pct: 51.09, exp: 16, rar: 'incomum', img: 'gj130db7' },
      // ── Bonus and Challenge Stages (5) ──
      { ex: '774168-green-acres', tipo: 'prata', nome: { pt: 'Planícies Verdes', en: 'Green Acres' }, desc: { pt: 'Desbloqueie o modo Hiper para 2 fases normais.' }, pct: 73.8, exp: 11, rar: 'comum', img: 'dg01j674' },
      { ex: '774169-the-bone-zone', tipo: 'prata', nome: { pt: 'Osseocidade', en: 'The Bone Zone' }, desc: { pt: 'Desbloqueie o modo Hiper para 3 fases normais.' }, pct: 69.22, exp: 12, rar: 'comum', img: 'j065b378' },
      { ex: '774170-il-molise', tipo: 'bronze', nome: { pt: 'Il Molise', en: 'Il Molise' }, desc: { pt: 'Desbloqueie o modo Hiper para qualquer fase normal.' }, pct: 80.56, exp: 10, rar: 'comum', img: '137054bd' },
      { ex: '774171-boss-rash', tipo: 'ouro', nome: { pt: 'Erupção de Chefes', en: 'Boss Rash' }, desc: { pt: 'Desbloqueie o modo Hiper para as 5 fases normais.' }, pct: 58.09, exp: 14, rar: 'incomum', img: '35703b18' },
      { ex: '774172-moongolow', tipo: 'prata', nome: { pt: 'Moongolow', en: 'Moongolow' }, desc: { pt: 'Desbloqueie o modo Hiper para 4 fases normais.' }, pct: 64.77, exp: 13, rar: 'comum', img: '7704j1b1' },
      // ── Survive Part 1 (9) ──
      { ex: '774173-hollow-heart', tipo: 'bronze', nome: { pt: 'Coração Vazio', en: 'Hollow Heart' }, desc: { pt: 'Sobreviva por 1 minuto com qualquer personagem.' }, pct: 100, exp: 8, rar: 'comum', img: '5573ed0j' },
      { ex: '774174-peachone', tipo: 'bronze', nome: { pt: 'Peachone', en: 'Peachone' }, desc: { pt: 'Sobreviva por 10 minutos com qualquer personagem.' }, pct: 95.4, exp: 9, rar: 'comum', img: '003d7544' },
      { ex: '774175-skip-1', tipo: 'bronze', nome: { pt: 'Adiar 1', en: 'Skip 1' }, desc: { pt: 'Sobreviva por 15 minutos em Il Molise.' }, pct: 59.26, exp: 14, rar: 'incomum', img: '8j561711' },
      { ex: '774176-pentagram', tipo: 'bronze', nome: { pt: 'Pentagrama', en: 'Pentagram' }, desc: { pt: 'Sobreviva por 20 minutos com qualquer personagem.' }, pct: 83.51, exp: 10, rar: 'comum', img: 'ee31d5de' },
      { ex: '774177-lama', tipo: 'prata', nome: { pt: 'Lama', en: 'Lama' }, desc: { pt: 'Sobreviva por 20 minutos com pelo menos +10% de Maldição.' }, pct: 68.08, exp: 12, rar: 'comum', img: '40e15d5e' },
      { ex: '774178-skip-3', tipo: 'prata', nome: { pt: 'Adiar 3', en: 'Skip 3' }, desc: { pt: 'Sobreviva por 30 minutos em Osseocidade.' }, pct: 52.78, exp: 16, rar: 'incomum', img: '6d750105' },
      { ex: '774179-skip-2', tipo: 'prata', nome: { pt: 'Adiar 2', en: 'Skip 2' }, desc: { pt: 'Sobreviva por 30 minutos nas Planícies Verdes.' }, pct: 47.84, exp: 17, rar: 'incomum', img: 'b8g67174' },
      { ex: '774180-skip-5', tipo: 'prata', nome: { pt: 'Adiar 5', en: 'Skip 5' }, desc: { pt: 'Sobreviva por 15 minutos na Erupção de Chefes.' }, pct: 43.29, exp: 19, rar: 'incomum', img: 'gj130407' },
      { ex: '774181-skip-4', tipo: 'bronze', nome: { pt: 'Adiar 4', en: 'Skip 4' }, desc: { pt: 'Sobreviva por 15 minutos em Moongolow.' }, pct: 54.76, exp: 15, rar: 'incomum', img: 'dg01jej4' },
      // ── Survive Part 2 (11) ──
      { ex: '774182-runetracer', tipo: 'bronze', nome: { pt: 'Runa Traçante', en: 'Runetracer' }, desc: { pt: 'Sobreviva por 5 minutos com Pasqualina.' }, pct: 82.91, exp: 10, rar: 'comum', img: 'j065bgb8' },
      { ex: '774183-phiera-der-tuphello', tipo: 'bronze', nome: { pt: 'Phiera Der Tuphello', en: 'Phiera Der Tuphello' }, desc: { pt: 'Sobreviva por 10 minutos com Pugnala.' }, pct: 62.57, exp: 13, rar: 'comum', img: '1370565d' },
      { ex: '774184-gatti-amari', tipo: 'bronze', nome: { pt: 'Gatti Amari', en: 'Gatti Amari' }, desc: { pt: 'Sobreviva por 15 minutos com Giovanna.' }, pct: 54.77, exp: 15, rar: 'incomum', img: '35703g38' },
      { ex: '774185-eight-the-sparrow', tipo: 'bronze', nome: { pt: 'Otto, o Pardal', en: 'Eight the Sparrow' }, desc: { pt: 'Sobreviva por 15 minutos com Pugnala.' }, pct: 61.3, exp: 13, rar: 'comum', img: '7704j3j1' },
      { ex: '774186-shadow-pinion', tipo: 'bronze', nome: { pt: 'Pinhão Sombrio', en: 'Shadow Pinion' }, desc: { pt: 'Sobreviva por 15 minutos com Concetta.' }, pct: 54.23, exp: 15, rar: 'incomum', img: '5573ejej' },
      { ex: '774187-song-of-mana', tipo: 'bronze', nome: { pt: 'Canção de Mana', en: 'Song of Mana' }, desc: { pt: 'Sobreviva por 15 minutos com Poppea.' }, pct: 60.38, exp: 14, rar: 'comum', img: '003d7e74' },
      { ex: '774188-vento-sacro', tipo: 'bronze', nome: { pt: 'Vento Sacro', en: 'Vento Sacro' }, desc: { pt: 'Sobreviva por 15 minutos com Zi\'Assunta.' }, pct: 51.66, exp: 16, rar: 'incomum', img: '8j5617j1' },
      { ex: '774189-tiragis%c3%ba', tipo: 'bronze', nome: { pt: 'Tiragisú', en: 'Tiragisú' }, desc: { pt: 'Sobreviva por 20 minutos com Krochi.' }, pct: 57.25, exp: 14, rar: 'incomum', img: 'ee31d5ee' },
      { ex: '774190-skull-omaniac', tipo: 'prata', nome: { pt: 'Caveira Maníaca', en: 'Skull Omaniac' }, desc: { pt: 'Sobreviva por 30 minutos com Lama.' }, pct: 48.08, exp: 17, rar: 'incomum', img: '40e15d0e' },
      { ex: '774191-pummarola', tipo: 'bronze', nome: { pt: 'Pummarola', en: 'Pummarola' }, desc: { pt: 'Sobreviva por 5 minutos com Gennaro.' }, pct: 78.61, exp: 11, rar: 'comum', img: '6d7501d5' },
      { ex: '774192-bracelet', tipo: 'prata', nome: { pt: 'Bracelet', en: 'Bracelet' }, desc: { pt: 'Sobreviva por 30 minutos com Gallo ou Divano.' }, pct: 42.77, exp: 19, rar: 'incomum', img: 'b8g67184' },
      // ── Housekeeping (12) ──
      { ex: '774193-wings', tipo: 'bronze', nome: { pt: 'Asas', en: 'Wings' }, desc: { pt: 'Alcance o nível 5.' }, pct: 99.58, exp: 8, rar: 'comum', img: 'gj1304j7' },
      { ex: '774194-crown', tipo: 'bronze', nome: { pt: 'Coroa', en: 'Crown' }, desc: { pt: 'Alcance o nível 10.' }, pct: 97.5, exp: 8, rar: 'comum', img: 'dg01jeg4' },
      { ex: '774195-krochi', tipo: 'prata', nome: { pt: 'Krochi', en: 'Krochi' }, desc: { pt: 'Derrote 100.000 inimigos.' }, pct: 73.57, exp: 11, rar: 'comum', img: 'j065bg08' },
      { ex: '774196-fire-wand', tipo: 'bronze', nome: { pt: 'Varinha de Fogo', en: 'Fire Wand' }, desc: { pt: 'Destrua 20 fontes de luz.' }, pct: 97.21, exp: 9, rar: 'comum', img: '1370563d' },
      { ex: '774197-dommario', tipo: 'bronze', nome: { pt: 'Dommario', en: 'Dommario' }, desc: { pt: 'Obtenha 5.000 moedas na mesma partida.' }, pct: 75.28, exp: 11, rar: 'comum', img: '35703g58' },
      { ex: '774198-garlic', tipo: 'bronze', nome: { pt: 'Alho', en: 'Garlic' }, desc: { pt: 'Encontre 5 Frangos Assados.' }, pct: 94.63, exp: 9, rar: 'comum', img: '7704j371' },
      { ex: '774199-clover', tipo: 'bronze', nome: { pt: 'Trevo', en: 'Clover' }, desc: { pt: 'Encontre um Trevinho.' }, pct: 86.96, exp: 10, rar: 'comum', img: '5573ej5j' },
      { ex: '774200-clock-lancet', tipo: 'bronze', nome: { pt: 'Lanceta Temporal', en: 'Clock Lancet' }, desc: { pt: 'Encontre um Orologion.' }, pct: 94.22, exp: 9, rar: 'comum', img: '003d7e04' },
      { ex: '774201-cross', tipo: 'bronze', nome: { pt: 'Cruz', en: 'Cross' }, desc: { pt: 'Encontre um Rosário.' }, pct: 89.08, exp: 9, rar: 'comum', img: '8j561751' },
      { ex: '774202-magnet', tipo: 'bronze', nome: { pt: 'Magnetismo', en: 'Magnet' }, desc: { pt: 'Encontre um Aspirador.' }, pct: 90.19, exp: 9, rar: 'comum', img: 'ee31d53e' },
      { ex: '774203-torronas-box', tipo: 'bronze', nome: { pt: 'Caixa de Torrona', en: 'Torrona\'s Box' }, desc: { pt: 'Carregue 6 evoluções de armas diferentes ao mesmo tempo.' }, pct: 58.21, exp: 14, rar: 'incomum', img: '40e15dee' },
      { ex: '774204-suor-clerici', tipo: 'bronze', nome: { pt: 'Irmã Clerici', en: 'Suor Clerici' }, desc: { pt: 'Recupere 1.000 PV.' }, pct: 84.63, exp: 10, rar: 'comum', img: '6d750175' },
      // ── Base Arsenal (11) ──
      { ex: '774205-arca', tipo: 'bronze', nome: { pt: 'Arca', en: 'Arca' }, desc: { pt: 'Eleve a Varinha de Fogo para o nível 4.' }, pct: 83.77, exp: 10, rar: 'comum', img: 'b8g671g4' },
      { ex: '774206-bracer', tipo: 'bronze', nome: { pt: 'Braçadeira', en: 'Bracer' }, desc: { pt: 'Eleve a Bíblia do Rei para o nível 4.' }, pct: 87.22, exp: 9, rar: 'comum', img: 'gj130417' },
      { ex: '774207-candelabrador', tipo: 'bronze', nome: { pt: 'Candelabrador', en: 'Candelabrador' }, desc: { pt: 'Eleve a Água Benta para o nível 4.' }, pct: 85.29, exp: 10, rar: 'comum', img: 'dg01je04' },
      { ex: '774208-porta', tipo: 'bronze', nome: { pt: 'Porta', en: 'Porta' }, desc: { pt: 'Eleve o Anel de Raios para o nível 4.' }, pct: 81.68, exp: 10, rar: 'comum', img: 'j065bg68' },
      { ex: '774209-duplicator', tipo: 'bronze', nome: { pt: 'Duplicador', en: 'Duplicator' }, desc: { pt: 'Eleve a Varinha Mágica para o nível 7.' }, pct: 84.16, exp: 10, rar: 'comum', img: '1370567d' },
      { ex: '774210-ebony-wings', tipo: 'bronze', nome: { pt: 'Asas de Ébano', en: 'Ebony Wings' }, desc: { pt: 'Eleve o Peachone para o nível 7.' }, pct: 70.26, exp: 12, rar: 'comum', img: '35703g78' },
      { ex: '774211-spellbinder', tipo: 'bronze', nome: { pt: 'Magicatalisador', en: 'Spellbinder' }, desc: { pt: 'Eleve a Runa Traçante para o nível 7.' }, pct: 75.92, exp: 11, rar: 'comum', img: '7704j301' },
      { ex: '774212-poe-ratcho', tipo: 'bronze', nome: { pt: 'Poe Ratcho', en: 'Poe Ratcho' }, desc: { pt: 'Eleve o Alho para nível 7.' }, pct: 81.74, exp: 10, rar: 'comum', img: '5573ej7j' },
      { ex: '774213-christine', tipo: 'bronze', nome: { pt: 'Christine', en: 'Christine' }, desc: { pt: 'Eleve o Pentagrama para o nível 7.' }, pct: 68.31, exp: 12, rar: 'comum', img: '003d7e34' },
      { ex: '774214-omni', tipo: 'prata', nome: { pt: 'Omni', en: 'Omni' }, desc: { pt: 'Eleve a Caixa de Torrona para o nível 9.' }, pct: 54.46, exp: 15, rar: 'incomum', img: '8j561761' },
      { ex: '774215-empty-tome', tipo: 'prata', nome: { pt: 'Tomo Vazio', en: 'Empty Tome' }, desc: { pt: 'Carregue 6 armas diferentes ao mesmo tempo.' }, pct: 92.32, exp: 9, rar: 'comum', img: 'ee31d51e' },
      // ── New PowerUps (11) ──
      { ex: '774216-reroll-5', tipo: 'prata', nome: { pt: 'Rolar Novamente 5', en: 'Reroll 5' }, desc: { pt: 'Alcance o nível 80 com Sir Ambrojão.' }, pct: 34.91, exp: 24, rar: 'incomum', img: '40e15d1e' },
      { ex: '774217-reroll-2', tipo: 'bronze', nome: { pt: 'Rolar Novamente 2', en: 'Reroll 2' }, desc: { pt: 'Alcance o nível 80 com Yatta Cavallo.' }, pct: 39.23, exp: 21, rar: 'incomum', img: '6d750155' },
      { ex: '774218-reroll-1', tipo: 'bronze', nome: { pt: 'Rolar Novamente 1', en: 'Reroll 1' }, desc: { pt: 'Alcance o nível 80 com Mortaccio.' }, pct: 41.14, exp: 20, rar: 'incomum', img: 'b8g67164' },
      { ex: '774219-reroll-4', tipo: 'bronze', nome: { pt: 'Rolar Novamente 4', en: 'Reroll 4' }, desc: { pt: 'Alcance o nível 80 com O\'Sole Meeo.' }, pct: 35.06, exp: 24, rar: 'incomum', img: 'gj130437' },
      { ex: '774220-reroll-3', tipo: 'bronze', nome: { pt: 'Rolar Novamente 3', en: 'Reroll 3' }, desc: { pt: 'Alcance o nível 80 com Bianca Ramba.' }, pct: 33.49, exp: 25, rar: 'incomum', img: 'dg01je14' },
      { ex: '774221-banish-5', tipo: 'prata', nome: { pt: 'Banir 5', en: 'Banish 5' }, desc: { pt: 'Preencha 100 registros na Coleção.' }, pct: 54.09, exp: 15, rar: 'incomum', img: 'j065bg58' },
      { ex: '774222-mindbender', tipo: 'bronze', nome: { pt: 'Dobramente', en: 'Mindbender' }, desc: { pt: 'Preencha 50 registros na Coleção.' }, pct: 74.86, exp: 11, rar: 'comum', img: '1370560d' },
      { ex: '774223-banish-1', tipo: 'bronze', nome: { pt: 'Banir 1', en: 'Banish 1' }, desc: { pt: 'Preencha 60 registros na Coleção.' }, pct: 69.75, exp: 12, rar: 'comum', img: '35703g08' },
      { ex: '774224-banish-2', tipo: 'bronze', nome: { pt: 'Banir 2', en: 'Banish 2' }, desc: { pt: 'Preencha 70 registros na Coleção.' }, pct: 65.03, exp: 13, rar: 'comum', img: '7704j341' },
      { ex: '774225-banish-3', tipo: 'bronze', nome: { pt: 'Banir 3', en: 'Banish 3' }, desc: { pt: 'Preencha 80 registros na Coleção.' }, pct: 61, exp: 14, rar: 'comum', img: '5573ej3j' },
      { ex: '774226-banish-4', tipo: 'bronze', nome: { pt: 'Banir 4', en: 'Banish 4' }, desc: { pt: 'Preencha 90 registros na Coleção.' }, pct: 57.29, exp: 14, rar: 'incomum', img: '003d7ed4' },
      // ── Tides of the Foscari Part 1 (12) ──
      { ex: '774227-keitha-muort', tipo: 'bronze', nome: { pt: 'Keitha Muort', en: 'Keitha Muort' }, desc: { pt: 'Evolua a Eskizzibur.' }, pct: 22.99, exp: 36, rar: 'raro', img: '8j561701' },
      { ex: '774228-hyper-lake-foscari', tipo: 'prata', nome: { pt: 'Hiper Lago Foscari', en: 'Hyper Lake Foscari' }, desc: { pt: 'Derrote o Avatar de Gaea no Lago Foscari.' }, pct: 25.66, exp: 32, rar: 'raro', img: 'ee31d5ge' },
      { ex: '774229-lake-foscari-map', tipo: 'bronze', nome: { pt: 'Mapa Lago Foscari', en: 'Lake Foscari Map' }, desc: { pt: 'Encontre o Mapa Lago Foscari.' }, pct: 27.46, exp: 30, rar: 'raro', img: '40e15dbe' },
      { ex: '774230-happy-birthday', tipo: 'bronze', nome: { pt: 'Feliz Aniversário', en: 'Happy Birthday' }, desc: { pt: 'Derrote 6.000 Samucas.' }, pct: 19.39, exp: 43, rar: 'raro', img: '6d750135' },
      { ex: '774231-maruto-cuts', tipo: 'bronze', nome: { pt: 'Maruto Cuts', en: 'Maruto Cuts' }, desc: { pt: 'Faça a união de Sortilivro, Sortifeixe e Sortigolpe.' }, pct: 24.26, exp: 34, rar: 'raro', img: 'b8g67144' },
      { ex: '774232-eskizzibur', tipo: 'bronze', nome: { pt: 'Eskizzibur', en: 'Eskizzibur' }, desc: { pt: 'Sobreviva por 15 minutos com Maruto Cuts.' }, pct: 22.66, exp: 36, rar: 'raro', img: 'gj130457' },
      { ex: '774233-spellstrike', tipo: 'bronze', nome: { pt: 'Sortigolpe', en: 'Spellstrike' }, desc: { pt: 'Eleve o Sortigolpe para o nível 6.' }, pct: 24.97, exp: 33, rar: 'raro', img: 'dg01jeb4' },
      { ex: '774234-spellstream', tipo: 'bronze', nome: { pt: 'Sortifeixe', en: 'Spellstream' }, desc: { pt: 'Eleve o Sortifeixe para o nível 6.' }, pct: 25.06, exp: 33, rar: 'raro', img: 'j065bge8' },
      { ex: '774235-spellstring', tipo: 'bronze', nome: { pt: 'Sortilivro', en: 'Spellstring' }, desc: { pt: 'Sobreviva por 15 minutos com Eleanor Uziron.' }, pct: 24.08, exp: 34, rar: 'raro', img: '137056jd' },
      { ex: '774236-millionaire', tipo: 'bronze', nome: { pt: 'Millionaire', en: 'Millionaire' }, desc: { pt: 'Evolua a Flecha Flash.' }, pct: 21.77, exp: 38, rar: 'raro', img: '35703g68' },
      { ex: '774237-eleanor-uziron', tipo: 'bronze', nome: { pt: 'Eleanor Uziron', en: 'Eleanor Uziron' }, desc: { pt: 'Encontre e abra o caixão no Lago Foscari.' }, pct: 27.01, exp: 31, rar: 'raro', img: '7704j351' },
      { ex: '774238-flash-arrow', tipo: 'bronze', nome: { pt: 'Flecha Flash', en: 'Flash Arrow' }, desc: { pt: 'Sobreviva por 15 minutos com Keitha Muort.' }, pct: 21.27, exp: 39, rar: 'raro', img: '40e15dbd' },
      // ── Tides of the Foscari Part 2 (7) ──
      { ex: '774239-je-ne-viv', tipo: 'bronze', nome: { pt: 'Je-Ne-Viv', en: 'Je-Ne-Viv' }, desc: { pt: 'Derrote 100 mil inimigos em uma só partida com Genevieve Gruyère.' }, pct: 18.43, exp: 45, rar: 'raro', img: '6d750134' },
      { ex: '774240-luminaire-foscari', tipo: 'prata', nome: { pt: 'Luminaire Foscari', en: 'Luminaire Foscari' }, desc: { pt: 'Com Maruto, rompa o Selo do Abismo.' }, pct: 19.33, exp: 43, rar: 'raro', img: 'b8g67137' },
      { ex: '774241-prismatic-missile', tipo: 'bronze', nome: { pt: 'Projétil Prismático', en: 'Prismatic Missile' }, desc: { pt: 'Sobreviva por 15 minutos com Luminaire Foscari.' }, pct: 19.3, exp: 43, rar: 'raro', img: 'gj13047j' },
      { ex: '774242-ophion', tipo: 'bronze', nome: { pt: 'Ofíon', en: 'Ophion' }, desc: { pt: 'Evolua o Serviçal Sombrio.' }, pct: 20.01, exp: 41, rar: 'raro', img: 'dg01je80' },
      { ex: '774243-abyss-foscari', tipo: 'ouro', nome: { pt: 'Abismo Foscari', en: 'Abyss Foscari' }, desc: { pt: 'Com Keitha, rompa o Selo do Lago.' }, pct: 19.8, exp: 42, rar: 'raro', img: 'j065bg15' },
      { ex: '774244-shadow-servant', tipo: 'bronze', nome: { pt: 'Serviçal Sombrio', en: 'Shadow Servant' }, desc: { pt: 'Sobreviva por 15 minutos com Genevieve Gruyère.' }, pct: 19.88, exp: 42, rar: 'raro', img: '1370561j' },
      { ex: '774245-luminaire', tipo: 'bronze', nome: { pt: 'Luminaire', en: 'Luminaire' }, desc: { pt: 'Evolua o Projétil Prismático.' }, pct: 20.79, exp: 40, rar: 'raro', img: '35703g44' },
      // ── Tides of the Foscari Part 3 (3) ──
      { ex: '774246-rottinghoul', tipo: 'bronze', nome: { pt: 'Rottin\'Ghoul', en: 'Rottin\'Ghoul' }, desc: { pt: 'Derrote 6.000 Carniçais Putrefatos.' }, pct: 18.77, exp: 44, rar: 'raro', img: '7704j3dg' },
      { ex: '774247-genevieve-gruy%c3%a8re', tipo: 'ouro', nome: { pt: 'Genevieve Gruyère', en: 'Genevieve Gruyère' }, desc: { pt: 'Com Eleanor, rompa o Selo do Banido.' }, pct: 18.93, exp: 44, rar: 'raro', img: '5573ejb1' },
      { ex: '774248-hyper-abyss-foscari', tipo: 'ouro', nome: { pt: 'Hiper Abismo Foscari', en: 'Hyper Abyss Foscari' }, desc: { pt: 'Derrote Je-Ne-Viv no Abismo Foscari.' }, pct: 18.58, exp: 44, rar: 'raro', img: '003d7e1g' },
      // ── Legacy of the Moonspell Part 1 (10) ──
      { ex: '774249-108-bocce', tipo: 'bronze', nome: { pt: '108 Bocha', en: '108 Bocce' }, desc: { pt: 'Sobreviva por 15 minutos com McCoy-Oni.' }, pct: 20.79, exp: 40, rar: 'raro', img: '8j561748' },
      { ex: '774250-mccoy-oni', tipo: 'prata', nome: { pt: 'McCoy-Oni', en: 'McCoy-Oni' }, desc: { pt: 'Evolua o Manto da Miragem.' }, pct: 23.79, exp: 35, rar: 'raro', img: 'ee31d58b' },
      { ex: '774251-mirage-robe', tipo: 'bronze', nome: { pt: 'Manto da Miragem', en: 'Mirage Robe' }, desc: { pt: 'Sobreviva por 15 minutos com Babi-Onna.' }, pct: 21.16, exp: 39, rar: 'raro', img: '40e15d6d' },
      { ex: '774252-babi-onna', tipo: 'prata', nome: { pt: 'Babi-Onna', en: 'Babi-Onna' }, desc: { pt: 'Evolua a Noite da Invocação.' }, pct: 25.29, exp: 33, rar: 'raro', img: '6d7501g4' },
      { ex: '774253-summon-night', tipo: 'bronze', nome: { pt: 'Noite da Invocação', en: 'Summon Night' }, desc: { pt: 'Sobreviva por 15 minutos com Syuuto Feitiço Lunar.' }, pct: 22.3, exp: 37, rar: 'raro', img: 'b8g671e7' },
      { ex: '774254-syuuto', tipo: 'prata', nome: { pt: 'Syuuto', en: 'Syuuto' }, desc: { pt: 'Evolua as Quatro Estações.' }, pct: 25.5, exp: 32, rar: 'raro', img: 'gj1304gj' },
      { ex: '774255-four-seasons', tipo: 'bronze', nome: { pt: 'Quatro Estações', en: 'Four Seasons' }, desc: { pt: 'Sobreviva por 15 minutos com Menya Feitiço Lunar.' }, pct: 23.83, exp: 35, rar: 'raro', img: 'dg01je40' },
      { ex: '774256-menya', tipo: 'bronze', nome: { pt: 'Menya', en: 'Menya' }, desc: { pt: 'Evolua o Vento Prateado.' }, pct: 27.45, exp: 30, rar: 'raro', img: 'j065bg45' },
      { ex: '774257-silver-wind', tipo: 'bronze', nome: { pt: 'Vento Prateado', en: 'Silver Wind' }, desc: { pt: 'Sobreviva por 15 minutos com Miang Feitiço Lunar.' }, pct: 27.49, exp: 30, rar: 'raro', img: '137056gj' },
      { ex: '774258-miang', tipo: 'bronze', nome: { pt: 'Miang', en: 'Miang' }, desc: { pt: 'Encontre e abra o caixão no Monte Feitiço Lunar.' }, pct: 26.86, exp: 31, rar: 'raro', img: '35703gj4' },
      // ── Legacy of the Moonspell Part 2 (8) ──
      { ex: '774259-mt-moonspell-map', tipo: 'bronze', nome: { pt: 'Mapa Monte Moonspell', en: 'Mt Moonspell Map' }, desc: { pt: 'Encontre o Mapa Monte Moonspell.' }, pct: 30.47, exp: 27, rar: 'raro', img: '7704j3gg' },
      { ex: '774260-boo-roo-boolle', tipo: 'bronze', nome: { pt: 'Boo Roo Boolle', en: 'Boo Roo Boolle' }, desc: { pt: 'Evolua o Mille Bolle Blu.' }, pct: 20.91, exp: 40, rar: 'raro', img: '5573ej61' },
      { ex: '774261-hyper-mt-moonspell', tipo: 'bronze', nome: { pt: 'Hiper Monte Moonspell', en: 'Hyper Mt Moonspell' }, desc: { pt: 'Derrote o Orochimario no Monte Feitiço Lunar.' }, pct: 24.44, exp: 34, rar: 'raro', img: '003d7ebg' },
      { ex: '774262-muramasa', tipo: 'bronze', nome: { pt: 'Muramasa', en: 'Muramasa' }, desc: { pt: 'Evolua a Espada da Noite.' }, pct: 25.19, exp: 33, rar: 'raro', img: '8j5617e8' },
      { ex: '774263-night-sword', tipo: 'bronze', nome: { pt: 'Espada da Noite', en: 'Night Sword' }, desc: { pt: 'Encontre uma Espada da Noite.' }, pct: 29.24, exp: 28, rar: 'raro', img: 'ee31d56b' },
      { ex: '774264-gavet-oni', tipo: 'bronze', nome: { pt: 'Gav\'Et-Oni', en: 'Gav\'Et-Oni' }, desc: { pt: 'Derrote 6.000 Kappa.' }, pct: 18.81, exp: 44, rar: 'raro', img: '40e15d4d' },
      { ex: '774265-megalo-syuuto', tipo: 'ouro', nome: { pt: 'Megalo Syuuto', en: 'Megalo Syuuto' }, desc: { pt: 'Derrote 100 mil inimigos em uma só partida com Syuuto Fei. Lunar.' }, pct: 19.26, exp: 43, rar: 'raro', img: '6d7501b4' },
      { ex: '774266-megalo-menya', tipo: 'bronze', nome: { pt: 'Megalo Menya', en: 'Megalo Menya' }, desc: { pt: 'Derrote 100 mil inimigos em uma só partida com Menya Feit. Lunar.' }, pct: 19.64, exp: 42, rar: 'raro', img: 'b8g671b7' },
      // ── Tiny Bridge (6) ──
      { ex: '774267-extra-adventures', tipo: 'prata', nome: { pt: 'EXTRA: Aventuras', en: 'EXTRA: Adventures' }, desc: { pt: 'Obtenha o Portão Atlas na Erupção de Chefes.' }, pct: 47, exp: 18, rar: 'incomum', img: 'gj13048j' },
      { ex: '774268-extra-world-of-light-and-dark', tipo: 'bronze', nome: { pt: 'EXTRA: Mundo de Luz e Trevas', en: 'EXTRA: World of Light and Dark' }, desc: { pt: 'Conclua uma vez a Aventura Mundo de Luz e Trevas.' }, pct: 17.75, exp: 47, rar: 'raro', img: 'dg01jed0' },
      { ex: '774269-extra-a-garlic-paradise', tipo: 'bronze', nome: { pt: 'EXTRA: Um Paraíso Aliáceo', en: 'EXTRA: A Garlic Paradise' }, desc: { pt: 'Conclua uma vez a Aventura Um Paraíso Aliáceo.' }, pct: 19.54, exp: 42, rar: 'raro', img: 'j065bg85' },
      { ex: '774270-extra-seal-i', tipo: 'bronze', nome: { pt: 'EXTRA: Selar I', en: 'EXTRA: Seal I' }, desc: { pt: 'Use Banir em 10 ou mais armas na mesma partida.' }, pct: 38.8, exp: 21, rar: 'incomum', img: '137056ej' },
      { ex: '774271-extra-tiny-bridge', tipo: 'ouro', nome: { pt: 'EXTRA: Pontezinha', en: 'EXTRA: Tiny Bridge' }, desc: { pt: 'Alcance o nível 80 na Torre de Gallo invertida.' }, pct: 29.58, exp: 28, rar: 'raro', img: '35703gd4' },
      { ex: '774272-extra-chaos-altemanna', tipo: 'prata', nome: { pt: 'EXTRA: Altemanna do Caos', en: 'EXTRA: Chaos Altemanna' }, desc: { pt: 'Encontre a Altemanna do Caos na Pontezinha.' }, pct: 29.09, exp: 28, rar: 'raro', img: '7704j36g' },
      // ── Bat Country (5) ──
      { ex: '774273-extra-bat-country', tipo: 'ouro', nome: { pt: 'EXTRA: País Morcego', en: 'EXTRA: Bat Country' }, desc: { pt: 'Alcance o nível 80 na Floresta Insana invertida.' }, pct: 32.27, exp: 26, rar: 'incomum', img: '5573ej11' },
      { ex: '774274-extra-apoplexy', tipo: 'prata', nome: { pt: 'EXTRA: Apoplexia', en: 'EXTRA: Apoplexy' }, desc: { pt: 'Encontre a Apoplexia no minuto 09:00 no País Morcego.' }, pct: 31.75, exp: 26, rar: 'incomum', img: '003d7e6g' },
      { ex: '774275-extra-chaos-malachite', tipo: 'prata', nome: { pt: 'EXTRA: Malaquita do Caos', en: 'EXTRA: Chaos Malachite' }, desc: { pt: 'Encontre a Malaquita do Caos no minuto 18:00 no País Morcego.' }, pct: 31.73, exp: 26, rar: 'incomum', img: '8j5617b8' },
      { ex: '774276-extra-pako-battiliar', tipo: 'bronze', nome: { pt: 'EXTRA: Pako Battiliar', en: 'EXTRA: Pako Battiliar' }, desc: { pt: 'Derrote um total de 161616 morcegos.' }, pct: 30.71, exp: 27, rar: 'raro', img: 'ee31d5jb' },
      { ex: '774277-extra-bat-robbert', tipo: 'prata', nome: { pt: 'EXTRA: Bat Robbert', en: 'EXTRA: Bat Robbert' }, desc: { pt: 'Evolua o Pako Battiliar.' }, pct: 30.69, exp: 27, rar: 'raro', img: '40e15djd' },
      // ── Astral Stair (5) ──
      { ex: '774278-extra-seal-ii', tipo: 'bronze', nome: { pt: 'EXTRA: Selar II', en: 'EXTRA: Seal II' }, desc: { pt: 'Use Banir em 20 ou mais armas na mesma partida.' }, pct: 28.58, exp: 29, rar: 'raro', img: '6d7501e4' },
      { ex: '774279-extra-astral-stair', tipo: 'ouro', nome: { pt: 'EXTRA: Escadaria Astral', en: 'EXTRA: Astral Stair' }, desc: { pt: 'Alcance o nível 80 na Biblioteca Incrustada invertida.' }, pct: 32.27, exp: 26, rar: 'incomum', img: 'b8g67107' },
      { ex: '774280-extra-trisection', tipo: 'prata', nome: { pt: 'EXTRA: Trisseção', en: 'EXTRA: Trisection' }, desc: { pt: 'Encontre a Trisseção na Escadaria Astral.' }, pct: 31, exp: 27, rar: 'raro', img: 'gj1304ej' },
      { ex: '774281-extra-chaos-rosalia', tipo: 'prata', nome: { pt: 'EXTRA: Rosalia do Caos', en: 'EXTRA: Chaos Rosalia' }, desc: { pt: 'Encontre a Rosalia do Caos na Escadaria Astral.' }, pct: 31.11, exp: 27, rar: 'incomum', img: 'dg01je50' },
      { ex: '774282-extra-astral-stair-map', tipo: 'prata', nome: { pt: 'EXTRA: Mapa Escadaria Astral', en: 'EXTRA: Astral Stair Map' }, desc: { pt: 'Encontre o Mapa Escadaria Astral.' }, pct: 30.54, exp: 27, rar: 'raro', img: 'j065bgj5' },
      // ── Whiteout (6) ──
      { ex: '774283-extra-whiteout', tipo: 'prata', nome: { pt: 'EXTRA: Alabastro', en: 'EXTRA: Whiteout' }, desc: { pt: 'Encontre 20 Orologions.' }, pct: 69.37, exp: 12, rar: 'comum', img: '137056dj' },
      { ex: '774284-extra-antidote', tipo: 'bronze', nome: { pt: 'EXTRA: Antídoto', en: 'EXTRA: Antidote' }, desc: { pt: 'Encontre o Antídoto no Alabastro.' }, pct: 55.87, exp: 15, rar: 'incomum', img: '35703ge4' },
      { ex: '774285-extra-she-moon-eeta', tipo: 'ouro', nome: { pt: 'EXTRA: She-Moon Eeta', en: 'EXTRA: She-Moon Eeta' }, desc: { pt: 'Sobreviva por 20 minutos no Alabastro.' }, pct: 51.5, exp: 16, rar: 'incomum', img: '7704j3eg' },
      { ex: '774286-extra-glass-fandango', tipo: 'bronze', nome: { pt: 'EXTRA: Fandango de Vidro', en: 'EXTRA: Glass Fandango' }, desc: { pt: 'Eleve o Fandango de Vidro para o nível 7.' }, pct: 50.29, exp: 16, rar: 'incomum', img: '5573ej41' },
      { ex: '774287-extra-celestial-voulge', tipo: 'prata', nome: { pt: 'EXTRA: Cutelo Celestial', en: 'EXTRA: Celestial Voulge' }, desc: { pt: 'Evolua o Fandango de Vidro.' }, pct: 44.19, exp: 19, rar: 'incomum', img: '003d7egg' },
      { ex: '774288-extra-seal-iii', tipo: 'bronze', nome: { pt: 'EXTRA: Selar III', en: 'EXTRA: Seal III' }, desc: { pt: 'Use Banir em 40 ou mais armas na mesma partida.' }, pct: 24.28, exp: 34, rar: 'raro', img: '8j5617g8' },
      // ── Space 54 (5) ──
      { ex: '774289-extra-space-54', tipo: 'prata', nome: { pt: 'EXTRA: Espaço 54', en: 'EXTRA: Space 54' }, desc: { pt: 'Encontre 5 Dedos Dourados.' }, pct: 29.98, exp: 28, rar: 'raro', img: 'ee31d54b' },
      { ex: '774290-extra-phas3r', tipo: 'bronze', nome: { pt: 'EXTRA: Phas3r', en: 'EXTRA: Phas3r' }, desc: { pt: 'Eleve o Phas3r ao nível 7.' }, pct: 31.63, exp: 26, rar: 'incomum', img: '40e15d3d' },
      { ex: '774291-extra-evolve-the-phas3r', tipo: 'prata', nome: { pt: 'EXTRA: Evolua o Phas3r.', en: 'EXTRA: Evolve the Phas3r' }, desc: { pt: 'Evolua o Phas3r' }, pct: 30.67, exp: 27, rar: 'raro', img: '6d750164' },
      { ex: '774292-extra-brave-story', tipo: 'prata', nome: { pt: 'EXTRA: História Corajosa', en: 'EXTRA: Brave Story' }, desc: { pt: 'Encontre História Corajoso aos 18 minutos no Espaço 54.' }, pct: 28.99, exp: 29, rar: 'raro', img: 'b8g671j7' },
      { ex: '774293-extra-space-dude', tipo: 'ouro', nome: { pt: 'EXTRA: Carinha do Espaço', en: 'EXTRA: Space Dude' }, desc: { pt: 'Sobreviva 20 minutos no Espaço 54.' }, pct: 28.7, exp: 29, rar: 'raro', img: 'gj13046j' },
      // ── Laborratory (6) ──
      { ex: '774294-extra-laborratory', tipo: 'prata', nome: { pt: 'EXTRA: Laborratório', en: 'EXTRA: Laborratory' }, desc: { pt: 'Encontre 33 Rosários.' }, pct: 52.45, exp: 16, rar: 'incomum', img: 'dg01je30' },
      { ex: '774295-extra-santa-javelin', tipo: 'bronze', nome: { pt: 'EXTRA: Santo Foguete', en: 'EXTRA: Santa Javelin' }, desc: { pt: 'Eleve o Santo Foguete para o nível 7.' }, pct: 40.09, exp: 21, rar: 'incomum', img: 'j065bgd5' },
      { ex: '774296-extra-seraphic-cry', tipo: 'prata', nome: { pt: 'EXTRA: Clamor Seráfico', en: 'EXTRA: Seraphic Cry' }, desc: { pt: 'Evolua o Santo Foguete.' }, pct: 38.3, exp: 22, rar: 'incomum', img: '1370568j' },
      { ex: '774297-extra-arma-dio', tipo: 'bronze', nome: { pt: 'EXTRA: Arma Dio', en: 'EXTRA: Arma Dio' }, desc: { pt: 'Encontre uma Arma Dio no Laborratório.' }, pct: 47.01, exp: 18, rar: 'incomum', img: '35703g84' },
      { ex: '774298-extra-santa-ladonna', tipo: 'ouro', nome: { pt: 'EXTRA: Santa Ladonna', en: 'EXTRA: Santa Ladonna' }, desc: { pt: 'Sobreviva por 20 minutos no Laborratório.' }, pct: 38.81, exp: 21, rar: 'incomum', img: '7704j38g' },
      { ex: '774299-extra-carlo-cart', tipo: 'bronze', nome: { pt: 'EXTRA: Pista do Carlo', en: 'EXTRA: Carlo Cart' }, desc: { pt: 'Cause um total de 25.120 de dano com o trem do Laborratório.' }, pct: 35.61, exp: 23, rar: 'incomum', img: '5573ej81' },
      // ── Room 1665 (7) ──
      { ex: '774300-extra-room-1665', tipo: 'prata', nome: { pt: 'EXTRA: Quarto 1665', en: 'EXTRA: Room 1665' }, desc: { pt: 'Ouse lançar o feitiço "forbiddenbox".' }, pct: 29.9, exp: 28, rar: 'raro', img: '003d7e8g' },
      { ex: '774301-extra-darkasso', tipo: 'bronze', nome: { pt: 'EXTRA: Trevasso', en: 'EXTRA: Darkasso' }, desc: { pt: 'Deixe-se levar pelo Trevasso.' }, pct: 28.37, exp: 29, rar: 'raro', img: '8j561788' },
      { ex: '774302-extra-vi-moonlight-bolero', tipo: 'prata', nome: { pt: 'EXTRA: VI - Bolero do Luar', en: 'EXTRA: VI - Moonlight Bolero' }, desc: { pt: 'Deixe-se levar pelo Trevasso.' }, pct: 28.37, exp: 29, rar: 'raro', img: 'ee31d57b' },
      { ex: '774303-extra-i-sapphire-mist', tipo: 'prata', nome: { pt: 'EXTRA: I - Névoa Safira', en: 'EXTRA: I - Sapphire Mist' }, desc: { pt: 'Alcance um bônus de Recarga de -85% com Carinha do Espaço.' }, pct: 20.15, exp: 41, rar: 'raro', img: '40e15d8d' },
      { ex: '774304-extra-x-hail-from-the-future', tipo: 'prata', nome: { pt: 'EXTRA: X - Diretamente do Futuro', en: 'EXTRA: X - Hail from the Future' }, desc: { pt: 'Ative um Purificador de Alma Bizarro com Santa Ladonna.' }, pct: 20.35, exp: 41, rar: 'raro', img: '6d750184' },
      { ex: '774305-extra-xii-crystal-cries', tipo: 'prata', nome: { pt: 'EXTRA: XII - Clamor dos Cristais', en: 'EXTRA: XII - Crystal Cries' }, desc: { pt: 'Ative Firmamentos Estrelados com She-Moon Eeta.' }, pct: 21.08, exp: 39, rar: 'raro', img: 'b8g67157' },
      { ex: '774306-extra-xxi-wandering-the-jet-black', tipo: 'prata', nome: { pt: 'EXTRA: XXI - Pela Escuridão', en: 'EXTRA: XXI - Wandering the Jet Black' }, desc: { pt: 'Alcance 665 de Vida Máx. com Bat Robbert.' }, pct: 19.65, exp: 42, rar: 'raro', img: 'gj1304dj' },
      // ── The Coop (8) ──
      { ex: '894737-extra-hyper-the-coop', tipo: 'bronze', nome: { pt: 'EXTRA: Hiper Cocóperativo', en: 'EXTRA: Hyper the Coop' }, desc: { pt: 'Encontre 500 Frangos Assados.' }, pct: 36.95, exp: 22, rar: 'incomum', img: '775d5d13' },
      { ex: '894738-extra-parm-aegis', tipo: 'bronze', nome: { pt: 'EXTRA: Parmégide', en: 'EXTRA: Parm Aegis' }, desc: { pt: 'Encontre uma Parmégide no Cocóperativo.' }, pct: 30.81, exp: 27, rar: 'raro', img: '55gbgbd0' },
      { ex: '894739-extra-game-speed-modifier', tipo: 'bronze', nome: { pt: 'EXTRA: Modificador de Velocidade de Jogo', en: 'EXTRA: Game Speed Modifier' }, desc: { pt: 'Encontre um Frango Assado com um relógio no meio ao final do Cocóperativo.' }, pct: 26.47, exp: 31, rar: 'raro', img: '00j1j1e7' },
      { ex: '894740-extra-gaze-of-gaea', tipo: 'bronze', nome: { pt: 'EXTRA: Olhar de Gaea', en: 'EXTRA: Gaze of Gaea' }, desc: { pt: 'Derrote 0 inimigos no Cocóperativo.' }, pct: 18.68, exp: 44, rar: 'raro', img: '8j04047j' },
      { ex: '894741-extra-gazebo', tipo: 'bronze', nome: { pt: 'EXTRA: Gazebo', en: 'EXTRA: Gazebo' }, desc: { pt: 'Sobreviva por 20 minutos no Cocóperativo.' }, pct: 24.21, exp: 34, rar: 'raro', img: 'eeg8g853' },
      { ex: '894742-extra-iii-hidden-anathema', tipo: 'bronze', nome: { pt: 'EXTRA: III - Anátema Oculto', en: 'EXTRA: III - Hidden Anathema' }, desc: { pt: 'Coma o máximo possível com Gazebo.' }, pct: 14.51, exp: 57, rar: 'muito-raro', img: '40b6b6d1' },
      { ex: '894743-extra-seal-all', tipo: 'bronze', nome: { pt: 'EXTRA: Selar Tudo', en: 'EXTRA: Seal All' }, desc: { pt: 'Use Banir em 80 ou mais armas na mesma partida.' }, pct: 13, exp: 64, rar: 'muito-raro', img: '6d3g3g13' },
      { ex: '894744-extra-to-end-an-ice-age', tipo: 'bronze', nome: { pt: 'EXTRA: O Fim da Era do Gelo', en: 'EXTRA: To End an Ice Age' }, desc: { pt: 'Conclua uma vez a aventura O Fim da Era do Gelo.' }, pct: 12.31, exp: 67, rar: 'muito-raro', img: 'b8434313' },
      // ── Westwoods (7) ──
      { ex: '1017024-extra-westwoods', tipo: 'bronze', nome: { pt: 'EXTRA: Bosque Poente', en: 'EXTRA: Westwoods' }, desc: { pt: 'Colete 23 Trevinhos.' }, pct: 28.89, exp: 29, rar: 'raro', img: '3548dg0d' },
      { ex: '1017025-extra-chula-reh', tipo: 'bronze', nome: { pt: 'EXTRA: Chula-Reh', en: 'EXTRA: Chula-Reh' }, desc: { pt: 'Sobreviva por 20 minutos no Bosque Poente.' }, pct: 21.75, exp: 38, rar: 'raro', img: '77d8634e' },
      { ex: '1017026-extra-karomas-mana', tipo: 'bronze', nome: { pt: 'EXTRA: Mana de Karoma', en: 'EXTRA: Karoma\'s Mana' }, desc: { pt: 'Encontre Mana de Karoma no Bosque Poente.' }, pct: 20.23, exp: 41, rar: 'raro', img: '55b81j38' },
      { ex: '1017027-extra-party-mode', tipo: 'bronze', nome: { pt: 'EXTRA: Modo Coop.', en: 'EXTRA: Party Mode' }, desc: { pt: 'Encontre a Relíquia Mascarada no Bosque Poente.' }, pct: 20.78, exp: 40, rar: 'raro', img: '00186ed5' },
      { ex: '1017028-extra-magi-stone', tipo: 'bronze', nome: { pt: 'EXTRA: Magirrocha', en: 'EXTRA: Magi Stone' }, desc: { pt: 'Eleve a Magirrocha para o nível 7.' }, pct: 22.62, exp: 37, rar: 'raro', img: '8j48b767' },
      { ex: '1017029-extra-kyra-stones', tipo: 'bronze', nome: { pt: 'EXTRA: Kyrarrochas', en: 'EXTRA: Kyra Stones' }, desc: { pt: 'Evolua a Magirrocha.' }, pct: 20.27, exp: 41, rar: 'raro', img: 'ee87j510' },
      { ex: '1017030-extra-xiii-call-of-a-mad-moon', tipo: 'bronze', nome: { pt: 'EXTRA: XIII – Chamado da Lua Louca', en: 'EXTRA: XIII - Call of a Mad Moon' }, desc: { pt: 'Alcance +999% Sorte com Chula-Reh.' }, pct: 12.43, exp: 66, rar: 'muito-raro', img: '4068jdb5' },
      // ── Mazerella (8) ──
      { ex: '1017031-extra-mazerella', tipo: 'bronze', nome: { pt: 'EXTRA: Mazerella', en: 'EXTRA: Mazerella' }, desc: { pt: 'Alcance o nível 80 na Fábrica de Laticínios invertida.' }, pct: 16.57, exp: 50, rar: 'raro', img: '6dg8e13d' },
      { ex: '1017032-extra-chaos-lazulia', tipo: 'bronze', nome: { pt: 'EXTRA: Lazulia do Caos', en: 'EXTRA: Chaos Lazulia' }, desc: { pt: 'Encontre a Lazulia do Caos em Mazerella.' }, pct: 15.4, exp: 54, rar: 'raro', img: 'b83jb14g' },
      { ex: '1017033-extra-preserve', tipo: 'bronze', nome: { pt: 'EXTRA: Preservação', en: 'EXTRA: Preserve' }, desc: { pt: 'Encontre o Ídolo de Cera no Mazerella.' }, pct: 15.35, exp: 54, rar: 'raro', img: 'gj768453' },
      { ex: '1017034-extra-ammo-appalate', tipo: 'bronze', nome: { pt: 'EXTRA: Ilimitarma', en: 'EXTRA: Ammo Appalate' }, desc: { pt: 'Derrote 251.096 Inimigos Atiradores.' }, pct: 30.93, exp: 27, rar: 'raro', img: 'dg83debb' },
      { ex: '1017035-extra-ziappunta-belpaese', tipo: 'bronze', nome: { pt: 'EXTRA: Zi\'Appunta Belpaese', en: 'EXTRA: Zi\'Appunta Belpaese' }, desc: { pt: 'Evolua a Ilimitarma.' }, pct: 22.57, exp: 37, rar: 'raro', img: 'j01d8ge1' },
      { ex: '1017036-extra-v-pale-diamond-incursion', tipo: 'bronze', nome: { pt: 'EXTRA: V – Incursão do Diamante Pálido', en: 'EXTRA: V - Pale Diamond Incursion' }, desc: { pt: 'Ache 10 Baús do Tesouro dourados de Zi\'Appunta numa só partida.' }, pct: 11.6, exp: 71, rar: 'muito-raro', img: '1318e6jg' },
      { ex: '1017037-extra-xviii-victorian-horror', tipo: 'bronze', nome: { pt: 'EXTRA: XVIII – Terror Vitoriano', en: 'EXTRA: XVIII - Victorian Horror' }, desc: { pt: 'Sobreviva por 30 min. sem armas nas Planícies Verdes invertidas.' }, pct: 11.24, exp: 74, rar: 'muito-raro', img: '3548dg6d' },
      { ex: '1017038-extra-embrace-of-gaea', tipo: 'bronze', nome: { pt: 'EXTRA: Abraço de Gaea', en: 'EXTRA: Embrace of Gaea' }, desc: { pt: 'Evolua o Olhar de Gaea.' }, pct: 22.82, exp: 36, rar: 'raro', img: '77d8635e' },
      // ── The Lycaeum (10) ──
      { ex: '1116037-extra-the-lycaeum', tipo: 'bronze', nome: { pt: 'EXTRA: O Liceu', en: 'EXTRA: The Lycaeum' }, desc: { pt: 'Encontre 50 Aspiradores.' }, pct: 24.91, exp: 33, rar: 'raro', img: 'gj858ed3' },
      { ex: '1116038-extra-para-kooleo', tipo: 'bronze', nome: { pt: 'EXTRA: Para Kooleo', en: 'EXTRA: Para Kooleo' }, desc: { pt: 'Sobreviva por 20 minutos no Liceu.' }, pct: 17.56, exp: 47, rar: 'raro', img: 'dgdbd56b' },
      { ex: '1116039-extra-penshin-facha', tipo: 'bronze', nome: { pt: 'EXTRA: Penshin Fatcha', en: 'EXTRA: Penshin Facha' }, desc: { pt: 'Evolua a Penshin Fatcha.' }, pct: 17.38, exp: 48, rar: 'raro', img: 'j08e8j31' },
      { ex: '1116040-extra-green-eyes-vizard', tipo: 'bronze', nome: { pt: 'EXTRA: Vizard dos Olhos Verdes', en: 'EXTRA: Green Eyes Vizard' }, desc: { pt: 'Encontre e compre o Vizard de Olhos Verdes no Liceu.' }, pct: 14.4, exp: 57, rar: 'muito-raro', img: '13ejed4g' },
      { ex: '1116041-extra-survarocchi', tipo: 'bronze', nome: { pt: 'EXTRA: Surtarocchi', en: 'EXTRA: Survarocchi' }, desc: { pt: 'Encontre e compre o Surtarocchi no Liceu.' }, pct: 13.7, exp: 60, rar: 'muito-raro', img: '35d6debd' },
      { ex: '1116042-extra-big-troubler', tipo: 'bronze', nome: { pt: 'EXTRA: Po Lan', en: 'EXTRA: Big Troubler' }, desc: { pt: 'Derrote 1 Morcego Dragão.' }, pct: 12.31, exp: 67, rar: 'muito-raro', img: '77656e1e' },
      { ex: '1116043-extra-unearthly-bolt', tipo: 'bronze', nome: { pt: 'EXTRA: Raio Etéreo', en: 'EXTRA: Unearthly Bolt' }, desc: { pt: 'Evolua o Raio Etéreo.' }, pct: 12, exp: 69, rar: 'muito-raro', img: '551g14d8' },
      { ex: '1116044-extra-0-stake-to-your-heart', tipo: 'bronze', nome: { pt: 'EXTRA: 0 - Estaca no Coração', en: 'EXTRA: 0 - Stake to Your Heart' }, desc: { pt: 'Derrote um Morcego Dragão com o Po Lan usando a Arcana Mata-jogo.' }, pct: 8.44, exp: 98, rar: 'muito-raro', img: '006j6g55' },
      { ex: '1116045-extra-viii-edge-of-the-earth', tipo: 'bronze', nome: { pt: 'EXTRA: VIII - Beira do Mundo', en: 'EXTRA: VIII - Edge of the Earth' }, desc: { pt: 'Ative uma Lavatrix Machina com o Para Kooleo.' }, pct: 8.84, exp: 93, rar: 'muito-raro', img: '8jb0bg37' },
      { ex: '1116046-extra-xix-heir-of-fate', tipo: 'bronze', nome: { pt: 'EXTRA: XIX - Herança do Destino', en: 'EXTRA: XIX - Heir of Fate' }, desc: { pt: 'Sobreviva 15 min. em uma Erupção de Chefes Invertida com eventos aleatórios e de subir de nível.' }, pct: 9.1, exp: 91, rar: 'muito-raro', img: 'eejgj4b0' },
      // ── Legacy of the Moonspell Part 3 (7) ──
      { ex: '1130868-lunarmight', tipo: 'bronze', nome: { pt: 'Grandeza Lunar', en: 'LunarMight' }, desc: { pt: 'Eleve LunarMight para o nível 6.' }, pct: 7.37, exp: 112, rar: 'muito-raro', img: '40jdgb74' },
      { ex: '1130869-lunarbight', tipo: 'bronze', nome: { pt: 'Satélite Lunar', en: 'LunarBight' }, desc: { pt: 'Eleve LunarBight para o nível 6.' }, pct: 7.13, exp: 116, rar: 'muito-raro', img: '6de1j34e' },
      { ex: '1130870-lunarsight', tipo: 'bronze', nome: { pt: 'Ciclo Lunar', en: 'LunarSight' }, desc: { pt: 'Eleve LunarSight para o nível 6.' }, pct: 7.17, exp: 115, rar: 'muito-raro', img: 'b8b154d0' },
      { ex: '1130871-gekkojin', tipo: 'bronze', nome: { pt: 'Gekkojin', en: 'Gekkojin' }, desc: { pt: 'Una LunarMight, LunarBight, e LunarSight.' }, pct: 6.94, exp: 119, rar: 'muito-raro', img: 'gj84d5b6' },
      { ex: '1130872-spiritosa', tipo: 'bronze', nome: { pt: 'Spiritosa', en: 'Spiritosa' }, desc: { pt: 'Alcance o nível 80 com Gekkojin.' }, pct: 6.25, exp: 132, rar: 'muito-raro', img: 'dgde6b76' },
      { ex: '1130873-pearl-magatama', tipo: 'bronze', nome: { pt: 'Pérola Magatama', en: 'Pearl Magatama' }, desc: { pt: 'Encontre a Pérola Magatama.' }, pct: 6.57, exp: 126, rar: 'muito-raro', img: 'j08g3e7g' },
      { ex: '1130874-megalo-miang-moonspell', tipo: 'bronze', nome: { pt: 'Megalo Miang Moonspell', en: 'Megalo Miang Moonspell' }, desc: { pt: 'Encontre a Pérola Magatama e obtenha Fluxo Argento com Miang Moonspell.' }, pct: 5.84, exp: 142, rar: 'muito-raro', img: '13e64jbb' },
      // ── Legacy of the Bloodmoon Part 1 (11) ──
      { ex: '1130875-malice-bloodmoon', tipo: 'bronze', nome: { pt: 'Malice Bloodmoon', en: 'Malice Bloodmoon' }, desc: { pt: 'Encontre e abra o caixão na Mansão Lua Vermelha.' }, pct: 7.67, exp: 108, rar: 'muito-raro', img: '35dgb433' },
      { ex: '1130876-scarlet-needle', tipo: 'bronze', nome: { pt: 'Agulha Vermelha', en: 'Scarlet Needle' }, desc: { pt: 'Sobreviva por 15 minutos com Malice Bloodmoon.' }, pct: 7.52, exp: 110, rar: 'muito-raro', img: '77631dj7' },
      { ex: '1130877-calogero-bloodmoon', tipo: 'bronze', nome: { pt: 'Calogero Bloodmoon', en: 'Calogero Bloodmoon' }, desc: { pt: 'Evolua a Agulha Vermelha.' }, pct: 7.26, exp: 114, rar: 'muito-raro', img: '551jdbe7' },
      { ex: '1130878-ashella', tipo: 'bronze', nome: { pt: 'Machela', en: 'Ashella' }, desc: { pt: 'Sobreviva 15 minutos com Calogero Bloodmoon.' }, pct: 6.81, exp: 121, rar: 'muito-raro', img: '006e517d' },
      { ex: '1130879-ashtart', tipo: 'bronze', nome: { pt: 'Ashtart', en: 'Ashtart' }, desc: { pt: 'Evolua a Machela.' }, pct: 6.96, exp: 119, rar: 'muito-raro', img: '8jb73410' },
      { ex: '1130880-incineration', tipo: 'bronze', nome: { pt: 'Incineração', en: 'Incineration' }, desc: { pt: 'Sobreviva 15 minutos com Ashtart.' }, pct: 6.5, exp: 127, rar: 'muito-raro', img: 'eej5b8d8' },
      { ex: '1130881-sargon', tipo: 'bronze', nome: { pt: 'Sargon', en: 'Sargon' }, desc: { pt: 'Evolua a Incineração.' }, pct: 6.53, exp: 127, rar: 'muito-raro', img: '40jdg654' },
      { ex: '1130882-firefall', tipo: 'bronze', nome: { pt: 'Chuva de Fogo', en: 'Firefall' }, desc: { pt: 'Sobreviva por 15 minutos com Sargon.' }, pct: 6.4, exp: 129, rar: 'muito-raro', img: '6de1jg0e' },
      { ex: '1130883-fireball', tipo: 'bronze', nome: { pt: 'Bola de Fogo', en: 'FireBall' }, desc: { pt: 'Eleve FireBall para o nível 6.' }, pct: 6.84, exp: 121, rar: 'muito-raro', img: 'b8b15370' },
      { ex: '1130884-firewall', tipo: 'bronze', nome: { pt: 'Parede de Fogo', en: 'FireWall' }, desc: { pt: 'Eleve FireWall para o nível 6.' }, pct: 6.86, exp: 120, rar: 'muito-raro', img: 'gj84d706' },
      { ex: '1130885-megalo-sargon', tipo: 'bronze', nome: { pt: 'Megalo Sargon', en: 'Megalo Sargon' }, desc: { pt: 'Encontre o Dodecaedro de Veludo e consiga a FireStall com Sargon.' }, pct: 5.7, exp: 145, rar: 'muito-raro', img: 'dgde68j6' },
      // ── Legacy of the Bloodmoon Part 2 (12) ──
      { ex: '1130886-nameless-fool', tipo: 'bronze', nome: { pt: 'Bobo Sem Nome', en: 'Nameless Fool' }, desc: { pt: 'Eleve Decadência ao nível 9.' }, pct: 7.71, exp: 107, rar: 'muito-raro', img: 'j08g31bg' },
      { ex: '1130887-congregation', tipo: 'bronze', nome: { pt: 'Congregação', en: 'Congregation' }, desc: { pt: 'Morra 7 vezes com o Bobo Sem Nome.' }, pct: 6.05, exp: 137, rar: 'muito-raro', img: '13e6415b' },
      { ex: '1130888-screams-from-the-void', tipo: 'bronze', nome: { pt: 'Gritos do Vazio', en: 'Screams from the Void' }, desc: { pt: 'Eleve Gritos do Vazio ao nível 7.' }, pct: 6.63, exp: 125, rar: 'muito-raro', img: '35dgb453' },
      { ex: '1130889-velvet-dodecahedron', tipo: 'bronze', nome: { pt: 'Dodecaedro de Veludo', en: 'Velvet Dodecahedron' }, desc: { pt: 'Evolua Gritos do Vazio.' }, pct: 6.35, exp: 130, rar: 'muito-raro', img: '77631d77' },
      { ex: '1130890-jaman-jato', tipo: 'bronze', nome: { pt: 'Jaman Jato', en: 'Jaman Jato' }, desc: { pt: 'Derrote 6.000 Jaman Jatos.' }, pct: 5.37, exp: 154, rar: 'muito-raro', img: '551jdb57' },
      { ex: '1130891-nameless-saint', tipo: 'bronze', nome: { pt: 'Santo Sem Nome', en: 'Nameless Saint' }, desc: { pt: 'Derrote Ashtart, Sargon, Congregação e Baal em uma partida.' }, pct: 5.51, exp: 150, rar: 'muito-raro', img: '006e510d' },
      { ex: '1130892-inkujata', tipo: 'bronze', nome: { pt: 'In\' Kujata', en: 'In\' Kujata' }, desc: { pt: 'Quebre a estátua de Kujata com 108 Bocha ou 108 Preces Responsivas.' }, pct: 6.33, exp: 131, rar: 'muito-raro', img: '8jb734j0' },
      { ex: '1130893-baalthasar', tipo: 'bronze', nome: { pt: 'Baal\'Thasar', en: 'Baal\'Thasar' }, desc: { pt: 'Derrote Baal\'Thasar na Mansão Lua Vermelha.' }, pct: 5.98, exp: 138, rar: 'muito-raro', img: 'eej5b8e8' },
      { ex: '1130894-blacken-firmament', tipo: 'bronze', nome: { pt: 'Firmamento Negro', en: 'Blacken Firmament' }, desc: { pt: 'Sobreviva por 15 minutos com Baal\'Thasar.' }, pct: 5.78, exp: 143, rar: 'muito-raro', img: '40jdg604' },
      { ex: '1130895-baalthamut', tipo: 'bronze', nome: { pt: 'Baal\'Thamut', en: 'Baal\'Thamut' }, desc: { pt: 'Encontre o Dodecaedro de Veludo e consiga a Danação com Baal\'Thasar.' }, pct: 5.52, exp: 150, rar: 'muito-raro', img: '6de1jgde' },
      { ex: '1130896-hyper-red-moon-manor', tipo: 'bronze', nome: { pt: 'Hiper Mansão Lua Vermelha', en: 'Hyper Red Moon Manor' }, desc: { pt: 'Derrote Batti Lei na Mansão Lua Vermelha.' }, pct: 7.74, exp: 107, rar: 'muito-raro', img: 'b8b15380' },
      { ex: '1130897-red-moon-manor-map', tipo: 'bronze', nome: { pt: 'Mapa da Mansão Lua Vermelha', en: 'Red Moon Manor Map' }, desc: { pt: 'Encontre o mapa da Mansão Lua Vermelha.' }, pct: 8.18, exp: 101, rar: 'muito-raro', img: 'gj84d7j6' }
  ],
  perdiveis: [],
  novidades: [                   // EXEMPLO real no formato do GTA VI
    { id: 'guia-criado', badge: 'novo', data: '2026-11-23', img: '',
      t: { pt: 'Guia do Vampire Survivors criado', en: 'Vampire Survivors guide created' },
      d: { pt: 'A base do guia está no ar: visão geral e a lista completa de 284 troféus. As demais abas serão preenchidas aos poucos.', en: 'The base of the guide is up: overview and the full list of 284 trophies. The other tabs will be filled in over time.' },
      legCapa: { pt: '', en: '' },
      corpo: [
        { h: { pt: 'O que já existe', en: 'What already exists' } },
        { ul: [ { pt: 'Visão geral do jogo.', en: 'Game overview.' }, { pt: 'Lista com os 284 troféus, na ordem do Exophase.', en: 'The 284-trophy list, in Exophase order.' } ] },
        { h: { pt: 'O que vem a seguir', en: 'What comes next' } },
        { p: { pt: 'As abas de jogabilidade, fases, armas e sistemas.', en: 'The gameplay, stages, weapons and systems tabs.' } }
      ] }
  ],
  trilha: [                      // EXEMPLO (formato do GTA VI): youtube = código do vídeo
    { por: 'Exemplo: artista', t: 'Exemplo: nome da faixa', youtube: '', onde: { pt: 'Exemplo: fase ou menu', en: 'Example: stage or menu' }, d: { pt: 'Descrição curta da faixa.', en: 'Short track description.' } }
  ],
  detalhes: [                    // EXEMPLO (formato do GTA VI): mural de imagens. Coloque o arquivo em imagens/ e escreva img: 'imagens/arquivo.jpg'
    { t: { pt: 'Exemplo: imagem do mural', en: 'Example: mural image' }, larg: 2, prop: '2 / 1', img: '', alt: { pt: 'Descrição da imagem', en: 'Image description' } }
  ],
  curiosidades: [                // EXEMPLO (formato do GTA VI)
    { t: { pt: 'Exemplo: título da curiosidade', en: 'Example: curiosity title' }, d: { pt: 'Texto curto da curiosidade.', en: 'Short curiosity text.' } }
  ],
  desenvolvedores: [             // EXEMPLO (formato do GTA VI)
    { nome: 'Exemplo: nome do estúdio ou pessoa', cargo: { pt: 'Função no jogo', en: 'Role in the game' }, neste: { pt: 'O que fez neste jogo.', en: 'What they did on this game.' } }
  ],
  // Ajustes de abas deste jogo (Vampire Survivors não tem vozes nem perdíveis; "Mapas" são Fases; "Equipamentos" são Armas e "Armaduras" são Passivas):
  ocultas: ['vozes', 'perdiveis'],   // abas que ficam escondidas do menu
  rotulos: { mapas: { pt: 'Fases', en: 'Stages' }, equipamentos: { pt: 'Armas', en: 'Weapons' }, armaduras: { pt: 'Passivas', en: 'Passives' } },   // troca só o NOME da aba; os dados continuam em mapas: [], equipamentos: [] e armaduras: []
  evolucoes: [ { h: { pt: 'Exemplo: como uma arma evolui', en: 'Example: how a weapon evolves' } }, { p: { pt: 'Escreva aqui a regra de evolução e liste as combinações com { ul }.', en: 'Write the evolution rule here and list the combinations with { ul }.' } } ],   // EXEMPLO
  recompensas: [ { h: { pt: 'Exemplo: tipos de recompensa', en: 'Example: reward types' } }, { p: { pt: 'Escreva aqui o que cada recompensa dá e onde conseguir.', en: 'Write here what each reward gives and where to get it.' } } ],   // EXEMPLO
  atributos: [ { h: { pt: 'Exemplo: atributos do personagem', en: 'Example: character stats' } }, { p: { pt: 'Escreva aqui o que cada atributo faz (vida, recuperação, área, velocidade...).', en: 'Write here what each stat does (health, recovery, area, speed...).' } } ],   // EXEMPLO
  dlcs: [ { h: { pt: 'Exemplo: DLCs e conteúdo adicional', en: 'Example: DLCs and additional content' } }, { p: { pt: 'Escreva aqui o que cada DLC traz: fases, personagens, armas e os troféus ligados a ela.', en: 'Write here what each DLC brings: stages, characters, weapons and the trophies tied to it.' } } ],   // EXEMPLO
  arcanas: [ { h: { pt: 'Exemplo: o que são as Arcanas', en: 'Example: what Arcanas are' } }, { p: { pt: 'Escreva aqui como funcionam as Arcanas.', en: 'Write here how Arcanas work.' } } ],   // EXEMPLO
  secoesExtra: ['evolucoes', 'recompensas', 'arcanas', 'atributos'],   // abas opcionais do bloco "Sistemas" ligadas neste jogo (cada uma vira uma lista de blocos: evolucoes: [], recompensas: [], arcanas: [])
  // Imagens das palavras-chave do texto ([[id|palavra]]). Troque img: '' por img: 'imagens/arquivo.jpg'.
  refs: {
    evolucao: { img: '', razao: '16 / 9', alt: { pt: 'Uma arma evoluída', en: 'An evolved weapon' },
      leg: { pt: 'Evolução: com a arma no nível máximo e o item passivo certo, o próximo baú a transforma na versão final.',
             en: 'Evolution: with the weapon at max level and the right passive item, the next chest turns it into its ultimate form.' } },
    reaper: { img: '', razao: '16 / 9', alt: { pt: 'O Ceifador', en: 'The Reaper' },
      leg: { pt: 'O Ceifador surge quando o tempo limite acaba, e outro aparece a cada minuto seguinte.',
             en: 'The Reaper shows up when the time limit ends, and another one appears every minute after that.' } }
  }
}
