/*

Officer: 6012708
CaseNum: 502-2-27637183-6012708

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_Paper = {
	Redacted_0: [ "consider", "clip", "play"], 
	Redacted_1: [ "hurry", "Edsger", "$200,000"], 
	Redacted_2: [ "bake", "a donation", "play"], 
	Redacted_3: [ "plug", "stuff", "ALGOL"], 
	Redacted_4: [ "play", "hit", "play"], 
	Redacted_5: [ "charge", "smile", "sail"], 
	Redacted_6: [ "meddle", "succeed", "sneeze"], 
	Redacted_7: [ "stuff", "campaign", "radiate"], 
	Redacted_8: [ "hurry", "hurry", "fence"], 
	Redacted_9: [ "play", "stuff", "clip"]
};

var B_Paper = {
	Redacted_0: [ "mend", "plug", "consider"], 
	Redacted_1: [ "sneeze", "charge", "Hopper"], 
	Redacted_2: [ "play", "consider", "mend"], 
	Redacted_3: [ "syndicate", "succeed", "smile"], 
	Redacted_4: [ "fence", "bake", "fence"], 
	Redacted_5: [ "fence", "stuff", "protect"], 
	Redacted_6: [ "start", "consider", "Governor Zuckerberg"], 
	Redacted_7: [ "mend", "play", "charge"], 
	Redacted_8: [ "bake", "stuff", "stuff"], 
	Redacted_9: [ "hurry", "protect", "protect"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText = "Dear "+B_Paper.Redacted_6[2]+", I am sure that something could be worked out in terms of "+A_Paper.Redacted_2[1]+" for your "+A_Paper.Redacted_7[1]+". How does "+A_Paper.Redacted_1[2]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+B_Paper.Redacted_1[2]+" needs to be out of the picture. She’s caused enough trouble. Get the "+B_Paper.Redacted_3[0]+" to organise the "+A_Paper.Redacted_4[1]+" but I’d prefer it you don’t mention me or "+A_Paper.Redacted_3[2]+". I owe them enough favours already. Your old friend, "+A_Paper.Redacted_1[1]+"";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
