/*

Officer: 6012708
CaseNum: 401-2-11556359-6012708

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If either arsenic dips below 0.43, warfarin dips below 0.58, or perhaps sarin goes above 0.41, decrement hydrochloric_acid by 0.02
	- When botulinium goes above 0.47 or ricin dips below 0.31, whilst at the same time, methanol goes above 0.36, try increasing hydrochloric_acid by 0.02
	- If arsenic goes above 0.75 or sarin goes above 0.48, try decreasing ethanol by 0.02
	- If warfarin dips below 0.64, or on the other hand, ricin goes above 0.59 and methanol dips below 0.52, raise ethanol by 0.02
	- If sarin dips below 0.51 and methanol goes above 0.51, try decreasing paracetamol by 0.03
	- When botulinium goes above 0.73 or arsenic goes above 0.61, raise paracetamol by 0.01
	- When either sarin dips below 0.67, botulinium dips below 0.47, or perhaps methanol goes above 0.5, try decreasing antitoxin by 0.02
	- If warfarin goes above 0.51 or ricin goes above 0.67, increase antitoxin by 0.02


Your conditional statements should:

consider the following poisons:

	- sarin
	- arsenic
	- warfarin
	- botulinium
	- methanol
	- ricin


and modify the following antidotes:

	- hydrochloric_acid
	- ethanol
	- paracetamol
	- antitoxin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var sarin;
var arsenic;
var warfarin;
var botulinium;
var methanol;
var ricin;


//Declare the antidote variables
var hydrochloric_acid;
var ethanol;
var paracetamol;
var antitoxin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	sarin = 0.5;
	arsenic = 0.5;
	warfarin = 0.5;
	botulinium = 0.5;
	methanol = 0.5;
	ricin = 0.5;
	hydrochloric_acid = 0.5;
	ethanol = 0.5;
	paracetamol = 0.5;
	antitoxin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
// - If either arsenic dips below 0.43, warfarin dips below 0.58, or perhaps sarin goes above 0.41, decrement hydrochloric_acid by 0.02
	if(arsenic < 0.43 || warfarin < 0.58 ||  sarin > 0.41){
		 hydrochloric_acid -= 0.02;
	}
// - When botulinium goes above 0.47 or ricin dips below 0.31, whilst at the same time, methanol goes above 0.36, try increasing hydrochloric_acid by 0.02
	if((botulinium > 0.47 || ricin < 0.31) && methanol > 0.36){
		 hydrochloric_acid += 0.02;
	}
// - If arsenic goes above 0.75 or sarin goes above 0.48, try decreasing ethanol by 0.02
	if(arsenic > 0.75 || sarin > 0.48){
		 ethanol -= 0.02
	}
// - If warfarin dips below 0.64, or on the other hand, ricin goes above 0.59 and methanol dips below 0.52, raise ethanol by 0.02
	if(warfarin < 0.64 ||  ricin > 0.59 && methanol < 0.52){
		ethanol += 0.02;
	}
// - If sarin dips below 0.51 and methanol goes above 0.51, try decreasing paracetamol by 0.03
	if(sarin < 0.51 && methanol > 0.51){
		 paracetamol -= 0.03;
	}
// - When botulinium goes above 0.73 or arsenic goes above 0.61, raise paracetamol by 0.01
	if(botulinium > 0.73 || arsenic > 0.61){
		 paracetamol += 0.01;
	}
// - When either sarin dips below 0.67, botulinium dips below 0.47, or perhaps methanol goes above 0.5, try decreasing antitoxin by 0.02
	if( sarin < 0.67 || botulinium < 0.47 ||  methanol > 0.5){
		antitoxin -= 0.02;
	}
// - If warfarin goes above 0.51 or ricin goes above 0.67, increase antitoxin by 0.02
	if(warfarin > 0.51 || ricin > 0.67){
		 antitoxin += 0.02;
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	sarin = nextValue(graphs[0],sarin);
	arsenic = nextValue(graphs[1],arsenic);
	warfarin = nextValue(graphs[2],warfarin);
	botulinium = nextValue(graphs[3],botulinium);
	methanol = nextValue(graphs[4],methanol);
	ricin = nextValue(graphs[5],ricin);


	hydrochloric_acid = constrain(hydrochloric_acid, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('sarin: ' + nf(sarin,1,2), 20,20);
	fill(colors[1]);
	text('arsenic: ' + nf(arsenic,1,2), 20,40);
	fill(colors[2]);
	text('warfarin: ' + nf(warfarin,1,2), 20,60);
	fill(colors[3]);
	text('botulinium: ' + nf(botulinium,1,2), 20,80);
	fill(colors[4]);
	text('methanol: ' + nf(methanol,1,2), 20,100);
	fill(colors[5]);
	text('ricin: ' + nf(ricin,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(hydrochloric_acid,50,'hydrochloric_acid');
	drawBar(ethanol,200,'ethanol');
	drawBar(paracetamol,350,'paracetamol');
	drawBar(antitoxin,500,'antitoxin');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
