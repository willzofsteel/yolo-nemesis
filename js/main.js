require.config({
	paths: {
		'jquery' : 'libs/jquery/jquery-1.7.2.min'
		, 'underscore' : 'libs/backbone/underscore'
		, 'backbone' : 'libs/backbone/backbone'
		, 'spinner' : 'libs/spinjs/spin'
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