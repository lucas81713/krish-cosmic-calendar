// =========================================
// KRISH'S COSMIC CALENDAR
// Markham, Ontario
// =========================================

const TIME_ZONE = "America/Toronto";


// =========================================
// DAILY FACTS
// =========================================

const dailyFacts = [

    {
        category: "SPACE",
        icon: "🔭",
        title: "Neutron stars are unbelievably dense.",
        text: "A teaspoon of neutron-star material could weigh around a billion tons on Earth.",
        pun: "That's a pretty heavy fact."
    },

    {
        category: "PLANETS",
        icon: "🪐",
        title: "A day on Venus is longer than its year.",
        text: "Venus takes about 243 Earth days to rotate once, but only about 225 days to orbit the Sun.",
        pun: "Venus really likes taking its time."
    },

    {
        category: "AVIATION",
        icon: "✈️",
        title: "The Antonov An-225 was enormous.",
        text: "The An-225 Mriya was the heaviest aircraft ever built and had six engines.",
        pun: "It really took 'going big' seriously."
    },

    {
        category: "SUN",
        icon: "☀️",
        title: "The Sun is extremely massive.",
        text: "The Sun contains about 99.86% of the mass of the Solar System.",
        pun: "The Sun has a massive ego."
    },

    {
        category: "MOON",
        icon: "🌙",
        title: "The Moon is slowly moving away from Earth.",
        text: "The Moon moves away from Earth by roughly 3.8 centimetres every year.",
        pun: "It just needs some space."
    },

    {
        category: "ROCKETS",
        icon: "🚀",
        title: "Rockets don't need air to fly.",
        text: "Rockets accelerate by throwing exhaust gases backward, allowing them to work in the vacuum of space.",
        pun: "Newton really launched that idea."
    },

    {
        category: "EARTH",
        icon: "🌍",
        title: "Earth is moving incredibly fast.",
        text: "Earth travels around the Sun at roughly 107,000 kilometres per hour.",
        pun: "And you thought your car was fast."
    },

    {
        category: "STARS",
        icon: "⭐",
        title: "Some stars are absolutely gigantic.",
        text: "Some red supergiants are hundreds of times wider than our Sun.",
        pun: "That's one stellar growth spurt."
    },

    {
        category: "SCIENCE",
        icon: "🔬",
        title: "Light has a speed limit.",
        text: "Light travels through empty space at about 299,792 kilometres every second.",
        pun: "Finally, something faster than a plane."
    },

    {
        category: "SPACE",
        icon: "🌌",
        title: "Space isn't completely silent.",
        text: "Sound cannot travel through the vacuum of space, but scientists can convert other space signals into sounds we can hear.",
        pun: "The universe just needed a microphone."
    },

    {
        category: "AVIATION",
        icon: "🛫",
        title: "Commercial planes fly surprisingly high.",
        text: "Most airliners cruise around 10–12 kilometres above Earth's surface.",
        pun: "Talk about rising to the occasion."
    },

    {
        category: "BLACK HOLES",
        icon: "🕳️",
        title: "Black holes aren't cosmic vacuum cleaners.",
        text: "A black hole's gravity behaves like any other object's gravity at the same distance.",
        pun: "No need to suck it up."
    },

    {
        category: "GALAXIES",
        icon: "🌌",
        title: "The Milky Way is enormous.",
        text: "Our galaxy is roughly 100,000 light-years across.",
        pun: "That's one seriously long commute."
    }

];


// =========================================
// ASTRONOMICAL EVENTS
// =========================================

