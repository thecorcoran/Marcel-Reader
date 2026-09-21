/**
 * Gabriel Marcel Reader — Application Controller & Routing
 */
window.currentWorkId = "positions-mystere-ontologique";

// Typography & Font Sizing Controller
const FONT_SIZES = [
  { label: "Small", size: "0.98rem" },
  { label: "Normal", size: "1.12rem" },
  { label: "Large", size: "1.25rem" },
  { label: "Extra Large", size: "1.4rem" }
];
let currentFontSizeIndex = 1; // Default: Normal (1.12rem)

function initFontSize() {
  try {
    const saved = localStorage.getItem("marcel_reader_fontsize_idx");
    if (saved !== null) {
      const idx = parseInt(saved, 10);
      if (!isNaN(idx) && idx >= 0 && idx < FONT_SIZES.length) {
        currentFontSizeIndex = idx;
      }
    }
  } catch (e) {}
  applyFontSize();
}

function adjustFontSize(delta) {
  const newIdx = currentFontSizeIndex + delta;
  if (newIdx < 0 || newIdx >= FONT_SIZES.length) return;
  currentFontSizeIndex = newIdx;
  try {
    localStorage.setItem("marcel_reader_fontsize_idx", currentFontSizeIndex);
  } catch (e) {}
  applyFontSize();
  showToast(`Font size: ${FONT_SIZES[currentFontSizeIndex].label}`);
}

function applyFontSize() {
  const sizeObj = FONT_SIZES[currentFontSizeIndex];
  if (sizeObj && document.documentElement) {
    document.documentElement.style.setProperty("--reader-font-size", sizeObj.size);
  }
}

// Reading Themes Controller (Paper, Sepia, Dark)
function initTheme() {
  let theme = "light";
  try {
    const saved = localStorage.getItem("marcel_reader_theme");
    if (saved && ["light", "sepia", "dark"].includes(saved)) {
      theme = saved;
    }
  } catch (e) {}
  setTheme(theme, false);
}

function setTheme(theme, announce = true) {
  if (document.documentElement) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  try {
    localStorage.setItem("marcel_reader_theme", theme);
  } catch (e) {}
  const select = document.getElementById("theme-select");
  if (select && select.value !== theme) select.value = theme;
  if (announce) {
    const labels = { light: "Paper Theme", sepia: "Sepia Theme", dark: "Dark Theme" };
    showToast(labels[theme] || "Theme Updated");
  }
}

// Service Worker Registration for PWA Offline Functionality
function initServiceWorker() {
  if (typeof navigator !== "undefined" && 'serviceWorker' in navigator && window.location && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('Marcel Reader ServiceWorker registered:', reg.scope))
      .catch((err) => console.warn('ServiceWorker registration skipped:', err));
  }
}

// Accessible Focus Trapping for Modals
function trapFocusInModal(modalEl, e) {
  if (e.key !== 'Tab') return;
  const focusables = modalEl.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
  if (!focusables || focusables.length === 0) return;

  const firstEl = focusables[0];
  const lastEl = focusables[focusables.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === firstEl) {
      lastEl.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastEl) {
      firstEl.focus();
      e.preventDefault();
    }
  }
}

function setupModalFocusTraps() {
  const searchModal = document.getElementById("search-modal-backdrop");
  const noteModal = document.getElementById("note-modal-backdrop");

  if (searchModal) {
    searchModal.addEventListener("keydown", (e) => trapFocusInModal(searchModal, e));
  }
  if (noteModal) {
    noteModal.addEventListener("keydown", (e) => trapFocusInModal(noteModal, e));
  }
}

function initApp() {
  initTheme();
  initFontSize();
  initServiceWorker();
  setupModalFocusTraps();

  if (window.location.hash) {
    const h = window.location.hash.substring(1);
    if (window.MARCEL_CORPUS && window.MARCEL_CORPUS[h]) window.currentWorkId = h;
  }

  populateWorkDropdown();
  if (typeof window.initNotes === "function") window.initNotes();
  renderGlossaryDrawer();
  loadWork(window.currentWorkId);

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (typeof window.openSearchModal === "function") window.openSearchModal();
    }
    if (e.key === 'Escape') {
      if (typeof window.closeSearchModal === "function") window.closeSearchModal();
      if (typeof window.closeNoteModal === "function") window.closeNoteModal();
      closeDrawers();
    }
  });
}

// Guarantees execution whether DOM is still loading or already parsed
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

function populateWorkDropdown() {
  const select = document.getElementById("work-select");
  if (!select || !window.MARCEL_CORPUS) return;
  const works = Object.values(window.MARCEL_CORPUS);

  const categories = {};
  works.forEach(w => {
    const cat = w.category || "Other Works";
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(w);
  });

  select.innerHTML = Object.entries(categories).map(([catName, list]) => `
    <optgroup label="${catName}">
      ${list.map(w => `
        <option value="${w.id}" ${w.id === window.currentWorkId ? 'selected' : ''}>
          ${w.titleEn || w.titleFr} (${w.year})
        </option>
      `).join("")}
    </optgroup>
  `).join("");
}

