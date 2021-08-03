<template>
  <splide
	class="mx-auto"
  >

    <splide-slide
	class="flex justify-center text-center"
	v-for="i in 4"
	:key="i"
	:options="options"
	>
		<img 
		class="object-cover w-full max-h-80"
		:src="image_link"/>
	</splide-slide>

  </splide>

</template>
<script>
	import { Splide, SplideSlide } from '@splidejs/vue-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	
  export default {
    components: {
		Splide,
		SplideSlide,
    },
	data () {
		return {
			image_link: "https://slavinskaya.info/sites/default/files/full_screen_thumb_1000x850_Kiev_clinic_hallway_04_View02.jpg",
			options: {
				rewind: true,
				perPage: 1,
			},
		}
	},
    methods: {
    },
}
</script>

