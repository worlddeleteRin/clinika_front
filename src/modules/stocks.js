import { 
	APIgetStocks,
	APIgetCurrentStock,
	} from '@/api/stocks.js'

export default {
	state: {
		stocks: [],
		current_stock: {},
	},
	mutations: {
		setStocks(state, stocks) {
			state.stocks = stocks;
		},
		setCurrentStock(state, stock) {
			state.current_stock = stock
			console.log('current stock is', state.current_stock)
		}
	},
	getters: {
		getStockBySlug: (state) => (slug) => {
			console.log('slug is', slug)	
			var current_stock = state.stocks[0]
			return current_stock;
		}
	},
	actions: {
		async getStocks ({commit}) {
			var stocks = await APIgetStocks()
			commit('setStocks', stocks)		
		},
		async getCurrentStock ({commit}, stock_slug) {
			var stock = await APIgetCurrentStock(stock_slug)
			commit('setCurrentStock', stock)
		}
	},
}
