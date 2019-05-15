// bugs in the code
// 1. Switching back from levels is wonky
// 2. Some of the images don't load quickly enough
// 3. Fixed the one sound at a time problem, now just need to select the right one sometimes
// 4. Sometimes selects images on menu page

var menuScreenOn;
var levelSelectOn;
var playLevelOn;

// menu screen variables

var rubinLogoPic;
var buddhistShapesLogo;
var chooseButton;
var choooseButtonHover;
var chooseButtonHoverOn;

// level select variables

var assetLevelFilenames = ['level0.png','level1.png','level2.png','level3.png','level4.png','level5.png','level6.png','level7.png','level8.png'];
var assetLevelImages = [];
var levelPosX = [250,250, 250,600,600,600,950,950,950];
var levelPosY = [225,400,575,225,400,575,225,400,575];

var gameButtonHoverOn;

// main level variables
var puzzleBackground;
var puzzleNum = [1,2,3,4,5,6];
var assetFilenames = ['piece0.png','piece1.png','piece2.png','piece3.png','piece4.png','piece5.png'];
var assetFilenamesInfo = ['piece0_info.png','piece1_info.png','piece2_info.png','piece3_info.png','piece4_info.png','piece5_info.png'];
var assetSoundnames = ['piece0_info.m4a', 'piece1_info.m4a', 'piece2_info.m4a', 'piece3_info.m4a', 'piece4_info.m4a', 'piece5_info.m4a'];
var clickTime = [false, false,false,false,false,false];
var somethingIsOn = false;

var menuButtonHoverOn;
var restartButtonHoverOn;
var playagainButtonHoverOn;
var returnButtonHoverOn;
var questionButtonHoverOn;
var infoBoxOn;
var infoBoxCounter = 0;

var menuButton;
var menuButtonHover;
var restartButton;
var restartButtonHover;
var returnButton;
var returnButtonHover;
var playagainButton;
var playagainButtonHover;

var playLevelWin;

var assetImages = [];
var assetImagesInfo = [];
var assetSounds = [];

var puzzlePieces = [];

var startXPos = [100,800,120,900,50,830];
var startYPos = [100,75,200,75,350,170];
var desiredXPos = [575,550,477,476,444,418];
var desiredYPos = [342,316,365,243,208,80];
var pointCounterX = [850, 905, 960, 1025, 1090, 1155];
var counterWins;
var pointAward;
var pointAwardSound;
var infoClick;
var locationText;

var infoBox;
var questionButton;
var questionButtonHover;


function preload(){
  menuScreenOn = true;
  levelSelectOn = false;
  playLevelOn = false;

  rubinLogoPic = loadImage("assets/images/rubinlogo.png");
  buddhistShapesLogo = loadImage("assets/images_new/buddhistshapes_logo.png");
  chooseButton = loadImage("assets/images_new/choose_button.png");
  chooseButtonHover = loadImage("assets/images_new/choose_button_hover.png");
  chooseButtonHoverOn = false;

  gameButtonHoverOn = false;

  menuButtonHoverOn = false;
  restartButtonHoverOn = false;
  playagainButtonHoverOn = false;
  returnButtonHoverOn = false;
  questionButtonHoverOn = false;
  infoBoxOn = false;

  playLevelWin = false;

  counterWins = 0;

  puzzleBackground = loadImage("assets/images_new/puzzleBackground_new.png");
  pointAward = loadImage("assets/images_new/point.png");
  pointAwardSound = loadSound("assets/sounds/pointEarned.mp3");
  infoClick = loadSound("assets/sounds/infoClick.mp3");

  menuButton = loadImage("assets/images_new/menu_button.png");
  menuButtonHover = loadImage("assets/images_new/menu_button_hover.png");
  restartButton = loadImage("assets/images_new/restart_button.png");
  restartButtonHover = loadImage("assets/images_new/restart_button_hover.png");
  playagainButton = loadImage("assets/images_new/playagain_button.png");
  playagainButtonHover = loadImage("assets/images_new/playagain_button_hover.png");
  returnButton = loadImage("assets/images_new/return_button.png");
  returnButtonHover = loadImage("assets/images_new/return_button_hover.png");
  questionButton = loadImage("assets/images_new/question_button.png");
  questionButtonHover = loadImage("assets/images_new/question_button_hover.png");
  infoBox = loadImage("assets/images_new/info_box.png");


  locationText = loadImage("assets/images_new/location_piece.png");

  for(var i =0; i<assetLevelFilenames.length; i++){
    assetLevelImages.push(loadImage("assets/images_new/levels/" + assetLevelFilenames[i]));
  }


  for(var i = 0; i < assetFilenames.length; i++) {
    assetImages.push(loadImage("assets/images_new/" + assetFilenames[i]));
    assetImagesInfo.push(loadImage("assets/images_new/" + assetFilenamesInfo[i]));
    assetSounds.push(loadSound("assets/sounds/" + assetSoundnames[i]));
  }
}

