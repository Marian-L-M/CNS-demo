// Define game state as int variable:

function MapMaker(canvas, globalTime, data) {
    // Base
    var map = this;

    // Global Atrributes
    map.canvas = canvas;
    map.context = map.canvas.getContext('2d');

    // Bind Events
    map.bindEvents();

    // Clickability
    // Note: Next step: move clickability demo to createLocations folder
    function getCursorPosition(canvas, event) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        console.log("x: " + x + " y: " + y)

        for (var i = 0; i < shapes.length; i++) {
            var shape = shapes[i];
            // define the current shape
            define(shape);
            // test if the mouse is in the current shape
            if (map.context.isPointInPath(x,y)) {
                // if inside, display the shape's message
                alert(shape.message);
            }
        }
    }
    
    
    map.canvas.addEventListener('mousedown', function(e) {
        getCursorPosition(canvas, e)
    })

    map.context.fillStyle = "skyblue";
    map.context.strokeStyle = "lightgray";
    map.context.lineWidth = 2;

    var triangle = {
        points: [{
            x: 25,
            y: 100
        }, {
            x: 50,
            y: 50
        }, {
            x: 75,
            y: 100
        }],
        message: "I am a triangle"
    }
    
    var parallelogram = {
        points: [{
            x: 150,
            y: 50
        }, {
            x: 250,
            y: 50
        }, {
            x: 200,
            y: 100
        }, {
            x: 100,
            y: 100
        }],
        message: "I am a parallelogram"
    }

    var shapes = [];
    shapes.push(triangle);
    shapes.push(parallelogram);

    function define(shape) {
        var points = shape.points;
        map.context.beginPath();
        map.context.moveTo(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++) {
            map.context.lineTo(points[i].x, points[i].y);
        }
    }

    function draw(shape) {
        define(shape);
        map.context.fill();
        map.context.stroke();
    }

    draw(triangle);
    draw(parallelogram);
    // console.log(shapes)
    
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
    // map.runMapLoop();
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

MapMaker.prototype.createLocations = function() {
    // Setup
    let map = this;
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
