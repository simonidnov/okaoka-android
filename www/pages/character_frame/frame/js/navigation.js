var app = {
    _app_infos : null,
    _router : null,
    _page_request : null,
    page_properties : null,
    transition : "",
    _sounds : null,
    transition_time:.6,
    transition_delay:.4,
    transition_ease:"Out",
    page_loaded : false,
    page_created : false,
    nav_opened : false,
    locale:"fr-FR",
    language : "fr",
    volume:0.5,
    can_speech:true,
    app_name:"Simply Human",
    settings:{
        "sound":true,
        "music":true,  
        "voice":true,  
    },
    to_seek:0,
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        if(typeof cordova !== "undefined"){
            document.addEventListener('deviceready', this.onDeviceReady, false);
        }else{
            $(document).ready(function(){
                app.onDeviceReady();
            });
        }
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.init();
        if(typeof StatusBar !== "undefined"){
            StatusBar.hide();
        }
        createjs.MotionGuidePlugin.install();
        if(typeof cordova === "undefined"){
            window.localStorage.setItem('user', JSON.stringify({"id":"1", "pseudo":"jeanguymze", "gamecenter":"G:1067743784"}));
            auth_helper.set_user();
        }else{
            setTimeout(function(){
                navigator.splashscreen.hide(); 
                auth_helper.gamecenter();
            }, 2500);    
        }
    },
    receivedEvent: function(id) {
    },
    set_nav_button : function(){
        $('#default_nav_button').css('display', 'none');
        return false;
        var _self = this;
        this.nav_button_canvas = document.getElementById('default_nav_button');
        if(typeof this.nav_button_root === "undefined"){
            this.nav_button_root = new lib.nav_button();
            this.nav_button_stage = new createjs.Stage(this.nav_button_canvas);
            this.nav_button_stage.addChild(this.nav_button_root);	
            //Registers the "tick" event listener.
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", this.nav_button_stage);
            
            (function(isResp, respDim, isScale, scaleType) {		
                var lastW, lastH, lastS=1;		
                resizeCanvas();		
                function resizeCanvas() {			
                    var w = lib.properties.width, h = lib.properties.height;			
                    var iw = window.innerWidth, ih=window.innerHeight;			
                    var pRatio = window.devicePixelRatio, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
                    if(isResp) {                
                        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                            sRatio = lastS;                
                        }
                        else if(!isScale) {					
                            if(iw<w || ih<h)						
                                sRatio = Math.min(xRatio, yRatio);				
                        }		
                        else if(scaleType==1) {					
                            sRatio = Math.min(xRatio, yRatio);				
                        }		
                        else if(scaleType==2) {					
                            sRatio = Math.max(xRatio, yRatio);				
                        }	
                    }			
                    /*_self.nav_button_canvas.width = w*pRatio*sRatio;
                    _self.nav_button_canvas.height = h*pRatio*sRatio;
                    _self.nav_button_canvas.style.width = w*sRatio+'px';
                    _self.nav_button_canvas.style.height = h*sRatio+'px';*/
                    _self.nav_button_canvas.width = 47;
                    _self.nav_button_canvas.height = 47;
                    _self.nav_button_canvas.style.width = 47+'px';
                    _self.nav_button_canvas.style.height = 47+'px';
                    //_self.nav_button_stage.scaleX = pRatio*sRatio;			
                    //_self.nav_button_stage.scaleY = pRatio*sRatio;			
                    lastW = iw; lastH = ih; lastS = sRatio;		
                }
            })(false,'both',false,1);
        }else{
            createjs.Ticker.addEventListener("tick", this.nav_button_stage);
        }
        $('#default_nav_button').off('click').on('click', function(){
            _self.open_close_nav();
        });
        $('[data-subnav]').off('click').on('click', function(e){
            _UI.displayTouch($(this));
            _self.open_subnav($(this).attr('data-subnav')); 
        });
    },
    init : function(){
        if ( jQuery ){
            this.setup();
            this.set_sounds();
            
            var _self = this;
            
            this.set_nav_button();
        }else{
            alert('dom not loaded');
            $(function(){
                jQuery(document).ready(function(){
                    app.setup();
                });
            });
        }
        app.set_locale();
    },
    open_settings : function(){
        $('#setting_sound, #setting_music, #setting_voice').off('click').on('click', function(e){
            _UI.displayTouch($(this));
            if($(this).attr('data-active') === "true"){
                $(this).attr('data-active', 'false');
                $(this).find('.icon img').attr('src', $(this).attr('data-off'));
                switch($(this).attr('id')){
                    case 'setting_sound':
                        app.settings.sound = false;
                        break;
                    case 'setting_music':
                        app.stop_audio();
                        app.settings.music = false;
                        break;
                    case 'setting_voice':
                        app.settings.voice = false;
                        break;
                }
            }else{
                $(this).attr('data-active', 'true');
                $(this).find('.icon img').attr('src', $(this).attr('data-on'));
                switch($(this).attr('id')){
                    case 'setting_sound':
                        app.settings.sound = true;
                        break;
                    case 'setting_music':
                        app.settings.music = true;
                        break;
                    case 'setting_voice':
                        app.settings.voice = true;
                        break;
                }
            }
        });
        
        TweenLite.to($('#nav_button_1'), .5, {x:-window.innerWidth*2, rotation:-30, ease:Power4.easeIn});
        TweenLite.to($('#nav_button_2'), .5, {x:-window.innerWidth, rotation:-50, ease:Power4.easeIn});
        TweenLite.to($('#nav_button_3'), .5, {x:-window.innerWidth, rotation:30, ease:Power4.easeIn});
        TweenLite.to($('#nav_button_4'), .5, {x:-window.innerWidth, rotation:40, ease:Power4.easeIn});
        TweenLite.to($('#nav_button_5'), .5, {x:-window.innerWidth, rotation:50, ease:Power4.easeIn});
        
        TweenLite.set($('#setting_sound'), {left:'150%', y:-50, rotation:30});
        TweenLite.set($('#setting_music'), {left:'150%', y:-100, rotation:50});
        TweenLite.set($('#setting_voice'), {left:'150%', y:50, rotation:-30});
        TweenLite.set($('#setting_lang'), {left:'150%', y:100, rotation:-50});
        
        TweenLite.to($('#setting_sound'), .8, {left:'0%', y:0, rotation:0, delay:.3, ease:Power4.easeOut});
        TweenLite.to($('#setting_music'), .8, {left:'50%', y:0, rotation:0, delay:.4, ease:Power4.easeOut});
        TweenLite.to($('#setting_voice'), .8, {left:'0%', y:0, rotation:0, delay:.5, ease:Power4.easeOut});
        TweenLite.to($('#setting_lang'), .8, {left:'50%', y:0, rotation:0, delay:.6, ease:Power4.easeOut});
        
        app.nav_button_root.gotoAndPlay('cross_to_back');
        
        $('#default_nav_button').off('click').on('click', function(){
            app.play_sound('open_nav');
            
            TweenLite.to($('#setting_sound'), .5, {left:'150%', y:-100, rotation:-30, ease:Power4.easeIn});
            TweenLite.to($('#setting_music'), .5, {left:'200%', y:-200, rotation:-40, delay:0.1, ease:Power4.easeIn});
            TweenLite.to($('#setting_voice'), .5, {left:'150%', y:100, rotation:30, delay:0.2, ease:Power4.easeIn});
            TweenLite.to($('#setting_lang'), .5, {left:'200%', y:200, rotation:40, delay:0.3, ease:Power4.easeIn});
            
            app.nav_button_root.gotoAndPlay('back_to_cross');
            
            
            TweenLite.to($('#nav_button_1'), .5, {x:0, rotation:0, delay:0.4, ease:Power4.easeOut});
            TweenLite.to($('#nav_button_2'), .5, {x:window.innerWidth/2, rotation:0, delay:0.5, ease:Power4.easeOut});
            TweenLite.to($('#nav_button_3'), .5, {x:0, rotation:0, delay:0.6, ease:Power4.easeOut});
            TweenLite.to($('#nav_button_4'), .5, {x:0, rotation:0, delay:0.7, ease:Power4.easeOut});
            TweenLite.to($('#nav_button_5'), .5, {x:0, rotation:0, delay:0.8, ease:Power4.easeOut});
            
            $('#default_nav_button').off('click').on('click', function(){
                app.play_sound('hit');
                app.open_close_nav();
            });
        });
    },
    open_close_nav : function(){
        var _self = this;
        $('.navigation_blocks .block').addClass('inline');
        $('#nav_button_4').off('click').on('click', function(){
            app.play_sound('hit');
            _self.open_settings();
        });
        if(!_self.nav_opened){
            app.play_sound('open_nav');
            _self.nav_button_root.gotoAndPlay("ham_to_cross");
            $('.navigation_blocks').css('display', 'block');
            
            TweenLite.to($('.screen'), .5, {y:window.innerHeight, ease:Power4.easeIn});
            
            $('#nav_button_3 span').css({'height':$('#nav_button_5').height()+'px', 'line-height':$('#nav_button_5').height()+'px'});
            $('#nav_button_4 span').css({'height':$('#nav_button_5').height()+'px', 'line-height':$('#nav_button_5').height()+'px'});
            $('#nav_button_5 span').css({'height':$('#nav_button_5').height()+'px', 'line-height':$('#nav_button_5').height()+'px'});
            $('#nav_button_6 span').css({'height':$('#nav_button_5').height()+'px', 'line-height':$('#nav_button_5').height()+'px'});
            if($('#nav_button_1').width() < $('#nav_button_1').height()){
                console.log('resize block icon')
                $('.block .icon img').css({
                    "width":'100%'
                })
            }
            TweenLite.set($('#nav_button_1'), {x:-window.innerWidth-20, rotation:30, top:"0%"});
            TweenLite.to($('#nav_button_1'), .5, {x:0, rotation:0, delay:0.3, ease:Power4.easeOut});
            
            TweenLite.set($('#nav_button_2'), {x:window.innerWidth+150, rotation:-30, top:"0%"});
            TweenLite.to($('#nav_button_2'), .5, {x:window.innerWidth/2, rotation:0, delay:0.4, ease:Power4.easeOut});
            
            TweenLite.set($('#nav_button_3'), {x:-window.innerWidth-20, rotation:30, top:"55%"});
            TweenLite.to($('#nav_button_3'), .5, {x:0, rotation:0, delay:0.5, ease:Power4.easeOut});
            
            TweenLite.set($('#nav_button_4'), {x:-window.innerWidth-20, rotation:30, top:"70%"});
            TweenLite.to($('#nav_button_4'), .5, {x:0, rotation:0, delay:0.6, ease:Power4.easeOut});
            
            TweenLite.set($('#nav_button_5'), {x:-window.innerWidth-20, rotation:30, top:"85%"});
            TweenLite.to($('#nav_button_5'), .5, {x:0, rotation:0, delay:0.7, ease:Power4.easeOut});
            
            _self.nav_opened = true;
        }else{
            app.play_sound('close_nav');
            _self.nav_button_root.gotoAndPlay("cross_to_ham");
            TweenLite.to($('.screen'), .8, {y:0, delay:1, ease:Power4.easeOut});
            
            TweenLite.to($('#nav_button_5'), .5, {top:"150%", rotation:0, delay:0.1, ease:Power4.easeIn});
            
            TweenLite.to($('#nav_button_4'), .5, {top:"150%", rotation:0, delay:0.2, ease:Power4.easeIn});
            
            TweenLite.to($('#nav_button_3'), .5, {top:"150%", rotation:0, delay:0.3, ease:Power4.easeIn});
            
            TweenLite.to($('#nav_button_2'), .5, {top:"-150%", rotation:0, delay:0.4, ease:Power4.easeIn});
            
            TweenLite.to($('#nav_button_1'), .5, {top:"-150%", rotation:0, delay:0.5, ease:Power4.easeIn, onComplete:function(){$('.navigation_blocks').css('display', 'none');}});
            if($('.navigation_types').css('display') === 'block'){
                TweenLite.to($('#type_block_1'), .5, {x:(window.innerWidth+50), rotation:-20, top:'0px', ease:Power4.easeIn});
                TweenLite.to($('#type_block_2'), .5, {x:-(window.innerWidth+50), rotation:20, top:'50%', delay:.2, ease:Power4.easeIn, onComplete:function(){
                    $('.navigation_types').css('display', 'none');
                }});
            }
            
            _self.nav_opened = false;
        }  
    },
    setup : function(){
        var Router = Backbone.Router.extend({
            routes: {
                'about':'load',
                '*notFound': 'controller'
            },
            load:function(name, type, option){
                app.setup_page(name);
            },
            controller:function(e){
                app.setup_page(e);
            }
        });
        Backbone.emulateHTTP = true;
        Backbone.history.start({ pushState: false });
        this._router = new Router();
        $.getJSON( "descriptor.json", function( data ) {
            app._app_infos = data;
            if(window.location.hash !== ""){
                app._router.navigate(window.location.hash.replace('#', ''), {trigger:true, replace:true});
                app.setup_page(window.location.hash.replace('#', ''));
            }else{
                app._router.navigate("page/"+app._app_infos.app_default_controller+'', {trigger:true, replace:false});
            }
        });
        $(document).on('resize', app.resize);
        ajax_request.init();
        
        this.settings_lang_picker = Draggable.create("#setting_lang_scroller", {
            type:"x",
            edgeResistance:2,
            bounds:"#setting_lang_wrapper",
            throwProps:true,
            snap: {
                x: function(endValue) {
                    var end = Math.round(endValue / $("#setting_lang_wrapper").width()) * $("#setting_lang_wrapper").width();
                    var num = Math.abs(end)/$("#setting_lang_wrapper").width();
                    console.log("num ======= ", num);
                    app.locale = $('#setting_lang_wrapper ul li').eq(num).attr('data-locale');
                    console.log(app.locale);
                    //app.say($('#setting_lang_wrapper ul li').eq(num).find('.label').html().replace(/<br>/g, ' '), app.locale, 1.5);
                    $('.setting_lang_dots .dot').removeClass('selected');
                    $('.setting_lang_dots .dot').eq(num).addClass('selected');
                    app.trad();
                    return end;
                }
            },
            onDragEnd:function(){
                
            }
        });
    },
    resize : function(){
        $('.app .screen').css({"width":window.innerWidth+"px", "height":window.innerHeight+"px"});  
    },
    setup_page : function(name){
        console.log('setup_page');
        app.page_loaded = false;
        app.page_created = false;
        app._page_request = this.uri_to_params(name);
        if(typeof app._page_request.page === "undefined"){
            console.log('app._page_request.page undefined ');
            return false;
        }
        if(app.page_properties !== null){
            if(typeof app.page_properties._page_script === "object"){
                app.page_properties._page_script.destroy(function(){
                    app.page_properties._page_script = null;
                });
            }
        }
        ajax_request._loader.show();
        $.getJSON( "pages/"+app._page_request.page+"/descriptor.json", function( data ) {})
            .done(function(data){
                console.log('descriptor done ', data);
                app.page_properties = data;
                app.load_styles(function(){
                    console.log('styles+loaded');
                    app.load_dependencies(function(){
                        console.log('load_dependencies OK');
                        app.load_content(function(){
                            console.log('load_content OK');
                            app.page_loaded = true;
                            app.display_content();
                            
                        });
                    }); 
                });
            })
            .fail(function(e){})
            .always(function(e){});
    },
    stage_inited : function(){
        //app.page_created = true;
        //if(app.page_loaded){
        //    app.display_content();
        //}
    },
    load_styles : function(callBack){
        var self = this;
        $.each(self.page_properties.styles, function(index, style){
            if(style.indexOf('./') === -1){
                self.page_properties.styles[index] = "pages/"+app.page_properties.name+"/"+style;
            }
            if($('link[href="'+self.page_properties.styles[index]+'"]').length === 0){
                $('head').append('<link rel="stylesheet" type="text/css" href="'+self.page_properties.styles[index]+'">');
            }
        });
        callBack();
    },
    load_dependencies : function(callBack){
        var self = this;
        $.each(self.page_properties.dependencies, function(index, dependencie){
            if(dependencie.indexOf('http') === -1){
                if(dependencie.indexOf('./') === -1){
                    self.page_properties.dependencies[index] = "pages/"+app.page_properties.name+"/"+dependencie;
                }else{
                    self.page_properties.dependencies[index] = self.page_properties.dependencies[index].replace('./', '');
                }
            }
            if(self.page_properties.dependencies[index].indexOf('maps.googleapis') !== -1 && typeof google !== "undefined"){
            }else{
                if($('script[src="'+self.page_properties.dependencies[index]+'"]').length === 0){
                    $('footer').append('<script type="text/javascript" src="'+self.page_properties.dependencies[index]+'"></script>');
                }
            }
        });
        callBack();
    },
    load_content : function(callBack){
        var self = this;
        $( ".app" ).append('<div class="screen" style="display:none;"></div>');
        $( ".app .screen:last-child" ).load(
            "pages/"+app.page_properties.name+"/"+app.page_properties.content, 
            function() {
                callBack();
            }
        );
        if( typeof self.page_properties.templates !== "undefined"){
            $('#content_templates').html('');
            $.each(self.page_properties.templates, function(index, temp){
                $.ajax({ type: "GET",   
                    url: temp.replace('./', ''),  
                    success : function(html_document)
                    {
                        $("#content_templates").append(html_document);
                    },
                    async: false
                });
            });
        }
    },
    display_content : function(){
        var transition;
        parental_control.destroy();
        if(typeof app.page_properties.script !== "undefined"){
            app.page_properties._page_script = new window[app.page_properties.script](app.page_properties.params);
            if(typeof app.page_properties.delayed === "undefined"){app.page_properties.delayed = 0}
            setTimeout(function(){
                app.page_properties._page_script.init();
            }, parseInt(app.page_properties.delayed));
        }
        if(typeof app.transition !== "undefined" && app.transition !== ""){
            transition = app.transition;
        }else{
            if(typeof app.page_properties.transition === "undefined"){
                app.page_properties.transition = "left";
                transition = "left";
            }else{
                transition = app.page_properties.transition;
            }
        }
        var delay = app.transition_delay;
        if(typeof app.page_properties.delay !== "undefined"){
            delay += parseInt(app.page_properties.delay)/1000;
            ajax_request._loader.show();
            setTimeout(function(){
                ajax_request._loader.hide();
                if(app.nav_opened){
                    app.open_close_nav();
                }
            }, parseInt(app.page_properties.delay));
        }else{
            setTimeout(function(){
                ajax_request._loader.hide();
                if(app.nav_opened){
                    app.open_close_nav();
                }
            }, delay*1000);
        }
        
        $('.app .screen').css({"width":window.innerWidth+"px", "height":window.innerHeight+"px"});
        app.trad();
        switch(transition){
            case "left":
                TweenLite.to($('.app .screen').first(), app.transition_time, {
                    x:-window.innerWidth,
                    "ease":Power4.easeOut,
                    delay:delay
                });
                $('.app .screen').last().css({"display":"block"});
                TweenLite.set($('.app .screen').last(), {x:window.innerWidth});
                TweenLite.to($('.app .screen').last(), app.transition_time, {
                    x:0,
                    "ease":Power4.easeOut,
                    "onComplete":function(){
                        $('.app .screen').first().remove();
                    },
                    delay:delay
                });
                break;
            case "right":
                TweenLite.to($('.app .screen').first(), app.transition_time, {
                    x:window.innerWidth,
                    "ease":Power4.easeOut,
                    delay:delay
                });
                $('.app .screen').last().css({"display":"block"});
                TweenLite.set($('.app .screen').last(), {x:-window.innerWidth});
                TweenLite.to($('.app .screen').last(), app.transition_time, {
                    x:0,
                    "ease":Power4.easeOut,
                    "onComplete":function(){
                        $('.app .screen').first().remove();
                    },
                    delay:delay
                });
                break;
            case "top":
                TweenLite.to($('.app .screen').first(), app.transition_time, {
                    "opacity":.5,
                    "scaleX":.8,
                    "scaleY":.8
                });
                $('.app .screen').last().css({"display":"block"});
                TweenLite.set($('.app .screen').last(), {y:window.innerHeight});
                TweenLite.to($('.app .screen').last(), .5, {
                    y:0,
                    "ease":Power4.easeOut,
                    "onComplete":function(){
                        $('.app .screen').first().remove();
                    },
                    delay:delay
                });
                break;
            case "bottom":
                TweenLite.to($('.app .screen').first(), app.transition_time, {
                    "opacity":.5,
                    "scaleX":.8,
                    "scaleY":.8
                });
                $('.app .screen').last().css({"display":"block"});
                TweenLite.set($('.app .screen').last(), {y:-window.innerHeight});
                TweenLite.to($('.app .screen').last(), .5, {
                    y:0,
                    "ease":Power4.easeOut,
                    delay:delay,
                    "onComplete":function(){
                        $('.app .screen').first().remove();
                    }
                });
                break;
            case "flip":
                $('.app .screen').last().css({'background':'#FFF','backface-visibility':'hidden','transform':"rotateY(180deg) perspective( 5000px )", "display":"block"});
                $('.app .screen').first().css({'background':'#FFF','backface-visibility':'hidden','transform':"rotateY(0deg) perspective( 5000px )", "display":"block"});
                TweenLite.to($('.app .screen').first(), .8, {
                    scaleX: .7,
                    scaleY:.7,
                    ease:Power4.easeOut
                });
                TweenLite.to($('.app .screen').last(), .8, {
                    scaleX: .7,
                    scaleY:.7,
                    ease:Power4.easeOut
                });
                TweenLite.to($('.app .screen').first(), 2, {
                    rotationY : -180, 
                    ease:Power4.easeInOut,
                    delay:.8
                });
                TweenLite.to($('.app .screen').last(), 2, {
                    transform:'rotationY(0deg), perspective( 5000px )',
                    ease:Power4.easeInOut,
                    delay:.8,
                    onComplete:function(){
                        $('.app .screen').first().remove();
                        TweenMax.to($('.app .screen').first(), .5, {
                            scaleX:1,
                            scaleY:1,
                            onComplete:function(){
                                if(typeof app.page_properties._page_script.transition_end !== "undefined"){
                                    app.page_properties._page_script.transition_end();
                                }
                            }
                        });
                    }
                });
                break;
            case "fade":
                $('.app .screen').last().css({"opacity":0, "display":"block"});
                TweenLite.to($('.app .screen').last(), .5, {
                    "opacity":"1",
                    "onComplete":function(){
                        $('.app .screen').first().remove();
                    }
                });
                break;
            default:
                $('.app .screen').last().css({"opacity":0, "display":"block"});
                TweenLite.to($('.app .screen').last(), .5, {
                    "opacity":"1",
                    "onComplete":function(){
                        $('.app .screen').first().remove();
                    }
                });
                break;
        }
        app.page_properties.transition = null;
        delete app.page_properties.transition;
        setTimeout($.proxy(function(){
            this.reset_listeners();
            if(typeof app.page_properties.ambiant !== "undefined"){
                app.play_audio(app.page_properties.ambiant);
            }
        }, this), 1500);
    },
    reset_listeners : function(){
        var _self = this;
        $('[data-navigate]').off('click').on('click', function(){
            if(window.location.hash === "#page/"+$(this).attr('data-navigate')){
                _self.open_close_nav();
            }   
            if(typeof $(this).attr('data-transition') !== "undefined"){
                app.transition = $(this).attr('data-transition');
            }else{
                app.transition = "";
            }
            app._router.navigate("page/"+$(this).attr('data-navigate'), {trigger:true, replace:false});
            _UI.displayTouch($(this));
        });
    },
    uri_to_params : function(uri){
        var page_infos, uri_to_array = uri.split('/');
        page_infos = {};
        for(var i=0; i<uri_to_array.length; i+=2){
            if(typeof uri_to_array[i+1] !== "undefined"){
                page_infos[uri_to_array[i]] = uri_to_array[i+1];
            }
        }
        return page_infos;
    },
    encode_uri_to_barcode : function(text, callBack){
        callBack({uri:encodeURI("https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl="+text+"&choe=UTF-8")});
        //cordova.plugins.barcodeScanner.encode(
        //    cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, 
        //    text, 
        //    function(success) {
        //      callBack(success);
        //    }, function(fail) {
        //      callBack(fail);
        //    }
        //);
    },
    pix_to_uri : function(name, type){
        var ar = name.split('');
        var url = 'http://www.landscape-viewer.com/uploads/'+ar[0]+'/'+ar[1]+'/'+ar[2]+'/'+ar[3]+'/'+name+'_thumb.png';
        switch(type){
            case 'large':
                var url = 'http://www.landscape-viewer.com/uploads/'+ar[0]+'/'+ar[1]+'/'+ar[2]+'/'+ar[3]+'/'+name+'.png';
                break;
            case 'thumb':
                var url = 'http://www.landscape-viewer.com/uploads/'+ar[0]+'/'+ar[1]+'/'+ar[2]+'/'+ar[3]+'/'+name+'_thumb.png';
                break;
            case 'svg':
                var url = 'http://www.landscape-viewer.com/uploads/'+ar[0]+'/'+ar[1]+'/'+ar[2]+'/'+ar[3]+'/'+name+'.svg';
                break;
            default:
                var url = 'http://www.landscape-viewer.com/uploads/'+ar[0]+'/'+ar[1]+'/'+ar[2]+'/'+ar[3]+'/'+name+'_thumb.png';
                break;
        }
        return url;
    },
    set_sounds : function(){
        app._sounds = [];
        app._audios = [];
        http://localhost:12344/sounds/hit.ogg
        if(typeof cordova !== "undefined"){
            window.plugins.NativeAudio.preloadComplex( 'hit', 'sounds/hit.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'small_hit', 'sounds/small_hit.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'card', 'sounds/small_hit.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'slide', 'sounds/slide.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'open_nav', 'sounds/open_nav.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'close_nav', 'sounds/close_nav.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'do', 'sounds/do.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 're', 'sounds/re.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'mi', 'sounds/mi.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'fa', 'sounds/fa.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'sol', 'sounds/sol.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'la', 'sounds/la.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'si', 'sounds/si.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'great', 'sounds/win.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'fail', 'sounds/fail.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'switch_player', 'sounds/switch_player.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'switch_player_end', 'sounds/switch_player_end.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'display_card', 'sounds/display_card.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'card_win', 'sounds/card_win.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'smile', 'sounds/smile.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'sleep', 'sounds/sleep.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'robot', 'sounds/robot.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'hi', 'sounds/hi.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'motion_win', 'sounds/motion_win.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'kiss', 'sounds/kiss.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'card_fail', 'sounds/card_fail.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'close_card', 'sounds/close_card.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'return_card', 'sounds/return_card.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'win', 'sounds/win.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'fail', 'sounds/fail.mp3', 1, 1, 0, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'ambiant_home', 'sounds/ambiant_home.mp3', .4, 2, 1, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'ambiant_game', 'sounds/ambiant_game.mp3', .4, 2, 1, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'ambiant_fab', 'sounds/ambiant_fab.mp3', .4, 2, 1, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            window.plugins.NativeAudio.preloadComplex( 'ambiant_gallery', 'sounds/ambiant_gallery.mp3', .4, 2, 1, function(msg){
                console.log('sound loaded successful ', msg);
            }, function(msg){
                console.log( 'error: ' + msg );
            });
        }else{
            app._sounds['hit'] = new Audio('/sounds/hit.ogg');
        }
    },
    play_audio : function(){
        return false;
        if(app.settings.music === false){
            return false;
        }
        if(typeof app.page_properties.ambiant !== "undefined"){
            app.stop_audio();
            //cdvfile://
            //cdvfile://www
            app.my_media = new Media(
                '/sounds/'+app.page_properties.ambiant+'.mp3',
                // success callback
                function () { 
                    console.log("playAudio():Audio Success"); 
                },
                // error callback
                function (err) { 
                    console.log("playAudio():Audio Error: ", err); 
                },
                function(status){
                    console.log('audio status ', status);
                    switch(status){
                        case 1:
                            //starting
                            break;
                        case 2:
                            //runing
                            break;
                        case 3:
                            //paused
                            break;
                        case 4:
                            //finished
                            //app.resume_audio();
                            break;
                    }
                }
            );

            // Play audio
            app.my_media.play();
            app.my_media.setVolume(0);
            var s = {volume:0};
            TweenLite.to(s, 2, {
                volume:.6, 
                onUpdate:function(){
                    app.my_media.setVolume(s.volume);
                }, onComplete:function(){
                    app.my_media.setVolume(s.volume);
                },
                ease:Power4.easeIn
            });
            //window.plugins.NativeAudio.loop( app.page_properties.ambiant );
        }
    },
    stop_audio : function(){
        return false;
        if(typeof this.my_media !== "undefined"){
            this.my_media.stop();
        }
        return false;
        if(typeof app.page_properties.ambiant !== "undefined"){
            window.plugins.NativeAudio.stop( app.page_properties.ambiant );
        }
        window.plugins.NativeAudio.stop( "ambiant_home" );
        window.plugins.NativeAudio.stop( "ambiant_game" );
        window.plugins.NativeAudio.stop( "ambiant_fab" );
        window.plugins.NativeAudio.stop( "ambiant_gallery" );
    },
    resume_audio : function(){
        return false;
        if(app.settings.music === false){
            return false;
        }
        this.my_media.setVolume(.5);
        this.my_media.play();
        this.my_media.seekTo(app.to_seek*1000);
    },
    pause_audio : function(){
        return false;
        this.my_media.pause();
    },
    play_sound : function(label){
        return false;
        if(app.settings.sound === false){
            return false;
        }
        window.plugins.NativeAudio.play( label );
    },
    stop_sound : function(label){
        window.plugins.NativeAudio.stop( label );
    },
    say:function(text, locale, rate, callBack){
        if(typeof TTS === "undefined"){
            if(typeof callBack !== "undefined"){
                setTimeout(function(){callBack(false);}, 2500);
            }
            return false;
        }
        if(app.settings.voice === false){
            if(typeof callBack !== "undefined"){
                setTimeout(function(){callBack(false);}, 2000);
            }
            return false;
        }
        var _self = this;
        if(typeof text === "undefined"){
            text = 'rien à dire ?';
        }
        if(typeof rate === "undefined" || rate === null){
            rate:1.6
        }
        if(typeof locale === "undefined" || locale === null){
            if(app.locale === null){
                app.set_locale();
                locale = "fr_FR";
            }else{
                locale = app.locale;
            }
        }
        this.can_speech = false;
        TTS.speak({
            text: text,
            locale: locale,
            rate:rate
        }, function () {
            console.log('success');
            _self.can_speech = true;
            if(typeof callBack !== "undefined"){
                callBack(true);
            }
        }, function (reason) {
            console.log("text to speech error : ", reason);
            _self.can_speech = true;
            if(typeof callBack !== "undefined"){
                setTimeout(function(){
                    callBack(false);
                }, 2000);
            }
        });
    },
    set_locale : function(){
        if(typeof navigator.globalization !== "undefined"){
            navigator.globalization.getLocaleName(
                function(e){
                    app.locale=e.value;
                }, 
                function(e){
                    app.locale="fr-FR";
                }
            )
        }
        if(app.locale === "fr-FR"){
            app.language = "fr";
        }else{
            app.language = "en";
        }
    },
    trad: function(){
        switch(app.locale){
            case 'en-US':
                app.language = 'en';
                break;
            case 'fr-FR':
                app.language = 'fr';
                break;
            case 'es-ES':
                app.language = 'es';
                break;
            case 'de-DE':
                app.language = 'de';
                break;
            default:
                app.language = 'en';
                break;
        }
        //app.set_locale();
        $.each($('[data-text]'), function(index, text){
            if(typeof lang[app.language][$(this).attr('data-text')] !== "undefined"){
                $(this).html(lang[app.language][$(this).attr('data-text')]);
            }
        });
    },
    text:function(key){
        return lang[app.language][key];
    },
    text_template:function(key, datas){
        var _temp = _.template(lang[app.language][key]);
        return _temp(datas);
    },
    shuffle : function(array){
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    },
    share:function(options){
        window.plugins.socialsharing.shareWithOptions(
            options, 
            function(e){
                console.log('partage effectué avec succes');
            }, 
            function(e){
                console.log('une erreur est survenue lors du partage');
            }
        );
    }
}
app.initialize();
