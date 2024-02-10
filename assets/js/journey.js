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
    const cw = journey.canvas.cw;
    const ch = journey.canvas.ch;

    const path = journey.path;

    const ballRadius = 4;
    
    
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
    
    journey.context.moveTo(x,y);
    journey.context.lineTo(x - 5 , y - 5);
    journey.context.lineTo(x + 5 , y - 5);
    journey.context.lineTo(x + 5 , y + 5);
    journey.context.lineTo(x - 5 , y + 5);
    journey.context.lineTo(x - 5 , y - 5);
    
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

    // Coordinates adjusted for canvas grid
    const cw = journeyEvent.canvas.cw;
    const ch = journeyEvent.canvas.ch;
    journeyEvent.x = journeyEvent.data.x * cw; 
    journeyEvent.y = journeyEvent.data.y * ch;
}

JourneyEvent.prototype.defineEvent = function() {
    // Base
    let journeyEvent = this;
    const offset = 15;

    journeyEvent.context.beginPath();
    journeyEvent.context.moveTo(journeyEvent.x - offset , journeyEvent.y - offset);
    journeyEvent.context.lineTo(journeyEvent.x + offset , journeyEvent.y - offset);
    journeyEvent.context.lineTo(journeyEvent.x + offset , journeyEvent.y + offset);
    journeyEvent.context.lineTo(journeyEvent.x - offset , journeyEvent.y + offset);
    journeyEvent.context.lineTo(journeyEvent.x - offset , journeyEvent.y - offset);
}