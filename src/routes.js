
const main_pages = [
	{
		path: '/',
		component: () => import('@/pages/MainPage.vue'),
	},
	{
		path: '/prices',
		component: () => import('@/pages/PricePage.vue'),
	},
	{
		path: '/services',
		component: () => import('@/pages/ServicesPage.vue'),
	},
	{
		path: '/aboutus/company',
		component: () => import('@/pages/CompanyPage.vue'),
	},
	{
		path: '/aboutus/comments',
		component: () => import('@/pages/CommentsPage.vue'),
	},
	{
		path: '/aboutus/contact',
		component:  () => import('@/pages/ContactPage.vue'),
	},
	{
		path: '/stock',
		component: () => import('@/pages/StockPage.vue'),
	},
	{
		path: '/staff',
		component: () => import('@/pages/StaffPage.vue'),
	},
	{
		path: '/documents',
		component: () => import('@/pages/DocumentPage.vue'),
	},
]
const dynamic_pages = [
	{
		path: '/service/:slug',
		component: () => import('@/pages/ServicePage.vue'),
	},
	{
		path: '/stock/:slug',
		component: () => import('@/pages/StockItemPage.vue'),
	},
]

export const routes = []
routes.push(...main_pages)
routes.push(...dynamic_pages)



