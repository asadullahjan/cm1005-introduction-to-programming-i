function Building(x, y) {
  this.pos = createVector(x, y);
  this.h = floorPos_y - this.pos.y;
  this.draw = function () {
    fill(120);
    rect(this.pos.x, this.pos.y, 150, this.h); //building
    fill(20);
    rect(this.pos.x - 5, this.pos.y, 160, 10); //roof
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 2; j++) {
        rect(this.pos.x + 15 + j * 70, this.pos.y + 50 + i * 60, 50, 50); //windows
      }
    }
  };
}

function House(x, y) {
  this.pos = createVector(x, y);
  this.h = floorPos_y - this.pos.y;
  this.w = 230;
  this.draw = function () {
    fill(120);
    rect(this.pos.x, this.pos.y, this.w, this.h); //building

    fill(0);
    triangle(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.w / 2,
      this.pos.y - 50,
      this.pos.x + this.w,
      this.pos.y
    ); //roof
    fill(20);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        rect(this.pos.x + 15 + j * 70, this.pos.y + 50 + i * 60, 50, 50); //windows
      }
    }
  };
}
