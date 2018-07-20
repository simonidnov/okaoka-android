var characters_helper = {
    init:function(){
        
    },
    get_user_characters : function(callBack, force){
        var char = window.localStorage.getItem('user_characters');
        if(char !== "" && char !== null && typeof char !== "undefined" && force === false){
            parse_char = JSON.parse(char);
            for(var i=0; i<parse_char.length; i++){
                parse_char[i].parsed_datas = JSON.parse(parse_char[i].datas);
            }
            $('#nav_button_2').css('background-color', parse_char[0].parsed_datas.bkcolor);
            $('#nav_button_2 img').attr('src', encodeURI(app.pix_to_uri(parse_char[0].base64, "thumb")));
            callBack(parse_char);
        }else{
            ajax_request.get(
                "/nse/usercharacters",
                {
                    "limit":15,
                    "no-datas":false,
                    "user_id":auth_helper.user_infos.user.id
                },
                function(success){
                    for(var i=0; i<success.characters.length; i++){
                        success.characters[i].parsed_datas = JSON.parse(success.characters[i].datas);
                    }
                    $('#nav_button_2').css('background-color', success.characters[0].parsed_datas.bkcolor);
                    $('#nav_button_2 img').attr('src', encodeURI(app.pix_to_uri(success.characters[0].base64, "thumb")));
                    window.localStorage.setItem('user_characters', JSON.stringify(success.characters));
                    callBack(success.characters);
                },
                function(fail){
                    alert('erreur lors de la recherche');
                }
            );    
        } 
    },
    get_game_characters : function(callBack, force){
        var char = window.localStorage.getItem('game_characters');
        if(char !== "" && char !== null && typeof char !== "undefined" && force === false){
            parse_char = JSON.parse(char);
            for(var i=0; i<parse_char.length; i++){
                parse_char[i].parsed_datas = JSON.parse(parse_char[i].datas);
            }
            callBack(parse_char);
        }else{
            ajax_request.get(
                "/nse/character_game",
                {},
                function(success){
                    for(var i=0; i<success.characters.length; i++){
                        success.characters[i].parsed_datas = JSON.parse(success.characters[i].datas);
                    }
                    window.localStorage.setItem('game_characters', JSON.stringify(success.characters));
                    callBack(success.characters);
                },
                function(fail){
                    alert('erreur lors de la recherche');
                }
            );    
        } 
    },
    get_characters_with_params : function(params, callback, force){
        //get_user_characters
        var _self = this;
        ajax_request.get(
            "/nse/character",
            params,
            function(success){
                for(var i=0; i<success.result.length; i++){
                    if(typeof success.result[i].datas !== "undefined"){
                        success.result[i].parsed_datas = JSON.parse(success.result[i].datas);
                    }
                }
                callback(success.result);
            },
            function(fail){
                console.log('erreur lors de la recherche');
            }
        );
    }
}