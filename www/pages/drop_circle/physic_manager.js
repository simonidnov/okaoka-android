var _pm = null;
var physic_manager = {
    elements : {},
    Body     : null,
    Svg      : null,
    Vertices : null,
    World    : null,
    Bodies   : null,
    init : function(parent_scene){
        _pm = this;
        this.Body       = parent_scene.Body;
        this.Svg        = parent_scene.Svg;
        this.Vertices   = parent_scene.Vertices;
        this.World      = parent_scene.World;
        this.Bodies     = parent_scene.Bodies;
        this.Engine     = parent_scene.Engine;
        this.engine     = parent_scene.engine;
        this.Common     = parent_scene.Common;
        this.Composites = parent_scene.Composites;
    },
    polygon_sprite : function(label, svg_path, sprite_path, properties, fill){
        /* check minimum datas set for polygon sprite creation */
        if(typeof properties === "undefined"){
            console.log('you need to specify properties');
            return false;
        }
        if(typeof svg_path === "undefined" || svg_path === ""){
            console.log('your svg path looks wrong please check it before reload');
            return false;
        }
        if(typeof sprite_path === "undefined" || sprite_path === ""){
            console.log('your sprite path looks wrong please check it before reload');
            return false;
        }
        if(typeof properties.position === "undefined"){
            console.log('you need to specify properties position with x and y params minimum');
            return false;
        }
        if(typeof properties.position.x === "undefined" || typeof properties.position.x === "undefined")
        {
            console.log('you need to specify properties position x and y minimum');
            return false;
        }
        /* load svg path */
        $.get(svg_path).done(function(data) {
            var vertexSets = [],
                //color = _pm.Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

            if($(data).find('path').length === 0){
                console.log('your svg doesn\'t contain any path, polygons and other flags are wrong pres cmd+8 to break it in path inside illustrator or your favorite ide');
                return false;
            }
            /* SVG path to vertex conversion to make concave polygon make sure you've loaded decomp.js library */
            
            $.each($(data).find('path'), function(i, path) {
                var points = _pm.Svg.pathToVertices(path, 30);
                vertexSets.push(_pm.Vertices.scale(points, 1, 1));
            });
            /* create rigid body */
            if(typeof sprite_path !== "undefined" && sprite_path !== ""){
                _pm.elements[label] = _pm.World.add(
                    _pm.engine.world, 
                    _pm.Bodies.fromVertices(
                        properties.position.x, 
                        properties.position.y, 
                        vertexSets, {
                            render: {
                                fillStyle: fill,
                                strokeStyle: fill,
                                sprite: {
                                        texture: sprite_path
                                }
                            }
                        }, 
                        true
                    )
                );
            }else{
                _pm.elements[label] = _pm.World.add(
                    _pm.engine.world, 
                    _pm.Bodies.fromVertices(
                        properties.position.x, 
                        properties.position.y, 
                        vertexSets, {
                            render: {
                                fillStyle: color,
                                strokeStyle: color
                            }
                        }, 
                        true
                    )
                );
            }
            /*
            ,
            sprite: {
                texture: sprite_path
            }*/
        });
    },
    circle : function(label, x, y, r, static, sprite, fill){
        if(typeof sprite !== "undefined" && sprite !== ""){
            document[label] = _pm.Bodies.circle(x, y, r, { isStatic: static, fillStyle: fill});
        }else{
            document[label] = _pm.Bodies.circle(
                x, y, r, 
                {
                    isStatic  : static,
                    render    : {
                        strokeStyle: '#ffffff',
                        fillStyle : fill,
                        sprite: {
                            texture: sprite
                        }
                    }
                }
            );
        }
        this.World.add(_pm.engine.world, [document[label]]);
    },
    box : function(label, x, y, w, h, static, sprite, fill){
        if(typeof sprite !== "undefined" && sprite !== ""){
            document[label] = _pm.Bodies.rectangle(x, y, w, h, { isStatic: static});
        }else{
            document[label] = _pm.Bodies.rectangle(
                x, y, w, h, 
                { 
                    isStatic: static,
                    render: {
                        strokeStyle: '#ffffff',
                        fillStyle : fill,
                        sprite: {
                            texture: sprite
                        }
                    }
                }
            );
        }
        this.World.add(_pm.engine.world, [document[label]]);
    }
}