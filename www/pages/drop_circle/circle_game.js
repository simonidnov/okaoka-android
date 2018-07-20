function circle_game(){
    this.init();
}
circle_game.prototype.init = function(){
    var __self = this;
    this.base = "";
    // Matter.js module aliases
    this.Engine = Matter.Engine;
    this.World = Matter.World;
    this.Bodies = Matter.Bodies;
    this.Svg = Matter.Svg;
    this.Common = Matter.Common;
    this.Composites = Matter.Composites;
    this.Vertices = Matter.Vertices;
    this.Svg = Matter.Svg;
    
    this.Body = Matter.Body;
    this.Events = Matter.Events;
    this.Mouse = Matter.Mouse;
    this.MouseConstraint = Matter.MouseConstraint;
    this.Runner = Matter.Runner;
    
    // create a Matter.js engine
    this.engine = this.Engine.create({
        render: {
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: '#fafafa',
                wireframeBackground: '#222',
                hasBounds: false,
                enabled: true,
                wireframes: false,
                showSleeping: true,
                showDebug: true,
                showBroadphase: false,
                showBounds: true,
                showVelocity: true,
                showCollisions: true,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: true,
                showShadows: true,
                showDebug : false
            },
            element: document.getElementById('matter_render')
        }
    });
    
    physic_manager.init(this);
    physic_manager.polygon_sprite('canne', 'images/canne.svg', 'images/canne.png', {
        position:{
            x : 100,
            y : 100
        }
    }, "#FFFFFF");
    physic_manager.box("boxA", 400, 200, 80, 80, false, "", "#FFFFFF");
    physic_manager.circle("circleA", 450, 50, 80, false, "", "#FFFFFF");
    physic_manager.box("boxC", 400, 210, 810, 60, true, "", "#FFFFFF");
    physic_manager.box("boxD", 400, 610, 810, 60, true, "", "#FFFFFF");
    
    color = __self.Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);
    
    var arrow = __self.Vertices.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50'),
        chevron = __self.Vertices.fromPath('100 0 75 50 100 100 25 100 0 50 25 0'),
        star = __self.Vertices.fromPath('50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38'),
        horseShoe = __self.Vertices.fromPath('35 7 19 17 14 38 14 58 25 79 45 85 65 84 65 66 46 67 34 59 30 44 33 29 45 23 66 23 66 7 53 7');
    
    __self.Engine.run(__self.engine);
}