'use strict'

// ══════════════════════════════════════════════════════════════════════════
// js/nucleo.js — ferramentas de idioma
// ══════════════════════════════════════════════════════════════════════════
// O QUE É: define LANG (idioma atual) e a função L(), que escolhe o texto certo: L({ pt: 'Oi', en: 'Hi' }) devolve o do idioma atual.
// QUANDO MEXER: quase nunca. É a base do sistema { pt, en } usado em todos os dados.
// ══════════════════════════════════════════════════════════════════════════

/* ════════════════════════════════════════════════════════════
   IDIOMAS — textos traduzíveis nos dados são { pt: '…', en: '…' }.
   Textos simples (string) valem para os dois idiomas.
   ════════════════════════════════════════════════════════════ */
let LANG = 'pt'
const isL = v => v && typeof v === 'object' && !Array.isArray(v)
const L = v => isL(v) ? (v[LANG] !== undefined ? v[LANG] : v.pt) : v          // texto no idioma atual
const allL = v => isL(v) ? Object.values(v).flat().join(' ') : Array.isArray(v) ? v.join(' ') : String(v) // todos os idiomas (busca)
const loc = () => LANG === 'en' ? 'en-US' : 'pt-BR'
