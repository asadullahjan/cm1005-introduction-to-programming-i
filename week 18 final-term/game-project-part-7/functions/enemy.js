function Enemy(x, Range) {
  this.pos = createVector(x, floorPos_y - 5);
  this.goingRight = true;
  this.range = Range;
  this.draw = function () {
    fill(200);
    noStroke();
    ellipse(this.pos.x - 3, this.pos.y + 8, 3, 6);
    ellipse(this.pos.x + 3, this.pos.y + 8, 3, 6);

    beginShape();
    curveVertex(this.pos.x - 15, this.pos.y - 35);
    curveVertex(this.pos.x - 15, this.pos.y - 35);
    curveVertex(this.pos.x - 8, this.pos.y - 10);
    curveVertex(this.pos.x - 8, this.pos.y + 5);
    curveVertex(this.pos.x + 8, this.pos.y + 5);
    curveVertex(this.pos.x + 8, this.pos.y - 10);
    curveVertex(this.pos.x + 15, this.pos.y - 35);
    curveVertex(this.pos.x + 15, this.pos.y - 35);
    endShape();

    fill(165, 42, 42);
    beginShape();
    vertex(this.pos.x - 20, this.pos.y - 30);
    bezierVertex(
      this.pos.x - 30,
      this.pos.y - 20,
      this.pos.x,
      this.pos.y - 80,
      this.pos.x + 20,
      this.pos.y - 30
    );
    endShape();
    fill(0);
    ellipse(this.pos.x - 5, this.pos.y - 15, 5);
    ellipse(this.pos.x + 5, this.pos.y - 15, 5);
    rect(this.pos.x - 20, this.pos.y, 40, 3);
    if (!this.goingRight) {
      triangle(
        this.pos.x - 25,
        this.pos.y + 1,
        this.pos.x - 20,
        this.pos.y - 5,
        this.pos.x - 20,
        this.pos.y + 6
      );
    } else {
      triangle(
        this.pos.x + 25,
        this.pos.y + 1.5,
        this.pos.x + 20,
        this.pos.y - 4,
        this.pos.x + 20,
        this.pos.y + 6
      );
    }
  };
  this.update = function () {
    if (this.goingRight) {
      this.pos.x += 1;
      if (this.pos.x > this.range + 100) {
        this.goingRight = false;
      }
    } else {
      this.pos.x -= 1;
      if (this.pos.x < this.range - 100) {
        this.goingRight = true;
      }
    }
  };
  this.check = function () {
    if (
      gameChar_world_x > this.pos.x - 30 &&
      gameChar_world_x < this.pos.x + 20 &&
      gameChar_screen_y > this.pos.y - 30 &&
      gameChar_screen_y < this.pos.y + 10
    ) {
      lives -= 1;
      if (lives > 0) {
        startGame();
        stabSound.play();
      } else {
        lives = 0;
      }
    }
  };
}
