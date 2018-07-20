var _okg = null;
var character_frame  = function(){
    _okg=this;
    _task_bar = null;
}
character_frame.prototype.init = function(){
    if(typeof require !== "undefined"){
        $('#character_frame').css({"width":window.innerWidth+"px", "height":window.innerHeight+"px"}).attr('src', '/pages/character_frame/frame/index.html#page/character/transition/instant');
    }else{
        $('#character_frame').css({"width":window.innerWidth+"px", "height":window.innerHeight+"px"}).attr('src', 'pages/character_frame/frame/index.html#page/character/transition/instant');
    }
    utilities.show_popup(
        {color:navigation._current_interface_color, motion:"popup_character", buttons:["play"]}, 
        function(e){
            
        }
    );
}
character_frame.prototype.end_game = function(type){
    
}
character_frame.prototype.create_interface = function(){
    this.init();
}
character_frame.prototype.play = function(){
    
}
character_frame.prototype.pause = function(){
    
}
character_frame.prototype.destroy = function(callBack){
    callBack();
}
