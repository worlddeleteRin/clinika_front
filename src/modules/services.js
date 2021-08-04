import {
	APIgetServices
} from '@/api/services.js';
export default {
	state: {
		services: Array,
	},
	mutations: {
		setServices(state, services_list) {
			state.services = services_list
		},
	},
	actions: {
		async getServices({commit}) {
			var services_list = await APIgetServices()
			commit('setServices', services_list)
		}
	}
}
