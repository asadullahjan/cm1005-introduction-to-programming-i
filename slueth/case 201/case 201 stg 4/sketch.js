/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 6012708
CaseNum: 201-3-51700646-6012708

As you enter the ALGOL warehouse you are struck by the most horrendous stench
 - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. 
 Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about
  recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(425,230);
    vertex(500,400);
    vertex(455,405);
    vertex(450,495);
    vertex(485,495);
    vertex(480,435);
    vertex(520,445);
    vertex(530,465);
    vertex(570,485);
    vertex(620,480);
    vertex(630,460);
    vertex(655,465);
    vertex(670,400);
    vertex(790,360);
    vertex(765,315);
    vertex(620,375);
    vertex(520,90);
    vertex(415,145);
    vertex(445,215);
    vertex(425,230);
    endShape();
}
