(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#996600",
	manifest: []
};



// symbols:



(lib.tete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AAjCMIhmgMQgYgDgQgTQgPgTADgZIASiVQACgYAUgQQAUgPAYADIBmAMQAZADAQATQAPAUgDAYIgSCVQgDAZgTAPQgUAPgZgDg");
	this.shape.setTransform(0,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-30.7,46.5,36.2);


(lib.bras = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1).p("AiTgYQA+ALBMANQBKALBTAO");
	this.shape.setTransform(0,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-7.6,34.8,10.1);


(lib.discs_progress_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al2F3IAArtILsAAIAALtg");
	mask.setTransform(1.1,-26.1);

	// Calque 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiJA7IgBgDQAAgGAEgEQAEgEAGAAQAFAAADACQACgNAJgLQAMgLAQAAQAOAAALAJQAKgKAMgDQACgTAPgPQAOgQAYAAQAXAAAQAQIAHAHQAGgBAIAAQAWAAAPAPQARAOAAAXQAAARgKANgAhogkQgEgEAAgFQAAgFAEgFQAEgDAGgBQAFABAEADQAEAFAAAFQAAAFgEAEQgEAEgFABQgGgBgEgEgAgYgkQgDgDAAgFQAAgFADgDQAEgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgEgEg");
	this.shape.setTransform(-12,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB/A5IAAgCIgBAAIgCACIjeAAIAAgCIAAgCQAAgOAJgJQAKgKANAAQAGAAAGACQgEgHAAgIQAAgNALgLQAKgKAPAAQAPAAAIAKQAFAFADAGQAMgJAPAAIACAAIAAgFQAAgJAGgHQAHgGAJgBQAJABAGAGIAFAFQAGgCAIAAQAVAAAPAPQAPAPAAAUIAAACIAJgBQAMAAAIAIQAIAIAAAMIgBAJIAAACgAiVA5IgBgCQgBgEAAgFQAAgKAHgIQAIgGAKgBQAKABAIAGQAIAIAAAKQAAAFgCAEIgBACgAi1A5IAAgCIAAgBQAAgEACgDQADgCAEAAQADAAADACQADADAAAEIAAABIAAACgAhFgpQgCgCAAgDQAAgDACgDQACgBADAAQAEAAACABQACADAAADQAAADgCACQgCACgEAAQgDAAgCgCgAiWgqQgCgCAAgEQAAgDACgCQAEgDADgBQADABADADQADACAAADQAAAEgDACQgDADgDAAQgDAAgEgDg");
	this.shape_1.setTransform(-12,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFA4IgCgCIgCACIhfAAIAAgFQAAgLAIgIQAHgHALAAQALAAAHAHIAGAHIACgDQAEgEAGAAIABAAIACgDIABgBQgHgCgFgFQgGgGgBgKQABgHAGgHQAHgHAKAAQAKAAAGAHQAEADACAFQAJgHAKAAQALAAAJAGQAKgGAMAAQAMAAAKAGQACgEADgDQAOgOAVAAQAUAAAOAOQAPANAAAUQAAATgMANgAiZA4IAAgBQAAgHADgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAABgAAmgMQgDgEAAgGQAAgGADgEQAEgEAGAAQAHAAADAEQAFAEAAAGQAAAGgFAEQgDAEgHAAQgGAAgEgEgAhPgsIgBgDIABgEIADgBIAEABIABAEIgBADQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAgAifguQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAAAgBIAEgBIAEABQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_2.setTransform(-17.3,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhtA1IgBgBIgCABIgIAAIgEgCIgCABIgBABIgMAAIgBgBQgDgDAAgEQAAgEADgDQADgDAEAAIAFABIACgFQAEgDAGAAIADAAIAEgGQAHgHAJAAQAJAAAHAHIADAEQAHgHALAAQAFAAAFACQACgIAGgGQAJgHAOAAQANAAAHAHQAFAGACAHIABAAQAIAAAGAFQADgJAGgHQAJgJANAAQAFgMALgKQATgUAcAAQAbAAAUAUQATATAAAaQAAARgHANgAi6A1IAAgFQAAgGAEgFQAFgFAHAAQAHAAAFAFQAFAFAAAGIgBAFgAiHgRQgFgFAAgGQAAgGAFgEQAEgFAHAAQAFAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgFAAQgHAAgEgEgAgxghQgEgDAAgFQAAgFAEgDQADgDAFAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgFAAgDgDg");
	this.shape_3.setTransform(-14.5,6.8);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(2));

	// Calque 1
	this.instance = new lib.tete();
	this.instance.setTransform(10,-44.5,1,1,-9,0,0,8.8,-12.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-42.5},0).wait(1).to({y:-40.5},0).wait(1).to({y:-38.7},0).wait(1).to({y:-37},0).wait(1).to({y:-42.5},0).wait(1).to({y:-44.5},0).wait(1).to({y:-47.5},0).wait(1));

	// Calque 2
	this.instance_1 = new lib.bras();
	this.instance_1.setTransform(1.5,-21.2,1,1,-6.7,0,0,0,-2.6);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-19.2},0).wait(1).to({y:-17.2},0).wait(1).to({y:-15},0).wait(1).to({y:-14.7},0).wait(1).to({y:-18.5},0).wait(1).to({y:-20.5},0).wait(1).to({y:-23.5},0).wait(1));

	// Calque 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1).p("AhKg1QB9ANAYBe");
	this.shape_4.setTransform(6.7,-7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1).p("AgThPQA4A9gYBi");
	this.shape_5.setTransform(1.1,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1).p("AAdhQQAeBzheAu");
	this.shape_6.setTransform(-3.9,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1).p("ABPgxQgsBzhxgS");
	this.shape_7.setTransform(-8.8,-3.6);

	this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{y:-7.5}}]}).to({state:[{t:this.shape_4,p:{y:-5.5}}]},1).to({state:[{t:this.shape_4,p:{y:-3.5}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:-3.6}}]},1).to({state:[{t:this.shape_7,p:{y:-5.6}}]},1).to({state:[{t:this.shape_7,p:{y:-8.6}}]},1).wait(1));

	// Calque 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1).p("AhKAkQB5AmAbh2");
	this.shape_8.setTransform(-8.4,-8.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1).p("AggA/QB8g3hthG");
	this.shape_9.setTransform(1,-1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(5,1).p("ABDBIQgSh7hzgU");
	this.shape_10.setTransform(5.9,-0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1).p("ABVBAQgeiKiLAM");
	this.shape_11.setTransform(7.6,-2.4);

	this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{y:-8.4}}]}).to({state:[{t:this.shape_8,p:{y:-6.4}}]},1).to({state:[{t:this.shape_8,p:{y:-4.4}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:-2.4}}]},1).to({state:[{t:this.shape_11,p:{y:-4.4}}]},1).to({state:[{t:this.shape_11,p:{y:-7.4}}]},1).wait(1));

	// Calque 5
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(211,35,138,0)").s().p("Al2F3IAArtILsAAIAALtg");
	this.shape_12.setTransform(1.1,-26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-63.6,75,75);


// stage content:
(lib.okaoka_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.discs_progress_run();
	this.instance.setTransform(143.5,201.5,1,1,0,0,0,37.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(344.6,298.2,75,77.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;