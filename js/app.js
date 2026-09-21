/**
 * Gabriel Marcel Reader — Application Controller & Routing
 */
window.currentWorkId = "positions-mystere-ontologique";
window.currentView = "reader";
let currentCatalogFilter = "all";
let currentCatalogQuery = "";
let currentGraphFilter = "all";
let selectedConceptKey = null;

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
  const citationModal = document.getElementById("citation-modal-backdrop");

  if (searchModal) {
    searchModal.addEventListener("keydown", (e) => trapFocusInModal(searchModal, e));
  }
  if (noteModal) {
    noteModal.addEventListener("keydown", (e) => trapFocusInModal(noteModal, e));
  }
  if (citationModal) {
    citationModal.addEventListener("keydown", (e) => trapFocusInModal(citationModal, e));
  }
}

// ====================================================
// Chronological Intellectual Itinerary (1889–1973)
// ====================================================

const INTELLECTUAL_EPOCHS = [
  {
    phase: "Epoch I",
    dates: "1914–1923",
    title: "Early Metaphysical Soundings & The Ordeal of War",
    desc: "Departing from academic Sorbonne idealism, Marcel serves in the Red Cross tracing service during World War I, experiencing directly the anguish of absence and death, which triggers his initial phenomenological soundings on existence and sensation.",
    milestones: "Red Cross Tracing Service • Breakthrough of Concrete Intuition • Metaphysical Journal Beginnings",
    works: [
      { id: "journal-metaphysique", label: "Journal métaphysique (1914–1923)" }
    ]
  },
  {
    phase: "Epoch II",
    dates: "1925–1933",
    title: "The Theatrical Laboratory & Ontological Awakening",
    desc: "Marcel explores the inextricable tangles of bereavement, clerical hypocrisy, and marital discord on the Parisian stage, culminating in the 1933 philosophical manifesto that definitively distinguished Problem from Mystery.",
    milestones: "Premiere of Un Homme de Dieu • The Broken World (1933) • On the Ontological Mystery (1933)",
    works: [
      { id: "un-homme-de-dieu", label: "Un Homme de Dieu (1925)" },
      { id: "le-monde-casse", label: "Le Monde cassé (1933)" },
      { id: "positions-mystere-ontologique", label: "On the Ontological Mystery (1933)" }
    ]
  },
  {
    phase: "Epoch III",
    dates: "1935–1944",
    title: "The Crucible of Having, Hope & Creative Fidelity",
    desc: "Through the darkness of the 1930s and Nazi occupation, Marcel formalizes the dialectic of Having and Being, the creative vow of paternity and the family, and an invincible phenomenology of hope under trial.",
    milestones: "Publication of Être et avoir • The Crest Path & Le Dard • Homo Viator: Metaphysic of Hope",
    works: [
      { id: "etre-et-avoir", label: "Being and Having (1935)" },
      { id: "le-dard", label: "Le Dard (1936)" },
      { id: "du-refus-a-linvocation", label: "Creative Fidelity (1940)" },
      { id: "homo-viator", label: "Homo Viator (1944)" }
    ]
  },
  {
    phase: "Epoch IV",
    dates: "1949–1951",
    title: "Gifford Lectures & Mass Society Critique",
    desc: "Delivering the prestigious Gifford Lectures at the University of Aberdeen, Marcel delivers his metaphysical summa in two volumes, alongside an unsparing analysis of technocratic degradation and mass propaganda.",
    milestones: "Aberdeen Gifford Lectures (1949–1950) • Man Against Mass Society • Rome is No Longer in Rome",
    works: [
      { id: "mystere-de-letre-1", label: "The Mystery of Being, Vol. 1" },
      { id: "mystere-de-letre-2", label: "The Mystery of Being, Vol. 2" },
      { id: "les-hommes-contre-lhumain", label: "Man Against Mass Society" },
      { id: "rome-nest-plus-dans-rome", label: "Rome is No Longer in Rome" }
    ]
  },
  {
    phase: "Epoch V",
    dates: "1955–1964",
    title: "Problematic Man & Harvard William James Lectures",
    desc: "Confronting contemporary existentialism, the death of God, and technocratic dehumanization, Marcel synthesizes his wartime diaries and delivers the William James Lectures at Harvard on the existential background of human dignity.",
    milestones: "Problematic Man (1955) • Presence and Immortality (1959) • Harvard William James Lectures (1961–1962)",
    works: [
      { id: "lhomme-problematique", label: "Problematic Man (1955)" },
      { id: "presence-et-immortalite", label: "Presence and Immortality (1959)" },
      { id: "la-dignite-humaine", label: "Human Dignity (1964)" }
    ]
  },
  {
    phase: "Epoch VI",
    dates: "1968–1973",
    title: "Hermeneutic Summa with Paul Ricœur & Tragic Wisdom",
    desc: "In his final years, Marcel engages in a historic, comprehensive dialogue with Paul Ricœur across three sessions reviewing his entire philosophical itinerary, followed by his spiritual testament on tragic wisdom and grace.",
    milestones: "Ricœur-Marcel Conversations (1968) • Tragic Wisdom and Beyond • Grand Prix de Littérature",
    works: [
      { id: "entretiens-paul-ricoeur", label: "Conversations with Paul Ricœur (1968)" }
    ]
  }
];

