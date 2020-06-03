// variable to hold a reference to our A-Frame world
var world;

// variable to hold our 'gravity sensor' - this will find objects below
// the user and will let you know when to make them fall down
var gravSensor;

var pass;

var newtorch;

var fire1;

var particles = [];

var key1;
var key2;
var key3;
var key4;
var key5;
var key6;
var key7;
var key8;
var key9;
var key10;
var key11;
var key12;

var step1;
var step2;
var step3;
var step4;
var step5;
var step6;

var correctNoise;
var failureNoise;
var paperNoise;
var soundtrack;

var discussionCounter;
var angelTalk;
var angelClick;

function preload(){
	pass = false;
	fire1 = false;

	key1 = false;
	key2 = false;
	key3 = false;
	key4 = false;
	key5 = false;
	key6 = false;
	key7 = false;
	key8 = false;
	key9 = false;
	key10 = false;
	key11 = false;
	key12 = false;

	step1 = false;
	step2 = false;
	step3 = false;
	step4 = false;
	step5 = false;
	step6 = false;

	discussionCounter = 0;
	angelTalk = false;
	angelClick = false;

	correctNoise = loadSound("sounds/correct.mp3");
	failureNoise = loadSound("sounds/failure.mp3");
	paperNoise = loadSound("sounds/paper.mp3");
	soundtrack = loadSound("sounds/soundtrack.mp3");

}

