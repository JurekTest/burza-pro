self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('burza-pro').then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './flash.mp3',
        './thunder.mp3',
        './alert.mp3'
      ]);
    })
  );
});
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
