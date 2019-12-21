var thePlayer;
var ground;
var groundHeight;
var jumpSound;

var pleasureBarTotal;
var pleasureBarX;
var pleasureBarY;

var itemSpawn;
var itemTimer;
var itemNum;
var theItems = [];

var lastItem;

var match;

var gameOn;
var loss;

var background_img;
var title_page;
var game_over_img;

function preload(){
  gameOn = false;
  loss = false;
  thePlayer = new Player();
  ground = true;
  groundHeight = 500;

  jumpSound = loadSound("sounds/jump.mp3");
  background_img = loadImage("assets/titlepage.png");
  title_page = loadImage("assets/titlepage_1.png");
  game_over_img = loadImage("assets/gameover.png");


  pleasureBarTotal = 950;
  pleasureBarX = 950;
  pleasureBarY = 30;

  itemSpawn = 0;
  itemTimer = int(random(200,300));
  itemNum = 0;

  lastItem = '';

  match = false;

}

function setup() {
  createCanvas(1000,600);

}

function draw(){
  if(gameOn == false && loss == false){
    startScreen();
  }
  else if(gameOn == true && loss == false){
    gameOnNow();
  }
  else if(loss == true){
    background(256,0,0);
    image(game_over_img,0,0);
  }

}

function startScreen(){
  background(0,0,255);
  image(title_page,0,0);


}

function gameOnNow(){
  background(150,123,182);
  image(background_img,0,0);


  fill(0,0,0);
  rect(25, 25, pleasureBarTotal, pleasureBarY);

  fill(256,0,0);
  rect(25, 25, pleasureBarX, pleasureBarY);

  if(pleasureBarX >= 0){
    pleasureBarX -= 1;

  }

  thePlayer.displayAndMove();

  itemSpawn += 1;


  if(itemSpawn >= itemTimer){
    itemX = int(random(100,900));
    spawnNum = int(random(0,7));


    theItems.push(new Items(itemX, spawnNum));

    itemSpawn = 0;
    itemTimer = int(random(10,100));
    itemNum += 1;
  }
  for (var i =0; i< theItems.length ; i++){
    theItems[i].displayAndMove();
    if(theItems[i].y > 650){
      theItems.splice(i, 1);
      itemNum -= 1;
    }
    else if((dist(thePlayer.x, thePlayer.y, theItems[i].x, theItems[i].y)) <= 64){
        theItems[i].interaction();
        lastItem = theItems[i].type;
        theItems.splice(i,1);
        itemNum -= 1;

    }
  }

  if(pleasureBarX <= 0){
    for(var i = 0; i<theItems.length; i++){
      theItems.splice(theItems[i]);
    }
    loss = true;
  }
}

function mousePressed(){
  console.log(gameOn, loss);
  if(gameOn == false && loss == false){
    gameOn = true;
    pleasureBarX = pleasureBarTotal;

  }
  if(loss == true){
    gameOn = false;
    thePlayer.restart();
    loss = false;
  }
}

class Items{
  constructor(xPos, spawnNum){
    this.y = 50;
    this.x = xPos;

    var spawnImg = loadImage("assets/img0" + spawnNum + ".png");
    var type = '';

    this.image = spawnImg;
    if(spawnNum == 0){
      type = 'anger';
    }
    else if (spawnNum == 1) {
      type = 'art';
    }
    else if (spawnNum == 2) {
      type = 'drugs';
    }
    else if (spawnNum == 3) {
      type = 'eggplant';
    }
    else if(spawnNum == 4){
      type = 'love';
    }
    else if(spawnNum == 5){
      type = 'alcohol';
    }
    else{
      type = 'death';
    }

    this.type = type;
  }

  displayAndMove(){
    image(this.image, this.x, this.y, 100,100);

    this.y += 1;

  }

