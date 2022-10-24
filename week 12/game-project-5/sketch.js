/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var clouds;
var mountains;
var trees;
var canyons;
var collectables;

///variables for anchoring the first position of each object
var tressAnchorX = 270;
var cloudAnchorX = 150;
var mountainAnchorX = 150;
var canyonAnchorX = 100;
var collactableAnchorX = 270;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2 - 100;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
	trees = [
		{
			posX: tressAnchorX,
			size: random(100, 125)
		},
		{
			posX: tressAnchorX + random(150, 300),
			size: random(100, 125)
		},
		{
			posX: tressAnchorX + random(450, 550),
			size: random(100, 125)
		},
		{
			posX: tressAnchorX + random(650, 843),
			size: random(100, 125)
		},
		{
			posX: tressAnchorX + random(1000, 1208),
			size: random(100, 125)
		},
		{
			posX: tressAnchorX + random(1300, 1408),
			size: random(100, 125)
		},
		{
			posX: tressAnchorX + random(1450, 1609),
			size: random(100, 125)
		},
		{
			posX: tressAnchorX + random(1780, 1890),
			size: random(100, 125)
		},
	];

	clouds = [
		{
			posX: cloudAnchorX,
			posY: random(50, 150),
			scale: random(1.0, 1.5)
		},
		{
			posX: cloudAnchorX + random(230, 321),
			posY: random(50, 150),
			scale: random(1.0, 1.5)
		},
		{
			posX: cloudAnchorX + random(470, 623),
			posY: random(50, 150),
			scale: random(1.0, 1.5)
		},
		{
			posX: cloudAnchorX + random(740, 882),
			posY: random(50, 150),
			scale: random(1.0, 1.5)
		},
		{
			posX: cloudAnchorX + random(1040, 1324),
			posY: random(50, 150),
			scale: random(1.0, 1.5)
		},
		{
			posX: cloudAnchorX + random(1350, 1643),
			posY: random(50, 150),
			scale: random(1.0, 1.5)
		},
		{
			posX: cloudAnchorX + random(1770, 1924),
			posY: random(50, 150),
			scale: random(1.0, 1.5)
		},

	];

	mountains = [
		{
			posX: mountainAnchorX,
			posY: 256
		},
		{
			posX: mountainAnchorX + random(400, 500),
			posY: 256
		},
		{
			posX: mountainAnchorX + random(700, 880),
			posY: 256
		},
		{
			posX: mountainAnchorX + random(1080, 1450),
			posY: 256
		},
		{
			posX: mountainAnchorX + random(1580, 1750),
			posY: 256
		},
		{
			posX: mountainAnchorX + random(2080, 2380),
			posY: 256
		}
	]

	canyons = [
		{
			posX: canyonAnchorX,
			width: random(50, 100)
		},
		{
			posX: canyonAnchorX + random(340, 450),
			width: random(50, 100)
		},
		{
			posX: canyonAnchorX + random(770, 860),
			width: random(50, 100)
		},
		{
			posX: canyonAnchorX + random(1270, 1400),
			width: random(50, 100)
		},
		{
			posX: canyonAnchorX + random(1670, 1780),
			width: random(50, 100)
		},
		{
			posX: canyonAnchorX + random(2170, 2300),
			width: random(50, 100)
		},

	];

	collectables = [
		{
			posX: collactableAnchorX,
			posY: random(floorPos_y - 10, floorPos_y - 50),
			size: random(20, 30), isFound: false
		},
		{
			posX: collactableAnchorX + random(300, 400),
			posY: random(floorPos_y - 10, floorPos_y - 50),
			size: random(20, 30), isFound: false
		},
		{
			posX: collactableAnchorX + random(480, 610),
			posY: random(floorPos_y - 10, floorPos_y - 50),
			size: random(20, 30), isFound: false
		},
		{
			posX: collactableAnchorX + random(1050, 1321),
			posY: random(floorPos_y - 10, floorPos_y - 50),
			size: random(20, 30), isFound: false
		},
		{
			posX: collactableAnchorX + random(1550, 1690),
			posY: random(floorPos_y - 10, floorPos_y - 50),
			size: random(20, 30), isFound: false
		},
		{
			posX: collactableAnchorX + random(1670, 1790),
			posY: random(floorPos_y - 10, floorPos_y - 50),
			size: random(20, 30), isFound: false
		},
	];
}
function draw() {
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4); // draw some green ground

	push();
	translate(scrollPos, 0);

	drawMountain();// Draw mountains.
	drawTree();// Draw trees.
	drawCloud();// Draw clouds.
	for (var i = 0; i < canyons.length; i++) 
	{
		drawCanyon(canyons[i]);// Draw canyons
	}
	for (var i = 0; i < collectables.length; i++) 
	{
		if (collectables[i].isFound == false)
		{
			drawCollectable(collectables[i]);// Draw collectable items
		}
	}

	pop();

	// Draw game character.
	drawGameChar();

	//Logic for canyon and collectable
	for (var i = 0; i < canyons.length; i++) {
		checkCanyon(canyons[i])
	}

	for (var i = 0; i < collectables.length; i++) {
		checkCollectable(collectables[i])
	}

	// Logic to make the game character move or the background scroll.
	if (isLeft) 
	{
		if (gameChar_x > width * 0.2) 
		{
			gameChar_x -= 5;
		}
		else 
		{
			scrollPos += 5;
		}
	}

	if (isRight) 
	{
		if (gameChar_x < width * 0.8) 
		{
			gameChar_x += 5;
		}
		else 
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
	if (isPlummeting)
	{
		gameChar_y += 3;
	}
	if (isFalling == true) 
	{
		if (gameChar_y == floorPos_y) 
		{
			gameChar_y = floorPos_y - 100;
		}
		if (gameChar_y < floorPos_y) 
		{
			gameChar_y += 1.25;
		}
	}
	if (gameChar_y < floorPos_y) 
	{
		isFalling = true;
	}
	else 
	{
		isFalling = false;
	}


	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed() {

	// if statements to control the animation of the character when
	// keys are pressed.

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

// GameCharacter is in gameCharacter.js.
// Background render functions are in backgroundScenery.js.

// Function to draw collectable objects is in backgroundScenery.js.
// Function to draw canyon objects is in backgroundScenery.js.

// Function to check character has collected an item is in checkItemandCanyon.
// Function to check character is over a canyon is in checkItemandCanyon.


