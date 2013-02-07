define([], function(){
	
	var SpecRunner = {};

	SpecRunner.execute = function(reporter){
		require(['jasmine'
				, 'jasminehtml'
				, 'tests/simpleTest'			
				], function(){

				var specs = Array.prototype.slice.call(arguments, 2);

				for(var i = 0; i < specs.length; i++){
					specs[i].run();
				}

				jasmine.getEnv().addReporter(new jasmine.HtmlReporter());
                jasmine.getEnv().execute();

				var $HtmlReporter = $('#HTMLReporter');
				if ($HtmlReporter.length) {
                        $HtmlReporter
                            .find('.banner')
                            .prepend($('<a id="JasmineReporterCloseBtn" href="javascript:void(0)" title="Close tests results">x</a>')
                                .click(function() {
                                    $('#HTMLReporter').remove();
                                })
                            );
                }
		});
		
	}

	return SpecRunner;
			
});


