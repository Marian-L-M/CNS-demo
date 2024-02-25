function Character (canvas, data, globalTime, index) {
    // Base
    let character = this;

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

    character.context.drawImage(character.img, character.x, character.y, character.w, character.h)
}

Character.prototype.define = function () {
    // Base
    let character = this;
    // console.log(character)

    character.context.beginPath();
    character.context.moveTo(character.x, character.y);
    character.context.lineTo((character.x + character.w), character.y);
    character.context.lineTo((character.x + character.w), (character.y + character.h));
    character.context.lineTo(character.x, (character.y + character.h));
    character.context.lineTo(character.x, character.y);
};