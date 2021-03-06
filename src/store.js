import { createStore } from 'vuex'
import theme from './modules/theme'
import comments from './modules/comments'
import popup from './modules/popup'
import services from './modules/services'
import staff from './modules/staff'
import stocks from './modules/stocks.js'

export const store = createStore({
	modules: {
		theme,
		comments,
		popup,
		services,
		staff,
		stocks,
	}
})
