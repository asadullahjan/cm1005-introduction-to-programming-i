/*
Officer: 6012708
CaseNum: 601-1-81224278-6012708

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing Chartreuse stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, SandyBrown stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- stroke()
- beginShape(), endShape(), vertex()

- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

//Sightings of Casey Fry.

var caseyLogbook_coordinate_x = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var caseyLogbook_coordinate_y = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var incidentLogbook = [ 
  { Position_X : 403, Position_Y : 401},
  { Position_X : 402, Position_Y : 360},
  { Position_X : 427, Position_Y : 403},
  { Position_X : 646, Position_Y : 284},
  { Position_X : 639, Position_Y : 264},
  { Position_X : 830, Position_Y : 434},
  { Position_X : 809, Position_Y : 443},
  { Position_X : 844, Position_Y : 496},
  { Position_X : 802, Position_Y : 350},
  { Position_X : 683, Position_Y : 413},
  { Position_X : 552, Position_Y : 464},
  { Position_X : 629, Position_Y : 498},
  { Position_X : 712, Position_Y : 562},
  { Position_X : 783, Position_Y : 603},
  { Position_X : 415, Position_Y : 225},
  { Position_X : 561, Position_Y : 282},
  { Position_X : 562, Position_Y : 392},
  { Position_X : 751, Position_Y : 283},
  { Position_X : 680, Position_Y : 359},
  { Position_X : 626, Position_Y : 436},
  { Position_X : 701, Position_Y : 455},
  { Position_X : 838, Position_Y : 565},
  { Position_X : 322, Position_Y : 508},
  { Position_X : 468, Position_Y : 556},
  { Position_X : 625, Position_Y : 737} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here

  stroke(127,255,0);
  noFill();
  beginShape();
    for(var i=0 ; i < caseyLogbook_coordinate_x.length;i++)
    {
      vertex(caseyLogbook_coordinate_x[i] , caseyLogbook_coordinate_y[i]);
    }
  endShape();


  for(var i=0 ; i<incidentLogbook.length ; i++){ 
    stroke(244,164,96);
    rect(incidentLogbook[i].Position_X-2.5,incidentLogbook[i].Position_Y-2.5,5,5);
  }

}

//We are not using the draw function this time
