// Define game state as int variable:
const INITIAL = 0;
const STATE_1 = 1;
const STATE_2 = 2;
const STATE_3 = 3;
const FINAL = 4;

function MapMaker(canvas) {
    // Base
    var map = this;

    // Global Atrributes
    map.canvas = canvas;
    map.context = map.canvas.getContext('2d');

    // Map State
    map.currentState = INITIAL;

    // // // Game Speed
    // // game.velocity = 5;

    // // // Bind Events
    // // game.bindEvents();

    // // Create Game Objects
    // map.createObjects();
};

// mapMaker.prototype.createObjects =function(){
//     // Base
//     let map = this;

//     // Backgrund
//     map.background1 = new mapBackground('assets/img/kamolin-map.jpg', map.canvas);
//     map.background1.draw();
//     // game.background2.x = game.canvas.width;

// };

// mapMaker.prototype.bindEvents = function() {
//     // Base
//     let map = this;

//     map.canvas.addEventListener('click', (e) => {
//         switch (map.currentState) {
//             case INITIAL:
//                 map.currentState = MAP_ACTIVE;
//                 break;
//             case MAP_ACTIVE:
//                 break;
//         };
//     });
    
//     // Key Listener
//     window.addEventListener('keydown', (e) => {
//         switch (map.currentState) {
//             case MAP_OVER:
//                 if(e.key === "r") {
//                     map.reset();
//                     map.currentState = MAP_ACTIVE;
//                 }
//                 break;
//         };
//     });
// };

// mapMaker.prototype.reset = function() {
//     // Base
//     let map = this;

//     // Reset States
//     // game.gameScore.start = new Date();
//     // game.gameScore.score = 0;
//     // game.wallFactory.walls = [];
//     // game.monster.x = 115;
//     // game.monster.y = 115;
// };

MapMaker.prototype.start = function() {
    // Base
    let map = this;

    // Start Game
    window.requestAnimationFrame(function() {
        map.runMapLoop();
    });
};

MapMaker.prototype.runMapLoop = function() {
    // Base
    let map = this;

    // Game State
    switch(map.currentState) {
        case INITIAL:
            // Draw INITIAl SCREEN
            // game.drawInitialScreen()
            break
        case STATE_1:
            // Draw GAME PLAYING SCREEN
            // game.drawGamePlayingScreen()
            break
        case STATE_2:
            // Draw GAME PLAYING SCREEN
            // game.drawGamePlayingScreen()
            break
        case STATE_3:
            // Draw GAME PLAYING SCREEN
            // game.drawGamePlayingScreen()
            break
        case FINAL:
            // Draw GAME OVER SCREEN
            // game.drawGameOverScreen()
            break
    }

    // Start Game
    window.requestAnimationFrame(function() {
        map.runMapLoop();
    });
    
};