  interaction(){

    if(lastItem == ''){
      console.log("First pick up");
    }
    else{
      console.log("I picked up " + this.type + " and my last pick up was " + lastItem);
    }

    if(this.type == lastItem){
      match = true;
    }
    else{
      match = false;
    }

    if(this.type == 'death'){
      pleasureBarX -= 200;
    }
    else{
      if(match == true){
        if(this.type == 'anger'){
          pleasureBarX -= 50;
        }
        else if(this.type == 'art'){
          if(pleasureBarX < pleasureBarTotal - 25){
            pleasureBarX += 25;
          }
          else{
            pleasureBarX = pleasureBarTotal;
          }
          console.log("+25");
        }
        else if (this.type == 'drugs') {
          if(pleasureBarX < pleasureBarTotal - 1){
            pleasureBarX += 1;
          }
          else{
            pleasureBarX = pleasureBarTotal;
          }
          console.log("+5");

        }
        else if(this.type == 'eggplant'){
          if(pleasureBarX < pleasureBarTotal - 15){
            pleasureBarX += 15;
          }
          else{
            pleasureBarX = pleasureBarTotal;
          }
          console.log("+15");

        }
        else if(this.type == 'love'){
          if(pleasureBarX < pleasureBarTotal - 30){
            pleasureBarX += 30;
          }
          else{
            pleasureBarX = pleasureBarTotal;
          }
          console.log("+30");

        }
        else if(this.type = 'alcohol'){
          if(pleasureBarX < pleasureBarTotal - 1){
            pleasureBarX += 1;
          }
          else{
            pleasureBarX = pleasureBarTotal;
          }          console.log("+1");

        }
      }
      else{
        if(this.type == 'art'){
          if(pleasureBarX < pleasureBarTotal - 50){
            pleasureBarX += 50;
          }
          else{
            pleasureBarX = pleasureBarTotal;
          }          console.log("+50");
        }
        else if (this.type == 'anger') {
          if(pleasureBarX < pleasureBarTotal - 75){
            pleasureBarX += 75;
          }
          else{
            pleasureBarX = pleasureBarTotal;
          }
        }
        else if (this.type == 'drugs') {
          if(pleasureBarX < pleasureBarTotal - 50){
            pleasureBarX += 50;
          }
          else{
            pleasureBarX = pleasureBarTotal;
          }
          console.log("+50");

        }
        else if(this.type == 'eggplant'){
          if(pleasureBarX < pleasureBarTotal - 100){
            pleasureBarX += 100;
          }
          else{
            pleasureBarX = pleasureBarTotal;
          }
          console.log("+100");

        }
        else if(this.type == 'love'){
          if(pleasureBarX < pleasureBarTotal - 200){
            pleasureBarX += 200;
          }
          else{
            pleasureBarX = pleasureBarTotal;
          }
          console.log("+200");

        }
        else if(this.type = 'alcohol'){
          if(pleasureBarX < pleasureBarTotal - 50){
            pleasureBarX += 50;
          }
          else{
            pleasureBarX = pleasureBarTotal;
          }
          console.log("+50");

        }
      }
    }


  }
}

class Player{
  constructor(){
    this.x = 450;
    this.y = groundHeight;

    this.ySpeed =0;

    this.rightCycle = [];
    this.leftCycle = [];

    this.rightFacing = true;
    this.leftFacing = false;

    this.mode = '';

    this.currentImage = 0;

    this.currentCycle = this.leftCycle;
    var soundOn = false;


    this.rightFacingImg = loadImage("playerRight/frame00.png");
    this.leftFacingImg = loadImage("playerLeft/frame00.png");
    this.rightJumpImg = loadImage("playerJump/jumpRight.png");
    this.leftJumpImg = loadImage("playerJump/jumpLeft.png");


    for (var i = 0; i < 6; i++) {
      var filename = "frame" + nf(i,2) + ".png";
      this.rightCycle.push( loadImage("playerRight/" + filename) )
      this.leftCycle.push( loadImage("playerLeft/" + filename))
    }
  }

  displayAndMove() {

    this.currentCycle = this.rightCycle;
    if(keyIsDown(68)){
      this.currentCycle = this.rightCycle;
      this.rightFacing = true;
      this.leftFacing = false;
      if(this.x < 900){
        this.x += 5;
      }

    }
    else if (keyIsDown(65)) {
      this.currentCycle = this.leftCycle;
      this.leftFacing = true;
      this.rightFacing = false;
      if(this.x >0){
        this.x -= 5;

      }
    }

    if (keyIsDown(87)) {

      if (this.ySpeed >= 0 && this.y >= groundHeight) {
        this.ySpeed = -18;
        jumpSound.play();
      }
    }

    if (this.y < groundHeight) {
      ground = false;
      this.ySpeed += 0.5;

    }
    else {
      ground = true;
      this.y = groundHeight;
    }

    this.y += this.ySpeed;
    if(ground == true){
      if(keyIsDown(68) || keyIsDown(65)){
        image(this.currentCycle[ this.currentImage ], this.x, this.y, 100, 100);
        if (frameCount % 10 == 0) {
          this.currentImage += 1;
        }
        if (this.currentImage >= 6) {
          this.currentImage = 0;
        }
      }
      else{
        if(this.rightFacing == true){
          image(this.rightFacingImg, this.x, this.y, 100,100);
        }
        else{
          image(this.leftFacingImg, this.x, this.y, 100,100);
        }
      }
    }
    else{
      if(this.rightFacing == true){
        image(this.rightJumpImg, this.x, this.y, 100,100);
      }
      else{
        image(this.leftJumpImg, this.x, this.y, 100,100);
      }
    }


  }

  restart(){
    this.x = 450;
    this.y = groundHeight;
  }


}
