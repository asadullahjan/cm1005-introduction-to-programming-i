/*
Game Name : Into the Nature.
*/

// variables used to control the animation of the game character.
var gameChar_screen_x, gameChar_screen_y;
var gameChar_world_x;
let charVelocity;
let charGravity;
let charJump;

var floorPos_y;
var scrollPos;
var seceneryScrollPos;
var sunScrollPos;
var cloudScrollPos;

//variables used to control the movement of the character.
var isLeft;
var isRight;
var isFalling;
let isJumping;
let isRaining;

//variables for the background scenery.
var clouds;
var mountains;
var trees;
var trees2;
var canyons;
var collectables;
var collectables2;
var flagPole;
var buildings;
var houses;
var enemy;
let platforms;
let movingPlatforms;



//variables for the sound effects.
let victorySoundPlayVar;
let fallSoundPlayVar;
let jumpSound;
let rainingSound;
let victorySound;
let fallingSound;
let waterSplashSound;
let fruitPickupSound;
let collectable2PickupSound;
let stabSound;

//variables for score and lives.
var game_score;
var lives;


///variables for anchoring the first position of each object
const treeAnchorX = 270;
const cloudAnchorX = 150;
const mountainAnchorX = 150;
const canyonAnchorX = 700;

//fuction preload() is used to load the sound files.
function preload() {
  soundFormats("mp3", "wav");
  jumpSound = loadSound("assets/jumpsound.mp3");
  jumpSound.setVolume(0.2);
  rainingSound = loadSound("assets/raining.wav");
  rainingSound.setVolume(0.1);
  victorySound = loadSound("assets/victory.wav");
  victorySound.setVolume(0.2);
  fallingSound = loadSound("assets/falling.wav");
  fallingSound.setVolume(0.2);
  waterSplashSound = loadSound("assets/watersplash.wav");
  waterSplashSound.setVolume(0.1);
  fruitPickupSound = loadSound("assets/fruitPickupSound.mp3");
  fruitPickupSound.setVolume(0.2);
  collectable2PickupSound = loadSound("assets/collactable2Pickup.mp3");
  collectable2PickupSound.setVolume(0.2);
  stabSound = loadSound("assets/stab.mp3");
  stabSound.setVolume(0.2);
}

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  lives = 3;
  startGame();
}

function draw() {
  // fill the sky blue
  background(100, 155, 255);

  //green ground
  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, 15);
  fill(139, 103, 66);
  rect(0, floorPos_y + 15, width, height - floorPos_y);

  //using push and pop and translate to give feeling of movement;
  //start
  push();
  translate(sunScrollPos, 0);
  fill(255, 255, 0);
  ellipse(250, 150, 110);
  fill(255, 255, 0, 80);
  ellipse(250, 150, 125);
  fill(255, 255, 0, 50);
  ellipse(250, 150, 140);
  fill(255, 255, 0, 35);
  ellipse(250, 150, 155);
  fill(255, 255, 0, 20);
  ellipse(250, 150, 170);
  pop();
  //end
  //start
  push();
  translate(cloudScrollPos, 0);
  for (var i = 0; i < clouds.length; i++) {
    clouds[i].rain();
    clouds[i].draw();
  }
  pop();
  //end
  //start
  push();
  translate(seceneryScrollPos, 0);

  for (var i = 0; i < mountains.length; i++) {
    mountains[i].draw();
  }
  for (var i = 0; i < buildings.length; i++) {
    buildings[i].draw();
  }
  for (var i = 0; i < houses.length; i++) {
    houses[i].draw();
  }
  
  pop();
  //end
  //start
  push();
  translate(scrollPos, 0);

  for (var i = 0; i < trees.length; i++) {
    trees[i].draw();
  }
  for (var i = 0; i < trees.length; i++) {
    trees2[i].draw();
  }
  for (var i = 0; i < canyons.length; i++) {
    canyons[i].draw();
		canyons[i].check();
    canyons[i].checkPlayerDie();
  }
  for (var i = 0; i < collectables.length; i++) {
    if (!collectables[i].isFound) {
      collectables[i].draw();
      collectables[i].check();
    }
  }
  for (var i = 0; i < collectables2.length; i++) {
    if (!collectables2[i].isFound) {
      collectables2[i].draw();
      collectables2[i].check();
    }
  }

  flagPole.draw();
  flagPole.check();

  for (var i = 0; i < enemy.length; i++) {
    enemy[i].draw();
    enemy[i].update();
    enemy[i].check();
  }
  for (let i = 0; i < platforms.length; i++) {
    platforms[i].draw();
  }
  for (let i = 0; i < movingPlatforms.length; i++) {
    movingPlatforms[i].draw();
    movingPlatforms[i].update();
  }
  pop();
  //End

  drawGameChar();

  score();
  if (lives < 1) {
    gameOver();//gameOver screen and sound effect.
    return;
  }
  if (flagPole.isReached) {
    gameWon();//victory screen and sound effect.
    return;
  }

  characterMovement();// Logic for game character Movement.
  gameChar_world_x = gameChar_screen_x - scrollPos;// Update real position of gameChar for collision detection.
}

function score() {
  textAlign(CENTER);
  // noStroke();
	stroke(200);
  strokeWeight(3);
  textStyle(BOLD);

  push();
  strokeWeight(2);
  textSize(20);
  fill(0);

  push();
  textAlign(LEFT);
  text(`Game Score: ${game_score}`, 20, 30);
  pop();

  push();
  textAlign(RIGHT);
  text(`Lives: ${lives}`, width - 20, 30);
  pop();

  text("Press S to rain and P to stop", width / 2, height - 20);
  pop();
}

function gameOver() {
  textSize(40);
  textAlign(CENTER);
  // noStroke();
  fill(0);
  text("Game over.Press space to continue", width / 2, height / 2 - 100);
  lives = 0;
  while (fallSoundPlayVar < 1) {
    fallingSound.play();
    fallSoundPlayVar++;
  }
}

function gameWon() {
  textSize(40);
  textAlign(CENTER);
  // noStroke();
  fill(0);
  text("Level complete.Press space to continue", width / 2, height / 2 - 100);
  gameChar_screen_y = floorPos_y;
  while (victorySoundPlayVar < 1) {
    victorySound.play();
    victorySoundPlayVar++;
  }
}

function keyPressed() {
  // if statements to control the animation of the character when keys are pressed
 
  if (keyCode == 32) {
    if (flagPole.isReached) {
      startGame();
    }
    if (lives < 1) {
      startGame();
      lives = 3;
    }
    
  }
	if (key == 'S'){
		if (!isRaining) {
      isRaining = true;
    }
	}
  if (keyCode == 80) {
    isRaining = false;
    rainingSound.stop();
  }

  if (keyCode == "39") {
    isRight = true;
  }

  if (keyCode == "37") {
    isLeft = true;
  }

  if (keyCode == "38" || keyCode == 32) {
    if (!isFalling) {
      isFalling = true;
      isJumping = true;
      jumpSound.play();
    }
  }
}

function keyReleased() {
  // if statements to control the animation of the character when keys are released

  if (keyCode == "39") {
    isRight = false;
  }

  if (keyCode == "37") {
    isLeft = false;
  }

  if (keyCode == "38" || keyCode == 32) {
    isJumping = false;
    isFalling = false;
  }
}
