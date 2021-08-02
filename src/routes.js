import MainPage from '@/pages/MainPage.vue';
import PricePage from '@/pages/PricePage.vue';
import ServicePage from '@/pages/ServicePage.vue';
import ServicesPage from '@/pages/ServicesPage.vue';
// about us pages
import CompanyPage from '@/pages/CompanyPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import CommentsPage from '@/pages/CommentsPage.vue';
// eof about us pages
import StockPage from '@/pages/StockPage.vue';
import StockItemPage from '@/pages/StockItemPage.vue';

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
	{
		path: '/aboutus/comments',
		component: CommentsPage,
	},
	{
		path: '/aboutus/contact',
		component: ContactPage,
	},
	{
		path: '/stock',
		component: StockPage,
	},
]
const dynamic_pages = [
	{
		path: '/service/:slug',
		component: ServicePage,
	},
	{
		path: '/stock/:id',
		component: StockItemPage,
	},
]

export const routes = []
routes.push(...main_pages)
routes.push(...dynamic_pages)



