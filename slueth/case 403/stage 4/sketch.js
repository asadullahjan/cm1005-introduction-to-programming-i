/*

Officer: 6012708
CaseNum: 403-3-59134454-6012708

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Crowther Road.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:



Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;

function preload() {
  img = loadImage('map.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  // draw the image
  image(img, 0, 0);

  //Write your code below here ...
  // - if Shiffman is within 140 meters from Torvald's House then alert local police by drawing a PaleVioletRed circle around it with a radius of 140 pixels.
  if (dist(mouseX, mouseY, 400, 40) < 140) {
    fill(219, 112, 147);
    ellipse(400, 40, 140 * 2);
  }
  // - if Shiffman is in Algol fish whole-salers then the neighbourhood watch must be notified by drawing a CornflowerBlue rectangle around it.
  else if (mouseX > 1646 && mouseY > 620 && mouseX < 1749 && mouseY < 700) {
    fill(100, 149, 237, 100);
    rect(1646, 618, 110, 80);
  }
  // - if Shiffman is in neither position, a global alert must be issued by drawing a Olive rectangle covering the area between Turing Place, Ada Avenue, Crowther Road and Mullenweg Street.
  else {
    fill(128, 128, 0, 100);
    rect(374, 184, 1575, 525);
  }

  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}
