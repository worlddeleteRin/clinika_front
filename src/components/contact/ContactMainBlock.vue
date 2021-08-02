<template>
<div class="px-5 py-2 bg-gray-100 rounded-md">

	<div>
		<div class="text-xl font-medium">
			Адрес:
		</div>		
		<div class="mt-1 text-medium">
			{{ location_address }}
		</div>
	</div>
	<div class="mt-3">
		<div class="text-xl font-medium">
			Режим работы:
		</div>		
		<div class="mt-1 text-medium">
			<div>Пн-Пт: 9:00 - 19:00</div>
			<div>Cб-Вс: 9:00 - 19:00</div>
		</div>
	</div>

</div>
</template>

<script>
export default {
	name: "ContactMainBlock",	
	data () {
		return {
			location_address: 'Россия, Республика Крым, городской округ Ялта, посёлок городского типа Гаспра, Севастопольское шоссе, 12'
		}
	}
}
</script>
