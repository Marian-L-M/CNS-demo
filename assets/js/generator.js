// For future purposes refactor type character to type image
// Refactor data into unified naming
// Journeys into generator
function Generator (canvas, data, globalTime, index, type) {
    // Base
    let generator = this;

    // Hook into global grid
    generator.ch = canvas.ch;
    generator.cw = canvas.cw;

    // Global Attributes
    generator.canvas = canvas;
    generator.context = generator.canvas.getContext('2d');

    // Specifications
    switch(type){
        case 'character':
            // Content
            generator.type = "character";
            generator.name = data[globalTime].characters[index].name;
            generator.description = data[globalTime].characters[index].description;
            generator.icon = data[globalTime].characters[index].icon;
            generator.img = data[globalTime].characters[index].img;
            generator.info = data[globalTime].characters[index].info;
            generator.link = data[globalTime].characters[index].link;
            
            // Style
            generator.w = data[globalTime].characters[index].w;
            generator.x = data[globalTime].characters[index].x;
            generator.y = data[globalTime].characters[index].y;
            break;
        case 'location':
            // Content
            generator.type = "location";
            generator.name = data[globalTime].locations[index].name;
            generator.description = data[globalTime].locations[index].description;
            generator.img = data[globalTime].locations[index].img;
            generator.info = data[globalTime].locations[index].info;
            generator.link = data[globalTime].locations[index].link;
            
            // Style
            generator.fill = data[globalTime].locations[index].design.fill;
            generator.lineWidth = data[globalTime].locations[index].design.lineW;
            generator.points = data[globalTime].locations[index].points;
            generator.stroke = data[globalTime].locations[index].design.stroke;
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
                (generator.w * generator.cw), 
                (generator.w * generator.cw) 
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
        default:
            break;
    }
}

Generator.prototype.define = function () {
    // Base
    let generator = this;
    const cw = generator.cw;
    const ch = generator.ch;

    switch(generator.type){
        case 'character':
            const x = generator.x * generator.cw;
            const y = generator.y * generator.ch;
            const w = generator.w * generator.cw; 
        
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
        default:
            break;
    }
}