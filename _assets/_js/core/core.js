Class = function(){
    this.extend = function(){
        var child = arguments[0],
            extend = arguments[1];

        for(method in extend){
            child[method] = extend[method];
        }

        return extend;
    };
};
var Class = new Class();

Core = function(){
	var _this = this;

	//public
	_this.elementIsVisible = function(element){
        var pos = $(element).offset(),
            wX = $(window).scrollLeft(), wY = $(window).scrollTop(),
            wH = $(window).height(), wW = $(window).width(),
            oH = $(element).outerHeight(), oW = $(element).outerWidth();

        // check the edges
        // left, top and right, bottom are in the viewport
        if (pos.left >= wX && pos.top >= wY && oW + pos.left <= wX + wW && oH + pos.top <= wY + wH )
        	return 'fully';
        else // partially visible
        if (((pos.left <= wX && pos.left + oW > wX) || (pos.left >= wX && pos.left <= wX + wW)) && ((pos.top <= wY && pos.top + oH > wY) || (pos.top  >= wY && pos.top  <= wY + wH)))
        	return 'partially';
        else // not visible 
        	return 'not';
	};

    //public
	_this.elementExist = function(element){
		return ($(element).length > 0) ? true : false;
	};

    //public
    _this.scrollDocumentTo = function(to){
        if(to){
            try{
                //tenta realizar scrooll até  a posição do elemento
                var targetOffset = $(to).offset().top;
            }catch(e){
                //tenta usar o elemento como posição (caso venha um numero)
                var targetOffset = to;
            }
        }else{
            //nao veio elemento volta para o comeco da pagina
            var targetOffset = 0;
        }
        $('html,body').animate({scrollTop: targetOffset}, 1000);
    }

	//private
	loadDependencies = function(){
		Modernizr.load({
            test: window.jQuery,
            nope: '_assets/_js/vendor/jquery.min.js'
        });
	};

	//private
	init = function(){
		loadDependencies();
	}();

};