function save_page(){
    this._preview = null,
    this.swiper = null,
    this.scroll = null,
    this.base64 = null,
    this.svg = null,
    this._name = "",
    this._age = "",
    this._datas = JSON.parse(window.localStorage.getItem('last_character'));
}
save_page.prototype.init = function(){
    var self = this;
    /* MAST PIX SAVED */
    //window.localStorage.getItem('last_character_pix');
    this.base64 = window.localStorage.getItem('last_character_pix');
    $('.img_preview').css('background-image', 'url('+this.base64+')');
    /* MAST SVG SAVED */
    //window.localStorage.getItem('last_character_svg');
    this.svg = window.localStorage.getItem('last_character_svg');
    /*
    this._preview = new character({
        "touch_enabled":false,
        "canvas":"save_canvas",
        "width":250,
        "height":350,
        "datas":this._datas
    });
    this._preview.init();
    */
    //setTimeout($.proxy(function(){
        //console.log('init save button');
    $('.form').css('display', 'block');
    $('.save .bubble').css('width', ($('.save .bubble span').width()+5)+"px");
    $('.save .bubble span').html(app.text("GIVE_NAME"));
    TweenMax.set($('.save .bubble'), {scaleX:0, scaleY:0});
    TweenMax.to($('.save .bubble'), .5, {scaleX:1, scaleY:1, delay:2, ease:Back.easeOut, onStart:function(){
        app.play_sound('hit');
    }, onComplete:function(){
        app.say(app.text("GIVE_NAME"), app.locale, 1.6, function(){});
    }});
    
    $('#save_profil_button').off('click').on('click', function(e){
        self.check_datas("all", function(e){
            console.log('e check datas ', e);
            if(e === "success"){
                self.save();
            }
        });
    });
    this.input = new fake_input("name", $('.form'), 'center', function(e){
        self._name = $('.form span').html();
        if(e === "validate"){
            self._name = $('.form span').html();
            self.input.destroy(function(){console.log('completely destroyed');});
            $('.save .bubble span').html(app.text("GIVE_AGE"));
            //.removeClass('purple').addClass('green')
            $('.save .bubble').css('width', ($('.save .bubble span').width()+5)+"px");
            $('.save .bubble .arrow').addClass('agreen');
            TweenMax.set($('.save .bubble'), {scaleX:0, scaleY:0});
            TweenMax.to($('.save .bubble'), .5, {scaleX:1, scaleY:1, delay:.5, ease:Back.easeOut, onStart:function(){
                app.play_sound('hit');
            }, onComplete:function(){
                app.say(app.text("GIVE_AGE"), app.locale, 1.6, function(){});
            }});
            
            self.input = new fake_input("age", $('.form'), 'center', function(e){
                console.log(e);
                self._age = $('.form span').html();
                console.log("self._age :: ", self._age);
                if(e === "validate"){
                    //$('.save .bubble span').html('Super !');
                    //$('.save .bubble').removeClass('green').addClass('lighblue').addClass('topping');
                    //$('.save .bubble .arrow').addClass('asky');
                    //$('.save .bubble').removeClass('purple').addClass('green').css('width', ($('.save .bubble span').width()+5)+"px");
                    //TweenMax.set($('.save .bubble'), {scaleX:0, scaleY:0});
                    //TweenMax.to($('.save .bubble'), .5, {scaleX:1, scaleY:1, delay:.5, ease:Back.easeOut, onStart:function(){
                    //    app.play_sound('hit');
                    //}});
                    
                    self._age = $('.form span').html();
                    self.input.destroy(function(){
                        self.save();
                    });
                }
            }, "number", 2);
            setTimeout(function(){
                TweenMax.to($('.img_preview'), .5, {css:{'height': (window.innerHeight - ($('.form').height()+$('.easy_keyboard').height()+5))+'px'}});
            }, 1000);
        }
    }, "text", 10);
    setTimeout($.proxy(function(){
        console.log('set button event');
        //$('.form');
        $('#save_button').off('click').on('click', $.proxy(function(){
            this.save();
        }, this));
            setTimeout(function(){
                TweenMax.to($('.img_preview'), .5, {css:{'height': (window.innerHeight - ($('.form').height()+$('.easy_keyboard').height()+5))+'px'}});
            }, 300);
    }, this), 200);
}
save_page.prototype.check_datas = function(type, callBack){
    if(this._name !== "" && this._age !== ""){
        callBack("success");
    }else{
        var pop = new PopUp();
            pop.open_popup(
                {
                    "title":app.text('NEED_NAME_AND_AGE_TITLE'),
                    "message":app.text('NEED_NAME_AND_AGE_MESSAGE'),
                    "buttons":[
                        {"label":"ok"}
                    ]
                }, 
                function(e, datas){delete pop;}
            );
        app.say(app.text('NEED_NAME_AND_AGE_MESSAGE'), app.locale, 1.6, function(){});
        callBack("uncomplete");
    }
}
save_page.prototype.save = function(){
    TweenMax.to($('.img_preview'), .5, {css:{'height': window.innerHeight+'px'}});
    this._datas.name = this._name;
    this._datas.age = this._age;
    
    ajax_request.post(
        "/nse/character",
        {
            "label":this._name,
            "age":this._age,
            "datas":JSON.stringify(this._datas),
            "svg":this.svg,
            "base64":this.base64,
            "type":this._datas.type
        },
        function(success){
            console.log(success);
            window.localStorage.setItem('last_character', '');
            app._router.navigate("page/user_gallery/id/"+success.id, {trigger:true, replace:false});
        },
        function(fail){
            alert('erreur lors de l\'enregistrement');
            console.log(fail);
        }
    );
}
save_page.prototype.play = function(){
    
}
save_page.prototype.pause = function(){
    
}
save_page.prototype.update = function(){
    
}
save_page.prototype.refresh = function(datas){
    
}
save_page.prototype.destroy = function(callBack){
    $('#save_button').off('click');
    callBack();
}