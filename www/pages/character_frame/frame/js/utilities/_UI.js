var _UI = {
    displayTouch : function(target){
        if(target.css('position') !== "absolute" && target.css('position') !== "relative"){
            target.css({'position':'relative', 'overflow':'hidden'});
            //
        }
        var ident = this.get_uid();
        target.append('<div class="touch_circle_ui" id="'+ident+'"></div>');
        var size = target.width()*2;
        if(target.height() > target.width()*2){
            size = target.height()*2;
        }
        $('#'+ident).css({
            'width':size+'px', 
            'height':size+'px',
            'left':(-(size/4))+'px',
            'top':(-(size/4))+'px'
        });
        TweenLite.set($('#'+ident), {scaleX:0, scaleY:0});
        TweenLite.to($('#'+ident), .5, {scaleX:1, scaleY:1, opacity:0, onComplete:function(){
            $('#'+ident).remove();
        }});
        app.play_sound('small_hit');
    },
    get_uid : function(){
        function s4(){
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}