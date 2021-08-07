<template>
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
</template>

<script>
import FeatureStepper from '@/components/stepper/FeatureStepper.vue';

export default {
	name: "CompanyInfoMainComponent",
	components: {
		FeatureStepper,
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
	return {
		feature_steps,
	}
	}
}
</script>
