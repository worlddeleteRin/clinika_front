import axios from 'axios'
import { api_url } from '@/api/settings.js'
// const api_url = 'http://192.168.1.141:8000'
//const api_url = api_config.api_url

export async function APIgetComments () {
	var comments = []
	await axios.get(
		api_url+'/comments',
	).then((response) => {
		comments = response.data.comments
	}).catch((error) => {
		console.log('error is', error)
	})
	return comments
}

export async function APIcreateComment (new_comment) {
	await axios.post(
		api_url + '/comments',
		new_comment
	).then((response) => {
		console.log('response is', response.data)
	})
}
