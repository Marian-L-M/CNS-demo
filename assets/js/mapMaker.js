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
    
    
    // 240307 Hover Events -> rename and move out of createObjects
    map.createEvents();
    
    // Draw Location and paths
    map.drawObjects();

    // Characters & Icons
    map.createIcons();
}

MapMaker.prototype.createClickEvents = function(canvas, event) {
    // Base
    let map = this;

    // Setup
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Location click events
    map.createClickLoop("location", x, y)
    
    // Character click events
    map.createClickLoop("character", x, y)

    // Journey click events
    map.createClickLoop("journey", x, y)
}

MapMaker.prototype.createIcons = function() {
    // Setup
    let map = this;
    let charactersLength = data[globalTime].characters.length

    // Characters
    // After refactoring expand character to accomodate icons in general (histori events etc.)
    for (let i = 0; i < charactersLength; i++) {
        map.character = new Generator(map.canvas, data, globalTime, i, 'character');
        map.character.draw()
    }
}
MapMaker.prototype.drawObjects = function() {
    // Setup
    let map = this;
    let journeysLength = data[globalTime].journeys.length
    let journeyData = data[globalTime].journeys;
    
    // Draw Locations
    // 240307 Next action: Unify draw functions/loops
    for (let i = 0; i < map.getTypeLength('location'); i++) {
        map.location = new Generator(map.canvas, data, globalTime,i, 'location');
        map.location.draw();
    }

    // Draw Journeys + lines
    for (let i = 0; i < map.getTypeLength('journey'); i++) {
        map.journey = new Generator(map.canvas, data, globalTime,i,'journey');
        map.journey.draw();
        if(i < (journeysLength - 1)){
            if(journeyData[i].key == journeyData[i + 1].key) {
                map.journey.drawNodeLine(data)
            }
        }
    }
}

MapMaker.prototype.createEvents = function() {
    // Setup
    let map = this;
    let locationLength = data[globalTime].locations.length
    let charactersLength = data[globalTime].characters.length
    let journeysLength = data[globalTime].journeys.length

    // Mouse movement for hover functions
    var r = map.canvas.getBoundingClientRect()

    // Set mouse label contents
    map.canvas.onmousemove = (e) => {
        let x = e.clientX - r.left;
        let y = e.clientY - r.top;

        // Reset mouse label
        mouselabel.innerHTML = "";

        // 240229 Next action: unify hover functions + clean up main.js (Split files between: data, variables, utilities)

        // Location hover
        for (var i = 0; i < locationLength; i++) {
            map.location = new Generator(map.canvas, data, globalTime,i, 'location');
            map.location.define();
            if (map.location.context.isPointInPath(x,y)) {
                mouselabel.innerHTML = map.location.name;
                break;
            }
        }

        // Journey hover
        for (let i = 0; i < journeysLength; i++) {
            map.journey = new Generator(map.canvas, data, globalTime, i, 'journey')
            map.journey.define();

            if (map.journey.context.isPointInPath(x,y)) {
                mouselabel.innerHTML = map.journey.name;
                break;
            }
        };

        // Character hover
        for (var i = 0; i < charactersLength; i++) {
            map.character = new Generator(map.canvas, data, globalTime,i, 'character');
            map.character.define();
            if (map.character.context.isPointInPath(x,y)) {
                mouselabel.innerHTML = map.character.name;
                break;
            }
        }
        
    }
}


// Utility functions
// Base for unified click, draw, and hover functions
MapMaker.prototype.getTypeLength = function(type) {
    // Base
    let map = this;
    let length;
    switch(type){
        case'location':
            length = data[globalTime].locations.length;
            break;
        case'character':
            length = data[globalTime].characters.length;
            break;
        case'journey':
            length = data[globalTime].journeys.length;
            break;
        default:
            break;
    }
    return length;
}

// Fill infobox and main box
MapMaker.prototype.createClickLoop = function (type, x, y){
    // Base
    let map = this;

    // Get array length
    let length;
    switch(type){
        case'location':
            length = data[globalTime].locations.length;
            map.runClickLoopIb(type, length, x, y)
            break;
        case'character':
            length = data[globalTime].characters.length;
            map.runClickLoopIb(type, length, x, y)
            break;
        case'journey':
            length = data[globalTime].journeys.length;
            map.runClickLoopMain(type, length, x, y)
            break;
        default:
            break;
    };
};

MapMaker.prototype.runClickLoopIb = function (type, length, x, y){
    // Base
    let map = this;

    for (let i = 0; i < length; i++) {
        // Create Location Path
        map.object = new Generator(map.canvas, data, globalTime,i, type);

        // Define Location
        map.object.define();

        // Populate infobox
        if (map.object.context.isPointInPath(x,y)) {
            map.infoboxClickActions(map.object);
            break;
        };
    };
}

MapMaker.prototype.runClickLoopMain = function (type, length, x, y){
    // Base
    let map = this;

    for (let i = 0; i < length; i++) {
        // Create Location Path
        map.object = new Generator(map.canvas, data, globalTime,i, type);

        // Define Location
        map.object.define();

        // Populate infobox
        if (map.journey.context.isPointInPath(x,y)) {
            mainTitle.innerHTML = map.journey.name;
            mainContent.innerHTML = map.journey.description;
            break;
        }
    };
}

// Infobox
MapMaker.prototype.infoboxClickActions = function (content){
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