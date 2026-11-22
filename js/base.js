'use strict'

const tx = (k, ...a) => {
  const v = TXT[LANG][k] !== undefined ? TXT[LANG][k] : TXT.pt[k]
  return typeof v === 'function' ? v(...a) : v
}

/* ════════════════════════════════════════════
   ESTADO
   ════════════════════════════════════════════ */
const ESTADO = { favs: {}, fila: [], visto: '', lang: '' }
const UI = { nv: 'todas', vistoAnterior: '', q: '', plat: 'todas', dif: 'todas', ord: 'recente', cat: 'Todas', dq: '', escala: 5, dica: 0, limite: LIMITES.grade }
const PAINEIS = {}
const BOTOES = {}

function carregar() {
  try {
    const raw = localStorage.getItem(SITE.storageKey)
    if (!raw) return
    const d = JSON.parse(raw)
    ESTADO.favs = d.favs && typeof d.favs === 'object' ? d.favs : {}
    ESTADO.fila = Array.isArray(d.fila) ? d.fila : []
    ESTADO.visto = typeof d.visto === 'string' ? d.visto : ''
    ESTADO.lang = d.lang === 'en' || d.lang === 'pt' ? d.lang : ''
  } catch (e) { /* storage indisponível: segue sem salvar */ }
}
function salvar() {
  try { localStorage.setItem(SITE.storageKey, JSON.stringify(ESTADO)) } catch (e) {}
}

/* ════════════════════════════════════════════
   UTILITÁRIOS
   ════════════════════════════════════════════ */
const $ = id => document.getElementById(id)
const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
const esc = s => String(s).replace(/[&<>"']/g, c => ESC[c])
const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const casa = (texto, q) => { const t = norm(texto); return norm(q).split(/\s+/).filter(Boolean).every(p => t.includes(p)) }
const tier = d => d <= 3 ? 1 : d <= 6 ? 2 : 3
