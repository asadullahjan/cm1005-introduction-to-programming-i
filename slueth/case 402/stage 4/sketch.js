/*
402 - The case of the Why Gang ruby heist
Stage 4 - Fox

Officer: 6012708
CaseNum: 402-3-73014308-6012708

This final Why gang member Fox is the boss of the gang. Fox is particularly
cunning and has hidden herself down this twisted network of alleys known as
vice city. Head into vice city to find her but don’t get lost!

The gang is still in the dark about our code, not the brightest pixels in the
city!

North: detSpeedX = 0 and detSpeedY = -1
East: detSpeedX = 1 and detSpeedY  = 0
South: detSpeedX = 0 and detSpeedY = 1
West: detSpeedX = -1 and detSpeedY = 0

*/

var currentRoad;
var direction;
var mapImage;
var overlayImage;

var det = {
	"speedX": 0,
	"speedY": 0,
	"locationX": 73,
	"locationY": 634,
	"image": "./det.png"
};

function preload()
{
	perp.image = loadImage(perp.image);
	det.image = loadImage(det.image);
	mapImage = loadImage("./map.png");
	overlayImage = loadImage("./overlay.png")
}

function setup()
{
	createCanvas(1024, 768);
}

function draw()
{

	///////////////////ADD YOUR CODE HERE///////////////////
	if (det.locationY > 197 && det.locationX < 210 && det.locationX == 73)
	{
		det.speedX = 0;
		det.speedY = -6;
	}
	// }North: detSpeedX = 0 and detSpeedY = -1
	// East: detSpeedX = 1 and detSpeedY  = 0
	// South: detSpeedX = 0 and detSpeedY = 1
	// West: detSpeedX = -1 and detSpeedY = 0
	else if(det.locationX == 73 && det.locationY < 185)
	{
		det.speedX = +6;
		det.speedY = 0;
	}
	else if(det.locationX > 270 && det.locationX < 280 && det.locationY == 184)
	{
		det.speedX = 0;
		det.speedY = +6;
	}
	else if(det.locationX == 271 && det.locationY > 512)
	{
		det.speedX = +6;
		det.speedY = 0;
	}
	else if(det.locationX > 520 && det.locationX < 530 && det.locationY == 514)
	{
		det.speedX = 0;
		det.speedY = -6;
	}
	else if(det.locationX == 523 && det.locationY < 125)
	{
		det.speedX = +6;
		det.speedY = 0;
	}
	else if(det.locationX > 645 && det.locationX < 635 && det.locationY == 124)
	{
		det.speedX = 0;
		det.speedY = +6;
	}
	else if(det.locationX == 649 && det.locationY > 575)
	{
		det.speedX = +6;
		det.speedY = 0;
	}
	else if(det.locationX > 770 && det.locationX < 785 && det.locationY == 580)
	{
		det.speedX = 0;
		det.speedY = -6;
	}
	else if(det.locationX > 645 && det.locationX < 655  && det.locationY == 124)
	{
		det.speedX = 0;
		det.speedY = +6;
	}
	else if(det.locationX == 775 && det.locationY < 70)
	{
		det.speedX = +6;
		det.speedY = 0;
	}
	else if(det.locationX > 900 && det.locationX < 910 && det.locationY == 64)
	{
		det.speedX = 0;
		det.speedY = +6;
	}
	
	
	
	
	

	///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

	background(50);

	det.locationX += det.speedX;
	det.locationY += det.speedY;

	//draw the images of the map perp and the detective
	image(mapImage, 0, 0);
	image(overlayImage, 0, 0);
	image(perp.image, perp.locationX - roadWidth, perp.locationY - roadWidth, roadWidth * 2, roadWidth * 2);

	push();
	translate(det.locationX, det.locationY);
	if (det.speedX != 0) rotate((det.speedX - 1.5) * PI);
	else if (det.speedY < 0) rotate(PI);
	image(det.image, -roadWidth, -roadWidth, roadWidth * 2, roadWidth * 2);
	pop();

	push();
	textAlign(CENTER);
	textSize(32);
	noStroke();

	//the perp has been caught
	if (dist(det.locationX, det.locationY, perp.locationX, perp.locationY) < roadWidth / 2)
	{
		//display message to the player
		fill(0, 220, 0);
		text("Just in the nick of time! \nYou caught " + perp.name, width / 2, height / 2);
		perp.caught = 1;
		noLoop();
	}

	//not on any roads, therefore the game is lost.
	if (!getOnRoad() || (det.speedX == 0 && det.speedY == 0))
	{
		fill(255, 0, 0);
		text("You let " + perp.name + " get away.\n Better luck next time.", width / 2, height / 2);
		perp.caught = -1;
		noLoop();
	}

	pop();

	hud();

}

function hud()
{
	push();
	fill(250);
	noStroke();
	textAlign(LEFT, TOP);
	text("detective location - x: " + det.locationX + " y: " + det.locationY, 5, 5);
	pop();
}

function getOnRoad()
{

	if (mapImage.get(det.locationX, det.locationY)[0] == bckgrndColour)
	{
		return false;
	}

	return true;
}

var roadWidth = 25;
var bckgrndColour = 50;
var perp = {
	"caught": 0,
	"name": "Fox",
	"image": "./perp.png",
	"locationX": 889,
	"locationY": 696
};