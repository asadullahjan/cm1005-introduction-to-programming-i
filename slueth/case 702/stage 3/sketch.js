// /*

// Officer: 6012708
// CaseNum: 702-2-98026661-6012708

// Case 702 - The case of Vanishing Vannevar
// Stage 3 - Where's Vannevar

// “All units: Vannevar’s car has been sighted. It is a white car with a licence_plate of NIMEAW. Approach with
// caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
// drive through the traffic and locate Vannevar.

// There are many possible ways of completing this task,
// but you should ONLY use the following commands and techniques:

// 	- Incrementing and assiging variables
// 	- Maths function such as random, min, abs, and constrain
// 	- Conditional statements
// 	- Traversing arrays with for loops
// 	- calling functions and returning values

// HINT: make sure you take a look at the initialisation of detective_car and the cars in
// cars_list to understand their properties.

// */

// ///////////////////////// HELPER FUNCTIONS /////////////////////

// function driveVehicle()
// {
// 	detective_car.dist_amount += detective_car.accel_amt;
// 	detective_car.engineRumble_amount += random(-0.09,0.09);
// 	detective_car.engineRumble_amount = constrain(detective_car.engineRumble_amount,0.1,1.19);
// 	turnCar_motor(detective_car);
// 	/*
// 	This function should do the following: 
// 	 - increment detective_car's dist_amount property by its accel_amt property 
// 	 - add a random amount between -0.09 and 0.09 to detective_car's engineRumble_amount property
// 	 - use the constrain function to constrain detective_car's engineRumble_amount property to values between 0.1 and 1.19
// 	 - call the turnCar_motor function passing detective_car as an argument
// 	*/
// }


// function changeLanes(car_obj)
// {
// 	if(car_obj.x_coord == LaneCoordinate_b)
// 	{
// 		car_obj.x_coord = LaneCoordinate_a;
// 	}
// 	else
// 	{
// 		car_obj.x_coord = LaneCoordinate_b;
// 	}
// 	/*
// 	This function should do the following: 
// 	 - move car_obj from one lane to the other.
// 	 - do the move in a single step without any extra animation.
// 	 - use LaneCoordinate_a and LaneCoordinate_b to effect the change.
// 	 hint: You will need to modify the x_coord property of car_obj.
// 	*/
// }


// function searchVehicleAhead( vehicle )
// {
// 	for(var i = 0; i < cars_list.length; i++)
// 	{
// 		if(vehicle.x_coord == cars_list[i].x_coord && 
// 			cars_list[i].dist_amount-vehicle.dist_amount <= 200 &&
// 			 cars_list[i].dist_amount>vehicle.dist_amount &&
// 			  cars_list[i].licence_plate != vehicle.licence_plate)
// 		{
// 			return cars_list[i].licence_plate;
// 		}else
// 		{
// 			false;
// 		}
// 	}
// 	/*
// 	This function should do the following: 
// 	 - determine if vehicle is in the same lane and less than 200px behind any of the cars in cars_list.
// 	 - do this by traversing cars_list and comparing each car's dist_amount property to that of vehicle.
// 	 - use the licence_plate property of each car to ignore cars that match vehicle.
// 	 - if you find a car that matches these requirements then return the licence_plate property for the car. Otherwise return false.
// 	*/
// }


// function carIsAtSide( carObj_a, carObj_b )
// {
// 	if(abs(carObj_a.dist_amount - carObj_b.dist_amount) < 25 &&
// 	 carObj_a.x_coord != carObj_b.x_coord)
// 	{
// 		return carObj_b.licence_plate;
// 	}
// 	/*
// 	This function should do the following: 
// 	 - determine if carObj_a is parallel with carObj_b.
// 	 - if carObj_a is found to be parallel to carObj_b then return the licence_plateproperty of carObj_b.
// 	 - cars are considered parallel if the absolute difference between their dist_amount properties is less than 25 px and they have non-matching x_coord properties	*/
// }


