<template>
<div 
v-if="services.length > 0"
class="px-2 mx-auto bg-gray-50 py-7 rounded-md max-w-screen-xl">

	<transition name="el-collapse-transition">
	<div
		class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:px-4"
	>
		<services-card 
			v-for="service in services"
			:key="service.slug"
			:service="service"
			class="max-w-[430px] mx-auto"
		/>
	</div>
	</transition>
</div>
	<loading-container
	:loading_title="'Загрузка персонала...'"
	v-else
	/>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
// custom imports
import LoadingContainer from '@/components/loaders/LoadingContainer.vue';
import ServicesCard from '@/components/services/ServicesCard.vue';
export default {
	name: "BaseServicesComponent",
	components: {
		ServicesCard,
		LoadingContainer,
	},
	beforeMount() {
	},
	setup () {
		const store = useStore()
		const services = computed(() => store.state.services.services)

		return {
			// computed
			services,
		}
	}
}
</script>
