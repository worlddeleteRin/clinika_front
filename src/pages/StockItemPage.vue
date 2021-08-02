<template>
 <div class="px-4 py-5 mx-auto max-w-screen-xl">
<div 
        class="max-w-3xl mx-auto">
        <!-- stock_image -->
        <div class="">
            <img 
                class="rounded-xl" src="https://i.picsum.photos/id/682/2000/1000.jpg?hmac=3Kmpf1aYO2c88uvGpS6zzLAmYC5cxcPRJa2J8oN83oo" >
        </div>
        <div 
            class="w-full mx-auto mt-4 text-center md:w-11/12">
            <!-- title -->
            <div 
                class="text-2xl font-semibold">
                -10% новому клиенту 
            </div>
            <!-- subtitle -->
            <div 
                class="mt-4 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum, dicta dolorum! Amet optio consectetur 
                Впервые в нашей клинике? Получи скидку 10%! 
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
		const route = useRoute()
		const stock_id = route.params.id
		return {
			stock_id,	
		}
	}
}
</script>

