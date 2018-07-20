var stage, color, oldMidX, gravure, oldMidY, oldX, oldY, startX, startY, txt, currentShape, decoupe, isMouseDown, size, _draw = null;
var deleted_story = {"decoupes":[], "gravures":[]};
function draw(){
    _draw = this;
    this.stage = null;
    console.log('create new page script : ', app.page_properties);
    console.log('create new page _page_request : ', app._page_request);
    if(typeof app._page_request.id !== "undefined"){
        var content = JSON.parse(window.localStorage.getItem('containers'))[app._page_request.id];
        console.log('content ::: ', content);
    }
}
draw.prototype.init = function(){
    size = $('.draw li.active').attr('data-size');
    colorer = $('.draw li.active').attr('data-color');
    type = $('.draw li.active').attr('data-type');
    $('#drawing_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#drawing_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
}
draw.prototype.transition_end = function(){
    console.log('transition_end');
    $('#drawing_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#drawing_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
    $('.brushes').css('display', 'block');
    $('.prev_next_clear').css('display', 'table');
    this.init_listeners();
    this.init_drawing();
}
draw.prototype.init_listeners = function(){
    $('.draw li').on('click', function(e){
        switch($(this).attr('data-type')){
            case 'brush':
                $('.brushes li.active').removeClass('active');
                $(this).addClass('active');
                size = $(this).attr('data-size');
                colorer = $(this).attr('data-color');
                type = $('.draw li.active').attr('data-type');
                break;
            case 'gomme':
                $('.brushes li.active').removeClass('active');
                $(this).addClass('active');
                size = $(this).attr('data-size');
                colorer = $(this).attr('data-color');
                type = $('.draw li.active').attr('data-type');
                break;
            case 'cancel':
                if(type === "cutter"){
                    deleted_story.decoupes.push(decoupe.getChildAt(decoupe.getNumChildren()-1));
                    decoupe.removeChildAt(decoupe.getNumChildren()-1);
                    _draw.stage.update();
                }else{
                    deleted_story.gravures.push(gravure.getChildAt(gravure.getNumChildren()-1));
                    gravure.removeChildAt(gravure.getNumChildren()-1);
                    _draw.stage.update();
                }
                break;
            case 'redraw':
                if(type === "cutter"){
                    if(deleted_story.decoupes.length > 0){
                        decoupe.addChild(deleted_story.decoupes[deleted_story.decoupes.length-1]);
                        deleted_story.decoupes.pop();
                    }
                }else{
                    if(deleted_story.gravures.length > 0){
                        gravure.addChild(deleted_story.gravures[deleted_story.gravures.length-1]);
                        deleted_story.gravures.pop();
                    }
                }
                _draw.stage.update();
                break;
            case 'cutter':
                $('.brushes li.active').removeClass('active');
                $(this).addClass('active');
                size = $(this).attr('data-size');
                colorer = $(this).attr('data-color');
                type = $('.draw li.active').attr('data-type');
                break;
            case 'clear':
                deleted_story = {"decoupes":[], "gravures":[]};
                gravure.removeAllChildren();
                decoupe.removeAllChildren();
                _draw.stage.update();
                break;
            case 'svg':
                _draw.convert_to_svg();
                break;
        }
    });
}
draw.prototype.init_drawing = function(){
    //txt = new createjs.Text("Click and Drag to Draw", "36px Arial", "#777777");
    //txt.x = 300;
    //txt.y = 200;
    _draw.stage = new createjs.Stage("drawing_canvas");
    _draw.stage.autoClear = true;
    
    gravure = new createjs.Container();
    gravure.name = "gravure";
    _draw.stage.addChild(gravure);
    
    
    decoupe = new createjs.Container();
    decoupe.name = "decoupe";
    _draw.stage.addChild(decoupe);
    
    //var s = new createjs.Shape();
    //var g = s.graphics;
    //_draw.stage.addChild(s);
    //cutterShape = s;
    
    gravure.mask = decoupe;
    /*stage.onMouseDown = handleMouseDown;
    stage.onMouseUp = handleMouseUp;*/
    _draw.stage.on("stagemousedown", _draw.handleMouseDown);
    _draw.stage.on("stagemouseup", _draw.handleMouseUp);
    createjs.Touch.enable(_draw.stage);
    //stage.addChild(txt);
    _draw.stage.update();
    createjs.Ticker.addEventListener("tick", _draw.tick);
}
draw.prototype.play = function(){
    createjs.Ticker.addEventListener("tick", _draw.tick);
}
draw.prototype.pause = function(){
    createjs.Ticker.removeListener(window);
}
draw.prototype.update = function(){
    
}
draw.prototype.tick = function() {
    if (_draw.isMouseDown) {
        if(type !== "cutter"){
            currentShape.graphics.setStrokeStyle(size, 'round');
            if(colorer.indexOf('#') !== -1){
                currentShape.graphics.beginStroke(colorer);   
                //currentShape.graphics.beginFill(colorer);   
            }else{
                if(colorer.indexOf('#') !== -1){
                    var color = createjs.Graphics.getRGB((parseInt(colorer)),(parseInt(colorer)),(parseInt(colorer)));        
                    currentShape.graphics.beginStroke(color);   
                }else{
                    var color = createjs.Graphics.getRGB((parseInt(colorer)),(parseInt(colorer)),(parseInt(colorer))); 
                    currentShape.graphics.beginStroke(color);   
                }    
            }
            var pt = new createjs.Point(_draw.stage.mouseX, _draw.stage.mouseY);
            var midPoint = new createjs.Point(oldX + pt.x>>1, oldY+pt.y>>1);
            
            currentShape.graphics.lineTo(midPoint.x, midPoint.y);
            currentShape.graphics.curveTo(oldX, oldY, oldMidX, oldMidY);

            oldX = pt.x;
            oldY = pt.y;

            oldMidX = midPoint.x;
            oldMidY = midPoint.y;
        }else{
            var pt = new createjs.Point(_draw.stage.mouseX, _draw.stage.mouseY);
            var midPoint = new createjs.Point(oldX + pt.x>>1, oldY+pt.y>>1);
            //currentShape.graphics.curveTo(_draw.stage.mouseX, _draw.stage.mouseY);
            currentShape.graphics.lineTo(_draw.stage.mouseX, _draw.stage.mouseY);
            //currentShape.graphics.bezierCurveTo(oldX, oldY, oldMidX, oldMidY);
            //currentShape.graphics.quadraticCurveTo(midPoint.x, midPoint.y, oldX, oldY);
            oldX = pt.x;
            oldY = pt.y;
            oldMidX = midPoint.x;
            oldMidY = midPoint.y;
            //currentShape.graphics.curveTo(_draw.stage.mouseX, _draw.stage.mouseY, oldMidX, oldMidY);
        }

        _draw.stage.update();
    }
}
draw.prototype.handleMouseDown = function() {
    startX = _draw.stage.mouseX;
    startY = _draw.stage.mouseY;
    oldX = _draw.stage.mouseX;
    oldY = _draw.stage.mouseY;
    oldMidX = _draw.stage.mouseX;
    oldMidY = _draw.stage.mouseY;
    _draw.isMouseDown = true;
    if(type !== "cutter"){
        var s = new createjs.Shape();
        var g = s.graphics;

        var thickness = Math.random() * 30 + 10 | 0;
        g.setStrokeStyle(size, 'round');
        var r = Math.random()*255 | 0;
        var g2 = Math.random()*255 | 0;
        var b = Math.random()*255 | 0;
        
        var color = createjs.Graphics.getRGB((parseInt(colorer)),(parseInt(colorer)),(parseInt(colorer)));
        g.beginStroke(color);
        gravure.addChild(s);
        currentShape = s;
    }else{
        decoupe.removeAllChildren();
        //currentShape = cutterShape;
        //currentShape.graphics.setStrokeStyle(size, 'round');
        //currentShape.graphics.beginStroke(colorer);
        
        var s = new createjs.Shape();
        var g = s.graphics;

        var thickness = Math.random() * 30 + 10 | 0;
        g.setStrokeStyle(size, 'round');
        g.beginStroke(colorer);
        decoupe.addChild(s);
        currentShape = s;
    }
    currentShape.graphics.moveTo(startX, startY);
}
draw.prototype.handleMouseUp = function() {
    if(type === "cutter"){
        //var pt = new createjs.Point(startX, startY);
        //var midPoint = new createjs.Point(startX + pt.x>>1, startX+pt.y>>1);
        //console.log('close shape cutter startX :: ', startX, ' startY ', startY);
        //currentShape.graphics.beginStroke(colorer);  
        //currentShape.graphics.setStrokeStyle(size, 'round');
        //currentShape.graphics.moveTo(oldX, oldY);
        //currentShape.graphics.lineTo(startX, startX);
        
        
        //var pt = new createjs.Point(_draw.stage.mouseX, _draw.stage.mouseY);
        //var midPoint = new createjs.Point(startX + pt.x>>1, startY+pt.y>>1);
        //currentShape.graphics.setStrokeStyle(size, 'round');
        //if(colorer.indexOf('#') !== -1){
        //    currentShape.graphics.beginStroke(colorer);   
        //}else{
        //    if(colorer.indexOf('#') !== -1){
        //        var color = createjs.Graphics.getRGB((parseInt(colorer)),(parseInt(colorer)),(parseInt(colorer)));        
        //        currentShape.graphics.beginStroke(color);   
        //    }else{
        //        var color = createjs.Graphics.getRGB((parseInt(colorer)),(parseInt(colorer)),(parseInt(colorer))); 
        //        currentShape.graphics.beginStroke(color);   
        //    }    
        //}
        //
        //currentShape.graphics.lineTo(oldX, oldY);
        //currentShape.graphics.curveTo(startX, startY, startX, startY);
        
        //currentShape.graphics.lineTo(startX, startY);
        currentShape.graphics.closePath();
        //currentShape.graphics.curveTo(startX, startY, midPoint.x, midPoint.y);
    }
    for(var i=0; i<decoupe.getNumChildren(); i++){
        gravure.mask = decoupe.getChildAt(i);
    }
    _draw.stage.update();
    _draw.isMouseDown = false;
}
draw.prototype.refresh = function(datas){
    
}
draw.prototype.convert_to_svg = function(){
    this.draw_cotent = new createjs.Container();
    this.stage.addChild(this.draw_cotent);
    this.draw_cotent.addChild(gravure);
    this.draw_cotent.addChild(decoupe);
    gravure.x = 0;
    gravure.y = 0;
    decoupe.x = 0;
    decoupe.y = 0;
    
    var exporter = new SVGExporter(this.draw_cotent, false, false, false);
	var t = new Date().getTime();
	exporter.run();
	console.log("exporter.svg " , exporter.svg);
    $('.draw').append('<div id="svg" style="width:'+window.innerWidth+'px; height:'+window.innerHeight+'px;"></div>');
    $('#svg').append(exporter.svg);
    var svg1 = document.getElementById('container');
    //var transform = _element.transform.baseVal.getItem(0);
    //var mat = svg1.matrix;   
    //mat = mat.translate( 0, 0 );  
    //transform.setMatrix( mat );
    var bBox = svg1.getBBox();
    var infos = {x:bBox.x,y:bBox.y,w:bBox.width,h:bBox.height};
    
    var container = $('#container').attr('transform','translate(0 0)');
    var svg_content = document.getElementById('svg');
    
    console.log(infos);
    
    var svg_string = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="'+infos.width+'" height="'+infos.height+'">';
        svg_string+= svg_content.innerHtml;
        svg_string+= '</svg>';
    $('#svg').html(svg_string);
    //statusEl.innerHTML = "Export took: "+(new Date().getTime() - t)+"ms ";
	setTimeout(addDownload, 1); // for some reason, it takes a tick for the browser to init the SVG
	
    function addDownload() {
		var serializer = new XMLSerializer();
		var svgStr = serializer.serializeToString(exporter.svg);
		//var link = document.createElement("a");
		//link.innerText = "SAVE SVG TO FILE";
		//link.download = "export.svg";
		//link.href = "data:image/svg+xml,\n"+encodeURIComponent(svgStr);
        
        var content = JSON.parse(window.localStorage.getItem('containers'));
        content[app._page_request.id].path = "data:image/svg+xml,\n"+encodeURIComponent(svgStr);
        window.localStorage.setItem('containers', JSON.stringify(content));
        app._router.navigate(
            'page/free/', 
            {trigger:true, replace:false}
        );
        //window.location.href = link.href;
		//statusEl.appendChild(link);
	}
}
draw.prototype.resize = function(datas){
    $('#drawing_canvas').css({"width":window.innerWidth, "height":window.innerHeight});
    $('#drawing_canvas').attr({"width":window.innerWidth, "height":window.innerHeight});
}
draw.prototype.destroy = function(callBack){
    callBack();
}