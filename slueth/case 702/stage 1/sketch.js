/*

Officer: 6012708
CaseNum: 702-0-45168336-6012708

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of sleuthCar to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Vehicle()
{ 
	sleuthCar.milesDriven += sleuthCar.gasValue;
	sleuthCar.engineVibrateAmt += random(-0.07, 0.07);
	sleuthCar.engineVibrateAmt = constrain(sleuthCar.engineVibrateAmt, 0.1, 1.16);
	Turnover_CarEngine(sleuthCar);
	/*
	This function should do the following: 
	 - increment sleuthCar's milesDriven property by its gasValue property 
	 - add a random amount between -0.07 and 0.07 to sleuthCar's engineVibrateAmt property
	 - use the constrain function to constrain sleuthCar's engineVibrateAmt property to values between 0.1 and 1.16
	 - call the Turnover_CarEngine function passing sleuthCar as an argument
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthCar;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	sleuthCar = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 300,
		milesDriven: 0,
		gasValue: 3,
		engineVibrateAmt: 0,
		vehicleType: 'detective',
		numberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	Drive_Vehicle();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthCar.milesDriven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthCar.milesDriven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthCar);
	image
	(
		carImages["detective"],
		sleuthCar.x - carImages["detective"].width/2 + random(-sleuthCar.engineVibrateAmt, sleuthCar.engineVibrateAmt),
		sleuthCar.y + random(-sleuthCar.engineVibrateAmt, sleuthCar.engineVibrateAmt)
	);

}

function Turnover_CarEngine(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.vehicleType].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gasValue/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
