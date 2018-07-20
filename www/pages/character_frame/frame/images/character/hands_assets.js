(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 100,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.hands_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgqFVQgRgJACgkIAFhnQAAgSgCgHQgHgQgMACQgIAAgHAJQgFAHgCALQgKApgFAmQgDAggGANQgJAYgWAGQgMgJgDgTQgDgMABgWQAGhHgEhUQgEgqgVgFQgPgBgRAOQgOALgVAXQgRAXgOgGQgIgCgDgLQgCgIACgLQAFgcARgeQAIgPAZgjQAUggAKgXQAJgVADgTIAAjzIHyAAIAAD0IAAABIAAAQQAKCTgJCIQgCAtgNAYQgIARgOAGQgIADgIgCQgJgBgFgFQgGgIAAgVIAAgwQgCgTgDgJQgFgPgKgFQgLgGgNAGQgNAGgHALQgGAKgDAOIgEAaQgEAkgIAXQgHAYgJAKQgHAHgKADQgKADgIgDIgDh4QAAgSgEgJQgDgGgFgEQgHgEgGABQgLABgJATQgGAOgDAXIgEAmQgIAugUAUQgIAHgKACIgHABQgHAAgFgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.2,-34.4,60.4,69);


(lib.color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AiwCuQhIhJgBhmIAAgBIAAj0IHzAAIAAD0IAAABQgBBmhIBJQhKBJhnAAQhmAAhKhJg");
	this.shape.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-24.5,50,49.6);


(lib.hands = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Calque 1
	this.skin = new lib.color();

	this.skin_1 = new lib.hands_2();
	this.skin_1.setTransform(-4.6,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.skin}]}).to({state:[{t:this.skin_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-24.5,50,49.6);


// stage content:
(lib.hands_assets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.hand = new lib.hands();
	this.hand.setTransform(-0.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.9,24.7,50,49.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;