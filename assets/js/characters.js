function Character (src, canvas) {
    //
    let character = this;

    // Global Attributes
    character.canvas = canvas;
    character.context = character.canvas.getContext('2d');
}