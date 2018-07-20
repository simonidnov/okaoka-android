var _okg = null;
function drop_circle(){
    this.base = "pages/drop_circle/";
    _okg = this;
    this.init();
}
drop_circle.prototype.init = function(){
    
}
drop_circle.prototype.replay_game = function(){
    window.location.href = window.location.href+"/intro/false/stat/"+new Date().getTime();   
    gui.Window.get().reload(3);
}
drop_circle.prototype.pause = function(){
    
}
drop_circle.prototype.play = function(){
    
}
drop_circle.prototype.destroy = function(callBack){
    callBack();
}
