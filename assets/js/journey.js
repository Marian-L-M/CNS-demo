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
    journey.ch = canvas.ch;
    journey.cw = canvas.cw;
    
}

Journey.prototype.draw = function() {
    // Setup
    let journey = this;
    const ballRadius = 4;
    const path = journey.path;
    
    // Draw Node Lines
    journey.context.beginPath();
    journey.context.lineWidth=4;
    journey.context.lineJoin='round';
    journey.context.strokeStyle= "black";
    journey.context.fillStyle= "black";
    
    // Draw Node & Node line
    let nodeLimit = path.length;

    for (let i = 0; i < (nodeLimit - 1); i++) {
        journey.drawNode(journey.cw*path[i].x, journey.ch*path[i].y, ballRadius)
        journey.drawNodeLine(journey.cw*path[i].x, journey.ch*path[i].y, journey.cw*path[i].lx, journey.ch*path[i].ly, ballRadius)
    }

    // Fix later: Last node has lx/ly but no next point
    // For now separate, but change to safe function 
    const lastNode = path[path.length - 1];
    journey.drawNode(journey.cw * lastNode.x, journey.ch * lastNode.y, ballRadius)
    
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
    // Approach needs cleaning up
    journeyEvent.canvas = canvas;
    journeyEvent.context = journeyEvent.canvas.getContext('2d');
    journeyEvent.data = data[globalTime].journeys[journey][index];

    // Coordinates adjusted for canvas grid
    const cw = journeyEvent.canvas.cw;
    const ch = journeyEvent.canvas.ch;

    journeyEvent.name = journeyEvent.data.name;
    journeyEvent.description = journeyEvent.data.description;

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