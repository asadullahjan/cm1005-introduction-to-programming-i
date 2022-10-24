function setup()
{
	//create your canvas here
	createCanvas(700,700);
}

function draw()
{
	fill(0);
	beginShape();
	vertex(150,0);
	vertex(700,680);
	vertex(700,500);
	vertex(200,0);
	endShape();
	
	fill(235, 245, 206);
	noStroke();
	beginShape();
	vertex(600,0);
	vertex(0,600);
	vertex(0,700);
	vertex(50,700);
	vertex(650,0);
	endShape();
	fill(23, 156, 142);
	beginShape();
	vertex(0,100);
	vertex(700,200);
	vertex(700,230);
	vertex(0,200);
	endShape();
	//do your drawing here
	stroke(0);
	strokeWeight(20);
	fill(255);
	ellipse(350,350,600,600);
	strokeWeight(1);
	fill(150,100);
	ellipse(350,350,160);
	fill(255,255,0,150);
	ellipse(300,380,130);
	fill(39, 135, 126,150);
	ellipse(400,330,140);
	fill(255,0,0,150);
	ellipse(370,250,100);
	strokeWeight(10);
	ellipse(200,300,60);
	strokeWeight(1);
	ellipse(300,500,40);
	ellipse(550,350,50);
	ellipse(300,350,50);
	fill(212, 123, 182,150);
	ellipse(300,250,145);
	ellipse(200,150,50);
	ellipse(300,450,50);
	ellipse(500,500,50);
	fill(0);
	ellipse(450,245,50);
	ellipse(200,450,50);
	ellipse(450,450,50);

	line(150,150,550,250);
	line(250,150,250,550);
	line(450,350,550,550);
	line(350,150,550,500);
	line(550,150,350,550);
	line(150,350,550,350);
	line(450,150,150,450);
	line(250,580,450,580);
	line(550,180,570,280);
	line(530,180,550,280);
	line(520,180,530,280);
}