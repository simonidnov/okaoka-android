/*
    var first_name_input = new fake_input('first_name', $('.screen '), 'center', function(e){
    });
*/
function fake_input(name, target, position, callBack, type, max_char){
    this._name = name;
    this._target = target;
    this._max_char = max_char;
    this._type = type;
    this._position = position;
    this._callBack = callBack;
    this._keyboard = null;
    this.init();
}
fake_input.prototype.init = function(){
    var self = this;
    //this._target.append('<div class="fake_input '+this._position+'" id="'+this._name+'"><div class="content_text"><span></span><div class="fake_tiret fadeIn"></div></div><div class="micro"><img src="/img/assets/micro_white.svg"/></div></div>');
    this._target.append('<div class="fake_input '+this._position+'" id="'+this._name+'"><span class="content_text easy_text"></span><div class="fake_tiret fadeIn"></div></div>');
    //<input type="text" id="input_'+this._name+'"/>
    //<div class="micro"><img src="/img/assets/micro_white.svg"/></div>
    //this._voice = new voice_recognition(function(e){
    //    $('#'+this._name+' .content_text').html(e);
    //});
    //$('#'+this._name+' .micro').on('click', function(){
    //    /* open microphone to say hello */
    //    self._voice.start();
    //});
    $('#input_'+this._name).focus();
    /*$('#'+this._name+' .content_text').on('click', function(){
        //self._keyboard.open();
    });*/
    this._keyboard = new easy_keyboard(this._type, $('.screen').last(), 'bottom', $('#first_name .content_text'), function(e){
        var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
            matches = self._target.find('span').css('-webkit-transform').match(matrixRegex);
        if((Math.round(self._target.find('span').width()+$('.fake_tiret').width())) > this._target.find('.fake_input').width()){
            var dif = Math.round(this._target.find('.fake_input').width()) / Math.round(self._target.find('span').width()+$('.fake_tiret').width()) - .1;
            TweenMax.set(self._target.find('span'), {scaleX:dif, scaleY:dif});
        }
        self._callBack('progress');
        if(e === "validate"){
            self._callBack('validate');
        }
    }, this._max_char);
    TweenMax.to($('#'+this._name), .6, {
        css:{"width":"300px"},
        ease:Back.easeOut,
        onComplete:function(){
            self._keyboard.open();
        }
    });
    
}
fake_input.prototype.destroy = function(callBack){
    var self = this;
    $('#'+this.name+' .micro').off('click');
    this._keyboard.destroy();
    TweenMax.to($('#'+this._name), .6, {
        css:{"width":"0px"},
        ease:Back.easeIn,
        onComplete:function(){
            $('#'+self._name).remove();
            callBack();
            delete self;
        }
    });
}