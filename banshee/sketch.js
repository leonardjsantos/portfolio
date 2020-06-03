// variable to hold our Player object
var thePlayer;
var theGraveyard;
var theGraveyard2;
var title;

var theDemons = [];
var theSouls = [];
var theFire = [];

var bossBattle;
var bossScreams;
var defeatCounter;

var demonSpawn;
var demonTimer;

var soulSpawn;
var soulTimer;

var fireSpawn;
var fireTimer;

var demonNum;

var hit;
var point;

var fullBar;
var health;
var spirit;
var screamBar;
var screamPoint;

var microphone;

var scream;

var gameOn;
var gameOver;
var victory;

var ground;
var fullSpirit;

var buttonCodes;

var screamTimer = 0;

var screamNoise;
var soulCollect;
var glide;
var demonMove;
var demonAppear;
var fireNoise;
var bossLaugh;
var bossAppear = true;
var bossBattleOver;
var startGame;
var screamOverride;

function preload() {
  // construct our Player object (needs to be in preload since we are loading images)
   thePlayer= new Player();
   theGraveyard = new Graveyard(0);
   theGraveyard2 = new Graveyard(1000);
   theBoss = new Boss();

   title = loadImage("title.png");
   screamNoise = loadSound("sounds/bansheescream.mp3");
   soulCollect = loadSound("sounds/soulcollect.mp3");
   glide = loadSound("sounds/glide.mp3");
   demonMove = loadSound("sounds/demonMove.mp3");
   demonAppear = loadSound("sounds/demonAppear.mp3");
   fireNoise = loadSound("sounds/fire.mp3");
   bossLaugh = loadSound("sounds/bosslaugh.mp3");
   startGame = loadSound("sounds/startgame.mp3");

   demonSpawn = 0;
   demonTimer = int(random(200,500));

   soulSpawn = 0;
   // soulTimer = int(random(800,1000));
   soulTimer = 100;
   bossScreams = 0;

   fireSpawn = 0;
   fireTimer = int(random(100,200));

   demonNum = 0;
   hit = 0;
   point = 0;
   screamBar = 0;
   screamPoint = 0;

   fullBar = 800;
   spirit = 800;

   scream = false;
   gameOn = false;
   ground = true;
   fullSpirit = true;
   bossBattle = false;
   bossBattleOver = false;

   buttonCodes = [37, 38, 39, 40];
   gameOver = false;
   victory = false;
   defeatCounter = 0;
   screamOverride = false;

}

function setup() {
  canvas = createCanvas(1000,500);


  microphone = new p5.AudioIn();

  microphone.start();

  noiseDetail(24);
}

