/**
 * Gabriel Marcel Reader — Application Controller & Routing
 */
window.currentWorkId = "positions-mystere-ontologique";
window.currentView = "reader";
let currentCatalogFilter = "all";
let currentCatalogQuery = "";

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

  populateWorkDropdown();
  if (typeof window.initNotes === "function") window.initNotes();
  renderGlossaryDrawer();

  function routeByHash() {
    const rawHash = (window.location && window.location.hash) ? window.location.hash.replace(/^#/, '') : '';
    if (rawHash && rawHash !== 'home' && rawHash !== 'catalog' && window.MARCEL_CORPUS && window.MARCEL_CORPUS[rawHash]) {
      loadWork(rawHash);
    } else {
      showMainPage();
    }
  }

  routeByHash();

  if (typeof window.addEventListener === 'function') {
    window.addEventListener('hashchange', () => {
      routeByHash();
    });
  }

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

  const isHome = (window.currentView === 'home');
  let optionsHtml = `<option value="" disabled ${isHome ? 'selected' : ''}>-- Select a Work --</option>`;

  optionsHtml += Object.entries(categories).map(([catName, list]) => `
    <optgroup label="${catName}">
      ${list.map(w => {
        const dot = w.unabridged ? '●' : '○';
        const isSelected = (!isHome && w.id === window.currentWorkId);
        return `
        <option value="${w.id}" ${isSelected ? 'selected' : ''}>
          ${dot} ${escapeHtmlSafe(w.titleEn || w.titleFr)} (${w.year})
        </option>
      `;}).join("")}
    </optgroup>
  `).join("");

  select.innerHTML = optionsHtml;
}

