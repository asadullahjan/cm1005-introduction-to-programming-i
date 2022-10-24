/*

Officer: 6012708
CaseNum: 202-3-19866584-6012708

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Khaki filled text with a Gold outline in Ballpointprint font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(575,468);
	textSize(27);
}

function draw()										
{
	background(255);

	fill(255,165,0);
	stroke(0,255,127);
	textFont(Ballpointprint);
	//text("?", 211,112);
	fill(238,130,238);
	stroke(139,0,0);
	textFont(Diggity);
	//text("urs,", 121,290);
	fill(173,216,230);
	stroke(255,0,0);
	//text("how", 378,207);
	fill(64,224,208);
	stroke(128,128,0);
	textFont(Melissa);
	//text("ak", 516,143);
	fill(178,34,34);
	stroke(255,255,0);
	//text("me", 91,143);
	fill(147,112,219);
	stroke(199,21,133);
	//text("Bob,", 133,27);
	fill(124,252,0);
	stroke(50,205,50);
	textFont(RonsFont);
	//text("conti", 318,81);
	fill(107,142,35);
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("Daisy", 11,344);
	fill(128,128,0);
	stroke(255,140,0);
	textFont(Diggity);
	//text("our", 191,177);
	fill(199,21,133);
	stroke(220,20,60);
	textFont(RonsFont);
	//text("Fore", 11,290);
	push();
	fill(34,139,34);
	stroke(255,0,0);
	textFont(Diggity);
	//text("sometimes.", 113,207);
	pop();
	fill(127,255,0);
	stroke(255,0,0);
	textFont(Ballpointprint);
	//text("I'm", 215,207);
	fill(0,100,0);
	stroke(127,255,0);
	textFont(Diggity);
	//text("Are", 454,112);
	fill(255,69,0);
	stroke(128,128,0);
	textFont(Melissa);
	//text("and", 6,177);
	fill(255,99,71);
	stroke(0,128,0);
	textFont(RonsFont);
	//text("take", 95,236);
	fill(144,238,144);
	stroke(0,0,128);
	textFont(Diggity);
	//text("are", 456,177);
	push();
	fill(240,230,140);
	stroke(255,215,0);
	textFont(Ballpointprint);
	text("money", 140,112);
	text("go", 334,143);
	text("for", 427,143);
	pop();
	stroke(255,0,255);
	//text("yo", 103,290);
	fill(139,0,0);
	stroke(0,250,154);
	//text("relationship", 230,177);
	fill(255,0,255);
	stroke(0,139,139);
	//text("away", 369,143);
	fill(147,112,219);
	stroke(220,20,60);
	//text("?", 155,236);
	push();
	fill(64,224,208);
	stroke(255,215,0);
	//text("You", 415,177);
	pop();
	stroke(107,142,35);
	//text("all", 110,177);
	fill(255,0,255);
	stroke(128,0,128);
	textFont(Melissa);
	//text("delays.", 424,81);
	push();
	fill(64,224,208);
	stroke(0,206,209);
	textFont(Ballpointprint);
	//text("the", 297,236);
	pop();
	stroke(128,128,0);
	textFont(Diggity);
	//text("avoiding", 16,143);
	fill(152,251,152);
	stroke(160,82,45);
	textFont(Melissa);
	//text("send", 372,112);
	fill(100,149,237);
	stroke(0,255,127);
	textFont(Ballpointprint);
	//text("can", 39,81);
	fill(240,230,140);
	stroke(255,215,0);
	text("safe", 334,177);
	text("ignore", 186,81);
	fill(75,0,130);
	stroke(32,178,170);
	//text("I", 20,236);
	fill(0,0,139);
	stroke(218,165,32);
	textFont(Diggity);
	//text("you", 498,112);
	fill(139,0,139);
	stroke(0,206,209);
	textFont(RonsFont);
	//text("sure", 315,207);
	fill(0,191,255);
	//text("?", 118,143);
	fill(0,0,128);
	stroke(139,69,19);
	textFont(Diggity);
	//text("not", 276,207);
	fill(238,130,238);
	stroke(255,69,0);
	textFont(Melissa);
	//text("cash.", 411,112);
	fill(238,232,170);
	stroke(154,205,50);
	textFont(Ballpointprint);
	//text("no", 81,81);
	fill(0,0,205);
	stroke(128,128,0);
	textFont(RonsFont);
	//text("guarded", 12,207);
	fill(0,139,139);
	stroke(255,215,0);
	textFont(Ballpointprint);
	//text("short", 53,112);
	fill(135,206,250);
	stroke(210,105,30);
	textFont(Diggity);
	//text("much", 423,207);
	fill(127,255,0);
	stroke(0,255,0);
	textFont(Melissa);
	//text("out.", 136,177);
	fill(222,184,135);
	//text("bre", 493,143);
	fill(64,224,208);
	stroke(0,206,209);
	textFont(Diggity);
	//text("you", 14,112);
	fill(127,255,212);
	stroke(0,0,128);
	textFont(RonsFont);
	//text("these", 257,81);
	push();
	fill(244,164,96);
	stroke(220,20,60);
	textFont(Ballpointprint);
	//text("more", 476,207);
	pop();
	fill(124,252,0);
	stroke(0,191,255);
	//text("darling", 50,27);
	fill(165,42,42);
	stroke(128,128,0);
	textFont(Ballpointprint);
	//text("x", 82,344);
	push();
	fill(0,255,127);
	stroke(0,0,255);
	textFont(RonsFont);
	//text("longer", 113,81);
	pop();
	fill(0,0,139);
	stroke(255,0,255);
	//text("so", 497,177);
	fill(0,255,255);
	stroke(128,128,0);
	//text("we", 213,143);
	push();
	fill(184,134,11);
	stroke(25,25,112);
	textFont(Diggity);
	//text("?", 395,177);
	pop();
	fill(210,105,30);
	stroke(0,255,127);
	textFont(Melissa);
	//text("Is", 168,177);
	push();
	fill(255,165,0);
	stroke(0,100,0);
	textFont(RonsFont);
	//text("nual", 369,81);
	pop();
	fill(222,184,135);
	stroke(0,128,0);
	//text("this", 76,177);
	fill(184,134,11);
	stroke(0,191,255);
	textFont(Diggity);
	//text("so,", 276,112);
	fill(0,206,209);
	stroke(50,205,50);
	textFont(Ballpointprint);
	//text("can", 53,236);
	fill(139,69,19);
	stroke(255,69,0);
	textFont(Diggity);
	//text("secrets,", 217,236);
	push();
	fill(139,0,0);
	stroke(210,105,30);
	textFont(RonsFont);
	//text("ver", 57,290);
	pop();
	fill(222,184,135);
	stroke(218,165,32);
	textFont(Ballpointprint);
	//text("I", 308,112);
	fill(255,105,180);
	stroke(0,206,209);
	textFont(RonsFont);
	//text("If", 241,112);
	fill(173,216,230);
	stroke(0,128,0);
	textFont(Diggity);
	//text("The", 175,236);
	push();
	fill(72,209,204);
	stroke(165,42,42);
	textFont(RonsFont);
	//text("Are", 479,81);
	pop();
	fill(75,0,130);
	stroke(0,139,139);
	//text("of", 110,112);
	push();
	fill(255,69,0);
	stroke(148,0,211);
	textFont(Melissa);
	//text("can", 341,112);
	pop();
	fill(106,90,205);
	textFont(Melissa);
	//text("sort", 37,177);
	fill(255,215,0);
	stroke(0,100,0);
	textFont(RonsFont);
	//text("should", 255,143);
	fill(255,69,0);
	stroke(160,82,45);
	textFont(Diggity);
	//text("silence.", 345,236);
	push();
	fill(173,255,47);
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("I", 6,81);
	pop();
	fill(255,0,0);
	stroke(0,255,0);
	//text("Perhaps", 137,143);
	fill(30,144,255);
	stroke(255,255,0);
	//text("a", 471,143);
	fill(138,43,226);
	stroke(139,0,0);
	textFont(Ballpointprint);
	//text("My", 6,27);



}
