let particleSystem = [];
let particleNum = 50;
let vx = 0, vy = 0; // user particle position
let timer = 10; // game duration

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

    // deletes particle when user particle touches them
    if (particleSystem[i].contain(vx, vy)) {
      // splice is used to modify content of array
      particleSystem.splice(i, 1); 
    }
    
    /* another way to determine when they converge:
    let d = dist(vx, vy, particleSystem[i].x, particleSystem[i].y);
    if (d < 20) {
      
    }
    else {
    
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
  textAlign(CENTER);
  if (frameCount%60 === 0 && timer > 0) {
    timer --;
  }
  else if (timer === 0) {
    text("Game Over", width/2, height/2);
    let score = particleNum - particleSystem.length;
    textSize(20);
    text("Final Score: " + score, width/2, height/2-40);
  }
  text(timer, width/2, 30);
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
