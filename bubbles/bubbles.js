
const circleRadius = 80;

let playing = true;
let bubbles = [];
let speed = 0.03;
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
  canvas = createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
  background('#ECEFF4');
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
  if (random() < 0.03 + (score / 1000) && playing) {
    bubbles.push(new Bubble());
    if (bubbles.length >= 30) {
      playing = false;
    }
  }
  if (playing) {
    textSize(30);
    textAlign(LEFT, CENTER);
    text(str(score), windowWidth - 80, 50);
    text('❤️'.repeat(lives), 25, 50);
  } else {
    textSize(50);
    textAlign(CENTER, CENTER);
    fill(50, 50);
    rect(0, 0, width, height);
    text("Game over!\nScore: " + str(score), 150, 100);
  }
}

function reset() {
  playing = true;
  bubbles = [];
  lives = 3;
  score = 0;
}

var released = true;
function mouseReleased(){
	released = true;
	return false;
}

function mousePressed(){
	if(!released){
		return;
	}
	released = false;
  if (playing) {
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
        playing = false;
      }
    }
  } else {
    reset();
  }
}
