const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKModalView_Misc', function () {	

	const OLSKModalViewTitleText = Math.random().toString();
	const OLSKModalViewCloseText = Math.random().toString();
	const OLSKModalViewIsCapped = uRandomElement(true, false);

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKModalViewTitleText,
			OLSKModalViewCloseText,
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

	describe('OLSKModalViewCloseButton', function test_OLSKModalViewCloseButton () {

		it('binds OLSKModalViewCloseText', function () {
			browser.assert.text(OLSKModalViewCloseButton, OLSKModalViewCloseText);
		});

	});

	describe('OLSKModalViewHead', function test_OLSKModalViewHead () {

		it('classes OLSKToolbar', function () {
			browser.assert.hasClass(OLSKModalViewHead, 'OLSKToolbar');
		});

		it('classes OLSKToolbarJustify', function () {
			browser.assert.hasClass(OLSKModalViewHead, 'OLSKToolbarJustify');
		});

		it('classes OLSKCommonEdgeBottom', function () {
			browser.assert.hasClass(OLSKModalViewHead, 'OLSKCommonEdgeBottom');
		});

	});

	describe('OLSKModalViewCloseButton', function test_OLSKModalViewCloseButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(OLSKModalViewCloseButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(OLSKModalViewCloseButton, 'OLSKDecorTappable');
		});

		context('click', function () {
			
			before(function () {
				return browser.pressButton(OLSKModalViewCloseButton);
			});

			it('sends OLSKModalViewDidClose', function () {
				browser.assert.text('#TestOLSKModalViewDidClose', '1');
			});

			context('Escape', function () {
				
				before(function () {
					return browser.pressButton('#TestOLSKModalViewShow');
				});

				before(function () {
					return browser.OLSKFireKeyboardEvent(browser.window, 'Escape');
				});

				it.skip('sends OLSKModalViewDidClose', function () {
					browser.assert.text('#TestOLSKModalViewDidClose', '2');
				});
			
			});
		
		});

	});
	
});
