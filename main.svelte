<script>
import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};

import OLSKStandardView from 'OLSKStandardView';
</script>

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
