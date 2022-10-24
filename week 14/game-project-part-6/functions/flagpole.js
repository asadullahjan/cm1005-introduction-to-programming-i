
function flagpole(x){
	f = {
		pos: undefined,
		isReached : false,
		setup : function(x)
		{
			this.pos = createVector(x,floorPos_y-200);
		},
		draw : function()
		{
			fill(255);
			rect(this.pos.x,this.pos.y,10,200);
			if(this.isReached == true)
			{
				fill(0);
				rect(this.pos.x,this.pos.y,50,50);
			}
			else
			{
				rect(this.pos.x,this.pos.y+150,50,50);
			}
		},
		check : function()
		{
			if(gameChar_world_x >= this.pos.x && this.isReached == false)
			{
				this.isReached = true;
			}
		}
		
	}
	f.setup(x);
	return f;
}

