function informations_page(){
    this.information_scroll = null;
    console.log('create new page script : ', app.page_properties);
}
informations_page.prototype.init = function(){
    console.log('init new page script delayed : ', app.page_properties.delayed);
    this.information_scroll = new IScroll('#informations_wrapper', {
        disableMouse: false,
        probeType:1,
        scrollbars:false,
        interactiveScrollbars:false,
        fadeScrollbars:false,
        mouseWheel:true,
        click:true,
        tap:true, 
        keyBindings:true,
        deceleration:0.001
    });
}
informations_page.prototype.play = function(){
    
}
informations_page.prototype.pause = function(){
    
}
informations_page.prototype.update = function(){
    
}
informations_page.prototype.refresh = function(datas){
    
}
informations_page.prototype.destroy = function(callBack){
    if(this.information_scroll !== null){
        this.information_scroll.destroy();
    }
    callBack();
}