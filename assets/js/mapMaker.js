// Define game state as int variable:
const INITIAL = 0;

function MapMaker(canvas, globalTime, data) {
    // Base
    var map = this;

    // Global Atrributes
    map.canvas = canvas;
    map.context = map.canvas.getContext('2d');

    // Map State
    map.currentState = INITIAL;

    // Bind Events
    map.bindEvents();

    // Create Map Objects
    map.createObjects();
};

MapMaker.prototype.bindEvents = function() {
    // Base
    var map = this;

    // Mouse Listener
    map.canvas.addEventListener('click', function(event){
        // For Wiki function
    });

    // Key Listener
    window.addEventListener('keydown', function(event){
        // Filter function
        // Arrows for global movement
    });
};

MapMaker.prototype.createObjects = function() {
    // Base
    var map = this;
    map.background = new MapBackground(data[globalTime].baseMap, map.canvas);
    map.background.draw();

}

MapMaker.prototype.start = function() {
    // Base
    let map = this;

    // Start Map
    window.requestAnimationFrame(function() {
        map.runMapLoop();
    });
};

MapMaker.prototype.runMapLoop = function() {
    // Base
    let map = this;

    // Map State
    switch(map.currentState) {
        case INITIAL:
            // Draw INITIAl SCREEN
            map.drawInitialScreen()
            break
    }

    // Start Map
    window.requestAnimationFrame(function() {
        map.runMapLoop();
    });
    
};

MapMaker.prototype.drawInitialScreen = function() {
    // Base
    let map = this;

    // Set starting Map
    map.background = new MapBackground(data[0].baseMap, map.canvas);
    map.background.draw();
    
    // Text
    map.context.fillStyle = 'white';
    map.context.font = '36px Arial';
    map.context.fillText(data[globalTime].title, map.canvas.width / 10, map.canvas.height / 2)
}