<template>

	{{ current_service }}

 <div v-if="service_loaded && current_service">
	sevice is loaded and it is not null
 </div>

</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { onBeforeMount, computed, ref } from 'vue';
export default {
	name: 'ServicePage',
	props: {
	},
	components: {
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

