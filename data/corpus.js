/**
 * Gabriel Marcel — Master Corpus & Metadata Index (42 Documented Works)
 * Tier 1 Core Works available in full unabridged bilingual editions via modular chunking.
 */
(function() {
  const CORPUS_DATA = {
    // ==========================================
    // 1. PHILOSOPHICAL TREATISES & ESSAYS
    // ==========================================
    "positions-mystere-ontologique": {
      "id": "positions-mystere-ontologique",
      "titleEn": "On the Ontological Mystery",
      "titleFr": "Positions et approches concrètes du mystère ontologique",
      "year": 1933,
      "category": "Philosophical Treatises & Essays",
      "companionSlug": "le-monde-casse",
      "companionTitle": "The Broken World (1933)",
      "unabridged": true,
      "unabridgedBadge": "Complete Unabridged Edition",
      "sections": [
        { "id": "sec-1", "titleFr": "I. Le monde cassé et la vie fonctionnalisée", "titleEn": "I. The Broken World and the Functionalized Life" },
        { "id": "sec-2", "titleFr": "II. L'exigence ontologique : problème et mystère", "titleEn": "II. The Ontological Exigence: Problem and Mystery" },
        { "id": "sec-3", "titleFr": "III. Réflexion primaire et réflexion seconde", "titleEn": "III. Primary and Secondary Reflection" },
        { "id": "sec-4", "titleFr": "IV. L'indisponibilité et le recueillement", "titleEn": "IV. Spiritual Opacity and Inward Recollection" },
        { "id": "sec-5", "titleFr": "V. L'espérance et la fidélité créatrice", "titleEn": "V. Hope and Creative Fidelity" }
      ]
    },
    "etre-et-avoir": {
      "id": "etre-et-avoir",
      "titleEn": "Being and Having",
      "titleFr": "Être et avoir (Journal métaphysique 1928-1933)",
      "year": 1935,
      "category": "Philosophical Treatises & Essays",
      "companionSlug": "positions-mystere-ontologique",
      "companionTitle": "On the Ontological Mystery (1933)",
      "unabridged": true,
      "unabridgedBadge": "Complete Unabridged Edition",
      "sections": [
        { "id": "part-1", "titleFr": "Première partie (1928-1929) : Le corps et l'avoir", "titleEn": "Part I (1928-1929): The Body and Having" },
        { "id": "part-2", "titleFr": "Deuxième partie (1930-1931) : La foi et le témoignage", "titleEn": "Part II (1930-1931): Faith and Testimony" },
        { "id": "part-3", "titleFr": "Troisième partie (1932-1933) : La fidélité créatrice", "titleEn": "Part III (1932-1933): Creative Fidelity" }
      ]
    },
    "journal-metaphysique": {
      "id": "journal-metaphysique",
      "titleEn": "Metaphysical Journal",
      "titleFr": "Journal métaphysique (1914-1923)",
      "year": 1927,
      "category": "Philosophical Treatises & Essays",
      "unabridged": false
    },
    "du-refus-a-linvocation": {
      "id": "du-refus-a-linvocation",
      "titleEn": "Creative Fidelity",
      "titleFr": "Du refus à l'invocation (Essai de philosophie concrète)",
      "year": 1940,
      "category": "Philosophical Treatises & Essays",
      "unabridged": false
    },
    "homo-viator": {
      "id": "homo-viator",
      "titleEn": "Homo Viator: Introduction to a Metaphysic of Hope",
      "titleFr": "Homo Viator: Prolégomènes à une métaphysique de l'espérance",
      "year": 1944,
      "category": "Philosophical Treatises & Essays",
      "unabridged": false
    },
    "les-hommes-contre-lhumain": {
      "id": "les-hommes-contre-lhumain",
      "titleEn": "Man Against Mass Society (Men Against Humanity)",
      "titleFr": "Les Hommes contre l'humain",
      "year": 1951,
      "category": "Philosophical Treatises & Essays",
      "unabridged": false
    },
    "la-metaphysique-de-royce": {
      "id": "la-metaphysique-de-royce",
      "titleEn": "Royce's Metaphysics",
      "titleFr": "La Métaphysique de Royce",
      "year": 1945,
      "category": "Philosophical Treatises & Essays",
      "unabridged": false
    },
    "le-declin-de-la-sagesse": {
      "id": "le-declin-de-la-sagesse",
      "titleEn": "The Decline of Wisdom",
      "titleFr": "Le Déclin de la sagesse",
      "year": 1954,
      "category": "Philosophical Treatises & Essays",
      "unabridged": false
    },
    "lhomme-problematique": {
      "id": "lhomme-problematique",
      "titleEn": "Problematic Man",
      "titleFr": "L'Homme problématique",
      "year": 1955,
      "category": "Philosophical Treatises & Essays",
      "unabridged": false
    },
    "theatre-et-religion": {
      "id": "theatre-et-religion",
      "titleEn": "Theatre and Religion",
      "titleFr": "Théâtre et religion",
      "year": 1958,
      "category": "Philosophical Treatises & Essays",
      "unabridged": false
    },
    "presence-et-immortalite": {
      "id": "presence-et-immortalite",
      "titleEn": "Presence and Immortality",
      "titleFr": "Présence et immortalité",
      "year": 1959,
      "category": "Philosophical Treatises & Essays",
      "unabridged": false
    },
    "fragments-philosophiques": {
      "id": "fragments-philosophiques",
      "titleEn": "Philosophical Fragments (1909-1914)",
      "titleFr": "Fragments philosophiques 1909-1914",
      "year": 1962,
      "category": "Philosophical Treatises & Essays",
      "unabridged": false
    },
    "pour-une-sagesse-tragique": {
      "id": "pour-une-sagesse-tragique",
      "titleEn": "Tragic Wisdom and Beyond",
      "titleFr": "Pour une sagesse tragique et son au-delà",
      "year": 1968,
      "category": "Philosophical Treatises & Essays",
      "unabridged": false
    },

    // ==========================================
    // 2. LECTURES & ADDRESSES
    // ==========================================
    "mystere-de-letre-1": {
      "id": "mystere-de-letre-1",
      "titleEn": "The Mystery of Being, Vol. 1: Reflection and Mystery",
      "titleFr": "Le Mystère de l'être, Tome I: Réflexion et mystère",
      "year": 1951,
      "category": "Lectures & Addresses",
      "companionSlug": "mystere-de-letre-2",
      "companionTitle": "The Mystery of Being, Vol. 2: Faith and Reality (1951)",
      "unabridged": true,
      "unabridgedBadge": "Complete Unabridged Edition",
      "sections": [
        { "id": "lec-1", "titleFr": "Conférence I : Questions de méthode", "titleEn": "Lecture 1: Questions of Method" },
        { "id": "lec-2", "titleFr": "Conférence II : Un monde cassé", "titleEn": "Lecture 2: A Broken World" },
        { "id": "lec-3", "titleFr": "Conférence III : Le besoin de transcendance", "titleEn": "Lecture 3: The Need for Transcendence" },
        { "id": "lec-4", "titleFr": "Conférence IV : La vérité comme valeur", "titleEn": "Lecture 4: Truth as a Value" },
        { "id": "lec-5", "titleFr": "Conférence V : Réflexion primaire et réflexion seconde", "titleEn": "Lecture 5: Primary and Secondary Reflection" },
        { "id": "lec-6", "titleFr": "Conférence VI : « Ma vie » et l'identité", "titleEn": "Lecture 6: \"My Life\" and Personal Identity" },
        { "id": "lec-7", "titleFr": "Conférence VII : L'être incarné", "titleEn": "Lecture 7: Incarnate Being" },
        { "id": "lec-8", "titleFr": "Conférence VIII : L'être en situation", "titleEn": "Lecture 8: Being in a Situation" },
        { "id": "lec-9", "titleFr": "Conférence IX : L'intersubjectivité et le « nous »", "titleEn": "Lecture 9: Intersubjectivity and the \"We\"" },
        { "id": "lec-10", "titleFr": "Conférence X : La présence et le mystère de l'être", "titleEn": "Lecture 10: Presence and the Mystery of Being" }
      ]
    },
    "mystere-de-letre-2": {
      "id": "mystere-de-letre-2",
      "titleEn": "The Mystery of Being, Vol. 2: Faith and Reality",
      "titleFr": "Le Mystère de l'être, Tome II: Foi et réalité",
      "year": 1951,
      "category": "Lectures & Addresses",
      "companionSlug": "mystere-de-letre-1",
      "companionTitle": "The Mystery of Being, Vol. 1: Reflection and Mystery (1951)",
      "unabridged": true,
      "unabridgedBadge": "Complete Unabridged Edition",
      "sections": [
        { "id": "lec-1", "titleFr": "Conférence I : La question de l'être", "titleEn": "Lecture 1: The Question of Being" },
        { "id": "lec-2", "titleFr": "Conférence II : Existence et être", "titleEn": "Lecture 2: Existence and Being" },
        { "id": "lec-3", "titleFr": "Conférence III : L'exigence ontologique", "titleEn": "Lecture 3: The Ontological Exigence" },
        { "id": "lec-4", "titleFr": "Conférence IV : La menace pesant sur l'être", "titleEn": "Lecture 4: The Threat to Being" },
        { "id": "lec-5", "titleFr": "Conférence V : Opinions et foi", "titleEn": "Lecture 5: Opinion and Faith" },
        { "id": "lec-6", "titleFr": "Conférence VI : La prière et la réalité intersubjective", "titleEn": "Lecture 6: Prayer and Intersubjective Reality" },
        { "id": "lec-7", "titleFr": "Conférence VII : L'épreuve du temps et la fidélité", "titleEn": "Lecture 7: The Test of Time and Fidelity" },
        { "id": "lec-8", "titleFr": "Conférence VIII : L'espérance et la mort", "titleEn": "Lecture 8: Hope and Death" },
        { "id": "lec-9", "titleFr": "Conférence IX : Le fondement de l'espérance", "titleEn": "Lecture 9: The Ground of Hope" },
        { "id": "lec-10", "titleFr": "Conférence X : La conscience dans sa situation eschatologique", "titleEn": "Lecture 10: Consciousness in Its Eschatological Situation" }
      ]
    },
    "la-dignite-humaine": {
      "id": "la-dignite-humaine",
      "titleEn": "The Existential Background of Human Dignity",
      "titleFr": "La Dignité humaine",
      "year": 1964,
      "category": "Lectures & Addresses",
      "unabridged": false
    },

    // ==========================================
    // 3. DRAMATIC WORKS (PLAYS)
    // ==========================================
    "le-monde-casse": {
      "id": "le-monde-casse",
      "titleEn": "The Broken World",
      "titleFr": "Le Monde cassé (Pièce en quatre actes)",
      "year": 1933,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "positions-mystere-ontologique",
      "companionTitle": "On the Ontological Mystery (1933)",
      "unabridged": true,
      "unabridgedBadge": "Complete Unabridged Edition",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le salon parisien et le vide spirituel", "titleEn": "Act I: The Parisian Salon and Spiritual Emptiness" },
        { "id": "act-2", "titleFr": "Acte II : L'ombre de Jacques Cartier", "titleEn": "Act II: The Shadow of Jacques Cartier" },
        { "id": "act-3", "titleFr": "Acte III : La crise conjugale", "titleEn": "Act III: The Marital Crisis" },
        { "id": "act-4", "titleFr": "Acte IV : Le sacrifice et la réconciliation", "titleEn": "Act IV: The Sacrifice and Reconciliation" }
      ]
    },
    "un-homme-de-dieu": { "id": "un-homme-de-dieu", "titleEn": "A Man of God", "titleFr": "Un Homme de Dieu (Pièce en trois actes)", "year": 1925, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-palais-de-sable": { "id": "le-palais-de-sable", "titleEn": "The Sand Palace", "titleFr": "Le Palais de sable", "year": 1914, "category": "Dramatic Works (Plays)", "unabridged": false },
    "la-grace": { "id": "la-grace", "titleEn": "Grace", "titleFr": "La Grâce", "year": 1914, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-coeur-des-autres": { "id": "le-coeur-des-autres", "titleEn": "The Heart of Others", "titleFr": "Le Cœur des autres", "year": 1921, "category": "Dramatic Works (Plays)", "unabridged": false },
    "liconoclaste": { "id": "liconoclaste", "titleEn": "The Iconoclast", "titleFr": "L'Iconoclaste", "year": 1923, "category": "Dramatic Works (Plays)", "unabridged": false },
    "la-chapelle-ardente": { "id": "la-chapelle-ardente", "titleEn": "The Funeral Pyre", "titleFr": "La Chapelle ardente", "year": 1925, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-quatuor-en-fa-diese": { "id": "le-quatuor-en-fa-diese", "titleEn": "The Quartet in F-sharp", "titleFr": "Le Quatuor en fa dièse", "year": 1925, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-regard-neuf": { "id": "le-regard-neuf", "titleEn": "The New Look", "titleFr": "Le Regard neuf", "year": 1931, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-chemin-de-crete": { "id": "le-chemin-de-crete", "titleEn": "Ariadne (The Path of Crete)", "titleFr": "Le Chemin de Crète", "year": 1936, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-dard": { "id": "le-dard", "titleEn": "The Sting", "titleFr": "Le Dard", "year": 1936, "category": "Dramatic Works (Plays)", "unabridged": false },
    "la-soif": { "id": "la-soif", "titleEn": "Thirst (The Eager Hearts)", "titleFr": "La Soif", "year": 1938, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-fanal": { "id": "le-fanal", "titleEn": "The Lantern", "titleFr": "Le Fanal", "year": 1944, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-signe-de-la-croix": { "id": "le-signe-de-la-croix", "titleEn": "The Sign of the Cross", "titleFr": "Le Signe de la croix", "year": 1944, "category": "Dramatic Works (Plays)", "unabridged": false },
    "lemissaire": { "id": "lemissaire", "titleEn": "The Emissary", "titleFr": "L'Émissaire", "year": 1945, "category": "Dramatic Works (Plays)", "unabridged": false },
    "la-fin-des-temps": { "id": "la-fin-des-temps", "titleEn": "The End of Time", "titleFr": "La Fin des temps", "year": 1950, "category": "Dramatic Works (Plays)", "unabridged": false },
    "rome-nest-plus-dans-rome": { "id": "rome-nest-plus-dans-rome", "titleEn": "Rome is No Longer in Rome", "titleFr": "Rome n'est plus dans Rome", "year": 1951, "category": "Dramatic Works (Plays)", "unabridged": false },
    "croissez-et-multipliez": { "id": "croissez-et-multipliez", "titleEn": "Increase and Multiply", "titleFr": "Croissez et multipliez", "year": 1955, "category": "Dramatic Works (Plays)", "unabridged": false },
    "mon-temps-nest-pas-le-votre": { "id": "mon-temps-nest-pas-le-votre", "titleEn": "My Time is Not Your Time", "titleFr": "Mon temps n'est pas le vôtre", "year": 1955, "category": "Dramatic Works (Plays)", "unabridged": false },
    "la-dimension-florestan": { "id": "la-dimension-florestan", "titleEn": "The Florestan Dimension", "titleFr": "La Dimension Florestan", "year": 1958, "category": "Dramatic Works (Plays)", "unabridged": false },

    // ==========================================
    // 4. AUTOBIOGRAPHY & DIALOGUES
    // ==========================================
    "en-chemin-vers-quel-eveil": { "id": "en-chemin-vers-quel-eveil", "titleEn": "Awakenings: Gabriel Marcel's Autobiography", "titleFr": "En chemin, vers quel éveil ?", "year": 1971, "category": "Autobiography & Dialogues", "unabridged": false },
    "an-autobiographical-essay": { "id": "an-autobiographical-essay", "titleEn": "An Autobiographical Essay", "titleFr": "Essai autobiographique", "year": 1984, "category": "Autobiography & Dialogues", "unabridged": false },
    "entretiens-paul-ricoeur": { "id": "entretiens-paul-ricoeur", "titleEn": "Conversations Between Paul Ricœur and Gabriel Marcel", "titleFr": "Entretiens Paul Ricœur - Gabriel Marcel", "year": 1968, "category": "Autobiography & Dialogues", "unabridged": false },
    "interroge-par-pierre-boutang": { "id": "interroge-par-pierre-boutang", "titleEn": "Gabriel Marcel Interviewed by Pierre Boutang", "titleFr": "Gabriel Marcel interrogé par Pierre Boutang", "year": 1977, "category": "Autobiography & Dialogues", "unabridged": false },

    // ==========================================
    // 5. DRAMATIC CRITICISM
    // ==========================================
    "lheure-theatrale": { "id": "lheure-theatrale", "titleEn": "The Theatrical Hour: From Giraudoux to Sartre", "titleFr": "L'Heure théâtrale", "year": 1959, "category": "Dramatic Criticism", "unabridged": false },
    "regards-sur-le-theatre-de-claudel": { "id": "regards-sur-le-theatre-de-claudel", "titleEn": "Perspectives on Claudel's Theatre", "titleFr": "Regards sur le théâtre de Claudel", "year": 1964, "category": "Dramatic Criticism", "unabridged": false }
  };

  // Browser global registration
  if (typeof window !== "undefined") {
    window.MARCEL_CORPUS = CORPUS_DATA;
  }

  // Node.js module export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = CORPUS_DATA;
  }
})();
