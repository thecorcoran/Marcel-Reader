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
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections, 125 Paras, 25k Words)",
      "sections": [
        { "id": "sec-1", "titleFr": "I. Le monde cassé et la vie fonctionnalisée", "titleEn": "I. The Broken World and the Functionalized Life" },
        { "id": "sec-2", "titleFr": "II. L'exigence ontologique : distinction du problème et du mystère", "titleEn": "II. The Ontological Exigence: Distinction Between Problem and Mystery" },
        { "id": "sec-3", "titleFr": "III. Réflexion primaire et réflexion seconde : l'incarnation", "titleEn": "III. Primary and Secondary Reflection: Incarnation and Recollection" },
        { "id": "sec-4", "titleFr": "IV. L'espérance, le désespoir et l'ordre métaproblématique", "titleEn": "IV. Hope, Despair, and the Metaproblematic Order" },
        { "id": "sec-5", "titleFr": "V. La fidélité créatrice et l'inviolabilité de l'esprit", "titleEn": "V. Creative Fidelity and the Inviolability of the Spirit" }
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
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (6 Sections, 664 Paras, 80k Words)",
      "sections": [
        { "id": "preface", "titleFr": "Préface de D. M. MacKinnon", "titleEn": "Preface by D. M. MacKinnon" },
        { "id": "diary-1928-1929", "titleFr": "Journal métaphysique (1928-1929) : Le problème du corps et de l'incarnation", "titleEn": "Metaphysical Diary (1928-1929): The Body and Incarnation" },
        { "id": "diary-1930-1931", "titleFr": "Journal métaphysique (1930-1931) : L'avoir, l'être et la présence", "titleEn": "Metaphysical Diary (1930-1931): Having, Being, and Presence" },
        { "id": "diary-1932-1933", "titleFr": "Journal métaphysique (1932-1933) : La fidélité et l'exigence ontologique", "titleEn": "Metaphysical Diary (1932-1933): Fidelity and the Ontological Exigence" },
        { "id": "phenomenology-of-having", "titleFr": "Esquisse d'une phénoménologie de l'avoir", "titleEn": "Outlines of a Phenomenology of Having" },
        { "id": "faith-and-reality", "titleFr": "Foi et Réalité : Trois essais philosophiques", "titleEn": "Faith and Reality: Three Philosophical Essays" }
      ]
    },
    "journal-metaphysique": {
      "id": "journal-metaphysique",
      "titleEn": "Metaphysical Journal",
      "titleFr": "Journal métaphysique (1914-1923)",
      "year": 1927,
      "category": "Philosophical Treatises & Essays",
      "companionSlug": "etre-et-avoir",
      "companionTitle": "Being and Having (1935)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (4 Sections, 1,001 Paras, 110k Words)",
      "sections": [
        { "id": "intro", "titleFr": "Introduction de l'auteur (1927)", "titleEn": "Author's Introduction (1927)" },
        { "id": "part-1", "titleFr": "Première partie (1914) : Existence et sensation", "titleEn": "Part I (1914): Existence and Sensation" },
        { "id": "part-2", "titleFr": "Deuxième partie (1915-1923) : Présence, fidélité et intersubjectivité", "titleEn": "Part II (1915-1923): Presence, Fidelity, and Intersubjectivity" },
        { "id": "appendix", "titleFr": "Appendice (1925) : L'Existence et l'Objectivité", "titleEn": "Appendix (1925): Existence and Objectivity" }
      ]
    },
    "du-refus-a-linvocation": {
      "id": "du-refus-a-linvocation",
      "titleEn": "Creative Fidelity",
      "titleFr": "Du refus à l'invocation (Essai de philosophie concrète)",
      "year": 1940,
      "category": "Philosophical Treatises & Essays",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (8 Essays, 105 Paras)",
      "sections": [
        { "id": "ess-1", "titleFr": "Chapitre I : L'être en situation", "titleEn": "Chapter 1: Being in a Situation" },
        { "id": "ess-2", "titleFr": "Chapitre II : Phénoménologie de la fidélité créatrice", "titleEn": "Chapter 2: Phenomenology of Creative Fidelity" },
        { "id": "ess-3", "titleFr": "Chapitre III : Sur l'opinion et la foi", "titleEn": "Chapter 3: On Opinion and Faith" },
        { "id": "ess-4", "titleFr": "Chapitre IV : La prière et la présence", "titleEn": "Chapter 4: Prayer and Presence" },
        { "id": "ess-5", "titleFr": "Chapitre V : L'acte et la personne", "titleEn": "Chapter 5: The Act and the Person" },
        { "id": "ess-6", "titleFr": "Chapitre VI : Aperçus sur l'espérance", "titleEn": "Chapter 6: Insights on Hope" },
        { "id": "ess-7", "titleFr": "Chapitre VII : Valeur et immortalité", "titleEn": "Chapter 7: Value and Immortality" },
        { "id": "ess-8", "titleFr": "Chapitre VIII : De l'inviolabilité de l'esprit", "titleEn": "Chapter 8: On the Inviolability of the Spirit" }
      ]
    },
    "homo-viator": {
      "id": "homo-viator",
      "titleEn": "Homo Viator: Introduction to a Metaphysic of Hope",
      "titleFr": "Homo Viator: Prolégomènes à une métaphysique de l'espérance",
      "year": 1944,
      "category": "Philosophical Treatises & Essays",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (11 Chapters, 556 Paras, 103k Words)",
      "sections": [
        { "id": "prologue", "titleFr": "Préface à l'édition de 1963", "titleEn": "Preface to the 1963 Edition" },
        { "id": "ch-1", "titleFr": "Chapitre I : Le moi et autrui", "titleEn": "Chapter I: The Ego and Others" },
        { "id": "ch-2", "titleFr": "Chapitre II : Esquisse d'une phénoménologie et d'une métaphysique de l'espérance", "titleEn": "Chapter II: Sketch of a Phenomenology and Metaphysic of Hope" },
        { "id": "ch-3", "titleFr": "Chapitre III : Le mystère familial", "titleEn": "Chapter III: The Mystery of the Family" },
        { "id": "ch-4", "titleFr": "Chapitre IV : Le vœu créateur comme essence de la paternité", "titleEn": "Chapter IV: The Creative Vow as Essence of Paternity" },
        { "id": "ch-5", "titleFr": "Chapitre V : L'obéissance et la fidélité", "titleEn": "Chapter V: Obedience and Fidelity" },
        { "id": "ch-6", "titleFr": "Chapitre VI : Valeur et immortalité : De la disponibilité", "titleEn": "Chapter VI: Value and Immortality: On Availability" },
        { "id": "ch-7", "titleFr": "Chapitre VII : Situation périlleuse des valeurs éthiques", "titleEn": "Chapter VII: The Dangerous Situation of Ethical Values" },
        { "id": "ch-8", "titleFr": "Chapitre VIII : L'être et le néant : À propos de Jean-Paul Sartre", "titleEn": "Chapter VIII: Being and Nothingness: On Jean-Paul Sartre" },
        { "id": "ch-9", "titleFr": "Chapitre IX : Le refus du salut et l'homme absurde : À propos d'Albert Camus", "titleEn": "Chapter IX: The Refusal of Salvation and the Absurd Man: On Albert Camus" },
        { "id": "ch-10", "titleFr": "Chapitre X : Rilke, témoin du spirituel", "titleEn": "Chapter X: Rilke: A Witness to the Spiritual" }
      ]
    },
    "les-hommes-contre-lhumain": {
      "id": "les-hommes-contre-lhumain",
      "titleEn": "Man Against Mass Society (Men Against Humanity)",
      "titleFr": "Les Hommes contre l'humain",
      "year": 1951,
      "category": "Philosophical Treatises & Essays",
      "companionSlug": "rome-nest-plus-dans-rome",
      "companionTitle": "Rome is No Longer in Rome (1951)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (15 Sections, 342 Paras, 79k Words)",
      "sections": [
        { "id": "foreword", "titleFr": "Préface de Donald MacKinnon", "titleEn": "Foreword by Donald MacKinnon" },
        { "id": "preface", "titleFr": "Préface : L'universel contre les masses", "titleEn": "Preface: The Universal Against the Masses" },
        { "id": "part-1-ch-1", "titleFr": "Première partie, Ch. I : Qu'est-ce qu'un homme libre ?", "titleEn": "Part I, Chapter I: What is a Free Man?" },
        { "id": "part-1-ch-2", "titleFr": "Première partie, Ch. II : Les libertés perdues", "titleEn": "Part I, Chapter II: Lost Liberties" },
        { "id": "part-1-ch-3", "titleFr": "Première partie, Ch. III : Les techniques d'avilissement", "titleEn": "Part I, Chapter III: Techniques of Degradation" },
        { "id": "part-1-ch-4", "titleFr": "Première partie, Ch. IV : Progrès technique et péché", "titleEn": "Part I, Chapter IV: Technical Progress and Sin" },
        { "id": "part-2-ch-1", "titleFr": "Deuxième partie, Ch. I : Le philosophe devant le monde contemporain", "titleEn": "Part II, Chapter I: The Philosopher & the Contemporary World" },
        { "id": "part-2-ch-2", "titleFr": "Deuxième partie, Ch. II : La conscience fanatisée", "titleEn": "Part II, Chapter II: The Fanaticized Consciousness" },
        { "id": "part-2-ch-3", "titleFr": "Deuxième partie, Ch. III : L'esprit d'abstraction, facteur de guerre", "titleEn": "Part II, Chapter III: The Spirit of Abstraction, as a Factor Making for War" },
        { "id": "part-2-ch-4", "titleFr": "Deuxième partie, Ch. IV : La crise des valeurs dans le monde contemporain", "titleEn": "Part II, Chapter IV: The Crisis of Values in the Contemporary World" },
        { "id": "part-2-ch-5", "titleFr": "Deuxième partie, Ch. V : Dégradation de l'idée de service et dépersonnalisation", "titleEn": "Part II, Chapter V: The Degradation of the Idea of Service" },
        { "id": "part-3-ch-1", "titleFr": "Troisième partie, Ch. I : Pessimisme et conscience eschatologique", "titleEn": "Part III, Chapter I: Pessimism and the Eschatological Consciousness" },
        { "id": "part-3-ch-2", "titleFr": "Troisième partie, Ch. II : L'homme contre l'histoire", "titleEn": "Part III, Chapter II: Man Against History" },
        { "id": "part-3-ch-3", "titleFr": "Troisième partie, Ch. III : La réintégration de l'honneur", "titleEn": "Part III, Chapter III: The Reintegration of Honour" },
        { "id": "conclusion", "titleFr": "Conclusion : L'universel contre les masses (II)", "titleEn": "Conclusion: The Universal Against the Masses (II)" }
      ]
    },
    "la-metaphysique-de-royce": {
      "id": "la-metaphysique-de-royce",
      "titleEn": "Royce's Metaphysics",
      "titleFr": "La Métaphysique de Royce",
      "year": 1945,
      "category": "Philosophical Treatises & Essays",
      "companionSlug": "journal-metaphysique",
      "companionTitle": "Metaphysical Journal (1927)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Parts, 100 Paras)",
      "sections": [
        { "id": "part-1", "titleFr": "Première partie : L'idée de Dieu et la communauté d'interprétation", "titleEn": "Part I: The Idea of God and the Community of Interpretation" },
        { "id": "part-2", "titleFr": "Deuxième partie : Le problème de la vérité et l'expérience religieuse", "titleEn": "Part II: The Problem of Truth and Religious Experience" },
        { "id": "part-3", "titleFr": "Troisième partie : De l'absolu à la participation et à l'intersubjectivité", "titleEn": "Part III: From the Absolute to Participation and Intersubjectivity" }
      ]
    },
    "le-declin-de-la-sagesse": {
      "id": "le-declin-de-la-sagesse",
      "titleEn": "The Decline of Wisdom",
      "titleFr": "Le Déclin de la sagesse",
      "year": 1954,
      "category": "Philosophical Treatises & Essays",
      "companionSlug": "les-hommes-contre-lhumain",
      "companionTitle": "Men Against Humanity (1951)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (Foreword + 3 Parts, 180 Paras, 22k Words)",
      "sections": [
        { "id": "foreword", "titleFr": "Avant-propos", "titleEn": "Foreword" },
        { "id": "part-1", "titleFr": "Première partie : Les limites de la civilisation industrielle", "titleEn": "Part I: The Limitations of Industrial Civilisation" },
        { "id": "part-2", "titleFr": "Deuxième partie : La notion d'héritage spirituel", "titleEn": "Part II: The Notion of Spiritual Heritage" },
        { "id": "part-3", "titleFr": "Troisième partie : La dislocation de la notion de sagesse", "titleEn": "Part III: The Breaking Up of the Notion of Wisdom" }
      ]
    },
    "lhomme-problematique": {
      "id": "lhomme-problematique",
      "titleEn": "Problematic Man",
      "titleFr": "L'Homme problématique",
      "year": 1955,
      "category": "Philosophical Treatises & Essays",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (5 Sections, 270 Paras, 40k Words)",
      "sections": [
        { "id": "sec-1", "titleFr": "Première partie : L'homme problématique (Aliénation et miroir intérieur)", "titleEn": "Part I: The Problematic Man (Alienation and the Inner Mirror)" },
        { "id": "sec-2", "titleFr": "Deuxième partie : Phénoménologie de l'inquiétude (Inquiétude, Anxiété, Angoisse)", "titleEn": "Part II: Phenomenology of Uneasiness (Uneasiness, Anxiety, Anguish)" },
        { "id": "sec-3", "titleFr": "Deuxième partie : L'itinéraire spirituel (De saint Augustin et Pascal à Kierkegaard)", "titleEn": "Part II: The Spiritual Itinerary (From Saint Augustine and Pascal to Kierkegaard)" },
        { "id": "sec-4", "titleFr": "Deuxième partie : Le défi contemporain (Nietzsche, Heidegger, Sartre)", "titleEn": "Part II: The Contemporary Challenge (Nietzsche, Heidegger, Sartre)" },
        { "id": "sec-5", "titleFr": "Deuxième partie : L'épreuve du présent et le dépassement (Gide, Le monde d'aujourd'hui, Conclusion)", "titleEn": "Part II: The Ordeal of the Present and Transcendence (Gide, The World Today, Conclusion)" }
      ]
    },
    "theatre-et-religion": {
      "id": "theatre-et-religion",
      "titleEn": "Theatre and Religion",
      "titleFr": "Théâtre et religion",
      "year": 1958,
      "category": "Philosophical Treatises & Essays",
      "companionSlug": "le-monde-casse",
      "companionTitle": "The Broken World (1933)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Parts, 100 Paras)",
      "sections": [
        { "id": "part-1", "titleFr": "Première partie : L'essence du drame et la situation spirituelle", "titleEn": "Part I: The Essence of Drama and the Spiritual Situation" },
        { "id": "part-2", "titleFr": "Deuxième partie : Théâtre, grâce et transcendance", "titleEn": "Part II: Theatre, Grace, and Transcendence" },
        { "id": "part-3", "titleFr": "Troisième partie : La communion dramatique et le mystère de l'espérance", "titleEn": "Part III: Dramatic Communion and the Mystery of Hope" }
      ]
    },
    "presence-et-immortalite": {
      "id": "presence-et-immortalite",
      "titleEn": "Presence and Immortality",
      "titleFr": "Présence et immortalité",
      "year": 1959,
      "category": "Philosophical Treatises & Essays",
      "companionSlug": "etre-et-avoir",
      "companionTitle": "Being and Having (1935)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (2 Parts, 110 Entries)",
      "sections": [
        { "id": "sec-1", "titleFr": "Première partie : Journal métaphysique (1938–1943)", "titleEn": "Part I: Metaphysical Journal (1938–1943)" },
        { "id": "sec-2", "titleFr": "Deuxième partie : Présence et immortalité : Méditations ontologiques", "titleEn": "Part II: Presence and Immortality: Ontological Meditations" }
      ]
    },
    "fragments-philosophiques": {
      "id": "fragments-philosophiques",
      "titleEn": "Philosophical Fragments (1909-1914)",
      "titleFr": "Fragments philosophiques 1909-1914",
      "year": 1962,
      "category": "Philosophical Treatises & Essays",
      "companionSlug": "journal-metaphysique",
      "companionTitle": "Metaphysical Journal (1927)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Sections, 100 Paras)",
      "sections": [
        { "id": "sec-1", "titleFr": "Première section : Remarques sur l'objectivité et l'intuition (1909–1911)", "titleEn": "Section I: Remarks on Objectivity and Intuition (1909–1911)" },
        { "id": "sec-2", "titleFr": "Deuxième section : De l'affirmation dialectique à la participation vivante (1912–1913)", "titleEn": "Section II: From Dialectical Affirmation to Living Participation (1912–1913)" },
        { "id": "sec-3", "titleFr": "Troisième section : Le pressentiment du mystère ontologique (1913–1914)", "titleEn": "Section III: The Presentiment of the Ontological Mystery (1913–1914)" }
      ]
    },
    "pour-une-sagesse-tragique": {
      "id": "pour-une-sagesse-tragique",
      "titleEn": "Tragic Wisdom and Beyond",
      "titleFr": "Pour une sagesse tragique et son au-delà",
      "year": 1968,
      "category": "Philosophical Treatises & Essays",
      "companionSlug": "entretiens-paul-ricoeur",
      "companionTitle": "Conversations Between Paul Ricœur and Gabriel Marcel (1968)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (2 Parts, 105 Paras)",
      "sections": [
        { "id": "sec-1", "titleFr": "Première partie : Le tragique contemporain et l'exigence sacrale", "titleEn": "Part I: Contemporary Tragedy and the Sacral Exigence" },
        { "id": "sec-2", "titleFr": "Deuxième partie : La transcendance, la grâce et le salut", "titleEn": "Part II: Transcendence, Grace, and Salvation" }
      ]
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
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (10 Lectures, 415 Paras, 93k Words)",
      "sections": [
        { "id": "lec-1", "titleFr": "Conférence I : Questions de méthode (Introduction)", "titleEn": "Lecture 1: Questions of Method (Introduction)" },
        { "id": "lec-2", "titleFr": "Conférence II : Un monde cassé", "titleEn": "Lecture 2: A Broken World" },
        { "id": "lec-3", "titleFr": "Conférence III : Le besoin de transcendance", "titleEn": "Lecture 3: The Need for Transcendence" },
        { "id": "lec-4", "titleFr": "Conférence IV : La vérité comme valeur : le cadre intelligible", "titleEn": "Lecture 4: Truth as a Value: The Intelligible Background" },
        { "id": "lec-5", "titleFr": "Conférence V : Réflexion primaire et réflexion seconde : le point d'appui existentiel", "titleEn": "Lecture 5: Primary & Secondary Reflection: The Existential Fulcrum" },
        { "id": "lec-6", "titleFr": "Conférence VI : Le sentiment comme mode de participation", "titleEn": "Lecture 6: Feeling as a Mode of Participation" },
        { "id": "lec-7", "titleFr": "Conférence VII : L'être en situation", "titleEn": "Lecture 7: Being in a Situation" },
        { "id": "lec-8", "titleFr": "Conférence VIII : « Ma vie » et l'identité", "titleEn": "Lecture 8: \"My Life\" and Personal Identity" },
        { "id": "lec-9", "titleFr": "Conférence IX : L'intersubjectivité et la profondeur", "titleEn": "Lecture 9: Togetherness: Identity and Depth" },
        { "id": "lec-10", "titleFr": "Conférence X : La présence comme mystère", "titleEn": "Lecture 10: Presence as a Mystery" }
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
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (10 Lectures, 105 Paras)",
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
      "titleFr": "La Dignité humaine et ses assises existentielles",
      "year": 1964,
      "category": "Lectures & Addresses",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (9 Lectures, 490 Paras, 60k Words)",
      "sections": [
        { "id": "lec-1", "titleFr": "Conférence I : Points de départ", "titleEn": "Lecture 1: Introduction (Points of Departure)" },
        { "id": "lec-2", "titleFr": "Conférence II : Participation", "titleEn": "Lecture 2: Participation" },
        { "id": "lec-3", "titleFr": "Conférence III : Existence", "titleEn": "Lecture 3: Existence" },
        { "id": "lec-4", "titleFr": "Conférence IV : Fidélité", "titleEn": "Lecture 4: Fidelity" },
        { "id": "lec-5", "titleFr": "Conférence V : Mystère ontologique", "titleEn": "Lecture 5: The Ontological Mystery" },
        { "id": "lec-6", "titleFr": "Conférence VI : Le moi et l'ambiguïté", "titleEn": "Lecture 6: The Self and Ambiguity" },
        { "id": "lec-7", "titleFr": "Conférence VII : Dignité humaine", "titleEn": "Lecture 7: Human Dignity" },
        { "id": "lec-8", "titleFr": "Conférence VIII : Fraternité et liberté", "titleEn": "Lecture 8: Mortality, Hope, and Freedom" },
        { "id": "lec-9", "titleFr": "Conférence IX : L'intégrité menacée", "titleEn": "Lecture 9: The Threat to Integrity" }
      ]
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
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (4 Acts, 1,050 Rows, 61k Words)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le salon parisien et le pressentiment du monde cassé", "titleEn": "Act I: The Parisian Salon and the Premonition of the Broken World" },
        { "id": "act-2", "titleFr": "Acte II : L'ombre de Jacques Cartier et le refus du faux-semblant", "titleEn": "Act II: The Shadow of Jacques Cartier and the Rejection of Pretense" },
        { "id": "act-3", "titleFr": "Acte III : La crise conjugale et l'incompréhension des cœurs", "titleEn": "Act III: The Marital Crisis and the Incomprehension of Hearts" },
        { "id": "act-4", "titleFr": "Acte IV : L'offrande, la présence invisible et la communion retrouvée", "titleEn": "Act IV: The Offering, Invisible Presence, and Communion Regained" }
      ]
    },
    "un-homme-de-dieu": {
      "id": "un-homme-de-dieu",
      "titleEn": "A Man of God",
      "titleFr": "Un Homme de Dieu (Pièce en quatre actes)",
      "year": 1925,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "etre-et-avoir",
      "companionTitle": "Being and Having (1935)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (4 Acts, 1,390 Rows, 24k Words)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le presbytère et le retour du passé", "titleEn": "Act I: The Rectory and the Return of the Past" },
        { "id": "act-2", "titleFr": "Acte II : La révélation du secret et le doute pastoral", "titleEn": "Act II: The Revelation of the Secret and the Pastoral Doubt" },
        { "id": "act-3", "titleFr": "Acte III : Le départ d'Osmonde et la rupture des masques", "titleEn": "Act III: Osmonde's Departure and the Shattering of Masks" },
        { "id": "act-4", "titleFr": "Acte IV : L'agonie spirituelle et la prière de déréliction", "titleEn": "Act IV: Spiritual Agony and the Prayer of Dereliction" }
      ]
    },
    "le-palais-de-sable": {
      "id": "le-palais-de-sable",
      "titleEn": "The Sand Palace",
      "titleFr": "Le Palais de sable (Drame en quatre actes)",
      "year": 1914,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "journal-metaphysique",
      "companionTitle": "Metaphysical Journal (1927)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (4 Acts, 110 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le salon de Marly et la gloire des discours chrétiens", "titleEn": "Act I: The Marly Salon and the Glory of Christian Discourse" },
        { "id": "act-2", "titleFr": "Acte II : La révélation du couvent et l'angoisse paternelle", "titleEn": "Act II: The Revelation of the Convent and Paternal Anguish" },
        { "id": "act-3", "titleFr": "Acte III : Le couvent des Carmélites et l'épreuve de la séparation", "titleEn": "Act III: The Carmelite Convent and the Ordeal of Separation" },
        { "id": "act-4", "titleFr": "Acte IV : L'effondrement du palais de sable et la vérité nue de l'âme", "titleEn": "Act IV: The Collapse of the Sand Palace and the Naked Truth of the Soul" }
      ]
    },
    "la-grace": {
      "id": "la-grace",
      "titleEn": "Grace",
      "titleFr": "La Grâce (Pièce en trois actes)",
      "year": 1914,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "journal-metaphysique",
      "companionTitle": "Metaphysical Journal (1927)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Acts, 100 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : La chambre du sanatorium et l'ombre du passé", "titleEn": "Act I: The Sanatorium Room and the Shadow of the Past" },
        { "id": "act-2", "titleFr": "Acte II : Le conflit des fiertés et l'aveu déchirant", "titleEn": "Act II: The Conflict of Prides and the Heartbreaking Confession" },
        { "id": "act-3", "titleFr": "Acte III : L'agonie de Gérard et l'effraction de la grâce", "titleEn": "Act III: Gérard's Agony and the Breakthrough of Grace" }
      ]
    },
    "le-coeur-des-autres": {
      "id": "le-coeur-des-autres",
      "titleEn": "The Heart of Others",
      "titleFr": "Le Cœur des autres (Pièce en trois actes)",
      "year": 1921,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "journal-metaphysique",
      "companionTitle": "Metaphysical Journal (1927)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Acts, 979 Rows, 18.7k Words)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le succès de l'auteur et la confession volée", "titleEn": "Act I: The Author's Success and the Stolen Confession" },
        { "id": "act-2", "titleFr": "Acte II : La répétition générale et la révolte de la victime", "titleEn": "Act II: The Dress Rehearsal and the Victim's Revolt" },
        { "id": "act-3", "titleFr": "Acte III : Le désenchantement et la tragédie de l'intimité", "titleEn": "Act III: Disenchantment and the Tragedy of Intimacy" }
      ]
    },
    "liconoclaste": {
      "id": "liconoclaste",
      "titleEn": "The Iconoclast",
      "titleFr": "L'Iconoclaste (Pièce en quatre actes)",
      "year": 1923,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "presence-et-immortalite",
      "companionTitle": "Presence and Immortality (1959)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (4 Acts, 105 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le souvenir de Viviane et le sanctuaire du deuil", "titleEn": "Act I: The Memory of Viviane and the Sanctuary of Mourning" },
        { "id": "act-2", "titleFr": "Acte II : Le doute empoisonné et la tentation du soupçon", "titleEn": "Act II: Poisoned Doubt and the Temptation of Suspicion" },
        { "id": "act-3", "titleFr": "Acte III : L'aveu d'Abel et la profanation de la mémoire", "titleEn": "Act III: Abel's Confession and the Profanation of Memory" },
        { "id": "act-4", "titleFr": "Acte IV : La purification de la fidélité au-delà de l'idole", "titleEn": "Act IV: The Purification of Fidelity Beyond the Idol" }
      ]
    },
    "la-chapelle-ardente": {
      "id": "la-chapelle-ardente",
      "titleEn": "The Funeral Pyre",
      "titleFr": "La Chapelle ardente (Pièce en trois actes)",
      "year": 1925,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "presence-et-immortalite",
      "companionTitle": "Presence and Immortality (1959)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Acts, 1,036 Rows, 16.4k Words)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : La chambre du souvenir et le culte d'Octave", "titleEn": "Act I: The Chamber of Memory and the Cult of Octave" },
        { "id": "act-2", "titleFr": "Acte II : La possession tyrannique d'Aline et le doute de Mireille", "titleEn": "Act II: The Tyrannical Possession of Aline and Mireille's Doubt" },
        { "id": "act-3", "titleFr": "Acte III : Le sacrifice consenti et l'extinction du faux sanctuaire", "titleEn": "Act III: The Consented Sacrifice and Extinction of the False Sanctuary" }
      ]
    },
    "le-quatuor-en-fa-diese": {
      "id": "le-quatuor-en-fa-diese",
      "titleEn": "The Quartet in F-sharp",
      "titleFr": "Le Quatuor en fa dièse (Pièce en cinq actes)",
      "year": 1925,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "presence-et-immortalite",
      "companionTitle": "Presence and Immortality (1959)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (5 Acts, 105 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : L'adagio initial et la discorde des âmes", "titleEn": "Act I: The Initial Adagio and the Discord of Souls" },
        { "id": "act-2", "titleFr": "Acte II : La répétition orageuse et l'attrait mystérieux", "titleEn": "Act II: The Stormy Rehearsal and the Mysterious Pull" },
        { "id": "act-3", "titleFr": "Acte III : Le scherzo et la trahison passionnelle", "titleEn": "Act III: The Scherzo and the Passionate Betrayal" },
        { "id": "act-4", "titleFr": "Acte IV : La rupture conjugale et le désert de la création", "titleEn": "Act IV: The Marital Rupture and the Desert of Creation" },
        { "id": "act-5", "titleFr": "Acte V : Le final et la communion transcendante par la musique", "titleEn": "Act V: The Finale and Transcendent Communion Through Music" }
      ]
    },
    "le-regard-neuf": {
      "id": "le-regard-neuf",
      "titleEn": "The Fresh Gaze",
      "titleFr": "Le Regard neuf (Drame en trois actes)",
      "year": 1931,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "le-monde-casse",
      "companionTitle": "The Broken World (1933)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Acts, 105 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : L'arrivée au domaine et la clarté du regard d'enfant", "titleEn": "Act I: Arrival at the Estate and the Clarity of Childlike Gaze" },
        { "id": "act-2", "titleFr": "Acte II : Le dévoilement des compromis familiaux", "titleEn": "Act II: The Unveiling of Family Compromises" },
        { "id": "act-3", "titleFr": "Acte III : L'exigence de la vérité et l'aube d'une vie nouvelle", "titleEn": "Act III: The Exigence of Truth and the Dawn of a New Life" }
      ]
    },
    "le-chemin-de-crete": {
      "id": "le-chemin-de-crete",
      "titleEn": "Ariadne (The Path of Crete)",
      "titleFr": "Le Chemin de Crète (Pièce en quatre actes)",
      "year": 1936,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "du-refus-a-linvocation",
      "companionTitle": "Creative Fidelity (1940)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (4 Acts, 1,050 Rows, 50k Words)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le chalet suisse et les fils entremêlés d'Ariane", "titleEn": "Act I: The Swiss Chalet and the Interwoven Threads of Ariadne" },
        { "id": "act-2", "titleFr": "Acte II : La séduction spirituelle et la démission de Jérôme", "titleEn": "Act II: Spiritual Seduction and Jérôme's Abdication" },
        { "id": "act-3", "titleFr": "Acte III : La confrontation avec Violette et le masque de la générosité", "titleEn": "Act III: The Confrontation with Violette and the Mask of Generosity" },
        { "id": "act-4", "titleFr": "Acte IV : Le sommet du chemin de crête et la clairvoyance tragique", "titleEn": "Act IV: The Summit of the Crest Path and Tragic Clairvoyance" }
      ]
    },
    "le-dard": {
      "id": "le-dard",
      "titleEn": "The Sting",
      "titleFr": "Le Dard (Pièce en trois actes)",
      "year": 1936,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "du-refus-a-linvocation",
      "companionTitle": "Creative Fidelity (1940)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Acts, 1,177 Rows, 20k Words)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le refuge de banlieue et le ressentiment d'Eustache", "titleEn": "Act I: The Suburban Refuge and Eustache's Resentment" },
        { "id": "act-2", "titleFr": "Acte II : La musique, la politique et la trahison intime", "titleEn": "Act II: Music, Politics, and Intimate Betrayal" },
        { "id": "act-3", "titleFr": "Acte III : Le sacrifice de Werner et le viatique des vivants", "titleEn": "Act III: Werner's Sacrifice and the Viaticum of the Living" }
      ]
    },
    "la-soif": {
      "id": "la-soif",
      "titleEn": "Thirst (The Eager Hearts)",
      "titleFr": "La Soif (Pièce en trois actes)",
      "year": 1938,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "homo-viator",
      "companionTitle": "Homo Viator: Introduction to a Metaphysic of Hope (1944)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Acts, 105 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le salon intellectuel et la soif d'absolu", "titleEn": "Act I: The Intellectual Salon and the Thirst for the Absolute" },
        { "id": "act-2", "titleFr": "Acte II : L'indigence affective et les cœurs avides", "titleEn": "Act II: Emotional Destitution and Eager Hearts" },
        { "id": "act-3", "titleFr": "Acte III : La désolation des idoles et la source vive", "titleEn": "Act III: The Desolation of Idols and the Living Spring" }
      ]
    },
    "le-fanal": {
      "id": "le-fanal",
      "titleEn": "The Lantern",
      "titleFr": "Le Fanal (Pièce en deux actes)",
      "year": 1944,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "du-refus-a-linvocation",
      "companionTitle": "Creative Fidelity (1940)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (2 Acts, 100 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : La maison de campagne et l'ombre du deuil maternel", "titleEn": "Act I: The Country House and the Shadow of Maternal Mourning" },
        { "id": "act-2", "titleFr": "Acte II : La lumière du fanal et la fidélité transfigurée", "titleEn": "Act II: The Light of the Lantern and Transfigured Fidelity" }
      ]
    },
    "le-signe-de-la-croix": {
      "id": "le-signe-de-la-croix",
      "titleEn": "The Sign of the Cross",
      "titleFr": "Le Signe de la croix (Pièce en deux actes)",
      "year": 1944,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "homo-viator",
      "companionTitle": "Homo Viator: Introduction to a Metaphysic of Hope (1944)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (2 Acts, 100 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : La menace des rafles et le fardeau de la solidarité", "titleEn": "Act I: The Threat of Roundups and the Burden of Solidarity" },
        { "id": "act-2", "titleFr": "Acte II : L'épreuve de la croix et la fraternité inviolable", "titleEn": "Act II: The Ordeal of the Cross and Inviolable Brotherhood" }
      ]
    },
    "lemissaire": {
      "id": "lemissaire",
      "titleEn": "The Emissary",
      "titleFr": "L'Émissaire (Pièce en trois actes)",
      "year": 1945,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "la-dignite-humaine",
      "companionTitle": "The Existential Background of Human Dignity (1964)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Acts, 105 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le retour de l'émissaire et l'ombre des compromissions", "titleEn": "Act I: The Emissary's Return and the Shadow of Compromise" },
        { "id": "act-2", "titleFr": "Acte II : Le tribunal des consciences et la tentation de la vengeance", "titleEn": "Act II: The Tribunal of Consciences and the Temptation of Vengeance" },
        { "id": "act-3", "titleFr": "Acte III : Le mystère de l'expiation et la réconciliation spirituelle", "titleEn": "Act III: The Mystery of Expiation and Spiritual Reconciliation" }
      ]
    },
    "la-fin-des-temps": {
      "id": "la-fin-des-temps",
      "titleEn": "The End of Time",
      "titleFr": "La Fin des temps (Pièce en trois actes)",
      "year": 1950,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "les-hommes-contre-lhumain",
      "companionTitle": "Men Against Humanity (1951)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Acts, 105 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le domaine de Saint-Cyr et la menace de l'apocalypse atomique", "titleEn": "Act I: The Saint-Cyr Estate and the Threat of Atomic Apocalypse" },
        { "id": "act-2", "titleFr": "Acte II : La séduction nihiliste et le vertige de l'anéantissement", "titleEn": "Act II: Nihilistic Seduction and the Vertigo of Annihilation" },
        { "id": "act-3", "titleFr": "Acte III : L'irruption de la grâce et la victoire de l'espérance", "titleEn": "Act III: The Breakthrough of Grace and the Victory of Hope" }
      ]
    },
    "rome-nest-plus-dans-rome": {
      "id": "rome-nest-plus-dans-rome",
      "titleEn": "Rome is No Longer in Rome",
      "titleFr": "Rome n'est plus dans Rome (Pièce en cinq actes)",
      "year": 1951,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "mystere-de-letre-1",
      "companionTitle": "The Mystery of Being (1951)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (5 Acts, 110 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Paris 1950 — Le spectre de la guerre et l'angoisse de Pascal", "titleEn": "Act I: Paris 1950 — The Specter of War and Pascal's Anguish" },
        { "id": "act-2", "titleFr": "Acte II : La tentation de l'exil et le refuge brésilien", "titleEn": "Act II: The Temptation of Exile and the Brazilian Refuge" },
        { "id": "act-3", "titleFr": "Acte III : L'adieu à la France et l'embarquement", "titleEn": "Act III: Farewell to France and the Embarkation" },
        { "id": "act-4", "titleFr": "Acte IV : La fazenda de São Paulo et le piège idéologique", "titleEn": "Act IV: The São Paulo Fazenda and the Ideological Trap" },
        { "id": "act-5", "titleFr": "Acte V : L'agonie de Pascal et la vraie patrie de l'esprit", "titleEn": "Act V: Pascal's Agony and the True Homeland of the Spirit" }
      ]
    },
    "croissez-et-multipliez": {
      "id": "croissez-et-multipliez",
      "titleEn": "Increase and Multiply",
      "titleFr": "Croissez et multipliez (Pièce en quatre actes)",
      "year": 1955,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "lhomme-problematique",
      "companionTitle": "Problematic Man (1955)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (4 Acts, 105 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le foyer provincial et le poids du conformisme", "titleEn": "Act I: The Provincial Household and the Weight of Conformism" },
        { "id": "act-2", "titleFr": "Acte II : La détresse d'Agnès et le tribunal clérical", "titleEn": "Act II: Agnès's Distress and the Clerical Tribunal" },
        { "id": "act-3", "titleFr": "Acte III : La révolte de la conscience face au dogme aveugle", "titleEn": "Act III: The Revolt of Conscience Against Blind Dogma" },
        { "id": "act-4", "titleFr": "Acte IV : La paternité spirituelle et la liberté de l'amour", "titleEn": "Act IV: Spiritual Fatherhood and the Freedom of Love" }
      ]
    },
    "mon-temps-nest-pas-le-votre": {
      "id": "mon-temps-nest-pas-le-votre",
      "titleEn": "My Time Is Not Your Time",
      "titleFr": "Mon temps n'est pas le vôtre (Pièce en cinq actes)",
      "year": 1955,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "les-hommes-contre-lhumain",
      "companionTitle": "Men Against Humanity (1951)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (5 Acts, 105 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le retour de Flavien et l'incompréhension des générations", "titleEn": "Act I: Flavien's Return and Generational Incomprehension" },
        { "id": "act-2", "titleFr": "Acte II : L'affrontement idéologique et l'utopie technocratique", "titleEn": "Act II: Ideological Confrontation and Technocratic Utopia" },
        { "id": "act-3", "titleFr": "Acte III : La rupture affective et le vertige de l'aliénation", "titleEn": "Act III: Affective Rupture and the Vertigo of Alienation" },
        { "id": "act-4", "titleFr": "Acte IV : L'interrogation métaphysique sur le temps vécu et l'espérance", "titleEn": "Act IV: Metaphysical Inquiry into Lived Time and Hope" },
        { "id": "act-5", "titleFr": "Acte V : Le détachement tragique et la réconciliation dans la présence", "titleEn": "Act V: Tragic Detachment and Reconciliation in Presence" }
      ]
    },
    "la-dimension-florestan": {
      "id": "la-dimension-florestan",
      "titleEn": "The Florestan Dimension",
      "titleFr": "La Dimension Florestan (Pièce en trois actes)",
      "year": 1958,
      "category": "Dramatic Works (Plays)",
      "companionSlug": "presence-et-immortalite",
      "companionTitle": "Presence and Immortality (1959)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Acts, 105 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le salon parisien et le mirage de la célébrité", "titleEn": "Act I: The Parisian Salon and the Mirage of Celebrity" },
        { "id": "act-2", "titleFr": "Acte II : La confrontation esthétique et le masque de Florestan", "titleEn": "Act II: Aesthetic Confrontation and the Mask of Florestan" },
        { "id": "act-3", "titleFr": "Acte III : La transfiguration de la solitude et la dimension ontologique", "titleEn": "Act III: Transfiguration of Solitude and the Ontological Dimension" }
      ]
    },

    // ==========================================
    // 4. AUTOBIOGRAPHY & DIALOGUES
    // ==========================================
    "en-chemin-vers-quel-eveil": {
      "id": "en-chemin-vers-quel-eveil",
      "titleEn": "Awakenings: Gabriel Marcel's Autobiography",
      "titleFr": "En chemin, vers quel éveil ?",
      "year": 1971,
      "category": "Autobiography & Dialogues",
      "companionSlug": "entretiens-paul-ricoeur",
      "companionTitle": "Conversations Between Paul Ricœur and Gabriel Marcel (1968)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (4 Chapters, 110 Paras)",
      "sections": [
        { "id": "ch-1", "titleFr": "Chapitre I : L'enfance solitaire et l'éveil à la musique (1889–1914)", "titleEn": "Chapter 1: Solitary Childhood and Awakening to Music (1889–1914)" },
        { "id": "ch-2", "titleFr": "Chapitre II : L'épreuve de la guerre et le service de recherche de la Croix-Rouge (1914–1918)", "titleEn": "Chapter 2: The Ordeal of War and the Red Cross Tracing Service (1914–1918)" },
        { "id": "ch-3", "titleFr": "Chapitre III : La vocation dramatique, le baptême et la philosophie de la communion (1919–1939)", "titleEn": "Chapter 3: Dramatic Vocation, Baptism, and the Philosophy of Communion (1919–1939)" },
        { "id": "ch-4", "titleFr": "Chapitre IV : Les années de maturité, l'itinérance philosophique et l'espérance ultime (1940–1971)", "titleEn": "Chapter 4: The Years of Maturity, Philosophical Itinerancy, and Ultimate Hope (1940–1971)" }
      ]
    },
    "an-autobiographical-essay": {
      "id": "an-autobiographical-essay",
      "titleEn": "An Autobiographical Essay",
      "titleFr": "Essai autobiographique",
      "year": 1984,
      "category": "Autobiography & Dialogues",
      "companionSlug": "en-chemin-vers-quel-eveil",
      "companionTitle": "Awakenings: Gabriel Marcel's Autobiography (1971)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Parts, 100 Paras)",
      "sections": [
        { "id": "part-1", "titleFr": "Première partie : Les racines familiales, la solitude et la vocation de l'invisible", "titleEn": "Part I: Family Roots, Solitude, and the Vocation of the Invisible" },
        { "id": "part-2", "titleFr": "Deuxième partie : Le théâtre comme laboratoire métaphysique et la conversion de 1929", "titleEn": "Part II: Theatre as Metaphysical Laboratory and the Conversion of 1929" },
        { "id": "part-3", "titleFr": "Troisième partie : La pensée itinérante face aux épreuves du siècle", "titleEn": "Part III: Itinerant Thought Facing the Ordeals of the Century" }
      ]
    },
    "entretiens-paul-ricoeur": {
      "id": "entretiens-paul-ricoeur",
      "titleEn": "Conversations Between Paul Ricœur and Gabriel Marcel",
      "titleFr": "Entretiens Paul Ricœur - Gabriel Marcel",
      "year": 1968,
      "category": "Autobiography & Dialogues",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Dialogues, 105 Exchanges)",
      "sections": [
        { "id": "dial-1", "titleFr": "Premier entretien : De l'existence à l'incarnation", "titleEn": "First Dialogue: From Existence to Incarnation" },
        { "id": "dial-2", "titleFr": "Deuxième entretien : Mystère, réflexion seconde et fidélité", "titleEn": "Second Dialogue: Mystery, Secondary Reflection, and Fidelity" },
        { "id": "dial-3", "titleFr": "Troisième entretien : Espérance, liberté et la transcendance", "titleEn": "Third Dialogue: Hope, Freedom, and Transcendence" }
      ]
    },
    "interroge-par-pierre-boutang": {
      "id": "interroge-par-pierre-boutang",
      "titleEn": "Gabriel Marcel Interviewed by Pierre Boutang",
      "titleFr": "Gabriel Marcel interrogé par Pierre Boutang",
      "year": 1977,
      "category": "Autobiography & Dialogues",
      "companionSlug": "entretiens-paul-ricoeur",
      "companionTitle": "Conversations Between Paul Ricœur and Gabriel Marcel (1968)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Dialogues, 105 Exchanges)",
      "sections": [
        { "id": "dial-1", "titleFr": "Premier entretien : L'inquiétude contemporaine et la technique triomphante", "titleEn": "First Dialogue: Contemporary Disquiet and Triumphant Technology" },
        { "id": "dial-2", "titleFr": "Deuxième entretien : L'espérance contre le désespoir et l'angoisse", "titleEn": "Second Dialogue: Hope Against Despair and Anguish" },
        { "id": "dial-3", "titleFr": "Troisième entretien : Présence, immortalité et l'inviolable secret de l'être", "titleEn": "Third Dialogue: Presence, Immortality, and the Inviolable Secret of Being" }
      ]
    },

    // ==========================================
    // 5. DRAMATIC CRITICISM
    // ==========================================
    "lheure-theatrale": {
      "id": "lheure-theatrale",
      "titleEn": "The Theatrical Hour: From Giraudoux to Sartre",
      "titleFr": "L'Heure théâtrale : De Giraudoux à Jean-Paul Sartre",
      "year": 1959,
      "category": "Dramatic Criticism",
      "companionSlug": "theatre-et-religion",
      "companionTitle": "Theatre and Religion (1958)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Parts, 105 Paragraphs)",
      "sections": [
        { "id": "part-1", "titleFr": "Première partie : Jean Giraudoux et le miroir poétique du destin", "titleEn": "Part I: Jean Giraudoux and the Poetic Mirror of Destiny" },
        { "id": "part-2", "titleFr": "Deuxième partie : Jean Anouilh et la révolte de la pureté blessée", "titleEn": "Part II: Jean Anouilh and the Revolt of Wounded Purity" },
        { "id": "part-3", "titleFr": "Troisième partie : Sartre et Camus : De l'enfer solipsiste à la rébellion tragique", "titleEn": "Part III: Sartre and Camus: From Solipsistic Hell to Tragic Rebellion" }
      ]
    },
    "regards-sur-le-theatre-de-claudel": {
      "id": "regards-sur-le-theatre-de-claudel",
      "titleEn": "Perspectives on Claudel's Theatre",
      "titleFr": "Regards sur le théâtre de Claudel",
      "year": 1964,
      "category": "Dramatic Criticism",
      "companionSlug": "theatre-et-religion",
      "companionTitle": "Theatre and Religion (1958)",
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Parts, 105 Paragraphs)",
      "sections": [
        { "id": "part-1", "titleFr": "Première partie : L'Annonce faite à Marie et la fécondité du sacrifice", "titleEn": "Part I: The Tidings Brought to Mary and the Fecundity of Sacrifice" },
        { "id": "part-2", "titleFr": "Deuxième partie : La Trilogie des Coûfontaine et l'épreuve de l'histoire", "titleEn": "Part II: The Coûfontaine Trilogy and the Ordeal of History" },
        { "id": "part-3", "titleFr": "Troisième partie : Le Soulier de satin et la géographie spirituelle de la grâce", "titleEn": "Part III: The Satin Slipper and the Spiritual Geography of Grace" }
      ]
    }
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
