/*

Officer: 6012708
CaseNum: 701-3-11756998-6012708

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from bridget myrle.
All they need is for you to do the detective work.

This time you must implement two functions:

- A matchProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A findGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - function findGuilty(){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They had thin blond hair. I remember they had a facial tattoo. They were carrying a black duffle bag. Their expression seemed sad. They were fairly tall, I think between a height of 151 and 185 cm. It was so scary! It was very dark and I could barely see, They seemed to be between the age of 36 and 72 years old. I'm not quite sure. They brobably weigh between 70 and 76 kg. They wore very thick glasses. They were wearing a black hoodie. That's all I know officer. 

*/

var allSuspects = [
	{ 
		"name": "DEEDEE MOHWAWK",
		"tattoo": "dark black",
		"coat": "green army coat",
		"expression": "nerveous",
		"hair": "long white",
		"weight": 73,
		"age": 40,
		"height": 173
	},
	{ 
		"name": "LAKESHA DAVISWOOD",
		"tattoo": "facial",
		"coat": "black hoodie",
		"expression": "sad",
		"hair": "thin blond",
		"weight": 71,
		"age": 64,
		"height": 167
	},
	{ 
		"name": "JESSIA DEAUVILLE",
		"tattoo": "bull",
		"coat": "black overcoat",
		"expression": "nerveous",
		"hair": "no",
		"weight": 74,
		"age": 28,
		"height": 180
	},
	{ 
		"name": "KITTY WARMAN",
		"tattoo": "big arrow",
		"coat": "green jacket",
		"expression": "menacing",
		"hair": "shaved",
		"weight": 71,
		"age": 40,
		"height": 182
	},
	{ 
		"name": "TU WILLMAR",
		"tattoo": "jellyfish",
		"coat": "yellow poncho",
		"expression": "confused",
		"hair": "red",
		"weight": 73,
		"age": 24,
		"height": 152
	},
	{ 
		"name": "JAUNITA PORTOS",
		"tattoo": "sword",
		"coat": "blue overcoat",
		"expression": "menacing",
		"hair": "white",
		"weight": 72,
		"age": 44,
		"height": 177
	},
	{ 
		"name": "MAJORIE COURTWOOD",
		"tattoo": "dragon",
		"coat": "white fur coat",
		"expression": "angry",
		"hair": "ginger",
		"weight": 70,
		"age": 36,
		"height": 169
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

function matchProperties(suspectObj)
{
	var matchCount = 0;
	if (suspectObj.tattoo == "facial")
	{
		matchCount++;
	}
	if (suspectObj.coat == "black hoodie")
	{
		matchCount++;
	}
	if (suspectObj.expression == "sad")
	{
		matchCount++;
	}
	if (suspectObj.hair == "thin blond")
	{
		matchCount++;
	}
	if (suspectObj.weight >= 70 && suspectObj.weight <= 76)
	{
		matchCount++;
	}
	if (suspectObj.age >= 36 && suspectObj.age <= 72)
	{
		matchCount++;
	}
	if (suspectObj.height >= 151 && suspectObj.height <= 185)
	{
		matchCount++;
	}
	return matchCount;
}

// - A findGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
// otherwise - return an empty object.
function findGuilty()
{
	var guiltySuspect = {};
	var high = 0;
	for (var i = 0; i < allSuspects.length; i++)
	{
		if (matchProperties(allSuspects[i]) > high)
		{
			high = matchProperties(allSuspects[i]);
			// console.log(high);
			guiltySuspect = allSuspects[i];
			// console.log(guiltySuspect);
		}
	}
	console.log(guiltySuspect);
	return guiltySuspect;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(findGuilty().name + " is guilty!", 60, 80);
}
