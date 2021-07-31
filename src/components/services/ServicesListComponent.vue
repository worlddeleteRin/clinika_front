<template>
<div 
class="px-2 mx-auto bg-gray-50 py-7 rounded-md max-w-screen-xl">

	<div
		class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:px-4"
	>
		<services-card 
			v-for="i in 6"
			:key="i"
			class="max-w-[430px] mx-auto"
		/>
	</div>
</div>
</template>

<script>
import ServicesCard from '@/components/services/ServicesCard.vue';
export default {
	name: "BaseServicesComponent",
	components: {
		ServicesCard,
	},
}
</script>
