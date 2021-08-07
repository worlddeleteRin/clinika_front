<template>
<div class="mx-auto max-w-screen-xl">
	<!-- main page slider -->
	<div class="mt-3">
		<main-page-slider
		class="w-11/12 md:w-4/5 max-w-screen-xl rounded-md"
		/>
	</div>
	<!-- eof main page slider -->


		
	<!-- services block -->
	<div class="mt-8">
		<div class="mb-5 text-2xl font-semibold text-center md:text-3xl">
			Каталог услуг
		</div>
		<div
		v-if="services_loaded"
		class=""
		>
			<services-list-component
			:services="services.slice(0,6)"
			/>
			<div 
			class="block w-full mx-auto mb-10 text-center">
				<router-link :to="'/services'"
				class="px-5 py-3 text-xl tracking-wider text-white bg-black rounded-md">
				Смотреть все услуги	
				</router-link>
			</div>
		</div>
	</div>
	<!-- eof services block -->
</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
// custom components
import MainPageSlider from '@/components/sliders/MainPageSlider2.vue';
import ServicesListComponent from '@/components/services/ServicesListComponent.vue';
export default {
  name: 'MainPage',
  props: {
  },
  components: {
	MainPageSlider,
	ServicesListComponent,
  },
  async mounted () {
	console.log('it is mounted')
  },
  data () {
	return {
	}
  },
  computed: {
	theme_var () {
		return this.$store.state.theme.theme;
	},
  },
  methods: {
	
  },
  setup () {
	const store = useStore()
	// computed
	const services = computed(() => store.state.services.services)
	const services_loaded = computed( () => store.state.services.services_loaded)
	return {
		// computed
		services,
		services_loaded,
	}
  }
}
</script>