const astronomyEvents = [

    {
        date: "2026-08-27",
        name: "Partial Lunar Eclipse",
        emoji: "🌑",
        type: "eclipse",
        description: "A partial lunar eclipse occurs."
    },

    {
        date: "2026-08-28",
        name: "Partial Lunar Eclipse",
        emoji: "🌑",
        type: "eclipse",
        description: "The lunar eclipse continues."
    },

    {
        date: "2026-09-23",
        name: "September Equinox",
        emoji: "🍂",
        type: "season",
        description: "The Sun crosses the celestial equator."
    },

    {
        date: "2026-10-21",
        name: "Orionid Meteor Shower",
        emoji: "☄️",
        type: "meteor",
        description: "The Orionids reach their peak."
    },

    {
        date: "2026-11-17",
        name: "Leonid Meteor Shower",
        emoji: "☄️",
        type: "meteor",
        description: "The Leonids reach their peak."
    },

    {
        date: "2026-11-24",
        name: "Supermoon",
        emoji: "🌕",
        type: "moon",
        description: "A full Moon occurs close to the Moon's closest approach to Earth."
    },

    {
        date: "2026-12-13",
        name: "Geminid Meteor Shower",
        emoji: "☄️",
        type: "meteor",
        description: "The Geminids reach their peak."
    },

    {
        date: "2026-12-21",
        name: "December Solstice",
        emoji: "❄️",
        type: "season",
        description: "Winter officially begins in the Northern Hemisphere."
    }

];


// =========================================
// GET MARKHAM DATE
// =========================================

function getMarkhamDate() {

    const parts =
        new Intl.DateTimeFormat(
            "en-CA",
            {
                timeZone: TIME_ZONE,
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }
        ).formatToParts(new Date());


    const result = {};


    parts.forEach(part => {

        if (part.type !== "literal") {

            result[part.type] =
                part.value;

        }

    });


    return {

        year:
            Number(result.year),

        month:
            Number(result.month),

        day:
            Number(result.day)

    };

}


const today =
    getMarkhamDate();


let displayedYear =
    today.year;


let displayedMonth =
    today.month - 1;


// =========================================
// DATE KEY
// =========================================

function dateKey(
    year,
    month,
    day
) {

    return (
        year +
        "-" +
        String(month).padStart(2, "0") +
        "-" +
        String(day).padStart(2, "0")
    );

}


// =========================================
// FIND EVENTS
// =========================================

function getEventsForDate(key) {

    return astronomyEvents.filter(
        event =>
            event.date === key
    );

}


// =========================================
// CALENDAR
// =========================================

function renderCalendar() {

    const calendar =
        document.getElementById(
            "calendar"
        );


    const monthTitle =
        document.getElementById(
            "calendarMonth"
        );


    if (
        !calendar ||
        !monthTitle
    ) {

        console.error(
            "Calendar elements were not found."
        );

        return;

    }


    calendar.innerHTML =
        "";


    const firstDay =
        new Date(
            displayedYear,
            displayedMonth,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            displayedYear,
            displayedMonth + 1,
            0
        ).getDate();


    monthTitle.textContent =
        new Date(
            displayedYear,
            displayedMonth,
            1
        ).toLocaleDateString(
            "en-US",
            {
                month: "long",
                year: "numeric"
            }
        );


    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const empty =
            document.createElement(
                "div"
            );


        empty.className =
            "day empty";


        calendar.appendChild(
            empty
        );

    }


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const cell =
            document.createElement(
                "div"
            );


        cell.className =
            "day";


        const number =
            document.createElement(
                "div"
            );


        number.className =
            "day-number";


        number.textContent =
            day;


        cell.appendChild(
            number
        );


        const key =
            dateKey(
                displayedYear,
                displayedMonth + 1,
                day
            );


        if (

            displayedYear ===
                today.year &&

            displayedMonth ===
                today.month - 1 &&

            day ===
                today.day

        ) {

            cell.classList.add(
                "today"
            );

        }


        const events =
            getEventsForDate(
                key
            );


        if (
            events.length > 0
        ) {

            const dot =
                document.createElement(
                    "div"
                );


            dot.className =
                "event-dot";


            if (
                events.some(
                    event =>
                        event.type ===
                        "eclipse"
                )
            ) {

                dot.classList.add(
                    "eclipse"
                );

            }


            cell.appendChild(
                dot
            );

        }


        cell.addEventListener(
            "click",
            function () {

                showDate(
                    displayedYear,
                    displayedMonth,
                    day
                );

            }
        );


        calendar.appendChild(
            cell
        );

    }

}


