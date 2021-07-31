<template>
 <div>
	Service page is here
	{{ service_slug }}
 </div>
</template>

<script>
import { useRoute } from 'vue-router';
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
		const service_slug = route.params.slug	
		return {
			service_slug
		}
	}
}
</script>

