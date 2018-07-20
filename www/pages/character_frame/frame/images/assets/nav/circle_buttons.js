(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 50,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.icon_nav_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{right:0,left:1,top:2,bottom:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,0,1).p("AhMiTICSCTIiSCU");
	this.shape.setTransform(0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,0,1).p("ABNCUIiSiUICSiT");
	this.shape_1.setTransform(-2.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,0,1).p("AiTBNICTiSICUCS");
	this.shape_2.setTransform(-1,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,0,1).p("ACUhMIiUCSIiTiS");
	this.shape_3.setTransform(-1.3,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-17.3,19.9,34.7);


(lib.hitter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(55));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AiwCxQhIhKgBhnQABhmBIhKQBKhIBmgBQBnABBKBIQBIBKABBmQgBBnhIBKQhKBIhnABQhmgBhKhIg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("AiwCxQhJhKAAhnQAAhmBJhKQBKhJBmAAQBnAABKBJQBJBKAABmQAABnhJBKQhKBJhnAAQhmAAhKhJg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.098)").s().p("AixCyQhJhLAAhnQAAhmBJhLQBLhJBmAAQBnAABLBJQBJBLAABmQAABnhJBLQhLBJhnAAQhmAAhLhJg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.098)").s().p("AiyCzQhJhLAAhoQAAhnBJhLQBLhJBnAAQBoAABLBJQBJBLAABnQAABohJBLQhLBJhoAAQhnAAhLhJg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.098)").s().p("AizC0QhKhLAAhpQAAhoBKhLQBLhKBoAAQBpAABLBKQBKBLAABoQAABphKBLQhLBKhpAAQhoAAhLhKg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.098)").s().p("Ai1C2QhLhMgBhqQABhpBLhMQBMhLBpgBQBqABBMBLQBLBMABBpQgBBqhLBMQhMBLhqABQhpgBhMhLg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.098)").s().p("Ai4C5QhMhNAAhsQAAhrBMhNQBNhMBrAAQBsAABNBMQBMBNAABrQAABshMBNQhNBMhsAAQhrAAhNhMg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.098)").s().p("Ai7C8QhOhPAAhtQAAhsBOhPQBPhOBsAAQBtAABPBOQBOBPAABsQAABthOBPQhPBOhtAAQhsAAhPhOg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.094)").s().p("Ai+C/QhPhQAAhvQAAhuBPhQQBQhPBuAAQBvAABQBPQBPBQAABuQAABvhPBQQhQBPhvAAQhuAAhQhPg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.094)").s().p("AjCDDQhRhRAAhyQAAhxBRhRQBRhRBxAAQByAABRBRQBRBRAABxQAAByhRBRQhRBRhyAAQhxAAhRhRg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.094)").s().p("AjGDHQhShSAAh1QAAh0BShSQBShSB0AAQB1AABSBSQBSBSAAB0QAAB1hSBSQhSBSh1AAQh0AAhShSg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.094)").s().p("AjLDMQhUhVAAh3QAAh2BUhVQBVhUB2AAQB3AABVBUQBUBVAAB2QAAB3hUBVQhVBUh3AAQh2AAhVhUg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.094)").s().p("AjQDRQhXhXAAh6QAAh5BXhXQBXhXB5AAQB6AABXBXQBXBXAAB5QAAB6hXBXQhXBXh6AAQh5AAhXhXg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.094)").s().p("AjWDXQhZhZAAh+QAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.09)").s().p("AjdDeQhahdgBiBQABiABahdQBdhaCAgBQCBABBdBaQBaBdABCAQgBCBhaBdQhdBaiBABQiAgBhdhag");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.09)").s().p("AjjDkQhehfAAiFQAAiEBehfQBfheCEAAQCFAABfBeQBeBfAACEQAACFheBfQhfBeiFAAQiEAAhfheg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.09)").s().p("AjqDrQhhhiAAiJQAAiIBhhiQBihhCIAAQCJAABiBhQBhBiAACIQAACJhhBiQhiBhiJAAQiIAAhihhg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.09)").s().p("AjyDyQhjhkAAiOQAAiNBjhlQBlhjCNAAQCOAABkBjQBkBlAACNQAACOhkBkQhkBkiOAAQiNAAhlhkg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.086)").s().p("Aj6D7QhnhpAAiSQAAiRBnhpQBphnCRAAQCSAABpBnQBnBpAACRQAACShnBpQhpBniSAAQiRAAhphng");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.086)").s().p("AkCEDQhrhsAAiXQAAiWBrhsQBshrCWAAQCXAABsBrQBrBsAACWQAACXhrBsQhsBriXAAQiWAAhshrg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.086)").s().p("AkLEMQhvhvABidQgBicBvhvQBvhvCcABQCdgBBvBvQBvBvgBCcQABCdhvBvQhvBvidgBQicABhvhvg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.082)").s().p("AkUEVQhzhzAAiiQAAihBzhzQBzhzChAAQCiAABzBzQBzBzAAChQAACihzBzQhzBziiAAQihAAhzhzg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.082)").s().p("AkeEfQh2h3AAioQAAinB2h3QB3h2CnAAQCoAAB3B2QB2B3AACnQAACoh2B3Qh3B2ioAAQinAAh3h2g");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.082)").s().p("AkoEpQh7h7AAiuQAAitB7h7QB7h7CtAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQitAAh7h7g");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.078)").s().p("AkzE0Qh/iAAAi0QAAizB/iAQCAh/CzAAQC0AACAB/QB/CAAACzQAAC0h/CAQiAB/i0AAQizAAiAh/g");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.078)").s().p("Ak/FAQiDiFAAi7QAAi6CDiFQCFiDC6AAQC7AACFCDQCDCFAAC6QAAC7iDCFQiFCDi7AAQi6AAiFiDg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.075)").s().p("AlKFLQiIiKgBjBQABjACIiKQCKiIDAgBQDBABCKCIQCICKAADAQAADBiICKQiKCIjBAAQjAAAiKiIg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.075)").s().p("AlWFXQiNiPgBjIQABjHCNiPQCPiNDHgBQDIABCPCNQCNCPABDHQgBDIiNCPQiPCNjIABQjHgBiPiNg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.075)").s().p("AljFkQiSiVAAjPQAAjOCSiVQCViSDOAAQDPAACVCSQCSCVAADOQAADPiSCVQiVCSjPAAQjOAAiViSg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.071)").s().p("AlwFwQiXiYgBjYQABjXCXiZQCZiXDXgBQDYABCYCXQCYCZABDXQgBDYiYCYQiYCYjYABQjXgBiZiYg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.071)").s().p("Al9F+QieifAAjfQAAjeCeifQCfieDeAAQDfAACfCeQCeCfAADeQAADfieCfQifCejfAAQjeAAifieg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.067)").s().p("AmLGMQikilABjnQgBjmCkilQClikDmABQDngBClCkQCkClgBDmQABDnikClQilCkjngBQjmABilikg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.067)").s().p("AmaGbQioirAAjwQAAjvCoirQCrioDvAAQDwAACrCoQCoCrAADvQAADwioCrQirCojwAAQjvAAiriog");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.063)").s().p("AmoGpQiwixAAj4QAAj3CwixQCxiwD3AAQD4AACxCwQCwCxAAD3QAAD4iwCxQixCwj4AAQj3AAixiwg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.059)").s().p("Am4G4Qi1i3AAkBQAAkAC1i4QC4i1EAAAQEBAAC3C1QC2C4AAEAQAAEBi2C3Qi3C2kBAAQkAAAi4i2g");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.059)").s().p("AnIHJQi8i+AAkLQAAkKC8i+QC+i8EKAAQELAAC+C8QC8C+AAEKQAAELi8C+Qi+C8kLAAQkKAAi+i8g");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.055)").s().p("AnYHZQjCjFAAkUQAAkTDCjFQDFjCETAAQEUAADFDCQDCDFAAETQAAEUjCDFQjFDCkUAAQkTAAjFjCg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.055)").s().p("AnoHpQjKjLAAkeQAAkdDKjLQDLjKEdAAQEeAADLDKQDKDLAAEdQAAEejKDLQjLDKkeAAQkdAAjLjKg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.051)").s().p("An5H6QjRjSAAkoQAAknDRjSQDSjREnAAQEoAADSDRQDRDSAAEnQAAEojRDSQjSDRkoAAQknAAjSjRg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.047)").s().p("AoLIMQjYjaAAkyQAAkxDYjaQDajYExAAQEyAADaDYQDYDaAAExQAAEyjYDaQjaDYkyAAQkxAAjajYg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.047)").s().p("AodIeQjfjiAAk8QAAk7DfjiQDijfE7AAQE8AADiDfQDfDiAAE7QAAE8jfDiQjiDfk8AAQk7AAjijfg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.043)").s().p("AovIwQjnjpgBlHQABlGDnjpQDpjnFGgBQFHABDpDnQDnDpAAFGQAAFHjnDpQjpDnlHAAQlGAAjpjng");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.039)").s().p("ApCJDQjvjwAAlTQAAlSDvjwQDwjvFSAAQFTAADwDvQDvDwAAFSQAAFTjvDwQjwDvlTAAQlSAAjwjvg");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.039)").s().p("ApWJXQj2j5gBleQABldD2j5QD5j2FdgBQFeABD5D2QD2D5AAFdQAAFej2D5Qj5D2leAAQldAAj5j2g");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.035)").s().p("ApqJrQj/kBABlqQgBlpD/kBQEBj/FpABQFqgBEBD/QD/EBgBFpQABFqj/EBQkBD/lqgBQlpABkBj/g");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.031)").s().p("Ap+J/QkHkJAAl2QAAl1EHkJQEJkHF1AAQF2AAEJEHQEHEJAAF1QAAF2kHEJQkJEHl2AAQl1AAkJkHg");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.031)").s().p("AqTKUQkQkSAAmCQAAmBEQkSQESkQGBAAQGCAAESEQQEQESAAGBQAAGCkQESQkSEQmCAAQmBAAkSkQg");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.027)").s().p("AqoKpQkZkbAAmOQAAmNEZkbQEbkZGNAAQGOAAEbEZQEZEbAAGNQAAGOkZEbQkbEZmOAAQmNAAkbkZg");

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.024)").s().p("Aq9K+QkikkAAmaQAAmZEikkQEkkiGZAAQGaAAEkEiQEiEkAAGZQAAGakiEkQkkEimaAAQmZAAkkkig");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.02)").s().p("ArULVQkqkugBmnQABmmEqkuQEukqGmgBQGnABEuEqQEqEuABGmQgBGnkqEuQkuEqmnABQmmgBkukqg");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.016)").s().p("ArqLrQk0k2AAm1QAAm0E0k2QE2k0G0AAQG1AAE2E0QE0E2AAG0QAAG1k0E2Qk2E0m1AAQm0AAk2k0g");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.016)").s().p("AsCMDQk9lBAAnCQAAnBE9lBQFBk9HBAAQHCAAFBE9QE9FBAAHBQAAHCk9FBQlBE9nCAAQnBAAlBk9g");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.012)").s().p("AsZMaQlHlKAAnQQAAnPFHlKQFKlHHPAAQHQAAFKFHQFHFKAAHPQAAHQlHFKQlKFHnQAAQnPAAlKlHg");

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.008)").s().p("AsxMyQlRlUAAneQAAndFRlUQFUlRHdAAQHeAAFUFRQFRFUAAHdQAAHelRFUQlUFRneAAQndAAlUlRg");

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.004)").s().p("AtKNLQlaleAAntQAAnsFaleQFelaHsAAQHtAAFeFaQFaFeAAHsQAAHtlaFeQleFantAAQnsAAlelag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


// stage content:
(lib.circle_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.icon = new lib.icon_nav_shape();
	this.icon.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AiwCwQhIhJgBhnQABhmBIhJQBKhKBmABQBngBBKBKQBJBJAABmQAABnhJBJQhKBKhngBQhmABhKhKg");
	this.shape.setTransform(-1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// hit
	this.hitter = new lib.hitter();
	this.hitter.setTransform(-1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.hitter).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.5,50,50);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;