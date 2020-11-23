<script>
const mod = {

	_OLSKModalView: null,

};

import OLSKModalView from './main.svelte';
</script>

<button id="TestOLSKModalViewShow" on:click={ mod._OLSKModalView.modPublic.OLSKModalViewShow() }>Show</button>

<OLSKModalView bind:this={ mod._OLSKModalView } { ... Object.assign({
		OLSKModalViewTitleText: Math.random().toString(),
	}, Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()))) }>TestOLSKModalViewContent</OLSKModalView>
