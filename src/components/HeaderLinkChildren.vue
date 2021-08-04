<template>
<div class="text-black">
	{{ children }}
</div>
</template>

<script>
export default {
	name: "HeaderLinkChildren",
	props: {
		children: Array,
	}
}
</script>
