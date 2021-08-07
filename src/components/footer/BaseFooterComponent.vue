<template>

<footer class="text-white bg-black body-font">
  <div class="container flex flex-col items-center px-5 py-4 mx-auto md:flex-row md:px-12">

	<!-- logo black -->
    <router-link :to="'/'"
	class="flex items-center justify-center font-medium title-font ">
	<img
		:src="logo_path"
		class="w-20"
	/>
    </router-link>
	<!-- eof logo block -->


	<!-- cp block -->
    <p class="mt-4 text-sm text-white md:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 md:py-2 md:mt-0">
		© 2021 MIRACLINIC —
    </p>
	<!-- eof cp block -->


	<div class="flex my-6 md:w-3/12 md:my-1 md:ml-8">
		<CallPopupContactFormMain
			:title="'Запись на прием'"
			class="px-8 py-2 text-lg text-black bg-white select-none rounded-md"
		/>
	</div>

	<!-- contact block -->
	<div>
		<a
		:href="'tel:'+ main_phone"
		class="block mt-2 text-xl text-center">
			{{ main_phone_label }}
		</a>
		<!--
		<div class="mt-2 text-sm text-center">
			{{ main_address }}
		</div>
		-->
	</div>
	<!-- eof contact block -->

	<!-- social block -->
    <span class="inline-flex items-center justify-center mt-4 md:ml-auto md:mt-0 md:justify-start">
		<a
		:href="vk_link"
		class="mr-2"
		>
			<Icon
			icon="bx:bxl-vk"
			width="35"
			/>
		</a>
		<a
		:href="inst_link"
		>
			<Icon
			icon="bx:bxl-instagram"
			width="32"
			/>
		</a>
    </span>
	<!-- eof socials block -->

  </div>
</footer>
</template>

<script>
import { static_host, vk_link, inst_link, main_phone, main_phone_label, main_address } from '@/settings.js';
import { Icon } from '@iconify/vue';
import CallPopupContactFormMain from '@/components/contact_forms/CallPopupContactFormMain.vue';

export default {
	name: "BaseFooterComponent",
	components: {
		Icon,
		CallPopupContactFormMain,
	},
	setup () {
		const logo_path = static_host + '/logo_white.svg'
		return {
			logo_path,
			vk_link,
			inst_link,
			main_phone,
			main_phone_label,
			main_address,
		}
	}
}
</script>

