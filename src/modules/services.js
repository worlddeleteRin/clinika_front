import {
	APIgetServices,
	APIgetCurrentService
} from '@/api/services.js';
export default {
	state: {
		services: Array,
		current_service: Object,
	},
	mutations: {
		setServices(state, services_list) {
			state.services = services_list
		},
		setCurrentService(state, service) {
			state.current_service = service
		}
	},
	actions: {
		async getServices({commit}) {
			var services_list = await APIgetServices()
			commit('setServices', services_list)
		},
		async getCurrentService({commit}, service_slug) {
			commit('setCurrentService', {})
			var current_service = await APIgetCurrentService(service_slug)
			commit('setCurrentService', current_service)
		},
	}
}
