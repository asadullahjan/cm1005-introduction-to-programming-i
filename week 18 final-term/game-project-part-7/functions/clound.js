function Cloud(x) {
  this.y = random(50, 150);
  this.pos = createVector(x, this.y);
  this.s = random(0.8, 1);//scale
  this.d = random(0.5, 1.0);//rain direction.
  this.color = random(150, 225);
  this.rainAry = [];
  this.draw = function () {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 60 * this.s);
    ellipse(
      this.pos.x + 30 * this.s,
      this.pos.y - 10,
      60 * this.s,
      80 * this.s
    );
    ellipse(this.pos.x + 60 * this.s, this.pos.y - 5, 50 * this.s, 60 * this.s);
    ellipse(this.pos.x + 90 * this.s, this.pos.y, 50 * this.s);
  };
  this.rain = function () {
    if (isRaining) {
      this.rainAry.push({
        x: random(this.pos.x - 10 * this.s, this.pos.x + 90 * this.s),
        y: this.pos.y,
        speed: random(8, 10),
      });

      if (rainingSound.isLoaded() && (isRight || isLeft)) {
        rainingSound.playMode("untilDone");
        rainingSound.loop();
      }
    }

    for (var i = 0; i < this.rainAry.length; i++) {
      fill(205, 205, 205, 150);
      noStroke();
      ellipse(this.rainAry[i].x, this.rainAry[i].y, 3, 10);
      this.rainAry[i].y += this.rainAry[i].speed;
      this.rainAry[i].x += this.d;
      if (this.rainAry[i].y > floorPos_y) {
        this.rainAry.splice(i, 1);
      }
    }
  };
}
