function home_page(){
    this.game_settings = {
        character_id:0,
        locale:app.locale,
        characters:[]
    }
}
home_page.prototype.init = function(){
    var _self = this;
    this.create_eyes();
    setTimeout(function(){
        $('#play_button').css({
            'position':'absolute',
            'top':'0',
            'bottom':'0',
            'margin':'auto',
            'width': $('#play_button').width()+'px'
        });
        _self.open_nav();
    }, 3000);
}
home_page.prototype.open_nav = function(){
    var _self = this;
    _self.exportRoot.eyes.gotoAndPlay('down');
    TweenLite.to($('.hero_eyes'), .8, {
        height:"50%",
        ease:Power4.easeIn
    });
    TweenLite.to($('.hero_eyes'), .5, {
        height:"25%",
        ease:Power4.easeOut,
        delay:.4
    });
    TweenLite.to($('.hero_mouth'), .5, {
        height:"25%",
        ease:Power4.easeOut,
        delay:.4,
        onComplete:function(){
            $('#play_button').off('click').on('click', function(e){
                /*_UI.displayTouch($(this));*/
                app.play_sound('hit');
                _self.open_play_screen();
            });
            $('#play_next_button').off('click').on('click', function(e){
                //_UI.displayTouch($(this));
                app.play_sound('hit');
                _self.open_config_screen();
            });
            $('#play_config_button').off('click').on('click', function(e){
                //_UI.displayTouch($(this));
                app.play_sound('hit');
                _self.open_game_screen();
            });
            $('#create_column').off('click').on('click', function(e){
                //_UI.displayTouch($(this));
                app.play_sound('hit');
                _self.open_create_nav();
            });
            $('#gallery_column').off('click').on('click', function(e){
                //_UI.displayTouch($(this));
                app.play_sound('hit');
                _self.open_gallery_nav();
            });
        }
    });
    characters_helper.get_user_characters(
        function(characters){
            if(characters.length === 0){
                $('#gallery_column').css('display', 'none');
                $('#create_column').css('width', '100%');
                return false;
            }
            _self.characters_datas = characters;
            for(var i=0; i<4; i++){
                $('#char_0'+(i+1)).css(
                    {
                        'background-image':"url("+encodeURI(app.pix_to_uri(characters[i].base64, "thumb"))+")"
                    }
                );   
                //'background-color':characters[i].parsed_datas.bkcolor, 
            }
            $('#gallery_button').css('background-color', characters[0].parsed_datas.bkcolor);
            $('#gallery_button .icon img').attr('src', encodeURI(app.pix_to_uri(characters[0].base64, "thumb")));
        },
        false
    );
}
home_page.prototype.open_create_nav = function(){
    var _self = this;
    TweenLite.to($('.hero_eyes'), .5, {height:"50%", ease:Power4.easeOut});
    this.exportRoot.eyes.gotoAndPlay('left');
    TweenLite.to($('.hero_mouth'), .5, {height:"0%", ease:Power4.easeOut, onComplete:function(){
        $('#gallery_column').css({
            top:$('#gallery_column').offset().top,
            left:$('#gallery_column').offset().left,
            position:"absolute"
        });
        $('#create_column').css({
            top:$('#create_column').offset().top,
            left:$('#create_column').offset().left,
            position:"absolute"
        });
        $('.hero_mouth').css({
            top:$('.hero_eyes').offset().top,
            left:$('.hero_eyes').offset().left,
            position:"absolute"
        });
        $('.hero_eyes').css({
            top:$('.hero_eyes').position().top,
            left:$('.hero_eyes').position().left,
            position:"absolute"
        });

        TweenLite.to($('.hero_eyes'), .7, {delay:.1, rotation:'30deg', left:'150%', top:"-10%", ease:Power4.easeIn});
        TweenLite.to($('.hero_mouth'), .7, {delay:.1, rotation:'30deg', left:'150%', ease:Power4.easeIn});
        TweenLite.to($('#gallery_column'), .7, {delay:.1, rotation:'-30deg', left:'250%', top:"90%", ease:Power4.easeIn});
        TweenLite.to($('#create_column'), .7, {delay:.1, rotation:'-30deg', left:'150%', top:"110%", ease:Power4.easeIn});
        
        TweenLite.set($('#girl_button'), {rotation:'30deg', top:'-30%', left:'-160%'});
        TweenLite.set($('#boy_button'), {rotation:'-30deg', top:'90%', left:'-160%'});
    
        TweenLite.to($('#girl_button'), .6, {delay:.6, ease:Power4.easeOut, rotation:0, top:'0%', left:'0%'});
        TweenLite.to($('#boy_button'), .6, {delay:.6, ease:Power4.easeOut, rotation:0, top:'50%', left:'0%', onComplete:function(){
            $('#global_close_button').css('display', "block");
            $('#global_close_button').off('click').on('click', function(e){
                _UI.displayTouch($(this));
                _self.close_create_nav();
            });
        }});
    }});
}
home_page.prototype.close_create_nav = function(){
    var _self = this;
    this.exportRoot.eyes.gotoAndStop(1);
    
    TweenLite.to($('#girl_button'), .7, {ease:Power4.easeIn, rotation:'30deg', top:'-30%', left:'-160%'});
    TweenLite.to($('#boy_button'), .7, {ease:Power4.easeIn, rotation:'-30deg', top:'90%', left:'-160%'});
    
    TweenLite.to($('.hero_eyes'), .7, {delay:.5, rotation:'0deg', left:'0%', top:"0%", ease:Power4.easeOut});
    TweenLite.to($('.hero_mouth'), .7, {delay:.5, rotation:'0deg', left:'0%', ease:Power4.easeOut});
    TweenLite.to($('#gallery_column'), .7, {delay:.5, rotation:'0deg', left:(window.innerWidth/2)+"px", top:(window.innerHeight/2)+"px", ease:Power4.easeOut});
    TweenLite.to($('#create_column'), .7, {delay:.5, rotation:'0deg', left:'0%', top:(window.innerHeight/2)+"px", ease:Power4.easeOut, onComplete:function(){
        $('#gallery_column').css({
            left:'0%',
            top:'0%',
            position:"relative"
        });
        $('#create_column').css({
            left:'0%',
            top:'0%',
            position:"relative"
        });
        $('.hero_mouth').css({
            left:'0%',
            top:'0%',
            position:"relative"
        });
        $('.hero_eyes').css({
            left:'0%',
            top:'0%',
            position:"relative"
        });
        _self.exportRoot.eyes.gotoAndPlay('down');
        $('#global_close_button').css('display', "none");
        TweenLite.to($('.hero_eyes'), .5, {delay:.2, height:'25%', ease:Back.easeOut});
        TweenLite.to($('.hero_mouth'), .5, {delay:.2, height:'25%', ease:Back.easeOut});
    }});
}
home_page.prototype.open_gallery_nav = function(){
    var _self = this;
    TweenLite.to($('.hero_eyes'), .5, {height:"50%", ease:Power4.easeOut});
    _self.exportRoot.eyes.gotoAndPlay('right');
    TweenLite.to($('.hero_mouth'), .5, {height:"0%", ease:Power4.easeOut, onComplete:function(){
        $('#gallery_column').css({
            top:$('#gallery_column').offset().top,
            left:$('#gallery_column').offset().left,
            position:"absolute"
        });
        $('#create_column').css({
            top:$('#create_column').offset().top,
            left:$('#create_column').offset().left,
            position:"absolute"
        });
        $('.hero_mouth').css({
            top:$('.hero_eyes').offset().top,
            left:$('.hero_eyes').offset().left,
            position:"absolute"
        });
        $('.hero_eyes').css({
            top:$('.hero_eyes').position().top,
            left:$('.hero_eyes').position().left,
            position:"absolute"
        });

        TweenLite.to($('.hero_eyes'), .7, {delay:.1, rotation:'30deg', left:'-150%', top:"-10%", ease:Power4.easeIn});
        TweenLite.to($('.hero_mouth'), .7, {delay:.1, rotation:'30deg', left:'-150%', ease:Power4.easeIn});
        TweenLite.to($('#gallery_column'), .7, {delay:.1, rotation:'-30deg', left:'-150%', top:"90%", ease:Power4.easeIn});
        TweenLite.to($('#create_column'), .7, {delay:.1, rotation:'-30deg', left:'-150%', top:"110%", ease:Power4.easeIn});
        
        TweenLite.set($('#gallery_button'), {rotation:'30deg', top:'-30%', left:'260%'});
        TweenLite.set($('#world_gallery_button'), {rotation:'-30deg', top:'90%', left:'260%'});
    
        TweenLite.to($('#gallery_button'), .6, {delay:.6, ease:Power4.easeOut, rotation:0, top:'0%', left:'0%'});
        TweenLite.to($('#world_gallery_button'), .6, {delay:.6, ease:Power4.easeOut, rotation:0, top:'50%', left:'0%', onComplete:function(){
            $('#global_close_button').css('display', "block");
            $('#global_close_button').off('click').on('click', function(e){
                _self.close_gallery_nav();
            });
        }});
    }});
}
home_page.prototype.close_gallery_nav = function(){
    var _self = this;
    this.exportRoot.eyes.gotoAndStop(1);
    
    TweenLite.to($('#gallery_button'), .7, {ease:Power4.easeIn, rotation:'30deg', top:'-30%', left:'260%'});
    TweenLite.to($('#world_gallery_button'), .7, {ease:Power4.easeIn, rotation:'-30deg', top:'90%', left:'260%'});
    
    TweenLite.to($('.hero_eyes'), .7, {delay:.5, rotation:'0deg', left:'0%', top:"0%", ease:Power4.easeOut});
    TweenLite.to($('.hero_mouth'), .7, {delay:.5, rotation:'0deg', left:'0%', ease:Power4.easeOut});
    TweenLite.to($('#gallery_column'), .7, {delay:.5, rotation:'0deg', left:(window.innerWidth/2)+"px", top:(window.innerHeight/2)+"px", ease:Power4.easeOut});
    TweenLite.to($('#create_column'), .7, {delay:.5, rotation:'0deg', left:'0%', top:(window.innerHeight/2)+"px", ease:Power4.easeOut, onComplete:function(){
        $('#gallery_column').css({
            left:'0%',
            top:'0%',
            position:"relative"
        });
        $('#create_column').css({
            left:'0%',
            top:'0%',
            position:"relative"
        });
        $('.hero_mouth').css({
            left:'0%',
            top:'0%',
            position:"relative"
        });
        $('.hero_eyes').css({
            left:'0%',
            top:'0%',
            position:"relative"
        });
        _self.exportRoot.eyes.gotoAndPlay('down');
        $('#global_close_button').css('display', "none");
        TweenLite.to($('.hero_eyes'), .5, {delay:.2, height:'25%', ease:Back.easeOut});
        TweenLite.to($('.hero_mouth'), .5, {delay:.2, height:'25%', ease:Back.easeOut});
    }});
}
home_page.prototype.open_play_screen = function(){
    var _self = this;
    $('#global_close_button').css('display', "block");
    $('#global_close_button').off('click').on('click', function(e){
        _UI.displayTouch($(this));
        _self.close_game_screen();
    });
    _self.exportRoot.eyes.gotoAndStop(1);
    /* tween mouth then slide secondary screen game */
    TweenLite.to($('.hero_eyes'), .6, {
        height:"0%",
        ease:Power4.easeOut
    });
    TweenLite.to($('.hero_mouth'), .6, {
        height:"100%",
        ease:Power4.easeOut,
        onComplete:function(){
            //TweenLite.to($('.hero_eyes'), .6, {
            //    height:"0%",
            //    ease:Quart.easeIn
            //});
            //TweenLite.to($('.hero_mouth'), .6, {
            //    height:"100%",
            //    ease:Quart.easeIn
            //});
            TweenLite.to($('.play_screen'), .7, {
                x:-window.innerWidth,
                ease:Power4.easeOut,
                onComplete:function(){
                    app.say($('#rules_slider').children().eq(0).find('.description').html().replace(/<br>/g, ' '), _self.game_settings.locale, 1.5);
                }
            });
            if(_self.game_settings.characters.length < 16 || _self.game_settings.characters === []){
                characters_helper.get_game_characters(
                    function(characters){
                        _self.game_settings.characters = app.shuffle(characters);
                        _self.set_char_choice();
                    },
                    true
                );   
            }else{
                _self.set_char_choice();
            }
        }
    });
    $('[data-locale]').off('click').on('click', function(e){
        _UI.displayTouch($(this));
        $('[data-locale]').removeClass('selected');
        $(this).addClass('selected');
        app.locale = $(this).attr('data-locale');
        console.log("change app.locale ::: ", app.locale);
        app.trad();
        _self.game_settings.locale = $(this).attr('data-locale');
    });
    
    //setTimeout(function(){
    //    app.say($('#rules_slider').children().eq(0).find('.description').html().replace(/<br>/g, ' '), _self.game_settings.locale, 1.5);
    //},300);
    var num = 0;
    var saytimeout = null;
    this.rules_slider = Draggable.create("#rules_slider", {
        type:"x",
        edgeResistance:.5,
        bounds:"#rules_wrapper",
        throwProps:true,
        snap: {
            x: function(endValue) {
                var end = Math.round(endValue / window.innerWidth) * window.innerWidth;
                num = Math.abs(end)/window.innerWidth;
                $('#rules_dots ul li').removeClass('selected');
                $('#rules_dots ul').children().eq(num).addClass('selected');
                return end;
                if(saytimeout !== null){
                    clearTimeout(saytimeout);
                    saytimeout = null;
                }
            }
        },
        onDragEnd:function(){
            console.log('complete');
            saytimeout = setTimeout(function(){
                app.say($('#rules_slider').children().eq(num).find('.description').html().replace(/<br>/g, ' '), _self.game_settings.locale, 1.5);
                clearTimeout(saytimeout);
                saytimeout = null;
            },500);
        }
    });
}
home_page.prototype.set_char_choice = function(){
    var _self = this;
    $('.character_slider ul').css('width', (window.innerWidth*this.game_settings.characters.length)+'px');
    for(var i=0; i<this.game_settings.characters.length; i++){
        $('.character_slider ul').append('<li data-id="'+this.game_settings.characters[i].id+'"><div class="avatar" style="background-image:url('+encodeURI(app.pix_to_uri(this.game_settings.characters[i].base64, "thumb"))+')"></div><div class="label">'+this.game_settings.characters[i].label+'</label></li>')
    }
    var num = 0;
    var saytimeout = null;
    $('.character_slider ul li').css('width', window.innerWidth+'px');
    this.game_settings.character_id = this.game_settings.characters[0].id;
    this.char_slider = Draggable.create("#character_slider", {
        type:"x",
        edgeResistance:.5,
        bounds:"#character_wrapper",
        throwProps:true,
        snap: {
            x: function(endValue) {
                var end = Math.round(endValue / window.innerWidth) * window.innerWidth;
                num = Math.abs(end)/window.innerWidth;
                _self.game_settings.character_id = $('.character_slider ul').children().eq(num).attr('data-id');
                $('#character_dots ul li').removeClass('selected');
                $('#character_dots ul').children().eq(num).addClass('selected');
                //if(saytimeout !== null){
                //    clearTimeout(saytimeout);
                //    saytimeout = null;
                //}
                return end;
            }
        },
        onDragEnd:function(){
            console.log('complete');
            //saytimeout = setTimeout(function(){
            //    app.say($('.character_slider ul').children().eq(num).find('.label').html().replace(/<br>/g, ' '), _self.game_settings.locale, 1.6);
            //    clearTimeout(saytimeout);
            //    saytimeout = null;
            //},500);
        }
    });
}
home_page.prototype.open_config_screen = function(){
    /* slide to config screen */
    TweenLite.to($('.play_screen'), .7, {
        x:-window.innerWidth*2,
        ease:Power4.easeOut
    });
}
home_page.prototype.open_game_screen = function(){
    /* set config then navigate on game page */
    window.localStorage.setItem('game_settings', JSON.stringify(this.game_settings));
    app.transition = "left";
    app._router.navigate("page/guess_game", {trigger:true, replace:false});
}
home_page.prototype.close_game_screen = function(){
    var _self = this;
    $('#global_close_button').css('display', "none");
    /* slide to config screen */
    TweenLite.to($('.hero_eyes'), .6, {
        height:"50%",
        ease:Power4.easeOut
    });
    _self.exportRoot.eyes.gotoAndStop(1);
    TweenLite.to($('.hero_mouth'), .6, {
        height:"0%",
        ease:Power4.easeOut,
        onComplete:function(){
            TweenLite.to($('.play_screen'), .2, {
                x:0,
                ease:Power4.easeOut
            });
            _self.exportRoot.eyes.gotoAndPlay('down');
            TweenLite.to($('.hero_mouth'), 1, {
                height:"25%",
                ease:Elastic.easeOut,
                delay:.4
            });
            TweenLite.to($('.hero_eyes'), 1, {
                height:"25%",
                ease:Elastic.easeOut,
                delay:.4
            });
        }
    });
    app.play_audio();
}
home_page.prototype.create_eyes = function(){
    var _self = this;
    this.canvas = document.getElementById("hero_eyes_canvas");
    this.exportRoot = new lib.hero_eyes();
	this.stage = new createjs.Stage(this.canvas);
	this.stage.addChild(this.exportRoot);	
	//Registers the "tick" event listener.
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", this.stage);	    
	//Code to support hidpi screens and responsive scaling.
	(function(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
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
			_self.canvas.width = w*pRatio*sRatio;			
			_self.canvas.height = h*pRatio*sRatio;
			_self.canvas.style.width = w*sRatio+'px';			
			_self.canvas.style.height = h*sRatio+'px';
			_self.stage.scaleX = pRatio*sRatio;			
			_self.stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	})(false,'both',false,1);
}
home_page.prototype.play = function(){
    
}
home_page.prototype.pause = function(){
    
}
home_page.prototype.update = function(){
    
}
home_page.prototype.refresh = function(datas){
    
}
home_page.prototype.destroy = function(callBack){
    var _self = this;
    $('#global_close_button').off('click').css('display', "none");
    callBack();
}