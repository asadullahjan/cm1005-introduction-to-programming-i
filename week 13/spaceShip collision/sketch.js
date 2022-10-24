var spaceship_a;
var spaceship_b;
var isCollided;
function setup()
{
    createCanvas(1000,1000);

    spaceship_a = 
    {
        x:width/2,y:height/2,radius:50
    };
    spaceship_b = 
    {
        x:width/2,y:height/2,radius:50
    };
    spaceship_a.speed_x = random(-5,5);
    spaceship_a.speed_y = random(-5,5);
    spaceship_b.speed_x = random(-5,5);
    spaceship_b.speed_y = random(-5,5);

}
    


function draw()
{
    background(0);
    noStroke();

    isCollided = checkCollision(spaceship_a,spaceship_b,
                   spaceship_a.radius+spaceship_b.radius);
    
    drawSpaceShip(spaceship_a,isCollided);
    drawSpaceShip(spaceship_b,isCollided);
    fly(spaceship_a);
    fly(spaceship_b);
    bouncingOffWall(spaceship_a);
    bouncingOffWall(spaceship_b);
}


function drawSpaceShip(spaceship , isCollided)
{
    var rx = 0;
    var ry = 0;

    if(isCollided)
    {
        rx = random(-10, 10);
        ry = random(-10,10);
    }

    fill(100,200,255);
    ellipse(spaceship.x + rx ,
            spaceship.y - spaceship.radius/2 +ry,
            spaceship.radius*0.75,
            spaceship.radius);
    if(isCollided)
    {
        fill(150,0,0);
    }
    else
    {
        fill(100);
    }

    ellipse(spaceship.x+rx,spaceship.y+ry,
            spaceship.radius*2,spaceship.radius);
}

function checkCollision(point_a,point_b,threshold)
{
    var d = dist(point_a.x,point_a.y,point_b.x,point_b.y);
    if (d<threshold)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function fly(spaceship)
{
    spaceship.x += spaceship.speed_x;
    spaceship.y += spaceship.speed_y;
}

function bouncingOffWall(spaceship)
{
    if(spaceship.x <= 0 || spaceship.x >= width )
    {
        spaceship.speed_x *= -1;
        
    }
    if(spaceship.y <= 0 || spaceship.y >= height)
    {
        spaceship.speed_y *= -1;
    }
}