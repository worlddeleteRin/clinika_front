<template>
	<div
	@click="openPopupContactFormMain"
	class=""
	>
		{{ title }}
	</div>
</template>

<script>
export default {
	name: "CallPopupContactFormMain",
	props: {
		title: String,
	},
	methods: {
		openPopupContactFormMain () {
			// do open popup
			this.$store.commit('setContactMainOpen', true)
		}
	}
}
</script>
