(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 47,
	height: 47,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



// stage content:
(lib.nav_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ham_to_cross:1,cross_to_ham:10,cross_to_back:18,back_to_cross:29});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(8).call(this.frame_17).wait(11).call(this.frame_28).wait(11).call(this.frame_39).wait(1));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiEAAIEJAA");
	this.shape.setTransform(23.5,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhtAmIDbhL");
	this.shape_1.setTransform(23.5,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhYBNICwiZ");
	this.shape_2.setTransform(23.5,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhBBzICDjl");
	this.shape_3.setTransform(23.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhIBtICRjZ");
	this.shape_4.setTransform(23.5,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhPBoICfjP");
	this.shape_5.setTransform(23.5,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhWBjICtjF");
	this.shape_6.setTransform(23.5,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhdBdIC6i6");
	this.shape_7.setTransform(23.5,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhkBGIDJiL");
	this.shape_8.setTransform(23.5,21.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhrAuIDXhb");
	this.shape_9.setTransform(23.5,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhzAWIDngr");
	this.shape_10.setTransform(23.5,18.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ah6AAID1AB");
	this.shape_11.setTransform(23.5,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiBgXIEDAv");
	this.shape_12.setTransform(23.5,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiCgLIEFAX");
	this.shape_13.setTransform(23.5,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhaBaIC1i0");
	this.shape_14.setTransform(23.4,22.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhXBYICuiu");
	this.shape_15.setTransform(23.4,22.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhUBVICpip");
	this.shape_16.setTransform(23.3,21.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhRBSICjij");
	this.shape_17.setTransform(23.2,20.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhOBPICdid");
	this.shape_18.setTransform(23.1,20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhLBMICXiX");
	this.shape_19.setTransform(23.1,19.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhIBJICRiR");
	this.shape_20.setTransform(23,19);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhFBGICLiL");
	this.shape_21.setTransform(22.9,18.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhCBDICFiF");
	this.shape_22.setTransform(22.8,17.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ag/BAIB/h/");
	this.shape_23.setTransform(22.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Calque 3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiEAAIEJAA");
	this.shape_24.setTransform(23.5,23.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhaAAIC1AA");
	this.shape_25.setTransform(23.5,23.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgvAAIBfAA");
	this.shape_26.setTransform(23.5,23.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgGAAIANAA");
	this.shape_27.setTransform(23.5,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[]},1).to({state:[{t:this.shape_27}]},10).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(22));

	// Calque 4
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiEAAIEJAA");
	this.shape_28.setTransform(23.5,32.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhtglIDbBL");
	this.shape_29.setTransform(23.5,29.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhYhMICwCZ");
	this.shape_30.setTransform(23.5,26.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhBhyICDDl");
	this.shape_31.setTransform(23.5,23.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhIhsICRDZ");
	this.shape_32.setTransform(23.5,23.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhPhnICfDP");
	this.shape_33.setTransform(23.5,23.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhWhiICtDF");
	this.shape_34.setTransform(23.5,23.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhdhdIC6C6");
	this.shape_35.setTransform(23.5,23.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhkhFIDJCL");
	this.shape_36.setTransform(23.5,25.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhsguIDYBd");
	this.shape_37.setTransform(23.5,27.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhzgXIDnAv");
	this.shape_38.setTransform(23.5,28.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ah6AAID1AB");
	this.shape_39.setTransform(23.5,30.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiCAWIEFgq");
	this.shape_40.setTransform(23.5,32.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiDALIEHgV");
	this.shape_41.setTransform(23.5,32.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhahZIC1C0");
	this.shape_42.setTransform(23.4,24.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhXhXICuCv");
	this.shape_43.setTransform(23.4,24.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhUhUICpCp");
	this.shape_44.setTransform(23.3,25.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhRhRICjCj");
	this.shape_45.setTransform(23.2,26.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhOhOICdCd");
	this.shape_46.setTransform(23.1,26.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhLhLICXCX");
	this.shape_47.setTransform(23.1,27.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhIhIICRCR");
	this.shape_48.setTransform(23,28);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhFhFICLCL");
	this.shape_49.setTransform(22.9,28.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhChCICFCF");
	this.shape_50.setTransform(22.8,29.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ag/g/IB/B/");
	this.shape_51.setTransform(22.8,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.2,37.4,29.6,19.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;