'use strict'

// ══════════════════════════════════════════════════════════════════════════
// MODELO DE JOGO NOVO — copie este arquivo para dados/guias/<id>.js
// 1) Troque ID-DO-JOGO (na linha JOGOS[...]) pelo id do jogo, o MESMO usado em dados/jogos-lista.js (ex.: 'god-of-war').
// 2) Troque a data em "atualizado" e escreva a abertura (o texto do topo do guia).
// 3) Toda aba já traz 1 item de exemplo (mesmo formato nos três guias): troque o texto e copie o bloco para ter mais. Aba sem nada fica [] e mostra "em preparo".
// 4) Para preencher uma seção, copie o formato dela do guia do Abiotic Factor ou do GTA VI
//    (dados/guias/abiotic-factor.js e gta-vi.js, onde cada seção tem comentários explicando os campos).
// Receita completa dos 6 passos para publicar o jogo: no começo de dados/guias/base-jogos.js.
// ══════════════════════════════════════════════════════════════════════════
JOGOS['ID-DO-JOGO'] = {
  atualizado: 'AAAA-MM-DD',
  img: '',                       // capa: 'imagens/arquivo.jpg'. Vazio = capa colorida com a primeira letra
  abertura: [                    // 1–2 parágrafos no topo do guia
    { pt: 'Escreva aqui o resumo da platina deste jogo.', en: 'Write the summary of this game\'s platinum here.' }
  ],
  visaoGeral: [],                // aba Visão geral (texto corrido com imagens)
  // Cada aba abaixo já traz UM item de exemplo, no formato do GTA VI / Abiotic Factor. Troque o texto "Exemplo..." pelo real
  // e copie o bloco para acrescentar mais. Aba que o jogo não tem: deixe [] (mostra "em preparo") ou esconda em ocultas: [ ... ].
  jogabilidade: [
    { h: { pt: 'Exemplo: título', en: 'Example: title' } },
    { p: { pt: 'Escreva aqui um parágrafo. Use <strong>negrito</strong> para destacar.', en: 'Write a paragraph here. Use <strong>bold</strong> to highlight.' } },
    { ul: [ { pt: 'Item de lista de exemplo.', en: 'Example list item.' } ] }
  ],
  roteiro: [                     // aba "Guia" (passo a passo); status 'base' = rascunho
    { id: 'roteiro-exemplo', setor: 'Exemplo', status: 'base', img: '',
      t: { pt: 'Exemplo: primeira parte do roteiro', en: 'Example: first part of the walkthrough' },
      d: { pt: 'Resumo curto desta parte.', en: 'Short summary of this part.' },
      legCapa: { pt: 'Legenda da imagem de capa.', en: 'Cover image caption.' },
      corpo: [ { h: { pt: 'Título do passo', en: 'Step title' } }, { p: { pt: 'Descreva o passo aqui.', en: 'Describe the step here.' } } ] }
  ],
  mapas: [                       // t = nome, d = descrição, href = link do mapa
    { t: { pt: 'Exemplo: nome do mapa', en: 'Example: map name' }, d: { pt: 'Descrição curta.', en: 'Short description.' }, href: '#jogo/ID-DO-JOGO/mapas' }
  ],
  bestiario: [                   // tipo = criatura | humano | robo
    { id: 'inimigo-exemplo', tipo: 'criatura', nome: 'Exemplo: inimigo', img: '',
      resumo: { pt: 'Resumo do inimigo.', en: 'Enemy summary.' }, locais: ['Exemplo: local'],
      stats: [ { rot: { pt: 'Vida', en: 'Health' }, v: { pt: 'a preencher', en: 'to fill in' } } ] }
  ],
  personagens: [
    { id: 'personagem-exemplo', nome: 'Exemplo: personagem', funcao: { pt: 'Função', en: 'Role' }, img: '',
      resumo: { pt: 'Resumo curto.', en: 'Short summary.' }, tags: [ { pt: 'Exemplo', en: 'Example' } ],
      descricao: { pt: 'Descrição do personagem.', en: 'Character description.' },
      jogo: [ { rot: { pt: 'Papel', en: 'Role' }, v: { pt: 'a preencher', en: 'to fill in' } } ] }
  ],
  equipamentos: [                // cat = categoria (corpo a corpo: melee, distância: ranged...; outro texto vira o título do grupo)
    { cat: 'ranged', nome: 'Exemplo: equipamento' }
  ],
  armaduras: [                   // slot = onde se veste (head, chest, arms...; outro texto vira o título do grupo)
    { slot: 'head', nome: 'Exemplo: armadura' }
  ],
  trofeus: [],                   // a lista de troféus; formato nos comentários do guia do Abiotic Factor
  perdiveis: [],
  novidades: [
    { id: 'guia-criado', badge: 'novo', data: 'AAAA-MM-DD', img: '',
      t: { pt: 'Guia criado', en: 'Guide created' }, d: { pt: 'Resumo da novidade.', en: 'News summary.' }, legCapa: { pt: '', en: '' },
      corpo: [ { h: { pt: 'O que já existe', en: 'What already exists' } }, { p: { pt: 'Texto da novidade.', en: 'News text.' } } ] }
  ],
  trilha: [                      // youtube = código do vídeo
    { por: 'Exemplo: artista', t: 'Exemplo: faixa', youtube: '', onde: { pt: 'Exemplo: onde toca', en: 'Example: where it plays' }, d: { pt: 'Descrição curta.', en: 'Short description.' } }
  ],
  detalhes: [                    // mural de imagens: img: 'imagens/arquivo.jpg'
    { t: { pt: 'Exemplo: imagem', en: 'Example: image' }, larg: 2, prop: '2 / 1', img: '', alt: { pt: 'Descrição da imagem', en: 'Image description' } }
  ],
  curiosidades: [
    { t: { pt: 'Exemplo: curiosidade', en: 'Example: curiosity' }, d: { pt: 'Texto curto.', en: 'Short text.' } }
  ],
  desenvolvedores: [
    { nome: 'Exemplo: estúdio ou pessoa', cargo: { pt: 'Função', en: 'Role' }, neste: { pt: 'O que fez neste jogo.', en: 'What they did on this game.' } }
  ],
  refs: {}
}
