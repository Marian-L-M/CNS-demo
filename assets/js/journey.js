function Journey (canvas, data, globalTime, index) {
    // Base
    let journey = this;

    // Global Attributes
    journey.canvas = canvas;
    journey.context = journey.canvas.getContext('2d');

    journey.ch = canvas.ch;
    journey.cw = canvas.cw;

    let journeyData = data[globalTime].journeys[index];

    journey.key = journeyData.key;
    journey.name = journeyData.name;
    journey.description = journeyData.description;
    journey.x = journeyData.x;
    journey.y = journeyData.y;
    
    
}

Journey.prototype.draw = function() {
    // Setup
    let journey = this;
    
    // Draw Node Lines
    journey.context.beginPath();
    journey.context.lineWidth=4;
    journey.context.lineJoin='round';
    journey.context.strokeStyle= "black";
    journey.context.fillStyle= "black";
    
    // Draw Node & Node line
    // let nodeLimit = path.length;
    journey.context.beginPath();

    journey.defineNode(journey.cw*journey.x, journey.ch*journey.y, 5)
    
    journey.context.stroke();
    journey.context.fill();
}

Journey.prototype.defineNode = function(x,y, offset) {
    // Setup
    let journey = this;
    
    journey.context.moveTo(x,y);
    journey.context.lineTo(x - offset , y - offset);
    journey.context.lineTo(x + offset , y - offset);
    journey.context.lineTo(x + offset , y + offset);
    journey.context.lineTo(x - offset , y + offset);
    journey.context.lineTo(x - offset , y - offset);
    
}

// function JourneyEvent(canvas, data, globalTime, journey, index){
//     // Base
//     let journeyEvent = this;

    
//     // Global Attributes
//     // Approach needs cleaning up
//     journeyEvent.canvas = canvas;
//     journeyEvent.context = journeyEvent.canvas.getContext('2d');
//     journeyEvent.data = data[globalTime].journeys[journey][index];

//     // Coordinates adjusted for canvas grid
//     const cw = journeyEvent.canvas.cw;
//     const ch = journeyEvent.canvas.ch;

//     journeyEvent.name = journeyEvent.data.name;
//     journeyEvent.description = journeyEvent.data.description;

//     journeyEvent.x = journeyEvent.data.x * cw; 
//     journeyEvent.y = journeyEvent.data.y * ch;
// }

// JourneyEvent.prototype.defineEvent = function() {
//     // Base
//     let journeyEvent = this;
//     const offset = 15;

//     journeyEvent.context.beginPath();
//     journeyEvent.context.moveTo(journeyEvent.x - offset , journeyEvent.y - offset);
//     journeyEvent.context.lineTo(journeyEvent.x + offset , journeyEvent.y - offset);
//     journeyEvent.context.lineTo(journeyEvent.x + offset , journeyEvent.y + offset);
//     journeyEvent.context.lineTo(journeyEvent.x - offset , journeyEvent.y + offset);
//     journeyEvent.context.lineTo(journeyEvent.x - offset , journeyEvent.y - offset);
// }