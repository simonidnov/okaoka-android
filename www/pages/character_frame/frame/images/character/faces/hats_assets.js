(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AfQAAQAAGWidF0QiYFnkWEVQkUEVlnCYQl0CdmWAAQmVAAl0idQlniYkVkVQkVkViYlnQidl0AAmWQAAmVCdl0QCYlnEVkVQEVkVFniYQF0idGVAAQGWAAF0CdQFnCYEUEVQEWEVCYFnQCdF0AAGVg");
	this.shape.setTransform(200.5,200.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,402,402);


(lib.hats = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(3,1,1).p("AnpGaIAAlGQAAjLCRiRQCRiRDMAAQDNAACRCRQCRCRAADLIAAFGIFeAAAnpGaIPdAAAtRGaIFoAA");
	this.shape.setTransform(398.1,164.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AntGaIAAlGQgBjLCSiRQCRiRDLAAQDMAACSCRQCRCRAADLIAAFGg");
	this.shape_1.setTransform(398.6,164.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// Calque 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(400,400,1,1,0,0,0,200.5,200.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


// stage content:
(lib.hats_assets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hats
	this.hats = new lib.hats();

	this.timeline.addTween(cjs.Tween.get(this.hats).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599.5,521.5,401,479);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;