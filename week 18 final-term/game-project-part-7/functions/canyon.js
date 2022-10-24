function Canyon(x) {
  this.pos = createVector(x, floorPos_y);
  this.width = random(100, 120);
  this.falling = false;
  this.draw = function () {
    noStroke();
    fill(100, 155, 255);
    rect(this.pos.x, floorPos_y, this.width, 200);
    fill(15, 94, 156, 150);
    rect(this.pos.x, floorPos_y + 50, this.width, 100);
    // green edges
    fill(0, 155, 0);
    rect(this.pos.x - 10, floorPos_y, 20, 15, 10);
    rect(this.pos.x + this.width - 10, floorPos_y, 20, 15, 10);
  };
  this.check = function () {
    if (
      gameChar_world_x > this.pos.x + 10 &&
      gameChar_world_x < this.pos.x + this.width &&
      gameChar_screen_y > floorPos_y - 5
    ) {
      this.falling = true;
    }
  };
  this.checkPlayerDie = function () {
    if (gameChar_screen_y > height - 50) {
      lives -= 1;
      if (lives > 0) {
        waterSplashSound.play();
        startGame();
      } else {
        lives = 0;
      }
    }
  };
}
