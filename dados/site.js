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

// ── IMAGENS DA IDENTIDADE DO SITE (Wallpaper, Logo e Icon) ─────────────────────────────────────────────
// Coloque os três arquivos na pasta Images/ (na raiz do site, ao lado de index.html), com ESTES nomes, em .webp:
//   Images/Wallpaper.webp ... fundo do site inteiro (fica fixo atrás do conteúdo, com uma película escura para o texto continuar legível)
//   Images/LOGO.webp ........ marca no canto esquerdo do menu do topo (troca o desenho do troféu e o texto SENNIIIN, pois a logo já traz o nome)
//   Images/Icon.webp ........ ícone da aba do navegador (favicon)
// Maiúsculas e minúsculas importam no GitHub Pages: escreva exatamente Wallpaper.webp, Logo.webp, Icon.webp (e a pasta Images).
// Enquanto um arquivo NÃO existir, o site continua com o visual de hoje para aquele item; não precisa mexer em mais nada.
// Para outro nome ou pasta, mude só o texto entre aspas. Para desligar um item, deixe '' (vazio).
// Quanto a película escura do Wallpaper escurece: veja --wallpaper-pelicula em css/site.css (0 = nada, 1 = preto).
const IMAGENS_SITE = {
  wallpaper: 'Images/Wallpaper.webp',
  logo: 'Images/LOGO.webp',
  icon: 'Images/Icon.webp'
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
const LIMITES = { ultimos: 8, grade: 10, linhasMin: 2, homeJogos: 5, blocos: 4, rapidas: 6, rapidasSeg: 7, dicas: 7, novidades: 20, novidadesTudo: 4, buscaUltimos: 5 }
// dicas = quantas dicas (as mais recentes) aparecem na faixa "Dicas de caçador" quando não há busca nem categoria escolhida.
// rapidas = máximo de dicas rápidas no topo da aba Dicas; rapidasSeg = segundos que cada uma fica na tela antes de passar sozinha.
// novidades = quantas novidades (as mais recentes) a faixa "Novidades" do topo do Início mostra nos filtros Guias, Dicas e Site.
// novidadesTudo = quantas aparecem no filtro "Tudo" (só as mais recentes, para a faixa não ficar enorme).
// buscaUltimos = quantos guias o painel de busca flutuante lista antes de você digitar ("Últimos guias"); ao digitar, a busca olha todos os guias.
// homeJogos = quantos jogos aparecem na seção "jogo a jogo" do Início (os últimos atualizados, pela data de JOGOS[id].atualizado); blocos = máximo de blocos por jogo (o guia + as dicas mais recentes dele).
