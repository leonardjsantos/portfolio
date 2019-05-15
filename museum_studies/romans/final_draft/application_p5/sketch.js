
// you can use this function to have this application communicate with the main program
var sendMessageToParent = window.parent.messageFromP5

// ... and this function will run when the main program sends this application a message
function receiveMessgeFromMain(message) {
  console.log("a message was received from the main program: " + message);
}

if (sendMessageToParent) {
	console.log("here");
  // send an initial message to the parent to let them know we're ready to go
  sendMessageToParent('Hello from P5', receiveMessgeFromMain);
}

// button to go to the AR system (note that  you can do this in your p5 code too, just call 'sendMessageToParent' - no need to wrap it in a jQuery event
$(document).ready(function() {
	$("#sendmessage").tap(function()  {
		sendMessageToParent("P5Click");
	});
});





var coverPage_pic;
var charAssetFilenames = ['lookhere_charpage_0.png','lookhere_charpage_1.png','lookhere_charpage_2.png','lookhere_charpage_3.png','lookhere_charpage_4.png','lookhere_charpage_5.png'];
var charImages = [];
var infoAssetFilenames = ['infoPage_0.png','infoPage_1.png','infoPage_2.png'];
var infoImages = [];
var statueAssetFilenames = ['statuePage_0.png','statuePage_1.png','statuePage_2.png','statuePage_3.png','statuePage_4.png'];
var statueImages = [];
var paintingAssetFilenames = ['paintingPage_0.png','paintingPage_1.png','paintingPage_2.png','paintingPage_3.png','paintingPage_4.png'];
var paintingImages = [];
var menuAssetFilenames = ['menuPage_0.png','menuPage_1.png','menuPage_2.png','menuPage_3.png'];
var menuImages = [];

var coverPageOn;
var charPageOn;
var infoPageOn;
var mapPageOn;
var statuePageOn;
var paintingPageOn;
var menuPageOn;

var statueInfo1;
var statueInfo2;
var statueInfo3;
var statueInfo4;

var statueInfo1Hover;
var statueInfo2Hover;
var statueInfo3Hover;
var statueInfo4Hover;

var backToInfoHover;

var paintingInfo1;
var paintingInfo2;
var paintingInfo3;
var paintingInfo4;

var paintingInfo1Hover;
var paintingInfo2Hover;
var paintingInfo3Hover;
var paintingInfo4Hover;

var backToPaintingInfoHover;

var matronHover;
var galleryMapHover;

var statueHoverOn;
var paintingHoverOn;

var menuPageHover;

var backButtonHover;
var returnButtonHover;

var lastPage;
var menuCounter;

var menu1On;
var menu2On;
var menu3On;

var menu1Hover;
var menu2Hover;
var menu3Hover;

var backTriX = [];

function preload(){
  coverPage_pic = loadImage("images/lookhere_coverpage.png");
  for (var i = 0; i < charAssetFilenames.length; i++){
    charImages.push(loadImage("images/" + charAssetFilenames[i]));
  }
  for (var i = 0; i < infoAssetFilenames.length; i++){
    infoImages.push(loadImage("images/" + infoAssetFilenames[i]));
  }
  for (var i = 0; i < statueAssetFilenames.length; i++){
    statueImages.push(loadImage("images/" + statueAssetFilenames[i]));
  }
  for (var i = 0; i < paintingAssetFilenames.length; i++){
    paintingImages.push(loadImage("images/" + paintingAssetFilenames[i]));
  }
  for (var i = 0; i < menuAssetFilenames.length; i++){
    menuImages.push(loadImage("images/" + menuAssetFilenames[i]));
  }
}

function setup(){
  createCanvas(1000,562);
  background(128);

  coverPageOn = true;
  charPageOn = false;
  infoPageOn = false;

  statuePageOn = false;
  paintingPageOn = false;

  statueHoverOn = false;
  paintingHoverOn = false;

  matronHover = false;
  galleryMapHover = false;

  backButtonHover = false;
  returnButtonHover = false;

  statueInfo1 = false;
  statueInfo2 = false;
  statueInfo3 = false;
  statueInfo4 = false;

  statueInfo1Hover = false;
  statueInfo2Hover = false;
  statueInfo3Hover = false;
  statueInfo4Hover = false;

  backToInfoHover = false;

  menuPageOn = false;
  menuPageHover = false;

  menu1On = false;
  menu2On = false;
  menu3On = false;
  menu1Hover = false;
  menu2Hover = false;
  menu3Hover = false;


  lastPage = '';
  menuCounter = 0;

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
  else if (statuePageOn == true) {
    statuePage();
  }
  else if(paintingPageOn == true){
    paintingPage();
  }
  else if(menuPageOn == true){
    menuPage();
  }

}

