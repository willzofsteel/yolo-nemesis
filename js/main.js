require.config({
	paths: {
		'jquery' : 'libs/jquery/jquery-1.7.2.min'
		, 'underscore' : 'libs/backbone/underscore'
		, 'backbone' : 'libs/backbone/backbone'
		, 'spinner' : 'libs/spinjs/spin'
		, 'mustache' : 'libs/mustache/mustache'
		, 'jasmine' : 'libs/jasmine/jasmine'
		, 'jasminehtml' : 'libs/jasmine/jasmine-html'
	}
})

require([
	'domReady'
	, 'app'
	]
	, function(domReady, application){
		domReady(function(){
			application.initialize();
		});
	});