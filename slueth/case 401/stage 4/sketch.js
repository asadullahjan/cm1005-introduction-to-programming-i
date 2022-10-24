/*

Officer: 6012708
CaseNum: 401-3-49600550-6012708

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If nerveGas goes above 0.35 or insecticide dips below 0.75, whilst at the same time, novichok goes above 0.4 and warfarin dips below 0.63, reduce Calcium_Chloride by 0.02
	- When snakeVenom dips below 0.7 or lead goes above 0.59, whilst at the same time, cyanide goes above 0.31 or mercury goes above 0.71, try increasing Calcium_Chloride by 0.03
	- If mercury goes above 0.73, nerveGas dips below 0.45, and also warfarin goes above 0.46, decrease antivenom by 0.03
	- If cyanide dips below 0.39, whilst at the same time, lead dips below 0.59 or novichok goes above 0.66, raise antivenom by 0.03
	- When nerveGas goes above 0.67, whilst at the same time, warfarin goes above 0.69 or lead dips below 0.36, decrease chalk by 0.02
	- When novichok dips below 0.74, cyanide dips below 0.37, and also snakeVenom dips below 0.43, try increasing chalk by 0.03
	- If mercury dips below 0.72, nerveGas goes above 0.74, and also novichok goes above 0.54, decrease aspirin by 0.04
	- When cyanide dips below 0.4 and lead dips below 0.55, or on the other hand, insecticide dips below 0.62 or snakeVenom dips below 0.25, increment aspirin by 0.02
	- When snakeVenom goes above 0.61 and nerveGas dips below 0.49, or on the other hand, lead goes above 0.51 or novichok goes above 0.39, decrease plasma by 0.01
	- When cyanide goes above 0.47 or warfarin dips below 0.46, whilst at the same time, insecticide goes above 0.67 and mercury goes above 0.46, raise plasma by 0.02


Your conditional statements should:

consider the following poisons:

	- novichok
	- warfarin
	- mercury
	- lead
	- snakeVenom
	- cyanide
	- nerveGas
	- insecticide


and modify the following antidotes:

	- Calcium_Chloride
	- antivenom
	- chalk
	- aspirin
	- plasma


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var novichok;
var warfarin;
var mercury;
var lead;
var snakeVenom;
var cyanide;
var nerveGas;
var insecticide;


//Declare the antidote variables
var Calcium_Chloride;
var antivenom;
var chalk;
var aspirin;
var plasma;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	novichok = 0.5;
	warfarin = 0.5;
	mercury = 0.5;
	lead = 0.5;
	snakeVenom = 0.5;
	cyanide = 0.5;
	nerveGas = 0.5;
	insecticide = 0.5;
	Calcium_Chloride = 0.5;
	antivenom = 0.5;
	chalk = 0.5;
	aspirin = 0.5;
	plasma = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
	// - If nerveGas goes above 0.35 or insecticide dips below 0.75, whilst at the same time, novichok goes above 0.4 and warfarin dips below 0.63, reduce Calcium_Chloride by 0.02
		if((nerveGas > 0.35 || insecticide < 0.75) && novichok > 0.4 && warfarin < 0.63 ){
			Calcium_Chloride -= 0.02;
		}
	// - When snakeVenom dips below 0.7 or lead goes above 0.59, whilst at the same time, cyanide goes above 0.31 or mercury goes above 0.71, try increasing Calcium_Chloride by 0.03
		if((snakeVenom < 0.7 || lead > 0.59) && (cyanide > 0.31 || mercury > 0.71)){
			Calcium_Chloride += 0.03;
		}
	// - If mercury goes above 0.73, nerveGas dips below 0.45, and also warfarin goes above 0.46, decrease antivenom by 0.03
		if(mercury > 0.73 && nerveGas < 0.45 && warfarin > 0.46){
			antivenom -= 0.03;
		}
	// - If cyanide dips below 0.39, whilst at the same time, lead dips below 0.59 or novichok goes above 0.66, raise antivenom by 0.03
		if(cyanide < 0.39 && (lead < 0.59 || novichok > 0.66)){
			antivenom += 0.03;
		}
	// - When nerveGas goes above 0.67, whilst at the same time, warfarin goes above 0.69 or lead dips below 0.36, decrease chalk by 0.02
		if(nerveGas > 0.67 && (warfarin > 0.69 || lead < 0.36)){
			chalk -= 0.02;
		}
	// - When novichok dips below 0.74, cyanide dips below 0.37, and also snakeVenom dips below 0.43, try increasing chalk by 0.03
		if(novichok < 0.74 && cyanide < 0.37 && snakeVenom < 0.43){
				chalk += 0.03;
		}
	// - If mercury dips below 0.72, nerveGas goes above 0.74, and also novichok goes above 0.54, decrease aspirin by 0.04
		if(mercury < 0.72 && nerveGas > 0.74 && novichok > 0.54){
				aspirin -= 0.04;
		}
	// - When cyanide dips below 0.4 and lead dips below 0.55, or on the other hand, insecticide dips below 0.62 or snakeVenom dips below 0.25, increment aspirin by 0.02
		if((cyanide < 0.4 && lead < 0.55) || (insecticide < 0.62 || snakeVenom < 0.25)){
				aspirin += 0.02;
		}
	// - When snakeVenom goes above 0.61 and nerveGas dips below 0.49, or on the other hand, lead goes above 0.51 or novichok goes above 0.39, decrease plasma by 0.01
		if((snakeVenom > 0.61 && nerveGas < 0.49) || (lead > 0.51 || novichok > 0.39 )){
				plasma -= 0.01;
		}
	// - When cyanide goes above 0.47 or warfarin dips below 0.46, whilst at the same time, insecticide goes above 0.67 and mercury goes above 0.46, raise plasma by 0.02
		if((cyanide > 0.47 || warfarin < 0.46) && (insecticide > 0.67 && mercury > 0.46) ){
			plasma += 0.02;
		}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	novichok = nextValue(graphs[0],novichok);
	warfarin = nextValue(graphs[1],warfarin);
	mercury = nextValue(graphs[2],mercury);
	lead = nextValue(graphs[3],lead);
	snakeVenom = nextValue(graphs[4],snakeVenom);
	cyanide = nextValue(graphs[5],cyanide);
	nerveGas = nextValue(graphs[6],nerveGas);
	insecticide = nextValue(graphs[7],insecticide);


	Calcium_Chloride = constrain(Calcium_Chloride, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	chalk = constrain(chalk, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	plasma = constrain(plasma, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('novichok: ' + nf(novichok,1,2), 20,20);
	fill(colors[1]);
	text('warfarin: ' + nf(warfarin,1,2), 20,40);
	fill(colors[2]);
	text('mercury: ' + nf(mercury,1,2), 20,60);
	fill(colors[3]);
	text('lead: ' + nf(lead,1,2), 20,80);
	fill(colors[4]);
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,100);
	fill(colors[5]);
	text('cyanide: ' + nf(cyanide,1,2), 20,120);
	fill(colors[6]);
	text('nerveGas: ' + nf(nerveGas,1,2), 20,140);
	fill(colors[7]);
	text('insecticide: ' + nf(insecticide,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(Calcium_Chloride,50,'Calcium_Chloride');
	drawBar(antivenom,200,'antivenom');
	drawBar(chalk,350,'chalk');
	drawBar(aspirin,500,'aspirin');
	drawBar(plasma,650,'plasma');


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
