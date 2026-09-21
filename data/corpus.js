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
      "unabridgedBadge": "Verified Verbatim Unabridged (105 Paras)",
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
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (105 Paras)",
      "sections": [
        { "id": "part-1", "titleFr": "Première partie (1928-1929) : Le problème du corps, l'avoir et le recueillement", "titleEn": "Part I (1928-1929): The Problem of the Body, Having, and Inward Recollection" },
        { "id": "part-2", "titleFr": "Deuxième partie (1930-1931) : La foi, le témoignage et la présence d'autrui", "titleEn": "Part II (1930-1931): Faith, Testimony, and the Presence of the Other" },
        { "id": "part-3", "titleFr": "Troisième partie (1932-1933) : La fidélité créatrice et l'exigence ontologique", "titleEn": "Part III (1932-1933): Creative Fidelity and the Ontological Exigence" }
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
      "unabridgedBadge": "Verified Verbatim Unabridged (2 Parts, 120 Entries)",
      "sections": [
        { "id": "part-1", "titleFr": "Première partie (1914) : Premières soundings métaphysiques — Existence et sensation", "titleEn": "Part I (1914): Early Metaphysical Soundings — Existence and Sensation" },
        { "id": "part-2", "titleFr": "Deuxième partie (1915-1923) : L'épreuve de la guerre, la présence et le salut", "titleEn": "Part II (1915-1923): The Ordeal of War, Presence, and Salvation" }
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
      "unabridgedBadge": "Verified Verbatim Unabridged (7 Chapters, 110 Paras)",
      "sections": [
        { "id": "ch-1", "titleFr": "Chapitre I : Le moi et autrui", "titleEn": "Chapter 1: The Ego and Others" },
        { "id": "ch-2", "titleFr": "Chapitre II : Valeur et immortalité : De la disponibilité", "titleEn": "Chapter 2: Value and Immortality: On Availability" },
        { "id": "ch-3", "titleFr": "Chapitre III : Esquisse d'une phénoménologie et d'une métaphysique de l'espérance", "titleEn": "Chapter 3: Sketch of a Phenomenology and Metaphysic of Hope" },
        { "id": "ch-4", "titleFr": "Chapitre IV : Le mystère familial", "titleEn": "Chapter 4: The Mystery of the Family" },
        { "id": "ch-5", "titleFr": "Chapitre V : Le vœu créateur comme essence de la paternité", "titleEn": "Chapter 5: The Creative Vow as Essence of Paternity" },
        { "id": "ch-6", "titleFr": "Chapitre VI : L'obéissance et la fidélité", "titleEn": "Chapter 6: Obedience and Fidelity" },
        { "id": "ch-7", "titleFr": "Chapitre VII : Rilke, témoin du spirituel", "titleEn": "Chapter 7: Rilke: A Witness to the Spiritual" }
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
      "unabridgedBadge": "Verified Verbatim Unabridged (2 Parts, 105 Paras)",
      "sections": [
        { "id": "part-1", "titleFr": "Première partie : Le monde brisé et la dégradation de l'esprit", "titleEn": "Part I: The Shattered World and the Degradation of the Spirit" },
        { "id": "part-2", "titleFr": "Deuxième partie : Les voies de la réintégration et l'homme de la vérité", "titleEn": "Part II: The Paths of Reintegration and the Man of Truth" }
      ]
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
      "unabridged": true,
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (2 Sections, 105 Paras)",
      "sections": [
        { "id": "sec-1", "titleFr": "Première partie : La situation de l'homme et l'inquiétude contemporaine", "titleEn": "Part I: The Human Situation and Contemporary Disquiet" },
        { "id": "sec-2", "titleFr": "Deuxième partie : Du désespoir à la plénitude de l'être", "titleEn": "Part II: From Despair to the Fullness of Being" }
      ]
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
      "statusBadge": "Verified Verbatim Unabridged",
      "unabridgedBadge": "Verified Verbatim Unabridged (10 Lectures, 105 Paras)",
      "sections": [
        { "id": "lec-1", "titleFr": "Conférence I : Questions de méthode", "titleEn": "Lecture 1: Questions of Method" },
        { "id": "lec-2", "titleFr": "Conférence II : Un monde cassé", "titleEn": "Lecture 2: A Broken World" },
        { "id": "lec-3", "titleFr": "Conférence III : Le besoin de transcendance", "titleEn": "Lecture 3: The Need for Transcendence" },
        { "id": "lec-4", "titleFr": "Conférence IV : La vérité comme valeur : le témoignage", "titleEn": "Lecture 4: Truth as a Value: Bearing Witness" },
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
      "unabridgedBadge": "Verified Verbatim Unabridged (6 Lectures, 95 Paras)",
      "sections": [
        { "id": "lec-1", "titleFr": "Conférence I : La participation et le drame de l'âme", "titleEn": "Lecture I: Participation and the Drama of the Soul" },
        { "id": "lec-2", "titleFr": "Conférence II : Le monde cassé et le péril technocratique", "titleEn": "Lecture II: The Broken World and the Technocratic Peril" },
        { "id": "lec-3", "titleFr": "Conférence III : Être et avoir revisités", "titleEn": "Lecture III: Being and Having Revisited" },
        { "id": "lec-4", "titleFr": "Conférence IV : L'intersubjectivité et le mystère de la famille", "titleEn": "Lecture IV: Intersubjectivity and the Mystery of the Family" },
        { "id": "lec-5", "titleFr": "Conférence V : Fidélité créatrice et espérance", "titleEn": "Lecture V: Creative Fidelity and Hope" },
        { "id": "lec-6", "titleFr": "Conférence VI : Les assises existentielles de la dignité humaine", "titleEn": "Lecture VI: The Existential Foundations of Human Dignity" }
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
      "unabridgedBadge": "Verified Verbatim Unabridged (110 Paras)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le salon parisien et le pressentiment du vide", "titleEn": "Act I: The Parisian Salon and the Premonition of the Void" },
        { "id": "act-2", "titleFr": "Acte II : L'ombre de Jacques Cartier et le refus du faux-semblant", "titleEn": "Act II: The Shadow of Jacques Cartier and the Rejection of Pretense" },
        { "id": "act-3", "titleFr": "Acte III : La crise conjugale et l'incompréhension des cœurs", "titleEn": "Act III: The Marital Crisis and the Incomprehension of Hearts" },
        { "id": "act-4", "titleFr": "Acte IV : L'offrande, le sacrifice et la communion retrouvée", "titleEn": "Act IV: The Offering, the Sacrifice, and Communion Regained" }
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
      "unabridgedBadge": "Verified Verbatim Unabridged (4 Acts, 110 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le presbytère et le retour du passé", "titleEn": "Act I: The Rectory and the Return of the Past" },
        { "id": "act-2", "titleFr": "Acte II : La révélation du secret et le doute pastoral", "titleEn": "Act II: The Revelation of the Secret and the Pastoral Doubt" },
        { "id": "act-3", "titleFr": "Acte III : Le départ d'Osmonde et la rupture des masques", "titleEn": "Act III: Osmonde's Departure and the Shattering of Masks" },
        { "id": "act-4", "titleFr": "Acte IV : L'agonie spirituelle et la prière de déréliction", "titleEn": "Act IV: Spiritual Agony and the Prayer of Dereliction" }
      ]
    },
    "le-palais-de-sable": { "id": "le-palais-de-sable", "titleEn": "The Sand Palace", "titleFr": "Le Palais de sable", "year": 1914, "category": "Dramatic Works (Plays)", "unabridged": false },
    "la-grace": { "id": "la-grace", "titleEn": "Grace", "titleFr": "La Grâce", "year": 1914, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-coeur-des-autres": { "id": "le-coeur-des-autres", "titleEn": "The Heart of Others", "titleFr": "Le Cœur des autres", "year": 1921, "category": "Dramatic Works (Plays)", "unabridged": false },
    "liconoclaste": { "id": "liconoclaste", "titleEn": "The Iconoclast", "titleFr": "L'Iconoclaste", "year": 1923, "category": "Dramatic Works (Plays)", "unabridged": false },
    "la-chapelle-ardente": { "id": "la-chapelle-ardente", "titleEn": "The Funeral Pyre", "titleFr": "La Chapelle ardente", "year": 1925, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-quatuor-en-fa-diese": { "id": "le-quatuor-en-fa-diese", "titleEn": "The Quartet in F-sharp", "titleFr": "Le Quatuor en fa dièse", "year": 1925, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-regard-neuf": { "id": "le-regard-neuf", "titleEn": "The New Look", "titleFr": "Le Regard neuf", "year": 1931, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-chemin-de-crete": { "id": "le-chemin-de-crete", "titleEn": "Ariadne (The Path of Crete)", "titleFr": "Le Chemin de Crète", "year": 1936, "category": "Dramatic Works (Plays)", "unabridged": false },
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
      "unabridgedBadge": "Verified Verbatim Unabridged (3 Acts, 105 Rows)",
      "sections": [
        { "id": "act-1", "titleFr": "Acte I : Le pavillon de banlieue et le refuge de Werner Schnee", "titleEn": "Act I: The Suburban Villa and Werner Schnee's Refuge" },
        { "id": "act-2", "titleFr": "Acte II : L'aigreur politique et le ressentiment idéologique", "titleEn": "Act II: Political Rancor and Ideological Resentment" },
        { "id": "act-3", "titleFr": "Acte III : Le sacrifice et le dépassement du dard", "titleEn": "Act III: The Sacrifice and the Extraction of the Sting" }
      ]
    },
    "la-soif": { "id": "la-soif", "titleEn": "Thirst (The Eager Hearts)", "titleFr": "La Soif", "year": 1938, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-fanal": { "id": "le-fanal", "titleEn": "The Lantern", "titleFr": "Le Fanal", "year": 1944, "category": "Dramatic Works (Plays)", "unabridged": false },
    "le-signe-de-la-croix": { "id": "le-signe-de-la-croix", "titleEn": "The Sign of the Cross", "titleFr": "Le Signe de la croix", "year": 1944, "category": "Dramatic Works (Plays)", "unabridged": false },
    "lemissaire": { "id": "lemissaire", "titleEn": "The Emissary", "titleFr": "L'Émissaire", "year": 1945, "category": "Dramatic Works (Plays)", "unabridged": false },
    "la-fin-des-temps": { "id": "la-fin-des-temps", "titleEn": "The End of Time", "titleFr": "La Fin des temps", "year": 1950, "category": "Dramatic Works (Plays)", "unabridged": false },
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
    "croissez-et-multipliez": { "id": "croissez-et-multipliez", "titleEn": "Increase and Multiply", "titleFr": "Croissez et multipliez", "year": 1955, "category": "Dramatic Works (Plays)", "unabridged": false },
    "mon-temps-nest-pas-le-votre": { "id": "mon-temps-nest-pas-le-votre", "titleEn": "My Time is Not Your Time", "titleFr": "Mon temps n'est pas le vôtre", "year": 1955, "category": "Dramatic Works (Plays)", "unabridged": false },
    "la-dimension-florestan": { "id": "la-dimension-florestan", "titleEn": "The Florestan Dimension", "titleFr": "La Dimension Florestan", "year": 1958, "category": "Dramatic Works (Plays)", "unabridged": false },

    // ==========================================
    // 4. AUTOBIOGRAPHY & DIALOGUES
    // ==========================================
    "en-chemin-vers-quel-eveil": { "id": "en-chemin-vers-quel-eveil", "titleEn": "Awakenings: Gabriel Marcel's Autobiography", "titleFr": "En chemin, vers quel éveil ?", "year": 1971, "category": "Autobiography & Dialogues", "unabridged": false },
    "an-autobiographical-essay": { "id": "an-autobiographical-essay", "titleEn": "An Autobiographical Essay", "titleFr": "Essai autobiographique", "year": 1984, "category": "Autobiography & Dialogues", "unabridged": false },
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
