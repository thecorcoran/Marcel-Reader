/**
 * Gabriel Marcel Reader — Instapaper-Style Highlights & Notes Engine
 */
window.highlights = [];
let selectedTagFilter = null;
let activeModalHlId = null;
let pendingSelectionData = null;
let currentModalTags = [];

function initNotes() {
  try {
    const stored = localStorage.getItem("marcel_reader_highlights");
    if (stored) window.highlights = JSON.parse(stored);
  } catch(e) {}
  updateNotesCount();

  document.addEventListener("mouseup", handleTextSelection);
  document.addEventListener("touchend", handleTextSelection);
}

function saveHighlights() {
  try {
    localStorage.setItem("marcel_reader_highlights", JSON.stringify(window.highlights));
  } catch(e) {}
  updateNotesCount();
}

function updateNotesCount() {
  const badge = document.getElementById("notes-badge");
  if (badge) badge.textContent = (window.highlights || []).length;
}

function handleTextSelection(e) {
  const selToolbar = document.getElementById("selection-toolbar");
  if (!selToolbar) return;

  if (e.target.closest("#selection-toolbar") || e.target.closest(".modal-backdrop") || e.target.closest(".drawer")) {
    return;
  }

  setTimeout(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.toString().trim()) {
      selToolbar.style.display = "none";
      pendingSelectionData = null;
      return;
    }

    const selectedText = selection.toString().trim();
    if (selectedText.length < 2) {
      selToolbar.style.display = "none";
      return;
    }

    const anchorNode = selection.anchorNode;
    const blockEl = anchorNode ? anchorNode.parentElement.closest(".block") : null;
    if (!blockEl) {
      selToolbar.style.display = "none";
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    pendingSelectionData = {
      workId: blockEl.getAttribute("data-work-id"),
      blockId: blockEl.getAttribute("data-block-id"),
      lang: blockEl.getAttribute("data-lang"),
      text: selectedText
    };

    selToolbar.style.top = `${rect.top + window.scrollY}px`;
    selToolbar.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
    selToolbar.style.display = "flex";
  }, 20);
}

function applyHighlightFromSelection(openNoteImmediately) {
  if (!pendingSelectionData) return;

  const newHl = {
    id: "hl_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    workId: pendingSelectionData.workId,
    blockId: pendingSelectionData.blockId,
    lang: pendingSelectionData.lang,
    text: pendingSelectionData.text,
    note: "",
    tags: [],
    createdAt: new Date().toISOString()
  };

  window.highlights.push(newHl);
  saveHighlights();
  if (window.MARCEL_CORPUS && window.MARCEL_CORPUS[currentWorkId]) {
    renderBlocks(window.MARCEL_CORPUS[currentWorkId]);
  }

  const selToolbar = document.getElementById("selection-toolbar");
  if (selToolbar) selToolbar.style.display = "none";
  window.getSelection().removeAllRanges();

  if (openNoteImmediately) {
    openExistingNoteModal(newHl.id);
  } else {
    showToast("Passage Highlighted");
  }
}

function openExistingNoteModal(hlId) {
  const hl = (window.highlights || []).find(h => h.id === hlId);
  if (!hl) return;

  activeModalHlId = hlId;
  currentModalTags = [...(hl.tags || [])];

  const modal = document.getElementById("note-modal-backdrop");
  document.getElementById("modal-quote").textContent = `"${hl.text}"`;
  document.getElementById("modal-note-text").value = hl.note || "";
  renderModalTags();

  if (modal) modal.classList.add("open");
  document.getElementById("modal-note-text").focus();
}

function renderModalTags() {
  const container = document.getElementById("modal-tag-chips");
  if (!container) return;
  container.innerHTML = currentModalTags.map(tag => `
    <span class="tag-chip">
      #${tag}
      <span class="tag-chip-remove" onclick="removeModalTag('${tag}')">×</span>
    </span>
  `).join("");
}

