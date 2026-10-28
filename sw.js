// RoHub moved to https://rohub-app.github.io. This replaces the old offline copy, clears it and removes itself.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.map(k => caches.delete(k))))
    .then(() => self.registration.unregister()));
});
