define(['router'], function(Approuter) {

        var App = {

            router : new Approuter()

            , initialize : function(){
               		Backbone.history.start();                
            	}
        }

    return App; 
});