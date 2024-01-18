let data = [
    {
        "id": 0,
        "timeIndex": 0,
        "title": "I am an explanatory title",
        "content": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia esse consectetur culpa excepturi iste odit modi ullam nam ea, est neque quis id vitae animi, molestiae dolorum officia sequi consequuntur.</p>",
        "baseMap": "assets/img/kamolin-map.jpg",
        "characters" : [
            {
                "id": 0,
                "name": "char-1",
                "icon": "assets/img/characters/character-1.png",
                "x": 115,
                "y": 115,
                "w": 115,
                "h": 115,
            }
        ],
        "paths" : [
            {
                "id": 0,
                "x": 130,
                "y": 237,
                "lx": 250,
                "ly": 350,
            },
            {
                "id": 1,
                "x": 250,
                "y": 350,
                "lx": 450,
                "ly": 350,
            },
            {
                "id": 2,
                "x": 450,
                "y": 350,
                "lx": 475,
                "ly": 410,
            },
            {
                "id": 3,
                "x": 475,
                "y": 410,
                "lx": 650,
                "ly": 420,
            },
        ],
    },
    {
        "id": 1,
        "timeIndex": 1,
        "title": "I am the second title",
        "content": "<p>Second text</p>",
        "baseMap": "assets/img/northeast.jpg",
        "characters" : [
            {
                "id": 0,
                "name": "char-1",
                "icon": "assets/img/characters/character-2.png",
                "x": 115,
                "y": 315,
                "w": 115,
                "h": 115,
            }
        ],
        "paths" : [
            {
                "id": 0,
                "x": 250,
                "y": 350,
                "lx": 450,
                "ly": 350,
            },
            {
                "id": 1,
                "x": 130,
                "y": 537,
                "lx": 250,
                "ly": 350,
            },
            {
                "id": 2,
                "x": 450,
                "y": 350,
                "lx": 475,
                "ly": 410,
            },
            {
                "id": 3,
                "x": 475,
                "y": 410,
                "lx": 650,
                "ly": 420,
            },
        ],
    },
    {
        "id": 2,
        "timeIndex": 2,
        "title": "I am the third title",
        "content": "<p>Third text</p>",
        "baseMap": "assets/img/rozendale.jpg",
        "characters" : [
            {
                "id": 0,
                "name": "char-1",
                "icon": "assets/img/characters/character-3.png",
                "x": 315,
                "y": 315,
                "w": 115,
                "h": 115,
            }
        ]
    },
    {
        "id": 3,
        "timeIndex": 3,
        "title": "I am the fourth title",
        "content": "<p>Fourth text</p>",
        "baseMap": "assets/img/new_roslingen.jpg",
        "characters" : [
            {
                "id": 0,
                "name": "char-1",
                "icon": "assets/img/characters/character-4.png",
                "x": 315,
                "y": 315,
                "w": 115,
                "h": 115,
            }
        ]
    },
    {
        "id": 4,
        "timeIndex": 4,
        "title": "I am the fifth title",
        "content": "<p>Fifth text</p>",
        "baseMap": "assets/img/tenbrake.jpg",
        "characters" : [
            {
                "id": 0,
                "name": "char-1",
                "icon": "assets/img/characters/character-1.png",
                "x": 115,
                "y": 315,
                "w": 115,
                "h": 115,
            }
        ]
    },
    {
        "id": 5,
        "timeIndex": 5,
        "title": "I am the sixth title",
        "content": "<p>Sixth text</p>",
        "baseMap": "assets/img/academy-island.jpg",
        "characters" : [
            {
                "id": 0,
                "name": "char-1",
                "icon": "assets/img/characters/character-1.png",
                "x": 115,
                "y": 315,
                "w": 115,
                "h": 115,
            }
        ]
    },
];

// Initialize
// Canvas
const canvas = document.getElementById("main-visual");
canvas.width = window.innerWidth * 0.95;
canvas.height = window.innerHeight * 0.95 //4:3 aspect ratio

// Time Controls
let timeIndexStart = 0;
let timeIndexMax = data.length - 1;
let timeScroller = document.getElementById('timeline');
let timeDisplay = document.getElementById("time-display") ;
let globalTime = timeIndexStart;

timeScroller.value = timeIndexStart;
timeScroller.min = timeIndexStart;
timeScroller.max = timeIndexMax;

// Load data
window.onload = function(){
    setPage()
};

// set page contents
function setPage() {
    setCanvas();
    setTimeIndex();
}

// Set Canvas contents
function setCanvas() {
    // Load Map Object
    let mapInstance = new MapMaker(canvas, globalTime, data)
    mapInstance.start();
}

// Set time index and time display
function setTimeIndex() {
    // Set Current Time
    let timeIndex = timeScroller.value;
    globalTime = timeIndex

    // Set Page Content
    setContent(data, timeIndex)

    // Set Display Time
    setTimeIndexValue(timeIndex)
    return timeIndex
}