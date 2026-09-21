/**
 * Gabriel Marcel Reader — Bilingual Full-Text Search Engine
 */
let currentSearchFilter = "all";

function normalizeQuery(str) {
  if (!str) return "";
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function stripTags(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "");
}

function escapeSearchHtml(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function openSearchModal() {
  const modal = document.getElementById("search-modal-backdrop");
  if (!modal) return;
  modal.classList.add("open");
  const input = document.getElementById("global-search-input");
  if (input) {
    input.focus();
    input.select();
  }
  executeGlobalSearch();
}

function closeSearchModal() {
  const modal = document.getElementById("search-modal-backdrop");
  if (modal) modal.classList.remove("open");
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
  const input = document.getElementById("global-search-input");
  const query = (input ? input.value : "").trim();
  const resultsContainer = document.getElementById("search-results-list");
  if (!resultsContainer) return;

  if (!query || query.length < 2) {
    resultsContainer.innerHTML = `
      <div style="padding:2.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        Type at least 2 characters to search across all works in French and English.
      </div>
    `;
    return;
  }

  const normQuery = normalizeQuery(query);
  const results = [];

  if (window.MARCEL_CORPUS) {
    Object.values(window.MARCEL_CORPUS).forEach(work => {
      if (!work || !work.paragraphs) return;

      work.paragraphs.forEach(p => {
        if (currentSearchFilter === "all" || currentSearchFilter === "fr") {
          const normFr = normalizeQuery(p.fr);
          if (normFr.includes(normQuery)) {
            results.push({
              workId: work.id,
              workTitle: work.titleEn || work.titleFr,
              year: work.year,
              blockId: p.id,
              lang: "fr",
              rawText: stripTags(p.fr),
              matchQuery: query
            });
          }
        }

        if (currentSearchFilter === "all" || currentSearchFilter === "en") {
          const normEn = normalizeQuery(p.en);
          if (normEn.includes(normQuery)) {
            results.push({
              workId: work.id,
              workTitle: work.titleEn || work.titleFr,
              year: work.year,
              blockId: p.id,
              lang: "en",
              rawText: stripTags(p.en),
              matchQuery: query
            });
          }
        }
      });
    });
  }

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div style="padding:2.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        No matches found for "<strong>${escapeSearchHtml(query)}</strong>".
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
  if (typeof window.jumpToPassage === "function") {
    window.jumpToPassage(workId, blockId, lang);
  }
}

function highlightSnippet(text, query) {
  const safeQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${safeQuery})`, 'gi');
  return escapeSearchHtml(text).replace(regex, '<mark>$1</mark>');
}

// Global window exposures
window.openSearchModal = openSearchModal;
window.closeSearchModal = closeSearchModal;
window.handleSearchBackdropClick = handleSearchBackdropClick;
window.setSearchFilter = setSearchFilter;
window.executeGlobalSearch = executeGlobalSearch;
window.selectSearchResult = selectSearchResult;
