/**
 * Gabriel Marcel Reader — Bilingual Multi-Tier Full-Text Search Engine
 */
let currentSearchFilter = "all";
let searchDebounceTimer = null;

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

function createAccentInsensitiveRegex(query) {
  const accentMap = {
    'a': '[aàâäáãåAÀÂÄÁÃÅ]',
    'e': '[eéèêëEÉÈÊË]',
    'i': '[iîïíIÎÏÍ]',
    'o': '[oôöóõOÔÖÓÕ]',
    'u': '[uùûüúUÙÛÜÚ]',
    'c': '[cçCÇ]',
    'n': '[nñNÑ]'
  };
  const escaped = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const pattern = escaped.split('').map(char => {
    const lower = char.toLowerCase();
    return accentMap[lower] || char;
  }).join('');
  return new RegExp(`(${pattern})`, 'gi');
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

function handleSearchInput() {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    executeGlobalSearch();
  }, 150);
}

function executeGlobalSearch() {
  const input = document.getElementById("global-search-input");
  const query = (input ? input.value : "").trim();
  const resultsContainer = document.getElementById("search-results-list");
  if (!resultsContainer) return;

  if (!query || query.length < 2) {
    resultsContainer.innerHTML = `
      <div style="padding:2.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        Type at least 2 characters to search across Marcel's works, philosophical glossary, and aligned texts.
      </div>
    `;
    return;
  }

  const normQuery = normalizeQuery(query);
  const matchedWorks = [];
  const matchedGlossary = [];
  const matchedPassages = [];

  // Tier 1: Search Works & Catalog
  if (window.MARCEL_CORPUS) {
    Object.values(window.MARCEL_CORPUS).forEach(work => {
      const matchEn = normalizeQuery(work.titleEn).includes(normQuery);
      const matchFr = normalizeQuery(work.titleFr).includes(normQuery);
      const matchCat = normalizeQuery(work.category).includes(normQuery);
      const matchYear = String(work.year).includes(normQuery);

      if (currentSearchFilter === "all" || (currentSearchFilter === "en" && matchEn) || (currentSearchFilter === "fr" && matchFr) || matchCat || matchYear) {
        if (matchEn || matchFr || matchCat || matchYear) {
          matchedWorks.push({
            id: work.id,
            titleEn: work.titleEn || work.titleFr,
            titleFr: work.titleFr,
            year: work.year,
            category: work.category,
            hasText: !!(work.paragraphs && work.paragraphs.length > 0)
          });
        }
      }
    });
  }

  // Tier 2: Search Philosophical Glossary
  if (window.MARCEL_GLOSSARY) {
    Object.entries(window.MARCEL_GLOSSARY).forEach(([key, item]) => {
      const matchFr = normalizeQuery(item.fr).includes(normQuery);
      const matchEn = normalizeQuery(item.en).includes(normQuery);
      const matchDef = normalizeQuery(item.def).includes(normQuery);

      if (currentSearchFilter === "all" || (currentSearchFilter === "fr" && matchFr) || (currentSearchFilter === "en" && (matchEn || matchDef))) {
        if (matchFr || matchEn || matchDef) {
          matchedGlossary.push({
            key,
            fr: item.fr,
            en: item.en,
            def: item.def
          });
        }
      }
    });
  }

  // Tier 3: Search Bilingual Passages
  const searchableWorks = [];
  if (window.MARCEL_CORPUS) {
    Object.values(window.MARCEL_CORPUS).forEach(w => {
      if (w && w.paragraphs && w.paragraphs.length > 0) searchableWorks.push(w);
    });
  }
  if (window.MARCEL_WORKS) {
    Object.values(window.MARCEL_WORKS).forEach(w => {
      if (!searchableWorks.some(item => item.id === w.id)) {
        searchableWorks.push(w);
      }
    });
  }

  searchableWorks.forEach(work => {
    if (!work || !work.paragraphs) return;

    work.paragraphs.forEach(p => {
      if (currentSearchFilter === "all" || currentSearchFilter === "fr") {
        const normFr = normalizeQuery(p.fr);
        if (normFr.includes(normQuery)) {
          matchedPassages.push({
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
          matchedPassages.push({
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

  const totalMatches = matchedWorks.length + matchedGlossary.length + matchedPassages.length;
  if (totalMatches === 0) {
    resultsContainer.innerHTML = `
      <div style="padding:2.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        No matches found for "<strong>${escapeSearchHtml(query)}</strong>".
      </div>
    `;
    return;
  }

  let html = "";

  // Render Works Section
  if (matchedWorks.length > 0) {
    html += `
      <div class="search-category-header">
        📚 Works & Plays (${matchedWorks.length})
      </div>
    `;
    html += matchedWorks.map(w => `
      <div class="search-result-item" onclick="selectWorkResult('${w.id}')">
        <div class="search-result-header">
          <span>${escapeSearchHtml(w.titleEn)} <span style="font-weight:400; font-style:italic;">(${w.titleFr})</span></span>
          <span class="search-badge">${w.year}</span>
        </div>
        <div style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">
          ${escapeSearchHtml(w.category || "Corpus Entry")} ${w.hasText ? '• <strong style="color:var(--accent);">Text Ready</strong>' : '• Scheduled Ingestion'}
        </div>
      </div>
    `).join("");
  }

  // Render Glossary Section
  if (matchedGlossary.length > 0) {
    html += `
      <div class="search-category-header">
        📖 Philosophical Glossary (${matchedGlossary.length})
      </div>
    `;
    html += matchedGlossary.map(g => `
      <div class="search-result-item" onclick="selectGlossaryResult('${g.key}')">
        <div class="search-result-header">
          <span>${escapeSearchHtml(g.fr)} &mdash; <span style="font-weight:500;">${escapeSearchHtml(g.en)}</span></span>
          <span class="search-badge" style="background:var(--accent-soft); color:var(--accent);">GLOSSARY</span>
        </div>
        <div style="font-size:0.84rem; color:var(--text-main); margin-top:3px; line-height:1.5;">
          ${escapeSearchHtml(g.def)}
        </div>
      </div>
    `).join("");
  }

  // Render Passages Section
  if (matchedPassages.length > 0) {
    html += `
      <div class="search-category-header">
        📜 Bilingual Passages (${matchedPassages.length})
      </div>
    `;
    html += matchedPassages.map(r => {
      const highlightedSnippet = highlightSnippet(r.rawText, r.matchQuery);
      return `
        <div class="search-result-item" onclick="selectSearchResult('${r.workId}', '${r.blockId}', '${r.lang}')">
          <div class="search-result-header">
            <span>${escapeSearchHtml(r.workTitle)} (${r.year}) • #${r.blockId.replace("p-", "")}</span>
            <span class="search-badge">${r.lang.toUpperCase()}</span>
          </div>
          <div class="search-result-snippet">
            "${highlightedSnippet}"
          </div>
        </div>
      `;
    }).join("");
  }

  resultsContainer.innerHTML = html;
}

function selectSearchResult(workId, blockId, lang) {
  closeSearchModal();
  if (typeof window.jumpToPassage === "function") {
    window.jumpToPassage(workId, blockId, lang);
  }
}

function selectWorkResult(workId) {
  closeSearchModal();
  if (typeof window.switchWork === "function") {
    window.switchWork(workId);
  }
}

function selectGlossaryResult(termKey) {
  closeSearchModal();
  if (typeof window.showGlossaryTerm === "function") {
    window.showGlossaryTerm(termKey);
  }
}

function highlightSnippet(text, query) {
  const regex = createAccentInsensitiveRegex(query);
  return escapeSearchHtml(text).replace(regex, '<mark>$1</mark>');
}

// Global window exposures
window.openSearchModal = openSearchModal;
window.closeSearchModal = closeSearchModal;
window.handleSearchBackdropClick = handleSearchBackdropClick;
window.setSearchFilter = setSearchFilter;
window.handleSearchInput = handleSearchInput;
window.executeGlobalSearch = executeGlobalSearch;
window.selectSearchResult = selectSearchResult;
window.selectWorkResult = selectWorkResult;
window.selectGlossaryResult = selectGlossaryResult;
