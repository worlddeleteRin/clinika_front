<template>

 <div class="px-4 pt-5 mx-auto pb-9 max-w-screen-xl">
	<div class="text-2xl font-semibold text-center">
		Цены
	</div>
	
	<div class="mt-4">
		<div
		v-for="service in services"
		:key="service.slug"
		class="mt-7"
		>
			<div class="py-3 mx-auto text-xl text-center text-white bg-black px-7 max-w-max rounded-xl">
				{{ service.name }}
			</div>
			<!-- subservices list -->
			<div class="mt-5 relative max-w-[800px] mx-auto">
				<div
					v-for="subservice in service.subservices"
					:key="subservice"
					class="flex justify-between w-full px-3 py-3 mt-2 bg-gray-100 rounded-md"
				>
					<div class="mr-1">
						{{ subservice.name }}
					</div>
					<div class="text-xl font-medium">
						{{ subservice.price }} &#8381;
					</div>
				</div>
			</div>
			<!-- subservices list -->
		</div>
	</div>

 </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'PricePage',
  components: {
  },
  setup () {
	const store = useStore()
	// computed
	const services = computed( () => store.state.services.services)
	return {
		services
	}
  }
}
</script>

