/*

Officer: 6012708
CaseNum: 502-1-66448376-6012708

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var Paper_A = [
	{Word_0: "a donation", Word_1: "hurry", Word_2: "syndicate"}, 
	{Word_0: "capital", Word_1: "plug", Word_2: "smile"}, 
	{Word_0: "play", Word_1: "bake", Word_2: "stuff"}, 
	{Word_0: "start", Word_1: "consider", Word_2: "sail"}, 
	{Word_0: "consider", Word_1: "sail", Word_2: "fence"}, 
	{Word_0: "plug", Word_1: "charge", Word_2: "tug"}, 
	{Word_0: "radiate", Word_1: "Governor Zuckerberg", Word_2: "charge"}, 
	{Word_0: "sail", Word_1: "start", Word_2: "protect"}, 
	{Word_0: "consider", Word_1: "succeed", Word_2: "she has"}, 
	{Word_0: "rejoice", Word_1: "smile", Word_2: "stuff"}
];

var Paper_B = [
	{Word_0: "clip", Word_1: "charge", Word_2: "clip"}, 
	{Word_0: "radiate", Word_1: "romantic", Word_2: "tug"}, 
	{Word_0: "sneeze", Word_1: "delicate", Word_2: "bake"}, 
	{Word_0: "tug", Word_1: "sail", Word_2: "COBOL"}, 
	{Word_0: "rejoice", Word_1: "Edsger", Word_2: "radiate"}, 
	{Word_0: "sneeze", Word_1: "bake", Word_2: "sneeze"}, 
	{Word_0: "stuff", Word_1: "radiate", Word_2: "sail"}, 
	{Word_0: "mend", Word_1: "Hopper’s", Word_2: "protect"}, 
	{Word_0: "tug", Word_1: "sail", Word_2: "fence"}, 
	{Word_0: "stuff", Word_1: "hurry", Word_2: "consider"}
];

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

  missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  redactedText = "My dearest "+Paper_B[4].Word_1+", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about "+Paper_B[7].Word_1+" intervention. I suspect that "+Paper_A[8].Word_2+" a "+Paper_B[1].Word_1+" interest at the "+Paper_B[3].Word_2+". I and the "+Paper_A[0].Word_2+" appreciate your many contributions over the years. However, this is a most "+Paper_B[2].Word_1+" matter which would require significant "+Paper_A[1].Word_0+" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps "+Paper_A[0].Word_0+" to my forthcoming campaign would help. Yours sincerely, "+Paper_A[6].Word_1+"";

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
