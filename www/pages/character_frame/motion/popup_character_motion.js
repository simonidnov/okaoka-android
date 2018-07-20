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


(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlbCaIAAkzIHwAAIAACnQDFAOACB+g");
	this.shape.setTransform(9.9,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole1, new cjs.Rectangle(-24.9,-16.9,69.7,30.8), null);


(lib.shoes_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AmwDTQgUgqgBgrIgBAAIABgOQAAg5AEhAQAGhhALg5QAMhCA3AaQAcAOAZAaQBPBHCRgPQBIgIA5gVQAEgRARgPQAIgIAHgEQAZgSARAHQAIAEAEAHQABA0ASBGQAMAKANAGQASAGANAIIBTAfQBcAuAmA+QAWAlAJAkQAFARAAAKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shoes_2, new cjs.Rectangle(-45.5,-21.1,91,42.3), null);


(lib.sample_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaA5QgLgFgBgVQAAgUALgXQALgYAQgNQAPgNAMAGQALAFABAVQAAAUgLAXQgMAXgPANQgLAKgJAAQgDAAgEgCg");
	this.shape.setTransform(0.4,-18.1,0.366,0.366);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBCQgbgbAAgnQAAgmAbgbQAbgbAmAAQAmAAAcAbQAbAbAAAmQAAAngbAbQgcAbgmAAQglAAgcgbg");
	this.shape_1.setTransform(2.9,-24.7,0.366,0.366);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A0B0B").s().p("AjYDZQhahaAAh/QAAh+BahaQBahaB+AAQB/AABaBaQBaBaAAB+QAAB/haBaQhaBah/AAQh+AAhahag");
	this.shape_2.setTransform(0,-20.2,0.256,0.256);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399FF").s().p("AhoBoQgqgrAAg9QAAg8AqgrQAsgsA8AAQA9AAArAsQArArAAA8QAAA9grArQgrAsg9AAQg8AAgsgsg");
	this.shape_3.setTransform(0,-20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmFGGQihihAAjlQAAjkChihQCiiiDjABQDkgBCiCiQCiChgBDkQABDliiChQiiChjkAAQjjAAiiihg");
	this.shape_4.setTransform(0,-20.2,0.366,0.366);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sample_eye, new cjs.Rectangle(-20.2,-40.4,40.5,40.5), null);


(lib.sample_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD000").s().p("AkpE0IAAmeQABhkAxgyQAygyBlAAIDBAAQBlAAAyAyQAxAyABBkIAAGeg");
	this.shape.setTransform(0,-30.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sample_body, new cjs.Rectangle(-29.7,-61.5,59.5,61.5), null);


(lib.sample_armRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D5524").s().p("AhdBQQgngnAAg2IAAhpIEJAAIAABpQAAA2gnAnQgnAng3AAQg2AAgngng");
	this.shape.setTransform(0,-11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD000").s().p("AiEFMIAAoSQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAISg");
	this.shape_1.setTransform(0,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sample_armRight, new cjs.Rectangle(-13.3,-90.2,26.6,90.2), null);


(lib.sample_armLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D5524").s().p("AhdBQQgngnAAg2IAAhpIEJAAIAABpQAAA2gnAnQgnAng3AAQg2AAgngng");
	this.shape.setTransform(0,-11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD000").s().p("AiEFMIAAoSQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAISg");
	this.shape_1.setTransform(0,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sample_armLeft, new cjs.Rectangle(-13.3,-90.2,26.6,90.2), null);


(lib.mouth_sample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCEFDA").s().p("AhIH6QAAASgDASIgYAAQjFgBjVhIQjJhFish3Qirh0hhiGQg6hPgYhKQAcgKAgAAQBOABA4A3QA3A4AABNIAAAKQAegKAiAAQBPAAA3A3QA4A4AABOQAAATgDASQAwglA/AAQBPABA3A3QAyAyAFBDQAOgcAXgXQA3g4BPAAQBOAAA4A4QA2A2ABBNQABhNA3g2QA2g4BPAAQBOAAA4A4QA3A3AABPIAAACQi0AijCAEQgDgSgBgSgAEyHVQAAhOA4g4QA3g3BPAAQBOAAA3A3QAOAPALAPQgHgZAAgcQAAhPA3g3QA4g4BOAAQBHAAA0AtQgjgwAAg+QAAhNA3g4QA3g3BPgBQBFABAzArIgMAZQhMCNiaB8IAAAAIAAAAIgdAXQi/CQkABSQhkAghqAUQgDgQAAgSgAAJhkQg2g3AAhPIAVAAQCuAACygqQAEAVAAAVQAABPg3A3Qg4A3hOABQhPgBg3g3gAl4h/Qg3g4AAhOQAAgNABgLQBTAUBeANQBwAQBXACQgIA9guAuQg3A3hPAAQhOAAg4g3gAGEi7QgogngLgzQBOgUBPgaQBdggBxgxICthOQBkgtBFgNQAWAoAAAyQAABOg4A4Qg3A3hPAAQhOAAg4g3QgUgVgMgWQADATAAATQAABOg3A4Qg4A4hOgBQhPABg3g4gAryjhQg4g4AAhOQAAgYAFgVQgKAOgNAOQg4A3hOAAQhPAAg3g3QgmgmgMgxQAkgUAwgGQCRgPDoB9QBnA3CKAkQgOAigdAdQg3A3hPABQhOgBg3g3g");
	this.shape.setTransform(-1.4,-54.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AoLHYQjJhFish2Qirh0hhiGQhniMAEh9QAHjsC0gTQCRgPDoB8QCpBbEHAlQCEASBhAAQD/AAEHhaQBdgfBxgyICthNQCxhPBMAQQBkAUAsCyQAgCChRCZQhTCciwCFQi/CQkABRQkeBblIAAQjFAAjVhJg");
	this.shape_1.setTransform(0,-54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouth_sample, new cjs.Rectangle(-126.4,-109,252.9,109), null);


(lib.hair_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AXDGcQhViHhCiAIgxhkQAAAhA2CWQAbBLAaBFQiFiOh4khQgmhbggheIgYhNQkPDqpJCXQi1AvjBAiIibAYIBJi+QjhDYmuDIQjXBkiqA5IBQkEQiJETkhFMQiRCnh1BvQAAmaCfl2QAVg0AZgxQvY0GYNJLQq51KVgPtQEShREjAAQGaAAF2CfQFpCYEXEXQEXEWCZFqQCeF2AAGaQlllTkPmug");
	this.shape.setTransform(-2.6,-8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hair_01, new cjs.Rectangle(-212.9,-126.1,420.7,236.2), null);


(lib.glasses_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("AGDIIQiXhjhJijIgBgBIgBgBQgZgrgniCQgkh5gGgLQgKgOgVgGIACAAIgYgFQgIABgLADIgBABQgVAGgKAOQgGALgkB5QgnCCgZArIgBABIAAABQhLCjiWBjQibBli6AAQigAAiLhMQiGhKhTh+IgCgCQgbgkgWg0QgWgxgOg0IAAAAIgjiFIAAABQgPg4gIgKQgOgOgmgFQgYgCgTABQgGAAgFgDQgEgCgDgFQgDgFAAgFIAAiaQAAgIAGgGQAFgGAIAAQAhgBApgLIABAAQBPgTAlgqQAtg1CHhmIAAABQAWgSAOgKIABAAIACgCQBGgyBagbQBbgcBfAAQB/AAB1AxQBxAvBUBWIABABQAjAgApAtIBGBQQAeAiAgABIABAAQAWAAAzgIIADAAQAeAAAwAIQAfgCAdghIBHhQIAAAAQApgtAjggIABgBQBVhWBvgvQB0gxB+AAQBfAABZAcQBTAZBKAxQAFABADAEQAUANASAPIgBgBQCBBiAxA5IABAAQAlAqBPATQAoALAhABQAIAAAGAGQAFAGAAAIIAACaQAAAFgCAFQgEAFgFACQgEADgGAAQgTgBgWACQgmAEgNAPQgIAKgOA3IgjCEIAAABQgMAxgYA0QgXA3gZAhIgBACQhVB+iFBKQiLBMihAAQi5AAibhlgAF3lgQiTCTAADNQAADPCSCSIABAAQCSCSDOAAQDQAACSiSQCSiSAAjPQAAjOiSiSIAAAAQiSiSjQAAQjOAAiSCSgAzFAAQAADPCSCSQCSCSDPAAQDPAACSiSQCTiSAAjPQAAjOiTiSIAAAAQiSiSjPAAQjPAAiSCSIAAAAQiSCSAADOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.glasses_8, new cjs.Rectangle(-150,-62.1,300,124.3), null);


(lib.face_simple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADHBtQgbgsAAhBQAAg/AbguQAagtAnAAQAmAAAbAtQAbAuAAA/QAABBgbAsQgbAvgmgBQgnABgagvgAlIBtQgbgsAAhBQAAg/AbguQAbgtAmAAQAmAAAbAtQAbAuAAA/QAABBgbAsQgbAvgmgBQgmABgbgvg");
	this.shape.setTransform(0,-40.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhGCaQgkgKgHgpQgGgqAggQQAggQAxAAQAwgBAnARQAlAQgEAgQgEAhgcARQgbAQgtACIgLABQgmAAgfgIgAAuh0QgIgIAAgLQAAgLAIgHQAHgIALAAQALAAAIAIQAHAHAAALQAAALgHAIQgIAHgLAAQgLAAgHgHgAhVh0QgHgIAAgLQAAgLAHgHQAIgIALAAQALAAAHAIQAIAHAAALQAAALgIAIQgHAHgLAAQgLAAgIgHg");
	this.shape_1.setTransform(0.2,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.face_simple, new cjs.Rectangle(-35.6,-56.1,71.2,69.4), null);


(lib.sample_shoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAiQgPgOAAgUQAAgTAPgOQAOgOASAAQAUAAANAOQAOAOABATQgBAUgOAOQgNAOgUAAQgSAAgOgOg");
	this.shape.setTransform(-12.6,-16.2,0.534,0.534);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAxQgFgFgBgHQAAgIAGgFIBEhHQAFgGAHAAQAHAAAGAFQAFAFAAAHQABAIgFAFIhEBHQgGAGgHAAIAAAAQgIAAgFgFg");
	this.shape_1.setTransform(17.3,-13.9,0.534,0.534);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAxQgFgFAAgHQgBgIAFgFIBEhIQAGgFAHAAQAHAAAGAFQAFAFABAHQAAAIgGAFIhEBIQgFAFgHAAIAAAAQgIAAgFgFg");
	this.shape_2.setTransform(13.9,-15.4,0.534,0.534);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguAxQgFgFgBgHQAAgIAGgFIBEhIQAFgFAHAAQAHAAAGAFQAFAFAAAHQABAIgGAFIhDBHQgGAGgHAAIAAAAQgIAAgFgFg");
	this.shape_3.setTransform(10.5,-16.6,0.534,0.534);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB212E").s().p("Am7AMIAAgXIN3AAIAAAXg");
	this.shape_4.setTransform(0.6,-2.6,0.534,0.534);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("Am7AwIAAhfIN3AAIAABfg");
	this.shape_5.setTransform(0.6,-2.6,0.534,0.534);

	this.shoes_color = new lib.shoes_2();
	this.shoes_color.parent = this;
	this.shoes_color.setTransform(3.2,-13.1,0.534,0.534,0,0,0,6,6);

	this.skin = new lib.Symbole1();
	this.skin.parent = this;
	this.skin.setTransform(-5.2,-8.1,0.534,0.534,0,0,0,5.7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.skin},{t:this.shoes_color},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sample_shoes, new cjs.Rectangle(-24.3,-27.6,48.7,27.6), null);


(lib.sample_legRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.sample_shoes();
	this.instance.parent = this;
	this.instance.setTransform(0,-13.8,1,1,0,0,0,0,-13.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D5524").s().p("AhdBAQgngnAAg2IAAhJIEJAAIAABJQAAA2gnAnQgnAng3AAQg2AAgngng");
	this.shape.setTransform(-8.1,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#475FC4").s().p("AiEEqIAAnOQAAgrAYghQAGgJAJgJQAngnA2AAQA3AAAnAnQAJAJAHAJQAXAhAAArIAAHOg");
	this.shape_1.setTransform(-8.1,-57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sample_legRight, new cjs.Rectangle(-24.3,-87.2,48.7,87.2), null);


(lib.sample_legLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.sample_shoes();
	this.instance.parent = this;
	this.instance.setTransform(0,-13.8,1,1,0,0,180,0,-13.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D5524").s().p("AhdBAQgngnAAg2IAAhJIEJAAIAABJQAAA2gnAnQgnAng3AAQg2AAgngng");
	this.shape.setTransform(8.4,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#475FC4").s().p("AiEEqIAAnOQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAHOg");
	this.shape_1.setTransform(8.4,-57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sample_legLeft, new cjs.Rectangle(-24.3,-87.2,48.7,87.2), null);


(lib.sample_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.glasses_color = new lib.glasses_8();
	this.glasses_color.parent = this;
	this.glasses_color.setTransform(0.4,-75.5,0.373,0.373);

	this.hair_color = new lib.hair_01();
	this.hair_color.parent = this;
	this.hair_color.setTransform(-1.8,-120.8,0.452,0.452);

	this.instance = new lib.mouth_sample();
	this.instance.parent = this;
	this.instance.setTransform(0.7,-28.9,0.413,0.413,0,0,0,-0.8,-55);

	this.instance_1 = new lib.sample_eye();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.6,-75.2,1,1,0,0,0,-0.1,-20.2);

	this.instance_2 = new lib.sample_eye();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-24.4,-75.2,1,1,0,0,0,-0.1,-20.2);

	this.instance_3 = new lib.face_simple();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.1,-62.3,1,1,0,0,0,0.2,-27.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D5524").s().p("AliMLQmlgphbl/QgQACgRAAQhkAAhGhGQhHhHAAhkQAAhkBHhFQBGhHBkAAQAVAAAUADQA+jgCxi4QA8g5BDguQDzilEIADQEJgDD0ClQBCAuA9A5QCvC3A+DeIAMAAQBkAABGBHQBHBFAABkQAABkhHBHQhGBGhkAAIgEAAQhbF9mkApQi6ARi4AAQi4AAi5gRg");
	this.shape.setTransform(0,-79.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.hair_color},{t:this.glasses_color}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sample_head, new cjs.Rectangle(-114.1,-177.8,228.2,177.9), null);


(lib.character = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 16
	this.instance = new lib.sample_shoes();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,395.2,1,1,0,0,180,0,-13.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({_off:false},0).to({y:123.2},12,cjs.Ease.get(1)).to({_off:true},9).wait(90));

	// Calque 15
	this.instance_1 = new lib.sample_shoes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.1,395.2,1,1,0,0,0,0,-13.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(174).to({_off:false},0).to({y:123.2},12,cjs.Ease.get(1)).to({_off:true},19).wait(90));

	// Calque 14
	this.glasses_color = new lib.glasses_8();
	this.glasses_color.parent = this;
	this.glasses_color.setTransform(-1.1,-366,0.729,0.729,0,0,0,-0.2,0);
	this.glasses_color._off = true;

	this.timeline.addTween(cjs.Tween.get(this.glasses_color).wait(148).to({_off:false},0).to({regX:0,scaleX:0.37,scaleY:0.37,y:-77},8,cjs.Ease.get(1)).to({_off:true},49).wait(90));

	// Calque 11
	this.hair_color = new lib.hair_01();
	this.hair_color.parent = this;
	this.hair_color.setTransform(-3.3,-434.2,0.452,0.452);
	this.hair_color._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hair_color).wait(110).to({_off:false},0).to({y:-122.2},15,cjs.Ease.get(1)).to({_off:true},80).wait(90));

	// Calque 10
	this.instance_2 = new lib.mouth_sample();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,-30.1,0.075,0.075,0,0,0,0,-54.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({regX:-0.8,regY:-55,scaleX:0.53,scaleY:0.53,x:-1.1,y:-30.3},11).to({scaleX:0.41,scaleY:0.41,x:-0.8},8).to({_off:true},87).wait(90));

	// Calque 9
	this.instance_3 = new lib.sample_eye();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.1,-76.7,0.1,0.1,0,0,0,0,-20.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).to({regX:-0.1,regY:-20.2,scaleX:1.1,scaleY:1.1,x:25,y:-76.6},7).to({scaleX:1,scaleY:1},5).to({_off:true},109).wait(90));

	// Calque 8
	this.instance_4 = new lib.sample_eye();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-25.9,-76.7,0.1,0.1,0,0,0,-0.5,-20.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84).to({_off:false},0).to({regX:-0.1,regY:-20.2,scaleX:1.1,scaleY:1.1,y:-76.6},7).to({scaleX:1,scaleY:1,x:-26},5).to({_off:true},109).wait(90));

	// Calque 7
	this.instance_5 = new lib.face_simple();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.4,-44.4,0.7,0.7,0,0,0,0.1,-27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.23,scaleY:1.23,x:-0.5,y:-63.8},10).to({scaleX:0.95,scaleY:0.95,y:-47},4).to({_off:true},51).wait(1).to({_off:false},0).wait(3).to({regX:0.2,regY:-27.1,scaleX:1.21,scaleY:1.21,x:-0.4,y:-70.3},7).to({scaleX:1,scaleY:1,y:-63.7},5).to({_off:true},124).wait(90));

	// Calque 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEDEB9").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape.setTransform(-91.5,-69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEDEB9").s().p("AgtAtQgSgSAAgbQAAgZASgUQAUgSAZAAQAbAAASASQATAUAAAZQAAAbgTASQgSATgbAAQgZAAgUgTg");
	this.shape_1.setTransform(-91.5,-69.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEDEB9").s().p("AhJBKQgfgeABgsQgBgqAfgfQAfgfAqABQAsgBAeAfQAeAfABAqQgBAsgeAeQgeAegsAAQgqAAgfgeg");
	this.shape_2.setTransform(-91.5,-69.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEDEB9").s().p("AhlBnQgrgrAAg8QAAg7ArgqQAqgrA7AAQA8AAArArQApAqAAA7QAAA8gpArQgrApg8AAQg7AAgqgpg");
	this.shape_3.setTransform(-91.5,-69.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEDEB9").s().p("AiBCDQg2g2AAhNQAAhMA2g1QA1g2BMAAQBMAAA3A2QA2A1AABMQAABNg2A2Qg3A2hMAAQhMAAg1g2g");
	this.shape_4.setTransform(-91.5,-69.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEDEB9").s().p("AieCfQhChBAAheQAAhdBChBQBChCBcAAQBeAABBBCQBCBBAABdQAABehCBBQhBBCheAAQhcAAhChCg");
	this.shape_5.setTransform(-91.5,-69.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEDEB9").s().p("Ai7C7QhNhNAAhuQAAhtBNhNQBOhOBtAAQBuAABNBOQBOBNAABtQAABuhOBNQhNBOhuAAQhtAAhOhOg");
	this.shape_6.setTransform(-91.5,-69.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEDEB9").s().p("Ai2C4QhMhNAAhrQAAhrBMhLQBMhMBqAAQBsAABMBMQBLBLAABrQAABrhLBNQhMBLhsAAQhqAAhMhLg");
	this.shape_7.setTransform(-91.5,-69.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEDEB9").s().p("AiyCzQhKhKAAhpQAAhoBKhKQBKhKBoAAQBpAABKBKQBKBKAABoQAABphKBKQhKBKhpAAQhoAAhKhKg");
	this.shape_8.setTransform(-91.5,-69.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEDEB9").s().p("AitCvQhJhJAAhmQAAhmBJhIQBHhIBmAAQBmAABJBIQBIBIAABmQAABmhIBJQhJBIhmAAQhmAAhHhIg");
	this.shape_9.setTransform(-91.5,-69.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEDEB9").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjAAQBkAABGBGQBHBHAABjQAABkhHBGQhGBHhkAAQhjAAhHhHg");
	this.shape_10.setTransform(-91.5,-69.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1C27D").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjAAQBkAABGBGQBHBHAABjQAABkhHBGQhGBHhkAAQhjAAhHhHg");
	this.shape_11.setTransform(-91.5,-69.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C68642").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjAAQBkAABGBGQBHBHAABjQAABkhHBGQhGBHhkAAQhjAAhHhHg");
	this.shape_12.setTransform(-91.5,-69.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8D5524").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjAAQBkAABGBGQBHBHAABjQAABkhHBGQhGBHhkAAQhjAAhHhHg");
	this.shape_13.setTransform(-91.5,-69.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},125).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_13}]},16).to({state:[{t:this.shape_13}]},8).to({state:[]},36).wait(90));

	// Calque 12
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEDEB9").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_14.setTransform(88.5,-69.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEDEB9").s().p("AgtAtQgSgSAAgbQAAgZASgUQAUgSAZAAQAbAAASASQATAUAAAZQAAAbgTASQgSATgbAAQgZAAgUgTg");
	this.shape_15.setTransform(88.5,-69.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEDEB9").s().p("AhJBKQgfgeABgsQgBgqAfgfQAfgfAqABQAsgBAeAfQAeAfABAqQgBAsgeAeQgeAegsAAQgqAAgfgeg");
	this.shape_16.setTransform(88.5,-69.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEDEB9").s().p("AhlBnQgrgrAAg8QAAg7ArgqQAqgrA7AAQA8AAArArQApAqAAA7QAAA8gpArQgrApg8AAQg7AAgqgpg");
	this.shape_17.setTransform(88.5,-69.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEDEB9").s().p("AiBCDQg2g2AAhNQAAhMA2g1QA1g2BMAAQBMAAA3A2QA2A1AABMQAABNg2A2Qg3A2hMAAQhMAAg1g2g");
	this.shape_18.setTransform(88.5,-69.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEDEB9").s().p("AieCfQhChBAAheQAAhdBChBQBChCBcAAQBeAABBBCQBCBBAABdQAABehCBBQhBBCheAAQhcAAhChCg");
	this.shape_19.setTransform(88.5,-69.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEDEB9").s().p("Ai7C7QhNhNAAhuQAAhtBNhNQBOhOBtAAQBuAABNBOQBOBNAABtQAABuhOBNQhNBOhuAAQhtAAhOhOg");
	this.shape_20.setTransform(88.5,-69.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEDEB9").s().p("Ai2C4QhMhNAAhrQAAhrBMhLQBMhMBqAAQBsAABMBMQBLBLAABrQAABrhLBNQhMBLhsAAQhqAAhMhLg");
	this.shape_21.setTransform(88.5,-69.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEDEB9").s().p("AiyCzQhKhKAAhpQAAhoBKhKQBKhKBoAAQBpAABKBKQBKBKAABoQAABphKBKQhKBKhpAAQhoAAhKhKg");
	this.shape_22.setTransform(88.5,-69.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEDEB9").s().p("AitCvQhJhJAAhmQAAhmBJhIQBHhIBmAAQBmAABJBIQBIBIAABmQAABmhIBJQhJBIhmAAQhmAAhHhIg");
	this.shape_23.setTransform(88.5,-69.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEDEB9").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjAAQBkAABGBGQBHBHAABjQAABkhHBGQhGBHhkAAQhjAAhHhHg");
	this.shape_24.setTransform(88.5,-69.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F1C27D").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjAAQBkAABGBGQBHBHAABjQAABkhHBGQhGBHhkAAQhjAAhHhHg");
	this.shape_25.setTransform(88.5,-69.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C68642").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjAAQBkAABGBGQBHBHAABjQAABkhHBGQhGBHhkAAQhjAAhHhHg");
	this.shape_26.setTransform(88.5,-69.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8D5524").s().p("AiqCqQhGhGAAhkQAAhjBGhHQBHhGBjAAQBkAABGBGQBHBHAABjQAABkhHBGQhGBHhkAAQhjAAhHhHg");
	this.shape_27.setTransform(88.5,-69.4);

	this.instance_6 = new lib.sample_head();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.5,-1.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},125).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},4).to({state:[{t:this.shape_26}]},3).to({state:[{t:this.shape_27}]},3).to({state:[{t:this.shape_27}]},16).to({state:[{t:this.shape_27}]},8).to({state:[{t:this.instance_6}]},36).to({state:[{t:this.instance_6}]},11).to({state:[{t:this.instance_6}]},32).to({state:[{t:this.instance_6}]},11).to({state:[]},24).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(205).to({_off:false},0).to({regX:-0.1,regY:-0.1,rotation:-19.9,x:-17.7,y:0.1},11).wait(32).to({regX:0,regY:0,rotation:0,x:-1.5,y:-1.4},11).to({_off:true},24).wait(12));

	// body
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEDEB9").s().p("AmMHJIAArJQgBhkAygyQAygyBkAAIGLAAQBkAAAyAyQAyAygBBkIAALJg");
	this.shape_28.setTransform(0.5,51.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEDEB9").s().p("AmmHJIAArJQAAhkAygyQAygyBkAAIG9AAQBkAAAyAyQAyAyAABkIAALJg");
	this.shape_29.setTransform(0.5,51.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEDEB9").s().p("Am/HJIAArJQABhkAxgyQAygyBlAAIHuAAQBkAAAyAyQAxAyABBkIAALJg");
	this.shape_30.setTransform(0.5,51.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEDEB9").s().p("AnXHJIAArJQAAhkAxgyQAygyBlAAIIfAAQBlAAAyAyQAxAyABBkIAALJg");
	this.shape_31.setTransform(0.5,51.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEDEB9").s().p("AnwHJIAArJQgBhkAygyQAygyBkAAIJSAAQBlAAAyAyQAxAyAABkIAALJg");
	this.shape_32.setTransform(0.5,51.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEDEB9").s().p("AnUHJIAArJQAAhkAxgyQAygyBlAAIIZAAQBlAAAyAyQAxAyAABkIAALJg");
	this.shape_33.setTransform(0.5,51.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEDEB9").s().p("Am4HJIAArJQAAhkAygyQAygyBkAAIHhAAQBkAAAyAyQAyAygBBkIAALJg");
	this.shape_34.setTransform(0.5,51.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEDEB9").s().p("AmbHJIAArJQAAhkAygyQAxgyBlAAIGnAAQBlAAAxAyQAyAyAABkIAALJg");
	this.shape_35.setTransform(0.5,51.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEDEB9").s().p("Al+HJIAArJQAAhkAxgyQAzgyBkAAIFtAAQBkAAAyAyQAyAyAABkIAALJg");
	this.shape_36.setTransform(0.5,51.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEDEB9").s().p("AlhHJIAArJQAAhkAxgyQAygyBlAAIEzAAQBlAAAyAyQAxAyAABkIAALJg");
	this.shape_37.setTransform(0.5,51.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEDEB9").s().p("AlFHJIAArJQAAhkAxgyQAygyBlAAID7AAQBkAAAzAyQAxAyAABkIAALJg");
	this.shape_38.setTransform(0.5,51.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEDEB9").s().p("AkpHJIAArJQAAhkAygyQAygyBkAAIDDAAQBkAAAyAyQAyAygBBkIAALJg");
	this.shape_39.setTransform(0.5,51.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEDEB9").s().p("AkpG0IAAqfQAAhkAygxQAygzBkAAIDDAAQBkAAAyAzQAyAxgBBkIAAKfg");
	this.shape_40.setTransform(0.5,49.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEDEB9").s().p("AkpGfIAAp1QAAhjAygyQAygzBkAAIDDAAQBkAAAyAzQAyAygBBjIAAJ1g");
	this.shape_41.setTransform(0.5,46.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEDEB9").s().p("AkpGJIAApJQAAhkAygyQAygyBkAAIDDAAQBkAAAyAyQAyAygBBkIAAJJg");
	this.shape_42.setTransform(0.5,44.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEDEB9").s().p("AkpF0IAAofQAAhjAygyQAygzBkAAIDDAAQBkAAAyAzQAyAygBBjIAAIfg");
	this.shape_43.setTransform(0.5,42.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEDEB9").s().p("AkpFeIAAnzQAAhkAygyQAygyBkAAIDDAAQBkAAAyAyQAyAygBBkIAAHzg");
	this.shape_44.setTransform(0.5,40.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEDEB9").s().p("AkpFJIAAnJQAAhkAygxQAygzBkAAIDDAAQBkAAAyAzQAyAxgBBkIAAHJg");
	this.shape_45.setTransform(0.5,38.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEDEB9").s().p("AkpE0IAAmeQAAhkAygyQAygyBkAAIDDAAQBkAAAyAyQAyAygBBkIAAGeg");
	this.shape_46.setTransform(0.5,36.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F1C27D").s().p("AkpE0IAAmeQAAhkAygyQAygyBkAAIDDAAQBkAAAyAyQAyAygBBkIAAGeg");
	this.shape_47.setTransform(0.5,36.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C68642").s().p("AkpE0IAAmeQAAhkAygyQAygyBkAAIDDAAQBkAAAyAyQAyAygBBkIAAGeg");
	this.shape_48.setTransform(0.5,36.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8D5524").s().p("AkpE0IAAmeQAAhkAygyQAygyBkAAIDDAAQBkAAAyAyQAyAygBBkIAAGeg");
	this.shape_49.setTransform(0.5,36.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFD000").s().p("AkpE0IAAmeQAAhkAygyQAygyBkAAIDDAAQBkAAAyAyQAyAygBBkIAAGeg");
	this.shape_50.setTransform(0.5,36.2);

	this.instance_7 = new lib.sample_body();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.5,36.2,1,1,0,0,0,0,-30.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_28}]},14).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},16).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[]},17).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},73).to({state:[{t:this.shape_48}]},3).to({state:[{t:this.shape_49}]},3).to({state:[{t:this.shape_50}]},16).to({state:[{t:this.shape_50}]},8).to({state:[{t:this.instance_7}]},36).to({state:[{t:this.instance_7}]},11).to({state:[{t:this.instance_7}]},32).to({state:[{t:this.instance_7}]},11).to({state:[]},24).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(205).to({_off:false},0).to({rotation:-15,x:-8.3},11).wait(32).to({rotation:0,x:0.5},11).to({_off:true},24).wait(12));

	// leg_right
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEDEB9").s().p("ACoIAQgmgnAAg3IAAtDQAAg3AmgnQAngnA3AAQA4AAAnAnQAnAngBA3IAANDQABA3gnAnQgnAng4AAQg3AAgngngAljIAQgognAAg3IAAtDQAAg3AognQAngnA2AAQA4AAAnAnQAmAnABA3IAANDQgBA3gmAnQgnAng4AAQg2AAgngng");
	this.shape_51.setTransform(0.7,134.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEDEB9").s().p("AhdIAQgngnAAg3IAAtDQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAANDQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_52.setTransform(27,134.9);
	this.shape_52._off = true;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEDEB9").s().p("Ag3IGQgQgIgOgMQglgigFgxIAAgEQgFg/AAhBIAAqpQAAg2AlgmIABgBQANgMAOgJQAcgRAhgBQAjgBAdAQQAPAHAMALQAnAjAEAzIAAABIACAfQADAxAAAxIAAKoIAAACQAAA0glAmQgMAMgOAJQgdASgiABIgFAAQgeAAgbgNg");
	this.shape_53.setTransform(17,103);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEDEB9").s().p("AgvH1QgQgGgOgMQglgegIguIgBgEQgJg7AAg/IAAqVQAAgzAjgmIABgBQALgMAOgJQAagRAhgCQAggDAeAOQAOAGANAKQAmAfAJAwIAAABIADAdQAGAuAAAxIAAKTIAAACQgBAyghAlQgMANgOAIQgbASghADIgLAAQgZAAgYgKg");
	this.shape_54.setTransform(17,101.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FEDEB9").s().p("AgnHlQgPgGgOgKQglgagMgrIgBgEQgOg4AAg9IAAqAQAAgyAhgkIABgBQAKgMANgJQAZgRAggEQAfgEAdAMQAOAFANAJQAmAaALAtIABABIAGAcQAIAsAAAvIAAJ+IAAACQgBAxgfAkQgMAMgMAJQgaASggAEIgQABQgVAAgVgHg");
	this.shape_55.setTransform(17,99.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEDEB9").s().p("AgfHUQgPgFgOgIQglgWgQgpIgBgDQgSg0AAg9IAApqQAAgxAfgjIABgBQAKgMAMgIQAYgSAdgFQAdgFAeAJQAOAEANAIQAmAXAOApIABABQAEANADANQAMApAAAvIAAJpIAAACQAAAvgeAkQgKAMgMAJQgZASgeAFQgLACgLAAQgRAAgSgFg");
	this.shape_56.setTransform(17,97.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FEDEB9").s().p("AgXHDQgPgDgOgHQglgTgSglIgCgDQgXgxAAg7IAApVQAAgvAcgjIABgBQAKgLALgJQAXgSAbgGQAdgGAcAHQAOADANAGQAnATASAnIAAABIAJAXQAPAoAAAtIAAJVIAAABQAAAugcAjQgKALgMAJQgXATgcAGQgOADgOAAQgNAAgOgDg");
	this.shape_57.setTransform(17,95.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FEDEB9").s().p("AgPGyQgPgCgNgFQglgPgXgjIgBgDQgcgtAAg5IAApBQAAgtAagiIABgBQAJgKAKgJQAWgTAZgHQAcgIAcAFQAOACANAFQAmAPAWAkIAAABIAMAVQARAlAAAtIAAJAIAAABQAAAsgaAiQgIALgMAKQgWATgbAHQgQAFgSAAIgTgCg");
	this.shape_58.setTransform(17,93.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEDEB9").s().p("AhdFqQgngnAAg3IAAoXQAAgrAXggQAHgKAJgJQAngnA2AAQA3AAAnAnQAJAJAHAKQAXAgAAArIAAIXQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_59.setTransform(17,89.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F1C27D").s().p("AhdFqQgngnAAg3IAAoXQAAgrAXggQAHgKAJgJQAngnA2AAQA3AAAnAnQAJAJAHAKQAXAgAAArIAAIXQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_60.setTransform(17,89.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C68642").s().p("AhdFqQgngnAAg3IAAoXQAAgrAXggQAHgKAJgJQAngnA2AAQA3AAAnAnQAJAJAHAKQAXAgAAArIAAIXQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_61.setTransform(17,89.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8D5524").s().p("AhdFqQgngnAAg3IAAoXQAAgrAXggQAHgKAJgJQAngnA2AAQA3AAAnAnQAJAJAHAKQAXAgAAArIAAIXQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_62.setTransform(17,89.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#475FC4").s().p("AiEEqIAAnOQAAgrAXggQAHgKAJgJQAngnA2AAQA3AAAnAnQAJAJAHAKQAXAgAAArIAAHOg");
	this.shape_63.setTransform(17,79.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8D5524").s().p("AhdBAQgngnAAg2IAAhJIEJAAIAABJQAAA2gnAnQgnAng3AAQg2AAgngng");
	this.shape_64.setTransform(17,119.7);

	this.instance_8 = new lib.sample_legRight();
	this.instance_8.parent = this;
	this.instance_8.setTransform(15.1,64.2,1,1,0,0,0,-10,-72.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51}]}).to({state:[{t:this.shape_52}]},14).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},16).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},10).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},73).to({state:[{t:this.shape_61}]},3).to({state:[{t:this.shape_62}]},3).to({state:[{t:this.shape_62}]},16).to({state:[{t:this.shape_64},{t:this.shape_63}]},8).to({state:[{t:this.instance_8}]},36).to({state:[{t:this.instance_8}]},11).to({state:[{t:this.instance_8}]},32).to({state:[{t:this.instance_8}]},11).to({state:[]},24).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(14).to({_off:false},0).wait(1).to({x:29.5},0).wait(1).to({x:32},0).wait(1).to({x:34.5},0).wait(1).to({x:37},0).wait(1).to({x:34.1},0).wait(1).to({x:31.3},0).wait(1).to({x:28.4},0).wait(1).to({x:25.5},0).wait(1).to({x:22.7},0).wait(1).to({x:19.8},0).wait(1).to({x:17},0).wait(17).to({y:130.6},0).wait(1).to({y:126.3},0).wait(1).to({y:122},0).wait(1).to({y:117.7},0).wait(1).to({y:113.4},0).wait(1).to({y:109.2},0).wait(1).to({y:104.9},0).wait(10).to({_off:true},1).wait(236));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(205).to({_off:false},0).to({regX:-10.1,rotation:-37.2},11).wait(32).to({regX:-10,rotation:0},11).to({_off:true},24).wait(12));

	// leg_left
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FEDEB9").s().p("ACoIAQgmgnAAg3IAAtDQAAg3AmgnQAngnA3AAQA4AAAnAnQAnAngBA3IAANDQABA3gnAnQgnAng4AAQg3AAgngngAljIAQgognAAg3IAAtDQAAg3AognQAngnA2AAQA4AAAnAnQAmAnABA3IAANDQgBA3gmAnQgnAng4AAQg2AAgngng");
	this.shape_65.setTransform(0.7,134.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FEDEB9").s().p("AhdIAQgngnAAg3IAAtDQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAANDQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_66.setTransform(-25.5,134.9);
	this.shape_66._off = true;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FEDEB9").s().p("AhdHtQgngnAAg3IAAsdQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAMdQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_67.setTransform(-15.5,103);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FEDEB9").s().p("AhdHbQgngnAAg4IAAr3QAAg4AngnQAngnA2ABQA3gBAnAnQAnAnAAA4IAAL3QAAA4gnAnQgnAmg3ABQg2gBgngmg");
	this.shape_68.setTransform(-15.5,101.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FEDEB9").s().p("AhdHIQgngnAAg3IAArTQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAALTQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_69.setTransform(-15.5,99.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FEDEB9").s().p("AhdG1QgngnAAg3IAAqtQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAKtQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_70.setTransform(-15.5,97.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FEDEB9").s().p("AhdGiQgngnAAg3IAAqHQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAKHQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_71.setTransform(-15.5,95.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FEDEB9").s().p("AhdGQQgngnAAg4IAAphQAAg4AngnQAngnA2ABQA3gBAnAnQAnAnAAA4IAAJhQAAA4gnAnQgnAng3gBQg2ABgngng");
	this.shape_72.setTransform(-15.5,93.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FEDEB9").s().p("AhdFqQgngnAAg3IAAoXQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAIXQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_73.setTransform(-15.5,89.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F1C27D").s().p("AhdFqQgngnAAg3IAAoXQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAIXQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_74.setTransform(-15.5,89.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C68642").s().p("AhdFqQgngnAAg3IAAoXQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAIXQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_75.setTransform(-15.5,89.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8D5524").s().p("AhdFqQgngnAAg3IAAoXQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAIXQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_76.setTransform(-15.5,89.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#475FC4").s().p("AiEEqIAAnOQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAHOg");
	this.shape_77.setTransform(-15.5,79.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#8D5524").s().p("AhdBAQgngnAAg2IAAhJIEJAAIAABJQAAA2gnAnQgnAng3AAQg2AAgngng");
	this.shape_78.setTransform(-15.5,119.7);

	this.instance_9 = new lib.sample_legLeft();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-13.6,60.6,1,1,0,0,0,10.3,-76.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65}]}).to({state:[{t:this.shape_66}]},14).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},16).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},10).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},73).to({state:[{t:this.shape_75}]},3).to({state:[{t:this.shape_76}]},3).to({state:[{t:this.shape_76}]},16).to({state:[{t:this.shape_78},{t:this.shape_77}]},8).to({state:[{t:this.instance_9}]},36).to({state:[{t:this.instance_9}]},11).to({state:[{t:this.instance_9}]},32).to({state:[{t:this.instance_9}]},11).to({state:[]},24).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(14).to({_off:false},0).wait(1).to({x:-28},0).wait(1).to({x:-30.5},0).wait(1).to({x:-33},0).wait(1).to({x:-35.5},0).wait(1).to({x:-32.7},0).wait(1).to({x:-29.8},0).wait(1).to({x:-27},0).wait(1).to({x:-24.1},0).wait(1).to({x:-21.2},0).wait(1).to({x:-18.4},0).wait(1).to({x:-15.5},0).wait(17).to({y:130.6},0).wait(1).to({y:126.3},0).wait(1).to({y:122},0).wait(1).to({y:117.7},0).wait(1).to({y:113.4},0).wait(1).to({y:109.2},0).wait(1).to({y:104.9},0).wait(10).to({_off:true},1).wait(236));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(205).to({_off:false},0).wait(54).to({_off:true},24).wait(12));

	// arm_left
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FEDEB9").s().p("AhdIAQgngnAAg3IAAtDQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAANDQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_79.setTransform(-55,69.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FEDEB9").s().p("AhdINQgngoAAg3IAAtbQAAg3AngoQAngnA2ABQA3gBAnAnQAnAoAAA3IAANbQAAA3gnAoQgnAng3gBQg2ABgngng");
	this.shape_80.setTransform(-45,71.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FEDEB9").s().p("AhdIZQgngnAAg3IAAt1QAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAN1QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_81.setTransform(-45,72.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FEDEB9").s().p("AhdIlQgngnAAg2IAAuOQAAg3AngoQAngnA2ABQA3gBAnAnQAnAoAAA3IAAOOQAAA2gnAnQgnAog3AAQg2AAgngog");
	this.shape_82.setTransform(-45,73.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FEDEB9").s().p("AhdIyQgngnAAg3IAAunQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAOnQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_83.setTransform(-45,74.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FEDEB9").s().p("AhdI/QgngnAAg4IAAu/QAAg3AngoQAngnA2ABQA3gBAnAnQAnAoAAA3IAAO/QAAA4gnAnQgnAng3gBQg2ABgngng");
	this.shape_84.setTransform(-45,76.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FEDEB9").s().p("AhdJLQgngnAAg3IAAvZQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAPZQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_85.setTransform(-45,77.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FEDEB9").s().p("AhdJXQgngmAAg4IAAvxQAAg3AngoQAngnA2ABQA3gBAnAnQAnAoAAA3IAAPxQAAA4gnAmQgnAng3ABQg2gBgngng");
	this.shape_86.setTransform(-45,78.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FEDEB9").s().p("AhdJkQgngnAAg3IAAwLQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAQLQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_87.setTransform(-45,79.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FEDEB9").s().p("AhdHnQgngnAAg3IAAsRQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAMRQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_88.setTransform(-45,67.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FEDEB9").s().p("AhdHOQgngnAAg3IAArfQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAALfQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_89.setTransform(-45,64.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FEDEB9").s().p("AhdG1QgngnAAg3IAAqtQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAKtQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_90.setTransform(-45,62.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FEDEB9").s().p("AhdGcQgngnAAg3IAAp7QAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAJ7QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_91.setTransform(-45,59.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F1C27D").s().p("AhdGcQgngnAAg3IAAp7QAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAJ7QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_92.setTransform(-45,59.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C68642").s().p("AhdGcQgngnAAg3IAAp7QAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAJ7QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_93.setTransform(-45,59.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8D5524").s().p("AhdGcQgngnAAg3IAAp7QAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAJ7QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_94.setTransform(-45,59.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFD000").s().p("AiEFMIAAoSQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAISg");
	this.shape_95.setTransform(-45,47.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8D5524").s().p("AhdBQQgngnAAg2IAAhpIEJAAIAABpQAAA2gnAnQgnAng3AAQg2AAgngng");
	this.shape_96.setTransform(-45,93);

	this.instance_10 = new lib.sample_armLeft();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-45,29.5,1,1,0,0,0,0,-75.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79}]}).to({state:[{t:this.shape_79}]},14).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},7).to({state:[]},17).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},73).to({state:[{t:this.shape_93}]},3).to({state:[{t:this.shape_94}]},3).to({state:[{t:this.shape_96},{t:this.shape_95}]},16).to({state:[{t:this.shape_96},{t:this.shape_95}]},8).to({state:[{t:this.instance_10}]},36).to({state:[{t:this.instance_10}]},11).to({state:[{t:this.instance_10}]},32).to({state:[{t:this.instance_10}]},11).to({state:[]},24).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(15).to({x:-57.5},0).wait(1).to({x:-60},0).wait(1).to({x:-62.5},0).wait(1).to({x:-65},0).wait(1).to({x:-62.2},0).wait(1).to({x:-59.3},0).wait(1).to({x:-56.5},0).wait(1).to({x:-53.6},0).wait(1).to({x:-50.7},0).wait(1).to({x:-47.9},0).wait(1).to({x:-45},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(257));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(205).to({_off:false},0).to({rotation:30,x:-53.8,y:37.5},11).wait(32).to({rotation:0,x:-45,y:29.5},11).to({_off:true},24).wait(12));

	// arm_right
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FEDEB9").s().p("AhdIAQgngnAAg3IAAtDQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAANDQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_97.setTransform(56.1,69.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FEDEB9").s().p("AhdINQgngoAAg3IAAtbQAAg3AngoQAngnA2ABQA3gBAnAnQAnAoAAA3IAANbQAAA3gnAoQgnAng3gBQg2ABgngng");
	this.shape_98.setTransform(46.1,71.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FEDEB9").s().p("AhdIZQgngnAAg3IAAt1QAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAN1QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_99.setTransform(46.1,72.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FEDEB9").s().p("AhdIlQgngnAAg2IAAuOQAAg3AngoQAngnA2ABQA3gBAnAnQAnAoAAA3IAAOOQAAA2gnAnQgnAog3AAQg2AAgngog");
	this.shape_100.setTransform(46.1,73.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FEDEB9").s().p("AhdIyQgngnAAg3IAAunQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAOnQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_101.setTransform(46.1,74.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FEDEB9").s().p("AhdI/QgngnAAg4IAAu/QAAg3AngoQAngnA2ABQA3gBAnAnQAnAoAAA3IAAO/QAAA4gnAnQgnAng3gBQg2ABgngng");
	this.shape_102.setTransform(46.1,76.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FEDEB9").s().p("AhdJLQgngnAAg3IAAvZQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAPZQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_103.setTransform(46.1,77.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FEDEB9").s().p("AhdJXQgngmAAg4IAAvxQAAg3AngoQAngnA2ABQA3gBAnAnQAnAoAAA3IAAPxQAAA4gnAmQgnAng3ABQg2gBgngng");
	this.shape_104.setTransform(46.1,78.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FEDEB9").s().p("AhdJkQgngnAAg3IAAwLQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAQLQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_105.setTransform(46.1,79.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FEDEB9").s().p("AhdHnQgngnAAg3IAAsRQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAMRQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_106.setTransform(46.1,67.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FEDEB9").s().p("AhdHOQgngnAAg3IAArfQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAALfQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_107.setTransform(46.1,64.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FEDEB9").s().p("AhdG1QgngnAAg3IAAqtQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAKtQAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_108.setTransform(46.1,62.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FEDEB9").s().p("AhdGcQgngnAAg3IAAp7QAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAJ7QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_109.setTransform(46.1,59.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F1C27D").s().p("AhdGcQgngnAAg3IAAp7QAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAJ7QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_110.setTransform(46.1,59.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C68642").s().p("AhdGcQgngnAAg3IAAp7QAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAJ7QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_111.setTransform(46.1,59.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#8D5524").s().p("AhdGcQgngnAAg3IAAp7QAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAJ7QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape_112.setTransform(46.1,59.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFD000").s().p("AiEFMIAAoSQAAg3AngnQAngnA2AAQA3AAAnAnQAnAnAAA3IAAISg");
	this.shape_113.setTransform(46.1,47.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#8D5524").s().p("AhdBQQgngnAAg2IAAhpIEJAAIAABpQAAA2gnAnQgnAng3AAQg2AAgngng");
	this.shape_114.setTransform(46.1,93);

	this.instance_11 = new lib.sample_armRight();
	this.instance_11.parent = this;
	this.instance_11.setTransform(46.1,28.3,1,1,0,0,0,0,-76.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97}]}).to({state:[{t:this.shape_97}]},14).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_109}]},7).to({state:[]},17).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},73).to({state:[{t:this.shape_111}]},3).to({state:[{t:this.shape_112}]},3).to({state:[{t:this.shape_114},{t:this.shape_113}]},16).to({state:[{t:this.shape_114},{t:this.shape_113}]},8).to({state:[{t:this.instance_11}]},36).to({state:[{t:this.instance_11}]},11).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_11}]},8).to({state:[{t:this.instance_11}]},11).to({state:[]},24).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_97).wait(15).to({x:58.6},0).wait(1).to({x:61.1},0).wait(1).to({x:63.6},0).wait(1).to({x:66.1},0).wait(1).to({x:63.3},0).wait(1).to({x:60.4},0).wait(1).to({x:57.6},0).wait(1).to({x:54.7},0).wait(1).to({x:51.8},0).wait(1).to({x:49},0).wait(1).to({x:46.1},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(257));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(205).to({_off:false},0).to({rotation:-135,x:30.1,y:5.1},11).wait(5).to({rotation:-120},0).to({rotation:-135},4).to({rotation:-120},4).to({rotation:-135},4).to({rotation:-120},3).to({rotation:-135},4).wait(8).to({rotation:0,x:46.1,y:28.3},11).to({_off:true},24).wait(12));

	// head
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FEDEB9").s().p("Al3F5QidicAAjdQAAjbCdidQCbicDcABQDdgBCbCcQCdCdAADbQAADdidCcQibCbjdABQjcgBibibg");
	this.shape_115.setTransform(0,-53.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FEDEB9").s().p("AhdIwQh5gUhog+QgogYgkgfQi0iXgFj1IAAAAQgEjvCjisQAlgnApggQAsggAwgXQBrg1B9gEQA8gCA5AJQClAbCCB5IAQAPQAmAmAfArQBeCHAGCpQAFB3gmBsQgmBnhOBSQh0B8ilAgQg+ALhCABIgGAAQg3AAg1gIg");
	this.shape_116.setTransform(-0.1,-57);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FEDEB9").s().p("AhSJVQiDgRhzg6QgtgWgngeQjMiSgKkOQgJkCCqi9QAmgqAsgkQAvgkAzgaQBzg8CEgIQBBgEA+AIQCxAXCRB+IARAPQArAoAjAtQBqCQANCzQAKB/glB3QgjBzhQBZQh4CGi3AgQhDAMhHABIgIAAQg7AAg5gHg");
	this.shape_117.setTransform(-0.2,-60.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FEDEB9").s().p("AhHJ6QiMgPiAg1QgxgUgrgdQjkiNgPkmIAAAAQgNkWCxjNQAoguAugoQAxgnA3geQB7hECMgMQBEgGBDAHQC/AUCfCDIATAQQAvAqAnAvQB2CYAVC+QAOCGgjCDQgiB/hRBeQh8CSjKAfQhIAMhMACIgYAAQg3AAg2gGg");
	this.shape_118.setTransform(-0.2,-64.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FEDEB9").s().p("Ag8KfQiWgMiLgxQg2gSgwgbQj7iJgUk+IAAgBQgRkoC3jeQAqgyAxgsQA0grA5ghQCEhLCTgQQBJgJBHAHQDMAQCuCIIAUARQA0ArAqAyQCDChAbDIQAUCNgiCOQggCLhTBlQh/CdjdAfQhOAMhQABIgkABQg1AAg1gFg");
	this.shape_119.setTransform(-0.2,-68.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FEDEB9").s().p("AgyLFQifgLiXgrQg6gRg0gZQkUiEgYlXIAAgBQgWk8C/juQArg2A0gvQA2gvA9gkQCLhTCbgUQBOgLBMAGQDYANC9CNIAWARQA3AsAvA1QCPCqAiDSQAYCUgfCaQgfCXhUBrQiDCojwAfQhTALhVADIgwAAQg1AAgzgDg");
	this.shape_120.setTransform(-0.2,-72.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FEDEB9").s().p("AgnLrQiqgJiigmQg/gPg3gZQksh/gelwIAAgBQgalODGj/QAtg5A2g0QA5gyBAgnQCUhcChgYQBTgMBRAEQDlAKDLCSIAYASQA7AuA0A2QCbCzAoDcQAdCdgdClQgdCihWBxQiHCzkCAgQhYALhaADIhEABQgwAAgtgCg");
	this.shape_121.setTransform(-0.2,-75.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FEDEB9").s().p("AgdMQQizgGiugiQhEgNg7gXQlEh7gimIIAAgBQgfliDNkPQAug9A5g4QA8g1BDgrQCchjCpgcQBWgPBWAEQDzAHDZCWIAaATQA/AvA4A5QCnC8AvDmQAiCkgbCwQgbCvhYB3QiKC+kWAgQhdALhfADQgvABguAAIhNgBg");
	this.shape_122.setTransform(-0.2,-79.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FEDEB9").s().p("AgTM2Qi9gFi5gcQhJgMg/gWQlch1gnmhIAAgCQgjl0DUkgQAwhBA7g8QA/g5BGgtQCkhrCwggQBbgRBbADQEAADDnCcIAcATQBDAxA8A7QC0DEA2DxQAmCrgZC8QgaC6hZB+QiODJkpAgQhiAKhkAEQg8ADg8AAIg7gBg");
	this.shape_123.setTransform(-0.1,-83.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FEDEB9").s().p("AgJNbQjGgCjFgYQhOgKhDgUQlzhxgtm5IAAgCQgnmIDbkwQAxhFA/g/QBBg9BIgxQCthyC3gkQBggTBgACQEMgBD2ChIAdAUQBIAyBAA+QDADNA9D7QArCygYDIQgXDGhbCEQiSDUk7AgQhoAKhoAEQhMADhMAAIglAAg");
	this.shape_124.setTransform(-0.1,-87.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FEDEB9").s().p("AmgNuQocg0g6onQg1n4FglwQBDhABMg0QETi6EpADQEqgDETC6QBMA0BDBAQFgFwg1H4Qg6InocA0QjRATjQAAQjPAAjRgTg");
	this.shape_125.setTransform(0,-91.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FEDEB9").s().p("AmGMtQkNgUinh+QhPg+gyhnQgghDgPhPQgEgbgCgdQgFg+ABg8QAIl+EGklIAogqQBBg9BKgyQEFixEmABIApAAQEPAHD0CeQBLAxBCA8QA1A0AtA4QDzEvgTGLIgBAYQgDAxgIAvIgIAtQgVBRgpBAQhABohmA1IgNAHIgEACQiLBFjAAOQjKAOjJAAQjIAAjKgOg");
	this.shape_126.setTransform(-0.1,-83.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FEDEB9").s().p("AltLtQj7gOi3hUQhXgrg5hdQgng+gPhLQgDgagCgbQgDg9ACg6QARlwEDkWQASgVAUgTQBAg7BGgwQD5inEhgDIAoAAQEMAFDpCPQBJAtBCA6QAzAvAuA1QD2EfgBF6IAAAXQgBAugFAuIgGAtQgTBMguA+QhFBfhpAkIgNAEIgEABQiQAuizAKQjDAJjDAAQjCAAjDgJg");
	this.shape_127.setTransform(-0.2,-76.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FEDEB9").s().p("AlUKsQjqgGjIgqQhdgZhBhTQgug5gRhHQgCgYAAgaQgCg7AEg4QAaljD+kIIAmglQA+g6BEgsQDrieEdgHIAnAAQEHACDeCCQBIAqBBA1QAzAsAvAyQD6EOAQFoIABAWQABAsgDAuIgDArQgTBJgxA6QhKBXhtASIgOACIgDABQiVAXimAEQi9AFi8AAQi6AAi8gFg");
	this.shape_128.setTransform(-0.1,-68.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FEDEB9").s().p("ALNJsIgDgBI23AAQhlgFhIhJQg1g0gShDIgBgvQABg5AFg3QAjlUD6j7QEkkjGbAAQGcAAEjEjQD9D9AhFWQAGA1gBA3IAAAqQgRBGg2A2QhQBPhvAAIgPAAg");
	this.shape_129.setTransform(0,-61.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FEDEB9").s().p("AlKKQQjigEjPgXQhhgRhEhOQgxg4gRhFIgCgwIAAgBQgBg6AFg3QAdlcD+kDIAlgkQA9g4BCgtQDmiZEbgIIAnAAQEFABDaB7QBHAoBBA1QAzAqAvAxQD7EGAXFhIACAWQABArgBAsIgCArQgSBIg0A4QhMBUhuAKIgOACIgDAAQiXANihACQi5ADi6AAQi3AAi5gDg");
	this.shape_130.setTransform(-0.1,-65.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FEDEB9").s().p("AlYK2QjsgIjFgwQhdgbhAhVQgtg5gQhIIgDgyIAAgBQgCg7AEg4QAYlkD/kLQATgTATgSQA+g6BEgtQDuifEdgGIAogBQEHADDgCDQBIAqBBA3QAzAsAvAzQD5EQAOFrIAAAWQABAtgDAsIgDAsQgTBKgxA6QhJBYhsAVIgOACIgEABQiUAaioAGQi9AFi9AAQi8AAi9gFg");
	this.shape_131.setTransform(-0.1,-70);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FEDEB9").s().p("AlmLaQj2gMi8hHQhYgmg8haQgpg9gQhKIgEgzIAAgBQgCg8ADg6QATlsEBkSQATgUAUgTQA/g7BFgvQD1ikEggEIAoAAQEKAEDmCLQBJAsBCA5QAzAuAuA0QD3EaAEF1IAAAXQAAAugEAtIgFAsQgUBMguA8QhHBdhqAfIgOAEIgDABQiSAnivAIQjBAIjBAAQjAAAjBgIg");
	this.shape_132.setTransform(-0.2,-74.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FEDEB9").s().p("Al0L/QkAgPiyhgQhVgxg3hgQglg/gPhMIgFg0IAAgCQgEg9ACg6QAOl1EEkaIAmgoQBBg9BHgwQD8ipEjgDIAoAAQENAGDsCUQBJAuBCA6QA0AxAuA2QD1EjgGF/IAAAXQgCAvgGAuIgGAtQgUBOgsA+QhEBihoApIgNAFIgEABQiPA0i3ALQjFALjEAAQjEAAjFgLg");
	this.shape_133.setTransform(-0.2,-78.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FEDEB9").s().p("AmCMkQkKgUiqh3QhQg8gzhlQghhCgPhPIgGg1IAAgDQgFg9ACg8QAIl8EHkjIAngpQBBg+BJgxQEEivElgBQAUAAAVABQEPAGDyCdQBKAwBDA8QA0AzAtA3QD0EtgQGJIgBAYQgEAwgGAvIgIAtQgVBQgqBAQhBBnhmAzIgNAGIgEACQiMBBi+AOQjJAOjIAAQjHAAjJgOg");
	this.shape_134.setTransform(-0.1,-82.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FEDEB9").s().p("AmRNJQkUgXigiQQhNhGgthsQgehEgOhRIgHg2IAAgEQgGg+AAg9QAEmEEIkqIAogrQBDg/BKgzQELi0EoABIAqAAQERAJD4CkQBLAyBDA+QA1A1AsA5QDyE3gaGTIgCAYQgEAygIAvQgEAXgGAXQgVBSgnBCQg+BrhkA9IgNAIIgEACQiKBOjFARQjNAQjMAAQjLAAjNgQg");
	this.shape_135.setTransform(-0.1,-86.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FEDEB9").s().p("AmUNVQoNgyg4oYQg0npFWlmQBCg+BJgzQELi1EhAEQEigEELC1QBJAzBCA+QFWFmgzHpQg5IYoNAyQjLATjKAAQjJAAjLgTg");
	this.shape_136.setTransform(0,-88.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FEDEB9").s().p("AmIM8Qn+gxg3oIQgynbFMlbQBAg9BHgxQEDivEZADQEagDEDCvQBHAxBAA9QFMFbgyHbQg3IIn9AxQjGASjEAAQjDAAjFgSg");
	this.shape_137.setTransform(0,-86);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FEDEB9").s().p("Al9MjQnugvg1n4QgxnNFClRQA+g7BFgwQD8iqEQADQERgDD8CqQBFAwA+A7QFCFRgxHNQg1H4nuAvQjAASi+AAQi9AAjAgSg");
	this.shape_138.setTransform(0,-83.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FEDEB9").s().p("AlxMLQnfgugznpQgwm/E4lGQA8g5BDguQD0ilEIADQEJgDDzClQBDAuA9A5QE3FGguG/Qg0HpnfAuQi5ARi5AAQi3AAi6gRg");
	this.shape_139.setTransform(0,-81);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F1C27D").s().p("AlxMLQnfgugznpQgwm/E4lGQA8g5BDguQD0ilEIADQEJgDDzClQBDAuA9A5QE3FGguG/Qg0HpnfAuQi5ARi5AAQi3AAi6gRg");
	this.shape_140.setTransform(0,-81);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C68642").s().p("AlxMLQnfgugznpQgwm/E4lGQA8g5BDguQD0ilEIADQEJgDDzClQBDAuA9A5QE3FGguG/Qg0HpnfAuQi5ARi5AAQi3AAi6gRg");
	this.shape_141.setTransform(0,-81);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#8D5524").s().p("AlxMLQnfgugznpQgwm/E4lGQA8g5BDguQD0ilEIADQEJgDDzClQBDAuA9A5QE3FGguG/Qg0HpnfAuQi5ARi5AAQi3AAi6gRg");
	this.shape_142.setTransform(0,-81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115}]}).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[]},51).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_129}]},3).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},59).to({state:[{t:this.shape_141}]},3).to({state:[{t:this.shape_142}]},3).to({state:[{t:this.shape_142}]},16).to({state:[{t:this.shape_142}]},8).to({state:[]},36).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.3,-106.5,137.8,296.5);


// stage content:
(lib.popup_character_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{choice_1:283,choice_0:302});

	// timeline functions:
	this.frame_282 = function() {
		this.stop();
		utilities.pop_up_motion_callback("pause");
	}
	this.frame_301 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}
	this.frame_303 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(282).call(this.frame_282).wait(19).call(this.frame_301).wait(2).call(this.frame_303).wait(1));

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1).p("EgicAAAMBE5AAA");
	this.shape.setTransform(209.5,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(304));

	// Calque 1
	this.instance = new lib.character("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(207.1,86.3,0.573,0.573,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({startPosition:40},0).wait(1).to({startPosition:40},0).to({regY:0,scaleX:0.62,scaleY:0.62,x:207.7,y:114.7,startPosition:66},25).to({_off:true},217).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187.1,125.2,445,176.9);
// library properties:
lib.properties = {
	width: 400,
	height: 200,
	fps: 60,
	color: "#993399",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;