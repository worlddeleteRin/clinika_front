<template>
<div class="px-4 py-4 mx-auto max-w-screen-xl">
	
	<div class="pt-3 text-2xl font-semibold text-center md:text-3xl">
		Врачи		
	</div>



	<div 
	v-if="staff_members.length > 0"
	class="items-center justify-center mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 grid-flow-row max-w-max">
	<!-- staff members cards -->
		<staff-card
		v-for="staff_member in staff_members"
		:key="staff_member"
		:staff_member="staff_member"
		class="h-full max-w-max"
		/>
	<!-- eof staff members cards -->
	</div>

	<loading-container
	:loading_title="'Загрузка персонала...'"
	v-else
	/>

</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
// local components
import StaffCard from '@/components/staff/StaffCard.vue';
import LoadingContainer from '@/components/loaders/LoadingContainer.vue';

export default {
	components: {
		StaffCard,
		LoadingContainer,
	},
	name: "StaffPage",
	setup () {
		const store = useStore()
		// computed
		const staff_members = computed (() => store.state.staff.staff_members)
		return {
			// computed
			staff_members,
		}
	}
}
</script>

