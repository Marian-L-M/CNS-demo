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
    map.runMapLoop();
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
    map.characters = new Character(map.canvas, data, globalTime, 0);
    map.characters.create()
    map.characters.draw()

    map.createPath();
}

MapMaker.prototype.createPath = function() {
    // Setup
    let map = this;
    let cw  = canvas.width / 1000;
    let ch = canvas.height / 1000;
    const radian = Math.PI / 180;
    let ballRadius = 4;

    map.context.beginPath();
    map.context.strokeStyle = "red";
    map.context.lineWidth=8;
    map.context.lineJoin='round';

    // Draw Node
    // map.context.arc(250, 250,ballRadius, 37 * radian, 323 * radian, false);
    drawBall(cw * 130, ch * 237, ballRadius, "black")
    map.context.moveTo(cw * 130, ch * 237);

    // Draw Line
    map.context.lineTo(cw * 250, ch * 350);

    map.context.stroke();

    // 
    function drawBall(x,y,radius, color) {
        const radian = Math.PI / 180;

        map.context.beginPath();
        map.context.strokeStyle= color;
        map.context.fillStyle= color;
        map.context.arc(x, y, radius, 0, radian * 360, false);
        map.context.stroke();
        map.context.fill();
    }
}