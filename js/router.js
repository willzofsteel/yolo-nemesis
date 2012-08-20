define([
    'underscore'
    , 'backbone'
    , 'views/testView'
    , 'jasmineSpecRunner'
], function(_, Backbone, TestView, SpecRunner) {
   
    var router = Backbone.Router.extend({

    	routes : {
    		"" : "index"
            , "test" : "test"
    	}

    	, index: function(){
    		var testView = new TestView();    		
    	}

    	, test: function(){
            SpecRunner.execute();
    	}

    });
   
    return router; 
});