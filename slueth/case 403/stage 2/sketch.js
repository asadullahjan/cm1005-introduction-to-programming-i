/*

Officer: 6012708
CaseNum: 403-1-39306348-6012708

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Courthouse.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 223 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 223 pixels of Courthouse - draw a PaleVioletRed ellipse with a radius of 223 around it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  ellipse()
  dist()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    if(dist(mouseX,mouseY,1539,481) < 223){
    fill(219, 112, 147);
    ellipse(1539,481,233*2);
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
