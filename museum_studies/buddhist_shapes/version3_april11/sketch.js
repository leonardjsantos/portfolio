
var thePieces = [];
var limit;
var counter = 0;

var startPage;
var levelSelect;
var gameOn;
var level1_selectOver;

var level1a_pic;
var level1b_pic;
var level1c_pic;
var level2a_pic;
var level2b_pic;
var level2c_pic;
var level3a_pic;
var level3b_pic;
var level3c_pic;

var level1pics_yPos;
var level2pics_yPos;
var level3pics_yPos;

var levelapics_xPos;
var levelbpics_xPos;
var levelcpics_xPos;

var logo_pic;
var level1_pic;
var buddhistshapes_logo;
var choosebutton;
var choosebutton_hover;

var puzzlePic_background;
var puzzle0;
var puzzle1;
var puzzle2;
var puzzle3;
var puzzle4;
var puzzle5;

var puzzlePieces = [];
var puzzlePiecesPics = [];

function preload(){
  for(var i =0; i < 6; i++){
    var filename = i + ".png";
    puzzlePiecesPics[i] = loadImage("assets/images/puzzleoutline_piece" + filename);
  }


}

function setup(){
  createCanvas(750,1330);

  startPage = true;
  levelSelect = false;
  gameOn = false;
  level1_selectOver = false;
  limit = 3;

  logo_pic = loadImage('assets/images/rubinlogo.png');
  buddhistshapes_logo = loadImage('assets/images/buddhistshapes_logo.png');
  level1_pic = loadImage('assets/images/level1.png');
  puzzlePic_background = loadImage('assets/images/puzzle_background.png');
  choosebutton = loadImage('assets/images/choosebutton.png');
  choosebutton_hover = loadImage('assets/images/choosebutton_hover.png');

  level1a_pic = loadImage('assets/images/level1a.png');
  level1b_pic = loadImage('assets/images/level1b.png');
  level1c_pic = loadImage('assets/images/level1c.png');
  level2a_pic = loadImage('assets/images/level2a.png');
  level2b_pic = loadImage('assets/images/level2b.png');
  level2c_pic = loadImage('assets/images/level2c.png');
  level3a_pic = loadImage('assets/images/level3a.png');
  level3b_pic = loadImage('assets/images/level3b.png');
  level3c_pic = loadImage('assets/images/level3c.png');

  puzzle0 = loadImage('assets/images/puzzleoutline_piece0.png');
  puzzle1 = loadImage('assets/images/puzzleoutline_piece1.png');
  puzzle2 = loadImage('assets/images/puzzleoutline_piece2.png');
  puzzle3 = loadImage('assets/images/puzzleoutline_piece3.png');
  puzzle4 = loadImage('assets/images/puzzleoutline_piece4.png');
  puzzle5 = loadImage('assets/images/puzzleoutline_piece5.png');

  level1pics_yPos = 150;
  level2pics_yPos = 500;
  level3pics_yPos = 1000;

  levelapics_xPos = 25;
  levelbpics_xPos = 275;
  levelcpics_xPos = 525;

  for(var i =0; i < 6; i++){
    thePieces.push(new PuzzlePiece( puzzlePiecesPics[i], random(width), random(height), 50, 200, 650, 946));
  }

  console.log(puzzlePiecesPics);

}

function draw(){
  for(var i = 0; i < 6; i++){

  }
  if(startPage == true){
    start();
  }
  else if(levelSelect == true){
    levelSelectPage();
  }

  else{
    if(gameOn == true){
      gameOnPage();
    }

    else{
      background(0,0,255);
    }
  }

}

function start(){
  background(255,0,0);
  imageMode(CENTER);
  image(logo_pic, 150,100, logo_pic.width / 3, logo_pic.height / 3);
  image(buddhistshapes_logo, 375, 400, buddhistshapes_logo.width/2.5, buddhistshapes_logo.height/2.5);
  if(mouseX >= 100 && mouseX <= 650 && mouseY >= 715 && mouseY <= 1085){
      image(choosebutton_hover, 375, 900, choosebutton.width/3, choosebutton.height/3);
    }
  else{
    image(choosebutton, 375, 900, choosebutton.width/3, choosebutton.height/3);
  }

  // for(var i = 0; i < 6; i++){
  //   image(puzzlePiecesPics[i], 10 * i, 10 * i);
  // }


}

function levelSelectPage(){
  background(255,0,0);
  textAlign(LEFT);
  fill(255,255,255);
  textSize(20);
  // text("The Rubin Museum Presents...", 200, 50);
  textSize(40);
  text("BUDDHIST SHAPES", 200, 75);
  imageMode(CORNER);

  textSize(30);
  textAlign(CENTER);
  text("LEVEL 1", 375, 125);

  image(logo_pic, 0,0, logo_pic.width / 7, logo_pic.height / 7);

  if(
    mouseX > levelapics_xPos && mouseX < (levelapics_xPos + 200)
    &&
    mouseY >  level3pics_yPos && mouseY < (level3pics_yPos + level3a_pic.height)
  ){
    fill(0,0,0);
    rect(levelapics_xPos - 10, level3pics_yPos - 10, level3c_pic.width + 20, level3c_pic.height + 50 )
    level1_selectOver = true;

  }

  image(level1a_pic, levelapics_xPos, level1pics_yPos);
  image(level1b_pic, levelbpics_xPos, level1pics_yPos);
  image(level1c_pic, levelcpics_xPos, level1pics_yPos);

  text("LEVEL 2", 375, 475);

  image(level2a_pic, levelapics_xPos, level2pics_yPos);
  image(level2b_pic, levelbpics_xPos, level2pics_yPos);
  image(level2c_pic, levelcpics_xPos, level2pics_yPos, level2c_pic.width/3);

  text("LEVEL 3", 375, 975);

  image(level3a_pic, levelapics_xPos, level3pics_yPos);
  image(level3b_pic, levelbpics_xPos, level3pics_yPos);
  image(level3c_pic, levelcpics_xPos, level3pics_yPos);




}