function renderIntellectualTimeline() {
  const container = document.getElementById("timeline-grid");
  if (!container) return;

  container.innerHTML = INTELLECTUAL_EPOCHS.map(epoch => `
    <article class="epoch-card">
      <div class="epoch-header">
        <span class="epoch-badge">${epoch.phase}</span>
        <span class="epoch-dates">${epoch.dates}</span>
      </div>
      <h3 class="epoch-title">${epoch.title}</h3>
      <p class="epoch-desc">${epoch.desc}</p>
      <div class="epoch-milestones">
        <strong>Historical Anchors:</strong> ${epoch.milestones}
      </div>
      <div class="epoch-works">
        ${epoch.works.map(w => `
          <button class="epoch-work-btn" onclick="switchWork('${w.id}')">
            📖 ${escapeHtmlSafe(w.label)} &rarr;
          </button>
        `).join("")}
      </div>
    </article>
  `).join("");
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
      if (typeof window.closeCitationModal === "function") window.closeCitationModal();
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

  renderConceptualKnowledgeGraph(currentGraphFilter);
  renderIntellectualTimeline();
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
      else if (w.id === 'homo-viator') scaleInfo = '110 Aligned Paragraphs • VII Chapters';
      else if (w.id === 'du-refus-a-linvocation') scaleInfo = '105 Aligned Paragraphs • VIII Essays';
      else if (w.id === 'un-homme-de-dieu') scaleInfo = '110 Dialogue Rows • IV Dramatic Acts';
      else if (w.id === 'rome-nest-plus-dans-rome') scaleInfo = '110 Dialogue Rows • V Dramatic Acts';
      else if (w.id === 'le-dard') scaleInfo = '105 Dialogue Rows • III Dramatic Acts';
      else if (w.id === 'journal-metaphysique') scaleInfo = '120 Aligned Entries • 2 Chronological Parts';
      else if (w.id === 'les-hommes-contre-lhumain') scaleInfo = '105 Aligned Paragraphs • 2 Major Parts';
      else if (w.id === 'la-dignite-humaine') scaleInfo = '95 Aligned Paragraphs • 6 Harvard Lectures';
      else if (w.id === 'lhomme-problematique') scaleInfo = '105 Aligned Paragraphs • 2 Sections';
      else if (w.id === 'presence-et-immortalite') scaleInfo = '110 Aligned Entries • 2 Parts';
      else if (w.id === 'entretiens-paul-ricoeur') scaleInfo = '105 Dialogue Exchanges • 3 Dialogues';
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
  const dedicatedWorkIds = [
    'positions-mystere-ontologique', 'etre-et-avoir', 'mystere-de-letre-1', 'mystere-de-letre-2',
    'le-monde-casse', 'homo-viator', 'du-refus-a-linvocation',
    'un-homme-de-dieu', 'rome-nest-plus-dans-rome', 'le-dard',
    'journal-metaphysique', 'les-hommes-contre-lhumain', 'la-dignite-humaine',
    'lhomme-problematique', 'presence-et-immortalite', 'entretiens-paul-ricoeur'
  ];
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

/* ====================================================
   Conceptual Knowledge Graph Controller
   ==================================================== */
function renderConceptualKnowledgeGraph(filter = 'all') {
  currentGraphFilter = filter;
  const container = document.getElementById("concept-matrix-container");
  if (!container || !window.MARCEL_GLOSSARY) return;

  const entries = Object.entries(window.MARCEL_GLOSSARY);
  const filtered = entries.filter(([key, data]) => {
    if (filter === 'all') return true;
    return data.category === filter;
  });

  const activeData = selectedConceptKey ? window.MARCEL_GLOSSARY[selectedConceptKey] : null;
  const relatedKeys = activeData && Array.isArray(activeData.related) ? activeData.related : [];

  container.innerHTML = filtered.map(([key, data]) => {
    const isActive = (key === selectedConceptKey);
    const isRelated = relatedKeys.includes(key);
    let cardClasses = 'concept-node-card';
    if (isActive) cardClasses += ' is-active';
    else if (isRelated) cardClasses += ' is-related';

    return `
      <div class="${cardClasses}" onclick="selectConcept('${key}')" role="button" tabindex="0" aria-label="Concept: ${escapeHtmlSafe(data.fr)}">
        <div>
          <span class="concept-node-badge">${escapeHtmlSafe(data.categoryName || 'Concept')}</span>
          <div class="concept-node-fr">${escapeHtmlSafe(data.fr)}</div>
          <div class="concept-node-en">${escapeHtmlSafe(data.en)}</div>
        </div>
      </div>
    `;
  }).join('');
}

function filterConceptGraph(category) {
  currentGraphFilter = category;
  const pills = document.querySelectorAll('#graph-filter-pills .graph-pill');
  if (pills && pills.forEach) {
    pills.forEach(btn => {
      if (btn.getAttribute('data-graph-filter') === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  renderConceptualKnowledgeGraph(currentGraphFilter);
}

function selectConcept(conceptKey) {
  selectedConceptKey = conceptKey;
  renderConceptualKnowledgeGraph(currentGraphFilter);

  const drawer = document.getElementById("concept-detail-drawer");
  if (!drawer || !window.MARCEL_GLOSSARY || !window.MARCEL_GLOSSARY[conceptKey]) return;

  const concept = window.MARCEL_GLOSSARY[conceptKey];
  const relatedPills = (concept.related || []).map(rKey => {
    const rData = window.MARCEL_GLOSSARY[rKey];
    if (!rData) return '';
    return `<button class="related-pill" onclick="selectConcept('${rKey}')">${escapeHtmlSafe(rData.fr)}</button>`;
  }).filter(Boolean).join(' ');

  const treatisesHtml = (concept.treatises || []).map(t => `
    <button class="concept-link-btn" onclick="loadWork('${t.workId}', '${t.sectionId}')">
      <span>📖</span>
      <span>${escapeHtmlSafe(t.title)}</span>
    </button>
  `).join('');

  const playsHtml = (concept.plays || []).map(p => `
    <button class="concept-link-btn" onclick="loadWork('${p.workId}', '${p.sectionId}')">
      <span>🎭</span>
      <span>${escapeHtmlSafe(p.title)}</span>
    </button>
  `).join('');

  drawer.style.display = 'block';
  drawer.innerHTML = `
    <div class="detail-drawer-header">
      <div>
        <h3 class="detail-drawer-title-fr">${escapeHtmlSafe(concept.fr)}</h3>
        <div class="detail-drawer-title-en">${escapeHtmlSafe(concept.en)} &bull; <em>${escapeHtmlSafe(concept.categoryName || 'Metaphysics')}</em></div>
      </div>
      <button class="btn-close-detail" onclick="closeConceptDetail()" title="Close details">&times;</button>
    </div>
    <p class="concept-detail-def">${escapeHtmlSafe(concept.def)}</p>
    ${relatedPills ? `
      <div class="concept-related-wrap">
        <span class="related-label">Interconnected Concepts:</span>
        ${relatedPills}
      </div>
    ` : ''}
    <div class="concept-links-section">
      <div class="concept-links-group">
        <h4>Philosophical Treatises (Formulation)</h4>
        <div class="concept-link-buttons">
          ${treatisesHtml || '<p class="text-muted">Formulations distributed throughout the Gifford Lectures.</p>'}
        </div>
      </div>
      <div class="concept-links-group">
        <h4>Dramatic Plays (Lived Enactment)</h4>
        <div class="concept-link-buttons">
          ${playsHtml || '<p class="text-muted">Dramatic enactments staged across the theatrical corpus.</p>'}
        </div>
      </div>
    </div>
  `;
}

function closeConceptDetail() {
  selectedConceptKey = null;
  const drawer = document.getElementById("concept-detail-drawer");
  if (drawer) drawer.style.display = 'none';
  renderConceptualKnowledgeGraph(currentGraphFilter);
}

// ====================================================
// Scholarly Citation & Research Export Hub
// ====================================================

const CITATION_METADATA = {
  "journal-metaphysique": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Journal métaphysique (1914–1923)",
    titleEn: "Metaphysical Journal",
    year: 1927,
    city: "Paris",
    publisher: "Gallimard",
    bibtexKey: "marcel1927journal"
  },
  "positions-mystere-ontologique": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Positions et approches concrètes du mystère ontologique",
    titleEn: "On the Ontological Mystery",
    year: 1933,
    city: "Paris",
    publisher: "Vrin / Nauwelaerts",
    bibtexKey: "marcel1933positions"
  },
  "le-monde-casse": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Le Monde cassé: Pièce en quatre actes",
    titleEn: "The Broken World: Play in Four Acts",
    year: 1933,
    city: "Paris",
    publisher: "Desclée de Brouwer",
    bibtexKey: "marcel1933monde"
  },
  "etre-et-avoir": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Être et avoir (Journal métaphysique 1928–1933)",
    titleEn: "Being and Having",
    year: 1935,
    city: "Paris",
    publisher: "Aubier-Montaigne",
    bibtexKey: "marcel1935etre"
  },
  "le-dard": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Le Dard: Pièce en trois actes",
    titleEn: "The Sting: Play in Three Acts",
    year: 1936,
    city: "Paris",
    publisher: "Plon",
    bibtexKey: "marcel1936dard"
  },
  "du-refus-a-linvocation": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Du refus à l'invocation: Essai de philosophie concrète",
    titleEn: "Creative Fidelity",
    year: 1940,
    city: "Paris",
    publisher: "Gallimard",
    bibtexKey: "marcel1940refus"
  },
  "homo-viator": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Homo Viator: Prolégomènes à une métaphysique de l'espérance",
    titleEn: "Homo Viator: Introduction to a Metaphysic of Hope",
    year: 1944,
    city: "Paris",
    publisher: "Aubier-Montaigne",
    bibtexKey: "marcel1944homo"
  },
  "mystere-de-letre-1": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Le Mystère de l'être, Tome I: Réflexion et mystère",
    titleEn: "The Mystery of Being, Vol. 1: Reflection and Mystery",
    year: 1951,
    city: "Paris",
    publisher: "Aubier-Montaigne",
    bibtexKey: "marcel1951mystere1"
  },
  "mystere-de-letre-2": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Le Mystère de l'être, Tome II: Foi et réalité",
    titleEn: "The Mystery of Being, Vol. 2: Faith and Reality",
    year: 1951,
    city: "Paris",
    publisher: "Aubier-Montaigne",
    bibtexKey: "marcel1951mystere2"
  },
  "les-hommes-contre-lhumain": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Les Hommes contre l'humain",
    titleEn: "Man Against Mass Society",
    year: 1951,
    city: "Paris",
    publisher: "La Colombe",
    bibtexKey: "marcel1951hommes"
  },
  "un-homme-de-dieu": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Un Homme de Dieu: Pièce en quatre actes",
    titleEn: "A Man of God: Play in Four Acts",
    year: 1925,
    city: "Paris",
    publisher: "Grasset",
    bibtexKey: "marcel1925homme"
  },
  "rome-nest-plus-dans-rome": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Rome n'est plus dans Rome: Pièce en cinq actes",
    titleEn: "Rome is No Longer in Rome: Play in Five Acts",
    year: 1951,
    city: "Paris",
    publisher: "La Table Ronde",
    bibtexKey: "marcel1951rome"
  },
  "la-dignite-humaine": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "La Dignité humaine et ses assises existentielles",
    titleEn: "The Existential Background of Human Dignity",
    year: 1964,
    city: "Paris",
    publisher: "Aubier-Montaigne",
    bibtexKey: "marcel1964dignite"
  },
  "lhomme-problematique": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "L'Homme problématique",
    titleEn: "Problematic Man",
    year: 1955,
    city: "Paris",
    publisher: "Aubier-Montaigne",
    bibtexKey: "marcel1955problematique"
  },
  "presence-et-immortalite": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Présence et immortalité",
    titleEn: "Presence and Immortality",
    year: 1959,
    city: "Paris",
    publisher: "Flammarion",
    bibtexKey: "marcel1959presence"
  },
  "entretiens-paul-ricoeur": {
    chicagoAuthor: "Ricœur, Paul, and Gabriel Marcel",
    mlaAuthor: "Ricœur, Paul, and Gabriel Marcel",
    apaAuthor: "Ricœur, P., & Marcel, G.",
    bibtexAuthor: "Ricœur, Paul and Gabriel Marcel",
    titleFr: "Entretiens Paul Ricœur - Gabriel Marcel",
    titleEn: "Conversations Between Paul Ricœur and Gabriel Marcel",
    year: 1968,
    city: "Paris",
    publisher: "Aubier-Montaigne",
    bibtexKey: "ricoeur1968entretiens"
  }
};

