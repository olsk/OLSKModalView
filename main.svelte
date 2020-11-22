<script>
export const modPublic = {
	
	OLSKModalViewShow () {
		mod.ControlShow();
	},

};

import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};

const mod = {

	// VALUE

	_ValueIsVisible: false,

	// CONTROL

	ControlShow () {
		mod._ValueIsVisible = true;
	},

};

import OLSKStandardView from 'OLSKStandardView';
</script>

{#if mod._ValueIsVisible }

<div class="OLSKModalView">
	<OLSKStandardView>
		<div slot="OLSKStandardViewToolbarHead">
			<button class="OLSKModalViewCloseButton">{ OLSKLocalized('OLSKModalViewCloseButtonText') }</button>
		</div>
		<div slot="OLSKStandardViewBody">
			<slot></slot>
		</div>
	</OLSKStandardView>
</div>

{/if}

