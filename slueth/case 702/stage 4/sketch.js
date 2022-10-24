/*
​
Officer: 7340357
CaseNum: 702-3-12969369-7340357
​
Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase
​
“All units: Vannevar is on the run. They are driving a white car with a numberPlate of UVGG2M.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.
​
There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:
​
	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values
​
HINT: make sure you take a look at the initialisation of sleuthPICar and the cars in
vehicle_data to understand their properties.
​
*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Car()
{
	/*
	This function should do the following: 
	 - increment sleuthPICar's kmsTravelled property by its gasValue property 
	 - add a random amount between -0.05 and 0.05 to sleuthPICar's rumbleValue property
	 - use the constrain function to constrain sleuthPICar's rumbleValue property to values between 0.09 and 0.94
	 - call the Turnover_Car_engine function passing sleuthPICar as an argument
	*/
    
    sleuthPICar.kmsTravelled += sleuthPICar.gasValue;
    sleuthPICar.rumbleValue += random(-0.05, 0.05);
    sleuthPICar.rumbleValue = constrain(sleuthPICar.rumbleValue, 0.09, 0.94);
    Turnover_Car_engine(sleuthPICar);
}

function Move_Lanes(carObj)
{
	/*
	This function should do the following: 
	 - move carObj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_Position_a and Lane_Position_b to effect the change.
	 hint: You will need to modify the x property of carObj.
	*/
    if(carObj.x == Lane_Position_a)
    {
        carObj.x = Lane_Position_b;
    }
    else
    {
        carObj.x = Lane_Position_a;
    }
}

function Vehicle_Infront( target_vehicle_a, target_vehicle_b )
{
	/*
	This function should do the following: 
	 - determine if target_vehicle_a is in the same lane and less than 200px behind target_vehicle_b.
	 - do this by comparing the two cars' kmsTravelled properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
    
    var d = target_vehicle_b.kmsTravelled - target_vehicle_a.kmsTravelled;
    
    console.log(d);
    
    if(d < 200 && d > 0 && target_vehicle_a.x == target_vehicle_b.x)
    {
        return true;
        // console.log("true");
    }
    else
    {
        return false;
    }
}

function CheckVehicle_BySide( targetVehicle )
{
	/*
	This function should do the following: 
	 - determine if targetVehicleis parallel with sleuthPICar.
	 - if targetVehicle is found to be parallel to sleuthPICar then return targetVehicle.
	 - cars are considered parallel if the absolute difference between their kmsTravelled properties is less than 25 px and they have non-matching x properties	*/
    
    var p = Math.abs(targetVehicle.kmsTravelled - sleuthPICar.kmsTravelled);
    
    if(p < 25 && targetVehicle.x != sleuthPICar.x)
    {
        return targetVehicle;
    }
}
function Identify_Suspect()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to sleuthPICar to see if they match the numberPlate property in the suspect description.
	 - it does this by traversing vehicle_data and calling CheckVehicle_BySide for each car
.	 - if a positive result is returned then the numberPlate property of the found car is then checked against the suspect description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
    
    for(var i = 0; i < vehicle_data.length; i++)
    {
        if(CheckVehicle_BySide(vehicle_data[i]))
        {
            if(vehicle_data[i].numberPlate == "UVGG2M")
            {
                return vehicle_data[i];
            }
        }
    } return false;
}

function Following_Suspect()
{
	/*
	This function should do the following: 
	 - only operate if the tailingSuspect property of sleuthPICar is true and the global variable suspect is assigned to an object.
	 - scale the gasValue property of sleuthPICar by a factor of 1.001.
	 - use the min function to make sure that sleuthPICar's gasValue property does not exceed 6.
	 - it should traverse vehicle_data calling Vehicle_Infront for each car to detect any cars in front of sleuthPICar.
	 - if a positive result is returned it should check to see if the numberPlate property of that car matches that of suspect.
	 - for a match, Stop_Suspect should be called, otherwise call Move_Lanes.
	*/
    
    if(sleuthPICar.tailingSuspect && suspect != null)
    {
       sleuthPICar.gasValue *= 1.001;
        sleuthPICar.gasValue = min(sleuthPICar.gasValue, 6);
        
        for(var i = 0; i < vehicle_data.length; i++)
        {
            if(Vehicle_Infront(sleuthPICar, vehicle_data[i]))
            {
                if(vehicle_data[i].numberPlate == "UVGG2M")
                {
                    Stop_Suspect();
                }
                else
                {
                    Move_Lanes(sleuthPICar);
                }
            }
            
        }
    }
    
}

