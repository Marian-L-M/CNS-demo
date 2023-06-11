// const canvas = document.getElementById("main-visual")

// canvas.width = 800;
// canvas.height = 800;

// let c = canvas.getContext('2d');

// let bg = new Image();
// bg.src = "./assets/img/kamolin-map.jpg";

// bg.onload = () => {
//     let bgSize = canvas.width;
//     c.drawImage(bg, 0, 0, bgSize, bgSize)
// }

function mapBackground(src, canvas){
    // Base
    let bg = this;

    // Global Attributes
    bg.canvas = canvas;
    bg.context = bg.canvas.getContext('2d');

    // Specifications
    bg.x = 0;
    bg.y = 0;
    bg.w = bg.canvas.width;
    bg.h = bg.canvas.height;
    bg.src = src;
    bg.img = null;

    // Create Background Image
    bg.create();
    
}

mapBackground.prototype.create = function() {
    // Base
    let bg = this;

    // Create Image
    bg.img = new Image();
    bg.img.src = bg.src;
};

mapBackground.prototype.draw = function() {
    // Base
    let bg = this;

    // Draw
    if(bg.img != null){
        bg.context.drawImage(bg.img, bg.x, bg.y, bg.w, bg.h);
    };
}