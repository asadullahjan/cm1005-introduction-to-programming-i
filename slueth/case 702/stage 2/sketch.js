/*

Officer: 6012708
CaseNum: 702-1-26896831-6012708

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPIVehicleObject and the cars in
CarObject_Array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar()
{
	SleuthPIVehicleObject.KmsAmt += SleuthPIVehicleObject.SpeedValue;
	SleuthPIVehicleObject.ShudderVal += random(-0.07, 0.07);
	SleuthPIVehicleObject.ShudderVal = constrain(SleuthPIVehicleObject.ShudderVal ,0.04, 1.09);
	runCarEngine(SleuthPIVehicleObject);
	/*
	This function should do the following: 
	 - increment SleuthPIVehicleObject's KmsAmt property by its SpeedValue property 
	 - add a random amount between -0.07 and 0.07 to SleuthPIVehicleObject's ShudderVal property
	 - use the constrain function to constrain SleuthPIVehicleObject's ShudderVal property to values between 0.04 and 1.09
	 - call the runCarEngine function passing SleuthPIVehicleObject as an argument
	*/
}


function crossLanes(targetVehicle)
{
	if(targetVehicle.x == LanePosition_A)
	{
		targetVehicle.x = LanePosition_B;
	}else
	{
		targetVehicle.x = LanePosition_A;
	}

	return targetVehicle;
	/*
	This function should do the following: 
	 - move targetVehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePosition_A and LanePosition_B to effect the change.
	 - finally you should return targetVehicle at the end of the function.
	 hint: You will need to modify the x property of targetVehicle.
	*/
}

// There are problems with
//  checkInfront: the function
//   is sometimes returning values
//    when it should return false.
function checkInfront( Target_vehicle_A, Target_vehicle_B )
{
	if(Target_vehicle_A.x == Target_vehicle_B.x
		&& Target_vehicle_A.KmsAmt<Target_vehicle_B.KmsAmt && (Target_vehicle_B.KmsAmt - Target_vehicle_A.KmsAmt) < 200)
	{
		console.log(Target_vehicle_B);
		return Target_vehicle_B;
		
	}
	else
	{
		return false;
	}
	/*
	This function should do the following: 
	 - determine if Target_vehicle_A is in the same lane and less than 200px behind Target_vehicle_B.
	 - do this by comparing the two cars' KmsAmt properties
	 - if these requirements are met then return Target_vehicle_B. Otherwise return false.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPIVehicleObject;

var roadWidth;
var roadLeftEdge;
var LanePosition_A;
var LanePosition_B;
var carImages = {};

var CarObject_Array = [
{ x: 300, y: 0, KmsAmt: -200, VehicleClassification: 'blueCar', NumberPlate: 'L21L0T', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 200, VehicleClassification: 'redCar', NumberPlate: 'HAA4PA', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 600, VehicleClassification: 'redCar', NumberPlate: '49XUBP', SpeedValue: 2, exhaust: [  ]} , { x: 500, y: 0, KmsAmt: 1000, VehicleClassification: 'whiteCar', NumberPlate: 'U62M1H', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 1400, VehicleClassification: 'greenCar', NumberPlate: 'VUIT2U', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 1800, VehicleClassification: 'redCar', NumberPlate: '2ZROSY', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 2200, VehicleClassification: 'blueCar', NumberPlate: '3B5GDQ', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 2600, VehicleClassification: 'redCar', NumberPlate: '5VC0MF', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 3000, VehicleClassification: 'blueCar', NumberPlate: 'IDDIN3', SpeedValue: 2, exhaust: [  ]} , { x: 500, y: 0, KmsAmt: 3400, VehicleClassification: 'redCar', NumberPlate: 'WU1SJM', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 3800, VehicleClassification: 'redCar', NumberPlate: 'Y36CWV', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 4200, VehicleClassification: 'whiteCar', NumberPlate: 'MIOQOD', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 4600, VehicleClassification: 'blueCar', NumberPlate: 'HQ26SZ', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 5000, VehicleClassification: 'whiteCar', NumberPlate: 'AW6Z77', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 5400, VehicleClassification: 'blueCar', NumberPlate: 'O3XLUF', SpeedValue: 2, exhaust: [  ]} , { x: 500, y: 0, KmsAmt: 5800, VehicleClassification: 'greenCar', NumberPlate: 'L0PO4M', SpeedValue: 2, exhaust: [  ]} , { x: 300, y: 0, KmsAmt: 6200, VehicleClassification: 'whiteCar', NumberPlate: 'NXUFR0', SpeedValue: 2, exhaust: [  ]} , { x: 500, y: 0, KmsAmt: 6600, VehicleClassification: 'greenCar', NumberPlate: '3LG8ST', SpeedValue: 2, exhaust: [  ]} , { x: 500, y: 0, KmsAmt: 7000, VehicleClassification: 'redCar', NumberPlate: 'NV7PME', SpeedValue: 2, exhaust: [  ]} , { x: 500, y: 0, KmsAmt: 7400, VehicleClassification: 'whiteCar', NumberPlate: 'N8L7ET', SpeedValue: 2, exhaust: [  ]} 
];



function preload()
{
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);

	roadWidth = 400;
	roadLeftEdge = 200;
	LanePosition_A = 300;
	LanePosition_B = 500;

	SleuthPIVehicleObject = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		KmsAmt: 0,
		SpeedValue: 3,
		ShudderVal: 0,
		VehicleClassification: 'detective',
		NumberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	moveCar();
	for(var i = 0; i < CarObject_Array.length; i++)
	{
		var b2b = checkInfront(SleuthPIVehicleObject, CarObject_Array[i]);
		if(b2b)crossLanes(SleuthPIVehicleObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < CarObject_Array.length; i++)
	{
		CarObject_Array[i].KmsAmt += CarObject_Array[i].SpeedValue;
		CarObject_Array[i].y = SleuthPIVehicleObject.y - CarObject_Array[i].KmsAmt + SleuthPIVehicleObject.KmsAmt;
	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (SleuthPIVehicleObject.KmsAmt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (SleuthPIVehicleObject.KmsAmt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(SleuthPIVehicleObject);
	image
	(
		carImages["detective"],
		SleuthPIVehicleObject.x - carImages["detective"].width/2 + random(-SleuthPIVehicleObject.ShudderVal, SleuthPIVehicleObject.ShudderVal),
		SleuthPIVehicleObject.y + random(-SleuthPIVehicleObject.ShudderVal, SleuthPIVehicleObject.ShudderVal)
	);

	//draw all other cars

	for(var i = 0; i < CarObject_Array.length; i ++)
	{
		if(CarObject_Array[i].y < height && CarObject_Array[i].y > -height/2)
		{
			image(
			carImages[CarObject_Array[i].VehicleClassification],
			CarObject_Array[i].x - carImages[CarObject_Array[i].VehicleClassification].width/2,
			CarObject_Array[i].y
			);
			runCarEngine(CarObject_Array[i]);

			drawExhaust(CarObject_Array[i]);
		}
	}

}

function runCarEngine(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.VehicleClassification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.SpeedValue/3);
		if(car.VehicleClassification != "detective")car.exhaust[i].y += (SleuthPIVehicleObject.SpeedValue - car.SpeedValue);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
