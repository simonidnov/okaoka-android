var gif_creator = {
    canvas : null,
    context : null,
    encoder : null,
    data_url : "",
    init:function(){
        
    },
    start : function(target_id){
        this.canvas = document.getElementById(target_id);
        this.context = this.canvas.getContext('2d');
        this.encoder = new GIFEncoder();
        this.encoder.setRepeat(0);
        this.encoder.setDelay(100);
        this.encoder.start();
    },
    add_frame : function(){
        this.encoder.addFrame(this.context);
    },
    end : function(callBack){
        this.encoder.finish();
        var binary_gif = this.encoder.stream().getData() //notice this is different from the as3gif package!
        this.data_url = 'data:image/gif;base64,'+encode64(binary_gif);
        callBack(this.data_url);
    }
}