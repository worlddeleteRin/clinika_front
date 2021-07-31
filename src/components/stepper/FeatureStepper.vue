<template>
<div 
	v-for="(feature, index) in feature_steps"
	:key="index"
	class="relative md:pr-10 md:py-2"
>
		<!-- stepper vertical line -->
		<div
		v-if="index != feature_steps.length - 1"
			class="absolute inset-0 flex items-center justify-center w-10 h-full">
			<div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
		</div>
		<!-- eof stepper vertical line -->
		<div class="relative flex pb-7">
				<div class="absolute inset-0 flex items-center justify-center w-10 h-full">
				</div>
				<div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-gray-900 rounded-full">
					<Icon
						icon="subway:tick"
					/>
				</div>
				<div class="flex-grow pl-4">
					<p class="leading-relaxed">
						{{ feature.description }} 
					</p>
				</div>
		</div>
</div>

</template>

<script>
import { Icon } from '@iconify/vue';
export default {
	name: "FeatureStepper",	
	components: {
		Icon,
	},
	props: {
		feature_steps: [],
	}
}
</script>
