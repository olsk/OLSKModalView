const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKModalView: '.OLSKModalView',
	
	OLSKModalViewTitle: '.OLSKModalViewTitle',
	
	OLSKModalViewCloseButton: '.OLSKModalViewCloseButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKModalView_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('hides OLSKModalView', function () {
		browser.assert.elements(OLSKModalView, 0);
	});

	context('Show', function () {

		before(function () {
			return browser.pressButton('#TestShowButton');
		});
		
		it('shows OLSKModalView', function () {
			browser.assert.elements(OLSKModalView, 1);
		});

		it('shows OLSKStandardView', function () {
			browser.assert.elements('.OLSKStandardView', 1);
		});

		it('shows OLSKModalViewTitle', function () {
			browser.assert.elements(OLSKModalViewTitle, 1);
		});

		it('shows OLSKModalViewCloseButton', function () {
			browser.assert.elements(OLSKModalViewCloseButton, 1);
		});
	
	});

	context('Close', function () {

		before(function () {
			return browser.pressButton(OLSKModalViewCloseButton);
		});

		it('hides OLSKModalView', function () {
			browser.assert.elements(OLSKModalView, 0);
		});
		
	});

});
