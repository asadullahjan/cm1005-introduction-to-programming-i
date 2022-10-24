function collectable(x,y){
	var c = 
	{
		pos: undefined,
		size: undefined, 
		isFound:false,
		setup : function(x,y)
		{
			this.pos = createVector(x,y);
			this.size = random(20, 30);
		},
		draw : function(){
			//draws multiple collectable.
			strokeWeight(2);
			stroke(0, 255, 0);
			line(
				this.pos.x + 3, this.pos.y,
				this.pos.x + 7, this.pos.y - this.size
			);
			noStroke();
			fill(255, 0, 0);
			ellipse(
				this.pos.x, this.pos.y + 5,
				this.size / 2, this.size
				);
			ellipse(
				this.pos.x + 7, this.pos.y + 5,
				this.size, this.size
				);
		},
		check : function()
		{
			if (dist(this.pos.x, this.pos.y,
				gameChar_world_x + 5, gameChar_screen_y-20) < 35) 
			{
				this.isFound = true;
				fruitPickupSound.play();
				game_score += 1;
			}
            
		}
	}
	
	c.setup(x,y);
	return c;
}