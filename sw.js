const CACHE_NAME = 'info-app-v3'; // 버전을 올려서 강제 업데이트 유도
const ASSETS = ['index.html', 'manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
