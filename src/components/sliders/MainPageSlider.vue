<template>
  <swiper
	:centeredSlides="true"
    :slides-per-view="1"
    :space-between="0"
	:pagination=" { clickable: true} "
    @swiper="onSwiper"
    @slideChange="onSlideChange"
	class=""
  >

    <swiper-slide
	class="flex justify-center text-center"
	style=""
	v-for="i in 4"
	:key="i"
	>
		<img 
		class="object-cover w-full max-h-80"
		:src="image_link"/>
	</swiper-slide>

  </swiper>

</template>
<script>
// 	Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { Pagination } from 'swiper';

  // Import Swiper styles
  import 'swiper/swiper-bundle.css';
  import 'swiper/components/pagination/pagination.min.css';

  SwiperCore.use([ Pagination ]);
	
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
	data () {
		return {
			image_link: "https://slavinskaya.info/sites/default/files/full_screen_thumb_1000x850_Kiev_clinic_hallway_04_View02.jpg",
		}
	},
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
  };
</script>

