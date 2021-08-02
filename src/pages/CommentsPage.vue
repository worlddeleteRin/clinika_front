<template>
 <div 
 class="px-4 mx-auto max-w-screen-xl">
	
	<div class="my-3 text-2xl font-semibold text-center md:text-3xl">
	Отзывы
	</div>
	
	<add-comment-form
		v-model:name="new_comment.name"
		v-model:content="new_comment.content"
		@clickCreateComment="createComment"
	/>

	<!-- comments cards -->
	<div class="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		<div
		v-for="comment in comments"
		:key="comment"
		>
			<comment-card 
			:comment="comment"
			/>
		</div>
	</div>
	<!-- eof comments cards -->
</div>

</template>

<script>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { ElNotification } from 'element-plus';
// custom components
import CommentCard from '@/components/comments/CommentCard.vue';
import AddCommentForm from '@/components/comments/AddCommentForm.vue';
export default {
	name: 'CommentsPage',
	props: {
	},
	components: {
		CommentCard,
		AddCommentForm,
	},
	async beforeMount () {
		await this.$store.dispatch('getComments')
	},
	setup () {
		const store = useStore()
		// reactive variables here
		const new_comment = reactive({
			name: "",
			content: "",
		})

//		onBeforeMount( async () => {
//			await store.dispatch('getComments')
//		})
		var comments = computed(() => store.state.comments.comments)
		// functions
		function validateComment () {
			var is_valid = {
				status: false,
				message: "",
			}
			if (new_comment.name.length == 0) {
				is_valid.message = "Введите ваше имя"
				return is_valid
			}
			if (new_comment.content.length == 0) {
				is_valid.message = "Введите текст отзыва"
				return is_valid
			}
			is_valid.status = true
			return is_valid
		}
		function errorCreateComment(is_valid) {
			ElNotification({
				title: 'Ошибка при создании отзыва',
				message: is_valid.message,
				type: 'error',
			});
		}
		function successCreateComment() {
			ElNotification({
				title: 'Отзыв добавлен!',
				message: 'Ваш отзыв был успешно добавлен',
				type: 'success',
			});
		}
		function createComment() {
			console.log("clicked to create comment")
			console.log("comment is", new_comment.name, new_comment.content)
			var is_valid = validateComment()
			if (!is_valid.status) {
				return errorCreateComment(is_valid);
			}
			const comment = {
				"comment": {
					"name": new_comment.name,
					"content": new_comment.content,
				}
			}
			console.log(comment)
			store.dispatch("createComment", { new_comment: comment } )
			return successCreateComment()
		}

		return {
			// computed
			comments,
			// reactive
			new_comment,
			// functions 
			createComment,
		}
	}
}
</script>

