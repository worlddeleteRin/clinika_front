<template>
<div class="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full">


	<div class="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-50"
	@click="closePopupContactFormMain"
	>
	</div>



	<div class="relative cursor-pointer"
	@click="closePopupContactFormMain"
	>
		<Icon
		icon="carbon:close"
		width="45"
		class="p-1 text-black bg-white rounded-full"
		/>
	</div>

	<ContactFormMain
		class="w-11/12 mt-3"
	/>

</div>


</template>

<script>
import { Icon } from '@iconify/vue';
// custom components
import ContactFormMain from '@/components/contact_forms/ContactFormMain.vue';
export default {
	name: "PopupContactFormMain",
	components: {
		ContactFormMain,
		Icon,
	},
	methods: {
		closePopupContactFormMain () {
			// do open popup
			this.$store.commit('setContactMainOpen', false)
		}
	}
}
</script>
