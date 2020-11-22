<script>
const mod = {

	_OLSKModalView: null,

};

import OLSKModalView from './main.svelte';
</script>

<button id="TestShowButton" on:click={ mod._OLSKModalView.modPublic.OLSKModalViewShow() }>Show</button>

<OLSKModalView bind:this={ mod._OLSKModalView }>TestOLSKModalViewContent</OLSKModalView>
