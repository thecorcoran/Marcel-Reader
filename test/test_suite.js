/**
 * Gabriel Marcel Reader — Production Verification & Automated Test Suite
 * Tests full unabridged editions, modular chunking, section navigation, PWA, accessibility, and search.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    process.exitCode = 1;
  }
}

console.log('====================================================');
console.log('🧪 RUNNING MARCEL READER AUTOMATED TEST SUITE');
console.log('====================================================\n');

// ----------------------------------------------------
// Test Group 1: Syntax & File Integrity
// ----------------------------------------------------
console.log('1. Checking Syntax & File Integrity:');
const coreFiles = [
  'js/app.js',
  'js/reader.js',
  'js/search.js',
  'js/notes.js',
  'data/corpus.js',
  'data/glossary.js',
  'sw.js'
];

const tier1WorkFiles = [
  'data/works/positions-mystere-ontologique.js',
  'data/works/le-monde-casse.js',
  'data/works/mystere-de-letre-1.js',
  'data/works/mystere-de-letre-2.js',
  'data/works/etre-et-avoir.js'
];

coreFiles.concat(tier1WorkFiles).forEach((file) => {
  const fullPath = path.join(root, file);
  assert(fs.existsSync(fullPath), `File exists: ${file}`);
  try {
    execSync(`node -c "${fullPath}"`, { stdio: 'pipe' });
    assert(true, `Syntax valid: ${file}`);
  } catch (e) {
    assert(false, `Syntax error in ${file}: ${e.message}`);
  }
});

assert(!fs.existsSync(path.join(root, 'data/catalog.js')), 'No orphaned data/catalog.js');
assert(fs.existsSync(path.join(root, 'data/works')), 'data/works directory exists for unabridged storage');

// ----------------------------------------------------
// Test Group 2: PWA Manifest & Service Worker
// ----------------------------------------------------
console.log('\n2. Checking PWA Manifest & Service Worker:');
const manifestPath = path.join(root, 'manifest.json');
assert(fs.existsSync(manifestPath), 'manifest.json exists');
let manifest = null;
try {
  manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  assert(manifest.name === 'Gabriel Marcel Reader', 'Manifest name is correct');
  assert(manifest.display === 'standalone', 'Manifest display is standalone');
  assert(Array.isArray(manifest.icons) && manifest.icons.length >= 2, 'Manifest contains PWA icons');
} catch (e) {
  assert(false, `manifest.json is valid JSON: ${e.message}`);
}

const swPath = path.join(root, 'sw.js');
const swContent = fs.readFileSync(swPath, 'utf8');
assert(swContent.includes('marcel-reader-v2'), 'Service Worker defines cache version v2');
assert(swContent.includes('positions-mystere-ontologique.js'), 'Service Worker precaches Tier 1 work files');

// ----------------------------------------------------
// Test Group 3: HTML Structure & Chapter Navigation
// ----------------------------------------------------
console.log('\n3. Checking HTML Structure & Chapter Navigation:');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert(html.includes('<link rel="manifest" href="manifest.json">'), 'HTML links manifest.json');
assert(html.includes('<meta name="theme-color"'), 'HTML defines theme-color meta tag');
assert(html.includes('id="reader-blocks"'), 'HTML contains row-based reader-blocks container');
assert(html.includes('id="section-nav"'), 'HTML contains section-nav chapter bar');
assert(html.includes('id="section-pills"'), 'HTML contains section-pills container');
assert(html.includes('id="glossary-popover"'), 'HTML contains glossary-popover element');
assert(html.includes('id="theme-select"'), 'HTML contains theme selector');
assert(html.includes('role="dialog"'), 'HTML contains accessible modal dialog roles');
assert(html.includes('aria-modal="true"'), 'HTML defines aria-modal attributes');
assert(!html.endsWith('scr\n') && !html.endsWith('scr'), 'HTML does not have stray characters at EOF');

// ----------------------------------------------------
// Test Group 4: Unabridged Corpus Integrity
// ----------------------------------------------------
console.log('\n4. Verifying Unabridged Corpus & Tier 1 Works:');

// Load environment mocks
const elements = {};
function getEl(id) {
  if (!elements[id]) {
    elements[id] = {
      id,
      innerHTML: '',
      textContent: '',
      value: '',
      style: {},
      classList: {
        _classes: new Set(),
        add: function(c) { this._classes.add(c); },
        remove: function(c) { this._classes.delete(c); },
        contains: function(c) { return this._classes.has(c); }
      },
      setAttribute: function(k, v) { this[k] = v; },
      getAttribute: function(k) { return this[k] || ''; },
      querySelectorAll: function() { return []; },
      addEventListener: function() {},
      scrollIntoView: function() {}
    };
  }
  return elements[id];
}

const docElement = {
  attributes: {},
  styleProps: {},
  setAttribute: function(k, v) { this.attributes[k] = v; },
  getAttribute: function(k) { return this.attributes[k]; },
  style: {
    setProperty: function(k, v) { docElement.styleProps[k] = v; }
  }
};

global.window = global;
global.window.location = { hash: '', protocol: 'http:' };
global.window.innerWidth = 1280;
global.window.innerHeight = 800;
global.window.scrollY = 0;
global.document = {
  readyState: 'complete',
  documentElement: docElement,
  addEventListener: () => {},
  getElementById: getEl,
  querySelectorAll: () => []
};
global.localStorage = {
  store: {},
  getItem: function(k) { return this.store[k] || null; },
  setItem: function(k, v) { this.store[k] = String(v); }
};

// Require core modules
require(path.join(root, 'data/glossary.js'));
require(path.join(root, 'data/corpus.js'));

// Require Tier 1 works
const ontMystery = require(path.join(root, 'data/works/positions-mystere-ontologique.js'));
const brokenWorld = require(path.join(root, 'data/works/le-monde-casse.js'));
const mysteryBeing1 = require(path.join(root, 'data/works/mystere-de-letre-1.js'));
const mysteryBeing2 = require(path.join(root, 'data/works/mystere-de-letre-2.js'));
const beingHaving = require(path.join(root, 'data/works/etre-et-avoir.js'));

const tier1List = [ontMystery, brokenWorld, mysteryBeing1, mysteryBeing2, beingHaving];

assert(ontMystery.unabridged === true, `${ontMystery.titleEn}: Marked as Verified Verbatim Unabridged`);
assert(ontMystery.paragraphs.length === 105, `${ontMystery.titleEn}: Contains complete 105 verbatim paragraphs`);

const queuedList = [brokenWorld, mysteryBeing1, mysteryBeing2, beingHaving];
queuedList.forEach(w => {
  assert(w.unabridged === false, `${w.titleEn}: Honestly marked unabridged=false (queued for full verbatim ingestion)`);
  assert(Boolean(w.statusBadge), `${w.titleEn}: Has statusBadge indicating queued status`);
});

tier1List.forEach(w => {
  assert(Array.isArray(w.sections) && w.sections.length > 0, `${w.titleEn}: Defines sections (${w.sections.length} sections)`);
  assert(Array.isArray(w.paragraphs) && w.paragraphs.length > 0, `${w.titleEn}: Contains paragraphs (${w.paragraphs.length} paras)`);
  
  // Verify strict paragraph symmetry & non-empty content
  let frEnBalanced = true;
  w.paragraphs.forEach(p => {
    if (!p.fr || !p.en || p.fr.trim().length === 0 || p.en.trim().length === 0) {
      frEnBalanced = false;
    }
  });
  assert(frEnBalanced, `${w.titleEn}: All paragraphs have non-empty bilingual French and English text`);
});

// ----------------------------------------------------
// Test Group 5: Runtime Controllers & Section Navigation
// ----------------------------------------------------
console.log('\n5. Testing Runtime Controllers & Section Navigation:');
require(path.join(root, 'js/reader.js'));
require(path.join(root, 'js/notes.js'));
require(path.join(root, 'js/search.js'));
require(path.join(root, 'js/app.js'));

// Test initial load of Ontological Mystery
window.loadWork('positions-mystere-ontologique');
const initialRows = (getEl('reader-blocks').innerHTML.match(/class="paragraph-pair-row"/g) || []).length;
assert(initialRows === 105, `Rendered full 105 verified verbatim paragraphs for Ontological Mystery (actual: ${initialRows})`);
assert(getEl('section-nav').style.display === 'flex', 'Section navigation bar is visible for multi-section work');
assert(getEl('section-pills').innerHTML.includes('Section I') || getEl('section-pills').innerHTML.includes('I. The Broken World') || getEl('section-pills').innerHTML.includes('Le monde cassé'), 'Section pills rendered in navigation bar');

// Test Section Filtering
window.selectSection('sec-1');
const sec1Rows = (getEl('reader-blocks').innerHTML.match(/class="paragraph-pair-row"/g) || []).length;
assert(sec1Rows === 20, `Section I filtered to exactly 20 paragraphs (actual: ${sec1Rows})`);

window.selectSection('sec-2');
const sec2Rows = (getEl('reader-blocks').innerHTML.match(/class="paragraph-pair-row"/g) || []).length;
assert(sec2Rows === 20, `Section II filtered to exactly 20 paragraphs (actual: ${sec2Rows})`);

window.selectSection('sec-5');
const sec5Rows = (getEl('reader-blocks').innerHTML.match(/class="paragraph-pair-row"/g) || []).length;
assert(sec5Rows === 25, `Section V filtered to exactly 25 paragraphs (actual: ${sec5Rows})`);

window.selectSection('all');
const allRowsRestored = (getEl('reader-blocks').innerHTML.match(/class="paragraph-pair-row"/g) || []).length;
assert(allRowsRestored === 105, `All 105 paragraphs restored upon selecting "All Sections"`);

// Test Switch to Le Monde cassé
window.switchWork('le-monde-casse');
const brokenWorldRows = (getEl('reader-blocks').innerHTML.match(/class="paragraph-pair-row"/g) || []).length;
assert(brokenWorldRows === 24, `Rendered full 24 dramatic paragraphs for Le Monde cassé (actual: ${brokenWorldRows})`);

// Reading Mode Switching
window.setMode('en');
assert(getEl('reader-grid').className.includes('mode-en'), 'Switched to English mode');
window.setMode('fr');
assert(getEl('reader-grid').className.includes('mode-fr'), 'Switched to French mode');
window.setMode('split');
assert(getEl('reader-grid').className.includes('mode-split'), 'Switched to Split parallel mode');

// Themes Controller
window.setTheme('dark');
assert(docElement.getAttribute('data-theme') === 'dark', 'Dark theme applied to documentElement');
assert(global.localStorage.getItem('marcel_reader_theme') === 'dark', 'Dark theme saved to localStorage');
window.setTheme('sepia');
assert(docElement.getAttribute('data-theme') === 'sepia', 'Sepia theme applied to documentElement');
window.setTheme('light');
assert(docElement.getAttribute('data-theme') === 'light', 'Light theme restored');

// Font Scaling Controller
window.adjustFontSize(1); // Normal -> Large
assert(docElement.styleProps['--reader-font-size'] === '1.25rem', 'Font size scaled to Large (1.25rem)');
window.adjustFontSize(-1); // Large -> Normal
assert(docElement.styleProps['--reader-font-size'] === '1.12rem', 'Font size scaled back to Normal (1.12rem)');

// Multi-Tier Search across Unabridged Passages
getEl('global-search-input').value = 'Broken';
window.executeGlobalSearch();
const searchHtml = getEl('search-results-list').innerHTML;
assert(searchHtml.includes('Works &amp; Plays') || searchHtml.includes('Works & Plays'), 'Search surfaces Works category');
assert(searchHtml.includes('Philosophical Glossary'), 'Search surfaces Glossary category');
assert(searchHtml.includes('Bilingual Passages'), 'Search surfaces Passages category');

// Accent-Insensitive Highlighting
getEl('global-search-input').value = 'mystere';
window.executeGlobalSearch();
const mystereHtml = getEl('search-results-list').innerHTML;
assert(mystereHtml.includes('<mark>mystère</mark>') || mystereHtml.includes('<mark>Mystère</mark>'), 'Accent-insensitive regex highlights "mystère"');

// Inline Glossary Popover Lifecycle
const fakeAnchor = {
  getBoundingClientRect: () => ({ left: 200, right: 300, top: 400, bottom: 420, width: 100, height: 20 })
};
window.showGlossaryPopover('disponibilite', fakeAnchor);
const popoverEl = getEl('glossary-popover');
assert(popoverEl.classList.contains('visible'), 'Glossary popover becomes visible');
assert(popoverEl.innerHTML.includes('Disponibilité'), 'Popover renders French term');
assert(popoverEl.innerHTML.includes('Spiritual Availability'), 'Popover renders English translation');
window.hideGlossaryPopover();
assert(!popoverEl.classList.contains('visible'), 'Glossary popover dismissed on hide');

console.log('\n====================================================');
console.log(`🎉 TEST RUN COMPLETE: ${passedTests}/${totalTests} TESTS PASSED`);
console.log('====================================================\n');

if (passedTests !== totalTests) {
  process.exit(1);
}
