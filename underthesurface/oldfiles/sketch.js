var world;

var talkingNoise;

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

var step1;
var step2;
var step3;
var step4;
var step5;
var step6;


function preload(){
	pass = false;
	fire1 = false;

	key1 = false;
	key2 = false;
	key3 = false;
	key4 = false;
	key5 = false;
	key6 = false;

	step1 = false;
	step2 = false;
	step3 = false;
	step4 = false;
	step5 = false;
	step6 = false;

}

function setup() {
	noCanvas();

	// talkingNoise = loadSound("sounds/talking.mp3");

	newtorch = new Torch(0,2,0);


	world = new World('VRScene');

	ground = new Plane({x:0, y:-5, z:-25, width: 100, height: 100,repeatX: 100, repeatY: 100, red:75, green:0, blue:130, rotationX:-90});
	path = new Plane({x:0, y:-4.9, z:-25, width: 20, height: 100,repeatX: 100, repeatY: 100, red:255, green:0, blue:0, rotationX:-90});
	wall1 = new Plane({x:50, y:0, z:-25, width: 100, height: 100,repeatX: 100, repeatY: 100, red:128, green:128, blue:130, rotationY: -90, rotationX:0});
	wall2 = new Plane({x:-50, y:0, z:-25, width: 100, height: 100,repeatX: 100, repeatY: 100, red:128, green:128, blue:128, rotationY: 90, rotationX:0});
	wall3 = new Plane({x:0, y:0, z:-75, width: 100, height: 100,repeatX: 100, repeatY: 100, red:255, green:0, blue:255, rotationY: 0, rotationX:0, rotationZ: 90});
	// wall4 = new Plane({x:0, y:0, z:5, width: 100, height: 100,repeatX: 100, repeatY: 100, red:0, green:0, blue:255, rotationY: -90, rotationX:0, rotationZ: -180});
	roof = new Plane({x:0, y:50, z:-25, width: 100, height: 100, repeatX: 100, repeatY: 100, red:75, green:0, blue:130, rotationX:90});

	// left close
	cone1 = new Cone({ x:-25, y:2, z:10, height: 1.5, radiusBottom: 0, radiumTop: 5, red:211, green:211, blue:211,
		clickFunction: function(character){
			key1 = true;
			cone1.setColor(0,255,0);
		}
	});

	// right middle
	cone2 = new Cone({ x:25, y:2, z:-20, height: 1.5, radiusBottom: 0, radiumTop: 5, red:211, green:211, blue:211,
		clickFunction: function(character){
			key2 = true;
			cone2.setColor(0,255,0);
		}
	});

	// right close
	cone3 = new Cone({ x:25, y:2, z:10, height: 1.5, radiusBottom: 0, radiumTop: 5, red:211, green:211, blue:211,
		clickFunction: function(character){
			key3 = true;
			cone3.setColor(0,255,0);
		}
	});

	// left far
	cone4 = new Cone({ x:-25, y:2, z:-40, height: 1.5, radiusBottom: 0, radiumTop: 5, red:211, green:211, blue:211,
		clickFunction: function(character){
			key4 = true;
			cone4.setColor(0,255,0);
		}
	});

	// right far
	cone5 = new Cone({ x:25, y:2, z:-40, height: 1.5, radiusBottom: 0, radiumTop: 5, red:211, green:211, blue:211,
		clickFunction: function(character){
			key5 = true;
			cone5.setColor(0,255,0);
		}
	});

	// left middle
	cone6 = new Cone({ x:-25, y:2, z:-20, height: 1.5, radiusBottom: 0, radiumTop: 5, red:211, green:211, blue:211,
		clickFunction: function(character){
			key6 = true;
			cone6.setColor(0,255,0);
		}
	});

  world.add(ground);
	world.add(path);
	world.add(wall1);
	world.add(wall2);
	world.add(wall3);
	// world.add(wall4);
	world.add(roof);

	world.add(cone1);
	world.add(cone2);
	world.add(cone3);
	world.add(cone4);
	world.add(cone5);
	world.add(cone6);


	for (var i = 0; i < 100; i++) {
		particles.push( new Particle(0,3,-5));
	}

}

