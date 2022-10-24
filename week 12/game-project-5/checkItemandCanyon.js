function checkCanyon(t_canyon) 
{
	if (gameChar_world_x > t_canyon.posX + 10 &&
		gameChar_world_x < t_canyon.posX + t_canyon.width && 
		gameChar_y > floorPos_y - 10) 
	{
		isPlummeting = true;
	}
}
function checkCollectable(t_collectable) 
{
	if (dist(t_collectable.posX, t_collectable.posY,
		 	 gameChar_world_x, gameChar_y) < 35) 
	{
		t_collectable.isFound = true;
	}
	
}