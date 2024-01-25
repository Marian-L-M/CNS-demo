// Remap message alert to info box

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

    // Mouse Listener for wiki functions
    map.canvas.addEventListener('mousedown', function(e) {
        map.getCursorPosition(canvas, e)
    })

    // Key Listener
    // window.addEventListener('keydown', function(event){
    //     // Filter function
    //     // Arrows for global movement
    // });
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
    
    // Text
    map.context.fillStyle = 'white';
    map.context.font = '36px Arial';
    map.context.fillText(data[globalTime].title, map.canvas.width / 10, map.canvas.height / 2)
    
    // Character
    map.characters = new Character(map.canvas, data, globalTime, 0);
    map.characters.create()
    map.characters.draw()

    // Paths
    // map.createPath();

    // Locations
    map.createLocations();
}

MapMaker.prototype.getCursorPosition = function(canvas, event) {
    let map = this;
    let locationLength = data[globalTime].locations.length

    for (let i = 0; i < locationLength; i++) {
        // Structure is a bit inefficient Location constructor is called twice
        // Problem: calling the mouse listener inside the map loop will cause it to fire multiple times
        map.location = new Location(map.canvas, data, globalTime,i);

        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        console.log("x: " + x + " y: " + y)
    
        var shape = data[globalTime].locations[i];

        map.location.define(shape);


        // Update infobox
        let mainTitle = document.getElementById("main-title") ;
        let mainContent = document.getElementById("main-content") ;

        if (map.location.context.isPointInPath(x,y)) {
            console.log("click inside shape")
            mainTitle.innerHTML = shape.name;
            mainContent.innerHTML = shape.message;
        }
        else {
            console.log("click outside")
        }


    }
}

MapMaker.prototype.createLocations = function() {
    // Setup
    let map = this;
    let locationLength = data[globalTime].locations.length

    // Draw Locations
    for (var i = 0; i < locationLength; i++) {
        map.location = new Location(map.canvas, data, globalTime,i);
        map.location.draw()
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
