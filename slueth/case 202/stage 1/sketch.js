/*

Officer: 6012708
CaseNum: 202-0-96626809-6012708

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Lime Green text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(603,563);
	textFont(letterFont);
	textSize(28);
}

function draw()
{
	background(255);

	fill(32,178,170);
	//text("Ever", 408,181);
	fill(127,255,0);
	//text("must", 353,151);
	fill(250,128,114);
	//text("sunny", 229,243);
	fill(138,43,226);
	//text("lovely", 343,278);
	fill(186,85,211);
	//text("hink", 259,211);
	fill(144,238,144);
	//text("secon", 196,308);
	fill(199,21,133);
	//text("Love", 15,394);
	//text("that", 225,118);
	fill(238,232,170);
	//text("hear", 310,118);
	fill(0,128,0);
	//text("I", 478,278);
	fill(255,215,0);
	//text("that", 285,308);
	fill(240,128,128);
	//text("am", 494,84);
	fill(240,230,140);
	//text("is", 364,84);
	//text("my", 188,243);
	fill(0,255,255);
	//text("the", 212,151);
	fill(0,0,128);
	//text("I", 319,151);
	fill(0,0,205);
	//text("like", 484,118);
	fill(50,205,50);
	text("date", 64,211);
	text("chosen", 330,181);
	text("April", 377,243);
	text("a", 153,84);
	fill(139,69,19);
	//text("my", 445,308);
	//text("I", 460,84);
	fill(34,139,34);
	//text("kisse", 125,394);
	fill(135,206,235);
	//text("make", 103,84);
	fill(153,50,204);
	//text("your", 351,211);
	fill(0,0,128);
	//text("quiet", 158,118);
	fill(255,255,0);
	//text("voice", 420,118);
	fill(72,209,204);
	//text("few", 139,308);
	fill(0,255,127);
	//text("you", 336,308);
	fill(178,34,34);
	//text("of", 175,151);
	//text("You", 93,243);
	fill(238,130,238);
	//text("alive", 94,181);
	//text("From", 435,243);
	fill(148,0,211);
	//text("green", 486,211);
	//text("that", 155,181);
	fill(233,150,122);
	//text("day", 294,243);
	fill(124,252,0);
	//text("since", 471,181);
	//text("th", 73,308);
	fill(0,255,255);
	//text("?", 292,84);
	fill(238,130,238);
	//text("the", 451,151);
	fill(0,250,154);
	//text("last", 19,211);
	fill(64,224,208);
	//text("I", 125,211);
	fill(186,85,211);
	//text("the", 109,118);
	fill(0,128,0);
	//text("are", 141,243);
	//text("May", 15,84);
	//text("ce,", 435,278);
	fill(0,0,139);
	//text("were", 380,308);
	//text("x", 69,450);
	fill(0,128,0);
	//text("lovely", 57,28);
	fill(255,0,255);
	//text("only", 203,211);
	fill(218,165,32);
	//text("Oh", 15,28);
	fill(128,0,0);
	//text("your", 279,181);
	fill(0,255,255);
	//text("that", 160,278);
	//text("am", 240,181);
	fill(144,238,144);
	//text("eyes.", 22,243);
	fill(135,206,250);
	//text("one", 486,308);
	//text("in", 77,118);
	fill(220,20,60);
	//text("your", 292,278);
	//text("moment", 77,278);
	fill(244,164,96);
	//text("harp.", 261,151);
	fill(50,205,50);
	text("first", 18,278);
	fill(30,144,255);
	//text("in", 345,243);
	fill(184,134,11);
	//text("ds", 247,308);
	//text("Bob", 15,450);
	fill(0,0,255);
	//text("your", 369,118);
	fill(0,128,128);
	//text("be", 407,151);
	fill(222,184,135);
	//text("I", 276,118);
	fill(255,165,0);
	//text("knew", 512,278);
	fill(154,205,50);
	//text("I", 211,278);
	//text("person", 21,181);
	fill(255,0,0);
	//text("ose", 92,308);
	fill(255,165,0);
	//text("t", 252,211);
	fill(165,42,42);
	//text("It", 323,84);
	fill(173,216,230);
	//text("from", 15,308);
	fill(220,20,60);
	//text("love.", 19,338);
	fill(107,142,35);
	//text("luckiest", 500,151);
	fill(255,0,255);
	//text("y,", 172,28);
	fill(176,224,230);
	//text("saw", 245,278);
	fill(75,0,130);
	//text("I", 69,84);
	//text("I", 206,181);
	fill(147,112,219);
	//text("Dais", 125,28);
	fill(106,90,205);
	//text("when", 395,84);
	fill(0,100,0);
	//text("our", 536,181);
	fill(148,0,211);
	//text("darling,", 402,211);
	fill(75,0,130);
	//text("confession", 178,84);
	fill(255,99,71);
	//text("s,", 176,394);
	fill(255,0,255);
	//text("music", 112,151);
	fill(147,112,219);
	//text("alone", 15,118);
	fill(148,0,211);
	//text("fa", 411,278);
	fill(255,0,255);
	//text("of", 314,211);
	fill(0,139,139);
	//text("can", 159,211);
	fill(0,128,128);
	//text("blessed", 17,151);
	fill(0,255,0);
	//text("and", 76,394);
	fill(127,255,212);
	//text("the", 536,118);
	fill(0,100,0);
	//text("true", 534,308);
	fill(127,255,212);
	//text("the", 494,243);



}
