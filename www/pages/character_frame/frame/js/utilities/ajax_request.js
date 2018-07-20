var ajax_request = {
    _ajax : null,
    _base_url : "http://www.landscape-viewer.com/api/",
    _format : 'json',
    _callBack : null,
    _loader : null,
    _device : null,
    _user   : null,
    _family : null,
    _fail   : null,
    _network_state : null,
    init : function(){
        this._loader = new css_loader($('body'));
        document.addEventListener("offline", this.offline, false);
        document.addEventListener("online", this.online, false);
        //name,target,x,y,rayon,stroke_color,stroke_width,fill_color,svg_path
    },
    offline:function(){
        toast.open(app.text_template('INTERNET_IS_LOST', {state:navigator.connection.type}));
        console.log('you are offline');
    },
    online:function(){
        toast.open(app.text_template('INTERNET_IS_CONNECTED', {state:navigator.connection.type}));
        console.log('you are online');
    },
    get : function(uri, params, callBack, fail){
        this.call(uri, "GET", params, callBack, fail);
    },
    put : function(uri, params, callBack, fail){
        this.call(uri, "PUT", params, callBack, fail);
    },
    post : function(uri, params, callBack, fail){
        this.call(uri, "POST", params, callBack, fail);
    },
    delete : function(uri, params, callBack, fail){
        this.call(uri, "delete", params, callBack, fail);
    },
    call : function(uri, type, datas, callBack, fail){
        if(!ajax_request.checkNetworkState()){
            return false;    
        }
        var _self = this;
        this._loader.show();
        this._callBack = callBack;
        this._fail = fail;
        var base = "";
        if(uri.indexOf('http://') === -1){
            base = this._base_url;
        }
        datas = this.addParams(datas);
        setTimeout(function(){
            $.ajax({
                url: base+uri,
                crossDomain: true,
                contentType: "application/x-www-form-urlencoded",
                async: true,
                type: type,
                data: datas,
                dataType: this._format,
                timeout: 20000,
            }).done(_self.success)
              .fail(_self.fail)
              .always(_self.always);
        }, 800);
    },
    checkNetworkState : function(){
        if(typeof navigator.connection === "undefined"){
            return true;
        }
        var networkState = navigator.connection.type;
        if (networkState == Connection.NONE) {
            var pop = new PopUp();
            pop.open_popup(
                {
                    "title":app.text('NO_NETWORK_TITLE'),
                    "message":app.text('NO_NETWORK_MESSAGE'),
                    "buttons":[
                        {"label":"ok"}
                    ]
                }, 
                function(e, datas){delete pop;}
            );
            return false;
        }else{
            return true;
        }
    },
    addParams : function(datas){
        if(typeof device === "undefined"){
            datas.cordova = "0.0.1";
            datas.manufacturer = "Simon";
            datas.app_component = auth_helper.app_component;
            datas.model = "Simon";
            datas.platform = "Simon";
            datas.uuid = "Simon";
            datas.version = "0.0.1";
            datas.locale = "fr_fr";
        }else{
            datas.cordova = device.cordova;
            datas.manufacturer = device.manufacturer;
            datas.model = device.model;
            datas.app_version = auth_helper.app_version;
            datas.app_component = auth_helper.app_component;
            datas.platform = device.platform;
            datas.uuid = device.uuid;
            datas.version = device.version;
            
            navigator.globalization.getPreferredLanguage(
                function (language) {
                    datas.locale = device.language;
                },
                function () {
                    datas.locale = "undefined";
                }
            );
        }
        /* TESTER SI UNE CONNEXION EST EN COURS PUIS AJOUTER DECRET_TOKEN ET API_TOKEN SI C'EST LE CAS */
        //var user_infos = this.get_user_infos();
        //if(user_infos !== false){
        //    $.each(_.keys(user_infos), function(index, key){
        //        datas[key] = user_infos[key];
        //    });
        //}
        datas.user_infos = auth_helper.user_infos;
        return datas;
    },
    always : function(e){
        //var networkState = navigator.connection.type;
        if(typeof e.responseJSON !== "undefined"){
            if(typeof e.responseJSON.redirection !== "undefined"){
                //navigation.router.navigate(e.responseJSON.redirection, {trigger:true, replace:true});
            }
        }
        if(typeof ajax_request._loader !== "undefined"){
            ajax_request._loader.hide();
        }
        //if(networkState === "none"){
        //    //app.lost_connexion();
        //}
    },
    success : function(e){
        if(typeof e.redirection !== "undefined"){
            //navigation.router.navigate(e.redirection, {trigger:true, replace:true});
        }
        if(typeof e.action !== "undefined"){
            switch(e.action){
                case "autologin":
                    if(typeof e.user_infos !== "undefined" && typeof e.password !== "undefined"){
                        /* need app login with email and pass */
                        /*auth_api.login_form(
                            "email", 
                            {
                                "email":e.user_infos.email, 
                                "password":e.password, 
                                "pseudo":e.user_infos.pseudo
                            }, 
                            function(e){
                               auth_api.instant_login();
                            }
                        );*/
                        auth_helper.set_user();
                    }
                    //$return_datas['password'] = $datas['password'];
                    break;
                default :
                    break;
            }
        }
        //if(typeof e.family_infos !== "undefined"){
        //    window.localStorage.setItem("family_infos", JSON.stringify(e.family_infos));
        //    family_api._family = e.family_infos;
        //}
        //if(typeof e.user_infos !== "undefined"){
        //    window.localStorage.setItem("last_email", e.user_infos.email);
        //    window.localStorage.setItem("user_infos", JSON.stringify(e.user_infos));
        //    auth_api._user = e.user_infos;
        //    auth_api.set_user();
        //}
        //if(typeof e.auth_device !== "undefined"){
        //    window.localStorage.setItem("device_infos", JSON.stringify(e.auth_device));
        //    auth_api._device = e.auth_device;
        //}
        if(typeof e.title !== "undefined" && typeof e.message !== "undefined"){
            var pop = new PopUp();
            pop.open_popup(
                {
                    "title":e.title,
                    "message":e.message,
                    "buttons":[
                        {"label":"ok"}
                    ]
                }, 
                function(e, datas){delete pop;}
            );
        }
        ajax_request._callBack(e);
    },
    fail : function(error){
        //if(ajax_request._fail !== null && typeof ajax_request._fail !== "undefined"){
        //    ajax_request._fail(error);
        //}
        if(typeof ajax_request._loader !== "undefined"){
            ajax_request._loader.hide();
        }
        if(error.statusText === "timeout") {
            var pop = new PopUp();
            pop.open_popup(
                {
                    "title":app.text("WS_TIMEOUT_TITLE"),
                    "message":app.text("WS_TIMEOUT_MESSAGE"),
                    "buttons":[
                        {"label":app.text("WS_TIMEOUT_BUTTON")}
                    ]
                }, 
                function(e, datas){delete pop;}
            );
        }else{
            try{
                if(typeof error.responseText !== "undefined"){
                    var datas = JSON.parse(error.responseText);
                    if(error.status === 403){
                        if(typeof datas.title !== "undefined" && typeof datas.message !== "undefined"){
                            var pop = new PopUp();
                            pop.open_popup(
                                {
                                    "title":datas.title,
                                    "message":datas.message,
                                    "buttons":[
                                        {"label":app.text("WS_STANDARD_ERROR_BUTTON")}
                                    ]
                                }, 
                                function(e, datas){delete pop;}
                            );
                        }
                    }else{
                        if(typeof datas.title !== "undefined" && typeof datas.message !== "undefined"){
                            var pop = new PopUp();
                            pop.open_popup(
                                {
                                    "title":datas.title,
                                    "message":datas.message,
                                    "buttons":[
                                        {"label":app.text("WS_STANDARD_ERROR_BUTTON")}
                                    ]
                                }, 
                                function(e, datas){delete pop;}
                            );
                        }
                    }
                }else{
                    var pop = new PopUp();
                    pop.open_popup(
                        {
                            "title":app.text("WS_STANDARD_ERROR_TITLE"),
                            "message":app.text("WS_STANDARD_ERROR_MESSAGE"),
                            "buttons":[
                                {"color":colorer.pink, "label":app.text("WS_STANDARD_ERROR_BUTTON")}
                            ]
                        }, 
                        function(e, datas){delete pop;}
                    );
                }
                if(typeof error.redirection !== "undefined"){
                    navigation.router.navigate(e.redirection, {trigger:true, replace:true});
                }
            }catch(e){
                ajax_request._fail(error);
            }
        }
    },
    get_user_infos : function(){
        var user = null;
        var device_infos = null;
        if(window.localStorage.getItem("user_infos") !== "" && window.localStorage.getItem("user_infos") !== null){
            user = JSON.parse(window.localStorage.getItem("user_infos"));
        }else{
            return false;
        }
        if(window.localStorage.getItem("device_infos") !== "" && window.localStorage.getItem("device_infos") !== null){
            device_infos = JSON.parse(window.localStorage.getItem("device_infos"));
        }else{
            return false;
        }
        var api_user_infos = {
            "user_id":"",
            "api_token":"",
            "secret_key":"",
            "device_id":""
        }
        if(typeof user.id !== "undefined"){
            api_user_infos['user_id'] = user.id;
        }else{
            return false;
        }
        if(typeof device_infos.api_token !== "undefined"){
            api_user_infos['api_token'] = device_infos.api_token;
        }else{
            return false;
        }
        if(typeof device_infos.secret_key !== "undefined"){
            api_user_infos['secret_key'] = device_infos.secret_key;
        }else{
            return false;
        }
        if(typeof device_infos.id !== "undefined"){
            api_user_infos['device_id'] = device_infos.id;
        }else{
            return false;
        }
        return api_user_infos;
    }
}
var toast = {
    init : function(){
        if($('#app_toast').length === 0){
            $('body').append('<div id="app_toast"></div>');
            $('#app_toast').on('click', function(){
               toast.close(); 
            });
        }  
    },
    open:function(value){
        this.init();
        $('#app_toast').html(value);
        $('#app_toast').addClass('opened');
        setTimeout(function(){
            toast.close();
        },4500);
    },
    close:function(){
        $('#app_toast').removeClass('opened');
    }
}