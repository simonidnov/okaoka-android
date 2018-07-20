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


(lib.Z_sleep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjEDVIAKg6ID0kfIjEgBIAPhPIFAAAIgKA5Ij0EhIDEAAIgOBPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Z_sleep, new cjs.Rectangle(-19.7,-21.3,39.5,42.7), null);


(lib.hihi_smile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWDVIBKmpIBjAAIhKGpg");
	this.shape.setTransform(94.5,-19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlDVIAeiyIiRAAIgfCyIhkAAIBKmpIBkAAIgdCpICRAAIAdipIBkAAIhKGpg");
	this.shape_1.setTransform(64.9,-19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWDVIBKmpIBjAAIhKGpg");
	this.shape_2.setTransform(35.5,-19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlDVIAeiyIiRAAIgfCyIhkAAIBKmpIBkAAIgdCpICRAAIAdipIBkAAIhKGpg");
	this.shape_3.setTransform(6,-19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hihi_smile, new cjs.Rectangle(-17.1,-55.5,122.1,74.3), null);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AoEF/QjVjVAAkuQAAkuDVjWQDWjWFCEsQEbksDVDWQDWDWAAEuQAAEujWDVQjVDWkvCNQktiNjXjWg");
	this.shape.setTransform(0,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.heart, new cjs.Rectangle(-73,-60.5,146,147.6), null);


(lib.hats = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKEyQgLgMAAgRIAAgGIgNAAIAAAGQAAARgMAMQgMAMgRAAQgRAAgLgMQgMgMAAgRIAAgWIgGgCIAAAQQAAARgMAMQgMAMgQAAQgRAAgMgMQgMgMAAgRIAAg9Qg0gqgdg7Qgfg9AAhEQAAh6BXhWQBWhXB5AAQB6AABWBXQBXBWAAB6QAABIgiBBQgiA+g6ApIAAAzQAAARgMAMQgLAMgRAAQgRAAgLgMQgMgMAAgRIAAgLIgKADIAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMgAA4gvQgbAaAAAlQAAAmAbAbQAaAbAmAAQAmAAAbgbQAbgbAAgmQAAglgbgaQgbgbgmAAQgmAAgaAbgAiygvQgbAaAAAlQAAAmAbAbQAaAbAmAAQAmAAAbgbQAbgbAAgmQAAglgbgaQgbgbgmAAQgmAAgaAbg");
	this.shape.setTransform(399.9,170.7,1.44,1.44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("Ax0NbQidpgApjtQAgi8CcA4QBvAoCiCdQBRBPA7BIQDZtJDbjAQCwiZCpEMQB5C/BqF/QA1C/AcCZQIOlJDDAXQCbATg+DyQgtCtiVEMQhKCGhCBjg");
	this.shape_1.setTransform(417.7,125.8,1.44,1.44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF029").s().p("AAABnIh+BcIAxiVIh/hbICdAAIAviVIAwCVICdAAIh/BbIAxCVg");
	this.shape_2.setTransform(402,160.5,2.031,2.031);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B46A30").s().p("Av7RyQjRhyiriWQjgjFickDQjrmDjTh8QgvgbgogMIgNgDQB8ALBPAaQB+ArC6CAQCmBzC8BbQBdAuA9AWQGzCUHOA6QC3AXCAAEQjngCjLgWIBEAHQD4AaC1gIIAAgBIBjgDQCCgHCQgSQHOg5GziVIApgQIgBgCIBzgyQC8haClhzQC6iAB/grQBMgZB1gLQAqgOAfAIIghADIgoADIgLAEQgkAMgsAZQjTB8jrGDQidEEjgDEQiqCWjRBxQnUD/oGAAIAAABQoHAAnWj/gAAWJEIBDABQCZgDCcgQIBJgIQjSAXjvADgAuIBKIkzhMIDgtbQA4jZBkiMQBTh1BggsQBKghBfA1QAvAZCBBqQBMA+BsAHQA1ADAngJIAAgBIBbAGQBsgGBMg+QCAhqAxgaQBeg1BKAhQBhAsBSB1QBkCMA4DZIDhNeQh5Ali7AlQmxBWm3AAQm5AAmwhWg");
	this.shape_3.setTransform(405.2,169.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C38134").s().p("AgaEpIgkgBQiAgEi3gXQnOg6mziUIgpgRIBflWIAlAKIEzBNQGwBWG4AAQG4AAGxhWQC7glB5gmIAkgMIBeFUIABACIgpAQQmzCVnOA5QiQASiCAHIhkADIAAABIgaAAg");
	this.shape_4.setTransform(402,197.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#884524").s().p("AbUA0QDrmCDTh9QAsgaAkgMQAZgFAagCIAhgCIAlALQAuAQAmAZQB2BPgGCFQgLDzjVC5Qk7ESqtAvQDgjECdkDgEgk+AC6QjVi6gLjyQgGiFB2hPQAmgZAugQQAWgIAPgDQAnABAmAGQAoAMAvAcQDTB9DrGCQCcECDgDFQqsgvk7kSg");
	this.shape_5.setTransform(402,206);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2A738").s().p("AWHgdInjGJInSmLIo8GEIpwkyIq9EyIogmLIqFDfIlomhImFENIg5hRIHPlBIF2GxIJ3jaIIcGIIKyksIJmEsIJLmOIHMGGIHjmJIHPGHIIXnwIJUFZIFUmbIBNA/ImKHdIpdlfIoiH7g");
	this.shape_6.setTransform(390.7,231.4,0.629,0.629);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FED152").s().p("AtoCuQlqgqAAg8IAAkfQBUAaDFAaQGJAzIwAAQIxAAGJgzQDFgaBUgaIAAEfQAAA8lpAqQlqAqoAAAQn/AAlpgqg");
	this.shape_7.setTransform(391,232.5,1.731,1.731);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEC73D").s().p("AonH4QAUikAfi4QA+luAxhmQA6h7A4gjQA8glCHAFICHgBQBQgBAvAKQCFAcApCaQA/DvCFJBg");
	this.shape_8.setTransform(397.1,139.7,1.731,1.731);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8A33E").s().p("AtoBmQlqgqAAg8QAAg7FqgqQFpgqH/AAQIAAAFqAqQFpAqAAA7QAAA8lpAqQlqAqoAAAQn/AAlpgqg");
	this.shape_9.setTransform(391,195,1.731,1.731);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FED76F").s().p("AhIBJQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_10.setTransform(395.7,137.7,2.954,2.954);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5EBFB5").s().p("AgYDNQgogqg/gHQgPgBgJgMQgIgMACgPQAHg2glgoQgJgKAAgMQgBgNAJgLQAlgugGgwQgCgOAJgLQAIgMAOgDQBAgKAqglQAKgKAMAAQANAAAKAKQAqAlBAAKQAOADAIAMQAJALgCAOQgGAwAlAuQAJALgBANQAAAMgJAKQglAoAHA2QADAPgJAMQgJAMgPABQg/AHgoAqQgKAKgPABQgOgBgKgKg");
	this.shape_11.setTransform(397.2,136.1,2.954,2.954);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3F5B71").s().p("AjMFoQiigRhdgjQAAklCHjBQCDi+DBAAQDBAACEC+QCHDBAAElQj0A9jqAAQheAAhcgJg");
	this.shape_12.setTransform(397.3,127,2.954,2.954);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#062437").s().p("Aj4hQICrgQQC+gUBigZIATAQQATAUAAAZQAAAIgGALQgOAWgmAPIlQCQQgNAFgTAGQgmALghAAg");
	this.shape_13.setTransform(470.8,260,2.954,2.954);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#103551").s().p("ACyCDIgggLIlQiQQgmgQgNgVIgHgTQAAgZATgUIATgQQBiAZC+AUQBfAKBMAGIAADeQghAAgmgLg");
	this.shape_14.setTransform(323.8,260.1,2.954,2.954);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#010202").ss(14).p("A4GAAMAwNAAA");
	this.shape_15.setTransform(245.7,298.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AkHFmIAArMIAtAAQDGAACOCOQCNCOABDGIAADqg");
	this.shape_16.setTransform(498.2,171.2,3.747,3.747);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AkGFmIAAjqQAAjGCOiOQCNiODHAAIArAAIAALMg");
	this.shape_17.setTransform(300.8,171.2,3.747,3.747);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhyB0QgxgxAAhCQAAhDAxgvQAvgxBDAAQBEAAAwAxQAwAvAABDQAABCgwAxQgwAvhEAAQhDAAgvgvg");
	this.shape_18.setTransform(402.1,34.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5F391A").s().p("AhuBvQguguAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAABBguAuQguAuhBAAQhAAAgugug");
	this.shape_19.setTransform(436.3,131.1,0.72,0.72);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AkQEQQhwhxAAifQAAifBwhwQBxhxCfAAQCgAABwBxQBxBwAACfQAACfhxBxQhwBxigAAQifAAhxhxg");
	this.shape_20.setTransform(436.3,131.1,0.72,0.72);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5F391A").s().p("AhtBvQgvguAAhBQAAhAAvguQAtguBAAAQBBAAAtAuQAvAugBBAQABBBgvAuQgtAuhBAAQhAAAgtgug");
	this.shape_21.setTransform(370.3,131.1,0.72,0.72);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AkPEQQhxhxAAifQAAifBxhwQBxhxCeAAQCfAABxBxQBxBwAACfQAACfhxBxQhxBxifAAQieAAhxhxg");
	this.shape_22.setTransform(370.3,131.1,0.72,0.72);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5F391A").s().p("Ay5X/Qj4AAiwiwQiwiwAAj4IAAAAQAAjxCoivQCpiuDwgJQg0hKgbhWQgchYAAhcIAAAAQAAjQCBijQCAihDEgyQgEgqAAgkIAAAAQgBipBZiQQBWiMCRhNIJek7IAjgMQAsgNApAAQCCgCA8B6QAoBSgGBJQDfAbCXCqQCYCqAADkIAAAAQAAAjgEApQDHAwCCCiQCECkAADSIAAAAQAABdgcBYQgcBWg0BKQDpARChCsQCiCtAADsIAAAAQAAD4iwCwQiwCwj4AAg");
	this.shape_23.setTransform(398,118.1,0.72,0.72);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Aj6D7QhohoAAiTQAAiSBohoQBohoCSAAQCTAABoBoQBoBoAACSQAACThoBoQhoBoiTAAQiSAAhohog");
	this.shape_24.setTransform(459.6,188.6,0.352,0.352);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Aj6D7QhohoAAiTQAAiSBohoQBohoCSAAQCTAABoBoQBoBoAACSQAACThoBoQhoBoiTAAQiSAAhohog");
	this.shape_25.setTransform(459.6,188.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Aj6D7QhohoAAiTQAAiSBohoQBohoCSAAQCTAABoBoQBoBoAACSQAACThoBoQhoBoiTAAQiSAAhohog");
	this.shape_26.setTransform(352.6,188.6,0.352,0.352);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Aj6D7QhohoAAiTQAAiSBohoQBohoCSAAQCTAABoBoQBoBoAACSQAACThoBoQhoBoiTAAQiSAAhohog");
	this.shape_27.setTransform(352.6,188.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#996600").s().p("EgqZAq9Qgxgqgmg6IgcgxQjZnTDFnyQBKi9CMjQQBVh+ChjLQCmjQBjlSQk7mZAAn4QAAg8AEg7MAAAghxIVxJPQDwhgEHg4QF1hPGhAAQLKAAJEDnIVxpPMgABAhxQAFA7AAA8QAAMbsVIyIgXARQAEgzAAg1QAAqOpFnNQpFnPs1AAQs1AApEHPQouG7gWJsQg1gtgwguQhrETiXD3QiSDvAqFYQAdDrBzEQQBbDYgjCKQgqCmjgBbQhMAfhGAAQhxAAhghSg");
	this.shape_28.setTransform(382,341.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFBE5").s().p("Ag6BNQgpghADgsQADgmAigfQAigeAmACQAsABAZAsIAEAHQARAhgIAhQgHAggaAVQgZAWggACIgFAAQgfAAgbgVg");
	this.shape_29.setTransform(501.1,91.6,1.555,1.555);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFBE5").s().p("ApaAgQgpgcgHgtQgHgqAXgmQAWgnAmgMQApgNAqAdQC/CDExgMQD6gJEIhhQAvgRAlAXQAhAVAMArQALArgQAmQgTArgvARQiKAzivAaQiBATjAALQgeACgfAAQkTAAjRiRg");
	this.shape_30.setTransform(400.8,220.1,1.555,1.555);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D22330").s().p("AmpI6QAYmpCPlSQAyh3AzhLQBEhiBYg0QAVgNAjgQQBKgLBTAYQBCATBRAtQAoBdAaB6QAGAZgYAIQgYAJgMgWQhbiwhhAVQhqAXBtHgQA2DwBMDsg");
	this.shape_31.setTransform(436,130.3,1.555,1.555);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E73849").s().p("ApMKXQBOkGBykjQDlpFC3iPIBEgeQBVgbBNANQD6AsBcGxQAFAZgYAIQgYAJgLgWQhbiwhhAVQhqAXBsHgQA3DwBLDsg");
	this.shape_32.setTransform(410.7,115.9,1.555,1.555);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEFBE5").s().p("AgQCEQgYgBgWgOQgWgKgRgXQgQgUgIgaQgNgmARgtQADgNAHgNQAWgoA1gRQAjgMAoAPQASAGANAHQAuAXAMA4QANA1gcArIgFAJQgKAUgWAQQgUAQgXAGQgOAEgPAAQgJAAgLgCg");
	this.shape_33.setTransform(639.3,569.9,3.098,3.098);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEFBE5").s().p("AgPB1QkngEjehUQgfgLgMgcQgLgaAIgdQAIgdAWgNQAYgPAfAMQB9AvB5AUQB1ATCIgDQBwgDCNgIID9gPQAhgCATAVQASAUAAAcQAAAegSAVQgTAYghACQixANhYAFQiDAIhkAAIgfAAg");
	this.shape_34.setTransform(376.5,291.2,3.098,3.098);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D22330").s().p("ADKIkQgXgEgEgXQhmpqhbj9QgRgwgzAJQgzAJAAAzIhiACQAIgpAbgyQAcg1AigiQBZhZA9BeQAzBPAkCAQARA7AhCiQAjCnATBgIARCsQALBtAFA/QgKAOgRAAIgHgBg");
	this.shape_35.setTransform(572.4,402.4,3.098,3.098);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E73849").s().p("AJnL6Qhmprhcj8QgRgwgzAJQgzAJAAAzIvdAOQAAhmAhhgQAihhBAhOQB3iSCghWQDShxEFADQFHADBxJDQBLGBgcJEQgCAegeACIgDAAQgbAAgEgcg");
	this.shape_36.setTransform(436.2,327.8,3.098,3.098);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#57B99B").s().p("AeKLPQjSnmmJltQouoKr+A4Qq4AzpxHtQmfFHj1GcQB4ohGkmkQEckbFViTQFyiEGnAAQHRAAGQCfQEyCRECECQHhHgBZKDQgXg/gag9g");
	this.shape_37.setTransform(402.1,250.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#269B75").s().p("Ad1PMQgckPhqkOQgQgogRgnQjYntmlk7Qjyi0kShdIpFhbIgFAAIgJAAQsmAAo8I8QkSERiOFHQh/EhgYFLIg2AAQgIhgAAhjQAAjvAxjcQD1mbGflIQJxntK4gzQL+g4IuIKQGJFuDSHlQAaA9AXA+QAVCTAACbQAABjgIBgg");
	this.shape_38.setTransform(400.7,286.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D22330").s().p("AkvGrQgVgJgFgUQANgEAKgHQAYgRAYgYQCwh9BPkmQBFiogFi8QAPAAALAJQAMAKAAASQADDdhWDLQBHghA/g0QBBg1Ang6QAVgfAiATQAiAUgVAfQg6BWhjBHQhiBIhjAeQhaCjiMB7QgMAKgNAAQgIAAgIgDg");
	this.shape_39.setTransform(605,137.8,2.301,2.301);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D22330").s().p("AELGjQiNh8hZiiQhjgehjhIQhihHg6hWQgVgfAigUQAhgTAVAfQAnA6BBA1QA/A0BHAhQhUjJABjfQABgNAHgKQAHgJAKgDQgJASAgCnQAiCyAjBMQBBCMA6BUQBUB5BiA4QgLAOgQADIgIAAQgOAAgLgKg");
	this.shape_40.setTransform(204.3,138,2.301,2.301);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E73849").s().p("Ak9GhQgbgcAcgZQCmiSBYjDQBXjEgCjcQAAglAnAAQAmAAABAlQACDehVDKQBHghA/gzQBAg2Aog6QAVgfAiAUQAhATgVAgQg6BWhiBHQhiBIhkAeQhaCiiMB8QgNALgNAAQgPAAgPgOg");
	this.shape_41.setTransform(604.7,137.8,2.301,2.301);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E73849").s().p("AEGGkQiNh8hZiiQhjgehjhIQhihHg6hWQgVggAigTQAhgUAVAfQAnA6BBA2QA/AzBHAhQhUjIABjgQABglAnAAQAnAAgBAlQgCDdBXDDQBYDECmCRQAcAZgbAcQgPAOgPAAQgNAAgNgLg");
	this.shape_42.setTransform(205.4,137.8,2.301,2.301);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E73849").s().p("Ap1AkQgtgbgIguQgHgqAXgoQAYgoAogOQAsgPAtAbQDvCOEWgGQEWgGDqiYQAsgdArAOQAoANAXApQAYAogHArQgIAvgsAcQkaC3lZAGIgWAAQlKAAkZing");
	this.shape_43.setTransform(399.5,241.2,2.032,2.032);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#269B75").s().p("AkLJlQgjAAgagGQhUgThFhFQgwgwgihAQgIgQAEgRQAEgSAQgKQByhJCSjGQBJhiAyhUQg1gJgugkQgegYgXghQgFgHACgIQACgIAHgFQBfg4BciFQA7hWAvhkQAhBvAGB6QAGB8gYBxQgQBOg8B3QhJCRgSAwQgHAUAKAVQAJASASANQCIBkC2gIQCkgGCmhaIAXARQAYARAGAdQAFAcgPAZQgkA7gvAqQg+A5hLARQgbAGgjAAg");
	this.shape_44.setTransform(400.6,138.9,2.032,2.032);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#57B99B").s().p("AkLJ3QgjAAgagGQhUgUhFhEQgwgwgihAQgIgQAEgSQAEgSAQgJQByhKCSjFQBJhiAyhUQg1gKgugkQgegYgXggQgFgHACgJQACgIAHgEQBzhFBtiyQA2hYAfhMIALAAQAfBLA2BZQBsCxBzBFQAIAFACAJQACAJgGAIQg9BUhZAQIBzCrQCKC9BvBQQAYARAGAdQAFAcgPAZQgkA7gvAqQg+A4hLASQgbAGgjAAg");
	this.shape_45.setTransform(400.6,135.4,2.032,2.032);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEFBE5").s().p("AhcB8QgQgLgUgrQgOgfgKggQgTg5AlgrQAhgnA/gMQA9gNA1AVQA7AYASA3IABAEQAKAhgIAjQgHAkgWAcQgmAyhAAQQgWAFgSAAQgrAAgigag");
	this.shape_46.setTransform(329.5,50,2.262,2.262);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEFBE5").s().p("Ak+D/QjmgOiih3QgjgagFgpQgFglATghQAUghAggKQAkgLAjAaQCGBhC6AKQCMAIDIgtQDkgxA9gWQCmg7BFhsQAXglAogGQAkgGAhAUQAiATALAhQAMAlgYAlQhcCQi+BRQhxAwjzA2QjFAsicAAQghAAgegCg");
	this.shape_47.setTransform(387,244,2.262,2.262);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D22330").s().p("ACCHhQingCg3gMQiOgbgVhgQgOg/ARhLQAKguAhhUQAYg/Ang9QBeiaAzhdQAZhTAZhiIABgEQEOD6hJGyQgaCYgpB9g");
	this.shape_48.setTransform(306.4,170.4,2.262,2.262);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E73849").s().p("AjNIAQiogCg3gLQiOgbgVhgQgOg/ARhLQAKgvAhhUQAYg+Ang9QBeiaAzhdQAahTAZhiQAIgiAjgVQAjgVAhANIElBvQDRBPBvBxQB7B8AeC+QANBVgLA3QgOBIg4AwQgyAqhZAfQiBAtiiAPQhjAKiJAAIg+gBg");
	this.shape_49.setTransform(382.3,163.2,2.262,2.262);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#57B99B").s().p("AWMf6QhPgDg4g6Qg1g9AChPQAFhRA6g2QEqkSCjl1IAPgkQiWGClBEpQg7A2gEBRQgDBPA2A9QA1A6BSADIgCAAIgDAAgAUv01QoqoHr8A4QqyAxprHoQlaERjjFMQB6nuGBmBQC7i6DUh9QG0jFIEAAQI6AAHXDxQCtBwCbCbQGWGWByIQQjLmdlYlBg");
	this.shape_50.setTransform(402.3,373.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#269B75").s().p("AbkGgQjWognDlSQjkiokAhcIofhjIhOgBIgDAAQqsgKpjH8IhHBGQnCHBheJTQgEhCAAhEQAAj8A5jlQDilLFakRQJsnpKygxQL8g4IqIHQFYFBDKGcQAsDNAADeQAACogZCdQgakZhtkYg");
	this.shape_51.setTransform(401.7,290.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(35,31,32,0)").s().p("Aq7K8QkjkhABmbQgBmaEjkiQEhkhGagBQGbABEiEhQEhEiABGaQgBGbkhEhQkiEjmbgBQmaABkhkjg");
	this.shape_52.setTransform(347.2,-159);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDB17D").s().p("AAbCHQh7hWgbh6QgPhJgHgyQBGBhBZBPQAzA1A6AtIARAMQgEA7AKAwQg5gSg+gsg");
	this.shape_53.setTransform(220.7,191.2,4.653,4.653,30);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCD0A3").s().p("AASC1Qh7hWgbh6Qgch6AAhHQAAgOANgGQANgGALAJIEcDrIgWBNQgTBcAQBMQg5gTg9grg");
	this.shape_54.setTransform(235.3,175,4.653,4.653,30);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDB17D").s().p("AiMA/QBUgvBIg/QBKhBA3hMQgHAugNA9QgbB6h7BWQgnAbgsAVIgkAOQAMg6gIhEg");
	this.shape_55.setTransform(591.6,200.2,4.654,4.654,-30);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCD0A3").s().p("AiKBLIgWhNIEcjrQALgJAMAGQANAGAAAOQABBCgcB/QgbB6h7BWQgmAbgsAUIgkAPQAPhMgShcg");
	this.shape_56.setTransform(575.5,180.5,4.654,4.654,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).wait(1));

	// Calque 2
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(35,31,32,0)").s().p("Eg+fA+gMAAAh8/MB8/AAAMAAAB8/g");
	this.shape_57.setTransform(400,400);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


(lib.drop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiJDQQg5g5AAhRQAAhQDCj+QDDD+AABQQAABRg5A5Qg5A5hRAAQhQAAg5g5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.drop, new cjs.Rectangle(-19.5,-26.5,39,53), null);


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


(lib.smile_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.hihi_smile();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:2,scaleY:2,x:106.2,y:29.2},9).to({scaleX:0,scaleY:0,x:221.3,y:51.3},5).wait(1));

	// Calque 2
	this.instance_1 = new lib.hihi_smile();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:2,scaleY:2,x:106.2,y:29.2},9).to({scaleX:0,scaleY:0,x:221.3,y:51.3},5).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-55.5,122.1,74.3);


(lib.sleep_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 4
	this.instance = new lib.Z_sleep();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:55.6,y:-5.8},7).wait(1));

	// Calque 3
	this.instance_1 = new lib.Z_sleep();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({regY:-0.1,scaleX:1.99,scaleY:1.99,x:100,y:-10.2},11).to({scaleX:0.81,scaleY:0.81,x:160,y:-0.3},14).wait(1));

	// Calque 2
	this.instance_2 = new lib.Z_sleep();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-0.1,scaleX:1.99,scaleY:1.99,x:100,y:-10.2},13).to({scaleX:0.81,scaleY:0.81,x:160,y:-0.3},14).to({_off:true},1).wait(8));

	// Calque 1
	this.instance_3 = new lib.Z_sleep();
	this.instance_3.parent = this;
	this.instance_3.setTransform(66.7,-6.8,1.657,1.657);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-0.1,scaleX:1.99,scaleY:1.99,x:100,y:-10.2},5).to({scaleX:0.81,scaleY:0.81,x:160,y:-0.3},14).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-42.1,119.2,70.7);


(lib.hearts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// Calque 4
	this.instance = new lib.heart();
	this.instance.parent = this;
	this.instance.setTransform(0,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.5,scaleY:0.5,rotation:45,x:114.1,y:-103.3},18,cjs.Ease.get(0.37)).to({scaleX:0.18,scaleY:0.18,x:275.1,y:-191.3},11).to({_off:true},1).wait(1));

	// Calque 2
	this.instance_1 = new lib.heart();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.67,scaleY:0.67,rotation:-30,x:-153,y:-134.2},18,cjs.Ease.get(0.37)).to({regX:0.1,regY:-0.3,scaleX:0.38,scaleY:0.38,rotation:-75,x:-273.1,y:-200.3},11).to({_off:true},1).wait(1));

	// Calque 1
	this.instance_2 = new lib.heart();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-192},18,cjs.Ease.get(0.37)).to({scaleX:0.29,scaleY:0.29,y:-302},11).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-73.8,146,160.9);


