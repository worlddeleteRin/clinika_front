import { 
	APIgetStaffMembers,
	} from '@/api/staff.js'

export default {
	state: {
		staff_members: [],
		staff_loaded: false,
	},
	mutations: {
		setStaffMembers(state, staff_members) {
			state.staff_members = staff_members;
		},
		setStaffLoaded(state, is_loaded) {
			state.staff_loaded = is_loaded
		},
	},
	actions: {
		async getStaffMembers ({commit}) {
			commit('setStaffLoaded', false)
			var staff_members = await APIgetStaffMembers()
			commit('setStaffMembers', staff_members)		
			commit('setStaffLoaded', true)
		},
	},
}
