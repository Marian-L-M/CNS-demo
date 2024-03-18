// 240317 next action: Separate Infobox and Mainbox feels like bad UI, make them overlap + not cover map
function MapMaker(canvas, globalTime, data) {
    // Base
    var map = this;

    // Global Atrributes
    map.canvas = canvas;
    map.context = map.canvas.getContext('2d');

    // Grid 1000*1000
    map.canvas.cw  = canvas.width / 1000;
    map.canvas.ch = canvas.height / 1000;

    // Bind Events
    map.bindEvents();
};

MapMaker.prototype.bindEvents = function() {
    // Base
    var map = this;

    // Hover events
    map.createHoverEvents();
    
    // Click Listener for wiki functions
    map.canvas.addEventListener('mousedown', function(e) {
        map.createClickEvents(canvas, e)
    });

};

MapMaker.prototype.start = function() {
    // Base
    let map = this;
    
    // Start Map
    map.runMapLoop();
};

MapMaker.prototype.runMapLoop = function() {
    // Base
    let map = this;

    // Draw INITIAl SCREEN
    map.drawInitialScreen()
    
    // Create Map Objects
    map.createObjects();

    // Animation Loop
    // 240315 Is that actually needed?
    window.requestAnimationFrame(function() {
        map.runMapLoop();
    });
};

MapMaker.prototype.drawInitialScreen = function() {
    // Base
    let map = this;

    // Clear Canvas
    map.context.clearRect(0, 0, map.canvas.width, map.canvas.height);
 
}

MapMaker.prototype.createObjects = function() {
    // Base
    var map = this;
    
    // Draw Location and paths
    map.drawObjects();
}

MapMaker.prototype.createClickEvents = function(canvas, event) {
    // Base
    let map = this;

    // Setup
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Location click events
    map.createClickLoop('areas', x, y);
    
    // Icon click events
    map.createClickLoop('icons', x, y);

    // Journey click events
    map.createClickLoop('paths', x, y);
}

MapMaker.prototype.createHoverEvents = function() {
    // Setup
    let map = this;

    // Mouse movement for hover functions
    var r = map.canvas.getBoundingClientRect()

    // Set mouse label contents
    map.canvas.onmousemove = (e) => {
        let x = e.clientX - r.left;
        let y = e.clientY - r.top;

        // Reset mouse label
        mouselabel.innerHTML = "";

        // Location hover mouse label
        map.hoverAction('areas',x,y);
        
        // // Journey hover mouse label
        map.hoverAction('paths',x,y);
        
        // Character hover mouse label
        map.hoverAction('icons',x,y);
    }
}

MapMaker.prototype.drawObjects = function() {
    // Setup
    let map = this;
    
    // Draw Locations
    map.drawHandler('areas')
    
    // Draw Journeys
    map.drawHandler('paths')

    // Draw Characters & Icons
    // map.drawHandler('icons')
}


// ======= Utility functions ============
// Base for unified click, draw, and hover functions
MapMaker.prototype.getTypeLength = function(type) {

    let length = data[globalTime].object[type].length;

    return length;
}

MapMaker.prototype.drawHandler = function(type) {
    // Base
    let map = this;
    const length = map.getTypeLength(type);

    for (let i = 0; i < length; i++) {
        map.object = new Generator(map.canvas, data, globalTime,i, type);
        map.object.draw()
        // Draw lines
        if(map.object.hasNext){
            map.object.drawNodeLine()
        }
    }
}

// Move hover action into generator
MapMaker.prototype.hoverAction = function(type, x, y) {
    // Base
    let map = this;
    const length = map.getTypeLength(type);

    for (var i = 0; i < length; i++) {
        map.object = new Generator(map.canvas, data, globalTime,i, type);
        map.object.define();
        if (map.object.context.isPointInPath(x,y)) {
            mouselabel.innerHTML = map.object.name;
            break;
        }
    }
}

// Fill infobox and main box
MapMaker.prototype.createClickLoop = function (type, x, y){
    // Base
    let map = this;

    // Get array length
    let length = map.getTypeLength(type);
    map.runClickLoop(type, length, x, y)
};

MapMaker.prototype.runClickLoop = function (type, length, x, y){
    // Base
    let map = this;

    for (let i = 0; i < length; i++) {
        // Create Location Path
        map.object = new Generator(map.canvas, data, globalTime,i, type);

        // Define Location
        map.object.define();

        // Populate infobox
        if (map.object.context.isPointInPath(x,y)) {
            switch(type){
                case 'areas':
                case 'icons':
                    map.populateInfoBox(map.object);
                    break;
                case'paths':                    
                    map.populateMainBox(map.object);
                    break;
            }
        };
    };
}

// Populate functions
MapMaker.prototype.populateMainBox = function (content){
    // Base
    let map = this;
    mainTitle.innerHTML = map.object.name;
    mainContent.innerHTML = map.object.description;
}

MapMaker.prototype.populateInfoBox = function (content){
    // Base
    let map = this;

    infoBox.classList.add("active-menu");
    ibToggle.classList.add("active-btn")
    ibTitle.innerHTML = content.name;
    ibImg.src = content.img;

    // Set links
    ibLink.forEach(e => {
        e.href = content.link;
    });
    
    // Purge Info area & repopulate
    ibArea.innerHTML = "";
    content.info.area.forEach(e => {
        // Set Text
        map.setInfobox(e,ibArea,"dt","dd");
    }); 

    // Purge Info Box & repopulate
    ibText.innerHTML = "";
    content.info.text.forEach(e => {
        // Set Text
        map.setInfobox(e,ibText, "h4", "p");
    }); 
}

MapMaker.prototype.setInfobox = function ( ib, container, titleType, contentType){
    const title = document.createElement(titleType);
    const titleNode = document.createTextNode(ib.title);
    const para = document.createElement(contentType);
    const node = document.createTextNode(ib.content);
    
    title.appendChild(titleNode);
    para.appendChild(node);
    container.append(title, para);
}