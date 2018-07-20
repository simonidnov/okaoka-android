var _okg = null;
function surfrider(){
    console.log('surfrider');
}
surfrider.prototype.init = function(){
    this.create_interface();
}
surfrider.prototype.replay_game = function(){
    window.location.href = window.location.href+"/intro/false";   
    gui.Window.get().reload(3);
}
surfrider.prototype.create_interface = function(){
}
surfrider.prototype.tick = function() {
}
surfrider.prototype.pause = function(){
}
surfrider.prototype.play = function(){
}
surfrider.prototype.destroy = function(callBack){
    if(this.tick){
        createjs.Ticker.removeEventListener('tick', this.tick);
    }
    callBack();
}