function startGame()
{
    
	gameChar_screen_x = width / 2 ;
	gameChar_screen_y = height/2;gameChar_world_x = gameChar_screen_x - scrollPos;
	// Variable to control the background scrolling.
	scrollPos = 0;
	seceneryScrollPos = 0;
	victorySoundPlayVar = 0;
	fallSoundPlayVar = 0;
	
	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	
	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	isRaining = true;
	
	game_score = 0;

	var game_length = random(7000,8000);//it is the total length of game.
	flagPole = flagpole(game_length);
	// Initialise arrays of scenery objects.
	trees = [];
	var treesNum = 30
	var treeincr = game_length/treesNum;//it divides all the trees x-position equal
	for(var i =0 ; i<treesNum;i++){
		trees.push(
			
				tree
				(
					tressAnchorX + treeincr * i + random(-40,40),//x-position
					random(100, 140),//size
					random(100,160),//height
					random(40,50),//width,
					random(100,150),//color
				)
			);
	}

	clouds = [];
	var cloudsNum = 27
	var cloudincr = game_length/cloudsNum;//it divides all the clouds x-position equal
	for(var i=0 ; i < cloudsNum;i++)
	{
		clouds.push
			(
				cloud
				(
					cloudAnchorX + cloudincr * i + random(-50,50),//x-position
					random(50, 150),//y-position
					random(1.0, 1.5),//size
					random(0.5, 1.0),//direction.
					random(100,150),//color
				)	
			)
	}

	mountains = [];
	var mountainsNum = 20
	var mountainincr = game_length/mountainsNum;//it divides all the mountains x-position equal
	for(var i=0 ; i<mountainsNum;i++)
	{
		mountains.push
			(
			
				mountain
				(
					mountainAnchorX + mountainincr * i + random(-150,150),
					random(90,140),//y-position
					random(255,230),//mountaintop color
				)

			);
	}

	canyons = [];
	var canyonsNum = 10
	var canyonincr = game_length/canyonsNum;//it divides all the canyons x-position equal
	for(var i=0 ; i<canyonsNum;i++)
	{
			canyons.push
		 	(
				canyon
				(
					canyonAnchorX + canyonincr * i + random(-75,35)
				)
		 	)
	}


	collectables = [];
	var collectablesNum = 35;
	var collectableincr = game_length/collectablesNum;//it divides all the collectable x-position equal
	for(var i=0 ; i<collectablesNum;i++)
	{
		collectables.push
		(
			collectable
			(
				collactableAnchorX + collectableincr * i + random(-50,50),
				random(floorPos_y - 10, floorPos_y - 50)
			)
		);
	}
	
}