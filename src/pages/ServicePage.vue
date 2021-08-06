<template>

 <div v-if="service_loaded && current_service"
	class="px-4 py-6 md:py-10"
 >

	<div class="flex flex-col md:flex-row">
	<!-- service image -->
	<div
	class="md:w-5/12 w-full rounded-md max-h-[550px] relative overflow-hidden"
	>
		<img 
		:src="current_service.imgsrc[0]"
		class="object-contain w-full h-full rounded-md"
		/>
	</div>
	<!-- eof service image -->

	<!-- service detail -->
	<div class="md:ml-7 md:w-7/12">
		<div class="mt-4 text-xl font-medium">
			{{ current_service.name }}	
		</div>
		<div class="mt-1 text-sm text-gray-700">
			{{ current_service.label }}
		</div>
		<div class="mt-2">
			{{ current_service.description }}
		</div>
	</div>
	<!-- eof service detail -->
	</div>

	<!-- subservices list -->
	<div class="mt-9 relative max-w-[800px] mx-auto">
		<div
			v-for="subservice in current_service.subservices"
			:key="subservice"
			class="flex justify-between w-full px-3 py-3 mt-2 bg-gray-100 rounded-md"
		>
			<div class="mr-1">
				{{ subservice.name }}
			</div>
			<div class="text-xl font-medium">
				{{ subservice.price }}
			</div>
		</div>
	</div>
	<!-- subservices list -->

	<contact-form-main
	class="mt-8"
	/>

 </div>


</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { onBeforeMount, computed, ref } from 'vue';
// custom components 
import ContactFormMain from '@/components/contact_forms/ContactFormMain.vue';

export default {
	name: 'ServicePage',
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
		const store = useStore()
		const service_slug = route.params.slug	
		// refs
		var service_loaded = ref(false)
		// computed
		var current_service = computed( () => store.state.services.current_service)
		// functions
		onBeforeMount(async () => {
			await store.dispatch('getCurrentService', service_slug)	
			service_loaded.value = true
		})
		return {
			service_slug,
			current_service, 
			service_loaded,
		}
	}
}
</script>

