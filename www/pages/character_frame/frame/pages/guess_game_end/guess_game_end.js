function guess_game_end_page(){
    this.infos = null;
    this._user_datas = null;
    this._openent_datas = null;
    this._user_character = null;
    this._openent_character = null;
    this.question_scroll = null;
}
guess_game_end_page.prototype.init = function(){
    this.infos = JSON.parse(window.localStorage.getItem("game_settings"));
    this._user_datas = _.where(this.infos.characters, {'id':this.infos.character_id})[0];
    this._openent_datas = _.where(this.infos.characters, {'id':this.infos.openent_id})[0];
    this.display_characters();
}
guess_game_end_page.prototype.display_characters = function(){
    var _self = this;
    $('#user_canvas, #openent_canvas').attr('width', window.innerWidth);
    $('#user_canvas, #openent_canvas').attr('height', window.innerHeight/2);
    $('#user_canvas').css({'background-color': this._user_datas.parsed_datas.bkcolor, 'display':'none'});
    $('#openent_canvass').css({'background-color': this._openent_datas.parsed_datas.bkcolor, 'display':'none'});
   
    $('#player_1').css({
        'height':window.innerHeight/2+'px', 
        'display':'block', 
        'background-color': this._user_datas.parsed_datas.bkcolor,
        'background-image': 'url('+encodeURI(app.pix_to_uri(this._user_datas.base64, "thumb"))+')'
    });
    $('#player_2').css({
        'height':window.innerHeight/2+'px', 
        'display':'block', 
        'background-color': this._openent_datas.parsed_datas.bkcolor,
        'background-image': 'url('+encodeURI(app.pix_to_uri(this._openent_datas.base64, "thumb"))+')'
    });
    
    this._user_character = new character({
        "touch_enabled":false,
        "canvas":"user_canvas",
        "width":window.innerWidth,
        "height":window.innerHeight/2,
        "datas":this._user_datas.parsed_datas
    });
    this._user_character.init();
    
    this._openent_character = new character({
        "touch_enabled":false,
        "canvas":"openent_canvas",
        "width":window.innerWidth,
        "height":window.innerHeight/2,
        "datas":this._openent_datas.parsed_datas
    });
    this._openent_character.init();
    setTimeout($.proxy(function(){
        if(app._page_request.status === "win"){
            app.say(app.text_template('WIN_TEXT', {label:this._user_datas.label}), null, 1.6, function(){
                _self._user_character.motions.win(_self._user_character, false, function(){});
                app.play_audio();
            });
            _self._openent_character.motions.fail(_self._openent_character, false, function(){});
            $('.guess_game_end .win_or_lose').html(app.text_template('WIN_TEXT', {label:this._user_datas.label}));
        }else{
            app.say(app.text_template('LOSE_TEXT', {label:this._user_datas.label}), null, 1.6, function(){
                _self._openent_character.motions.win(_self._openent_character, false, function(){});
                app.play_audio();
            });
            _self._user_character.motions.fail(_self._user_character, false, function(){});
            $('.guess_game_end .win_or_lose').html(app.text_template('LOSE_TEXT', {label:this._user_datas.label}));
            $('.guess_game_end .win_or_lose').html();
        }
        $('#user_canvas').css({'display':'block'});
        $('#openent_canvas').css({'display':'block'});
    }, this), 7000);
}
guess_game_end_page.prototype.play = function(){
    
}
guess_game_end_page.prototype.pause = function(){
    
}
guess_game_end_page.prototype.update = function(){
    
}
guess_game_end_page.prototype.refresh = function(datas){
    
}
guess_game_end_page.prototype.destroy = function(callBack){
    var _self = this;
    this._user_character.destroy(function(){});
    //this._openent_character.destroy(function(){});
    callBack();
}