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


(lib.top_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIA2AAQAXAAAOAMQAOAMAAAVQAAAVgNALQgOAMgZAAIgdAAIAAA0gAgcAAIAeAAQAMgBAIgGQAGgGABgMQgBgMgGgGQgIgHgMgBIgeAAg");
	this.shape.setTransform(34.7,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBAQgNgIgIgQQgHgPAAgVIAAgGQAAgVAHgRQAIgPANgIQAOgJAQAAQASAAANAJQANAHAIAQQAHAQAAAUIAAAHQAAAWgHAPQgIAQgNAIQgNAJgSAAQgQAAgOgJgAgYgnQgJANgBAWIAAAHQABAYAJANQAJANAPAAQARAAAJgNQAIgNAAgYIAAgGQAAgYgIgMQgJgNgRAAQgPAAgJANg");
	this.shape_1.setTransform(21,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBHIAAh6IgsAAIAAgTIBvAAIAAATIgsAAIAAB6g");
	this.shape_2.setTransform(8.1,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.top_text, new cjs.Rectangle(0,0,42.9,27.5), null);


(lib.right_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBHIAAh6IgsAAIAAgTIBvAAIAAATIgsAAIAAB6g");
	this.shape.setTransform(53.9,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBHIAAg/Ig/AAIAAA/IgZAAIAAiNIAZAAIAAA7IA/AAIAAg7IAZAAIAACNg");
	this.shape_1.setTransform(40.8,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBBQgPgIgHgPQgIgQAAgTIAAgLQABggAPgSQAPgSAbAAQAXAAAOALQAPAMACAXIgYAAQgEgagZAAQgRAAgIALQgIAMgBAYIAAAJQAAAXAKANQAJANARAAQATAAAIgIIAAgcIgdAAIAAgSIA1AAIAAA2QgIAKgNAFQgOAFgRAAQgRAAgNgIg");
	this.shape_2.setTransform(26.8,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBHIAAiNIAXAAIAACNg");
	this.shape_3.setTransform(17.3,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBHIgcg2IgbAAIAAA2IgZAAIAAiNIAzAAQAXAAANALQAOALAAAVQAAAOgHAJQgHAKgMAEIAfA8IAAABgAgcgCIAaAAQALAAAHgHQAHgGAAgLQAAgLgHgHQgGgGgMgBIgaAAg");
	this.shape_4.setTransform(8.8,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.right_text, new cjs.Rectangle(0,0,62.2,27.5), null);


(lib.rect_sblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C52A8").s().p("AjEE3QgpAAgXgSIgJgKIgpgpQALAJAQAFQAQAFAVAAIGgAAQBbAAAAhbIAAmhQAAgVgEgQQgFgPgIgLIAoApIAIAHQATAXAAAqIAAGhQAABbhbAAg");
	this.shape.setTransform(3.9,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#465FC4").s().p("AjQEsQgUAAgRgFQgPgEgMgKIgHgHQgUgXAAgqIAAmhQAAhbBbAAIGhAAQAsAAAXAVIAGAHQAJALAEAPQAFAQAAAVIAAGhQAABbhbAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rect_sblue, new cjs.Rectangle(-30,-30,65,65), null);


(lib.rect_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C992E").s().p("AjEE5QgsAAgXgWIgDgDIgsgtQALAKAQAFQAQAEAVAAIGgAAQBbAAAAhbIAAmgQABgVgFgQQgFgSgLgMIApAqQAIAGAGAIIADAFQANAWAAAhIAAGiQAABbhbAAg");
	this.shape.setTransform(3.9,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#44AC34").s().p("AjQEsQgUAAgRgFQgQgEgLgKIgIgIQgTgXAAgpIAAmhQAAhbBbAAIGhAAQAtAAAWAWIAEADQAKAMAFARQAFAQAAAVIAAGhQAABbhbAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rect_green, new cjs.Rectangle(-30,-30,65,65), null);


(lib.player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{win:34,lose:41});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(7).call(this.frame_41).wait(23));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoC8Qg+gMgwgvQg+g/AAhXQAAhYA+g+QA/g/BXAAQBYAAA/A/QA+A+AABYQAABXg+A/Qg8A7hSADIgYAsgAgQA5QgHAHAAAKQAAAKAHAGQAGAHAKAAQALAAAHgHQAHgGAAgKQAAgKgHgHQgHgGgLAAQgKAAgGAGgAgRAbIAjAAIAGiYIguAAg");
	this.shape.setTransform(12.6,-32.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(41).to({_off:false},0).wait(23));

	// Calque 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCF00").s().p("AifCgIAAk/IE/AAIAAE/g");
	this.shape_1.setTransform(12.5,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6BA00").s().p("AhhDfIh8h+IE+AAIAAk+IB+B8IAAFAg");
	this.shape_2.setTransform(18.7,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#612B9B").s().p("AgfCfQgbgGgbgSIgEgCIgugxQgXgjgBgtIAAgHQAChAAsguQAugtBAgBIAHAAQAzABAnAdIAlAlIAFAHQAQAYAFAeQADANAAAPIAAAHQgCBAgtAtQgtAthAACIgOAAQgKAAgLgBg");
	this.shape_3.setTransform(12.5,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#502380").s().p("Ag6CkQgOgKgNgNIgBgBIgDgDIhhhlIADADQAbASAcAFQASAEASgDQA/gBAsguQAugsABg/IAAgJQAAgOgDgOQgFgdgQgZIgEgGIBSBTQANAJALAMQANANAKAOQAXAkABAtIAAAIQgBBAguAtQgtAug/ABIgPABQglAAgmgZg");
	this.shape_4.setTransform(22.2,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#44AC34").s().p("AifCgICbk/ICkE/g");
	this.shape_5.setTransform(12.5,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#328027").s().p("AhhDfIh8h+IE+AAIijk+IB8B8IClFAg");
	this.shape_6.setTransform(18.7,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#374A99").s().p("AA/CuIiDBbIh9h9ICEhbICCBbIgtiYIB+hhIB9B8Ih+BhIAtCZgAkShtIB+BhIgGAWgAgIhxIg1iXIB8B9IAJAcg");
	this.shape_7.setTransform(18.8,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#465FC4").s().p("AAABwIiDBaIAniCIAHgXIh/hgICggEIA0iWIA1CWIBSACIBOACIh/BgIAuCZg");
	this.shape_8.setTransform(12.6,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B31174").s().p("Ag0CjIgggdIgBgBIAAAAQg1gwgYgjIAVAQQARgJAYgTIAOgLQBEg0AagcQAUgUAHgZQADgMAAgPQAAgWgJgUQgGgMgJgLIB3B2IAAAAQAOAOAHAQQAJATAAAXQAAApgeAeQgbAchEA1IgOALQgYASgQAKIgkgcg");
	this.shape_9.setTransform(26.2,22.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E41694").s().p("AgaCCIgPgMIgggcIgBgBQhjhbAAgqQAAgqAdgeQAegdArAAQApAAAeAdIAAABIAAgBQAegdAqAAQAoAAAdAaIAJAKQAJAKAGAMQAJAUAAAXQAAAOgEANQgGAYgUAUQgbAbhFA2IgNAKQgZATgPAJIgVgQg");
	this.shape_10.setTransform(12.7,14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#44AC34").s().p("AinAAICninICoCnIioCog");
	this.shape_11.setTransform(13.4,12.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#328027").s().p("AiSAWICnioIB+B9IioCog");
	this.shape_12.setTransform(28,27);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC6817").s().p("AhFCfIh9h9IDKAAIA+jAIB9B9Ig+DAg");
	this.shape_13.setTransform(22.7,24.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF821D").s().p("AhlCcIg+jAICjh3ICkB3Ig/DAg");
	this.shape_14.setTransform(13.3,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B31174").s().p("AACDcIh8h9IB6AAIAAhdIACgDIBdAAIAAh5IB9B8IAAB5IhgAAIAABhgAh6BfIhhhgIBhAAIAABggAAAh6IAAhhIBfBhg");
	this.shape_15.setTransform(19.3,18.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E41694").s().p("Ag7CeIAAhhIhiAAIAAh5IBiAAIAAhgIB4AAIAABgIBgAAIAAB5IhcAAIgEAAIAAADIAABeg");
	this.shape_16.setTransform(13.1,12.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E41694").s().p("AhsirIDZCxIjZCmg");
	this.shape_17.setTransform(15.2,12.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B31174").s().p("AirAUIDaikIB9B8IjaCmg");
	this.shape_18.setTransform(21.4,28.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E41694").s().p("Ai3B7IAAh7IB7AAIAAh5IB5AAIAAB5IB7AAIAAADIAAB4g");
	this.shape_19.setTransform(12,12.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B31174").s().p("Ah4C5Ih9h9IFuAAIAAh3IADAAIB6B6IAAB6gAAAg9IAAh7IB5B7g");
	this.shape_20.setTransform(18.3,18.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#502380").s().p("Ag1CrIgWgVIiEiEQAtAoA9AAQAZAAAWgGQAlgLAcgeQAegcALglQAGgWAAgZQAAg9gogtICECEIAEADIAHAIQAvAvAABBQAABDgvAuQguAvhDAAQg6AAgrglg");
	this.shape_21.setTransform(20.1,20.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#612B9B").s().p("AhqB4IgLgMQgqgtAAg/QAAhBAugwQAwguBBAAQA9AAAtAnIAOAPQAoAtAAA8QAAAYgHAWQgLAmgdAdQgdAdgmALQgWAHgYAAQg9AAgtgog");
	this.shape_22.setTransform(10,10);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCF00").s().p("AAAABIgKgKIAVAUIgLgKg");
	this.shape_23.setTransform(13.6,36.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E6BB00").s().p("AiVByICUjjICXDjg");
	this.shape_24.setTransform(27.3,28.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE405").s().p("AiVgjIErAAIiXBHg");
	this.shape_25.setTransform(27.3,13.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCF00").s().p("AhJiVICTBIIiTDjg");
	this.shape_26.setTransform(19.7,25.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2C500").s().p("AhLhNICXhIIAAErgAABhJIABACIgBgDg");
	this.shape_27.setTransform(34.7,25.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape_28.setTransform(12.3,10.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F0EDD8").s().p("AhKBLIiWiVIErAAICWCVg");
	this.shape_29.setTransform(19.8,32.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F0F0F0").s().p("AhKBLIAAkrICVCWIAAErgAAAABIABACIgBgDg");
	this.shape_30.setTransform(34.8,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{x:12.5,y:12.5}}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_1,p:{x:25,y:25}}]},13).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},10).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},7).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},12).to({state:[]},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,44.5,44.5);


(lib.play_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,1,1).p("Ai4kuIFxE3IlxEmg");
	this.shape.setTransform(3.8,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF821E").s().p("AmSGTQioimAAjtQAAjrCoioQCmimDsAAQDsAACnCmQCoCoAADrQAADtioCmQinCnjsABQjsgBiming");
	this.shape_1.setTransform(-1,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0721A").s().p("AmSGUQioioAAjsQAAjrCoinQCminDsgBQDsABCnCnQCoCnAADrQAADsioCoQinCmjsAAQjsAAimimg");
	this.shape_2.setTransform(-1,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF821E").s().p("AmSGUQioioAAjsQAAjrCoinQCminDsgBQDsABCnCnQCoCnAADrQAADsioCoQinCmjsAAQjsAAimimg");
	this.shape_3.setTransform(-1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:-1.7}}]}).to({state:[{t:this.shape_3},{t:this.shape,p:{y:3.3}}]},1).wait(1));

	// Calque 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#042367").s().p("AnuHvQjNjNAAkiQAAkhDNjNQDNjNEhAAQEjAADNDNQDMDNAAEhQAAEijMDNQjNDNkjAAQkhAAjNjNg");
	this.shape_4.setTransform(-1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-68,140,140);


(lib.piece_sblue_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C52A8").s().p("AiIF8QAAgCgygwILEAAQBbAAAAhbIAAmhQAAgUgFgQQgDgKgEgIQgEgGgEgFIAsAqQAFAFAHALIACADQAMAVAAAhIAAGhQAABbhbAAgAohF8QghAAgVgMQgJgFgGgHIgDgDIgtgsQAGAFAHAEQAIAFAKACQAQAFAUAAIBtAAIAAgFQAAg+ArgsQANgNAOgJQAkgWAsAAQArAAAiAVQAPAJANAOIAMANIALAPIgBgBQgigVgrAAQgsAAgkAWQgOAJgNANQgrAsAAA+IAAAFgAi6kNIAAgBQgBgagGgWQgGgTgKgRIgKgOIgJgLIAvAwIADADIAJAKQASAWAIAbg");
	this.shape.setTransform(-21.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#465FC4").s().p("AiVF6IAAgFQAAgXgGgVQgGgSgKgQIgLgPIgMgNQgNgOgPgJQgigVgrAAQgsAAgjAWQgOAJgNANQgsAsAAA+IAAAFIhsAAQgVAAgQgFQgKgCgIgFQgHgEgGgFIgDgEQgLgLgFgSQgFgQAAgVIAAmhQAAhbBcAAIBsAAIAAgBQABhEArgsQAsgrA+AAQAqAAAiAUQANAIALAKIADADIAFAFIAJAKIAKAPQAKARAGATQAHAWAAAaIAAABIArAAIKZAAQAVAAAPAEQATAGAMAMIADADIABAAQAFAGADAGQAEAIADAKQAFAQAAAUIAAGhQAABbhbAAg");
	this.shape_1.setTransform(-25,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.piece_sblue_top, new cjs.Rectangle(-90,-38.1,135,80.6), null);


(lib.piece_sblue_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C52A8").s().p("AjsF8QAAgCgygwIOMAAQBbAAAAhbIAAmhQAAgUgFgQQgDgKgEgIQgEgGgEgFIAsAqQAFAFAHALIACADQAMAVAAAhIAAGhQAABbhbAAgAqFF8QghAAgVgMQgJgFgGgHIgDgDIgtgsQAGAFAHAEQAIAFAKACQAQAFAUAAIBtAAIAAgFQAAg+ArgsQANgNAOgJQAkgWAsAAQArAAAiAVQAPAJANAOIAMANIALAPIgBgBQgigVgrAAQgsAAgkAWQgOAJgNANQgrAsAAA+IAAAFgAkekNIAAgBQgBgagGgWQgGgTgKgRIgKgOIgJgLIAvAwIADADIAJAKQASAWAIAbg");
	this.shape.setTransform(-11.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#465FC4").s().p("Aj5F6IAAgFQAAgXgGgVQgGgSgKgQIgLgPIgMgNQgNgOgPgJQgigVgrAAQgsAAgjAWQgOAJgNANQgsAsAAA+IAAAFIhsAAQgVAAgQgFQgKgCgIgFQgHgEgGgFIgDgEQgLgLgFgSQgFgQAAgVIAAmhQAAhbBcAAIBsAAIAAgBQABhEArgsQAsgrA+AAQAqAAAiAUQANAIALAKIADADIAFAFIAJAKIAKAPQAKARAGATQAHAWAAAaIAAABIArAAINhAAQAUAAAQAEQATAGANAMIACADIABAAQAFAGADAGQAEAIAEAKQAEAQAAAUIAAGhQAABbhbAAg");
	this.shape_1.setTransform(-15,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.piece_sblue_right, new cjs.Rectangle(-90,-38.1,155,80.6), null);


(lib.piece_sblue_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C52A8").s().p("Ai6F8QAAgCgygwIMoAAQBbAAAAhbIAAmhQAAgUgFgQQgDgKgEgIQgEgGgEgFIAsAqQAFAFAHALIACADQAMAVAAAhIAAGhQAABbhbAAgApTF8QghAAgVgMQgJgFgGgHIgDgDIgtgsQAGAFAHAEQAIAFAKACQAQAFAUAAIBtAAIAAgFQAAg+ArgsQANgNAOgJQAkgWAsAAQArAAAiAVQAPAJANAOIAMANIALAPIgBgBQgigVgrAAQgsAAgkAWQgOAJgNANQgrAsAAA+IAAAFgAjskNIAAgBQgBgagGgWQgGgTgKgRIgKgOIgJgLIAvAwIADADIAJAKQASAWAIAbg");
	this.shape.setTransform(-16.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#465FC4").s().p("AjHF6IAAgFQAAgXgGgVQgGgSgKgQIgLgPIgMgNQgNgOgPgJQgigVgrAAQgsAAgjAWQgOAJgNANQgsAsAAA+IAAAFIhsAAQgVAAgQgFQgKgCgIgFQgHgEgGgFIgDgEQgLgLgFgSQgFgQAAgVIAAmhQAAhbBcAAIBsAAIAAgBQABhEArgsQAsgrA+AAQAqAAAiAUQANAIALAKIADADIAFAFIAJAKIAKAPQAKARAGATQAHAWAAAaIAAABIArAAIL9AAQAVAAAPAEQATAGAMAMIADADIABAAQAFAGADAGQAFAIADAKQAEAQAAAUIAAGhQAABbhbAAg");
	this.shape_1.setTransform(-20,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.piece_sblue_left, new cjs.Rectangle(-90,-38.1,145,80.6), null);


(lib.piece_sblue_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C52A8").s().p("AlQF8QAAgCgygwIRUAAQBbAAAAhbIAAmhQAAgUgFgQQgDgKgEgIQgEgGgEgFIAsAqQAFAFAHALIACADQAMAVAAAhIAAGhQAABbhbAAgArpF8QghAAgVgMQgJgFgGgHIgDgDIgtgsQAGAFAHAEQAIAFAKACQAQAFAUAAIBtAAIAAgFQAAg+ArgsQANgNAOgJQAkgWAsAAQArAAAiAVQAPAJANAOIAMANIALAPIgBgBQgigVgrAAQgsAAgkAWQgOAJgNANQgrAsAAA+IAAAFgAmCkNIAAgBQgBgagGgWQgGgTgKgRIgKgOIgJgLIAvAwIADADIAJAKQASAWAIAbg");
	this.shape.setTransform(-1.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#465FC4").s().p("AldF6IAAgFQAAgXgGgVQgGgSgKgQIgLgPIgMgNQgNgOgPgJQgigVgrAAQgsAAgjAWQgOAJgNANQgsAsAAA+IAAAFIhsAAQgVAAgQgFQgKgCgIgFQgHgEgGgFIgDgEQgLgLgFgSQgFgQAAgVIAAmhQAAhbBcAAIBsAAIAAgBQABhEArgsQAsgrA+AAQAqAAAiAUQANAIALAKIADADIAFAFIAJAKIAKAPQAKARAGATQAHAWAAAaIAAABIArAAIQpAAQAUAAAQAEQATAGANAMIACADIABAAQAEAGAEAGQAFAIADAKQAEAQAAAUIAAGhQAABbhbAAg");
	this.shape_1.setTransform(-5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.piece_sblue_bottom, new cjs.Rectangle(-90,-38.1,175,80.6), null);


(lib.piece_end_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.name = "bottom";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B992E").s().p("AmDCYIgygxIS4AAQBbgBAAhaIAAh2IgDgRQgDgRgKgMIApAqIAJAIQAOARACAdIAAB1QAABchbgBgAscCYQgsAAgXgVIgDgDIgtgsQAMAJAQAFQAQAFAVAAIBtAAIAAgGQAAg9ArgsQANgMAOgJQAkgXAsAAQA+ABArArQANAMAKAPQgjgVgrAAQgsABgkAUQgOAJgNANQgrAtAAA+IAAAEg");
	this.shape.setTransform(3.8,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#43AD34").s().p("AmPCMIAAgFQAAgrgWgjQgJgPgOgNQgrgrg+AAQgsAAgjAVQgOAJgNANQgsAsAAA+IAAAFIhsAAQgVAAgQgEQgRgFgLgKIgHgGQgUgXAAgrIAAi8Ia1AAQAmABAVAQIAIAIQAJAMAEAQIACARIAAB2QAABbhbAAg");
	this.shape_1.setTransform(0,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.piece_end_green, new cjs.Rectangle(-90,9.5,185,33.1), null);


(lib.piece_bottom_orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6751A").s().p("AmDE3IgygyIS4AAQBbAAAAhbIAAmhQAAgUgFgQQgEgQgJgLIAqAqIAFAFQAVAXAAArIAAGhQAABbhbAAgAscE3QgtAAgXgWIgCgCIgtgtQAMAKAQAEQAQAFAVAAIBtAAIAAgFQAAg+ArgsQAUgTAWgLQAegOAjAAQA+AAArAsQANANAKAPQgjgWgrAAQgjAAgeAOQgWALgUATQgrAsAAA+IAAAFg");
	this.shape.setTransform(3.8,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF821D").s().p("AmPEsIAAgFQAAgsgWgiQgJgPgOgOQgrgrg+AAQgjAAgeAOQgWAKgTATQgsAtAAA+IAAAFIhsAAQgVAAgQgFQgRgFgLgJIgIgHQgTgXAAgqIAAmhQAAhbBcAAIZQAAQAoAAAXASQAGAEAEAGQAJALAEAPQAFAQAAAVIAAGhQAABbhbAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.piece_bottom_orange, new cjs.Rectangle(-90,-30,185,65), null);


(lib.objective = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(0.1,1,1).p("AgYgZIABACIgCgBgAAZAYIABACIgCgBg");
	this.shape.setTransform(35.6,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6BA00").s().p("AihEHQgjAAgSgQIgGgFIgqgrQALAJARADQALACAMAAIFdAAQBLAAAAhLIAAldQAAgMgCgLQgDgRgJgLIArAqIAFAGQAQATAAAiIAAFdQAABLhLAAgAi0BuIAAkrICUAAIACACIAAgCICVAAIAAAyIhkAAIAAACIgCgCIiTAAIAAD5g");
	this.shape_1.setTransform(28.7,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCF00").s().p("AiuD6QgMAAgLgCQgSgDgLgKIgIgIQgPgTAAghIAAldQAAhLBLAAIFdAAQAkAAATARIAFAGQAKAMADARQACALAAAMIAAFdQAABLhLAAgAiQCTIAzAAID5AAIAAj5IAAgzIiWAAIAAACIgCgCIiUAAg");
	this.shape_2.setTransform(25,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#43AD34").s().p("AAAAAIAAAAIABABg");
	this.shape_3.setTransform(33.1,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0F0F0").s().p("AAAAAIAAAAIABABg");
	this.shape_4.setTransform(38.1,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0F0F0").s().p("AihEHQgjAAgSgQIgGgFIgqgrQALAJARADQALACAMAAIFdAAQBLAAAAhLIAAldQAAgMgCgLQgDgRgJgLIArAqIAFAGQAQATAAAiIAAFdQAABLhLAAg");
	this.shape_5.setTransform(28.7,28.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiuD6QgMAAgLgCQgSgDgLgKIgIgIQgPgTAAghIAAldQAAhLBLAAIFdAAQAkAAATARIAFAGQAKAMADARQACALAAAMIAAFdQAABLhLAAg");
	this.shape_6.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,55);


(lib.loop_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIA2AAQAXAAAOAMQAOAMAAAVQAAAVgNALQgOAMgZAAIgdAAIAAA0gAgcAAIAeAAQAMgBAIgGQAGgGABgMQgBgMgGgGQgIgHgMgBIgeAAg");
	this.shape.setTransform(47.2,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBAQgNgIgHgQQgIgPAAgVIAAgGQAAgVAIgRQAHgPANgIQAOgJAQAAQASAAANAJQANAHAHAQQAIAQAAAUIAAAHQAAAWgIAPQgGAQgOAIQgNAJgSAAQgQAAgOgJgAgYgnQgJANAAAWIAAAHQAAAYAJANQAJANAPAAQAQAAAKgNQAIgNAAgYIAAgGQAAgYgIgMQgKgNgQAAQgPAAgJANg");
	this.shape_1.setTransform(33.5,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeBAQgNgIgHgQQgIgPAAgVIAAgGQAAgVAIgRQAGgPAOgIQAOgJAQAAQARAAAOAJQANAHAHAQQAIAQAAAUIAAAHQAAAWgIAPQgGAQgOAIQgOAJgRAAQgQAAgOgJgAgYgnQgJANAAAWIAAAHQgBAYAKANQAJANAPAAQARAAAIgNQAJgNAAgYIAAgGQAAgYgJgMQgIgNgRAAQgPAAgJANg");
	this.shape_2.setTransform(19.7,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBHIAAiNIAZAAIAAB5IA/AAIAAAUg");
	this.shape_3.setTransform(7.9,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.loop_text, new cjs.Rectangle(0,0,55.4,27.5), null);


(lib.loop_asset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.name = "icon";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AAABZQguAAgigiQghgiAAguQAAgvAhgiQAighAuAAQAvAAAiAhQAhAiAAAvQAAACAAABAgJAjIAgAhQAUAUgTATIggAh");
	this.shape.setTransform(11.4,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.loop_asset, new cjs.Rectangle(-2.5,-2.5,27.9,33), null);


(lib.left_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBHIAAh6IgsAAIAAgTIBvAAIAAATIgsAAIAAB6g");
	this.shape.setTransform(41.1,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBHIAAiNIBZAAIAAATIhBAAIAAArIA5AAIAAATIg5AAIAAA8g");
	this.shape_1.setTransform(30.1,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBHIAAiNIBcAAIAAATIhDAAIAAAoIA6AAIAAATIg6AAIAAArIBEAAIAAAUg");
	this.shape_2.setTransform(18.9,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBHIAAiNIAZAAIAAB5IA/AAIAAAUg");
	this.shape_3.setTransform(7.9,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.left_text, new cjs.Rectangle(0,0,49.4,27.5), null);


(lib.Interpoler20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B31174").s().p("AnkLkIn0n0IW9AAIAAnfIAKAAIHqHpIAAHqgAgEj5IAAnqIHpHqg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41694").s().p("AreHqIAAnqIHqAAIAAnpIHpAAIAAHpIHqAAIAAAKIAAHgg");
	this.shape_1.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-74,197,148);


(lib.Interpoler19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B31174").s().p("AnkLkIn0n0IW9AAIAAnfIAKAAIHqHpIAAHqgAgEj5IAAnqIHpHqg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41694").s().p("AreHqIAAnqIHqAAIAAnpIHpAAIAAHpIHqAAIAAAKIAAHgg");
	this.shape_1.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-74,197,148);


(lib.Interpoler18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E41694").s().p("Am0qwINpLJItpKYg");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B31174").s().p("AquBSINpqXIH0H0ItpKXg");
	this.shape_1.setTransform(0,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-93.9,137.4,187.8);


(lib.Interpoler17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E41694").s().p("Am0qwINpLJItpKYg");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B31174").s().p("AquBSINpqXIH0H0ItpKXg");
	this.shape_1.setTransform(0,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-93.9,137.4,187.8);


(lib.Interpoler16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E41694").s().p("AjxJ2IAAmCImEAAIAAnlIGEAAIAAmEIHlAAIAAGEIGCAAIAAHlIl0AAIgOAAIAAAOIAAF0g");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B31174").s().p("AAINwInzn0IHmAAIAAl0IANgNIF0AAIAAnmIH0HzIAAHmImCAAIAAGCgAtvgFIGEAAIAAGBgAnrF8gAgFnrIAAmEIGBGEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-88,176,176);


(lib.Interpoler15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E41694").s().p("AjxJ2IAAmCImEAAIAAnlIGEAAIAAmEIHlAAIAAGEIGCAAIAAHlIl0AAIgOAAIAAAOIAAF0g");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B31174").s().p("AAINwInzn0IHmAAIAAl0IANgNIF0AAIAAnmIH0HzIAAHmImCAAIAAGCgAtvgFIGEAAIAAGBgAnrF8gAgFnrIAAmEIGBGEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-88,176,176);


(lib.Interpoler14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF821D").s().p("AmWJwIj4sDIKPncIKOHcIj6MDg");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6817").s().p("AkYJ8In0n0IMrAAID6sDIH0H0Ij6MDg");
	this.shape_1.setTransform(12.4,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-87.4,181,174.8);


(lib.Interpoler13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF821D").s().p("AmWJwIj4sDIKPncIKOHcIj6MDg");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6817").s().p("AkYJ8In0n0IMrAAID6sDIH0H0Ij6MDg");
	this.shape_1.setTransform(12.4,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-87.4,181,174.8);


(lib.Interpoler12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44AC34").s().p("AqfAAIKfqfIKgKfIqgKgg");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#328027").s().p("ApJBWIKfqfIH0H0IqfKfg");
	this.shape_1.setTransform(33.6,33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.2,-92.2,184.4,184.4);


(lib.Interpoler11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44AC34").s().p("AqfAAIKfqfIKgKfIqgKgg");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#328027").s().p("ApJBWIKfqfIH0H0IqfKfg");
	this.shape_1.setTransform(33.6,33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.2,-92.2,184.4,184.4);


(lib.Interpoler10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B31174").s().p("AjTKMQg8g0hGhAIgEgEQjQjChiiKQAsAkAoAcQBCgmBghKIA4gsQESjVBrhuQBQhOAahkQAOg0AAg4QAAhcgkhOQgYgygkgqIHcHaQA2A2AeBAQAkBOAABcQAACnh4B2QhsBukSDWIg4AsQhfBKhCAmQhAguhQhCg");
	this.shape.setTransform(29.4,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41694").s().p("AhrIKQgegWgegaQg8g0hGhAIgEgEQmKltAAioQAAioB2h4QB4h2CoAAQCoAAB2B2IADAEQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBABAAQB4h2CoAAQCeAAB0BqIAkAmQAkAqAYAyQAkBOAABcQAAA4gOA0QgaBjhQBOQhsBukSDWIg4AsQhgBKhBAmQgogcgsgkg");
	this.shape_1.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-83.6,189.2,167.2);


(lib.Interpoler9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B31174").s().p("AjTKMQg8g0hGhAIgEgEQjQjChiiKQAsAkAoAcQBCgmBghKIA4gsQESjVBrhuQBQhOAahkQAOg0AAg4QAAhcgkhOQgYgygkgqIHcHaQA2A2AeBAQAkBOAABcQAACnh4B2QhsBukSDWIg4AsQhfBKhCAmQhAguhQhCg");
	this.shape.setTransform(29.4,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41694").s().p("AhrIKQgegWgegaQg8g0hGhAIgEgEQmKltAAioQAAioB2h4QB4h2CoAAQCoAAB2B2IADAEQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBABAAQB4h2CoAAQCeAAB0BqIAkAmQAkAqAYAyQAkBOAABcQAAA4gOA0QgaBjhQBOQhsBukSDWIg4AsQhgBKhBAmQgogcgsgkg");
	this.shape_1.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-83.6,189.2,167.2);


(lib.Interpoler8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465FC4").s().p("AABG/IoPFqICcoIIAahcIn6mDIJ+gQIDVpaIDUJaIFIAIIE2AIIn6GDIC2Jkg");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#374A99").s().p("AD7K5IoPFqIn0n0IIQlqIINFqIi2pjIH6mEIH0HzIn6GEIC2JkgAxMm4IH6GEIgaBbgAgknIIjUpaIHzH0IAoBug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.1,-105.9,220.2,211.8);


(lib.Interpoler7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465FC4").s().p("AABG/IoPFqICcoIIAahcIn6mDIJ+gQIDVpaIDUJaIFIAIIE2AIIn6GDIC2Jkg");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#374A99").s().p("AD7K5IoPFqIn0n0IIQlqIINFqIi2pjIH6mEIH0HzIn6GEIC2JkgAxMm4IH6GEIgaBbgAgknIIjUpaIHzH0IAoBug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.1,-105.9,220.2,211.8);


(lib.Interpoler6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44AC34").s().p("Ap/KAIJsz/IKTT/g");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#328027").s().p("AmFN6In0n0IT/AAIqTz/IHzH0IKUT/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-89,178,178);


(lib.Interpoler5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44AC34").s().p("Ap/KAIJsz/IKTT/g");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#328027").s().p("AmFN6In0n0IT/AAIqTz/IHzH0IKUT/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-89,178,178);


(lib.Interpoler4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#502380").s().p("AjqKOQg6gmg0g0IgEgEIgMgOImEmSQAGAGAIAEQBsBKBuAUQBIAOBIgKQD+gGCzi2QC2izAGj+IAAgiQgCg6gKg2QgWh0hAhkIgQgYIFIFMQAyAiAwAwQA0A0AmA6QBeCSAEC1IAAAiQgGD+i2C0Qi0C2j+AGQgeAEgeAAQiXAAiWhmg");
	this.shape.setTransform(14.1,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#612B9B").s().p("Ah9J6QhugUhshKQgIgEgGgGIi8jCQhaiOgEiyIAAghQAGkAC0i2QC2i0EAgGIAhAAQDKAECcB2ICWCWIAQAYQBABkAWB0QAKA2ACA6IAAAhQgGD+i2C0Qi0C2j+AGQgdAEgeAAQgqAAgqgIg");
	this.shape_1.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-89.2,178,178.4);


(lib.Interpoler3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#502380").s().p("AjqKOQg6gmg0g0IgEgEIgMgOImEmSQAGAGAIAEQBsBKBuAUQBIAOBIgKQD+gGCzi2QC2izAGj+IAAgiQgCg6gKg2QgWh0hAhkIgQgYIFIFMQAyAiAwAwQA0A0AmA6QBeCSAEC1IAAAiQgGD+i2C0Qi0C2j+AGQgeAEgeAAQiXAAiWhmg");
	this.shape.setTransform(14.1,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#612B9B").s().p("Ah9J6QhugUhshKQgIgEgGgGIi8jCQhaiOgEiyIAAghQAGkAC0i2QC2i0EAgGIAhAAQDKAECcB2ICWCWIAQAYQBABkAWB0QAKA2ACA6IAAAhQgGD+i2C0Qi0C2j+AGQgdAEgeAAQgqAAgqgIg");
	this.shape_1.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-89.2,178,178.4);


(lib.Interpoler2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCF00").s().p("Ap/KAIAAz/IT/AAIAAT/g");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6BA00").s().p("AmFN6In0n0IT/AAIAAz/IH0H0IAAT/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-89,178,178);


(lib.Interpoler1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCF00").s().p("Ap/KAIAAz/IT/AAIAAT/g");
	this.shape.setTransform(-25,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6BA00").s().p("AmFN6In0n0IT/AAIAAz/IH0H0IAAT/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-89,178,178);


(lib.insideGreenDrag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.name = "dragger";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B992E").s().p("AsGE3IgygyIKOAAIAAAAIYSAAQBbAAAAhbIAAmhQAAgVgFgQQgEgPgIgLIAnAoIAHAHQAVAWAAAsIAAGhQAABbhbAAgA3CE3IgygyIGQAAIAAgFQAAg+AsgtQANgMAOgJQAjgWAsAAQA+AAArArQAOANAJAPQgigVgsAAQgsAAgkAWQgOAJgNAMQgrAtAAA+IAAAFg");
	this.shape.setTransform(152.5,48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#44AC34").s().p("AiRF3IAAgGIAAAGIqOAAIAAgFQAAgsgWgiQgJgPgOgOQgrgrg+AAQgsAAgjAWQgOAJgNAMQgsAtAAA+IAAAFImQAAIAAn8QAAhbBcAAIBsAAQAAg+AsgtQAsgrA+AAQA+AAArArQAOAOAJAOQAWAjAAAsMAloAAAQAqAAAXAUIAJAIQAIALAEAPQAFAQAAAVIAAGhQAABbhbAAg");
	this.shape_1.setTransform(150,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.insideGreenDrag, new cjs.Rectangle(0,0,305,80), null);


(lib.hitzone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(70,95,196,0.098)").s().p("AhpBqQgsgsAAg+QAAgMACgMQAHguAjgjQAsgsA9AAQA+AAArAsQAkAjAHAuQACAMAAAMQAAA+gtAsQgrAsg+AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hitzone, new cjs.Rectangle(-15,-15,30,30), null);


(lib.dropper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(70,95,196,0.098)").s().p("AhpBqQgsgsAAg+QAAgMACgMQAHguAjgjQAsgsA9AAQA+AAArAsQAkAjAHAuQACAMAAAMQAAA+gtAsQgrAsg+AAQg9AAgsgsg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6600").ss(5,1).p("AjIBLIAzAAQAAgNACgMQAHguAigiQAtgsA9AAQA9AAAsAsQAjAiAIAuQACAMAAANIAzAA");
	this.shape_1.setTransform(0,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.delete_zone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D868C").s().p("AiVFPIhHnpIG3AAIg8HpgAkDi4IAAhaICrAAIAAg8ICwAAIAAA8ICsAAIAABag");
	this.shape.setTransform(31.6,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA0036").s().p("AjXCYIB5h5IgqgqIB9h9IAqArIB5h6IBABAIlvFvg");
	this.shape_1.setTransform(5.7,25.6,1,1,0,0,0,-15.2,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA0036").s().p("AiVD1IhGnpIG3AAIg8Hpg");
	this.shape_2.setTransform(31.6,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.6,10.5,52,67);


(lib.confetti_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993399").s().p("AhyBYICAjWIBlD9g");
	this.shape.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.confetti_04, new cjs.Rectangle(-11.5,-12.5,23,25.4), null);


(lib.confetti_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AhEBNQgcggAAgtQAAgsAcggQAdggAnAAQAoAAAdAgQAcAgAAAsQAAAtgcAgQgdAggoAAQgnAAgdggg");
	this.shape.setTransform(0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.confetti_03, new cjs.Rectangle(-9.3,-11.3,19.5,21.8), null);


(lib.confetti_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC33").s().p("Ag6BaIgphVIApheIBtAAIAxBnIgxBMg");
	this.shape.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.confetti_02, new cjs.Rectangle(-9.6,-9,20.1,18), null);


(lib.confetti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("Ag2BaIAAizIBtAAIAACzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.confetti, new cjs.Rectangle(-5.5,-9,11,18), null);


(lib.button_plus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAAhSIAACl");
	this.shape.setTransform(-2.7,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AhSAAIClAA");
	this.shape_1.setTransform(-2.7,-2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#502380").s().p("AhaC6QgeAAgPgNIgEgEIgugvQAGAGAKAEIAGACIALACIAMAAIDVAAQA/AAAAg+IAAjWIAAgMQgDgVgLgMIAtAtIAGAGQANAQAAAcIAADWQAAA+g/AAg");
	this.shape_2.setTransform(0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#612B9B").s().p("AhqCqIgMAAIgMgDIgFgCQgKgDgGgGIgBAAQgRgQAAggIAAjWQAAg/A/AAIDVAAQAgAAAQAQIABACQALALADAWIAAAMIAADWQAAA+g/AAg");
	this.shape_3.setTransform(-2.5,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:-2.5,y:-2.5}},{t:this.shape_2},{t:this.shape_1,p:{x:-2.7,y:-2.8}},{t:this.shape,p:{x:-2.7,y:-2.8}}]}).to({state:[{t:this.shape_3,p:{x:2.5,y:2.5}},{t:this.shape_1,p:{x:2.3,y:2.2}},{t:this.shape,p:{x:2.3,y:2.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-19.5,39,39);


(lib.button_moins = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AhSAAIClAA");
	this.shape.setTransform(-2.7,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#502380").s().p("AhaC6QgeAAgPgNIgEgEIgugvQAGAGAKAEIAGACIALACIAMAAIDVAAQA/AAAAg+IAAjWIAAgMQgDgVgLgMIAtAtIAGAGQANAQAAAcIAADWQAAA+g/AAg");
	this.shape_1.setTransform(0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#612B9B").s().p("AhqCqIgMAAIgMgDIgFgCQgKgDgGgGIgBAAQgRgQAAggIAAjWQAAg/A/AAIDVAAQAgAAAQAQIABACQALALADAWIAAAMIAADWQAAA+g/AAg");
	this.shape_2.setTransform(-2.5,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:-2.5,y:-2.5}},{t:this.shape_1},{t:this.shape,p:{x:-2.7,y:-2.8}}]}).to({state:[{t:this.shape_2,p:{x:2.5,y:2.5}},{t:this.shape,p:{x:2.3,y:2.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-19.5,39,39);


(lib.brick_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#031A4D").s().p("AiaD9QgiAAgSgQIgFgFIgpgpQALAJARADQAKACAMAAIFPAAQBIAAAAhIIAAlPQAAgMgCgKQgDgRgJgLIApApIAFAFQAQATAAAhIAAFPQAABIhIAAg");
	this.shape.setTransform(28.6,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#042367").s().p("AinDwQgMAAgKgCQgRgDgKgJQgGgEgCgEQgPgSAAggIAAlPQAAhIBIAAIFPAAQAjAAASARIAFAGQAJAKADARQACAKAAAMIAAFPQAABIhIAAg");
	this.shape_1.setTransform(25.1,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_2.setTransform(25,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6BA00").s().p("AjgETIgygyIHzAAIAAnzIAyAyIAAHzgAi5CHIAAlAIFAAAIAAAyIkOAAIAAEOg");
	this.shape_3.setTransform(27.5,27.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCF00").s().p("Aj5D6IAAnzIHzAAIAAHzgAigCgIAyAAIEOAAIAAkOIAAgyIlAAAg");
	this.shape_4.setTransform(25,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.4)").ss(0.1,1,1).p("AhJCUQgOgKgNgNQgtgtgChAIAAgIQACg/AtgtQAtgtA/gCIAIAAQBAACAtAtQANANAKAO");
	this.shape_5.setTransform(23.7,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#502380").s().p("AjgETIgygyIHzAAIAAnzIAyAyIAAHzgAhbCHQgLgMgIgNQAkAXAtACgAiKBYQgtgugCg+IAAgJQACg/AtguQAugtA/gCIAJAAQA+ACAuAtQANANAJAPQgkgXgtgCIgJAAQg+ACguAtQgtAugCA+IAAAJQACAtAXAkQgPgJgNgNg");
	this.shape_6.setTransform(27.5,27.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#612B9B").s().p("Aj5D6IAAnzIHzAAIAAHzgAhxhxQgtAugCA/IAAAIQACA/AtAuQANANAPAJQAIANALAMIA+AAIAIAAQA/gCAugtQAtguACg/IAAgIQgCgtgXgkQgJgPgNgNQgugtg/gCIgIAAQg/ACguAtg");
	this.shape_7.setTransform(25,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#44AC34").s().p("Aj5D6IAAnzIHzAAIAAHzgAigCgIAyAAIEOAAIiKkLIgag1g");
	this.shape_8.setTransform(25,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#328027").s().p("AjgETIgygyIHzAAIAAnzIAyAyIAAHzgAi5CHICclAIAbA1IiFELg");
	this.shape_9.setTransform(27.5,27.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#465FC4").s().p("Aj5D6IAAnzIHzAAIAAHzgACFDGIgJgbIglh+IBnhOIAXgSIifgEIgUg4IghhfIg1CXIifAEIB/BgIguCZIBTg5IAwgiICEBbg");
	this.shape_10.setTransform(25,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#374A99").s().p("AjgETIgygyIHzAAIAAnzIAyAyIAAHzgAgXBSIA7AUIA/AsIAJAbgAhtAUIh/hgICfgEIA2iXIAgBfIgaBMIifAEIB+BgIgWBMIhTA5gABZg8Ig8gUICfAEIgXASg");
	this.shape_11.setTransform(27.5,27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E41694").s().p("Aj5D6IAAnzIHzAAIAAHzgAiOhiQgdAfgBApQAAApBjBcIAAAAIABABIAhAdIAkAcQAPgKAYgSIAOgLQBEg1AbgcQAfgeAAgpQgBgXgIgTQgIgQgOgOQgdgdgqAAQgqAAgeAdIgBABIgBgBQgcgdgqAAQgqAAgeAdg");
	this.shape_12.setTransform(25,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B31174").s().p("AjgETIgygyIHzAAIAAnzIAyAyIAAHzgAjFgzQABgpAdgfQAegdAqAAQAqAAAdAdIABABIABgBQAdgdAqAAQAqAAAdAdQAOAOAIAQQgUgJgXAAQgqAAgeAeIgBAAIAAAAQgdgegqAAQgqAAgeAeQgdAeAAAqQAAAcAwA2QhjhbAAgqg");
	this.shape_13.setTransform(27.5,27.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#44AC34").s().p("Aj5D6IAAnzIHzAAIAAHzgAiegBIAxAyIB1B2ICpioIh2h1Igzgzg");
	this.shape_14.setTransform(25,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#328027").s().p("AjgETIgygyIHzAAIAAnzIAyAyIAAHzgAi3gaICnioIAyAzIioCng");
	this.shape_15.setTransform(27.5,27.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF821D").s().p("Aj5D6IAAnzIHzAAIAAHzgAibgqIA/DAIAiAAICnAAIA7i1IAEgLIikh3g");
	this.shape_16.setTransform(25,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC6817").s().p("AjgETIgygyIHzAAIAAnzIAyAyIAAHzgAh1B9Ig/jAICkh3ICjB3IgEALIhthQIijB3IAuCOg");
	this.shape_17.setTransform(27.5,27.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E41694").s().p("Aj5D6IAAnzIHzAAIAAHzgAiXA+IAyAAIAvAAIAABhIAyAAIBHAAIAAhhIBgAAIAAhGIAAgyIhgAAIAAgvIAAgyIh5AAIAABhIhhAAg");
	this.shape_18.setTransform(25,25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B31174").s().p("AjgETIgygyIHzAAIAAnzIAyAyIAAHzgAhPCGIAAhhIAyAzIAAAugAiwAlIAAh4IBhAAIAAhhIB5AAIAAAyIhHAAIAABhIhhAAIAABGgABbghIgxgyIBgAAIAAAyg");
	this.shape_19.setTransform(27.5,27.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E41694").s().p("Aj5D6IAAnzIHzAAIAAHzgAhSCxIAzgmIChh8IAGgFIjaixg");
	this.shape_20.setTransform(25,25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B31174").s().p("AjgETIgygyIHzAAIAAnzIAyAyIAAHzgAhrjAIDaCyIgGAFIihiFIAAEAIgzAmg");
	this.shape_21.setTransform(27.5,27.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E41694").s().p("Aj5D6IAAnzIHzAAIAAHzgAi8B6IAzAAIE8AAIAAhJIAAgxIh6AAIAAhJIAAgxIh6AAIAAB6Ih7AAg");
	this.shape_22.setTransform(25,25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B31174").s().p("AjgETIgygyIHzAAIAAnzIAyAyIAAHzgAjVBhIAAh6IB7AAIAAh6IB6AAIAAAxIhIAAIAAB6Ih6AAIAABJgABRAYIgxgxIB6AAIAAAxg");
	this.shape_23.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,1.1,52.8,52.8);


(lib.bottom_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAwBHIAAgvIACg9IgqBsIgQAAIgqhsIACA9IAAAvIgYAAIAAiNIAgAAIAoBsIAphsIAgAAIAACNg");
	this.shape.setTransform(75.2,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBAQgNgIgHgQQgIgPAAgVIAAgGQAAgVAIgRQAGgPAOgIQAOgJAQAAQARAAAOAJQANAHAHAQQAIAQAAAUIAAAHQAAAWgIAPQgGAQgOAIQgOAJgRAAQgQAAgOgJgAgYgnQgJANAAAWIAAAHQAAAYAJANQAJANAPAAQARAAAIgNQAJgNAAgYIAAgGQAAgYgJgMQgIgNgRAAQgPAAgJANg");
	this.shape_1.setTransform(59.5,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBHIAAh6IgsAAIAAgTIBvAAIAAATIgsAAIAAB6g");
	this.shape_2.setTransform(46.6,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBHIAAh6IgsAAIAAgTIBvAAIAAATIgsAAIAAB6g");
	this.shape_3.setTransform(34.5,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBAQgNgIgHgQQgIgPAAgVIAAgGQAAgVAIgRQAGgPAOgIQAOgJAQAAQARAAAOAJQANAHAHAQQAIAQAAAUIAAAHQAAAWgIAPQgGAQgOAIQgOAJgRAAQgQAAgOgJgAgYgnQgJANAAAWIAAAHQgBAYAKANQAJANAPAAQARAAAIgNQAJgNAAgYIAAgGQAAgYgJgMQgIgNgRAAQgPAAgJANg");
	this.shape_4.setTransform(21.5,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBHIAAiNIAxAAQAXAAANAJQAMAKAAATQAAAKgFAIQgFAHgKAFQALACAGAJQAHAIAAAMQAAAVgNALQgNAKgYAAgAgZAzIAaAAQAMAAAHgFQAGgGAAgLQAAgVgXgBIgcAAgAgZgKIAYAAQALgBAGgFQAHgFAAgKQAAgKgGgEQgGgGgMAAIgYAAg");
	this.shape_5.setTransform(8.5,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottom_text, new cjs.Rectangle(0,0,86.1,27.5), null);


(lib.bboy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiqOEQhHhHAAhkIAA2yQAAhjBHhIQBHhGBjAAQBkABBHBFQBHBIAABkIAAWxQAABkhHBHQhHBHhkAAQhjAAhHhHg");
	this.shape.setTransform(63.7,316.8,1,1,0,0,0,-3,-70.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiqOEQhHhHAAhjIAA2yQAAhkBGhIQBIhFBjAAIABgBQBkAABGBHQBHBHAABkIgBWxQAABkhGBHQhGBGhkAAIgBABQhjAAhHhHg");
	this.shape_1.setTransform(275,388.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAPLQhjAAhHhHQhHhHAAhkIAA2xQAAhkBHhHQBHhHBjAAIAAAAQBkAABHBHQBHBHAABkIAAWxQAABkhHBHQhHBHhkAAg");
	this.shape_2.setTransform(217.4,429.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAPLQhjAAhHhHQhHhHAAhkIAA2xQAAhkBHhHQBHhHBjAAIAAAAQBkAABHBHQBHBHAABkIAAWxQAABkhHBHQhHBHhkAAg");
	this.shape_3.setTransform(127.3,429.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AqzLRIAAtJQAAj5CvivQCwiwD5AAIC3AAQD5AACvCwQCwCvAAD5IAANJg");
	this.shape_4.setTransform(172.4,344.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJUVQpUgSmfkVQmgkVAApTQAApSGlmlQGlmlJSAAQJTAAGlGlQGlGlAAJSQAAJTmqEoQmREWonAAIhEgCg");
	this.shape_5.setTransform(170.2,130.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bboy, new cjs.Rectangle(26.5,0,287.4,526.3), null);


(lib.bar_graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43AD34").s().p("AhjEsIAApXIDHAAIAAJXg");
	this.shape.setTransform(10,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B992E").s().p("AgYEsIAApXIAxAAIAAJXg");
	this.shape_1.setTransform(22.5,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bar_graph, new cjs.Rectangle(0,0,25,60), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AA1iJIBuBuQAcAbgcAcIhuBuACDAAIkzAB");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-20.2,-16.3,40.4,32.7), null);


(lib.top_dragger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(29.2,29.4,1,1,-90);

	this.instance_1 = new lib.rect_sblue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.top_dragger, new cjs.Rectangle(0,0,65,65), null);


(lib.top_draggable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(35.3,21.5,0.675,0.675,-90);

	this.instance_1 = new lib.top_text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.8,23.9,1,1,0,0,0,21.4,13.7);

	this.hitzone = new lib.hitzone();
	this.hitzone.parent = this;
	this.hitzone.setTransform(35,-0.1);

	this.dropzone = new lib.dropper();
	this.dropzone.parent = this;
	this.dropzone.setTransform(35,58.9);

	this.dragger = new lib.piece_sblue_top();
	this.dragger.parent = this;
	this.dragger.setTransform(90,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dragger},{t:this.dropzone},{t:this.hitzone},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.top_draggable, new cjs.Rectangle(0,-15.7,135,89.6), null);


(lib.right_dragger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(29.2,29.4);

	this.instance_1 = new lib.rect_sblue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.right_dragger, new cjs.Rectangle(0,0,65,65), null);


(lib.right_draggable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.hitzone.mouseEnabled = false;
		this.dropzone.mouseEnabled = false;
		this.name = "right";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(35.2,21.5,0.675,0.675);

	this.instance_1 = new lib.right_text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.5,24,1,1,0,0,0,31.1,13.7);

	this.hitzone = new lib.hitzone();
	this.hitzone.parent = this;
	this.hitzone.setTransform(35,0);

	this.dropzone = new lib.dropper();
	this.dropzone.parent = this;
	this.dropzone.setTransform(35,59);

	this.dragger = new lib.piece_sblue_right();
	this.dragger.parent = this;
	this.dragger.setTransform(90,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dragger},{t:this.dropzone},{t:this.hitzone},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.right_draggable, new cjs.Rectangle(0,-15.6,155,89.6), null);


(lib.loop_dragger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AAACAQhEAAgwgwQgxgxAAhEQAAhEAxgxQAwgwBEAAQBFAAAwAwQAwAxAABEQAAADAAACAgNAzIAvAvQAdAdgdAcIgvAw");
	this.shape.setTransform(30.1,32);

	this.instance = new lib.rect_green();
	this.instance.parent = this;
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.loop_dragger, new cjs.Rectangle(0,0,65,65), null);


(lib.loop_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.name = "bar";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque 1
	this.graph = new lib.bar_graph();
	this.graph.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.graph).wait(1));

}).prototype = getMCSymbolPrototype(lib.loop_bar, new cjs.Rectangle(0,0,25,60), null);


(lib.left_dragger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(29.2,29.4,1,1,180);

	this.instance_1 = new lib.rect_sblue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.left_dragger, new cjs.Rectangle(0,0,65,65), null);


(lib.left_draggable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(35.3,21.4,0.675,0.675,180);

	this.instance_1 = new lib.left_text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.1,24,1,1,0,0,0,24.7,13.7);

	this.hitzone = new lib.hitzone();
	this.hitzone.parent = this;
	this.hitzone.setTransform(35,0);

	this.dropzone = new lib.dropper();
	this.dropzone.parent = this;
	this.dropzone.setTransform(35,59.9);

	this.dragger = new lib.piece_sblue_left();
	this.dragger.parent = this;
	this.dragger.setTransform(90,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dragger},{t:this.dropzone},{t:this.hitzone},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.left_draggable, new cjs.Rectangle(0,-15.6,145,90.6), null);


(lib.confetti_motion_type = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 7
	this.instance = new lib.confetti_03();
	this.instance.parent = this;
	this.instance.setTransform(-1.1,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-1.1,-1,175.5,-203.8,233.7,-36.8,292,130.3,232,667.1]}},51).wait(1));

	// Calque 5
	this.instance_1 = new lib.confetti_02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.1,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[-1.1,-1,-44.4,-236.9,-71.8,-73.4,-99.2,90.1,-110.8,653.1]}},51).wait(1));

	// Calque 2
	this.instance_2 = new lib.confetti_04();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.1,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[-1.1,-1,-166.4,-153,-252.3,21.1,-338.2,195.1,-344.8,695.2]}},51).wait(1));

	// Calque 1
	this.instance_3 = new lib.confetti();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.1,regY:0.1,rotation:-45,guide:{path:[0.1,0.1,370.1,-203.8,482.4,618]}},51,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-13.6,23,25.4);


(lib.compiler = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.dropzone = new lib.dropper();
	this.dropzone.parent = this;
	this.dropzone.setTransform(35,60.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBHIgcg2IgbAAIAAA2IgYAAIAAiNIAxAAQAYAAANALQAOALAAAVQAAAOgHAKQgHAIgNAFIAhA8IAAABgAgcgCIAZAAQAMAAAHgHQAHgGAAgLQAAgMgHgGQgGgGgMgBIgaAAg");
	this.shape.setTransform(159,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBHIAAiNIBbAAIAAATIhCAAIAAAoIA5AAIAAATIg5AAIAAArIBDAAIAAAUg");
	this.shape_1.setTransform(147,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsBHIAAiNIAZAAIAAB5IA/AAIAAAUg");
	this.shape_2.setTransform(136,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBHIAAiNIAXAAIAACNg");
	this.shape_3.setTransform(127.3,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIA2AAQAXAAAOAMQAOAMAAAVQAAAVgNALQgOAMgZgBIgdAAIAAA1gAgcAAIAeAAQAMgBAHgGQAIgGAAgMQAAgMgIgGQgHgHgMgBIgeAAg");
	this.shape_4.setTransform(118.5,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAwBHIAAgvIACg9IgqBsIgQAAIgqhsIACA9IAAAvIgYAAIAAiNIAgAAIAoBsIAphsIAgAAIAACNg");
	this.shape_5.setTransform(103,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBAQgNgIgHgPQgIgQAAgUIAAgHQAAgWAIgPQAGgQAOgIQAOgJAQAAQARAAAOAJQANAHAHARQAIAPAAAVIAAAGQAAAVgIARQgGAPgOAIQgOAJgRAAQgQAAgOgJgAgYgnQgJAMAAAYIAAAGQAAAYAJANQAJANAPAAQARAAAIgNQAJgNAAgYIAAgGQAAgYgJgMQgIgNgRAAQgPAAgJANg");
	this.shape_6.setTransform(87.3,25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBBQgNgIgHgPQgHgPgBgTIAAgNQABgUAGgPQAIgPANgJQANgIARAAQAYAAAOAMQAOAOADAWIgZAAQgCgPgHgGQgIgHgNAAQgQAAgIALQgJAMAAAXIAAAMQABAXAHAMQAJAMAPAAQAOAAAHgHQAIgGACgPIAZAAQgDAWgPAOQgOAMgYAAQgQAAgNgIg");
	this.shape_7.setTransform(74,25.3);

	this.instance = new lib.piece_bottom_orange();
	this.instance.parent = this;
	this.instance.setTransform(90,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.dropzone}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.compiler, new cjs.Rectangle(0,0,185,75.5), null);


(lib.code_win_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnkLkIn0n0IAAnpIHqAAIAAnqIHqAAIHpHqIAAAKIAKAAIHqHpIAAHqg");
	mask.setTransform(-24.2,-35.1);

	// Calque 2
	this.instance = new lib.Interpoler19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24.2,-35.1);

	this.instance_1 = new lib.Interpoler20("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.1,14.3);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:26.1,y:14.3},19).to({_off:false,x:-24.2,y:-35.1},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:-24.2,y:-35.1},20).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B31174").s().p("AuDRMIjIjIIfPAAIAA/PIDIDIIAAfPgAtVGCIAAnpIHqAAIAAnqIHpAAIAADIIkhAAIAAHpInqAAIAAEigAFGBgIjIjHIHqAAIAADHg");
	this.shape.setTransform(12.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41694").s().p("AvnPoIAA/PIfPAAIAAfPgArxHmIDIAAIT1AAIAAkiIAAjHInqAAIAAkiIAAjIInpAAIAAHqInqAAg");
	this.shape_1.setTransform(2.8,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.7,-110,245.6,220);


(lib.code_win_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AquG3IAA1hINpLKIH0HzItpKYg");
	mask.setTransform(-23.7,-24.6);

	// Calque 2
	this.instance = new lib.Interpoler17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-23.7,-24.6);

	this.instance_1 = new lib.Interpoler18("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.7,24.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:25.7,y:24.8},19).to({_off:false,x:-23.7,y:-24.6},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:-23.7,y:-24.6},20).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E41694").s().p("AvnPoIAA/PIfPAAIAAfPgAlJLCIDIiYIKLnuIAWgSItprJg");
	this.shape.setTransform(-10,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B31174").s().p("AuDRMIjIjIIfPAAIAA/PIDIDIIAAfPgAmtsDINpLKIgWASIqLoUIAAQBIjICYg");
	this.shape_1.setTransform(0,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-118.5,220,237.2);


(lib.code_win_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAINwIt3t1IAAnmIGEAAIAAmEIHmAAIN1N3IAAHmImCAAIAAGCgAgFAIIANgNIgNAAg");
	mask.setTransform(-27.1,-28.1);

	// Calque 2
	this.instance = new lib.Interpoler15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27.1,-28.1);

	this.instance_1 = new lib.Interpoler16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.3,21.3);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:22.3,y:21.3},19).to({_off:false,x:-27.1,y:-28.1},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:-27.1,y:-28.1},20).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B31174").s().p("AuDRMIjIjIIfPAAIAA/PIDIDIIAAfPgAk/IYIAAmCIDIDIIAAC6gArDCWIAAnlIGEAAIAAmEIHlAAIAADIIkdAAIAAGEImEAAIAAEdgAFuiHIjIjIIGCAAIAADIg");
	this.shape.setTransform(5.2,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41694").s().p("AvnPoIAA/PIfPAAIAAfPgApfD6IDIAAIC8AAIAAGCIDIAAIEdAAIAAmCIGCAAIAAkdIAAjIImCAAIAAi8IAAjIInlAAIAAGEImEAAg");
	this.shape_1.setTransform(-4.8,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.1,-116.1,230.3,232.2);


(lib.code_win_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AicNqIn0n0Ij4sDIKQncIKNHcIH0HzIj6MEg");
	mask.setTransform(-24,-29.3);

	// Calque 2
	this.instance = new lib.Interpoler13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24,-29.3);

	this.instance_1 = new lib.Interpoler14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.5,20.1);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:23.5,y:20.1},19).to({_off:false,x:-24,y:-29.3},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:-24,y:-29.3},20).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6817").s().p("AuDRMIjIjIIfPAAIAA/PIDIDIIAAfPgAnZH0Ij4sDIKQncIKNHcIgOAsIm4lAIqPHcIC4I7g");
	this.shape.setTransform(4.5,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF821D").s().p("AvnPoIAA/PIfPAAIAAfPgAptirID4MDICIAAIKjAAIDsrXIAOgsIqOncg");
	this.shape_1.setTransform(-5.5,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.5,-116.7,229,233.5);


(lib.code_win_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuZj5IKgqgISTSTIqgKgg");
	mask.setTransform(-24.5,-26.4);

	// Calque 2
	this.instance = new lib.Interpoler11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-26.4);

	this.instance_1 = new lib.Interpoler12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.9,23);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:24.9,y:23},19).to({_off:false,x:-24.5,y:-26.4},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:-24.5,y:-26.4},20).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#328027").s().p("AuDRMIjIjIIfPAAIAA/PIDIDIIAAfPgArhhpIKgqgIDHDIIqfKfg");
	this.shape.setTransform(6.8,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#44AC34").s().p("AvnPoIAA/PIfPAAIAAfPgAp9gFIDIDHIHXHYIKgqfInYnYIjIjIg");
	this.shape_1.setTransform(-3.2,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.7,-118.6,233.6,237.4);


(lib.code_win_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABSLUQg8g0hFhAIgEgEQjQjChiiKQgegWgegaQg8g0hGhAIgEgEQmKltAAioQAAioB2h4QB4h2CoAAQCoAAB2B2IAEAEQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQB4h2CnAAQCeAAB0BqIIAIAQA2A2AeBAQAkBOAABbQAACoh4B2QhsBukSDWIg4AsQhgBKhCAmQhAguhQhCg");
	mask.setTransform(-24.8,-26.9);

	// Calque 2
	this.instance = new lib.Interpoler9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24.8,-26.9);

	this.instance_1 = new lib.Interpoler10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.6,22.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:24.6,y:22.5},19).to({_off:false,x:-24.8,y:-26.9},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:-24.8,y:-26.9},20).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B31174").s().p("AuDRMIjIjIIfPAAIAA/PIDIDIIAAfPgAsVjNQAAioB2h4QB4h2CoAAQCoAAB2B2IAEAEQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQB3h2CoAAQCoAAB2B2QA2A2AeBAQhOgkhcAAQioAAh4B2QgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgEgEQh1h2ioAAQioAAh4B2Qh2B4AACoQAAB1DCDYQmKltAAiog");
	this.shape.setTransform(9.4,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41694").s().p("AvnPoIAA/PIfPAAIAAfPgAo7mJQh2B4AACoQAACnGKFuIAEAEQBGBAA8A0QBQBCBAAuQBBgmBghKIA4gsQESjWBshuQB4h2AAinQAAhcgkhOQgehAg2g2Qh2h2ioAAQioAAh4B2QgBABAAAAQAAABgBAAQAAAAAAABQAAAAAAABIgEgEQh1h2ioAAQioAAh4B2g");
	this.shape_1.setTransform(-0.6,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.4,-110.5,238.8,221.2);


(lib.code_win_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AD7K5IoPFqIn0n0ICcoIIngnfIJ+gQIDWpaIHzH0IAoBuIE2AIIH0HzIn6GEIC2Jkg");
	mask.setTransform(-14.2,-16.3);

	// Calque 2
	this.instance = new lib.Interpoler7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-14.2,-16.3);

	this.instance_1 = new lib.Interpoler8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.2,32.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:36.2,y:32.2},19).to({_off:false,x:-14.2,y:-16.3},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:-14.2,y:-16.3},20).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#374A99").s().p("AuDRMIjIjIIfPAAIAA/PIDIDIIAAfPgAhfFKIDvBQID+CwIAgBqgAm5BQIn6mDIJ+gQIDWpaICFF8IhrEuIp+AQIH6GDIhaEyIlMDigAFkjzIjwhQIJ+AQIhcBIg");
	this.shape.setTransform(14.3,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#465FC4").s().p("AvnPoIAA/PIfPAAIAAfPgAISMYIgghqIiWn6IGek7IBchIIp+gQIhOjeIiGl8IjVJaIp+AQIH6GDIi2JkIFMjiIDDiIIIOFqg");
	this.shape_1.setTransform(4.3,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.3,-122.2,248.6,244.4);


(lib.code_win_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmFN6In0n0IJsz/IHzH0IKUT/g");
	mask.setTransform(-28,-28);

	// Calque 2
	this.instance = new lib.Interpoler5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-28,-28);

	this.instance_1 = new lib.Interpoler6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.4,22.3);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:21.4,y:22.3},19).to({_off:false,x:-28,y:-28},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:-28,y:-28},20).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44AC34").s().p("AvnPoIAA/PIfPAAIAAfPgAqBJ+IDIAAIQ3AAIomwtIhtjSg");
	this.shape.setTransform(-2.9,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#328027").s().p("AuDRMIjIjIIfPAAIAA/PIDIDIIAAfPgArlIaIJsz/IBuDSIoSQtg");
	this.shape_1.setTransform(7.1,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-117,234.2,234.2);


(lib.code_win_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhdMWQg6gmg0g0IgEgEIgMgOIpApUQhaiNgEiyIAAgiQAGkAC0i2QC2i0EAgGIAiAAQDKAECbB2IHeHiQAyAiAwAwQA0A0AmA6QBeCRAEC2IAAAiQgGD+i2C0Qi0C2j+AGQgeAEgeAAQiYAAiVhmg");
	mask.setTransform(-28,-28);

	// Calque 2
	this.instance = new lib.Interpoler3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-28,-27.9);

	this.instance_1 = new lib.Interpoler4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.4,21.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:21.4,y:21.5},19).to({_off:false,x:-28,y:-27.9},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:-28,y:-27.9},20).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.4)").ss(0.1,1,1).p("AkmJPQg6gmg0g0Qi0i0gGj+IAAgiQAGj/C0i2QC2i0D/gGIAiAAQD+AGC0C0QA0A0AmA6");
	this.shape.setTransform(-8,-7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#502380").s().p("AuDRMIjIjIIfPAAIAA/PIDIDIIAAfPgAlvIaQgsgugig0QCSBeC2AEgAorFeQi0i0gGj9IAAgiQAGkAC0i2QC2i0EAgGIAiAAQD9AGC0C0QA0A0AmA6QiQhci0gEIgiAAQj/AGi2C0Qi0C2gGD/IAAAiQAEC0BcCQQg6gmg0g0g");
	this.shape_1.setTransform(7.1,7.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#612B9B").s().p("AvnPoIAA/PIfPAAIAAfPgAnHnHQi0C2gGEAIAAAhQAGD+C0C0QA0A0A6AmQAiA0AsAuID6AAIAhAAQD+gGC0i2QC2i0AGj+IAAghQgEi2heiSQgmg6g0g0Qi0i0j+gGIghAAQkAAGi2C0g");
	this.shape_2.setTransform(-2.9,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-117.1,234.2,234.4);


(lib.code_win_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmFN6In0n0IAAz/IT/AAIH0H0IAAT/g");
	mask.setTransform(-28,-28);

	// Calque 2
	this.instance = new lib.Interpoler1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-28,-28);

	this.instance_1 = new lib.Interpoler2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.3,22.3);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:22.3,y:22.3},19).to({_off:false,x:-28,y:-28},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:-28,y:-28},20).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6BA00").s().p("AuDRMIjIjIIfPAAIAA/PIDIDIIAAfPgArlIaIAAz/IT/AAIAADIIw3AAIAAQ3g");
	this.shape.setTransform(7.1,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCF00").s().p("AvnPoIAA/PIfPAAIAAfPgAqBJ+IDIAAIQ3AAIAAw3IAAjIIz/AAg");
	this.shape_1.setTransform(-2.9,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-117,234.2,234.2);


(lib.bottom_dragger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(29.2,29.4,1,1,90);

	this.instance_1 = new lib.rect_sblue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottom_dragger, new cjs.Rectangle(0,0,65,65), null);


(lib.bottom_draggable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(35.2,21.4,0.675,0.675,90);

	this.instance_1 = new lib.bottom_text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.5,24,1,1,0,0,0,43.1,13.7);

	this.hitzone = new lib.hitzone();
	this.hitzone.parent = this;
	this.hitzone.setTransform(35,0);

	this.dropzone = new lib.dropper();
	this.dropzone.parent = this;
	this.dropzone.setTransform(35,59.6);

	this.dragger = new lib.piece_sblue_bottom();
	this.dragger.parent = this;
	this.dragger.setTransform(90,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dragger},{t:this.dropzone},{t:this.hitzone},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottom_draggable, new cjs.Rectangle(0,-15.6,175,90.2), null);


(lib.winning_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.instance = new lib.confetti_motion_type();
	this.instance.parent = this;
	this.instance.setTransform(-106.9,-309.1,0.91,0.813,0,-15,165,-0.1,-0.1);

	this.instance_1 = new lib.confetti_motion_type();
	this.instance_1.parent = this;
	this.instance_1.setTransform(221.7,-286.9,1.752,1.567,0,0,180);

	this.instance_2 = new lib.confetti_motion_type();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-20.6,-249.5,1.208,1.08,0,0,180);

	this.instance_3 = new lib.confetti_motion_type();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-219.3,-250,0.751,0.671);

	this.instance_4 = new lib.confetti_motion_type();
	this.instance_4.parent = this;
	this.instance_4.setTransform(22,-279.1,0.91,0.813,15,0,0,-0.1,-0.1);

	this.instance_5 = new lib.confetti_motion_type();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-306.6,-256.9,1.752,1.567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Calque 1
	this.instance_6 = new lib.confetti_motion_type();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-64.3,-219.5,1.208,1.08);

	this.instance_7 = new lib.confetti_motion_type();
	this.instance_7.parent = this;
	this.instance_7.setTransform(134.3,-220,0.751,0.671,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.winning_motion, new cjs.Rectangle(-328.8,-322.6,572.6,115.9), null);


(lib.loop_draggable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.bar = new lib.loop_bar();
	this.bar.parent = this;
	this.bar.setTransform(0,59.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#328026").s().p("AAWA5IgWgoIgVAoIgbAAIAig5Ighg4IAbAAIAUAnIAVgnIAbAAIghA4IAiA5g");
	this.shape.setTransform(186.9,36.7);

	this.count_loop = new cjs.Text("1", "bold 31px 'Roboto'", "#FFFFFF");
	this.count_loop.name = "count_loop";
	this.count_loop.textAlign = "center";
	this.count_loop.lineHeight = 38;
	this.count_loop.lineWidth = 45;
	this.count_loop.parent = this;
	this.count_loop.setTransform(221.9,14);

	this.more = new lib.button_plus();
	this.more.parent = this;
	this.more.setTransform(271.9,28.8);

	this.less = new lib.button_moins();
	this.less.parent = this;
	this.less.setTransform(152.4,28.8);

	this.bottom = new lib.piece_end_green();
	this.bottom.parent = this;
	this.bottom.setTransform(0,120,1,1,0,0,0,-90,9.5);

	this.instance = new lib.loop_text();
	this.instance.parent = this;
	this.instance.setTransform(93.1,23.9,1,1,0,0,0,27.7,13.7);

	this.instance_1 = new lib.loop_asset();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.8,26,1,1,0,0,0,11.4,14);

	this.dragger = new lib.insideGreenDrag();
	this.dragger.parent = this;
	this.dragger.setTransform(90,22.4,1,1,0,0,0,90,37.5);

	this.hitzone = new lib.hitzone();
	this.hitzone.parent = this;
	this.hitzone.setTransform(35,-0.1);

	this.dropzoneLoop = new lib.dropper();
	this.dropzoneLoop.parent = this;
	this.dropzoneLoop.setTransform(55,58.9);

	this.dropzone = new lib.dropper();
	this.dropzone.parent = this;
	this.dropzone.setTransform(35,146.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dropzone},{t:this.dropzoneLoop},{t:this.hitzone},{t:this.dragger},{t:this.instance_1},{t:this.instance},{t:this.bottom},{t:this.less},{t:this.more},{t:this.count_loop},{t:this.shape},{t:this.bar}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.loop_draggable, new cjs.Rectangle(0,-15.1,305,177), null);


(lib.winning_motions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Calque 2
	this.instance = new lib.code_win_1();
	this.instance.parent = this;
	this.instance.setTransform(-7.1,-7.1);

	this.instance_1 = new lib.code_win_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.1,-7.2);

	this.instance_2 = new lib.code_win_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.1,-7.1);

	this.instance_3 = new lib.code_win_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14.3,-12.2);

	this.instance_4 = new lib.code_win_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.4,-0.6);

	this.instance_5 = new lib.code_win_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6.8,-8.7);

	this.instance_6 = new lib.code_win_7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-4.5,-6.7);

	this.instance_7 = new lib.code_win_8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-5.1,-6.1);

	this.instance_8 = new lib.code_win_9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-8.6);

	this.instance_9 = new lib.code_win_10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-12.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	// Calque 3
	this.instance_10 = new lib.winning_motion();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6.2,161.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335,-161.3,572.6,271.3);


// stage content:
(lib.code_library = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.winning_motions();
	this.instance.parent = this;
	this.instance.setTransform(553.2,781.2);

	this.instance_1 = new lib.player();
	this.instance_1.parent = this;
	this.instance_1.setTransform(813.2,327.3);

	this.instance_2 = new lib.objective();
	this.instance_2.parent = this;
	this.instance_2.setTransform(736.6,327.3);

	this.instance_3 = new lib.brick_50();
	this.instance_3.parent = this;
	this.instance_3.setTransform(654.1,327.3);

	this.instance_4 = new lib.bboy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(967.1,-28.2);

	this.instance_5 = new lib.play_button();
	this.instance_5.parent = this;
	this.instance_5.setTransform(742.6,83.3,1,1,0,0,0,-1,-0.5);

	this.instance_6 = new lib.delete_zone();
	this.instance_6.parent = this;
	this.instance_6.setTransform(276.4,292.6);

	this.instance_7 = new lib.loop_draggable();
	this.instance_7.parent = this;
	this.instance_7.setTransform(369.6,121.1,1,1,0,0,0.6);

	this.instance_8 = new lib.loop_dragger();
	this.instance_8.parent = this;
	this.instance_8.setTransform(282,117.9);

	this.instance_9 = new lib.compiler();
	this.instance_9.parent = this;
	this.instance_9.setTransform(282,23.8);

	this.instance_10 = new lib.right_draggable();
	this.instance_10.parent = this;
	this.instance_10.setTransform(80,22.5);

	this.instance_11 = new lib.left_draggable();
	this.instance_11.parent = this;
	this.instance_11.setTransform(80,120);

	this.instance_12 = new lib.top_draggable();
	this.instance_12.parent = this;
	this.instance_12.setTransform(80,229.2);

	this.instance_13 = new lib.bottom_draggable();
	this.instance_13.parent = this;
	this.instance_13.setTransform(80,325.5);

	this.instance_14 = new lib.bottom_dragger();
	this.instance_14.parent = this;
	this.instance_14.setTransform(10.5,325.1);

	this.instance_15 = new lib.top_dragger();
	this.instance_15.parent = this;
	this.instance_15.setTransform(10.5,226.1);

	this.instance_16 = new lib.left_dragger();
	this.instance_16.parent = this;
	this.instance_16.setTransform(10.5,120.5);

	this.instance_17 = new lib.right_dragger();
	this.instance_17.parent = this;
	this.instance_17.setTransform(10.5,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(460.5,171.8,1270.5,919.4);
// library properties:
lib.properties = {
	width: 900,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;