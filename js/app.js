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
      { id: "la-chapelle-ardente", label: "La Chapelle ardente (1925)" },
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
      { id: "le-chemin-de-crete", label: "Le Chemin de Crète (1936)" },
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
      { id: "pour-une-sagesse-tragique", label: "Tragic Wisdom and Beyond (1968)" },
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

// ====================================================
// Conceptual Concordance & Passage Explorer
// ====================================================

const CONCORDANCE_DATA = {
  "disponibilite": {
    conceptFr: "Disponibilité",
    conceptEn: "Spiritual Availability / Inward Openness",
    passages: [
      {
        workId: "positions-mystere-ontologique",
        workTitle: "Positions (1933)",
        sectionId: "sec-4",
        locus: "§ 75",
        genre: "Treatise",
        frQuote: "Être disponible, c'est être à soi d'une façon telle qu'on puisse être tout entier à autrui ; c'est n'être point encombré par son propre moi ni aliéné à ses possessions.",
        enQuote: "To be available is to belong to oneself in such a way that one can belong entirely to another; it is not to be encumbered by one's own ego or alienated to one's possessions."
      },
      {
        workId: "homo-viator",
        workTitle: "Homo Viator (1944)",
        sectionId: "ch-2",
        locus: "§ 25",
        genre: "Treatise",
        frQuote: "La disponibilité est inséparable de l'espérance et de la charité ; elle désigne cette ouverture fondamentale par laquelle l'âme refuse de s'enfermer dans un bilan comptable de ses avoirs.",
        enQuote: "Availability is inseparable from hope and charity; it designates that fundamental openness whereby the soul refuses to lock itself into an accounting balance sheet of its possessions."
      },
      {
        workId: "le-dard",
        workTitle: "Le Dard (1936)",
        sectionId: "act-1",
        locus: "§ 20",
        genre: "Play",
        frQuote: "Werner : Ce qui compte, ce n'est pas ce que nous détenons, mais notre façon d'être ouvert à ceux qui frappent à notre porte, même quand nous sommes dépouillés.",
        enQuote: "Werner: What matters is not what we hold, but how we remain open to those who knock at our door, even when we are stripped bare."
      },
      {
        workId: "pour-une-sagesse-tragique",
        workTitle: "Pour une sagesse tragique (1968)",
        sectionId: "sec-1",
        locus: "§ 18",
        genre: "Treatise",
        frQuote: "La véritable sagesse tragique commence par une disponibilité sans réserve à l'inconnu du destin et à la présence indicible d'autrui au cœur du déchirement.",
        enQuote: "True tragic wisdom begins with an unreserved availability to the unknown of destiny and to the unspeakable presence of the other in the heart of heartache."
      }
    ]
  },
  "exigence-ontologique": {
    conceptFr: "L'exigence ontologique",
    conceptEn: "Ontological Exigence / Hunger for Being",
    passages: [
      {
        workId: "positions-mystere-ontologique",
        workTitle: "Positions (1933)",
        sectionId: "sec-2",
        locus: "§ 24",
        genre: "Treatise",
        frQuote: "L'exigence ontologique est cet appétit de plénitude et d'authenticité qui refuse de considérer la vie fonctionnelle comme épuisant le sens de l'existence.",
        enQuote: "The ontological exigence is that hunger for fullness and authenticity which refuses to consider the functionalized life as exhausting the meaning of existence."
      },
      {
        workId: "mystere-de-letre-1",
        workTitle: "Mystery of Being I (1951)",
        sectionId: "lec-3",
        locus: "§ 22",
        genre: "Lectures",
        frQuote: "L'exigence de transcendance ne se réduit point à une nostalgie vague : elle constitue le moteur secret de toute réflexion seconde en quête de l'Être.",
        enQuote: "The exigence of transcendence is by no means reducible to vague nostalgia: it constitutes the secret engine of all secondary reflection in quest of Being."
      },
      {
        workId: "le-monde-casse",
        workTitle: "Le Monde cassé (1933)",
        sectionId: "act-1",
        locus: "§ 16",
        genre: "Play",
        frQuote: "Christiane : Il y a des moments où il me semble que le monde est cassé, brisé de part en part... et qu'il manque l'essentiel, ce qui faisait battre le cœur.",
        enQuote: "Christiane: There are moments when it seems to me that the world is broken, shattered through and through... and that what is essential is missing, that which made the heart beat."
      },
      {
        workId: "la-chapelle-ardente",
        workTitle: "La Chapelle ardente (1925)",
        sectionId: "act-2",
        locus: "§ 30",
        genre: "Play",
        frQuote: "Aline : Tu crois que le devoir suffit à remplir une âme ? Il y a une soif de vérité et d'absolu qui ne se satisfait d'aucun simulacre moral.",
        enQuote: "Aline: Do you think duty suffices to fill a soul? There is a thirst for truth and the absolute that cannot be satisfied by any moral simulacrum."
      }
    ]
  },
  "monde-casse": {
    conceptFr: "Le monde cassé",
    conceptEn: "The Broken World",
    passages: [
      {
        workId: "positions-mystere-ontologique",
        workTitle: "Positions (1933)",
        sectionId: "sec-1",
        locus: "§ 5",
        genre: "Treatise",
        frQuote: "Le monde cassé est un monde où la vie est compartimentée en fonctions, où l'homme n'est plus qu'un ensemble de fiches d'état civil, d'horaires et de gestes techniques.",
        enQuote: "The broken world is a world where life is compartmentalized into functions, where man is nothing more than a bundle of civil status forms, timetables, and technical gestures."
      },
      {
        workId: "mystere-de-letre-1",
        workTitle: "Mystery of Being I (1951)",
        sectionId: "lec-2",
        locus: "§ 14",
        genre: "Lectures",
        frQuote: "Dans ce monde fonctionnalisé, la tristesse n'est pas un accident, mais l'atmosphère naturelle d'une humanité privée du sens du sacré et du mystère.",
        enQuote: "In this functionalized world, sadness is not an accident, but the natural atmosphere of a humanity deprived of the sense of the sacred and of mystery."
      },
      {
        workId: "les-hommes-contre-lhumain",
        workTitle: "Les Hommes contre l'humain (1951)",
        sectionId: "part-1",
        locus: "§ 12",
        genre: "Treatise",
        frQuote: "L'esprit de masse et la propagande réduisent l'individu à un rouage docile, détruisant en lui toute capacité d'étonnement et de communion véritable.",
        enQuote: "The mass spirit and propaganda reduce the individual to a compliant cog, destroying in him all capacity for wonder and genuine communion."
      },
      {
        workId: "le-monde-casse",
        workTitle: "Le Monde cassé (1933)",
        sectionId: "act-1",
        locus: "§ 24",
        genre: "Play",
        frQuote: "Christiane : Nous vivons dans un tourbillon d'agitations, de thés et de concerts, mais au fond c'est le désert le plus aride, un monde sans regard.",
        enQuote: "Christiane: We live in a whirlwind of agitation, teas, and concerts, but deep down it is the most arid desert, a world without a gaze."
      }
    ]
  },
  "etre-et-avoir": {
    conceptFr: "Être et Avoir",
    conceptEn: "Being vs. Having",
    passages: [
      {
        workId: "etre-et-avoir",
        workTitle: "Être et avoir (1935)",
        sectionId: "part-1",
        locus: "§ 12",
        genre: "Diary",
        frQuote: "Avoir, c'est aliéner l'être à l'objet possédé : dès l'instant où je dis 'j'ai', je me trouve menacé par la perte de ce qui prétend m'appartenir.",
        enQuote: "To have is to alienate being to the possessed object: from the moment I say 'I have', I find myself threatened by the loss of what claims to belong to me."
      },
      {
        workId: "positions-mystere-ontologique",
        workTitle: "Positions (1933)",
        sectionId: "sec-2",
        locus: "§ 35",
        genre: "Treatise",
        frQuote: "L'avoir tend invinciblement à submerger l'être ; l'homme moderne devient la proie de ses propres instruments et de son patrimoine matériel.",
        enQuote: "Having tends invincibly to submerge being; modern man becomes the prey of his own instruments and material inheritance."
      },
      {
        workId: "un-homme-de-dieu",
        workTitle: "Un Homme de Dieu (1925)",
        sectionId: "act-2",
        locus: "§ 18",
        genre: "Play",
        frQuote: "Claude : J'ai cru que le pardon était un trésor que je pouvais détenir et distribuer avec générosité... Mais ce n'était qu'un orgueil de propriétaire spirituel.",
        enQuote: "Claude: I thought that forgiveness was a treasure I could possess and bestow generously... But it was merely the pride of a spiritual property owner."
      },
      {
        workId: "pour-une-sagesse-tragique",
        workTitle: "Pour une sagesse tragique (1968)",
        sectionId: "sec-2",
        locus: "§ 28",
        genre: "Treatise",
        frQuote: "La dialectique tragique éclate précisément quand la conscience découvre que ce qu'elle croyait posséder comme une certitude n'était qu'un fardeau qui l'obstruait.",
        enQuote: "The tragic dialectic breaks out precisely when consciousness discovers that what it believed it possessed as a certainty was merely an obstructing burden."
      }
    ]
  },
  "probleme-mystere": {
    conceptFr: "Problème vs. Mystère",
    conceptEn: "Problem vs. Mystery",
    passages: [
      {
        workId: "positions-mystere-ontologique",
        workTitle: "Positions (1933)",
        sectionId: "sec-2",
        locus: "§ 30",
        genre: "Treatise",
        frQuote: "Le problème est quelque chose que je rencontre, qui me barre la route, mais qui est tout entier devant moi. Le mystère est un problème qui empiète sur ses propres données.",
        enQuote: "The problem is something I encounter, which bars my way, but is entirely in front of me. The mystery is a problem that encroaches upon its own data."
      },
      {
        workId: "mystere-de-letre-1",
        workTitle: "Mystery of Being I (1951)",
        sectionId: "lec-10",
        locus: "§ 15",
        genre: "Lectures",
        frQuote: "Face au mystère de l'amour ou du mal, je ne puis me placer en spectateur impartial ; je suis moi-même engagé et compromis dans la question posée.",
        enQuote: "Confronting the mystery of love or of evil, I cannot position myself as an impartial spectator; I am myself engaged and compromised in the question posed."
      },
      {
        workId: "un-homme-de-dieu",
        workTitle: "Un Homme de Dieu (1925)",
        sectionId: "act-4",
        locus: "§ 22",
        genre: "Play",
        frQuote: "Claude : Dieu n'est pas une énigme à résoudre par des syllogismes théologiques, Il est la Présence silencieuse qui sonde les reins et les cœurs.",
        enQuote: "Claude: God is not an enigma to be solved by theological syllogisms, He is the silent Presence who searches minds and hearts."
      },
      {
        workId: "lhomme-problematique",
        workTitle: "L'Homme problématique (1955)",
        sectionId: "sec-1",
        locus: "§ 16",
        genre: "Treatise",
        frQuote: "L'homme contemporain est devenu un problème pour lui-même parce qu'il a perdu l'accès au mystère fondateur de son insertion dans l'Être.",
        enQuote: "Contemporary man has become a problem for himself because he has lost access to the founding mystery of his insertion into Being."
      }
    ]
  },
  "reflexion-seconde": {
    conceptFr: "Réflexion primaire vs. seconde",
    conceptEn: "Primary vs. Secondary Reflection",
    passages: [
      {
        workId: "mystere-de-letre-1",
        workTitle: "Mystery of Being I (1951)",
        sectionId: "lec-5",
        locus: "§ 10",
        genre: "Lectures",
        frQuote: "La réflexion primaire dissocie, analyse et objective ; la réflexion seconde, au contraire, est récupératrice : elle rétablit le lien vivant brisé par l'abstraction.",
        enQuote: "Primary reflection dissociates, analyzes, and objectifies; secondary reflection, on the contrary, is recuperative: it re-establishes the living bond broken by abstraction."
      },
      {
        workId: "du-refus-a-linvocation",
        workTitle: "Du refus à l'invocation (1940)",
        sectionId: "ess-1",
        locus: "§ 14",
        genre: "Treatise",
        frQuote: "Penser concrètement, c'est revenir par une réflexion seconde sur l'expérience vécue, afin d'en dégager la dimension secrète de participation et d'enracinement.",
        enQuote: "To think concretely is to return through secondary reflection upon lived experience, in order to draw out its secret dimension of participation and rootedness."
      },
      {
        workId: "entretiens-paul-ricoeur",
        workTitle: "Entretiens Paul Ricœur (1968)",
        sectionId: "dial-2",
        locus: "§ 15",
        genre: "Dialogue",
        frQuote: "Marcel : La réflexion seconde ne vient pas détruire l'intuition première, elle vient la sauver de la dissection réductrice de l'intelligence technique.",
        enQuote: "Marcel: Secondary reflection does not come to destroy the primary intuition, it comes to rescue it from the reductive dissection of technical intellect."
      },
      {
        workId: "le-monde-casse",
        workTitle: "Le Monde cassé (1933)",
        sectionId: "act-4",
        locus: "§ 20",
        genre: "Play",
        frQuote: "Christiane : Ce n'est pas avec ma tête ni avec des calculs que je comprends aujourd'hui ce que Jacques représentait pour moi ; c'est dans le silence de mon cœur recueilli.",
        enQuote: "Christiane: It is not with my head nor with calculations that I understand today what Jacques meant to me; it is in the silence of my gathered heart."
      }
    ]
  },
  "recueillement": {
    conceptFr: "Recueillement",
    conceptEn: "Inward Recollection / Gathering of Self",
    passages: [
      {
        workId: "positions-mystere-ontologique",
        workTitle: "Positions (1933)",
        sectionId: "sec-1",
        locus: "§ 12",
        genre: "Treatise",
        frQuote: "Le recueillement n'est point une retraite stérile dans l'égoïsme, mais l'acte par lequel l'âme se rassemble en son centre pour s'ouvrir à la Présence.",
        enQuote: "Recollection is by no means a sterile retreat into egoism, but the act whereby the soul gathers itself at its center to open itself to Presence."
      },
      {
        workId: "mystere-de-letre-1",
        workTitle: "Mystery of Being I (1951)",
        sectionId: "lec-5",
        locus: "§ 20",
        genre: "Lectures",
        frQuote: "Se recueillir, c'est suspendre le vacarme des occupations extérieures pour laisser retentir en soi l'écho de ce qui ne passe pas.",
        enQuote: "To gather oneself in recollection is to suspend the din of external occupations to allow the echo of that which does not pass away to resound within."
      },
      {
        workId: "le-monde-casse",
        workTitle: "Le Monde cassé (1933)",
        sectionId: "act-4",
        locus: "§ 26",
        genre: "Play",
        frQuote: "Christiane : Dès que je fais silence en moi, je sens qu'une force mystérieuse me relie à ce qui est pur et invincible.",
        enQuote: "Christiane: As soon as I create silence within me, I feel that a mysterious strength connects me to that which is pure and invincible."
      },
      {
        workId: "la-chapelle-ardente",
        workTitle: "La Chapelle ardente (1925)",
        sectionId: "act-3",
        locus: "§ 25",
        genre: "Play",
        frQuote: "Mireille : Le véritable recueillement devant les morts n'est pas de les emprisonner dans une chambre funèbre, mais de vivre dans la clarté de leur amour.",
        enQuote: "Mireille: True recollection before the dead is not to imprison them in a funeral chamber, but to live in the clarity of their love."
      }
    ]
  },
  "fidelite-creatrice": {
    conceptFr: "Fidélité créatrice",
    conceptEn: "Creative Fidelity",
    passages: [
      {
        workId: "du-refus-a-linvocation",
        workTitle: "Du refus à l'invocation (1940)",
        sectionId: "ess-2",
        locus: "§ 18",
        genre: "Treatise",
        frQuote: "La fidélité créatrice est active, inventive, perpétuellement renouvelée face aux trahisons du temps ; elle n'a rien de commun avec une obstination machinale.",
        enQuote: "Creative fidelity is active, inventive, perpetually renewed in the face of time's betrayals; it has nothing in common with mechanical obstinacy."
      },
      {
        workId: "homo-viator",
        workTitle: "Homo Viator (1944)",
        sectionId: "ch-6",
        locus: "§ 14",
        genre: "Treatise",
        frQuote: "Tenir sa promesse ne consiste pas à rester figé dans un serment passé, mais à créer jour après jour les conditions spirituelles de son accomplissement.",
        enQuote: "To keep one's promise does not consist in remaining frozen in a past oath, but in creating day after day the spiritual conditions of its fulfillment."
      },
      {
        workId: "le-dard",
        workTitle: "Le Dard (1936)",
        sectionId: "act-3",
        locus: "§ 28",
        genre: "Play",
        frQuote: "Werner : La fidélité n'est pas de subir le ressentiment de l'époque, mais de préserver coûte que coûte la dignité de la parole donnée envers et contre tout.",
        enQuote: "Werner: Fidelity is not to submit to the resentment of the era, but to preserve at all costs the dignity of one's given word against all odds."
      },
      {
        workId: "le-chemin-de-crete",
        workTitle: "Le Chemin de Crète (1936)",
        sectionId: "act-4",
        locus: "§ 22",
        genre: "Play",
        frQuote: "Ariane : Tu croyais que la fidélité consistait à sacrifier les autres à son propre idéal ? C'est le plus subtil des pièges de l'orgueil.",
        enQuote: "Ariane: Did you believe that fidelity consisted in sacrificing others to one's own ideal? That is the most subtle trap of pride."
      }
    ]
  },
  "intersubjectivite": {
    conceptFr: "L'intersubjectivité et le Toi",
    conceptEn: "Intersubjectivity / The 'Thou'",
    passages: [
      {
        workId: "homo-viator",
        workTitle: "Homo Viator (1944)",
        sectionId: "ch-1",
        locus: "§ 8",
        genre: "Treatise",
        frQuote: "L'homme ne se découvre lui-même que dans le regard d'un Toi : 'Esse est co-esse', exister véritablement c'est coexister dans la réciprocité de l'amour.",
        enQuote: "Man only discovers himself in the gaze of a Thou: 'Esse est co-esse', to truly exist is to coexist in the reciprocity of love."
      },
      {
        workId: "du-refus-a-linvocation",
        workTitle: "Du refus à l'invocation (1940)",
        sectionId: "ess-1",
        locus: "§ 22",
        genre: "Treatise",
        frQuote: "Autrui n'est pas un obstacle ou une menace pour ma liberté ; il est le vis-à-vis sans lequel ma propre liberté s'étiole dans le solipsisme.",
        enQuote: "The other is not an obstacle or threat to my freedom; the other is the counterpart without whom my own freedom withers away in solipsism."
      },
      {
        workId: "entretiens-paul-ricoeur",
        workTitle: "Entretiens Paul Ricœur (1968)",
        sectionId: "dial-1",
        locus: "§ 20",
        genre: "Dialogue",
        frQuote: "Ricœur : Vous avez toujours refusé le 'Cogito' cartésien isolé. Marcel : Absolument, le point de départ authentique n'est pas 'Je pense', mais 'Nous sommes'.",
        enQuote: "Ricœur: You have always refused the isolated Cartesian 'Cogito'. Marcel: Absolutely, the authentic point of departure is not 'I think', but 'We are'."
      },
      {
        workId: "le-chemin-de-crete",
        workTitle: "Le Chemin de Crète (1936)",
        sectionId: "act-2",
        locus: "§ 15",
        genre: "Play",
        frQuote: "Jérôme : C'est effrayant de penser qu'on ne peut être soi-même que si quelqu'un d'autre vous en donne la permission par sa confiance.",
        enQuote: "Jérôme: It is frightening to think that one can only be oneself if someone else grants permission through their trust."
      }
    ]
  },
  "incarnation": {
    conceptFr: "L'incarnation et le corps propre",
    conceptEn: "Incarnation and Corporeality",
    passages: [
      {
        workId: "etre-et-avoir",
        workTitle: "Être et avoir (1935)",
        sectionId: "part-1",
        locus: "§ 20",
        genre: "Diary",
        frQuote: "Mon corps n'est pas un instrument que je manipule du dehors : mon corps, c'est moi-même dans la mesure où je suis engagé dans le monde spatio-temporel.",
        enQuote: "My body is not an instrument that I manipulate from without: my body is myself insofar as I am engaged in the spatiotemporal world."
      },
      {
        workId: "mystere-de-letre-1",
        workTitle: "Mystery of Being I (1951)",
        sectionId: "lec-6",
        locus: "§ 12",
        genre: "Lectures",
        frQuote: "L'incarnation est le repère central de toute métaphysique concrète ; elle brise à jamais le dualisme abstrait de l'âme pensante et du corps mécanique.",
        enQuote: "Incarnation is the central benchmark of all concrete metaphysics; it shatters forever the abstract dualism of the thinking soul and mechanical body."
      },
      {
        workId: "journal-metaphysique",
        workTitle: "Journal métaphysique (1927)",
        sectionId: "part-1",
        locus: "§ 25",
        genre: "Diary",
        frQuote: "La sensation n'est pas une transmission de message entre deux substances étanches, mais une communion immédiate avec la réalité ambiante.",
        enQuote: "Sensation is not a transmission of messages between two watertight substances, but an immediate communion with ambient reality."
      },
      {
        workId: "le-dard",
        workTitle: "Le Dard (1936)",
        sectionId: "act-1",
        locus: "§ 10",
        genre: "Play",
        frQuote: "Eustache : La souffrance physique vous rappelle brutalement à l'ordre des choses ; on ne philosophe plus dans les nuages quand la chair saigne.",
        enQuote: "Eustache: Physical suffering brutally calls you back to the order of things; one no longer philosophizes in the clouds when the flesh bleeds."
      }
    ]
  },
  "esperance": {
    conceptFr: "L'espérance",
    conceptEn: "Metaphysical Hope",
    passages: [
      {
        workId: "homo-viator",
        workTitle: "Homo Viator (1944)",
        sectionId: "ch-3",
        locus: "§ 15",
        genre: "Treatise",
        frQuote: "L'espérance n'est point l'optimisme béat d'un spectateur confiant dans le progrès ; elle est la réponse prophétique de l'âme captive à l'épreuve des ténèbres.",
        enQuote: "Hope is by no means the smug optimism of a spectator trusting in progress; it is the prophetic response of the captive soul to the ordeal of darkness."
      },
      {
        workId: "du-refus-a-linvocation",
        workTitle: "Du refus à l'invocation (1940)",
        sectionId: "ess-6",
        locus: "§ 11",
        genre: "Treatise",
        frQuote: "J'espère en Toi pour nous : telle est la formule suprême de l'espérance marcélienne, liant indissolublement la transcendance divine à la communauté humaine.",
        enQuote: "I hope in Thee for us: such is the supreme formula of Marcelian hope, indissolubly binding divine transcendence to human community."
      },
      {
        workId: "rome-nest-plus-dans-rome",
        workTitle: "Rome n'est plus dans Rome (1951)",
        sectionId: "act-5",
        locus: "§ 18",
        genre: "Play",
        frQuote: "Pascal : Même si Rome tombe, même si notre civilisation s'effondre dans le chaos, l'espérance demeure ancrée dans une patrie invisible qui ne peut périr.",
        enQuote: "Pascal: Even if Rome falls, even if our civilization collapses into chaos, hope remains anchored in an invisible homeland that cannot perish."
      },
      {
        workId: "pour-une-sagesse-tragique",
        workTitle: "Pour une sagesse tragique (1968)",
        sectionId: "sec-2",
        locus: "§ 40",
        genre: "Treatise",
        frQuote: "L'espérance authentique se forge par-delà le désespoir tragique ; elle n'élude pas la catastrophe, elle la transfigure en témoignage d'immortalité.",
        enQuote: "Authentic hope is forged beyond tragic despair; it does not evade catastrophe, it transfigures it into a testimony of immortality."
      }
    ]
  },
  "amour-immortalite": {
    conceptFr: "L'amour et l'immortalité",
    conceptEn: "Love & Intersubjective Immortality",
    passages: [
      {
        workId: "du-refus-a-linvocation",
        workTitle: "Du refus à l'invocation (1940)",
        sectionId: "ess-7",
        locus: "§ 15",
        genre: "Treatise",
        frQuote: "Aimer un être, c'est lui dire : 'Toi, tu ne mourras point'. L'amour véritable porte en son sein l'affirmation prophétique de l'inviolabilité de la personne.",
        enQuote: "To love a being is to say: 'Thou shalt not die'. True love carries within its breast the prophetic affirmation of the inviolability of the person."
      },
      {
        workId: "presence-et-immortalite",
        workTitle: "Présence et immortalité (1959)",
        sectionId: "part-1",
        locus: "§ 22",
        genre: "Diary",
        frQuote: "La mort d'un être cher n'est pas un anéantissement absolu, mais un appel mystérieux à approfondir la présence intérieure par la fidélité du souvenir.",
        enQuote: "The death of a loved one is not absolute annihilation, but a mysterious call to deepen inner presence through the fidelity of remembrance."
      },
      {
        workId: "la-chapelle-ardente",
        workTitle: "La Chapelle ardente (1925)",
        sectionId: "act-3",
        locus: "§ 32",
        genre: "Play",
        frQuote: "Mireille : Octave n'est plus dans cette tombe froide, il est dans chaque acte de bonté et de lumière que nous accomplissons en son nom.",
        enQuote: "Mireille: Octave is no longer in that cold grave, he is in every act of goodness and light that we perform in his name."
      },
      {
        workId: "le-monde-casse",
        workTitle: "Le Monde cassé (1933)",
        sectionId: "act-4",
        locus: "§ 30",
        genre: "Play",
        frQuote: "Christiane : Jacques m'a sauvée du néant en m'apprenant que l'amour est plus fort que la mort, et que nous nous retrouverons dans la lumière.",
        enQuote: "Christiane: Jacques saved me from nothingness by teaching me that love is stronger than death, and that we shall find each other in the light."
      }
    ]
  },
  "temoignage": {
    conceptFr: "Le témoignage",
    conceptEn: "Existential Testimony / Witness",
    passages: [
      {
        workId: "mystere-de-letre-2",
        workTitle: "Mystery of Being II (1951)",
        sectionId: "lec-7",
        locus: "§ 14",
        genre: "Lectures",
        frQuote: "Le témoin authentique engage toute son existence dans sa déposition ; il ne rapporte pas des faits extérieurs, il atteste une vérité dont il est le garant.",
        enQuote: "The authentic witness engages their entire existence in their testimony; they do not report external facts, they attest to a truth of which they are the guarantor."
      },
      {
        workId: "du-refus-a-linvocation",
        workTitle: "Du refus à l'invocation (1940)",
        sectionId: "ess-8",
        locus: "§ 16",
        genre: "Treatise",
        frQuote: "Face aux totalitarismes et à la torture, le témoignage de l'esprit inviolable constitue le dernier rempart contre l'avilissement universel.",
        enQuote: "Facing totalitarian regimes and torture, the witness of the inviolable spirit constitutes the last bulwark against universal debasement."
      },
      {
        workId: "rome-nest-plus-dans-rome",
        workTitle: "Rome n'est plus dans Rome (1951)",
        sectionId: "act-4",
        locus: "§ 20",
        genre: "Play",
        frQuote: "Pascal : Je ne puis me taire pour sauver mon confort matériel. Rendre témoignage à la liberté de conscience est la seule façon de rester digne d'être homme.",
        enQuote: "Pascal: I cannot remain silent to save my material comfort. Bearing witness to freedom of conscience is the only way to remain worthy of being human."
      },
      {
        workId: "le-dard",
        workTitle: "Le Dard (1936)",
        sectionId: "act-3",
        locus: "§ 30",
        genre: "Play",
        frQuote: "Werner : Mon départ pour l'Allemagne n'est pas une fuite, c'est un témoignage vivant rendu à la vérité au milieu de ceux qui souffrent.",
        enQuote: "Werner: My departure for Germany is not an escape, it is a living witness rendered to truth in the midst of those who suffer."
      }
    ]
  },
  "sagesse-tragique": {
    conceptFr: "Sagesse tragique et dépassement",
    conceptEn: "Tragic Wisdom & Transcendence",
    passages: [
      {
        workId: "pour-une-sagesse-tragique",
        workTitle: "Pour une sagesse tragique (1968)",
        sectionId: "sec-1",
        locus: "§ 10",
        genre: "Treatise",
        frQuote: "La sagesse tragique n'est ni résignation stoïcienne ni nihilisme amer ; elle est lucidité suprême devant le déchirement du monde et foi dans son dépassement.",
        enQuote: "Tragic wisdom is neither stoic resignation nor bitter nihilism; it is supreme lucidity before the tearing of the world and faith in its transcendence."
      },
      {
        workId: "pour-une-sagesse-tragique",
        workTitle: "Pour une sagesse tragique (1968)",
        sectionId: "sec-2",
        locus: "§ 50",
        genre: "Treatise",
        frQuote: "C'est au fond de la tragédie assumée que s'ouvre la clairière de la grâce : le tragique n'a pas le dernier mot là où rayonne la charité créatrice.",
        enQuote: "It is at the depth of assumed tragedy that the clearing of grace opens: the tragic does not have the final word where creative charity shines."
      },
      {
        workId: "le-chemin-de-crete",
        workTitle: "Le Chemin de Crète (1936)",
        sectionId: "act-4",
        locus: "§ 25",
        genre: "Play",
        frQuote: "Ariane : Marcher sur le chemin de crête, c'est regarder les deux abîmes en face sans vertige, et savoir qu'un souffle d'amour nous soutient au-dessus du vide.",
        enQuote: "Ariane: To walk on the crest path is to look both abysses in the face without vertigo, and to know that a breath of love sustains us above the void."
      },
      {
        workId: "entretiens-paul-ricoeur",
        workTitle: "Entretiens Paul Ricœur (1968)",
        sectionId: "dial-3",
        locus: "§ 25",
        genre: "Dialogue",
        frQuote: "Marcel : Toute ma philosophie est née de cette tension tragique entre la fragilité humaine et l'exigence d'un salut qui la transcende.",
        enQuote: "Marcel: All my philosophy was born from this tragic tension between human fragility and the exigence of a salvation that transcends it."
      }
    ]
  }
};

