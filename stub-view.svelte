<script>
const mod = {

	_OLSKModalView: null,

	// DATA

	DataParams () {
		return Object.assign({
			OLSKModalViewTitleText: Math.random().toString(),
			OLSKModalViewDidClose: (function  () {
				window.TestOLSKModalViewDidClose.innerHTML = parseInt(window.TestOLSKModalViewDidClose.innerHTML) + 1;
			}),
		}, Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()).filter(function (e) {
			return e[0] !== 'TestOLSKStandardViewTail';
		}).map(function (e) {
			if (e[0] === 'OLSKModalViewIsCapped') {
				e[1] = JSON.parse(e[1]);
			}

			return e;
		})));
	},

};

import OLSKModalView from './main.svelte';
</script>

<button id="TestOLSKModalViewShow" on:click={ mod._OLSKModalView.modPublic.OLSKModalViewShow() }>TestOLSKModalViewShow</button>

<button id="TestOLSKModalViewClose" on:click={ mod._OLSKModalView.modPublic.OLSKModalViewClose() }>TestOLSKModalViewClose</button>

{#if Object.fromEntries((new window.URLSearchParams(window.location.search)).entries()).TestOLSKStandardViewTail }
<OLSKModalView bind:this={ mod._OLSKModalView } { ... mod.DataParams() }>
	<div slot="OLSKStandardViewTail">TestOLSKModalViewTail</div>
</OLSKModalView>
{:else}
<OLSKModalView bind:this={ mod._OLSKModalView } { ... mod.DataParams() }>TestOLSKModalViewContent</OLSKModalView>
{/if}