function setup() {
	// no canvas needed
	noCanvas();

	soundtrack.play();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');


	// create a bunch of obstacles
	for (var i = 0; i < 50; i++) {
		var grey = random(75,225);
		var box = new Box({
			x: int(random(-49,49)),
			y: 2,
			z: int(random(-45,49)),
			height: 4,
			red: 255, green: 0, blue: 0
		});

		// important -- set a property on the box to tell the system that this is
		// an entity that we can collide with!
		box.tag.object3D.userData.solid = true;

		// add the box to the world
		// world.add(box);
	}


	// create 4 walls around the edge of the world
	var wall1 = new Box({
		x:-49, y:2,	z:0,
		width: 1, height: 40, depth: 100,
		red: 128, green: 128, blue: 128,
		asset: "wall"
	});
	var wall2 = new Box({
		x:49,
		y:2,
		z:0,
		width: 1,
		height: 40,
		depth: 100,
		red: 128, green: 128, blue: 128,
		asset: "wall"

	});
	var wall3 = new Box({
		x:0,
		y:2,
		z:-49,
		width: 100,
		height: 40,
		depth: 1,
		red: 128, green: 128, blue: 128,
		asset: "wall"

	});
	var wall4 = new Box({
		x:0,
		y:2,
		z:49,
		width: 100,
		height: 40,
		depth: 1,
		red: 128, green: 128, blue: 128,
		asset: "wall"

	});

	// important -- set a property the walls to tell the system that this is
	// an entity that we can collide with!
	wall1.tag.object3D.userData.solid = true;
	wall2.tag.object3D.userData.solid = true;
	wall3.tag.object3D.userData.solid = true;
	wall4.tag.object3D.userData.solid = true;

	// add the walls to the system
	world.add( wall1 );
	world.add( wall2 );
	world.add( wall3 );
	world.add( wall4 );

	var wall5 = new Box({
		x:-5,
		y:2,
		z:-5,
		width: 1,
		height: 3.5,
		depth: 20,
		red: 255, green: 128, blue: 0,
		asset: "wall"
	});
	var wall6 = new Box({
		x:5,
		y:2,
		z:-5,
		width: 1,
		height: 3.5,
		depth: 20,
		red: 255, green: 128, blue: 0,
		asset: "wall"
	});
	var wall7 = new Box({
		x:0,
		y:2,
		z:5,
		width: 10,
		height: 3.5,
		depth: 1,
		red: 255, green: 128, blue: 0,
		asset: "wall"
	});

	wall5.tag.object3D.userData.solid = true;
	wall6.tag.object3D.userData.solid = true;
	wall7.tag.object3D.userData.solid = true;

	world.add( wall5 );
	world.add( wall6 );
	world.add( wall7 );

	// create a plane to serve as our "ground"
	var g = new Plane({x:0, y:0, z:0, width:100, height:100, red:0, green:102, blue:153, rotationX:-90, metalness:0.25, asset:"ground"});

	// set the ground so that it is considered 'solid'
	g.tag.object3D.userData.solid = true;

	// add the plane to our world
	world.add(g);


	// create some stairs
	var stair1 = new Box({
		width:10,height:0.5,depth:2,
		x:0,y:0.5,z:-5,
		red:169,green:169,blue:169,
		asset: "stairs"
	});
	stair1.tag.object3D.userData.stairs = true;
	world.add(stair1);

	var stair2 = new Box({
		width:10,height:0.5,depth:2,
		x:0,y:1,z:-7,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair2.tag.object3D.userData.stairs = true;
	world.add(stair2);

	var stair3 = new Box({
		width:10,height:0.5,depth:2,
		x:0,y:1.5,z:-9,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair3.tag.object3D.userData.stairs = true;
	world.add(stair3);

	var stair4 = new Box({
		width:10,height:0.5,depth:2,
		x:0,y:2,z:-11,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair4.tag.object3D.userData.stairs = true;
	world.add(stair4);
	var stair5 = new Box({
		width:10,height:0.5,depth:2,
		x:0,y:2.5,z:-13,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair5.tag.object3D.userData.stairs = true;
	world.add(stair5);

	var stair6 = new Box({
		width:10,height:0.5,depth:2,
		x:0,y:3,z:-15,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair6.tag.object3D.userData.stairs = true;
	world.add(stair6);

	var stair7 = new Box({
		width:100,height:0.5,depth:5,
		x:0,y:3.5,z:-17,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair7.tag.object3D.userData.stairs = true;
	world.add(stair7);

	var stair8 = new Box({
		width:10,height:0.5,depth:3,
		x:0,y:3,z:-21,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair8.tag.object3D.userData.stairs = true;
	world.add(stair8);

	var stair9 = new Box({
		width:10,height:0.5,depth:2,
		x:0,y:2.5,z:-23,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair9.tag.object3D.userData.stairs = true;
	world.add(stair9);

	var stair10 = new Box({
		width:10,height:0.5,depth:2,
		x:0,y:2,z:-25,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair10.tag.object3D.userData.stairs = true;
	world.add(stair10);

	var stair11 = new Box({
		width:10,height:0.5,depth:2,
		x:0,y:1.5,z:-27,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair11.tag.object3D.userData.stairs = true;
	world.add(stair11);

	var stair12 = new Box({
		width:10,height:0.5,depth:2,
		x:0,y:1,z:-29,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair12.tag.object3D.userData.stairs = true;
	world.add(stair12);

	var stair13 = new Box({
		width:10,height:0.5,depth:2,
		x:0,y:0.5,z:-31,
		red:169,green:169,blue:169,
		asset: "stairs"

	});
	stair13.tag.object3D.userData.stairs = true;
	world.add(stair13);

	var stair14 = new Box({
		width:45,height:0.5,depth:100,
		x:27.5,y:4,z:0,
		red:0,green:255,blue:255,
		asset: "ground"
	});
	stair14.tag.object3D.userData.stairs = true;
	world.add(stair14);

	var stair15 = new Box({
		width:45,height:0.5,depth:100,
		x:-27.5,y:4,z:0,
		red:0,green:255,blue:255,
		asset: "ground"
	});
	stair15.tag.object3D.userData.stairs = true;
	world.add(stair15);

	var stair16 = new Box({
		width:10,height:0.5,depth:-50,
		x:0,y:4,z:30,
		red:120,green:0,blue:200,
		asset: "ground"
	});
	stair16.tag.object3D.userData.stairs = true;
	world.add(stair16);

	// turn off the WASD keys (we will handle moving ourselves inside of 'draw')
	world.camera.holder.setAttribute('wasd-controls', 'enabled: false; fly: false;');

	// create our gravity sensor (see class below)
	// this object detects what is below the user
	gravSensor = new GravitySensor();

	torus1 = new Torus({x:0, y:6, z:-25, red:120, green:0, blue:255,
		scaleX: .5, scaleY: .5, scaleZ: .5
	});

	world.add(torus1);

	cone1 = new Cone({ x:-25, y:2, z:20, height: 1.5, radiusBottom: 0, radiumTop: 5, red:0, green:211, blue:211,
		clickFunction: function(character){
			key1 = true;
		}
	});

	torus2 = new Torus({x:-25, y:1, z:20, red:120, green:0, blue:255, scaleX: .25, scaleY: .25, scaleZ: .25});

	world.add(torus2);

	// right middle
	cone2 = new Cone({ x:35, y:5, z:-10, height: 1.5, radiusBottom: 0, radiumTop: 5, red:211, green:211, blue:211,
		clickFunction: function(character){
			key2 = true;
		}
	});

	var painting1 = new Box({
		x:40, y:10, z:-10,
		width: 2, height: 10, depth: 10,
		red: 128, green: 128, blue: 128,
		asset: "painting1"
	});

	painting1.tag.object3D.userData.solid = true;

	world.add(painting1);

	// right close
	cone3 = new Cone({ x:43, y:2, z:44, height: 1.5, radiusBottom: 0, radiumTop: 5, red:211, green:211, blue:211,
		clickFunction: function(character){
			key3 = true;
		}
	});

	tree = new OBJ({
			asset: 'tree_obj', mtl: 'tree_mtl',
			x: 45, y: 1.7, z: 45,
			scaleX:2.6, scaleY:2.6, scaleZ:2.6,
			// visible: false
		});

	world.add(tree);

	// right far
	cone4 = new Cone({ x:30, y:5, z:-40, height: 1.5, radiusBottom: 0, radiumTop: 5, red:211, green:211, blue:211,
		clickFunction: function(character){
			key4 = true;
		}
	});

	telescope = new OBJ({
			asset: 'telescope_obj', mtl: 'telescope_mtl',
			x: 35, y: 9, z: -40,
			scaleX:6, scaleY:6, scaleZ:6,
		});

		world.add(telescope);

	// left far
	cone5 = new Cone({ x:-37, y:5, z:-40, height: 1.5, radiusBottom: 0, radiumTop: 5, red:211, green:211, blue:211,
		clickFunction: function(character){
			key5 = true;
		}
	});

	var painting2 = new Box({
		x:-40, y:10, z:-40,
		width: 2, height: 10, depth: 10,
		red: 128, green: 128, blue: 128,
		asset: "painting2"
	});

	painting2.tag.object3D.userData.solid = true;

	world.add(painting2);

	// left middle
	cone6 = new Cone({ x:-25, y:2, z:-20, height: 1.5, radiusBottom: 0, radiumTop: 5, red:211, green:211, blue:211,
		clickFunction: function(character){
			key6 = true;
		}
	});

	bunny = new OBJ({
		asset: 'bunny_obj', mtl: 'bunny_mtl',
		x: -30, y: 1, z: -22,
		scaleX:4, scaleY:4, scaleZ:4,
	});

	world.add(bunny);

	gate = new Plane({x:0, y:0, z:-75, width: 100, height: 100,repeatX: 100, repeatY: 100, red:255, green:0, blue:255, rotationY: 0, rotationX:0, rotationZ: 90});

	cone7 = new Cone({ x:-25, y:5, z:20, height: 1.5, radiusBottom: 0, radiumTop: 5, red:0, green:211, blue:211,
		clickFunction: function(character){
			key7 = true;
		}
	});

	var painting3 = new Box({
		x:-40, y:10, z:20,
		width: 2, height: 10, depth: 10,
		red: 128, green: 128, blue: 128,
		asset: "painting3"
	});

	painting3.tag.object3D.userData.solid = true;

	world.add(painting3);

	cone8 = new Cone({ x:35, y:2, z:-10, height: 1.5, radiusBottom: 0, radiumTop: 5, red:0, green:211, blue:211,
		clickFunction: function(character){
			key8 = true;
		}
	});

	desk = new OBJ({
		asset: 'desk_obj', mtl: 'desk_mtl',
		x: 40, y: 1, z: -10,
		scaleX:.5, scaleY:.5, scaleZ:.5,
	});

	world.add(desk);

	cone9 = new Cone({ x:43, y:5, z:44, height: 1.5, radiusBottom: 0, radiumTop: 5, red:0, green:211, blue:211,
		clickFunction: function(character){
			key9 = true;
		}
	});

	horse = new OBJ({
			asset: 'horse_obj', mtl: 'horse_mtl',
			x: 45, y: 7, z: 45,
			scaleX:5, scaleY:5, scaleZ:5,
			// visible: false
		});

	world.add(horse);

	// right far
	cone10 = new Cone({ x:30, y:2, z:-40, height: 1.5, radiusBottom: 0, radiumTop: 5, red:0, green:211, blue:211,
		clickFunction: function(character){
			key10 = true;
		}
	});

	record = new OBJ({
			asset: 'record_obj', mtl: 'record_mtl',
			x: 35, y: 0, z: -40,
			scaleX:2, scaleY:2, scaleZ:2,
		});

		world.add(record);

	// left far
	cone11 = new Cone({ x:-37, y:2, z:-40, height: 1.5, radiusBottom: 0, radiumTop: 5, red:0, green:211, blue:211,
		clickFunction: function(character){
			key11 = true;
		}
	});

	squirrel = new OBJ({
			asset: 'squirrel_obj', mtl: 'squirrel_mtl',
			x: -39, y: 2, z: -40,
			scaleX:4, scaleY:4, scaleZ:4,
		});

		world.add(squirrel);

	// left middle
	cone12 = new Cone({ x:-25, y:5, z:-20, height: 1.5, radiusBottom: 0, radiumTop: 5, red:0, green:211, blue:211,
		clickFunction: function(character){
			key12 = true;
		}
	});

	plane = new OBJ({
			asset: 'plane_obj', mtl: 'plane_mtl',
			x: -30, y: 6, z: -20,
			scaleX:1, scaleY:1, scaleZ:1,
			// visible: false
		});

	world.add(plane);


	world.add(cone1);
	world.add(cone2);
	world.add(cone3);
	world.add(cone4);
	world.add(cone5);
	world.add(cone6);
	world.add(cone7);
	world.add(cone8);
	world.add(cone9);
	world.add(cone10);
	world.add(cone11);
	world.add(cone12);

	// world.add(gate);

	teleport1 = new Box({
		width:0.5,height:0.5,depth:0.5,
		x:-25,y:1.5,z:10,
		red:0,green:169,blue:0,
		visible: false
	});

	teleport2 = new Box({
		width:0.5,height:0.5,depth:0.5,
		x:25,y:5,z:-10,
		red:0,green:169,blue:0,
		visible: false
	});

	teleport3 = new Box({
		width:0.5,height:0.5,depth:0.5,
		x:43,y:2,z:34,
		red:0,green:169,blue:0,
		visible: false
	});

	teleport4 = new Box({
		width:0.5,height:0.5,depth:0.5,
		x:20,y:5,z:-30,
		red:0,green:169,blue:0,
		visible: false
	});

	teleport5 = new Box({
		width:0.5,height:0.5,depth:0.5,
		x:-27,y:5,z:-40,
		red:0,green:169,blue:0,
		visible: false
	});

	teleport6 = new Box({
		width:0.5,height:0.5,depth:0.5,
		x:-15,y:2,z:-20,
		red:0,green:169,blue:0,
		visible: false
	});

	world.add(teleport1);
	world.add(teleport2);

	angel = new OBJ({
			asset: 'angel_obj', mtl: 'angel_mtl',
			x: 0, y: 28, z: 40,
			rotationY:-90, rotationZ: 180, rotationX: 180,
			scaleX:10, scaleY:10, scaleZ:10,
			visible: false
		});

	world.add(angel);

	dialogue1 = new Box({
		x: 0, y: 13, z: 40,
		height: 18, width: 20, depth:1,
		asset: "dialogue1",
		visible: false
	});

	dialogue2 = new Box({
		x: 0, y: 13, z: 40,
		height: 18, width: 20, depth:1,
		asset: "dialogue2",
		visible: false
	});

	dialogue3 = new Box({
		x: 0, y: 13, z: 40,
		height: 18, width: 20, depth:1,
		asset: "dialogue3",
		visible: false
	});

	dialogue4 = new Box({
		x: 0, y: 13, z: 40,
		height: 18, width: 20, depth:1,
		asset: "dialogue4",
		visible: false
	});

	dialogue5 = new Box({
		x: 0, y: 13, z: 40,
		height: 18, width: 20, depth:1,
		asset: "dialogue5",
		visible: false
	});

	dialogue6 = new Box({
		x: 0, y: 13, z: 40,
		height: 18, width: 20, depth:1,
		asset: "dialogue6",
		visible: false
	});

	dialogue7 = new Box({
		x: 0, y: 13, z: 40,
		height: 18, width: 20, depth:1,
		asset: "dialogue7",
		visible: false
	});

	world.add(dialogue1);
	world.add(dialogue2);
	world.add(dialogue3);
	world.add(dialogue4);
	world.add(dialogue5);
	world.add(dialogue6);
	world.add(dialogue7);

	container1 = new Container3D({x:25, y:60, z:-80});
	var planet1 = new Sphere({x:0, y:0, z:0, radius: 15, red:50, green:200, blue:120});
	var moon1 = new Sphere({x:20, y:0, z:0, radius: 2, red:200, green:20, blue:20});
	var moon2 = new Sphere({x:0, y:0, z:20, radius: 2, red:0, green:20, blue:200});

	container2 = new Container3D({x:-35, y:70, z:50});
	var planet2 = new Sphere({x:0, y:0, z:0, radius: 15, red:120, green:0, blue:200});
	var moon3 = new Sphere({x:20, y:0, z:0, radius: 2, red:0, green:0, blue:0});
	var moon4 = new Sphere({x:0, y:0, z:20, radius: 2, red:255, green:200, blue:255});
	var moon5 = new Sphere({x:0, y:20, z:0, radius: 3, red:130, green:170, blue:15});

	container1.addChild(planet1);
	container1.addChild(moon1);
	container1.addChild(moon2);

	container2.addChild(planet2);
	container2.addChild(moon3);
	container2.addChild(moon4);

	world.add(container1);
	world.add(container2);
}


function draw() {
	container1.spinY(1);
	container1.spinX(0.5);

	container2.spinZ(5);
	container2.spinY(2);

	var position = world.getUserPosition();
	var userX = position.x;
	var userY = position.y;
	var userZ = position.z;

	var cone1Pos = cone1.getWorldPosition();
	var cone1X = cone1.x;
	var cone1Z = cone1.z;

	var cone2Pos = cone2.getWorldPosition();
	var cone2X = cone2.x;
	var cone2Z = cone2.z;

	var cone3Pos = cone3.getWorldPosition();
	var cone3X = cone3.x;
	var cone3Z = cone3.z;

	var cone4Pos = cone4.getWorldPosition();
	var cone4X = cone4.x;
	var cone4Z = cone4.z;

	var cone5Pos = cone5.getWorldPosition();
	var cone5X = cone5.x;
	var cone5Z = cone5.z;

	var cone6Pos = cone6.getWorldPosition();
	var cone6X = cone6.x;
	var cone6Z = cone6.z;

	var angelPos = angel.getWorldPosition();
	var angelX = angel.x;
	var angelZ = angel.z;

	cone1dist = dist(userX,userZ, cone1X, cone1Z);
	cone2dist = dist(userX,userZ, cone2X, cone2Z);
	cone3dist = dist(userX,userZ, cone3X, cone3Z);
	cone4dist = dist(userX,userZ, cone4X, cone4Z);
	cone5dist = dist(userX,userZ, cone5X, cone5Z);
	cone6dist = dist(userX,userZ, cone6X, cone6Z);

	angeldist = dist(userX, userZ, angelX, angelZ);

	if(userY >= 0 && userY < 4.5){
		if(cone1dist <= 5){
			document.getElementById("letter1").style.display=  "block";
			world.teleportToObject(teleport1);
			paperNoise.play();
		}
		if(cone3dist <= 5){
			document.getElementById("letter3").style.display=  "block";
			world.teleportToObject(teleport3);
			paperNoise.play();
		}
		if(cone6dist <=5){
			document.getElementById("letter6").style.display=  "block";
			world.teleportToObject(teleport6);
			paperNoise.play();
		}
	}
	else{
		if(cone2dist <=5){
			document.getElementById("letter2").style.display=  "block";
			world.teleportToObject(teleport2);
			paperNoise.play();
		}
		if(cone4dist <= 5){
			document.getElementById("letter4").style.display=  "block";
			world.teleportToObject(teleport4);
			paperNoise.play();
		}
		if(cone5dist <= 5){
			document.getElementById("letter5").style.display=  "block";
			world.teleportToObject(teleport5);
			paperNoise.play();
		}

		if(angeldist <= 30 && userX <= 5 && userX >= -5 && userZ > 5 && pass==true){
			angelTalk = true;
		}
	}
	console.log(userX, userZ);

	torus1.spinX(1);
	torus1.spinY(2);
	// torus1.spinZ(.5);

	torus2.spinX(2);
	torus2.spinY(2.5);
	torus2.spinZ(.5);

	if(key1 == true){
		cone1.setColor(0,255,0);
	}
	else{
		cone1.setColor(0,211,211);
	}
	if(key2 == true){
		cone2.setColor(0,255,0);
	}
	else{
		cone2.setColor(0,211,211);
	}
	if(key3 == true){
		cone3.setColor(0,255,0);
	}
	else{
		cone3.setColor(0,211,211);
	}
	if(key4 == true){
		cone4.setColor(0,255,0);
	}
	else{
		cone4.setColor(0,211,211);
	}
	if(key5 == true){
		cone5.setColor(0,255,0);
	}
	else{
		cone5.setColor(0,211,211);
	}
	if(key6 == true){
		cone6.setColor(0,255,0);
	}
	else{
		cone6.setColor(0,211,211);
	}

	var whatsBelow = gravSensor.getEntityBelowUser();

	if (whatsBelow) {
		var cp = world.getUserPosition();

		if (whatsBelow.distance > 1) {
			world.setUserPosition( cp.x, cp.y - 0.1, cp.z);
		}
		else if (whatsBelow.object.el.object3D.userData.stairs) {
			world.setUserPosition( cp.x, cp.y + (1-whatsBelow.distance), cp.z);
		}
	}

	if (mouseIsPressed || keyIsDown(87)) {
		var okToMove = true;

		var objectAhead = world.castRay();

		if ( (objectAhead && objectAhead.distance < 0.25 && objectAhead.object.el.object3D.userData.solid) || angelTalk == true && pass == true) {
			okToMove = false;
		}

		if (okToMove) {
			world.moveUserForward(0.1);
		}
	}

	if(key7 == true || key8 == true || key9 == true || key10 == true || key11 == true || key12 == true){
		key6 = false;
		key5 = false;
		key4 = false;
		key3 = false;
		key2 = false;
		key1 = false;
		step5 = false;
		step4 = false;
		step3 = false;
		step2 = false;
		step1 = false;
		failureNoise.play();
		key7 = false;
		key8 = false;
		key9 = false;
		key10 = false;
		key11 = false;
		key12 = false;

	}

	if(step1 == false){
		if(key1 == true){
			step1 = true;
			correctNoise.play();
		}
		if(key2 == true || key3 == true || key4 == true || key5 == true || key6 == true){
			key1 = false;
			key2 = false;
			key3 = false;
			key4 = false;
			key5 = false;
			key6 = false;
			failureNoise.play();
		}
	}
	else{
		if(step2 == false){
			if(key2 == true && key3 == false && key4 == false && key5 == false && key6 == false){
				step2 = true;
				correctNoise.play();
			}
			if(key3 == true || key4 == true || key5 == true || key6 == true){
				key6 = false;
				key5 = false;
				key4 = false;
				key3 = false;
				key2 = false;
				key1 = false;
				step1 = false;
				failureNoise.play();

			}
		}
		else{
			if(step3 == false){
				if(key3 == true && key4 == false && key5 == false && key6 == false){
					step3 = true;
					correctNoise.play();

				}
				if(key4 == true || key5 == true || key6 == true){
					key6 = false;
					key5 = false;
					key4 = false;
					key3 = false;
					key2 = false;
					key1 = false;
					step2 = false;
					step1 = false;
					failureNoise.play();

				}
			}
			else{
				if(step4 == false){
					if(key4 == true && key5 == false && key6 == false){
						step4 = true;
						correctNoise.play();

					}
					if(key5 == true || key6 == true){
						key6 = false;
						key5 = false;
						key4 = false;
						key3 = false;
						key2 = false;
						key1 = false;
						step3 = false;
						step2 = false;
						step1 = false;
						failureNoise.play();

					}
				}
				else{
					if(step5 == false){
						if(key5 == true && key6 == false){
							step5 = true;
							correctNoise.play();

						}
						if(key6 == true){
							key6 = false;
							key5 = false;
							key4 = false;
							key3 = false;
							key2 = false;
							key1 = false;
							step4 = false;
							step3 = false;
							step2 = false;
							step1 = false;
							failureNoise.play();

						}
					}
					else{
						if(step6 == false){
							if(key6 == true){
								step6 = true;
								correctNoise.play();

							}
						}
					}
				}
			}
		}

	}



	if(step1 == true && step2 == true && step3 == true && step4 == true && step5 == true && step6 == true){
		pass = true;
	}

	if(pass == false){
		gate.setColor(255,0,255);
	}

	else{
		gate.setColor(0,0,255);
		angel.show();

	}


	if(angelTalk == true){
		if(discussionCounter == 0){
			dialogue1.show();
		}
		else if(discussionCounter == 1){
			dialogue1.hide();
			dialogue2.show();
		}
		else if(discussionCounter == 2){
			dialogue2.hide();
			dialogue3.show();
		}
		else if(discussionCounter == 3){
			dialogue3.hide();
			dialogue4.show();
		}
		else if(discussionCounter == 4){
			dialogue4.hide();
			dialogue5.show();
		}
		else if(discussionCounter == 5){
			dialogue5.hide();
			dialogue6.show();
		}
		else if(discussionCounter == 6){
			dialogue6.hide();
			dialogue7.show();
		}
		else{
			document.getElementById("end").style.display= "block";
		}
	}

	console.log(discussionCounter);

}

function mousePressed(){
	if(angelTalk == true){
		discussionCounter += 0.5;
	}
}




class GravitySensor {

	constructor() {
		// raycaster - think of this like a "beam" that will fire out of the
		// bottom of the user's position to figure out what is below their avatar
		this.rayCaster = new THREE.Raycaster();
		this.userPosition = new THREE.Vector3(0,0,0);
		this.downVector = new THREE.Vector3(0,-1,0);
		this.intersects = [];
	}

	getEntityBelowUser() {
		// update the user's current position
		var cp = world.getUserPosition();
		this.userPosition.x = cp.x;
		this.userPosition.y = cp.y;
		this.userPosition.z = cp.z;

		this.rayCaster.set(this.userPosition, this.downVector);
		this.intersects = this.rayCaster.intersectObjects( world.threeSceneReference.children, true );
		if (this.intersects.length > 0) {
			return this.intersects[0];
		}
		return false;
	}
}
