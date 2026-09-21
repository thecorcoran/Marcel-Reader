/**
 * Gabriel Marcel Reader — Application Controller & Dynamic Lazy Loader
 */
let currentWorkId = "positions-mystere-ontologique";

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    const h = window.location.hash.substring(1);
    if (window.MARCEL_CORPUS && window.MARCEL_CORPUS[h]) currentWorkId = h;
  }

  populateWorkDropdown();
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

function populateWorkDropdown() {
  const select = document.getElementById("work-select");
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
  const work = window.MARCEL_CORPUS[workId];
  if (!work) return;

  document.getElementById("work-select").value = workId;
  document.getElementById("work-title-fr").textContent = work.titleFr;
  document.getElementById("work-title-en").textContent = work.titleEn || "";
  document.getElementById("work-details").textContent = `${work.category || "Corpus Entry"} • Published ${work.year} • France / EU Public Domain`;

  const compIndicator = document.getElementById("companion-indicator");
  if (work.companionSlug && window.MARCEL_CORPUS[work.companionSlug]) {
    const comp = window.MARCEL_CORPUS[work.companionSlug];
    compIndicator.innerHTML = `🎭 <span class="companion-tag" onclick="switchWork('${comp.id}')">Paired Companion: <strong>${comp.titleEn || comp.titleFr}</strong> &rarr;</span>`;
  } else {
    compIndicator.innerHTML = `📜 ${work.category || "Corpus Entry"}`;
  }

  // 1. If paragraphs are already cached in memory, render immediately
  if (work.paragraphs && work.paragraphs.length > 0) {
    renderBlocks(work);
    return;
  }

  // 2. If work has a text file, lazy-load it dynamically
  if (work.hasText) {
    document.getElementById("blocks-fr").innerHTML = `<div style="padding:4rem 1rem; color:var(--text-muted); text-align:center; font-family:var(--font-sans);">Loading French text...</div>`;
    document.getElementById("blocks-en").innerHTML = `<div style="padding:4rem 1rem; color:var(--text-muted); text-align:center; font-family:var(--font-sans);">Loading translation...</div>`;

    const script = document.createElement("script");
    script.src = `data/works/${workId}.js`;
    script.onload = () => {
      if (work.paragraphs && work.paragraphs.length > 0) {
        renderBlocks(work);
      } else {
        renderIngestionNotice(work);
      }
    };
    script.onerror = () => {
      renderIngestionNotice(work);
    };
    document.head.appendChild(script);
  } else {
    renderIngestionNotice(work);
  }
}

function renderIngestionNotice(work) {
  const notice = `
    <div style="padding:3.5rem 1.5rem; background:var(--bg-surface); border:1px solid var(--border-color); border-radius:8px; text-align:center; max-width:650px; margin:2rem auto; font-family:var(--font-sans);">
      <div style="font-size:2rem; margin-bottom:0.5rem;">📖</div>
      <h4 style="font-size:1.15rem; color:var(--accent); margin-bottom:0.75rem;">Text Scheduled for Ingestion</h4>
      <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.6; margin-bottom:1.25rem;">
        <strong>${escapeHtml(work.titleEn || work.titleFr)}</strong> (${work.year}) is cataloged in the master index. Its French public domain scan is currently queued for OCR segmentation and Marcelian translation alignment.
      </p>
      <span style="font-size:0.78rem; background:#f4efe9; color:#6b635b; padding:0.35rem 0.9rem; border-radius:999px; border:1px solid #ded6c8; font-weight:500;">
        Pipeline Status: Scheduled Ingestion
      </span>
    </div>
  `;
  document.getElementById("blocks-fr").innerHTML = notice;
  document.getElementById("blocks-en").innerHTML = notice;
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
