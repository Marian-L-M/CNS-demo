function Location (canvas, data, globalTime, index) {
    //
    let location = this;

    // Global Attributes
    location.canvas = canvas;
    location.context = location.canvas.getContext('2d');

    // Note 2024/02/15
    // Declarations might be doing nothing
    location.description = data[globalTime].locations[index].description;
    location.name = data[globalTime].locations[index].name;
    location.src = data[globalTime].locations[index].link;
    location.points = data[globalTime].locations[index].points;
    location.fill = data[globalTime].locations[index].design.fill;
    location.stroke = data[globalTime].locations[index].design.stroke;
    location.lineWidth = data[globalTime].locations[index].design.lineW;
}


Location.prototype.draw = function() {
    // Base
    let location = this;

    let points = location.points;

    location.context.fillStyle = location.fill;
    location.context.strokeStyle = location.stroke;
    location.context.lineWidth = location.lineWidth;

    location.context.beginPath();
    location.context.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
        location.context.lineTo(points[i].x, points[i].y);
    }
    location.context.lineTo(points[0].x, points[0].y);
    location.context.fill();
    location.context.stroke();
}

Location.prototype.define = function() {
    // Base
    let location = this;

    let points = location.points;

    location.context.beginPath();
    location.context.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
        location.context.lineTo(points[i].x, points[i].y);
    }
}


