const CACHE_NAME = 'note-s-v1';
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/sw.js',
  '/regSw.js',
  '/js/app.js',
  '/js/render.js',
  '/js/component/add-note.js',
  '/js/data/config.js',
  '/js/data/storage.js',
  '/js/template/template-creator.js',
  '/js/utilities/data-format.js',
  '/js/utilities/form-handle.js',
  '/js/utilities/modal-settings.js',
  '/js/utilities/remove-item.js',
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const response = await cache.match(e.request);
      const fetchRequest = fetch(e.request).then((networkResponse) => {
        if (!networkResponse.ok) return networkResponse;

        cache.put(e.request, networkResponse.clone());
        return networkResponse;
      });

      return response || fetchRequest;
    })
  );
});
