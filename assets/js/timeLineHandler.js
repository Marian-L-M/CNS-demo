let timeIndex = 0;
let timeIndexMax = 5;
let timeDisplay = document.getElementById("time-index") ;
timeDisplay.max = timeIndexMax;
// showSlides(timeIndex);

// Next/previous controls
function incrementTime(n) {
    if (timeIndex < timeIndexMax) {
        timeIndex += n;
        setTimeIndexValue()
    }
}
function decreaseTime(n) {
    if (timeIndex > 0) {
        timeIndex -= n;
        setTimeIndexValue();
    }
}

function setTimeIndex() {
    timeIndex = document.getElementById('timeline').value;
    setTimeIndexValue()
}

function setTimeIndexValue() {
    timeDisplay.innerHTML = timeIndex;
}
