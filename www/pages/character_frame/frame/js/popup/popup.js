/* ---------- POPUP SAMPLE DISPLAY CODE FULL OPTION ------------- */


function PopUp(){
    this.init();
    this._callBack = null;
    this._diaporama = null;
    this._id = 0;
    this._container = null;
    this._close = null;
    this._datas = null;
}
PopUp.prototype.init = function(){
    if($('.ui_template').length === 0){
        $('body').append('<div class="ui_template" id="ui_templates"></div>');
    }
    if($('#popup_template').length === 0){
        $('#ui_templates').load('js/popup/popup_templates.html', function(){});
    }
}
PopUp.prototype.open_popup = function(datas, callBack){
    this._id = $('[id^=popup_content]').length;
    
    if(typeof datas === "undefined" || typeof callBack === "undefined"){
        return false;
    }
    this._callBack = callBack;
    this._datas = datas;
    var self = this;
    if($('#popup_template').length === 0){
        setTimeout(function(){
            self.open_popup(datas, callBack);
        },500);
        return false;
    }
    var template = _.template($('#popup_template').html());
    if($('#popup_content_'+this._id).length === 0){
        $('body').append('<div class="popup_content" id="popup_content_'+this._id+'"></div>');
    }
    self._container = $('#popup_content_'+this._id);
    self._container.append(template(datas));
    TweenLite.set(self._container, {opacity:0});
    TweenLite.to(self._container, .5, {opacity:1, onComplete:function(){
        TweenLite.set(self._container.find('.popup'), {css:{top:'50%'}, opacity:0});   
        TweenLite.to(self._container.find('.popup'), .5, {css:{top:0, bottom:0}, opacity:1, ease:Back.easeOut});   
    }});
    $.each(self._container.find('.popup .popup_button'), function(index, button){
        $(this).on('click', function(e){
            _UI.displayTouch($(this));
            self.close_popup($(this).attr('data-button'));
        });
    });
    if(self._container.find('.popup_cross_close_button').length !== 0){
        self._container.find('.popup_cross_close_button').on('click', function(){
            self.close_popup(1000);
        });
    }
    if(typeof datas.picker !== "undefined"){
        self._container.find('.picker').on('click', function(){
            self._container.find('.picker').removeClass('selected');
            $(this).addClass('selected');
        });
    }
    /* CREATE ISCROLL ON MESSAGE BOX popup_message_wrapper*/
    if(self._container.find('.message_scroller').height() > window.innerHeight /2){
        self._container.find('.message_scroller').css('position', 'absolute');
        self._container.find('#popup_message_wrapper').css({
            'height':window.innerHeight /2,
            'overflow':"hidden",
            'display':"block",
            'position':"relative"
        });
        this._popup_scroll = new IScroll('#popup_message_wrapper', {
            probeType:1,
            scrollbars:false,
            interactiveScrollbars:false,
            fadeScrollbars:true,
            mouseWheel:false,
            click:true,
            tap:true, 
            keyBindings:true,
            deceleration:0.002
        });
    }
    if(typeof datas.diaporama !== "undefined"){
        /* create diaporama popup_diaporama  -> popup_diapo */
        this._diaporama = new swipify(
            self._container.find('.popup_diaporama_slider'), 
            '.popup_diapo', 
            function(e, status)
            {
                if(status === "finish"){
                }else{
                }
            }, 
            false,
            true,
            false,
            {}
        );
        this._diaporama.init();
    }
    if(typeof datas.form !== "undefined"){
        if(datas.form.length > 0){
            self._form = new formular('popup_form', function(e){
            });
        }
    }
    if(typeof datas.motion !== "undefined" && window.innerWidth <= 380){
        if(self._container.find('.illus.motion iframe').length > 0){
            self._container.find('.illus.motion iframe').css('left', ($('.illus.motion').width()/2-160)+'px');
        }
    }
}
PopUp.prototype.close_popup = function(hitted){
    var self = this;
    var datas = null;
    if(self._container.find('#popup_form').length === 1){
        datas = self._form.get_form_datas();
    }
    if(typeof this._datas.picker !== "undefined"){
        if(self._container.find('.picker.selected').length === 0){
            return false;
        }else{
            if(datas === null){
                datas = {"picker":self._container.find('.picker.selected').attr('data-id')};
            }else{
                datas.picker = self._container.find('.picker.selected').attr('data-id');
            }
        }
    }
    if(self._diaporama !== null){
        self._diaporama.destroy();
    }
    TweenLite.to(self._container.find('.popup'), .5, {
        css:{
            top:"50%"
        },
        opacity:0,
        ease:Back.easeIn,
        onComplete:function(){
            self._container.find('.popup').remove();
            TweenLite.to(self._container, .3, {opacity:0, onComplete:function(){
                self._callBack(hitted, datas);
                self._container.remove();
            }});
        }
    });
}