function draw() {
	console.log("Keys", key1, key2, key3, key4, key5, key6);
	console.log("Steps", step1, step2, step3, step4, step5, step6);

	if(fire1 == true){
		for (var i = 0; i < particles.length; i++) {
			particles[i].move();
		}
	}

	if(step1 == false){
		if(key1 == true){
			step1 = true;
		}
		else{
			key1 = false;
			key2 = false;
			key3 = false;
			key4 = false;
			key5 = false;
			key6 = false;
		}
	}
	// step1 is true, which means that step2 and step3 are false
	else{
		if(step2 == false){
			if(key2 == true && key3 == false && key4 == false && key5 == false && key6 == false){
				step2 = true;
			}
			if(key3 == true || key4 == true || key5 == true || key6 == true){
				key6 = false;
				key5 = false;
				key4 = false;
				key3 = false;
				key2 = false;
				key1 = false;
				step1 = false;
			}
		}
		else{
			if(step3 == false){
				if(key3 == true && key4 == false && key5 == false && key6 == false){
					step3 = true;
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
				}
			}
			else{
				if(step4 == false){
					if(key4 == true && key5 == false && key6 == false){
						step4 = true;
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
					}
				}
				else{
					if(step5 == false){
						if(key5 == true && key6 == false){
							step5 = true;
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
						}
					}
					else{
						if(step6 == false){
							if(key6 == true){
								step6 = true;
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
		wall3.setColor(255,0,255);
	}

	else{
		wall3.setColor(0,0,255);
	}


	if (mouseIsPressed){
		world.moveUserForward(0.05);
	}

	var pos = world.getUserPosition();
	if(pos.x > 50){
		world.setUserPosition(-50,pos.y, pos.z);
	}
	else if (pos.x <-50){
		world.setUserPosition(50,pos.y, pos.z);
	}
	if(pos.z > 50){
		world.setUserPosition(pos.x,pos.y, -50);
	}
	else if (pos.z <-50){
		world.setUserPosition(pos.x,pos.y, 50);
	}

}

class Particle {

	constructor(x,y,z) {
		// every particle needs its own asset
		this.myBox = new Box({
			x: x,
			y: y,
			z: z,
			red: random(255),
			green: random(255),
			blue: random(255),
			width: 0.25,
			height: 0.25,
			depth: 0.25
		});
		world.add(this.myBox);

		// every box is going to wander around, so it needs a Perlin noise offset
		this.noiseX = random(0,1000);
		this.noiseY = random(2000,3000);
		this.noiseZ = random(4000,5000);
	}

	// every box should be able to move
	move() {
		// compute how much to move using Perlin noise
		var moveX = map( noise(this.noiseX), 0, 1, -0.03, 0.03 );
		var moveY = map( noise(this.noiseY), 0, 1, -.03, 0.03 );
		var moveZ = map( noise(this.noiseZ), 0, 1, -0.03, 0.03 );

		// nudge the box
		this.myBox.nudge(moveX, moveY, moveZ);

		// make sure it doesn't leave the middle of the screen
		this.myBox.constrainPosition((this.x-1), (this.x+1), this.y, (this.y+12), (this.z-1), (this.z+1));
		// console.log(this.x, this.y, this.z);
		// update Perlin noise offsets
		this.noiseX += 0.01;
		this.noiseY += 0.01;
		this.noiseZ += 0.01;

		// spin a bit, just for fun
		this.myBox.spinX(1);
	}
}

class Torch {

	constructor(x,y,z) {
		// every particle needs its own asset
		// this.myContainer = new Container3D({
		// 	x: x,
		// 	y: y,
		// 	z: z
		// });

		this.myTorch = new Cone({
			x: x,
			y: y,
			z: z,
			height: 1.5,
			radiusBottom: 0,
			radiumTop: 5,
			red:211,
			green:211,
			blue:211
		});

		// world.add(this.myContainer);
		// this.myContainer.addChild(this.myTorch);
		// world.add(this.myTorch);
	}

	move() {


	}
}
