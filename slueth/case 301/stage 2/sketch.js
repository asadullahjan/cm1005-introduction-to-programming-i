/*
The case of the Python Syndicate
Stage 2


Officer: 6012708
CaseNum: 301-1-50423088-6012708

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Cecil karpinski

- The variables for Cecil karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Cecil karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var annaKarpinskiImage;
var bonesKarpinskiImage;
var pawelKarpinskiImage;
var cecilKarpinskiImage;
var linaLovelaceImage;
var robbieKrayImage;


var cecilKarpinskiXLocation = 115;
var cecilKarpinskiYLocation = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	linaLovelaceImage = loadImage("lina.png");
	robbieKrayImage = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiImage, cecilKarpinskiXLocation, cecilKarpinskiYLocation);
	image(annaKarpinskiImage, cecilKarpinskiXLocation, cecilKarpinskiYLocation-269);                  //115 309
	image(bonesKarpinskiImage, cecilKarpinskiXLocation+293, cecilKarpinskiYLocation-269);
	image(pawelKarpinskiImage, cecilKarpinskiXLocation+586, cecilKarpinskiYLocation-269);
	image(linaLovelaceImage, cecilKarpinskiXLocation+293, cecilKarpinskiYLocation);
	image(robbieKrayImage, cecilKarpinskiXLocation+586, cecilKarpinskiYLocation);

}