function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(210);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(100, 50, 650, 650);
	

	fill(225,0,0);
	rect(150,100,150,200);
	rect(600,550,150,150);
	rect(200,500,200,200);

	fill(255, 255, 0);
	rect(550,50,150,250);
	rect(450,600,100,50);

	fill(0,0,255);
	rect(600,400,150,100);
	rect(375,175,100,100);




	//simple lines
	line(220,300,220,400);
	line(100,400,750,400);
	line(600,300,600,700);
	line(250,500,250,420);
	line(300,500,300,420);
	line(350,500,350,420);
	line(100,500,750,500);
	line(100,100,550,100);
	line(425,175,425,50);
	line(375,225,300,225);
	line(550,225,475,225);
	line(425,400,425,275);
	line(550,600,550,500);
	line(500,600,500,500);
	line(450,600,450,500);
	
}