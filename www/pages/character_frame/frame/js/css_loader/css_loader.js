function css_loader(target){
    this._target = target;
    this.timeout = null;
}
css_loader.prototype.show = function(){
    if(this.timeout !== null){
        clearTimeout(this.timeout);
        this.timeout = null;
    }
    if(this._target.find('.bubblingG_content').length === 0){
        this._target.append('<div class="bubblingG_content"><div class="bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div></div>');
    }
    var _self = this;
    this.timeout = setTimeout(function(){
        _self.hide();
        this.timeout = null;
    }, 10000);
}
css_loader.prototype.hide = function(){
    if(this._target.find('.bubblingG_content').length > 0){
        this._target.find('.bubblingG_content').remove();
    }
    if(this.timeout !== null){
        clearTimeout(this.timeout);
    }
}