function coverPage(){
  document.getElementById('sendmessage').style.display = 'none';
  background(255,0,0);
  image(coverPage_pic, 0,0, 1000,562);
}

function charPage(){
  document.getElementById('sendmessage').style.display = 'none';
  if(mouseX > 63 && mouseX < 197 && mouseY > 137 && mouseY < 460){
    image(charImages[1],0,0, 1000,562);
    matronHover = false;

  }
  else if (mouseX > 243 && mouseX < 364 && mouseY > 137 && mouseY < 460) {
    image(charImages[2],0,0, 1000,562);
    matronHover = false;
  }
  else if(mouseX > 425 && mouseX < 572 && mouseY > 137 && mouseY < 460){
    image(charImages[3],0,0, 1000,562);
    matronHover = true;
  }
  else if(mouseX > 619 && mouseX < 754 && mouseY > 137 && mouseY < 460){
    image(charImages[4],0,0, 1000,562);
    matronHover = false;

  }
  else if(mouseX > 821 && mouseX < 929 && mouseY > 137 && mouseY < 460){
    image(charImages[5],0,0, 1000,562);
    matronHover = false;

  }
  else{
    image(charImages[0], 0,0, 1000,562);
    matronHover = false;
  }

  fill(0);
  rect(10, 10, 35, 30);
  fill(255);
  triangle(15, 25, 40, 15, 40, 35);

  if(mouseX >= 10 && mouseX <= 47 && mouseY >= 10 && mouseY <= 40){
    returnButtonHover = true;
  }
  else{
    returnButtonHover = false;
  }
}

function infoPage(){
  background(120,0,200);
  document.getElementById('sendmessage').style.display = 'block';
  console.log("here");

  if(mouseX > 493 && mouseX < 529 && mouseY > 380 && mouseY < 417){
    image(infoImages[1],0,0, 1000,562);
    statueHoverOn = true;
    console.log("STATUE");
  }
  else if(mouseX > 788 && mouseX < 824 && mouseY > 491 && mouseY < 526){
    image(infoImages[2],0,0, 1000, 562);
    paintingHoverOn = true;
    console.log("PAINTING");

  }
  else{
    image(infoImages[0],0,0, 1000,562);
    statueHoverOn = false;
    paintingHoverOn = false;
  }

  if(mouseX >= 945 && mouseX <= 985 && mouseY >= 10 && mouseY <= 30){
    menuPageHover = true;
    lastPage = 'infoPage';
  }
  else{
    menuPageHover = false;
  }

  fill(0);
  rect(10, 10, 35, 30);
  fill(255);
  triangle(15, 25, 40, 15, 40, 35);

  if(mouseX >= 10 && mouseX <= 47 && mouseY >= 10 && mouseY <= 40){
    returnButtonHover = true;
  }
  else{
    returnButtonHover = false;
  }

}