let currentCitationWorkId = null;
let currentCitationParagraphId = null;
let currentCitationFormat = 'chicago';

function generateCitation(workId, paragraphId = null, format = 'chicago') {
  const corpusWork = (window.MARCEL_CORPUS && window.MARCEL_CORPUS[workId]) || {};
  const meta = CITATION_METADATA[workId] || {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    bibtexAuthor: "Marcel, Gabriel",
    titleFr: corpusWork.titleFr || workId,
    titleEn: corpusWork.titleEn || workId,
    year: corpusWork.year || "n.d.",
    city: "Paris",
    publisher: "Gallimard",
    bibtexKey: `marcel${corpusWork.year || ''}${workId.replace(/[^a-zA-Z0-9]/g, '')}`
  };

  const url = paragraphId 
    ? `https://marcelreader.org/#${workId}/${paragraphId}`
    : `https://marcelreader.org/#${workId}`;
  const sectionPart = paragraphId ? `§ ${paragraphId}` : null;

  switch (format.toLowerCase()) {
    case 'chicago': {
      const locus = sectionPart ? `, ${sectionPart}` : '';
      return `${meta.chicagoAuthor}. ${meta.titleFr}. ${meta.city}: ${meta.publisher}, ${meta.year}. Digital bilingual edition, Gabriel Marcel Reader${locus}. ${url}.`;
    }
    case 'mla': {
      const locus = sectionPart ? `, ${sectionPart}` : '';
      return `${meta.mlaAuthor}. ${meta.titleFr}. ${meta.publisher}, ${meta.year}. Gabriel Marcel Reader, bilingual digital ed.${locus}, ${url}.`;
    }
    case 'apa': {
      const locus = sectionPart ? ` (${sectionPart})` : '';
      return `${meta.apaAuthor} (${meta.year}). ${meta.titleFr}. ${meta.publisher}. Gabriel Marcel Reader (Bilingual ed.)${locus}. ${url}`;
    }
    case 'bibtex': {
      const noteStr = sectionPart
        ? `Gabriel Marcel Reader, bilingual digital edition, ${sectionPart}`
        : `Gabriel Marcel Reader, bilingual digital edition`;
      const bibAuthor = meta.bibtexAuthor || "Marcel, Gabriel";
      return `@book{${meta.bibtexKey},\n  author    = {${bibAuthor}},\n  title     = {${meta.titleFr}},\n  year      = {${meta.year}},\n  publisher = {${meta.publisher}},\n  address   = {${meta.city}},\n  note      = {${noteStr}},\n  url       = {${url}}\n}`;
    }
    default:
      return `${meta.chicagoAuthor}. ${meta.titleFr} (${meta.year}).`;
  }
}

