/*
The Game Project 5 - Bring it all together
*/

// variables used to control the animation of the game character.
var gameChar_screen_x,gameChar_screen_y;
var gameChar_world_x , gameChar_world_y;
let cameraPos_x,cameraPos_y;
var floorPos_y;
var scrollPos;
var seceneryScrollPos;

//variables used to control the movement of the character.
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

//variables for the background scenery.
var clouds;
var mountains;
var trees;
var canyons;
var collectables;
var flagPole;

var isRaining;

//variables for the sound effects.
var victorySoundPlayVar;
var fallSoundPlayVar;
var jumpSound;
var rainingSound;
var victorySound;
var fallingSound;
var waterSplashSound;

//variables for score and lives.
var game_score;
var lives;

///variables for anchoring the first position of each object
var tressAnchorX = 270;
var cloudAnchorX = 150;
var mountainAnchorX = 150;
var canyonAnchorX = 100;
var collactableAnchorX = 270;

//fuction preload() is used to load the sound files.
function preload()
{
	soundFormats('mp3','wav');
	jumpSound = loadSound("assets/jumpsound.mp3");
	jumpSound.setVolume(0.2);
	rainingSound = loadSound('assets/raining.wav');
	rainingSound.setVolume(0.1);
	victorySound = loadSound('assets/victory.wav');
	victorySound.setVolume(0.2);
	fallingSound = loadSound('assets/falling.wav');
	fallingSound.setVolume(0.2);
	waterSplashSound = loadSound('assets/watersplash.wav');
	waterSplashSound.setVolume(0.1);
	fruitPickupSound = loadSound('assets/fruitPickupSound.mp3');
	fruitPickupSound.setVolume(0.2);
}

function setup() 
{
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	lives = 3;
	startGame();
}

function draw() 
{
	
	// fill the sky blue
	background(100, 155, 255); 

	//green ground
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, 15);
	fill(139, 103, 66);
	rect(0,floorPos_y+15,width,height-floorPos_y);

	//using push and pop and translate to give feeling of movement;
	//start
	push();
	translate(seceneryScrollPos,0);
	// Draw mountains.
	for(var i = 0; i < mountains.length; i++)
	{
		mountains[i].draw();
	}
	for(var i = 0; i < clouds.length; i++)
	{
		clouds[i].rain();
		clouds[i].draw();
	}
	pop();
	push();
	translate(scrollPos, 0);

	
	// Draw trees.
	for(var i = 0 ; i < trees.length ; i++)
	{
		trees[i].draw();
	}
	
	// for loop to draw the draw and check canyons.
	for (var i = 0; i < canyons.length; i++) 
	{
		canyons[i].draw();
		canyons[i].check();
		canyons[i].checkPlayerDie();
	}
	// for loop to draw the draw and check collectables.
	for (var i = 0; i < collectables.length; i++) 
	{
		if (collectables[i].isFound == false)
		{
			collectables[i].draw();
			collectables[i].check();
		}
	}
	// draw and check flagpole.
	flagPole.draw();
	flagPole.check();

	pop();
	//End

	// Draw game character.
	drawGameChar();
	//function for text and score.
	score();

	//code for the gameOver screen and sound effect.
	if(lives<1)
	{
		gameOver();
		return;
	}
	
	//code for the victory screen and sound effect.
	if(flagPole.isReached)
	{
		gameWon();
		return;
	}

	// Logic for game character Movement.
	characterMovement();
	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_screen_x - scrollPos;
}

//function for text and score.
function score()
{
	textAlign(CENTER);
	textSize(25);
	fill(0);
	noStroke();
	text("game Score : " + game_score , 100,20);
	text("lives : " + lives , 60,40);
	text("press space to rain and p to stop", width/2,height-20);
}

//function for the gameOver screen and sound effect.
function gameOver()
{
	textSize(40);
	textAlign(CENTER);
	noStroke();
	fill(0);
	text("Game over.Press space to continue",width/2,height/2-100);
	lives = 0;
	while(fallSoundPlayVar<1){
		fallingSound.play();
		fallSoundPlayVar++;
	}
}

function gameWon()
{
	textSize(40);
	textAlign(CENTER);
	noStroke();
	fill(0);
	text("Level complete.Press space to continue",width/2,height/2-100);
	gameChar_screen_y = floorPos_y;
	while(victorySoundPlayVar<1){
		victorySound.play();
		victorySoundPlayVar++;
	}
}

function keyPressed() {

	// if statements to control the animation of the character when
	// keys are pressed.

	
	if(keyCode == 32){
		console.log("space");
		if(flagPole.isReached){
			startGame();
		}
		if(lives < 1) {
			startGame();
			lives = 3;
		}
		if(isRaining == false)
		{
			isRaining = true;
		}
		
	}
	if(keyCode == 80){
		console.log("p");
			isRaining = false;
			rainingSound.stop();
	
	}

	if (keyCode == "39") 
	{
		isRight = true;
	}

	if (keyCode == "37")
	{
		isLeft = true;
	}

	if (keyCode == "38") 
	{
		isFalling = true;
	}

}

function keyReleased() {

	// if statements to control the animation of the character when
	// keys are released.

	if (keyCode == "39") 
	{
		isRight = false;
	}

	if (keyCode == "37") 
	{
		isLeft = false;
	}

	if (keyCode == "38") 
	{
		isFalling = false;
	}
}