function handleTagInput(e) {
  if (e.key === "Enter" || e.key === ",") {
    e.preventDefault();
    const input = document.getElementById("modal-tag-input");
    let val = input.value.trim().replace(/^#/, "").toLowerCase();
    if (val && !currentModalTags.includes(val)) {
      currentModalTags.push(val);
      renderModalTags();
    }
    input.value = "";
  }
}

function removeModalTag(tag) {
  currentModalTags = currentModalTags.filter(t => t !== tag);
  renderModalTags();
}

function saveCurrentNote() {
  const hl = (window.highlights || []).find(h => h.id === activeModalHlId);
  if (!hl) return;

  hl.note = document.getElementById("modal-note-text").value.trim();
  hl.tags = [...currentModalTags];

  saveHighlights();
  if (window.MARCEL_CORPUS && window.MARCEL_CORPUS[currentWorkId]) {
    renderBlocks(window.MARCEL_CORPUS[currentWorkId]);
  }
  closeNoteModal();
  showToast("Note Saved");

  if (document.getElementById("notebook-drawer").classList.contains("open")) {
    renderNotebook();
  }
}

function deleteCurrentHighlight() {
  if (!confirm("Remove this highlight and note?")) return;
  window.highlights = (window.highlights || []).filter(h => h.id !== activeModalHlId);
  saveHighlights();
  if (window.MARCEL_CORPUS && window.MARCEL_CORPUS[currentWorkId]) {
    renderBlocks(window.MARCEL_CORPUS[currentWorkId]);
  }
  closeNoteModal();
  showToast("Highlight Removed");

  if (document.getElementById("notebook-drawer").classList.contains("open")) {
    renderNotebook();
  }
}

function closeNoteModal() {
  const modal = document.getElementById("note-modal-backdrop");
  if (modal) modal.classList.remove("open");
  activeModalHlId = null;
}

function toggleNotebook() {
  const drawer = document.getElementById("notebook-drawer");
  if (!drawer) return;
  const wasOpen = drawer.classList.contains("open");
  closeDrawers();
  if (!wasOpen) {
    drawer.classList.add("open");
    renderNotebook();
  }
}

function renderNotebook() {
  const searchInput = document.getElementById("notebook-search-input");
  const searchVal = (searchInput ? searchInput.value : "").toLowerCase();
  const container = document.getElementById("notebook-cards-container");
  const tagListEl = document.getElementById("notebook-tags-filter");
  if (!container || !tagListEl) return;

  const allTags = new Set();
  (window.highlights || []).forEach(h => (h.tags || []).forEach(t => allTags.add(t)));

  tagListEl.innerHTML = `
    <span class="tag-filter-pill ${selectedTagFilter === null ? 'active' : ''}" onclick="setNotebookTagFilter(null)">All</span>
    ${Array.from(allTags).map(t => `
      <span class="tag-filter-pill ${selectedTagFilter === t ? 'active' : ''}" onclick="setNotebookTagFilter('${t}')">#${t}</span>
    `).join("")}
  `;

  const filtered = (window.highlights || []).filter(h => {
    const matchesTag = selectedTagFilter === null || (h.tags && h.tags.includes(selectedTagFilter));
    const matchesSearch = !searchVal || 
      h.text.toLowerCase().includes(searchVal) || 
      (h.note && h.note.toLowerCase().includes(searchVal)) ||
      (h.tags && h.tags.some(t => t.toLowerCase().includes(searchVal)));
    return matchesTag && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="padding: 2.5rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.95rem;">
        ${(window.highlights || []).length === 0 ? "No highlights or notes yet.<br><br>Select any passage in the text to create your first highlight." : "No notes matching current filters."}
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(h => {
    const work = (window.MARCEL_CORPUS && window.MARCEL_CORPUS[h.workId]) ? window.MARCEL_CORPUS[h.workId] : { titleEn: h.workId, titleFr: h.workId };
    const num = h.blockId.replace("p-", "");
    return `
      <div class="note-card">
        <div class="note-card-meta">
          <span>${work.titleEn || work.titleFr} (#${num})</span>
          <span style="text-transform:uppercase; font-size:0.7rem; background:#eae5db; padding:1px 4px; border-radius:3px; color:#5a5044;">${h.lang}</span>
        </div>
        <div class="note-card-quote">"${escapeHtmlSafe(h.text)}"</div>
        ${h.note ? `<div class="note-card-text">${escapeHtmlSafe(h.note)}</div>` : ''}
        ${h.tags && h.tags.length > 0 ? `
          <div class="note-card-tags">
            ${h.tags.map(t => `<span class="tag-chip" style="font-size:0.72rem; padding:1px 5px;">#${t}</span>`).join("")}
          </div>
        ` : ''}
        <div class="note-card-actions">
          <button class="btn" style="font-size:0.75rem; padding:0.25rem 0.6rem;" onclick="jumpToPassage('${h.workId}', '${h.blockId}', '${h.lang}')">Jump &rarr;</button>
          <button class="btn" style="font-size:0.75rem; padding:0.25rem 0.6rem;" onclick="openExistingNoteModal('${h.id}')">Edit</button>
        </div>
      </div>
    `;
  }).join("");
}

function setNotebookTagFilter(tag) {
  selectedTagFilter = tag;
  renderNotebook();
}

function jumpToPassage(workId, blockId, lang) {
  if (window.currentWorkId !== workId) {
    window.switchWork(workId);
  }
  window.closeDrawers();

  setTimeout(() => {
    const target = document.getElementById(`${lang}-${blockId}`) || document.getElementById(`en-${blockId}`) || document.getElementById(`fr-${blockId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.classList.add("flash-target");
      setTimeout(() => target.classList.remove("flash-target"), 2600);
    }
  }, 150);
}

function exportNotesMarkdown() {
  if ((window.highlights || []).length === 0) {
    alert("No highlights or notes to export.");
    return;
  }

  let md = `# Gabriel Marcel — Reader Highlights & Notes\n\n`;
  md += `*Exported on ${new Date().toLocaleDateString()} from Gabriel Marcel Digital Corpus*\n\n---\n\n`;

  (window.highlights || []).forEach((h, idx) => {
    const work = (window.MARCEL_CORPUS && window.MARCEL_CORPUS[h.workId]) ? window.MARCEL_CORPUS[h.workId] : { titleEn: h.workId, titleFr: h.workId };
    md += `### ${idx + 1}. ${work.titleEn || work.titleFr} (${h.blockId}, ${h.lang.toUpperCase()})\n\n`;
    md += `> "${h.text}"\n\n`;
    if (h.note) md += `**Note:** ${h.note}\n\n`;
    if (h.tags && h.tags.length > 0) md += `**Tags:** ${h.tags.map(t => `#${t}`).join(" ")}\n\n`;
    md += `---\n\n`;
  });

  const blob = new Blob([md], { type: "text/markdown;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `marcel-notes-${Date.now()}.md`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Exported to Markdown");
}

// Global window exposures
window.initNotes = initNotes;
window.applyHighlightFromSelection = applyHighlightFromSelection;
window.openExistingNoteModal = openExistingNoteModal;
window.saveCurrentNote = saveCurrentNote;
window.deleteCurrentHighlight = deleteCurrentHighlight;
window.closeNoteModal = closeNoteModal;
window.toggleNotebook = toggleNotebook;
window.renderNotebook = renderNotebook;
window.setNotebookTagFilter = setNotebookTagFilter;
window.jumpToPassage = jumpToPassage;
window.exportNotesMarkdown = exportNotesMarkdown;
window.handleTagInput = handleTagInput;
window.removeModalTag = removeModalTag;