function generateWorkMarkdown(workId) {
  const work = (window.MARCEL_WORKS && window.MARCEL_WORKS[workId]) || (window.MARCEL_CORPUS && window.MARCEL_CORPUS[workId]);
  if (!work) return "";

  let md = `# ${work.titleEn || work.titleFr}\n`;
  md += `## ${work.titleFr}\n\n`;
  md += `**Author:** Gabriel Marcel (1889–1973)  \n`;
  md += `**Original Publication Year:** ${work.year}  \n`;
  md += `**Edition:** Gabriel Marcel Reader — Verbatim Bilingual Edition  \n`;
  md += `**Public Domain Status:** France & European Union (70 Years Post-Mortem)  \n\n`;
  md += `---\n\n`;

  const paragraphs = work.paragraphs || [];
  let currentSec = null;
  paragraphs.forEach(p => {
    if (p.sectionId && p.sectionId !== currentSec) {
      currentSec = p.sectionId;
      const secObj = (work.sections || []).find(s => s.id === currentSec);
      if (secObj) {
        md += `\n## ${secObj.titleEn || secObj.titleFr}\n`;
        if (secObj.titleFr && secObj.titleEn && secObj.titleFr !== secObj.titleEn) {
          md += `### *${secObj.titleFr}*\n\n`;
        } else {
          md += `\n`;
        }
      }
    }
    md += `#### § ${p.id}\n\n`;
    md += `**FR:** ${p.fr}\n\n`;
    md += `**EN:** ${p.en}\n\n`;
  });

  return md;
}

