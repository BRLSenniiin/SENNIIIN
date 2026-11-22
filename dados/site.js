'use strict'

// ══════════════════════════════════════════════════════════════════════════
// dados/site.js — identidade e configurações gerais do site
// ══════════════════════════════════════════════════════════════════════════
// QUANDO MEXER: para trocar o nome do site, o carimbo das capas, o e-mail de contato, os nomes das abas do topo ou os limites de exibição.
// COMO: mude só o que está entre aspas. Textos no formato { pt: '...', en: '...' } têm uma versão em português e outra em inglês: mude as duas.
//
// SITE.nome ........ nome do site (menu, rodapé).
// SITE.selo ........ carimbo que aparece nas capas.
// SITE.email ....... e-mail de contato; se preencher, aparece como link "E-mail" nos contatos da aba Sobre. Vazio = não aparece.
// SITE.storageKey .. NÃO MUDE: é o nome da "gaveta" do navegador onde ficam a fila e as dicas salvas. Mudar apaga o que os visitantes já salvaram.
// ABAS ............. as abas do topo. Mude só o texto de "rot"; NÃO mude o "id" (o código usa ele).
// LIMITES .......... quantos itens aparecem em cada lugar (explicado nas linhas de comentário abaixo dele).
// ══════════════════════════════════════════════════════════════════════════

/* ════════════════════════════════════════════
   DADOS — edite aqui, o resto do código só lê
   ════════════════════════════════════════════ */
const SITE = {
  nome: { pt: 'SENNIIIN', en: 'SENNIIIN' },   // nome do site (menu, rodapé, título das páginas)
  selo: { pt: 'feito jogando', en: 'play-tested' },            // carimbo nas capas
  storageKey: 'diario-platina-v1',
  email: ''                                                    // TODO: preencher e-mail de contato
}

const ABAS = [
  { id: 'home',   rot: { pt: 'Início',     en: 'Home' } },
  { id: 'guias',  rot: { pt: 'Guias',      en: 'Guides' } },
  { id: 'dicas',  rot: { pt: 'Dicas',      en: 'Tips' } },
  { id: 'fila',   rot: { pt: 'Minha fila', en: 'My list' } },
  { id: 'sobre',  rot: { pt: 'Sobre',      en: 'About' } }
]

// Limites de exibição na aba Guias: quantos entram na faixa "Últimos guias" e quantos aparecem
// por vez na lista (o botão "Mostrar mais" libera o próximo lote).
// linhasMin = linhas mínimas do tabuleiro em "Todos os guias" (as casas que sobram aparecem vazias).
const LIMITES = { ultimos: 8, grade: 10, linhasMin: 2, homeJogos: 5, blocos: 4, rapidas: 6, rapidasSeg: 7, dicas: 7, novidades: 20 }
// dicas = quantas dicas (as mais recentes) aparecem na faixa "Dicas de caçador" quando não há busca nem categoria escolhida.
// rapidas = máximo de dicas rápidas no topo da aba Dicas; rapidasSeg = segundos que cada uma fica na tela antes de passar sozinha.
// novidades = quantas novidades (as mais recentes) a faixa "Novidades" do topo do Início mostra.
// homeJogos = quantos jogos aparecem na seção "jogo a jogo" do Início (os últimos atualizados, pela data de JOGOS[id].atualizado); blocos = máximo de blocos por jogo (o guia + as dicas mais recentes dele).
