function Character (canvas, data, globalTime, index) {
    //
    let character = this;

    // Global Attributes
    character.canvas = canvas;
    character.context = character.canvas.getContext('2d');

    // Specifications
    character.x = data[globalTime].characters[index].x;
    character.y = data[globalTime].characters[index].y;
    character.w = data[globalTime].characters[index].w;
    character.h = data[globalTime].characters[index].h;
    character.src = data[globalTime].characters[index].icon;
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