function openCitationModal(workId = null, paragraphId = null) {
  const activeWorkId = workId || window.currentWorkId || 'positions-mystere-ontologique';
  currentCitationWorkId = activeWorkId;
  currentCitationParagraphId = paragraphId || null;

  const modal = document.getElementById("citation-modal-backdrop");
  if (!modal) return;

  const targetWorkEl = document.getElementById("citation-target-work");
  const corpusWork = (window.MARCEL_CORPUS && window.MARCEL_CORPUS[activeWorkId]) || {};
  const meta = CITATION_METADATA[activeWorkId] || {
    titleFr: corpusWork.titleFr || activeWorkId,
    titleEn: corpusWork.titleEn || activeWorkId,
    year: corpusWork.year || "n.d."
  };

  const locusBadge = currentCitationParagraphId 
    ? `<span style="background:var(--accent); color:#ffffff; padding:0.15rem 0.4rem; border-radius:3px; font-weight:600; font-size:0.75rem; margin-left:0.4rem;">§ ${currentCitationParagraphId}</span>`
    : `<span style="background:var(--border-color); color:var(--text-muted); padding:0.15rem 0.4rem; border-radius:3px; font-size:0.75rem; margin-left:0.4rem;">Entire Work</span>`;

  if (targetWorkEl) {
    targetWorkEl.innerHTML = `
      <div><strong>${escapeHtmlSafe(meta.titleEn || meta.titleFr)}</strong> (${meta.year}) ${locusBadge}</div>
      <div class="citation-meta-sub">${escapeHtmlSafe(meta.titleFr)} • Gabriel Marcel (1889–1973)</div>
    `;
  }

  setCitationFormat(currentCitationFormat);
  modal.style.display = "flex";
  modal.classList.add("open");

  const copyBtn = document.getElementById("btn-copy-citation");
  if (copyBtn && typeof copyBtn.focus === 'function') copyBtn.focus();
}

