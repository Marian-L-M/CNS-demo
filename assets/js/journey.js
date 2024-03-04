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
    journey.context.strokeStyle= "black";
    journey.context.fillStyle= "black";

    journey.defineNode(journey.x, journey.y, 5)
    
    journey.context.stroke();
    journey.context.fill();
}

Journey.prototype.defineNode = function(inputX,inputY, offset) {
    // Setup
    let journey = this;
    const x = inputX * journey.cw
    const y = inputY * journey.ch

    journey.context.beginPath();
    journey.context.moveTo(x,y);
    journey.context.lineTo(x - offset , y - offset);
    journey.context.lineTo(x + offset , y - offset);
    journey.context.lineTo(x + offset , y + offset);
    journey.context.lineTo(x - offset , y + offset);
    journey.context.lineTo(x - offset , y - offset);
    
}