function draw() {

  if(gameOn == false){
    theGraveyard.displayAndScroll();
    theGraveyard2.displayAndScroll();
    image(title, 5, -100);
    textAlign(CENTER);
    fill(0,0,0);
    textSize(100);
    text("Click to start", 500, 300);

  }
  else{
    if(spirit < 800){
      fullSpirit = false;
      if(ground == true){
        spirit += 5;
      }
    }
    else{
      fullSpirit = true;
    }
    var volume = microphone.getLevel();

    if(screamPoint >= 3){
      if(screamBar <1){
        screamBar +=1;
      }
    }

    if((volume >= 0.2 || screamOverride == true) && scream == false && screamTimer == 0 && fullSpirit == true && screamBar >= 1){
      scream = true;
      screamTimer = 40;
      spirit = 0;
      screamBar -= 1;
      screamPoint = 0;
      screamNoise.play();
      if(bossBattle == true){
        bossScreams += 1;
      }
    }

    if (screamTimer > 0) {
      screamTimer -= 1;
    }

    if (screamTimer == 0) {
      scream = false;
    }

    health = fullBar - (hit*10);
    background(0);
    if(health > 0 && victory == false){
      demonSpawn += 1;
      soulSpawn += 1;
      theGraveyard.displayAndScroll();
      theGraveyard2.displayAndScroll();

      fill(128);
      rect(20, 20, fullBar, 20);
      fill(0,255,0);
      rect(20,20, health, 20);
      fill(128);
      rect(20, 50, fullBar, 20);
      fill(0,0,255);
      rect(20, 50, spirit, 20);

      fill(128);
      rect(20, 80, 280, 20);
      rect(280, 80, 270, 20);
      rect(550, 80, 270, 20);

      if(screamPoint <3){
        fill(176,224,230);
      }
      else{
        fill(255,0,0);
      }

      if(screamPoint >= 1){
        rect(20, 80, 280, 20);
        if(screamPoint >= 2){
          rect(280, 80, 270, 20);
          if(screamPoint == 3){
            rect(550, 80, 270, 20);
          }
        }
      }


      fill(255,255,255);
      rect(830, 20, 150, 50);

      fill(0,0,255);
      textSize(30);
      text("Souls: " + point, 900, 50);
      thePlayer.displayAndMove();

      if(demonSpawn >= demonTimer && bossBattle == false){
        demonX = int(random(600,800));
        demonY = int(random(50,400));

        theDemons.push(new Demon(demonX, demonY));
        demonAppear.play();

        demonSpawn = 0;
        demonTimer = int(random(100,200));
        demonNum += 1;
      }
      for (var i =0; i< theDemons.length ; i++){
        theDemons[i].display();
        theDemons[i].update();
        if((dist(thePlayer.x, thePlayer.y, theDemons[i].x, theDemons[i].y)) <= 64){
          hit += 1;
        }
        if(scream == true && screamTimer ==1){
          theDemons.splice(theDemons[i]);
        }
      }

      if(soulSpawn >= soulTimer){
        soulX = int(random(600,800));
        soulY = int(random(50,400));

        theSouls.push(new Soul(soulX, soulY));

        soulSpawn = 0;
        soulTimer = int(random(900,1000));
      }

      for (var i =0; i< theSouls.length ; i++){
        theSouls[i].display();
        theSouls[i].update();
        if((dist(thePlayer.x, thePlayer.y, theSouls[i].x, theSouls[i].y)) <= 64){
          point += 1;
          soulCollect.play();
          if(screamBar <1){
            screamPoint += 1;
          }
          theSouls.splice(theSouls[i]);
        }
      }
      if(point>= 10){
        bossBattle = true;
      }

      if(bossBattle == true){
        if(bossAppear == true){
          bossLaugh.play();
          bossAppear = false;
        }

        for (var i =0; i< theDemons.length ; i++){
          if(theDemons[i].x <= -10){
            theDemons.splice(theDemons[i]);
          }
        }

        fireSpawn += 1;

        theBoss.display();

        if(bossScreams <3){
          fill(255,0,0);
          rect(600, 450, 100, 10);
        }
        if(bossScreams < 2){
          fill(255,0,0);
          rect(700, 450, 100, 10);
        }
        if(bossScreams <1){
          fill(255,0,0);
          rect(800, 450, 100, 10);
        }


        if(fireSpawn >= fireTimer){
          fireX = 470;
          fireY = int(random(50, 300));

          theFire.push(new BossFire(fireX, fireY));
          fireNoise.play();

          fireSpawn = 0;
          fireTimer = int(random(20,50));
        }
        for (var i =0; i< theFire.length ; i++){
          theFire[i].display();
          theFire[i].update();

          if((dist(thePlayer.x, thePlayer.y, (theFire[i].x + 20), (theFire[i].y + 60))) <= 64){
            hit += 1;
          }
          // fill(255,0,0);
          // ellipse(theFire[i].x + 20, theFire[i].y + 60, 64, 64);
          // fill(0,0,255);
          // ellipse(theFire[i].x, theFire[i].y, 182, 182);

        }
      }

      // if(){
      //   victory = true;
      // }

    }

    else if (victory == true) {
      console.log(soulSpawn, soulTimer);
      gameOver = true;
      background(244, 224, 227);
      textAlign(CENTER);
      textSize(50);


      soulSpawn += 5;

      if(soulSpawn >= soulTimer){
        soulX = 500;
        soulY = int(random(50,400));
        soulCollect.play();


        theSouls.push(new Soul(soulX, soulY));

        soulSpawn = 0;
        soulTimer = int(random(200,500));
      }

      for (var i =0; i< theSouls.length ; i++){
        theSouls[i].display();
        theSouls[i].update();
      }

      text("YOU WON", 500, 100);
      text("Click to save more souls.", 500, 160);

    }

    else{
      background(128);
      gameOver = true;
      demonSpawn += 5;
      if(demonSpawn >= demonTimer){
        demonX = int(random(0,1000));
        demonY = int(random(0,500));

        theDemons.push(new Demon(demonX, demonY));

        demonSpawn = 0;
        demonTimer = int(random(100,200));
        demonNum += 1;
      }
      for (var i =0; i< theDemons.length ; i++){
        theDemons[i].display();
      }
      fill(255,0,0);
      textAlign(CENTER);
      textSize(50);
      text("GAME OVER", 500, 100);
      text("Click to try again.", 500, 160);
    }
  }
}

function keyPressed(){
  if(keyCode === ENTER && screamPoint < 3){
    screamPoint += 1;
  }
  if(keyCode === SHIFT){
    point += 1;
  }
  if(keyCode === RIGHT_ARROW){
    hit += 800;
  }

  if(keyCode === LEFT_ARROW){
    screamOverride = true;
  }
  else{
    screamOverride = false;
  }
}

