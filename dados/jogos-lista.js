'use strict'

// ══════════════════════════════════════════════════════════════════════════
// dados/jogos-lista.js — a LISTA DE JOGOS (cards da home, da aba Guias e da busca)
// ══════════════════════════════════════════════════════════════════════════
// O QUE É: um bloco { ... } por jogo, com os números da ficha rápida. O CONTEÚDO do guia (texto, troféus, imagens) fica em dados/guias/<id>.js.
// QUANDO MEXER: ao publicar um jogo novo, ou para mudar o resumo, as tags, a dificuldade ou as horas de um jogo.
//
// CAMPOS (copie um bloco existente e troque os valores):
//   id ............... nome curto, minúsculo, sem espaço ou acento (ex.: 'gta-vi'). DEVE ser igual ao do arquivo dados/guias/<id>.js,
//                      ao nome da página <id>.html e ao final do href. Depois de publicado, evite mudar (os links dos visitantes quebram).
//   jogo ............. nome que aparece no card e no título da página.
//   subtitulo ........ linha pequena abaixo do nome (gênero · lugar). Pode ser texto simples ou { pt, en }.
//   plataformas ...... lista, ex.: ['PS5'].
//   href ............. sempre '#jogo/<id>'.
//   hue .............. cor do jogo, número de 0 a 360 (0 vermelho, 120 verde, 240 azul...).
//   platina .......... true se o jogo tem platina.
//   trofeus .......... número total de troféus do jogo (só o número; a lista fica em dados/guias/<id>.js).
//   dif .............. dificuldade de 1 a 10 (a escala está em dados/sobre.js, ESCALA).
//   horasMin/horasMax  tempo estimado até a platina, em horas.
//   playthroughs ..... quantas jogatinas a platina exige.
//   perdiveis ........ quantos troféus perdíveis o jogo tem (só o número).
//   colecionaveis .... quantidade de colecionáveis, ou null se não se aplica.
//   raridade ......... % de jogadores que platinaram, ou null se ainda não souber.
//   progresso ........ % do guia pronto (veja a observação no próprio campo do Abiotic Factor). Abaixo de 100 mostra "Em progresso".
//   tags ............. etiquetas curtas do card: { pt: [...], en: [...] }.
//   resumo ........... 1–2 frases sobre a platina: { pt: '...', en: '...' }.
//   img (opcional) ... capa vertical, ex.: 'imagens/gta-vi.jpg' (coloque o arquivo na pasta imagens/). Sem img, vale a capa colorida (hue).
//
// REGRAS DE SINTAXE: um bloco termina com } e o próximo é separado por vírgula. Aspas simples dentro de texto: escreva \' (barra + aspas).
// ══════════════════════════════════════════════════════════════════════════

// Um objeto por guia publicado. hue = cor da capa (0–360).
// img (opcional): capa vertical do jogo na faixa "Últimos guias", ex.: img: 'imagens/jogo.jpg'. Sem img, aparece a capa colorida.
const GUIAS = [
  {
    id: 'abiotic-factor', jogo: 'Abiotic Factor', subtitulo: 'Survival crafting · Gate Cascade',
    plataformas: ['PS5', 'Xbox Series X|S', 'PC'], href: '#jogo/abiotic-factor', hue: 150,
    platina: true, trofeus: 54, dif: 5, horasMin: 60, horasMax: 100, playthroughs: 1,
    perdiveis: 7, colecionaveis: null, raridade: 7.44,
    progresso: 15,   // % do guia, escrito à mão. SÓ vale para jogo sem o bloco 'descoberto' (em JOGOS); com ele, a porcentagem é a média das abas. Abaixo de 100 mostra "Em progresso"; apague a linha (ou use 100) quando o guia estiver completo.
    tags: {
      pt: ['Survival crafting', 'Co-op 1–6', 'Perdíveis', 'Grind leve', 'RNG na pesca'],
      en: ['Survival crafting', 'Co-op 1–6', 'Missables', 'Light grind', 'Fishing RNG']
    },
    resumo: {
      pt: 'Platina de volume e paciência, não de habilidade: 54 troféus em uma jogatina, com sete perdíveis para vigiar — Net Launcher, uniformes e a quest da Kylie à frente.',
      en: 'A platinum of volume and patience, not skill: 54 trophies in a single playthrough, with seven missables to watch — the Net Launcher, uniforms and Kylie\'s quest ahead.'
    }
  },
  // Dificuldade 4/10, ~200 h, 55 troféus (1 platina, 2 ouros, 6 pratas, 46 bronzes), todos offline e 1 perdível: guia de troféus do PowerPyx.
  // horasMin/horasMax somam as três fases do roteiro dele (60–80 h + ~100 h + ~10 h) até o "cerca de 200 h". Raridade ainda não preenchida.
  {
    id: 'gta-vi',
    jogo: 'Grand Theft Auto VI',
    subtitulo: { pt: 'Mundo aberto · Leonida', en: 'Open world · Leonida' },
    plataformas: ['PS5', 'Xbox Series X|S'],
    href: '#jogo/gta-vi',
    hue: 330,
    platina: true,
    trofeus: 55,
    dif: 4,
    horasMin: 170,
    horasMax: 200,
    playthroughs: 1,
    perdiveis: 1,
    colecionaveis: null,
    raridade: null,
    tags: { pt: ['Mundo aberto', 'Todos offline', 'Platina longa', '1 perdível'], en: ['Open world', 'All offline', 'Long platinum', '1 missable'] },
    resumo: { pt: 'Platina de dificuldade baixa e muito tempo: 55 troféus, todos offline, em uma única jogatina, com cerca de 200 horas até o 100% e um troféu possivelmente perdível, a meditação do Capítulo 1.', en: 'A low-difficulty platinum that takes a lot of time: 55 trophies, all offline, in a single playthrough, with about 200 hours to 100% and one possibly missable trophy, the Chapter 1 meditation.' }
  },
  // Vampire Survivors: 284 troféus (com platina) no PS5, 41 na lista base (Exophase, nov/2026).
  // PROVISÓRIO (conferir quando chegarem as páginas): dif, horasMin/horasMax, playthroughs, perdiveis e raridade ainda não têm fonte confirmada.
  {
    id: 'vampire-survivors',
    jogo: 'Vampire Survivors',
    subtitulo: { pt: 'Roguelite · Sobrevivência', en: 'Roguelite · Survival' },
    plataformas: ['PS5', 'Xbox Series X|S', 'Switch', 'PC', 'Android', 'iOS', 'Meta Quest'],
    href: '#jogo/vampire-survivors',
    hue: 280,
    platina: true,
    trofeus: 284,
    dif: 6,
    horasMin: 80,
    horasMax: 200,
    playthroughs: { pt: 'Fases repetitivas', en: 'Repetitive stages' },   // texto no lugar do número de jogatinas
    perdiveis: 0,
    colecionaveis: null,
    raridade: null,
    progresso: 5,
    tags: { pt: ['Roguelite', 'Lista enorme', 'Em preparo'], en: ['Roguelite', 'Huge list', 'In progress'] },
    resumo: { pt: 'Platina de lista enorme: 284 troféus no PS5/PS4, 41 deles na lista base. Guia em preparo, com troféus e roteiro a caminho.', en: 'A platinum with a huge list: 284 trophies on PS5/PS4, 41 of them in the base list. Guide in progress, with trophies and roadmap on the way.' }
  }
  // TODO: adicionar novos guias aqui conforme forem concluídos (sempre com pt e en)
]
