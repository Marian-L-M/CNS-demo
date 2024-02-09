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
    
    
    // Draw Node Lines
    journey.context.beginPath();
    journey.context.lineWidth=4;
    journey.context.lineJoin='round';
    journey.context.strokeStyle= "black";
    journey.context.fillStyle= "black";
    
    
    // Draw Node & Node line
    let nodeLimit = path.length;

    for (let i = 0; i < (nodeLimit - 1); i++) {
        journey.drawNode(cw*path[i].x, ch*path[i].y, ballRadius)
        journey.drawNodeLine(cw*path[i].x, ch*path[i].y, cw*path[i].lx, ch*path[i].ly, ballRadius)
    }

    // Fix later: Last node has lx/ly but no next point
    // For now separate, but change to safe function 
    const lastNode = path[path.length - 1];
    journey.drawNode(cw * lastNode.x, ch * lastNode.y, ballRadius)
    
    journey.context.stroke();
    journey.context.fill();

    const offset = 20;

    // Draw click hitbox
    // Pattern looks like path but with distances shortened!
    // I forgot CW & CH journey already uses relative placement, journey event is written in absolute placement!
    // Bingpot

    for (let i = 0; i < (nodeLimit); i++) {
        journey.context.beginPath();
        journey.context.lineWidth=4;
        journey.context.lineJoin='round';
        journey.context.strokeStyle= "red";
        journey.context.fillStyle= "red";
        journey.context.moveTo(path[i].x - offset , path[i].y - offset);
        journey.context.lineTo(path[i].x + offset , path[i].y - offset);
        journey.context.lineTo(path[i].x + offset , path[i].y + offset);
        journey.context.lineTo(path[i].x - offset , path[i].y + offset);
        journey.context.lineTo(path[i].x - offset , path[i].y - offset);
        journey.context.stroke();
        journey.context.fill();
    }
}

Journey.prototype.drawNodeLine = function(x,y,lx,ly) {
    // Setup
    let journey = this;

    journey.context.moveTo(x,y);
    journey.context.lineTo(lx,ly);
}

Journey.prototype.drawNode = function(x,y, radius) {
    // Setup
    let journey = this;
    const radian = Math.PI / 180;
    
    journey.context.moveTo(x,y);
    journey.context.lineTo(x - 5 , y - 5);
    journey.context.lineTo(x + 5 , y - 5);
    journey.context.lineTo(x + 5 , y + 5);
    journey.context.lineTo(x - 5 , y + 5);
    journey.context.lineTo(x - 5 , y - 5);

    // journey.context.arc(x, y, radius, 0, radian * 360, false);
}

function JourneyEvent(canvas, data, globalTime, journey, index){
    // Base
    let journeyEvent = this;

    // Global Attributes
    journeyEvent.canvas = canvas;
    journeyEvent.context = journeyEvent.canvas.getContext('2d');
    journeyEvent.data = data[globalTime].journeys[journey][index];

    journeyEvent.name = journeyEvent.data.name;
    journeyEvent.description = journeyEvent.data.description;
    journeyEvent.x = journeyEvent.data.x;
    journeyEvent.y = journeyEvent.data.y;
}

JourneyEvent.prototype.defineEvent = function() {
    // Base
    let journeyEvent = this;
    const offset = 50;

    journeyEvent.context.beginPath();
    journeyEvent.context.moveTo(journeyEvent.x - offset , journeyEvent.y - offset);
    journeyEvent.context.lineTo(journeyEvent.x + offset , journeyEvent.y - offset);
    journeyEvent.context.lineTo(journeyEvent.x + offset , journeyEvent.y + offset);
    journeyEvent.context.lineTo(journeyEvent.x - offset , journeyEvent.y + offset);
    journeyEvent.context.lineTo(journeyEvent.x - offset , journeyEvent.y - offset);
}