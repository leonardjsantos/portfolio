// variable to hold a reference to our A-Frame world
var world;
var userContainer;

// our models
var seaweed, whale, coral1, coral2, coral1b, coral2b;


function setup() {
	noCanvas();


	world = new World('VRScene');
	userContainer = new Container3D({x:0, y:0, z:0});

	world.add(userContainer);

	var basePlane = new Plane({
		x: 0, y:-2, z:0, width:100, height:100, asset:'oceanfloor', rotationX:-90, repeatX:100, repeatY:100
	});
	world.add(basePlane);

	whale = new OBJ({
		asset: 'whale_obj',
		mtl: 'whale_mtl',
		x: 5,
		y: 1.3,
		z: 0,
		rotationX:0,
		rotationY:60,
		rotationZ: 90,
		scaleX:1,
		scaleY:1,
		scaleZ:1,
	});

	userContainer.addChild(whale);

	for(let i=-3; i< 3; i++){
		for(let k = -1; k<5; k++){
			seaweed = new OBJ({
				asset: 'seaweed_obj',
				mtl: 'seaweed_mtl',
				x: (i*3),
				y: -2,
				z: (k*3),
				rotationX:0,
				rotationY:180,
				scaleX:1,
				scaleY: 1,
				scaleZ:1,
			});
			// world.add(seaweed);
		}

		coral1 = new OBJ({
			asset: 'coral1_obj',
			mtl: 'coral1_mtl',
			x: 3,
			y: -1,
			z: -1,
			rotationX:0,
			rotationY:180,
			scaleX:1,
			scaleY: 1,
			scaleZ:1,
		});
		world.add(coral1);

		coral1b = new OBJ({
			asset: 'coral1_obj',
			mtl: 'coral1_mtl',
			x: -3,
			y: -1,
			z: -20,
			rotationX:0,
			rotationY:180,
			scaleX:2,
			scaleY: 2,
			scaleZ:2,
		});
		world.add(coral1b);

		coral2 = new OBJ({
			asset: 'coral2_obj',
			mtl: 'coral2_mtl',
			x: -2,
			y: -1,
			z: 5,
			rotationX:0,
			rotationY:0,
			scaleX:4,
			scaleY: 4,
			scaleZ:4,
		});
		world.add(coral2);

		coral2b = new OBJ({
			asset: 'coral2_obj',
			mtl: 'coral2_mtl',
			x: 5,
			y: -1,
			z: -3,
			rotationX:0,
			rotationY:0,
			scaleX:4,
			scaleY: 4,
			scaleZ:4,
		});
		world.add(coral2b);



	}


	var sky = select('#theSky');
	sky.attribute('src', '#sky1');




}

function draw() {
	userContainer.spinY(-0.5);

}
