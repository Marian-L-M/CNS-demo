// Set page content
function setContent(data, timeStep) {
    let mainTitle = document.getElementById("main-title") ;
    let mainContent = document.getElementById("main-content") ;

    mainTitle.innerHTML = data[timeStep].title;
    mainContent.innerHTML = data[timeStep].content;
}
