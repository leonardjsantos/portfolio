var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7;
var song8;

var oldmusic;

var song;
var fft;
var music;

var particles = [];

function preload(){
  song1 = loadSound('songs/track1.wav');
  song2 = loadSound('songs/track2.wav');
  song3 = loadSound('songs/track3.wav');
  song4 = loadSound('songs/track4.wav');
  song5 = loadSound('songs/track5.wav');
  song6 = loadSound('songs/track6.wav');
  song7 = loadSound('songs/track7.wav');
  song8 = loadSound('songs/track8.wav');

  music = "";
  oldmusic = music;
  // updateMenu();

  // song = loadSound('songs/' + music + '.wav');

}

function setup() {
   createCanvas(400,200);
   noFill();
   // song.play();
   fft = new p5.FFT();

}

function draw() {
   background(128);



   for (var i = 0; i < particles.length; i++) {
     var goAway = particles[i].moveAndDisplay();
     if (goAway) {
       particles.splice(i, 1);
       i--;
     }
   }



   fft.setInput(song);

   var spectrum = fft.analyze();

   // stroke(0);
   // noFill();
   beginShape();
   // console.log(spectrum.length);

   var lowSum = 0;
   var lowMax = 0;
   var highSum = 0;
   var highMax = 0;

   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );

    if (i < 100) {
      lowMax += 255;
      lowSum += spectrum[i];
    }
    if (i > 300) {
      highMax += 255;
      highSum += spectrum[i];
    }
   }
   endShape();


   console.log(lowSum/lowMax, highSum/highMax);

   if (lowSum/lowMax > 0.65) {
     particles.push( new Particle1(width/2, height/2, random(255), random(255), random(255), "ellipse"));
   }
   if (highSum/highMax > 0.4) {
     particles.push( new Particle1(width/2, height/2, random(255), random(255), random(255), "rect"));
   }


   // updateMenu();
   console.log(music);
}

function keyPressed(){
  if(music == "track1" || music == ""){
    song = song1;
  }
  else if(music == "track2"){
    song = song2;
  }
  else if(music == "track3"){
    song = song3;
  }
  else if(music == "track4"){
    song = song4;
  }
  else if(music == "track5"){
    song = song5;
  }
  else if(music == "track6"){
    song = song6;
  }
  else if(music == "track7"){
    song = song7;
  }
  else{
    song = song8;
  }

  if(keyCode === ENTER){
    if (song.isPlaying() ) { // .isPlaying() returns a boolean
     song.stop();
     // background(255,0,0);
   } else {
     song.play();
     // background(0,255,0);
   }
  }
}

function mousePressed(){
  song.stop();
}

function updateMenu(theMenu) {
  music = theMenu.value;
}



class Particle1 {

  constructor(x,y,r,g,b,type) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.xDir = random(-6,6);
    this.yDir = random(-6,6);
    this.type = type;
    this.alpha = 255;
  }

  moveAndDisplay() {
    this.x += this.xDir;
    this.y += this.yDir;
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    if (this.type == 'rect') {
      rect(this.x, this.y, 50, 50);
    }
    else if (this.type == 'ellipse') {
      ellipse(this.x, this.y, 50, 50);
    }
    this.alpha -= 5;

    if (this.alpha < 0) {
      this.alpha = 0;
      return true;
    }
    return false;
  }

}
