function Character (canvas, data, globalTime) {
    //
    let character = this;

    // Global Attributes
    character.canvas = canvas;
    character.context = character.canvas.getContext('2d');

    // Specifications
    character.x = data[globalTime].character[0].x;
    character.y = data[globalTime].character[0].y;
    character.w = data[globalTime].character[0].w;
    character.h = data[globalTime].character[0].h;
    character.src = data[globalTime].character[0].icon;
    character.img = null;
}

Character.prototype.create = function() {
    // Base
    let character = this;

    // Create Image
    character.img = new Image();
    character.img.src = character.src;
};

Character.prototype.draw = function() {
    // Base
    let character = this;

    character.context.drawImage(character.img, character.x, character.y, character.w, character.h)
}