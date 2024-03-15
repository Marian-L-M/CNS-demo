// Next action 240309: Move character into object (type: character)
let data = [
    {
        "id": 0,
        "timeIndex": 0,
        "title": "I am an explanatory title",
        "content": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia esse consectetur culpa excepturi iste odit modi ullam nam ea, est neque quis id vitae animi, molestiae dolorum officia sequi consequuntur.</p>",
        "baseMap": "assets/img/kamolin-map.jpg",
        "object":{
            "icons":[
                {
                    "id": 0,
                    "subtype": "character",
                    "name": "char-1",
                    "link": "/wiki/char-1.html",
                    "description": " Hello! I am char-1!",
                    "icon": "assets/img/characters/character-1.png",
                    "img": "assets/img/characters/character-1-full.jpg",
                    "x": 115,
                    "y": 115,
                    "info":{
                        "area":[{
                            "title" : "Character-1",
                            "content" : "Character that comes first",
                        },
                            {
                            "title" : "Age",
                            "content" : "XYZ",
                        },
                            {
                            "title" : "other info",
                            "content" : "ABCDEFGHIJ",
                        },
                            {
                            "title" : "other info",
                            "content" : "ABCDEFGHIJ",
                        },
                            {
                            "title" : "other info",
                            "content" : "ABCDEFGHIJ",
                        },
                            {
                            "title" : "other info",
                            "content" : "ABCDEFGHIJ",
                        },],
                        "text":[{
                            "title" : "Joerg",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-1-2",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-1-3",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-1-4",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },],
                    },
                },{
                    "id": 1,
                    "subtype": "character",
                    "name": "char-2",
                    "link": "/wiki/char-2.html",
                    "description": " Hello! I am char-2!",
                    "icon": "assets/img/characters/character-2.png",
                    "img": "assets/img/characters/character-2-full.jpg",
                    "x": 815,
                    "y": 415,
                    "info":{
                        "area":[{
                            "title" : "Character-2",
                            "content" : "Character that barely didnt make the cut",
                        },
                            {
                            "title" : "Age",
                            "content" : "z-Y-X",
                        },],
                        "text":[{
                            "title" : "Petra",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-1-2",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-1-3",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-1-4",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },],
                    },
                }
            ],
            "areas":[
                {
                    "id" : 0,
                    "subtype": "location",
                    "name" : "triangle",
                    "link": "/wiki/location-1.html",
                    "description": "I am a triangle",
                    "img": "assets/img/locations/location-1.jpg",
                    "design": {
                        "fill" : "green",
                        "stroke" : "blue",
                        "lineW" : 2,
                    },
                    "points": [{
                        x: 250,
                        y: 1000
                        }, {
                            x: 500,
                            y: 500
                        }, {
                            x: 750,
                            y: 1000
                    }],
                    "info":{
                        "area":[{
                            "title" : "Beast of Bodmin",
                            "content" : "A large feline inhabiting Bodmin Moor.",
                        },
                            {
                            "title" : "label-1-1",
                            "content" : "1-1 Content",
                        },
                            {
                            "title" : "label-1-2",
                            "content" : "1-2 Content text",
                        },
                            {
                            "title" : "label-3",
                            "content" : "1-3 Content text",
                        },
                            {
                            "title" : "label-4",
                            "content" : "1-4 Content text",
                        },
                            {
                            "title" : "label-5",
                            "content" : "1-5 Content text Content text Content text Content text Content text Content text ",
                        },],
                        "text":[{
                            "title" : "title-1-1",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-1-2",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-1-3",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-1-4",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },],
                    },
                }, {
                    "id" : 1,
                    "subtype": "location",
                    "name" : "parallelogram",
                    "link": "/wiki/location-2.html",
                    "description": "I am a parallelogram",
                    "img": "assets/img/locations/location-2.jpg",
                    "design": {
                        "fill" : "white",
                        "stroke" : "yellow",
                        "lineW" : 2,
                    },
                    "points": [{
                        x: 150,
                        y: 500
                    }, {
                        x: 250,
                        y: 500
                    }, {
                        x: 200,
                        y: 100
                    }, {
                        x: 100,
                        y: 100
                    }],
                    "info":{
                        "area":[{
                            "title" : "Beast of Bodmin",
                            "content" : "A large feline inhabiting Bodmin Moor.",
                        },
                            {
                            "title" : "label-2-1",
                            "content" : "2-1 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-2-2",
                            "content" : "2-2 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-2-3",
                            "content" : "2-3 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-2-4",
                            "content" : "2-4 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-2-5",
                            "content" : "2-5 Content text Content text Content text Content text Content text Content text ",
                        },],
                        "text":[{
                            "title" : "title-2-1",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-2-2",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-2-3",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-2-4",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },]
                    },
                }, {
                    "id" : 2,
                    "subtype": "location",
                    "name" : "parasffsallelogram",
                    "link": "/wiki/location-3.html",
                    "description": "I am an abomination",
                    "img": "assets/img/locations/location-3.jpg",
                    "design": {
                        "fill" : "orange",
                        "stroke" : "black",
                        "lineW" : 2,
                    },
                    "points": [{
                        x: 250,
                        y: 150
                    }, {
                        x: 270,
                        y: 150
                    }, {
                        x: 260,
                        y: 400
                    }, {
                        x: 360,
                        y: 200
                    }],
                    "info":{
                        "area":[{
                            "title" : "Beast of Bodmin",
                            "content" : "A large feline inhabiting Bodmin Moor.",
                        },
                            {
                            "title" : "label-3-1",
                            "content" : "3-1 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-3-2",
                            "content" : "3-2 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-3-3",
                            "content" : "3-3 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-3-4",
                            "content" : "3-4 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-3-5",
                            "content" : "3-5 Content text Content text Content text Content text Content text Content text ",
                        },],
                        "text":[{
                            "title" : "title-3-1",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-3-2",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-3-3",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-3-4",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },]
                    },
                }, {
                    "id" : 3,
                    "subtype": "location",
                    "name" : "random shape",
                    "link": "/wiki/location-4.html",
                    "description": "I am a random shape",
                    "img": "assets/img/locations/location-4.jpg",
                    "design": {
                        "fill" : "green",
                        "stroke" : "black",
                        "lineW" : 2,
                    },
                    "points": [{
                        x: 350,
                        y: 150
                    }, {
                        x: 500,
                        y: 150
                    }, {
                        x: 360,
                        y: 800
                    }, {
                        x: 340,
                        y: 400
                    }],
                    "info":{
                        "area":[{
                            "title" : "Beast of Bodmin",
                            "content" : "A large feline inhabiting Bodmin Moor.",
                        },
                            {
                            "title" : "label-4-1",
                            "content" : "4-1 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-4-2",
                            "content" : "4-2 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-4-3",
                            "content" : "4-3 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-4-4",
                            "content" : "4-4 Content text Content text Content text Content text Content text Content text ",
                        },
                            {
                            "title" : "label-4-5",
                            "content" : "4-5 Content text Content text Content text Content text Content text Content text ",
                        },],
                        "text":[{
                            "title" : "title-4-1",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-4-2",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-4-3",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },
                            {
                            "title" : "title-4-4",
                            "content" : "paragraph text paragraph textparagraph textparagraph text",
                        },]
                    },
                }
            ],
            "paths": [
                {
                    "id": 0,
                    "subtype": "journey",
                    "key": "event",
                    "name": "event-1",
                    "description": "Battle of the bushes",
                    "x": 130,
                    "y": 237,
                },
                {
                    "id": 1,
                    "subtype": "journey",
                    "key": "event",
                    "name": "event-2",
                    "description": "Trimming of the bushes",
                    "x": 250,
                    "y": 350,
                },
                {
                    "id": 2,
                    "subtype": "journey",
                    "key": "event",
                    "name": "event-3",
                    "description": "OK, lets stop these dirty metaphors",
                    "x": 450,
                    "y": 350,
                },
                {
                    "id": 3,
                    "subtype": "journey",
                    "key": "event",
                    "name": "event-4",
                    "description": "Look, this one is not even getting a description. Happy now?",
                    "x": 475,
                    "y": 410,
                },
                {
                    "id": 10,
                    "subtype": "journey",
                    "key": "quest",
                    "name": "quest-1",
                    "description": "Rise of the Beavers",
                    "x": 830,
                    "y": 570,
                },
                {
                    "id": 11,
                    "subtype": "journey",
                    "key": "quest",
                    "name": "quest-2",
                    "description": "Devourers of TImber",
                    "x": 780,
                    "y": 150,
                },
                {
                    "id": 12,
                    "subtype": "journey",
                    "key": "quest",
                    "name": "quest-3",
                    "description": "flooding in Beavertown",
                    "x": 650,
                    "y": 350,
                },
                {
                    "id":13,
                    "subtype": "journey",
                    "key": "quest",
                    "name": "quest-4",
                    "description": "Just can't help myself",
                    "x": 375,
                    "y": 360,
                },
            
            ],
        },
    },
];

// Initialize
// Canvas
const canvas = document.getElementById("main-visual");
const anim = document.getElementById("animation-layer");
canvas.width = window.innerWidth * 0.95;
canvas.height = window.innerHeight * 0.95 //4:3 aspect ratio

anim.width = window.innerWidth * 0.95;
anim.height = window.innerHeight * 0.95 //4:3 aspect ratio

// Time Controls
let timeIndexStart = 0;
let timeIndexMax = data.length - 1;
let timeScroller = document.getElementById('timeline');
let timeDisplay = document.getElementById("time-display") ;
let globalTime = timeIndexStart;

timeScroller.value = timeIndexStart;
timeScroller.min = timeIndexStart;
timeScroller.max = timeIndexMax;

// Global Variables
let mainTitle = document.getElementById("main-title") ;
let mainContent = document.getElementById("main-content") ;

let mouselabel = document.getElementById("mouse-label")

let infoBox = document.getElementById("info-box") ;
let ibToggle = document.getElementById("toggle-info-box") ;
let ibImg = document.getElementById("ib-img") ;
let ibLink = document.querySelectorAll(".ib-link") ;
let ibTitle = document.getElementById("ib-title") ;
let ibText = document.getElementById("info-text") ;
let ibArea = document.getElementById("info-area") ;

// Load data
window.onload = function(){
    setPage()
};

// set page contents
function setPage() {
    setCanvas();
    setTimeIndex();
    animateCanvas();
}

// Set Canvas contents
function setCanvas() {
    // Load Map Object
    let mapInstance = new MapMaker(canvas, globalTime, data)
    mapInstance.start();
}

function animateCanvas() {
    // Load Map Object
    let animInstance = new MapAnimator(anim, globalTime, data)
    animInstance.start();
}

// Set time index and time display
function setTimeIndex() {
    // Set Current Time
    let timeIndex = timeScroller.value;

    // Superflous?
    globalTime = timeIndex

    // Set Page Content
    setContent(data, timeIndex)

    // Set Display Time
    setTimeIndexValue(timeIndex)
    return timeIndex
}

// Next action 0219: Create dedicated UI reset button
// Add hide all windows functionaliy s

// Reset Info box
window.addEventListener("keydown", (e) => {
    switch(e.code){
        case 'Escape':
            resetMainText();
            break;
        case 'KeyH':
            hideWindows();
            break;
        case 'KeyS':
            showWindows();
            break;
        default:
            break;
    };
});

// // Set Cursor Label
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

// Global utility functions
function resetMainText() {
    // Better turn timeIndex into a global variable
    let timeIndex = timeScroller.value;
    setContent(data, timeIndex)
}

function hideWindows(){
    let mainText = document.getElementById("main-text") ;
    let infoBox = document.getElementById("info-box") ;
    mainText.classList.remove("active-menu");
    infoBox.classList.remove("active-menu");
}
function showWindows(){
    let mainText = document.getElementById("main-text") ;
    let infoBox = document.getElementById("info-box") ;
    mainText.classList.add("active-menu");
    infoBox.classList.add("active-menu");
}
