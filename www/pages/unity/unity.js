var _okg = null;
var unity  = function(){
    _okg=this;
    _task_bar = null;
}
unity.prototype.init = function(){
    alert('inited');
    if(typeof require !== "undefined"){
        $('#game_content').css({"width":window.innerWidth+"px", "height":window.innerHeight+"px"}).attr('src', '/pages/unity/unity/unity/index.html');
    }else{
        $('#game_content').css({"width":window.innerWidth+"px", "height":window.innerHeight+"px"}).attr('src', 'pages/unity/unity/unity/index.html');
    }
}
unity.prototype.end_game = function(type){
}
unity.prototype.create_interface = function(){
    alert('create_interface');
    this.init();
}
unity.prototype.play = function(){
    
}
unity.prototype.pause = function(){
    
}
unity.prototype.died = function(type){
    TweenMax.to($('#game_content'), .5, {opacity:0, onComplete:function(){
        $('#game_content').attr('src', '');
        //_okg.end_game(type);
    }});
}
unity.prototype.destroy = function(callBack){
    //this._task_bar.destroy();
    callBack();
}