function showMainPage() {
  window.currentView = 'home';
  if (window.location) window.location.hash = 'home';

  const mainPage = document.getElementById("main-page-container");
  const readerContainer = document.getElementById("reader-container") || document.querySelector(".reader-container");
  const metaBar = document.getElementById("meta-bar") || document.querySelector(".meta-bar");
  const sectionNav = document.getElementById("section-nav");
  const btnBack = document.getElementById("btn-back-home");
  const modeGroup = document.querySelector(".mode-toggle-group");
  const prefsGroup = document.querySelector(".reader-prefs-group");
  const select = document.getElementById("work-select");

  if (mainPage) mainPage.style.display = "block";
  if (readerContainer) readerContainer.style.display = "none";
  if (metaBar) metaBar.style.display = "none";
  if (sectionNav) sectionNav.style.display = "none";
  if (btnBack) btnBack.style.display = "none";
  if (modeGroup) modeGroup.style.display = "none";
  if (prefsGroup) prefsGroup.style.display = "none";
  if (select) select.value = "";

  renderMainCatalog(currentCatalogFilter, currentCatalogQuery);
  if (typeof window.scrollTo === "function") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function setCatalogFilter(filter) {
  currentCatalogFilter = filter;
  const pills = document.querySelectorAll('#catalog-filter-pills .filter-pill');
  if (pills && pills.forEach) {
    pills.forEach(btn => {
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  renderMainCatalog(currentCatalogFilter, currentCatalogQuery);
}

function handleCatalogSearch() {
  const input = document.getElementById('catalog-search-input');
  currentCatalogQuery = input ? input.value.trim().toLowerCase() : '';
  renderMainCatalog(currentCatalogFilter, currentCatalogQuery);
}

function renderMainCatalog(filter = 'all', query = '') {
  const container = document.getElementById('catalog-grid');
  if (!container || !window.MARCEL_CORPUS) return;

  const works = Object.values(window.MARCEL_CORPUS);
  const filtered = works.filter(w => {
    // Filter by category or completeness
    if (filter === 'complete' && !w.unabridged) return false;
    if (filter !== 'all' && filter !== 'complete' && w.category !== filter) return false;

    // Search query filter
    if (query) {
      const q = query.toLowerCase();
      const matchEn = (w.titleEn || '').toLowerCase().includes(q);
      const matchFr = (w.titleFr || '').toLowerCase().includes(q);
      const matchYear = String(w.year).includes(q);
      const matchCat = (w.category || '').toLowerCase().includes(q);
      if (!matchEn && !matchFr && !matchYear && !matchCat) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="catalog-empty-box">
        <p>No works found matching your filter.</p>
        <button class="btn" onclick="setCatalogFilter('all'); const inp = document.getElementById('catalog-search-input'); if (inp) { inp.value=''; handleCatalogSearch(); }">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(w => {
    const isUnabridged = Boolean(w.unabridged);
    const dot = isUnabridged ? '●' : '○';
    const dotClass = isUnabridged ? 'dot-complete' : 'dot-incomplete';
    const badgeHtml = isUnabridged
      ? `<span class="catalog-card-badge badge-complete">✓ Verified Verbatim Unabridged</span>`
      : `<span class="catalog-card-badge badge-queued">⏳ Study Digest — Full Ingestion Queued</span>`;

    let scaleInfo = '';
    if (isUnabridged) {
      if (w.id === 'positions-mystere-ontologique') scaleInfo = '105 Aligned Paragraphs • V Sections';
      else if (w.id === 'le-monde-casse') scaleInfo = '110 Dialogue Rows • IV Dramatic Acts';
      else if (w.id === 'etre-et-avoir') scaleInfo = '105 Journal Entries • 3 Chronological Parts';
      else if (w.id === 'mystere-de-letre-1') scaleInfo = '105 Aligned Paragraphs • 10 Gifford Lectures';
      else if (w.id === 'mystere-de-letre-2') scaleInfo = '105 Aligned Paragraphs • 10 Gifford Lectures';
      else scaleInfo = '100% Verbatim Bilingual Edition';
    } else {
      scaleInfo = 'Bilingual Digest & Terminology Index';
    }

    const companionHtml = (w.companionSlug && window.MARCEL_CORPUS[w.companionSlug])
      ? `<div class="catalog-card-companion" onclick="event.stopPropagation(); switchWork('${w.companionSlug}')">
           🎭 Companion: <strong>${escapeHtmlSafe(window.MARCEL_CORPUS[w.companionSlug].titleEn || window.MARCEL_CORPUS[w.companionSlug].titleFr)}</strong>
         </div>`
      : '';

    return `
      <article class="catalog-card ${isUnabridged ? 'is-complete' : ''}" onclick="switchWork('${w.id}')" tabindex="0" role="button" aria-label="Read ${escapeHtmlSafe(w.titleEn || w.titleFr)}">
        <div class="catalog-card-header">
          <span class="catalog-dot ${dotClass}" title="${isUnabridged ? 'Complete Verbatim Edition' : 'Study Digest'}">${dot}</span>
          <span class="catalog-card-category">${escapeHtmlSafe(w.category || 'Work')}</span>
          <span class="catalog-card-year">${w.year}</span>
        </div>
        <div class="catalog-card-body">
          <h3 class="catalog-card-title-en">${escapeHtmlSafe(w.titleEn || w.titleFr)}</h3>
          <h4 class="catalog-card-title-fr">${escapeHtmlSafe(w.titleFr)}</h4>
          <div class="catalog-card-meta">
            ${badgeHtml}
            <div class="catalog-card-scale">${scaleInfo}</div>
          </div>
          ${companionHtml}
        </div>
        <div class="catalog-card-footer">
          <button class="btn btn-read-card" onclick="event.stopPropagation(); switchWork('${w.id}')">
            ${isUnabridged ? 'Read Full Work &rarr;' : 'Read Study Digest &rarr;'}
          </button>
        </div>
      </article>
    `;
  }).join('');
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

  window.currentView = 'reader';
  window.currentWorkId = workId;

  const mainPage = document.getElementById("main-page-container");
  const readerContainer = document.getElementById("reader-container") || document.querySelector(".reader-container");
  const metaBar = document.getElementById("meta-bar") || document.querySelector(".meta-bar");
  const btnBack = document.getElementById("btn-back-home");
  const modeGroup = document.querySelector(".mode-toggle-group");
  const prefsGroup = document.querySelector(".reader-prefs-group");

  if (mainPage) mainPage.style.display = "none";
  if (readerContainer) readerContainer.style.display = "block";
  if (metaBar) metaBar.style.display = "block";
  if (btnBack) btnBack.style.display = "inline-flex";
  if (modeGroup) modeGroup.style.display = "inline-flex";
  if (prefsGroup) prefsGroup.style.display = "inline-flex";

  const select = document.getElementById("work-select");
  if (select) select.value = workId;

  const titleFr = document.getElementById("work-title-fr");
  const titleEn = document.getElementById("work-title-en");
  const details = document.getElementById("work-details");

  const badgeHtml = work.unabridged 
    ? ` <span class="unabridged-badge">✓ Verified Verbatim Unabridged</span>`
    : (work.statusBadge ? ` <span class="unabridged-badge queued">⏳ ${escapeHtmlSafe(work.statusBadge)}</span>` : "");
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

  // If work has a dedicated file in data/works/:
  const dedicatedWorkIds = ['positions-mystere-ontologique', 'etre-et-avoir', 'mystere-de-letre-1', 'mystere-de-letre-2', 'le-monde-casse'];
  if (dedicatedWorkIds.includes(workId) || work.unabridged) {
    const container = document.getElementById("reader-blocks");
    const colHeader = document.getElementById("reader-columns-header");
    const sectionNav = document.getElementById("section-nav");
    if (colHeader) colHeader.style.display = "none";
    if (sectionNav) sectionNav.style.display = "none";
    if (container) {
      const loadMsg = work.unabridged
        ? `Loading verified verbatim unabridged edition for <strong>${escapeHtmlSafe(work.titleEn || work.titleFr)}</strong>...`
        : `Loading edition for <strong>${escapeHtmlSafe(work.titleEn || work.titleFr)}</strong>...`;
      container.innerHTML = `
        <div class="loading-work-box">
          <div class="loading-work-spinner"></div>
          <div>${loadMsg}</div>
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
window.showMainPage = showMainPage;
window.setCatalogFilter = setCatalogFilter;
window.handleCatalogSearch = handleCatalogSearch;
window.renderMainCatalog = renderMainCatalog;
window.populateWorkDropdown = populateWorkDropdown;
window.toggleGlossary = toggleGlossary;
window.showGlossaryTerm = showGlossaryTerm;
window.closeDrawers = closeDrawers;
window.showToast = showToast;
window.setTheme = setTheme;
window.adjustFontSize = adjustFontSize;
