<script>
export let OLSKModalViewTitleText;
export let OLSKModalViewIsCapped = false;

export const modPublic = {
	
	OLSKModalViewShow () {
		mod.ControlShow();
	},

	OLSKModalViewClose () {
		mod.ControlClose();
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
					}, 600);
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

<div class="OLSKModalView" id={ mod._DataRandomID } aria-hidden="true" class:OLSKModalViewCapped={ OLSKModalViewIsCapped }>
	<div class="OLSKModalViewOverlay" tabindex="-1" data-micromodal-close>
		<div class="OLSKModalViewContainer" role="dialog" aria-modal="true" aria-labelledby={ mod._DataRandomTitleID }>
			<OLSKStandardView>
				<div class="OLSKModalViewHead OLSKToolbar OLSKToolbar OLSKToolbarBorderBottom OLSKToolbarJustify" slot="OLSKStandardViewHead">
					<div class="OLSKToolbarElementGroup">&nbsp;</div>

					<div class="OLSKToolbarElementGroup">
						<span class="OLSKModalViewTitle" id={ mod._DataRandomTitleID }>{ OLSKModalViewTitleText }</span>
					</div>

					<div class="OLSKToolbarElementGroup">
						<button class="OLSKModalViewCloseButton OLSKLayoutButtonNoStyle OLSKLayoutElementTappable" on:click={ mod.ControlClose }>{ OLSKLocalized('OLSKModalViewCloseButtonText') }</button>
					</div>
				</div>

				<slot></slot>

				<div slot="OLSKStandardViewTail" class:OLSKStandardViewTailHotfixHidden={ !$$slots.OLSKStandardViewTail }>{#if $$slots.OLSKStandardViewTail}
					<slot name="OLSKStandardViewTail"></slot>
	{/if}</div>
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
	from { transform: translateY(90%); }
	to { transform: translateY(0); }
}

@keyframes slideOut {
	from { transform: translateY(0); }
	to { transform: translateY(90%); }
}

.OLSKModalView {
  display: none;
}

.OLSKModalViewOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  background: rgba(0,0,0,0.6);
}

.OLSKModalViewContainer, .OLSKModalViewContainer > :global(*) {
	height: 100%;
}

:global(.OLSKModalView.OLSKModalViewOpen) {
  display: unset !important;
}

:global(.OLSKModalView[aria-hidden="false"]) .OLSKModalViewOverlay {
  animation: fadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1);
}

:global(.OLSKModalView[aria-hidden="false"]) .OLSKModalViewContainer {
	opacity: 0;
  animation: fadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1) .3s, slideIn .3s cubic-bezier(0, 0, 0.2, 1) .3s;
  animation-fill-mode: forwards;
}

.OLSKModalView[aria-hidden="true"] .OLSKModalViewContainer {
	animation: fadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1), slideOut .3s cubic-bezier(0, 0, 0.2, 1);
	animation-fill-mode: forwards;
}

.OLSKModalView[aria-hidden="true"] .OLSKModalViewOverlay {
	animation: fadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1) .3s;
	animation-fill-mode: forwards;
}

.OLSKModalViewTitle {
	font-size: 14px;
	font-weight: bold;
}

.OLSKModalView :global(.OLSKStandardViewTailHotfixHidden) {
	display: none;
}

@media (min-width: 450px) {
	:global(.OLSKModalViewCapped) .OLSKModalViewOverlay {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(.OLSKModalViewCapped) .OLSKModalViewContainer {
		max-width: 450px;
		max-height: 500px;
		border: 1px solid black;
		border-radius: 5px;
		overflow: hidden;
		box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.15);

		flex: 1;
	}

	:global(.OLSKModalViewCapped) .OLSKToolbar {
		--olsktoolbarsize: 24px !important;
		min-height: 52px !important;
	}
}
</style>
