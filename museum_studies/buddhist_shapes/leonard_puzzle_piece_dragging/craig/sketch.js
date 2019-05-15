var assetFilenames = ['snorlax.png', 'electrabuzz.png', 'chansey.png', 'oddish.png'];
var assetImages = [];
var puzzlePieces = [];

function preload(){
  // load in all images into an array
  for(var i = 0; i < assetFilenames.length; i++) {
    assetImages.push(loadImage("assets/" + assetFilenames[i]));
  }
}

function setup(){
  createCanvas(800, 600);

  // create a few puzzle pieces
  for (var i = 0; i < assetFilenames.length; i++) {
    puzzlePieces.push( new PuzzlePiece(i*100, 0, i*100, 300, assetImages[i]));
  }
}

function draw() {
  background(128);
  for (var i = 0; i < puzzlePieces.length; i++) {
    puzzlePieces[i].display();
  }
}

function mousePressed() {
  // figure out if we need to move a puzzle piece
  for (var i = 0; i < puzzlePieces.length; i++) {

    // is this one being clicked?
    if (puzzlePieces[i].checkIfPointIsInPiece(mouseX, mouseY)) {

      // set it to drag
      puzzlePieces[i].startDrag(mouseX, mouseY);

      // move it to the end of the array
      puzzlePieces.push( puzzlePieces[i] );
      puzzlePieces.splice(i, 1);
      break;
    }
  }
}

function mouseReleased() {
  // stop all dragging
  for (var i = 0; i < puzzlePieces.length; i++) {
    if (puzzlePieces[i].dragging) {
      puzzlePieces[i].stopDragAndCheckSnap();
    }
  }
}

class PuzzlePiece {
  constructor(startX, startY, desiredX, desiredY, img) {
    this.x = startX;
    this.y = startY;
    this.desiredX = desiredX;
    this.desiredY = desiredY;
    this.img = img;
    this.dragging = false;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;
  }

  checkIfPointIsInPiece(x,y) {
    // is the mouse near this object?
    if (x > this.x && x < this.x+100 && y > this.y && y < this.y+100) {
      return true;
    }
    return false;
  }

  startDrag(x,y) {
    this.dragging = true;
    this.dragOffsetX = x-this.x;
    this.dragOffsetY = y-this.y;
  }

  stopDragAndCheckSnap() {
    this.dragging = false;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;

    if (dist(this.x+50, this.y+50, this.desiredX+50, this.desiredY+50) < 100) {
      this.x = this.desiredX;
      this.y = this.desiredY;
    }
  }

  display() {
    // draw image at our current position
    image(this.img, this.x, this.y, 100, 100);

    // are we dragging?  if so, adjust our position to follow the mouse
    if (this.dragging) {
      this.x = mouseX - this.dragOffsetX;
      this.y = mouseY - this.dragOffsetY;
    }


    // debug: draw a 'ghost' image at our desired position
    tint(255,255,255,100);
    image(this.img, this.desiredX, this.desiredY, 100, 100);
    tint(255,255,255,255);
  }
}
