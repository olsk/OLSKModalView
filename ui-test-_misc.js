const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKModalView_Misc', function () {	

	const OLSKModalViewTitleText = Math.random().toString();

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKModalViewTitleText,
		});
	});
	
	before(function () {
		return browser.pressButton('#TestShowButton');
	});

	describe('OLSKModalView', function test_OLSKModalView () {

		it('binds OLSKModalViewContent', function () {
			browser.assert.text('.OLSKStandardViewBody', 'TestOLSKModalViewContent');
		});

	});

	describe('OLSKModalViewTitle', function test_OLSKModalViewTitle () {

		it('binds OLSKModalViewTitleText', function () {
			browser.assert.text(OLSKModalViewTitle, OLSKModalViewTitleText);
		});

	});

	describe('OLSKModalViewCloseButton', function test_OLSKModalViewCloseButton () {

		it('sets data-micromodal-close', function () {
			browser.assert.attribute(OLSKModalViewCloseButton, 'data-micromodal-close', '');
		});
		
		it('binds OLSKModalViewCloseButton', function () {
			browser.assert.text('.OLSKStandardViewBody', 'TestOLSKModalViewContent');
		});

	});
	
});
