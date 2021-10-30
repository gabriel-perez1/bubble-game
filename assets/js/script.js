let particleSystem = [];
let particleNum = 50;
let vx = 0, vy = 0; // user particle position

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

    // changes color once particles converge
    if (particleSystem[i].contain(vx, vy)) {
      particleSystem[i].changeColor('yellow');
    }
    else {
      particleSystem[i].changeColor('black');
    }
    /* another way to determine when they converge:
    let d = dist(vx, vy, particleSystem[i].x, particleSystem[i].y);
    if (d < 60) {
      particleSystem[i].changeColor('yellow');
    }
    else {
      particleSystem[i].changeColor('black');
    }
  } */
}
  // particle that user controls
  noCursor();
  fill('red');
  noStroke();
  circle(vx, vy, 20);

  if (keyIsDown(LEFT_ARROW)) {
    vx -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    vx += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    vy -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    vy += 5;
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

  // function that returns true if particle and vehicle position converge
  contain(x2, y2)  {
    let d = dist (x2, y2, this.x, this.y);
    if (d < 20) { //20 is the size of the particle so if the distance is less than, they're touching
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
