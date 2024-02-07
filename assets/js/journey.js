function Journey (canvas, data, globalTime, index) {
    // Base
    let journey = this;

    // Global Attributes
    journey.canvas = canvas;
    journey.context = journey.canvas.getContext('2d');
    journey.data = data;
    journey.time = globalTime;
    journey.index = index;
    journey.path = journey.data[journey.time].journeys[index];
}

Journey.prototype.draw = function() {
    // Setup
    let journey = this;
    const path = journey.path;

    let cw  = canvas.width / 1000;
    let ch = canvas.height / 1000;
    let ballRadius = 4;
    
    journey.context.beginPath();
    journey.context.lineWidth=4;
    journey.context.lineJoin='round';
    
    // Draw Node Lines
    const firstNode = path[0];

    journey.context.beginPath();
    journey.context.strokeStyle= "black";
    journey.context.fillStyle= "black";
    
    journey.drawNode(cw * firstNode.x, ch * firstNode.y, ballRadius)

    // Draw Node & Node line
    path.forEach((e) => {
        journey.drawNodeLine(cw*e.x, ch*e.y, cw*e.lx, ch*e.ly, ballRadius)
        journey.drawNode(cw*e.lx, ch*e.ly, ballRadius)
    });

    journey.context.stroke();
    journey.context.fill();
}

Journey.prototype.drawNodeLine = function(x,y,l,ly) {
    // Setup
    let journey = this;

    journey.context.moveTo(x,y);
    journey.context.lineTo(l,ly);
}

Journey.prototype.drawNode = function(x,y, radius) {
    // Setup
    let journey = this;
    const radian = Math.PI / 180;
    
    journey.context.moveTo(x,y);
    journey.context.arc(x, y, radius, 0, radian * 360, false);
}

Journey.prototype.defineNode = function(i) {
    // Setup
    let journey = this;
    let pathPoints = journey.paths[i];
    console.log()
    const oh = 20;
    // Create clickbox

    // Drawing multiple separate instances does not work like this
    // console.log(pathPoints)
    // journey.context.beginPath();
    // pathPoints.forEach((point) => {
    //     journey.context.moveTo(point.lx - oh , point.ly - oh);
    //     journey.context.lineTo(point.lx + oh , point.ly - oh);
    //     journey.context.lineTo(point.lx + oh , point.ly + oh);
    //     journey.context.lineTo(point.lx - oh , point.ly + oh);
    //     journey.context.lineTo(point.lx - oh , point.ly - oh);
    // });
}