function statuePage(){
  document.getElementById('sendmessage').style.display = 'none';
  if(statueInfo1 == true){
    image(statueImages[1], 0,0,1000,562);
    if(mouseX >= 845 && mouseX <= 975 && mouseY >= 478 && mouseY <= 515){
      backToInfoHover = true;
    }
    else{
      backToInfoHover = false;
    }
  }
  else if(statueInfo2 == true){
    image(statueImages[2], 0,0,1000,562);
    if(mouseX >= 857 && mouseX <= 985 && mouseY >= 188 && mouseY <= 223){
      backToInfoHover = true;
    }
    else{
      backToInfoHover = false;
    }
  }
  else if(statueInfo3 == true){
    image(statueImages[3], 0,0,1000,562);
    if(mouseX >= 852 && mouseX <= 976 && mouseY >= 447 && mouseY <= 477){
      backToInfoHover = true;
    }
    else{
      backToInfoHover = false;
    }
  }
  else if(statueInfo4 == true){
    image(statueImages[4], 0,0,1000,562);
    if(mouseX >= 831 && mouseX <= 953 && mouseY >= 512 && mouseY <= 546){
      backToInfoHover = true;
    }
    else{
      backToInfoHover = false;
      fill(0);
      rect(10, 10, 35, 30);
      fill(255);
      triangle(15, 25, 40, 15, 40, 35);
    }
  }
  else{
    image(statueImages[0],0,0, 1000,562);
    if(mouseX >= 595 && mouseX <= 609 && mouseY >= 87 && mouseY <= 100){
      statueInfo1Hover = true;
    }
    else if(mouseX >= 679 && mouseX <= 697 && mouseY >= 24 && mouseY <= 40){
      statueInfo2Hover = true;
    }
    else if(mouseX >= 705 && mouseX <= 724 && mouseY >= 99 && mouseY <= 117){
      statueInfo3Hover = true;
    }
    else if(mouseX >= 738 && mouseX <= 759 && mouseY >= 223 && mouseY <= 243){
      statueInfo4Hover = true;
    }
    else{
      statueInfo1Hover = false;
      statueInfo2Hover = false;
      statueInfo3Hover = false;
      statueInfo4Hover = false;
      backToInfoHover = false;

    }
    fill(0);
    rect(10, 10, 35, 30);
    fill(255);
    triangle(15, 25, 40, 15, 40, 35);
    if(mouseX >= 10 && mouseX <= 47 && mouseY >= 10 && mouseY <= 40){
      returnButtonHover = true;
    }
    else{
      returnButtonHover = false;
    }
  }

  if(mouseX >= 945 && mouseX <= 980 && mouseY >= 15 && mouseY <= 26){
    menuPageHover = true;
    lastPage = 'statuePage';
  }
  else{
    menuPageHover = false;
  }


}

function paintingPage(){
  document.getElementById('sendmessage').style.display = 'none';
  if(paintingInfo1 == true){
    image(paintingImages[1], 0,0,1000,562);
    if(mouseX >= 858 && mouseX <= 985 && mouseY >= 257 && mouseY <= 293){
      backToPaintingInfoHover = true;
    }
    else{
      backToPaintingInfoHover = false;
    }
  }
  else if(paintingInfo2 == true){
    image(paintingImages[2], 0,0,1000,562);
    if(mouseX >= 849 && mouseX <= 978 && mouseY >= 480 && mouseY <= 515){
      backToPaintingInfoHover = true;
    }
    else{
      backToPaintingInfoHover = false;
    }
  }
  else if(paintingInfo3 == true){
    image(paintingImages[3], 0,0,1000,562);
    if(mouseX >= 118 && mouseX <= 247 && mouseY >= 241 && mouseY <= 278){
      backToPaintingInfoHover = true;
    }
    else{
      backToPaintingInfoHover = false;
    }
  }
  else if(paintingInfo4 == true){
    image(paintingImages[4], 0,0,1000,562);
    if(mouseX >= 136 && mouseX <= 265 && mouseY >= 492 && mouseY <= 530){
      backToPaintingInfoHover = true;
    }
    else{
      backToPaintingInfoHover = false;
    }
  }
  else{
    image(paintingImages[0],0,0, 1000,562);
    if(mouseX >= 692 && mouseX <= 722 && mouseY >= 101 && mouseY <= 138){
      paintingInfo1Hover = true;
    }
    else if(mouseX >= 673 && mouseX <= 706 && mouseY >= 251 && mouseY <= 280){
      paintingInfo2Hover = true;
    }
    else if(mouseX >= 751 && mouseX <= 782 && mouseY >= 325 && mouseY <= 354){
      paintingInfo3Hover = true;
    }
    else if(mouseX >= 496 && mouseX <= 525 && mouseY >= 463 && mouseY <= 494){
      paintingInfo4Hover = true;
    }
    else{
      paintingInfo1Hover = false;
      paintingInfo2Hover = false;
      paintingInfo3Hover = false;
      paintingInfo4Hover = false;
      backToPaintingInfoHover = false;

    }

    fill(0);
    rect(10, 10, 35, 30);
    fill(255);
    triangle(15, 25, 40, 15, 40, 35);
    if(mouseX >= 10 && mouseX <= 47 && mouseY >= 10 && mouseY <= 40){
      returnButtonHover = true;
    }
    else{
      returnButtonHover = false;
    }
  }

  if(mouseX >= 948 && mouseX <= 985 && mouseY >= 9 && mouseY <= 26){
    menuPageHover = true;
    lastPage = 'paintingPage';
  }
  else{
    menuPageHover = false;
  }

}

