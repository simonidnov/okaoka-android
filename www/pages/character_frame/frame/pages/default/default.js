function default_page(){
    console.log('create new page script : ', app.page_properties);
}
default_page.prototype.init = function(){
    console.log('init new page script delayed : ', app.page_properties.delayed);
}
default_page.prototype.play = function(){
    
}
default_page.prototype.pause = function(){
    
}
default_page.prototype.update = function(){
    
}
default_page.prototype.refresh = function(datas){
    
}
default_page.prototype.destroy = function(callBack){
    callBack();
}