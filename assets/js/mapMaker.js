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

            // Create Map Objects
            map.createObjects();
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

    // Clear Canvas
    map.context.clearRect(0, 0, map.canvas.width, map.canvas.height);

    // // Set starting Map
    // map.background = new MapBackground(data[globalTime].baseMap, map.canvas);
    // map.background.draw();
}

MapMaker.prototype.createObjects = function() {
    // Base
    var map = this;
    


    // Text
    map.context.fillStyle = 'white';
    map.context.font = '36px Arial';
    map.context.fillText(data[globalTime].title, map.canvas.width / 10, map.canvas.height / 2)
    
    // Character
    map.character = new Character(map.canvas, data, globalTime);
    map.character.create()
    map.character.draw()

    // window.requestAnimationFrame(function() {
        // map.animateObjects();
    // });
}

// Structure is inefficient as images need to reload on every icon movement. Cant clear out the icons as it would cut the map bg.
// Split into two canvas. One for background, one for objects
MapMaker.prototype.animateObjects = function() {
    // Base
    var map = this;

    // Clear Canvas
    map.context.clearRect(0, 0, map.canvas.width, map.canvas.height);

    map.character.x += 500;
    map.character.draw()

    moveMyImg()
    // // Animate
    function moveMyImg() {
        map.character.x += 1;
        map.character.draw()
    }
}