define(['jasmine'], function(){
	var run = function() {
		describe("Jenkins CI Test", function() {
		  describe("When testing", function() {
		    it("should do something", function() {
		      expect(true).toBe(true);
		    });

		    it("should do something else", function(){
		    	expect("something").toEqual("something else");
		    })
		  });
		});	
	}

	var SimpleTest = { run: run};

	return SimpleTest;
	
});