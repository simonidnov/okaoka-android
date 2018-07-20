var stickers_helper = {
    init: function() {
        ///PlugIns/humans-stickers.appex/Sticker Pack.stickerpack/Info.plist
    },
    list_stickers: function(root, callBack) {
        function listDir(path) {
            window.resolveLocalFileSystemURL(path,
                function(fileSystem) {
                    var reader = fileSystem.createReader();
                    reader.readEntries(
                        function(entries) {
                            console.log(entries);
                            callBack(entries);
                        },
                        function(err) {
                            console.log(err);
                        }
                    );
                },
                function(err) {
                    console.log(err);
                }
            );
        }
        listDir(cordova.file.dataDirectory+root);
        //listDir(cordova.file.applicationDirectory + "/PlugIns/"+app.app_name+".appex/Sticker Pack.stickerpack/");
        //listDir(cordova.file.applicationDirectory + "/PlugIns/humans-stickers.appex/Sticker Pack.stickerpack/");
    },
    file_exist : function(file_name, callBack){
        file_name = encodeURI(file_name);
        stickers_helper.list_stickers("pictures/", function(e){
            if(_.where(e, {name:file_name}).length > 0){
                callBack(true);
            }else{
                callBack(false);
            }
        });
    },
    save_file : function(datas, name, callBack){
        var _self = this;
        console.log('-------------- save_file -----------------');
        var blob = this.b64toBlob(datas, 'image/gif', 1024);
        console.log('blob ::: ', blob);
        var myFolderApp = cordova.file.dataDirectory;
        //cordova.file.applicationDirectory + "/PlugIns/"+app.app_name+".appex/Sticker Pack.stickerpack/";
        
        window.resolveLocalFileSystemURL(myFolderApp, function(fileSystem) {
            console.log("got main fileSystem ",fileSystem);
            fileSystem.getDirectory("pictures/", { create: true }, function(dir) {
                console.log("got main dir ::: ",dir);
                dir.getFile(name+'.gif', {create:true}, function(file) {
                    console.log("got the file", file);
                    file.createWriter(function(fileWriter) {
                        fileWriter.write(blob);
                        callBack({file_url:file.nativeURL, datas:datas});
                        console.log("ok, in theory i worked");
                    }, function(e){
                        console.log('createWriter file error ', e);
                    });         
                }, function(e){
                    console.log('get file error : ', e);
                });
            }, function(e){
                console.log('getDirectory error ', e);
            });
        });
    },
    b64toBlob : function(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        
        b64Data = b64Data.replace('data:image/gif;base64,', '');
        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }
}