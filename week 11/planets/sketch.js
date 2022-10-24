
var planets = [
	{sizes : 4   , names : "Mercury" , colours : "grey"  },
	{sizes : 9   , names : "Venus"   , colours : "brown" },
	{sizes : 10  , names : "Earth"   , colours : "blue"  },
	{sizes : 5   , names : "Mars"    , colours : "red"   },
	{sizes : 110 , names : "Jupiter" , colours : "sienna"},
	{sizes : 95  , names : "Saturn"  , colours : "pink"  },
	{sizes : 40  , names : "Uranus"  , colours : "blue"  },
	{sizes : 40  , names : "Neptune" , colours : "cyan"  },
]

function setup()
{
	createCanvas(1000, 600);
}



function draw()
{
	background(0);
	textAlign(CENTER);
	fill(255);

	Planets();
	
}

function Planets() {
	for(var i=0 ; i < planets.length ; i++){
		fill(planets[i].colours);
		ellipse(50 + i*125, height / 2, planets[i].sizes);
		fill(255);
		text(planets[i].names, 50 + i*125, height / 2 + 150);
	}
}