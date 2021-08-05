<template>
<!-- html code -->
<div class="flex flex-col items-center max-w-md mx-auto shadow-xl rounded-b-xl"> 
        <!-- изображение акции   -->
        <router-link :to="'/stock/' + stock.slug"
		class="overflow-hidden rounded-t-xl max-h-[200px]">  
            <img 
			class="object-cover w-full h-full transform hover:scale-110 duration-700" 
			:src="stock.imgsrc[0]"
			>
        </router-link>
        <!-- title, subtitle -->
        <div class="w-full px-6 bg-white rounded-b-xl">  
            <router-link :to="'/stock/' + stock.slug"
			class="block mt-4 text-xl font-semibold">
				{{ stock.title }}
            </router-link>
            <div class="mt-2">
				{{ stock.description }}
            </div>
            <!-- button -->
            <router-link :to="'/stock/' + stock.slug"
			class="block py-2 my-4 text-lg tracking-wide text-center text-white bg-black cursor-pointer px-9 rounded-2xl max-w-max">
                 Подробнее
            </router-link>
        </div>
        
    </div>
<!-- eof html code -->
</template>

<script>
export default {
	name: "StockCard",
	props: {
		stock: Object,
	}
}
</script>
