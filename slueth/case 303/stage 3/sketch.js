/*

Officer: 6012708
CaseNum: 303-2-73836139-6012708

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Make Secure_Vault_CombA equal to the value of mouseY
	- Use the 'min' function to prevent Secure_Vault_CombA from going above 19

	When the mouse button is released:
	- Increment Secure_Vault_CombB by 2
	- Use the 'min' function to prevent Secure_Vault_CombB from going above 15

	Whilst the mouse is moving:
	- Make Secure_Vault_CombC equal to the value of mouseY
	- Use the 'constrain' function to prevent Secure_Vault_CombC from falling below 4 and going above 20

	Whilst the mouse is moving:
	- Increment Secure_Vault_CombD by 1
	- Use the 'constrain' function to prevent Secure_Vault_CombD from falling below 2 and going above 18

	Whilst the mouse is being dragged:
	- Make Secure_Vault_CombE equal to the value of mouseX
	- Use the 'max' function to prevent Secure_Vault_CombE from falling below 10



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Secure_Vault_CombA;
var Secure_Vault_CombB;
var Secure_Vault_CombC;
var Secure_Vault_CombD;
var Secure_Vault_CombE;


function preload() {
	//IMAGES WILL BE LOADED HERE

}

function setup() {
	createCanvas(512, 512);

	//initialise the variables
	Secure_Vault_CombA = 0;
	Secure_Vault_CombB = 0;
	Secure_Vault_CombC = 0;
	Secure_Vault_CombD = 0;
	Secure_Vault_CombE = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mousePressed() {
	Secure_Vault_CombA = mouseY;
	Secure_Vault_CombA = min(Secure_Vault_CombA, 19);
 } 
// 	When the mouse button is released:
// 	- Increment Secure_Vault_CombB by 2 
// 	- Use the 'min' function to prevent Secure_Vault_CombB from going above 15 
function mouseReleased(){
	Secure_Vault_CombB += 2; 
	Secure_Vault_CombB = min(Secure_Vault_CombB,15) 
} 
// 	Whilst the mouse is moving: 
// 	- Make Secure_Vault_CombC equal to the value of mouseY 
// 	- Use the 'constrain' function to prevent Secure_Vault_CombC from falling below 4 and going above 20 
// 	Whilst the mouse is moving: 
// 	- Increment Secure_Vault_CombD by 1 
// 	- Use the 'constrain' function to prevent Secure_Vault_CombD from falling below 2 and going above 18 
function mouseMoved(){ 
	Secure_Vault_CombC = constrain(mouseY,4,20); 
	Secure_Vault_CombD += 1; 
	Secure_Vault_CombD = constrain(Secure_Vault_CombD,2,18); 
} 
	// 	Whilst the mouse is being dragged: 
	// 	- Make Secure_Vault_CombE equal to the value of mouseX 
	// 	- Use the 'max' function to prevent Secure_Vault_CombE from falling below 10 
	
function mouseDragged(){ 
	Secure_Vault_CombE = mouseX; 
	Secure_Vault_CombE = max(Secure_Vault_CombE,10); 
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw() {

	//Draw the safe door
	background(70);
	noStroke();
	fill(29, 110, 6);
	rect(26, 26, width - 52, width - 52);

	//Draw the combination dials
	push();
	translate(120, 170);
	drawDial(140, Secure_Vault_CombA, 24);
	pop();

	push();
	translate(120, 380);
	drawDial(140, Secure_Vault_CombB, 19);
	pop();

	push();
	translate(280, 170);
	drawDial(140, Secure_Vault_CombC, 26);
	pop();

	push();
	translate(280, 380);
	drawDial(140, Secure_Vault_CombD, 22);
	pop();

	//Draw the lever
	push();
	translate(width - 125, 256);
	drawLever(Secure_Vault_CombE);
	pop();


}

function drawDial(diameter, num, maxNum) {
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255, 255, 200);
	ellipse(0, 0, diameter, diameter);
	fill(100);
	noStroke();
	ellipse(0, 0, diameter * 0.66, diameter * 0.66);
	fill(150, 0, 0);
	triangle(
		-p * 0.4, -r - p,
		p * 0.4, -r - p,
		0, -r - p / 5
	);

	noStroke();

	push();
	var inc = 360 / maxNum;

	rotate(radians(-num * inc));
	for (var i = 0; i < maxNum; i++) {
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0, -r * 0.66, 0, -(r - 10));
		noStroke();
		fill(0);
		text(i, 0, -(r - 10));
		pop();
	}

	pop();
}

function drawLever(rot) {
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10, 0, 20, 100);
	ellipse(0, 0, 50, 50);
	ellipse(0, 100, 35, 35);
	pop();
}
