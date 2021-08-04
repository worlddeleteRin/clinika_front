<template>


	<HeaderComponent 
		class="z-40"
	/>
<!--
	<header-component2
	/>
	-->

	<transition name="el-fade-in-linear">
		<popup-contact-form-main
		v-if="is_contact_main_open"
		/>
	</transition>

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
	<div class="min-h-screen">

	<router-view :key="$route.fullPath"></router-view>

	</div>

	<base-footer-component
	/>

</template>

<script>
import { defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
// custom components
import HeaderComponent from './components/HeaderComponent.vue';
// import HeaderComponent2 from './components/HeaderComponent2.vue';

import BaseFooterComponent from './components/footer/BaseFooterComponent.vue';

const PopupContactFormMain  = defineAsyncComponent(
 () => import('./components/contact_forms/PopupContactFormMain.vue')
 );

export default {
  name: 'App',
  components: {
	HeaderComponent,
//	HeaderComponent2,
	BaseFooterComponent,
	PopupContactFormMain,
  },
  mounted () {
	// get services list on initial page load
	this.$store.dispatch('getServices')
  },
  setup () {
	const store = useStore()
	const is_contact_main_open = computed(() => store.state.popup.is_contact_main_open)
	return {
		// computed
		is_contact_main_open,
	}
  }
}
</script>

