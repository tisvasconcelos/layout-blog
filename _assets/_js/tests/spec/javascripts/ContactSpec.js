describe("Contact", function(){
	var core;

	beforeEach(function(){
		Modernizr = {load: function(){}};

		core = new Core();
		contact = new Contact();
	});

	it("should be able to get typeof contact", function(){
		expect(typeof contact).toBe("object");
	});

});