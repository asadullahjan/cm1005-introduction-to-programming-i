/*
The case of the Python Syndicate
Stage 4

Officer: 6012708
CaseNum: 301-3-43855843-6012708

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var pawel_karpinski_object;
var bones_karpinski_object;
var lina_lovelace_object;
var robbie_kray_object;
var rocky_kray_object;
var countess_hamilton_object;


//declare your new objects below


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	lina_lovelace_image = loadImage("lina.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	countess_hamilton_image = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	
	pawel_karpinski_object= {
		x: 115,
		y: 40,
		image: pawel_karpinski_image
	};
	bones_karpinski_object= {
		x: 408,
		y: 40,
		image: bones_karpinski_image
	};
	lina_lovelace_object = {
		x: 701,
		y: 40,
		image: lina_lovelace_image
	};
	robbie_kray_object= {
		x: 115,
		y: 309,
		image: robbie_kray_image
	};
	rocky_kray_object= {
		x: 408,
		y: 309,
		image: rocky_kray_image
	};
	countess_hamilton_object= {
		x: 701,
		y: 309,
		image: countess_hamilton_image
	};



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_object.image, pawel_karpinski_object.x, pawel_karpinski_object.y);
	image(bones_karpinski_object.image, bones_karpinski_object.x, bones_karpinski_object.y);
	image(lina_lovelace_object.image, lina_lovelace_object.x, lina_lovelace_object.y);
	image(robbie_kray_object.image, robbie_kray_object.x, robbie_kray_object.y);
	image(rocky_kray_object.image, rocky_kray_object.x, rocky_kray_object.y);
	image(countess_hamilton_object.image, countess_hamilton_object.x, countess_hamilton_object.y);


}