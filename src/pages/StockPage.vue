<template>
 <div class="mx-auto my-4 max-w-screen-xl">
	
	<div class="pt-3 text-2xl font-semibold text-center md:text-3xl">
		Акции
	</div>

	<div class="px-4 mx-auto mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		<!-- stock card -->
		<div
			v-for="stock in stocks"
			:key="stock"
		>
		<stock-card
		:stock="stock"
		/>
		</div>
		<!-- eof stock card -->
	</div>

 </div>
</template>

<script>
import StockCard from '@/components/stock/StockCard.vue'
export default {
  name: 'StockPage',
  props: {
  },
  components: {
	StockCard,
  },
	setup () {
	},
	computed: {
		stocks () {
			return this.$store.state.stocks.stocks
		}
	}
}
</script>

