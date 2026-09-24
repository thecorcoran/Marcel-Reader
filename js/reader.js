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

let currentActiveWork = null;
let currentSectionId = "all";

function selectSection(sectionId) {
  currentSectionId = sectionId;
  if (currentActiveWork) {
    renderBlocks(currentActiveWork, sectionId);
    const container = document.getElementById("reader-blocks");
    if (container) container.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderSectionNav(work, targetSectionId) {
  const sectionNav = document.getElementById("section-nav");
  const pillsContainer = document.getElementById("section-pills");
  const progressContainer = document.getElementById("section-progress");

  if (!sectionNav || !pillsContainer) return;

  if (!work.sections || work.sections.length <= 1) {
    sectionNav.style.display = "none";
    return;
  }

  sectionNav.style.display = "flex";
  if (targetSectionId !== null && targetSectionId !== undefined) {
    currentSectionId = targetSectionId;
  } else if (!currentSectionId || !work.sections.some(s => s.id === currentSectionId)) {
    if (work.paragraphs && work.paragraphs.length > 200) {
      currentSectionId = work.sections[0].id;
    } else {
      currentSectionId = "all";
    }
  }

  const allActive = currentSectionId === "all" ? "active" : "";
  let pillsHtml = `
    <button class="section-pill ${allActive}" onclick="window.selectSection('all')">
      All Sections (${work.paragraphs.length})
    </button>
  `;

  work.sections.forEach(sec => {
    const isActive = currentSectionId === sec.id ? "active" : "";
    const secCount = work.paragraphs.filter(p => p.sectionId === sec.id).length;
    pillsHtml += `
      <button class="section-pill ${isActive}" onclick="window.selectSection('${sec.id}')">
        ${escapeHtmlSafe(sec.titleEn || sec.titleFr)} (${secCount})
      </button>
    `;
  });

  pillsContainer.innerHTML = pillsHtml;

  if (progressContainer) {
    const displayedCount = (currentSectionId === "all")
      ? work.paragraphs.length
      : work.paragraphs.filter(p => p.sectionId === currentSectionId).length;
    const statusText = work.unabridged
      ? `<span style="color:#047857; font-weight:600;">✓ Verified Verbatim Unabridged</span>`
      : `<span style="color:#b45309; font-weight:600;">⏳ Study Digest (${work.paragraphs.length} paras) — Full Ingestion Queued</span>`;
    progressContainer.innerHTML = `
      <span>Showing <strong>${displayedCount}</strong> of <strong>${work.paragraphs.length}</strong> parallel paragraphs</span>
      ${statusText}
    `;
  }
}

function renderBlocks(work, targetSectionId = null) {
  currentActiveWork = work;
  const container = document.getElementById("reader-blocks");
  const colHeader = document.getElementById("reader-columns-header");
  const sectionNav = document.getElementById("section-nav");
  if (!container) return;

  if (!work || !work.paragraphs || work.paragraphs.length === 0) {
    if (colHeader) colHeader.style.display = "none";
    if (sectionNav) sectionNav.style.display = "none";
    const notice = `
      <div class="scheduled-notice">
        <div style="font-size:2rem; margin-bottom:0.5rem;">📖</div>
        <h4 style="font-size:1.15rem; color:var(--accent); margin-bottom:0.75rem;">Text Scheduled for Ingestion</h4>
        <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.6; margin-bottom:1.25rem;">
          <strong>${escapeHtmlSafe(work ? (work.titleEn || work.titleFr) : "This work")}</strong> is cataloged in the master index. Its French public domain scan is currently queued for OCR segmentation and translation alignment.
        </p>
        <span class="pipeline-badge">
          Pipeline Status: Scheduled Ingestion
        </span>
      </div>
    `;
    container.innerHTML = notice;
    return;
  }

  renderSectionNav(work, targetSectionId);

  const displayParagraphs = (currentSectionId && currentSectionId !== "all")
    ? work.paragraphs.filter(p => p.sectionId === currentSectionId)
    : work.paragraphs;

  if (colHeader) colHeader.style.display = "";
  container.innerHTML = displayParagraphs.map(p => renderParagraphPair(work.id, p)).join("");
  
  let html = displayParagraphs.map(p => renderParagraphPair(work.id, p)).join("");

  // Chapter Pagination Footer
  if (work.sections && work.sections.length > 1) {
    const secIdx = work.sections.findIndex(s => s.id === currentSectionId);
    const prevSec = secIdx > 0 ? work.sections[secIdx - 1] : null;
    const nextSec = (secIdx >= 0 && secIdx < work.sections.length - 1) ? work.sections[secIdx + 1] : null;

    html += `
      <div class="reader-section-pagination">
        ${prevSec 
          ? `<button class="sec-nav-btn prev" onclick="window.selectSection('${prevSec.id}')">← ${escapeHtmlSafe(prevSec.titleEn || prevSec.titleFr)}</button>` 
          : '<span></span>'}
        <button class="sec-nav-btn all" onclick="window.selectSection('all')">
          ${currentSectionId === 'all' ? 'Showing All Sections' : 'View All Sections'} (${work.paragraphs.length})
        </button>
        ${nextSec 
          ? `<button class="sec-nav-btn next" onclick="window.selectSection('${nextSec.id}')">${escapeHtmlSafe(nextSec.titleEn || nextSec.titleFr)} →</button>` 
          : '<span></span>'}
      </div>
    `;
  }

  container.innerHTML = html;

  setupPairHover();
  setupTermClicks();
}

function renderParagraphPair(workId, paragraph) {
  const blockId = paragraph.id;
  return `
    <div class="paragraph-pair-row" id="row-${blockId}" data-pair="${blockId}">
      ${renderSingleBlock(workId, paragraph, 'fr')}
      ${renderSingleBlock(workId, paragraph, 'en')}
    </div>
  `;
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
    <div class="block col-${lang}" id="${lang}-${blockId}" data-pair="${blockId}" data-work-id="${workId}" data-block-id="${blockId}" data-lang="${lang}">
      <span class="block-id" onclick="event.stopPropagation(); if (typeof window.openCitationModal === 'function') window.openCitationModal('${workId}', '${blockId}');" title="Generate citation for § ${num}" role="button" tabindex="0">#${num}</span>
      <div class="block-text">${processed}</div>
    </div>
  `;
}

function setupPairHover() {
  document.querySelectorAll(".paragraph-pair-row").forEach(row => {
    row.addEventListener("mouseenter", () => row.classList.add("pair-hover"));
    row.addEventListener("mouseleave", () => row.classList.remove("pair-hover"));
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

let activePopoverTerm = null;
let popoverHideTimer = null;

function setupTermClicks() {
  const popover = document.getElementById("glossary-popover");

  document.querySelectorAll(".term").forEach(t => {
    const termKey = t.getAttribute("data-term");

    // Hover preview
    t.addEventListener("mouseenter", () => {
      clearTimeout(popoverHideTimer);
      showGlossaryPopover(termKey, t);
    });

    t.addEventListener("mouseleave", () => {
      popoverHideTimer = setTimeout(hideGlossaryPopover, 300);
    });

    // Click/tap preview
    t.addEventListener("click", (e) => {
      e.stopPropagation();
      clearTimeout(popoverHideTimer);
      showGlossaryPopover(termKey, t);
    });
  });

  if (popover) {
    popover.addEventListener("mouseenter", () => {
      clearTimeout(popoverHideTimer);
    });
    popover.addEventListener("mouseleave", () => {
      popoverHideTimer = setTimeout(hideGlossaryPopover, 300);
    });
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".term") && !e.target.closest("#glossary-popover")) {
      hideGlossaryPopover();
    }
  });
}

function showGlossaryPopover(termKey, anchorEl) {
  const popover = document.getElementById("glossary-popover");
  if (!popover || !window.MARCEL_GLOSSARY || !window.MARCEL_GLOSSARY[termKey]) return;

  const item = window.MARCEL_GLOSSARY[termKey];
  activePopoverTerm = termKey;

  popover.innerHTML = `
    <div class="popover-header">
      <div class="popover-term-fr">${escapeHtmlSafe(item.fr)}</div>
      <div class="popover-term-en">${escapeHtmlSafe(item.en)}</div>
    </div>
    <div class="popover-body">
      ${escapeHtmlSafe(item.def)}
    </div>
    <div class="popover-footer">
      <button class="popover-btn" onclick="openFullGlossaryFromPopover('${termKey}')">
        📖 Open in Glossary Drawer &rarr;
      </button>
    </div>
  `;

  const rect = anchorEl.getBoundingClientRect();
  const popoverWidth = 320;
  const winWidth = window.innerWidth || 1024;
  const winHeight = window.innerHeight || 768;

  let left = rect.left + (rect.width / 2) - (popoverWidth / 2);
  if (left < 16) left = 16;
  if (left + popoverWidth > winWidth - 16) {
    left = winWidth - popoverWidth - 16;
  }

  let top = rect.bottom + (window.scrollY || 0) + 8;
  if (rect.bottom + 220 > winHeight && rect.top > 220) {
    top = rect.top + (window.scrollY || 0) - 190;
  }

  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
  popover.classList.add("visible");
  popover.setAttribute("aria-hidden", "false");
}

function hideGlossaryPopover() {
  const popover = document.getElementById("glossary-popover");
  if (popover) {
    popover.classList.remove("visible");
    popover.setAttribute("aria-hidden", "true");
  }
  activePopoverTerm = null;
}

function openFullGlossaryFromPopover(termKey) {
  hideGlossaryPopover();
  if (typeof window.showGlossaryTerm === "function") {
    window.showGlossaryTerm(termKey);
  }
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

  grid.className = `reader-grid mode-${mode}`;
}

// Global window exposures
window.renderBlocks = renderBlocks;
window.setMode = setMode;
window.selectSection = selectSection;
window.showGlossaryPopover = showGlossaryPopover;
window.hideGlossaryPopover = hideGlossaryPopover;
window.openFullGlossaryFromPopover = openFullGlossaryFromPopover;
