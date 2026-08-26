// =========================================
// KRISH'S COSMIC CALENDAR
// NOTIFICATION SERVICE WORKER
// =========================================

self.addEventListener(
    "install",
    event => {

        console.log(
            "🌌 Cosmic Service Worker installed."
        );

        self.skipWaiting();

    }
);


self.addEventListener(
    "activate",
    event => {

        event.waitUntil(
            self.clients.claim()
        );

        console.log(
            "🚀 Cosmic Service Worker activated."
        );

    }
);


// =========================================
// NOTIFICATION CLICK
// =========================================

self.addEventListener(
    "notificationclick",
    event => {

        event.notification.close();


        event.waitUntil(

            self.clients.matchAll(
                {
                    type: "window",
                    includeUncontrolled: true
                }
            )

            .then(
                clients => {

                    for (
                        const client of clients
                    ) {

                        if (
                            "focus" in client
                        ) {

                            return client.focus();

                        }

                    }


                    return self.clients.openWindow(
                        "./"
                    );

                }
            )

        );

    }
);