function mousePressed(){
  if(gameOver == false && gameOn == false){

    gameOn = true;
    health = 800;
    spirit = 800;
    souls = 0;
    hit = 0;
    point = 0;
    screamPoint =0;
    screamBar =0 ;
    victory = false;
    bossBattle = false;
    defeatCounter = 0;
    bossScreams = 0;
    bossAppear = true;
    startGame.play();


    for (var i =0; i< theDemons.length ; i++){
      theDemons.splice(theDemons[i]);
    }

    for (var i =0; i< theSouls.length ; i++){
      theSouls.splice(theSouls[i]);
    }

    demonSpawn = 0;
    demonTimer = int(random(200,500));

    soulSpawn = 0;
    soulTimer = 500;

  }
  if(gameOver == true){
    gameOver = false;
    gameOn = false;
  }
}

class BossFire{
  constructor(xPos, yPos){

    this.x = xPos;
    this.y = yPos;

    this.fireCycle = [];

    this.currentImage = 0;

    this.state = 0;
    // this.stateTime = 0;
    // this.stateSwitch = int(random(100,200));

    for (var i = 0; i < 6; i++) {
      var filename = "frame" + nf(i,2) + ".png";
      this.fireCycle.push( loadImage("boss_fire/" + filename) )
    }

  }

  update(){

    this.x -= 10;


  }

  display(){
    this.currentCycle = this.fireCycle;

    image(this.currentCycle[this.currentImage ], this.x, this.y, 182, 182);

    if (frameCount % 10 == 0) {
      this.currentImage += 1;
    }

    if (this.currentImage >= 6) {
      this.currentImage = 0;
    }

  }


}

class Boss{
  constructor(){
    this.x = 520;
    this.y = 50;
    this.bossCycle = [];
    this.bossdefeatCycle = [];

    this.currentImage = 0;

    this.state = 0;
    this.stateTime = 0;
    this.stateSwitch = int(random(100,200));

    for (var i = 0; i < 6; i++) {
      var filename = "frame" + nf(i,2) + ".png";
      this.bossCycle.push( loadImage("demon_boss/" + filename) )
    }

    for (var i = 0; i < 6; i++) {
      var filename = "frame" + nf(i,2) + ".png";
      this.bossdefeatCycle.push( loadImage("boss_defeat/" + filename) )
    }
  }

  update(){
    var movementCounter;
    this.stateTime += 1;
    if(scream == false){
      if(this.stateTime >= this.stateSwitch){
        // movementCounter = 0;
        this.state = 1;
      }

      if(this.state == 1){
        this.x -= 10;
      }

      if(this.x <= -100){
        this.state = 0;
        this.x = random(700,800);
        this.y = random(50, 400);
        this.stateSwitch = int(random(100,200));
        this.stateTime = 0;
        movementCounter = 0;
      }
    }
  }

  defeat(){


    defeatCounter += 1;
    this.currentCycle = this.bossdefeatCycle;

    image(this.currentCycle[this.currentImage], this.x, this.y, 500, 500);

    if (frameCount % 10 == 0) {
      this.currentImage += 1;
    }

    if (this.currentImage >= 6) {
      this.currentImage = 0;
    }
    if(defeatCounter >= 50){
      for (var i =0; i< theFire.length ; i++){
        theFire.splice(theFire[i]);
      }
    victory = true;

    }
  }

  display(){
    if (bossScreams < 3) {
      this.currentCycle = this.bossCycle;

      image(this.currentCycle[this.currentImage ], this.x, this.y, 500,500);

      if (frameCount % 10 == 0) {
        this.currentImage += 1;
      }

      if (this.currentImage >= 6) {
        this.currentImage = 0;
      }
    }
    else {
      this.defeat();
    }
  }
}

class Soul{
  constructor(){
    if(victory == false){
      this.x = random(1000,1100);
    }
    else{
      this.x = -10;
    }
    this.y = random(50, 300);
    this.soulCycle = [];

    this.currentCycle = this.soulCycle;
    this.currentImage = 0;

    this.yNoiseOffset = random(1000,2000);

    for (var i = 0; i < 6; i++) {
      var filename = "frame" + nf(i,2) + ".png";
      this.soulCycle.push( loadImage("souls/" + filename) )
    }

    this.speed = random(4,6);
  }

  display(){
    image(this.currentCycle[this.currentImage ], this.x, this.y, 64, 64);


    if (frameCount % 10 == 0) {
      this.currentImage += 1;
    }

    if (this.currentImage >= 6) {
      this.currentImage = 0;
    }
  }

