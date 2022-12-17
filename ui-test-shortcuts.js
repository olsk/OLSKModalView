// const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

// describe('OLSKModalView_Shortcuts', function () {

// 	before(function() {
// 		return browser.OLSKVisit(kDefaultRoute);
// 	});

// 	context('Escape', function () {

// 		before(function () {
// 			return browser.pressButton('#TestOLSKModalViewShow');
// 		});

// 		before(function () {
// 			return browser.OLSKFireKeyboardEvent(browser.window, 'Escape');
// 		});
		
// 		it('shows OLSKModalView', function () {
// 			browser.assert.elements(OLSKModalView, 1);
// 		});

// 		it('shows OLSKStandardView', function () {
// 			browser.assert.elements('.OLSKStandardView', 1);
// 		});

// 		it('shows OLSKModalViewTitle', function () {
// 			browser.assert.elements(OLSKModalViewTitle, 1);
// 		});

// 		it('shows OLSKModalViewCloseButton', function () {
// 			browser.assert.elements(OLSKModalViewCloseButton, 1);
// 		});

// 		it.skip('hides OLSKStandardViewTail', function () {
// 			browser.assert.elements('.OLSKStandardViewTail', 0);
// 		});
	
// 	});

// 	context('OLSKModalViewCloseButton', function () {

// 		before(function () {
// 			return browser.pressButton(OLSKModalViewCloseButton);
// 		});

// 		it('hides OLSKModalView', function () {
// 			browser.assert.elements(OLSKModalView, 0);
// 		});
		
// 	});

// 	context('OLSKModalViewClose', function () {

// 		before(function () {
// 			return browser.pressButton('#TestOLSKModalViewShow');
// 		});

// 		before(function () {
// 			browser.assert.elements(OLSKModalView, 1);
// 		});

// 		before(function () {
// 			return browser.pressButton('#TestOLSKModalViewClose');
// 		});

// 		it('hides OLSKModalView', function () {
// 			browser.assert.elements(OLSKModalView, 0);
// 		});
		
// 	});

// 	context('OLSKStandardViewTail', function () {
		
// 		before(function() {
// 			return browser.OLSKVisit(kDefaultRoute, {
// 				TestOLSKStandardViewTail: true,
// 			});
// 		});

// 		before(function () {
// 			return browser.pressButton('#TestOLSKModalViewShow');
// 		});

// 		it('shows OLSKStandardViewTail', function () {
// 			browser.assert.elements('.OLSKStandardViewTail', 1);
// 		});
	
// 	});

	

// 	it('does nothing', function () {
// 		browser.assert.elements('.OLSKCatalogDetail .OLSKPlaceholder', 0);
// 	});

// });
