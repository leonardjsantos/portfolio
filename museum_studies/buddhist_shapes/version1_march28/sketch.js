var start;
var levelselect;
var game;
var end;
var counter;

function setup(){
  createCanvas(500,700);
  start = false;
  levelselect = false;
  game = false;
  end = false;
  counter = 0;

}

function draw(){
  if(counter == 1){
    start = true;
  }
  else if (counter == 2) {
    start = false;
    end = true;
  }
  else{
    end = false;
  }

  textAlign(CENTER);
  if(start == false && end == false){
    startPage();
  }
  else if (start == true) {
    gamePage();
  }
  else{
    endPage();
  }
}

function startPage(){
  background(255,0,0);
  textSize(80);
  text("The Wheel of Life", 250,200);
  textSize(20);
  text("Click anywhere to begin the experience!", 250, 250);

  fill(200,125,255);
  rect(50, 400, 100,100);
  rect(200, 400, 100,100);
  rect(350, 400, 100,100);


}

function gamePage(){
  background(0,255,0);
  textSize(30)
  text("GAME PAGE", 250,100);
}

function endPage(){
  background(0,0,255);
  textSize(80)
  text("GAME OVER", 250, 250);
}

function mousePressed(){
  if(start == false && end == false){
    counter = 1;
  }
  else if (true) {
    counter = 0;

  }

}

function keyPressed(){
  if(keyCode == DOWN_ARROW){
    counter = 2;
  }

}
