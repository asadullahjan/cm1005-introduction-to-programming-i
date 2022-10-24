/*

Officer: 6012708
CaseNum: 303-1-58234750-6012708

Case 303 - The Case of the Crooked Attorney
Stage 2 - Torvalds' House

This safe is in Torvalds’ home study. Be careful. If you get caught, I don’t know you !

Crack this safe by doing the following:

	When the mouse button is pressed:
	- Decrement SecretBoxCode_0 by 1

	When the mouse button is pressed:
	- Decrement SecretBoxCode_1 by 1

	Whilst the mouse is being dragged:
	- Make SecretBoxCode_2 equal to the string "GDN"

	Whilst the mouse is moving:
	- Make SecretBoxCode_2 equal to the string "PZV"



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- Incrementing +=
	- Decrementing -=

*/

//declare the variables

var SecretBoxCode_0;
var SecretBoxCode_1;
var SecretBoxCode_2;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	SecretBoxCode_0 = 0;
	SecretBoxCode_1 = 0;
	SecretBoxCode_2 = "";

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
// When the mouse button is pressed:
// - Decrement SecretBoxCode_0 by 1

// When the mouse button is pressed:
// - Decrement SecretBoxCode_1 by 1

// Whilst the mouse is being dragged:
// - Make SecretBoxCode_2 equal to the string "GDN"

// Whilst the mouse is moving:
// - Make SecretBoxCode_2 equal to the string "PZV"

function mousePressed(){
	SecretBoxCode_0 -= 1;
	SecretBoxCode_1 -= 1;
}
function mouseDragged(){
	SecretBoxCode_2 = "GDN";
}
function mouseMoved(){
	SecretBoxCode_2 = "PZV";
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(200,height/2);
	drawDial(200, SecretBoxCode_0, 41);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(SecretBoxCode_1);
	pop();

	//Draw the spinner
	push();
	translate(width - 120,100);
	drawSpinner(3, SecretBoxCode_2);
	pop();

}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}

function drawSpinner(numSpinners, val)
{
	var sw = 20;
	var ow = (sw + 5) * numSpinners + 5;
	stroke(0);
	fill(100);
	rect(-ow/2,0,ow,35);
	if(typeof(val) == "number")
	{
		val = floor(val).toString(); //convert to string
	}


	for(var d = numSpinners - val.length; d > 0; d--)
	{
		val = "-" + val;
	}

	for(var i = 0; i < numSpinners; i++)
	{
		stroke(0);
		fill(255,255,200);
		rect(-ow/2 + i * (sw + 5) + 5,5,20,25);
		fill(0);
		noStroke();
		text(val[i],-ow/2 + sw/2 + i * (sw +5),25);
	}

}
