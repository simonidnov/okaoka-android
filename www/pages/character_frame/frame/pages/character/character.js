_character = [];
function character(params) {
    console.log('character');
    ajax_request._loader.show();
    this.params = params;
    if(typeof params.width !== "undefined" && typeof params.height !== "undefined" ){
        this.width = params.width;
        this.height = params.height;
    }else{
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    this.is_motion = false;
    this.debug = false;
    $('.ticker').css('display','none');
    this.define_vars();
    this.name = "character";
    this.character_number = _character.length;
    _character[this.character_number] = this;
    this.stage = null;
    this.gif_encode = false;
    this.type = 0;
    if(typeof app._page_request.type !== "undefined"){
        this.type = app._page_request.type;
    }
}
character.prototype.init = function(params) {
    console.log('init');
    var _self = this;
    setTimeout($.proxy(function(){
        if(typeof this.params.datas !== "undefined" && this.params.datas){
            _self.init_stage();
        }else{
            if(typeof app._page_request.id !== "undefined"){
                ajax_request.get(
                    "/nse/character",
                    {
                        "id":app._page_request.id
                    },
                    function(success){
                        _self.params.datas = JSON.parse(success.result[0].datas);
                        _self.init_stage();
                        ajax_request._loader.show();
                    },
                    function(fail){
                        _self.init_stage();
                    }
                )
            }else{
                _self.init_stage();
            }
        }
    }, this), 600);
}
character.prototype.close_shape_nav = function(){
    if(this.buttons_container){
        if(this.buttons_container.parent !== null){
            this.buttons_container.parent.removeChild(this.buttons_container);
        }
    }
}
character.prototype.open_shape_nav = function(){
    var _self = this;
    if(typeof this.buttons_container === "undefined"){
        this.top_button = new lib.circle_buttons();
        this.bottom_button = new lib.circle_buttons();
        this.left_button = new lib.circle_buttons();
        this.right_button = new lib.circle_buttons();
        this.buttons_container = new createjs.Container();
        
        this.right_button.mouseEnabled = true;
        this.left_button.mouseEnabled = true;
        this.top_button.mouseEnabled = true;
        this.bottom_button.mouseEnabled = true;
        
        this.right_button.off('click').on('click', function(){
            app.play_sound('hit');
            _self.right_button.hitter.play();
            var sz ={
                sw : _self.e_p[_self.original_event.element.name].width,
                sh : _self.e_p[_self.original_event.element.name].height
            }
            TweenLite.to(sz, .5, {sw:_self.e_p[_self.original_event.element.name].width+30, onUpdate:function(){
                _self.replace_elements(sz.sw, sz.sh, _self.current_target);
                _self.color_changed = false;
                _self.redraw_body();
            }, ease:Back.easeOut});
            return false;
        });
        this.left_button.off('click').on('click', function(){
            app.play_sound('hit');
            _self.left_button.hitter.play();
            var sz ={
                sw : _self.e_p[_self.original_event.element.name].width,
                sh : _self.e_p[_self.original_event.element.name].height
            }
            TweenLite.to(sz, .5, {sw:_self.e_p[_self.original_event.element.name].width-30, onUpdate:function(){
                _self.replace_elements(sz.sw, sz.sh, _self.current_target);
                _self.color_changed = false;
                _self.redraw_body();
            }, ease:Back.easeOut});
            return false;
        });
        this.top_button.off('click').on('click', function(){
            app.play_sound('hit');
            _self.top_button.hitter.play();
            var sz ={
                sw : _self.e_p[_self.original_event.element.name].width,
                sh : _self.e_p[_self.original_event.element.name].height
            }
            if(_self.original_event.element.name === "head" || _self.original_event.element.name === "neck"){
                TweenLite.to(sz, .5, {sh:_self.e_p[_self.original_event.element.name].height-30, onUpdate:function(){
                    _self.replace_elements(sz.sw, sz.sh, _self.current_target);
                    _self.color_changed = false;
                    _self.redraw_body();
                }, ease:Back.easeOut});
            }else{
                TweenLite.to(sz, .5, {sh:_self.e_p[_self.original_event.element.name].height+30, onUpdate:function(){
                    _self.replace_elements(sz.sw, sz.sh, _self.current_target);
                    _self.color_changed = false;
                    _self.redraw_body();
                }, ease:Back.easeOut});
            }
            return false;
        });
        this.bottom_button.off('click').on('click', function(){
            app.play_sound('hit');
            _self.bottom_button.hitter.play();
            var sz ={
                sw : _self.e_p[_self.original_event.element.name].width,
                sh : _self.e_p[_self.original_event.element.name].height
            }
            if(_self.original_event.element.name === "head" || _self.original_event.element.name === "neck"){
                TweenLite.to(sz, .5, {sh:_self.e_p[_self.original_event.element.name].height+30, onUpdate:function(){
                    _self.replace_elements(sz.sw, sz.sh, _self.current_target);
                    _self.color_changed = false;
                    _self.redraw_body();
                }, ease:Back.easeOut});
            }else{
                TweenLite.to(sz, .5, {sh:_self.e_p[_self.original_event.element.name].height-30, onUpdate:function(){
                    _self.replace_elements(sz.sw, sz.sh, _self.current_target);
                    _self.color_changed = false;
                    _self.redraw_body();
                }, ease:Back.easeOut});
            }
            return false;
        });
        
        this.buttons_container.addChild(this.top_button);
        this.buttons_container.addChild(this.bottom_button);
        this.buttons_container.addChild(this.left_button);
        this.buttons_container.addChild(this.right_button);
        
    }else{
        if(this.buttons_container.parent !== null){
            this.buttons_container.parent.removeChild(this.buttons_container);
        }
    }
    this.original_event.element.parent.addChild(this.buttons_container);
    
    setTimeout(function(){
        _self.right_button.icon.gotoAndStop('right');
        _self.left_button.icon.gotoAndStop('left');
        _self.top_button.icon.gotoAndStop('top');
        _self.bottom_button.icon.gotoAndStop('bottom');
    },20);
    
    //this.buttons_container.x = this.original_event.event.stageX;
    //this.buttons_container.y = this.original_event.event.stageY;
    //var self = this;
    //var h = (self.container.getBounds().height)*self.container.scaleY;
    //self.buttons_container.x = self.original_event.element.x + self.container.x + self.original_event.element.parent.x;
    //self.buttons_container.y = self.container.y - h + self.original_event.element.parent.parent.y;
    //self.original_event.element.y + self.container.y - self.original_event.element.parent.y;
}
character.prototype.init_stage = function() {
    var _self = this;
    if(typeof this.params.height === "undefined"){
        this.size = {
            w: _self.width,
            h: _self.height - 120
        };
        $('#'+this.params.canvas).css({
            "width": this.size.w,
            "height": this.size.h,
            "left": (_self.width / 2 - this.size.w / 2) + 'px',
            "position": "absolute"
        });
    }else{
        this.size = {
            w: _self.params.width,
            h: _self.params.height
        };
        $('#'+this.params.canvas).css({
            "width": this.size.w,
            "height": this.size.h
        });
    }
    
    this.stage = new createjs.Stage(this.params.canvas);
    
    $('#'+this.params.canvas).attr({
        "width": this.size.w,
        "height": this.size.h
    });
    this.stage.autoClear = true;
    
    this.ticker.name="ticker";
    createjs.Ticker.addEventListener("tick", $.proxy(this.ticker, this));
    createjs.EventDispatcher.initialize(this);
    
    if(this.params.touch_enabled === true){
        createjs.Touch.enable(this.stage);
        $('#animate_button').off('click').on('click', $.proxy(this.save, this));
        $('#infos_button').off('click').on('click', function(){
            var pop = new PopUp();
            pop.open_popup(
                {
                    "title":"Aide ?",
                    "message":'<video src="videos/tutorial.m4v" width="200" autoplay controls></video>',
                    "buttons":[
                        {"label":"ok"}
                    ]
                }, 
                function(e, datas){delete pop;}
            );
            return false;
        });
        $('#save_button').off('click').on('click', $.proxy(this.save, this));
        $('#prev_button').off('click').on('click', $.proxy(this.unanimate, this));
    }else{
        
    }
    createjs.Ticker.setFPS(120);
    
    /* create background color */
    this.background = new createjs.Shape();
    
    if(typeof this.params.bkcolor !== "undefined"){
        this.bkcolor = this.params.bkcolor;
    }else{
        //if(typeof this.bkcolor === "undefined"){
        this.bkcolor = this.filters.color[Math.floor(Math.random()*this.filters.color.length)];
        //}
    }
    
    console.log('this.bkcolor :::::::: ', this.bkcolor);
    this.background.graphics.beginFill(this.bkcolor).drawRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );
    this.stage.addChild(this.background);
    
    this.create_body();
    if(this.params.touch_enabled === true){
        setTimeout($.proxy(function(){
            this.create_navigation();
        }, this),2000);
        this.set_motion();
    }
    $('#print_button').off('click').on('click', function() {
        window.print();
        return false;
    });
    $(document).on('resize', function() {
        _self.resize();
        return false;
    });
    
    
    
    //this.stage.off('click').on('click', function(e){
    //    e.preventDefault();
    //    //_self.close_shape_nav();
    //});
    setTimeout(function(){
        app.stage_inited();
    }, 2500);
}
character.prototype.unanimate = function(){
    var _self = this;
    _self.close_shape_nav();
    _self.positions(_self, _self.positions_list['stand'].infos);
    $('#prev_button').css('display', 'none');
    $('#animate_button').css('display', 'block');
    $('#save_button').css('display', 'none');
    this.is_motion = false;
    
    for (var i = 0; i < _.keys(this.e_p).length; i++) {
        var ele = this[_.keys(this.e_p)[i]];
        ele.removeAllEventListeners();
        ele.on("mousedown", function(evt) {
            _self.set_original_event(this, evt);
        });
        ele.on("pressmove", function(evt) {
            _self.resize_element(this, evt);
        });
        ele.on("pressup", function(evt) {
            _self.set_element(this, evt);
        });
    }
    this.hands_assets_1.removeAllEventListeners();
    this.hands_assets_2.removeAllEventListeners();
    this.shoes_assets_1.removeAllEventListeners();
    this.shoes_assets_2.removeAllEventListeners();
    //this.hands_assets_1.mouseEnabled = false;
    //this.hands_assets_2.mouseEnabled = false;
    //this.shoes_assets_1.mouseEnabled = false;
    //this.shoes_assets_2.mouseEnabled = false;
    
    this.create_navigation();
    
    this.motions.stand();
}
character.prototype.animate = function(){
    
    if(window.innerWidth >= 700){
        var nav_height = 80;
    }else{
        var nav_height = 60;
    }
    
    this.close_shape_nav();
    $('#prev_button').css('display', 'block');
    $('#animate_button').css('display', 'none');
    $('#save_button').css('display', 'block');
    for (var i = 0; i < _.keys(this.e_p).length; i++) {
        var ele = this[_.keys(this.e_p)[i]];
        ele.removeAllEventListeners();
        
        ele.on("mousedown", function(evt) {
            _self.set_original_event(this, evt);
        });
        ele.on("pressmove", function(evt) {
            _self.rotate_element(this, evt, _self);
        });
        ele.on("pressup", function(evt) {
            _self.rotated_element(this, evt);
        });
    }
    
    
    this.hands_assets_1.mouseEnabled = true;
    this.hands_assets_1.on('click', function(){
        if(_self.hands_assets_1.children[0].scaleX === 1){
            _self.hands_assets_1.children[0].scaleX=-1;
        }else{
            _self.hands_assets_1.children[0].scaleX=1;
        }
        return false;
    });
    
    this.hands_assets_2.mouseEnabled = true;
    this.hands_assets_2.on('click', function(){
        if(_self.hands_assets_2.children[0].scaleX === 1){
            _self.hands_assets_2.children[0].scaleX=-1;
        }else{
            _self.hands_assets_2.children[0].scaleX=1;
        }
        return false;
    });
    
    this.shoes_assets_1.mouseEnabled = true;
    this.shoes_assets_1.on('click', function(){
        if(_self.shoes_assets_1.children[0].scaleX === 1){
            _self.shoes_assets_1.children[0].scaleX=-1;
        }else{
            _self.shoes_assets_1.children[0].scaleX=1;
        }
        return false;
    });
    
    this.shoes_assets_2.mouseEnabled = true;
    this.shoes_assets_2.on('click', function(){
        if(_self.shoes_assets_2.children[0].scaleX === 1){
            _self.shoes_assets_2.children[0].scaleX=-1;
        }else{
            _self.shoes_assets_2.children[0].scaleX=1;
        }
        return false;
    });
    
    this.is_motion = true;
    if(typeof this.myTween !== "undefined" && this.myTween !== null){
        this.myTween.kill();
        delete this.myTween;
    }
    $('.navigation').css('height', nav_height+'px');
    $('.nav_selector .container').html('');
    $('.nav_picker, .nav_filter').css('display', 'none');
    var _self = this;
    this.resize();
    /* CREATE MOTION NAVIGATION */
    for (var i = 0; i < _.keys(_self.positions_list).length; i++) {
        $('.nav_selector .container').append('<div class="button" data-type="' + _.keys(_self.positions_list)[i] + '"><img src="' + _self.positions_list[_.keys(_self.positions_list)[i]].icon + '"/></div>');
    }
    $('.nav_selector .container .button').off('click').on('click', function(e) {
        console.log('click');
        e.stopPropagation();
        e.preventDefault();
        $('.nav_selector .container .button').removeClass('selected');
        $(this).addClass('selected');
        /* ANIMATE AS LABEL BUTTON DATA_TYPE */
        var pos = $(this).attr('data-type');
        _self.positions(_self, _self.positions_list[pos].infos);
        return false;
    });
    
    $('#nav_selector .container').css('width', (nav_height * _.keys(_self.positions_list).length) + 'px');
    TweenLite.set("#nav_selector .scroller",{x:0, y:0});
}
character.prototype.resize = function() {
    var _self = this;
    if(!_self.body){
        return false;
    }
    if(typeof _self.myTween !== "undefined"){
        _self.myTween.kill();
    }
    if(this.params.touch_enabled){
        this.size = {
            w: _self.width,
            h: _self.height - $('.character .navigation').height()
        };
        $('#'+this.params.canvas).css({
            "width": _self.size.w,
            "height": _self.size.h,
            "left": (_self.width / 2 - _self.size.w / 2) + 'px',
            "position": "absolute"
        });
    }else{
        this.size = {
            w: _self.params.width,
            h: _self.params.height
        };
        $('#'+this.params.canvas).css({
            "width": _self.size.w,
            "height": _self.size.h
        });
    }
    if(parseInt($('#'+this.params.canvas).attr('width')) !== _self.size.w || parseInt($('#'+this.params.canvas).attr('height')) !== _self.size.h){
        $('#'+this.params.canvas).attr({
            "width": _self.size.w,
            "height": _self.size.h
        });
    }
    if(typeof _self.container !== "undefined"){
        var h = _self.container.getBounds().height + 100,
            w = _self.container.getBounds().width + 100,
            max = _self.size.h;
        var scale = ((max/h).toFixed(2));
        if(_self.size.h < _self.size.w){
            var scale = ((max/w).toFixed(2));
        }
        if(_self.legLeft.y + _self.legLeft.getBounds().height > _self.armLeft.y + _self.armLeft.getBounds().height){
            var regY = _self.legLeft.y + _self.legLeft.getBounds().height;
        }else{
            var regY = _self.armLeft.y + _self.armLeft.getBounds().height;
        }
        _self.container.regY = regY;
        TweenLite.to(_self.container, .5, {
            scaleX:scale, 
            scaleY:scale, 
            y:_self.size.h,
            onComplete : function(){
                _self.stage.update();
                if(typeof _self.params.touch_enabled !== "undefined" && _self.params.touch_enabled === true && !_self.is_motion){
                    _self.myTween = new TweenLite(_self.container, 1, {
                        y: _self.container.y - 10,
                        onComplete: reverseTween,
                        onReverseComplete: restartTween
                    });
                    function reverseTween() {
                        _self.myTween.reverse();
                    }
                    function restartTween() {
                        _self.myTween.restart();
                    }
                }
            }
        });
    }
}
character.prototype.set_motion = function() {
    var time = 20000;
    if(!this.params.touch_enabled){
        time = Math.round(Math.random()*5000)+2000;
    }
    setTimeout($.proxy(function() {
        if (this.print) {
            return false;
        }
        if(this.is_motion){
            return false;
        }
        //this.motions.hello(this);
        this.set_motion();
    }, this), time);
}
character.prototype.create_navigation = function() {
    var _self = this;
    
    if(window.innerWidth >= 700){
        var nav_height = 80;
    }else{
        var nav_height = 60;
    }
    
    $('.nav_selector .container').html('');
    for (var i = 0; i < _.keys(_self.navigation_types).length; i++) {
        if(parseInt(_self.type) !== 0){
            console.log('type not 0 ', _self.type);
            if(_self.navigation_types[_.keys(_self.navigation_types)[i]].type === "all" || _self.navigation_types[_.keys(_self.navigation_types)[i]].type == _self.type){
                $('.nav_selector .container').append('<div class="button" data-type="' + _.keys(_self.navigation_types)[i] + '"><img src="' + _self.navigation_types[_.keys(_self.navigation_types)[i]].icon + '"/></div>');
            }
        }else{
            $('.nav_selector .container').append('<div class="button" data-type="' + _.keys(_self.navigation_types)[i] + '"><img src="' + _self.navigation_types[_.keys(_self.navigation_types)[i]].icon + '"/></div>');
        }
    }
    $('.nav_selector .container .button').unbind('click').off('click').on('click', function(e) {
        console.log('click nav');
        e.stopPropagation();
        e.preventDefault();
        $('.nav_selector .container .button').removeClass('selected');
        $(this).addClass('selected');
        /*switch($(this).attr('data-type')){
            case 'skins':
                app.say(app.text('SKINS'), app.locale, 1.6, function(){});
                break;
            case 'eyes':
                app.say(app.text('EYES'), app.locale, 1.6, function(){});
                break;
            case 'eyebrow':
                app.say(app.text('EYEBROWS'), app.locale, 1.6, function(){});
                break;
            case 'noses':
                app.say(app.text('NOSES'), app.locale, 1.6, function(){});
                break;
            case 'hairs':
                app.say(app.text('HAIRS'), app.locale, 1.6, function(){});
                break;
            case 'mouths':
                app.say(app.text('MOUTHS'), app.locale, 1.6, function(){});
                break;
            case 'tops':
                app.say(app.text('TOPS'), app.locale, 1.6, function(){});
                break;
            case 'bottoms':
                app.say(app.text('BOTTOMS'), app.locale, 1.6, function(){});
                break;
            case 'glasses':
                app.say(app.text('GLASSES'), app.locale, 1.6, function(){});
                break;
            case 'shoes':
                app.say(app.text('SHOES'), app.locale, 1.6, function(){});
                break;
            case 'mustach':
                app.say(app.text('MUSTACH'), app.locale, 1.6, function(){});
                break;
            case 'barbes':
                app.say(app.text('BARBES'), app.locale, 1.6, function(){});
                break;
            case 'ears':
                app.say(app.text('EARS'), app.locale, 1.6, function(){});
                break;
            case 'bkcolor':
                app.say(app.text('BKCOLOR'), app.locale, 1.6, function(){});
                break;
            case 'hats':
                app.say(app.text('HATS'), app.locale, 1.6, function(){});
                break;
        }*/
        _self.set_subnav($(this).attr('data-type'));
        _UI.displayTouch($(this));
        return false;
    });
    
    this.nav_width = (nav_height * Math.floor(_self.width/nav_height));
    if(this.nav_width > nav_height*12){
        this.nav_width = nav_height*12;
    }
    $('#nav_selector').css('width', this.nav_width+'px');
    $('.nav_selector .container').css('width', (nav_height * $('.nav_selector .container .button').length) + 'px');
    
    //this.scroll_nav = Draggable.create("#nav_selector", {type:"scrollLeft", edgeResistance:0.5, throwProps:true});
    _self.scroll_nav = Draggable.create("#nav_selector .scroller", {
        type:"x", 
        edgeResistance:.5, 
        throwProps:true, 
        lockAxis:true, 
        bounds:"#nav_selector", 
        snap: {
            x: function(endValue) {
                return Math.round(endValue / $('.nav_selector').width()) * $('.nav_selector').width();
            }
        }, 
        onClick: function(e){
            e.stopPropagation();
            e.preventDefault();
        }
    });

    $('#nav_picker').css('width', _self.nav_width+'px');
    //this.scroll_picker = Draggable.create("#nav_picker", {type:"scrollLeft", edgeResistance:0.5, throwProps:true});
    this.scroll_nav = Draggable.create("#nav_picker .scroller", {
        type:"x", 
        edgeResistance:.5, 
        throwProps:true, 
        lockAxis:true, 
        bounds:"#nav_picker", 
        snap: {
            x: function(endValue) {
                return Math.round(endValue / $('.nav_selector').width()) * $('.nav_selector').width();
            }
        }, 
        onClick: function(e){
            e.stopPropagation();e.preventDefault();
        }
    });
    
    $('#nav_filter').css('width', this.nav_width+'px');
    //this.scroll_filter = Draggable.create("#nav_filter", {type:"scrollLeft", edgeResistance:0.5, throwProps:true});
    this.scroll_nav = Draggable.create("#nav_filter .scroller", {
        type:"x", 
        edgeResistance:.5, 
        throwProps:true, 
        lockAxis:true, 
        bounds:"#nav_filter", 
        snap: {
            x: function(endValue) {
                return Math.round(endValue / $('.nav_selector').width()) * $('.nav_selector').width();
            }
        }, 
        onClick: function(e){
            e.stopPropagation();e.preventDefault();
        }
    });
    _self.set_subnav("skins");
}
character.prototype.set_subnav = function(type) {
    var _self = this;
    
    if(window.innerWidth >= 700){
        var nav_height = 80;
    }else{
        var nav_height = 60;
    }
    
    var h = nav_height;
    _self.close_shape_nav();
    TweenLite.set("#nav_filter .scroller",{x:0, y:0});
    TweenLite.set("#nav_picker .scroller",{x:0, y:0});
    $('.nav_picker .container').html('');
    if (typeof _self.navigation_types[type].maps !== "undefined") {
        $('.nav_picker').css('display', 'block');
        h += nav_height;
        var template_subnav = "";
        for (var i = 0; i < _.keys(_self.navigation_types[type].maps).length; i++) {
            var curi = _self.navigation_types[type].maps[_.keys(_self.navigation_types[type].maps)[i]];
            console.log("curi ::: ",curi);
            console.log("curi.type ::: ",curi.type);
            if(parseInt(_self.type) !== 0){
                if(curi.type == "all" || curi.type == _self.type){
                    template_subnav += '<div class="button" data-type="' + type + '" data-id="'+i+'" data-name="'+ _.keys(_self.navigation_types[type].maps)[i] + '"><div class="head_preview_asset" style="background-image:url('+ curi.preview +');"></div></div>';
                    //$('#nav_picker_container').append(template_subnav);   
                }   
            }else{
                template_subnav += '<div class="button" data-type="' + type + '" data-id="'+i+'" data-name="'+ _.keys(_self.navigation_types[type].maps)[i] + '"><div class="head_preview_asset" style="background-image:url('+ curi.preview +');"></div></div>';
                //$('#nav_picker_container').append(template_subnav);
            }
        }
        //console.log('template_subnav :: ', template_subnav);
        $('#nav_picker_container').html(template_subnav);
        $('.nav_picker .container').css(
            {
                'width' : ($('.nav_picker .container .button').length * nav_height) + 'px'
            }
        );
        $('.nav_picker .container .button').unbind('click').off('click').on('click', function(e) {
            console.log('click subnav picker');
            e.stopPropagation();
            e.preventDefault();
            $('.nav_picker .container .button').removeClass('selected');
            $(this).addClass('selected');
            var element = null;
            _UI.displayTouch($(this));
            _self.close_shape_nav();
            switch($(this).attr('data-type')){
                case "hairs":
                    element = _self.hair_assets.hairs;
                    _self.containers.hairs_container.assets.hairs.status = $(this).attr('data-id');
                    _self.containers.backhairs_container.assets.backhairs.status = $(this).attr('data-id');
                    _self.redraw_body();
                    break;
                case "noses":
                    element = _self.face_assets.noses;
                    _self.containers.faces_container.assets.noses.status = $(this).attr('data-id');
                    break;
                case "eyes":
                    element = _self.face_assets.eyes;
                    _self.containers.faces_container.assets.eyes.status = $(this).attr('data-id');
                    break;
                case "eyebrow":{
                    element = _self.face_assets.eyebrow;
                    _self.containers.faces_container.assets.eyebrow.status = $(this).attr('data-id');
                    break;
                }
                case "mouths":
                    element = _self.face_assets.mouths;
                    _self.containers.faces_container.assets.mouths.status = $(this).attr('data-id');
                    break;
                case "mustach":
                    element = _self.face_assets.mustach;
                    _self.containers.faces_container.assets.mustach.status = $(this).attr('data-id');
                    break;
                case "barbes":
                    element = _self.barbes_assets.barbes;
                    _self.containers.barbes_container.assets.barbes.status = $(this).attr('data-id');
                    break;
                case "hats":
                    element = _self.accessories_assets.hats;
                    _self.containers.accessories_container.assets.hats.status = $(this).attr('data-id');
                    break;
                case "ears":
                    element = _self.hair_assets.ears;
                    _self.containers.hairs_container.assets.ears.status = $(this).attr('data-id');
                    break;
                case "glasses":
                    element = _self.face_assets.glasses;
                    _self.containers.faces_container.assets.glasses.status = $(this).attr('data-id');
                    break;
                case "tops":
                    element = _self.tops_assets.tshirt;
                    _self.containers.tops_container.assets.tshirt.status = $(this).attr('data-id');
                    break;
                case "shoes":
                    element = _self.shoes_assets_1.shoes;
                    _self.containers.shoes_01.assets.shoes.status = $(this).attr('data-id');
                    _self.containers.shoes_02.assets.shoes.status = $(this).attr('data-id');
                    break;
                case "hand":
                    element = _self.hands_assets_1.hand;
                    _self.containers.hands_01.assets.hand.status = $(this).attr('data-id');
                    _self.containers.hands_02.assets.hand.status = $(this).attr('data-id');
                    break;
                case "shoes_01":
                    element = _self.shoes_assets_1.shoes;
                    _self.containers.shoes_01.assets.shoes.status = $(this).attr('data-id');
                    break;
                case "shoes_02":
                    element = _self.shoes_assets_2.shoes;
                    _self.containers.shoes_02.assets.shoes.status = $(this).attr('data-id');
                    break;
                default:
                    break;
            }
            _self.set_containers();
            if(element !== null){
                /*TweenLite.to(element, 0.1, {
                    scaleX: "1.05",
                    scaleY: "1.05",
                    yoyo: true,
                    repeat: 3
                });*/
            }
            return false;
        });
        //$('.nav_picker .container').css('width', (nav_height * _.keys(_self.navigation_types[type].maps).length) + 'px');
        setTimeout(function(){
            $('.nav_picker').css('display', 'block');
        },10);
    }else{
        $('.nav_picker').css('display', 'none');
    }
    if (typeof _self.navigation_types[type].colors !== "undefined") {
        h += nav_height;
        $('.nav_filter .container').css(
            {
                'width' : (_self.navigation_types[type].colors.length * nav_height) + 'px'
            }
        ).html("");
        for (var i = 0; i < _self.navigation_types[type].colors.length; i++) {
            $('.nav_filter .container').append('<div class="button" data-type="'+type+'" data-color="' + _self.navigation_types[type].colors[i] + '" style="background-color:' + _self.navigation_types[type].colors[i] + ';"></div>');
        }
        
        $('.nav_filter .container .button').unbind('click').off('click').on('click', function(event) {
            console.log('click nav filter');
            event.preventDefault();
            event.stopPropagation();
            _UI.displayTouch($(this));
            _self.close_shape_nav();
            switch($(this).attr('data-type')){
                case "skins":
                    _self.skin_color = $(this).attr('data-color');
                    break;
                case "bkcolor":
                    _self.bkcolor = $(this).attr('data-color');
                    _self.background.graphics.clear();
                    _self.background.graphics.beginFill($(this).attr('data-color')).drawRect(
                        0,
                        0,
                        window.innerWidth,
                        window.innerHeight
                    );
                    break;
                case "tops":
                    _self.t_color = $(this).attr('data-color');
                    break;
                case "bottoms":
                    _self.b_color = $(this).attr('data-color');
                    break;
                case "hairs":
                    _self.hair_color = $(this).attr('data-color');
                    break;
                case "eyes":
                    _self.eyes_color = $(this).attr('data-color');
                    break;
                case "shoes":
                    _self.shoes_color = $(this).attr('data-color');
                    break;
                case "glasses":
                    _self.glasses_color = $(this).attr('data-color');
                    break;
            }
            /*TweenLite.to(_self.container, 0.1, {
                scaleX: "+=.05",
                scaleY: "+=.05",
                yoyo: true,
                repeat: 3,
                onComplete:function(){
                    _self.resize();
                }
            });*/
            _self.color_changed = true;
            _self.redraw_body();
            return false;
        });
        $('.nav_filter').css('display', "block");
    }else{
        $('.nav_filter').css('display', "none");
        $('.navigation').css('height', nav_height * 2 + 'px');
        if (typeof _self.navigation_types[type].filter !== "undefined") {
            h += nav_height;
            $('.nav_filter').css('display', "block");
            
            $('.nav_filter .container').css(
                {
                    'width' : (_self.filters[_self.navigation_types[type].filter].length * nav_height) + 'px'
                }
            ).html('');
            for (var i = 0; i < _self.filters[_self.navigation_types[type].filter].length; i++) {
                $('.nav_filter .container').append('<div class="button" data-color="' + _self.filters[_self.navigation_types[type].filter][i] + '" style="background-color:' + _self.filters[_self.navigation_types[type].filter][i] + ';"></div>');
            }
            $('.nav_filter .container .button').unbind('click').off('click').on('click', function(e) {
                console.log('click nav filter 2');
                e.stopPropagation();
                e.preventDefault();
                _self.close_shape_nav();
                if($(this).attr('data-type')==="hairs"){
                    _self.hair_color = $(this).attr('data-color');
                }else if($(this).attr('data-type')==="eyes"){
                    _self.eyes_color = $(this).attr('data-color');
                }
                _self.color_changed = true;
                _self.redraw_body();
                return false;
            });
        } else {
            $('.nav_filter').css('display', "none");
            $('.navigation').css('height', nav_height * 2 + 'px');
        }
    }
    
    $('.navigation').css('height', h + 'px');
    this.resize();
}
character.prototype.ticker = function(event) {
    var _self = this;
    if(_self.debug){
        $('.ticker').html(createjs.Ticker.getMeasuredFPS().toFixed(2));
    }
    if (_self.print) {
        _self.stage.update();
        return false;
    }
    if(typeof _self.neck === "undefined" || typeof _self.farm_left === "undefined"){
        return false;
    }
    if(typeof this.top_button !== "undefined" && this.original_event){
        switch(this.default_elements[this.original_event.element.name].reg){
            case 'bottom center':
                this.top_button.y = -this.original_event.element.getBounds().height-50;
                this.bottom_button.y = -25;
                this.left_button.x  = -this.original_event.element.getBounds().width/2-50;
                this.right_button.x = this.original_event.element.getBounds().width/2+50;
                this.left_button.y  = -this.original_event.element.getBounds().height/2;
                this.right_button.y = -this.original_event.element.getBounds().height/2;
                break;
            case 'top center':
                this.top_button.y = -50;
                this.bottom_button.y = this.original_event.element.getBounds().height/2+50;
                this.left_button.x = -this.original_event.element.getBounds().width/2-50;
                this.right_button.x = this.original_event.element.getBounds().width/2+50;
                this.left_button.y  = this.original_event.element.getBounds().height/2;
                this.right_button.y = this.original_event.element.getBounds().height/2;
                break;
            case 'top top center':
                this.top_button.y = -50;
                this.bottom_button.y = this.original_event.element.getBounds().height/2+100;
                this.left_button.x = -this.original_event.element.getBounds().width/2-50;
                this.right_button.x = this.original_event.element.getBounds().width/2+50;
                this.left_button.y  = this.original_event.element.getBounds().height/2;
                this.right_button.y = this.original_event.element.getBounds().height/2;
                break;
            case 'top left':
                this.top_button.y = -50;
                this.bottom_button.y = this.original_event.element.getBounds().height/2+100;
                this.left_button.x = -this.original_event.element.getBounds().width/2-50;
                this.right_button.x = this.original_event.element.getBounds().width/2+50;
                this.left_button.y  = this.original_event.element.getBounds().height/2;
                this.right_button.y = this.original_event.element.getBounds().height/2;
                break;
            case 'top right':
                this.top_button.y = -50;
                this.bottom_button.y = this.original_event.element.getBounds().height/2+100;
                this.left_button.x = -this.original_event.element.getBounds().width/2-50;
                this.right_button.x = this.original_event.element.getBounds().width/2+50;
                this.left_button.y  = this.original_event.element.getBounds().height/2;
                this.right_button.y = this.original_event.element.getBounds().height/2;
                break;
            default:
                this.top_button.y = -this.original_event.element.getBounds().height/2-50;
                this.bottom_button.y = this.original_event.element.getBounds().height/2+50;
                this.left_button.x = -this.original_event.element.getBounds().width/2-50;
                this.right_button.x = this.original_event.element.getBounds().width/2+50;
                break;
        }
    }
    /* ---------- position elements ---------- */
    _self.head.x = 0;
    // * _self.neck.parent.scaleX
    _self.head.y = -((_self.neck.getBounds().height)-10);
    //_self.head.y = -((_self.neck.getBounds().height * _self.neck.parent.scaleX)-10);

    _self.body.x = 0;
    _self.body.y = 0;
    
    _self.neck.y = 7;
    _self.neck.x = 0;
    if(_self.is_motion){
        _self.armLeft.x = -((_self.gbody.getBounds().width / 2) * _self.gbody.parent.scaleX) - ((_self.arm_left.getBounds().width / 2) * _self.armLeft.scaleX) + (_self.arm_left.getBounds().width / 2);
        _self.armRight.x = (_self.gbody.getBounds().width / 2) * _self.gbody.parent.scaleX  + ((_self.arm_right.getBounds().width / 2) * _self.armRight.scaleX) - (_self.arm_right.getBounds().width / 2);
    }else{
        _self.armLeft.x = -((_self.gbody.getBounds().width / 2) * _self.gbody.parent.scaleX) - ((_self.arm_left.getBounds().width / 2) * _self.armLeft.scaleX);
        _self.armRight.x = (_self.gbody.getBounds().width / 2) * _self.gbody.parent.scaleX  + ((_self.arm_right.getBounds().width / 2) * _self.armRight.scaleX);
    }
    _self.armLeft.y = _self.gbody.getBounds().height / 4;
    
    _self.armRight.y = _self.gbody.getBounds().height / 4;

    _self.farmLeft.y = _self.arm_left.getBounds().height - _self.arm_left.getBounds().width;
    _self.farmRight.y = _self.arm_right.getBounds().height - _self.arm_right.getBounds().width;
    
    _self.hands_01.y = _self.farm_left.getBounds().height - _self.farm_left.y - _self.e_p.farm_left.current_radius.bl;
    _self.hands_02.y = _self.farm_right.getBounds().height - _self.farm_right.y - _self.e_p.farm_left.current_radius.bl;
    
    _self.shoes_01.regX = _self.leg_left.getBounds().width/2;
    _self.shoes_02.regX = _self.leg_left.getBounds().width/2;
    
    _self.shoes_01.y = _self.flegLeft.getBounds().height - _self.e_p.fleg_left.current_radius.bl;
    _self.shoes_02.y = _self.flegRight.getBounds().height - _self.e_p.fleg_left.current_radius.bl;
    
    _self.flegLeft.regX = _self.flegLeft.getBounds().width/2;
    _self.flegLeft.regY = 0;
    _self.flegLeft.x = _self.flegLeft.getBounds().width/2;
    _self.flegLeft.y = _self.leg_left.getBounds().height - _self.leg_left.getBounds().width;
    
    _self.flegRight.regX = -_self.flegLeft.getBounds().width/2;
    
    _self.flegRight.regY = 0;
    _self.flegRight.x = -_self.flegRight.getBounds().width/2;
    _self.flegRight.y = _self.leg_right.getBounds().height - _self.leg_right.getBounds().width;

    
    _self.legLeft.regX = _self.legLeft.getBounds().with/2;
    _self.legLeft.regY = _self.legLeft.getBounds().with/2;
    _self.legLeft.x =-(_self.gbody.getBounds().width/2);
    _self.legLeft.y = (_self.gbody.getBounds().height);
    
    _self.legRight.x = (_self.gbody.getBounds().width/2);
    _self.legRight.y = (_self.gbody.getBounds().height);
    
    if(_self.pantalon.parent === null){
        _self.body.addChild(_self.pantalon);
    }
    if(typeof _self.current_target !== "undefined"){
        if(_self.current_target.name === "ghead"){
            var hs = _self.ghead.getBounds().width/400;
            var ws = _self.ghead.getBounds().height/400;
            
            _self.barbes_container.scaleX = _self.backhairs_container.scaleX = _self.backhairs_container.scaleY = _self.hairs_container.scaleX = _self.hairs_container.scaleY = _self.accessories_container.scaleX = _self.accessories_container.scaleY = hs;
            
             _self.barbes_container.scaleY = ws;
             
            _self.backhairs_container.x = _self.hairs_container.x = _self.accessories_container.x = -_self.ghead.getBounds().width;
             
            if(_self.ghead.getBounds().width < _self.ghead.getBounds().height){
                _self.faces_container.scaleX = _self.faces_container.scaleY = hs;
                _self.faces_container.y = -_self.ghead.getBounds().height - (_self.ghead.getBounds().width/2); 
            }else{
                _self.faces_container.scaleX = _self.faces_container.scaleY = ws;
                _self.faces_container.y = -_self.ghead.getBounds().height - (_self.ghead.getBounds().height/2); 
            }
            _self.faces_container.x = -400 * _self.faces_container.scaleX;
            _self.backhairs_container.y = _self.hairs_container.y = _self.accessories_container.y = -_self.ghead.getBounds().height - (_self.ghead.getBounds().width/2); 
        }
        if(_self.current_target.name === "gbody"){
            var hs = _self.gbody.getBounds().width/400;
            var ws = _self.gbody.getBounds().height/400;
            if(_self.gbody.getBounds().width < _self.gbody.getBounds().height){
                _self.tops_container.scaleX = _self.tops_container.scaleY = hs;    
            }else{
                _self.tops_container.scaleX = _self.tops_container.scaleY = ws;    
            }
            //_self.tops_container.mask = _self.gbody;
        }
    }
    _self.stage.update();
}
character.prototype.transition_end = function() {

}
character.prototype.play = function() {

}
character.prototype.pause = function() {
    if(typeof this._randomTween !== "undefined" && this._randomTween !== null){
        this._randomTween.kill();
        delete this._randomTween;
    }
    if(typeof this.myTween !== "undefined" && this.myTween !== null){
        this.myTween.kill();
        delete this.myTween;
    }
    if(typeof this.params.random === "undefined"){
        this.container.cache(-800, -800, 1600, 1600);
    }
    this.stage.autoClear = false;
    this.stage.enableDOMEvents(false);
    createjs.Ticker.setFPS(0);
    createjs.Ticker.removeAllEventListeners("tick");
}
character.prototype.update = function() {
    createjs.Ticker.addEventListener("tick", $.proxy(this.ticker, this));
    createjs.Ticker.setFPS(120);
    this.stage.autoClear = true;
}
character.prototype.refresh = function(datas) {

}
character.prototype.destroy = function(callBack) {
    this.stage.autoClear = false;
    this.stage.enableDOMEvents(false);
    
    createjs.Ticker.reset();
    createjs.Ticker.removeAllEventListeners("tick");
    
    this.stage.removeAllChildren();
    this.stage.update();
    
    createjs.Ticker.setFPS(24);
    createjs.Sound.stop();
    
    app.set_nav_button();
    
    this.containers = [],
    this.e_p = [],
    this.skin_color = "",
    this.bkcolor = "",
    this.t_color = "",
    this.b_color = "",
    this.hair_color = "",
    this.eyes_color = "",
    this.border_color = "";
    delete this.containers;
    //this._character[0] = []
    _character = []
    if(typeof this.myTween !== "undefined" && this.myTween !== null){
        this.myTween.kill();
        delete this.myTween;
    }
    callBack();
}
character.prototype.create_body = function() {
    var _self = this;
    $('#'+this.params.canvas).css('visibility', "hidden");
    _self.e_p = _.clone(_self.default_elements);
    _self.container = new createjs.Container();
    _self.stage.addChild(_self.container);
    _self.container.x = _self.size.w / 2;
    //_self.container.y = _self.size.h / 2;
    TweenLite.set(_self.container, {scaleX:0, scaleY:0});
    for(var i=0; i<_.keys(_self.containers).length; i++){
        _self[_.keys(_self.containers)[i]] = new createjs.Container();
        _self[_.keys(_self.containers)[i]].name = _.keys(_self.containers)[i];
        if(typeof _self.containers[_.keys(_self.containers)[i]].parent !== "undefined"){
            _self[_self.containers[_.keys(_self.containers)[i]].parent].addChild(_self[_.keys(_self.containers)[i]]);
        }else{
            _self.container.addChild(_self[_.keys(_self.containers)[i]]);
        }
        if(typeof _self.containers[_.keys(_self.containers)[i]].movieclip !== "undefined" && typeof lib[_self.containers[_.keys(_self.containers)[i]].movieclip] !== "undefined"){
            _self[_self.containers[_.keys(_self.containers)[i]].movieclipname] = new lib[_self.containers[_.keys(_self.containers)[i]].movieclip]();
            _self[_.keys(_self.containers)[i]].addChild(_self[_self.containers[_.keys(_self.containers)[i]].movieclipname]);
            _self[_self.containers[_.keys(_self.containers)[i]].movieclipname].mouseEnabled = false;
        }
    }
    setTimeout(function(){
        _self.current_target = window["ghead"];
        _self.redraw_body();
    },1500);
    
    setTimeout($.proxy(function(){
        this.current_target = this.gbody;
        setTimeout($.proxy(function(){
            this.color_changed = true;
            this.current_target = this.ghead;
            this.redraw_body();
            setTimeout($.proxy(function(){
                if(typeof this.params.datas !== "undefined" && this.params.datas){
                    this.set_datas(this.params.datas);
                }else{
                    $('#'+this.params.canvas).css('visibility', "visible");
                    if(window.localStorage.getItem('last_character') !== "" && window.localStorage.getItem('last_character') !== null){
                        this.set_datas(JSON.parse(window.localStorage.getItem('last_character')));
                    }
                }
                this.resize();
                ajax_request._loader.hide();
            }, this), 10);
        }, this), 10);
    }, this), 2000);
}
character.prototype.redraw_body = function() {
    var _self = this;
    for (var i = 0; i < _.keys(_self.e_p).length; i++) {
        _self.to_add = false;
        if (typeof _self[_.keys(_self.e_p)[i]] === "undefined") {
            _self.to_add = true;
            _self[_.keys(_self.e_p)[i]] = new createjs.Shape();
        } else {
            _self[_.keys(_self.e_p)[i]].graphics.clear();
        }
        var ele = _self[_.keys(_self.e_p)[i]];
        var name = _.keys(_self.e_p)[i];
        ele.name = name;
        if (typeof _self.e_p[ele.name].current_radius !== "undefined") {
            var radius = _self.e_p[ele.name].current_radius;
        } else {
            var radius = {
                tl: _self.e_p[ele.name].width / 2,
                tr: _self.e_p[ele.name].width / 2,
                bl: _self.e_p[ele.name].width / 2,
                br: _self.e_p[ele.name].width / 2
            }
            if (_self.e_p[ele.name].height < _self.e_p[ele.name].width) {
                radius.tl = _self.e_p[ele.name].height / 2;
            }
            if (radius.tl > _self.e_p[ele.name].radius.tl) {
                radius.tl = _self.e_p[ele.name].radius.tl;
            }
            if (radius.tr > _self.e_p[ele.name].radius.tr) {
                radius.tr = _self.e_p[ele.name].radius.tr;
            }
            if (radius.bl > _self.e_p[ele.name].radius.bl) {
                radius.bl = _self.e_p[ele.name].radius.bl;
            }
            if (radius.br > _self.e_p[ele.name].radius.br) {
                radius.br = _self.e_p[ele.name].radius.br;
            }
        }
        ele.graphics.beginStroke(_self.border_color).beginFill(_self[_self.e_p[name].color]).drawRoundRectComplex(
            0,
            0,
            _self.e_p[name].width.toFixed(1),
            _self.e_p[name].height.toFixed(1),
            radius.tl,
            radius.tr,
            radius.bl,
            radius.br
        );
        
        if(typeof _self.hands_assets_1.hand.skin !== "undefined" && typeof _self.hands_assets_1.hand.skin.children[0] !== "undefined"){
            _self.hands_assets_1.hand.skin.children[0].graphics._fill.style = _self.hands_assets_2.hand.skin.children[0].graphics._fill.style = this.skin_color;
            _self.hands_assets_1.scaleY = _self.hands_assets_1.scaleX = _self.hands_assets_2.scaleY = _self.hands_assets_2.scaleX = _self.farm_left.getBounds().width / 50;
            
            _self.shoes_assets_1.scaleY = _self.shoes_assets_1.scaleX = _self.shoes_assets_2.scaleY = _self.shoes_assets_2.scaleX = _self.fleg_left.getBounds().width / 50;
        }
        
        ele.setBounds(0, 0, _self.e_p[name].width, _self.e_p[name].height);
        ele.graphics.endFill().endStroke();
        if (_self.to_add) {
            _self[_self.e_p[name].container].addChild(ele);
            if(_self.params.touch_enabled === true){
                if (typeof _self.e_p[name].mouse_enabled !== "undefined") {
                    if (_self.e_p[name].mouse_enabled === true) {
                        ele.on("mousedown", function(evt) {
                            _self.set_original_event(this, evt);
                        });
                        ele.on("pressmove", function(evt) {
                            _self.resize_element(this, evt);
                        });
                        ele.on("pressup", function(evt) {
                            _self.set_element(this, evt);
                        });
                    }
                } else {
                    ele.on("mousedown", function(evt) {
                        _self.set_original_event(this, evt);
                    });
                    ele.on("pressmove", function(evt) {
                        _self.resize_element(this, evt);
                    });
                    ele.on("pressup", function(evt) {
                        _self.set_element(this, evt);
                    });
                }
            }
        }
        
        this.set_reg(ele.name);
        
        if(_self.color_changed){
            _self.set_containers();
            _self.color_changed = false;
        }
        
        var add_pant = false;
        if(typeof _self.pantalon === "undefined"){
            add_pant = true;
            _self.pantalon = new createjs.Shape();
        }else{
            _self.pantalon.graphics.clear();
        }
        _self.pantalon.graphics.beginStroke(_self.border_color).beginFill(_self.b_color).drawRect(
            0,
            0,
            _self.e_p.gbody.width,
            _self.e_p.leg_left.width
        );
        _self.pantalon.y = _self.e_p.gbody.height-1;
        _self.pantalon.x = -_self.e_p.gbody.width/2;
        if(add_pant){
            _self.body.addChild(self.pantalon);
        }
        
        if (i === _.keys(_self.e_p).length - 1) {
            setTimeout(function() {
                _self.can_redraw = true;
            }, 100);
        }
    }
    _self.farmLeft.removeChild(_self.hands_01);
    _self.farmLeft.addChild(_self.hands_01);
    
    _self.farmRight.removeChild(_self.hands_02);
    _self.farmRight.addChild(_self.hands_02);
    
    _self.flegLeft.removeChild(_self.shoes_01);
    _self.flegLeft.addChild(_self.shoes_01);
    _self.shoes_01.scaleX = -1;
    
    _self.hands_01.scaleX = -1
    
    _self.flegRight.removeChild(_self.shoes_02);
    _self.flegRight.addChild(_self.shoes_02);
    
    _self.body.removeChild(_self.tops_container);
    _self.body.addChild(_self.tops_container);	
    
    
    _self.body.removeChild(_self.armRight);
    _self.body.addChild(_self.armRight);
    _self.body.removeChild(_self.armLeft);
    _self.body.addChild(_self.armLeft);
    
    _self.head.removeChild(_self.faces_container);
    _self.head.addChild(_self.faces_container);	
    //_self.faces_container.mask = _self.ghead;
    
    _self.head.removeChild(_self.hairs_container);
    _self.head.addChild(_self.hairs_container);	
    _self.head.removeChild(_self.accessories_container);
    _self.head.addChild(_self.accessories_container);	
    
    
    _self.head.removeChild(_self.barbes_container);
    _self.head.addChild(_self.barbes_container);	
    _self.barbes_container.mask = _self.ghead;
    
    //_self.set_reg_containers();
    //_self.container.cache(-800, -800, 1600, 1600);
}
character.prototype.set_original_event = function(el, evt) {
    var _self = this;
    _self.current_target = el;
    _self.original_event = {
        element: el,
        event: evt,
        scale: el.parent.scaleX,
        width: _self.e_p[_self.current_target.name].width,
        height: _self.e_p[_self.current_target.name].height
    };
    if(!this.is_motion){
        //_self.open_shape_nav();
    }
}
character.prototype.resize_element = function(el, evt) {
    var _self = this;
    var difX = -(_self.original_event.event.stageX - evt.stageX) / 500;
    var difY = (_self.original_event.event.stageY - evt.stageY) / 500;
    if(_self.original_event.element.name !== "ghead" && _self.original_event.element.name !== "neck"){
        difY = -difY;
    }
    var sw = parseInt(_self.original_event.width + (difX*500));
    var sh = parseInt(_self.original_event.height + (difY*500));
    
    if(sw > _self.e_p[_self.original_event.element.name].max_width){
        sw = _self.e_p[_self.original_event.element.name].max_width;
    }else if(sw < _self.e_p[_self.original_event.element.name].min_width){
        sw = _self.e_p[_self.original_event.element.name].min_width;
    }
    
    if(sw<0){sw = -sw;}else{sw=Math.abs(sw);};
    _self.replace_elements(sw, sh, _self.current_target);
    
    _self.color_changed = false;
    _self.redraw_body();
}
character.prototype.get_angle = function(a, b){
    var dx = b.x - a.x;
    var dy = b.y - a.y; 
    var Atan = Math.atan2(dy, dx);
    var angle = Atan+Math.PI;
    return (angle*180/Math.PI)-90;
}
character.prototype.rotate_element = function(el, evt, _self) {
    var name = el.parent.name;
    //var rotation = this.get_angle(
    //    {x:_self.container.x+el.parent.x, y:_self.container.y+el.parent.y},
    //    {x:evt.stageX, y:evt.stageY}
    //)+el.parent.rotation;
    //if(rotation>360){
    //    rotation -= 360;
    //}
    var difX = (_self.original_event.event.stageX - evt.stageX) / 50;
    var difY = (_self.original_event.event.stageY - evt.stageY) / 50;
    if(_self.original_event.element.name === "ghead" || _self.original_event.element.name === "neck"){
        difX = -difX;
    }
    var rotation = el.parent.rotation + (difX);
    if(typeof _self.containers[name].rotate !== "undefined"){
        if(rotation < parseInt(_self.containers[name].rotate.min)){
            rotation = parseInt(_self.containers[name].rotate.min);
        }
        if(rotation > parseInt(_self.containers[name].rotate.max)){
            rotation = parseInt(_self.containers[name].rotate.max);
        }
    }
    el.parent.rotation = rotation;
}
character.prototype.rotated_element = function(el, evt) {
    
}
character.prototype.save_pos = function(){
    var pos = {
        rotation:{
            head : this.head.rotation.toFixed(2),
            body : this.body.rotation.toFixed(2),
            armLeft : this.armLeft.rotation.toFixed(2),
            farmLeft : this.farmLeft.rotation.toFixed(2),
            armRight : this.armRight.rotation.toFixed(2),
            farmRight : this.farmRight.rotation.toFixed(2),
            legLeft : this.legLeft.rotation.toFixed(2),
            flegLeft : this.flegLeft.rotation.toFixed(2),
            legRight : this.legRight.rotation.toFixed(2),
            flegRight : this.flegRight.rotation.toFixed(2)
        },
        scaleX:{
            hands_assets_1:this.hands_assets_1.scaleX,
            hands_assets_2:this.hands_assets_2.scaleX,
            shoes_assets_1:this.shoes_assets_1.scaleX,
            shoes_assets_2:this.shoes_assets_1.scaleX
        }
    }
    return pos;
}
character.prototype.set_reg_containers = function(name) {
    var _self = this;
    for(var i=0; i<_.keys(_self.containers).length; i++){
        var name = _.keys(_self.containers)[i];
        var sw = _self.containers[name].reg;
        var el = _self[name];
        if(typeof el !== "undefined" && el.getBounds()){
            switch(sw){
                case "top left":
                    el.regX = 0;
                    el.regY = 0;
                    break;
                case "top center":
                    el.regX = el.getBounds().width/2;
                    el.regY = 0;
                    break;
                case "top right":
                    el.regX = el.getBounds().width;
                    el.regY = 0;
                    break;
                case "bottom left":
                    el.regX = 0;
                    el.regY = el.getBounds().height;
                    break;
                case "bottom center":
                    el.regX = el.getBounds().width/2;
                    el.regY = el.getBounds().height;
                    break;
                case "bottom right":
                    el.regX = el.getBounds().width;
                    el.regY = el.getBounds().height;
                    break;
                case "center left":
                    el.regX = 0;
                    el.regY = el.getBounds().height;
                    break;
                case "center center":
                    el.regX = el.getBounds().width/2;
                    el.regY = el.getBounds().height/2;
                    break;
                case "center right":
                    el.regX = el.getBounds().width;
                    el.regY = el.getBounds().height/2;
                    break;
            }
        }
    }
}
character.prototype.set_reg = function(name) {
    var _self = this;
    var sw = _self.e_p[name].reg;
    var prop = _self.e_p[name];
    var el = _self[name];
    switch (sw) {
        case "top left":
            el.regX = 0;
            el.regY = prop.width / 2;
            break;
        case "top center":
            el.regX = prop.width / 2;
            el.regY = prop.width / 2;
            break;
        case "top top center":
            el.regX = prop.width / 2;
            el.regY = 0;
            break;
        case "top right":
            el.regX = prop.width;
            el.regY = prop.width / 2;
            break;
        case "bottom left":
            el.regX = 0;
            el.regY = prop.height - (prop.width / 2);
            break;
        case "bottom center":
            el.regX = prop.width / 2;
            el.regY = prop.height;
            break;
        case "bottom bottom center":
            el.regX = prop.width / 2;
            el.regY = prop.height;
            break;
        case "bottom right":
            el.regX = prop.width;
            el.regY = prop.height - (prop.width / 2);
            break;
        case "center left":
            el.regX = 0;
            el.regY = prop.height / 2;
            break;
        case "center center":
            el.regX = prop.width / 2;
            el.regY = prop.height / 2;
            break;
        case "center right":
            el.regX = prop.width;
            el.regY = prop.height / 2;
            break;
    }
}
character.prototype.set_element = function(el, evt) {
    this.is_move = false;
    this.resize();
}
character.prototype.replace_elements = function(nwidth, nheight, el) {
    var _self = this;
    if (nheight > _self.e_p[el.name].max_height) {
        nheight = _self.e_p[el.name].max_height;
    }
    if (nheight < _self.e_p[el.name].min_height) {
        nheight = _self.e_p[el.name].min_height;
    }
    if (nwidth > _self.e_p[el.name].max_width) {
        nwidth = _self.e_p[el.name].max_width;
    }
    if (nwidth < _self.e_p[el.name].min_width) {
        nwidth = _self.e_p[el.name].min_width;
    }
    if (typeof _self.e_p[el.name].contrainst.min_height !== "undefined") {
        switch (_self.e_p[el.name].contrainst.min_height) {
            case '<width/2':
                if (nheight < nwidth / 2) {
                    nheight = nwidth / 2;
                }
                break;
        }
    }
    if (typeof _self.e_p[el.name].contrainst.max_width !== "undefined") {
        switch (_self.e_p[el.name].contrainst.max_width) {
            case 'gbody.width/2':
                if (nwidth > _self.e_p.gbody.width / 2) {
                    nwidth = _self.e_p.gbody.width / 2;
                }
                break;
        }
    }
    _self.e_p[el.name].width = nwidth;
    _self.e_p[el.name].height = nheight;
    var radius = {
            tl: _self.e_p[el.name].width / 2,
            tr: _self.e_p[el.name].width / 2,
            bl: _self.e_p[el.name].width / 2,
            br: _self.e_p[el.name].width / 2
        }
    if (radius.tl > _self.e_p[el.name].radius.tl) {
        radius.tl = _self.e_p[el.name].radius.tl;
    }
    if (radius.tr > _self.e_p[el.name].radius.tr) {
        radius.tr = _self.e_p[el.name].radius.tr;
    }
    if (radius.bl > _self.e_p[el.name].radius.bl) {
        radius.bl = _self.e_p[el.name].radius.bl;
    }
    if (radius.br > _self.e_p[el.name].radius.br) {
        radius.br = _self.e_p[el.name].radius.br;
    }

    if (radius.bl >= _self.e_p[el.name].height - _self.e_p[el.name].radius.tl && el.name === "ghead") {
        var rad = _self.e_p[el.name].height - (_self.e_p[el.name].width / 2);
        if (rad > _self.e_p[el.name].width / 2) {
            rad = _self.e_p[el.name].width / 2;
        }
        if (rad < 0) {
            rad = 0
        };
        radius.bl = rad;
        radius.br = rad;
    }
    _self.e_p[el.name].current_radius = radius;

    for (var i = 0; i < _self.e_p[el.name].contrainst.width.length; i++) {
        var constr = _self[_self.e_p[el.name].contrainst.width[i]];
        var constname = _self.e_p[el.name].contrainst.width[i];
        if(radius.br > _self.e_p[constname].radius.br ){
            radius.br = _self.e_p[constname].radius.br;
        }
        if(radius.bl > _self.e_p[constname].radius.bl ){
            radius.bl = _self.e_p[constname].radius.bl;
        }
        _self.e_p[constname].width = _self.e_p[el.name].width;
        if (_self.e_p[constname].radius !== "none") {
            _self.e_p[constname].current_radius = radius;
        }
    }
    for (var i = 0; i < _self.e_p[el.name].contrainst.height.length; i++) {
        var constr = _self[_self.e_p[el.name].contrainst.height[i]];
        var constname = _self.e_p[el.name].contrainst.height[i];
        if(radius.br > _self.e_p[constname].radius.br ){
            radius.br = _self.e_p[constname].radius.br;
        }
        if(radius.bl > _self.e_p[constname].radius.bl ){
            radius.bl = _self.e_p[constname].radius.bl;
        }
        _self.e_p[constname].height = _self.e_p[el.name].height;
        if (_self.e_p[constname].radius !== "none") {
            _self.e_p[constname].current_radius = radius;
        }
    }
}
character.prototype.export_svg = function() {
    var _self = this;
    this.draw_cotent = new createjs.Container();
    this.stage.addChild(this.draw_cotent);
    this.draw_cotent.addChild(head);

    var exporter = new SVGExporter(this.draw_cotent, false, false, false);
    var t = new Date().getTime();
    exporter.run();
    
    $('#svg_container').append('<div id="svg" style="width:' + _self.width + 'px; height:' + _self.height + 'px;"></div>');
    $('#svg').append(exporter.svg);

    var svg1 = document.getElementById('container');
    var bBox = svg1.getBBox();

    var infos = {
        x: bBox.x,
        y: bBox.y,
        w: bBox.width,
        h: bBox.height
    };

    var container = $('#container').attr('transform', 'translate(0 0)');
    var svg_content = document.getElementById('svg');

    var svg_string = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="' + infos.width + '" height="' + infos.height + '">';
    svg_string += svg_content.innerHtml;
    svg_string += '</svg>';
    $('#svg').html(svg_string);
    setTimeout(addDownload, 1);

    function addDownload() {
        var serializer = new XMLSerializer();
        var svgStr = serializer.serializeToString(exporter.svg);

        var content = JSON.parse(window.localStorage.getItem('containers'));
        content[app._page_request.id].path = "data:image/svg+xml,\n" + encodeURIComponent(svgStr);
        window.localStorage.setItem('containers', JSON.stringify(content));
        app._router.navigate(
            'page/free/', {
                trigger: true,
                replace: false
            }
        );
    }
}
character.prototype.start_gif = function(){
    var _self = this;
    gif_creator.start(_self.params.canvas);
    var canvas = document.getElementById(_self.params.canvas);
    var context = canvas.getContext('2d');
    createjs.Ticker.setFPS(20);
    _self.gif_images = [];
    _self.gif_Interval = setInterval(function(){
        _self.gif_images.push(canvas.toDataURL());
    },100);
}
character.prototype.end_gif = function(motion, callBack){
    console.log('end_gif');
    var _self = this;
    stickers_helper.file_exist(_self.params.datas.name+"_"+motion+".gif", function(e){
        if(!e){
            setTimeout(function(){
                clearInterval(_self.gif_Interval);
                gifshot_creator.generate(_self.gif_images, function(e){
                    stickers_helper.save_file(e, _self.params.datas.name+"_"+motion, callBack);
                    createjs.Ticker.setFPS(120);
                    _self.gif_images = [];
                    //callBack(e);
                });
            },500);   
        }else{
            callBack({file_url:"pictures/"+_self.params.datas.name+"_"+motion+".gif"});
        }
    });
}
character.prototype.positions = function(_self, datas){
    for(var i=0; i<_.keys(datas.rotation).length; i++){
        TweenLite.to(_self[_.keys(datas.rotation)[i]], .3, {rotation : datas.rotation[_.keys(datas.rotation)[i]]});
    }
    //for(var s=0; s<_.keys(datas.scaleX).length; s++){
    //    _self[_.keys(datas.scaleX)[s]].scaleX = datas.scaleX[_.keys(datas.scaleX)[s]];
    //}
}
character.prototype.motions = function() {

}
character.prototype.kiss = function(){
    //createjs.Ticker.setFPS(20);
    
    this.timeline = new createjs.Timeline();
    var cjs = createjs;
    
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body},{t:this.head,p:{rotation:0,y:234,x:448.5}},{t:this.armRight,p:{rotation:0,y:258,x:511,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:0,x:518,y:346}},{t:this.armLeft,p:{rotation:0,x:377,y:266}},{t:this.farmLeft,p:{rotation:0,x:377,y:346}},{t:this.legLeft,p:{rotation:0,x:410.5,y:362,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:0,x:411,y:458}},{t:this.legRight,p:{rotation:0,x:482.5,y:362,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:0,x:483,y:458}}]}).to({state:[{t:this.body},{t:this.head,p:{rotation:-1,y:233.9,x:448.5}},{t:this.armRight,p:{rotation:-4.5,y:257.5,x:511,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-4.5,x:524.9,y:344.7}},{t:this.armLeft,p:{rotation:4.8,x:376.9,y:266}},{t:this.farmLeft,p:{rotation:7.7,x:370.2,y:345.7}},{t:this.legLeft,p:{rotation:2.3,x:409.8,y:361.8,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:0.3,x:406.5,y:457.7}},{t:this.legRight,p:{rotation:-1.3,x:482.7,y:361.9,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-6,x:485.4,y:457.9}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-2,y:233.9,x:448.5}},{t:this.armRight,p:{rotation:-9.1,y:257.1,x:511,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-9.1,x:531.8,y:342.9}},{t:this.armLeft,p:{rotation:9.6,x:376.9,y:265.9}},{t:this.farmLeft,p:{rotation:15.4,x:363.5,y:344.8}},{t:this.legLeft,p:{rotation:4.5,x:409.1,y:361.5,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:0.6,x:402.1,y:457.3}},{t:this.legRight,p:{rotation:-2.7,x:482.8,y:361.7,regY:-16.1,regX:-0.5}},{t:this.flegRight,p:{rotation:-12,x:487.8,y:457.7}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-3,y:233.9,x:448.4}},{t:this.armRight,p:{rotation:-13.6,y:256.6,x:511.1,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-13.6,x:538.6,y:340.5}},{t:this.armLeft,p:{rotation:14.4,x:376.9,y:265.9}},{t:this.farmLeft,p:{rotation:23.1,x:357,y:343.4}},{t:this.legLeft,p:{rotation:6.8,x:408.4,y:361.3,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:0.9,x:397.6,y:456.7}},{t:this.legRight,p:{rotation:-4,x:483,y:361.8,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-18,x:490.2,y:457.5}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-3.9,y:233.9,x:448.4}},{t:this.armRight,p:{rotation:-18.1,y:256.1,x:511.2,regX:-6.9,regY:-8}},{t:this.farmRight,p:{rotation:-18.1,x:545.2,y:337.6}},{t:this.armLeft,p:{rotation:19.3,x:376.9,y:265.9}},{t:this.farmLeft,p:{rotation:30.8,x:350.5,y:341.4}},{t:this.legLeft,p:{rotation:9,x:407.7,y:361,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:1.1,x:393.2,y:456}},{t:this.legRight,p:{rotation:-5.3,x:483.2,y:361.7,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-23.9,x:492.6,y:457.3}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-4.9,y:233.9,x:448.4}},{t:this.armRight,p:{rotation:-22.6,y:255.7,x:511.2,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-22.6,x:551.5,y:334.2}},{t:this.armLeft,p:{rotation:24.1,x:376.9,y:265.9}},{t:this.farmLeft,p:{rotation:38.5,x:344.3,y:338.9}},{t:this.legLeft,p:{rotation:11.3,x:407,y:360.8,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:1.4,x:388.8,y:455.1}},{t:this.legRight,p:{rotation:-6.7,x:483.4,y:361.6,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-29.9,x:495,y:456.9}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-5.9,y:234,x:448.3}},{t:this.armRight,p:{rotation:-27.2,y:255.3,x:511.2,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-27.2,x:557.6,y:330.4}},{t:this.armLeft,p:{rotation:28.9,x:376.9,y:265.8}},{t:this.farmLeft,p:{rotation:46.2,x:338.2,y:335.9}},{t:this.legLeft,p:{rotation:13.5,x:406.3,y:360.6,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:1.7,x:384.3,y:454}},{t:this.legRight,p:{rotation:-8,x:483.6,y:361.6,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-35.9,x:497.4,y:456.6}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-6.9,y:233.9,x:448.3}},{t:this.armRight,p:{rotation:-31.7,y:254.9,x:511.3,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-31.7,x:563.5,y:326}},{t:this.armLeft,p:{rotation:33.7,x:376.9,y:265.8}},{t:this.farmLeft,p:{rotation:53.9,x:332.5,y:332.3}},{t:this.legLeft,p:{rotation:15.8,x:405.5,y:360.3,regX:-0.6,regY:-16}},{t:this.flegLeft,p:{rotation:2,x:380,y:452.8}},{t:this.legRight,p:{rotation:-9.3,x:483.7,y:361.5,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-41.9,x:499.8,y:456.2}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-7.9,y:233.9,x:448.3}},{t:this.armRight,p:{rotation:-36.2,y:254.4,x:511.3,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-36.2,x:568.9,y:321.2}},{t:this.armLeft,p:{rotation:38.5,x:376.9,y:265.8}},{t:this.farmLeft,p:{rotation:61.6,x:327.1,y:328.3}},{t:this.legLeft,p:{rotation:18,x:404.9,y:360.1,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:2.3,x:375.7,y:451.5}},{t:this.legRight,p:{rotation:-10.6,x:483.9,y:361.5,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-47.9,x:502.2,y:455.7}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-8.9,y:233.9,x:448.3}},{t:this.armRight,p:{rotation:-40.8,y:254,x:511.4,regX:-7,regY:-7.9}},{t:this.farmRight,p:{rotation:-40.8,x:574.1,y:316}},{t:this.armLeft,p:{rotation:43.4,x:376.9,y:265.7}},{t:this.farmLeft,p:{rotation:69.3,x:322,y:323.9}},{t:this.legLeft,p:{rotation:20.3,x:404.3,y:359.8,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:2.6,x:371.5,y:450}},{t:this.legRight,p:{rotation:-12,x:484.1,y:361.4,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-53.9,x:504.5,y:455.2}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-9.9,y:233.9,x:448.3}},{t:this.armRight,p:{rotation:-45.3,y:253.5,x:511.3,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-45.3,x:578.8,y:310.4}},{t:this.armLeft,p:{rotation:48.2,x:376.9,y:265.7}},{t:this.farmLeft,p:{rotation:77,x:317.3,y:319}},{t:this.legLeft,p:{rotation:22.6,x:403.6,y:359.4,regX:-0.5,regY:-16.1}},{t:this.flegLeft,p:{rotation:2.9,x:367.3,y:448.4}},{t:this.legRight,p:{rotation:-13.3,x:484.2,y:361.4,regY:-16,regX:-0.6}},{t:this.flegRight,p:{rotation:-59.9,x:506.9,y:454.7}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-10.9,y:233.9,x:448.2}},{t:this.armRight,p:{rotation:-49.8,y:253,x:511.4,regX:-6.9,regY:-8}},{t:this.farmRight,p:{rotation:-49.8,x:583.1,y:304.5}},{t:this.armLeft,p:{rotation:53,x:376.9,y:265.7}},{t:this.farmLeft,p:{rotation:84.7,x:313,y:313.8}},{t:this.legLeft,p:{rotation:24.8,x:402.9,y:359.3,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:3.2,x:363.1,y:446.6}},{t:this.legRight,p:{rotation:-14.6,x:484.5,y:361.3,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-65.9,x:509.2,y:454}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-11.9,y:233.9,x:448.2}},{t:this.armRight,p:{rotation:-54.4,y:252.7,x:511.3,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-54.4,x:586.9,y:298.2}},{t:this.armLeft,p:{rotation:57.8,x:376.9,y:265.6}},{t:this.farmLeft,p:{rotation:92.4,x:309.2,y:308.3}},{t:this.legLeft,p:{rotation:27.1,x:402.3,y:358.9,regX:-0.5,regY:-16.1}},{t:this.flegLeft,p:{rotation:3.4,x:359,y:444.7}},{t:this.legRight,p:{rotation:-16,x:484.6,y:361.2,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-71.8,x:511.6,y:453.4}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-12.8,y:233.9,x:448.2}},{t:this.armRight,p:{rotation:-58.9,y:252.1,x:511.4,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-58.9,x:590.3,y:291.6}},{t:this.armLeft,p:{rotation:62.6,x:376.9,y:265.6}},{t:this.farmLeft,p:{rotation:100.1,x:305.8,y:302.4}},{t:this.legLeft,p:{rotation:29.3,x:401.6,y:358.7,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:3.7,x:355,y:442.6}},{t:this.legRight,p:{rotation:-17.3,x:484.7,y:361.1,regY:-16.1,regX:-0.5}},{t:this.flegRight,p:{rotation:-77.8,x:513.9,y:452.7}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-13.8,y:233.9,x:448.2}},{t:this.armRight,p:{rotation:-63.4,y:251.7,x:511.4,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-63.4,x:593.2,y:284.8}},{t:this.armLeft,p:{rotation:67.4,x:376.9,y:265.6}},{t:this.farmLeft,p:{rotation:107.8,x:303,y:296.2}},{t:this.legLeft,p:{rotation:31.6,x:400.9,y:358.4,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:4,x:351,y:440.5}},{t:this.legRight,p:{rotation:-18.6,x:485.1,y:361.1,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-83.8,x:516.1,y:451.9}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-14.8,y:233.9,x:448.2}},{t:this.armRight,p:{rotation:-67.9,y:251.3,x:511.4,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-67.9,x:595.6,y:277.8}},{t:this.armLeft,p:{rotation:72.3,x:376.9,y:265.6}},{t:this.farmLeft,p:{rotation:115.5,x:300.7,y:289.9}},{t:this.legLeft,p:{rotation:33.8,x:400.3,y:358.1,regX:-0.5,regY:-16.1}},{t:this.flegLeft,p:{rotation:4.3,x:347.2,y:438.2}},{t:this.legRight,p:{rotation:-20,x:485.2,y:361,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-89.8,x:518.4,y:451.1}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-15.8,y:233.9,x:448.1}},{t:this.armRight,p:{rotation:-72.5,y:250.8,x:511.3,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-72.5,x:597.4,y:270.6}},{t:this.armLeft,p:{rotation:77.1,x:376.8,y:265.5}},{t:this.farmLeft,p:{rotation:123.2,x:298.9,y:283.4}},{t:this.legLeft,p:{rotation:36.1,x:399.4,y:357.8,regX:-0.6,regY:-16}},{t:this.flegLeft,p:{rotation:4.6,x:343.5,y:435.7}},{t:this.legRight,p:{rotation:-21.3,x:485.4,y:361,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-95.8,x:520.7,y:450.2}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-16.8,y:233.9,x:448.1}},{t:this.armRight,p:{rotation:-77,y:250.2,x:511.4,regX:-6.9,regY:-8}},{t:this.farmRight,p:{rotation:-77,x:598.7,y:263.3}},{t:this.armLeft,p:{rotation:81.9,x:376.8,y:265.5}},{t:this.farmLeft,p:{rotation:130.9,x:297.6,y:276.7}},{t:this.legLeft,p:{rotation:38.3,x:398.9,y:357.6,regX:-0.5,regY:-16}},{t:this.flegLeft,p:{rotation:4.9,x:339.8,y:433.2}},{t:this.legRight,p:{rotation:-22.6,x:485.6,y:360.9,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-101.8,x:522.9,y:449.3}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-17.8,y:233.9,x:448.1}},{t:this.armRight,p:{rotation:-81.5,y:249.9,x:511.5,regX:-7,regY:-7.9}},{t:this.farmRight,p:{rotation:-81.5,x:599.5,y:255.9}},{t:this.armLeft,p:{rotation:86.7,x:376.8,y:265.5}},{t:this.farmLeft,p:{rotation:138.6,x:297,y:270}},{t:this.legLeft,p:{rotation:40.6,x:398.1,y:357.2,regX:-0.6,regY:-16}},{t:this.flegLeft,p:{rotation:5.2,x:336.2,y:430.5}},{t:this.legRight,p:{rotation:-24,x:485.7,y:360.9,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-107.8,x:525.2,y:448.4}}]},1).to({state:[{t:this.body},{t:this.head,p:{rotation:-18.8,y:233.9,x:448.1}},{t:this.armRight,p:{rotation:-86.1,y:249.5,x:511.4,regX:-7,regY:-8}},{t:this.farmRight,p:{rotation:-86.1,x:599.7,y:248.5}},{t:this.armLeft,p:{rotation:91.5,x:376.8,y:265.4}},{t:this.farmLeft,p:{rotation:146.3,x:296.9,y:263.3}},{t:this.legLeft,p:{rotation:42.9,x:397.6,y:356.9,regX:-0.5,regY:-16.1}},{t:this.flegLeft,p:{rotation:5.5,x:332.7,y:427.7}},{t:this.legRight,p:{rotation:-25.3,x:485.9,y:360.8,regY:-16,regX:-0.5}},{t:this.flegRight,p:{rotation:-113.8,x:527.4,y:447.4}}]},1).wait(1));

	/*this.timeline.addTween(
        cjs.Tween.get(this.body)
        .to({rotation:-15},900)
    );
    
    this.timeline.addTween(
        cjs.Tween.get(this.head)
        .to({rotation:-15},900)
    );
    
	this.timeline.addTween(
        cjs.Tween.get(this.armRight)
        .to({rotation:-39.2},900)
    );
    
    this.timeline.addTween(
        cjs.Tween.get(this.farmRight)
        .to({rotation:0},900)
    );

	this.timeline.addTween(
        cjs.Tween.get(this.armLeft)
        .to({rotation:-105},900)
    );

	this.timeline.addTween(
        cjs.Tween.get(this.farmLeft)
        .to({rotation:0},900)
    );

	this.timeline.addTween(
        cjs.Tween.get(this.legLeft)
        .to({rotation:0.5},900)
    );

	this.timeline.addTween(
        cjs.Tween.get(this.flegLeft)
        .to({rotation:0.5},900)
    );

	this.timeline.addTween(
        cjs.Tween.get(this.legRight)
        .to({rotation:-15},900)
    );

	this.timeline.addTween(
        cjs.Tween.get(this.flegRight)
        .to({rotation:-30},900)
    );*/
}
character.prototype.motions.headlo = function(_self, is_gif, callBack) {
    TweenLite.to(_self.head, .2, {
        rotation: -20,
        ease:Elastic.easeInOut,
        yoyo:true,
        repeat:5,
        onComplete:function(){
            _self.motions.stand(_self);
        }
    });
}
character.prototype.motions.robot = function(_self, is_gif, callBack) {
    _self.motions.stand(_self);
    if(is_gif){
        _self.start_gif();
    }
    _self.accessories_assets.motions.gotoAndStop(0);
    app.play_sound('robot');
    TweenMax.to(_self.armLeft, 1, {rotation:90, ease:Elastic.easeOut});
    TweenMax.to(_self.farmLeft, 1, {rotation:90, delay:1, ease:Elastic.easeOut, onComplete:function(){
        TweenMax.to(_self.farmLeft, 1, {rotation:-90, delay:1, ease:Elastic.easeOut});
    }});
    TweenMax.to(_self.head, 1, {rotation:20, delay:1, ease:Elastic.easeOut});
    
    TweenMax.to(_self.armRight, 1, {rotation:-90, ease:Elastic.easeOut});
    TweenMax.to(_self.farmRight, 1, {rotation:90, delay:1, ease:Elastic.easeOut, onComplete:function(){
        TweenMax.to(_self.farmRight, 1, {rotation:-90, delay:1, ease:Elastic.easeOut});
        TweenMax.to(_self.head, 1, {rotation:-20, delay:1, ease:Elastic.easeOut});
    }});
    
    TweenMax.to(_self.legRight, 1, {rotation:-90, ease:Elastic.easeOut});
    TweenMax.to(_self.flegRight, 1, {rotation:90, ease:Elastic.easeOut, onComplete:function(){
        
    }});
    TweenMax.to(_self.legRight, 1, {rotation:0, delay:.9, ease:Elastic.easeOut});
    TweenMax.to(_self.flegRight, 1, {rotation:0, delay:.9, ease:Elastic.easeOut, onComplete:function(){
        
        TweenMax.to(_self.legLeft, 1, {rotation:90, ease:Elastic.easeOut});
        TweenMax.to(_self.flegLeft, 1, {rotation:-90, ease:Elastic.easeOut, onComplete:function(){
            TweenMax.to(_self.legLeft, 1, {rotation:0, ease:Elastic.easeOut});
            TweenMax.to(_self.flegLeft, 1, {rotation:0, ease:Elastic.easeOut, onComplete:function(){
                
                TweenMax.to(_self.armLeft, 1, {rotation:0, ease:Elastic.easeOut});
                TweenMax.to(_self.farmLeft, 1, {rotation:0, ease:Elastic.easeOut});
                TweenMax.to(_self.armRight, 1, {rotation:0, ease:Elastic.easeOut});
                TweenMax.to(_self.farmRight, 1, {rotation:0, ease:Elastic.easeOut});
                TweenMax.to(_self.head, 1, {rotation:0, ease:Elastic.easeOut});
                
                if(is_gif){
                    _self.end_gif("robot", callBack);
                }
                _self.resize();
                
            }});
        }});
        
    }});
    
    
}
character.prototype.motions.hello = function(_self, is_gif, callBack) {
    _self.motions.stand(_self);
    if(is_gif){
        _self.start_gif();
    }
    _self.face_assets.mouths.gotoAndStop("win");
    app.play_sound('hi');
    TweenMax.set(_self.armRight, {
        rotation: -135
    });
    TweenMax.to(_self.armLeft, .3, {
        rotation: 15
    });
    TweenMax.to(_self.head, .3, {
        rotation: -15
    });
    TweenMax.to(_self.farmLeft, .3, {
        rotation: 15
    });
    TweenMax.to(_self.farmRight, 0.2, {
        rotation: -20,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: 5,
        onComplete: function() {
            TweenMax.to(_self.farmRight, 0.2, {
                rotation: 0
            });
        }
    });
    TweenMax.to(_self.armRight, 0.1, {
        rotation: -150,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: 5,
        onComplete: function() {
            TweenMax.to(_self.armRight, 0.2, {
                rotation: 0
            });
            TweenMax.to(_self.armLeft, .3, {
                rotation: 0
            });
            TweenMax.to(_self.farmLeft, .3, {
                rotation: 0
            });
            TweenMax.to(_self.head, .3, {
                rotation: 0,
                onComplete:function(){
                    if(is_gif){
                        _self.end_gif("hello", callBack);
                    }
                    _self.resize();
                }
            });
        }
    });
}
character.prototype.motions.stand = function(_self, is_gif, callBack) {
    TweenMax.killAll();
    if(typeof _self.armLeft === "undefined"){
        return false;
    }
    TweenLite.set(_self.armLeft, {
        rotation: 0
    });
    TweenLite.set(_self.farmLeft, {
        rotation: 0
    });
    TweenLite.set(_self.armRight, {
        rotation: 0
    });
    TweenLite.set(_self.farmRight, {
        rotation: 0
    });
    TweenLite.set(_self.legLeft, {
        rotation: 0
    });
    TweenLite.set(_self.flegLeft, {
        rotation: 0
    });
    TweenLite.set(_self.legRight, {
        rotation: 0
    });
    TweenLite.set(_self.flegRight, {
        rotation: 0
    });

    TweenLite.set(_self.head, {
        rotation: 0
    });
    TweenLite.set(_self.container, {
        rotation: 0
    });
    _self.resize();
}
character.prototype.motions.jump = function(_self, is_gif, callBack) {
    _self.motions.stand(_self);
    TweenLite.to(_self.armLeft, .3, {
        rotation: 90
    });
    TweenLite.to(_self.farmLeft, .3, {
        rotation: -90
    });
    TweenLite.to(_self.armRight, .3, {
        rotation: -90
    });
    TweenLite.to(_self.farmRight, .3, {
        rotation: 90
    });
    TweenLite.to(_self.legLeft, .3, {
        rotation: 90
    });
    TweenLite.to(_self.flegLeft, .3, {
        rotation: -90
    });

    TweenLite.to(_self.legRight, .3, {
        rotation: -90
    });
    TweenLite.to(_self.flegRight, .3, {
        rotation: 90
    });
    TweenLite.to(_self.container, .5, {
        y: _self.container.y + 20,
        onComplete: function() {
            TweenLite.to(_self.container, .2, {
                y: _self.container.y - 200
            });

            TweenLite.to(_self.armLeft, .3, {
                rotation: 160
            });
            TweenLite.to(_self.farmLeft, .3, {
                rotation: 10
            });

            TweenLite.to(_self.armRight, .3, {
                rotation: -160
            });
            TweenLite.to(_self.farmRight, .3, {
                rotation: -10
            });

            TweenLite.to(_self.legLeft, .3, {
                rotation: 20
            });
            TweenLite.to(_self.flegLeft, .3, {
                rotation: 0
            });

            TweenLite.to(_self.legRight, .3, {
                rotation: 20
            });
            TweenLite.to(_self.flegRight, .3, {
                rotation: 0
            });

            TweenLite.to(_self.head, .3, {
                rotation: -10
            });

            TweenLite.to(_self.legLeft, .3, {
                rotation: -20,
                delay: .3
            });
            TweenLite.to(_self.legRight, .3, {
                rotation: -20,
                delay: .3
            });

            TweenLite.to(_self.flegLeft, .3, {
                rotation: 10,
                delay: .3
            });
            TweenLite.to(_self.flegRight, .3, {
                rotation: 10,
                delay: .3
            });

            TweenLite.to(_self.head, .3, {
                rotation: -10,
                delay: .3
            });

            TweenLite.to(_self.container, .3, {
                rotation: -10,
                delay: .3
            });

            TweenLite.to(_self.armLeft, .3, {
                rotation: 150,
                delay: .3
            });
            TweenLite.to(_self.armRight, .3, {
                rotation: -180,
                delay: .3
            });


            TweenLite.to(_self.container, 1, {
                y: _self.container.y - 120,
                onComplete: function() {
                    _self.motions.stand(_self);
                    _self.resize();
                }
            });
        }
    });
}
character.prototype.motions.coucou = function(_self, is_gif, callBack) {
    _self.motions.stand(_self);
    TweenLite.to(_self.armLeft, .3, {
        rotation: 45
    });
    TweenLite.to(_self.farmLeft, .3, {
        rotation: 45
    });
    TweenLite.to(_self.armRight, .3, {
        rotation: -45
    });
    TweenLite.to(_self.farmRight, .3, {
        rotation: -45
    });
}
character.prototype.motions.love = function(_self, is_gif, callBack) {
    _self.motions.stand(_self);
    if(is_gif){
        _self.start_gif();
    }

    _self.accessories_assets.motions.gotoAndStop(0);
    _self.current_target = _self.arm_left;
    
    var default_eyes = _self.face_assets.eyes.currentFrame;
    var default_mouth = _self.face_assets.mouths.currentFrame;
    _self.face_assets.eyes.gotoAndStop('heart');
    _self.face_assets.mouths.gotoAndStop('heart');
    _self.faces_container.cache(0, 0, 800, 800);
    app.play_sound('kiss');
    var origin_posY = _self.container.y;
    TweenMax.to(_self.head, .3, {rotation:-10});
    TweenMax.to(_self.container, .3, {y:origin_posY+10});

    TweenMax.to(_self.armLeft, .3, {rotation:90});
    TweenMax.to(_self.farmLeft, .3, {rotation:90});
    
    TweenMax.to(_self.armRight, .3, {rotation:-90});
    TweenMax.to(_self.farmRight, .3, {rotation:-90});

    TweenMax.to(_self.legRight, .3, {rotation:-90});
    TweenMax.to(_self.flegRight, .3, {rotation:90});
    
    TweenMax.to(_self.legLeft, .3, {rotation:90});
    TweenMax.to(_self.flegLeft, .3, {rotation:-90});
    
    /* CREATE HEARTS MOTIONS OVER ALL */
    setTimeout(function(){
        _self.accessories_assets.motions.gotoAndStop('hearts');
        
        _self.face_assets.eyes.gotoAndStop(_self.params.datas.containers.faces_container.assets.eyes.status);
        _self.face_assets.mouths.gotoAndStop(_self.params.datas.containers.faces_container.assets.mouths.status);
        _self.faces_container.cache(0, 0, 800, 800);

    }, 800);
    TweenMax.to(_self.armLeft, 2, {rotation:-360, delay:.5, ease:Power4.easeOut});
    TweenMax.to(_self.farmLeft, .5, {rotation:0, delay:.5, ease:Power4.easeOut});
    
    TweenMax.to(_self.armRight, 2, {rotation:360, delay:.5, ease:Power4.easeOut});
    TweenMax.to(_self.farmRight, .5, {rotation:0, delay:.5, ease:Power4.easeOut});
    
    TweenMax.to(_self.legLeft, .8, {rotation:40, delay:.5, ease:Power4.easeOut});
    TweenMax.to(_self.flegLeft, .2, {rotation:0, delay:.5, ease:Power4.easeOut});
    
    TweenMax.to(_self.legRight, .8, {rotation:-40, delay:.5, ease:Power4.easeOut});
    TweenMax.to(_self.flegRight, .2, {rotation:0, delay:.5, ease:Power4.easeOut});
    
    TweenMax.to(_self.container, .2, {y:origin_posY-20, rotation:15, delay:.5, ease:Power4.easeOut});
    
    TweenMax.to(_self.container, .2, {y:origin_posY, rotation:0, delay:1.5, ease:Bounce.easeOut});
    TweenMax.to(_self.head, .2, {rotation:0, delay:1.5, ease:Bounce.easeOut});
    
    TweenMax.to(_self.legLeft, .2, {rotation:0, delay:1.5, ease:Bounce.easeOut});
    TweenMax.to(_self.legRight, .2, {rotation:0, delay:1.5, ease:Bounce.easeOut, onComplete:function(){
        _self.armLeft.rotation=0;
        _self.armRight.rotation=0;
        _self.accessories_assets.motions.gotoAndStop(0);
        if(is_gif){
            _self.end_gif("love", callBack);
        }
        _self.resize();
    }});
}
character.prototype.motions.sleep = function(_self, is_gif, callBack) {
    _self.motions.stand(_self);
    if(is_gif){
        _self.start_gif();
    }
    _self.accessories_assets.motions.gotoAndStop(0);
    var default_eyes = _self.face_assets.eyes.currentFrame;
    var default_mouth = _self.face_assets.mouths.currentFrame;
    _self.face_assets.eyes.gotoAndStop('sleep');
    _self.face_assets.mouths.gotoAndStop('sleep');
    _self.faces_container.cache(0, 0, 800, 800);
    
    _self.current_target = _self.arm_left;
    _self.accessories_assets.motions.gotoAndStop('sleep');
    
    app.play_sound('sleep');
    
    TweenMax.to(_self.head, .5, {rotation:-30, ease:Elastic.easeOut});
    setTimeout(function(){
        _self.face_assets.eyes.gotoAndStop(_self.params.datas.containers.faces_container.assets.eyes.status);
        _self.face_assets.mouths.gotoAndStop(_self.params.datas.containers.faces_container.assets.mouths.status);
        _self.faces_container.cache(0, 0, 800, 800);
        TweenMax.to(_self.head, .8, {rotation:0, ease:Elastic.easeOut, onComplete:function(){
            if(is_gif){
                _self.end_gif("sleep", callBack);
            }
            _self.resize();
        }});
        _self.accessories_assets.motions.gotoAndStop(0);
        
    },3000);
}
character.prototype.motions.dance = function(_self, is_gif, callBack) {
    _self.motions.stand(_self);
    var repeat = 11;
    if(is_gif){
        _self.start_gif();
        var repeat = 3;
    }
    _self.accessories_assets.motions.gotoAndStop(0);
    TweenMax.set(_self.head, {rotation:20});
    TweenMax.set(_self.armLeft, {rotation:-70});
    TweenMax.set(_self.armRight, {rotation:-90});
    TweenMax.to(_self.head, .5, {rotation:-20, yoyo:true, repeat:repeat, ease:Back.easeInOut});
    TweenMax.to(_self.armLeft, .5, {rotation:90, yoyo:true, repeat:repeat, ease:Circ.easeInOut});
    TweenMax.to(_self.armRight, .5, {rotation:70, yoyo:true, repeat:repeat, ease:Circ.easeInOut});
    TweenMax.to(_self.farmLeft, .5, {rotation:90, yoyo:true, repeat:repeat, ease:Circ.easeInOut});
    TweenMax.to(_self.farmRight, .5, {rotation:70, yoyo:true, repeat:repeat, ease:Circ.easeInOut});
    TweenMax.to(_self.legLeft, .5, {rotation:50, yoyo:true, repeat:repeat, ease:Circ.easeInOut});
    TweenMax.to(_self.legRight, .5, {rotation:-50, delay:.5, yoyo:true, repeat:repeat, ease:Circ.easeInOut});
    TweenMax.to(_self.flegLeft, .5, {rotation:-50, yoyo:true, repeat:repeat, ease:Circ.easeInOut});
    TweenMax.to(_self.flegRight, .5, {rotation:50, delay:.5, yoyo:true, repeat:repeat, ease:Circ.easeInOut, onComplete:function(){
        TweenMax.to(_self.head, .2, {rotation:0});
        TweenMax.to(_self.armLeft, .2, {rotation:0});
        TweenMax.to(_self.armRight, .2, {rotation:0});
        TweenMax.to(_self.farmLeft, .2, {rotation:0});
        TweenMax.to(_self.farmRight, .2, {rotation:0, onComplete:function(){
            if(is_gif){
                _self.end_gif("dance", callBack);
            }
            _self.resize();
        }});
    }});
}
character.prototype.motions.smile = function(_self, is_gif, callBack){
    _self.motions.stand(_self);
    if(is_gif){
        _self.start_gif();
    }
    _self.accessories_assets.motions.gotoAndStop(0);
    _self.current_target = _self.arm_left;
    var default_eyes = _self.face_assets.eyes.currentFrame;
    var default_mouth = _self.face_assets.mouths.currentFrame;
    _self.face_assets.eyes.gotoAndStop("win");
    _self.face_assets.mouths.gotoAndStop("win");
    _self.faces_container.cache(0, 0, 800, 800);
    
    app.play_sound('smile');
    
    _self.accessories_assets.motions.gotoAndStop('smile');
    
    TweenMax.to(_self.container, .8, {rotation:-20, ease:Power4.easeOut});
    TweenMax.to(_self.legLeft, .8, {rotation:20, ease:Power4.easeOut});
    TweenMax.to(_self.legRight, .8, {rotation:-50, ease:Power4.easeOut});
    TweenMax.to(_self.head, .8, {rotation:-15, ease:Power4.easeOut});
    TweenMax.to(_self.armLeft, .8, {rotation:60, ease:Power4.easeOut});
    TweenMax.to(_self.farmLeft, .8, {rotation:20, ease:Power4.easeIn});
    TweenMax.to(_self.farmRight, .8, {rotation:-20, ease:Power4.easeIn});
    TweenMax.to(_self.faces_container, .1, {y:_self.faces_container.y+10, yoyo:true, repeat:11});
    TweenMax.to(_self.armRight, .8, {rotation:-120, ease:Power4.easeOut, onComplete:function(){
        _self.accessories_assets.motions.gotoAndStop(0);
        TweenMax.to(_self.container, .8, {rotation:0, ease:Power4.easeIn});
        TweenMax.to(_self.legLeft, .8, {rotation:0, ease:Power4.easeIn});
        TweenMax.to(_self.legRight, .8, {rotation:0, ease:Power4.easeIn});
        TweenMax.to(_self.head, .8, {rotation:0, ease:Power4.easeIn});
        TweenMax.to(_self.armLeft, .8, {rotation:0, ease:Power4.easeIn});
        TweenMax.to(_self.farmLeft, .8, {rotation:0, ease:Power4.easeIn});
        TweenMax.to(_self.farmRight, .8, {rotation:0, ease:Power4.easeIn});
        TweenMax.to(_self.armRight, .8, {rotation:0, ease:Power4.easeIn, onComplete:function(){
            _self.face_assets.eyes.gotoAndStop(_self.params.datas.containers.faces_container.assets.eyes.status);
            _self.face_assets.mouths.gotoAndStop(_self.params.datas.containers.faces_container.assets.mouths.status);
            _self.faces_container.cache(0, 0, 800, 800);
            if(is_gif){
                _self.end_gif("smile", callBack);
            }
            _self.resize();
        }});
    }});
}
character.prototype.motions.win = function(_self, is_gif, callBack) {
    _self.motions.stand(_self);
    var repeat = 21;
    if(is_gif){
        _self.start_gif();
        repeat = 3;
    }
    var default_eyes = _self.face_assets.eyes.currentFrame;
    var default_mouth = _self.face_assets.mouths.currentFrame;
    _self.face_assets.eyes.gotoAndStop("win");
    _self.face_assets.mouths.gotoAndStop("win");
    _self.faces_container.cache(0, 0, 800, 800);
    _self.accessories_assets.motions.gotoAndStop('win');
    
    app.play_sound('motion_win');
    
    TweenMax.to(_self.armLeft, .5, {rotation:120, yoyo:true, repeat:repeat, ease:Power4.easeOut});
    TweenMax.to(_self.armRight, .5, {rotation:-120, yoyo:true, repeat:repeat, ease:Power4.easeOut});
    TweenMax.to(_self.legLeft, .5, {rotation:80, yoyo:true, repeat:repeat, ease:Power4.easeOut});
    TweenMax.to(_self.legRight, .5, {rotation:-80, yoyo:true, repeat:repeat, ease:Power4.easeOut});
    TweenMax.to(_self.container, .5, {y:_self.container.y-50, rotation:((Math.random()*20)-10), yoyo:true, repeat:repeat, ease:Power4.easeOut, onComplete:function(){
        _self.face_assets.eyes.gotoAndStop(_self.params.datas.containers.faces_container.assets.eyes.status);
        _self.face_assets.mouths.gotoAndStop(_self.params.datas.containers.faces_container.assets.mouths.status);
        _self.faces_container.cache(0, 0, 800, 800);
        
        _self.accessories_assets.motions.gotoAndStop(0);
        
        if(is_gif){
            _self.end_gif("win", callBack);
        }
        _self.resize();
    }});
}
character.prototype.motions.fail = function(_self, is_gif, callBack){
    _self.motions.stand(_self);
    var repeat = 11;
    if(is_gif){
        _self.start_gif();
        repeat = 3;
    }
    var default_eyes = _self.face_assets.eyes.currentFrame;
    var default_mouth = _self.face_assets.mouths.currentFrame;
    _self.face_assets.eyes.gotoAndStop("fail");
    _self.face_assets.mouths.gotoAndStop("fail");
    _self.accessories_assets.motions.gotoAndStop('fail');
    _self.faces_container.cache(0, 0, 800, 800);
    TweenMax.to(_self.head, 2, {rotation:((Math.random()*20)-10), yoyo:true, repeat:repeat, onComplete:function(){
        _self.face_assets.eyes.gotoAndStop(_self.params.datas.containers.faces_container.assets.eyes.status);
        _self.face_assets.mouths.gotoAndStop(_self.params.datas.containers.faces_container.assets.mouths.status);
        _self.accessories_assets.motions.gotoAndStop(0);
        if(is_gif){
            _self.end_gif("fail", callBack);
        }
        _self.resize();
    }});
}
character.prototype.define_vars = function(){
    this.head,
    this.arms_left,
    this.forearm_left,
    this.arms_right,
    this.forearm_rightn,
    this.front_leg_left,
    this.leg_left,
    this.front_leg_right,
    this.leg_right,
    this.body,
    this.e_p,
    this.format = {
        width: 0,
        height: 0
    },
    this.last_redraw = new Date().getTime(),
    this.is_move = false,
    this.skin_color = "#ffdeb8",
    this.bkcolor = "rgba(0,0,0,0)",
    this.t_color = "#FFFFFF",
    this.b_color = "#FFFFFF",
    this.border_color = "rgba(0,0,0,0)",
    this.none = "rgba(0,0,0,0)",
    this.hair_color = "#000000",
    this.shoes_color = "#000000",
    this.glasses_color = "#000000",
    this.eyes_color = "#000000",
    this.color_changed = false,
    this.size = {
        w: this.width,
        h: this.height
    },
    this.print = false,
    this.can_redraw = true,
    this.mappings = {};
    if(typeof app._page_request.type !== "undefined"){
        this.type = app._page_request.type;
    }
    this.positions_list = {
        stand :{
            icon:"images/character/none.png",
            infos:{"rotation":{"head":0,"body":0,"armLeft":0,"farmLeft":0,"armRight":0,"farmRight":0,"legLeft":0,"flegLeft":0,"legRight":0,"flegRight":0},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.66,"shoes_assets_2":0.66}}
        },
        run:{
            icon:'/images/positions/pos_01.svg',
            infos:{"rotation":{"head":"-4.40","body":"0.00","armLeft":"64.74","farmLeft":"-56.46","armRight":"-60.74","farmRight":"-44.96","legLeft":"12.46","flegLeft":"52.68","legRight":"-47.78","flegRight":"5.74"},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.86,"shoes_assets_2":0.86}}
        },
        couscous:{
            icon:'/images/positions/pos_02.svg',
            infos:{"rotation":{"head":"-7.68","body":"-1.52","armLeft":"69.06","farmLeft":"20.48","armRight":"-116.34","farmRight":"-17.14","legLeft":"64.24","flegLeft":"42.40","legRight":"0.16","flegRight":"0.96"},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.86,"shoes_assets_2":0.86}}
        },
        star:{
            icon:'/images/positions/pos_03.svg',
            infos:{"rotation":{"head":"1.14","body":"-1.52","armLeft":"89.76","farmLeft":"2.82","armRight":"-88.78","farmRight":"-1.10","legLeft":"40.44","flegLeft":"-1.76","legRight":"-42.16","flegRight":"0.96"},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.86,"shoes_assets_2":0.86}}
        },
        happy:{
            icon:'/images/positions/pos_04.svg',
            infos:{"rotation":{"head":"10.06","body":"8.44","armLeft":"116.12","farmLeft":"31.06","armRight":"-77.84","farmRight":"-55.56","legLeft":"40.44","flegLeft":"-85.92","legRight":"-42.16","flegRight":"90.00"},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.86,"shoes_assets_2":0.86}}
        },
        breakdance:{
            icon:'/images/positions/pos_05.svg',
            infos:{"rotation":{"head":"-16.64","body":"100.20","armLeft":"83.96","farmLeft":"-36.38","armRight":"-101.92","farmRight":"0.14","legLeft":"76.70","flegLeft":"50.92","legRight":"3.72","flegRight":"53.42"},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.86,"shoes_assets_2":0.86}}
        },
        superman:{
            icon:'/images/positions/pos_06.svg',
            infos:{"rotation":{"head":"6.04","body":"9.32","armLeft":"109.40","farmLeft":"17.02","armRight":"-88.76","farmRight":"-8.84","legLeft":"10.24","flegLeft":"-22.76","legRight":"-73.20","flegRight":"8.92"},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.6,"shoes_assets_2":0.6}}
        },
        pipi:{
            icon:'/images/positions/pos_07.svg',
            infos:{"rotation":{"head":"-2.42","body":"0.42","armLeft":"-9.98","farmLeft":"-8.20","armRight":"18.58","farmRight":"0.14","legLeft":"-5.00","flegLeft":"16.54","legRight":"3.72","flegRight":"-11.70"},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.86,"shoes_assets_2":0.86}}
        },
        mouthand:{
            icon:'/images/positions/pos_08.svg',
            infos:{"rotation":{"head":"-2.42","body":"0.42","armLeft":"144.98","farmLeft":"90.00","armRight":"-139.32","farmRight":"-90.00","legLeft":"41.38","flegLeft":"-42.58","legRight":"-41.24","flegRight":"39.90"},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.86,"shoes_assets_2":0.86}}
        },
        ninja:{
            icon:'/images/positions/pos_09.svg',
            infos:{"rotation":{"head":"9.86","body":"-25.56","armLeft":"105.16","farmLeft":"38.34","armRight":"-75.76","farmRight":"-26.42","legLeft":"1.46","flegLeft":"-51.42","legRight":"-70.52","flegRight":"2.90"},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.6,"shoes_assets_2":0.6}}
        },
        tada:{
            icon:'/images/positions/pos_10.svg',
            infos:{"rotation":{"head":"7.60","body":"-21.94","armLeft":"95.60","farmLeft":"32.46","armRight":"-62.08","farmRight":"-4.92","legLeft":"69.20","flegLeft":"-21.58","legRight":"-26.94","flegRight":"-54.44"},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.6,"shoes_assets_2":0.6}}
        },
        fresh:{
            icon:'/images/positions/pos_11.svg',
            infos:{"rotation":{"head":"0.80","body":"2.04","armLeft":"97.44","farmLeft":"-57.60","armRight":"-103.22","farmRight":"54.38","legLeft":"82.36","flegLeft":"-57.60","legRight":"-69.16","flegRight":"68.36"},"scaleX":{"hands_assets_1":0.6,"hands_assets_2":0.6,"shoes_assets_1":0.6,"shoes_assets_2":0.6}}
        }
    }
    
    this.filters = {
        "color":[
            "#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524", "#000000", "#FFFFFF",
            "#622C9B", "#44AD34", "#FF831D", "#475FC4", "#008374", "#FFD000", "#34CAD2", "#E51794", "#784217", "#0096A7", "#DA0037", "#7D868C", 
            "#db8160", "#f298b9", "#e05967", "#e0886d", "#ea807e", 
            "#19b71e", "#59db9e", "#edf99d", "#56ff97", "#89e884", 
            "#7c66ff", "#998df4", "#68d5f9", "#92dee5", "#0665cc", 
            "#8567bc", "#935bcc", "#cbb7f4", "#9a76e2", "#8519b7",
            "#dd5a65", "#c64a2b", "#f4b4b2", "#f7b4c5", "#f24153",
            "#ffd7af", "#ffd775", "#ffd987", "#e07033", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", 
            "#c69b17", "#b25320", "#d1801d", "#fce3c2", "#e28451"
        ],
        "skin_color":[
            "#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524", "#000000"
        ],
        "eyes_color":[
            "#00BFFF", "#00C957", "#2F4F4F", "#3E766D", "#5E2605", "#668B8B", "#e0886d", "#000000"
        ],
        "hairs_color":[
            "#000000", "#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524",
            "#ffd7af", "#ffd775", "#ffd987", "#e07033", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", "#E3E3E3",
            "#c69b17", "#b25320", "#d1801d", "#fce3c2", "#e28451"
        ],
        "wear_color":[
            "#db8160", "#f298b9", "#e05967", "#e0886d", "#ea807e", 
            "#19b71e", "#59db9e", "#edf99d", "#56ff97", "#89e884", 
            "#7c66ff", "#998df4", "#68d5f9", "#92dee5", "#0665cc", 
            "#8567bc", "#935bcc", "#cbb7f4", "#9a76e2", "#8519b7",
            "#dd5a65", "#c64a2b", "#f4b4b2", "#f7b4c5", "#f24153",
            "#ffd7af", "#ffd775", "#ffd987", "#e07033", "#dd986c", "#eaa788", "#eab01e", "#fcb35f", "#fce2a1", "#f7d083", 
        ],
        "color_older": [
            "#e2bc74",
            "#c8a767",
            "#af925a",
            "#967d4d",
            "#7d6840",
            "#645333",
            "#4b3e26",
            "#322919",
            "#19140c",
            "#000000",
            "#622C9B", "#44AD34", "#FF831D", "#475FC4", "#008374", "#FFD000", "#34CAD2", "#E51794", "#784217", "#0096A7", "#DA0037", "#7D868C"
        ]
    };
    this.bkcolor = this.filters.color[Math.floor(Math.random()*this.filters.color.length)];
    this.t_color = this.filters.color[Math.floor(Math.random()*this.filters.color.length)];
    this.b_color = this.filters.color[Math.floor(Math.random()*this.filters.color.length)];
    this.containers = {
        "body": {
            reg: "top center",
            contrainst: {
                scale: []
            },
            rotate:{
                min:-180,
                max:180
            }
        },
        "head": {
            parent:"body",
            reg: "bottom center",
            contrainst: {
                scale: []
            },
            rotate:{
                min:-30,
                max:30
            }
        },
        "backhairs_container": {
            parent:"head",
            reg: "bottom center",
            movieclip:"backhair_assets",
            movieclipname:"backhair_assets",
            contrainst: {
                scale: []
            },
            assets:{
                backhairs:{status:0}
            },
            rotate:{
                min:-20,
                max:20
            }
        },
        "hairs_container": {
            parent:"head",
            reg: "bottom center",
            movieclip:"hair_assets",
            movieclipname:"hair_assets",
            contrainst: {
                scale: []
            },
            assets:{
                hairs:{status:0},
                ears:{status:0}
            }
        },
        "faces_container": {
            parent:"head",
            reg: "bottom center",
            movieclip:"face_assets",
            movieclipname:"face_assets",
            contrainst: {
                scale: []
            },
            assets:{
                eyes:{status:0},
                noses:{status:0},
                mouths:{status:0},
                glasses:{status:0},
                eyebrow:{status:0},
                mustach:{status:0}
            }
        },
        "accessories_container": {
            parent:"head",
            reg: "bottom center",
            movieclip:"accessories_assets",
            movieclipname:"accessories_assets",
            contrainst: {
                scale: []
            },
            assets:{
                hats:{status:0}
            }
        },
        "legLeft": {
            parent:"body",
            reg: "top top center",
            contrainst: {
                scale: ["legRight"]
            },
            rotate:{
                min:-5,
                max:90
            }
        },
        "flegLeft": {
            parent : "legLeft",
            reg: "top center",
            contrainst: {
                scale: ["legRight"]
            },
            rotate:{
                min:-90,
                max:90
            }
        },
        "shoes_01": {
            parent:"flegLeft",
            reg: "top center",
            movieclip:"shoes_assets",
            movieclipname:"shoes_assets_1",
            contrainst: {
                scale: []
            },
            assets:{
                shoes:{status:0}
            },
            rotate:{
                min:-90,
                max:0
            }
        },
        "legRight": {
            parent:"body",
            reg: "top top center",
            contrainst: {
                scale: ["legLeft"]
            },
            rotate:{
                min:-90,
                max:5
            }
        },
        "flegRight": {
            parent : "legRight",
            reg: "top center",
            contrainst: {
                scale: ["legLeft"]
            },
            rotate:{
                min:-90,
                max:90
            }
        },
        "shoes_02": {
            parent:"flegRight",
            reg: "top center",
            movieclip:"shoes_assets",
            movieclipname:"shoes_assets_2",
            contrainst: {
                scale: []
            },
            assets:{
                shoes:{status:0}
            }
        },
        "tops_container": {
            parent:"body",
            reg: "center center",
            movieclip:"tops_assets",
            movieclipname:"tops_assets",
            contrainst: {
                scale: []
            },
            assets:{
                tshirt:{status:0}
            }
        },
        "armLeft": {
            parent:"body",
            reg: "top center",
            contrainst: {
                scale: ["armRight"]
            },
            rotate:{
                min:-20,
                max:170
            }
        },
        "farmLeft": {
            parent : "armLeft",
            reg: "top center",
            contrainst: {
                scale: ["armRight"]
            },
            rotate:{
                min:-90,
                max:90
            }
        },
        "hands_01": {
            parent:"farmLeft",
            reg: "bottom center",
            movieclip:"hands_assets",
            movieclipname:"hands_assets_1",
            contrainst: {
                scale: []
            },
            assets:{
                hand:{status:0}
            }
        },
        "armRight": {
            parent:"body",
            reg: "top center",
            contrainst: {
                scale: ["armLeft"]
            },
            rotate:{
                min:-170,
                max:20
            }
        },
        "farmRight": {
            parent :"armRight",
            reg: "top center",
            contrainst: {
                scale: ["armLeft"]
            },
            rotate:{
                min:-90,
                max:90
            }
        },
        "hands_02": {
            parent:"farmRight",
            reg: "bottom center",
            movieclip:"hands_assets",
            movieclipname:"hands_assets_2",
            contrainst: {
                scale: []
            },
            assets:{
                hand:{status:0}
            }
        },
        "barbes_container": {
            parent:"head",
            reg: "top center",
            movieclip:"barbes_assets",
            movieclipname:"barbes_assets",
            contrainst: {
                scale: []
            },
            assets:{
                barbes:{status:0}
            },
            rotate:{
                min:-20,
                max:20
            }
        }
    }
    this.default_elements = {"ghead":{"container":"head","element":"ghead","width":258,"height":231,"min_width":80,"min_height":80,"max_width":450,"max_height":400,"min_scale":0.5,"max_scale":2,"scale":1,"radius":{"tl":225,"tr":225,"bl":100,"br":100},"reg":"bottom center","color":"skin_color","contrainst":{"width":[],"height":[],"min_height":"<width/2"},"map_style":"cover","current_radius":{"tl":129,"tr":129,"bl":102,"br":102}},"farm_left":{"container":"farmLeft","element":"farm_left","width":30,"height":65,"min_width":30,"min_height":60,"max_width":50,"max_height":150,"min_scale":0.5,"max_scale":2,"scale":1,"radius":{"tl":75,"tr":75,"bl":75,"br":75},"reg":"top center","color":"t_color","current_radius":{"tl":15,"tr":15,"bl":15,"br":15},"contrainst":{"width":["arm_left","farm_right","arm_right"],"height":["farm_right","arm_right","arm_left"]},"map_style":"cover"},"arm_left":{"container":"armLeft","element":"arm_left","width":30,"height":65,"min_width":30,"min_height":60,"max_width":50,"max_height":150,"min_scale":0.5,"max_scale":2,"scale":1,"radius":{"tl":75,"tr":75,"bl":75,"br":75},"reg":"top center","color":"t_color","contrainst":{"width":["arm_right","farm_right","farm_left"],"height":["arm_right","farm_right","farm_left"]},"map":"hamburger","map_style":"cover","current_radius":{"tl":15,"tr":15,"bl":15,"br":15}},"farm_right":{"container":"farmRight","element":"farm_right","width":30,"height":65,"min_width":30,"min_height":60,"max_width":50,"max_height":150,"min_scale":0.5,"max_scale":2,"scale":1,"radius":{"tl":75,"tr":75,"bl":75,"br":75},"reg":"top center","color":"t_color","contrainst":{"width":["farm_left","arm_left","arm_right"],"height":["farm_left","arm_left","arm_right"]},"map_style":"cover","current_radius":{"tl":15,"tr":15,"bl":15,"br":15}},"arm_right":{"container":"armRight","element":"arm_right","width":30,"height":65,"min_width":30,"min_height":60,"max_width":50,"max_height":150,"min_scale":0.5,"max_scale":2,"scale":1,"radius":{"tl":75,"tr":75,"bl":75,"br":75},"reg":"top center","color":"t_color","contrainst":{"width":["arm_left","farm_left","farm_right"],"height":["arm_left","farm_left","farm_right"]},"map_style":"cover","current_radius":{"tl":15,"tr":15,"bl":15,"br":15}},"gbody":{"container":"body","element":"gbody","width":69,"height":80,"min_width":60,"min_height":80,"max_width":200,"max_height":200,"min_scale":0.5,"max_scale":2,"scale":1,"radius":{"tl":40,"tr":40,"bl":0,"br":0},"reg":"top top center","color":"t_color","contrainst":{"width":[],"height":[]},"map_style":"cover","current_radius":{"tl":34.5,"tr":34.5,"bl":0,"br":0}},"neck":{"container":"head","element":"neck","width":20,"height":10,"min_width":15,"min_height":10,"max_width":100,"max_height":200,"min_scale":0.5,"max_scale":2,"scale":1,"radius":{"tl":0,"tr":0,"bl":7,"br":7},"reg":"top center","color":"skin_color","contrainst":{"width":[],"height":[]},"map_style":"cover"},"fleg_left":{"container":"flegLeft","element":"fleg_left","width":30,"height":60,"min_width":30,"min_height":60,"max_width":150,"max_height":150,"min_scale":0.5,"max_scale":2,"scale":1,"radius":{"tl":75,"tr":75,"bl":75,"br":75},"reg":"top left","color":"b_color","current_radius":{"tl":15,"tr":15,"bl":15,"br":15},"contrainst":{"width":["fleg_right","leg_left","leg_right"],"height":["fleg_right","leg_left","leg_right"],"max_width":"gbody.width/2"},"map_style":"cover"},"leg_left":{"container":"legLeft","element":"leg_left","width":30,"height":60,"min_width":30,"min_height":60,"max_width":150,"max_height":150,"min_scale":0.5,"max_scale":2,"scale":1,"radius":{"max":75},"reg":"top left","color":"b_color","contrainst":{"width":["leg_right","fleg_right","fleg_left"],"height":["leg_right","fleg_right","fleg_left"],"max_width":"gbody.width/2"},"map_style":"cover","current_radius":{"tl":15,"tr":15,"bl":15,"br":15}},"fleg_right":{"container":"flegRight","element":"fleg_right","width":30,"height":60,"min_width":30,"min_height":60,"max_width":150,"max_height":150,"min_scale":0.5,"max_scale":2,"scale":1,"radius":{"tl":75,"tr":75,"bl":75,"br":75},"reg":"top right","color":"b_color","contrainst":{"width":["fleg_left","leg_left","leg_right"],"height":["fleg_left","leg_left","leg_right"],"max_width":"gbody.width/2"},"map_style":"cover","current_radius":{"tl":15,"tr":15,"bl":15,"br":15}},"leg_right":{"container":"legRight","element":"leg_right","width":30,"height":60,"min_width":30,"min_height":60,"max_width":150,"max_height":150,"min_scale":0.5,"max_scale":2,"scale":1,"radius":{"tl":75,"tr":75,"bl":75,"br":75},"reg":"top right","color":"b_color","contrainst":{"width":["leg_left","fleg_left","fleg_right"],"height":["leg_left","fleg_left","fleg_right"],"max_width":"gbody.width/2"},"map_style":"cover","current_radius":{"tl":15,"tr":15,"bl":15,"br":15}}};
    
    this.navigation_types = {
        skins: {
            "icon": "images/assets/nav/nav_buttons_skin.svg",
            "type":"all",
            "colors": this.filters.color
        },
        eyes: {
            "icon": "images/assets/nav/nav_buttons_eyes.svg",
            "type":"all",
            "colors": this.filters.color,
            "maps": {
                "eyes_00": {
                    "preview": "images/character/none.png",
                    "frame":1,
                    "type":"all"
                },
                "eyes_01": {
                    "preview": "images/character/faces/eyes0002.png",
                    "frame":2,
                    "type":"all"
                },
                "eyes_02": {
                    "preview": "images/character/faces/eyes0003.png",
                    "frame":3,
                    "type":"all"
                },
                "eyes_03": {
                    "preview": "images/character/faces/eyes0004.png",
                    "frame":4,
                    "type":"all"
                },
                "eyes_04": {
                    "preview": "images/character/faces/eyes0005.png",
                    "frame":5,
                    "type":"all"
                },
                "eyes_05": {
                    "preview": "images/character/faces/eyes0006.png",
                    "frame":6,
                    "type":"all"
                },
                "eyes_06": {
                    "preview": "images/character/faces/eyes0007.png",
                    "frame":7,
                    "type":"all"
                },
                "eyes_07": {
                    "preview": "images/character/faces/eyes0008.png",
                    "frame":8,
                    "type":"all"
                },
                "eyes_08": {
                    "preview": "images/character/faces/eyes0009.png",
                    "frame":9,
                    "type":"all"
                },
                "eyes_09": {
                    "preview": "images/character/faces/eyes0010.png",
                    "frame":10,
                    "type":"all"
                },
                "eyes_10": {
                    "preview": "images/character/faces/eyes0011.png",
                    "frame":11,
                    "type":"all"
                },
                "eyes_11": {
                    "preview": "images/character/faces/eyes0012.png",
                    "frame":12,
                    "type":"1"
                },
                "eyes_12": {
                    "preview": "images/character/faces/eyes0013.png",
                    "frame":13,
                    "type":"1"
                },
                "eyes_13": {
                    "preview": "images/character/faces/eyes0014.png",
                    "frame":14,
                    "type":"1"
                },
                "eyes_14": {
                    "preview": "images/character/faces/eyes0015.png",
                    "frame":15,
                    "type":"1"
                },
                "eyes_15": {
                    "preview": "images/character/faces/eyes0016.png",
                    "frame":16,
                    "type":"1"
                },
                "eyes_16": {
                    "preview": "images/character/faces/eyes0017.png",
                    "frame":17,
                    "type":"1"
                },
                "eyes_17": {
                    "preview": "images/character/faces/eyes0018.png",
                    "frame":17,
                    "type":"1"
                }
            }
        },
        eyebrow: {
            "icon": "images/assets/nav/nav_buttons_eyebrow.svg",
            "type":"all",
            "maps": {
                "eyebrow_00": {
                    "preview": "images/character/none.png",
                    "frame":1,
                    "type":"all"
                },
                "eyebrow_01": {
                    "preview": "images/character/faces/eyebrow0002.png",
                    "frame":2,
                    "type":"all"
                },
                "eyebrow_02": {
                    "preview": "images/character/faces/eyebrow0003.png",
                    "frame":3,
                    "type":"all"
                },
                "eyebrow_03": {
                    "preview": "images/character/faces/eyebrow0004.png",
                    "frame":4,
                    "type":"all"
                },
                "eyebrow_04": {
                    "preview": "images/character/faces/eyebrow0005.png",
                    "frame":5,
                    "type":"all"
                },
                "eyebrow_05": {
                    "preview": "images/character/faces/eyebrow0006.png",
                    "frame":6,
                    "type":"all"
                },
                "eyebrow_06": {
                    "preview": "images/character/faces/eyebrow0007.png",
                    "frame":7,
                    "type":"all"
                },
                "eyebrow_07": {
                    "preview": "images/character/faces/eyebrow0008.png",
                    "frame":8,
                    "type":"all"
                },
                "eyebrow_08": {
                    "preview": "images/character/faces/eyebrow0009.png",
                    "frame":9,
                    "type":"all"
                },
                "eyebrow_09": {
                    "preview": "images/character/faces/eyebrow0010.png",
                    "frame":10,
                    "type":"all"
                },
                "eyebrow_10": {
                    "preview": "images/character/faces/eyebrow0011.png",
                    "frame":11,
                    "type":"all"
                },
                "eyebrow_11": {
                    "preview": "images/character/faces/eyebrow0012.png",
                    "frame":12,
                    "type":"all"
                },
                "eyebrow_12": {
                    "preview": "images/character/faces/eyebrow0013.png",
                    "frame":13,
                    "type":"all"
                },
                "eyebrow_13": {
                    "preview": "images/character/faces/eyebrow0014.png",
                    "frame":14,
                    "type":"all"
                },
                "eyebrow_14": {
                    "preview": "images/character/faces/eyebrow0015.png",
                    "frame":15,
                    "type":"all"
                }
            }
        },
        noses: {
            "icon": "images/assets/nav/nav_buttons_noses.svg",
            "type":"all",
            "maps": {
                "nose_00": {
                    "preview": "images/character/none.png",
                    "frame":1,
                    "type":"all"
                },
                "nose_01": {
                    "preview": "images/character/faces/noses0002.png",
                    "frame":2,
                    "type":"all"
                },
                "nose_02": {
                    "preview": "images/character/faces/noses0003.png",
                    "frame":3,
                    "type":"all"
                },
                "nose_03": {
                    "preview": "images/character/faces/noses0004.png",
                    "frame":4,
                    "type":"all"
                },
                "nose_04": {
                    "preview": "images/character/faces/noses0005.png",
                    "frame":5,
                    "type":"all"
                },
                "nose_05": {
                    "preview": "images/character/faces/noses0006.png",
                    "frame":6,
                    "type":"all"
                },
                "nose_06": {
                    "preview": "images/character/faces/noses0007.png",
                    "frame":7,
                    "type":"all"
                },
                "nose_07": {
                    "preview": "images/character/faces/noses0008.png",
                    "frame":8,
                    "type":"all"
                },
                "nose_08": {
                    "preview": "images/character/faces/noses0009.png",
                    "frame":9,
                    "type":"all"
                },
                "nose_09": {
                    "preview": "images/character/faces/noses0010.png",
                    "frame":10,
                    "type":"all"
                },
                "nose_10": {
                    "preview": "images/character/faces/noses0011.png",
                    "frame":11,
                    "type":"all"
                },
                "nose_11": {
                    "preview": "images/character/faces/noses0012.png",
                    "frame":12,
                    "type":"all"
                }
            }
        },
        hairs: {
            "icon": "images/assets/nav/nav_buttons_hairs.svg",
            "type":"all",
            "colors": this.filters.color,
            "maps": {
                "hairs_00": {
                    "preview": "images/character/none.png",
                    "frame":1,
                    "type":"all"
                },
                "hairs_01": {
                    "preview": "images/character/hairs/hairs_preview0002.png",
                    "frame":2,
                    "type":"2"
                },
                "hairs_02": {
                    "preview": "images/character/hairs/hairs_preview0003.png",
                    "frame":3,
                    "type":"2"
                },
                "hairs_03": {
                    "preview": "images/character/hairs/hairs_preview0004.png",
                    "frame":4,
                    "type":"2"
                },
                "hairs_04": {
                    "preview": "images/character/hairs/hairs_preview0005.png",
                    "frame":5,
                    "type":"2"
                },
                "hairs_05": {
                    "preview": "images/character/hairs/hairs_preview0006.png",
                    "frame":6,
                    "type":"2"
                },
                "hairs_06": {
                    "preview": "images/character/hairs/hairs_preview0007.png",
                    "frame":7,
                    "type":"2"
                },
                "hairs_07": {
                    "preview": "images/character/hairs/hairs_preview0008.png",
                    "frame":8,
                    "type":"2"
                },
                "hairs_08": {
                    "preview": "images/character/hairs/hairs_preview0009.png",
                    "frame":9,
                    "type":"2"
                },
                "hairs_09": {
                    "preview": "images/character/hairs/hairs_preview0010.png",
                    "frame":10,
                    "type":"2"
                },
                "hairs_10": {
                    "preview": "images/character/hairs/hairs_preview0011.png",
                    "frame":11,
                    "type":"2"
                },
                "hairs_11": {
                    "preview": "images/character/hairs/hairs_preview0012.png",
                    "frame":12,
                    "type":"2"
                },
                "hairs_12": {
                    "preview": "images/character/hairs/hairs_preview0013.png",
                    "frame":13,
                    "type":"2"
                },
                "hairs_13": {
                    "preview": "images/character/hairs/hairs_preview0014.png",
                    "frame":14,
                    "type":"2"
                },
                "hairs_14": {
                    "preview": "images/character/hairs/hairs_preview0015.png",
                    "frame":15,
                    "type":"1"
                },
                "hairs_15": {
                    "preview": "images/character/hairs/hairs_preview0016.png",
                    "frame":16,
                    "type":"1"
                },
                "hairs_16": {
                    "preview": "images/character/hairs/hairs_preview0017.png",
                    "frame":17,
                    "type":"1"
                },
                "hairs_17": {
                    "preview": "images/character/hairs/hairs_preview0018.png",
                    "frame":18,
                    "type":"1"
                },
                "hairs_18": {
                    "preview": "images/character/hairs/hairs_preview0019.png",
                    "frame":19,
                    "type":"1"
                },
                "hairs_19": {
                    "preview": "images/character/hairs/hairs_preview0020.png",
                    "frame":20,
                    "type":"1"
                },
                "hairs_20": {
                    "preview": "images/character/hairs/hairs_preview0021.png",
                    "frame":21,
                    "type":"1"
                },
                "hairs_21": {
                    "preview": "images/character/hairs/hairs_preview0022.png",
                    "frame":22,
                    "type":"1"
                },
                "hairs_22": {
                    "preview": "images/character/hairs/hairs_preview0023.png",
                    "frame":23,
                    "type":"1"
                },
                "hairs_23": {
                    "preview": "images/character/hairs/hairs_preview0024.png",
                    "frame":24,
                    "type":"1"
                },
                "hairs_24": {
                    "preview": "images/character/hairs/hairs_preview0025.png",
                    "frame":25,
                    "type":"all"
                },
                "hairs_25": {
                    "preview": "images/character/hairs/hairs_preview0026.png",
                    "frame":26,
                    "type":"all"
                },
                "hairs_26": {
                    "preview": "images/character/hairs/hairs_preview0027.png",
                    "frame":27,
                    "type":"all"
                },
                "hairs_27": {
                    "preview": "images/character/hairs/hairs_preview0028.png",
                    "frame":28,
                    "type":"all"
                },
                "hairs_28": {
                    "preview": "images/character/hairs/hairs_preview0029.png",
                    "frame":29,
                    "type":"all"
                },
                "hairs_29": {
                    "preview": "images/character/hairs/hairs_preview0030.png",
                    "frame":30,
                    "type":"all"
                }
            }
        },
        mouths: {
            "icon": "images/assets/nav/nav_buttons_mouths.svg",
            "type":"all",
            "maps": {
                "mouth_00": {
                    "preview": "images/character/none.png",
                    "frame":1,
                    "type":"all"
                },
                "mouth_01": {
                    "preview": "images/character/faces/mouths0002.png",
                    "frame":2,
                    "type":"all"
                },
                "mouth_02": {
                    "preview": "images/character/faces/mouths0003.png",
                    "frame":3,
                    "type":"all"
                },
                "mouth_03": {
                    "preview": "images/character/faces/mouths0004.png",
                    "frame":4,
                    "type":"all"
                },
                "mouth_04": {
                    "preview": "images/character/faces/mouths0005.png",
                    "frame":5,
                    "type":"all"
                },
                "mouth_05": {
                    "preview": "images/character/faces/mouths0006.png",
                    "frame":6,
                    "type":"all"
                },
                "mouth_06": {
                    "preview": "images/character/faces/mouths0007.png",
                    "frame":7,
                    "type":"all"
                },
                "mouth_07": {
                    "preview": "images/character/faces/mouths0008.png",
                    "frame":8,
                    "type":"all"
                },
                "mouth_08": {
                    "preview": "images/character/faces/mouths0009.png",
                    "frame":9,
                    "type":"all"
                },
                "mouth_09": {
                    "preview": "images/character/faces/mouths0010.png",
                    "frame":10,
                    "type":"all"
                },
                "mouth_10": {
                    "preview": "images/character/faces/mouths0011.png",
                    "frame":11,
                    "type":"all"
                },
                "mouth_11": {
                    "preview": "images/character/faces/mouths0012.png",
                    "frame":12,
                    "type":"all"
                },
                "mouth_12": {
                    "preview": "images/character/faces/mouths0013.png",
                    "frame":13,
                    "type":"all"
                },
                "mouth_13": {
                    "preview": "images/character/faces/mouths0014.png",
                    "frame":14,
                    "type":"all"
                },
                "mouth_14": {
                    "preview": "images/character/faces/mouths0015.png",
                    "frame":14,
                    "type":"all"
                },
                "mouth_15": {
                    "preview": "images/character/faces/mouths0016.png",
                    "frame":14,
                    "type":"1"
                },
                "mouth_16": {
                    "preview": "images/character/faces/mouths0017.png",
                    "frame":14,
                    "type":"1"
                },
                "mouth_17": {
                    "preview": "images/character/faces/mouths0018.png",
                    "frame":14,
                    "type":"1"
                },
                "mouth_18": {
                    "preview": "images/character/faces/mouths0019.png",
                    "frame":14,
                    "type":"1"
                },
                "mouth_19": {
                    "preview": "images/character/faces/mouths0020.png",
                    "frame":14,
                    "type":"1"
                }
            }
        },
        "tops": {
            "icon": "images/assets/nav/nav_buttons_tops.svg",
            "type":"all",
            "colors": this.filters.color,
            "maps": {
                "tops_00": {
                    "preview": "images/character/none.png",
                    "frame":1,
                    "type":"all"
                },
                "tops_01": {
                    "preview": "images/character/tops/tshirt0002.png",
                    "frame":2,
                    "type":"all"
                },
                "tops_02": {
                    "preview": "images/character/tops/tshirt0003.png",
                    "frame":3,
                    "type":"all"
                },
                "tops_03": {
                    "preview": "images/character/tops/tshirt0004.png",
                    "frame":4,
                    "type":"all"
                },
                "tops_04": {
                    "preview": "images/character/tops/tshirt0005.png",
                    "frame":5,
                    "type":"all"
                },
                "tops_05": {
                    "preview": "images/character/tops/tshirt0006.png",
                    "frame":6,
                    "type":"all"
                },
                "tops_06": {
                    "preview": "images/character/tops/tshirt0007.png",
                    "frame":7,
                    "type":"all"
                },
                "tops_07": {
                    "preview": "images/character/tops/tshirt0008.png",
                    "frame":8,
                    "type":"all"
                },
                "tops_08": {
                    "preview": "images/character/tops/tshirt0009.png",
                    "frame":9,
                    "type":"all"
                },
                "tops_09": {
                    "preview": "images/character/tops/tshirt0010.png",
                    "frame":10,
                    "type":"all"
                },
                "tops_10": {
                    "preview": "images/character/tops/tshirt0011.png",
                    "frame":11,
                    "type":"all"
                },
                "tops_11": {
                    "preview": "images/character/tops/tshirt0012.png",
                    "frame":12,
                    "type":"all"
                }
            }
        },
        "bottoms": {
            "icon": "images/assets/nav/nav_buttons_bottoms.svg",
            "type":"all",
            "colors": this.filters.color
        },
        glasses: {
            "icon": "images/assets/nav/nav_buttons_glasses.svg",
            "type":"all",
            "colors": this.filters.color,
            "maps": {
                "glasses_00": {
                    "preview": "images/character/none.png",
                    "frame":1,
                    "type":"all"
                },
                "glasses_01": {
                    "preview": "images/character/glasses/glasses0002.png",
                    "frame":2,
                    "type":"all"
                },
                "glasses_02": {
                    "preview": "images/character/glasses/glasses0003.png",
                    "frame":3,
                    "type":"all"
                },
                "glasses_03": {
                    "preview": "images/character/glasses/glasses0004.png",
                    "frame":4,
                    "type":"all"
                },
                "glasses_04": {
                    "preview": "images/character/glasses/glasses0005.png",
                    "frame":5,
                    "type":"all"
                },
                "glasses_05": {
                    "preview": "images/character/glasses/glasses0006.png",
                    "frame":6,
                    "type":"all"
                },
                "glasses_06": {
                    "preview": "images/character/glasses/glasses0007.png",
                    "frame":7,
                    "type":"all"
                },
                "glasses_07": {
                    "preview": "images/character/glasses/glasses0008.png",
                    "frame":8,
                    "type":"all"
                },
                "glasses_08": {
                    "preview": "images/character/glasses/glasses0009.png",
                    "frame":9,
                    "type":"all"
                },
                "glasses_09": {
                    "preview": "images/character/glasses/glasses0010.png",
                    "frame":10,
                    "type":"all"
                },
                "glasses_10": {
                    "preview": "images/character/glasses/glasses0011.png",
                    "frame":11,
                    "type":"all"
                },
                "glasses_11": {
                    "preview": "images/character/glasses/glasses0012.png",
                    "frame":12,
                    "type":"all"
                },
                "glasses_12": {
                    "preview": "images/character/glasses/glasses0013.png",
                    "frame":13,
                    "type":"all"
                },
                "glasses_13": {
                    "preview": "images/character/glasses/glasses0014.png",
                    "frame":14,
                    "type":"all"
                },
                "glasses_14": {
                    "preview": "images/character/glasses/glasses0015.png",
                    "frame":15,
                    "type":"all"
                },
                "glasses_15": {
                    "preview": "images/character/glasses/glasses0016.png",
                    "frame":16,
                    "type":"all"
                }
            }
        },
        shoes: {
            "icon": "images/assets/nav/nav_buttons_foots.svg",
            "type":"all",
            "colors": this.filters.color,
            "maps": {
                "foots_00": {
                    "preview": "images/character/none.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":1,
                    "type":"all"
                },
                "foots_01": {
                    "preview": "images/character/shoes/shoes0002.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":2,
                    "type":"all"
                },
                "foots_02": {
                    "preview": "images/character/shoes/shoes0003.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":3,
                    "type":"all"
                },
                "foots_03": {
                    "preview": "images/character/shoes/shoes0004.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":4,
                    "type":"all"
                },
                "foots_04": {
                    "preview": "images/character/shoes/shoes0005.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":5,
                    "type":"all"
                },
                "foots_05": {
                    "preview": "images/character/shoes/shoes0006.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":6,
                    "type":"all"
                },
                "foots_06": {
                    "preview": "images/character/shoes/shoes0007.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":7,
                    "type":"all"
                },
                "foots_07": {
                    "preview": "images/character/shoes/shoes0008.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":8,
                    "type":"all"
                },
                "foots_08": {
                    "preview": "images/character/shoes/shoes0009.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":9,
                    "type":"all"
                },
                "foots_09": {
                    "preview": "images/character/shoes/shoes0010.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":10,
                    "type":"all"
                },
                "foots_10": {
                    "preview": "images/character/shoes/shoes0011.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":11,
                    "type":"all"
                },
                "foots_11": {
                    "preview": "images/character/shoes/shoes0012.png",
                    "gfoot_left": "none",
                    "gfoot_right": "none",
                    "frame":12,
                    "type":"all"
                }
            }
        },
        mustach: {
            "icon": "images/assets/nav/nav_buttons_mustach.svg",
            "type":"2",
            "maps": {
                "mustach_00": {
                    "preview": "images/character/faces/none.png",
                    "frame":1,
                    "type":"all"
                },
                "mustach_01": {
                    "preview": "images/character/faces/mustach0002.png",
                    "frame":2,
                    "type":"all"
                },
                "mustach_02": {
                    "preview": "images/character/faces/mustach0003.png",
                    "frame":3,
                    "type":"all"
                },
                "mustach_03": {
                    "preview": "images/character/faces/mustach0004.png",
                    "frame":4,
                    "type":"all"
                },
                "mustach_04": {
                    "preview": "images/character/faces/mustach0005.png",
                    "frame":5,
                    "type":"all"
                },
                "mustach_05": {
                    "preview": "images/character/faces/mustach0006.png",
                    "frame":6,
                    "type":"all"
                },
                "mustach_06": {
                    "preview": "images/character/faces/mustach0007.png",
                    "frame":7,
                    "type":"all"
                },
                "mustach_07": {
                    "preview": "images/character/faces/mustach0008.png",
                    "frame":8,
                    "type":"all"
                },
                "mustach_08": {
                    "preview": "images/character/faces/mustach0009.png",
                    "frame":9,
                    "type":"all"
                },
                "mustach_09": {
                    "preview": "images/character/faces/mustach0010.png",
                    "frame":10,
                    "type":"all"
                },
                "mustach_10": {
                    "preview": "images/character/faces/mustach0011.png",
                    "frame":11,
                    "type":"all"
                },
                "mustach_11": {
                    "preview": "images/character/faces/mustach0012.png",
                    "frame":12,
                    "type":"all"
                },
                "mustach_12": {
                    "preview": "images/character/faces/mustach0013.png",
                    "frame":13,
                    "type":"all"
                },
                "mustach_13": {
                    "preview": "images/character/faces/mustach0014.png",
                    "frame":14,
                    "type":"all"
                },
                "mustach_14": {
                    "preview": "images/character/faces/mustach0015.png",
                    "frame":15,
                    "type":"all"
                },
                "mustach_15": {
                    "preview": "images/character/faces/mustach0016.png",
                    "frame":16,
                    "type":"all"
                },
                "mustach_16": {
                    "preview": "images/character/faces/mustach0017.png",
                    "frame":17,
                    "type":"all"
                },
                "mustach_17": {
                    "preview": "images/character/faces/mustach0018.png",
                    "frame":18,
                    "type":"all"
                }
            }
        },
        barbes: {
            "icon": "images/assets/nav/nav_buttons_barbes.svg",
            "type":"2",
            "maps": {
                "mustach_00": {
                    "preview": "images/character/none.png",
                    "frame":1,
                    "type":"all"
                },
                "mustach_01": {
                    "preview": "images/character/faces/barbes0002.png",
                    "frame":2,
                    "type":"all"
                },
                "mustach_02": {
                    "preview": "images/character/faces/barbes0003.png",
                    "frame":3,
                    "type":"all"
                },
                "mustach_03": {
                    "preview": "images/character/faces/barbes0004.png",
                    "frame":4,
                    "type":"all"
                },
                "mustach_04": {
                    "preview": "images/character/faces/barbes0005.png",
                    "frame":5,
                    "type":"all"
                },
                "mustach_05": {
                    "preview": "images/character/faces/barbes0006.png",
                    "frame":6,
                    "type":"all"
                },
                "mustach_06": {
                    "preview": "images/character/faces/barbes0007.png",
                    "frame":7,
                    "type":"all"
                },
                "mustach_07": {
                    "preview": "images/character/faces/barbes0008.png",
                    "frame":8,
                    "type":"all"
                },
                "mustach_08": {
                    "preview": "images/character/faces/barbes0009.png",
                    "frame":9,
                    "type":"all"
                },
                "mustach_09": {
                    "preview": "images/character/faces/barbes0010.png",
                    "frame":10,
                    "type":"all"
                },
                "mustach_10": {
                    "preview": "images/character/faces/barbes0011.png",
                    "frame":11,
                    "type":"all"
                },
                "mustach_11": {
                    "preview": "images/character/faces/barbes0012.png",
                    "frame":12,
                    "type":"all"
                },
                "mustach_12": {
                    "preview": "images/character/faces/barbes0013.png",
                    "frame":13,
                    "type":"all"
                },
                "mustach_13": {
                    "preview": "images/character/faces/barbes0014.png",
                    "frame":14,
                    "type":"all"
                },
                "mustach_14": {
                    "preview": "images/character/faces/barbes0015.png",
                    "frame":15,
                    "type":"all"
                },
                "mustach_15": {
                    "preview": "images/character/faces/barbes0016.png",
                    "frame":16,
                    "type":"all"
                },
                "mustach_16": {
                    "preview": "images/character/faces/barbes0017.png",
                    "frame":17,
                    "type":"all"
                },
                "mustach_17": {
                    "preview": "images/character/faces/barbes0018.png",
                    "frame":18,
                    "type":"all"
                }
            }
        },
        ears: {
            "icon": "images/assets/nav/nav_buttons_ears.svg",
            "type":"all",
            "maps": {
                "ears_00": {
                    "preview": "images/character/none.png",
                    "frame":1,
                    "type":"all"
                },
                "ears_01": {
                    "preview": "images/character/faces/ears0002.png",
                    "frame":2,
                    "type":"all"
                },
                "ears_02": {
                    "preview": "images/character/faces/ears0003.png",
                    "frame":3,
                    "type":"all"
                },
                "ears_03": {
                    "preview": "images/character/faces/ears0004.png",
                    "frame":4,
                    "type":"all"
                },
                "ears_04": {
                    "preview": "images/character/faces/ears0005.png",
                    "frame":5,
                    "type":"all"
                },
                "ears_05": {
                    "preview": "images/character/faces/ears0006.png",
                    "frame":6,
                    "type":"all"
                },
                "ears_06": {
                    "preview": "images/character/faces/ears0007.png",
                    "frame":7,
                    "type":"all"
                },
                "ears_07": {
                    "preview": "images/character/faces/ears0008.png",
                    "frame":8,
                    "type":"all"
                }
            }
        },
        bkcolor: {
            "icon": "images/assets/nav/nav_buttons_skin.svg",
            "type":"all",
            "colors": this.filters.color
        },
        hats: {
            "icon": "images/assets/nav/nav_buttons_hats.svg",
            "type":"all",
            "maps": {
                "hats_00": {
                    "preview": "images/character/faces/hats0001.png",
                    "frame": 1,
                    "type":"all"
                },
                "hats_01": {
                    "preview": "images/character/faces/hats0002.png",
                    "frame": 2,
                    "type":"all"
                },
                "hats_02": {
                    "preview": "images/character/faces/hats0003.png",
                    "frame": 3,
                    "type":"all"
                },
                "hats_03": {
                    "preview": "images/character/faces/hats0004.png",
                    "frame": 4,
                    "type":"all"
                },
                "hats_04": {
                    "preview": "images/character/faces/hats0005.png",
                    "frame": 5,
                    "type":"all"
                },
                "hats_05": {
                    "preview": "images/character/faces/hats0006.png",
                    "frame": 6,
                    "type":"all"
                },
                "hats_06": {
                    "preview": "images/character/faces/hats0007.png",
                    "frame": 7,
                    "type":"all"
                },
                "hats_07": {
                    "preview": "images/character/faces/hats0008.png",
                    "frame": 8,
                    "type":"all"
                },
                "hats_08": {
                    "preview": "images/character/faces/hats0009.png",
                    "frame": 9,
                    "type":"all"
                },
                "hats_09": {
                    "preview": "images/character/faces/hats0010.png",
                    "frame": 10,
                    "type":"all"
                },
                "hats_10": {
                    "preview": "images/character/faces/hats0011.png",
                    "frame": 11,
                    "type":"all"
                },
                "hats_11": {
                    "preview": "images/character/faces/hats0012.png",
                    "frame": 12,
                    "type":"all"
                },
                "hats_12": {
                    "preview": "images/character/faces/hats0013.png",
                    "frame": 13,
                    "type":"all"
                },
                "hats_13": {
                    "preview": "images/character/faces/hats0014.png",
                    "frame": 14,
                    "type":"all"
                }
            }
        }
    }
}
/*
        hand: {
            "icon": "images/assets/nav/nav_buttons_hands.svg",
            "maps": {
                "hands_00": {
                    "preview": "images/character/none.png",
                    "ghand_left": "none",
                    "ghand_right": "none"
                },
                "hands_01": {
                    "preview": "images/character/none.png",
                    "ghand_left": "none",
                    "ghand_right": "none"
                },
                "hands_02": {
                    "preview": "images/character/none.png",
                    "ghand_left": "none",
                    "ghand_right": "none"
                },
                "hands_03": {
                    "preview": "images/character/none.png",
                    "ghand_left": "none",
                    "ghand_right": "none"
                },
                "hands_04": {
                    "preview": "images/character/none.png",
                    "ghand_left": "none",
                    "ghand_right": "none"
                },
                "hands_05": {
                    "preview": "images/character/none.png",
                    "ghand_left": "none",
                    "ghand_right": "none"
                },
                "hands_06": {
                    "preview": "images/character/none.png",
                    "ghand_left": "none",
                    "ghand_right": "none"
                },
                "hands_07": {
                    "preview": "images/character/none.png",
                    "ghand_left": "none",
                    "ghand_right": "none"
                },
                "hands_08": {
                    "preview": "images/character/none.png",
                    "ghand_left": "none",
                    "ghand_right": "none"
                },
                "hands_09": {
                    "preview": "images/character/none.png",
                    "ghand_left": "none",
                    "ghand_right": "none"
                },
                "hands_10": {
                    "preview": "images/character/none.png",
                    "ghand_left": "none",
                    "ghand_right": "none"
                }
            }
        }
        */
