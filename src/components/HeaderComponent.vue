<template>
  <Popover open="true" class="relative bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-8">
      <div class="flex items-center justify-between py-4 border-b-2 border-gray-100 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link :to="'/'"
			class="w-16"
			>
            <img class="w-full h-full" 
			:src="logo_link"
			/>
          </router-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:rinВсblack">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="text-black w-7 h-7" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-2">
			<HeaderLink
			link_name="Главная"
			link_to="/"
			:is_active="false"
			/>
			<HeaderLink
			link_name="Цены"
			link_to="/prices"
			:is_active="false"
			/>
			

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-black', 'bg-white rounded-md inline-flex items-center text-base font-medium' ]">
				<HeaderLink
				link_name="Услуги"
				link_to=""
				/>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 w-screen max-w-md px-2 mt-3 bg-white left-1/2 transform -translate-x-1/2 sm:px-0 rounded-md">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8">
                    <router-link
					v-for="service in services" 
					:key="service.slug" 
					:to="'/service/' + service.slug" 
					class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
					>
                      <component :is="ChevronDoubleRightIcon" class="flex-shrink-0 w-6 h-6 text-black" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ service.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ service.label }}
                        </p>
                      </div>
                    </router-link>
                  </div>
					<router-link 
					to="/services"
					class="z-40 flex items-center content-center px-2 pb-3 ml-8 font-medium bg-white">
						В каталог услуг	
						<ArrowNarrowRightIcon 
						class="w-12 h-6"
						/>
					</router-link>
                </div>
			
              </PopoverPanel>
            </transition>
          </Popover>


			<Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-black', 'bg-white rounded-md inline-flex items-center text-base font-medium' ]">
				<HeaderLink
				link_name="О Нас"
				link_to=""
				/>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 w-screen max-w-md px-2 mt-3 left-1/2 transform -translate-x-1/2 sm:px-0">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8">
                    <router-link :to="item.href"
						v-for="item in about_us_links" 
						:key="item.href" 
						class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
					>
                      <component :is="item.icon" class="flex-shrink-0 w-6 h-6 text-black" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                      </div>
                    </router-link>
                  </div>
                </div>
			
              </PopoverPanel>
            </transition>
          </Popover>

			<HeaderLink
			link_name="Акции"
			link_to="/stock"
			:is_active="false"
			/>
			<HeaderLink
			link_name="Врачи"
			link_to="/staff"
			:is_active="false"
			/>
        </PopoverGroup>

        <div class="items-center justify-end hidden lg:flex lg:flex-1">
			<a :href="'tel:' + main_phone"
			class="text-xl font-medium tracking-wide"
			>
				{{ main_phone_label }}
			</a>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 p-2 transition transform origin-top-right md:hidden">
        <div class="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="w-auto h-8" :src="logo_link"
				alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="text-black w-7 h-7" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a v-for="item in solutions" :key="item.name" :href="item.href" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                  <component :is="item.icon" class="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>

			<!-- menu popup menu bottom -->
          <div class="px-5 py-3 space-y-3">
            <div class="flex justify-center w-full">
				<router-link :to="'/'"
				class="p-2 mr-2 bg-gray-100 rounded-md max-w-max">
					<Icon
						icon="ant-design:instagram-filled"
						class="text-black"
						width="27"
					/>

				</router-link>
				<router-link :to="'/'"
				class="p-2 bg-gray-100 rounded-md max-w-max">
					<Icon
						icon="entypo-social:vk"
						class="text-black"
						width="27"
					/>
				</router-link>
            </div>
          </div>
			<!-- eof menu popup menu bottom -->
			
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import { main_phone, main_phone_label } from '@/settings.js';
import { Icon } from '@iconify/vue';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
import {
  MenuIcon,
  PhoneIcon,
  XIcon,
  ArrowNarrowRightIcon,
  AnnotationIcon,
  LibraryIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon, ChevronDoubleRightIcon,
	DocumentDuplicateIcon,
	} from '@heroicons/vue/solid'
import HeaderLink from './HeaderLink.vue';


import { static_host } from '@/settings.js';
// const static_host = 'http://192.168.1.141:8080/'
const logo_link = static_host + "/logo_black.svg"

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChevronDoubleRightIcon,
  },
]
const callsToAction = [
  { name: 'Contact Sales', href: '#', icon: PhoneIcon},
  { name: 'Contact Sales', href: '#', icon: ChevronDoubleRightIcon},
]

const about_us_links = [
	{
		name: 'О клинике',
		href: '/aboutus/company',
		icon: LibraryIcon,
	},
	{
		name: 'Отзывы',
		href: '/aboutus/comments',
		icon: AnnotationIcon,
	},
	{
		name: 'Контакты',
		href: '/aboutus/contact',
		icon: PhoneIcon,
	},
	{
		name: 'Документы',
		href: '#',
		icon: DocumentDuplicateIcon,
	},
]
const resources = [
  {
    name: 'Название услуги',
    description: 'Описание услуги',
    href: '#',
    icon: ChevronDoubleRightIcon,
  },
{
    name: 'Название услуги',
    description: 'Описание услуги',
    href: '#',
    icon: ChevronDoubleRightIcon,
  },
{
    name: 'Название услуги',
    description: 'Описание услуги',
    href: '#',
    icon: ChevronDoubleRightIcon,
  },
{
    name: 'Название услуги',
    description: 'Описание услуги',
    href: '#',
    icon: ChevronDoubleRightIcon,
  },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

export default {
  components: {
	// iconify icon
	Icon,
	HeaderLink,	
  // icons here
	ArrowNarrowRightIcon,
	ChevronDoubleRightIcon,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
	const store = useStore()
	const services = computed(() => store.state.services.services)
    return {
		main_phone,
		main_phone_label,
      solutions,
      callsToAction,
      resources,
      recentPosts,
		logo_link,
		about_us_links,
		// computed
		services,
    }
  },
}
</script>
