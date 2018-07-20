(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.mustach_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAZWJQoXgOm/hfQpgiBiPjrQiPjshxrzQgPhjglo4QgOjfgGhSQgXjqAlhXQAuhTBzAGQg1DeACBiQAJC+AsDxQBaHkC4ECQDUEtDBBfQC2BZBGiDQBRiVCkiEQDCiaCwAAQEBAAIbATIAvAHQA7ANA5AfQC2BjBkDvQBoD5C5hQQB6g2CZifQCZifBxjuQBxjwACkRIAGpiQAEi3gkhEQC5ADAFDVIAJMhQABGpgQC6QgkGSicDnQh2CtjfB0QjoB5mjBTQmHBMleAAIhRgBgACTLWQAaAfAVBJQAXBNARAZQAgAvBAAAQCLAAA9ixQA4ilg0isQgpiGjMghQhAgLhIACIg8ADQh+gJiHAQQkOAhgjB+QgwCuAvCiQA2C5CVAAQBHAAAjgvQAUgbAVhLQAVhLAWgdQAmguBLAAQBMAAAnAug");
	this.shape.setTransform(2.7,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.9,-136.7,409.3,283.8);


(lib.barbes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.hair_color = new lib.mustach_15();
	this.hair_color.setTransform(-2.7,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.hair_color).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.6,-141.9,409.3,283.8);


// stage content:
(lib.barbes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.barbes = new lib.barbes_1();
	this.barbes.setTransform(201.6,260);

	this.timeline.addTween(cjs.Tween.get(this.barbes).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(197,318.1,409.3,283.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;