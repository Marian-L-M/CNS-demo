// For future purposes refactor type character to type image
// Refactor data into unified naming
// Goal of data refactoring: make draw actions be selected automatically depending on type. Just loop over data with generator.
// No more switch case function calls in Mapmaker.
// Unified property names
function Generator (canvas, input, globalTime, index, type) {
    // Base
    let generator = this;

    // Hook into global grid
    generator.ch = canvas.ch;
    generator.cw = canvas.cw;

    // Global Attributes
    generator.canvas = canvas;
    generator.context = generator.canvas.getContext('2d');
    generator.globalTime = globalTime;
    generator.index = index; // 240306 To do: Use for draw NodeLine
    generator.iconSize = 55;

    // Data Object
    // Specifications
    let data;
    switch(type){
        case 'icon': 
            // data
            data = input[globalTime].object.icons[index];
            break;
        case 'location':
            // data
            data = input[globalTime].object.areas[index];

            // Style
            generator.fill = data.design.fill; // Missing on char, journey
            generator.lineWidth = data.design.lineW; // Missing on char, journey
            generator.points = data.points; // Missing on char, journey
            generator.stroke = data.design.stroke; // Missing on char, journey
            break;
        case 'journey':
            // data
            data = input[globalTime].object.paths[index];
            let nextData = input[globalTime].object.paths[index + 1];

            generator.key = data.key; // Removal will break nextData logic
            
            // For Drawing lines
            if(nextData) {
                generator.lKey = nextData.key;
                generator.lx = nextData.x;
                generator.ly = nextData.y;
                if (generator.key == generator.lKey) {
                    generator.hasNext = true;
                }
            }
            break;
        default:
            break;
    }

    // Standard declarations
    generator.type = type;
    generator.subtype = data.subtype;
    generator.name = data.name
    generator.description = data.description;
    generator.x = data.x; // Missing on location
    generator.y = data.y; // Missing on location

    // Info
    generator.icon = data.icon; // Missing on location
    generator.img = data.img;
    generator.info = data.info;
    generator.link = data.link;
}

Generator.prototype.draw = function() {
    // Base
    let generator = this;
    const cw = generator.cw;
    const ch = generator.ch;

    switch(generator.type){
        case 'icon':
            generator.img = new Image();
            generator.img.src = generator.icon;

            generator.context.drawImage(
                generator.img, 
                (generator.x * generator.cw), 
                (generator.y * generator.ch), 
                (generator.iconSize * generator.cw), 
                (generator.iconSize * generator.cw) 
            );
            break;
        case 'location': 
            let points = generator.points;

            generator.context.fillStyle = generator.fill;
            generator.context.strokeStyle = generator.stroke;
            generator.context.lineWidth = generator.lineWidth;
        
            generator.context.beginPath();
            generator.context.moveTo(points[0].x * cw, points[0].y * ch);
            for (var i = 1; i < points.length; i++) {
                generator.context.lineTo(points[i].x * cw, points[i].y * ch);
            }
            generator.context.lineTo(points[0].x * cw, points[0].y * ch);
            generator.context.fill();
            generator.context.stroke();
            break;
        case 'journey':
            generator.context.strokeStyle= "black";
            generator.context.fillStyle= "black";
            generator.define();
            generator.context.stroke();
            generator.context.fill();
            break;
        default:
            break;
    }
}

Generator.prototype.define = function () {
    // Base
    let generator = this;
    const cw = generator.cw;
    const ch = generator.ch;
    const x = generator.x * generator.cw;
    const y = generator.y * generator.ch;

    switch(generator.type){
        case 'icon':
            const w = generator.iconSize * generator.cw; 
        
            generator.context.beginPath();
            generator.context.moveTo(x, y);
            generator.context.lineTo((x + w), y);
            generator.context.lineTo((x + w), (y + w));
            generator.context.lineTo(x, (y + w));
            generator.context.lineTo(x, y);

            break;
        case 'location': 
            const points = generator.points;

            generator.context.beginPath();
            generator.context.moveTo(points[0].x * cw, points[0].y * ch);
            for (var i = 1; i < points.length; i++) {
                generator.context.lineTo(points[i].x * cw, points[i].y * ch);
            }
            break;
        case 'journey': 
            const offset = 5;

            generator.context.beginPath();
            generator.context.moveTo(x,y);
            generator.context.lineTo(x - offset , y - offset);
            generator.context.lineTo(x + offset , y - offset);
            generator.context.lineTo(x + offset , y + offset);
            generator.context.lineTo(x - offset , y + offset);
            generator.context.lineTo(x - offset , y - offset);
        default:
            break;
    }
}

Generator.prototype.drawNodeLine = function() {
    // Setup
    let generator = this;
    const x = generator.x;
    const y = generator.y;
    const lx = generator.lx;
    const ly = generator.ly;

    const cw = generator.cw;
    const ch = generator.ch;

    generator.context.beginPath();
    generator.context.lineWidth=4;
    generator.context.strokeStyle= "black";
    generator.context.fillStyle= "black";
    generator.context.moveTo(cw*x, ch*y);
    generator.context.lineTo(cw*lx, ch*ly);
    generator.context.stroke();
    generator.context.fill();
}