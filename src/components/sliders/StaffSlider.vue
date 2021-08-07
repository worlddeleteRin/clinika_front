<template>
  <splide
	class="mx-auto"
	:options="options"
  >

    <splide-slide
	class="border-2 border-red-900"
	v-for="staff_member in staff_members"
	:key="staff_member"
	>
		<div class="border-2 border-black">
			<staff-card 
			:staff_member="staff_member"
			class=""
			/>
		</div>
	</splide-slide>

  </splide>

</template>
<script>
import StaffCard from '@/components/staff/StaffCard.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	
export default {
	components: {
		Splide,
		SplideSlide,
		StaffCard,
    },
	props: {
		staff_members: Array,
	},
	data () {
		return {
			image_link: "https://avatars.mds.yandex.net/get-altay/235931/2a0000015e61326ed5fed58f78196824da26/XXL",
			options: {
				rewind: true,
				perPage: 3,
				breakpoints: {
					'1024': {
						perPage: 2,
					},
					'640': {
						perPage: 1,
					},
				}
			},
		}
	},
    methods: {
    },
}
</script>

