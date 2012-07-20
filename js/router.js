define(['underscore', 'backbone', 'views/testView'], function(_, Backbone, TestView) {
   
    var router = Backbone.Router.extend({

    	routes : {
    		"" : "index"
    	},

    	index: function(){
    		var testView = new TestView();    		
    	}

    });
   
    return router; 
});