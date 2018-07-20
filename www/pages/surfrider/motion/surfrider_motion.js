(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 400,
	fps: 40,
	color: "#FFCC00",
	manifest: []
};



// symbols:



// stage content:
(lib.surfrider_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:169});

	// timeline functions:
	this.frame_0 = function() {
		var status = "play";
	}
	this.frame_144 = function() {
		window['navigation'].intro_motion_stopped();
	}
	this.frame_169 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(144).call(this.frame_144).wait(25).call(this.frame_169).wait(2));

	// Mode Isolation
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq4HSQgGgEgCgGQAAgGAEgGQAHgIAQgCIAZAAIHigDIB4gHIA7gGQAvgGAtgJQA4gLA2gWQAXgIAggQQAbgOAagSQA1gkAlglQAlgmAdguQAcguAOgyQAQg7gHg1QgHg4gegwQgdgugtggQgughg4gNQg7gPg/AGQg8AGg4AWQg0ATgxAiQgwAggsAsQgoAogfAyQgeAvgUAyIgTApQgTAggagCQgMgBgKgLQgHgKgBgOQAAgLADgNIAHgXQANgqAUgsQAVguAaguQAdgzAhgoQAMgPAcgdIArgoQArglA0ghQAxgfAzgUQA4gXA8gLQA9gLA6ADQA7ADA6ASQAxAQAtAdQAtAfAgAlQAlAqAVAyQAWAzAEA6QACAZgCAdQgDA3gWA4QgRAvgbAsQgcAsgkApQglApgrAiQgrAjg5AiQgTALghAQIg2AWQgtARg/AQQg1ANgwAIQgnAGgvAFIhaAGIhNADInjADQgaAAgKgIg");
	this.shape.setTransform(450.5,200,2.928,2.928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkkCFQgJgCgDgFQgDgFAFgGQAGgEAPAAIDLgCQA4gCAlgFQA4gGAugLQAegHAXgLQAcgNATgTQAWgXADgUQACgOgGgLQgFgLgNgGQgXgKghAOQgPAHgKAHIgUARQgUARgSABQgQACgHgJQgHgKAEgPQACgGAHgLQAIgKAJgKQATgUAagSQAagQAbgHQAggIAcAGQAbAFATAUQATAVACAdIAAAKQgEAvgvArQgWAUgaAOQgRAIgkALQgrANg1AIQgmAFg3AFIhPADg");
	this.shape_1.setTransform(426,257.7,2.928,2.928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmnEOQgPAAgEgBQgSgFABgMQABgLASgEIAKgBIE4AAIBKgEQAwgDArgGQA3gIAlgLIAvgPQAfgMAXgPQA0ggAggsQAjgxADgwQACgegKgaQgKgYgUgUQgmgng/gDQg5gDg7AeQgaANgXASQgXARgVAXQgQAUgQAbQgNAUgGAHQgVAZgZgCQgNgBgIgLQgHgKABgOQAAgMAOgdQAIgTASgdQAOgWAUgYQAPgRAagZQAtgoA0gZQA6gbA4gFQBBgGA3AXQAzAUAhArQAjAsAFA7QADAwgTAvQgSAugjApQgjApgyAjQgaASgYALQgYAMgbAJQgsAPg0AKQgrAIg4AFQgsAFhEACQghACgiAAg");
	this.shape_2.setTransform(431.9,236.4,2.928,2.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(694,261.1,413,277.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;