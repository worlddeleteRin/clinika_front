import MainPage from '@/pages/MainPage.vue';
import PricePage from '@/pages/PricePage.vue';
import ServicePage from '@/pages/ServicePage.vue';
import ServicesPage from '@/pages/ServicesPage.vue';
// about us pages
import CompanyPage from '@/pages/CompanyPage.vue';
// eof about us pages

const main_pages = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/prices',
		component: PricePage,
	},
	{
		path: '/services',
		component: ServicesPage,
	},
	{
		path: '/aboutus/company',
		component: CompanyPage
	},
]
const dynamic_pages = [
	{
		path: '/service/:slug',
		component: ServicePage,
	},
]

export const routes = []
routes.push(...main_pages)
routes.push(...dynamic_pages)



