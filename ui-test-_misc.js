const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKModalView_Misc', function () {	

	const OLSKModalViewTitleText = Math.random().toString();
	const OLSKModalViewIsCapped = uRandomElement(true, false);

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKModalViewTitleText,
			OLSKModalViewIsCapped,
		});
	});
	
	before(function () {
		return browser.pressButton('#TestOLSKModalViewShow');
	});

	describe('OLSKModalView', function test_OLSKModalView () {

		it.skip('sets aria-hidden', function () {
			browser.assert.attribute(OLSKModalView, 'aria-hidden', 'true');
		});
		
		it('binds OLSKModalViewContent', function () {
			browser.assert.text('.OLSKStandardViewBody', 'TestOLSKModalViewContent');
		});

		context('OLSKModalViewIsCapped', function () {

			it('classes OLSKModalViewCapped', function () {
				OLSKModalViewIsCapped ? browser.assert.hasClass(OLSKModalView, 'OLSKModalViewCapped') : browser.assert.hasNoClass(OLSKModalView, 'OLSKModalViewCapped');
			});
		
		});

	});

	describe('OLSKModalViewTitle', function test_OLSKModalViewTitle () {

		it('binds OLSKModalViewTitleText', function () {
			browser.assert.text(OLSKModalViewTitle, OLSKModalViewTitleText);
		});

	});

	describe('OLSKModalViewHead', function test_OLSKModalViewHead () {

		it('classes OLSKToolbar', function () {
			browser.assert.hasClass(OLSKModalViewHead, 'OLSKToolbar');
		});

		it('classes OLSKToolbarJustify', function () {
			browser.assert.hasClass(OLSKModalViewHead, 'OLSKToolbarJustify');
		});

		it('classes OLSKToolbarBorderBottom', function () {
			browser.assert.hasClass(OLSKModalViewHead, 'OLSKToolbarBorderBottom');
		});

	});

	describe('OLSKModalViewCloseButton', function test_OLSKModalViewCloseButton () {

		it('classes OLSKLayoutButtonNoStyle', function () {
			browser.assert.hasClass(OLSKModalViewCloseButton, 'OLSKLayoutButtonNoStyle');
		});

		it('classes OLSKLayoutElementTappable', function () {
			browser.assert.hasClass(OLSKModalViewCloseButton, 'OLSKLayoutElementTappable');
		});

	});
	
});