// =========================================
// SHOW DATE
// =========================================

function showDate(
    year,
    month,
    day
) {

    const key =
        dateKey(
            year,
            month + 1,
            day
        );


    const events =
        getEventsForDate(
            key
        );


    const date =
        new Date(
            year,
            month,
            day
        );


    const todayDateElement =
        document.getElementById(
            "todayDate"
        );


    if (
        todayDateElement
    ) {

        todayDateElement.textContent =
            date.toLocaleDateString(
                "en-US",
                {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            );

    }


    const start =
        new Date(
            year,
            0,
            1
        );


    const dayNumber =
        Math.floor(
            (
                date - start
            ) /
            86400000
        );


    const fact =
        dailyFacts[
            Math.abs(dayNumber) %
            dailyFacts.length
        ];


    const factIcon =
        document.getElementById(
            "factIcon"
        );


    const factCategory =
        document.getElementById(
            "factCategory"
        );


    const factTitle =
        document.getElementById(
            "factTitle"
        );


    const factText =
        document.getElementById(
            "factText"
        );


    const punText =
        document.getElementById(
            "punText"
        );


    if (factIcon)
        factIcon.textContent =
            fact.icon;


    if (factCategory)
        factCategory.textContent =
            fact.category;


    if (factTitle)
        factTitle.textContent =
            fact.title;


    if (factText)
        factText.textContent =
            fact.text;


    if (punText)
        punText.textContent =
            fact.pun;


    if (
        events.length > 0
    ) {

        const event =
            events[0];


        if (factIcon)
            factIcon.textContent =
                event.emoji;


        if (factCategory)
            factCategory.textContent =
                "ASTRONOMICAL EVENT";


        if (factTitle)
            factTitle.textContent =
                event.name;


        if (factText)
            factText.textContent =
                event.description;


        if (punText)
            punText.textContent =
                getEventPun(
                    event.type
                );

    }

}


// =========================================
// EVENT PUNS
// =========================================

function getEventPun(type) {

    if (
        type === "eclipse"
    ) {

        return "Looks like the Moon is trying to steal the spotlight.";

    }


    if (
        type === "meteor"
    ) {

        return "These rocks are really making an entrance.";

    }


    if (
        type === "moon"
    ) {

        return "That's one small step for the Moon...";

    }


    if (
        type === "season"
    ) {

        return "The Earth is really changing its angle on things.";

    }


    return "That's out of this world.";

}


// =========================================
// UPCOMING EVENTS
// =========================================

function renderUpcomingEvents() {

    const container =
        document.getElementById(
            "eventsContainer"
        );


    if (!container)
        return;


    container.innerHTML =
        "";


    const todayDate =
        new Date(
            today.year,
            today.month - 1,
            today.day
        );


    const upcoming =
        astronomyEvents
            .map(event => {

                const parts =
                    event.date
                        .split("-")
                        .map(Number);


                const eventDate =
                    new Date(
                        parts[0],
                        parts[1] - 1,
                        parts[2]
                    );


                const difference =
                    Math.ceil(
                        (
                            eventDate -
                            todayDate
                        ) /
                        86400000
                    );


                return {
                    ...event,
                    difference
                };

            })
            .filter(
                event =>
                    event.difference >= 0
            )
            .slice(0, 5);


    if (
        upcoming.length === 0
    ) {

        container.innerHTML = `
            <div class="loading">
                No upcoming events have been added yet.
            </div>
        `;

        return;

    }


    upcoming.forEach(
        event => {

            const element =
                document.createElement(
                    "div"
                );


            element.className =
                "event";


            let countdown;


            if (
                event.difference === 0
            ) {

                countdown =
                    "TODAY";

            }

            else if (
                event.difference === 1
            ) {

                countdown =
                    "TOMORROW";

            }

            else {

                countdown =
                    event.difference +
                    " DAYS";

            }


            const parts =
                event.date
                    .split("-")
                    .map(Number);


            const date =
                new Date(
                    parts[0],
                    parts[1] - 1,
                    parts[2]
                );


            const formatted =
                date.toLocaleDateString(
                    "en-US",
                    {
                        month: "short",
                        day: "numeric"
                    }
                );


            element.innerHTML = `

                <div>

                    <div class="event-name">
                        ${event.emoji}
                        ${event.name}
                    </div>

                    <div class="event-date">
                        ${formatted}
                    </div>

                </div>

                <div class="countdown">
                    ${countdown}
                </div>

            `;


            container.appendChild(
                element
            );

        }
    );

}


// =========================================
// MOON PHASE
// =========================================

function getMoonPhase(
    year,
    month,
    day
) {

    const knownNewMoon =
        Date.UTC(
            2000,
            0,
            6,
            18,
            14
        );


    const current =
        Date.UTC(
            year,
            month - 1,
            day
        );


    const synodicMonth =
        29.530588853;


    const days =
        (
            current -
            knownNewMoon
        ) /
        86400000;


    return (
        (
            days %
            synodicMonth
        ) +
        synodicMonth
    ) %
    synodicMonth;

}


function getMoonInfo() {

    const phase =
        getMoonPhase(
            today.year,
            today.month,
            today.day
        );


    if (phase < 1.85)
        return ["🌑", "New Moon"];


    if (phase < 7.38)
        return ["🌒", "Waxing Crescent"];


    if (phase < 9.23)
        return ["🌓", "First Quarter"];


    if (phase < 14.77)
        return ["🌔", "Waxing Gibbous"];


    if (phase < 16.61)
        return ["🌕", "Full Moon"];


    if (phase < 22.15)
        return ["🌖", "Waning Gibbous"];


    if (phase < 24)
        return ["🌗", "Last Quarter"];


    return ["🌘", "Waning Crescent"];

}


function renderMoon() {

    const moon =
        getMoonInfo();


    const moonPhase =
        document.getElementById(
            "moonPhase"
        );


    const moonVisual =
        document.getElementById(
            "moonIcon"
        );


    if (moonPhase) {

        moonPhase.textContent =
            moon[0] +
            " " +
            moon[1];

    }


    if (moonVisual) {

        moonVisual.textContent =
            moon[0];

    }

}


// =========================================
// MONTH BUTTONS
// =========================================

const previousMonth =
    document.getElementById(
        "previousMonth"
    );


if (previousMonth) {

    previousMonth.addEventListener(
        "click",
        function () {

            displayedMonth--;


            if (
                displayedMonth < 0
            ) {

                displayedMonth = 11;
                displayedYear--;

            }


            renderCalendar();

        }
    );

}


const nextMonth =
    document.getElementById(
        "nextMonth"
    );


if (nextMonth) {

    nextMonth.addEventListener(
        "click",
        function () {

            displayedMonth++;


            if (
                displayedMonth > 11
            ) {

                displayedMonth = 0;
                displayedYear++;

            }


            renderCalendar();

        }
    );

}


// =========================================
// NOTIFICATION SYSTEM
// =========================================

const ALERT_TIME_ZONE =
    "America/Toronto";


async function registerCosmicServiceWorker() {

    if (
        !("serviceWorker" in navigator)
    ) {

        return null;

    }


    try {

        const registration =
            await navigator.serviceWorker.register(
                "cosmic-sw.js"
            );


        console.log(
            "🌌 Cosmic notification system ready."
        );


        return registration;

    }

    catch (error) {

        console.error(
            "Service worker error:",
            error
        );


        return null;

    }

}


// =========================================
// MARKHAM TIME
// =========================================

function getMarkhamTimeParts() {

    const parts =
        new Intl.DateTimeFormat(
            "en-CA",
            {
                timeZone:
                    ALERT_TIME_ZONE,

                year:
                    "numeric",

                month:
                    "2-digit",

                day:
                    "2-digit",

                hour:
                    "2-digit",

                minute:
                    "2-digit",

                second:
                    "2-digit",

                hour12:
                    false
            }
        ).formatToParts(
            new Date()
        );


    const result = {};


    parts.forEach(
        part => {

            if (
                part.type !== "literal"
            ) {

                result[part.type] =
                    part.value;

            }

        }
    );


    return result;

}


// =========================================
// DATE KEY
// =========================================

function getAlertDateKey() {

    const time =
        getMarkhamTimeParts();


    return (
        time.year +
        "-" +
        time.month +
        "-" +
        time.day
    );

}


// =========================================
// NEXT EVENT
// =========================================

function getNextEvent() {

    const now =
        getMarkhamTimeParts();


    const current =
        new Date(
            Number(now.year),
            Number(now.month) - 1,
            Number(now.day)
        );


    let closest =
        null;


    astronomyEvents.forEach(
        event => {

            const parts =
                event.date
                    .split("-")
                    .map(Number);


            const eventDate =
                new Date(
                    parts[0],
                    parts[1] - 1,
                    parts[2]
                );


            const difference =
                Math.round(
                    (
                        eventDate -
                        current
                    ) /
                    86400000
                );


            if (
                difference < 0
            )
                return;


            if (
                !closest ||
                difference <
                closest.difference
            ) {

                closest = {
                    ...event,
                    difference
                };

            }

        }
    );


    return closest;

}


// =========================================
// NOTIFICATION MESSAGE
// =========================================

function getCosmicAlertMessage() {

    const event =
        getNextEvent();


    if (!event) {

        return {

            title:
                "🌌 GOOD MORNING, KRISH",

            body:
                "No major cosmic events are coming up. Keep looking up! 🔭"

        };

    }


    if (
        event.difference === 0
    ) {

        return {

            title:
                "🚨 COSMIC ALERT",

            body:
                `${event.name} TODAY! ${event.emoji} Look up!`

        };

    }


    if (
        event.difference === 1
    ) {

        return {

            title:
                "🚀 COSMIC ALERT",

            body:
                `${event.name} is TOMORROW! ${event.emoji}`

        };

    }


    return {

        title:
            "🚀 COSMIC ALERT",

        body:
            `${event.name} in ${event.difference} days! ${event.emoji}`

    };

}


// =========================================
// SEND NOTIFICATION
// =========================================

async function sendCosmicAlert() {

    if (
        Notification.permission !==
        "granted"
    ) {

        return;

    }


    const registration =
        await navigator.serviceWorker.getRegistration(
            "cosmic-sw.js"
        );


    if (!registration) {

        return;

    }


    const message =
        getCosmicAlertMessage();


    await registration.showNotification(
        message.title,
        {

            body:
                message.body,

            icon:
                "icon-192.png",

            badge:
                "icon-192.png",

            tag:
                "cosmic-daily-alert",

            data:
                {
                    url:
                        "./"
                }

        }
    );

}


// =========================================
// SCHEDULE 7 AM
// =========================================

function scheduleCosmicAlert() {

    if (
        localStorage.getItem(
            "cosmicAlertsEnabled"
        ) !== "true"
    ) {

        return;

    }


    clearTimeout(
        window.cosmicAlertTimer
    );


    const now =
        new Date();


    const markham =
        getMarkhamTimeParts();


    const hour =
        Number(markham.hour);


    const minute =
        Number(markham.minute);


    let minutesUntil7;


    if (
        hour < 7
    ) {

        minutesUntil7 =
            (
                7 - hour
            ) *
            60 -
            minute;

    }

    else {

        minutesUntil7 =
            (
                24 - hour + 7
            ) *
            60 -
            minute;

    }


    const milliseconds =
        Math.max(
            minutesUntil7 *
            60 *
            1000,
            1000
        );


    window.cosmicAlertTimer =
        setTimeout(
            async function () {

                const todayKey =
                    getAlertDateKey();


                const lastSent =
                    localStorage.getItem(
                        "lastCosmicAlert"
                    );


                if (
                    lastSent !==
                    todayKey
                ) {

                    await sendCosmicAlert();


                    localStorage.setItem(
                        "lastCosmicAlert",
                        todayKey
                    );

                }


                scheduleCosmicAlert();

            },
            milliseconds
        );

}


// =========================================
// ENABLE ALERTS
// =========================================

async function enableCosmicAlerts() {

    if (
        !("Notification" in window)
    ) {

        alert(
            "This browser does not support notifications."
        );

        return;

    }


    const registration =
        await registerCosmicServiceWorker();


    if (!registration) {

        alert(
            "Cosmic Alerts couldn't be installed."
        );

        return;

    }


    const permission =
        await Notification.requestPermission();


    if (
        permission !== "granted"
    ) {

        alert(
            "You'll need to allow notifications for Cosmic Alerts."
        );

        return;

    }


    localStorage.setItem(
        "cosmicAlertsEnabled",
        "true"
    );


    const button =
        document.getElementById(
            "cosmicNotificationButton"
        );


    if (button) {

        button.textContent =
            "🔔 COSMIC ALERTS ENABLED ✓";


        button.classList.add(
            "enabled"
        );

    }


    // Test notification
    await registration.showNotification(
        "🚀 Cosmic Alerts Enabled!",
        {

            body:
                "Your daily cosmic reminders are ready.",

            icon:
                "icon-192.png",

            badge:
                "icon-192.png",

            tag:
                "cosmic-alert-test"

        }
    );


    scheduleCosmicAlert();

}


// =========================================
// INITIALIZE ALERTS
// =========================================

async function initializeCosmicAlerts() {

    const button =
        document.getElementById(
            "cosmicNotificationButton"
        );


    if (!button) {

        return;

    }


    button.addEventListener(
        "click",
        enableCosmicAlerts
    );


    const enabled =
        localStorage.getItem(
            "cosmicAlertsEnabled"
        );


    if (
        enabled === "true"
    ) {

        button.textContent =
            "🔔 COSMIC ALERTS ENABLED ✓";


        button.classList.add(
            "enabled"
        );


        await registerCosmicServiceWorker();


        if (
            Notification.permission ===
            "granted"
        ) {

            scheduleCosmicAlert();

        }

    }

}


// =========================================
// START
// =========================================

console.log(
    "🚀 Krish's Cosmic Calendar loaded."
);


renderCalendar();


showDate(
    today.year,
    today.month - 1,
    today.day
);


renderUpcomingEvents();


renderMoon();


initializeCosmicAlerts();

// =========================================
// RANDOM SHOOTING STARS
// Every 10–30 seconds
// =========================================

function createShootingStar() {

    const star =
        document.createElement("div");

    star.className =
        "shooting-star";

    // Random starting position
    const startX =
        Math.random() *
        window.innerWidth;

    const startY =
        Math.random() *
        (window.innerHeight * 0.65);

    star.style.left =
        startX + "px";

    star.style.top =
        startY + "px";

    document.body.appendChild(star);

    // Start animation
    requestAnimationFrame(() => {

        star.classList.add("active");

    });

    // Remove after animation
    setTimeout(() => {

        star.remove();

    }, 1500);

}


function scheduleShootingStar() {

    // Random delay between 10 and 30 seconds

    const delay =
        Math.floor(
            Math.random() *
            20000
        ) + 10000;


    setTimeout(() => {

        createShootingStar();

        scheduleShootingStar();

    }, delay);

}


// Start the system
scheduleShootingStar();
