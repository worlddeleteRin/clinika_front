import axios from 'axios'
import { api_url } from '@/api/settings.js'
// const api_url = 'http://192.168.1.141:8000'
//const api_url = api_config.api_url

export async function APIgetStaffMembers () {
	var staff_members = []
	await axios.get(
		api_url+'/staff_members',
	).then((response) => {
		var staff_members_list = response.data.staff_members
		staff_members = staff_members_list
	}).catch((error) => {
		console.log('error is', error)
	})
	return staff_members 
}

