

var menuSystem = function(p) {

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

  p.preload = function(){
    coverPage_pic = p.loadImage("images/lookhere_coverpage.png");
    for (var i = 0; i < charAssetFilenames.length; i++){
      charImages.push(p.loadImage("images/" + charAssetFilenames[i]));
    }
    for (var i = 0; i < infoAssetFilenames.length; i++){
      infoImages.push(p.loadImage("images/" + infoAssetFilenames[i]));
    }
    for (var i = 0; i < mapAssetFilenames.length; i++){
      mapImages.push(p.loadImage("images/" + mapAssetFilenames[i]));
    }
    for (var i = 0; i < statueAssetFilenames.length; i++){
      statueImages.push(p.loadImage("images/" + statueAssetFilenames[i]));
    }
  }

  p.setup= function(){
    p.createCanvas(1000,562).parent("#menu_section");
    p.background(128);

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

  p.draw= function(){
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
    p.background(255,0,0);
    p.image(coverPage_pic, 0,0);
  }

  function charPage(){


    if(p.mouseX > 63 && p.mouseX < 197 && p.mouseY > 137 && p.mouseY < 460){
      p.image(charImages[1],0,0);
    }
    else if(p.mouseX > 425 && p.mouseX < 572 && p.mouseY > 137 && p.mouseY < 460){
      p.image(charImages[3],0,0);
    }
    else if(p.mouseX > 619 && p.mouseX < 754 && p.mouseY > 137 && p.mouseY < 460){
      p.image(charImages[4],0,0);
    }
    else if(p.mouseX > 821 && p.mouseX < 929 && p.mouseY > 137 && p.mouseY < 460){
      p.image(charImages[5],0,0);
    }
    else{
      p.image(charImages[0], 0,0);
    }

    if (p.mouseX > 243 && p.mouseX < 364 && p.mouseY > 137 && p.mouseY < 460) {
      p.image(charImages[2],0,0);
      matronHover = true;
    }
    else{
      matronHover = false;
    }
  }

  function infoPage(){
    p.background(120,0,200);
    if(p.mouseX > 502 && p.mouseX < 1000 && p.mouseY > 82 && p.mouseY < 209){
      p.image(infoImages[1],0,0);
      galleryMapHover = true;
    }
    else if(p.mouseX > 502 && p.mouseX < 1000 && p.mouseY > 245 && p.mouseY < 367){
      p.image(infoImages[2],0,0);
    }
    else if(p.mouseX > 502 && p.mouseX < 1000 && p.mouseY > 409 && p.mouseY < 530){
      p.image(infoImages[3],0,0);
    }
    else{
      p.image(infoImages[0],0,0);

    }
  }

  function mapPage(){
    p.background(0,255,255);
    if(p.mouseX > 481 && p.mouseX < 527 && p.mouseY > 340 && p.mouseY < 392){
      p.image(mapImages[1],0,0);
      statue1Hover = true;
      console.log("click");

    }
    else if(p.mouseX > 769 && p.mouseX < 813 && p.mouseY > 448 && p.mouseY < 496){
      p.image(mapImages[2],0,0);
      statue2Hover = true;
    }
    else{
      p.image(mapImages[0],0,0);
    }
  }

  function statuePage(){
    if(statue1Hover == true){
      p.image(statueImages[0], 0,0);
      if(p.mouseX > 28 && p.mouseX < 79 && p.mouseY > 13 && p.mouseY < 60){
        backButtonHover = true;
      }
    }
    else if(statue2Hover == true){
      p.image(statueImages[1], 0,0);
      if(p.mouseX > 28 && p.mouseX < 72 && p.mouseY > 14 && p.mouseY < 56){
        backButtonHover = true;
      }

    }
  }


  p.mousePressed= function(){
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

    console.log(p.mouseX, p.mouseY);
  }

  p.keyPressed= function(){

  }

}

var menuSystemSketch = new p5( menuSystem );
