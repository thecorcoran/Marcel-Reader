/**
 * Gabriel Marcel — Archival Horizon & Complete Uncollected Works Catalogue
 * Comprehensive register acknowledging Gabriel Marcel's ~800+ weekly theatrical chronicles,
 * broadcast radio dialogues, philosophical reviews, and musicological writings (1911–1973).
 */
(function() {
  const MARCEL_ARCHIVAL_DATA = {
    overview: {
      title: "The Grand Marcelian Archival Horizon: Towards the Unified Digital Corpus",
      subtitle: "Acknowledging over 60 years of theatrical chronicles, broadcast dialogues, philosophical essays, and musicological writings.",
      manifesto: "Beyond the 42 published canonical volumes fully presented in this Reader, Gabriel Marcel was one of the most prolific cultural witnesses of 20th-century Europe. As chief drama critic for the Nouvelle Revue Française (NRF), Les Nouvelles Littéraires, and L'Europe Nouvelle, and as a regular voice on ORTF Radio France, Marcel produced over 800 critical chronicles, dozens of recorded broadcast dialogues, and extensive musicological reflections. This register catalogues that vast intellectual continent and defines the roadmap towards unifying all dispersed Marcelian papers into this single open-access digital sanctuary.",
      canonicalCount: 42,
      chroniclesEstimatedCount: "800+",
      broadcastHoursEstimate: "120+ hours",
      reviewsCount: "250+"
    },
    sections: [
      {
        id: "theatrical-chronicles",
        title: "I. The Complete Theatrical Chronicles (Chroniques théâtrales, 1911–1973)",
        badge: "800+ Weekly Columns",
        description: "For more than five decades, Gabriel Marcel attended and reviewed virtually every major European theatrical premiere in Paris, London, and international festivals. His drama criticism was not merely journalistic reporting, but an active laboratory for his concrete existential philosophy.",
        majorPeriods: [
          {
            period: "1911–1925: Early Critical Formations",
            periodicals: "Revue Hebdomadaire, L'Opinion, NRF",
            highlights: "Early critiques of Henrik Ibsen, August Strindberg, François de Curel, Paul Claudel, and Luigi Pirandello. Formulated the link between dramatic tension and ontological questioning."
          },
          {
            period: "1925–1940: The Golden Age of French Interwar Drama",
            periodicals: "L'Europe Nouvelle, La Nouvelle Revue Française (NRF)",
            highlights: "Landmark weekly reviews of Jean Giraudoux (*Siegfried*, *La Guerre de Troie n'aura pas lieu*), Jean Anouilh, Ferdinand Bruckner, and Arthur Miller. Deep phenomenological engagement with stage presence."
          },
          {
            period: "1944–1959: The Post-War Existential & Absurdist Theater",
            periodicals: "Les Nouvelles Littéraires, Témoignage Chrétien, Carrefour",
            highlights: "Seminal first-night reviews of Jean-Paul Sartre (*Huis Clos*, *Les Mains sales*), Albert Camus (*Caligula*, *Les Justes*), Samuel Beckett (*En attendant Godot*), and Eugène Ionesco. Critical debates on freedom vs. despair."
          },
          {
            period: "1960–1973: Later Retrospectives & Global Theater",
            periodicals: "Revue des Deux Mondes, Écrits de Paris",
            highlights: "Critiques of Harold Pinter, Edward Albee, Friedrich Dürrenmatt, and theatrical festivals in Avignon, Edinburgh, and Salzburg."
          }
        ]
      },
      {
        id: "broadcast-dialogues",
        title: "II. Broadcast Dialogues, Radio Series & Recorded Archives (ORTF / INA)",
        badge: "Radio France & INA Archives",
        description: "Marcel was a master of spontaneous verbal dialogue. His recorded radio and television interviews represent some of his most accessible and profound philosophical expositions.",
        entries: [
          {
            title: "Entretiens avec Pierre Sipriot (1953)",
            medium: "Radiodiffusion-Télévision Française (RTF)",
            scope: "12 Broadcast Episodes",
            summary: "Extensive audio dialogues tracing Marcel's early childhood, the loss of his mother, the trauma of World War I Red Cross inquiries, and the emergence of the Metaphysical Journal."
          },
          {
            title: "Entretiens Paul Ricœur - Gabriel Marcel (1968)",
            medium: "Aubier-Montaigne / Radio Broadcast Recordings",
            scope: "6 Seminal Dialogues (Included Unabridged in Reader)",
            summary: "The definitive master-dialogue between France's two greatest thinkers of existence and hermeneutics, exploring transcendence, drama, and hope."
          },
          {
            title: "Gabriel Marcel interrogé par Pierre Boutang (1977)",
            medium: "Archives de l'INA / TF1 / Éditions J.-M. Place",
            scope: "3 Major Recorded Broadcasts (Included Unabridged in Reader)",
            summary: "Profound philosophical and metaphysical conversations on death, communion, creative fidelity, and music recorded at the end of Marcel's life."
          },
          {
            title: "Entretiens avec Christian Chabanis (1973)",
            medium: "Radio France / Published in 'Dieu existe-t-il ?'",
            scope: "Broadcast Dialogue & Critical Testimony",
            summary: "Marcel's late reflections on faith, the mystery of suffering, prayer, and the critique of contemporary nihilism."
          },
          {
            title: "Entretiens avec Paul Valadier & Jean-Marie Paupert (1970–1972)",
            medium: "Revue Études & Semaines des Intellectuels Catholiques",
            scope: "Dialogues on Faith, Secularity, and the Church",
            summary: "Discussions on the post-conciliar spiritual landscape and the crisis of human values in consumer society."
          }
        ]
      },
      {
        id: "philosophical-reviews",
        title: "III. Philosophical Book Reviews & Critical Rejoinders (1912–1973)",
        badge: "250+ Journal Essays",
        description: "Throughout his life, Marcel was an active reviewer for leading academic philosophical journals, including the *Revue de Métaphysique et de Morale*, *Giornale di Metafisica*, *Critique*, and *Revue Philosophique de Louvain*.",
        entries: [
          {
            title: "The Library of Living Philosophers: 'Replies to My Critics' (1984)",
            publisher: "Open Court Publishing (Vol. XVII)",
            scope: "22 Detailed Philosophical Rejoinders",
            summary: "Marcel's exhaustive point-by-point responses to essays by Paul Ricœur, Emmanuel Levinas, William Ernest Hocking, James Collins, Donald M. MacKinnon, and John E. Smith."
          },
          {
            title: "Critical Review of Jean-Paul Sartre's 'L'Être et le néant' (1946)",
            journal: "Homo Viator & Les Temps Modernes debates",
            summary: "Marcel's critique of Sartrean bad faith, the gaze of the Other, and the denial of communion, countering with the ontology of intersubjective presence."
          },
          {
            title: "Reviews on German Phenomenology & Existentialism (1925–1960)",
            journal: "Revue de Métaphysique et de Morale",
            summary: "Foundational introductions of Karl Jaspers, Martin Buber (*I and Thou*), Martin Heidegger, and Max Scheler to the French-speaking intellectual world."
          },
          {
            title: "Studies on Rainer Maria Rilke, Peter Wust & Gustave Thibon",
            journal: "Collected in 'Homo Viator' and 'Pour une sagesse tragique'",
            summary: "Phenomenological meditations on poetry, holy patience, tragedy, and rural peasant metaphysics."
          }
        ]
      },
      {
        id: "musicological-writings",
        title: "IV. Musicological Writings & Musical Compositions",
        badge: "Phenomenology of Music",
        description: "Gabriel Marcel repeatedly insisted: 'I cannot understand my philosophy without my music.' An accomplished improviser and pianist, he composed numerous piano sonatas and vocal melodies.",
        entries: [
          {
            title: "Gabriel Marcel et la musique : Textes et témoignages",
            scope: "Critical Musicological Compendium",
            summary: "Essays on the ontology of melody, musical improvisation as secondary reflection, and the spiritual worlds of J.S. Bach, Beethoven, Mozart, and César Franck."
          },
          {
            title: "Musical Compositions & Recorded Improvisations (1945–1970)",
            scope: "Original Musical Manuscripts",
            summary: "Settings of poems by Charles Baudelaire, Paul Claudel, and Rainer Maria Rilke, alongside preserved audio recordings of Marcel's piano improvisations."
          }
        ]
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MARCEL_ARCHIVAL_DATA };
  }
  if (typeof window !== 'undefined') {
    window.MARCEL_ARCHIVAL_DATA = MARCEL_ARCHIVAL_DATA;
  }
})();
