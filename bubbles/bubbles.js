// const screenWidth = windowWidth - 10;
// const screenHeight = windowHeight - 10;
const circleRadius = 80;

let bubbles = [];
let lives = 3;
let score = 0;

class Bubble {
  constructor() {
    let colors = [color('#BF616A'),
                  color('#D08770'),
                  color('#EBCB8B'),
                  color('#A3BE8C'),
                  color('#B48EAD')];
    this.x = random(0, windowWidth - 10);
    this.y = random(0, windowHeight - 10);
    this.radius = random(25, circleRadius);
    this.color = random(colors);
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  }
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
  background('#ECEFF4');
  textSize(32);
  text('Score: ' + str(score), 25, 50);
  text('Lives: ' + str(lives), 25, 100);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
  if (random() < 0.03) {
    bubbles.push(new Bubble());
    if (bubbles.length >= 50) {
      reset();
    }
  }
}

function reset() {
  bubbles = [];
  lives = 3;
  score = 0;
}

function mouseReleased() {
  unpopped = true
  for (let i = bubbles.length - 1; i >= 0; i--) {
    var b = bubbles[i]
    if (dist(mouseX, mouseY, b.x, b.y) < b.radius) {
        score += 1;
        bubbles.splice(i, 1);
        unpopped = false;
        break;
    }
  }
  if (unpopped) {
    lives -= 1;
    if (lives == 0) {
      reset();
    }
  }
}
