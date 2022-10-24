function Collectable(x) {
  this.pos = createVector(x, random(floorPos_y - 10, floorPos_y - 50));
  this.size = random(20, 30);
  this.isFound = false;
  this.draw = function () {
    strokeWeight(2);
    stroke(0, 255, 0);
    line(this.pos.x + 3, this.pos.y, this.pos.x + 7, this.pos.y - this.size);
    noStroke();
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y + 5, this.size * 0.8, this.size);
    ellipse(this.pos.x + 7, this.pos.y + 5, this.size, this.size);
  };
  this.check = function () {
    if (
      dist(
        this.pos.x,
        this.pos.y,
        gameChar_world_x + 5,
        gameChar_screen_y - 20
      ) < 35
    ) {
      this.isFound = true;
      fruitPickupSound.play();
      game_score += 1;
    }
  };
}
function Collectable2(x, y) {
  this.pos = createVector(x, y);
  this.isFound = false;
  this.draw = function () {
    fill(255, 0, 0);
    stroke(50);
    beginShape();
    vertex(this.pos.x, this.pos.y - 20);
    vertex(this.pos.x + 15, this.pos.y - 5);
    vertex(this.pos.x + 10, this.pos.y + 15);
    vertex(this.pos.x - 10, this.pos.y + 15);
    vertex(this.pos.x - 15, this.pos.y - 5);
    vertex(this.pos.x, this.pos.y - 20);
    vertex(this.pos.x, this.pos.y - 10);
    vertex(this.pos.x - 8, this.pos.y - 3);
    vertex(this.pos.x - 5, this.pos.y + 10);
    vertex(this.pos.x + 5, this.pos.y + 10);
    vertex(this.pos.x + 8, this.pos.y - 3);
    vertex(this.pos.x, this.pos.y - 10);
    endShape();
  };
  this.check = function () {
    if (
      dist(
        this.pos.x,
        this.pos.y,
        gameChar_world_x + 5,
        gameChar_screen_y - 20
      ) < 30
    ) {
      this.isFound = true;
      collectable2PickupSound.play();
      game_score += 1;
    }
  };
}
