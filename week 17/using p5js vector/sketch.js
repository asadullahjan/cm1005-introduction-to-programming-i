
var myPoint;
var myPoints;

function setup()
{
    
    createCanvas(500,500);
    
    // myPoint = createVector(0,-100);
    myPoints = [];

    for(var i = 0 ; i<100 ; i++){
        myPoints.push(createVector(
            random(-width/2,width/2),
            random(-height/2,height/2)
        ));
    }
}

function draw()
{
    
    background(0,0,0);
    
    translate(width/2,height/2);
    stroke(255);
    strokeWeight(1);
    for(var i = 0 ; i<myPoints.length ; i++){
        line(myPoints[i].x,myPoints[i].y,0,0);
    }
    // fill(255);
    // ellipse(myPoint.x, myPoint.y, 50);
    // myPoint.rotate(0.005);
}

function keyPressed()
{
    
}


