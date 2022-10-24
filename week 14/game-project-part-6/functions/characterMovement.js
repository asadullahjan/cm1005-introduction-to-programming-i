function characterMovement()
	{
		if (isLeft) 
		{
			if (gameChar_screen_x > width * 0.2) 
			{
				gameChar_screen_x -= 5;
			}
			else 
			{
				scrollPos += 5;
				seceneryScrollPos += 4;
			}
		}

		if (isRight) 
		{
			if (gameChar_screen_x < width * 0.8) 
			{
				gameChar_screen_x += 5;
			}
			else 
			{
				scrollPos -= 5; // negative for moving against the background
				seceneryScrollPos -= 4;
			}
		}

		// Logic to make the game character rise and fall.
		if (isPlummeting)
		{
			gameChar_screen_y += 5;
		}
		if (isFalling == true) 
		{
			if (gameChar_screen_y == floorPos_y) 
			{
				gameChar_screen_y = floorPos_y - 100;
				jumpSound.play();
			}
			if (gameChar_screen_y < floorPos_y) 
			{
				gameChar_screen_y += 1.25;
			}
		}
		if (gameChar_screen_y < floorPos_y) 
		{
			isFalling = true;
		}
		else 
		{
			isFalling = false;
		}
	}

	