var rocket; 
var baseLine;
function setup()
{
     createCanvas(800, 600);
    
    baseLine = height - 70

    rocket =    {
        x: width/2,
        y: baseLine, 
        thrust: false, 
        moveLeft: false,
        moveRight: false,
		bullets : [],
		rocketFiring : false,
		drawRocket: function()
		{
			fill(180);
			beginShape();
			curveTightness(-1.5);
			curveVertex(this.x+10, this.y+60);
			curveVertex(this.x+10, this.y+60);
			curveVertex(this.x+5, this.y);
			curveVertex(this.x+22.5, this.y);
			curveVertex(this.x+20, this.y+60);
			curveVertex(this.x+20, this.y+60);
			endShape();
		
			fill(255, 0, 0);
			beginShape();
			vertex(this.x, this.y + 61);
			vertex(this.x+7.5, this.y + 40);
			vertex(this.x + 10.5, this.y + 61);
			endShape(CLOSE);
		
			beginShape();
			vertex(this.x + 30, this.y + 61);
			vertex(this.x + 22.5, this.y + 40);
			vertex(this.x + 20, this.y + 61);
			endShape(CLOSE);
		
			if (this.thrust)
			{
				fill(255, 150, 0);
				beginShape();
				vertex(this.x + 10, this.y + 60);
				vertex(this.x + 13, this.y + 80);
				vertex(this.x + 15, this.y + 70);
				vertex(this.x + 18, this.y + 80);
				vertex(this.x + 20, this.y + 60);
				endShape(CLOSE);
			}
		},
		moveRocket: function()
		{
			if (this.thrust && this.y > 0)
				{
					this.y -= 3;
				}
				else if (this.y < baseLine)
				{
					this.y += 2 ;
				}

				if (this.moveLeft && this.x > 0 && this.y != baseLine)
				{
					this.x -= 3;
				}

				if (this.moveRight && this.x < width && this.y != baseLine)
				{
					this.x += 3;
				}
		},
		drawbullets(){
			for(var i = 0; i < this.bullets.length; i++)
			{
				fill(255, 0, 0);
				ellipse(this.bullets[i].x+6, this.bullets[i].y, 5, 10);
				ellipse(this.bullets[i].x+21, this.bullets[i].y, 5, 10);
				this.bullets[i].y -= 5;
				if(this.bullets[i].y < 0)
				{
					this.bullets.splice(i, 1);
				}
			}
			if(this.rocketFiring && frameCount/5 % 2 == 0)
			{
				this.bullets.push(				
					{
						x: this.x,
						y: this.y,
					});
			}
		}

    };
    
}
function draw()
{
    
	background(10);
	fill(255);
	textSize(20);
	text("Use the arrow keys to move the rocket.", 10, 30);
	text("Press space to fire bullets.", 10, 50);
   
  	//draw the rocket
	rocket.drawbullets();
	rocket.drawRocket();
	rocket.moveRocket();

}

function keyPressed()
{
	
	if (keyCode == '38')
	{
		rocket.thrust = true;
	}

	if (keyCode == '37')
	{
		rocket.moveLeft = true;
	}

	if (keyCode == '39')
	{
		rocket.moveRight = true;
	}
	if(keyCode == '32'){
		rocket.rocketFiring = true;
	}
}

function keyReleased()
{
	
    if(keyCode == '38')
    {
	   rocket.thrust = false;
    }
    
    if(keyCode == '37')
    {
	   rocket.moveLeft = false;
    }
    
    if(keyCode == '39')
    {
	   rocket.moveRight = false;
    }
	if(keyCode == '32'){
		rocket.rocketFiring = false;
	}

}