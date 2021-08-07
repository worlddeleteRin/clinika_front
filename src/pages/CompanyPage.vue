<template>
 <div class="px-4 mx-auto max-w-screen-xl">

	<div class="px-4 mt-4 text-2xl font-semibold text-center md:text-3xl">
		О клинике
	</div>

	<company-info-main-component
	/>

	<!-- company feature component -->
	<company-feature-component 
	/>
	<!-- eof company feature component -->

	<!-- contact form -->
	<contact-form-main 
		class="my-6"
	/>
	<!-- contact form -->
		
 </div>
</template>

<script>
import ContactFormMain from '@/components/contact_forms/ContactFormMain.vue';
import CompanyInfoMainComponent from '@/components/aboutus/CompanyInfoMainComponent.vue';
import CompanyFeatureComponent from '@/components/aboutus/CompanyFeatureComponent.vue';

export default {
  name: 'CompanyPage',
  props: {
  },
  components: {
	ContactFormMain,
	CompanyInfoMainComponent,
	CompanyFeatureComponent,
  },
  computed: {
  },
  methods: {
  },
  setup () {		

	return {
	}
  }
}
</script>