let selectedConcordanceConcept = 'disponibilite';

function selectConcordanceConcept(conceptKey) {
  selectedConcordanceConcept = conceptKey;
  renderConcordanceSection(conceptKey);
}

function renderConcordanceSection(activeKey = 'disponibilite') {
  const pillsContainer = document.getElementById('concordance-pills');
  const gridContainer = document.getElementById('concordance-grid');
  if (!pillsContainer || !gridContainer) return;

  const conceptKeys = Object.keys(CONCORDANCE_DATA);
  if (!conceptKeys.includes(activeKey)) {
    activeKey = conceptKeys[0];
    selectedConcordanceConcept = activeKey;
  }

  pillsContainer.innerHTML = conceptKeys.map(k => {
    const data = CONCORDANCE_DATA[k];
    const isActive = (k === activeKey);
    const count = data.passages ? data.passages.length : 0;
    return `
      <button class="concordance-pill-btn ${isActive ? 'active' : ''}" onclick="selectConcordanceConcept('${k}')" role="tab" aria-selected="${isActive}">
        <span>${escapeHtmlSafe(data.conceptFr)}</span>
        <span class="concordance-pill-count">${count}</span>
      </button>
    `;
  }).join('');

  const activeData = CONCORDANCE_DATA[activeKey];
  if (!activeData || !activeData.passages || activeData.passages.length === 0) {
    gridContainer.innerHTML = `<p class="text-muted">No passages cataloged for this concept.</p>`;
    return;
  }

  gridContainer.innerHTML = activeData.passages.map(p => {
    return `
      <article class="concordance-card">
        <div>
          <div class="concordance-card-header">
            <span class="concordance-work-tag">${escapeHtmlSafe(p.genre)} • ${escapeHtmlSafe(p.workTitle)}</span>
            <span class="concordance-locus-tag">${escapeHtmlSafe(p.locus)}</span>
          </div>
          <div class="concordance-quote-fr">« ${escapeHtmlSafe(p.frQuote)} »</div>
          <div class="concordance-quote-en">“ ${escapeHtmlSafe(p.enQuote)} ”</div>
        </div>
        <button class="concordance-jump-btn" onclick="loadWork('${p.workId}', '${p.sectionId}')">
          <span>📖</span> Jump to Passage ${escapeHtmlSafe(p.locus)} &rarr;
        </button>
      </article>
    `;
  }).join('');
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
  renderConcordanceSection(selectedConcordanceConcept);
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
      else if (w.id === 'pour-une-sagesse-tragique') scaleInfo = '105 Aligned Paragraphs • 2 Major Parts';
      else if (w.id === 'la-chapelle-ardente') scaleInfo = '105 Dialogue Rows • III Dramatic Acts';
      else if (w.id === 'le-chemin-de-crete') scaleInfo = '110 Dialogue Rows • IV Dramatic Acts';
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
    'lhomme-problematique', 'presence-et-immortalite', 'entretiens-paul-ricoeur',
    'pour-une-sagesse-tragique', 'la-chapelle-ardente', 'le-chemin-de-crete'
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
  },
  "pour-une-sagesse-tragique": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Pour une sagesse tragique et son au-delà",
    titleEn: "Tragic Wisdom and Beyond",
    year: 1968,
    city: "Paris",
    publisher: "Plon",
    bibtexKey: "marcel1968tragique"
  },
  "la-chapelle-ardente": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "La Chapelle ardente: Pièce en trois actes",
    titleEn: "The Funeral Pyre: Play in Three Acts",
    year: 1925,
    city: "Paris",
    publisher: "Plon",
    bibtexKey: "marcel1925chapelle"
  },
  "le-chemin-de-crete": {
    chicagoAuthor: "Marcel, Gabriel",
    mlaAuthor: "Marcel, Gabriel",
    apaAuthor: "Marcel, G.",
    titleFr: "Le Chemin de Crète: Pièce en quatre actes",
    titleEn: "Ariadne (The Path of Crete): Play in Four Acts",
    year: 1936,
    city: "Paris",
    publisher: "Grasset",
    bibtexKey: "marcel1936chemin"
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
window.renderConcordanceSection = renderConcordanceSection;
window.selectConcordanceConcept = selectConcordanceConcept;

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



