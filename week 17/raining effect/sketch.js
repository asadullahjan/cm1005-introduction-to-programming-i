
var rain;

function setup()
{
    
    createCanvas(700,500);
    noStroke();
    rain = 
    {
        rainAry : [],
        raining : false,
        drawRainDrop : function()
        {
            for(var i = 0; i < this.rainAry.length; i++)
            {
                ellipse(this.rainAry[i].drop.x,this.rainAry[i].drop.y,5,10);
                this.rainAry[i].drop.y += this.rainAry[i].speed;
                if(this.rainAry[i].drop.y > height/2){
                    this.rainAry.splice(i,1);
                }
            }
            if(this.raining )
            {
                // frameRate(100);
                this.rainAry.push(
                    {
                        drop : createVector(
                                random(-width/2,width/2),
                                -height/2),
                        speed:random(8,10),
                    }
                );
            }
        }
    
    }
}

function draw()
{
    
    background(150);
    translate(width/2,height/2);
    fill(255);
    rain.drawRainDrop();
    fill(0);  
    textSize(20);
    text
    (
        "press spcae to start raining and p to pause it" ,
        -width/2+5, height/2-10
    );
    
}

function keyPressed()
{
    if(keyCode === 32){
        rain.raining = true;
    }
    if(keyCode === 80){
        rain.raining = false;
    }
}



