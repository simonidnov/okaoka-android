function shop_page(){
    console.log('create shop script : ', app.page_properties);
}
shop_page.prototype.init = function(){
    console.log('init shop page script delayed : ', app.page_properties.delayed);
    setTimeout(function(){
        parental_control.init($('.shop'));
    },2500);
}
shop_page.prototype.play = function(){
    
}
shop_page.prototype.pause = function(){
    
}
shop_page.prototype.update = function(){
    
}
shop_page.prototype.refresh = function(datas){
    
}
shop_page.prototype.destroy = function(callBack){
    callBack();
}