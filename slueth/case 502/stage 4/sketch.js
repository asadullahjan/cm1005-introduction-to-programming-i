/*

Officer: 6012708
CaseNum: 502-3-93062556-6012708

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_Censored = [
{
	Token_0: ["charge", "mend", "rejoice", "tug"], 
	Token_1: ["tug", "stuff", "tug", "consider"], 
	Token_2: ["plug", "succeed", "protect", "$200,000"]
},
{
	Token_0: ["fence", "clip", "mend", "clip"], 
	Token_1: ["clip", "bake", "succeed", "smile"], 
	Token_2: ["mend", "radiate", "fence", "rejoice"]
},
{
	Token_0: ["mend", "tug", "rejoice", "rejoice"], 
	Token_1: ["bake", "succeed", "consider", "charge"], 
	Token_2: ["meddle", "charge", "succeed", "sail"]
},
{
	Token_0: ["charge", "stuff", "protect", "Edsger"], 
	Token_1: ["play", "tug", "meddle", "sail"], 
	Token_2: ["play", "mend", "bake", "sneeze"]
},
{
	Token_0: ["mend", "protect", "charge", "ALGOL fish wholesalers"], 
	Token_1: ["succeed", "succeed", "mend", "hurry"], 
	Token_2: ["meddle", "charge", "clip", "consider"]
}];

var B_Censored = [
{
	Token_0: ["rejoice", "start", "stuff", "sail"], 
	Token_1: ["fence", "sneeze", "clip", "radiate"], 
	Token_2: ["sneeze", "plug", "mend", "mend"]
},
{
	Token_0: ["bake", "you", "fence", "consider"], 
	Token_1: ["consider", "clip", "sail", "hurry"], 
	Token_2: ["play", "mend", "charge", "smile"]
},
{
	Token_0: ["syndicate", "smile", "sneeze", "plug"], 
	Token_1: ["sail", "rejoice", "donation", "mend"], 
	Token_2: ["meddle", "tug", "Governor Zuckerberg", "ALGOL"]
},
{
	Token_0: ["play", "fence", "fence", "fence"], 
	Token_1: ["sail", "protect", "consider", "plug"], 
	Token_2: ["succeed", "development", "consider", "bake"]
},
{
	Token_0: ["hurry", "rejoice", "smile", "fence"], 
	Token_1: ["sail", "fence", "radiate", "mend"], 
	Token_2: ["protect", "COBOL", "radiate", "tug"]
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText = "My dearest "+A_Censored[3].Token_0[3]+", I have just received your very generous "+B_Censored[2].Token_1[2]+" of "+A_Censored[0].Token_2[3]+". Thank you. This will be invaluable to our campaign. "+B_Censored[2].Token_2[3]+" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+B_Censored[1].Token_0[1]+" or "+A_Censored[4].Token_0[3]+" to the "+B_Censored[2].Token_0[0]+". Your new "+B_Censored[3].Token_2[1]+" at the "+B_Censored[4].Token_2[1]+" can now proceed without impediment. Yours sincerely, "+B_Censored[2].Token_2[2]+"";

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
