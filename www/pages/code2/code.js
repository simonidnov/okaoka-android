var _okg = null;
function code(){
    this.stage = null;
    this.schemas = null;
    this.draggableMenu = null;
    this.droppableMenu = null;
    this.base_droppable = null;
    this.compiler_container = null;
    this.is_drag = false;
    this.winning_motion = null;
    this._current_draggable = null;
    this.dropTo = null;
    this._level = 0;
    this.libraries = [];
    _okg = this;
    this.init();
}
code.prototype.init = function(){
   // this.create_interface();
}
code.prototype.create_interface = function(){
    /* -------- set drawing canvas --------- */
    $('#code_page').css('width', window.innerWidth+"px");
    $('#code_canvas').css({"width":$('#code_page').width(), "height":$('#code_page').height()});
    $('#code_canvas').attr({"width":$('#code_page').width(), "height":$('#code_page').height()});
    _okg.stage = new createjs.Stage("code_canvas");
    _okg.stage.autoClear = true;
    _okg.stage.update();
    if ("ontouchstart" in window) {
        createjs.Touch.enable(_okg.stage);
    }
    this.stage.on("stagemouseup", function(evt) {_okg.drop();});
    createjs.Ticker.addEventListener("tick", _okg.tick);
    _okg.create_zoning();
    
    
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"code_tutorial", buttons:["play"]}, 
        function(e){
        }
    );
}
code.prototype.create_zoning = function(){
    /* draggable menu elements */
    this.draggableMenu = new createjs.Container();
    var draggable_ground = new createjs.Shape();
    draggable_ground.graphics.beginFill("#FFFFFF").drawRect(0, 0, 200, window.innerHeight);
    this.draggableMenu.addChild(draggable_ground);
    
    //this.draggableMenu.scaleX = 0;
    this.stage.addChild(this.draggableMenu);
    
    //TweenMax.to(this.draggableMenu, .5, {scaleX:1, scaleY:1, ease:Power4.easeIn, onComplete:function(){
    //    _okg.drawDraggables();
    //}});
    
    
    /* droppable items */
    this.droppableMenu = new createjs.Container();
    var droppable_ground = new createjs.Shape();
    droppable_ground.graphics.beginFill("#F0F0F0").drawRect(0, 0, window.innerWidth/2 - 200, window.innerHeight);
    this.droppableMenu.addChild(droppable_ground);
    
    droppable_ground.graphics.beginFill("#E3E3E3").drawRect((window.innerWidth/2 - 220), 0, 20, window.innerHeight);
    this.droppableMenu.addChild(droppable_ground);
    this.droppableMenu.x = 200;
    
    //this.droppableMenu.scaleX = 0;
    this.droppableMenu.label = "droppableMenu";
    this.stage.addChild(this.droppableMenu);
    //TweenMax.to(this.droppableMenu, .7, {scaleX:1, scaleY:1, ease:Back.easeOut, delay:.5, onComplete:function(){
    //    _okg.drawDroppable();
    //}});
    
    /* preview game play schemas to realise */
    this.schemas = new createjs.Container();
    this.schemas.x = window.innerWidth/2;
    this.schemas.y = 0;
    
    var schemas_ground = new createjs.Shape();
    schemas_ground.graphics.beginFill("#042367").drawRect(0, 0, window.innerWidth/2, window.innerHeight);
    this.schemas.addChild(schemas_ground);
    
    this.stage.addChild(this.schemas);
    
    /* draw assets */
    _okg.drawDraggables();
    _okg.drawDroppable();
    _okg.drawGrid();
    //this.bboy = new lib.bboy();
    //this.bboy.setBounds(0,0,297,530);
    //this.bboy.x = window.innerWidth/4 - this.bboy.getBounds().width/2;
    //this.bboy.y = window.innerHeight - this.bboy.getBounds().height;
    //this.schemas.addChild(this.bboy);
}
code.prototype.drawGrid = function(){
    if(typeof this.plane !== "undefined"){ this.schemas.removeChild(this.plane) };
    this.sizes = {
        w:50,
        h:50,
        x:100,
        y:100,
        player : {
            x:0,
            y:0
        },
        objective : {
            x:0,
            y:0
        }
    }, line = 0, column = 0, blocks = 0;
    this.plane = new createjs.Container();
    this.plane.regX = this.sizes.w*10 / 2;
    this.plane.regY = this.sizes.h*10 / 2;
    this.plane.y = Math.round(window.innerHeight/2);
    this.plane.x = Math.round(window.innerWidth/4);
    this.schemas.addChild(this.plane);
    
    for(var i=0; i<100; i++){
        if(code_levels[this._level].plane[line][column] > 0){
            var block = new lib.brick_50();
            block.id = i;
            block.gotoAndStop(1);
            block.x = this.sizes.w*column;
            block.y = this.sizes.h*line - 50;
            block.alpha = 0;
            switch(code_levels[this._level].plane[line][column]){
                case 1 :
                    block.label = "block";
                    break;
                case 2 :
                    block.label = "start";
                    break;
                case 3 :
                    block.label = "win";
                    break;
                default :
                    block.label = "block";
                    break;
            }
            TweenMax.to(block, .8, {y:(this.sizes.h*line), alpha:1, ease:Expo.easeOut, delay:.1*blocks});
            blocks++;
            this.plane.addChild(block);
        }
        if(code_levels[this._level].plane[line][column] === 2){
            this.sizes.player.x = this.sizes.w*column;
            this.sizes.player.y = this.sizes.h*line;
            block.gotoAndStop(2);
        }
        if(code_levels[this._level].plane[line][column] === 3){
            this.sizes.objective.x = this.sizes.w*column;
            this.sizes.objective.y = this.sizes.h*line;
            block.gotoAndStop(3+this._level);
        }
        column++;
        if(column === 10){
            column = 0;
            line++;
        }
    }
    this.player = new lib.player();
    this.player.x = this.sizes.player.x;
    this.player.y = this.sizes.player.y-100;
    this.player.alpha = 0;
    this.player.gotoAndStop(this._level);
    this.plane.addChild(this.player);
    
    TweenMax.to(this.player, .8, {y:this.sizes.player.y, alpha:1, ease:Bounce.easeOut, delay:.1*(blocks+1), onStart:function(){_okg.play_audio('code_player');}});
}
code.prototype.drawDraggables = function(){
    /* create draggables items to mode lest up right down and loop */
    var left = new lib.left_dragger();
    var right = new lib.right_dragger();
    var top = new lib.top_dragger();
    var bottom = new lib.bottom_dragger();
    var loop = new lib.loop_dragger();
    
    this.deletezone = new lib.delete_zone();
    this.deletezone.label = "delete";
    this.deletezone.setBounds(0,0,70,70);
    
    this.draggableMenu.addChild(left);
    this.draggableMenu.addChild(right);
    this.draggableMenu.addChild(top);
    this.draggableMenu.addChild(bottom);
    this.draggableMenu.addChild(loop);
    this.droppableMenu.addChild(this.deletezone);
    
    left.x = right.x = top.x = bottom.x = loop.x = 70;
    left.y      = 50;
    right.y     = 50+(70);
    top.y       = 50+(70*2);
    bottom.y    = 50+(70*3);
    loop.y      = 50+(70*4);
    this.deletezone.x = -125; 
    this.deletezone.y = window.innerHeight - 100;
    
    left.addEventListener("mousedown", function(event) { _okg.createDraggable("left", event); });
    right.addEventListener("mousedown", function(event) { _okg.createDraggable("right", event); });
    top.addEventListener("mousedown", function(event) { _okg.createDraggable("top", event); });
    bottom.addEventListener("mousedown", function(event) { _okg.createDraggable("bottom", event); });
    loop.addEventListener("mousedown", function(event) { _okg.createDraggable("loop", event); });
    
    this.play_button = new lib.play_button();
    this.play_button.label = "delete";
    this.play_button.x = window.innerWidth/2;
    this.play_button.y = window.innerHeight-100;
    this.stage.addChild(this.play_button);
    this.play_button.addEventListener("mousedown", function(event) { _okg.play_button.gotoAndStop(2); });
    this.play_button.addEventListener("pressup", function(event) { _okg.play_button.gotoAndStop(3); _okg.parseAndPlay(); });
}
code.prototype.drawDroppable = function(){
    /* create base droppable object to attach any draggables */
    this.libraries[0] = new createjs.Container();
    var compiler = new lib.compiler();
    this.libraries[0].addChild(compiler);
    this.libraries[0].x = 70;
    this.libraries[0].y = 50;
    this.libraries[0].setBounds(0,0,180,90);
    this.libraries[0].cache(0, -25, 190, 90);
    this.libraries[0].label = "compiler";
    this.libraries[0].id = 0;
    this.libraries[0].link = null; 
    this.droppableMenu.addChild(this.libraries[0]);    
}
code.prototype.createDraggable = function(type, event){
    var num = this.libraries.length;
    var draggable = null;
    this.libraries[num] = new createjs.Container();
    this.libraries[num].id = num;
    this.libraries[num].link = null;
    switch(type){
        case "left":
            draggable = new lib.left_draggable();
            draggable.mouseChildren = false;
            this.libraries[num].label="left";
            this.libraries[num].addChild(draggable);
            break;
        case "right":
            draggable = new lib.right_draggable();
            draggable.mouseChildren = false;
            this.libraries[num].label="right";
            this.libraries[num].addChild(draggable);
            break;
        case "top":
            draggable = new lib.top_draggable();
            draggable.mouseChildren = false;
            this.libraries[num].label="top";
            this.libraries[num].addChild(draggable);
            break;
        case "bottom":
            draggable = new lib.bottom_draggable();
            draggable.mouseChildren = false;
            this.libraries[num].label="bottom";
            this.libraries[num].addChild(draggable);
            break;
        case "loop":
            draggable = new lib.loop_draggable();
            //draggable.mouseChildren = false;
            //draggable.dragger.mouseEnabled = false;
            //draggable.bar.mouseEnabled = false;
            //draggable.bottom.mouseEnabled = false;
            this.libraries[num].label="loop";
            draggable.less.on('mousedown', function(){
                this.gotoAndStop(1);
            });
            draggable.more.on('mousedown', function(){
                this.gotoAndStop(1);
            });
            draggable.less.on('pressup', function(){
                this.gotoAndStop(2);
                var count = parseInt(this.parent.count_loop.text)-1;
                if(count < 1){
                    count = 1;
                }
                this.parent.count_loop.text = count;
            });
            draggable.more.on('pressup', function(){
                this.gotoAndStop(2);
                this.parent.count_loop.text = parseInt(this.parent.count_loop.text)+1;
            });
            this.libraries[num].addChild(draggable);
            break;
    }
    draggable.dropzone.setBounds(0,0,20,20);
    draggable.hitzone.setBounds(0,0,20,20);
    this.libraries[num].x = event.stageX-25;
    var y = event.stageY-25;
    if(y < _okg.libraries[0].y){
        y = _okg.libraries[0].y+50;
    }
    this.libraries[num].y = event.stageY-25;
    if(type === "loop"){
        this.libraries[num].setBounds(0,0,190,177);
        //this.libraries[num].cache(0, -25, 190, 180);
    }else{
        this.libraries[num].setBounds(0,0,190,90);
        this.libraries[num].cache(0, -25, 190, 90);
    }
    
    this.droppableMenu.addChild(this.libraries[num]);
    
    _okg.drag(this.libraries[num]);
    
    this.libraries[num].on("mousedown", function(evt) {
        if(evt.target.parent.parent.parent.label === "loop"){
            /* tester si la dif y est inférieur au header ou dragger de l'element*/
            var name = evt.target.parent.name;
            if(name !== "dragger"){
                return false;
            }
        }
        _okg.drag(evt.target.parent);
        _okg.droppableMenu.setChildIndex( evt.target.parent, _okg.droppableMenu.getNumChildren()-1);
    });
    this.libraries[num].on("pressup", function(evt) { 
        _okg.is_drag = false;
        _okg.drop();
    });
}
code.prototype.drag = function(target){
    _okg.dropTo = null;
    _okg.play_audio('code_drag');
    if(!_okg.is_drag){
        if(target.label === "loop" && target.parent.label != "droppableMenu" || typeof target.parent.label === "undefined"){
            if(target.parent.label === "droppableMenu"){
                _okg._draggable = target;
                _okg._current_draggable = target;
            }else if(target.parent.parent.label === "droppableMenu"){
                _okg._draggable = target.parent;
                _okg._current_draggable = target.parent;    
            }else if(target.parent.parent.parent.label === "droppableMenu"){
                _okg._draggable = target.parent.parent;
                _okg._current_draggable = target.parent.parent;    
            }else if(target.parent.parent.parent.parent.label === "droppableMenu"){
                _okg._draggable = target.parent.parent.parent;
                _okg._current_draggable = target.parent.parent.parent;    
            }
        }else{
            _okg._draggable = target;
            _okg._current_draggable = target;
        }
        TweenMax.to(_okg._current_draggable, .3, {scaleX :1.2, scaleY:1.2});
        _okg._current_draggable.shadow = new createjs.Shadow("rgba(0,0,0,.1)", 15, 15, 0);
        _okg.is_drag = true;
    }
}
code.prototype.drop = function(){
    _okg.is_drag = false;
    _okg.play_audio('code_drop');
    if(_okg._current_draggable){
        TweenMax.to(_okg._current_draggable, .3, {scaleX :1, scaleY:1});
        _okg._current_draggable.shadow = null;
        if(_okg.dropToDelete !== null && _okg.dropToDelete.label === "delete"){
            _okg.libraries = _.without(_okg.libraries, _okg._current_draggable);
            TweenMax.to(_okg._current_draggable, .5, {ease:Back.easeIn, scaleX:.3, scaleY:.3, onComplete:function(){
                _okg.droppableMenu.removeChild(_okg._current_draggable);
                _okg.deletezone.gotoAndStop(2);
            }});
            return false;
        }
        if(_okg._current_draggable.y < _okg.libraries[0].y){
            _okg._current_draggable.y = _okg.libraries[0].y+50;
        }
        if(_okg.dropTo !== null && _okg.dropTo.label === "loop"){
            /* si on drop sur une loop on delete l'element puis on l'ajoute directement au container */
            /* on va tester ça pi si c'est pourave on changera */

            /* on teste la position y en dif */
            if(_okg._current_draggable.y < _okg.dropTo.y+_okg.dropTo.getBounds().height - 60){
                /* si on drop franchement au dessus de de bar on ajoute le draggable à la loop */
                /* puis on le dépose directement dans la loop dropTo */
                var toDrop = _.clone(_okg._current_draggable);
                toDrop.mouseChildren = false;
                toDrop.cache(0,-25,190,90);
                
                if(typeof _okg.dropTo.libraries === "undefined"){
                    _okg.dropTo.libraries = [];
                }
                toDrop.scaleX = toDrop.scaleY = 1;
                _okg.dropTo.children[0].bar.addChild(toDrop);
                
                
                /* on ajoute la librairie comme dernier element il faudra par la suite le placer dynamiquement */
                
                /* on ajoute la librairie au module loop selectionné */
                _okg.dropTo.libraries.push(toDrop);
                /* on trie l'affichage de la librairie selon la position des objets */
                _okg.sortLoop(_okg.dropTo);
                
                /* on supprime le draggable de la scene */
                _okg.droppableMenu.removeChild(_okg._current_draggable);
                /* et on nettoie la librairie */
                _okg.libraries = _.without(_okg.libraries, _okg._current_draggable);
                
                /* puis on réorganise l'ordre dans la loop */
                
                /* on recrée des ecouteurs pour le draggable sortable interieur de la loop */
                toDrop.on("mousedown", function(evt) {
                    this.offset = {
                        x:evt.target.x+evt.target.parent.x+evt.target.parent.parent.x+evt.target.parent.parent.parent.x+evt.target.parent.parent.parent.parent.x, 
                        y:evt.target.y+evt.target.parent.y+evt.target.parent.parent.y+evt.target.parent.parent.parent.y+evt.target.parent.parent.parent.parent.y
                    };
                    //this.parent.setChildIndex(this, this.parent.getNumChildren()-1);
                    this.parent.setChildIndex(this, this.parent.getNumChildren()-1);
                
                    TweenMax.to(this, .3, {scaleX :1.2, scaleY:1.2});
                    this.shadow = new createjs.Shadow("rgba(0,0,0,.1)", 15, 15, 0);
                });
                toDrop.on("pressmove", function(evt) {
                    /* special drag for loop module */
                    evt.target.x = _okg.stage.mouseX - this.offset.x;
                    evt.target.y = _okg.stage.mouseY - this.offset.y;
                    var target = this.parent.parent.parent;
                    if(typeof target !== undefined){
                        _okg.sortLoop(target, this);
                    }
                });
                toDrop.on("pressup", function(evt) { 
                    /* special drop for loop module */
                    TweenMax.to(this, .3, {scaleX :1, scaleY:1});
                    this.shadow = null;

                    var target = this.parent.parent.parent;
                    if(typeof target !== undefined){
                        if(this.x > (window.innerWidth/2 - 210)){
                            this.parent.removeChild(this);
                            target.libraries = _.without(target.libraries, this);
                            _okg.replaceLinks();
                        }else{
                            if(this.y < -60 || this.y > target.getBounds().height-60){
                                this.parent.removeChild(this);
                                target.libraries = _.without(target.libraries, this);
                                var event = {stageX:_okg.stage.mouseX-200, stageY:_okg.stage.mouseY};
                                _okg.createDraggable("left", event);
                                _okg.replaceLinks();
                            }
                        }
                        _okg.sortLoop(target, null);
                    }
                });
                
            }
        }
    }
    if(typeof _okg._current_draggable !== "undefined" && _okg._current_draggable !== null && _okg._current_draggable.x > (window.innerWidth/2 - 210)){
        TweenMax.to(_okg._current_draggable, .5, {scaleX:0, scaleY:0, ease:Back.easeIn, onComplete:function(){
            _okg._current_draggable.y = 10000;
            _okg.droppableMenu.removeChild(_okg._current_draggable);
            _okg.libraries = _.without(_okg.libraries, _okg._current_draggable);
            _okg._current_draggable = null;
            _okg.replaceLinks();
        }});
    }else{
        _okg._current_draggable = null;
        setTimeout(function(){
            _okg.replaceLinks();
        },20);
    }
}
code.prototype.sortLoop = function(target, dragger){
    var h = target.libraries.length;
    if(h === 0){
        h=1;
    }
    target.children[0].bar.graph.scaleY = h;
    target.children[0].bottom.y = target.children[0].bar.y + (60*(h));
    target.setBounds(0,0,190,60+(60*(h))+60);
                
    var lib_order = _.sortBy(target.libraries, "y");
    for(var i=0; i<lib_order.length; i++){
        if(dragger !== lib_order[i]){
            lib_order[i].x = 20;
            lib_order[i].y = 60*i;
        }
    }
}
code.prototype.tick = function() {
    if(_okg == null){
        return false;
    }
    if(_okg.is_drag && _okg._current_draggable !== null && typeof _okg._current_draggable !== "undefined"){
        var lib_order = _.sortBy(_okg.libraries, "y");
        var y=_okg.libraries[0].y+_okg.libraries[0].getBounds().height-20;
        
        _okg._current_draggable.x = _okg.stage.mouseX-225;
        _okg._current_draggable.y = _okg.stage.mouseY-25;
        
        for(var i=0; i<lib_order.length; i++){
            if(lib_order[i].id !== _okg._current_draggable.id && lib_order[i].label!=="compiler"){
                lib_order[i].y = y;
                y+= lib_order[i].getBounds().height-30;
            }
        }
        
        _okg.hitest();
    }
    
    //_okg.replaceLinks();
    _okg.stage.update();
}
code.prototype.replaceLinks = function(){
    var lib_order = _.sortBy(_okg.libraries, "y");
    /* 1- on supprime tous les liens pour les redessiner */
    for(var i=0; i<lib_order.length; i++){
        lib_order[i].link = null;
        lib_order[i].children[0].dropzone.gotoAndStop(0);
        if(i === lib_order.length){return false;};
        _okg.getLink(i);
    }
}
code.prototype.getLink = function(i){
    var lib_order = _.sortBy(_okg.libraries, "y");
    for(var l=i; l<lib_order.length; l++){
        if(i !== l){
            var intersect = _okg.intersect(lib_order[i], lib_order[l]); 
            if(intersect.width !== 0){
                lib_order[i].link = l;
                _okg.droppableMenu.setChildIndex( lib_order[l], _okg.droppableMenu.getNumChildren()-1);
                lib_order[l].y = lib_order[i].y+lib_order[i].getBounds().height-30;
                lib_order[l].x = lib_order[i].x;
                return l;
            }   
        }
    }
    return null;
}
code.prototype.pause = function(){
}
code.prototype.play = function(){
}
code.prototype.destroy = function(callBack){
    createjs.Ticker.removeEventListener('tick', _okg.tick);
    callBack();
}
code.prototype.hitest = function(){
    var lib_order = _.sortBy(_okg.libraries, "y");
    for(var i=0; i<lib_order.length; i++){
        if(lib_order[i].id !== this._current_draggable.id){
            var hit = this.intersect(this._current_draggable, lib_order[i]);
            lib_order[i].children[0].dropzone.gotoAndStop(0);
            if(hit.width !== 0 || hit.height !== 0){
                lib_order[i].children[0].dropzone.gotoAndStop(1);
                _okg.dropTo = lib_order[i];
                return false;
            }else{
                //lib_order[i].children[0].dropzone.gotoAndStop(0);
                _okg.dropTo = null;
            }
            var hitDelete = this.intersect(this._current_draggable, this.deletezone);
            if(hitDelete.width !== 0 || hitDelete.height !== 0){
                this.deletezone.gotoAndStop(1);
                _okg.dropToDelete = this.deletezone;
            }else{
                this.deletezone.gotoAndStop(2);
                _okg.dropToDelete = null;
            }
        }
    }
}
code.prototype.intersect = function(r1, r2) {
    // determine which rectangle
    // is left, right, top, bottom
    var leftMost = (r1.x < r2.x) ? r1 : r2;
    var rightMost = (r1.x > r2.x) ? r1 : r2;
    var upMost = (r1.y < r2.y) ? r1 : r2;
    var downMost = (r1.y > r2.y) ? r1 : r2;
    
    // get the 4 corners of what
    // would be the intersection rectangle
    var upperLeft = [rightMost.x, downMost.y];
    var upperRight = [leftMost.x + leftMost._bounds.width, downMost.y];
    var lowerLeft = [rightMost.x, upMost.y + upMost._bounds.height];
    var lowerRight = [leftMost.x + leftMost._bounds.width, upMost.y + upMost._bounds.height];
    
    // get the origin point
    var x = upperLeft[0];
    var y = upperLeft[1];
    
    // get width and height
    var width = upperRight[0] - upperLeft[0];
    var height = lowerLeft[1] - upperLeft[1];
    
    // there is no intersection if
    // width or height is negative
    if (width < 0 || height < 0) {
        width = 0;
        height = 0;
    }
    
    // here we draw the intersecting rectangle
    //var r = drawRect(x, y, width, height, '#f00', '#f00');
    return {x:x, y:y, width:width, height:height};
}
code.prototype.parseAndPlay = function(){
    this.parsedLibraries = [];
    var lib_order = _.sortBy(_okg.libraries, "y");
    for(var i=0; i<lib_order.length; i++){
        switch(lib_order[i].label){
            case 'compiler':
                /* play start motion */
                this.parsedLibraries.push("start_motion");
                break;
            case 'loop':
                /* push each loop libraries */
                for(var n=0; n < parseInt(lib_order[i].children[0].count_loop.text); n++){
                    for(var l=0; l<lib_order[i].libraries.length; l++){
                        this.parsedLibraries.push(lib_order[i].libraries[l].label);
                    }
                }
                break;
            case 'left':
                this.parsedLibraries.push("left");
                break;
            case 'right':
                this.parsedLibraries.push("right");
                break;
            case 'top':
                this.parsedLibraries.push("top");
                break;
            case 'bottom':
                this.parsedLibraries.push("bottom");
                break;
        }
    }
    this.player.x = this.sizes.player.x;
    this.player.y = this.sizes.player.y;
    this.play_librarie(0);
}
code.prototype.play_librarie = function(i){
    if(typeof this.parsedLibraries[i] === "undefined"){
        console.log('this is the end');
        if(this.end_level() === "win"){
            this.win();
        }else{
            this.die();
        }
        return false;
    }
    switch(this.parsedLibraries[i]){
        case 'compiler':
            this.play_librarie(i+1);
            break;
        case 'start_motion':
            this.play_librarie(i+1);
            break;
        case 'left':
            _okg.play_audio('code_move');
            TweenMax.to(_okg.player, .5, {x:_okg.player.x-50, onComplete:function(){
                (_okg.player_is_on_plane())?_okg.play_librarie(i+1) : _okg.die();
            }});
            break;
        case 'right':
            _okg.play_audio('code_move');
            TweenMax.to(this.player, .5, {x:this.player.x+50, onComplete:function(){
                (_okg.player_is_on_plane()) ? _okg.play_librarie(i+1) : _okg.die();
            }});
            break;
        case 'top':
            _okg.play_audio('code_move');
            TweenMax.to(this.player, .5, {y:this.player.y-50, onComplete:function(){
                (_okg.player_is_on_plane()) ? _okg.play_librarie(i+1) : _okg.die();
            }});
            break;
        case 'bottom':
            _okg.play_audio('code_move');
            TweenMax.to(this.player, .5, {y:this.player.y+50, onComplete:function(){
                (_okg.player_is_on_plane()) ? _okg.play_librarie(i+1) : _okg.die();
            }});
            break;
    }
}
code.prototype.player_is_on_plane = function(){
    if(this.end_level() === "win"){
        return true;
    }
    var brick = _.where(this.plane.children, {x:this.player.x, y:this.player.y, label:"block"});
    if(brick.length > 0 ){ return true; }
    return false;
}
code.prototype.end_level = function(){
    var brick = _.where(this.plane.children, {x:this.player.x, y:this.player.y, label:"win"});
    if(brick.length > 0){return "win"};
    return "lose";
}
code.prototype.die = function(){
    _okg.play_audio('code_lose');
    TweenMax.to(this.player, .1, {x:this.player.x+10, yoyo:true, repeat:8, onComplete:function(){
        TweenMax.to(_okg.player, .4, {x : _okg.sizes.player.x, y : _okg.sizes.player.y});
    }});
    console.log('there is an error on traject');
}
code.prototype.win = function(){
    _okg.play_audio('code_win');
    //alert('you win');
    if(this.winning_motion === null){
        this.winning_motion = new lib.winning_motions();
    }
    this.winning_motion.x = window.innerWidth/2;
    this.winning_motion.y = window.innerHeight/2;
    this.stage.addChild(this.winning_motion);
    this.winning_motion.gotoAndStop(this._level);
    TweenMax.to(this.winning_motion, 1, {y:window.innerHeight+400, ease:Expo.easeIn, delay:2, onComplete:function(){
        _okg.stage.removeChild(_okg.winning_motion);
        _okg.destroy_level();
    }});
}
code.prototype.destroy_level = function(){
    var lib_order = _.sortBy(_okg.libraries, "y").reverse();
    for(var l=0; l<lib_order.length; l++){
        this.delete_block(lib_order[l], l);
    }
    for(var i=0; i<this.plane.children.length; i++){
        TweenMax.to(this.plane.children[i], .5, {y:this.plane.children[i].y+200, alpha:0, onComplete:function(){
            if(i === _okg.plane.children.length){
                _okg._level++;
                _okg.drawGrid();
            }
        }, delay:.1*i, ease:Expo.easeIn});
    }
}
code.prototype.delete_block = function(target, delay){
    if(target.label === "compiler"){
        return false;
    }
    TweenMax.to(target, .8, {
        y:target.y+400,
        alpha:0,
        delay:.1*delay,
        ease:Expo.easeIn,
        onComplete:function(){
            _okg.libraries = _.without(_okg.libraries, target);
            _okg.droppableMenu.removeChild(target);
        }
    });
}
code.prototype.play_audio = function(label){
    if(typeof _okg[label] === "undefined"){
        audio_manager.play_sound(label, 0, function(e){
            _okg[label] = e;
            console.log("play sound ",e);
        });
    }else{
        _okg[label].play(); 
    }
}
var code_levels = [
    {
        intro:  "C'est le matin il faut se lever, aide Matthieu à se lever.",
        plane:[
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,2,1,1,3,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "C'est le moment de prendre un petit déjeuner, emmène Matthieu à la cuisine.",
        plane:[
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,3,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,1,1,2,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "Matthieu doit ranger, aide le à laver son assiette.",
        plane:[
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,2,1,1,0,0,0],
            [0,0,0,0,0,0,1,0,0,0],
            [0,0,0,0,0,0,1,0,0,0],
            [0,0,0,0,0,0,3,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "Il est temps de se laver les dents ! emmène Matthieu à la salle de bain.",
        plane:[
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,3,0,0,0,0,0,0],
            [0,0,0,1,0,0,2,0,0,0],
            [0,0,0,1,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "Tic tac ! Trouve vite le sac de Matthieu !",
        plane:[
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,1,1,0,0,0,0],
            [0,0,0,1,0,1,1,0,0,0],
            [0,0,0,2,0,0,1,3,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "Oh my god ! il faut aller à l'école...",
        plane:[
            [0,3,1,0,0,0,0,0,0,0],
            [0,0,1,1,0,0,0,0,0,0],
            [0,0,0,1,1,0,0,0,0,0],
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,0,0,1,1,0,0,0],
            [0,0,0,0,0,0,1,2,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "C'est la récrée, emmène Matthieu pour qu'il s'amuse.",
        plane:[
            [0,2,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,1,1,1,1,3,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "C'est la récrée, emmène Matthieu pour qu'il s'amuse.",
        plane:[
            [0,2,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,1,1,1,1,3,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "Midi ! Emmène Matthieu à la cantine pour manger ses choux de bruxelles...<br/>Sinon y'a des frites !",
        plane:[
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,3,1,1,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,1,0,2,0,0,0],
            [0,0,0,0,1,0,1,0,0,0],
            [0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "On se concentre et on retourne en classe !<br/>Travail du jour... jouer avec OkaOka !",
        plane:[
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,2,1,0,0,0,0,0,0],
            [0,0,0,1,1,0,0,0,0,0],
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,0,0,1,1,0,0,0],
            [0,0,0,0,0,0,3,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "L'école est déjà fini ! Aide Maman à ramener Matthieu de l'école",
        plane:[
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,2,1,0,0,0,0,0,0],
            [0,0,0,1,1,0,0,0,0,0],
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,0,0,1,1,0,0,0],
            [0,0,0,0,0,0,3,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "L'école est déjà fini ! Aide Maman à ramener Matthieu de l'école",
        plane:[
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,2,1,0,0,0,0,0,0],
            [0,0,0,1,1,0,0,0,0,0],
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,0,0,1,1,0,0,0],
            [0,0,0,0,0,0,3,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "C'est l'heure du gouté ! Mange la crêpe de Matthieu pour l'énerver...",
        plane:[
            [3,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,1,1,0,0,0],
            [1,0,0,0,0,0,1,0,0,0],
            [1,0,0,0,0,0,1,0,0,0],
            [1,1,1,1,1,1,1,1,1,1],
            [0,0,0,0,0,0,1,0,0,1],
            [0,0,0,0,0,0,2,1,1,1],
            [0,0,0,0,0,0,1,0,0,1],
            [0,0,0,0,0,0,1,1,1,1]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "Joue avec Matthieu pour vous détendre...",
        plane:[
            [2,1,0,0,0,0,0,0,0,0],
            [0,1,1,0,0,0,0,0,0,0],
            [0,0,1,1,0,0,0,0,0,0],
            [0,0,0,1,1,0,0,0,0,0],
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,0,0,1,1,0,0,0],
            [0,0,0,0,0,0,1,1,0,0],
            [0,0,0,0,0,0,0,1,1,0],
            [0,0,0,0,0,0,0,0,1,1],
            [0,0,0,0,0,0,0,0,0,3]
        ],
        min_blocks:4,
        max_blocks:0
    },
    {
        intro:  "Joue avec Matthieu pour vous détendre...",
        plane:[
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,1],
            [0,1,1,0,0,0,0,0,0,1],
            [0,0,1,1,0,0,0,0,0,1],
            [0,0,0,1,1,0,0,0,0,1],
            [0,0,0,0,1,1,0,0,0,1],
            [0,0,0,0,0,1,1,0,0,1],
            [0,0,0,0,0,0,1,1,0,1],
            [0,0,0,0,0,0,0,3,0,1],
            [0,0,0,0,0,0,0,0,0,2]
        ],
        min_blocks:4,
        max_blocks:0
    }
];
/*  {
        intro:  "Joue avec Matthieu pour vous détendre...",
        plane:[
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ],
        min_blocks:4,
        max_blocks:0
    }*/