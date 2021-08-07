<template>

<router-link :to="'/service/' + service.slug"
class="relative bg-transparent cursor-pointer mb-14">
	<!-- service image -->
	<div class="relative overflow-hidden">
		<div class="absolute top-0 left-0 w-full h-full bg-black rounded-md"></div>
		<img 
			:src="service.imgsrc[0]"
			class="relative rounded-md opacity-80"
		/>
	</div>
	<!-- eof service image -->
	
	<!-- service info -->
	<div class="absolute w-11/12 px-4 py-3 mx-auto bg-white -bottom-11 rounded-md transform -translate-x-1/2 left-1/2">
		<div 
		class="text-xl font-semibold">
			{{ service.name }}	
		</div>
		<div>
			{{ service.label }}
		</div>
	</div>
	<!-- service info -->

</router-link>

</template>

<script>
export default {
	name: "ServicesCard",
	props: {
		service: Object,
	},
	setup () {
	}
}
</script>
