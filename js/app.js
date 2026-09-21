let currentWorkId = "positions-mystere-ontologique";

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    const h = window.location.hash.substring(1);
    if (window.MARCEL_CORPUS[h]) currentWorkId = h;
  }

  const select = document.getElementById("work-select");
  select.innerHTML = Object.values(window.MARCEL_CORPUS).map(w => 
    `<option value="${w.id}" ${w.id === currentWorkId ? 'selected' : ''}>${w.titleFr} (${w.year})</option>`
  ).join("");

  initNotes();
  renderGlossaryDrawer();
  loadWork(currentWorkId);

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === 'Escape') {
      closeSearchModal();
      closeNoteModal();
      closeDrawers();
    }
  });
});

function switchWork(workId) {
  currentWorkId = workId;
  window.location.hash = workId;
  loadWork(workId);
}

function loadWork(workId) {
  const work = window.MARCEL_CORPUS[workId];
  if (!work) return;

  document.getElementById("work-select").value = workId;
  document.getElementById("work-title-fr").textContent = work.titleFr;
  document.getElementById("work-title-en").textContent = work.titleEn;
  document.getElementById("work-details").textContent = `${work.genre} • Published ${work.year} • France / EU Public Domain`;

  const compIndicator = document.getElementById("companion-indicator");
  if (work.companionSlug && window.MARCEL_CORPUS[work.companionSlug]) {
    const comp = window.MARCEL_CORPUS[work.companionSlug];
    compIndicator.innerHTML = `🎭 <span class="companion-tag" onclick="switchWork('${comp.id}')">Paired Companion: <strong>${comp.titleFr}</strong> &rarr;</span>`;
  } else {
    compIndicator.innerHTML = `📜 Standalone Corpus Entry`;
  }

  renderBlocks(work);
}

function renderGlossaryDrawer() {
  const container = document.getElementById("glossary-cards-container");
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
  const wasOpen = drawer.classList.contains("open");
  closeDrawers();
  if (!wasOpen) drawer.classList.add("open");
}

function showGlossaryTerm(termKey) {
  closeDrawers();
  const drawer = document.getElementById("glossary-drawer");
  drawer.classList.add("open");
  const card = document.getElementById(`card-${termKey}`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.style.outline = "2px solid var(--accent)";
    setTimeout(() => { card.style.outline = "none"; }, 2500);
  }
}

function closeDrawers() {
  document.getElementById("notebook-drawer").classList.remove("open");
  document.getElementById("glossary-drawer").classList.remove("open");
  document.getElementById("selection-toolbar").style.display = "none";
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function normalizeStr(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function stripHtml(html) {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}
