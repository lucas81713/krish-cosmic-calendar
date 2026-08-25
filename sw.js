const CACHE_NAME =
    "krish-cosmic-calendar-v2";


const FILES_TO_CACHE = [

    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",

    "./icon-180.png",
    "./icon-192.png",
    "./icon-512.png"

];


self.addEventListener(
    "install",
    function (event) {

        event.waitUntil(

            caches
                .open(CACHE_NAME)
                .then(function (cache) {

                    return cache.addAll(
                        FILES_TO_CACHE
                    );

                })

        );

    }
);


self.addEventListener(
    "activate",
    function (event) {

        event.waitUntil(

            caches
                .keys()
                .then(function (keys) {

                    return Promise.all(

                        keys
                            .filter(
                                key =>
                                    key !==
                                    CACHE_NAME
                            )
                            .map(
                                key =>
                                    caches.delete(
                                        key
                                    )
                            )

                    );

                })

        );

    }
);


self.addEventListener(
    "fetch",
    function (event) {

        event.respondWith(

            caches
                .match(event.request)
                .then(function (cached) {

                    return (
                        cached ||
                        fetch(event.request)
                    );

                })

        );

    }
);
