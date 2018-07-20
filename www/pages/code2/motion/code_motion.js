(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {};
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {
	for(var i = 0; i < cacheList.length; i++) {
		if(cacheList[i].cacheCanvas)
			cacheList[i].updateCache();
	}
};

lib.addElementsToCache = function (textInst, cacheList) {
	var cur = textInst;
	while(cur != null && cur != exportRoot) {
		if(cacheList.indexOf(cur) != -1)
			break;
		cur = cur.parent;
	}
	if(cur != exportRoot) {
		var cur2 = textInst;
		var index = cacheList.indexOf(cur);
		while(cur2 != null && cur2 != cur) {
			cacheList.splice(index, 0, cur2);
			cur2 = cur2.parent;
			index++;
		}
	}
	else {
		cur = textInst;
		while(cur != null && cur != exportRoot) {
			cacheList.push(cur);
			cur = cur.parent;
		}
	}
};

lib.gfontAvailable = function(family, totalGoogleCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

	loadedGoogleCount++;
	if(loadedGoogleCount == totalGoogleCount) {
		lib.updateListCache(gFontsUpdateCacheList);
	}
};

lib.tfontAvailable = function(family, totalTypekitCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

	loadedTypekitCount++;
	if(loadedTypekitCount == totalTypekitCount) {
		lib.updateListCache(tFontsUpdateCacheList);
	}
};
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


(lib.okaokadotwhitecode = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQARQgIgHABgKQgBgJAIgHQAGgIAKABQAKgBAHAIQAIAHgBAJQABAKgIAHQgHAIgKgBQgKABgGgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.okaokadotwhitecode, new cjs.Rectangle(-2.4,-2.4,4.9,4.9), null);


(lib.oka_to_code = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 5
	this.instance = new lib.okaokadotwhitecode();
	this.instance.parent = this;
	this.instance.setTransform(18.4,-28.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({x:-4.4,y:-20.5},5).wait(10).to({_off:true},25).wait(3));

	// Calque 4
	this.instance_1 = new lib.okaokadotwhitecode();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.4,-20.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({x:3.2},5).wait(10).to({_off:true},25).wait(3));

	// Calque 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AhwAAIDhAA");
	this.shape.setTransform(-0.6,-24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1).p("AhZAgQAZgQAZgQQBAgPBBgQ");
	this.shape_1.setTransform(-5.9,-23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1).p("Ag8BBQgGgggFghQBIgfBKgh");
	this.shape_2.setTransform(-11.9,-22.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1).p("AgDBhQgkgwgkgwQBRgwBSgx");
	this.shape_3.setTransform(-20.6,-21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AAyCCQhChBhDhAQBahABahC");
	this.shape_4.setTransform(-29.1,-20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABjihIjFCiIDCCh");
	this.shape_5.setTransform(-36.7,-20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABgCiIjCihIDFii");
	this.shape_6.setTransform(-36,-20.1);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},28).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{x:-36.7}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{x:-32.9}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{x:-36.7}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{x:-32.9}}]},1).to({state:[]},25).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(34).to({_off:false},0).wait(1).to({x:-35.2},0).wait(1).to({x:-34.4},0).wait(1).to({x:-33.7},0).to({_off:true},1).wait(1).to({_off:false,x:-34.2},0).wait(1).to({x:-35.5},0).to({_off:true},1).wait(1).to({_off:false,x:-34.8},0).to({_off:true},1).wait(28));

	// Calque 11
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("Ag9BbIB7i1");
	this.shape_7.setTransform(-5.7,-11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AhFBZQBFhZBGhY");
	this.shape_8.setTransform(3.7,-11.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AhMBXQBMhXBNhW");
	this.shape_9.setTransform(13.1,-11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("AhTBVQBThVBUhU");
	this.shape_10.setTransform(22.4,-11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("AhbBTQBbhTBchS");
	this.shape_11.setTransform(31.8,-11.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1).p("AhiBRIDFih");
	this.shape_12.setTransform(41.2,-12);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},28).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},25).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(33).to({_off:false},0).wait(1).to({x:39.5},0).wait(1).to({x:37.8},0).wait(1).to({x:36},0).wait(1).to({x:34.3},0).wait(1).to({x:32.6},0).wait(1).to({x:35.5},0).wait(1).to({x:38.3},0).wait(1).to({x:41.2},0).wait(1).to({x:36.9},0).wait(1).to({x:32.6},0).to({_off:true},25).wait(3));

	// Calque 10
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1).p("AgxhaIBjC1");
	this.shape_13.setTransform(5.6,-11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1).p("Ag7hYQA7BYA8BZ");
	this.shape_14.setTransform(12.7,-14.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(5,1).p("AhEhWQBEBWBFBX");
	this.shape_15.setTransform(19.9,-17.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(5,1).p("AhOhUQBOBUBPBV");
	this.shape_16.setTransform(27,-21.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1).p("AhXhSQBXBSBYBT");
	this.shape_17.setTransform(34.2,-24.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1).p("ABiBRIjCih");
	this.shape_18.setTransform(41.3,-28.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1).p("AhhhQIDDCh");
	this.shape_19.setTransform(39.6,-28.2);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1).p("ABiBRIjDih");
	this.shape_20.setTransform(32.8,-28.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1).p("AhghQIDCCh");
	this.shape_21.setTransform(37.1,-28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},28).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},25).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(34).to({_off:false},0).wait(1).to({x:37.9},0).wait(1).to({x:36.2},0).wait(1).to({x:34.5},0).to({_off:true},1).wait(1).to({_off:false,x:35.6},0).wait(1).to({x:38.5},0).to({_off:true},1).wait(30));

	// Calque 8
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1).p("AA1CIIhpAAQgYAAgSgSQgSgRAAgZIAAiXQAAgYASgSQASgSAYAAIBpAAQAZAAARASQASASAAAYIAACXQAAAZgSARQgRASgZAAg");
	this.shape_22.setTransform(-0.6,-47.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1).p("AhwhLQAAgYASgSQASgSAYAAIBpAAQAZAAARASQASASAAAYIAACXQAAAZgSARQgRASgZAAIhpAAQgYAAgSgSQgSgRAAgZg");
	this.shape_23.setTransform(-0.6,-42.2);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22,p:{y:-47.7}}]},28).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22,p:{y:-20.2}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22,p:{y:-20.2}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22,p:{y:-20.2}}]},1).to({state:[]},25).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(29).to({_off:false},0).wait(1).to({y:-36.7},0).wait(1).to({y:-31.2},0).wait(1).to({y:-25.7},0).to({_off:true},1).wait(1).to({_off:false,y:-20.2},0).wait(3).to({_off:true},1).wait(1).to({_off:false},0).wait(3).to({_off:true},1).wait(28));

	// Calque 9
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AijE9QgMgHAAgOQAAgGADgGIBoigQACgDgBgEQAAgHgEgFQgFgFgHAAIhEAAQgKAAgHgHQgHgHAAgKQAAgKAHgHQAHgHAKAAIDdAAQALAAAGAHQAIAHgBAKQABAKgIAHQgGAHgLAAIhIAAIBeC1QACAGAAAGQABAOgMAHQgJAFgKgCQgJgDgGgJIhNiYIhmCbQgFAIgKAEIgGABQgGAAgGgEgACGCEQgHgHAAgKQAAgKAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAKQAAAKgHAHQgIAHgKAAQgKAAgHgHgACGA0QgHgIAAgKQAAgKAHgHQAHgHAKAAQAKAAAIAHQAHAHAAAKQAAAKgHAIQgIAHgKAAQgKAAgHgHgAhhgCQggAAgXgXQgXgXAAggIAAihQAAghAXgXQAXgXAgAAIBxAAQAhAAAXAXQAWAXAAAhIAAChQAAAggWAXQgXAXghAAgAh0kEQgLAKAAAPIAACVQAAAOALALQAKAKAOAAIBnAAQAOAAALgKQALgLAAgOIAAiVQAAgPgLgKQgLgLgOAAIhnAAQgOAAgKALg");
	this.shape_24.setTransform(3.3,-32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).to({_off:true},28).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-64.1,35.2,64.2);

// stage content:
(lib.code_motion = function(mode,startPosition,loop) {

	this.initialize(mode,startPosition,loop,{end:63});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_38 = function() {
		window['navigation'].intro_motion_stopped();
	}
	this.frame_63 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38).wait(25).call(this.frame_63).wait(5));

	// Calque 1
	this.instance = new lib.oka_to_code("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(439.7,286.9,3.173,3.173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(844.2,283.4,111.7,203.5);
// library properties:
lib.properties = {
	id: '308215EBA6484C26A1F9FD471CB734B6',
	width: 900,
	height: 400,
	fps: 40,
	color: "#FFCC00",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['308215EBA6484C26A1F9FD471CB734B6'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