function setup(){
  createCanvas(1200, 700);

  // create a few puzzle pieces
  for (var i = 0; i < assetFilenames.length; i++) {
    puzzlePieces.push( new PuzzlePiece(startXPos[i], startYPos[i], desiredXPos[i], desiredYPos[i], assetImages[i], assetImagesInfo[i], assetSounds[i], puzzleNum[i]));
  }
}

function draw() {
  console.log(chooseButtonHoverOn + " - " + menuScreenOn + " - " + levelSelectOn + " - " + playLevelOn);
  if(menuScreenOn == true){
    menuScreen();
  }
  else if (levelSelectOn == true) {
    levelSelect();
  }
  else if(playLevelOn == true){
    playLevel();
  }

  if(infoBoxOn == true){
    imageMode(CENTER);
    image(infoBox, 600, 350);
    infoBoxCounter++;
  }

}

// menu screen code
function menuScreen(){
  background(255,0,0);
  imageMode(CORNER);
  image(rubinLogoPic, 5,5, rubinLogoPic.width/5, rubinLogoPic.height/5);

  imageMode(CENTER);
  image(buddhistShapesLogo, 600,350, buddhistShapesLogo.width/2.5, buddhistShapesLogo.height/2.5);

  if(mouseX >= 500 && mouseX <= 700 && mouseY >= 445 && mouseY <= 555){
    image(chooseButtonHover, 600, 500);
    chooseButtonHoverOn = true;
  }

  else{
    image(chooseButton, 600, 500);
    chooseButtonHoverOn = false;
  }

}

// level select code
function levelSelect(){
  background(255,0,0);
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(50);
  fill(255);
  text("LEVEL 1", 250, 100);
  text("LEVEL 2", 600, 100);
  text("LEVEL 3", 950, 100);

  for(var i = 0; i < assetLevelImages.length; i++){
    if(mouseX >= (levelPosX[i]-((assetLevelImages[i].width/1.25)/2)) && mouseX <= (levelPosX[i]+((assetLevelImages[i].width/1.25)/2)) && mouseY >= (levelPosY[i]-((assetLevelImages[i].height/1.25)/2)) && mouseY <= (levelPosY[i]+((assetLevelImages[i].height/1.25)/2)) ){
      image(assetLevelImages[i], levelPosX[i], levelPosY[i], assetLevelImages[i].width/1.5, assetLevelImages[i].height/1.5);
    }
    else{
      image(assetLevelImages[i], levelPosX[i], levelPosY[i], assetLevelImages[i].width/1.25, assetLevelImages[i].height/1.25);
    }
  }

  if(mouseX >= 1075 && mouseX <= 1175 && mouseY >= 25 && mouseY <= 75){
    image(questionButtonHover, 1125,50, questionButton.width/2, questionButton.height/2);
    questionButtonHoverOn = true;
  }
  else{
    image(questionButton, 1125,50, questionButton.width/2, questionButton.height/2);
    questionButtonHoverOn = false;

  }

  if(mouseX >= 885 && mouseX <= 1025 && mouseY >= 500 && mouseY <= 645){
    gameButtonHoverOn = true;
  }
  else{
    gameButtonHoverOn = false;
  }
}


// main game code
function playLevel(){
  background(31,39,74);
  imageMode(CENTER);
  if(mouseX >= 24 && mouseX <= 127 && mouseY >= 25 && mouseY <= 75){
    image(menuButtonHover, 75,50, menuButton.width/2, menuButton.height/2);
    menuButtonHoverOn = true;
  }
  else{
    image(menuButton, 75,50, menuButton.width/2, menuButton.height/2);
    menuButtonHoverOn = false;
  }

  if(mouseX >= 130 && mouseX <= 232 && mouseY >= 25 && mouseY <= 75){
    image(restartButtonHover, 180, 50, restartButton.width/2, restartButton.height/2);
    restartButtonHoverOn = true;
  }
  else{
    image(restartButton, 180, 50, restartButton.width/2, restartButton.height/2);
    restartButtonHoverOn = false;
  }

  if(mouseX >= 235 && mouseX <= 337 && mouseY >= 25 && mouseY <= 75){
    image(questionButtonHover, 285, 50, questionButton.width/2, questionButton.height/2);
    questionButtonHoverOn = true;
  }
  else{
    image(questionButton, 285, 50, questionButton.width/2, questionButton.height/2);
    questionButtonHoverOn = false;

  }







  image(puzzleBackground, 600,350, puzzleBackground.width/2, puzzleBackground.height/2);
  // image(assetImagesInfo[0], 100,100);

  for(var i=0; i<pointCounterX.length; i++){
    tint(255,255,255,50);
    image(pointAward, pointCounterX[i], 50, pointAward.width/3.5, pointAward.height/3.5);
  }
  tint(255,255,255,255);


  if(counterWins >= 1){
    image(pointAward, 850,50, pointAward.width/3.5, pointAward.height/3.5);
  }
  if(counterWins >= 2){
    image(pointAward, 905,50, pointAward.width/3.5, pointAward.height/3.5);
  }
  if(counterWins >= 3){
    image(pointAward, 960,50 , pointAward.width/3, pointAward.height/3);
  }
  if(counterWins >= 4){
    image(pointAward, 1025,50, pointAward.width/3, pointAward.height/3);
  }
  if(counterWins >= 5){
    image(pointAward, 1090,50, pointAward.width/3, pointAward.height/3);
  }
  if(counterWins >= 6){
    image(pointAward, 1155,50, pointAward.width/3, pointAward.height/3);
    playLevelWin = true;
  }


  imageMode(CORNER);
  for (var i = 0; i < puzzlePieces.length; i++) {
    puzzlePieces[i].display();
  }

  if(playLevelWin == true){
    textAlign(CENTER);
    textSize(100);
    fill(255,0,0);
    text("CONGRATULATIONS!", 600, 350);

    imageMode(CENTER);
    image(locationText, 1000,500);
    imageMode(CORNER);

    if(mouseX >= 1075 && mouseX <= 1175 && mouseY >= 625 && mouseY <= 675){
      image(returnButtonHover, 1075,625, returnButton.width/2,returnButton.height/2);
      returnButtonHoverOn = true;
    }
    else{
      image(returnButton, 1075,625, playagainButton.width/2,playagainButton.height/2);
      returnButtonHoverOn = false;
    }

  }





}

