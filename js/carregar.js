'use strict'

// ESTA É A LISTA DE ARQUIVOS DO SITE. Todas as páginas (index.html, gta-vi.html...) carregam só este arquivo,
// e ele carrega o resto, na ordem abaixo. A ORDEM IMPORTA: não troque os arquivos de lugar.
// Para colocar um JOGO NOVO no ar, acrescente uma linha com o arquivo dele logo depois do último 'dados/guias/...'.
const ARQUIVOS_DO_SITE = [
  'js/casca.js',
  'js/nucleo.js',
  'dados/site.js',
  'dados/jogos-lista.js',
  'dados/novidades.js',
  'dados/dicas.js',
  'dados/sobre.js',
  'dados/textos.js',
  'dados/guias/base-jogos.js',
  'dados/guias/abiotic-factor.js',
  'dados/guias/gta-vi.js',
  'dados/guias/vampire-survivors.js',
  'dados/guias/until-dawn.js',
  'dados/guias/ball-x-pit.js',
  'js/base.js',
  'js/paginas.js',
  'js/tela-do-jogo.js',
  'js/trofeus.js',
  'js/itens.js',
  'js/trilha-e-detalhes.js',
  'js/secoes-do-jogo.js',
  'js/busca.js',
  'js/eventos.js',
  'js/inicio.js'
]
ARQUIVOS_DO_SITE.forEach(f => document.write('<script src="' + f + '"><\/script>'))
