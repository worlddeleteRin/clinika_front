import {
	APIgetServices,
	APIgetCurrentService
} from '@/api/services.js';
export default {
	state: {
		services: Array,
		services_loaded: false,
		current_service: Object,
	},
	mutations: {
		setServices(state, services_list) {
			state.services = services_list
		},
		setServicesLoaded(state, is_loaded) {
			state.services_loaded = is_loaded
		},
		setCurrentService(state, service) {
			state.current_service = service
		},
	},
	actions: {
		async getServices({commit}) {
			commit('setServicesLoaded', false)
			var services_list = await APIgetServices()
			commit('setServices', services_list)
			commit('setServicesLoaded', true)
		},
		async getCurrentService({commit}, service_slug) {
			commit('setCurrentService', {})
			var current_service = await APIgetCurrentService(service_slug)
			commit('setCurrentService', current_service)
		},
	}
}
