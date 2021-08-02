<template>
	<div class="flex flex-col items-center justify-center">
	<!-- comment add form -->
	<div class="flex flex-col items-center w-full mx-auto">
		<div class="mt-2 max-w-[500px] w-full">
			<input 
				placeholder="Ваше Имя"
				class="w-full px-5 py-3 bg-gray-100 rounded-md"
				:value="name"
				@input="$emit('update:name', $event.target.value)"
			>
		</div>
		<div class="mt-2 max-w-[500px] w-full">
			<textarea 
				placeholder="Введите текст вашего комментария"
				class="w-full px-5 py-3 bg-gray-100 rounded-md"
				rows="4"
				:value="content"
				@input="$emit('update:content', $event.target.value)"
			>
			</textarea>
		</div>

		<!-- comment add button -->
		<div 
		@click="$emit('clickCreateComment')"
		class="px-8 py-3 mt-5 text-xl tracking-wider text-white bg-black cursor-pointer font-regular rounded-md">
			Оставить комментарий
		</div>
		<!-- eof comment add button -->
	</div>

	<!-- eof comment add form -->
</div>
</template>

<script>
export default {
	name: "AddCommentForm",
	props: ['name', 'content']
}
</script>


