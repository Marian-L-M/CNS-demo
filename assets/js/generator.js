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
    generator.iconSize = 55 * generator.cw;


    // Data Object
    // Specifications
    let data;
    switch(type){
        case 'icon': 
            // data
            data = input[globalTime].object.icons[index];
            if(data.hasNext) {
                generator.hasNext = true;
                generator.cnx = data.nx * generator.cw;
                generator.cny = data.ny * generator.ch;
            }
            if(data.hasPrevious) {
                generator.hasPrevious = true;
                generator.cpx = data.px * generator.cw;
                generator.cpy = data.py * generator.ch;
            }
            break;
        case 'location':
            // data
            data = input[globalTime].object.areas[index];

            // Style
            generator.fill = data.design.fill; 
            generator.lineWidth = data.design.lineW; 
            generator.points = data.points; 
            generator.stroke = data.design.stroke; 
            break;
        case 'journey':
            // data
            data = input[globalTime].object.paths[index];
            let nextData = input[globalTime].object.paths[index + 1];

            generator.key = data.key; 
            
            // For Drawing lines
            if(nextData) {
                generator.lKey = nextData.key;
                generator.lx = nextData.x;
                generator.ly = nextData.y;
                generator.clx = generator.lx * generator.cw;
                generator.cly = generator.ly * generator.ch;
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
    generator.cx = generator.x * generator.cw;
    generator.cy = generator.y * generator.ch;

    // Info
    generator.icon = data.icon; // Missing on location
    generator.img = data.img;
    generator.info = data.info;
    generator.link = data.link;

    // Design
    generator.context.strokeStyle= (generator.stroke ? generator.stroke : "black");
    generator.context.fillStyle= (generator.fill ? generator.fill : "black");
    generator.context.lineWidth = generator.lineWidth;
}

Generator.prototype.draw = function() {
    // Base
    let generator = this;

    switch(generator.type){
        case 'icon':
            generator.img = new Image();
            generator.img.src = generator.icon;

            generator.context.drawImage(
                generator.img, 
                (generator.cx), 
                (generator.cy), 
                (generator.iconSize), 
                (generator.iconSize) 
            );
            break;
        case 'location':         
        case 'journey':
            generator.define();
            generator.context.fill();
            generator.context.stroke();
            break;
        default:
            break;
    }
}

Generator.prototype.drawAnimated = function(progress) {
    // Base
    let generator = this;
    const diffX = generator.cx - generator.cpx;
    const diffY = generator.cy - generator.cpy;

    const currentX = generator.cpx + (diffX * progress);
    const currentY = generator.cpy + (diffY * progress);

    generator.img = new Image();
    generator.img.src = generator.icon;

    generator.context.drawImage(
        generator.img, 
        (currentX), 
        (currentY), 
        (generator.iconSize), 
        (generator.iconSize) 
    );
}

Generator.prototype.define = function () {
    // Base
    let generator = this;
    const cw = generator.cw;
    const ch = generator.ch;
    const x = generator.cx;
    const y = generator.cy;

    generator.context.beginPath();

    switch(generator.type){
        case 'icon':
            const w = generator.iconSize; 
        
            generator.context.moveTo(x, y);
            generator.context.lineTo((x + w), y);
            generator.context.lineTo((x + w), (y + w));
            generator.context.lineTo(x, (y + w));
            generator.context.lineTo(x, y);

            break;
        case 'location': 
            const points = generator.points;

            generator.context.moveTo(points[0].x * cw, points[0].y * ch);
            for (var i = 1; i < points.length; i++) {
                generator.context.lineTo(points[i].x * cw, points[i].y * ch);
            }
            generator.context.lineTo(points[0].x * cw, points[0].y * ch);
            break;
        case 'journey': 
            const offset = generator.iconSize / (10 * generator.cw);

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

    generator.context.beginPath();
    generator.context.lineWidth=4;
    generator.context.moveTo(generator.cx, generator.cy);
    generator.context.lineTo(generator.clx, generator.cly);
    generator.context.stroke();
    generator.context.fill();
}