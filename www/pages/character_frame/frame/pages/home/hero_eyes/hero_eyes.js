(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pupille = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAVgQAPQgPAQgVAAQgVAAgPgQg");
	this.shape.setTransform(4,-6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhRBSQghgiAAgwQAAgvAhgiQAighAvAAQAvAAAiAhQAiAiAAAvQAAAwgiAiQgiAhgvAAQgvAAgighg");
	this.shape_1.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pupille, new cjs.Rectangle(-11.5,-11.8,23,23.7), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_4, null, null);


(lib.eyes_hp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{down:4,left:15,right:28});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(13).call(this.frame_27).wait(13).call(this.frame_40).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#633575").ss(5).p("AoghDQCBBKDLAlQGVBKFui5");
	this.shape.setTransform(1.3,174.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(41));

	// Calque 4
	this.instance = new lib.pupille();
	this.instance.parent = this;
	this.instance.setTransform(55.8,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:15},10).wait(1).to({y:-3.5},0).to({x:35.8},12).to({x:55.8},1).to({x:74.3},12).wait(1));

	// Calque 3
	this.instance_1 = new lib.pupille();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-55.2,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:15},10).wait(1).to({y:-3.5},0).to({x:-75.2},12).to({x:-55.2},1).to({x:-36.7},12).wait(1));

	// Calque 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#633575").s().p("AggAhQgOgNAAgUQAAgSAOgOQAOgOASAAQATAAAOAOQAOAOAAASQAAAUgOANQgOAOgTAAQgSAAgOgOg");
	this.shape_1.setTransform(8.7,41.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#633575").s().p("AggAhQgOgNAAgUQAAgSAOgOQAOgOASAAQAUAAANAOQAOAOAAASQAAAUgOANQgNAOgUAAQgSAAgOgOg");
	this.shape_2.setTransform(-8.6,41.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjWDXQhZhZAAh+QAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZg");
	this.shape_3.setTransform(-55.2,-3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#935BA2").s().p("AkvEwQh/h+ABiyQgBixB/h+QB+h/CxABQCzgBB9B/QB/B+gBCxQABCyh/B+Qh9B/izgBQixABh+h/g");
	this.shape_4.setTransform(-55.2,-3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjWDXQhZhZAAh+QAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZg");
	this.shape_5.setTransform(55.3,-3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#935BA2").s().p("AkvEwQh/h+ABiyQgBixB/h+QB+h/CxABQCygBB+B/QB/B+gBCxQABCyh/B+Qh+B/iygBQixABh+h/g");
	this.shape_6.setTransform(55.3,-3.2);

	this.instance_2 = new lib.Path_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-55.1,2.3,1,1,0,0,0,43.1,43.1);
	this.instance_2.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},24).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.2,-46.2,196.6,231.8);


// stage content:
(lib.hero_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.eyes = new lib.eyes_hp();
	this.eyes.parent = this;
	this.eyes.setTransform(160,234);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(221.8,421.8,196.6,231.8);
// library properties:
lib.properties = {
	width: 320,
	height: 468,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;