// function identifySuspect()
// {
// 	for(var i = 0 ;i<cars_list.length;i++)
// 	{
// 		if(carIsAtSide(detective_car,cars_list[i]))
// 		{ 
// 			if(cars_list[i].licence_plate == "NIMEAW")
// 			{
// 				suspect = cars_list[i];
// 			}
// 		}
// 	}
// 	/*
// 	This function should do the following: 
// 	 - Check cars passing parallel to detective_car to see if they match the licence_plate property in the suspect description.
// 	 - it does this by traversing cars_list and calling carIsAtSide for each car
// .	 - if a positive result is returned then the licence_plate property of the found car is then checked against the suspect description.
// 	 - if a match is found then the car in question is assigned to the global variable suspect.
// 	*/
// }


// //////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

// var detective_car;

// var roadWidth;
// var roadLeftEdge;
// var LaneCoordinate_a;
// var LaneCoordinate_b;
// var carImages = {};
// var suspect;

// var cars_list = [
// { x_coord: 300, y_coord: 0, dist_amount: -200, car_classification: 'blueCar', licence_plate: 'JH9693', accel_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_amount: 200, car_classification: 'greenCar', licence_plate: 'GSQTCM', accel_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_amount: 600, car_classification: 'blueCar', licence_plate: 'XKLT92', accel_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_amount: 1000, car_classification: 'whiteCar', licence_plate: 'F8RE2F', accel_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_amount: 1400, car_classification: 'greenCar', licence_plate: 'V177H2', accel_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_amount: 1800, car_classification: 'redCar', licence_plate: 'YCUTPO', accel_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_amount: 2200, car_classification: 'greenCar', licence_plate: 'IEWI1B', accel_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_amount: 2600, car_classification: 'whiteCar', licence_plate: 'NIMEAW', accel_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_amount: 3000, car_classification: 'blueCar', licence_plate: '4SVY0M', accel_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_amount: 3400, car_classification: 'whiteCar', licence_plate: 'I1UUC9', accel_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_amount: 3800, car_classification: 'blueCar', licence_plate: 'IR5VDT', accel_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_amount: 4200, car_classification: 'greenCar', licence_plate: 'WJWR99', accel_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_amount: 4600, car_classification: 'redCar', licence_plate: 'L6Y7Y0', accel_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_amount: 5000, car_classification: 'blueCar', licence_plate: 'N6FCGK', accel_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_amount: 5400, car_classification: 'greenCar', licence_plate: 'SWMORP', accel_amt: 2, exhaust: [  ]} , { x_coord: 300, y_coord: 0, dist_amount: 5800, car_classification: 'blueCar', licence_plate: 'IJX5E2', accel_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_amount: 6200, car_classification: 'greenCar', licence_plate: 'WSCEEM', accel_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_amount: 6600, car_classification: 'whiteCar', licence_plate: 'C5Z313', accel_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_amount: 7000, car_classification: 'whiteCar', licence_plate: 'GTK4YK', accel_amt: 2, exhaust: [  ]} , { x_coord: 500, y_coord: 0, dist_amount: 7400, car_classification: 'blueCar', licence_plate: 'JPL95O', accel_amt: 2, exhaust: [  ]} 
// ];



// function preload()
// {

// 	var carTypes = [
// 		"detective",
// 		"redCar",
// 		"greenCar",
// 		"blueCar",
// 		"whiteCar",
// 	];


// 	for(var i = 0; i < carTypes.length; i++)
// 	{
// 		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
// 	}
// }

// function setup()
// {
// 	createCanvas(800,800);
// 	textSize(30);
// 	textAlign(CENTER);

// 	roadWidth = 400;
// 	roadLeftEdge = 200;
// 	LaneCoordinate_a = 300;
// 	LaneCoordinate_b = 500;

