var _character, head, arms_left, forearm_left, arms_right, forearm_rightn, front_leg_left, leg_left, front_leg_right, leg_right, body;
var format = {width:0, height:0};
function character(){
    _character = this;
    stage = null;
    console.log('create new page script : ', app.page_properties);
}
character.prototype.init = function(){
    console.log('init new page script delayed : ', app.page_properties.delayed);
    this.init_stage();
}
character.prototype.init_stage = function(){
    //this.stage = new createjs.Stage("character_canvas");
    //$('#character_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    //$('#character_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    //this.stage.autoClear = true;
    //createjs.Touch.enable(this.stage);
    //this.stage.update();
    //createjs.Ticker.addEventListener("tick", this.tick);
    //this.create_default_body();
    $('#format').load('/utils/character_boardCut.svg', function(){
        format.width = parseInt($('#format svg').attr('width'));
        format.height = parseInt($('#format svg').attr('height'));
        $('#format svg').attr('width', window.innerWidth).attr('height', window.innerHeight);
        _character.set_character();
    });
    //TweenMax.set($('#format'), {scaleX:.5, scaleY:.5});
    
    //Using matter.js
    //Use mouse to drag them
    //var screenW = window.innerWidth;
    //var screenH = window.innerHeight;
    //var canvas = document.getElementById('character_canvas');
    //canvas.width = screenW;
    //canvas.height = screenH;
    //var currGroup = -1;
    //var maxSpawn = 20; //Change this for more ragdolls
    //var spawnNum = 0; 
//
//
    //var Engine = Matter.Engine,
    //    Render = Matter.Render,
    //    World = Matter.World,
    //    Bodies = Matter.Bodies,
    //    Body = Matter.Body,
    //    Constraint = Matter.Constraint,
    //    MouseConstraint = Matter.MouseConstraint,
    //    Mouse = Matter.Mouse,
    //    Composite = Matter.Composite,
    //    Runner = Matter.Runner;
//
    //// create an engine
    //var engine = Engine.create();
    //var mouseConstraint = MouseConstraint.create(engine,{mouse: Mouse.create(canvas)});
    //this.engine = engine;
    //// create a renderer
    //var render = Render.create({
    //    canvas: canvas,
    //    engine: engine,
    //    options: {
    //        width: window.innerWidth,
    //        height: window.innerHeight, 
    //        wireframeBackground: '#ffffff',
    //        wireframes: false
    //    }
    //});
    //engine.world.gravity.x = 0;
    //engine.world.gravity.y = 1;
    //// create person
    //function createPerson(x,y){
    //    
    //    var headOptions = {friction: 1,frictionAir:.1,mass:0,isStatic: false};
    //    var chestOptions = {friction: 1,frictionAir:.1,mass:0,isStatic: false,collisionFilter: {group: currGroup-1}};
    //    var armOptions = {friction: 1, frictionAir: .1,mass:0,isStatic: false,collisionFilter: {group: currGroup}};
    //    var legOptions = {friction: 1, frictionAir: .1,mass:0,isStatic: false,collisionFilter: {group: currGroup-1}};
    //    var head  = Bodies.circle(x, y, 60, headOptions);
    //    var chest = Bodies.rectangle(x,y,60, 80,chestOptions);//40,120
    //    var rightUpperArm = Bodies.rectangle(x+40, y-20, 20, 40,armOptions);
    //    var rightLowerArm = Bodies.rectangle(x+40, y+20, 20, 60,armOptions);
    //    var leftUpperArm = Bodies.rectangle(x-40, y-20, 20, 40,armOptions);
    //    var leftLowerArm = Bodies.rectangle(x-40, y+20, 20, 60,armOptions);
    //    var leftUpperLeg = Bodies.rectangle(x-20, y+60, 20, 40,legOptions);
    //    var rightUpperLeg = Bodies.rectangle(x+20, y+60, 20, 40,legOptions);
    //    var leftLowerLeg = Bodies.rectangle(x-20, y+100, 20, 60,legOptions);
    //    var rightLowerLeg = Bodies.rectangle(x+20, y+100, 20, 60,legOptions);
//
    //    rightUpperArm.setMass = rightLowerArm.setMass = head.setMass = chest.setMass = leftUpperArm.setMass = leftLowerArm.setMass = rightUpperLeg.setMass = leftLowerLeg.setMass = rightLowerLeg.setMass  = 100;
    //    
    //    var legTorso = Body.create({
    //        parts: [chest, leftUpperLeg, rightUpperLeg],
    //        collisionFilter: {group: currGroup-1},
    //    });
//
    //    var chestToRightUpperArm = Constraint.create({
    //        bodyA: legTorso,
    //        pointA: { x: 25, y: -40 },
    //        pointB: {x:-5, y:-10},
    //        bodyB: rightUpperArm,
    //        stiffness: .2,
    //    });
    //    var chestToLeftUpperArm = Constraint.create({
    //        bodyA: legTorso,
    //        pointA: { x: -25, y: -40 },
    //        pointB: {x:5, y:-10},
    //        bodyB: leftUpperArm,
    //        stiffness: .2,
    //    });
//
    //    var upperToLowerRightArm = Constraint.create({
    //        bodyA: rightUpperArm,
    //        bodyB: rightLowerArm,
    //        pointA: {x:0,y: 15},
    //        pointB: {x:0, y:-20},
    //        stiffness: .2
    //    });
//
    //    var upperToLowerLeftArm= Constraint.create({
    //        bodyA: leftUpperArm,
    //        bodyB: leftLowerArm,
    //        pointA: {x:0,y: 15},
    //        pointB: {x:0, y:-20},
    //        stiffness: .2
    //    });
//
    //    var upperToLowerLeftLeg= Constraint.create({
    //        bodyA: legTorso,
    //        bodyB: leftLowerLeg,
    //        pointA: {x:-20,y: 60},
    //        pointB: {x:0, y:-25},
    //        stiffness: .2
    //    });
//
    //    var upperToLowerRightLeg= Constraint.create({
    //        bodyA: legTorso,
    //        bodyB: rightLowerLeg,
    //        pointA: {x:20,y: 60},
    //        pointB: {x:0, y:-25},
    //        stiffness: .2
    //    });
//
    //    var headContraint = Constraint.create({
    //        bodyA: head,
    //        pointA:{x:0, y: 20},
    //        pointB: {x:0, y:-50},
    //        bodyB: legTorso,
    //        stiffness: .3
    //    });
//
//
    //    var person = Composite.create({
    //        bodies: [legTorso,head,leftLowerArm,leftUpperArm, rightLowerArm, rightUpperArm,leftLowerLeg,rightLowerLeg],
    //        constraints: [upperToLowerLeftArm,upperToLowerRightArm, chestToLeftUpperArm, chestToRightUpperArm, headContraint,upperToLowerLeftLeg,upperToLowerRightLeg]
    //    });
    //    currGroup-=2;
    //    return person;
    //}
    ////var leftUpperLeg = Bodies.rectangle(-10, 155, 20, 60,lightOptions);
    //var ground = Bodies.rectangle(screenW/2, screenH, screenW, 10, {render: {fillStyle: '#3498db',strokeStyle: '#333',lineWidth: 2}, isStatic: true, friction: 0});
    //var leftSide =  Bodies.rectangle(-5, 0, 10, screenH*2, {render: {fillStyle: '#3498db',strokeStyle: '#333',lineWidth: 2}, isStatic: true, friction: 0});
    //var rightSide = Bodies.rectangle(screenW+5, 0, 10, screenH*2, {render: {fillStyle: '#3498db',strokeStyle: '#333',lineWidth: 2}, isStatic: true, friction: 0});
    //var top = Bodies.rectangle(screenW/2, 0, screenW, 10, {render: {fillStyle: '#3498db',strokeStyle: '#333',lineWidth: 2}, isStatic: true, friction: 0});
    //
    ////setInterval(function(){
    ////    if(spawnNum<= maxSpawn){
    ////        var r = createPerson((Math.random()*(screenW-70))+70,-200);
    ////        World.add(engine.world, [r]);
    ////        spawnNum += 1;
    ////    }
    ////}, 500);
    //var r = createPerson(window.innerWidth/2,window.innerHeight/2);
    //World.add(engine.world, [r]);
    //
    //World.add(engine.world, [mouseConstraint, ground, top, leftSide,rightSide]);
    //window.addEventListener("resize", function(){
    //    canvas.width = window.innerWidth;
    //    canvas.height = window.innerHeight;
    //    screenW = window.innerWidth;
    //    screenH = window.innerHeight;
    //    Body.setPosition(ground, {x:screenW/2, y: screenH-50});
    //    Body.setPosition(leftSide, {x:-5, y: screenH});
    //    Body.setPosition(rightSide, {x:screenW+5, y: screenH});
    //});
    //Engine.run(engine);
    //Render.run(render);
}
character.prototype.set_character = function(){
    var body = $('#format #body');
    var b = this.get_origin('body');
    console.log("set_character ::::: " , b);
    //TweenLite.to($('#format #body'), .8, {
    //    rotation:-90
    //});
    return false;
    
    
    
    
    TweenLite.set($('#format #body'), {
        x:0, y:0
    });
    TweenLite.set($('#format #body'), {
        css:{'transform-origin':this.get_origin('body').x+'px '+this.get_origin('body').y+'px'}
    });
    console.log('tween x y ', format.width/2);
    TweenLite.to($('#format #body'), .8, {
        rotation:90, 
        x:-parseInt($('#format #body').attr('data-svg-origin').split(' ')[0]), 
        y:parseInt($('#format #body').attr('data-svg-origin').split(' ')[1])+window.innerHeight/2+150,
        scaleX:.5,
        scaleY:.5
    });
    
    TweenLite.set($('#format #head'), {
        css:{'transform-origin':this.get_origin('head').x+'px '+this.get_origin('head').y+'px'}
    });
    
    this.body = $('#format #body');
    this.head = $('#format #head');
    //window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    this.ticker();
    //requestAnimationFrame(_character.ticker);
    //setTimeout(function(){_character.ticker();}, 500);
    //x:window.innerWidth/2, y:window.innerHeight/2
}
character.prototype.ticker = function(timestamp){
    this.body = $('#format #body');
    this.head = $('#format #head');
    
    //console.log('tick ', parseFloat(this.body.css('transform').split(',')[1]));
    
    TweenLite.set(_character.head, {
        scaleX:parseFloat(this.body.css('transform').split(',')[1]), 
        scaleY:parseFloat(this.body.css('transform').split(',')[1])
    });
    requestAnimationFrame(_character.ticker);
}
character.prototype.get_origin = function(element){
    var el = $('#format #'+element);
    var trace = el.find('[id^=trace]').first();
    var origin = el.find('[id^=origin]').first();
    
    console.log(trace, ' :::: ', trace.position().x, " ::: ", trace.position().y);
    console.log(origin, ' :::: ', origin.position().x, " ::: ", origin.position().y);
    
    //var x = origin.offset().left - el.offset().left;
    //var y = origin.offset().top - el.offset().top;
    if(typeof trace.attr('y') === "undefined"){
        trace.attr('y' , 0);
    }
    var x = origin.attr('cx') - trace.attr('x');
    var y = origin.attr('cy') - trace.attr('y');
    TweenLite.set(el, {x:0, y:0});
    TweenLite.set(el, {
        'transformOrigin':x+'px '+y+'px'
    });
    return {x:x, y:y};
}
character.prototype.transition_end = function(){
    
}
character.prototype.tick = function(){
    //head.rotation++;
    //body.regX = body.getBounds().width/2;
    //body.regY = body.getBounds().height-10;
    //body.x = window.innerWidth/2 - body.regX;
    //body.y = window.innerHeight/2;
    //
    //head.y = body.y - body.getBounds().height;
    //head.x = body.x;
    //head.regX = head.getBounds().width/2;
    //head.regY = head.getBounds().height;
    //head.x = window.innerWidth/2;
    //head.y = body.y-body.getBounds().height;
    //head.rotation++;
    //head.setTransform(body.x+(body.getBounds().width/2), body.y-body.getBounds().height, 1, 1, 0, 0, 0, 25, 50);
    //_character.stage.update();
}
character.prototype.play = function(){
    
}
character.prototype.pause = function(){
    
}
character.prototype.update = function(){
    
}
character.prototype.refresh = function(datas){
    
}
character.prototype.destroy = function(callBack){
    callBack();
}
character.prototype.create_default_body = function(){
    //console.log('create_default_body');
    //body = new createjs.Container();
    //_character.stage.addChild(body);
    //
    ////obj.setTransform(x, y, scaleX, scaleY, skewX, skewY, rotation, regX, regY);
    //head = new createjs.Shape();
    //head.graphics.beginStroke("black").drawCircle(0, 0, 50);
    //_character.stage.addChild(head);
    //head.setBounds(50, 50, 50, 50);
   //// head.regX = head.regY = 40;
    ////head.x = window.innerWidth/2;
    ////head.y = window.innerHeight/2;
    //
    //
    //body = new createjs.Shape();
    //body.graphics.beginStroke("black").drawRoundRect( 0, 0, 120, 150, 30,30,30,30);
    //_character.stage.addChild(body);
    //body.setBounds(0, 0, 120, 150);
    ////body.setTransform(window.innerWidth/2, window.innerHeight/2, 1, 1, 0, 0, 0, 60, 120);
    //
    //forearm_left = new createjs.Shape();
    //forearm_left.graphics.beginStroke("black").drawRoundRect( 0, 0, 50, 100, 20,20,20,20);
    //_character.stage.addChild(forearm_left);
    //forearm_left.setBounds(0, 0, 50, 100);
    //forearm_left.setTransform(0, 0, 1, 1, 0, 0, 0, 25, 50);
    //
    //forearm_right = new createjs.Shape();
    //forearm_right.graphics.beginStroke("black").drawRoundRect( 0, 0, 50, 100, 20,20,20,20);
    //_character.stage.addChild(forearm_right);
    //forearm_right.setBounds(0, 0, 50, 100);
    //forearm_right.setTransform(0, 0, 1, 1, 0, 0, 0, 25, 50);
    //
    //arm_left = new createjs.Shape();
    //arm_left.graphics.beginStroke("black").drawRoundRect( 0, 0, 50, 100, 20,20,20,20);
    //_character.stage.addChild(arm_left);
    //arm_left.setBounds(0, 0, 50, 100);
    //arm_left.setTransform(0, 0, 1, 1, 0, 0, 0, 25, 50);
    //
    //arm_right = new createjs.Shape();
    //arm_right.graphics.beginStroke("black").drawRoundRect( 0, 0, 50, 100, 20,20,20,20);
    //_character.stage.addChild(arm_right);
    //arm_right.setBounds(0, 0, 50, 100);
    //arm_right.setTransform(0, 0, 1, 1, 0, 0, 0, 25, 50);
    //
    //front_leg_left = new createjs.Shape();
    //front_leg_left.graphics.beginStroke("black").drawRoundRect( 0, 0, 50, 100, 20,20,20,20);
    //_character.stage.addChild(front_leg_left);
    //front_leg_left.setBounds(0, 0, 50, 100);
    //front_leg_left.setTransform(0, 0, 1, 1, 0, 0, 0, 25, 50);
    //
    //front_leg_right = new createjs.Shape();
    //front_leg_right.graphics.beginStroke("black").drawRoundRect( 0, 0, 50, 100, 20,20,20,20);
    //_character.stage.addChild(front_leg_right);
    //front_leg_right.setBounds(0, 0, 50, 100);
    //front_leg_right.setTransform(0, 0, 1, 1, 0, 0, 0, 25, 50);
    //
    //leg_left = new createjs.Shape();
    //leg_left.graphics.beginStroke("black").drawRoundRect( 0, 0, 50, 100, 20,20,20,20);
    //_character.stage.addChild(leg_left);
    //leg_left.setBounds(0, 0, 50, 100);
    //leg_left.setTransform(0, 0, 1, 1, 0, 0, 0, 25, 50);
    //
    //leg_right = new createjs.Shape();
    //leg_right.graphics.beginStroke("black").drawRoundRect( 0, 0, 50, 100, 20,20,20,20);
    //_character.stage.addChild(leg_right);
    //leg_right.setBounds(0, 0, 50, 100);
    //leg_right.setTransform(0, 0, 1, 1, 0, 0, 0, 25, 50);
}
