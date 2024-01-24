// https://jsfiddle.net/m1erickson/wPMk5/
// https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
 // Clickability
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