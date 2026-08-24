const CACHE_NAME = "krish-cosmic-calendar-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icon.png"
];


self.addEventListener("install", function(event) {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(function(cache) {

                return cache.addAll(
                    FILES_TO_CACHE
                );

            })

    );

});


self.addEventListener("activate", function(event) {

    event.waitUntil(

        caches.keys().then(function(keys) {

            return Promise.all(

                keys
                    .filter(function(key) {

                        return key !== CACHE_NAME;

                    })

                    .map(function(key) {

                        return caches.delete(key);

                    })

            );

        })

    );

});


self.addEventListener("fetch", function(event) {

    event.respondWith(

        caches.match(event.request)
            .then(function(cachedFile) {

                if (cachedFile) {

                    return cachedFile;

                }

                return fetch(event.request);

            })

    );

});
