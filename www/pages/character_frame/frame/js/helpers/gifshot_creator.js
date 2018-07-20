var gifshot_creator = {
    mygif:"",
    init: function(){
        
    },
    generate : function(images_array, callback){
        $('body').append('<div class="progress_bar_container"><div class="progress_container_center"><div class="progress_bar"><div class="bar_progress"></div></div></div></div>');
        gifshot.createGIF({
            images: images_array,
            saveRenderingContexts:false,
            progressCallback:function(e){
                console.log('progressCallback ', e);
                $('.progress_bar_container .progress_container_center .bar_progress').css('width', (Math.abs(e.toFixed(2))*100)+'%');
            },
            completeCallback:function(e){
                console.log('completeCallback ', e);
            }
        }, function (obj) {
            if (!obj.error) {
                var image = obj.image;
                //animatedImage = document.createElement('img');
                //animatedImage.src = image;
                //console.log(image);
                mygif = image;
                callback(image);
                $('.progress_bar_container').remove();
                //document.body.appendChild(animatedImage);
            }else{
                console.log('error ', obj);
            }
        });
    }
}