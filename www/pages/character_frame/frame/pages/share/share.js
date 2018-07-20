function share_page(){
    this._preview = null;
    this.swiper = null;
    this.scroll = null;
    this._datas = null;
    console.log('create new page script : ', app.page_properties);
}
share_page.prototype.init = function(){
    var _self = this;
    console.log('init new page script delayed : ', app.page_properties.delayed);
    if(typeof app._page_request.id === "undefined"){
        alert('on ne sais pas partager du vent');
    }
    $('.share .img_preview').css('height', (window.innerHeight - ($('#barcode').height() + $('#button_hp').height()))+'px');

    ajax_request.get(
        "/nse/character",
        {
            "id":app._page_request.id
        },
        function(success){
            console.log(success);
            _self._datas = success.result[0];
            _self.display_character(_self._datas);
        },
        function(fail){
            alert('erreur lors de la recherche');
            console.log(fail);
        }
    )
}
share_page.prototype.display_character = function(){
    console.log("this._datas ::: ", this._datas);
    //this._preview = new character({
    //    "touch_enabled":false,
    //    "canvas":"share_canvas",
    //    "width":window.innerWidth,
    //    "height":window.innerHeight/2 + 100,
    //    "datas":this._datas
    //});
    //this._preview.init();
    this.base64 = window.localStorage.getItem('last_character_pix');
    $('.img_preview').css('background-image', 'url('+encodeURI(app.pix_to_uri(this._datas.base64, "thumb"))+')');
    var _self = this;
    $('#share_button').off('click').on('click', function(){
        if(typeof cordova !== "undefined"){
            var options = {
              message: 'Hey, j\'ai trouvé cette application c\'est très drôle, essayez !', // not supported on some apps (Facebook, Instagram)
              subject: 'Regardez mon avatar idkids !', // fi. for email
              files: [encodeURI(app.pix_to_uri(_self._datas.base64))], // an array of filenames either locally or remotely
              url: 'https://idkids.landscape-viewer.com/#page/character/id/'+app._page_request.id,
              chooserTitle: 'IdKIds FabLab NSE 2016' // Android only, you can override the default share sheet title
            }

            var onSuccess = function(result) {
              console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
              console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
            }

            var onError = function(msg) {
              console.log("Sharing failed with message: " + msg);
            }
            window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
        }else{
            window.open('http://www.facebook.com/sharer.php?u='+encodeURI(app.pix_to_uri(_self._datas.base64, "thumb"))+'&t=Mon avatar IdKids','sharer','toolbar=0,status=0,width=626,height=436');
            return false;
        }
    });
    app.encode_uri_to_barcode('https://idkids.landscape-viewer.com/#page/character/id/'+app._page_request.id, function(e){
        $('#qrcode').attr('src', e.uri);
    });
    
    this.scroll = new IScroll('#share_scroll_wrapper', {
        disableMouse: false,
        probeType:1,
        scrollbars:false,
        interactiveScrollbars:false,
        fadeScrollbars:false,
        mouseWheel:true,
        click:true,
        tap:true, 
        keyBindings:true,
        deceleration:0.002
    });
    
    window.localStorage.setItem('last_character_svg', '');
    window.localStorage.setItem('last_character_pix', '');
    window.localStorage.setItem('last_character', '');
    
    $('.share .img_preview').css('height', (window.innerHeight - ($('#barcode').height() + $('#button_hp').height()))+'px');
}
share_page.prototype.play = function(){
    
}
share_page.prototype.pause = function(){
    
}
share_page.prototype.update = function(){
    
}
share_page.prototype.refresh = function(datas){
    
}
share_page.prototype.destroy = function(callBack){
    callBack();
}