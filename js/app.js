/**
 * Gabriel Marcel Reader — Application Controller & Routing
 */
let currentWorkId = "positions-mystere-ontologique";

function initApp() {
  if (window.location.hash) {
    const h = window.location.hash.substring(1);
    if (window.MARCEL_CORPUS && window.MARCEL_CORPUS[h]) currentWorkId = h;
  }

  populateWorkDropdown();
  if (typeof window.initNotes === "function") window.initNotes();
  renderGlossaryDrawer();
  loadWork(currentWorkId);

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

// Ensure execution whether DOM is still loading or already parsed
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
        <option value="${w.id}" ${w.id === currentWorkId ? 'selected' : ''}>
          ${w.titleEn \vert{}\vert{} w.titleFr} (${w.year})
        </option>
      `).join("")}
    </optgroup>
  `).join("");
}

function switchWork(workId) {
  currentWorkId = workId;
  window.location.hash = workId;
  loadWork(workId);
}

function loadWork(workId) {
  if (!window.MARCEL_CORPUS) return;
  const work = window.MARCEL_CORPUS[workId];
  if (!work) return;

  const select = document.getElementById("work-select");
  if (select) select.value = workId;

  const titleFr = document.getElementById("work-title-fr");
  const titleEn = document.getElementById("work-title-en");
  const details = document.getElementById("work-details");

  if (titleFr) titleFr.textContent = work.titleFr;
  if (titleEn) titleEn.textContent = work.titleEn || "";
  if (details) details.textContent = `${work.category || "Corpus Entry"} • Published ${work.year} • France / EU Public Domain`;

  const compIndicator = document.getElementById("companion-indicator");
  if (compIndicator) {
    if (work.companionSlug && window.MARCEL_CORPUS[work.companionSlug]) {
      const comp = window.MARCEL_CORPUS[work.companionSlug];
      compIndicator.innerHTML = `🎭 <span class="companion-tag" onclick="switchWork('${comp.id}')">Paired Companion: <strong>${comp.titleEn || comp.titleFr}</strong> &rarr;</span>`;
    } else {
      compIndicator.innerHTML = `📜 ${work.category || "Corpus Entry"}`;
    }
  }

  if (typeof window.renderBlocks === "function") {
    window.renderBlocks(work);
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
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

// Global window exposures
window.switchWork = switchWork;
window.loadWork = loadWork;
window.toggleGlossary = toggleGlossary;
window.showGlossaryTerm = showGlossaryTerm;
window.closeDrawers = closeDrawers;
window.showToast = showToast;
