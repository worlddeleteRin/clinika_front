<template>
<div class="py-3 text-black bg-gray-100 max-w-[500px] w-full rounded-md flex flex-around px-2">
	<div class="flex items-center justify-center w-2/12 ml-1">
		<div>
			<Icon 
				icon="bx:bxs-user-pin"
				width="40"
			/>
		</div>
	</div>
	<div class="w-10/12 mt-2 ml-3">
		<div class="px-3 text-lg text-white bg-black font-regular max-w-max rounded-md">
			{{ comment.name }}
		</div>
		<div class="mt-2">
			{{ comment.content }}
		</div>
		<div class="flex justify-end mt-2 mr-4 text-sm font-medium text-gray-600 align-end">
			{{ getDate(comment.created_at) }}
		</div>
	</div>
</div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
	name: "CommentCard",
	props: {
		comment: {},
	},
	components: {
		Icon
	},
	methods: {
		getDate(timestamp) {
			var date = new Date(parseInt(timestamp) * 1000)
			var year = date.getFullYear()
			var month = date.getMonth()
			var day = date.getDate()
			var hours = date.getHours()
			var minutes = date.getMinutes()
			var seconds = date.getSeconds()

			return day+'.'+month+'.'+year+' ' +hours+':'+minutes+':'+seconds
		}
	}
}
</script>
