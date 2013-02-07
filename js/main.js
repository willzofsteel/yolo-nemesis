require.config({
	baseUrl: 'js/'

	, paths: {
		'jquery' : 'libs/jquery/jquery-1.7.2.min'
		, 'underscore' : 'libs/backbone/underscore'
		, 'backbone' : 'libs/backbone/backbone'
		, 'spinner' : 'libs/spinjs/spin'
		, 'handlebars' : 'libs/handlebars/handlebars'
		, 'jasmine' : 'libs/jasmine/jasmine'
		, 'jasminehtml' : 'libs/jasmine/jasmine-html'
		, 'templates': '../templates'
	}


	, shim: {
		'backbone' : ['underscore', 'jquery']
		, 'jasminehtml' : ['jasmine']
		, 'app' : ['backbone', 'jasmine', 'handlebars', 'spinner']
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