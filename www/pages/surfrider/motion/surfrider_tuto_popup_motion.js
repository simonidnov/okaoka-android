(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 200,
	fps: 50,
	color: "#0095A7",
	manifest: []
};



// symbols:



// stage content:
(lib.surfrider_tuto_popup_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{choice_0:248});

	// timeline functions:
	this.frame_247 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_249 = function() {
		this.stop();
		utilities.pop_up_motion_callback("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(247).call(this.frame_247).wait(2).call(this.frame_249).wait(1));

	// Mode Isolation
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq4HSQgGgEgCgGQAAgGAEgGQAHgIAQgCIAZAAIHigDIB4gHIA7gGQAvgGAtgJQA4gLA2gWQAXgIAggQQAbgOAagSQA1gkAlglQAlgmAdguQAcguAOgyQAQg7gHg1QgHg4gegwQgdgugtggQgughg4gNQg7gPg/AGQg8AGg4AWQg0ATgxAiQgwAggsAsQgoAogfAyQgeAvgUAyIgTApQgTAggagCQgMgBgKgLQgHgKgBgOQAAgLADgNIAHgXQANgqAUgsQAVguAaguQAdgzAhgoQAMgPAcgdIArgoQArglA0ghQAxgfAzgUQA4gXA8gLQA9gLA6ADQA7ADA6ASQAxAQAtAdQAtAfAgAlQAlAqAVAyQAWAzAEA6QACAZgCAdQgDA3gWA4QgRAvgbAsQgcAsgkApQglApgrAiQgrAjg5AiQgTALghAQIg2AWQgtARg/AQQg1ANgwAIQgnAGgvAFIhaAGIhNADInjADQgaAAgKgIg");
	this.shape.setTransform(200.5,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkkCFQgJgCgDgFQgDgFAFgGQAGgEAPAAIDLgCQA4gCAlgFQA4gGAugLQAegHAXgLQAcgNATgTQAWgXADgUQACgOgGgLQgFgLgNgGQgXgKghAOQgPAHgKAHIgUARQgUARgSABQgQACgHgJQgHgKAEgPQACgGAHgLQAIgKAJgKQATgUAagSQAagQAbgHQAggIAcAGQAbAFATAUQATAVACAdIAAAKQgEAvgvArQgWAUgaAOQgRAIgkALQgrANg1AIQgmAFg3AFIhPADg");
	this.shape_1.setTransform(192.1,119.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmnEOQgPAAgEgBQgSgFABgMQABgLASgEIAKgBIE4AAIBKgEQAwgDArgGQA3gIAlgLIAvgPQAfgMAXgPQA0ggAggsQAjgxADgwQACgegKgaQgKgYgUgUQgmgng/gDQg5gDg7AeQgaANgXASQgXARgVAXQgQAUgQAbQgNAUgGAHQgVAZgZgCQgNgBgIgLQgHgKABgOQAAgMAOgdQAIgTASgdQAOgWAUgYQAPgRAagZQAtgoA0gZQA6gbA4gFQBBgGA3AXQAzAUAhArQAjAsAFA7QADAwgTAvQgSAugjApQgjApgyAjQgaASgYALQgYAMgbAJQgsAPg0AKQgrAIg4AFQgsAFhEACQghACgiAAg");
	this.shape_2.setTransform(194.1,112.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(250));

	// Calque 16
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,0,3).p("A/YAAMA+xAAA");
	this.shape_3.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.6,152.6,407,150);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;