let data = [
    {
        "id": 0,
        "timeIndex": 0,
        "title": "I am an explanation title",
        "content": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia esse consectetur culpa excepturi iste odit modi ullam nam ea, est neque quis id vitae animi, molestiae dolorum officia sequi consequuntur.</p>"
    },
    {
        "id": 1,
        "timeIndex": 1,
        "title": "I am the second title",
        "content": "<p>Second text</p>"
    },
    {
        "id": 2,
        "timeIndex": 2,
        "title": "I am the third title",
        "content": "<p>Third text</p>"
    },
    {
        "id": 3,
        "timeIndex": 3,
        "title": "I am the fourth title",
        "content": "<p>Fourth text</p>"
    },
    {
        "id": 4,
        "timeIndex": 4,
        "title": "I am the fifth title",
        "content": "<p>Fifth text</p>"
    },
    {
        "id": 5,
        "timeIndex": 5,
        "title": "I am the sixth title",
        "content": "<p>Sixth text</p>"
    },
];


let timeIndexStart = 0;
let timeIndexMax = data.length - 1;
let timeScroller = document.getElementById('timeline');
let timeDisplay = document.getElementById("time-display") ;

timeScroller.value = 0;
timeScroller.min = timeIndexStart;
timeScroller.max = timeIndexMax;


// Next/previous controls
function increaseTime(n) {
    let currentTime = timeValueClean();
    // setTimeIndex();
    if (currentTime < timeIndexMax) {
        timeScroller.value = currentTime + n;
        setTimeIndex();
    }
}
function decreaseTime(n) {
    let currentTime = timeValueClean();
    if (currentTime > timeIndexStart) {
        timeScroller.value = currentTime - n;
        setTimeIndex();
    }
}

// Set Global Time
function setTimeIndex() {
    // Set Current Time
    let timeIndex = timeScroller.value;

    // Set Page Content
    setContent(data, timeIndex)

    // Set Display Time
    setTimeIndexValue(timeIndex)
    return timeIndex
}

// Set Display Time
function setTimeIndexValue(timeIndex) {
    timeDisplay.innerHTML = timeIndex;
}

// Get Timeline Value as an integer
function timeValueClean() {
    let timeValueClean = parseInt(timeScroller.value)
    return timeValueClean
}

