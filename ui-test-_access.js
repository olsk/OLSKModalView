const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKModalView: '.OLSKModalView',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKModalView_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKModalView', function () {
		browser.assert.elements(OLSKModalView, 1);
	});

	it('shows OLSKStandardView', function () {
		browser.assert.elements('.OLSKStandardView', 1);
	});

});
