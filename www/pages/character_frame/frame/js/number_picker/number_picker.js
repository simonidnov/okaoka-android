function number_picker(name, target, position, callBack){
    var self = this;
    this._name = name;
    this._target = target;
    this._position = position;
    this._callBack = callBack;
    $( ".app .screen:last-child" ).append('<div id="content_loader"></div>');
    $('#content_loader').load(
        "js/number_picker/number_picker.html", 
        function() {
            self.init();
        }
    );
}
number_picker.prototype.init = function(){
    var self = this;
    var temp = _.template($('#number_picker_template').html());
    this._target.append(temp({}));
    $('#add_number').on('click', function(){
        $('#result_number').html(parseInt($('#result_number').html())+1);
        self._callBack(parseInt($('#result_number').html()));
    });
    $('#remove_number').on('click', function(){
        var num = parseInt($('#result_number').html())-1;
        if(num < 0){
            num = 0;
        }
        $('#result_number').html(num);
        self._callBack(num);
    });
}
number_picker.prototype.destroy = function(){
    TweenMax.to($('#my_number_picker'), .5, {opacity:0, onComplete:function(){
        $('#my_number_picker').remove();
    }});
}