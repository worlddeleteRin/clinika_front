<template>
	<HeaderComponent 
		class="z-40"
	/>
  <!--<img alt="Vue logo" src="./assets/logo.png"> -->
	<router-view :key="$route.fullPath"></router-view>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
	HeaderComponent,
  },
}
</script>

