// Press a button to choose your path
// See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("skyblue");
  fill("brown");
  textSize(40);
  textFont("Courier New");
  textAlign(CENTER);
  text(
    "Dragontasia",
    270, 50);
  fill("darkblue");
  textSize(23);
  textFont("Georgia");
  textAlign(CENTER);
  text(
    "An ancient egg awaits its chosen guardian...",
    270, 100);
  textSize(10);
  textFont("Courier New");
  textAlign(LEFT);
  text(
    "You are a weary civilian, \nembarking upon your journey \nback home after \na particularly uneventful \nday at the lumber mill. \nSelect the buttons \nto guide your path.",
    50, 130);
  
  // Create buttons for all screens
  enterButton = new Sprite(270,340);
  a1Button = new Sprite(-200,-200);
  a2Button = new Sprite(-50,-50);
  b1Button = new Sprite(-100,-100);
  b2Button = new Sprite(-150,-150);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color =  "lightgreen";
  textFont("Courier New");
  enterButton.text= "Begin.";

  if (screen == 0){
    showShapes();
  }

  // Check enter button
if (enterButton.mouse.presses()) {
  print("pressed");
  showScreen1();
  screen = 1;
}

if (screen == 1) {
  showScreen1();
  if (a1Button.mouse.presses()){
    print("Display Screen 2");
    showScreen2();
    screen = 2;
  } else if (a2Button.mouse.presses()){
    print("Display Screen 5");
    showScreen5();
    screen = 5;
  } 
}
  
if (screen == 2) {
    showScreen2();
    if (b1Button.mouse.presses()){
      showScreen3();
      screen = 3;
    } else if (b2Button.mouse.presses()){
      showScreen4();
      screen = 4;
    }
    
  }
  
print(screen);
}  
  
/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1(){
  background("#0868a2");
  fill("white");
  textSize(20);
  textFont("Courier New");
  textAlign(CENTER);
  text("While traversing across \nthe shadowy terrain \nof Ignis Forest, you encounter \nan alarming sight: \na pristine dragon egg. Will you:", 270,100);
  enterButton.pos = {x:-100, y:-100};
  // Add A1 button
  a1Button.pos = {x:200, y:340};
  a1Button.w = 100;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color =  "plum";
  a1Button.textSize = 10;
  a1Button.text= "Raise\nthe dragon.";
  fill(120, 80, 50);
  ellipse(200, 300, 25, 25); 
  fill(255, 200, 0);
  triangle(190, 290, 180, 275, 200, 285);
  fill(0);
  ellipse(195, 298, 4, 4);
  // Add A2 button
  a2Button.pos = {x:340, y:340};
  a2Button.w = 100;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color =  "plum";
  a2Button.textSize = 10;
  a2Button.text= "Sell\nthe egg.";
  fill(240, 230, 180);
  ellipse(340, 300, 30, 40); 
  fill(255, 215, 0);
  ellipse(370, 300, 5, 5); 
  fill(0);
  textSize(12);
  text("$", 378, 305);
}

function showScreen2(){
      background("black");
      fill("white");
      textSize(20);
      textFont("Courier New");
      textAlign(CENTER);
      text("As night falls, you boldly choose \nto raise this dragon, declaring ownership \nover the soon-to-be formidible \nbeing. The dragon's first chirps are heard \nas the sun rises. Will you:", 270,100);
    a1Button.pos = {x:-200,y:-200};
    a2Button.pos = {x:-50,y:-50};
    b1Button.pos = {x:200, y:340};
    b1Button.w = 100;
    b1Button.h = 50;
    b1Button.collider = "k";
    b1Button.color =  "plum";
    b1Button.textSize = 10;
    b1Button.text= "Train for \nbattle.";
    b2Button.pos = {x:340, y:340};
    b2Button.w = 100;
    b2Button.h = 50;
    b2Button.collider = "k";
    b2Button.color =  "plum";
    b2Button.textSize = 10;
    b2Button.text= "Explore \nthe world.";
    Dragon();
}

function showScreen3(){
  background("darkred");
  fill("black");
  textSize(20);
  textFont("Courier New");
  textAlign(CENTER);
  text("The baby hatchling, \nunable to defend itself against\nthe obstacles you \nfling towards \nit, perishes. You overestimated \nyour charge.", 270,100);
  b1Button.pos = {x:-100,y:-100};
  b2Button.pos = {x:-150,y:-150};
}

function showScreen4 (){
  background("#6602ad");
  fill("white");
  textSize(20);
  textFont("Courier New");
  textAlign(CENTER);
  text("You discover new \nworlds alongside \nyour charge.", 270,100);
    text("The world is merely your oyster...", 270,370);
  Dragon();
  b1Button.pos = {x:-100,y:-100};
  b2Button.pos = {x:-150,y:-150};
}

function showScreen5() {
    background("darkblue");
    fill("white");
    textSize(20);
    textFont("Courier New");
    textAlign(CENTER);
    text("You locate a travelling merchant, and \nreceive a generous sum for the rare good \nyou have sold to him. \nYour gait is heavy, both from the weight \nof the coins in your rucksack, and from \nconsidering what could have been...", 270,100);
    a1Button.pos = {x:-200,y:-200};
    a2Button.pos = {x:-50,y:-50};

    fill("brown");
    rect(100, 300, 20, 60);
    
    fill("green");
    ellipse(110, 280, 70, 70);
    ellipse(80, 300, 50, 50);
    ellipse(140, 300, 50, 50);
}

function showShapes() {
  noStroke();
  fill(0, 0, 0, 40);
  ellipse(270, 270, 90, 20);

  fill(250, 245, 235);
  ellipse(270, 200, 90, 120);

  fill(255);
  ellipse(285, 175, 18, 35);
  ellipse(275, 205, 10, 18);

  stroke(120);
  strokeWeight(2);
  line(295, 160, 305, 170);
  line(305, 170, 298, 182);
  line(298, 182, 310, 193);
  line(310, 193, 302, 205);
}

function Dragon() {
    fill("white");
    ellipse(270, 280, 100, 60);
    ellipse(220, 260, 50, 45);

    fill("black");
    ellipse(210, 255, 7, 7);

    fill("lightgray");
    triangle(210, 235, 220, 210, 230, 235);
    triangle(250, 260, 310, 220, 320, 290);
    
    ellipse(250, 270, 10, 6);
    ellipse(270, 275, 10, 6);
    ellipse(290, 270, 10, 6);
    
    fill("white");
    triangle(320, 290, 380, 310, 320, 305);
}