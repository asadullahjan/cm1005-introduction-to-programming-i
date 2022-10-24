/*

Officer: 6012708
CaseNum: 701-1-10278424-6012708

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.


The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:


*/

var usualSuspects = [
	{ 
		"name": "TAMICA JACQUELIN",
		"accessory": "orange tote bag",
		"gender": "male",
		"expression": "blank",
		"height": 172,
		"weight": 71
	},
	{ 
		"name": "NELSON WARMAN",
		"accessory": "black duffle bag",
		"gender": "male",
		"expression": "nerveous",
		"height": 155,
		"weight": 64
	},
	{ 
		"name": "ERMELINDA PHINNEY",
		"accessory": "big black envelope",
		"gender": "female",
		"expression": "angry",
		"height": 175,
		"weight": 100
	},
	{ 
		"name": "LAKESHA MOHWAWK",
		"accessory": "laptop bag",
		"gender": "male",
		"expression": "confused",
		"height": 190,
		"weight": 69
	},
	{ 
		"name": "JACQUELINE DEAUVILLE",
		"accessory": "red backpack",
		"gender": "male",
		"expression": "nerveous",
		"height": 192,
		"weight": 92
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function checkSuspect(suspectObj)
{
	// It all started when I was exiting the store. 
	// That's when I noticed them. I think they were
	//  more than 167 cm tall. Their expression seemed blank.
	//  They were carrying a orange tote bag. The person
	//  I saw was male. It was so scary! They were quite big,
	//  they probably weigh more than 69 Kg. I'm not quite sure.
	//  They wore thin metallic glasses. That's all I can 
	// remember about them. 

	if
	(
		suspectObj.height > 167 &&
		suspectObj.accessory == 'orange tote bag' &&
		suspectObj.gender == 'male'&&
		suspectObj.weight > 69 && 
		suspectObj.expression == 'blank'
	)
	{
		return true;
	}	
}
// Please create a function that takes a suspect object as parameter from the data structure below.
// Your function should return a boolean value indicating whether or not they match the witness statement.
// You should use conditional statements to compare the suspect's properties to the statement.
// It should only return "true" if the suspect matches the description in full.


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    if(checkSuspect(usualSuspects[i]) == true){
      fill(255,0,0);
      text(usualSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(usualSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