function escapeHtmlSafe(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function loadWorkScript(workId, callback) {
  if (window.MARCEL_WORKS && window.MARCEL_WORKS[workId]) {
    callback(window.MARCEL_WORKS[workId]);
    return;
  }

  const existing = document.querySelector(`script[data-work-script="${workId}"]`);
  if (existing) {
    existing.addEventListener('load', () => callback(window.MARCEL_WORKS ? window.MARCEL_WORKS[workId] : null));
    return;
  }

  const script = document.createElement("script");
  script.src = `data/works/${workId}.js`;
  script.setAttribute("data-work-script", workId);
  script.onload = () => {
    callback(window.MARCEL_WORKS ? window.MARCEL_WORKS[workId] : null);
  };
  script.onerror = () => {
    console.warn(`Could not load data/works/${workId}.js`);
    callback(null);
  };
  document.head.appendChild(script);
}

function switchWork(workId) {
  window.currentWorkId = workId;
  window.location.hash = workId;
  loadWork(workId);
}

function loadWork(workId, sectionId = "all") {
  if (!window.MARCEL_CORPUS) return;
  const work = window.MARCEL_CORPUS[workId];
  if (!work) return;

  const select = document.getElementById("work-select");
  if (select) select.value = workId;

  const titleFr = document.getElementById("work-title-fr");
  const titleEn = document.getElementById("work-title-en");
  const details = document.getElementById("work-details");

  const badgeHtml = work.unabridged ? ` <span class="unabridged-badge">✓ Unabridged Edition</span>` : "";
  if (titleFr) titleFr.innerHTML = `${escapeHtmlSafe(work.titleFr)}${badgeHtml}`;
  if (titleEn) titleEn.textContent = work.titleEn || "";
  if (details) details.textContent = `${work.category || "Corpus Entry"} • Published ${work.year} • France / EU Public Domain`;

  const compIndicator = document.getElementById("companion-indicator");
  if (compIndicator) {
    if (work.companionSlug && window.MARCEL_CORPUS[work.companionSlug]) {
      const comp = window.MARCEL_CORPUS[work.companionSlug];
      compIndicator.innerHTML = `🎭 <span class="companion-tag" onclick="window.switchWork('${comp.id}')">Paired Companion: <strong>${comp.titleEn || comp.titleFr}</strong> &rarr;</span>`;
    } else {
      compIndicator.innerHTML = `📜 ${work.category || "Corpus Entry"}`;
    }
  }

  // If work payload is already in memory:
  if (window.MARCEL_WORKS && window.MARCEL_WORKS[workId]) {
    if (typeof window.renderBlocks === "function") {
      window.renderBlocks(window.MARCEL_WORKS[workId], sectionId);
    }
    return;
  }

  // If work has paragraphs directly in MARCEL_CORPUS:
  if (work.paragraphs && work.paragraphs.length > 0) {
    if (typeof window.renderBlocks === "function") {
      window.renderBlocks(work, sectionId);
    }
    return;
  }

  // If work is unabridged and has a dedicated file in data/works/:
  if (work.unabridged) {
    const container = document.getElementById("reader-blocks");
    const colHeader = document.getElementById("reader-columns-header");
    const sectionNav = document.getElementById("section-nav");
    if (colHeader) colHeader.style.display = "none";
    if (sectionNav) sectionNav.style.display = "none";
    if (container) {
      container.innerHTML = `
        <div class="loading-work-box">
          <div class="loading-work-spinner"></div>
          <div>Loading complete unabridged edition for <strong>${escapeHtmlSafe(work.titleEn || work.titleFr)}</strong>...</div>
        </div>
      `;
    }

    loadWorkScript(workId, (loadedData) => {
      if (typeof window.renderBlocks === "function") {
        window.renderBlocks(loadedData || work, sectionId);
      }
    });
    return;
  }

  if (typeof window.renderBlocks === "function") {
    window.renderBlocks(work, sectionId);
  }
}

function renderGlossaryDrawer() {
  const container = document.getElementById("glossary-cards-container");
  if (!container || !window.MARCEL_GLOSSARY) return;

  container.innerHTML = Object.entries(window.MARCEL_GLOSSARY).map(([key, item]) => `
    <div class="glossary-card" id="card-${key}">
      <div class="glossary-term-fr">${item.fr}</div>
      <div class="glossary-term-en">${item.en}</div>
      <div class="glossary-def">${item.def}</div>
    </div>
  `).join("");
}

function toggleGlossary() {
  const drawer = document.getElementById("glossary-drawer");
  if (!drawer) return;
  const wasOpen = drawer.classList.contains("open");
  closeDrawers();
  if (!wasOpen) drawer.classList.add("open");
}

function showGlossaryTerm(termKey) {
  closeDrawers();
  const drawer = document.getElementById("glossary-drawer");
  if (!drawer) return;
  drawer.classList.add("open");
  const card = document.getElementById(`card-${termKey}`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.style.outline = "2px solid var(--accent)";
    setTimeout(() => { card.style.outline = "none"; }, 2500);
  }
}

function closeDrawers() {
  const nb = document.getElementById("notebook-drawer");
  const gl = document.getElementById("glossary-drawer");
  const tb = document.getElementById("selection-toolbar");

  if (nb) nb.classList.remove("open");
  if (gl) gl.classList.remove("open");
  if (tb) tb.style.display = "none";
  if (typeof window.hideGlossaryPopover === "function") window.hideGlossaryPopover();
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

// Global window bindings
window.switchWork = switchWork;
window.loadWork = loadWork;
window.toggleGlossary = toggleGlossary;
window.showGlossaryTerm = showGlossaryTerm;
window.closeDrawers = closeDrawers;
window.showToast = showToast;
window.setTheme = setTheme;
window.adjustFontSize = adjustFontSize;
