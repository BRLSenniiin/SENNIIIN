'use strict'

// ══════════════════════════════════════════════════════════════════════════
// COMO COLOCAR UM JOGO NOVO NO SITE (receita completa)
// ══════════════════════════════════════════════════════════════════════════
// 1) Crie dados/guias/<id>.js copiando modelos/novo-jogo.js (já tem todas as seções vazias). Troque ID-DO-JOGO pelo id.
// 2) Em dados/jogos-lista.js, copie um bloco de jogo e troque os dados. O id tem de ser o MESMO do arquivo.
// 3) Em js/carregar.js, acrescente 'dados/guias/<id>.js' na lista, logo depois do último arquivo de dados/guias.
// 4) Crie a página <id>.html copiando modelos/pagina-de-jogo.html (3 trocas explicadas lá dentro). É ela que dá ao jogo um endereço próprio.
// 5) Acrescente o endereço dele em sitemap.xml (copie uma linha <url>).
// 6) Abra no navegador e confira. Seção vazia ([]) mostra "em preparo", sem quebrar nada.
// Leia o LEIA-ME.txt (na pasta principal) para o mapa completo de arquivos.
// ══════════════════════════════════════════════════════════════════════════

/* ════════════════════════════════════════════════════════════
   TELA DO JOGO — abre quando o card do guia é clicado (endereço #jogo/<id>).
   Os números do topo vêm do GUIAS acima; aqui ficam só os conteúdos de cada
   seção. Lista vazia ([]) = a seção mostra "em preparo", sem quebrar nada.
   ════════════════════════════════════════════════════════════ */
const JOGOS = {}
