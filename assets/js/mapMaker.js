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
};

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

    // Draw
    map.context.fillStyle = 'black';
    map.context.fillRect(0, 0, map.canvas.width, map.canvas.height);

    // Text
    map.context.fillStyle = 'white';
    map.context.font = '36px Arial';
    map.context.fillText(data[globalTime].title, map.canvas.width / 10, map.canvas.height / 2)
    
    
}