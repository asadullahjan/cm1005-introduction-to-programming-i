function startGame() {
  textFont("Courier New");
	const game_length = 5000; //it is the total length of game.

  gameChar_screen_x = width / 2 - 100;
  gameChar_screen_y = floorPos_y;
  gameChar_world_x = gameChar_screen_x - scrollPos;
  charVelocity = 0;
  charGravity = 0.3;
  charJump = -7.5;

  // Variable to control the background scrolling.
  scrollPos = 0;
  seceneryScrollPos = 0;
  sunScrollPos = 0;
	cloudScrollPos = 0;

  // Boolean variables to control the movement of the game character.
  isLeft = false;
  isRight = false;
  isFalling = false;
  isJumping = false;
  isRaining = true;

  victorySoundPlayVar = 0;
  fallSoundPlayVar = 0;
  game_score = 0;

  const cloudsNum = 8;
  const cloudincr = game_length / cloudsNum; //it divides all the clouds x-position equal

	//Arrays for the background scenery.
  clouds = [];
  const collectablePosition = [
    300, 500, 700, 1250, 1500, 1800, 2398, 2630, 3500, 3860,
  ];
  const collectable2Position = [
    [300, floorPos_y - 250],
    [1600, floorPos_y - 250],
    [2100, floorPos_y - 280],
    [3400, floorPos_y - 250],
    [4850, floorPos_y - 170],
  ];
  const treePositions = [0, 300, 750, 1230, 1750, 2570, 3290, 3953, 4340];
  const tree2Positions = [-200, 400, 950, 630, 1550, 2870, 2000, 3753, 4140];
  const canyonPositions = [0, 577, 957, 1977, 2677, 4077];
  const mountainPositions = [0, 100, 1500];
  const buildingPositions = [3000, 3200, 3400, 3600];
  const housePositions = [1860, 2450];
  const enemyPositions = [200, 550, 1000, 1500, 2100, 2500, 3000, 3800, 4200];
  const platformPositions = [
    [400, floorPos_y - 150],
    [1300, floorPos_y - 80],
    [1600, floorPos_y - 150],
    [1800, floorPos_y - 200],
    [3800, floorPos_y - 80],
    [4800, floorPos_y - 150],
  ];
  const movingPlatformPositions = [
    [600, floorPos_y - 80],
    [1350, floorPos_y - 150],
    [1750, floorPos_y - 90],
    [3500, floorPos_y - 150],
    [4500, floorPos_y - 90],
  ];

	//pushing the background scenery into the arrays.
  flagPole = new FlagPole(game_length);
  buildings = buildingPositions.map(
    (buildingPosition) => new Building(buildingPosition, 100)
  );
  houses = housePositions.map((housePosition) => new House(housePosition, 250));
  platforms = platformPositions.map(
    (platformPosition) => new Platform(platformPosition[0], platformPosition[1])
  );
  movingPlatforms = movingPlatformPositions.map(
    (movingPlatformPosition) =>
      new MovingPlatform(
        movingPlatformPosition[0],
        movingPlatformPosition[1],
        movingPlatformPosition[0]
      )
  );
  trees = treePositions.map(
    (treePosition) => new Tree(treeAnchorX + treePosition)
  );
  trees2 = tree2Positions.map(
    (treePosition) => new Tree2(treeAnchorX + treePosition)
  );
  for (var i = 0; i < cloudsNum; i++) {
    clouds.push(
      (cloud = new Cloud(cloudAnchorX + cloudincr * i + random(-50, 50))) //x-position
    );
  }
  mountains = mountainPositions.map(
    (mountainPosition) => new Mountain(mountainAnchorX + mountainPosition)
  );
  canyons = canyonPositions.map(
    (canyonPosition) => new Canyon(canyonAnchorX + canyonPosition)
  );
  collectables = collectablePosition.map(
    (collectablePosition) => new Collectable(collectablePosition)
  );
  collectables2 = collectable2Position.map(
    (collectable2Position) =>
      new Collectable2(collectable2Position[0], collectable2Position[1])
  );
  enemy = enemyPositions.map(
    (enemyPosition) => new Enemy(enemyPosition, enemyPosition)
  );
}
