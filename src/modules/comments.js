import { 
	APIgetComments,
	APIcreateComment,
	} from '@/api/comments.js'

export default {
	state: {
		comments: [],
	},
	mutations: {
		setComments(state, comments) {
			state.comments = comments;
		},
	},
	actions: {
		async getComments({commit}) {
			console.log('call get comments action')
			var comments = await APIgetComments()
			commit('setComments', comments)		
		},
		async createComment({dispatch}, { new_comment } ) {
			// console.log('commit is', commit)
			console.log('action comment is', new_comment)
			await APIcreateComment(new_comment)
			dispatch('getComments')
		}
	}
}
