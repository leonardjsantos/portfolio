
var thePieces = [];
var counter;
var limit;

var levelSelect;
var gameOn;
var level1_selectOver;

var logo_pic;
var level1_pic;

function setup(){
  createCanvas(400,700);

  levelSelect = true;
  gameOn = false;
  level1_selectOver = false;

  counter = 0;
  limit = 3;

  logo_pic = loadImage('assets/images/rubinlogo.png');
  level1_pic = loadImage('assets/images/level1.png');

}

function draw(){
  if(levelSelect == true){
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

function levelSelectPage(){
  background(255,0,0);
  textAlign(CENTER);
  fill(255,255,255);
  textSize(20);
  // text("The Rubin Museum Presents...", 200, 50);
  textSize(35);
  text("THE WHEEL OF LIFE", 200, 120);

  image(logo_pic, 0,0, logo_pic.width / 7, logo_pic.height / 7);

  if(
    mouseX > 10 && mouseX < (10 + level1_pic.width)
    &&
    mouseY > 160 && mouseY < (160 + level1_pic.height)
  ){
    fill(0,0,0);
    rect(15,150, level1_pic.width + 20, level1_pic.height + 20 )
    level1_selectOver = true;

  }

  image(level1_pic, 25, 160, level1_pic.width, level1_pic.height);
  image(level1_pic, 210, 160, level1_pic.width, level1_pic.height);

  image(level1_pic, 25, 425, level1_pic.width, level1_pic.height);
  image(level1_pic, 210, 160, level1_pic.width, level1_pic.height);

}

function gameOnPage(){
  background(128);
  if(counter < 4){
    console.log(counter);
    counter++;
    thePieces.push(new PuzzlePiece(random(width), random(height), random(width), random(height), random(25,100)));
  }

  for(var i = 0; i < thePieces.length; i++){
    thePieces[i].display();
    if(mouseX > thePieces[i].x &&
      mouseX < (thePieces[i].x + thePieces[i].size) &&
      mouseY > thePieces[i].y &&
      mouseY < (thePieces[i].y + thePieces[i].size)
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
      console.log("CORRECT");
    }
    else{
      thePieces[i].correct = false;
    }



  }
}

function mousePressed(){
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
  constructor(xPos, yPos, xCorrect, yCorrect, size){
    this.x = xPos;
    this.y = yPos;
    this.xCorrect = xCorrect;
    this.yCorrect = yCorrect;
    this.size = size;
    this.color = 255;
    this.xOffset = 0.0;
    this.yOffset = 0.0;
    this.overBox = false;
    this.locked = false;
    this.correct = false;
    this.correctClick = false;
    this.correctMargin = this.size/4;
  }

  display(){

    strokeWeight(5);
    fill(255,0);
    rect(this.xCorrect, this.yCorrect, this.size, this.size);

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
      image(level1_pic, this.x, this.y, this.size, this.size);

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
