// 240317 next action: Create next step data
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

    // Run animations
    anim.runAnimationLoop();
};

// Map image to data
MapAnimator.prototype.runAnimationLoop = function() {
    // Base
    let anim = this;

    // Draw animations
    anim.drawAnimation()
}

MapAnimator.prototype.drawAnimation = function() {
    // Base
    let anim = this;

    // Setup
    let zero;

    requestAnimationFrame(firstFrame);

    function firstFrame(timeStamp) {
        zero = timeStamp;
        animate(timeStamp);
    }

    function animate(timeStamp) {
        const value = (timeStamp - zero) / 1500;
        if (value < 1) {
            anim.drawAnimatedElement(value)
            requestAnimationFrame((t) => animate(t));
        } else {
            anim.drawAnimatedElement(value)
        }
    }
}

MapAnimator.prototype.drawAnimatedElement = function(progress) {
    // Base
    let anim = this;
    const length = data[globalTime].object.icons.length;

    // Draw
    anim.context.clearRect(0, 0, anim.canvas.width, anim.canvas.height);

    for (let i = 0; i < length; i++) {
        anim.object = new Generator(anim.canvas, data, globalTime,i, 'icons');
        if (anim.object.hasPrevious) {
            anim.object.drawAnimated(progress)
        }
        else {
            anim.object.draw()
        }
    }
}