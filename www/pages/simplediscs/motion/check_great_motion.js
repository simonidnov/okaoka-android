﻿(function(window) {
check_motion_great = function() {
	this.initialize();
}
check_motion_great._SpriteSheet = new createjs.SpriteSheet({images: ["check_great_motion.png"], frames: [[0,0,120,120,0,60,60],[120,0,120,120,0,60,60],[240,0,120,120,0,60,60],[360,0,120,120,0,60,60],[480,0,120,120,0,60,60],[600,0,120,120,0,60,60],[720,0,120,120,0,60,60],[840,0,120,120,0,60,60],[0,120,120,120,0,60,60],[120,120,120,120,0,60,60],[240,120,120,120,0,60,60],[360,120,120,120,0,60,60],[480,120,120,120,0,60,60],[600,120,120,120,0,60,60],[720,120,120,120,0,60,60],[840,120,120,120,0,60,60],[0,240,120,120,0,60,60],[120,240,120,120,0,60,60],[240,240,120,120,0,60,60],[360,240,120,120,0,60,60],[480,240,120,120,0,60,60],[600,240,120,120,0,60,60],[720,240,120,120,0,60,60],[840,240,120,120,0,60,60],[0,360,120,120,0,60,60],[120,360,120,120,0,60,60],[240,360,120,120,0,60,60],[360,360,120,120,0,60,60],[480,360,120,120,0,60,60],[600,360,120,120,0,60,60],[720,360,120,120,0,60,60],[840,360,120,120,0,60,60],[0,480,120,120,0,60,60],[120,480,120,120,0,60,60],[240,480,120,120,0,60,60],[360,480,120,120,0,60,60],[480,480,120,120,0,60,60],[600,480,120,120,0,60,60],[720,480,120,120,0,60,60],[840,480,120,120,0,60,60],[0,600,120,120,0,60,60],[120,600,120,120,0,60,60],[240,600,120,120,0,60,60],[360,600,120,120,0,60,60],[480,600,120,120,0,60,60]]});
var check_motion_great_p = check_motion_great.prototype = new createjs.Sprite();
check_motion_great_p.Sprite_initialize = check_motion_great_p.initialize;
check_motion_great_p.initialize = function() {
	this.Sprite_initialize(check_motion_great._SpriteSheet);
	this.paused = false;
}
window.check_motion_great = check_motion_great;
}(window));

