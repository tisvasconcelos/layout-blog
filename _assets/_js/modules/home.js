Home = function(){
	var _this = this;
	_super = Class.extend(_this, new Core());

	article = [];

	article.adjust = function(){
		$('main article').each(function(index,element){
			if(_this.elementExist($(element).find('img'))){
				var height = ($(element).find('img').height()); //20 é o total de padding top e bottom do element
				$(element).height(height);
			}
		});

		article.highlights();
	};

	article.highlights = function(){
		$('main article').each(function(index,element){
			$(element).prop('class',_this.elementIsVisible(element));
		});

		$('main article.partially:first').addClass('first');
	};

	_this.init = function(){
		article.adjust();

		window.onscroll = function(){
			article.highlights();
			article.adjust();
		};

		window.onresize = function(){
			article.highlights();
			article.adjust();
		};
	}();

};