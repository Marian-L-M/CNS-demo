function Location (canvas, data, globalTime, index) {
    // Base
    let location = this;

    // Global Attributes
    location.canvas = canvas;
    location.context = location.canvas.getContext('2d');

    location.description = data[globalTime].locations[index].description;
    location.name = data[globalTime].locations[index].name;
    location.link = data[globalTime].locations[index].link;
    location.img = data[globalTime].locations[index].img;
    location.points = data[globalTime].locations[index].points;
    location.fill = data[globalTime].locations[index].design.fill;
    location.stroke = data[globalTime].locations[index].design.stroke;
    location.lineWidth = data[globalTime].locations[index].design.lineW;
    location.info = data[globalTime].locations[index].info;
    location.ch = canvas.ch;
    location.cw = canvas.cw;
}


Location.prototype.draw = function() {
    // Base
    let location = this;
    let cw = location.cw;
    let ch = location.ch;
    
    let points = location.points;

    location.context.fillStyle = location.fill;
    location.context.strokeStyle = location.stroke;
    location.context.lineWidth = location.lineWidth;

    location.context.beginPath();
    location.context.moveTo(points[0].x * cw, points[0].y * ch);
    for (var i = 1; i < points.length; i++) {
        location.context.lineTo(points[i].x * cw, points[i].y * ch);
    }
    location.context.lineTo(points[0].x * cw, points[0].y * ch);
    location.context.fill();
    location.context.stroke();
}

Location.prototype.define = function() {
    // Base
    let location = this;
    let cw = location.cw;
    let ch = location.ch;

    let points = location.points;

    location.context.beginPath();
    location.context.moveTo(points[0].x * cw, points[0].y * ch);
    for (var i = 1; i < points.length; i++) {
        location.context.lineTo(points[i].x * cw, points[i].y * ch);
    }
}


