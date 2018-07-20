function user_gallery_page(){
    this._characters = [];
    this.swiper = null;
    this.scroll = null;
    this._datas = null;
    this._page = 1;
    this.current_motion = "hello";
    this.limit = 15;
    this._page = 1;
    this._is_last = false;
}
user_gallery_page.prototype.init = function(){
    this.display_list();
}
user_gallery_page.prototype.display_list = function(){
    var _self = this;
    if(!auth_helper.is_logged()){
        /* vous devez etre connecté pour afficher cette page */
        return false;
    }
    $('article').css('height', window.innerHeight+"px");
    $('#scroll_scroller').css('height', ($('article').length*window.innerHeight)+"px");
    //$('#gallery_wrapper').css({"width":(n*250)+"px", "height":"300px"});
    //$('#gallery_wrapper .scroller').css({"width":((n)*250)+"px", "height":"300px"});
    $('#gallery_container').css({
        'width':(Math.floor(window.innerWidth/300)*300)+"px"
    });
    var _force = false;
    if(typeof app._page_request.id !== "undefined"){
        _force = true;
    }
    setTimeout(function(){
        characters_helper.get_user_characters(
            function(characters){
                _self._datas = characters;
                _self.create_grid();
            },
            _force
        );  
    }, 2500);
        
    //this.scroll = new IScroll('#gallery_scroll_wrapper', {
    //    snap: "article",
    //    disableMouse: false,
    //    probeType:1,
    //    scrollbars:false,
    //    interactiveScrollbars:false,
    //    fadeScrollbars:false,
    //    mouseWheel:true,
    //    click:true,
    //    tap:true, 
    //    keyBindings:true,
    //    deceleration:0.1
    //});
}
user_gallery_page.prototype.scroll_to = function(id){
    app.page_properties._page_script.scroll.scrollToElement(document.querySelector('#scroll_scroller article:nth-child('+id+')'), 700, null, null, IScroll.utils.ease.quadratic);
}
user_gallery_page.prototype.create_grid = function(){
    var _temp = _.template($('#user_gallery_template').html());
    for (var i = 0; i < this._datas.length; ++i) {
        this._datas[i].datas = JSON.parse(this._datas[i].datas);
        $('#user_gallery_container').append(_temp(this._datas[i]));
        TweenLite.set($('#character_'+this._datas[i].id), {scaleX:0, scaleY:0});
        TweenLite.to($('#character_'+this._datas[i].id), .5, {scaleX:1, scaleY:1, delay:1+(.1*i), ease:Back.easeOut});
    }
    this.set_listeners();
    var _self = this;
    this.scroll = new IScroll('#user_gallery_scroll_wrapper', {
        disableMouse: false,
        probeType:1,
        scrollbars:false,
        interactiveScrollbars:false,
        fadeScrollbars:false,
        mouseWheel:true,
        click:true,
        tap:true, 
        keyBindings:true,
        deceleration:0.001
    });
    this.scroll.on('scrollEnd', function(){
        if(_self.scroll.y === _self.scroll.maxScrollY && !_self._is_last){
            _self.load_next_characters();
        }
    });
    
    if(typeof app._page_request.id !== "undefined"){
        setTimeout(function(){
            _self.open_character_details(app._page_request.id);
        }, 2500);
    }
}
user_gallery_page.prototype.load_next_characters = function(){
    var _self = this;
    characters_helper.get_characters_with_params({
        "start":this.limit*this._page,
        "limit":this.limit,
        "user_id":auth_helper.user_infos.user.id
    }, function(characters){
        if(characters.length === 0){
            _self._is_last = true;
        }
        var _temp = _.template($('#user_gallery_template').html());
        for (var i = 0; i < characters.length; i++) {
            characters[i].parsed_datas = JSON.parse(characters[i].datas);
            characters[i].datas = JSON.parse(characters[i].datas);
            _self._datas.push(characters[i]);
            $('#user_gallery_container').append(_temp(characters[i]));
        }
        _self.set_listeners();
        //var _self = this;
        _self.scroll.refresh();
        _self.scroll.y  = this.scroll.y - 20;
        _self._page++;
    });
}
user_gallery_page.prototype.animate = function(motion, callBack){
    var _self = this;
    var gif_name = _.where(_self._datas, {id:_self.params.id})[0].datas.name+"_"+_self.current_motion;
    stickers_helper.file_exist(
        gif_name, 
        function(e){
            if(!e){
                /* le gif n'existe pas on crée le gif puis on retourne l'image */
                _self._characters[0].motions[_self.current_motion](_self._characters[0], true , function(e){
                    callBack(cordova.file.dataDirectory+'pictures/'+gif_name+".gif");
                });
            }else{
                /* le gif est déjà créé on balance l'image directement */
                callBack(cordova.file.dataDirectory+'pictures/'+gif_name+".gif");
            }
        }
    );
}
user_gallery_page.prototype.set_listeners = function(){
    var _self = this;
    $('.avatar_list').off('click').on('click', function(){
        _self.open_character_details($(this).attr('data-id'));
    });
}
user_gallery_page.prototype.open_character_details = function(id){
    var _self = this;
    //_self.params.id = id;
    var element = $('[data-id="'+id+'"]').eq(0);
    var case_template = element.html();
    var x = element.position().left,
        y = element.position().top,
        w = element.width(),
        h = element.height(),
        target = element,
        pix = element.attr('data-pix');
    
    _self.params = {
        x:x,
        y:y,
        h:h,
        w:w,
        target:element,
        pix:pix,
        id:element.attr('data-id')
    };
    element.css('visibility', 'hidden');
    
    _self.scroll.disable();
    
    $('.user_gallery').prepend('<div class="avatar_list show_template" data-id="'+element.attr('data-id')+'" data-pix="'+element.attr('data-pix')+'" style="top:'+y+'px; left:'+x+'px; width:'+w+'px; height:'+h+'px">'+case_template+'</div>');
    TweenLite.to($('.show_template'), .5, {
        "top":0, 
        "left":0, 
        "width":"100%", 
        "height":"100%",
        "margin":"0px",
        "padding":"0px",
        ease:Power4.easeIn
    });
    TweenLite.to($('.show_template .user_gallery_avatar'), .5, {
        "top":0, 
        "left":0, 
        "width":"100%", 
        "height":"50%",
        ease:Power4.easeIn
    });
    TweenLite.to($('.show_template .avatar_ground'), .5, {
        "top":0, 
        "left":0, 
        "width":"100%", 
        "height":"100%", 
        "border-radius":"0",
        ease:Power4.easeIn
    });
    app.play_sound('display_card');
    TweenLite.to($('.show_template .avatar_pix'), .5, {
        "top":0, 
        "left":0, 
        "width":"100%", 
        "height":"100%", 
        "border-radius":"0px",
        "border-bottom-left-radius":"0px",
        "border-bottom-right-radius":"0px",
        "background-position":"50% 0px",
        "background-size":"contain",
        ease:Power4.easeOut,
        onComplete:function(){
            TweenLite.to($('.show_template .avatar_pix'), .5, {
                "background-position-y":$('.show_template .avatar_pix').height()+"px",
                delay:.4,
                ease:Power4.easeIn,
                onComplete:function(){
                    //app.say($('.show_template .label').html(), null, 1.6);
                    /* add canvas then display character.js */
                    $('.show_template .avatar_pix').append('<canvas id="show_preview_canvas" width="'+$('.show_template .avatar_pix').width()+'" height="'+$('.show_template .avatar_pix').height()+'"></canvas>');
                    _self._characters[0] = new character({
                        "touch_enabled":false,
                        "canvas":"show_preview_canvas",
                        "width":$('#show_preview_canvas').width(),
                        "height":$('#show_preview_canvas').height(),
                        "datas":_.where(_self._datas, {id:_self.params.id})[0].datas
                    });
                    _self._characters[0].init();
                }
            });
            /* create small avatar disc */
            // avatar var = pix change background small avatar if needed
            $('.show_template').append('<div class="small_avatar"><div class="circle_ground" style="background-color:'+$('.show_template .avatar_ground').css('background-color')+';"></div><div class="small_avatar_pix" style="background-image:url(./images/assets/nav/nav_buttons_share_white.svg);"></div></div>');
            
            $('.small_avatar').off('click').on('click', function(){
                app.share({
                    files: [pix] // an array of filenames either locally or remotely
                });
                //app.share({
                //    message: 'Créé avec '+app.app_name, // not supported on some apps (Facebook, Instagram)
                //    subject: auth_helper.user_infos.user.pseudo+' vous fait parvenir un gif rigolo', // fi. for email
                //    files: [pix], // an array of filenames either locally or remotely
                //    url: 'http://idkids.landscape-viewer.com/id/'+id,
                //    chooserTitle: app.app_name // Android only, you can override the default share sheet title
                //});
                //_self._characters[0].motions[_self.current_motion](
                //    _self._characters[0], 
                //    true, 
                //    function(e){
                //        console.log(e);
                //        console.log("file name ", e.file_url);
                //        app.share({
                //          message: 'Créé avec '+app.app_name, // not supported on some apps (Facebook, Instagram)
                //          subject: auth_helper.user_infos.user.pseudo+' vous fait parvenir un gif rigolo', // fi. for email
                //          files: [e.file_url], // an array of filenames either locally or remotely
                //          url: 'https://idkids.landscape-viewer.com/id/'+id,
                //          chooserTitle: 'Téléchargez l\'application '+app.app_name // Android only, you can override the default share sheet title
                //        });
                //        $('.small_avatar .small_avatar_pix').css('background-image', 'url('+e.file_url+')');
                //    }
                //);
            });
            $('.small_avatar').css('top', window.innerHeight/2-75+'px');
            TweenLite.to($('.show_template .small_avatar'), .5, {'right':'10px', ease:Back.easeOut, delay:.4});
            
            /* create close button shower */
            $('.show_template').append('<div class="close_button"><img src="images/assets/nav/nav_buttons_close_button_white.svg"/></div>');
            
            /* add options buttons, like, share, motions etc */
            //$('.show_template').append('<div class="show_tab motion_tab"></div>');
            var _temp = _.template($('#motions_tab_template').html());
            $('.show_template').append(_temp({}));
            
            var _temp = _.template($('#options_tab_template').html());
            $('.show_template').append(_temp({}));
            
            var rh = window.innerHeight/2 - $('.show_template .label').height();
            $('.show_tab').css({'height': (rh)+'px', 'width':"100%"});
            $('.tab.forty').css({'height':'50%'});
            //$('.show_tab').css({'height': (rh/2)+'px', 'width':"100%"});
            
            setTimeout(function(){
                for(var i=0; i<$('object').length; i++){
                    var doc = $('object')[i].contentDocument;
                    var styleElement = doc.createElementNS("http://www.w3.org/2000/svg", "style");
                    styleElement.textContent = ".cls-1, g, circle, rect, path { fill: "+$('.show_template .avatar_ground').css('background-color')+"; pointer-events:none; } svg { pointer-events:none; } * { pointer-events:none; }";
                    var style = doc.getElementsByTagName('svg'); 
                    if(typeof style[0] !== "undefined"){
                        style[0].appendChild(styleElement);
                    }
                }
                $('[data-motion] .hitzone').off('click').on('click', function(){
                    _UI.displayTouch($(this).parent());
                    _self.current_motion = $(this).parent().attr('data-motion');
                    _self._characters[0].motions[$(this).parent().attr('data-motion')](_self._characters[0], false);
                });
                $('#edit_button .hitzone').off('click').on('click', function(){
                    _UI.displayTouch($(this).parent());
                });
                $('#share_button .hitzone').off('click').on('click', function(){
                    _self._characters[0].motions[$(this).parent().attr('data-motion')](_self._characters[0], false, function(){
                    });
                    _UI.displayTouch($(this).parent());
                    var options = {
                        message: 'Retrouvez mon personnage '+$('.show_template .label').html()+' sur idkids-emoji', // not supported on some apps (Facebook, Instagram)
                        subject: 'Créez votre avatar !', // fi. for email
                        files: [_self.params.pix], // an array of filenames either locally or remotely
                        url: 'http://idkids.landscape-viewer.com/#page/character/id/'+_self.params.id,
                        chooserTitle: 'Mon Nouvel Avatar' // Android only, you can override the default share sheet title
                    }
                    var onSuccess = function(result) {
                        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
                        console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
                    }
                    var onError = function(msg) {
                        console.log("Sharing failed with message: " + msg);
                    }
                    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
                });
                $('#shop_button .hitzone').off('click').on('click', function(){
                    _UI.displayTouch($(this).parent());
                    app._router.navigate("page/product/id/"+_self.params.id, {trigger:true, replace:false});
                });
                
                TweenLite.to($('.show_template .show_tab'), .5, {
                    "margin-top":"0%",
                    delay:.8,
                    ease:Power4.easeOut
                });
            },1200);
            
            
            
            $('.show_template .tab .label').css('color', $('.show_template .avatar_ground').css('background-color'));
            
            $('.show_template .close_button, .show_template .close_button img').off('click').on('click', function(){
                /* close preview shower with options */
                TweenLite.to($('.show_template .small_avatar'), .5, {
                    scaleY:0, 
                    scaleX:0, 
                    ease:Back.easeIn, 
                    onComplete:function(){
                        $('.show_template .small_avatar').remove();
                    }
                });
                TweenLite.to($('.show_template .close_button'), .5, {
                    scaleY:0, 
                    scaleX:0, 
                    ease:Back.easeOut, 
                    onComplete:function(){
                        $('.show_template .close_button').remove();
                    }
                });
                
                TweenLite.to($('.show_template .show_tab'), .5, {
                    opacity:0,  
                    onComplete:function(){
                        $('.show_template .show_tab').remove();
                        app.play_sound('display_card');
                    }
                });
                
                TweenLite.to($('.show_template'), .8, {
                    "top":_self.params.y, 
                    "left":_self.params.x, 
                    "width":_self.params.w+"px", 
                    "height":_self.params.h+"px",
                    "margin":"5px",
                    "padding":"0px",
                    "background-color":'rgba(255,255,255,0)',
                    ease:Power4.easeInOut,
                    delay:.5
                });
                TweenLite.to($('.show_template .user_gallery_avatar'), .8, {
                    "top":0, 
                    "left":0, 
                    "width":"150px", 
                    "height":"150px",
                    ease:Power4.easeInOut,
                    delay:.5
                });
                TweenLite.to($('.show_template .avatar_ground'), .8, {
                    "top":"50px", 
                    "left":0, 
                    "width":"100px", 
                    "height":"100px", 
                    "border-radius":"100%",
                    ease:Power4.easeInOut,
                    delay:.5
                });
                TweenLite.to($('.show_template .avatar_pix'), .8, {
                    "top":0, 
                    "left":0, 
                    "width":"100px", 
                    "height":"100%", 
                    "background-position":"50% 0px",
                    "border-bottom-left-radius":"75px",
                    "border-bottom-right-radius":"75px",
                    delay:.5,
                    ease:Power4.easeInOut,
                    onComplete:function(){
                        $('.show_template').remove();
                        console.log(_self.params.target);
                        console.log(_self.params);
                        _self.params.target.css('visibility', 'visible');
                        _self.scroll.enable();
                    }
                });
                TweenLite.to(_self._characters[0].container, .5, {
                    scaleY:0, 
                    scaleX:0, 
                    ease:Power4.easeIn, 
                    onComplete:function(){
                        $('.show_template .avatar_pix #show_preview_canvas').remove();
                        _self._characters[0].destroy(function(e){
                            //_self._characters = [];
                        });
                    }
                });
            }); 
        }
    });
}
user_gallery_page.prototype.load_character = function(id){
    setTimeout(function(){
        app._router.navigate(
            'page/character/id/'+id, {
                trigger: true,
                replace: false
            }
        );
    },30);
}
user_gallery_page.prototype.download_character = function(id){
    var pop = new PopUp();
    pop.open_popup(
        {
            "illus":{
                color:'white',
                picture:$('[data-id="'+id+'"]').attr('data-pix')
            },
            "title":"Télécharger : "+$('[data-id="'+id+'"]').find('.label').html(),
            "message":"Quel format souhaitez-vous télécharger ?",
            "buttons":[
                {"label":"SVG"},
                {"label":"PNG"},
                {"label":"Annuler"}
            ]
        }, 
        function(e, datas){
            if(parseInt(e) === 0){
                window.open($('[data-id="'+id+'"]').attr('data-pix').replace('.png', '.svg').replace('_thumb', ''), '_blank');
            }else if(parseInt(e) === 1){
                window.open($('[data-id="'+id+'"]').attr('data-pix').replace('_thumb', ''), '_blank');
            }
            delete pop;
        }
    );
}
user_gallery_page.prototype.add_grid = function(){
    var _temp = _.template($('#gallery_template').html());
    for (var i = 0; i < this._datas.length; ++i) {
        $('#gallery_container').append(_temp(this._datas[i]));
    }
    this.set_listeners();
    //var _self = this;
    this.scroll.refresh();
    this.scroll.y  = this.scroll.y - 20;
}
user_gallery_page.prototype.load_next_page = function(){
    var _self = this;
    ajax_request.get(
        "/nse/usercharacters",
        {
            "start":this.limit*this._page,
            "limit":this.limit,
            "no-datas":false,
            "user_id":auth_helper.user_infos.user.id
        },
        function(success){
            _self._datas = success.result;
            _self.add_grid();
            _self._page += 1;
        },
        function(fail){
            alert('erreur lors de la recherche');
        }
    );
}
user_gallery_page.prototype.set_canvas = function(i, _datas){
    this._characters[i] = new character({
        "touch_enabled":false,
        "canvas":"canvas_"+i,
        "width":250,
        "height":300,
        "datas":_datas
    });
    this._characters[i].init();
}
user_gallery_page.prototype.play = function(){
    
}
user_gallery_page.prototype.pause = function(){
    
}
user_gallery_page.prototype.update = function(){
    
}
user_gallery_page.prototype.refresh = function(datas){
    
}
user_gallery_page.prototype.destroy = function(callBack){
    var _self = this;
    for(var i=0; i<this._characters.length; i++){
        this._characters[i].destroy(function(){
            if(i===_self._characters.length-1){
                _self._characters = [];
                callBack();
            }
        });
    }
}