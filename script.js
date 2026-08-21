/* =====================================
   KRISH'S COSMIC CALENDAR
===================================== */


/* =====================================
   DAILY FACTS
===================================== */

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
        text: "The Sun contains about 99.86% of the total mass of the Solar System.",
        pun: "The Sun has a massive ego."
    },

    {
        category: "MOON",
        icon: "🌙",
        title: "The Moon is slowly leaving us.",
        text: "The Moon moves away from Earth by roughly 3.8 centimetres every year.",
        pun: "It just needs some space."
    },

    {
        category: "ROCKETS",
        icon: "🚀",
        title: "Rockets don't need air to fly.",
        text: "A rocket accelerates by throwing exhaust gases backward, allowing it to work in the vacuum of space.",
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
        title: "Some stars are gigantic.",
        text: "Some known red supergiants are hundreds of times wider than our Sun.",
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
        text: "Sound can't travel through the vacuum of space, but scientists can convert other space signals into sounds we can hear.",
        pun: "The universe just needed a microphone."
    },

    {
        category: "AVIATION",
        icon: "🛫",
        title: "Planes can fly incredibly high.",
        text: "Commercial airliners commonly cruise around 10–12 kilometres above Earth's surface.",
        pun: "Talk about rising to the occasion."
    },

    {
        category: "BLACK HOLES",
        icon: "🕳️",
        title: "Black holes aren't cosmic vacuum cleaners.",
        text: "A black hole's gravity works like any other object's gravity at the same distance.",
        pun: "No need to suck it up."
    },

    {
        category: "SPACE",
        icon: "🚀",
        title: "There are more stars than you can imagine.",
        text: "Our Milky Way galaxy alone is estimated to contain hundreds of billions of stars.",
        pun: "That's a lot of star power."
    }

];


/* =====================================
   ASTRONOMICAL EVENTS
===================================== */

const events = [

    {
        name: "Partial Lunar Eclipse",
        emoji: "🌑",
        date: "2026-08-28"
    },

    {
        name: "Orionid Meteor Shower",
        emoji: "☄️",
        date: "2026-10-21"
    },

    {
        name: "Leonid Meteor Shower",
        emoji: "☄️",
        date: "2026-11-17"
    },

    {
        name: "Supermoon",
        emoji: "🌕",
        date: "2026-11-24"
    },

    {
        name: "Geminid Meteor Shower",
        emoji: "☄️",
        date: "2026-12-13"
    }

];


/* =====================================
   GET TODAY
===================================== */

const today = new Date();

const startOfYear = new Date(today.getFullYear(), 0, 0);

const diff =
    today - startOfYear;

const oneDay =
    1000 * 60 * 60 * 24;

const dayOfYear =
    Math.floor(diff / oneDay);


/* =====================================
   DISPLAY DATE
===================================== */

const dateFormatter =
    new Intl.DateTimeFormat(
        "en-US",
        {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        }
    );

document.getElementById("todayDate").textContent =
    dateFormatter.format(today);

document.getElementById("dayNumber").textContent =
    `DAY ${dayOfYear}`;


/* =====================================
   DAILY FACT
===================================== */

const fact =
    dailyFacts[(dayOfYear - 1) % dailyFacts.length];

document.getElementById("factIcon").textContent =
    fact.icon;

document.getElementById("factCategory").textContent =
    fact.category;

document.getElementById("factTitle").textContent =
    fact.title;

document.getElementById("factText").textContent =
    fact.text;

document.getElementById("punText").textContent =
    fact.pun;


/* =====================================
   UPCOMING EVENTS
===================================== */

const eventsContainer =
    document.getElementById("eventsContainer");

events
    .filter(event => {
        return new Date(event.date) >= today;
    })
    .slice(0, 5)
    .forEach(event => {

        const eventDate =
            new Date(event.date);

        const difference =
            eventDate - today;

        const days =
            Math.ceil(
                difference /
                (1000 * 60 * 60 * 24)
            );

        const formattedDate =
            eventDate.toLocaleDateString(
                "en-US",
                {
                    month: "short",
                    day: "numeric"
                }
            );

        let countdown;

        if (days === 0) {
            countdown = "TODAY";
        }

        else if (days === 1) {
            countdown = "TOMORROW";
        }

        else {
            countdown = `${days} DAYS`;
        }


        const element =
            document.createElement("div");

        element.className = "event";

        element.innerHTML = `

            <div>

                <div class="event-name">
                    ${event.emoji} ${event.name}
                </div>

                <div class="event-date">
                    ${formattedDate}
                </div>

            </div>

            <div class="countdown">
                ${countdown}
            </div>

        `;

        eventsContainer.appendChild(element);

    });


/* =====================================
   MOON PHASE
===================================== */

function getMoonPhase(date) {

    const knownNewMoon =
        new Date("2000-01-06T18:14:00Z");

    const synodicMonth =
        29.530588853;

    const days =
        (date - knownNewMoon) /
        (1000 * 60 * 60 * 24);

    const phase =
        ((days % synodicMonth) +
        synodicMonth) %
        synodicMonth;

    return phase;

}


function moonInfo(date) {

    const phase =
        getMoonPhase(date);

    if (phase < 1.85) {
        return ["🌑", "New Moon"];
    }

    if (phase < 7.38) {
        return ["🌒", "Waxing Crescent"];
    }

    if (phase < 9.23) {
        return ["🌓", "First Quarter"];
    }

    if (phase < 14.77) {
        return ["🌔", "Waxing Gibbous"];
    }

    if (phase < 16.61) {
        return ["🌕", "Full Moon"];
    }

    if (phase < 22.15) {
        return ["🌖", "Waning Gibbous"];
    }

    if (phase < 24.00) {
        return ["🌗", "Last Quarter"];
    }

    return ["🌘", "Waning Crescent"];

}


const moon =
    moonInfo(today);

document.getElementById("moonPhase").textContent =
    `${moon[0]} ${moon[1]}`;

document.getElementById("moonVisual").textContent =
    moon[0];

document.getElementById("moonDescription").textContent =
    "The Moon is constantly changing as it orbits Earth.";
