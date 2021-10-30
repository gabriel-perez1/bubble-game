let particleSystem = [];
let particleNum = 50;

// adds particle to array
function setup () {
  createCanvas(400, 400);
  for (let i = 0; i < particleNum; i++) {
    let newParticle = new particle();
    particleSystem.push(newParticle);
  }
}

function draw () {
  background(220);
  for (let i = 0; i < particleSystem.length; i++) {
    particleSystem[i].move();
    particleSystem[i].show();
    particleSystem[i].limit();
  }
}


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
}
