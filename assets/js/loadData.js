// Set page content
function setContent(data, timeStep) {
    let mainTitle = document.getElementById("main-title") ;
    let mainContent = document.getElementById("main-content") ;
    let map = document.getElementById("map-element") ;

    mainTitle.innerHTML = data[timeStep].title;
    mainContent.innerHTML = data[timeStep].content;
    map.style.backgroundImage = `url(${data[timeStep].baseMap})`
}

// Get Timeline Value as an integer
function timeValueClean() {
    let timeValueClean = parseInt(timeScroller.value)
    return timeValueClean
}

// Set Display Time
function setTimeIndexValue(timeIndex) {
    timeDisplay.innerHTML = timeIndex;
}

// Next/previous controls
function increaseTime(n) {
    let currentTime = timeValueClean();
    // setTimeIndex();
    if (currentTime < timeIndexMax) {
        timeScroller.value = currentTime + n;
        setPage();
    }
}
function decreaseTime(n) {
    let currentTime = timeValueClean();
    if (currentTime > timeIndexStart) {
        timeScroller.value = currentTime - n;
        setPage();
    }
}