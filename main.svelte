<script>
export let OLSKModalViewTitleText;

export const modPublic = {
	
	OLSKModalViewShow () {
		mod.ControlShow();
	},

};

import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};

import MicroModal from 'micromodal';

const mod = {

	// VALUE

	_ValueIsVisible: false,

	_ValueUpdateCallback: null,

	// DATA

	_DataRandomID: 'OLSKModalView_' + Math.random().toString().slice(2),
	_DataRandomTitleID: 'OLSKModalViewTitle_' + Math.random().toString().slice(2),

	// CONTROL

	ControlShow () {
		mod._ValueUpdateCallback = (function () {
			MicroModal.show(mod._DataRandomID);
		});

		mod._ValueIsVisible = true;
	},

	ControlClose () {
		MicroModal.close(mod._DataRandomID);

		mod._ValueIsVisible = false;
	},

	// LIFECYCLE

	LifecycleModuleDidMount () {
		MicroModal.init()
	},

	LifecycleModuleDidUpdate () {
		if (!mod._ValueUpdateCallback) {
			return;
		}

		mod._ValueUpdateCallback();

		delete mod._ValueUpdateCallback;
	},

};

import { onMount } from 'svelte';
onMount(mod.LifecycleModuleDidMount);

import { afterUpdate } from 'svelte';
afterUpdate(mod.LifecycleModuleDidUpdate);

import OLSKStandardView from 'OLSKStandardView';
</script>

{#if mod._ValueIsVisible }

<div class="OLSKModalView" id={ mod._DataRandomID }>
	<div tabindex="-1" data-micromodal-close>
		<div role="dialog" aria-modal="true" aria-labelledby={ mod._DataRandomTitleID }>
			<OLSKStandardView>
				<div slot="OLSKStandardViewToolbarHead">
					<span class="OLSKModalViewTitle" id={ mod._DataRandomTitleID }>{ OLSKModalViewTitleText }</span>

					<button class="OLSKModalViewCloseButton" on:click={ mod.ControlClose }>{ OLSKLocalized('OLSKModalViewCloseButtonText') }</button>
				</div>

				<div slot="OLSKStandardViewBody">
					<slot></slot>
				</div>
			</OLSKStandardView>
	  </div>
	</div>
</div>

{/if}

<style>

</style>