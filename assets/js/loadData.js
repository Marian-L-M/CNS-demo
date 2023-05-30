"use strict";
let mainTitle = document.getElementById("main-title") ;
let mainContent = document.getElementById("main-content") ;

// Fill content
import  timeObject from "../json/data.json" assert {type: 'json'};


setContent()

// Set content
function setContent() {
    mainTitle.innerHTML = timeObject.timeObject.title;
    mainContent.innerHTML = timeObject.timeObject.content;
}
