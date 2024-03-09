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
    // For transition length is the same for object and character, however when integrating location/journey expect changes needed for MapMaker calls
    
    // Specifications
    switch(type){
        case 'character': 
            // 240309 Next action : Transition characters to object
            const data = input[globalTime].object[index];
            generator.type = data.type;

            // Content
            generator.type = "character";
            generator.name = input[globalTime].characters[index].name;
            generator.description = input[globalTime].characters[index].description;
            generator.icon = input[globalTime].characters[index].icon;
            generator.img = input[globalTime].characters[index].img;
            generator.info = input[globalTime].characters[index].info;
            generator.link = input[globalTime].characters[index].link;
            
            // Style
            generator.x = input[globalTime].characters[index].x;
            generator.y = input[globalTime].characters[index].y;
            break;
        case 'location':
            // Content
            generator.type = "location";
            generator.name = input[globalTime].locations[index].name;
            generator.description = input[globalTime].locations[index].description;
            generator.img = input[globalTime].locations[index].img;
            generator.info = input[globalTime].locations[index].info;
            generator.link = input[globalTime].locations[index].link;
            
            // Style
            generator.fill = input[globalTime].locations[index].design.fill;
            generator.lineWidth = input[globalTime].locations[index].design.lineW;
            generator.points = input[globalTime].locations[index].points;
            generator.stroke = input[globalTime].locations[index].design.stroke;
            break;
        case 'journey':
            generator.type = "journey";
            generator.key = input[globalTime].journeys[index].key;
            generator.name = input[globalTime].journeys[index].name;
            generator.description = input[globalTime].journeys[index].description;
            generator.x = input[globalTime].journeys[index].x;
            generator.y = input[globalTime].journeys[index].y;
            
            // For Drawing lines
            if(input[globalTime].journeys[index + 1]) {
                generator.lKey = input[globalTime].journeys[index + 1].key;
                generator.lx = input[globalTime].journeys[index + 1].x;
                generator.ly = input[globalTime].journeys[index + 1].y;
                if (generator.key == generator.lKey) {
                    generator.hasNext = true;
                }
            }
            break;
        default:
            break;
    }
}

Generator.prototype.draw = function() {
    // Base
    let generator = this;
    const cw = generator.cw;
    const ch = generator.ch;

    switch(generator.type){
        case 'character':
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
        case 'character':
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