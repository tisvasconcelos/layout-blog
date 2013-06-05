describe("Core", function(){
	var core;

	beforeEach(function(){
		//Modernizr = {load: function(){}};

		core = new Core();
	});

	it("should be able to get typeof core", function(){
		expect(typeof core).toBe("object");
	});

});