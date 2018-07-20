function guess_game_page(){
    this.infos = null;
    this._user_datas = null;
    this._openent_datas = null;
    this._user_questions = _.map(lang[app.language].questions, _.clone);
    this._openent_questions = _.map(lang[app.language].questions_openent, _.clone);
    this.question_scroll = null;
}
guess_game_page.prototype.init = function(){
    $('.game_screen, .transition_screen').css('width', window.innerWidth);
    $('.guess_game .guess_game_container .game_screen .cards_items').css('height', (window.innerHeight-(65+80))+"px");
    $('#user_game_screen .button_propose, #user_game_screen .button_question').css('display', 'block');
    $('#user_game_screen .button_valid').css('display', 'none');
    
    this.infos = JSON.parse(window.localStorage.getItem("game_settings"));
    this._user_datas = _.where(this.infos.characters, {'id':this.infos.character_id})[0];
    this._openent_datas = this.infos.characters[Math.floor(Math.random()*16)];
    this.infos.openent_id = this._openent_datas.id;
    window.localStorage.setItem("game_settings", JSON.stringify(this.infos));
    this.display_cards();
}
guess_game_page.prototype.display_cards = function(){
    /*var _temp = _.template($('#user_gallery_template').html());
    for (var i = 0; i < this._datas.length; ++i) {
        this._datas[i].datas = JSON.parse(this._datas[i].datas);
        $('#user_gallery_container').append(_temp(this._datas[i]));
    }*/
    var _self = this;
    
    this.infos.characters = app.shuffle(this.infos.characters);
    var card_temp = _.template($('#player_card_template').html());
    for(var i=0; i<this.infos.characters.length; i++){
        $('#user_game_screen .cards_items').append(card_temp(this.infos.characters[i]));
        $('#opponent_game_screen .cards_items').append(card_temp(this.infos.characters[i]));
    }
    
    $('#user_game_screen .game_menu').css({'background-color':this._user_datas.parsed_datas.bkcolor});
    $('#user_game_screen .avatar').css({'background-image':'url('+encodeURI(app.pix_to_uri(this._user_datas.base64, "thumb"))+')', 'background-color':this._user_datas.parsed_datas.bkcolor});
    
    /* display user_questions */
    var quest_template = _.template($('#question_template').html());
    for(var q=0; q<this._user_questions.length; q++){
        this._user_questions[q].question_id = q;
        $('.guess_questions .question_scroller').append(quest_template(this._user_questions[q]));
    }
    
    this.question_scroll = new IScroll('#user_question_wrapper', {
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
    
    $('[data-question]').off('click').on('click', function(){
        console.log($(this).attr('data-question'));
        app.play_sound('small_hit');
        _self.play_question($(this).attr('data-question'), "user");
    });
    $('#user_game_screen .button_question').off('click').on('click', function(e){
        app.play_sound('hit');
        _self.show_questions();
    });
    
    $('#user_game_screen .button_propose').off('click').on('click', function(e){
        app.play_sound('hit');
        _self.propose("user");
    });
    
    $('#user_game_screen .button_valid').off('click').on('click', function(e){
        app.play_sound('hit');
        _self.set_player("openent");
    });
    
    _self.set_player("user");
}
guess_game_page.prototype.set_player = function(player){
    var _self = this;
    app.play_sound('switch_player');
    if(player === "user"){
        $('#user_game_screen .button_propose, #user_game_screen .button_question').css('display', 'block');
        $('#user_game_screen .button_valid').css('display', 'none');
        
        $('.transition_screen .center_avatar').css('background-image', 'url('+encodeURI(app.pix_to_uri(this._user_datas.base64, "thumb"))+')');
        $('.transition_screen .text_infos').html(app.text('YOUR_TURN'));
        
        TweenLite.set($('.transition_screen .text_infos'), {y:window.innerHeight+100});
        TweenLite.to($('.transition_screen .text_infos'), 1.2, {y:(window.innerHeight/2+100), ease:Power4.easeOut});
        
        TweenLite.set($('.transition_screen .center_avatar'), {x:window.innerWidth});
        TweenLite.to($('.transition_screen .center_avatar'), 1.2, {x:0, ease:Power4.easeOut, onComplete:function(){
            app.say(app.text('YOUR_TURN'), app.locale, 1.6, function(){});
        }});
        
        TweenLite.to($('.guess_game_container'), .5, {
            x:-window.innerWidth, 
            ease:Power4.easeIn, 
            onComplete:function(){
                $('.transition_screen').off('click').on('click', function(){
                    app.play_sound('switch_player_end');
                    TweenLite.to($('.transition_screen .text_infos'), .6, {y:window.innerHeight+100, delay:.5, ease:Power4.easeIn});
                    TweenLite.to($('.transition_screen .center_avatar'), 1.2, {x:-window.innerWidth, ease:Power4.easeIn});
                    TweenLite.to($('.guess_game_container'), .5, {
                        x:0, 
                        delay:1,
                        ease:Power4.easeInOut,
                        onComplete:function(){
                            if($('#user_game_screen .eliminated').length >= 14){
                                TweenMax.to($('#user_game_screen .button_propose'), .5, {scaleX:1.2, scaleY:1.2, yoyo:true, repeat:11});
                            }else{
                                TweenMax.to($('#user_game_screen .button_question'), .5, {scaleX:1.2, scaleY:1.2, yoyo:true, repeat:11});
                            }
                        }
                    }); 
                });
            }
        });
    }else{
        $('.transition_screen .center_avatar').css('background-image', 'url(images/assets/nav/nav_buttons_rules_slide_02.svg)');
        $('.transition_screen .text_infos').html(app.text('OPENENT_TURN'));
        
        TweenLite.set($('.transition_screen .text_infos'), {y:window.innerHeight+100});
        TweenLite.to($('.transition_screen .text_infos'), 1.2, {y:(window.innerHeight/2+100), ease:Power4.easeOut});
        
        TweenLite.set($('.transition_screen .center_avatar'), {x:-window.innerWidth});
        TweenLite.to($('.transition_screen .center_avatar'), 1.2, {x:0, ease:Power4.easeOut, onComplete:function(){
            app.say(app.text('OPENENT_TURN'), app.locale, 1.6, function(){});
        }});
        
        TweenLite.to($('.guess_game_container'), .5, {
            x:-window.innerWidth, 
            ease:Power4.easeOut, 
            onComplete:function(){
                $('.transition_screen').off('click').on('click', function(){
                    app.play_sound('switch_player_end');
                    TweenLite.to($('.transition_screen .text_infos'), .6, {y:window.innerHeight+100, delay:.5, ease:Power4.easeIn});
                    TweenLite.to($('.transition_screen .center_avatar'), 1.2, {x:window.innerWidth, ease:Power4.easeIn});
                    TweenLite.to($('.guess_game_container'), .5, {
                        x:-(window.innerWidth*2), 
                        ease:Power4.easeInOut, 
                        delay:1,
                        onComplete:function(){
                            setTimeout(function(){
                                _self.openent_play();
                            },500);
                        }
                    });
                });
            }
        });
    }
}
guess_game_page.prototype.openent_play = function(){
    var _self = this;
    if($('#user_game_screen .eliminated').length >= 14 || $('#opponent_game_screen .eliminated').length >= 14){
        //TweenMax.to($('#user_game_screen .button_propose'), .5, {scaleX:1.2, scaleY:1.2, yoyo:true, repeat:11});
        _self.propose('openent');
        return false;
    }
    //var get_questions = _.map(_.where(_self._openent_questions, {"played":false}), _.clone);
    var question_id = Math.floor(Math.random()*_self._openent_questions.length);
    this.play_question(question_id, "openent");
}
guess_game_page.prototype.propose_card_open = function(id, player, callBack){
    var _self = this;
    var data_selected = _.where(_self.infos.characters, {id:id})[0];
    var label = app.text_template("PROPOSE_USER", {name:data_selected.label});
    var is_good = false;
    if(player === "user"){
        if(id === _self._openent_datas.id){
            is_good = true;
        }
        $('#play_card .nav').css('display', 'none');
        $('#play_card #show_response').css('display', 'block');
    }else{
        if(id === _self._user_datas.id){
            is_good = true;
        }
        $('#play_card .nav').css('display', 'none');
        $('#play_card #select_response').css('display', 'block');
    }
    $('#play_card .question_icon').css('display', 'block');
    $('#play_card .true_icon').css('display', 'none');
    $('#play_card .false_icon').css('display', 'none');
    
    $('#play_card .front .icon').css('background-image','url('+encodeURI(app.pix_to_uri(data_selected.base64, "thumb"))+')');
    $('#play_card .front .label').html(label);
    $('#play_card_container').css('display', 'block');
    
    TweenLite.set($('#play_card'), {y:window.innerHeight+200});
    TweenLite.set($('#play_card .front'), {rotationY:-180});
    TweenLite.set($('#play_card .back'), {rotationY:0,});
    
    TweenLite.to($('#play_card_container'), .5, {opacity:1, onComplete:function(){
        TweenLite.to($('#play_card'), .5, {
            y:window.innerHeight/2-$('#play_card').height()/2
        });
    }});
    TweenLite.to($('#play_card .front'), .8, {
        rotationY:0,
        ease:Back.easeOut,
        delay:1.2
    });
    app.play_sound('display_card');
    TweenLite.to($('#play_card .back'), .8, {
        rotationY:180,
        ease:Back.easeOut,
        delay:1.2,
        onComplete:function(){
            app.say(label, app.locale, 1.6, function(){});
            if(player === "user"){
                $('#play_card').off('click').on('click', function(e){
                    Continue(); 
                });
            }else{
                $('#play_card').off('click');
                $('#its_true').off('click').on('click', function(e){
                    if(is_good){
                        Continue(); 
                    }else{
                        app.play_sound('fail');
                        TweenMax.to($('#play_card'), .1, {
                            left:$('#play_card_container').position().left+20,
                            rotation:4,
                            yoyo: true,
                            repeat: 5
                        });
                        app.say(app.text('MISTAKE'), app.locale, 1.6, function(){});
                    }
                });
                $('#its_false').off('click').on('click', function(e){
                    if(!is_good){
                        Continue(); 
                    }else{
                        app.play_sound('fail');
                        TweenMax.to($('#play_card'), .1, {
                            left:$('#play_card_container').position().left+20,
                            rotation:4,
                            yoyo: true,
                            repeat: 5
                        });
                        app.say(app.text('MISTAKE'), app.locale, 1.6, function(){});
                    }
                });
            }
        }
    });
    function Continue(){
        TweenLite.to($('#play_card .front'), 1, {
            rotationY:360,
            delay:.5,
            ease:Back.easeIn
        });
        TweenMax.to($('#play_card .back'), 1, {
            rotationY:-180,
            delay:.5,
            ease:Back.easeIn,
            onStart:function(){
                $('#play_card .nav').css('display', 'none');  
            },
            onComplete:function(){
                TweenMax.to($('#play_card_container'), .2, {
                    scaleX:1.2,
                    scaleY:1.2,
                    yoyo: true,
                    repeat: 1
                });
                var response_text = "";
                if(is_good){
                    $('#play_card .question_icon').css('display', 'none');
                    $('#play_card .true_icon').css('display', 'block');
                    $('#play_card .false_icon').css('display', 'none');
                    app.play_sound('card_win');
                    if(player === "user"){
                        $('#play_card .front .label').html(app.text_template("PROPOSE_TRUE", {name:data_selected.label}));
                        app.say(app.text_template("PROPOSE_TRUE", {name:data_selected.label}), app.locale, 1.6, function(){
                            TweenLite.to($('#play_card'), .5, {y:window.innerHeight, onComplete:function(){
                                TweenLite.to($('#play_card_container'), .5, {opacity:0, onComplete:function(){
                                    $('#play_card_container').css('display', 'none');
                                    callBack(is_good);
                                }});
                            }});
                        });
                    }else{
                        $('#play_card .front .label').html(app.text_template("PROPOSE_OPENENT_TRUE", {name:data_selected.label}));
                        app.say(app.text_template("PROPOSE_OPENENT_TRUE", {name:data_selected.label}), app.locale, 1.6, function(){
                            TweenLite.to($('#play_card'), .5, {y:window.innerHeight, onComplete:function(){
                                TweenLite.to($('#play_card_container'), .5, {opacity:0, onComplete:function(){
                                    $('#play_card_container').css('display', 'none');
                                    callBack(is_good);
                                }});
                            }});
                        });
                    }
                }else{
                    app.play_sound('card_fail');
                    $('#play_card .question_icon').css('display', 'none');
                    $('#play_card .true_icon').css('display', 'none');
                    $('#play_card .false_icon').css('display', 'block');
                    $('#play_card .front .label').html(app.text_template("PROPOSE_FALSE", {name:data_selected.label}));
                        app.say(app.text_template("PROPOSE_FALSE", {name:data_selected.label}), app.locale, 1.6, function(){
                        TweenLite.to($('#play_card'), .5, {y:window.innerHeight, onComplete:function(){
                            TweenLite.to($('#play_card_container'), .5, {opacity:0, onComplete:function(){
                                $('#play_card_container').css('display', 'none');
                                callBack(is_good);
                            }});
                        }});      
                    });
                }
            }
        });
    }
}
guess_game_page.prototype.propose = function(player){
    var _self = this;
    if(player === "openent"){
        var propose_id = $( "#opponent_game_screen .card" ).not( document.getElementsByClassName( "eliminated" ) ).eq(0).attr('data-id');
        _self.propose_card_open(propose_id, player, function(is_good){
            if(is_good === true){
                /* redirect lose screen */
                app._router.navigate("page/guess_game_end/status/lose", {trigger:true, replace:false});
                //alert('Oups, ton adversaire a gagné !');
            }else{
                $( '#opponent_game_screen [data-id="'+propose_id+'"]').addClass('eliminated');
                _self.set_player('user');
            } 
        });
        return false;
    }
    app.say(app.text('PROPOSE_CANDIDATE'), app.locale, 1.6, function(){});
    TweenMax.to($('li.card .front_card'), .3, {opacity:.4, yoyo:true, repeat:5});
    //$('.game_menu').css('visibility', "hidden");
    $('.title_infos').css('visibility', "hidden");
    $('#user_game_screen .button_propose, #user_game_screen .button_question').css('display', 'none');
    $('#user_game_screen .button_valid').css('display', 'none');
    $('.card').off('click').on('click', function(){
        if(!$(this).hasClass('eliminated')){
            //_UI.displayTouch($(this));
            app.play_sound('return_card');
            $('.game_menu').css('visibility', "visible");
            $('.title_infos').css('visibility', "visible");
            var propose_id = $(this).attr('data-id');
            var card = $(this);
            _self.propose_card_open(propose_id, player, function(is_good){
                if(is_good === true){
                    /* redirect win screen */
                    app._router.navigate("page/guess_game_end/status/win", {trigger:true, replace:false});
                    //alert('Oups, ton adversaire a gagné !');
                }else{
                    $('#user_game_screen .button_propose, #user_game_screen .button_question').css('display', 'none');
                    $('#user_game_screen .button_valid').css('display', 'block');
                    $('.card').off('click');
                    if(card.find('cross_card').length === 0){
                        card.addClass('to_eliminate');
                        card.find('.front_card').append('<div class="cross_card"></div>');
                    }
                    setTimeout(function(){
                        card.addClass('eliminated');
                        _self.set_player("openent");
                    }, 2000);
                    //alert('Non, ce n\'est pas ce personnage');
                    TweenMax.to($('#user_game_screen .button_valid'), .5, {scaleX:1.2, scaleY:1.2, yoyo:true, repeat:11});
                } 
            });
        }
    });
    $('#global_close_button').css('display', "block");
    $('#global_close_button').off('click').on('click', function(e){
        _UI.displayTouch($(this));
        $('#global_close_button').css('display', "none");
        $('.game_menu').css('visibility', "visible");
        $('.title_infos').css('visibility', "visible");
        $('#user_game_screen .button_propose, #user_game_screen .button_question').css('display', 'block');
        $('#user_game_screen .button_valid').css('display', 'none');
    });
}
guess_game_page.prototype.play_question = function(question_id, player){
    var _self = this;
    var label, icon, check, value, is_good;
    _self.hide_questions();
    
    $('#user_game_screen .button_propose, #user_game_screen .button_question').css('display', 'none');
    $('#user_game_screen .button_valid').css('display', 'block');
    
    if(player === "user"){
        _self._user_questions[question_id].played = true;
        icon = _self._user_questions[question_id].icon;
        label = _self._user_questions[question_id].label;
        check = _self._user_questions[question_id].check;
        value = _self._user_questions[question_id].value;
        is_good = false;
        this.get_condition(_self._openent_datas.id, check, value, function(e){
            is_good = e.status;
        });
        for(var i=0; i<$('#user_game_screen .card').length; i++){
            var id=$('#user_game_screen .card').eq(i).attr('data-id');
            if(!$('#user_game_screen .card').eq(i).hasClass('eliminated')){
                //si la carte n'est pas déjà éliminée, alors on check les conditions et la valeur
                //si la carte soit être éliminée, on y ajoute une cross et un event pour la retourner
                this.get_condition(id, check, value, function(e){
                    if(e.status===true && !is_good){
                        $('#user_game_screen [data-id="'+e.id+'"]').addClass('to_eliminate');
                        $('#user_game_screen [data-id="'+e.id+'"]').off('touchstart').on('touchstart', function(e){
                            app.play_sound('return_card');
                            $(this).addClass('eliminated'); 
                        });
                    }else if(e.status===false && is_good){
                        $('#user_game_screen [data-id="'+e.id+'"]').addClass('to_eliminate');
                        $('#user_game_screen [data-id="'+e.id+'"]').off('touchstart').on('touchstart', function(e){
                            app.play_sound('return_card');
                            $(this).addClass('eliminated'); 
                        });
                    }
                });
            }
        }
        $('#play_card .front .icon').css('background-image','url('+icon+')');
        $('#play_card .nav').css('display', 'none');
        $('#play_card #show_response').css('display', 'block');
    }else{
        _self._openent_questions[question_id].played = true;
        icon = _self._openent_questions[question_id].icon;
        label = _self._openent_questions[question_id].label;
        check = _self._openent_questions[question_id].check;
        value = _self._openent_questions[question_id].value;
        is_good = false;
        this.get_condition(this._user_datas.id, check, value, function(e){
            is_good = e.status;
        });
        for(var i=0; i<$('#opponent_game_screen .card').length; i++){
            var id=$('#user_game_screen .card').eq(i).attr('data-id');
            if(!$('#opponent_game_screen .card').eq(i).hasClass('eliminated')){
                //si la carte n'est pas déjà éliminée, alors on check les conditions et la valeur
                //si la carte soit être éliminée, on y ajoute une cross et un event pour la retourner
                this.get_condition(id, check, value, function(e){
                    if(e.status===true && !is_good){
                        $('#opponent_game_screen [data-id="'+e.id+'"]').addClass('to_eliminate');
                        $('#opponent_game_screen [data-id="'+e.id+'"]').off('click').on('click', function(e){
                            $(this).addClass('eliminated'); 
                        });
                    }else if(e.status===false && is_good){
                        $('#opponent_game_screen [data-id="'+e.id+'"]').addClass('to_eliminate');
                        $('#opponent_game_screen [data-id="'+e.id+'"]').off('touchstart').on('touchstart', function(e){
                            $(this).addClass('eliminated'); 
                        });
                    }
                });
            }
        }
        $('#play_card .front .icon').css('background-image','url('+encodeURI(app.pix_to_uri(_self._user_datas.base64, "thumb"))+')');
        $('#play_card .nav').css('display', 'none');
        $('#play_card #select_response').css('display', 'block');
    }
    
    $('#play_card .question_icon').css('display', 'block');
    $('#play_card .true_icon').css('display', 'none');
    $('#play_card .false_icon').css('display', 'none');
    
    $('#play_card .front .label').html(label);
    $('#play_card_container').css('display', 'block');
    
    
    
    TweenLite.set($('#play_card'), {y:window.innerHeight+200});
    TweenLite.set($('#play_card .front'), {rotationY:-180});
    TweenLite.set($('#play_card .back'), {rotationY:0,});
    
    app.play_sound('display_card');
    
    TweenLite.to($('#play_card_container'), .5, {opacity:1, onComplete:function(){
        TweenLite.to($('#play_card'), .5, {
            y:window.innerHeight/2-$('#play_card').height()/2
        });
    }});
    TweenLite.to($('#play_card .front'), .8, {
        rotationY:0,
        ease:Back.easeOut,
        delay:1.2
    });
    TweenLite.to($('#play_card .back'), .8, {
        rotationY:180,
        ease:Back.easeOut,
        delay:1.2,
        onComplete:function(){
            console.log('have to say ', label);
            app.say(label, app.locale, 1.6, function(){
                //TweenLite.to($('#play_card .front'), 1, {
                //    rotationY:360,
                //    delay:.5,
                //    ease:Back.easeIn
                //});
                //TweenMax.to($('#play_card .back'), 1, {
                //    rotationY:-180,
                //    delay:.5,
                //    ease:Back.easeIn,
                //    onComplete:function(){
                //        TweenMax.to($('#play_card_container'), .2, {
                //            scaleX:1.2,
                //            scaleY:1.2,
                //            yoyo: true,
                //            repeat: 1
                //        });
                //        if(is_good){
                //            $('#play_card .question_icon').css('display', 'none');
                //            $('#play_card .true_icon').css('display', 'block');
                //            $('#play_card .false_icon').css('display', 'none');
                //            $('#play_card .front .label').html(_self._user_questions[question_id].ok);
                //            app.play_sound('card_win');
                //            app.say(_self._user_questions[question_id].ok, app.locale, 1.6, function(){
                //                //_self.close_play_card(player);
                //            });
                //        }else{
                //            $('#play_card .question_icon').css('display', 'none');
                //            $('#play_card .true_icon').css('display', 'none');
                //            $('#play_card .false_icon').css('display', 'block');
                //            $('#play_card .front .label').html(_self._user_questions[question_id].nok);
                //            app.play_sound('card_fail');
                //            app.say(_self._user_questions[question_id].nok, app.locale, 1.6, function(){
                //                //_self.close_play_card(player);
                //            });
                //        }
                //        $('#play_card').off('click').on('click', function(e){
                //            TweenMax.killAll();
                //            _self.close_play_card(player);
                //        });
                //    }
                //});
            });
            if(player === "user"){
                $('#play_card').off('click').on('click', function(e){
                    app.play_sound('small_hit');
                    Continue();
                    //_self.close_play_card(player);
                });
            }else{
                $('#play_card').off('click');
                $('#its_true').off('click').on('click', function(){
                    app.play_sound('small_hit');
                    if(is_good){
                        Continue();
                    }else{
                        app.play_sound('fail');
                        TweenMax.to($('#play_card'), .1, {
                            left:$('#play_card_container').position().left+20,
                            rotation:4,
                            yoyo: true,
                            repeat: 5
                        });
                        app.say(app.text('MISTAKE'), app.locale, 1.6, function(){});
                    }
                });
                $('#its_false').off('click').on('click', function(){
                    app.play_sound('small_hit');
                    if(!is_good){
                        Continue();
                    }else{
                        app.play_sound('fail');
                        TweenMax.to($('#play_card'), .1, {
                            left:$('#play_card_container').position().left+20,
                            rotation:4,
                            yoyo: true,
                            repeat: 5
                        });
                        app.say(app.text('MISTAKE'), app.locale, 1.6, function(){});
                    }
                });
            }
            function Continue(){
                TweenMax.killAll();
                TweenLite.to($('#play_card .front'), 1, {
                    rotationY:360,
                    delay:.5,
                    ease:Back.easeIn
                });
                TweenLite.to($('#play_card .back'), 1, {
                    rotationY:-180,
                    delay:.5,
                    ease:Back.easeIn,
                    onComplete:function(){
                        TweenMax.to($('#play_card_container'), .2, {
                            scaleX:1.2,
                            scaleY:1.2,
                            yoyo: true,
                            repeat: 1
                        });
                        $('#play_card .nav').css('display', 'none');
                        $('#play_card #continue_response').css('display', 'block');
                        if(is_good){
                            $('#play_card .question_icon').css('display', 'none');
                            $('#play_card .true_icon').css('display', 'block');
                            $('#play_card .false_icon').css('display', 'none');
                            $('#play_card .front .label').html(_self._user_questions[question_id].ok);
                            app.play_sound('card_win');
                            if(player === "user"){
                                app.say(_self._user_questions[question_id].ok, app.locale, 1.6, function(){
                                    //_self.close_play_card(player);
                                });
                            }else{
                                app.say(_self._openent_questions[question_id].ok, app.locale, 1.6, function(){
                                    //_self.close_play_card(player);
                                });
                            }
                        }else{
                            $('#play_card .question_icon').css('display', 'none');
                            $('#play_card .true_icon').css('display', 'none');
                            $('#play_card .false_icon').css('display', 'block');
                            $('#play_card .front .label').html(_self._user_questions[question_id].nok);
                            app.play_sound('card_fail');
                            if(player === "user"){
                                app.say(_self._user_questions[question_id].nok, app.locale, 1.6, function(){
                                    //_self.close_play_card(player);
                                });
                            }else{
                                app.say(_self._openent_questions[question_id].nok, app.locale, 1.6, function(){
                                    //_self.close_play_card(player);
                                });
                            }
                        }
                        $('#play_card').off('click').on('click', function(e){
                            app.play_sound('small_hit');
                            TweenMax.killAll();
                            _self.close_play_card(player);
                        });
                    }
                });
            }
        }
    });
}
guess_game_page.prototype.close_play_card = function(player){
    var _self = this;
    app.play_sound('close_card');
    TweenLite.to($('#play_card'), .5, {
        y:window.innerHeight+150,
        delay:.3,
        onComplete:function(){
            $.each($('.to_eliminate'), function(index, card){
                if($(this).find('.cross_card').length === 0){
                    $(this).find('.front_card').append('<div class="cross_card"></div>');
                }
            });
            TweenLite.to($('#play_card_container'), .5, {
                opacity:0,
                onComplete:function(){
                    $('#play_card_container').css('display', 'none');
                    //setTimeout(function(){_self.set_player("openent");},2000);
                    if(player === "openent"){
                        $('#opponent_game_screen .to_eliminate').addClass('eliminated');
                        setTimeout(function(){_self.set_player("user");},500);
                    }else{
                        TweenMax.to($('#user_game_screen .button_valid'), .5, {scaleX:1.2, scaleY:1.2, yoyo:true, repeat:11});
                    }
                }
            });
        }
    });
}
guess_game_page.prototype.get_condition = function(id, check, value, callBack){
    var card_infos = _.where(this.infos.characters, {id:id})[0];
    var eliminate = false;
    switch(check){
        case 'type':
            if(parseInt(card_infos.type) === parseInt(value)){
                eliminate = true;
            }
            break;
        case 'skin_color':
            if(value.indexOf(card_infos.parsed_datas.skin_color) !== -1){
                eliminate = true;
            }
            break;
        case 'glasses':
            if(value === ">0" && parseInt(card_infos.parsed_datas.containers.faces_container.assets.glasses.status) > 0){
                eliminate = true;
            }else if(value === "===0" && parseInt(card_infos.parsed_datas.containers.faces_container.assets.glasses.status) === 0){
                eliminate = true;
            }
            break;
        case 'mustach':
            if(value === ">0" && parseInt(card_infos.parsed_datas.containers.faces_container.assets.mustach.status) > 0){
                eliminate = true;
            }else if(value === "===0" && parseInt(card_infos.parsed_datas.containers.faces_container.assets.mustach.status) === 0){
                eliminate = true;
            }
            break;
        case 'hats':
            if(value === ">0" && parseInt(card_infos.parsed_datas.containers.accessories_container.assets.hats.status) > 0){
                eliminate = true;
            }else if(value === "===0" && parseInt(card_infos.parsed_datas.containers.accessories_container.assets.hats.status) === 0){
                eliminate = true;
            }
            break;
        case 'hairs_color':
            if(value.indexOf(card_infos.parsed_datas.hair_color) !== -1){
                eliminate = true;
            }
            break;
        case 'eyes':
            if(value.indexOf(card_infos.parsed_datas.containers.faces_container.assets.eyes.status.toString()) !== -1){
                eliminate = true;
            }
            break;
        case 'hairs':
            if(value.indexOf(card_infos.parsed_datas.containers.hairs_container.assets.hairs.status.toString()) !== -1){
                eliminate = true;
            }
            break;
        case 'tshirt':
            if(value === ">0" && parseInt(card_infos.parsed_datas.containers.tops_container.assets.tshirt.status) > 0){
                eliminate = true;
            }else if(value === "===0" && parseInt(card_infos.parsed_datas.containers.tops_container.assets.tshirt.status) === 0){
                eliminate = true;
            }
            break;
        case 'mouth':
            if(value.indexOf(card_infos.parsed_datas.containers.faces_container.assets.mouths.status.toString()) !== -1){
                eliminate = true;
            }
            break;
        case 'barbe':
            if(value === ">0" && parseInt(card_infos.parsed_datas.containers.barbes_container.assets.barbes.status) > 0){
                eliminate = true;
            }else if(value === "===0" && parseInt(card_infos.parsed_datas.containers.barbes_container.assets.barbes.status) === 0){
                eliminate = true;
            }
            break;
    }
    //on retourne le status et l'id de la carte
    callBack({status:eliminate, id:id});
}
guess_game_page.prototype.show_questions = function(){
    var _self = this;
    $('#global_close_button').css('display', "block");
    $('#global_close_button').off('click').on('click', function(e){
        _UI.displayTouch($(this));
        _self.hide_questions();
    });
    TweenLite.to($('.guess_game_container'), .7, {y:-window.innerHeight, ease:Power4.easeOut});
    TweenLite.to($('.guess_questions'), .7, {y:0, top:0, ease:Power4.easeOut});
}
guess_game_page.prototype.hide_questions = function(){
    $('#global_close_button').off('click').css('display', "none");
    TweenLite.to($('.guess_game_container'), .7, {y:0, ease:Power4.easeOut});
    TweenLite.to($('.guess_questions'), .7, {y:window.innerHeight, ease:Power4.easeOut});
}
guess_game_page.prototype.play = function(){
    
}
guess_game_page.prototype.pause = function(){
    
}
guess_game_page.prototype.update = function(){
    
}
guess_game_page.prototype.refresh = function(datas){
    
}
guess_game_page.prototype.destroy = function(callBack){
    $('#global_close_button').css('display', "none");
    var _self = this;
    callBack();
}