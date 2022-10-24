function drawGameChar() {
	//the game character
	if (isLeft && isFalling) 
	{
		// add your jumping-left code
		fill(120, 120, 120);
		ellipse(gameChar_screen_x, gameChar_screen_y - 56, 30);

		fill(0);
		ellipse(gameChar_screen_x - 10, gameChar_screen_y - 55, 5);

		fill(0, 0, 225);
		rect(gameChar_screen_x - 8, gameChar_screen_y - 43, 15, 25);


		strokeWeight(5);
		stroke(1);
		line(gameChar_screen_x - 10, gameChar_screen_y - 5, gameChar_screen_x - 5, gameChar_screen_y - 18);//leg
		line(gameChar_screen_x + 3, gameChar_screen_y - 18, gameChar_screen_x + 10, gameChar_screen_y - 5);//leg

		line(gameChar_screen_x - 5, gameChar_screen_y - 35, gameChar_screen_x - 20, gameChar_screen_y - 45);//arm
		line(gameChar_screen_x + 20, gameChar_screen_y - 25, gameChar_screen_x + 8, gameChar_screen_y - 35);//arm
		strokeWeight(1);

	}
	else if (isRight && isFalling) 
	{
		// add your jumping-right code
		fill(120, 120, 120);
		ellipse(gameChar_screen_x, gameChar_screen_y - 56, 30);

		fill(0);
		ellipse(gameChar_screen_x + 10, gameChar_screen_y - 55, 5);

		fill(0, 0, 225);
		rect(gameChar_screen_x - 8, gameChar_screen_y - 43, 15, 25);


		strokeWeight(5);
		stroke(1);
		line(gameChar_screen_x - 10, gameChar_screen_y - 5, gameChar_screen_x - 5, gameChar_screen_y - 18);//leg
		line(gameChar_screen_x + 3, gameChar_screen_y - 18, gameChar_screen_x + 10, gameChar_screen_y - 5);//leg

		line(gameChar_screen_x, gameChar_screen_y - 35, gameChar_screen_x + 20, gameChar_screen_y - 45);//arm
		line(gameChar_screen_x - 20, gameChar_screen_y - 25, gameChar_screen_x - 10, gameChar_screen_y - 35);//arm
		strokeWeight(1);

	}
	else if (isLeft) 
	{
		// add your walking left code


		fill(120, 120, 120);
		ellipse(gameChar_screen_x, gameChar_screen_y - 56, 35);

		fill(0);
		ellipse(gameChar_screen_x - 10, gameChar_screen_y - 55, 5);

		fill(0, 0, 225);
		rect(gameChar_screen_x - 10, gameChar_screen_y - 40, 20, 30);


		strokeWeight(5);
		stroke(1);
		line(gameChar_screen_x - 10, gameChar_screen_y, gameChar_screen_x - 5, gameChar_screen_y - 10);//leg
		line(gameChar_screen_x + 5, gameChar_screen_y - 10, gameChar_screen_x + 10, gameChar_screen_y);//leg

		line(gameChar_screen_x + 10, gameChar_screen_y - 33, gameChar_screen_x + 23, gameChar_screen_y - 25);//arm
		line(gameChar_screen_x - 23, gameChar_screen_y - 25, gameChar_screen_x - 5, gameChar_screen_y - 35);//arm
		strokeWeight(1);

	}
	else if (isRight) 
	{
		// add your walking right code

		fill(120, 120, 120);
		ellipse(gameChar_screen_x, gameChar_screen_y - 56, 35);

		fill(0);
		ellipse(gameChar_screen_x + 10, gameChar_screen_y - 55, 5);

		fill(0, 0, 225);
		rect(gameChar_screen_x - 10, gameChar_screen_y - 40, 20, 30);


		strokeWeight(5);
		stroke(1);
		line(gameChar_screen_x - 10, gameChar_screen_y, gameChar_screen_x - 5, gameChar_screen_y - 10);//leg
		line(gameChar_screen_x + 5, gameChar_screen_y - 10, gameChar_screen_x + 10, gameChar_screen_y);//leg

		line(gameChar_screen_x + 5, gameChar_screen_y - 33, gameChar_screen_x + 23, gameChar_screen_y - 25);//arm
		line(gameChar_screen_x - 23, gameChar_screen_y - 25, gameChar_screen_x - 12, gameChar_screen_y - 35);//arm
		strokeWeight(1);

	}
	else if (isFalling || isPlummeting) 
	{
		// add your jumping facing forwards code
		fill(120, 120, 120);
		ellipse(gameChar_screen_x, gameChar_screen_y - 55, 30);
		fill(0);
		fill(0);
		ellipse(gameChar_screen_x - 7, gameChar_screen_y - 56, 3);
		ellipse(gameChar_screen_x + 7, gameChar_screen_y - 56, 3);

		fill(0, 0, 225);
		rect(gameChar_screen_x - 10, gameChar_screen_y - 40, 20, 25);

		fill(0);
		rect(gameChar_screen_x - 11, gameChar_screen_y - 15, 10, 10);
		rect(gameChar_screen_x + 1, gameChar_screen_y - 15, 10, 10);

		strokeWeight(5);
		stroke(1);
		line(gameChar_screen_x + 10, gameChar_screen_y - 35, gameChar_screen_x + 23, gameChar_screen_y - 50);
		line(gameChar_screen_x - 23, gameChar_screen_y - 50, gameChar_screen_x - 11, gameChar_screen_y - 35);
		strokeWeight(1);

	}
	else 
	{
		// add your standing front facing code
		fill(120, 120, 120);
		ellipse(gameChar_screen_x, gameChar_screen_y - 56, 40);
		fill(0);
		ellipse(gameChar_screen_x - 10, gameChar_screen_y - 56, 5);
		ellipse(gameChar_screen_x + 10, gameChar_screen_y - 56, 5);

		fill(0, 0, 225);
		rect(gameChar_screen_x - 15, gameChar_screen_y - 37, 30, 30);

		fill(0);
		rect(gameChar_screen_x - 15, gameChar_screen_y - 7, 10, 10);
		rect(gameChar_screen_x + 5, gameChar_screen_y - 7, 10, 10);

	}
}