import axios from 'axios'
import { api_url } from '@/api/settings.js'
// const api_url = 'http://192.168.1.141:8000'
//const api_url = api_config.api_url
export async function APIsendContactRequest(contact_form) {
	var status = false
	var contact_info = {
		"name": contact_form.name,
		"phone": contact_form.phone,
		"phone_mask": contact_form.phone_mask,
	}
	await axios.post(
		api_url + '/contact_request',
		contact_info
	).then((response) => {
		var resp_status = response.data.status
		if (resp_status == 'success') {
			status = true
		}
	}).catch(() => {
		status = false	
	})
	return status
}


