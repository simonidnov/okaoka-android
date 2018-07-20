var parental_control = {
    _target : null,
    first_number : 1,
    second_number : 1,
    init : function(target){
        this.first_number = Math.ceil(Math.random()*10);
        this.second_number = Math.ceil(Math.random()*10);
        this._target = target;
        var template = '<div class="parental_control">';
            template+= '<div class="parental_illus"><img src="images/assets/nav/nav_buttons_parental_control_illus_white.svg"/></div>';
            template+= '<div class="parental_title">Accès limité aux parents</div>';
            template+= '<div class="question_label">Combien font ?</div>';
            template+= '<div class="equation">'+this.first_number+' x '+this.second_number+'</div>';
            template+= '<div class="form_input"><input type="number" id="parental_response" placeholder="votre réponse"/></div>';
            template+= '<div class="line btn" id="parental_validation">Valider</div>';
            template+= '<div class="line" id="error_message" style="display:none;">Mauvaise Réponse</div>';
            template+= '<div class="line hyperlink" id="back_home">Retour à l\'accueil</div>';
            template+= '</div>';
        this._target.append(template);
        $('#parental_validation').off('click').on('click', function(){
            _UI.displayTouch($(this));
            var resp = parseInt($('#parental_response').val());
            if(resp === parental_control.first_number*parental_control.second_number){
                parental_control.success();
            }else{
                $('.parental_control #error_message').css('display', 'block');
                $('#parental_validation').off('click');
                $('#parental_validation').css('display', 'none');
            }
        });
        $('#back_home').off('click').on('click', function(){
            _UI.displayTouch($(this));
            app._router.navigate("page/home", {trigger:true, replace:false});
        });
        TweenLite.set($('.parental_control'), {y:window.innerHeight});
        TweenLite.to($('.parental_control'), .5, {y:0, ease:Power4.easeOut});
    },
    success : function(){
        TweenLite.to($('.parental_control'), .5, {y:window.innerHeight, ease:Power4.easeIn, onComplete:function(){
            parental_control.destroy();
        }});
    },
    fail : function(){
        $('#error_message').css('display', 'block');
    },
    destroy : function(){
        $('#parental_validation').off('click');
        $('#back_home').off('click');
        $('.parental_control').remove();
    }
}