function Stop_Suspect()
{
	/*
	This function should do the following: 
	 - set the arrested property of suspect to true.
	 - set the apprehendingSuspect property of sleuthPICar to true.
	 - set the gasValue properties of both vehicles to zero.
	*/
    
    suspect.arrested = true;
    sleuthPICar.apprehendingSuspect = true;
    suspect.gasValue = 0;
    sleuthPICar.gasValue = 0;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPICar;

var roadWidth;
var roadLeftEdge;
var Lane_Position_a;
var Lane_Position_b;
var carImages = {};
var suspect;

var vehicle_data = [
{ x: 500, y: 0, kmsTravelled: -200, carCategory: 'greenCar', numberPlate: 'BV1SIF', gasValue: 2, exhaust: [  ]} , { x: 300, y: 0, kmsTravelled: 200, carCategory: 'whiteCar', numberPlate: 'JQ1OWH', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 600, carCategory: 'redCar', numberPlate: '9EDT2V', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 1000, carCategory: 'blueCar', numberPlate: 'QGDD6Q', gasValue: 2, exhaust: [  ]} , { x: 300, y: 0, kmsTravelled: 1400, carCategory: 'whiteCar', numberPlate: 'UVGG2M', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 1800, carCategory: 'redCar', numberPlate: 'SZCC6L', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 2200, carCategory: 'redCar', numberPlate: 'IMJXY5', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 2600, carCategory: 'redCar', numberPlate: '9UEGVB', gasValue: 2, exhaust: [  ]} , { x: 300, y: 0, kmsTravelled: 3000, carCategory: 'whiteCar', numberPlate: '5R3QPL', gasValue: 2, exhaust: [  ]} , { x: 300, y: 0, kmsTravelled: 3400, carCategory: 'greenCar', numberPlate: 'DPFSDN', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 3800, carCategory: 'redCar', numberPlate: 'N6OC34', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 4200, carCategory: 'greenCar', numberPlate: '53ZFPX', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 4600, carCategory: 'blueCar', numberPlate: '3G8TZ7', gasValue: 2, exhaust: [  ]} , { x: 300, y: 0, kmsTravelled: 5000, carCategory: 'redCar', numberPlate: 'E8ZPJE', gasValue: 2, exhaust: [  ]} , { x: 300, y: 0, kmsTravelled: 5400, carCategory: 'greenCar', numberPlate: '1QO68I', gasValue: 2, exhaust: [  ]} , { x: 300, y: 0, kmsTravelled: 5800, carCategory: 'blueCar', numberPlate: 'ZV62N3', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 6200, carCategory: 'whiteCar', numberPlate: 'M7X7C2', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 6600, carCategory: 'redCar', numberPlate: '6HV3NL', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 7000, carCategory: 'blueCar', numberPlate: '4SXLM1', gasValue: 2, exhaust: [  ]} , { x: 500, y: 0, kmsTravelled: 7400, carCategory: 'blueCar', numberPlate: 'BBUILG', gasValue: 2, exhaust: [  ]} 
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
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_Position_a = 300;
	Lane_Position_b = 500;

	sleuthPICar = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		kmsTravelled: 0,
		gasValue: 3,
		rumbleValue: 0,
		carCategory: 'detective',
		numberPlate: '5L3UTH',
		apprehendingSuspect: false,
		tailingSuspect: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(suspect)
	{
		if(suspect.arrested)
		{
			fill(255);

			text("suspect arrested!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!sleuthPICar.tailingSuspect&& !sleuthPICar.apprehendingSuspect)
	{
		Drive_Car();
		for(var i = 0; i < vehicle_data.length; i++)
		{
var b2b = Vehicle_Infront(sleuthPICar, vehicle_data[i]);
			if(b2b)Move_Lanes(sleuthPICar);
		}
		var a = Identify_Suspect();
		if(a != false)suspect = a;
		if(suspect)sleuthPICar.tailingSuspect = true;
	}
	else if(!sleuthPICar.apprehendingSuspect)
	{
		Following_Suspect();
		Drive_Car();	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(suspect)
	{
		if(!suspect.arrested)
		{
			suspect.gasValue = 5;
			for(var i = 0; i < vehicle_data.length; i++)
			{
				var b2b = Vehicle_Infront(suspect, vehicle_data[i]);
				if(b2b)
				{
					if(b2b.numberPlate != suspect.numberPlate)
					{
						Move_Lanes(suspect);
					}
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehicle_data.length; i++)
	{
		vehicle_data[i].kmsTravelled += vehicle_data[i].gasValue;
		vehicle_data[i].y = sleuthPICar.y - vehicle_data[i].kmsTravelled + sleuthPICar.kmsTravelled;

		if(suspect)
		{
			if(suspect.arrested)
			{
				if(vehicle_data[i].x==sleuthPICar.x)
				{
					if(vehicle_data[i].kmsTravelled<sleuthPICar.kmsTravelled)
					{
						if(vehicle_data[i].kmsTravelled-sleuthPICar.kmsTravelled < 200)
						{
							Move_Lanes(vehicle_data[i]);
						}
					}
				}
			}
		}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthPICar.kmsTravelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthPICar.kmsTravelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(sleuthPICar);
	image
	(
		carImages["detective"],
		sleuthPICar.x - carImages["detective"].width/2 + random(-sleuthPICar.rumbleValue, sleuthPICar.rumbleValue),
		sleuthPICar.y + random(-sleuthPICar.rumbleValue, sleuthPICar.rumbleValue)
	);

	//draw all other cars

	for(var i = 0; i < vehicle_data.length; i ++)
	{
		if(vehicle_data[i].y < height && vehicle_data[i].y > -height/2)
		{
			image(
			carImages[vehicle_data[i].carCategory],
			vehicle_data[i].x - carImages[vehicle_data[i].carCategory].width/2,
			vehicle_data[i].y
			);
			Turnover_Car_engine(vehicle_data[i]);

			drawExhaust(vehicle_data[i]);
		}
	}

}

function Turnover_Car_engine(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.carCategory].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gasValue/3);
		if(car.carCategory != "detective")car.exhaust[i].y += (sleuthPICar.gasValue - car.gasValue);
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
