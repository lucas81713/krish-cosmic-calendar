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

    const parts = new Intl.DateTimeFormat(
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

            result[part.type] = part.value;

        }

    });


    return {

        year: Number(result.year),

        month: Number(result.month),

        day: Number(result.day)

    };

}


const today = getMarkhamDate();


let displayedYear = today.year;

let displayedMonth = today.month - 1;


// =========================================
// DATE KEY
// =========================================

function dateKey(year, month, day) {

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
        event => event.date === key
    );

}


// =========================================
// CALENDAR
// =========================================

function renderCalendar() {

    const calendar =
        document.getElementById("calendar");


    // FIXED: HTML uses "monthTitle"
    const monthTitle =
        document.getElementById("monthTitle");


    if (!calendar || !monthTitle) {

        console.error(
            "Calendar elements were not found."
        );

        return;

    }


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


    // Empty cells

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const empty =
            document.createElement("div");


        empty.className =
            "day empty";


        calendar.appendChild(
            empty
        );

    }


    // Days

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const cell =
            document.createElement("div");


        cell.className =
            "day";


        const number =
            document.createElement("div");


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


        // Today

        if (

            displayedYear === today.year &&

            displayedMonth ===
                today.month - 1 &&

            day === today.day

        ) {

            cell.classList.add(
                "today"
            );

        }


        // Events

        const events =
            getEventsForDate(key);


        if (
            events.length > 0
        ) {

            const dot =
                document.createElement("div");


            dot.className =
                "event-dot";


            if (
                events.some(
                    event =>
                        event.type === "eclipse"
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
        getEventsForDate(key);


    const date =
        new Date(
            year,
            month,
            day
        );


    // =====================================
    // DATE
    // =====================================

    const todayDateElement =
        document.getElementById(
            "todayDate"
        );


    if (todayDateElement) {

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


    // =====================================
    // DAY OF YEAR
    // =====================================

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
            ) / 86400000
        );


    const fact =
        dailyFacts[
            Math.abs(dayNumber) %
            dailyFacts.length
        ];


    // =====================================
    // FACT ICON
    // =====================================

    const factIcon =
        document.getElementById(
            "factIcon"
        );


    if (factIcon) {

        factIcon.textContent =
            fact.icon;

    }


    // =====================================
    // FACT CATEGORY
    // =====================================

    const factCategory =
        document.getElementById(
            "factCategory"
        );


    if (factCategory) {

        factCategory.textContent =
            fact.category;

    }


    // =====================================
    // FACT TITLE
    // =====================================

    const factTitle =
        document.getElementById(
            "factTitle"
        );


    if (factTitle) {

        factTitle.textContent =
            fact.title;

    }


    // =====================================
    // FACT TEXT
    // =====================================

    const factText =
        document.getElementById(
            "factText"
        );


    if (factText) {

        factText.textContent =
            fact.text;

    }


    // =====================================
    // PUN
    // =====================================

    const punText =
        document.getElementById(
            "punText"
        );


    if (punText) {

        punText.textContent =
            fact.pun;

    }


    // =====================================
    // ASTRONOMY EVENT OVERRIDE
    // =====================================

    if (
        events.length > 0
    ) {

        const event =
            events[0];


        if (factIcon) {

            factIcon.textContent =
                event.emoji;

        }


        if (factCategory) {

            factCategory.textContent =
                "ASTRONOMICAL EVENT";

        }


        if (factTitle) {

            factTitle.textContent =
                event.name;

        }


        if (factText) {

            factText.textContent =
                event.description;

        }


        if (punText) {

            punText.textContent =
                getEventPun(
                    event.type
                );

        }

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


    if (!container) {

        return;

    }


    container.innerHTML = "";


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
                        ) / 86400000
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

            .slice(
                0,
                5
            );


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


    upcoming.forEach(event => {

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

    });

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
        ) / 86400000;


    return (
        (
            days %
            synodicMonth
        ) +
        synodicMonth
    ) % synodicMonth;

}


function getMoonInfo() {

    const phase =
        getMoonPhase(
            today.year,
            today.month,
            today.day
        );


    if (
        phase < 1.85
    )
        return [
            "🌑",
            "New Moon"
        ];


    if (
        phase < 7.38
    )
        return [
            "🌒",
            "Waxing Crescent"
        ];


    if (
        phase < 9.23
    )
        return [
            "🌓",
            "First Quarter"
        ];


    if (
        phase < 14.77
    )
        return [
            "🌔",
            "Waxing Gibbous"
        ];


    if (
        phase < 16.61
    )
        return [
            "🌕",
            "Full Moon"
        ];


    if (
        phase < 22.15
    )
        return [
            "🌖",
            "Waning Gibbous"
        ];


    if (
        phase < 24
    )
        return [
            "🌗",
            "Last Quarter"
        ];


    return [
        "🌘",
        "Waning Crescent"
    ];

}


function renderMoon() {

    const moon =
        getMoonInfo();


    const moonPhase =
        document.getElementById(
            "moonPhase"
        );


    // FIXED: HTML uses "moonVisual"
    const moonVisual =
        document.getElementById(
            "moonVisual"
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
