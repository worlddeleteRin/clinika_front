<template>
 <div class="mx-auto max-w-screen-xl">

	<div class="px-4 mt-4 text-2xl font-semibold text-center md:text-3xl">
		О клинике
	</div>

	<company-info-main-component
	/>

	<!-- feature blocks -->
	<div class="mt-6 mb-14">
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

	<!-- contact form -->
	<contact-form-main 
		class="px-4 my-6"
	/>
	<!-- contact form -->
		
 </div>
</template>

<script>
import ContactFormMain from '@/components/contact_forms/ContactFormMain.vue';
import CompanyInfoMainComponent from '@/components/aboutus/CompanyInfoMainComponent.vue';


export default {
  name: 'CompanyPage',
  props: {
  },
  components: {
	ContactFormMain,
	CompanyInfoMainComponent,
  },
  computed: {
  },
  methods: {
  },
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
	]
	return {
		features,
	}
  }
}
</script>