character.prototype.save = function(){
    console.log('------------------------------------ this.type ------------------------- ', this.type);
    var to_save = {
        containers : this.containers,
        type : this.type,
        e_p : this.e_p,
        skin_color : this.skin_color,
        bkcolor : this.bkcolor,
        t_color : this.t_color,
        b_color : this.b_color,
        hair_color : this.hair_color,
        shoes_color : this.shoes_color,
        glasses_color : this.glasses_color,
        border_color : this.border_color,
        eyes_color : this.eyes_color,
        positions : this.save_pos()
    }
    window.localStorage.setItem('last_character', JSON.stringify(to_save));
    
    /* on remplace des couleurs pour la gravure */
    this.skin_color = "#FFFFFF";
    this.b_color = "#FFFFFF";
    this.background.graphics.clear();
    this.stage.update();
    //beginFill("#ff0000").drawCircle(0, 0, 25);

    this.redraw_body();
    /* on save le dernier svg */
    exporter = new SVGExporter(this.stage, false, false, false);
    var t = new Date().getTime();
    exporter.run();
    var svg = new XMLSerializer().serializeToString(exporter.svg);
    
    window.localStorage.setItem('last_character_svg', svg);
    
    
    /* puis on remet les couleurs initiales. */
    this.skin_color = to_save.skin_color;
    this.b_color = to_save.b_color;
    this.redraw_body();
    this.stage.update();
    
    this.container.scaleX = this.container.scaleY = .35;
    /* on save le dernier base64 */
    var canvas = document.getElementById(this.params.canvas);
    var ctx = canvas.getContext("2d");
    
    var myImageData = ctx.getImageData(0, 0, 250, 300).data;
    var base64 = canvas.toDataURL("image/png", 1.0);
    
    window.localStorage.setItem('last_character_pix', base64);
    
    this.background.graphics.beginFill(to_save.bkcolor).drawRect(0, 0, 25);
    this.redraw_body();
    this.stage.update();
    setTimeout(function(){
        app._router.navigate("page/save", {trigger:true, replace:false});
    }, 100);
}
character.prototype.load_last = function(){
    var i = JSON.parse(window.localStorage.getItem('last_character'));
    this.set_datas(i);
}
character.prototype.set_containers = function(){
    for(var i=0; i<_.keys(this.containers).length; i++){
        var key = _.keys(this.containers)[i];
        if(typeof this.containers[key].movieclip !== "undefined"){
            for(var k=0; k<_.keys(this.containers[key].assets).length; k++){
                var asset = _.keys(this.containers[key].assets)[k];
                if(typeof this.containers[key].assets[asset] !== "undefined"){
                    this[this.containers[key].movieclipname][asset].gotoAndStop(this.containers[key].assets[asset].status);
                    
                    var array_key = _.keys(this[this.containers[key].movieclipname][asset]);
                    var search_term = 'hair_color'; // your search term as string
                    var search = search_term.toUpperCase();
                    var array_hairs = jQuery.grep(array_key, function(value) {
                        return value.toUpperCase().indexOf(search) >= 0;
                    });
                    for(var h=0; h<array_hairs.length; h++){
                        var ass = array_hairs[h];
                        if(typeof this[this.containers[key].movieclipname][asset][ass].shape !== "undefined"){
                            if(this[this.containers[key].movieclipname][asset][ass].shape.graphics._fill !== null && typeof this[this.containers[key].movieclipname][asset][ass].shape.graphics._fill.style !== "undefined"){
                                this[this.containers[key].movieclipname][asset][ass].shape.graphics._fill.style = this.hair_color;   
                            }
                            if(this[this.containers[key].movieclipname][asset][ass].shape.graphics._stroke !== null && typeof this[this.containers[key].movieclipname][asset][ass].shape.graphics._stroke.style !== "undefined"){
                                this[this.containers[key].movieclipname][asset][ass].shape.graphics._stroke.style = this.hair_color;   
                            }
                        }
                    }
                    
                    var search_term = 'skin'; // your search term as string
                    var search = search_term.toUpperCase();
                    var array_skin = jQuery.grep(array_key, function(value) {
                        return value.toUpperCase().indexOf(search) >= 0;
                    });
                    for(var h=0; h<array_skin.length; h++){
                        var ass = array_skin[h];
                        this[this.containers[key].movieclipname][asset][ass].shape.graphics._fill.style = this.skin_color;
                    }
                    
                    var search_term = 'shoes_color'; // your search term as string
                    var search = search_term.toUpperCase();
                    var array_shoes = jQuery.grep(array_key, function(value) {
                        return value.toUpperCase().indexOf(search) >= 0;
                    });
                    for(var h=0; h<array_shoes.length; h++){
                        var ass = array_shoes[h];
                        this[this.containers[key].movieclipname][asset][ass].shape.graphics._fill.style = this.shoes_color;
                    }
                    
                    var search_term = 'glasses_color'; // your search term as string
                    var search = search_term.toUpperCase();
                    var array_glasses = jQuery.grep(array_key, function(value) {
                        return value.toUpperCase().indexOf(search) >= 0;
                    });
                    for(var h=0; h<array_glasses.length; h++){
                        var ass = array_glasses[h];
                        this[this.containers[key].movieclipname][asset][ass].shape.graphics._fill.style = this.glasses_color;
                    }
                    
                    var search_term = 'eyes_color'; // your search term as string
                    var search = search_term.toUpperCase();
                    var array_eyes = jQuery.grep(array_key, function(value) {
                        return value.toUpperCase().indexOf(search) >= 0;
                    });
                    for(var h=0; h<array_eyes.length; h++){
                        var ass = array_eyes[h];
                        if(typeof this[this.containers[key].movieclipname][asset][ass].shape !== "undefined"){
                            this[this.containers[key].movieclipname][asset][ass].shape.graphics._fill.style = this.eyes_color;
                        }
                    }
                    var obj = this[key];
                    
                }else{
                }
            }
        }
    }
    this.faces_container.cache(0, 0, 800, 800);
    this.hairs_container.cache(0, 0, 800, 800);
    this.backhairs_container.cache(0, 0, 800, 800);
}
character.prototype.set_datas = function(i){
    this.containers = i.containers,
    this.e_p = i.e_p,
    this.skin_color = i.skin_color,
    this.t_color = i.t_color,
    this.b_color = i.b_color,
    this.hair_color = i.hair_color,
    this.eyes_color = i.eyes_color,
    this.border_color = i.border_color;
    this.type = i.type;
    if(typeof i.bkcolor !== "undefined"){
        this.bkcolor = i.bkcolor;
    }
    this.color_changed = true;
    
    setTimeout($.proxy(function(){
        this.background.graphics.clear();
        this.background.graphics.beginFill(this.bkcolor).drawRect(
            0,
            0,
            window.innerWidth,
            window.innerHeight
        );
        this.current_target = this.gbody;
        this.color_changed = true;
        setTimeout($.proxy(function(){
            this.color_changed = true;
            this.current_target = this.ghead;
            this.redraw_body();
            this.resize();
            $('#'+this.params.canvas).css('visibility', "visible");
            setTimeout($.proxy(function(){
                if(!this.params.touch_enabled){
                    //this.pause();
                }
                this.resize();
            }, this), 10);
        }, this), 10);
    }, this), 10);
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}