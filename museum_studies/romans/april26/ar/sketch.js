var arSystem = function(p) {


  // create a variable to hold our world object
  var world;

  // create a variable to hold our marker
  var marker;

  // create variables to hold each cube
  var littleCube1, littleCube2, littleCube3, littleCube4, littleCube5;

  // movement speeds for the other cubes
  var scaleUp;

  p.setup = function() {
    // create our world (this also creates a p5 canvas for us)
    world = new World('ARScene', p);

    // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
    marker = world.getMarker('hiro');

    console.log(marker);

    scaleUp = 0.01;


    statue = new OBJ({
  		asset: 'statue_obj',
  		mtl: 'statue_mtl',
  		x: 0,
  		y: 0,
  		z: 0,
      rotationY:-90,
  		rotationZ:90,
  		scaleX:1,
  		scaleY:1,
  		scaleZ:1,
  	});

  	marker.addChild(statue);
  }


  p.draw = function() {
    var s = statue.getScale();

    console.log(marker.isVisible());

    if (s.x < 5) {
    		scaleUp += 0.0001;
    	}
    else{
      scaleUp = 0;
    }

      statue.setScale(s.x + scaleUp, s.y + scaleUp, s.z + scaleUp);



    // statue.setScale(s.x + scaleUp, s.y + scaleUp, s.z + scaleUp);


  }


}


var arSystemSketch = new p5( arSystem );
