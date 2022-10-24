/*
Officer: 6012708
CaseNum: 601-3-88072167-6012708

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.



Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- stroke
- ellipse()

- fill
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Killer_Log = {
	Coordinate_X: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	Coordinate_Y: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	recordedDay: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var Murderscene_Data_Pos_X = [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817];
var Murderscene_Data_Pos_Y = [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474];
var Murderscene_Data_date = [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18];
var Murderscene_Data_Murdered_ = ['MAJORIE JENI', 'GAYLA WILLMAR', 'MALINDA GOODBURY', 'DARBY MYRLE', 'PIERRE DORCEY', 'LESLEY MONKSFORD', 'NELSON TINTLE', 'DEEDEE PHINNEY', 'JESSIA PORTOS', 'JULIANA ADVERSANE', 'JESUS FORSLIN', 'KITTY THAXTER', 'JAUNITA JOYER', 'BRIDGET BROADVIEW', 'HANG NIEMELA'];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here

	// 	In the setup function, use a for loop to traverse the sightings, marking all of the
	//  locations on the map
	// 	where she was last seen. Do this by drawing small, Teal stroke ellipses at each location.
	for(var i=0; i<Killer_Log.Coordinate_X.length;i++)
	{
		stroke(0,128,128);
		noFill();
		ellipse(Killer_Log.Coordinate_X[i],Killer_Log.Coordinate_Y[i],5);
	}

	// 	In addition, we've assembled a list of recent thefts in the area. Using another for loop
	//  to traverse the
	// 	recent crime records, you should mark those locations on the map. Do this by drawing small,
	// 	Chartreuse fill rectangles centered over each location.
	for(var i =0 ;i<Murderscene_Data_Pos_X.length;i++)
	{
		fill(127,255,0);
		noStroke();
		rect(Murderscene_Data_Pos_X[i],Murderscene_Data_Pos_Y[i],5,5);
	}

	// 	This time we will catch Fry by comparing both distance from the crimes and dates of
	//  sightings.
	// 	If she was within less than 87 pixels of any of the crimes within no more than 3 days
	//  of their occurrence then the details
	// 	should be pushed to the list of possible matches with the following format.

	//  { suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

	for(var i = 0 ; i<Killer_Log.Coordinate_X.length ; i++)
	{
		for(var j=0 ; j<Murderscene_Data_Pos_X.length ; j++)
		{
			if(dist(Killer_Log.Coordinate_X[i],Killer_Log.Coordinate_Y[i],
					Murderscene_Data_Pos_X[j],Murderscene_Data_Pos_Y[j])<87 
			   && abs(Killer_Log.recordedDay[i]-Murderscene_Data_date[j]) <= 3)
			{
				possibleMatches.push({suspect_x: Killer_Log.Coordinate_X[i],
					 				  suspect_y: Killer_Log.Coordinate_Y[i] ,
					 				  crime_x: Murderscene_Data_Pos_X[j],
									  crime_y: Murderscene_Data_Pos_Y[j],
									  victimName: Murderscene_Data_Murdered_[j] })
			}
		}
	}


	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
