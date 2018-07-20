var _free;
function free(){
    _free = this;
    this._containers = [];
    this._linkers = [];
    this._visual_links = null;
    this._current_evt = null;
    this._selected_link = 0;
    this._link_infos = {start:{}, end:{}};
    this.mouse = {x:0, y:0};
    this._nav = null;
    this._free_contents = null;
}
free.prototype.init = function(){
    this.stage = new createjs.Stage("free_canvas");
    $('#free_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#free_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    this.stage.autoClear = true;
    createjs.Touch.enable(this.stage);
    
    ground = new createjs.Shape();
    ground.graphics.beginStroke("black").beginFill("white").drawRect( 0, 0, window.innerWidth, window.innerHeight);
    ground.name = "ground";
    this.stage.addChild(ground);
    
    this._free_contents = new createjs.Container();
    this.stage.addChild(this._free_contents);
    
    this._visual_links = new createjs.Container();
    this.stage.addChild(this._visual_links);
    
    this.stage.update();
    createjs.Ticker.addEventListener("tick", this.ticker);
    createjs.Ticker.setFPS(60);
    
    $(window).on('mousemove', function(e){
        _free.mouse.x = e.clientX;
        _free.mouse.y = e.clientY;
    });
    this.create_nav();
    $('#carre').on('click', function(){
        _free.add_shape();
    });
}
free.prototype.create_button = function(target, image, name){
    var button = new createjs.Container();
    button.name = name;
    
    var ground = new createjs.Shape();
    ground.graphics.beginFill('red').drawCircle(0,0,30);
    //ground.mouseEnabled = false;
    button.addChild(ground);
    
    var queue = new createjs.LoadQueue(true);
    queue.on("complete", function(event){
        var icon = new createjs.Bitmap(image);
        var targetWidth = 50; 
        var targetHeight = 50; 

        icon.scaleX = icon.scaleY = .8; 
        //icon.scaleY = targetHeight / icon.image.height; 
        icon.x = icon.y = -25;
        icon.mouseEnabled = false;
        button.addChild(icon);    
    }, this);
    queue.loadFile(image);
    queue.load();

    target.addChild(button);
}
free.prototype.open_nav = function(x, y){
    if(_free.nav_style === "closed"){
        return false;
    }
    this._display_nav.alpha = 1;
    this._display_nav.graph.graphics.clear();
    this._display_nav.graph.graphics.beginFill('red').drawCircle(0,0,5);
    this._display_nav.x = x;
    this._display_nav.y = y;
    var numElements = this._display_nav.buttons.getNumChildren(),
    angle = 0,
    step = (2*Math.PI) / numElements;
    TweenLite.to(_free._display_nav, .2, {
        scaleX:1, 
        scaleY:1, 
        alpha:1
    });
    for(var i=0; i<this._display_nav.buttons.getNumChildren(); i++){
        var x = 80 * Math.cos(angle);
        var y = 80 * Math.sin(angle);
        angle += step;
        TweenLite.set(this._display_nav.buttons.getChildAt(i), {scaleX:0, scaleY:0});
        TweenLite.to(this._display_nav.buttons.getChildAt(i), .5, {x:x, y:y, scaleX:1, scaleY:1, delay:(.1*i)});
    }
}
free.prototype.close_nav = function(){
    _free.nav_style="closed";
    for(var i=0; i<this._display_nav.buttons.getNumChildren(); i++){
        TweenLite.to(this._display_nav.buttons.getChildAt(i), .5, {x:0, y:0, scaleX:0, scaleY:0, delay:(.05*i)});
    }
    TweenLite.to(_free._display_nav, .5, {
        scaleX:0, 
        scaleY:0, 
        alpha:0, 
        delay:(.1*this._display_nav.buttons.getNumChildren())+.5, 
        onComplete:function(){
            _free._display_nav.graph.graphics.clear();
            _free.nav_style="null";
        }
    });
    //_free._display_nav.graph.graphics.clear();
    //_free._display_nav.alpha = 0;
}
free.prototype.hello = function(){
    alert('hello');
}
free.prototype.create_nav = function(){
    this._nav = new createjs.Container();
    this.stage.addChild(this._nav);
    
    this._display_nav = new createjs.Container();
    this._display_nav.alpha = 0;
    this._display_nav.x = this._display_nav.y = 100;
    this.stage.addChild(this._display_nav);
    /* add graph element on display nav */
    this._display_nav.graph = new createjs.Shape();
    this._display_nav.graph.name = "graph";
    this._display_nav.addChild(this._display_nav.graph);
    
    this._display_nav.buttons = new createjs.Container();
    this._display_nav.buttons.name = "buttons";
    this._display_nav.addChild(this._display_nav.buttons);
    
    this.create_button(this._display_nav.buttons, "/images/assets/assets_delete_icon.png", "delete_button");
    this.create_button(this._display_nav.buttons, "/images/assets/assets_edit_icon.png", "edit_button");
    this.create_button(this._display_nav.buttons, "/images/assets/assets_move_icon.png", "move_button");
console.log(this)
    this.create_button(this._display_nav.buttons, "/images/assets/assets_rotate_icon.png", "rotate_button");
    this.create_button(this._display_nav.buttons, "/images/assets/assets_link_icon.png", "link_button");
    this.create_button(this._display_nav.buttons, "/images/assets/assets_close_icon.png", "close_button");
    
    this._display_nav.on('click', function(evt){

        if(evt.target.parent.name.indexOf('button') !== -1){
            _free.close_nav();
        }
        switch(evt.target.parent.name){
            case 'close_button':
                _free.mode = 'null';
                break;
            case 'edit_button':
                alert('edit function is on progress');
                _free.mode = 'edit';
                break;
            case 'move_button':
                _free.mode = 'move';
                break;
            case 'link_button':
                _free.mode = 'linker';
                break;
            case 'rotate_button':
                _free.mode = 'rotation';
                break;
            case 'delete_button':
                alert('delete function is on progress');
                break;
        }
    });
    this.stage.on("mousedown", function(evt) {

    });
    
    carre = new createjs.Shape();
    carre.graphics.beginStroke("black").beginFill("white").drawRect( 0, 0, 120, 120);
    carre.regX = carre.regY = carre.x = carre.y = 60;
    this._nav.addChild(carre);
    this._nav.setBounds(0, 0, 120, 120);
    
    carre.on("pressmove", function(evt) {
        _free.close_nav();
        _free.mode = 'shaper';
        evt.target.x = evt.stageX-_free._nav.x;
        evt.target.y = evt.stageY-_free._nav.y;
    });
    carre.on("pressup", function(evt) { 
        _free.mode = 'shaper';
        TweenLite.to(carre, .5, {x:60, y:60});
        _free.add_shape({
            x:evt.stageX,
            y:evt.stageY,
            width:120,
            height:120,
            type:"rectangle"
        });
    });
    //
    //linker = new createjs.Shape();
    //linker.graphics.beginStroke("black").beginFill("black").drawRect( 0, 0, 120, 120);
    //linker.regX = linker.regY = linker.y = 60;
    //linker.x = 180;
    //
    //linker.on('click', function(){
    //    _free.mode = 'linker';
    //});
    //this._nav.addChild(linker);
    //this._nav.setBounds(0, 0, 120, 120);
    //
    //rotate = new createjs.Shape();
    //rotate.graphics.beginStroke("black").beginFill("rgba(0,0,0,.5)").drawRect( 0, 0, 120, 120);
    //rotate.regX = linker.regY = linker.y = 60;
    //rotate.x = 300;
    //
    //rotate.on('click', function(){
    //    _free.mode = 'rotation';
    //});
    //this._nav.addChild(rotate);
    //
    //mover = new createjs.Shape();
    //mover.graphics.beginStroke("black").beginFill("rgba(0,0,0,.5)").drawRect( 0, 0, 120, 120);
    //mover.regX = linker.regY = linker.y = 60;
    //mover.x = 420;
    //
    //mover.on('click', function(){
    //    _free.mode = 'move';
    //});
    //this._nav.addChild(mover);
    //
    this._nav.x = 200;
    this._nav.y = window.innerHeight-120;
}
free.prototype.add_shape = function(params){
    var id = this._containers.length;
    
    this._containers[id] = new createjs.Container();
    this._free_contents.addChild(this._containers[id]);
    
    /* on crée la découpe */
    decoupe = new createjs.Shape();
    decoupe.name = "decoupe";
    /* par default on dessine un rectangle sur la decoupe */
    decoupe.graphics.setStrokeStyle(.1).beginStroke("red").beginFill("rgba(255,255,255,.1)").drawRect( 0, 0, params.width, params.height);
    this._containers[id].addChild(decoupe);
    
    /* on crée la gravure */
    gravure = new createjs.Shape();
    gravure.name = "gravure";
    /* par default on dessine un rectangle sur la gravure */
    gravure.graphics.beginStroke("black").beginFill("rgba(0,255,255,.1)").drawRect( 0, 0, params.width, params.height);
    this._containers[id].addChild(gravure);
    
    /* on mask la gravure avec la découpe */
    gravure.mask = decoupe;
    
    /* On ajoute les settings du container */
    this._containers[id].name = "container_"+id;
    this._containers[id].setBounds(0, 0, params.width, params.height);
    this._containers[id].x = params.x;
    this._containers[id].y = params.y;
    this._containers[id].regX = params.width/2;
    this._containers[id].regY = params.height/2;
   
    this._containers[id].on('click', function(evt){

        if(evt.target.parent.name.indexOf('container_') !== -1){
            //evt.stageX
            _free.open_nav(evt.target.parent.x, evt.target.parent.y);
        }
    });
    this.stage.enableMouseOver();

    var start_pos = {x:0, y:0, rotation:0};
    this._containers[id].on("mouseover", function(evt) {
        if(_free.mode === "linker"){
            _free._current_evt = evt;
        }
    });
    this._containers[id].on("mousedown", function(evt) {
        if(_free.mode === "linker"){
            _free.add_link(evt); 
        }else if(_free.mode === "rotation"){
            start_pos.rotation = evt.target.parent.rotation;
        }else{
            start_pos = {x:_free.mouse.x, y:_free.mouse.y};
            //_free.mode = 'move';
        }
    });
    this.pos_angle = new createjs.Shape();
    this.stage.addChild(this.pos_angle);
    
    _free.text = new createjs.Text();
    _free.stage.addChild(_free.text);
    
    this._containers[id].on("pressmove", function(evt) {
        _free.close_nav();
        if(_free.mode === "move"){
            evt.target.parent.x = evt.stageX;
            evt.target.parent.y = evt.stageY;
        }else if(_free.mode === "rotation"){
            
            
            _free.pos_angle.graphics.clear();
            _free.pos_angle.graphics.beginFill("red").drawCircle(evt.target.parent.x, evt.target.parent.y, 5);
            _free.pos_angle.graphics.endFill();
            
            _free.pos_angle.graphics.setStrokeStyle(3);
            _free.pos_angle.graphics.beginStroke("red");
            _free.pos_angle.graphics.moveTo(evt.target.parent.x, evt.target.parent.y);
            _free.pos_angle.graphics.lineTo(_free.mouse.x, _free.mouse.y);
            _free.pos_angle.graphics.endStroke();
            
            var rotation = _free.get_angle(
                {x:evt.target.parent.x,y:evt.target.parent.y},
                {x:_free.mouse.x,y:_free.mouse.y}
            )+start_pos.rotation;
            if(rotation>360){
                rotation -= 360;
            }
            _free.text.text = Math.round(rotation);
            _free.text.x = evt.target.parent.x;
            _free.text.y = evt.target.parent.y;
            evt.target.parent.rotation = rotation;
        }
    });
    this._containers[id].on("pressup", function(evt) { 
        _free.pos_angle.graphics.clear();
        _free.text.text = "";
        if(_free.mode === "linker"){
            _free.set_link(evt);
            //_free.mode = 'move';
        }else{
            
        }
    });
}
free.prototype.add_link = function(evt){
    var id = this._linkers.length;
    
    this._selected_link = id;
    this._linkers[id] = {
        start:{
            x:evt.stageX-evt.target.parent.x+evt.target.parent.regX,
            y:evt.stageY-evt.target.parent.y+evt.target.parent.regY,
            element:null,
            evt:evt,
            name:evt.target.parent.name
        }, 
        end:{
            x:0,
            y:0,
            element:null,
            evt:null,
            name:""
        }
    };
    
    this.add_linker(id, this._linkers[id].start.x, this._linkers[id].start.y, evt.target.parent, "start", evt);
}
free.prototype.add_linker = function(id, x, y, target, type, event){
    this._linkers[id][type].x = x;
    this._linkers[id][type].y = y;
    this._linkers[id][type].evt = event;
    this._linkers[id][type].element = new createjs.Shape();
    this._linkers[id][type].element.graphics.beginStroke("black").beginFill("white").drawRect( 0, 0, 20, 20);
    this._linkers[id][type].element.regX = this._linkers[id][type].element.regY = 10;
    this._linkers[id][type].name = event.target.parent.name;
    this._linkers[id][type].element.link_id = id;
    this._linkers[id][type].element.link_type = type;

    this._linkers[id][type].element.x = this._linkers[id][type].x;
    this._linkers[id][type].element.y = this._linkers[id][type].y;
    this._linkers[id][type].element.name = "link";
    target.addChild(this._linkers[id][type].element);
    
    var start_pos = {x:0, y:0};
    
    this._linkers[id][type].element.on("mousedown", function(evt) {
        start_pos.x = _free.mouse.x - evt.target.parent.x;
        start_pos.y = _free.mouse.y - evt.target.parent.y;
    });
    this._linkers[id][type].element.on("pressmove", function(evt) {

        _free.close_nav();
        
        var parent = evt.target.parent;
        var angle = parent.rotation;
        
        var pos = _free.dist_angle(parent, _free.mouse);
        evt.target.x = pos.x;
        evt.target.y = pos.y;

        _free.mode = 'move_link';
    });
    this._linkers[id][type].element.on("pressup", function(evt) { 
        _free.mode = 'move';
    });
}
free.prototype.select_link = function(evt){
    
}
free.prototype.set_link = function(evt){
    _free.mode = "shaper";
    if(typeof this._linkers[this._selected_link] === "undefined"){

        return false;
    }
    if(evt.target.parent.name.indexOf('container_') === -1){

        this.delete_link(this._selected_link);
        return false;
    }
    if(_free._current_evt.target.parent.name === this._linkers[this._selected_link].start.evt.target.parent.name){

        this.delete_link(this._selected_link);
        return false;
    }
    for(var i=0; i<this._linkers.length; i++){
        var link_name = this._linkers[i].start.name+""+this._linkers[i].end.name;
        var prop1 = this._current_evt.target.parent.name+""+this._linkers[this._selected_link].start.name;
        var prop2 = this._linkers[this._selected_link].start.name+""+this._current_evt.target.parent.name;
        if(link_name === prop1 || link_name === prop2){

            this.delete_link(this._selected_link);
            return false;
        }
    }
    this.add_linker(
        this._selected_link, 
        evt.stageX-this._current_evt.target.parent.x+this._current_evt.target.parent.regX, 
        evt.stageY-this._current_evt.target.parent.y+this._current_evt.target.parent.regY, 
        this._current_evt.target.parent, 
        "end", 
        this._current_evt
    );
}
free.prototype.delete_link = function(id){
    this._linkers[id].start.element.parent.removeChild(this._linkers[id].start.element);
    this._linkers.splice(id, 1);
}
function sqr(a) {
    return a*a;
}
free.prototype.get_angle = function(a, b){

    var dx = b.x - a.x;
    var dy = b.y - a.y; 
    var Atan = Math.atan2(dy, dx);
    var angle = Atan+Math.PI;
    return (angle*180/Math.PI);
}
free.prototype.dist_angle = function(a, b){
    dx = b.x - (a.x - a.regX);
    dy = b.y - (a.y - a.regY);
    angle = a.rotation;
    
    var a_b_dist = Math.sqrt(sqr(dx) + sqr(dy));
    var posX = (Math.cos(angle*Math.PI/180) * a_b_dist);
    var posY = (Math.sin(angle*Math.PI/180) * a_b_dist);
    return {x:dx, y:dy};
}
free.prototype.get_offset = function(shape){
    var container = shape.evt.target.parent;
    var linker = shape.element;
    var container_linker_dist = Math.sqrt(sqr(container.regX - linker.x) + sqr(container.regY - linker.y));
    var dx2 = container.regX - linker.x;
    var dy2 = container.regY - linker.y; 
    var monAngle2 = Math.atan2(dy2, dx2);
    var sonAngle2 = monAngle2+Math.PI;
    var monAngleDegres2 = (sonAngle2*180/Math.PI)+container.rotation;
    var posX = (Math.cos(monAngleDegres2*Math.PI/180) * container_linker_dist + container.x);
    var posY = (Math.sin(monAngleDegres2*Math.PI/180) * container_linker_dist + container.y);
    return {x:posX, y:posY};
}
free.prototype.ticker = function(){
    //this._visual_links.removeChildAt(0);
    var line = new createjs.Shape();
    _free._visual_links.removeChildAt(0);
    line.graphics.setStrokeStyle(3);
    line.graphics.beginStroke("black");
    for(var i=0; i<_free._linkers.length; i++){
        var pos_start = _free.get_offset(_free._linkers[i].start);
        if(_free._linkers[i].end.element !== null){
            var pos_end = _free.get_offset(_free._linkers[i].end);
            line.graphics.moveTo(
                pos_start.x, 
                pos_start.y
            );
            line.graphics.lineTo(
                pos_end.x, 
                pos_end.y
            );
        }else{
            line.graphics.moveTo(
                pos_start.x, 
                pos_start.y
            );
            line.graphics.lineTo(
                _free.mouse.x, 
                _free.mouse.y
            );
        }
    }
    line.graphics.endStroke();
    _free._visual_links.addChild(line);
    _free.stage.update();
}
free.prototype.play = function(){
    
}
free.prototype.pause = function(){
    
}
free.prototype.update = function(){
    
}
free.prototype.refresh = function(datas){
    
}
free.prototype.destroy = function(callBack){
    callBack();
}