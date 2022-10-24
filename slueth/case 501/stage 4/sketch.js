/*

Officer: 6012708
CaseNum: 501-3-83949930-6012708

Case 501 - John Von Neuman - stage 4

This is our last chance to catch that killer kid.
Let's hope that John Von Neuman can identify the killer.
To speak to him follow Madame McCarthy’s advice below.

John was ever the keen chess player. Many an hour was spent considering his next move.
To speak to John beyond the grave you must place a chess piece in each of the dashed circles.
Use the image() and the chessPiece variable command to place the pieces in their positions.
Do this by using two for loops in a nested pattern.
You will need to use some conditional statements in order to position each row to match the pattern.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()
 * if()

*/

var backgroundImg, chessPiece;

function preload() {
    backgroundImg = loadImage("background.jpg");
    chessPiece = loadImage("Piece.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);
    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    for (var row = 0; row < 4; row++) 
    {
        for (var column = 0; column < 5; column++) 
            {
            
                if(row == 0){
                    image(chessPiece, 692 + column * 65, 365 + row * 60);
                }
                if(row == 1){
                    image(chessPiece, 760 + column * 65, 365 + row * 60);
                }
                if(row == 2){
                    image(chessPiece, 825 + column * 65, 365 + row * 60);
                }
                if(row == 3){
                    image(chessPiece, 890 + column * 65, 365 + row * 60);
                }
            }
        

    }
}
