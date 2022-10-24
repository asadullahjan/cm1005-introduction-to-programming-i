function setup()
{
	//create a canvas for the robot
	createCanvas(1200, 700);
}

function draw()
{
	//robot 1/////////////////////////////////
	fill(255);
	//robot 1 head
	fill(255,255,0);
	strokeWeight(2);
	beginShape();
	vertex(110,100);
	vertex(200,100);
	vertex(210,210);
	vertex(100,210);
	vertex(110,100);
	endShape();

	//robot 1 eyes 
	fill(255);
	ellipse(135,130,20,25);
	ellipse(175,130,20,25);
	fill(0);
	ellipse(135,132,10,12);
	ellipse(175,132,10,12);
	fill(255);
	ellipse(135,133,5);
	ellipse(175,133,5);

	//robot 1 nose
	fill(150);
	ellipse(155,155,30,20);

	//robot 1 mouth
	fill(255,255,0);
	beginShape();
	vertex(130,170);
	vertex(135,172);
	vertex(140,173);
	vertex(145,174);
	vertex(150,174);
	vertex(155,175);
	vertex(160,175);
	vertex(165,176);
	vertex(170,175);
	vertex(175,175);
	vertex(180,174);
	endShape();

	//robot 1 neck
	fill(150);
	ellipse(155,215,60,10);
	ellipse(155,220,60,10);

	//robot antena
	rect(155,80,5,20,90);
	ellipse(157.,80,15);

	//robot ears
	ellipse(100,150,10,20);
	ellipse(210,150,10,20);

	//robot body
	fill(255,255,0);
	rect(80,225,150,100,20,20,90,90);
	fill(150);
	ellipse(155,328,90,5);
	ellipse(155,333,90,5);
	fill(255,255,0);
	rect(85,335,140,50,40,40,90,90);

	fill(255,0,0);
	ellipse(185,235,10,10);
	ellipse(200,235,10,10);
	ellipse(170,235,10,10);
	fill(150);
	ellipse(190,345,10,10);
	ellipse(120,345,10,10);
	rect(165,250,40,40,10);

	//robot hands
	fill(150);
	rect(60,240,20,90,40);
	rect(230,240,20,90,40);
	//robot 1 legs
	rect(110,385,20,80,40);
	rect(180,385,20,80,40);
	rect(100,455,40,20,40);
	rect(170,455,40,20,40);



	///////////ROBOT 2 ///////////////////////
	//antena
	fill(0,0,255);
	rect(410,90,5,50,20);
	rect(525,90,5,50,20);
	fill(50);
	ellipse(420,150,30);
	ellipse(520,150,30);
	

	fill(0,0,255);
	rect(420,100,100,110);

	strokeWeight(3);
	for(var i=0 ; i<3 ;i++){
		point(440+i*30,110);
	}
	for(var i=0 ; i<3 ;i++){
		point(425,125+i*30);
	}
	for(var i=0 ; i<3 ;i++){
		point(440+i*30,205);
	}
	for(var i=0 ; i<3 ;i++){
		point(515,125+i*30);
	}

	//eyes
	strokeWeight(3);
	fill(255,255,0);
	ellipse(450,135,20);
	ellipse(490,135,20);
	fill(0);
	ellipse(450,135,5);
	ellipse(490,135,5);

	//mouth
	strokeWeight(3);
	line(450,170,450,185);
	line(455,170,455,185);
	line(460,170,460,185);
	line(465,170,465,185);
	line(470,170,470,185);
	line(475,170,475,185);
	line(480,170,480,185);
	line(485,170,485,185);
	line(490,170,490,185);

	//neck
	fill(0,0,255);
	rect(440,210,15,20);
	rect(480,210,15,20);

	//body
	rect(405,225,130,140);
	rect(415,235,110,120);
	fill(0);
	rect(510,280,10,25);
	fill(0,0,255);
	rect(430,365,80,60,0,0,90,90);

	//legs
	fill(0,0,255);
	beginShape();
	vertex(425,415);
	vertex(400,480);
	vertex(420,480);
	vertex(445,415);
	vertex(425,415);
	endShape();

	beginShape();
	vertex(495,415);
	vertex(520,480);
	vertex(540,480);
	vertex(515,415);
	vertex(495,415);
	endShape();

	rect(401,480,19,60);
	rect(520,480,19,60);

	fill(0);
	ellipse(435,415,25,25);
	ellipse(505,415,25,25);
	fill(0,0,255);
	ellipse(435,415,15);
	ellipse(505,415,15);

	fill(0);
	ellipse(410,480,25,25);
	ellipse(530,480,25,25);
	fill(0,0,255);
	ellipse(410,480,15);
	ellipse(530,480,15);

	//foot
	fill(50);
	rect(395.5,540,30,8);
	rect(390.5,548,40,10);

	rect(515.5,540,30,8);
	rect(510.5,548,40,10);

	//arms
	fill(0,0,255);
	beginShape();
	vertex(405,230);
	vertex(375,290);
	vertex(385,290);
	vertex(415,230);
	vertex(405,230);
	endShape();

	beginShape();
	vertex(525,230);
	vertex(565,290);
	vertex(575,290);
	vertex(535,230);
	vertex(525,230);
	endShape();

	rect(368,290,13,60);
	rect(568,290,13,60);
	fill(0);
	rect(365,350,20,10);
	rect(365,360,5,10);
	rect(380,360,5,10);

	rect(565,350,20,10);
	rect(565,360,5,10);
	rect(580,360,5,10);

	fill(0);
	line(397,230,367,290);
	line(543,230,583,290);

	fill(0);
	ellipse(405,230,25,25);
	ellipse(535,230,25,25);
	fill(0,0,255);
	ellipse(405,230,15);
	ellipse(535,230,15);

	fill(0);
	ellipse(375,290,25,25);
	ellipse(575,290,25,25);
	fill(0,0,255);
	ellipse(375,290,15);
	ellipse(575,290,15);

	/////////////////////////////robot3///////////////////

	fill(136,91,250);
	rect(800,100,120,90);
	fill(255);
	rect(825,120,25,30);
	rect(870,125,25,25);
	fill(255,0,0);
	ellipse(837,135,15,20);
	ellipse(883,140,15,13);
	fill(0);
	ellipse(837,135,5);
	ellipse(883,140,5);
	//mouth
	fill(136,91,250);
	beginShape();
	vertex(820,170);
	vertex(825,180);
	vertex(835,175);
	vertex(845,178);
	vertex(860,168);
	vertex(890,180);
	vertex(895,170);
	endShape();

	//neck
	rect(845,190,20,30);

	//body
	rect(755,220,230,150);
	fill(255,0,0);
	ellipse(860,280,60);
	fill(255);
	ellipse(860,280,50);
	ellipse(925,285,50);

	line(860,280,845,270);
	line(925,285,915,270);

	fill(255,0,0);
	ellipse(860,280,10);
	ellipse(925,285,8);

	//arms
	fill(136,91,250);
	rect(690,255,65,25);
	rect(985,160,25,100);
	fill(0);
	rect(685,250,10,35);
	rect(670,250,25,10);
	rect(670,275,25,10);

	rect(980,160,35,10);
	rect(980,145,10,25);
	rect(1005,145,10,25);

	//legs
	fill(136,91,250);
	rect(825,370,30,60);
	rect(895,370,30,60);
	
	fill(0);
	ellipse(840,440,40);
	ellipse(910,440,40);
	fill(255,255,0);
	ellipse(840,440,20);
	ellipse(910,440,20);
	
	
	
	
}