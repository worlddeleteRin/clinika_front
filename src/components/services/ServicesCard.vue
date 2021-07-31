<template>

<router-link :to="'/service/' + 'some-service-slug'"
class="relative bg-transparent cursor-pointer mb-14">
	<!-- service image -->
	<div>
		<img 
			:src="img_src"
			class="rounded-md"
		/>
	</div>
	<!-- eof service image -->
	
	<!-- service info -->
	<div class="absolute w-11/12 px-4 py-3 mx-auto bg-white -bottom-11 rounded-md transform -translate-x-1/2 left-1/2">
		<div 
		class="text-xl font-semibold">
			Детская стоматология
		</div>
		<div>
			Установка имплантов под ключ за короткие сроки
		</div>
	</div>
	<!-- service info -->

</router-link>

</template>

<script>
export default {
	name: "ServicesCard",
	setup () {
		const img_src = "https://novostipmr.com/sites/default/files/filefield_paths/rpror.jpg"
		return {
			img_src,
		}
	}
}
</script>
