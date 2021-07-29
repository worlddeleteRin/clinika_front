import MainPage from './pages/MainPage.vue';
import PricePage from './pages/PricePage.vue';

const main_pages = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/prices',
		component: PricePage,
	},
]

export const routes = []
routes.push(...main_pages)



