/*

Officer: 6012708
CaseNum: 401-1-80997948-6012708

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If arsenic dips below 0.42, decrease paracetamol by 0.05
	- When mercury dips below 0.73, raise paracetamol by 0.01
	- When mercury goes above 0.5 or sarin goes above 0.37, decrease beta_blocker by 0.01
	- If Deadly_Nightshade dips below 0.28 and arsenic dips below 0.42, raise beta_blocker by 0.03
	- If Deadly_Nightshade dips below 0.25, decrement protamine by 0.04
	- When mercury dips below 0.46 and sarin goes above 0.55, try increasing protamine by 0.04
	- When Deadly_Nightshade dips below 0.26 and sarin goes above 0.73, decrement hydrochloricAcid by 0.05
	- When mercury goes above 0.25 and arsenic goes above 0.33, increment hydrochloricAcid by 0.05


Your conditional statements should:

consider the following poisons:

	- sarin
	- mercury
	- Deadly_Nightshade
	- arsenic


and modify the following antidotes:

	- paracetamol
	- beta_blocker
	- protamine
	- hydrochloricAcid


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var sarin;
var mercury;
var Deadly_Nightshade;
var arsenic;


//Declare the antidote variables
var paracetamol;
var beta_blocker;
var protamine;
var hydrochloricAcid;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	sarin = 0.5;
	mercury = 0.5;
	Deadly_Nightshade = 0.5;
	arsenic = 0.5;
	paracetamol = 0.5;
	beta_blocker = 0.5;
	protamine = 0.5;
	hydrochloricAcid = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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
	// - If arsenic dips below 0.42, decrease paracetamol by 0.05
	if(arsenic<0.42){
		paracetamol -= 0.05;
	}
	// - When mercury dips below 0.73, raise paracetamol by 0.01
	if(mercury < 0.73){
		paracetamol += 0.01;
	}
	// - When mercury goes above 0.5 or sarin goes above 0.37, decrease beta_blocker by 0.01
	if(mercury > 0.5 || sarin > 0.37 ){
		beta_blocker -= 0.01
	}
	// - If Deadly_Nightshade dips below 0.28 and arsenic dips below 0.42, raise beta_blocker by 0.03
	if(Deadly_Nightshade < 0.28 && arsenic < 0.42){
		beta_blocker += 0.03
	}
	// - If Deadly_Nightshade dips below 0.25, decrement protamine by 0.04
	if(Deadly_Nightshade < 0.25){
		protamine -= 0.04
	}
	// - When mercury dips below 0.46 and sarin goes above 0.55, try increasing protamine by 0.04
	if(mercury < 0.46 && sarin > 0.55){
		protamine += 0.04
	}
	// - When Deadly_Nightshade dips below 0.26 and sarin goes above 0.73, decrement hydrochloricAcid by 0.05
	if(Deadly_Nightshade < 0.26 && sarin > 0.73){
		hydrochloricAcid -= 0.05
	}
	// - When mercury goes above 0.25 and arsenic goes above 0.33, increment hydrochloricAcid by 0.05
	if(mercury  > 0.25 && arsenic > 0.33){
		hydrochloricAcid += 0.05
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	sarin = nextValue(graphs[0],sarin);
	mercury = nextValue(graphs[1],mercury);
	Deadly_Nightshade = nextValue(graphs[2],Deadly_Nightshade);
	arsenic = nextValue(graphs[3],arsenic);


	paracetamol = constrain(paracetamol, 0, 1);
	beta_blocker = constrain(beta_blocker, 0, 1);
	protamine = constrain(protamine, 0, 1);
	hydrochloricAcid = constrain(hydrochloricAcid, 0, 1);


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
	text('mercury: ' + nf(mercury,1,2), 20,40);
	fill(colors[2]);
	text('Deadly_Nightshade: ' + nf(Deadly_Nightshade,1,2), 20,60);
	fill(colors[3]);
	text('arsenic: ' + nf(arsenic,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(paracetamol,50,'paracetamol');
	drawBar(beta_blocker,200,'beta_blocker');
	drawBar(protamine,350,'protamine');
	drawBar(hydrochloricAcid,500,'hydrochloricAcid');


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
