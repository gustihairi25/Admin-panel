self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Biarkan request lewat tanpa cache untuk admin panel agar data selalu baru
  e.respondWith(fetch(e.request));
});
