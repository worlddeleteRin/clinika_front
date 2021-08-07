<template>
	<div>
	<!-- feature blocks -->
	<div class="">
	<div class="text-2xl font-semibold text-center text-black md:text-3xl">
		Почему выбирают нас?
	</div>
	<div class="px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
		<!-- feature block -->	
		<div 
		v-for="feature in features"
		:key="feature"
		class="flex flex-col items-center py-4 bg-gray-100 rounded-md">
			<div class="text-4xl font-medium text-gray-800">
				{{ feature.title }}	
			</div>
			<div class="py-2 text-gray-700 text-md">
				{{ feature.subtitle }}
			</div>
		</div>
		<!-- eof feature block -->
	</div>
	</div>
	<!-- eof feature blocks -->
</div>

</template>

<script>
export default {
	name: "CompanyFeatureComponent",
	setup () {
			
		const features = [
			{
				"title": "5888",
				"subtitle": "Брекет систем установлено"
			},
			{
				"title": "5888",
				"subtitle": "Брекет систем установлено"
			},
			{
				"title": "5888",
				"subtitle": "Брекет систем установлено"
			},
			{
				"title": "5888",
				"subtitle": "Брекет систем установлено"
			},
			{
				"title": "5888",
				"subtitle": "Брекет систем установлено"
			},
			{
				"title": "5888",
				"subtitle": "Брекет систем установлено"
			},
		]
		return {
			features,
		}
	}
}
</script>
