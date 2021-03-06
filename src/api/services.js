import axios from 'axios'
import { api_url } from '@/api/settings.js'
// const api_url = 'http://192.168.1.141:8000'
//const api_url = api_config.api_url

export async function APIgetServices () {
	var services = []
	await axios.get(
		api_url+'/services',
	).then((response) => {
		const services_list = response.data.services
		services = services_list
	}).catch((error) => {
		console.log('error is', error)
	})
	return services 
}

export async function APIgetCurrentService (service_slug) {
	var service = {}
	await axios.get(
		api_url+'/services/' + service_slug,
	).then((response) => {
		const current_service = response.data.current_service
		service = current_service
	}).catch((error) => {
		console.log('error is', error)
	})
	return service 
}
