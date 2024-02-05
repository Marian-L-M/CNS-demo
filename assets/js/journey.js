function Journey (canvas, data, globalTime, index) {
    // Base
    let journey = this;

    // Global Attributes
    journey.canvas = canvas;
    journey.context = journey.canvas.getContext('2d');
    journey.data = data;
    journey.time = globalTime;
    journey.index = index;
    // console.log(data)
}

Journey.prototype.draw = function() {
    // Setup
    let journey = this;

    let cw  = canvas.width / 1000;
    let ch = canvas.height / 1000;
    let ballRadius = 4;
    
    journey.context.beginPath();
    journey.context.lineWidth=4;
    journey.context.lineJoin='round';
    journey.paths = journey.data[journey.time].journeys;
    
    // Draw Node Lines
    journey.paths.forEach((path) => {
        const firstNode = path[0];
        
        journey.context.beginPath();
        journey.context.strokeStyle= "black";
        journey.context.fillStyle= "black";
        
        // Draw Node & Node line
        journey.drawNode(cw * firstNode.x, ch * firstNode.y, ballRadius)
        
        path.forEach((e) => {
            journey.drawNodeLine(cw*e.x, ch*e.y, cw*e.lx, ch*e.ly, ballRadius)
            journey.drawNode(cw*e.lx, ch*e.ly, ballRadius)
        });
        
        journey.context.stroke();
        journey.context.fill();
    });
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