'use strict'

// ══════════════════════════════════════════════════════════════════════════
// MODELO DE JOGO NOVO — copie este arquivo para dados/guias/<id>.js
// 1) Troque ID-DO-JOGO (na linha JOGOS[...]) pelo id do jogo, o MESMO usado em dados/jogos-lista.js (ex.: 'god-of-war').
// 2) Troque a data em "atualizado" e escreva a abertura (o texto do topo do guia).
// 3) Deixe as seções que ainda não tem como [] — elas mostram "em preparo" no site, sem quebrar nada.
// 4) Para preencher uma seção, copie o formato dela do guia do Abiotic Factor ou do GTA VI
//    (dados/guias/abiotic-factor.js e gta-vi.js, onde cada seção tem comentários explicando os campos).
// Receita completa dos 6 passos para publicar o jogo: no começo de dados/guias/_base.js.
// ══════════════════════════════════════════════════════════════════════════
JOGOS['ID-DO-JOGO'] = {
  atualizado: 'AAAA-MM-DD',
  img: '',                       // capa: 'imagens/arquivo.jpg'. Vazio = capa colorida com a primeira letra
  abertura: [                    // 1–2 parágrafos no topo do guia
    { pt: 'Escreva aqui o resumo da platina deste jogo.', en: 'Write the summary of this game\'s platinum here.' }
  ],
  visaoGeral: [],                // aba Visão geral (texto corrido com imagens)
  jogabilidade: [],
  roteiro: [],                   // aba "Guia" (passo a passo)
  mapas: [],
  bestiario: [],
  personagens: [],
  equipamentos: [],
  armaduras: [],
  trofeus: [],                   // a lista de troféus; formato nos comentários do guia do Abiotic Factor
  perdiveis: [],
  novidades: [],
  refs: {}
}
