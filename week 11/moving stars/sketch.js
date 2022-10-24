var starPositionsX;
var starPositionsY;
var directionX;
var directionY;
var starNums;
var maxDist;


function setup() 
{
    createCanvas(1000,1000);
    starPositionsX = [];
    starPositionsY = [];
    directionX = [];
    directionY = [];
    starNums = 1000;

    maxDist = dist(0,0,width/2,height/2);

    for(var i=0 ; i < starNums ; i++){
        starPositionsX.push(width/2);
        starPositionsY.push(height/2);
        directionX.push(random(-1,1));
        directionY.push(random(-1,1));
    }
}

function draw() 
{
    background(0);
    noStroke();
    fill(255);
    
    for(var i = 0; i<starNums ;i++){
        var d = dist(width/2,height/2,starPositionsX[i],starPositionsY[i]);
        var r = d/30;
        var s = d*2/maxDist + 0.1;
        ellipse(starPositionsX[i],starPositionsY[i],r,r);

        if(d > maxDist)
        {
            starPositionsX[i] = random(width/2-25,width/2+25);
            starPositionsY[i] = random(height/2-25,height/2+25);
        }
        else
        {
            starPositionsX[i] += directionX[i] * s ;
            starPositionsY[i] += directionY[i] * s ;
        }
    }
   
}
