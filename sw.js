const CACHE_NAME = 'note-s-v1';
const CACHE_ASSETS = [
  '/note-s/',
  '/note-s/index.html',
  '/note-s/style.css',
  '/note-s/sw.js',
  '/note-s/regSw.js',
  '/note-s/js/app.js',
  '/note-s/js/render.js',
  '/note-s/js/component/add-note.js',
  '/note-s/js/data/config.js',
  '/note-s/js/data/storage.js',
  '/note-s/js/template/template-creator.js',
  '/note-s/js/utilities/data-format.js',
  '/note-s/js/utilities/form-handle.js',
  '/note-s/js/utilities/modal-settings.js',
  '/note-s/js/utilities/remove-item.js',
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
