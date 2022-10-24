function Tree(x) {
  this.s = random(80, 100); //size
  this.h = random(60, 100); //height
  this.w = random(30, 35); //width,
  this.color = random(100, 150); //color
  this.pos = createVector(x, floorPos_y - this.h);
  this.draw = function () {
    fill(102, 51, 0);
    rect(this.pos.x, this.pos.y, this.w, this.h); //trunk

    fill(0, this.color, 0, 200);
    ellipse(this.pos.x, this.pos.y, this.s + this.h * 0.1);
    ellipse(this.pos.x + 20, this.pos.y - 10, this.s + this.h * 0.1);
    ellipse(this.pos.x + 40, this.pos.y, this.s + this.h * 0.1);
  };
}
function Tree2(x) {
  this.h = random(25, 30); //height
  this.w = 20; //width,
  this.pos = createVector(x, floorPos_y - this.h);
  this.draw = function () {
    fill(161, 118, 76);
    rect(this.pos.x - this.w / 2, this.pos.y, this.w, this.h); //trunk

    fill(9, 131, 46);
    triangle(
      this.pos.x,
      this.pos.y - 70,
      this.pos.x - 30,
      this.pos.y,
      this.pos.x + 30,
      this.pos.y
    );
    triangle(
      this.pos.x,
      this.pos.y - 110,
      this.pos.x - 30,
      this.pos.y - 30,
      this.pos.x + 30,
      this.pos.y - 30
    );
  };
}
