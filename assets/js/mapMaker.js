function MapMaker(canvas, globalTime, data) {
    // Base
    var map = this;

    // Global Atrributes
    map.canvas = canvas;
    map.context = map.canvas.getContext('2d');

    // Bind Events
    map.bindEvents();
};

MapMaker.prototype.bindEvents = function() {
    // Base
    var map = this;

    // Click Listener for wiki functions
    map.canvas.addEventListener('mousedown', function(e) {
        map.getCursorPosition(canvas, e)
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

    // Create Paths
    map.createPath();

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
    map.createLocations();

}

MapMaker.prototype.getCursorPosition = function(canvas, event) {
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

MapMaker.prototype.createLocations = function() {
    // Setup
    let map = this;
    let locationLength = data[globalTime].locations.length

    // Draw Locations
    for (let i = 0; i < locationLength; i++) {
        map.location = new Location(map.canvas, data, globalTime,i);
        map.location.draw()
    }
    
    // Mouse movement for hover functions
    var r = map.canvas.getBoundingClientRect()
    let mouselabel = document.getElementById("mouse-label") // Doesnt actually need to be declared again
    
    // Set mouse label contents
    map.canvas.onmousemove = (e) => {
        let x = e.clientX - r.left;
        let y = e.clientY - r.top;

        mouselabel.innerHTML = ""
        for (var i = 0; i < locationLength; i++) {
            map.location = new Location(map.canvas, data, globalTime,i);
            map.location.define();
            if (map.location.context.isPointInPath(x,y)) {
                mouselabel.innerHTML = map.location.name;
            }
        }

    }
}

MapMaker.prototype.createPath = function() {
    // Setup
    let map = this;
    let cw  = canvas.width / 1000;
    let ch = canvas.height / 1000;
    const radian = Math.PI / 180;
    let ballRadius = 4;

    map.context.beginPath();
    map.context.lineWidth=4;
    map.context.lineJoin='round';
    
    // Draw Node Lines
    map.paths = data[globalTime].paths;

    if(map.paths) {
        map.paths.forEach((e) => {
            drawNodeLine(cw*e.x, ch*e.y, cw*e.lx, ch*e.ly, ballRadius, "black")
        });
    }
     
    // Node Line Utility
    function drawNodeLine(x,y,l,ly,radius, color) {
        map.context.beginPath();
        map.context.strokeStyle= color;
        map.context.fillStyle= color;
        map.context.arc(x + (ballRadius/2), y, radius, 0, radian * 360, false);
        map.context.moveTo(x,y);
        map.context.lineTo(l,ly);
        map.context.stroke();
        map.context.fill();
    }
}
