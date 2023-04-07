const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKModalView: '.OLSKModalView',
	
	OLSKModalViewHead: '.OLSKStandardViewHead .OLSKModalViewHead',
	OLSKModalViewTitle: '.OLSKModalViewHead .OLSKModalViewTitle',
	OLSKModalViewCloseButton: '.OLSKModalViewHead .OLSKModalViewCloseButton',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKModalView_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('hides OLSKModalView', function () {
		return browser.assert.elements(OLSKModalView, 0);
	});

	context('OLSKModalViewShow', function () {

		before(function () {
			return browser.pressButton('#TestOLSKModalViewShow');
		});
		
		it('shows OLSKModalView', function () {
			return browser.assert.elements(OLSKModalView, 1);
		});

		it('shows OLSKStandardView', function () {
			return browser.assert.elements('.OLSKStandardView', 1);
		});

		it('shows OLSKModalViewTitle', function () {
			return browser.assert.elements(OLSKModalViewTitle, 1);
		});

		it('shows OLSKModalViewCloseButton', function () {
			return browser.assert.elements(OLSKModalViewCloseButton, 1);
		});

		it.skip('hides OLSKStandardViewTail', function () {
			return browser.assert.elements('.OLSKStandardViewTail', 0);
		});
	
	});

	context('OLSKModalViewCloseButton', function () {

		before(function () {
			return browser.pressButton(OLSKModalViewCloseButton);
		});

		it('hides OLSKModalView', function () {
			return browser.assert.elements(OLSKModalView, 0);
		});
		
	});

	context('OLSKModalViewClose', function () {

		before(function () {
			return browser.pressButton('#TestOLSKModalViewShow');
		});

		before(function () {
			return browser.assert.elements(OLSKModalView, 1);
		});

		before(function () {
			return browser.pressButton('#TestOLSKModalViewClose');
		});

		it('hides OLSKModalView', function () {
			return browser.assert.elements(OLSKModalView, 0);
		});
		
	});

	context('OLSKStandardViewTail', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				TestOLSKStandardViewTail: true,
			});
		});

		before(function () {
			return browser.pressButton('#TestOLSKModalViewShow');
		});

		it('shows OLSKStandardViewTail', function () {
			return browser.assert.elements('.OLSKStandardViewTail', 1);
		});
	
	});

});
