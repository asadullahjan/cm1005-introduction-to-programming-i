/*
Officer: 6012708
CaseNum: 601-2-36045523-6012708

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, YellowGreen stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, MidnightBlue fill triangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 42 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke
- rect() NB. Draw each rectangle with the point at its center.

- fill
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var MurdererData_locX = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var MurdererData_locY = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var CrimeData = {
	pos_x: [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456],
	pos_y: [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770],
	victim_: ['JACQUELINE DURANTS', 'TU DAVISWOOD', 'DARBY MYRLE', 'MALINDA GOODBURY', 'NICOLE ASHELY', 'LINETTE MOHWAWK', 'RANDEE CROME', 'JULIANA ADVERSANE', 'LESLEY MONKSFORD', 'BRAD SILVEIRA', 'JESSIA PORTOS', 'JAUNITA JOYER', 'DEEDEE PHINNEY', 'NELSON TINTLE'],
};

function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
	for(var i=0 ; i<MurdererData_locX.length;i++)
	{
		stroke(154,205,50);
		noFill();
		rect(MurdererData_locX[i]-2.5,MurdererData_locY[i]-2.5,5,5);
	}	
	for(var i = 0 ; i< CrimeData.pos_x.length;i++)
	{
		noStroke();
		fill(25,25,112);
		triangle(CrimeData.pos_x[i],CrimeData.pos_y[i]-5,
				CrimeData.pos_x[i]-5,CrimeData.pos_y[i]+5,
				CrimeData.pos_x[i]+5,CrimeData.pos_y[i]+5 )
	}
	for(var i =0 ; i<MurdererData_locX.length;i++)
	{
		for(var j =0; j<CrimeData.pos_x.length; j++)
		{
			if(dist(CrimeData.pos_x[j],CrimeData.pos_y[j],MurdererData_locX[i],MurdererData_locY[i])<42)
			{
				possibleMatches.push({ crime:{x: CrimeData.pos_x[j], y:CrimeData.pos_y[j], victimName: CrimeData.victim_[j]}, suspect:{x: MurdererData_locX[i], y:MurdererData_locY[i]} })
			}
		}
	}


	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
