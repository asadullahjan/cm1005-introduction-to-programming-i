var flowers;
var flower;

function setup()
{
    createCanvas(1000,500);
    // base_x = width/2;
    // base_y = height - 50;

    flowers = [];
    
    flower = {
        base_x: 0,
        base_y: height - 50,
        stem_h: 100,
        col: color(255,50,50)
    }
    
    for(var i = 0; i < 10; i++)
    {
    
        flower.base_x = i * 100;
        flower.stem_h = random(50,400);
        flower.col = color(
            random(0,255), 
            random(0,255),
            random(0,255)
            );
        // flowers.push(console.log(flower));
            flowers.push(flower);
    }
        
}
    

function draw()
{
    background(150,150,250);
    for(var i = 0; i < flowers.length; i++)
    {
        // console.log(flowers[i])
        drawFlower(flowers[i]);
    }
}


function drawFlower(flowerA)
{
    noFill();
    strokeWeight(10);
    stroke(0,200,50);
    curve(flowerA.base_x + 200, flowerA.base_y + 100, 
          flowerA.base_x , flowerA.base_y,
          flowerA.base_x , flowerA.base_y - flowerA.stem_h,
          flowerA.base_x - 200, flowerA.base_y - (flowerA.stem_h + 100))

    noStroke();
    fill(flowerA.col);
    ellipse(flowerA.base_x + 45, flowerA.base_y - flowerA.stem_h,70,50);
    ellipse(flowerA.base_x - 45, flowerA.base_y - flowerA.stem_h,70,50);
    ellipse(flowerA.base_x ,flowerA.base_y + 45 - flowerA.stem_h,50,70);
    ellipse(flowerA.base_x ,flowerA.base_y - 45 - flowerA.stem_h,50,70);
    
    
    //flip the colour
    flowerA.col = color(
       blue(flowerA.col),
        red(flowerA.col),
         green(flowerA.col)
    );
    
    //draw the center
    fill(flowerA.col);
    ellipse(flowerA.base_x,flowerA.base_y - flowerA.stem_h,50,50); 
}






