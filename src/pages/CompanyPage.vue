<template>
 <div class="mx-auto max-w-screen-xl">

	<div class="px-4 mt-4 text-2xl font-semibold text-center md:text-3xl">
		О клинике
	</div>

	<!-- company info main -->
	<div class="items-center px-4 py-3 md:flex">
		<div class="md:w-5/12 md:ml-3">
			<div class="mt-2 text-lg font-medium">
				Наши пациенты — это люди, которые ценят профессионализм и качество сервиса и не готовы переплачивать за излишества. 
			</div>
			<!-- feature stepper -->
			<div class="mt-8">
				<feature-stepper
				:feature_steps="feature_steps"
				/>
			</div>
			<!-- eof feature stepper -->
		</div>
		<div class="my-5 md:w-7/12 md:ml-4">
			<img
			:src="'https://mydent82.ru/wp-content/themes/Dev/assets/images/about_us.jpg'"
			class="rounded-md"
			/>
		</div>
	</div>
	<!-- company info main -->
	<!-- feature blocks -->
	<div class="px-4 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
	<!-- eof feature blocks -->

	<!-- contact form -->
	<contact-form-main 
		class="px-4 my-6"
	/>
	<!-- contact form -->
		
 </div>
</template>

<script>
import FeatureStepper from '@/components/stepper/FeatureStepper.vue';
import ContactFormMain from '@/components/contact_forms/ContactFormMain.vue';

export default {
  name: 'CompanyPage',
  props: {
  },
  components: {
	FeatureStepper,
	ContactFormMain,
  },
  computed: {
  },
  methods: {
  },
  setup () {		
	const feature_steps = [
		{
			"description": "Врач тщательно подбирает комплекс процедур: только то, что действительно вам необходимо"
		},
		{
			"description": "Итоговый план лечения проходит утверждение у главного врача, что обеспечивает двойной контроль качества нашей работы"
		},
		{
			"description": "На регулярных консилиумах врачи-эксперты обсуждают промежуточные результаты и при необходимости вносят коррективы в дальнейшее лечение"
		},
		{
			"description": "Мы сделаем все, чтобы повысить качество вашей жизни"
		},
	]
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
		feature_steps,
	}
  }
}
</script>

