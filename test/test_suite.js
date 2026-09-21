/**
 * Gabriel Marcel Reader — Production Verification & Automated Test Suite
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
// Test Group 1: Syntax & Code Integrity
// ----------------------------------------------------
console.log('1. Checking Syntax & File Integrity:');
const jsFiles = [
  'js/app.js',
  'js/reader.js',
  'js/search.js',
  'js/notes.js',
  'data/corpus.js',
  'data/glossary.js',
  'sw.js'
];

jsFiles.forEach((file) => {
  const fullPath = path.join(root, file);
  assert(fs.existsSync(fullPath), `File exists: ${file}`);
  try {
    execSync(`node -c "${fullPath}"`, { stdio: 'pipe' });
    assert(true, `Syntax valid: ${file}`);
  } catch (e) {
    assert(false, `Syntax error in ${file}: ${e.message}`);
  }
});

// Check that no orphaned files remain
assert(!fs.existsSync(path.join(root, 'data/catalog.js')), 'No orphaned data/catalog.js');
assert(!fs.existsSync(path.join(root, 'data/works')), 'No orphaned data/works directory');

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
assert(swContent.includes('marcel-reader-v1'), 'Service Worker defines cache version');
assert(swContent.includes('PRECACHE_ASSETS'), 'Service Worker defines precache assets');

// ----------------------------------------------------
// Test Group 3: HTML Structure & Accessibility
// ----------------------------------------------------
console.log('\n3. Checking HTML Structure & Accessibility:');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert(html.includes('<link rel="manifest" href="manifest.json">'), 'HTML links manifest.json');
assert(html.includes('<meta name="theme-color"'), 'HTML defines theme-color meta tag');
assert(html.includes('id="reader-blocks"'), 'HTML contains row-based reader-blocks container');
assert(html.includes('id="glossary-popover"'), 'HTML contains glossary-popover element');
assert(html.includes('id="theme-select"'), 'HTML contains theme selector');
assert(html.includes('role="dialog"'), 'HTML contains accessible modal dialog roles');
assert(html.includes('aria-modal="true"'), 'HTML defines aria-modal attributes');
assert(!html.endsWith('scr\n') && !html.endsWith('scr'), 'HTML does not have stray characters at EOF');

// ----------------------------------------------------
// Test Group 4: Runtime DOM Simulation & Controller Tests
// ----------------------------------------------------
console.log('\n4. Simulating Reader Runtime & Controllers:');

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
      addEventListener: function() {}
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

require(path.join(root, 'data/glossary.js'));
require(path.join(root, 'data/corpus.js'));
require(path.join(root, 'js/reader.js'));
require(path.join(root, 'js/notes.js'));
require(path.join(root, 'js/search.js'));
require(path.join(root, 'js/app.js'));

// Master Corpus Integrity
const corpusWorks = Object.values(window.MARCEL_CORPUS);
assert(corpusWorks.length === 42, `Master corpus contains 42 works (actual: ${corpusWorks.length})`);
const worksWithText = corpusWorks.filter((w) => w.paragraphs && w.paragraphs.length > 0);
assert(worksWithText.length === 10, `Corpus contains 10 digitized texts (actual: ${worksWithText.length})`);

// Row-based Subgrid Alignment
const rowsCount = (getEl('reader-blocks').innerHTML.match(/class="paragraph-pair-row"/g) || []).length;
assert(rowsCount === 8, `Rendered 8 parallel paragraph rows for Ontological Mystery (actual: ${rowsCount})`);

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

// Multi-Tier Search
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

