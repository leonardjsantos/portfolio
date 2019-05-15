
var coverPage_pic;
var charAssetFilenames = ['lookhere_charpage_0.png','lookhere_charpage_1.png','lookhere_charpage_2.png','lookhere_charpage_3.png','lookhere_charpage_4.png','lookhere_charpage_5.png'];
var charImages = [];
var infoAssetFilenames = ['infoPage_0.png','infoPage_1.png','infoPage_2.png','infoPage_3.png'];
var infoImages = [];
var mapAssetFilenames = ['mapPage_0.png','mapPage_1.png','mapPage_2.png'];
var mapImages = [];
var statueAssetFilenames = ['statuePage_0.png','statuePage_1.png'];
var statueImages = [];

var coverPageOn;
var charPageOn;
var infoPageOn;
var mapPageOn;
var statuePageOn;

var matronHover;
var galleryMapHover;

var map1Hover;
var map2Hover;

var statue1Hover;
var statue2Hover;

var backButtonHover;

function preload(){
  coverPage_pic = loadImage("images/lookhere_coverpage.png");
  for (var i = 0; i < charAssetFilenames.length; i++){
    charImages.push(loadImage("images/" + charAssetFilenames[i]));
  }
  for (var i = 0; i < infoAssetFilenames.length; i++){
    infoImages.push(loadImage("images/" + infoAssetFilenames[i]));
  }
  for (var i = 0; i < mapAssetFilenames.length; i++){
    mapImages.push(loadImage("images/" + mapAssetFilenames[i]));
  }
  for (var i = 0; i < statueAssetFilenames.length; i++){
    statueImages.push(loadImage("images/" + statueAssetFilenames[i]));
  }
}

function setup(){
  createCanvas(1000,562);
  background(128);

  coverPageOn = true;
  charPageOn = false;
  infoPageOn = false;
  mapPageOn = false;
  statuePageOn = false;

  matronHover = false;
  galleryMapHover = false;

  map1Hover = false;
  map2Hover = false;

  statue1Hover = false;
  statue2Hover = false;

  backButtonHover = false;
}

function draw(){
  if(coverPageOn == true){
    coverPage();
  }
  else if(charPageOn == true){
    charPage();
  }
  else if(infoPageOn == true){
    infoPage();
  }
  else if (mapPageOn == true) {
    mapPage();
  }
  else if (statuePageOn == true) {
    statuePage();
  }

}

function coverPage(){
  background(255,0,0);
  image(coverPage_pic, 0,0);
}

function charPage(){
  if(mouseX > 63 && mouseX < 197 && mouseY > 137 && mouseY < 460){
    image(charImages[1],0,0);
  }
  else if (mouseX > 243 && mouseX < 364 && mouseY > 137 && mouseY < 460) {
    image(charImages[2],0,0);
    matronHover = true;
  }
  else if(mouseX > 425 && mouseX < 572 && mouseY > 137 && mouseY < 460){
    image(charImages[3],0,0);
  }
  else if(mouseX > 619 && mouseX < 754 && mouseY > 137 && mouseY < 460){
    image(charImages[4],0,0);
  }
  else if(mouseX > 821 && mouseX < 929 && mouseY > 137 && mouseY < 460){
    image(charImages[5],0,0);
  }
  else{
    image(charImages[0], 0,0);
  }
}

function infoPage(){
  background(120,0,200);
  if(mouseX > 502 && mouseX < 1000 && mouseY > 82 && mouseY < 209){
    image(infoImages[1],0,0);
    galleryMapHover = true;
  }
  else if(mouseX > 502 && mouseX < 1000 && mouseY > 245 && mouseY < 367){
    image(infoImages[2],0,0);
  }
  else if(mouseX > 502 && mouseX < 1000 && mouseY > 409 && mouseY < 530){
    image(infoImages[3],0,0);
  }
  else{
    image(infoImages[0],0,0);

  }
}

function mapPage(){
  background(0,255,255);
  if(mouseX > 481 && mouseX < 527 && mouseY > 340 && mouseY < 392){
    image(mapImages[1],0,0);
    statue1Hover = true;
    console.log("click");

  }
  else if(mouseX > 769 && mouseX < 813 && mouseY > 448 && mouseY < 496){
    image(mapImages[2],0,0);
    statue2Hover = true;
  }
  else{
    image(mapImages[0],0,0);
  }
}

function statuePage(){
  if(statue1Hover == true){
    image(statueImages[0], 0,0);
    if(mouseX > 28 && mouseX < 79 && mouseY > 13 && mouseY < 60){
      backButtonHover = true;
    }
  }
  else if(statue2Hover == true){
    image(statueImages[1], 0,0);
    if(mouseX > 28 && mouseX < 72 && mouseY > 14 && mouseY < 56){
      backButtonHover = true;
    }

  }
}


function mousePressed(){
  console.log(statuePageOn, mapPageOn, statue1Hover, statue2Hover);
  if(coverPageOn == true){
    charPageOn = true;
    coverPageOn = false;
  }

  if(matronHover == true){
    charPageOn = false;
    infoPageOn = true;
  }

  if(galleryMapHover == true){
    mapPageOn = true;
    infoPageOn = false;
  }
  if(statue1Hover == true || statue2Hover == true){
    mapPageOn = false;
    statuePageOn = true;
  }
  if(backButtonHover == true){
    statuePageOn = false;
    statue1Hover = false;
    statue2Hover = false;
    backButtonHover = false;
    mapPageOn = true;
  }

  console.log(mouseX, mouseY);
}

function keyPressed(){


}
