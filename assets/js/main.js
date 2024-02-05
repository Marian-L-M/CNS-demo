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
                "description": " Hello! I am char-1!",
                "icon": "assets/img/characters/character-1.png",
                "x": 115,
                "y": 115,
                "w": 115,
                "h": 115,
            },{
                "id": 1,
                "name": "char-2",
                "description": " Hello! I am char-2!",
                "icon": "assets/img/characters/character-2.png",
                "x": 815,
                "y": 415,
                "w": 115,
                "h": 115,
            }
        ],
        "journeys" : [
            [{
                "id": 0,
                "name": "event-1",
                "description": "Battle of the bushes",
                "x": 130,
                "y": 237,
                "lx": 250,
                "ly": 350,
            },
            {
                "id": 1,
                "name": "event-2",
                "description": "Trimming of the bushes",
                "x": 250,
                "y": 350,
                "lx": 450,
                "ly": 350,
            },
            {
                "id": 2,
                "name": "event-3",
                "description": "OK, lets stop these dirty metaphors",
                "x": 450,
                "y": 350,
                "lx": 475,
                "ly": 410,
            },
            {
                "id": 3,
                "name": "event-4",
                "description": "Look, this one is not even getting a description. Happy now?",
                "x": 475,
                "y": 410,
                "lx": 650,
                "ly": 420,
            }],
            [{
                "id": 1,
                "name": "quest-1",
                "description": "Rise of the Beavers",
                "x": 830,
                "y": 570,
                "lx": 780,
                "ly": 150,
            },
            {
                "id": 1,
                "name": "quest-2",
                "description": "Devourers of TImber",
                "x": 780,
                "y": 150,
                "lx": 650,
                "ly": 350,
            },
            {
                "id": 2,
                "name": "quest-3",
                "description": "flooding in Beavertown",
                "x": 650,
                "y": 350,
                "lx": 375,
                "ly": 360,
            },
            {
                "id": 3,
                "name": "quest-4",
                "description": "Just can't help myself",
                "x": 375,
                "y": 360,
                "lx": 375,
                "ly": 420,
            }],
        ],
        "locations": [
            {
                "id" : 0,
                "name" : "triangle",
                "message": "I am a triangle",
                "design": {
                    "fill" : "green",
                    "stroke" : "blue",
                    "lineW" : 2,
                },
                "points": [{
                    x: 25,
                    y: 100
                    }, {
                        x: 50,
                        y: 50
                    }, {
                        x: 75,
                        y: 100
                }],
            }, {
                "id" : 1,
                "name" : "parallelogram",
                "message": "I am a parallelogram",
                "design": {
                    "fill" : "white",
                    "stroke" : "yellow",
                    "lineW" : 2,
                },
                "points": [{
                    x: 150,
                    y: 50
                }, {
                    x: 250,
                    y: 50
                }, {
                    x: 200,
                    y: 100
                }, {
                    x: 100,
                    y: 100
                }],
            }, {
                "id" : 2,
                "name" : "parasffsallelogram",
                "message": "I am an abomination",
                "design": {
                    "fill" : "orange",
                    "stroke" : "black",
                    "lineW" : 2,
                },
                "points": [{
                    x: 1250,
                    y: 150
                }, {
                    x: 1350,
                    y: 150
                }, {
                    x: 1300,
                    y: 400
                }, {
                    x: 1200,
                    y: 200
                }],
            }, {
                "id" : 3,
                "name" : "random shape",
                "message": "I am a random shape",
                "design": {
                    "fill" : "green",
                    "stroke" : "black",
                    "lineW" : 2,
                },
                "points": [{
                    x: 1750,
                    y: 150
                }, {
                    x: 1850,
                    y: 150
                }, {
                    x: 1800,
                    y: 400
                }, {
                    x: 1700,
                    y: 200
                }],
       
            }
        ]
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
                "name": "char-2.2",
                "description": " Hello! I am char-2.2!",
                "icon": "assets/img/characters/character-2.png",
                "x": 115,
                "y": 315,
                "w": 115,
                "h": 115,
            }
        ],
        "locations": [],
        "journeys" : [
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
                "name": "char-3",
                "description": " Hello! I am char-3!",
                "icon": "assets/img/characters/character-3.png",
                "x": 315,
                "y": 315,
                "w": 115,
                "h": 115,
            }
        ],
        "locations": [],
        "journeys": [],
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
                "name": "char-4",
                "description": " Hello! I am char-4!",
                "icon": "assets/img/characters/character-4.png",
                "x": 315,
                "y": 315,
                "w": 115,
                "h": 115,
            }
        ],
        "locations": [],
        "journeys": [],
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
                "name": "char-1.2",
                "description": " Hello! I am char-1.2!",
                "icon": "assets/img/characters/character-1.png",
                "x": 115,
                "y": 315,
                "w": 115,
                "h": 115,
            }
        ],
        "locations": [],
        "journeys": [],
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
                "name": "char-1.3",
                "description": " Hello! I am char-1.3!",
                "icon": "assets/img/characters/character-1.png",
                "x": 115,
                "y": 315,
                "w": 115,
                "h": 115,
            }
        ],
        "locations": [],
        "journeys": [],
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

// // Set Cursor Label
let mouselabel = document.getElementById("mouse-label")
let mousePos = { x: undefined, y: undefined };
window.addEventListener('mousemove', (e) => {
    mousePos = { x: e.clientX, y: e.clientY };
    const screenW = window.screen.width;
    let top = mousePos.y;
    let left = mousePos.x;
    let right = (screenW - mousePos.x);
    let labelW = mouselabel.offsetWidth
    
    if (mouselabel.innerHTML.length == 0) {
        mouselabel.style.display = "none";
    } else {
        mouselabel.style.display = "unset";
    }

    mouselabel.style.top = top + 5 + 'px';
    if (labelW + 30 > right) {
        mouselabel.style.right = right + 20 +'px';
        mouselabel.style.left = 'unset';
        
    } else {
        mouselabel.style.left = left + 20 +'px';
        mouselabel.style.right = 'unset';
    }
  });