function closeCitationModal() {
  const modal = document.getElementById("citation-modal-backdrop");
  if (!modal) return;
  modal.style.display = "none";
  modal.classList.remove("open");
}

function handleCitationBackdropClick(e) {
  if (e.target && e.target.id === "citation-modal-backdrop") {
    closeCitationModal();
  }
}

function setCitationFormat(format) {
  currentCitationFormat = format;
  const tabs = document.querySelectorAll(".citation-tab-btn");
  if (tabs && tabs.forEach) {
    tabs.forEach(tab => {
      if (tab.getAttribute("data-fmt") === format) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  }

  const outputBox = document.getElementById("citation-output-box");
  if (outputBox && currentCitationWorkId) {
    outputBox.textContent = generateCitation(currentCitationWorkId, currentCitationParagraphId, format);
  }
}

function copyCitation() {
  const outputBox = document.getElementById("citation-output-box");
  if (!outputBox) return;
  const text = outputBox.textContent;
  if (!text) return;

  if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("Citation copied to clipboard!");
    }).catch(() => {
      fallbackCopyText(text);
    });
  } else {
    fallbackCopyText(text);
  }
}

function fallbackCopyText(text) {
  try {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast("Citation copied to clipboard!");
  } catch (err) {
    showToast("Could not copy citation.");
  }
}

