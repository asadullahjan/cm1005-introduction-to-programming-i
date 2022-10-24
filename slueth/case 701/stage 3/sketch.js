/*

Officer: 6012708
CaseNum: 701-2-80093116-6012708

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from jaunita joyer. You know what to do kid.


The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They had thick black hair. I'll never forget their brown eyes. It was very dark and I could barely see, They were carrying a brown paper bag. They seemed to be between the age of 18 and 50 years old. They were wearing a yellow poncho. They brobably weigh between 58 and 77 kg. It's so hard to remember right now. I distinctly remember that they were wearing a net weave shirt, I remember thinking that was quite unusual. They were fairly tall, I think between a height of 170 and 188 cm. Can I go home now Sir? 

*/

var suspectsArray = [
	{ 
		"name": "GAYLA MOHWAWK",
		"item": "red necktie",
		"coat": "black overcoat",
		"accessory": "orange tote bag",
		"eyes": "pale",
		"age": 45,
		"height": 189,
		"weight": 85
	},
	{ 
		"name": "JULIANA ADVERSANE",
		"item": "dotted necktie",
		"coat": "red parka",
		"accessory": "plastic box",
		"eyes": "green",
		"age": 38,
		"height": 160,
		"weight": 68
	},
	{ 
		"name": "LINETTE DURANTS",
		"item": "net weave shirt",
		"coat": "yellow poncho",
		"accessory": "brown paper bag",
		"eyes": "brown",
		"age": 42,
		"height": 187,
		"weight": 69
	},
	{ 
		"name": "HANG JENI",
		"item": "orange socks",
		"coat": "green jacket",
		"accessory": "big black envelope",
		"eyes": "green",
		"age": 37,
		"height": 204,
		"weight": 72
	},
	{ 
		"name": "TAMICA ASHELY",
		"item": "purple hat",
		"coat": "black hoodie",
		"accessory": "laptop bag",
		"eyes": "blue",
		"age": 47,
		"height": 179,
		"weight": 54
	},
	{ 
		"name": "JESSIA MONKSFORD",
		"item": "fur vest",
		"coat": "white fur coat",
		"accessory": "glass bottle",
		"eyes": "black",
		"age": 36,
		"height": 171,
		"weight": 68
	},
	{ 
		"name": "LIANNE DEAUVILLE",
		"item": "pair of leather trousers",
		"coat": "blue overcoat",
		"accessory": "metal briefcase",
		"eyes": "grey",
		"age": 58,
		"height": 179,
		"weight": 71
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

function matchProperties(suspectObj)
{

	var numofproperties = 0;

	if(suspectObj.eyes == 'brown'){
		numofproperties += 1;
	}
	if(suspectObj.accessory == 'brown paper bag'){
		numofproperties += 1;
	}
	if(suspectObj.age > 18 && suspectObj.age < 50){
		numofproperties += 1;
	}
	if(suspectObj.coat == 'yellow poncho' ){
		numofproperties += 1;
	}
	if(suspectObj.weight > 58 && suspectObj.weight < 77){
		numofproperties += 1;
	}
	if(suspectObj.item == 'net weave shirt'){
		numofproperties += 1;
	}
	if(suspectObj.height > 178 && suspectObj.height < 188){
		numofproperties += 1;
	}

	return numofproperties;
}
// Please create a function that takes a suspect object as parameter from the data structure below.
// Your function should return a number value indicating how many of their properties match the witness statement.
// You should use conditional statements to compare the suspect's properties to the statement.



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectsArray.length; i++){
    let matchingProperties = matchProperties(suspectsArray[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + suspectsArray[i].name, 60, 60 + i * 20);
  }
}
