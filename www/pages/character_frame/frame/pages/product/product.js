function product_page(){
    this._datas = null;
    this.products_infos = {};
}
product_page.prototype.init = function(){
    var _self = this;
    if(typeof app._page_request.id === "undefined"){
        console.log('l\'id du produit n\'a pas été renseigné');
        return;
    }
    ajax_request.get(
        "/nse/character",
        {
            "limit":1,
            "id":app._page_request.id
        },
        function(success){
            _self._datas = success.result[0];
            _self._datas.datas = JSON.parse(_self._datas.datas);
            //_self._datas.datas = JSON.parse(_self._datas.datas);
            _self.create_product();
        },
        function(fail){
            alert('erreur lors de la recherche');
        }
    );
}
product_page.prototype.create_product = function(){
    this.products_infos = {
        datas : this._datas,
        products : [
            {
                "price":"14,99",
                "devise":"€",
                "base_ref":"TSB",
                "label":"t-shirt garçon", 
                "preview":"pages/product/images/ts_app/73110_805_HS_thumb.png",
                "desciption":"un t-shirt test pour garçon",
                "colors":[
                    {
                        "base_ref":"W",
                        "label":"Blanc", 
                        "code":"#FFFFFF",
                        "sizes":[
                            {
                                "label":"2A", 
                                "description":"2 ans",
                                "stock":"0"
                            },
                            {
                                "label":"3A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"4A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"5A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"6A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"8A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"10A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"12A", 
                                "description":"2 ans",
                                "stock":"10"
                            }
                        ]
                    },
                    {
                        "base_ref":"B",
                        "label":"Noir", 
                        "code":"#000000",
                        "sizes":[
                            {
                                "label":"2A", 
                                "description":"2 ans",
                                "stock":"0"
                            },
                            {
                                "label":"3A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"4A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"5A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"6A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"8A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"10A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"12A", 
                                "description":"2 ans",
                                "stock":"10"
                            }
                        ]
                    }
                ]
            },
            {
                "price":"14,99",
                "devise":"€",
                "base_ref":"TSG",
                "label":"t-shirt fille", 
                "preview":"pages/product/images/ts_app/73110_805_HS_thumb.png",
                "desciption":"un t-shirt test pour fille",
                "colors":[
                    {
                        "base_ref":"W",
                        "label":"Blanc", 
                        "code":"#FFFFFF",
                        "sizes":[
                            {
                                "label":"2A", 
                                "description":"2 ans",
                                "stock":"0"
                            },
                            {
                                "label":"3A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"4A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"5A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"6A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"8A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"10A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"12A", 
                                "description":"2 ans",
                                "stock":"10"
                            }
                        ]
                    },
                    {
                        "base_ref":"B",
                        "label":"Noir", 
                        "code":"#000000",
                        "sizes":[
                            {
                                "label":"2A", 
                                "description":"2 ans",
                                "stock":"0"
                            },
                            {
                                "label":"3A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"4A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"5A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"6A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"8A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"10A", 
                                "description":"2 ans",
                                "stock":"10"
                            },
                            {
                                "label":"12A", 
                                "description":"2 ans",
                                "stock":"10"
                            }
                        ]
                    }
                ]
            }
        ]
    }
    
    $('#product_details').css('background-color', this._datas.datas.bkcolor);
    var _temp = _.template($('#product_template').html());
    $('#product_details').append(_temp(this.products_infos));
    
    this.scroll = new IScroll('#product_detail_scroll_wrapper', {
        disableMouse: false,
        probeType:1,
        scrollbars:false,
        interactiveScrollbars:false,
        fadeScrollbars:false,
        mouseWheel:true,
        click:true,
        tap:true, 
        keyBindings:true,
        deceleration:0.1
    });
}
product_page.prototype.play = function(){
    
}
product_page.prototype.pause = function(){
    
}
product_page.prototype.update = function(){
    
}
product_page.prototype.refresh = function(datas){
    
}
product_page.prototype.destroy = function(callBack){
    var _self = this;
    callBack();
}