function downloadBibTeX() {
  if (!currentCitationWorkId) return;
  const bibtex = generateCitation(currentCitationWorkId, currentCitationParagraphId, 'bibtex');
  downloadBlob(bibtex, `marcel-${currentCitationWorkId}.bib`, 'text/plain;charset=utf-8');
  showToast("BibTeX (.bib) file downloaded!");
}

function downloadMarkdown() {
  if (!currentCitationWorkId) return;
  // If work payload is not loaded into window.MARCEL_WORKS yet, trigger script load
  if (!window.MARCEL_WORKS || !window.MARCEL_WORKS[currentCitationWorkId]) {
    loadWorkScript(currentCitationWorkId, (loaded) => {
      const md = generateWorkMarkdown(currentCitationWorkId);
      if (!md) {
        showToast("Work text preparing...");
        return;
      }
      downloadBlob(md, `marcel-${currentCitationWorkId}.md`, 'text/markdown;charset=utf-8');
      showToast("Bilingual Markdown (.md) exported!");
    });
    return;
  }
  const md = generateWorkMarkdown(currentCitationWorkId);
  if (!md) {
    showToast("Work text preparing...");
    return;
  }
  downloadBlob(md, `marcel-${currentCitationWorkId}.md`, 'text/markdown;charset=utf-8');
  showToast("Bilingual Markdown (.md) exported!");
}

function downloadBlob(content, filename, mimeType) {
  if (typeof Blob === "undefined" || typeof URL === "undefined") return;
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
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
window.renderConceptualKnowledgeGraph = renderConceptualKnowledgeGraph;
window.filterConceptGraph = filterConceptGraph;
window.selectConcept = selectConcept;
window.closeConceptDetail = closeConceptDetail;
window.renderIntellectualTimeline = renderIntellectualTimeline;

// Citation & Export Hub bindings
window.generateCitation = generateCitation;
window.generateWorkMarkdown = generateWorkMarkdown;
window.openCitationModal = openCitationModal;
window.closeCitationModal = closeCitationModal;
window.handleCitationBackdropClick = handleCitationBackdropClick;
window.setCitationFormat = setCitationFormat;
window.copyCitation = copyCitation;
window.downloadBibTeX = downloadBibTeX;
window.downloadMarkdown = downloadMarkdown;



