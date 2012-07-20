define(['underscore', 'backbone', 'spinner'], function() {
   
    var testView = Backbone.View.extend({
    	el: $("#spin-target")

    	, initialize: function(){
    		_.bindAll(this, "render");
    		this.render();
    	}

    	, render: function(){
    		var opts = {
			  lines: 16, // The number of lines to draw
			  length: 4, // The length of each line
			  width: 3, // The line thickness
			  radius: 10, // The radius of the inner circle
			  rotate: 0, // The rotation offset
			  color: '#abc', // #rgb or #rrggbb
			  speed: 1, // Rounds per second
			  trail: 60, // Afterglow percentage
			  shadow: false, // Whether to render a shadow
			  hwaccel: false, // Whether to use hardware acceleration
			  className: 'spinner', // The CSS class to assign to the spinner
			  zIndex: 29, // The z-index (defaults to 2000000000)
			  top: 'auto', // Top position relative to parent in px
			  left: 'auto' // Left position relative to parent in px
			};

			var target = this.el;
			var spinner = new Spinner(opts).spin(target);
    	}
    });
   
    return testView; 
});