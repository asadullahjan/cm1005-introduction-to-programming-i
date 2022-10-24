/*

Officer: 6012708
CaseNum: 401-0-59400752-6012708

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If sarin goes above 0.31, try decreasing aspirin by 0.02
	- When chlorine dips below 0.72, raise aspirin by 0.02
	- If chlorine goes above 0.62, decrement antibodies by 0.05
	- If methanol dips below 0.56, raise antibodies by 0.05
	- When methanol dips below 0.62, decrement beta_blocker by 0.03
	- When sarin dips below 0.28, increment beta_blocker by 0.04


Your conditional statements should:

consider the following poisons:

	- sarin
	- methanol
	- chlorine


and modify the following antidotes:

	- aspirin
	- antibodies
	- beta_blocker


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var sarin;
var methanol;
var chlorine;


//Declare the antidote variables
var aspirin;
var antibodies;
var beta_blocker;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	sarin = 0.5;
	methanol = 0.5;
	chlorine = 0.5;
	aspirin = 0.5;
	antibodies = 0.5;
	beta_blocker = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
	// - If sarin goes above 0.31, try decreasing aspirin by 0.02
	if(sarin>0.31){
		aspirin -= 0.02;
	}
	// - When chlorine dips below 0.72, raise aspirin by 0.02
	if(chlorine<0.72){
		aspirin += 0.02;
	}
	// - If chlorine goes above 0.62, decrement antibodies by 0.05
	if(chlorine > 0.62){
		antibodies -= 0.05;
	}
	// - If methanol dips below 0.56, raise antibodies by 0.05
	if(methanol < 0.56){
		antibodies += 0.05;
	}
	// - When methanol dips below 0.62, decrement beta_blocker by 0.03
	if(methanol < 0.62){
		beta_blocker -= 0.03;
	}
	// - When sarin dips below 0.28, increment beta_blocker by 0.04
	if(sarin < 0.28){
		beta_blocker += 0.04;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	sarin = nextValue(graphs[0],sarin);
	methanol = nextValue(graphs[1],methanol);
	chlorine = nextValue(graphs[2],chlorine);


	aspirin = constrain(aspirin, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	beta_blocker = constrain(beta_blocker, 0, 1);


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
	text('methanol: ' + nf(methanol,1,2), 20,40);
	fill(colors[2]);
	text('chlorine: ' + nf(chlorine,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(antibodies,200,'antibodies');
	drawBar(beta_blocker,350,'beta_blocker');


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
