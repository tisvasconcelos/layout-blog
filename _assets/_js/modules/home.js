Home = function(){
	var _this = this;
	_super = Class.extend(_this, new Core());

	_this.pageStatus = 'list';

	article = [];

	article.showText = function(){
		$('main article').find('h3 a, a.more, a.less').off().on('click', function(e){
			e.preventDefault();

			var article = $(this).parents('article');

			if(!article.hasClass('disabled')){
				if(_this.pageStatus == 'list'){
					$('body').addClass('disabled');
					$('main article').not(article).addClass('disabled');

					_this.scrollDocumentTo(article);

					article.find('.text .ellipsis').hide();
					article.find('.text .full').show();

					article.find('.more').addClass('less').removeClass('more').text('Voltar').prop('title','Voltar');

					if (Modernizr.history){
						history.pushState(null, $(this).text(), $(this).prop('href'));
					}

					_this.pageStatus = 'view';
				}else{
					$('body').removeClass('disabled');
					$('main article').removeClass('disabled');

					article.find('.text .ellipsis').show();
					article.find('.text .full').hide();

					article.find('.less').addClass('more').removeClass('less').text('Ver mais').prop('title','Ver mais');

					if (Modernizr.history){
						history.pushState(null, "Blog", '/');
					}

					_this.pageStatus = 'list';
				}
			}
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
		article.showText();
		article.load();

		window.onscroll = function(){
			article.load();
		};

		window.onresize = function(){
			article.load();
		};
	}();

};