
function canyon(x){
	var c = {
		pos: undefined,
		width: random(50, 100),
		setup : function(x)
		{
			this.pos = createVector(x, floorPos_y);
		},
		draw : function()
		{
			//draws multiple  canyon.
			noStroke();
			fill(48, 25, 52);
			rect(this.pos.x, floorPos_y, this.width, 200);
			fill(15, 94, 156);
			rect(this.pos.x, floorPos_y + 100, this.width, 100);

		},
		check : function()
		{
			if (gameChar_world_x > this.pos.x + 10 &&
				gameChar_world_x < this.pos.x + this.width && 
				gameChar_screen_y > floorPos_y - 10) 
			{
				isPlummeting = true;
			}
		},
		checkPlayerDie : function()
		{
			if(gameChar_screen_y >= height)
			{
				lives -= 1;
				
				if(lives > 0)
				{
					waterSplashSound.play();
					startGame();
				}
				else 
				{	
					lives = 0;
				}
			}
		}
	}
	c.setup(x);
	return c;
}


