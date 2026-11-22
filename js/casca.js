'use strict'

// ══════════════════════════════════════════════════════════════════════════
// js/casca.js — a "moldura" fixa do site (menu do topo, painéis, rodapé, busca)
// ══════════════════════════════════════════════════════════════════════════
// O QUE É: o HTML que fica sempre igual em todas as páginas. Está aqui (e não em cada .html) para existir um só lugar.
// QUANDO MEXER: só para mudar a estrutura fixa (ex.: acrescentar um botão no menu ou uma faixa nova no Início).
// ATENÇÃO: os textos visíveis daqui vêm de dados/textos.js (atributo data-i18n="chave"). Para trocar uma FRASE da interface,
//          edite a chave dela em dados/textos.js (pt e en), não o texto escrito aqui dentro.
// NÃO USE crases (`) nem a sequência ${ dentro do HTML abaixo: isso quebraria o arquivo.
// ══════════════════════════════════════════════════════════════════════════

document.body.insertAdjacentHTML('afterbegin', `<header class="nav">
  <button class="brand" data-action="tab" data-tab="home" data-i18n-aria="aria_home" aria-label="Ir para o início">
    <svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#a42a44"/><path d="M9 8h14v4a7 7 0 0 1-5 6.7V22h3v2H11v-2h3v-3.3A7 7 0 0 1 9 12z" fill="#121110"/></svg>
    <span class="brand-name" id="brand-name"></span>
  </button>
  <nav class="tabs" id="tabs" role="tablist" data-i18n-aria="aria_tabs" aria-label="Seções do site"></nav>
  <div class="lang" role="group" data-i18n-aria="aria_lang" aria-label="Idioma">
    <button class="lang-btn" data-action="lang" data-v="pt" aria-pressed="true">BR</button>
    <button class="lang-btn" data-action="lang" data-v="en" aria-pressed="false">EN</button>
  </div>
</header>

<main>
  <noscript><p class="noscript">Ative o JavaScript para ver os guias. / Enable JavaScript to see the guides.</p></noscript>

  <!-- ══ INÍCIO ══ -->
  <div class="panel active" id="panel-home">
    <div class="wrap">
      <section class="news" data-i18n-aria="nv_aria" aria-label="Novidades">
        <div class="news-head">
          <h2 class="news-title"><span class="pulse" aria-hidden="true"></span><span data-i18n="nv_titulo">Novidades</span> <span class="mono" data-i18n="nv_sub">atualizado recentemente</span></h2>
          <div class="chips" id="nv-filtros"></div>
        </div>
        <div class="nv-lista" id="nv-lista"></div>
      </section>

      <section class="hero">
        <div id="hero-ficha"></div>
      </section>

      <section class="band" id="home-stats" data-i18n-aria="band_aria" aria-label="Números do site"></section>

      <section class="sec">
        <div class="sec-head">
          <div><p class="kicker" data-i18n="s_ult_k">últimos guias</p><h2 class="h2" data-i18n="s_ult_h">Direto pro roteiro</h2></div>
          <button class="link" data-action="tab" data-tab="guias" data-i18n="s_ver">Ver todos →</button>
        </div>
        <div class="grid" id="home-guias"></div>
      </section>

      <section class="sec split">
        <div class="dica-dia" id="dica-dia"></div>
        <div>
          <p class="kicker" data-i18n="s_rec_k">em todo guia</p>
          <h2 class="h2" style="margin-bottom:1.2rem" data-i18n="s_rec_h">O que você encontra</h2>
          <div class="recursos" id="home-recursos"></div>
        </div>
      </section>
    </div>
  </div>

  <!-- ══ GUIAS ══ -->
  <div class="panel" id="panel-guias">
    <div class="wrap">
      <section class="ultimos" aria-labelledby="ult-titulo">
        <div class="sec-head">
          <div><p class="kicker" data-i18n="gu_k">recém-publicados</p><h2 class="h2" id="ult-titulo" data-i18n="gu_h">Últimos guias</h2></div>
          <div class="rail-ctl" id="ult-ctl" hidden>
            <button class="rail-btn" type="button" data-action="rail" data-dir="-1" data-i18n-aria="gu_prev" aria-label="Guias anteriores">←</button>
            <button class="rail-btn" type="button" data-action="rail" data-dir="1" data-i18n-aria="gu_next" aria-label="Próximos guias">→</button>
          </div>
        </div>
        <div class="rail" id="g-ultimos" role="region" tabindex="0" data-i18n-aria="gu_aria" aria-label="Últimos guias, role para o lado"></div>
      </section>

      <div class="sec-head">
        <div><p class="kicker" data-i18n="g_k">biblioteca</p><h2 class="h2" data-i18n="g_h">Todos os guias</h2></div>
        <p class="count mono" id="g-count"></p>
      </div>
      <p class="aviso" id="g-aviso"></p>
      <div class="toolbar">
        <label class="field grow"><span class="sr" data-i18n="g_busca_sr">Buscar guias</span><input id="g-q" type="search" data-i18n-ph="g_ph" placeholder="Filtrar por jogo, tag ou palavra" autocomplete="off"></label>
        <div class="chips" id="g-plats"></div>
        <label class="field"><span class="sr" data-i18n="g_dif_sr">Dificuldade</span>
          <select id="g-dif">
            <option value="todas" data-i18n="o_dif_todas">Qualquer dificuldade</option>
            <option value="facil" data-i18n="o_dif_facil">Fácil (1–3)</option>
            <option value="media" data-i18n="o_dif_media">Média (4–6)</option>
            <option value="dificil" data-i18n="o_dif_dificil">Difícil (7–10)</option>
          </select>
        </label>
        <label class="field"><span class="sr" data-i18n="g_ord_sr">Ordenar</span>
          <select id="g-ord">
            <option value="recente" data-i18n="o_ord_recente">Mais recentes</option>
            <option value="facil" data-i18n="o_ord_facil">Mais fáceis primeiro</option>
            <option value="curto" data-i18n="o_ord_curto">Mais curtos primeiro</option>
          </select>
        </label>
      </div>
      <div class="grid" id="g-grid"></div>
      <div class="mais" id="g-mais"></div>
      <div id="g-dicas"></div>
    </div>
  </div>

  <!-- ══ DICAS ══ -->
  <div class="panel" id="panel-dicas">
    <div class="wrap">
      <aside class="dicas-nota">
        <div>
          <p class="mono dicas-nota-k" data-i18n="dn_k">leitura rápida</p>
          <p class="dicas-nota-t" data-i18n="dn_t">Esta aba reúne as dicas mais recentes, para ler de relance. Quer tudo sobre um jogo específico? Abra o guia dele: cada guia traz as páginas e as dicas daquele jogo, em um só lugar.</p>
        </div>
        <button class="btn ghost" type="button" data-action="tab" data-tab="guias" data-i18n="dn_btn">Abrir os guias →</button>
      </aside>

      <section class="rapidas" aria-labelledby="rp-titulo">
        <div class="sec-head">
          <div><p class="kicker" data-i18n="rp_k">em poucos segundos</p><h2 class="h2" id="rp-titulo" data-i18n="rp_h">Dicas rápidas</h2></div>
        </div>
        <div class="rp" id="d-rapidas" role="region" aria-roledescription="carousel" data-i18n-aria="rp_aria" aria-label="Dicas rápidas, passam sozinhas"></div>
      </section>

      <div class="sec-head">
        <div><p class="kicker" data-i18n="d_k">bloco de notas</p><h2 class="h2" data-i18n="d_h">Dicas de caçador</h2></div>
        <div class="sec-head-r">
          <p class="count mono" id="d-count"></p>
          <div class="rail-ctl" id="d-ctl" hidden>
            <button class="rail-btn" type="button" data-action="rail" data-alvo="d-grid" data-dir="-1" data-i18n-aria="rp_prev" aria-label="Dica anterior">←</button>
            <button class="rail-btn" type="button" data-action="rail" data-alvo="d-grid" data-dir="1" data-i18n-aria="rp_next" aria-label="Próxima dica">→</button>
          </div>
        </div>
      </div>
      <div class="toolbar">
        <label class="field grow"><span class="sr" data-i18n="d_busca_sr">Buscar dicas</span><input id="d-q" type="search" data-i18n-ph="d_ph" placeholder="Buscar nas dicas" autocomplete="off"></label>
      </div>
      <div class="chips" id="d-cats" style="margin-bottom:1.4rem"></div>
      <div class="tips" id="d-grid" role="region" tabindex="0" data-i18n-aria="dr_aria" aria-label="Dicas mais recentes, role para o lado"></div>
    </div>
  </div>

  <!-- ══ MINHA FILA ══ -->
  <div class="panel" id="panel-fila">
    <div class="wrap">
      <div class="sec-head">
        <div><p class="kicker" data-i18n="f_k">só seu</p><h2 class="h2" data-i18n="f_h">Sua fila de platinas</h2></div>
      </div>
      <p class="lead" data-i18n="f_lead">Monte sua lista de jogos e acompanhe o que já virou platina. Fica salva neste navegador — sem cadastro.</p>
      <form class="form" id="fila-form">
        <input type="text" name="nome" maxlength="60" data-i18n-ph="f_ph" data-i18n-aria="f_ph" placeholder="Nome do jogo" aria-label="Nome do jogo" autocomplete="off" required>
        <select name="status" data-i18n-aria="f_status" aria-label="Status"></select>
        <button class="btn" type="submit" data-i18n="f_add">Adicionar</button>
      </form>
      <div class="progresso">
        <span class="mono" id="fila-resumo"></span>
        <div class="bar"><i id="fila-bar"></i></div>
      </div>
      <ul class="fila" id="fila-lista"></ul>
    </div>
  </div>

  <!-- ══ SOBRE ══ -->
  <div class="panel" id="panel-sobre">
    <div class="wrap">
      <p class="kicker" data-i18n="s_k">sobre</p>
      <h2 class="h2" style="margin-bottom:1.4rem" data-i18n="s_h">Quem faz e por quê</h2>
      <div class="split">
        <div class="sobre" id="s-texto"></div>
        <div>
          <p class="mono" style="margin-bottom:.8rem" data-i18n="s_contatos">contatos e apoio</p>
          <ul class="links" id="s-links"></ul>
        </div>
      </div>
      <section class="sec">
        <h2 class="h2" style="margin-bottom:1rem" data-i18n="s_faq">Perguntas rápidas</h2>
        <div id="s-faq"></div>
      </section>
    </div>
  </div>

  <!-- ══ TELA DO JOGO (aberta pelo card em Guias; não é uma aba do topo) ══ -->
  <div class="panel" id="panel-jogo">
    <div class="wrap" id="jogo-conteudo"></div>
  </div>
</main>

<footer class="foot">
  <span class="mono" id="foot-a"></span>
  <span class="mono" data-i18n="foot_r">HTML puro · sem cadastro · sem anúncios</span>
</footer>

<!-- Busca universal: botão flutuante fixo em todas as telas + painel de busca de jogos -->
<button class="bu-fab" id="bu-fab" type="button" aria-haspopup="dialog" aria-controls="busca" data-i18n-aria="bu_aria" aria-label="Buscar jogo no site">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/></svg>
</button>
<div class="bu" id="busca" role="dialog" aria-modal="true" aria-labelledby="bu-t">
  <div class="bu-fundo" id="bu-fundo"></div>
  <div class="bu-caixa">
    <h2 class="sr" id="bu-t" data-i18n="bu_fab">Buscar jogo</h2>
    <div class="bu-form">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/></svg>
      <input id="bu-q" type="search" role="combobox" aria-expanded="true" aria-controls="bu-lista" aria-autocomplete="list" data-i18n-ph="bu_ph" data-i18n-aria="bu_aria" placeholder="Digite o nome do jogo" aria-label="Buscar jogo no site" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search">
      <button class="bu-x" id="bu-x" type="button" data-i18n-aria="bu_fechar" aria-label="Fechar busca"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
    </div>
    <p class="mono bu-cont" id="bu-cont" aria-live="polite"></p>
    <div class="bu-lista" id="bu-lista" role="listbox"></div>
    <p class="mono bu-dica" data-i18n="bu_dica">Enter abre · Esc fecha · ↑ ↓ navegam</p>
  </div>
</div>`)
