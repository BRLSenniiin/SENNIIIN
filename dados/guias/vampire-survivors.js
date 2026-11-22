'use strict'

// ══════════════════════════════════════════════════════════════════════════
// GUIA DESTE ARQUIVO — conteúdo do jogo Vampire Survivors (base criada a partir do modelo novo-jogo.js)
// Seções com [] mostram "em preparo" no site, sem quebrar nada. Para preencher uma seção, copie o formato dela de
// dados/guias/abiotic-factor.js ou gta-vi.js (cada seção tem comentários explicando os campos).
// Troféus: ainda NÃO cadastrados de propósito — aguardando as páginas/listas que serão enviadas (formato em abiotic-factor.js, linha "Troféus").
// ══════════════════════════════════════════════════════════════════════════
JOGOS['vampire-survivors'] = {
  atualizado: '2026-11-22',
  img: '',                       // capa: 'imagens/vampire-survivors.jpg'. Vazio = capa colorida com a primeira letra
  abertura: [
    { pt: '<strong>Vampire Survivors</strong> tem uma lista de <strong>221 troféus</strong> no PS5/PS4, com platina. A lista base tem <strong>41 troféus</strong>; o restante está distribuído em seções ligadas às atualizações e aos DLCs do jogo.',
      en: '<strong>Vampire Survivors</strong> has a <strong>221-trophy</strong> list on PS5/PS4, including a platinum. The base list has <strong>41 trophies</strong>; the rest is spread across sections tied to the game\'s updates and DLC packs.' },
    { pt: 'Este guia está <strong>em preparo</strong>: os troféus, o roteiro e as demais seções serão preenchidos conforme o material chegar.',
      en: 'This guide is <strong>in progress</strong>: trophies, roadmap and the other sections will be filled in as material arrives.' }
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
  // Ajustes de abas deste jogo (Vampire Survivors não tem vozes nem armaduras; "Mapas" são Fases; "Equipamentos" são Habilidades):
  ocultas: ['vozes', 'armaduras'],   // abas que ficam escondidas do menu
  rotulos: { mapas: { pt: 'Fases', en: 'Stages' }, equipamentos: { pt: 'Habilidades', en: 'Abilities' } },   // troca só o NOME da aba; os dados continuam em mapas: [] e equipamentos: []
  refs: {}
}
