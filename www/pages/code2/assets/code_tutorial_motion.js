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


(lib.dots_hand_hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7).p("EAHqgjHIAAg9IAAgFIAAgcQAAg8grgrQgqgrg8AAQg8AAgqArQgSASgKAUQgBADgCACQgLAagBAdIAAg1IAAgFIAAggQAAg8grgqQgqgrg8AAQg7AAgrArQgpApgBA5IAAogIAAgFIAAgIQAAg8grgqQgqgrg8AAQg8AAgrArQgqAqAAA8IAAJhIAAAFIAAACQhFhIhCglQgFgDgFgDQgXgMgXgIQhhggg1A8Qg8BFAkBUQATAqAfAcQB7CBBrEcQAiBcAgBrQARA3ARA+QAWBPAxBDQAwBCBEAsMAAABFHIMgAAMAAAhFpQBFg7AihaQAghUAAhpIAApNQAAg9glgpQgmgrg7AAQg7AAgmArQgRATgJAWQAAACgBACQgJAYgBAbIAAAGEADIgkqIAAAFEgBZgmEIAAgEEgF7glNIAACV");
	this.shape.setTransform(4.6,218.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC01").s().p("EgCxAxHMAAAhFHQhEgsgwhCQgxhDgWhPQgRg9gRg4QgghrgihcQhrkch7iAQgfgdgTgqQgkhUA8hFQA1g8BhAhQAXAHAXAMIAKAGQBCAlBFBJIAACUIAAiUIAAgDIAAgFIAAphQAAg7AqgrQArgrA8AAQA8AAAqArQArArAAA7IAAAIIAAAGIAAIfQABg4ApgqQArgrA7AAQA8AAAqArQArAqAAA9IAAAfIAAAFIAAA2QABgeALgZIADgGQAKgUASgRQAqgrA8gBQA8ABAqArQArAqAAA8IAAAcIAAAGIAAA9IAAAFIAAgFQABgcAJgYIABgDQAJgXARgTQAmgqA7gBQA7ABAmAqQAlAqAAA8IAAJNQAABqggBUQgiBZhFA7MAAABFpgEADIgklIAAgEgEgBZgmDIAAgFg");
	this.shape_1.setTransform(4.6,218.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#485DA7").s().p("AH9FWIgHgGIAAgFIAHAGIAEAFIgBADIgDgDgAmDDoQgXgfgigYQgegUgcgDIgKgGQAgAAAkAYQAiAYAXAfIAUAcIAAAFgADUDwIAPgCIgDAFIgMACgAhNlTIAAgFQAHARAAAUIAAADQgBgTgGgQg");
	this.shape_2.setTransform(3.4,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dots_hand_hit, new cjs.Rectangle(-74.7,-99.2,167.6,635.6), null);


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


(lib.bricks_tuto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCF00").s().p("AiACBIAAkBIEBAAIAAEBg");
	this.shape.setTransform(-5,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6BA00").s().p("AhOCzIhkhlIEAAAIAAkAIBlBkIAAEBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bricks_tuto, new cjs.Rectangle(-17.9,-17.9,35.9,35.9), null);


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


(lib.codeintromotion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 21 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_323 = new cjs.Graphics().p("AhOCzIhlhkIAAkCIECAAIBkBlIAAEBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(323).to({graphics:mask_graphics_323,x:264.4,y:-93.1}).wait(23).to({graphics:null,x:0,y:0}).wait(64));

	// Calque 20
	this.instance = new lib.bricks_tuto();
	this.instance.parent = this;
	this.instance.setTransform(224.4,-53.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(294).to({x:264.4},11,cjs.Ease.get(0.43)).wait(6).to({y:-93.1},12,cjs.Ease.get(0.69)).wait(4).to({x:299.4,y:-58.1},18).to({_off:true},1).wait(31).to({_off:false,x:224.4,y:-103.1,alpha:0.102},0).to({y:-53.1,alpha:1},14).to({y:-63.1},5).to({y:-53.1},4).to({y:-63.1},2).to({y:-53.1},3).to({_off:true},3).wait(2));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape.setTransform(269,-48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape_1.setTransform(229,-48.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6BA00").s().p("AiyDbIgogoIGNAAIAAmNIAoAoIAAGNgAiTBrIAAj+ID+AAIAAAoIjWAAIAADWg");
	this.shape_2.setTransform(270.9,-87);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCF00").s().p("AjGDHIAAmNIGNAAIAAGNgAh/B/IAoAAIDWAAIAAjWIAAgoIj+AAg");
	this.shape_3.setTransform(268.9,-89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},408).wait(2));

	// dots_hand_hit
	this.instance_1 = new lib.dots_hand_hit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(89.3,58.7,0.375,0.375,-6.3,0,0,-14.3,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-14.5,regY:-75.6,rotation:-21.3,x:-14.7,y:-126.9},19).wait(15).to({regX:-14.3,regY:-75.8,scaleX:0.34,scaleY:0.34,y:-127},0).to({x:36.6,y:-103.3},25).wait(11).to({regY:-75.7,scaleX:0.37,scaleY:0.37,y:-103.2},0).wait(6).to({regX:-14.2,rotation:-6.3,x:103.1,y:-17.7},16).wait(17).to({rotation:-6.3},0).to({x:-20.4,y:-55.7},37).wait(12).to({scaleX:0.33,scaleY:0.33,y:-55.8},0).to({x:32.8,y:-81.4},36).wait(11).to({regX:-14.1,regY:-75.8,scaleX:0.37,scaleY:0.37},0).wait(7).to({x:70.8,y:-5.4},23).wait(15).to({regY:-75.7,rotation:23.7,x:137.3},26).wait(6).to({regX:-14,regY:-75.6,scaleX:0.33,scaleY:0.33},0).wait(7).to({regX:-13.8,scaleX:0.36,scaleY:0.36},0).wait(60).to({y:59.6},24).to({_off:true},35).wait(2));

	// player
	this.instance_2 = new lib.player();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122,199.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},408).wait(2));

	// objective
	this.instance_3 = new lib.objective();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-198.5,199.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},408).wait(2));

	// brick_50
	this.instance_4 = new lib.brick_50();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-281,199.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},408).wait(2));

	// play_button
	this.instance_5 = new lib.play_button();
	this.instance_5.parent = this;
	this.instance_5.setTransform(148.5,-11.9,0.4,0.4,0,0,0,-0.8,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},408).wait(2));

	// delete_zone
	this.instance_6 = new lib.delete_zone();
	this.instance_6.parent = this;
	this.instance_6.setTransform(222.4,132.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},408).wait(2));

	// right_draggable
	this.instance_7 = new lib.right_draggable();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-31,-144.3,0.375,0.375,0,0,0,0.2,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).to({x:20.3,y:-120.5},25).to({_off:true},349).wait(2));

	// left_draggable
	this.instance_8 = new lib.left_draggable();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-216.7,-211.8,0.375,0.375,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},408).wait(2));

	// top_draggable
	this.instance_9 = new lib.top_draggable();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-216.7,-170.8,0.375,0.375,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(158).to({x:-31.9,y:-71.4},0).to({x:21.3,y:-97.1},36).to({_off:true},214).wait(2));

	// bottom_draggable
	this.instance_10 = new lib.bottom_draggable();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-216.7,-134.8,0.375,0.375,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},408).wait(2));

	// loop_dragger
	this.instance_11 = new lib.loop_dragger();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-31.1,1.2,0.375,0.375,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},408).wait(2));

	// bottom_dragger
	this.instance_12 = new lib.bottom_dragger();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-31.1,-33.9,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},408).wait(2));

	// top_dragger
	this.instance_13 = new lib.top_dragger();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-31.1,-71,0.375,0.375,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},408).wait(2));

	// left_dragger
	this.instance_14 = new lib.left_dragger();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-31.1,-110.6,0.375,0.375,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},408).wait(2));

	// right_dragger
	this.instance_15 = new lib.right_dragger();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-31.1,-146.9,0.375,0.375,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},408).wait(2));

	// loop_draggable
	this.instance_16 = new lib.loop_draggable();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-216.7,-88.1,0.4,0.4,0,0,0.6,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},408).wait(2));

	// compiler
	this.instance_17 = new lib.compiler();
	this.instance_17.parent = this;
	this.instance_17.setTransform(18.4,-146.5,0.4,0.4,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},408).wait(2));

	// Calque 19
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvoPpIAA/RIfRAAIAAfRg");
	this.shape_4.setTransform(41.2,-61.2,1.059,1.079);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#042367").s().p("AvpPpIAA/RIfTAAIAAfRg");
	this.shape_5.setTransform(247.4,-59.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},408).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280,-217.7,627.6,506.9);


// stage content:
(lib.code_tutorial_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{choice_0:408});

	// timeline functions:
	this.frame_407 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_409 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(407).call(this.frame_407).wait(2).call(this.frame_409).wait(1));

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,0,3).p("A/ZAAMA+zAAA");
	this.shape.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(410));

	// Calque 2
	this.instance = new lib.codeintromotion();
	this.instance.parent = this;
	this.instance.setTransform(53.4,160.5,1,1,0,0,0,-0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},409).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,42.8,629.5,506.9);
// library properties:
lib.properties = {
	width: 400,
	height: 200,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
