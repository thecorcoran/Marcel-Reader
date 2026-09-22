/**
 * Gabriel Marcel Reader — Service Worker (PWA Offline Engine)
 */
const CACHE_NAME = 'marcel-reader-v15';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './css/main.css',
  './css/components.css',
  './data/glossary.js',
  './data/corpus.js',
  './data/works/positions-mystere-ontologique.js',
  './data/works/le-monde-casse.js',
  './data/works/mystere-de-letre-1.js',
  './data/works/mystere-de-letre-2.js',
  './data/works/etre-et-avoir.js',
  './data/works/homo-viator.js',
  './data/works/du-refus-a-linvocation.js',
  './data/works/un-homme-de-dieu.js',
  './data/works/rome-nest-plus-dans-rome.js',
  './data/works/le-dard.js',
  './data/works/journal-metaphysique.js',
  './data/works/les-hommes-contre-lhumain.js',
  './data/works/la-dignite-humaine.js',
  './data/works/lhomme-problematique.js',
  './data/works/presence-et-immortalite.js',
  './data/works/entretiens-paul-ricoeur.js',
  './data/works/pour-une-sagesse-tragique.js',
  './data/works/la-chapelle-ardente.js',
  './data/works/le-chemin-de-crete.js',
  './data/works/le-declin-de-la-sagesse.js',
  './data/works/theatre-et-religion.js',
  './data/works/en-chemin-vers-quel-eveil.js',
  './data/works/la-metaphysique-de-royce.js',
  './data/works/fragments-philosophiques.js',
  './data/works/interroge-par-pierre-boutang.js',
  './data/works/an-autobiographical-essay.js',
  './data/works/lheure-theatrale.js',
  './data/works/regards-sur-le-theatre-de-claudel.js',
  './data/works/le-palais-de-sable.js',
  './data/works/la-grace.js',
  './data/works/le-coeur-des-autres.js',
  './data/works/liconoclaste.js',
  './data/works/le-quatuor-en-fa-diese.js',
  './data/works/le-regard-neuf.js',
  './data/works/la-soif.js',
  './data/works/le-fanal.js',
  './data/works/le-signe-de-la-croix.js',
  './data/works/lemissaire.js',
  './data/works/la-fin-des-temps.js',
  './data/works/croissez-et-multipliez.js',
  './data/works/mon-temps-nest-pas-le-votre.js',
  './data/works/la-dimension-florestan.js',
  './js/reader.js',
  './js/notes.js',
  './js/search.js',
  './js/app.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