function gameOnPage(){
  background(128);
  image(puzzlePic_background, 50, 200);


  // var counter = 0;
  // if(counter < 6){
  //   image(puzzlePiecesPics[counter], 10 * counter, 10 * counter);
  //
  //   counter++;
  //   thePieces.push(new PuzzlePiece( puzzlePiecesPics[counter], random(width), random(height), random(width), random(height), random(25,100)));
  // }

  for(var i = 0; i < thePieces.length; i++){
    thePieces[i].display();
    if(mouseX > thePieces[i].x &&
      mouseX < (thePieces[i].x + thePieces[i].picWidth) &&
      mouseY > thePieces[i].y &&
      mouseY < (thePieces[i].y + thePieces[i].picHeight)
    ){
      thePieces[i].overBox = true;
    }
    else{
      thePieces[i].overBox = false;
    }


    if(
      thePieces[i].x > (thePieces[i].xCorrect - thePieces[i].correctMargin) &&
      thePieces[i].x < (thePieces[i].xCorrect + thePieces[i].correctMargin) &&
      thePieces[i].y > (thePieces[i].yCorrect - thePieces[i].correctMargin) &&
      thePieces[i].y < (thePieces[i].yCorrect + thePieces[i].correctMargin)
    ){
      thePieces[i].correct = true;
      console.log(thePieces[i] + "is CORRECT");
    }
    else{
      thePieces[i].correct = false;
      console.log("INCORRECT");
    }



  }
}

function mousePressed(){
  if(mouseX >= 100 && mouseX <= 650 && mouseY >= 715 && mouseY <= 1085 && startPage == true){
    levelSelect = true;
    startPage = false;
  }

  if(levelSelect == true && gameOn == false){
    if(level1_selectOver == true){
      levelSelect = false;
      gameOn = true;
    }
  }
  if(gameOn == true){
    for(var i = 0; i < thePieces.length; i++){
      if(thePieces[i].overBox == true){
        thePieces[i].locked = true;
      }
      else{
        thePieces[i].locked = false;
      }

      thePieces[i].xOffset = mouseX - thePieces[i].x;
      thePieces[i].yOffset = mouseY - thePieces[i].y;

      if(thePieces[i].correct == true && thePieces[i].overBox == true){
        thePieces[i].correctClick = true;
      }
    }
  }

}

function mouseDragged(){
  for(var i = 0; i < thePieces.length; i++){
    if(thePieces[i].correct == false){
      if(thePieces[i].locked == true){
        thePieces[i].x = mouseX - thePieces[i].xOffset;
        thePieces[i].y = mouseY - thePieces[i].yOffset;
      }
    }
  }
}

function mouseReleased(){
  for(var i = 0; i < thePieces.length; i++){
    thePieces[i].locked = false;
    thePieces[i].correctClick = false;

  }
}

function keyPressed(){
  if(keyCode == DOWN_ARROW){
    if(levelSelect == true && gameOn == false){
      levelSelect = false;
      gameOn = true;
    }
    else if (gameOn == true){
      gameOn = false;
    }
    else{
      levelSelect = true;
    }

  }
}

class PuzzlePiece{
  constructor(pic, xPos, yPos, xCorrect, yCorrect, picWidth, picHeight){
    this.pic = pic;
    this.x = xPos;
    this.y = yPos;
    this.xCorrect = xCorrect;
    this.yCorrect = yCorrect;
    this.picWidth = picWidth;
    this.picHeight = picHeight;
    this.color = 255;
    this.xOffset = 0.0;
    this.yOffset = 0.0;
    this.overBox = false;
    this.locked = false;
    this.correct = false;
    this.correctClick = false;
    this.correctMargin = this.picWidth/4;
  }

  display(){

    strokeWeight(5);
    fill(255,0);
    rect(this.xCorrect, this.yCorrect, this.picWidth, this.picHeight);

    if(this.overBox == true){
      if(this.locked == true){
        fill(0,0, 255);
      }
      else{
        fill(128, 0, 200);
      }
    }
    else{
      fill(200, 128, 0);
    }
    strokeWeight(1);

    if(this.correct == false){
      // rect(this.x, this.y, this.size, this.size);
      image(this.pic, this.x, this.y, this.size, this.size);

      fill(0);
      ellipse(this.x, this.y, 10,10);
    }
    else{
      if(this.correctClick == false){
        fill(0,255,0);
      }
      else{
        fill(0,0,0);
      }
      // rect(this.xCorrect, this.yCorrect, this.size, this.size);
      image(level1_pic, this.xCorrect, this.yCorrect, this.size, this.size);


    }


  }

}
