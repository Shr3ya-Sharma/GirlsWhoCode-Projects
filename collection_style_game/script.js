// Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let catcher, fallingObject, score = 0;
let backgroundImg, catcherImg, fallingObjectImg;


/* PRELOAD LOADS FILES */
function preload(){
  catcherImg = loadImage('/assets/spaceship.png');
  fallingObjectImg = loadImage('/assets/gem.png');
  backgroundImg = loadImage('/assets/space.png');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);

  //Resize images
  backgroundImg.resize(400, 400);
  catcherImg.resize(100, 20);
  fallingObjectImg.resize(10, 10);
  
  //Create catcher 
  catcher = new Sprite(200, 380, 100, 20);
  catcher.img = catcherImg;
  catcher.scale = 0.7;
  catcher.collider = "kinematic";
  
  //Create falling object
  fallingObject = new Sprite(100, 0, 10, 10);
  fallingObject.img = fallingObjectImg;
  fallingObject.scale = 1.3;
  fallingObject.rotationLock;
  fallingObject.vel.y = 2;

}

/* DRAW LOOP REPEATS */
function draw() {
   background("#f3ccff");
   // Draw background image
   image(backgroundImg, 0, 0);
  
  // Draw directions + score to screen
  textFont("Courier New");
  fill("#ededed");
  textSize(12);
  text("Move the \ncatcher with the \nleft and right \narrow keys to \ncatch the falling \nobjects.", 260, 20);
  fill("#ededed");
  textSize(20);
  text("Score: " + score, 10, 20);

  // If fallingObject reaches bottom, move back to random position at top
   if (fallingObject.y >= height) {
     fallingObject.y = 0;
     fallingObject.x = random(width);
     fallingObject.vel.y = random(1,5);
   }

  // Move Catcher
  if (kb.pressing('left')) {
    catcher.vel.x = -3;
    
  } else if (kb.pressing('right')) {
    catcher.vel.x = 3;
  } else {
    catcher.vel.x = 0;
  }

  // Stop catcher at edges of screen
  if (catcher.x < 50) {
    catcher.x = 50;
  } else if (catcher.x > 350) {
    catcher.x = 350;
  }

  // If fallingObject collides with catcher, move back to random position at top

  if (catcher.collides(fallingObject)) {
    score ++;
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1,5);
    fallingObject.direction = "down";
  } 

  if (fallingObject.y > height - 10) {
    score --;
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1,5);
    fallingObject.direction = "down";
  }

  if (score >= 10) {
    catcher.x = 10000;
    fallingObject.x = 10000;
    background("#c7fff8");
    textFont("Courier New");
    fill("#065c50");
    textSize(30);
    text("You WIN!", 136, 150);

    if (mouseIsPressed) {
      score = 0;
      catcher = new Sprite(200,380,100,20);
      fallingObject.y = 0;
      fallingObject.x = random(width);
      fallingObject.vel.y = random(1,5);
      fallingObject.direction = "down";
    }
  }

   // allSprites.debug = mouse.pressing();
}
