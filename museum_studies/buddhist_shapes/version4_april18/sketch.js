var puzzleBackground;
var assetFilenames = ['piece0.png','piece1.png','piece2.png','piece3.png','piece4.png','piece5.png'];
var assetFilenamesInfo = ['piece0_info.png','piece1_info.png','piece2.png','piece3.png','piece4.png','piece5.png'];
var assetSoundnames = ['piece0_info.m4a', 'piece1_info.m4a', 'piece2_info.m4a', 'piece3_info.m4a', 'piece4_info.m4a', 'piece5_info.m4a'];
var clickTime = [false, false,false,false,false,false];
var somethingIsOn = false;

var assetImages = [];
var assetImagesInfo = [];
var assetSounds = [];

var puzzlePieces = [];
var startXPos = [100,300,600,50,1300,1250];
var startYPos = [800,900,50,500,1200,0];
var desiredXPos = [955,905,758,757,690,640];
var desiredYPos = [981,930,1030,784,718,462];
var counterWins;
var pointAward;
var pointAwardSound;
var infoClick;



function preload(){
  counterWins = 0;

  puzzleBackground = loadImage("assets/images_new/puzzleBackground_new.png");
  pointAward = loadImage("assets/images_new/point.png");
  pointAwardSound = loadSound("assets/sounds/pointEarned.mp3");
  infoClick = loadSound("assets/sounds/infoClick.mp3");



  for(var i = 0; i < assetFilenames.length; i++) {
    assetImages.push(loadImage("assets/images_new/" + assetFilenames[i]));
    assetImagesInfo.push(loadImage("assets/images_new/" + assetFilenamesInfo[i]));
    assetSounds.push(loadSound("assets/sounds/" + assetSoundnames[i]));
  }
}

function setup(){
  createCanvas(2000, 2500);

  // create a few puzzle pieces
  for (var i = 0; i < assetFilenames.length; i++) {
    puzzlePieces.push( new PuzzlePiece(startXPos[i], startYPos[i], desiredXPos[i], desiredYPos[i], assetImages[i], assetImagesInfo[i], assetSounds[i]));
  }
}

function draw() {
  background(31,39,74);
  imageMode(CENTER);
  image(puzzleBackground, 1000,1000, puzzleBackground.width, puzzleBackground.height);
  // image(assetImagesInfo[0], 100,100);
  if(counterWins >= 1){
    image(pointAward, 100,100);
  }
  if(counterWins >= 2){
    image(pointAward, 300,100);
  }
  if(counterWins >= 3){
    image(pointAward, 500,100);
  }
  if(counterWins >= 4){
    image(pointAward, 700,100);
  }
  if(counterWins >= 5){
    image(pointAward, 900,100);
  }
  if(counterWins >= 6){
    image(pointAward, 1100,100);
  }

  imageMode(CORNER);
  for (var i = 0; i < puzzlePieces.length; i++) {
    puzzlePieces[i].display();
  }
}

function mousePressed() {
  // figure out if we need to move a puzzle piece
  for (var i = 0; i < puzzlePieces.length; i++) {
    if(puzzlePieces[i].infoOn == true){
      puzzlePieces[i].infoOn = false;
    }

    // is this one being clicked?
    if (puzzlePieces[i].checkIfPointIsInPiece(mouseX, mouseY)) {

      // set it to drag
      puzzlePieces[i].startDrag(mouseX, mouseY);

      // move it to the end of the array
      puzzlePieces.push( puzzlePieces[i] );
      puzzlePieces.splice(i, 1);
      break;
    }
    if(puzzlePieces[i].doneClick(mouseX,mouseY)){
      puzzlePieces[i].displayClick();

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

class GameButtons{
  constructor(posX, posY, img, sound, update){

  }
}

class PuzzlePiece {
  constructor(startX, startY, desiredX, desiredY, img, info, sound) {
    this.x = startX;
    this.y = startY;
    this.desiredX = desiredX;
    this.desiredY = desiredY;
    this.img = img;
    this.info = info;
    this.sound = sound;
    this.sizeX = this.img.width;
    this.sizeY = this.img.height;
    this.dragging = false;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;
    this.done = false;
    this.infoOn = false;
  }

  checkIfPointIsInPiece(x,y) {
    // is the mouse near this object?
    if (x > this.x && x < this.x+this.sizeX && y > this.y && y < this.y+ this.sizeY && this.done == false) {
      return true;
    }
    return false;
  }

  doneClick(x,y){
    if (x > this.x && x < this.x+this.sizeX && y > this.y && y < this.y+ this.sizeY && this.done == true) {
      return true;
    }
    return false;
  }

  displayClick(){
    if(this.sound.isPlaying()){
      this.sound.stop();
    }
    else{
      var numPlaying = 0;
      for(var i =0; i < assetSounds.length; i++){
        if(assetSounds[i].isPlaying()){
          numPlaying++;
        }
      }
      console.log(numPlaying);
      if(numPlaying == 0){
        infoClick.play();
        if(this.sound.isPlaying() == false){
          this.sound.play();
          this.infoOn = true;
        }
      }
    }




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

    if (dist(this.x+50, this.y+50, this.desiredX+50, this.desiredY+50) < 100 ) {
      this.x = this.desiredX;
      this.y = this.desiredY;
      counterWins += 1;
      this.done = true;
      pointAwardSound.play();
      console.log("done", counterWins);

    }
  }

  display() {

    // draw image at our current position
    image(this.img, this.x, this.y, this.sizeX, this.sizeY);

    if(this.infoOn == true){
      imageMode(CENTER);
      image(this.info, 500,2000);
    }
    imageMode(CORNER);

    // are we dragging?  if so, adjust our position to follow the mouse
    if (this.dragging) {
      this.x = mouseX - this.dragOffsetX;
      this.y = mouseY - this.dragOffsetY;
    }


    // debug: draw a 'ghost' image at our desired position
    tint(255,255,255,0);
    image(this.img, this.desiredX, this.desiredY, this.sizeX, this.sizeY);
    tint(255,255,255,255);
  }
}
