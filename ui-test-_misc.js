const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKModalView_Misc', function () {	

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	before(function () {
		return browser.pressButton('#TestShowButton');
	});

	describe('OLSKModalViewContent', function test_OLSKModalViewContent () {
		
		it('binds OLSKModalViewContent', function () {
			browser.assert.text('.OLSKStandardViewBody', 'TestOLSKModalViewContent');
		});

	});
	
});