function menuPage(){
  document.getElementById('sendmessage').style.display = 'none';
  background(0,255,0);
  if(menu1On == true){
    image(menuImages[1], 0,0, 1000,562);
  }
  else if(menu2On == true){
    image(menuImages[2], 0,0, 1000,562);
  }
  else if(menu3On == true){
    image(menuImages[3], 0,0, 1000,562);
  }
  else{
    image(menuImages[0],0,0,1000,562);
    if(mouseX >= 639 && mouseX <= 961 && mouseY >= 59 && mouseY <= 108){
      menu1Hover = true;
    }
    else{
      menu1Hover = false;
    }
    if(mouseX >= 680 && mouseX <= 931 && mouseY >= 439 && mouseY <= 478){
      menu2Hover = true;
    }
    else{
      menu2Hover = false;
    }
    if(mouseX >= 680 && mouseX <= 931 && mouseY >= 488 && mouseY <= 526){
      menu3Hover = true;
    }
    else{
      menu3Hover = false;
    }
  }

  menuCounter += 1;
}


function mousePressed(){
  console.log("MP");
  console.log(mouseX, mouseY, coverPageOn, charPageOn, returnButtonHover);
  if(coverPageOn == true){
    charPageOn = true;
    coverPageOn = false;
  }

  if(matronHover == true){
    charPageOn = false;
    infoPageOn = true;
  }

  if(statueHoverOn == true){
    statuePageOn = true;
    infoPageOn = false;
  }

  if(statueInfo1Hover == true){
    statueInfo1 = true;
  }
  else if(statueInfo2Hover == true){
    statueInfo2 = true;
  }
  else if(statueInfo3Hover == true){
    statueInfo3 = true;
  }
  else if(statueInfo4Hover == true){
    statueInfo4 = true;
  }

  if(backToInfoHover == true){
    statueInfo1 = false;
    statueInfo2 = false;
    statueInfo3 = false;
    statueInfo4 = false;
  }

  if(paintingHoverOn == true){
    paintingPageOn = true;
    infoPageOn = false;
  }

  if(paintingInfo1Hover == true){
    paintingInfo1 = true;
  }
  else if(paintingInfo2Hover == true){
    paintingInfo2 = true;
  }
  else if(paintingInfo3Hover == true){
    paintingInfo3 = true;
  }
  else if(paintingInfo4Hover == true){
    paintingInfo4 = true;
  }

  if(backToPaintingInfoHover == true){
    paintingInfo1 = false;
    paintingInfo2 = false;
    paintingInfo3 = false;
    paintingInfo4 = false;

  }

  if(menuPageHover == true){
    charPageOn = false;
    infoPageOn = false;
    statuePageOn = false;
    paintingPageOn = false;
    menuPageOn = true;
  }
  if(menuPageOn == true && menuCounter >= 1
    && mouseX >= 945 && mouseX <= 982 && mouseY >= 15 && mouseY <= 31
  ){
    if(lastPage == 'infoPage'){
      menu1On = false;
      menu2On = false;
      menu3On = false;
      infoPageOn = true;
      menuPageOn = false;
      menuCounter = 0;

    }
    else if (lastPage == 'statuePage') {
      menu1On = false;
      menu2On = false;
      menu3On = false;
      statuePageOn = true;
      menuPageOn = false;
      menuCounter = 0;

    }
    else if (lastPage == 'paintingPage') {
      menu1On = false;
      menu2On = false;
      menu3On = false;
      paintingPageOn = true;
      menuPageOn = false;
      menuCounter = 0;
    }
  }

  if(menu1Hover == true){
    menu1On = true;
  }
  else if(menu2Hover == true){
    menu2On = true;
  }
  else if(menu3Hover == true){
    menu3On = true;
  }

  if( (menu1On == true || menu2On == true || menu3On == true) && mouseX >= 830 && mouseX <= 962 && mouseY >= 504 && mouseY <= 544 ){
    menu1On = false;
    menu2On = false;
    menu3On = false;

  }

  if(backButtonHover == true){
    statuePageOn = false;
    statue1Hover = false;
    statue2Hover = false;
    backButtonHover = false;
    mapPageOn = true;
  }

  if(returnButtonHover == true){
    if(charPageOn == true){
      coverPageOn = true;
      charPageOn = false;
      returnButtonHover = false;
    }
    else if (infoPageOn == true) {
      charPageOn = true;
      infoPageOn = false;
      returnButtonHover = false;
    }
    else if (statuePageOn == true) {
      infoPageOn = true;
      statuePageOn = false;
      returnButtonHover = false;
    }
    else if (paintingPageOn == true) {
      infoPageOn = true;
      paintingPageOn = false;
      returnButtonHover = false;
    }
  }

}
