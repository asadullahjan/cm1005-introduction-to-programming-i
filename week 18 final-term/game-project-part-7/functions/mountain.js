function Mountain(x) {
  this.pos = createVector(x,floorPos_y);
  this.draw = function () {
    fill(121, 99, 66);
    beginShape();
    vertex(this.pos.x, this.pos.y);
    vertex(this.pos.x + 20, this.pos.y - 50);
    vertex(this.pos.x + 30, this.pos.y - 100);
    vertex(this.pos.x + 40, this.pos.y - 100);
    vertex(this.pos.x + 50, this.pos.y - 110);
    vertex(this.pos.x + 60, this.pos.y - 120);
    vertex(this.pos.x + 70, this.pos.y - 160);
    vertex(this.pos.x + 90, this.pos.y - 200);
    vertex(this.pos.x + 100, this.pos.y - 230);
    vertex(this.pos.x + 110, this.pos.y - 250);
    vertex(this.pos.x + 130, this.pos.y - 290);
    vertex(this.pos.x + 140, this.pos.y - 310);
    vertex(this.pos.x + 143, this.pos.y - 310);
    vertex(this.pos.x + 150, this.pos.y - 290);
    vertex(this.pos.x + 160, this.pos.y - 270);
    vertex(this.pos.x + 170, this.pos.y - 240);
    vertex(this.pos.x + 180, this.pos.y - 220);
    vertex(this.pos.x + 190, this.pos.y - 200);
    vertex(this.pos.x + 200, this.pos.y - 180);
    vertex(this.pos.x + 210, this.pos.y - 170);
    vertex(this.pos.x + 220, this.pos.y - 140);
    vertex(this.pos.x + 230, this.pos.y - 120);
    vertex(this.pos.x + 240, this.pos.y - 90);
    vertex(this.pos.x + 250, this.pos.y - 80);
    vertex(this.pos.x + 280, this.pos.y - 20);
    vertex(this.pos.x + 290, this.pos.y);
    endShape();

    fill(200);
    beginShape();
    vertex(this.pos.x + 100, this.pos.y - 150);
    vertex(this.pos.x + 110, this.pos.y - 160);
    vertex(this.pos.x + 140, this.pos.y - 180);
    endShape();

    fill(200);
    beginShape();
    vertex(this.pos.x + 130, this.pos.y - 150);
    vertex(this.pos.x + 140, this.pos.y - 160);
    vertex(this.pos.x + 170, this.pos.y - 180);
    endShape();

    fill(200);
    beginShape();
    vertex(this.pos.x + 120, this.pos.y - 220);
    vertex(this.pos.x + 130, this.pos.y - 230);
    vertex(this.pos.x + 150, this.pos.y - 260);
    endShape();

    fill(200);
    beginShape();
    vertex(this.pos.x + 130, this.pos.y - 180);
    vertex(this.pos.x + 140, this.pos.y - 190);
    vertex(this.pos.x + 170, this.pos.y - 210);
    endShape();

    fill(200);
    beginShape();
    vertex(this.pos.x + 100, this.pos.y - 180);
    vertex(this.pos.x + 110, this.pos.y - 190);
    vertex(this.pos.x + 140, this.pos.y - 210);
    endShape();
  };
}
