import axios from 'axios'
import { api_url } from '@/api/settings.js'

export async function APIgetStocks () {
	var stocks = []
	await axios.get(
		api_url+'/stock',
	).then((response) => {
		var stocks_list = response.data.stocks
		stocks = stocks_list 
	}).catch((error) => {
		console.log('error is', error)
	})
	return stocks
}

export async function APIgetCurrentStock (stock_slug) {
	var stock = {}
	await axios.get(
		api_url + '/stock/' + stock_slug,
	).then((response) => {
		var current_stock = response.data.current_stock
		stock = current_stock
	}).catch((error) => {
		console.log('error is', error)
	})
	return stock 
}

