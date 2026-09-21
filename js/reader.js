/**
 * Gabriel Marcel Reader — Text Rendering & Layout Engine
 */
let currentMode = "split";

function escapeHtmlSafe(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function applyHighlightToHtml(html, searchText, hlId, noteText) {
  if (!searchText) return html;
  const safeText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const termRegex = new RegExp(safeText, 'i');
  
  const parts = html.split(/(<[^>]+>)/g);
  let replaced = false;
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i].startsWith('<') && !replaced) {
      if (termRegex.test(parts[i])) {
        const noteBadge = noteText ? `<span class="note-indicator" title="${escapeHtmlSafe(noteText)}">📝</span>` : '';
        parts[i] = parts[i].replace(termRegex, `<mark class="user-hl" data-hl-id="${hlId}">$&${noteBadge}</mark>`);
        replaced = true;
      }
    }
  }
  return parts.join('');
}

function renderBlocks(work) {
  const colFr = document.getElementById("blocks-fr");
  const colEn = document.getElementById("blocks-en");
  if (!colFr || !colEn) return;

  if (!work || !work.paragraphs || work.paragraphs.length === 0) {
    const notice = `
      <div style="padding:3.5rem 1.5rem; background:var(--bg-surface); border:1px solid var(--border-color); border-radius:8px; text-align:center; max-width:650px; margin:2rem auto; font-family:var(--font-sans);">
        <div style="font-size:2rem; margin-bottom:0.5rem;">📖</div>
        <h4 style="font-size:1.15rem; color:var(--accent); margin-bottom:0.75rem;">Text Scheduled for Ingestion</h4>
        <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.6; margin-bottom:1.25rem;">
          <strong>${escapeHtmlSafe(work ? (work.titleEn || work.titleFr) : "This work")}</strong> is cataloged in the master index. Its French public domain scan is currently queued for OCR segmentation and translation alignment.
        </p>
        <span style="font-size:0.78rem; background:#f4efe9; color:#6b635b; padding:0.35rem 0.9rem; border-radius:999px; border:1px solid #ded6c8; font-weight:500;">
          Pipeline Status: Scheduled Ingestion
        </span>
      </div>
    `;
    colFr.innerHTML = notice;
    colEn.innerHTML = notice;
    return;
  }

  colFr.innerHTML = work.paragraphs.map(p => renderSingleBlock(work.id, p, 'fr')).join("");
  colEn.innerHTML = work.paragraphs.map(p => renderSingleBlock(work.id, p, 'en')).join("");

  setupPairHover();
  setupTermClicks();
}

function renderSingleBlock(workId, paragraph, lang) {
  const blockId = paragraph.id;
  let processed = paragraph[lang] || "";

  const userHighlights = window.highlights || [];
  const blockHls = userHighlights.filter(h => h.workId === workId && h.blockId === blockId && h.lang === lang);
  blockHls.forEach(hl => {
    processed = applyHighlightToHtml(processed, hl.text, hl.id, hl.note);
  });

  const num = blockId.replace("p-", "");
  return `
    <div class="block" id="${lang}-${blockId}" data-pair="${blockId}" data-work-id="${workId}" data-block-id="${blockId}" data-lang="${lang}">
      <span class="block-id">#${num}</span>
      ${processed}
    </div>
  `;
}

function setupPairHover() {
  document.querySelectorAll(".block").forEach(b => {
    const pair = b.getAttribute("data-pair");
    b.addEventListener("mouseenter", () => {
      document.querySelectorAll(`[data-pair="${pair}"]`).forEach(el => el.classList.add("pair-hover"));
    });
    b.addEventListener("mouseleave", () => {
      document.querySelectorAll(`[data-pair="${pair}"]`).forEach(el => el.classList.remove("pair-hover"));
    });
  });

  document.querySelectorAll(".user-hl").forEach(hlEl => {
    hlEl.addEventListener("click", (e) => {
      e.stopPropagation();
      const hlId = hlEl.getAttribute("data-hl-id");
      if (typeof window.openExistingNoteModal === "function") {
        window.openExistingNoteModal(hlId);
      }
    });
  });
}

function setupTermClicks() {
  document.querySelectorAll(".term").forEach(t => {
    t.addEventListener("click", (e) => {
      e.stopPropagation();
      const termKey = t.getAttribute("data-term");
      if (typeof window.showGlossaryTerm === "function") {
        window.showGlossaryTerm(termKey);
      }
    });
  });
}

function setMode(mode) {
  currentMode = mode;
  const grid = document.getElementById("reader-grid");
  if (!grid) return;
  
  ["split", "en", "fr"].forEach(m => {
    const btn = document.getElementById(`btn-mode-${m}`);
    if (btn) {
      if (m === mode) btn.classList.add("active");
      else btn.classList.remove("active");
    }
  });

  if (mode === "split") grid.className = "reader-grid";
  else if (mode === "en") grid.className = "reader-grid mode-en";
  else if (mode === "fr") grid.className = "reader-grid mode-fr";
}

// Global window exposures
window.renderBlocks = renderBlocks;
window.setMode = setMode;
