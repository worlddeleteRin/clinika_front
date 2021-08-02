<template>
 <div class="px-4 mx-auto my-4 max-w-screen-xl">
	
	<div class="pt-3 text-2xl font-semibold text-center md:text-3xl">
		Контакты
	</div>

	<contact-main-block 
	class="max-w-3xl mx-auto mt-5"
	/>

	<!-- yandex map -->
	<div class="w-full mx-auto overflow-hidden mt-7 md:w-10/12 rounded-2xl">
		<iframe 
		src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac947c29ff6662e1e8c0adbc94cdb9ac435c1f26a7c6b6a2a9c1b361ffa2d5ece&amp;source=constructor" 
		style="overflow:hidden"
		width="100%" 
		height="397"
		frameborder="0"
		scrolling="no"
		class="overflow-hidden rounded-xl"
		>
		</iframe>
	</div>
	<!-- yandex map -->

	<!-- contact form block -->
	<contact-form-main
		class="mt-8"
	/>
	<!-- eof contact form block -->

	<!-- attention block -->
	<div class="py-3 bg-gray-100 px-7 mt-7 rounded-md">
		{{ attention_text }}
	</div>
	<!-- eof attention block -->


 </div>
</template>

<script>
import ContactFormMain from '@/components/contact_forms/ContactFormMain.vue';
import ContactMainBlock from '@/components/contact/ContactMainBlock.vue';

export default {
  name: 'ContactPage',
  components: {
	ContactFormMain,
	ContactMainBlock,
  },
	setup () {
		var attention_text = "ООО 'MIRACLINIC' не является участником программы Государственных гарантий бесплатного оказания гражданам медицинской помощи и территориальных программ государственных гарантий бесплатного оказания гражданам медицинской помощи. Вы можете получить бесплатную медицинскую помощь по адресу: г.Ялта, ул.Грибоедова, 3 ГОСУДАРСТВЕННОЕ АВТОНОМНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ РЕСПУБЛИКИ KРЫМ «ЯЛТИНСКАЯ СТОМАТОЛОГИЧЕСКАЯ ПОЛИКЛИНИКА"
		return {
			attention_text
		}
	}
}
</script>
