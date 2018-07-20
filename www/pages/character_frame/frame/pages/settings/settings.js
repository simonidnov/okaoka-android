function settings_page(){
    console.log('create new page script : ', app.page_properties);
}
settings_page.prototype.init = function(){
    console.log('init new page script delayed : ', app.page_properties.delayed);
    setTimeout(function(){
        parental_control.init($('.settings'));
    },2500);
}
settings_page.prototype.play = function(){
    
}
settings_page.prototype.pause = function(){
    
}
settings_page.prototype.update = function(){
    
}
settings_page.prototype.refresh = function(datas){
    
}
settings_page.prototype.destroy = function(callBack){
    callBack();
}