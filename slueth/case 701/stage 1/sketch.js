/*

Officer: 6012708
CaseNum: 701-0-86116736-6012708

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist malinda dorcey and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.


There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. It's hard to say. The person I saw was male. It's so hard to remember right now. I distinctly remember that they were wearing a pair of leather trousers, I remember thinking that was quite unusual. I remember they had a sword tattoo. I can't remember anything else about them.

*/

var suspectList = [
	{ 
		"name": "JACQUELINE DEAUVILLE",
		"item": "purple hat",
		"tattoo": "jellyfish",
		"gender": "male"
	},
	{ 
		"name": "DEEDEE DORCEY",
		"item": "pair of leather trousers",
		"tattoo": "sword",
		"gender": "male"
	},
	{ 
		"name": "TAMICA ADVERSANE",
		"item": "orange socks",
		"tattoo": "chinese lettering",
		"gender": "male"
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

// Please create a function that takes a suspect object as parameter from the data structure below.
function matchProperties(suspectObj)
{
	if(suspectObj.item == 'pair of leather trousers' && suspectObj.tattoo == 'sword' && suspectObj.gender == 'male'){
		return true;
	}
}
// Your function should return a boolean value indicating whether or not they match the witness statement.
// You should use conditional statements to compare the suspect's properties to the statement.
// It should only return "true" if the suspect matches the description in full.

// The function is already being called in draw() but it is your job to implement it.



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    if(matchProperties(suspectList[i]) == true){
      fill(255,0,0);
      text(suspectList[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectList[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
