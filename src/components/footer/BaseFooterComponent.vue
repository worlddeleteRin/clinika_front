<template>

<footer class="text-white bg-black body-font">
  <div class="container flex flex-col items-center px-5 py-4 mx-auto sm:flex-row md:px-12">

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
    <p class="mt-4 text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
		© 2021 MIRACLINIC —
    </p>
	<!-- eof cp block -->


	<div class="flex flex-1 my-6 sm:my-1 sm:ml-8">
		<CallPopupContactFormMain
			:title="'Запись на прием'"
			class="px-8 py-2 text-lg text-black bg-white rounded-md"
		/>
	</div>

	<!-- social block -->
    <span class="inline-flex items-center justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
		<Icon
		icon="bx:bxl-vk"
		width="35"
		/>
		<Icon
		icon="bx:bxl-instagram"
		width="32"
		/>
    </span>
	<!-- eof socials block -->

  </div>
</footer>
</template>

<script>
import { static_host } from '@/settings.js';
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
		}
	}
}
</script>

