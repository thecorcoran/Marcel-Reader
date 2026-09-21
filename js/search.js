let currentSearchFilter = "all";

function openSearchModal() {
  document.getElementById("search-modal-backdrop").classList.add("open");
  const input = document.getElementById("global-search-input");
  input.focus();
  input.select();
  executeGlobalSearch();
}

function closeSearchModal() {
  document.getElementById("search-modal-backdrop").classList.remove("open");
}

function handleSearchBackdropClick(e) {
  if (e.target.id === "search-modal-backdrop") closeSearchModal();
}

function setSearchFilter(filter) {
  currentSearchFilter = filter;
  ["all", "en", "fr"].forEach(f => {
    const btn = document.getElementById(`search-filter-${f}`);
    if (btn) {
      if (f === filter) btn.classList.add("active");
      else btn.classList.remove("active");
    }
  });
  executeGlobalSearch();
}

function executeGlobalSearch() {
  const query = document.getElementById("global-search-input").value.trim();
  const resultsContainer = document.getElementById("search-results-list");

  if (!query || query.length < 2) {
    resultsContainer.innerHTML = `
      <div style="padding:2.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        Type at least 2 characters to search across all works in French and English.
      </div>
    `;
    return;
  }

  const normQuery = normalizeStr(query);
  const results = [];

  Object.values(window.MARCEL_CORPUS).forEach(work => {
    if (!work.paragraphs) return; // Skip works not yet loaded in memory
    work.paragraphs.forEach(p => {
      // (rest of search matching logic unchanged)"fr") {
        const normFr = normalizeStr(p.fr);
        if (normFr.includes(normQuery)) {
          results.push({
            workId: work.id,
            workTitle: work.titleFr,
            year: work.year,
            blockId: p.id,
            lang: "fr",
            rawText: stripHtml(p.fr),
            matchQuery: query
          });
        }
      }

      if (currentSearchFilter === "all" || currentSearchFilter === "en") {
        const normEn = normalizeStr(p.en);
        if (normEn.includes(normQuery)) {
          results.push({
            workId: work.id,
            workTitle: work.titleEn || work.titleFr,
            year: work.year,
            blockId: p.id,
            lang: "en",
            rawText: stripHtml(p.en),
            matchQuery: query
          });
        }
      }
    });
  });

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div style="padding:2.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        No matches found for "<strong>${escapeHtml(query)}</strong>".
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = results.map(r => {
    const highlightedSnippet = highlightSnippet(r.rawText, r.matchQuery);
    return `
      <div class="search-result-item" onclick="selectSearchResult('${r.workId}', '${r.blockId}', '${r.lang}')">
        <div class="search-result-header">
          <span>${r.workTitle} (${r.year}) • #${r.blockId.replace("p-", "")}</span>
          <span style="background:#eae5db; color:#5a5044; padding:1px 5px; border-radius:3px; font-size:0.7rem; text-transform:uppercase;">${r.lang}</span>
        </div>
        <div class="search-result-snippet">
          "${highlightedSnippet}"
        </div>
      </div>
    `;
  }).join("");
}

function selectSearchResult(workId, blockId, lang) {
  closeSearchModal();
  jumpToPassage(workId, blockId, lang);
}

function highlightSnippet(text, query) {
  const safeQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${safeQuery})`, 'gi');
  return escapeHtml(text).replace(regex, '<mark>$1</mark>');
}
