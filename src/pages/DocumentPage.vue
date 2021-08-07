<template>
<div class="px-4 pt-5 mx-auto pb-9 max-w-screen-xl">

	<div class="text-2xl font-semibold text-center md:text-3xl">
		Документы
	</div>

	<div class="mt-5 text-lg">
		Наша клиника имеет все необходимые сертификаты для работы в Российской федерации. Вы можете быть уверены, что с нами ваше здоровье под надежной защитой благодаря высоквалифицированным специалистам, надежным материалам и лучшей современной техникой. 
	</div>

	<div class="mx-auto mt-5 lg:mt-8 lg:mx-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-max">
	<!-- file container -->
	<a 
	v-for="i in 10"
	:key="i"
	href="http://www.africau.edu/images/default/sample.pdf"
	class="flex px-5 py-6 bg-gray-100 max-w-max rounded-md max-w-[400px] items-center cursor-pointer relative">

		<Icon
		icon="bi:check-circle-fill"
		class="absolute -left-2 -top-2"
		width="25"
		/>

		<div class="w-2/12">
			<Icon
			icon="ant-design:file-pdf-outlined"
			width="50"
			class="text-gray-700"
			/>
		</div>
		<div class="w-10/12 ml-5 text-xl text-gray-800 select-none">
			Название документа.pdf
		</div>
	</a>
	<!-- file container -->
	</div>

</div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
	name: "DocumentPage",
	components: {
		Icon,
	},
}
</script>
