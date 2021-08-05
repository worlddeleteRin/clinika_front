import { 
	APIgetStaffMembers,
	} from '@/api/staff.js'

export default {
	state: {
		staff_members: [],
	},
	mutations: {
		setStaffMembers(state, staff_members) {
			state.staff_members = staff_members;
		},
	},
	actions: {
		async getStaffMembers ({commit}) {
			var staff_members = await APIgetStaffMembers()
			commit('setStaffMembers', staff_members)		
		},
	},
}
