const CACHE_NAME = 'info-search-v2';
const ASSETS_TO_CACHE = [
  '정보검색.html',
  'manifest.json'
];

// 설치 시 리소스 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 네트워크 요청 가로채기 (오프라인 대응)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});