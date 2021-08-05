<template>
<div class="flex flex-col items-center justify-center">
	<div class="mb-3 text-lg font-medium tracking-wider">
	{{ loading_title }}
	</div>
	<Icon
	icon="eos-icons:bubble-loading"
	width="45"
	/>
</div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
	name: "LoadingContainer",
	props: {
		loading_title: String,
	},
	components: {
		Icon,
	}
}
</script>
