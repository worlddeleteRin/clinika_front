import axios from 'axios'
import { api_url } from '@/api/settings.js'
// const api_url = 'http://192.168.1.141:8000'
//const api_url = api_config.api_url

export async function APIgetComments () {
	var comments = []
	console.log('run api get comments')
	await axios.get(
		api_url+'/comments',
	).then((response) => {
		console.log('response is', response)
		comments = response.data.comments
		console.log('comments are', comments)
	}).catch((error) => {
		console.log('error is', error)
	})
	return comments
}

export async function APIcreateComment (new_comment) {
	console.log('call api create comment')

	console.log('comment is', new_comment)
	await axios.post(
		api_url + '/comments',
		new_comment
	).then((response) => {
		console.log('response is', response.data)
	})
}
