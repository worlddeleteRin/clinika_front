<template>

	<!-- main page slider -->
	<div class="mt-3">
		<main-page-slider
		class="w-11/12 md:w-4/5 max-w-screen-xl rounded-md"
		/>
	</div>
	<!-- eof main page slider -->


		
	<!-- services block -->
	<div class="mt-8">
		<div class="mb-5 text-2xl font-semibold text-center">
			Каталог услуг
		</div>
		<services-list-component
		/>
	</div>
	<!-- eof services block -->

</template>

<script>
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
}
</script>

