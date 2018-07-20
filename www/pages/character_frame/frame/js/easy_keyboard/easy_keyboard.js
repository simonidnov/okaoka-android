function easy_keyboard(type, target, position, input, callBack, max_char){
    this._type = type;
    this._position = position;
    this._max_char = max_char;
    this._callBack = callBack;
    this._target = target;
    this._input = input;
    this.starttime = new Date().getTime();
    this.init();
}
easy_keyboard.prototype.init = function(){
    var self = this;
    var text_type = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
    var text_type_array = [["A","À","Â"],"B",["C","Ç"],"D",["E", "É","È", "Ê","Ë"],"F","G","H",["I","Î","Ï"],"J","K","L","M","N",["O","Ô","Ö"],"P","Q","R","S","T",["U","Û","Ü"],"V","W","X","Y","Z","-"];
    var number_type = "1234567890";
    var chars = text_type.split('');
    var mw = window.innerWidth;
    if(mw > 768){mw = 768;}
    this.w = Math.round(mw/10)-8;
    this.w = this.w;
    if(this.w>70){this.w=70}else if(this.w<40){this.w = 40};
    
    var tot_line = Math.floor(mw/(this.w+8));
    console.log('this.w ', this.w);
    this.line = 1;
    switch(this._type){
        case "text":
            this.line = Math.ceil((text_type_array.length+2)/tot_line);
            //chars = text_type.split('');
            chars = text_type_array;
            break;
        case "number":
            this.line = Math.ceil((number_type.length+2)/tot_line);
            chars = number_type.split('');
            break;
    }
    var color = 'green';
    this._target.append('<div class="easy_keyboard '+this._position+'"><div class="content_center"></div></div>');
    for(var i=0; i<chars.length; i++){
        switch (i){
            case 4:
                color = "purple";
                break;
            case 8:
                color = "pink";
                break;
            case 12:
                color = "dgreen";
                break;
            case 16:
                color = "yellow";
                break;
            case 20:
                color = "orange";
                break;
            case 23:
                color = "blue";
                break;
            case 26:
                color = "black";
                break;
        }
        if(typeof chars[i] === "string"){
            this._target.find('.easy_keyboard .content_center').append('<div class="touche '+color+'" data-val="'+chars[i]+'">'+chars[i]+'</div>');
        }else{
             this._target.find('.easy_keyboard .content_center').append('<div class="touche '+color+'" data-id="'+i+'" data-sub="true" data-val="'+chars[i][0]+'">'+chars[i][0]+'</div>');
        }
    }
    $('.easy_keyboard').css('height', ((this.w+8)*this.line)+'px');
    $('.easy_keyboard .content_center').css('width', ((this.w+8)*tot_line)+'px');
    
    this._target.find('.easy_keyboard .content_center').append('<div class="touche black" data-val="validate" style="float:right;"><img src="images/assets/nav/nav_buttons_valid_white.svg"/></div>');
    this._target.find('.easy_keyboard .content_center').append('<div class="touche black" data-val="suppr" style="float:right;"><img src="images/assets/nav/nav_buttons_prev_white.svg"/></div>');
    if('ontouchstart' in window){
        this._target.find('.easy_keyboard .content_center .touche').off('touchstart').on('touchstart', function(e){
            self.starttime = new Date().getTime()
        });
        this._target.find('.easy_keyboard .content_center .touche').off('touchend').on('touchend', function(e){
            if(typeof $(this).attr('data-sub') !== "undefined"){
                if(new Date().getTime() > self.starttime+500){
                    /* open subcharacters */
                    self.openSubCharacters($(this), chars[parseInt($(this).attr('data-id'))]);
                    return false;
                }
            }
            $('.easy_keyboard .subtouches .touche').off('click');
            $('.sub_container').remove();
            self._callBack($(this).attr('data-val'));
            _UI.displayTouch($(this));
            if($(this).attr('data-val') === "validate"){
                self.close();
                return false;
            }
            if($(this).attr('data-val') === "suppr"){
                /*RM LAST CHAR SET */
                self._target.find('.easy_text').html(self._target.find('.easy_text').html().substring(0,(self._target.find('.easy_text').html().length)-1));
                return false;
            }
            if(self._target.find('.easy_text').html().length >= self._max_char){
                return false;
            }
            self._target.find('.easy_text').append($(this).attr('data-val'));
            return true;
        });
    }else{
        this._target.find('.easy_keyboard .content_center .touche').off('click').on('click', function(e){
            $('.easy_keyboard .subtouches .touche').off('click');
            $('.sub_container').remove();
            self._callBack($(this).attr('data-val'));
            _UI.displayTouch($(this));
            if($(this).attr('data-val') === "validate"){
                self.close();
                return false;
            }
            if($(this).attr('data-val') === "suppr"){
                /*RM LAST CHAR SET */
                self._target.find('.easy_text').html(self._target.find('.easy_text').html().substring(0,(self._target.find('.easy_text').html().length)-1));
                return false;
            }
            if(self._target.find('.easy_text').html().length >= self._max_char){
                return false;
            }
            self._target.find('.easy_text').append($(this).attr('data-val'));
            return true;
        });
    }
    $(document).on('keyup', $.proxy(this.keyboard, this));
    $('.touche').css({'width':this.w+'px', 'height':this.w+'px', 'font-size':(this.w-5)+'px', 'line-height':this.w+'px'});
    
    this.open();
    //document.removeEventListener('keyup', this.keyboard, false);
    //document.addEventListener('keyup', this.keyboard, true);
}
easy_keyboard.prototype.openSubCharacters = function(target, chars){
    console.log("target.position() ==== ", target.position());
    var self = this;
    this._target.find('.easy_keyboard').append('<div class="sub_container"><div class="subtouches '+target.attr('class')+'"></div></div>');
    for(var i=0; i<chars.length; i++){
        $('.subtouches').append('<div class="subtouche '+target.attr('class')+'" data-val="'+chars[i]+'">'+chars[i]+'</div>');
    }
    $('.subtouche').off('click').on('click', function(){
        $('.easy_keyboard .subtouches .touche').off('click');
        $('.sub_container').remove();
    });
    if(target.position().left < this._target.width()/2){
        //$('.subtouches').addClass('left');
        $('.subtouches').css({width:(chars.length*50)+'px', top:(target.position().top-50)+"px", left:target.position().left+"px"});
    }else{
        //$('.subtouches').addClass('right');
        $('.subtouches').css({width:(chars.length*50)+'px', top:(target.position().top-50)+"px", left:((target.position().left+60)-(chars.length*50))+"px"});
    }
    $('.easy_keyboard .subtouches .touche').off('click').on('click', function(e){
        self._callBack($(this).attr('data-val'));
        _UI.displayTouch($(this));
        if(self._target.find('.easy_text').html().length >= self._max_char){
            return false;
        }
        self._target.find('.easy_text').append($(this).attr('data-val'));
        $('.easy_keyboard .subtouches .touche').off('click');
        $('.sub_container').remove();
        return true;
    });
}
easy_keyboard.prototype.keyboard = function(event) {
    var self = this;
    var chars = [];
    switch(self._type){
        case "text":
            chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
            break;
        case "number":
            chars = "1234567890#";
            break;
    }
    if(event.key === "Backspace"){
        self.update_text("suppr");
        return false;
    }else if(event.key === "Enter"){
        self.update_text("validate");
        return false;
    }
    if(chars.indexOf(event.key.toUpperCase()) !== -1){
        self.update_text(event.key.toUpperCase());
    }
};
easy_keyboard.prototype.update_text = function(key){
    var self = this;
    self._callBack(key);
    if(key === "validate"){
        self.close();
        return false;
    }
    if(key === "suppr"){
        /*RM LAST CHAR SET */
        self._target.find('.easy_text').html(self._target.find('.easy_text').html().substring(0,(self._target.find('.easy_text').html().length)-1));
        return false;
    }
    if(self._target.find('.easy_text').html().length >= self._max_char){
        return false;
    }
    self._target.find('.easy_text').append(key);
    return true;
}
easy_keyboard.prototype.open = function(){
    TweenMax.to(this._target.find('.easy_keyboard'), .5, {css:{height:((this.w+8)*this.line)+'px'}});
}
easy_keyboard.prototype.close = function(){
    TweenMax.to(this._target.find('.easy_keyboard'), .5, {css:{height:'0px'}});
}
easy_keyboard.prototype.destroy = function(){
    $(document).off('keyup', $.proxy(this.keyboard, this));
    this._target.find('.easy_keyboard .content_center .touche').off('touchend').off('click');
    TweenMax.to(this._target.find('.easy_keyboard'), .5, {css:{height:'0px'}});
}