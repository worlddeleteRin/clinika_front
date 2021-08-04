import { createStore } from 'vuex'
import theme from './modules/theme'
import comments from './modules/comments'
import popup from './modules/popup'
import services from './modules/services'

export const store = createStore({
	modules: {
		theme,
		comments,
		popup,
		services,
	}
})
