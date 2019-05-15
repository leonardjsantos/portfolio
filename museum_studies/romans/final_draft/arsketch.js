
// name of painti


// you can use this function to have this application communicate with the main program
var sendMessageToParent = messageFromAR;

// ... and this function will run when the main program sends this application a message
function receiveMessgeFromMain(message) {
  console.log("a message was received from the main program: " + message);
}

// send an initial message to the parent to let them know we're ready to go
sendMessageToParent('Hello from AR', receiveMessgeFromMain);




// create a variable to hold our world object
var world;

// create a variable to hold our marker
var marker;


function setup(){
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  marker = world.getMarker('hiro');

  statue = new OBJ({
		asset: 'statue_obj',
		mtl: 'statue_mtl',
		x: 0,
		y: 0,
		z: 0,
    rotationY:-90,
		rotationZ:90,
		scaleX:0,
		scaleY:0,
		scaleZ:0,
	});

	marker.addChild(statue);
}

var grace = 10;

function draw() {

  if (marker.isVisible()) {
    grace = 10;
    var s = statue.getScale();
    if (s.x < 5) {
      s.x += 0.1;
    }
    else {
      if (mouseIsPressed) {
        sendMessageToParent("ARClick");        
      }
    }
    statue.setScale(s.x,s.x,s.x);
  }
  else {
    if (grace > 0) {
      grace--;
    }
    else {
      statue.setScale(0,0,0);
    }
  }

}
