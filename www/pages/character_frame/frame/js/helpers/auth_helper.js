var auth_helper = {
    user_infos : {gamecenter:{}, user:null},
    app_component : "com.idkids.challenger",
    init:function(){
        
    },
    gamecenter : function(){
        gamecenter.auth(this.gamecenter_success, this.gamecenter_fail);    
    },
    gamecenter_success : function(user){
        console.log('success');
        var _self = this;
        auth_helper.user_infos.gamecenter = user;
        var user_datas = window.localStorage.getItem('user');
        if(user_datas !== "" && user_datas !== null && typeof user_datas !== "undefined"){
            auth_helper.user_infos.user = JSON.parse(user_datas);
        }else{
            ajax_request.post(
                "/nse/login",
                {},
                function(success){
                    window.localStorage.setItem('user', JSON.stringify(success.user));
                    auth_helper.user_infos.user = success.user;
                },
                function(fail){
                    alert('erreur lors de la recherche');
                }
            );   
        }
    },
    gamecenter_fail : function(error){
        console.log('fail');
        console.log("gamecenter error : ", error);
        window.localStorage.setItem('user', JSON.stringify({"id":"1", "pseudo":"jeanguymze", "gamecenter":"G:1067743784"}));
        auth_helper.set_user();
    },
    gamecenter_avatar_get : function(){
        gamecenter.getPlayerImage(this.gamecenter_avatar_success, this.gamecenter_fail);
    },
    gamecenter_avatar_success : function(url){
        console.log("gamecenter avatar : ", url);
    },
    set_user : function(){
        var user_datas = window.localStorage.getItem('user');
        if(user_datas !== "" && user_datas !== null && typeof user_datas !== "undefined"){
            auth_helper.user_infos.user = JSON.parse(user_datas);
        }
    },
    is_logged : function(){
        if(typeof auth_helper.user_infos.user.id !== "undefined"){
            return true;
        }else{
            return false;
        }
    }
}