// 	detective_car = 
// 	{
// 		x_coord: roadLeftEdge + roadWidth/4,
// 		y_coord: 550,
// 		dist_amount: 0,
// 		accel_amt: 3,
// 		engineRumble_amount: 0,
// 		car_classification: 'detective',
// 		licence_plate: '5L3UTH',
// 		exhaust: []
// 	}


// }



// function draw()
// {
// 	background(0);



// 	drawRoad();
// 	drawCars();

// 	if(suspect)
// 	{
// 		fill(255);

// 		text("suspect found !", width/2, height/2);
// 		return;
// 	}

// 	////////////////////// HANDLE DETECTIVE /////////////////////////

// 	driveVehicle();
// 	var b2b = searchVehicleAhead( detective_car );
// 	if(b2b)changeLanes(detective_car);
// 	identifySuspect();


// 	//////////////////////HANDLE THE OTHER CARS//////////////////////

// 	for(var i = 0; i < cars_list.length; i++)
// 	{
// 		cars_list[i].dist_amount += cars_list[i].accel_amt;
// 		cars_list[i].y_coord = detective_car.y_coord - cars_list[i].dist_amount + detective_car.dist_amount;
// 	}

// }

// /////////////////////////DRAWING FUNCTIONS////////////////////////

// function drawRoad()
// {
// 	stroke(100);
// 	fill(50);
// 	rect(roadLeftEdge,0,roadWidth,800);
// 	stroke(255);

// 	for(var i = -1; i < 20; i++)
// 	{
// 		line(
// 		roadLeftEdge + roadWidth/2 , i * 100 + (detective_car.dist_amount%100),
// 		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (detective_car.dist_amount%100)
// 		);
// 	}
// }

// function drawCars()
// {
// 	//draw the detective car

// 	image
// 	drawExhaust(detective_car);
// 	image
// 	(
// 		carImages["detective"],
// 		detective_car.x_coord - carImages["detective"].width/2 + random(-detective_car.engineRumble_amount, detective_car.engineRumble_amount),
// 		detective_car.y_coord + random(-detective_car.engineRumble_amount, detective_car.engineRumble_amount)
// 	);

// 	//draw all other cars

// 	for(var i = 0; i < cars_list.length; i ++)
// 	{
// 		if(cars_list[i].y_coord < height && cars_list[i].y_coord > -height/2)
// 		{
// 			image(
// 			carImages[cars_list[i].car_classification],
// 			cars_list[i].x_coord - carImages[cars_list[i].car_classification].width/2,
// 			cars_list[i].y_coord
// 			);
// 			turnCar_motor(cars_list[i]);

// 			drawExhaust(cars_list[i]);
// 		}
// 	}

// }

// function turnCar_motor(car)
// {

// 	car.exhaust.push({size: 2, x: car.x_coord, y: car.y_coord + carImages[car.car_classification].height});

// 	for(var i = car.exhaust.length -1; i >= 0 ; i--)
// 	{

// 		car.exhaust[i].y  += max(0.75, car.accel_amt/3);
// 		if(car.car_classification != "detective")car.exhaust[i].y += (detective_car.accel_amt - car.accel_amt);
// 		car.exhaust[i].x += random(-1,1);
// 		car.exhaust[i].size += 0.5;

// 		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
// 		{
// 			car.exhaust.splice(i,1);
// 		}
// 	}
// }


// function drawExhaust(car)
// {
// 		noStroke();
// 		for(var i = 0; i < car.exhaust.length; i++)
// 		{
// 				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
// 				fill(125,alpha);
// 				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

// 		}
// }