function mousePressed() {
  if(menuScreenOn == true && chooseButtonHoverOn == true){
    levelSelectOn = true;
    menuScreenOn = false;
    console.log("transitioning");
  }

  else if(questionButtonHoverOn == true){
    infoBoxOn = true;
    console.log("a");
  }

  else if(infoBoxOn == true && infoBoxCounter >= 2){
    infoBoxOn = false;
    infoBoxCounter = 0;
    console.log("b");
  }

  else if(gameButtonHoverOn == true){
    gameButtonHoverOn = false;
    levelSelectOn = false;
    playLevelOn = true;
    console.log("c");
  }

  else if(menuButtonHoverOn == true || returnButtonHoverOn == true){
    menuButtonHoverOn == false;
    returnButtonHoverOn == false;
    playLevelOn = false;
    menuScreenOn = true;
    console.log("d");
  }

  else if(restartButtonHoverOn == true){
    console.log("e");
    playLevelWin = false;
    counterWins = 0;
    for(var i = 0; i < puzzlePieces.length; i++){
      puzzlePieces[i].x = startXPos[i];
      puzzlePieces[i].y = startYPos[i];
      puzzlePieces[i].done = false;
    }

  }

  else if(playagainButtonHoverOn == true){
    console.log("f");
    for(var i = 0; i < assetFilenames.length; i++) {
      assetImages.push(loadImage("assets/images_new/" + assetFilenames[i]));
      assetImagesInfo.push(loadImage("assets/images_new/" + assetFilenamesInfo[i]));
      assetSounds.push(loadSound("assets/sounds/" + assetSoundnames[i]));
    }

    for (var i = 0; i < assetFilenames.length; i++) {
      puzzlePieces = [];
      counterWins = 0;
      puzzlePieces.push( new PuzzlePiece(startXPos[i], startYPos[i], desiredXPos[i], desiredYPos[i], assetImages[i], assetImagesInfo[i], assetSounds[i]));
    }
  }
  // figure out if we need to move a puzzle piece

  else if(playLevelOn == true){
    console.log("g");
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

}

function mouseReleased() {
  // stop all dragging
  if(playLevelOn == true){
    for (var i = 0; i < puzzlePieces.length; i++) {
      if (puzzlePieces[i].dragging) {
        puzzlePieces[i].stopDragAndCheckSnap();
      }
    }
  }

}

class GameButtons{
  constructor(posX, posY, img, sound, update){

  }
}

class PuzzlePiece {
  constructor(startX, startY, desiredX, desiredY, img, info, sound, num) {
    this.x = startX;
    this.y = startY;
    this.desiredX = desiredX;
    this.desiredY = desiredY;
    this.img = img;
    this.info = info;
    this.sound = sound;
    this.sizeX = this.img.width/2;
    this.sizeY = this.img.height/2;
    this.dragging = false;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;
    this.done = false;
    this.infoOn = false;
    this.num = num;
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
      imageMode(CORNER);
        image(this.info, 10,470);


      // if(this.num == 1){
      //   image(this.info, 10,470, this.info.width/2.5, this.info.height/2.5);
      // }
      // else if (this.num == 2) {
      //   image(this.info, 10,400, this.info.width/2.5, this.info.height/2.5);
      //
      // }
      // else{
      //   image(this.info, 10,470);
      //
      // }
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
