<template>
 <div 
 v-if="this.current_stock && stock_loaded"
 class="px-4 py-5 mx-auto max-w-screen-xl">
<div 
        class="max-w-3xl mx-auto">
        <!-- stock_image -->
        <div class="flex mx-auto max-h-[350px] rounded-xl">
            <img 
				:src="current_stock.imgsrc[0]"
                class="object-contain w-full rounded-md" 
			/>
        </div>
        <div 
            class="w-full mx-auto mt-4 text-center md:w-11/12">
            <!-- title -->
            <div 
                class="text-2xl font-semibold">
					{{ current_stock.title }}
            </div>
            <!-- subtitle -->
            <div 
                class="mt-4 text-left">
					{{ current_stock.description }}
            </div>
        </div>
    </div>

	<!-- contact form -->
		<contact-form-main
		class="max-w-3xl mt-8"
		/>
	<!-- eof contact form -->

 </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed, ref, onBeforeMount } from 'vue';
// custom imports
import ContactFormMain from '@/components/contact_forms/ContactFormMain.vue';
export default {
	name: 'StockItemPage',
	props: {
	},
	components: {
		ContactFormMain,
	},
	computed: {
	},
	methods: {
	},

	setup () {

		const store = useStore()
		const route = useRoute()
		const stock_slug = route.params.slug
		// refs
		var stock_loaded = ref(false)
		// computed
		var current_stock = computed(() => store.state.stocks.current_stock)
		// functions 
		onBeforeMount( async () => {
			await store.dispatch('getCurrentStock', stock_slug)
			stock_loaded.value = true
		})

		return {
			stock_slug,	
			// refs
			stock_loaded,
			// computed
			current_stock,
		}
	}
}
</script>

