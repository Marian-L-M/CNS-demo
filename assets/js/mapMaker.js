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
    
    // Characters
    map.createCharacters();

    // Locations
    map.createEvents();

    // map.createHoverEvents();
}

MapMaker.prototype.createClickEvents = function(canvas, event) {
    // Base
    let map = this;

    // Setup
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Infobar
    let mainTitle = document.getElementById("main-title") ;
    let mainContent = document.getElementById("main-content") ;

    // Location click events
    let locationLength = data[globalTime].locations.length


    for (let i = 0; i < locationLength; i++) {
        map.location = new Location(map.canvas, data, globalTime,i);
    
        let shape = data[globalTime].locations[i];

        // Define Location
        map.location.define();

        if (map.location.context.isPointInPath(x,y)) {
            mainTitle.innerHTML = shape.name;
            mainContent.innerHTML = shape.message;
        }
    }

    // Character click events
    let charactersLength = data[globalTime].characters.length;

    for (let i = 0; i < charactersLength; i++) {
        map.character = new Character(map.canvas, data, globalTime, i);

        // Define character location
        map.character.define(map.character);

        if (map.character.context.isPointInPath(x,y)) {
            mainTitle.innerHTML = map.character.name;
            mainContent.innerHTML = map.character.description;
        }
    }

    // Journey click events
    let journeysLength = data[globalTime].journeys.length; 
    const oh = 20;

    for (let i = 0; i < journeysLength; i++) {
        for (let j = 0; j < map.journey.path.length; j++) {
            map.journeyEvent = new JourneyEvent (map.canvas, data, globalTime, i, j)
            map.journeyEvent.defineEvent();
            if (map.journeyEvent.context.isPointInPath(x,y)) {
                mainTitle.innerHTML = map.journeyEvent.name;
                mainContent.innerHTML = map.journeyEvent.description;
            }
        }
    };
}

MapMaker.prototype.createCharacters = function() {
    // Setup
    let map = this;
    let charactersLength = data[globalTime].characters.length

    // Character
    for (let i = 0; i < charactersLength; i++) {
        map.character = new Character(map.canvas, data, globalTime, i);
        map.character.create()
        map.character.draw()
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
    let mouselabel = document.getElementById("mouse-label") // Doesnt actually need to be declared again
    
    // Draw Locations
    for (let i = 0; i < locationLength; i++) {
        map.location = new Location(map.canvas, data, globalTime,i);
        map.location.draw();
    }

    // Draw Journeys
    for (let i = 0; i < journeysLength; i++) {
        map.journey = new Journey(map.canvas, data, globalTime,i);
        map.journey.draw();
    }

    // Set mouse label contents
    map.canvas.onmousemove = (e) => {
        let x = e.clientX - r.left;
        let y = e.clientY - r.top;

        // Reset mouse label
        mouselabel.innerHTML = "";

        // Location hover
        for (var i = 0; i < locationLength; i++) {
            map.location = new Location(map.canvas, data, globalTime,i);
            map.location.define();
            if (map.location.context.isPointInPath(x,y)) {
                mouselabel.innerHTML = map.location.name;
            }
        }

        // Character hover
        for (var i = 0; i < charactersLength; i++) {
            map.character = new Character(map.canvas, data, globalTime,i);
            map.character.define();
            if (map.character.context.isPointInPath(x,y)) {
                mouselabel.innerHTML = map.character.name;
            }
        }

        // Character hover
        for (var i = 0; i < journeysLength; i++) {
            map.character = new Character(map.canvas, data, globalTime,i);
            map.character.define();
            if (map.character.context.isPointInPath(x,y)) {
                mouselabel.innerHTML = map.character.name;
            }
        }
        for (let i = 0; i < journeysLength; i++) {
            for (let j = 0; j < map.journey.path.length; j++) {
                map.journeyEvent = new JourneyEvent (map.canvas, data, globalTime, i, j)
                map.journeyEvent.defineEvent();
                if (map.journeyEvent.context.isPointInPath(x,y)) {
                    mouselabel.innerHTML = map.journeyEvent.name;
                }
            }
        };
        
    }
}
