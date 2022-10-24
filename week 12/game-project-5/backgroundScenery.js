function drawTree() {
	//draws multiple trees.
	for (var i = 0; i < trees.length; i++) 
	{
		fill(102, 51, 0);
		rect(trees[i].posX,floorPos_y - height / 4,55, 145);//trunk

		fill(0, 125, 0);
		ellipse(trees[i].posX,floorPos_y - height / 4,trees[i].size);
		ellipse(trees[i].posX + 25,floorPos_y - height / 4,trees[i].size);
		ellipse(trees[i].posX + 50,floorPos_y - height / 4,trees[i].size);
	}
}

////////////CLOUND FUNCTION////////////////
function drawCloud() {
	//draws multiple clouds
	for (var i = 0; i < clouds.length; i++) 
	{
		noStroke();
		fill(255);
		ellipse(
			clouds[i].posX,clouds[i].posY,60 * clouds[i].scale
		);
		ellipse(
			clouds[i].posX + 30 * clouds[i].scale,clouds[i].posY - 10,
			60 * clouds[i].scale,80 * clouds[i].scale
		);
		ellipse(
			clouds[i].posX + 60 * clouds[i].scale,clouds[i].posY - 5,
			50 * clouds[i].scale,60 * clouds[i].scale
		);
		ellipse(
			clouds[i].posX + 90 * clouds[i].scale,
			clouds[i].posY,50 * clouds[i].scale
		);
	}
}

/////////////MOUNTAIN FUNCTION///////////
function drawMountain() {
	//draws multiple mountain.   
	for (var i = 0; i < mountains.length; i++) 
	{
		noStroke();
		fill(121, 99, 66);
		triangle(
			mountains[i].posX, mountains[i].posY,
			mountains[i].posX - 100, mountains[i].posY + 176,
			mountains[i].posX + 100, mountains[i].posY + 176
		);
		fill(255);
		triangle(
			mountains[i].posX, mountains[i].posY,
			mountains[i].posX - 53, mountains[i].posY + 94,
			mountains[i].posX + 53, mountains[i].posY + 94
		);
	}
}





// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon) {

	//draws multiple  canyon.
	noStroke();
	fill(48, 25, 52);
	rect(t_canyon.posX, floorPos_y, t_canyon.width, 200);
	fill(15, 94, 156);
	rect(t_canyon.posX, floorPos_y + 100, t_canyon.width, 100);

}

function drawCollectable(t_collectable) {

	//draws multiple collectable.
	strokeWeight(2);
	stroke(0, 255, 0);
	line(
		t_collectable.posX + 3, t_collectable.posY,
		t_collectable.posX + 7, t_collectable.posY - t_collectable.size
	);
	noStroke();
	fill(255, 0, 0);
	ellipse(
			t_collectable.posX, t_collectable.posY + 5,
			t_collectable.size / 2, t_collectable.size
		);
	ellipse(
			t_collectable.posX + 7, t_collectable.posY + 5,
			t_collectable.size, t_collectable.size
		);


}