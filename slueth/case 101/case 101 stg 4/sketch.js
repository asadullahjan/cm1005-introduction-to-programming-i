/*

Officer: 6012708
CaseNum: 101-3-12569739-6012708

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Tomato filled rectangle with a Forest Green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Light Sea Green filled
rectangle with a Medium Orchid outline around him.

Identify the man reading the newspaper by drawing a Slate Blue filled rectangle
with a Dark Magenta outline around him.

Identify the woman with the dog by drawing a Medium Slate Blue filled rectangle with a
Medium Turquoise outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	fill(255, 99, 71,100);
	stroke(34, 139, 34);
	rect(495,265,135,265);

	fill(32, 178, 170,100);
	stroke(186, 85, 211);
	rect(800,510,330,450);

	fill(106, 90, 205,100);
	stroke(139,0,139);
	rect(1280,340,217,425);

	fill(123, 104, 238,100);
	stroke(72,209,204);
	rect(115,255,130,280);
}
