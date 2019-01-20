import java.util.List;

int width = 15;
int height = 25;
int blocksize = 20;

int[][] grid = new int[width+1][height+1];
boolean pause = true;
Shape current;

class Block {
 Shape owner;
 int x;
 int y;

 void drawBlock() {
   fill(owner.col);
   grid[x][y] = 1;
   rect(x * blocksize, y * blocksize, blocksize - 1, blocksize - 1);
 }

 void eraseBlock() {
   fill(#FEFCFB);
   grid[x][y] = 0;
   rect(x * blocksize, y * blocksize, blocksize, blocksize);
 }

 void moveDown() {
   if (this.y < height) {
     this.y += 1;
   }

   if ((this.y == height || grid[x][y+1] == 1) && !(owner.locked)) {
     owner.lock();
   }
 }

 void moveLeft() {
   if (grid[x-1][y] != 1 && this.x > 1) {
     this.x -= 1;
   }
 }

 void moveRight() {
   if (grid[x+1][y] != 1 && this.x < width - 1) {
     this.x += 1;
   }
 }

 public Block(int x, int y, Shape owner) {
   this.x = x;
   this.y = y;
   this.owner = owner;
 }
}

class Shape {
  ArrayList<Block> blocks;
  boolean locked = false;

  int x;
  int y;

  color col;

  void drawShape() {
    for (Block b : blocks) {
      b.drawBlock();
    }
  }

  void eraseShape() {
    for (Block b : blocks) {
      b.eraseBlock();
    }
  }

  void moveDown() {
    current.y += 1;
    for (Block b : blocks) {
      b.moveDown();
    }
  }

  void moveLeft() {
    current.x -= 1;
    for (Block b : blocks) {
      b.moveLeft();
    }
  }

  void moveRight() {
    current.x += 1;
    for (Block b : blocks) {
      b.moveRight();
    }
  }

  void addBlock(int x, int y) {
    this.blocks.add(new Block(x, y, this));
  }

  void lock() {
    this.locked = true;
  }

  public Shape(int x, int y) {
    this.x = x;
    this.y = y;
    this.blocks = new ArrayList<Block>();
    this.col = color(getRandomColour());
    switch ((int )(Math.random() * 7)) {
      case 0:
        this.addBlock(x, y);
        this.addBlock(x + 1, y);
        this.addBlock(x + 2, y);
        this.addBlock(x + 3, y);
        break;
      case 1:
        this.addBlock(x, y);
        this.addBlock(x + 1, y);
        this.addBlock(x, y + 1);
        this.addBlock(x + 1, y + 1);
        break;
      case 2:
        this.addBlock(x, y);
        this.addBlock(x + 1, y);
        this.addBlock(x + 2, y);
        this.addBlock(x, y + 1);
        break;
      case 3:
        this.addBlock(x, y);
        this.addBlock(x + 1, y);
        this.addBlock(x + 2, y);
        this.addBlock(x + 2, y + 1);
        break;
      case 4:
        this.addBlock(x, y);
        this.addBlock(x + 1, y);
        this.addBlock(x + 2, y);
        this.addBlock(x + 2, y + 1);
        break;
      case 5:
        this.addBlock(x, y);
        this.addBlock(x + 1, y);
        this.addBlock(x + 1, y + 1);
        this.addBlock(x + 2, y + 1);
        break;
      case 6:
        this.addBlock(x, y + 1);
        this.addBlock(x + 1, y + 1);
        this.addBlock(x + 1, y);
        this.addBlock(x + 2, y);
        break;
    }
  }
}

void newShape() {
  current = new Shape((int )(width / 2), 1);
  current.drawShape();
}

color getRandomColour() {
  return color(234, // (int )(Math.random() * 255 + 1),
               (int )(Math.random() * 104 + 1),
               (int )(Math.random() * 68 + 1));
}

void keyPressed() {
  current.eraseShape();
  switch (keyCode) {
    case LEFT:
      current.moveLeft();
      break;
    case RIGHT:
      current.moveRight();
      break;
    case DOWN:
      frameRate(100);
      break;
    case UP:
      int x = current.x;
      int y = current.y;
      current = new Shape(x, y);
      break;
    case 80:
      togglePause();
      break;
  }
  current.drawShape();
}

void togglePause() {
  if (pause) {
    pause = false;
    frameRate(4);
  } else {
    pause = true;
    frameRate(0.00001);
  }
}

void setup() {
  size(300, 510);
  rectMode(CENTER);
  background(#FEFCFB);
  noStroke();
  newShape();
  frameRate(0);
}

void draw() {
  if (!pause) {
    if (current.locked) {
      frameRate(4);
      newShape();
    } else {
      current.eraseShape();
      current.moveDown();
      current.drawShape();
    }
  }
}
