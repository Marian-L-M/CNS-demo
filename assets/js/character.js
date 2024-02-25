function Character (canvas, data, globalTime, index) {
    // Base
    let character = this;
    const cw = canvas.cw;
    const ch = canvas.ch;

    // Global Attributes
    character.canvas = canvas;
    character.context = character.canvas.getContext('2d');

    // Specifications
    character.name = data[globalTime].characters[index].name;
    character.description = data[globalTime].characters[index].description;
    character.x = data[globalTime].characters[index].x;
    character.y = data[globalTime].characters[index].y;
    character.w = data[globalTime].characters[index].w;
    character.h = data[globalTime].characters[index].h;
    character.icon = data[globalTime].characters[index].icon;
    character.link = data[globalTime].characters[index].link;
    character.img = data[globalTime].characters[index].img;
    character.info = data[globalTime].characters[index].info;
    character.ch = ch;
    character.cw = cw;
}

Character.prototype.create = function() {
    // Base
    let character = this;

    // Create Image
    character.img = new Image();
    character.img.src = character.icon;
};

Character.prototype.draw = function() {
    // Base
    let character = this;

    character.context.drawImage(
        character.img, 
        (character.x * character.cw), 
        (character.y * character.ch), 
        (character.w * character.cw), 
        (character.w * character.cw) 
    );
}

Character.prototype.define = function () {
    // Base
    let character = this;
    const x = character.x * character.cw;
    const y = character.y * character.ch;
    const w = character.w * character.cw; // Character icons are square, so no h value is needed

    character.context.beginPath();
    character.context.moveTo(x, y);
    character.context.lineTo((x + w), y);
    character.context.lineTo((x + w), (y + w));
    character.context.lineTo(x, (y + w));
    character.context.lineTo(x, y);
};