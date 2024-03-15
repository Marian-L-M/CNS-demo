  function MapAnimator (canvas, globalTime,data) {
    // Base
    let anim = this;

    // Global Atrributes
    anim.canvas = canvas;
    anim.context = anim.canvas.getContext('2d');

    // Grid 1000*1000
    anim.canvas.cw  = canvas.width / 1000;
    anim.canvas.ch = canvas.height / 1000;

  }

  MapAnimator.prototype.start = function() {
    // Base
    let anim = this;
    
    // Setup
    window.requestAnimationFrame(function() {
        anim.runAnimationLoop();
    });
};

// 240315: Interval and Animation frame together seem like a waste -> unify
// Map image to data
MapAnimator.prototype.runAnimationLoop = function() {
    // Base
    let anim = this;
    
    // Setup
    var  img = new Image;
    img.src = 'http://www.gravatar.com/avatar/a1f80339c0cef95be6dc73e0ac510d5d?s=32&d=identicon&r=PG';
    // Start Animation
    img.addEventListener('load', function () {
        var interval = setInterval(function() {
          var x = 0, y = 0;
          
          return function () {
            anim.context.clearRect(0, 0, anim.canvas.width, anim.canvas.height);
            anim.context.drawImage(img, x, y);
    
            x += 1;
            if (x > anim.context.canvas.width) {
              x = 0;
            }
          };
        }(), 1000/40);
      }, false);
}

// window.requestAnimationFrame(animationLoop);

// function animationLoop(){

//     // Clear Canvas
//     context.clearRect(0, 0, canvas.width, canvas.height);
    
//     // Update
//     // Bounce bottom
//     if (ballY + ballRadius > canvas.height){ 
//         changeY *= -1;
//     }
    
//     // Bounce top
//     if (ballY - ballRadius < 0 ){ 
//         changeY *= -1;
//     }
    
//     // Bounce right
//     if (ballX + ballRadius > canvas.width){ 
//         changeX *= -1;
//     }
//     // Bounce left
//     if (ballX - ballRadius < 0){ 
//         changeX *= -1;
//     }


//     ballX += changeX;
//     ballY += changeY;
    
//     // Draw
//     drawBall(ballX, ballY, ballRadius, ballColor)
    
//     //Animate
//     window.requestAnimationFrame(animationLoop);
// }