/*
​
Officer: 2273109
CaseNum: 702-2-65961276-2273109
​
Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar
​
“All units: Vannevar’s car has been sighted. It is a red car with a number_plate of Q7GYSP. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.
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
HINT: make sure you take a look at the initialisation of sleuth_vehicleObject and the cars in
carObjectsData to understand their properties.
​
*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveVehicle()
{
	/*
	This function should do the following: 
	 - increment sleuth_vehicleObject's dist_amt property by its gas_val property 
	 - add a random amount between -0.08 and 0.08 to sleuth_vehicleObject's engineRumble_value property
	 - use the constrain function to constrain sleuth_vehicleObject's engineRumble_value property to values between 0.07 and 1.06
	 - call the cycleCarMotor function passing sleuth_vehicleObject as an argument
	*/
    
    sleuth_vehicleObject.dist_amt += sleuth_vehicleObject.gas_val;
    sleuth_vehicleObject.engineRumble_value += random(-0.08, 0.08);
    sleuth_vehicleObject.engineRumble_value = constrain(sleuth_vehicleObject.engineRumble_value, 0.07, 1.06);
    cycleCarMotor(sleuth_vehicleObject);
}


function swapLanes(car)
{
    if(car.coord_x == lane_coordA)
    {
        car.coord_x = lane_coordB;    
    }
    else if (car.coord_x == lane_coordB)
    {
        car.coord_x = lane_coordA;    
    } 
}


function checkVehicleAhead( targetVehicle )
{
	/*
	This function should do the following: 
	 - determine if targetVehicle is in the same lane and less than 200px behind any of the cars in carObjectsData.
	 - do this by traversing carObjectsData and comparing each car's dist_amt property to that of targetVehicle.
	 - use the number_plate property of each car to ignore cars that match targetVehicle.
	 - if you find a car that matches these requirements then return the number_plate property for the car. Otherwise return false.
	*/
    
    
    for (var i = 0; i < carObjectsData.length; i++) 
    {
        if((targetVehicle.coord_x == carObjectsData[i].coord_x) && 
            (carObjectsData[i].dist_amt > targetVehicle.dist_amt) &&
            (carObjectsData[i].dist_amt - targetVehicle.dist_amt) < 200)
        { 
            if(carObjectsData[i].number_plate == targetVehicle.number_plate)
                    {
                        continue;    
                    } 
                
            return carObjectsData[i].number_plate;
        }
    }
    return false;
}


function checkVehicleIsBySide( targetVehicle )
{
	/*
	This function should do the following: 
	 - traverse carObjectsData and determine if any of the cars are parallel with targetVehicle.
	 - if a car is found to be parallel to targetVehicle then return the index of that car object.
	 - cars are considered parallel if the absolute difference between their dist_amt properties is less than 25 px and they have non-matching coord_x properties	*/
    
    for(var i = 0; i < carObjectsData.length; i++)
    {
        if(abs(carObjectsData[i].dist_amt - targetVehicle.dist_amt) < 25 &&
          carObjectsData[i].coord_x != targetVehicle.coord_x)
            {
                return i;
            }
    }
    
}


function detectSuspect()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to sleuth_vehicleObject to see if they match the number_plate property in the suspect description.
	 - it does this by calling checkVehicleIsBySide.
	 - if a positive result is returned then the number_plate property of the found car is then checked against the suspect description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
    // console.log(checkVehicleIsBySide(sleuth_vehicleObject));  
	var index = checkVehicleIsBySide(sleuth_vehicleObject);
    if(checkVehicleIsBySide(sleuth_vehicleObject))
    {
		console.log(carObjectsData[index].number_plate);
		if(carObjectsData[index].number_plate == "Q7GYSP")
			{
				return carObjectsData[index];
			}
    }
    
    return false;
    
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuth_vehicleObject;

var roadWidth;
var roadLeftEdge;
var lane_coordA;
var lane_coordB;
var carImages = {};
var suspect;

