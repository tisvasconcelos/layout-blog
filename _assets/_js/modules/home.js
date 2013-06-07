Home = function(){
	var _this = this;
	_super = Class.extend(_this, new Core());

	_this.pageStatus = 'list';

	article = [];

	article.showText = function(){
		$('main article .part a, main article a.more, main article a.less').off().on('click', function(e){
			e.preventDefault();

			var article = $(this).parents('article');
			var full = article.find('div .full');
			var part = article.find('div .part');

			if(_this.pageStatus == 'list'){
				full.addClass('show');
				part.hide();

				$('main article').not(article).fadeOut();

				article.height('auto');
				article.find('.more').addClass('less').removeClass('more').text('Voltar').prop('title','Voltar');

				if (Modernizr.history){
					history.pushState(null, $(this).text(), $(this).prop('href'));
				}

				if(_this.elementExist(article.find('.full img'))){
					var height = article.find('.full img').height();
					article.find('.full').css({'padding-top': height+'px'});
				}

				_this.pageStatus = 'view';
			}else{
				part.fadeIn();
				full.removeClass('show');

				$('main article').fadeIn();

				article.find('.less').addClass('more').removeClass('less').text('Ver mais').prop('title','Ver mais');

				if (Modernizr.history){
					history.pushState(null, "Blog", '/');
				}

				_this.pageStatus = 'list';
			}
		});
	};

	article.adjust = function(){
		$('main article').each(function(index,element){
			if(_this.elementExist($(element).find('.part img')) && $(element).find('.part img').is(':visible')){
				var height = $(element).find('img').height();
				$(element).height(height);
			}
		});

		article.highlights();
	};

	article.highlights = function(){
		$('main article').each(function(index,element){
			$(element).prop('class',_this.elementIsVisible(element));
		});
	};

	article.load = function(){
		if(_this.pageStatus == 'list' && (_this.elementIsVisible('footer') == "fully" || _this.elementIsVisible('footer') == "partially")){
			$.ajax({
				method: 'GET',
				url: '/articles/',
				beforeSend: function(){
					$('footer .loading').addClass('show');
				},
				success: function(response){
					article.showText();
				},
				complete: function(){
					$('footer .loading').removeClass('show');
				}
			});
		}
	};

	_this.init = function(){
		article.adjust();
		article.showText();
		article.load();

		window.onscroll = function(){
			article.highlights();
			article.adjust();
			article.load();
		};

		window.onresize = function(){
			article.highlights();
			article.adjust();
			article.load();
		};
	}();

};