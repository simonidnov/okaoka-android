function gallery_page(){
    this._characters = [];
    this.swiper = null;
    this.scroll = null;
    this._datas = null;
    this._page = 1;
    this.limit = 20;
}
gallery_page.prototype.init = function(){
    this.display_list();
}
gallery_page.prototype.display_list = function(){
    var _self = this;
    
    $('article').css('height', window.innerHeight+"px");
    $('#scroll_scroller').css('height', ($('article').length*window.innerHeight)+"px");
    //$('#gallery_wrapper').css({"width":(n*250)+"px", "height":"300px"});
    //$('#gallery_wrapper .scroller').css({"width":((n)*250)+"px", "height":"300px"});
    $('#gallery_container').css({
        'width':(Math.floor(window.innerWidth/300)*300)+"px"
    });
    characters_helper.get_characters_with_params({
        "limit":this.limit,
        "no-datas":true
    }, function(e){
        _self._datas = e;
        _self.create_cards();
    }, true);
    
        
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
gallery_page.prototype.scroll_to = function(id){
    app.page_properties._page_script.scroll.scrollToElement(document.querySelector('#scroll_scroller article:nth-child('+id+')'), 700, null, null, IScroll.utils.ease.quadratic);
}
gallery_page.prototype.create_cards = function(){
    var _self = this;
    var _temp = _.template($('#gallery_card_template').html());
    for (var i = 0; i < this._datas.length; ++i) {
        $('#gallery_container').append(_temp(this._datas[i]));
        TweenLite.set($('#card_'+this._datas[i].id), {y: window.innerHeight});
        TweenLite.to($('#card_'+this._datas[i].id), .8, {y:0, delay:(.2*i), ease:Power4.easeOut,onStart:function(){
            app.play_sound('card');
        }});
    }
    $('.gallery_card .card_pix').off('touchstart').on('touchstart', function(e){
        _self.touch_start = {
            x:e.originalEvent.touches[0].pageX, 
            y:e.originalEvent.touches[0].pageY
        };
        _self.default_position = $(this).parent().position();
        _self.current_target = $(this).parent();
        _self.current_target.addClass('selected');
    });
    $('.gallery_card .card_pix').off('touchmove').on('touchmove', function(e){
        _self.touch_move = {
            x:e.originalEvent.touches[0].pageX, 
            y:e.originalEvent.touches[0].pageY
        };
        var difX = _self.touch_start.x - _self.touch_move.x;
        TweenMax.set(_self.current_target, {
            'left': (_self.touch_move.x - _self.touch_start.x)+"px",
            'rotation' : difX/10
        });
    });
    $('.gallery_card .card_pix').off('touchend').on('touchend', function(e){
        var difX = _self.touch_start.x - _self.touch_move.x;
        if(Math.abs(difX) > 50){
            var target = _self.current_target;
            if(difX > 0){
                TweenMax.to(_self.current_target, .5, {rotation:30, left:-window.innerWidth*2-200, ease:Power4.easeIn, onComplete:function(){
                    target.remove();
                    _self.check_last();
                }});
                app.play_sound('win');
            }else{
                TweenMax.to(_self.current_target, .5, {rotation:-30, left:window.innerWidth+200, ease:Power4.easeIn, onComplete:function(){
                    target.remove();
                    _self.check_last();
                }});
                app.play_sound('fail');
            }
        }else{
            TweenMax.to(_self.current_target, .5, {rotation:0, left:_self.default_position.left, top: _self.default_position.top, ease:Elastic.easeOut});
            app.play_sound('card');
        }
    });
    $('[data-cardaction]').off('touchend').on('touchend', function(e){
        var parent_card = $(this).parent().parent();
        switch($(this).attr('data-cardaction')){
            case 'like':
                app.play_sound('win');
                ajax_request.post(
                    "/nse/like",
                    {
                        character_id:$(this).attr('data-id')
                    },
                    function(success){
                    },
                    function(fail){
                    }
                ); 
                TweenMax.to(parent_card, .5, {
                    left:-window.innerWidth*2-200,
                    rotation:40,
                    ease:Power4.easeIn,
                    onComplete:function(){
                        parent_card.remove();
                        _self.check_last();
                    }
                });
                console.log('like');
                break;
            case 'favorite':
                app.play_sound('win');
                ajax_request.post(
                    "/nse/favorite",
                    {
                        character_id:$(this).attr('data-id')
                    },
                    function(success){
                    },
                    function(fail){
                    }
                ); 
                TweenMax.to(parent_card, .5, {
                    top:-window.innerHeight,
                    rotation:-40,
                    ease:Power4.easeIn,
                    onComplete:function(){
                        parent_card.remove();
                        _self.check_last();
                    }
                });
                console.log('favorite');
                break;
            case 'next':
                app.play_sound('fail');
                TweenMax.to(parent_card, .5, {
                    left:window.innerWidth+200,
                    rotation:-40,
                    ease:Power4.easeIn,
                    onComplete:function(){
                        parent_card.remove();
                        _self.check_last();
                    }
                });
                console.log('next');
                break;
        }
    });
}
gallery_page.prototype.check_last = function(){
    var _self = this;
    if($('.gallery_card').length === 0){
        this._page += 1;
        characters_helper.get_characters_with_params({
            "start":this.limit*this._page,
            "limit":this.limit,
            "no-datas":true
        }, function(e){
            _self._datas = e;
            _self.create_cards();
        }, true);
            
    }
}
gallery_page.prototype.create_grid = function(){
    var _temp = _.template($('#gallery_template').html());
    for (var i = 0; i < this._datas.length; ++i) {
        $('#gallery_container').append(_temp(this._datas[i]));
    }
    this.set_listeners();
    var _self = this;
    this.scroll = new IScroll('#gallery_scroll_wrapper', {
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
        if(_self.scroll.y === _self.scroll.maxScrollY){
            _self.load_next_page();
        }
    });
}
gallery_page.prototype.set_listeners = function(){
    var _self = this;
    $('.gallery_list').off('click').on('click', function(){
        var id=$(this).attr('data-id');
        var pop = new PopUp();
        pop.open_popup(
            {
                "illus":{
                    color:'white',
                    picture:$(this).attr('data-pix')
                },
                "title":$(this).find('.label').html(),
                "message":"Que souhaitez-vous faire ?",
                "buttons":[
                    {"label":"Modifier"},
                    {"label":"Partager"},
                    {"label":"Rien"}
                ]
            }, 
            function(e, datas){
                if(parseInt(e) === 0){
                    _self.load_character(id);
                }else if(parseInt(e) === 1){
                    _self.download_character(id);
                }
                delete pop;
            }
        ); 
    });
}
gallery_page.prototype.load_character = function(id){
    setTimeout(function(){
        app._router.navigate(
            'page/character/id/'+id, {
                trigger: true,
                replace: false
            }
        );
    },30);
}
gallery_page.prototype.download_character = function(id){
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
gallery_page.prototype.add_grid = function(){
    var _temp = _.template($('#gallery_template').html());
    for (var i = 0; i < this._datas.length; ++i) {
        $('#gallery_container').append(_temp(this._datas[i]));
    }
    this.set_listeners();
    var _self = this;
    this.scroll.refresh();
    this.scroll.y  = this.scroll.y - 20;
}
gallery_page.prototype.load_next_page = function(){
    var _self = this;
    ajax_request.get(
        "/nse/character",
        {
            "start":this.limit*this._page,
            "limit":this.limit
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
gallery_page.prototype.set_canvas = function(i, _datas){
    this._characters[i] = new character({
        "touch_enabled":false,
        "canvas":"canvas_"+i,
        "width":250,
        "height":300,
        "datas":_datas
    });
    this._characters[i].init();
}
gallery_page.prototype.play = function(){
    
}
gallery_page.prototype.pause = function(){
    
}
gallery_page.prototype.update = function(){
    
}
gallery_page.prototype.refresh = function(datas){
    
}
gallery_page.prototype.destroy = function(callBack){
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