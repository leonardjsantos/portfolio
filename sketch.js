function preload(){
  var gotime;
  var gameOn;
  var ground;


  var counter;
  var charge;

  var speed;
  var slow;

  var gravity;
  var fall;

  var ellipseX;
  var ellipseY;

  var score1;
  var score2;
  var score3;
  var score4;

  var total_steps;

  var easy;
  var medium;
  var hard;

}

function setup(){
  createCanvas(600,500);

  gotime = false;
  gameOn = false;

  counter = 0;
  charge = 0;
  speed = 0;
  slow = -200;
  ellipseX = 0;
  ellipseY = 200;
  gravity = 1;
  fall = 0;
  ground = false;

  easy = 200;
  medium = 300;
  hard = 400;

  score1 = 0;
  score2 = 200;
  score3 = 400;
  score4 = 600;

  total_steps = 0;

  points = 0;

}

function draw(){

  //continually make the background
  background(128);

  fill(0);
  textAlign(LEFT);
  textSize(12);
  text("Go? " + gotime, 0, 10);
  text("Counter: " + counter, 0, 30);
  text("Charge: " + charge, 0, 50);
  text("Slow: " + slow, 0, 70);
  text("Position:" + ellipseX, 0, 90 );
  text("Game On: " + gameOn, 0, 110);
  text("Total Steps: " + total_steps, 0, 130);
  text("Points: " + points, 0, 150);
  text("EllipseY: " + ellipseY, 0, 170);

  line(0, 450, 600, 450);

  fill(255,0,0);
  rect(score1, 450, 200, 10);
  fill(255, 178, 102);
  rect(score2, 450, 200, 10);
  fill(0,255,0);
  rect(score3, 450, 200, 10);



  if(gameOn == false){
    textAlign(CENTER);
    fill(0,0,255);
    textSize(40);
    text("Click to start!", 300,300);
  }
  else{
    // in this mode, the player will "run" and build up
    if(gotime == false){
      fill(255,0,0);
      textSize(50);
      textAlign(CENTER);
      text("RUN!!!", 300, 300);
    }

    // in this mode, the player will just watch and see how far they got


    // WATCH
    else{
      fill(0,255,0);
      ellipseX += (charge/8);

      if(ground == true){
        charge = 0;
      }

      if(ellipseY < 450){
        ellipseY -= fall;
        fall -= (gravity/40);
        ground = false;

      }
      else{
        ellipseY = 450;
        ground = true;
      }

      if (charge >0){
        charge += (slow/counter);
      }
      else{
        charge = 0;
      }

    }

    ellipseMode(CENTER);


    if(counter < 1000){
      counter += 5;

    }
    else{
      gotime = true;


    }

    fill(125, 0, 200);
    ellipse(ellipseX, ellipseY, 20, 20);
  }




}

function keyPressed(){
  if((keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) && gotime == false && gameOn == true){
    charge += 1;
    total_steps += 1;
  }
}

function mousePressed(){
  gameOn = true;
}
