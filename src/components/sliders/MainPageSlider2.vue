<template>
  <splide
	class="mx-auto rounded-md"
  >

    <splide-slide
	class="flex justify-center text-center rounded-md"
	v-for="i in 4"
	:key="i"
	:options="options"
	>
		<img 
		class="object-cover w-full max-h-80 rounded-md"
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
			image_link: "https://avatars.mds.yandex.net/get-altay/235931/2a0000015e61326ed5fed58f78196824da26/XXL",
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

