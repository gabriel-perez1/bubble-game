class particle {
  constructor() {
    this.speed = createVector(random(-2, 2), random(-2, 2));
    this.x = random(width);
    this.y = random(height);
    this.r = random(20); //particle radius
    this.c = color('black');
  }

  move () {
    this.x = this.x + this.speed.x;
    this.y = this.y + this.speed.y;
  }

  show () {
    fill(this.c);
    circle(this.x, this.y, this.r*2);
  }

  limit () {
    if (this.x > width || this.x < 0) {
      this.speed.x = -this.speed.x;
    }
    if (this.y > height || this.y < 0) {
      this.speed.y = -this.speed.y;    
    }
  }

  // function that returns true if particle and vehicle position converge
  contain(x2, y2)  {
    let d = dist (x2, y2, this.x, this.y);
    if (d < this.r * 2) {
      return true;
    }
    else {
      return false;
    }
  }
  changeColor(newColor) {
    this.c = color (newColor);
  }
}