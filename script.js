```javascript
/* ==========================================
   KRISH'S COSMIC CALENDAR
   Time zone: Markham, Ontario
   IANA timezone: America/Toronto
========================================== */


/* ==========================================
   DAILY DISCOVERIES
========================================== */

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


/* ==========================================
   ASTRONOMICAL EVENTS
   Dates are stored as local calendar dates
   rather than UTC timestamps.
========================================== */

const astronomyEvents = [

    {
        date: "2026-08-27",
        name: "Partial Lunar Eclipse",
        emoji: "🌑",
        type: "eclipse",
        description: "A partial lunar eclipse is visible from much of North America."
    },

    {
        date: "2026-08-28",
        name: "Partial Lunar Eclipse",
        emoji: "🌑",
        type: "eclipse",
        description: "The August lunar eclipse continues into August 28."
    },

    {
        date: "2026-09-23",
        name: "September Equinox",
        emoji: "🍂",
        type: "season",
        description: "The Sun crosses the celestial equator."
    },

    {
        date: "2026-10-07",
        name: "Full Moon",
        emoji: "🌕",
        type: "moon",
        description: "A full Moon lights up the night sky."
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


/* ==========================================
   MARKHAM DATE
========================================== */

const TIME_ZONE = "America/Toronto";


function getMarkhamDateParts(date = new Date()) {

    const parts = new Intl.DateTimeFormat(
        "en-CA",
        {
            timeZone: TIME_ZONE,
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
    ).formatToParts(date);

    const result = {};

    parts.forEach(part => {
        if (part.type !== "literal") {
            result[part.type] = part.value;
        }
    });

    return {
        year: Number(result.year),
        month: Number(result.month),
        day: Number(result.day)
    };
}


const markhamToday =
    getMarkhamDateParts();


/* ==========================================
   DATE HELPERS
========================================== */

function dateKey(year, month, day) {

    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

}


function daysBetween(dateA, dateB) {

    const a = Date.UTC(
        dateA.year,
        dateA.month - 1,
        dateA.day
    );

    const b = Date.UTC(
        dateB.year,
        dateB.month - 1,
        dateB.day
    );

    return Math.round(
        (b - a) / 86400000
    );

}


/* ==========================================
   CURRENT MONTH
========================================== */

let displayedYear =
    markhamToday.year;

let displayedMonth =
    markhamToday.month - 1;


/* ==========================================
   CALENDAR ELEMENTS
========================================== */

const calendar =
    document.getElementById("calendar");

const monthTitle =
    document.getElementById("monthTitle");


/* ==========================================
   FIND EVENT
========================================== */

function getEventsForDate(key) {

    return astronomyEvents.filter(
        event => event.date === key
    );

}


/* ==========================================
   DRAW CALENDAR
========================================== */

function renderCalendar() {

    calendar.innerHTML = "";

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


    const monthName =
        new Intl.DateTimeFormat(
            "en-US",
            {
                month: "long",
                year: "numeric"
            }
        ).format(
            new Date(
                displayedYear,
                displayedMonth,
                1
            )
        );

    monthTitle.textContent =
        monthName;


    /* Empty cells before day 1 */

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const empty =
            document.createElement("div");

        empty.className =
            "day empty";

        calendar.appendChild(empty);

    }


    /* Actual days */

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const cell =
            document.createElement("div");

        cell.className =
            "day";


        const key =
            dateKey(
                displayedYear,
                displayedMonth + 1,
                day
            );


        const number =
            document.createElement("div");

        number.className =
            "day-number";

        number.textContent =
            day;

        cell.appendChild(number);


        /* Today */

        if (
            displayedYear === markhamToday.year &&
            displayedMonth === markhamToday.month - 1 &&
            day === markhamToday.day
        ) {

            cell.classList.add("today");

        }


        /* Events */

        const events =
            getEventsForDate(key);

        if (events.length > 0) {

            const dot =
                document.createElement("div");

            dot.className =
                "event-dot";

            if (
                events.some(
                    event => event.type === "eclipse"
                )
            ) {

                dot.classList.add("eclipse");

            }

            cell.appendChild(dot);

        }


        /* Click */

        cell.addEventListener(
            "click",
            () => showSelectedDate(
                displayedYear,
                displayedMonth,
                day
            )
        );


        calendar.appendChild(cell);

    }

}


/* ==========================================
   SHOW SELECTED DATE
========================================== */

function showSelectedDate(
    year,
    month,
    day
) {

    const selectedKey =
        dateKey(
            year,
            month + 1,
            day
        );

    const events =
        getEventsForDate(
            selectedKey
        );


    const title =
        document.getElementById(
            "factTitle"
        );

    const text =
        document.getElementById(
            "factText"
        );

    const icon =
        document.getElementById(
            "factIcon"
        );

    const category =
        document.getElementById(
            "factCategory"
        );

    const pun =
        document.getElementById(
            "punText"
        );


    /* Pick daily fact */

    const dayIndex =
        Math.floor(
            (
                Date.UTC(
                    year,
                    month,
                    day
                )
                -
                Date.UTC(
                    year,
                    0,
                    1
                )
            )
            /
            86400000
        );


    const fact =
        dailyFacts[
            Math.abs(dayIndex)
            % dailyFacts.length
        ];


    icon.textContent =
        fact.icon;

    category.textContent =
        fact.category;

    title.textContent =
        fact.title;

    text.textContent =
        fact.text;

    pun.textContent =
        fact.pun;


    /* If there is an event, prioritize it */

    if (events.length > 0) {

        const event =
            events[0];

        icon.textContent =
            event.emoji;

        category.textContent =
            "ASTRONOMICAL EVENT";

        title.textContent =
            event.name;

        text.textContent =
            event.description;

        pun.textContent =
            getEventPun(event.type);

    }


    const selectedDate =
        new Date(
            year,
            month,
            day
        );


    document.getElementById(
        "todayDate"
    ).textContent =
        selectedDate.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        );

}


/* ==========================================
   EVENT PUNS
========================================== */

function getEventPun(type) {

    const puns = {

        eclipse:
            "Looks like the Moon is trying to steal the spotlight.",

        meteor:
            "These rocks are really making an entrance.",

        moon:
            "That's one small step for the Moon...",

        season:
            "The Earth is really changing its angle on things."

    };

    return puns[type]
        || "That's out of this world.";

}


/* ==========================================
   UPCOMING EVENTS
========================================== */

function renderUpcomingEvents() {

    const container =
        document.getElementById(
            "eventsContainer"
        );

    container.innerHTML = "";


    const today =
        markhamToday;


    const upcoming =
        astronomyEvents
            .map(event => {

                const [year, month, day] =
                    event.date
                        .split("-")
                        .map(Number);

                return {
                    ...event,
                    difference:
                        daysBetween(
                            today,
                            {
                                year,
                                month,
                                day
                            }
                        )
                };

            })
            .filter(
                event => event.difference >= 0
            )
            .slice(0, 5);


    upcoming.forEach(event => {

        const element =
            document.createElement("div");

        element.className =
            "event";


        let countdown;

        if (event.difference === 0) {

            countdown = "TODAY";

        } else if (
            event.difference === 1
        ) {

            countdown = "TOMORROW";

        } else {

            countdown =
                `${event.difference} DAYS`;

        }


        const eventDate =
            new Date(
                `${event.date}T12:00:00`
            );


        const formattedDate =
            eventDate.toLocaleDateString(
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
                    ${formattedDate}
                </div>

            </div>

            <div class="countdown">
                ${countdown}
            </div>

        `;


        container.appendChild(element);

    });

}


