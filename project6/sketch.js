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
   console.log("DETECT");
}

function draw() {
   background(200);
   fft.setInput(song);

   var spectrum = fft.analyze();

   beginShape();
   // console.log(spectrum.length);

   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );

   }
   endShape();

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
  // oldmusic = music;
  // var newmusic = "";
  // if(music != ""){
  //   song.stop();
  // }
  //
  // if(music == "track1" || music == ""){
  //   song = song1;
  // }
  // else if(music == "track2"){
  //   song = song2;
  // }
  // else if(music == "track3"){
  //   song = song3;
  // }
  // else if(music == "track4"){
  //   song = song4;
  // }
  // else if(music == "track5"){
  //   song = song5;
  // }
  // else if(music == "track6"){
  //   song = song6;
  // }
  // else if(music == "track7"){
  //   song = song7;
  // }
  // else{
  //   song = song8;
  // }
  //
  // song.stop();
  // console.log(oldmusic, newmusic);


 //  if (song.isPlaying() ) { // .isPlaying() returns a boolean
 //   song.stop();
 //   // background(255,0,0);
 // } else {
 //   song.play();
 //   // background(0,255,0);
 // }
}

function updateMenu(theMenu) {
  music = theMenu.value;

}
