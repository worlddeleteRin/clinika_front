<template>
<div class="mx-auto max-w-screen-xl">
	<div class="py-3 text-2xl font-bold text-center md:py-5">
		Каталог услуг
	</div>
	<div>
		<services-list-component 
		/>
	</div>
</div>
</template>

<script>
import ServicesListComponent from '@/components/services/ServicesListComponent.vue';
export default {
	name: "BaseServicesComponent",
	components: {
		ServicesListComponent,
	},
}
</script>