/* ==========================================
   MOON PHASE
========================================== */

function getMoonPhase(date) {

    const knownNewMoon =
        Date.UTC(
            2000,
            0,
            6,
            18,
            14
        );

    const synodicMonth =
        29.530588853;

    const current =
        Date.UTC(
            date.year,
            date.month - 1,
            date.day
        );

    const days =
        (
            current -
            knownNewMoon
        )
        /
        86400000;

    return (
        (
            days %
            synodicMonth
        )
        +
        synodicMonth
    )
    %
    synodicMonth;

}


function getMoonInfo(date) {

    const phase =
        getMoonPhase(date);


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

    if (phase < 24.00)
        return ["🌗", "Last Quarter"];

    return ["🌘", "Waning Crescent"];

}


function renderMoon() {

    const moon =
        getMoonInfo(
            markhamToday
        );


    document.getElementById(
        "moonPhase"
    ).textContent =
        `${moon[0]} ${moon[1]}`;


    document.getElementById(
        "moonVisual"
    ).textContent =
        moon[0];

}


/* ==========================================
   NAVIGATION
========================================== */

document
    .getElementById("previousMonth")
    .addEventListener(
        "click",
        () => {

            displayedMonth--;

            if (displayedMonth < 0) {

                displayedMonth = 11;

                displayedYear--;

            }

            renderCalendar();

        }
    );


document
    .getElementById("nextMonth")
    .addEventListener(
        "click",
        () => {

            displayedMonth++;

            if (displayedMonth > 11) {

                displayedMonth = 0;

                displayedYear++;

            }

            renderCalendar();

        }
    );


/* ==========================================
   START
========================================== */

renderCalendar();

showSelectedDate(
    markhamToday.year,
    markhamToday.month - 1,
    markhamToday.day
);

renderUpcomingEvents();

renderMoon();
```