var carObjectsData = [
{ coord_x: 500, coord_y: 0, dist_amt: -200, car_variety: 'whiteCar', number_plate: '19R3M2', gas_val: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amt: 200, car_variety: 'whiteCar', number_plate: 'WXQCC0', gas_val: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amt: 600, car_variety: 'greenCar', number_plate: 'FRZUD7', gas_val: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amt: 1000, car_variety: 'greenCar', number_plate: 'R3IW2Q', gas_val: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amt: 1400, car_variety: 'redCar', number_plate: '2YNVCU', gas_val: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amt: 1800, car_variety: 'greenCar', number_plate: '72H24R', gas_val: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amt: 2200, car_variety: 'redCar', number_plate: 'EABESO', gas_val: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amt: 2600, car_variety: 'blueCar', number_plate: '16L0WG', gas_val: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amt: 3000, car_variety: 'whiteCar', number_plate: 'Y70MVW', gas_val: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amt: 3400, car_variety: 'redCar', number_plate: 'Q7GYSP', gas_val: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amt: 3800, car_variety: 'greenCar', number_plate: 'JMS3Y0', gas_val: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amt: 4200, car_variety: 'redCar', number_plate: '9LSV2A', gas_val: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amt: 4600, car_variety: 'greenCar', number_plate: '2XN5U6', gas_val: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amt: 5000, car_variety: 'blueCar', number_plate: 'EOF9TQ', gas_val: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amt: 5400, car_variety: 'whiteCar', number_plate: '58HYRI', gas_val: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amt: 5800, car_variety: 'redCar', number_plate: 'EZWNG7', gas_val: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amt: 6200, car_variety: 'blueCar', number_plate: 'JG3YNN', gas_val: 2, exhaust: [  ]} , { coord_x: 300, coord_y: 0, dist_amt: 6600, car_variety: 'blueCar', number_plate: 'DR4U5Z', gas_val: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amt: 7000, car_variety: 'greenCar', number_plate: 'TEZN2W', gas_val: 2, exhaust: [  ]} , { coord_x: 500, coord_y: 0, dist_amt: 7400, car_variety: 'redCar', number_plate: 'A95OQJ', gas_val: 2, exhaust: [  ]} 
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
	lane_coordA = 300;
	lane_coordB = 500;

	sleuth_vehicleObject = 
	{
		coord_x: roadLeftEdge + roadWidth/4,
		coord_y: 550,
		dist_amt: 0,
		gas_val: 3,
		engineRumble_value: 0,
		car_variety: 'detective',
		number_plate: '5L3UTH',
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
		fill(255);

		text("suspect found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	moveVehicle();
	var b2b = checkVehicleAhead( sleuth_vehicleObject );
	if(b2b)swapLanes(sleuth_vehicleObject);
	var a = detectSuspect();
	if(a != false)suspect = a;


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObjectsData.length; i++)
	{
		carObjectsData[i].dist_amt += carObjectsData[i].gas_val;
		carObjectsData[i].coord_y = sleuth_vehicleObject.coord_y - carObjectsData[i].dist_amt + sleuth_vehicleObject.dist_amt;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuth_vehicleObject.dist_amt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuth_vehicleObject.dist_amt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuth_vehicleObject);
	image
	(
		carImages["detective"],
		sleuth_vehicleObject.coord_x - carImages["detective"].width/2 + random(-sleuth_vehicleObject.engineRumble_value, sleuth_vehicleObject.engineRumble_value),
		sleuth_vehicleObject.coord_y + random(-sleuth_vehicleObject.engineRumble_value, sleuth_vehicleObject.engineRumble_value)
	);

	//draw all other cars

	for(var i = 0; i < carObjectsData.length; i ++)
	{
		if(carObjectsData[i].coord_y < height && carObjectsData[i].coord_y > -height/2)
		{
			image(
			carImages[carObjectsData[i].car_variety],
			carObjectsData[i].coord_x - carImages[carObjectsData[i].car_variety].width/2,
			carObjectsData[i].coord_y
			);
			cycleCarMotor(carObjectsData[i]);

			drawExhaust(carObjectsData[i]);
		}
	}

}

function cycleCarMotor(car)
{

	car.exhaust.push({size: 2, x: car.coord_x, y: car.coord_y + carImages[car.car_variety].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_val/3);
		if(car.car_variety != "detective")car.exhaust[i].y += (sleuth_vehicleObject.gas_val - car.gas_val);
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
