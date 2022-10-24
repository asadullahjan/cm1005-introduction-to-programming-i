function FlagPole(x) {
  this.pos = createVector(x, floorPos_y - 200);
  this.isReached = false;
  this.draw = function () {
		noStroke();
    fill(255);
    rect(this.pos.x, this.pos.y, 10, 200);
    if (this.isReached) {
      fill(0);
      rect(this.pos.x, this.pos.y, 50, 50);
    } else {
      rect(this.pos.x, this.pos.y + 150, 50, 50);
    }
  };
  this.check = function () {
    if (gameChar_world_x >= this.pos.x && !this.isReached) {
      this.isReached = true;
    }
  };
}
