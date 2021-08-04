<template>
<div class="flex items-center justify-between px-4 py-3 mx-auto border-2 border-black max-w-screen-xl">

	<!-- header logo -->	
	<router-link  :to="'/'"
	class="w-20">
		<img
		:src="logo_black_path"
		class="w-full h-full"
		/>
	</router-link>
	<!-- eof header logo -->

	<!-- header nav -->
	<div class="flex hidden md:flex">
		<div
		v-for="nav_item in desktop_nav"
		:key="nav_item"
		class="relative group"
		>
			<header-link
			:link_name="nav_item.link_name"
			:link_to="nav_item.link_to"
			class="group"
			/>
			<!-- 
			<header-link-children
				v-if="nav_item.children"
				:children="nav_item.children"
				class="absolute bottom-0 z-50 flex hidden h-full bg-white top-7 group left-1/2 transform -translate-x-1/2 w-96 h-96 group-hover:flex hover:flex"
			/>
			-->
			<!-- header link children container -->
			<!-- eof header link children container -->
		</div>
	</div>
	<!-- header nav -->

	<!-- action container -->
	<div class="hidden md:block">
		<div>
			call action button or phone
		</div>
	</div>
	<!-- eof action container -->

	<div class="block md:hidden">
		mobile icon
	</div>

</div>
</template>

<script>
import { logo_black_path } from '@/settings.js';
import HeaderLink from '@/components/HeaderLink.vue';
// import HeaderLinkChildren from '@/components/HeaderLinkChildren.vue';

export default {
	name: "HeaderComponent2",
	components: {
		HeaderLink,	
//		HeaderLinkChildren,
	},
	setup () {
		const desktop_nav = [
			{
				link_name: "Главная",
				link_to: "/",
			},
			{
				link_name: "Цены",
				link_to: "/prices",
			},
			{
				link_name: "Услуги",
				link_to: '/services',
			children: [
					{
						link_icon: '',
						link_name: 'О Клинике',
						link_to: '',
					},
					{
						link_icon: '',
						link_name: 'Отзывы',
						link_to: '',
					},
					{
						link_icon: '',
						link_name: 'Контакты',
						link_to: '',
					},
					{
						link_icon: '',
						link_name: 'Документы',
						link_to: '',
					},
				]
			},
			{
				link_name: "О Нас",
				link_to: '',
				children: [
					{
						link_icon: '',
						link_name: 'О Клинике',
						link_to: '',
					},
					{
						link_icon: '',
						link_name: 'Отзывы',
						link_to: '',
					},
					{
						link_icon: '',
						link_name: 'Контакты',
						link_to: '',
					},
					{
						link_icon: '',
						link_name: 'Документы',
						link_to: '',
					},
				]
			},
			{
				link_name: "Акции",
				link_to: '/stock',
			},
			{
				link_name: "Врачи",
				link_to: '',
			}

		]
		return {
			logo_black_path,
			desktop_nav,
		}
	}
}
</script>
