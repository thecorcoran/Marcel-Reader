let currentMode = "split";

function applyHighlightToHtml(html, searchText, hlId, noteText) {
  if (!searchText) return html;
  const safeText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const termRegex = new RegExp(safeText, 'i');
  
  const parts = html.split(/(<[^>]+>)/g);
  let replaced = false;
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i].startsWith('<') && !replaced) {
      if (termRegex.test(parts[i])) {
        const noteBadge = noteText ? `<span class="note-indicator" title="${escapeHtml(noteText)}">📝</span>` : '';
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

  colFr.innerHTML = work.paragraphs.map(p => renderSingleBlock(work.id, p, 'fr')).join("");
  colEn.innerHTML = work.paragraphs.map(p => renderSingleBlock(work.id, p, 'en')).join("");

  setupPairHover();
  setupTermClicks();
}

function renderSingleBlock(workId, paragraph, lang) {
  const blockId = paragraph.id;
  let processed = paragraph[lang];

  const blockHls = highlights.filter(h => h.workId === workId && h.blockId === blockId && h.lang === lang);
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
      openExistingNoteModal(hlId);
    });
  });
}

function setupTermClicks() {
  document.querySelectorAll(".term").forEach(t => {
    t.addEventListener("click", (e) => {
      e.stopPropagation();
      const termKey = t.getAttribute("data-term");
      showGlossaryTerm(termKey);
    });
  });
}

function setMode(mode) {
  currentMode = mode;
  const grid = document.getElementById("reader-grid");
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
