const CACHE_NAME = 'dailyCalulations';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png'
];

// تسجيل الملفات في الذاكرة
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// استدعاء الملفات من الذاكرة عند قطع النت
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
