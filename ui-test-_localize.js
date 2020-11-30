const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (languageCode) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, languageCode);
	};

	describe(`OLSKModalView_Localize-${ languageCode }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage: languageCode,
			});
		});
	
		before(function () {
			return browser.pressButton('#TestOLSKModalViewShow');
		});

		it('localizes OLSKModalViewCloseButton', function() {
			browser.assert.text(OLSKModalViewCloseButton, uLocalized('OLSKModalViewCloseButtonText'));
		});
	
	});

});