(lib.drop_down_drop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.drop();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:880.2},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-26.5,39,53);


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


(lib.fail_special_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 10
	this.instance = new lib.drop_down_drop("synched",11);
	this.instance.parent = this;
	this.instance.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},13).wait(25).to({_off:false,startPosition:0},0).wait(12));

	// Calque 9
	this.instance_1 = new lib.drop_down_drop("synched",3);
	this.instance_1.parent = this;
	this.instance_1.setTransform(140,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},22).wait(25).to({_off:false,startPosition:0},0).wait(3));

	// Calque 8
	this.instance_2 = new lib.drop_down_drop("synched",21);
	this.instance_2.parent = this;
	this.instance_2.setTransform(520,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},4).wait(25).to({_off:false,startPosition:0},0).wait(21));

	// Calque 7
	this.instance_3 = new lib.drop_down_drop("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(420,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({_off:true},25).wait(8));

	// Calque 6
	this.instance_4 = new lib.drop_down_drop("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(560,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({_off:true},25).wait(22));

	// Calque 5
	this.instance_5 = new lib.drop_down_drop("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(420,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({_off:true},25).wait(14));

	// Calque 4
	this.instance_6 = new lib.drop_down_drop("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-260,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).to({_off:true},25).wait(2));

	// Calque 3
	this.instance_7 = new lib.drop_down_drop("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-120,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({_off:true},25).wait(18));

	// Calque 2
	this.instance_8 = new lib.drop_down_drop("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(100,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).to({_off:true},25).wait(10));

	// Calque 1
	this.instance_9 = new lib.drop_down_drop("synched",0);
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},25).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.5,-26.5,739,823.2);


(lib.special_motions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hearts:1,sleep:10,win:17,fail:22,smile:29});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(45));

	// Calque 1
	this.instance = new lib.hearts();
	this.instance.parent = this;

	this.instance_1 = new lib.sleep_motion();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.6,80.8,1.613,1.584,0,0,-10.8);

	this.instance_2 = new lib.winning_motion();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fail_special_motion();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-138.5,-404.6);

	this.instance_4 = new lib.smile_motion();
	this.instance_4.parent = this;
	this.instance_4.setTransform(159.6,80.8,1.613,1.584,0,0,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},7).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.accessories_assets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// motions
	this.motions = new lib.special_motions();
	this.motions.parent = this;
	this.motions.setTransform(387.1,357.1);

	this.timeline.addTween(cjs.Tween.get(this.motions).wait(1));

	// hats
	this.hats = new lib.hats();
	this.hats.parent = this;
	this.hats.setTransform(400,400,1,1,0,0,0,400,400);

	this.timeline.addTween(cjs.Tween.get(this.hats).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,400,800,800);
// library properties:
lib.properties = {
	width: 800,
	height: 800,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;