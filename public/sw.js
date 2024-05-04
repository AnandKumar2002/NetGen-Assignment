let CACHE_NAME = 'codePwa';

var urlCache = [
    '/',
    '/Assignment-Icon.png',
    '/NetGen-Assignment/article',
    '/NetGen-Assignment/login',
    '/NetGen-Assignment/manifest.json',
    '/NetGen-Assignment/static/js/bundle.js',
    '/NetGen-Assignment/static/js/main.chunk.js',
    '/NetGen-Assignment/static/js/vendors~main.chunk.js',
    '/article',
    '/home',
    '/login',
    '/manifest.json',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/vendors~main.chunk.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    if (response) {
                        return response;
                    }
                    let fUrl = event.request.clone();
                    return fetch(fUrl)
                        .catch(() => caches.match('/offline.html'));
                })
        );
    }
});
