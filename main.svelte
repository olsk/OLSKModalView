<script>
export let OLSKModalViewTitleText;

export const modPublic = {
	
	OLSKModalViewShow () {
		mod.ControlShow();
	},

};

import { OLSKLocalized } from 'OLSKInternational';
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
			MicroModal.show(mod._DataRandomID, {
				openClass: 'OLSKModalViewOpen',
				awaitOpenAnimation: true,
				awaitCloseAnimation: true,
				onClose () {
					setTimeout(function () {
						mod._ValueIsVisible = false;
					}, 100);
				},
			});
		});

		mod._ValueIsVisible = true;
	},

	ControlClose () {
		MicroModal.close(mod._DataRandomID);
	},

	// LIFECYCLE

	LifecycleModuleDidUpdate () {
		if (!mod._ValueUpdateCallback) {
			return;
		}

		mod._ValueUpdateCallback();

		delete mod._ValueUpdateCallback;
	},

};

import { afterUpdate } from 'svelte';
afterUpdate(mod.LifecycleModuleDidUpdate);

import OLSKStandardView from 'OLSKStandardView';
</script>

{#if mod._ValueIsVisible }

<div class="OLSKModalView" id={ mod._DataRandomID } aria-hidden="true">
	<div class="OLSKModalViewOverlay" tabindex="-1" data-micromodal-close>
		<div class="OLSKModalViewContainer" role="dialog" aria-modal="true" aria-labelledby={ mod._DataRandomTitleID }>
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
@keyframes fadeIn {
	from { opacity: 0; }
	to { opacity: 1; }
}

@keyframes fadeOut {
	from { opacity: 1; }
	to { opacity: 0; }
}

@keyframes slideIn {
	from { transform: translateY(15%); }
	to { transform: translateY(0); }
}

@keyframes slideOut {
	from { transform: translateY(0); }
	to { transform: translateY(15%); }
}

.OLSKModalView {
  display: none;
}

:global(.OLSKModalView.OLSKModalViewOpen) {
  display: unset !important;
}

:global(.OLSKModalView[aria-hidden="false"]) .OLSKModalViewOverlay {
  animation: fadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1);
}

:global(.OLSKModalView[aria-hidden="false"]) .OLSKModalViewContainer {
  animation: slideIn .3s cubic-bezier(0, 0, .2, 1);
}

.OLSKModalView[aria-hidden="true"] .OLSKModalViewOverlay {
  animation: fadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1);
}

.OLSKModalView[aria-hidden="true"] .OLSKModalViewContainer {
  animation: slideOut .3s cubic-bezier(0, 0, .2, 1);
}
</style>
