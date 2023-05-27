const canvas = document.getElementById("main-visual")

canvas.width = 800;
canvas.height = 800;

let c = canvas.getContext('2d');

let bg = new Image();
bg.src = "./assets/img/kamolin-map.jpg";

bg.onload = () => {
    let bgSize = canvas.width;
    c.drawImage(bg, 0, 0, bgSize, bgSize)
}

