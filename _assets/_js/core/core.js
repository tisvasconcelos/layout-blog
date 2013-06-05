Object.prototype.extend = function(){
	var arg = arguments[0];

	for(method in arg){
		this[method] = arg[method];
	}

	return arg;
};

Core = function(){

	//private
	loadDependencies = function(){
		Modernizr.load({
            test: window.jQuery,
            nope: 'js/vendor/jquery.min.js'
        });
	};

	//public
	this.test = function(co){
		console.log(co);
	};

	this.error = [];
	//public
	this.error.show = function(){
		console.error('Erro custom');
	};

	//private
	init = function(){
		loadDependencies();
	}();

};