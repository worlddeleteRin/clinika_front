<template>

		<router-link :to="link_to">
	<span :class="['bg-none', 'bg-none group inline-block px-5 py-1 hover:bg-black rounded-full shadow ripple waves-light transition duration-500']">
			<span :class="['text-black', 'text-xs font-medium text-center group-hover:text-white uppercase hover:shadow-lg focus:outline-none transition duration-150']">
			{{ link_name }}
			</span>
	</span>
	</router-link>
</template>


<script>
export default {
	name: "HeaderLink", 
	props: ["link_name", "link_to", "is_active"],
}
</script>
