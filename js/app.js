define(['router'], function(Approuter) {

        var App = {
            router : new Approuter()
            , views : []
            , models : []
            , initialize : function(){
               Backbone.history.start();                
            }
        }

    return App; 
});