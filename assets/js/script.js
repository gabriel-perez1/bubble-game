let particleSystem = [];
let particleNum = 30;
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