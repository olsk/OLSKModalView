const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKModalView_Shortcuts', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	context('Escape', function () {

		before(function () {
			return browser.pressButton('#TestOLSKModalViewShow');
		});

		before(function () {
			return browser.OLSKFireKeyboardEvent(browser.window, 'Escape');
		});

		it('hides OLSKModalView', function () {
			return browser.assert.elements(OLSKModalView, 0);
		});
	
	});

});
