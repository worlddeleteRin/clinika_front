<template>
<div>

	<div class="pt-3 text-2xl font-semibold text-center md:text-3xl">
		Врачи		
	</div>


	<staff-card
	/>

</div>
</template>

<script>
import StaffCard from '@/components/staff/StaffCard.vue';
export default {
	components: {
		StaffCard,
	},
	name: "StaffPage",
}
</script>

