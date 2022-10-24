function Platform(x, y) {
  this.pos = createVector(x, y);
  this.length = 100;
  this.draw = function () {
    noStroke();
    fill(139, 103, 66);
    rect(this.pos.x, this.pos.y, this.length, 20);
    fill(0, 200, 0);
    rect(this.pos.x - 2, this.pos.y, this.length + 4, 5, 10);
  };
  this.checkContact = function () {
    if (
      gameChar_world_x > this.pos.x - 2 &&
      gameChar_world_x < this.pos.x + this.length
    ) {
      var d = this.pos.y - gameChar_screen_y;
      if (d >= 0 && d < 5) {
        return true;
      }
    }

    return false;
  };
}
function MovingPlatform(x, y, Range) {
  this.pos = createVector(x, y);
  this.length = 100;
  this.speed = random(1, 2);
  this.range = Range;
  this.movingRight = true;
  this.onTop = false;
  this.draw = function () {
    noStroke();
    fill(139, 103, 66);
    rect(this.pos.x, this.pos.y, this.length, 20);
    fill(0, 200, 0);
    rect(this.pos.x - 2, this.pos.y, this.length + 4, 5, 10);
  };
  this.checkContact = function () {
    if (
      gameChar_world_x > this.pos.x - 2 &&
      gameChar_world_x < this.pos.x + this.length
    ) {
      var d = this.pos.y - gameChar_screen_y;
      if (d >= 0 && d < 5) {
        return true;
      }
    }

    return false;
  };
  this.update = function () {
    if (this.movingRight) {
      if (this.onTop) {
        gameChar_screen_x += this.speed;
      }
      this.pos.x += this.speed;
      if (this.pos.x > this.range + 100) {
        this.movingRight = false;
      }
    } else {
      if (this.onTop) {
        gameChar_screen_x -= this.speed;
      }
      this.pos.x -= this.speed;
      if (this.pos.x < this.range - 100) {
        this.movingRight = true;
      }
    }
  };
}
