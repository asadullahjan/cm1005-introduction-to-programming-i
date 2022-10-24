function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(6);

	//robots head
	fill(13, 153, 230);
	rect(100, 100, 350, 300, 20);


	//robots antenna
	fill(250, 250, 0);
	ellipse(275, 30, 30, 30);
	fill(0);
	line(275,50,275,80);

	fill(255, 0, 0);
	rect(235, 80, 80, 30);

	//robots eyes
	fill(255);
	ellipse(175, 200, 80, 80);
	ellipse(175, 200, 60, 60);
	ellipse(175, 200, 40, 40);
	ellipse(175, 200, 20, 20);
	ellipse(175, 200, 5, 5);

	ellipse(375, 200, 80, 80);
	ellipse(375, 200, 60, 60);
	ellipse(375, 200, 40, 40);
	ellipse(375, 200, 20, 20);
	ellipse(375, 200, 5, 5);
	

	//robots nose
	fill(255, 0, 0);
	rect(250,180,50,140);
	ellipse(275, 200, 5, 5);
	ellipse(275, 250, 5, 5);
	ellipse(275, 300, 5, 5);
	

	//robots ears
	rect(80, 180, 30, 100);
	rect(440, 180, 30, 100);

	//robots mouth
	line(150,350,400,350);
	line(150,320,150,370);
	line(400,320,400,370);
	
}