  update(){
    if(victory == false){
      if(this.x >= -100){
        this.x -= this.speed;
      }
    }
    else{
      if(this.x <= 1100){
        this.x += this.speed;
      }

      var yMovement = map(noise(this.yNoiseOffset), 0, 1, -1, 1);

      this.y += yMovement;
      this.yNoiseOffset += 0.01;
    }
    var yMovement = map(noise(this.yNoiseOffset), 0, 1, -1, 1);

    this.y += yMovement;
    this.yNoiseOffset += 0.01;
  }

}

class Demon{

  constructor(xPos, yPos){
    this.x = xPos;
    this.y = yPos;
    this.demonCycle = [];
    this.defeatCycle = [];

    // this.currentCycle = this.demonCycle;
    this.currentImage = 0;

    this.state = 0;
    this.stateTime = 0;
    this.stateSwitch = int(random(100,200));

    for (var i = 0; i < 6; i++) {
      var filename = "frame" + nf(i,2) + ".png";
      this.demonCycle.push( loadImage("demon_standard/" + filename) )
    }

    for (var i = 0; i < 6; i++) {
      var filename = "frame" + nf(i,2) + ".png";
      this.defeatCycle.push( loadImage("demon_defeat/" + filename) )
    }
  }

  update(){
    var movementCounter;
    this.stateTime += 1;
    if(scream == false){
      if(this.stateTime >= this.stateSwitch){
        // movementCounter = 0;
        this.state = 1;
      }

      if(this.state == 1){
        this.x -= 10;
        // console.log(movementCounter);
        // movementCounter += 1;
        // if(movementCounter == 0){
        //   demonMoveplay();
        //   movementCounter = 1;
        // }

      }

      if(this.x <= -100){
        this.state = 0;
        this.x = random(700,800);
        this.y = random(50, 400);
        this.stateSwitch = int(random(100,200));
        this.stateTime = 0;
        movementCounter = 0;
        demonAppear.play();

      }
    }
  }

  defeat(){
    this.currentCycle = this.defeatCycle;

    image(this.currentCycle[this.currentImage], this.x, this.y, 96, 96);

    if (frameCount % 10 == 0) {
      this.currentImage += 1;
    }

    if (this.currentImage >= 6) {
      this.currentImage = 0;
    }
  }

  display(){
    if (scream == false) {
      this.currentCycle = this.demonCycle;

      image(this.currentCycle[this.currentImage ], this.x, this.y, 96, 96);

      if (frameCount % 10 == 0) {
        this.currentImage += 1;
      }

      if (this.currentImage >= 6) {
        this.currentImage = 0;
      }
    }
    else {
      this.defeat();
    }
  }
}

class Graveyard{
  constructor(xPos){
    this.x = xPos;
    this.y = 0;
    this.image = loadImage("landscape.png");
  }

  displayAndScroll(){
    image(this.image,this.x, this.y);

    if(this.x > -1000){
      this.x -= 10;
    }
    else{
      this.x = 1000;
    }
  }
}

class Player{
  constructor(){
    this.x = 100;
    this.y = 350;

    this.ySpeed =0;

    this.rightCycle = [];
    this.glideCycle = [];
    this.screamCycle = [];

    this.mode = '';

    this.currentImage = 0;

    this.currentCycle = this.leftCycle;

    for (var i = 0; i < 6; i++) {
      var filename = "frame" + nf(i,2) + ".png";
      this.rightCycle.push( loadImage("bansheeRight/" + filename) )
      this.glideCycle.push( loadImage("bansheeGlide/" + filename))
      this.screamCycle.push( loadImage("bansheeScream/" + filename))
    }
  }

  displayAndMove() {
    this.currentCycle = this.rightCycle;
    if(scream == true && ground == true){
      this.currentCycle = this.screamCycle;
    }

    if (keyIsDown(87)) {
      if (this.ySpeed >= 0 && this.y >= 350) {
        this.ySpeed = -18.5;
      }
    }
    if (this.y < 350) {
      ground = false;
      var soundOn = false
      if(keyIsDown(71) && spirit > 0){
        if(glide.isPlaying()){
          soundOn = false;
        }
        else{
          soundOn = true;
        }

        if(soundOn == true){
          glide.play();
        }
        this.ySpeed = 0.1;
        this.currentCycle = this.glideCycle;
        spirit -= 2;
      }
      else{
        if(glide.isPlaying()){
          glide.stop();
        }
        this.ySpeed += 0.5;
      }
    }
    else {
      this.y = 350;
      ground = true;
      // this.ySpeed = 0;
    }
    this.y += this.ySpeed;
    image(this.currentCycle[ this.currentImage ], this.x, this.y, 100, 100);
    if (frameCount % 10 == 0) {
      this.currentImage += 1;
    }
    if (this.currentImage >= 6) {
      this.currentImage = 0;
    }
  }
}
