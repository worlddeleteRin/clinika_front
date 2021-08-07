<template>
  <splide
	class="mx-auto"
	:options="options"
  >

    <splide-slide
	class=""
	v-for="stock in stocks"
	:key="stock"
	>
		<div class="mx-3">
			<stock-card 
				:stock="stock"
			class=""
			/>
		</div>
	</splide-slide>

  </splide>

</template>
<script>
import StockCard from '@/components/stock/StockCard.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	
export default {
	name: "StocksSlider",
	components: {
		StockCard,
		Splide,
		SplideSlide,
    },
	props: {
		stocks: Array,
	},
	data () {
		return {
			options: {
				pagination: false,
				rewind: true,
				perPage: 3,
				breakpoints: {
					'1024': {
						perPage: 2,
					},
					'640': {
						perPage: 1,
					},
				}
			},
		}
	},
    methods: {
    },
}
</script>

