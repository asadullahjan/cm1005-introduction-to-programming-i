/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/5;
	treePos_y = height/1.5;

	canyon = {x_pos:50,width: 100};
	collectable = {x_pos: 400, y_pos: 375, size: 30};
	cloud = {
		posX : 180 ,
		posY : 100 ,
		scale : 1.2
	}
	mountain = {
		posX : 300,
		posY: 256
	}
}

function draw()
{
	background(48,25,52); //fill the sky blue

	/////////mountain//////////////
	noStroke();
	fill(121,99,66);
	triangle(mountain.posX,mountain.posY,mountain.posX-100,mountain.posY+176,mountain.posX+100,mountain.posY+176);
	fill(255);
	triangle(mountain.posX,mountain.posY,mountain.posX-53,mountain.posY+94,mountain.posX+53,mountain.posY+94);


	///////////////cloud////////////////
	noStroke();
	fill(255);
	ellipse(cloud.posX,
			cloud.posY,
			60*cloud.scale);
	ellipse(cloud.posX+30*cloud.scale,
			cloud.posY - 10,
			60*cloud.scale,
			80*cloud.scale);
	ellipse(cloud.posX+60*cloud.scale,
			cloud.posY -5 ,
			50*cloud.scale,
			60*cloud.scale);
	ellipse(cloud.posX+90*cloud.scale,
			cloud.posY,
			50*cloud.scale);



	//////////////////TREE////////////
	noStroke();
	fill(128,113,83);
	ellipse(treePos_x,
			treePos_y,
			40,
			195);
	fill(58, 95, 11 );
	ellipse(treePos_x-40,
			treePos_y-60,
			70);
	ellipse(treePos_x,
			treePos_y-40,
			70);
	ellipse(treePos_x+40,
			treePos_y-60,
			70);
	ellipse(treePos_x,
			treePos_y-90,
			70);

	///////green ground///////
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground


	//////////canyon///////////
	noStroke();
	fill(48,25,52);
	rect(canyon.x_pos,floorPos_y,canyon.width,200);
	fill(15,94,156);
	rect(canyon.x_pos,floorPos_y+100,canyon.width,100);
	
	//////////collectable////////
	strokeWeight(2);
	stroke(0,255,0);
	line(collectable.x_pos+3,collectable.y_pos,collectable.x_pos+7,collectable.y_pos-collectable.size);
	noStroke();
	fill(255,0,0);
	ellipse(collectable.x_pos,collectable.y_pos+5,collectable.size/2,collectable.size);
	ellipse(collectable.x_pos+7,collectable.y_pos+5,collectable.size/2,collectable.size);


	///////////game character///////////////
	fill (120,120,120);
	ellipse(gameChar_x,gameChar_y-56,40);
	fill(0);
	ellipse(gameChar_x-10,gameChar_y-56,5);
	ellipse(gameChar_x+10,gameChar_y-56,5);

	fill (0,0,225);
	rect (gameChar_x-15,gameChar_y-37,30,30);

	fill (0);
	rect(gameChar_x-15,gameChar_y-7,10,10);
	rect(gameChar_x+5,gameChar_y-7,10,10);

	
}

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
