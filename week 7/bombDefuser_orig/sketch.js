
var bcenterX;
var bcenterY;
var bdiam;
var fuseEndX;
var fuseEndY;
var gameState;
var newState;
var secretKeyCode;
var hotKey;
var countDown;
var lives;

function setup() 
{
    createCanvas(512,512);
    textSize(32);
    strokeWeight(5);
    
    //initialise variables
    bdiam = 250;
    bcenterX = width/2;
    bcenterY = height/2;
    fuseEndX = bcenterX + 20;
    fuseEndY = bcenterY - bdiam/2 - 30;

    gameState = 0 ;
    secretKeyCode = round(random(65,90));
    hotKey = round(random(65,90));
    countDown = 300;
    lives = 3;
    
}


function draw()
{
    ////////////// UPDATE CODE///////////////
    
    //reset variables after random amounts were added
    bcenterX = width/2;
    bcenterY = height/2;
    
    if(gameState == 1)
    {
        //wobble the bomb
        bcenterX += random(-10,10);
        bcenterY += random(-10,10);
        countDown -= 1; 
        if (countDown == 0){
            gameState = 2;
        }
    }
    fuseEndX = bcenterX + 20;
    fuseEndY = bcenterY - bdiam/2 - 30;
    
    ////////////// DRAWING CODE///////////////
    
    background(100);    

    //draw the fuse
    noFill();
    stroke(200,100,0);

    line(
        bcenterX,
        bcenterY - bdiam/2, 
        fuseEndX,
        fuseEndY
        );
    
    //draw the bomb
    noStroke();
    fill(0);
    ellipse(bcenterX,bcenterY, bdiam, bdiam);
    fill(255);
    quad(
        bcenterX + 40, bcenterY - 60,
        bcenterX + 80, bcenterY - 60,
        bcenterX + 70, bcenterY - 30,
        bcenterX + 50, bcenterY - 30
    );
    
    //draw the flame 
    fill(255,255,0);
    noStroke();
    if(gameState == 1)
    {
        beginShape();
            vertex(fuseEndX, fuseEndY);
            vertex(fuseEndX + 20, fuseEndY - 20);
            vertex(fuseEndX + 20, fuseEndY - 50);
            vertex(fuseEndX - 10, fuseEndY - 30);
        endShape(CLOSE);
    }

    fill(255);
    
    //Draw game text
    if(gameState == 0 )
    {
        text("Press any key to start", 20, 50);
    }
    if(gameState == 2)
    {
        text("Game over", 20, height/2);  
    }
    if(gameState == 3)
    {
        text("You won !", width/2, height/2);
        text("press any key to restart",width/2-100, height/2+30);  
    }
    if(gameState == 1)
    {    
        text("Press a secret alphabet key to diffuse the bomb", 20, height - 50);
        text("CountDown: " + countDown , 10,50 );
        text("Lives: " + lives , 400,50 );
    }
}

function keyPressed()
{
    if(gameState == 0 ){
        newState = 1;
        countDown = 300;
        lives = 3;
        secretKeyCode = round(random(65,90));
        hotKey = round(random(65,90));
    }
    if(gameState == 1){
        if(secretKeyCode == hotKey)
        {
            newState = 1;
        }
        else if(keyCode == secretKeyCode)
        {
            newState = 3;
        }
        else if(keyCode == hotKey)
        {
            countDown += 100;
        }
        else if(lives == 0)
        {
            newState = 2;
        }
        else
        {
            lives -= 1;
            newState = 1;
        }
        
    }
    if(gameState == 3){
        newState = 0;
    }
    if(gameState == 2){
        newState = 0;
    }
    gameState = newState;
    
}







