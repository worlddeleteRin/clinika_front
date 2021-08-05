<template>
<div>
	<!-- main staff card container -->		
    <div 
        class="flex flex-col justify-between h-full max-w-xs px-4 py-3 mx-auto bg-gray-100 rounded-md">
		<div>
        <!-- member_image -->
        <div class="h-48">
            <img 
				:src="staff_member.imgsrc[0]" 
                class="object-contain w-full h-full rounded-md" 
				>
        </div>
		<!-- eof member_image -->
	
		<!-- member detail block -->
        <div 
            class="mt-4">
            <!-- staff member name -->
				<span
					class="text-xl font-semibold text-center">
						{{ staff_member.name }}
				</span>
			<!-- eof staff_member name -->
            <!-- work experience -->
             <div 
                class="mt-2 text-lg text-right text-gray-600">
					{{ staff_member.working_years }}
            </div>   
            <!-- medical_worker_specialty -->
            <div 
                class="mt-2 text-lg tracking-wide text-gray-600">
					{{ staff_member.scope }}
            </div>
		</div>
		<!-- eof member detail block -->

		</div>

            <!-- sign_up_button -->
            <div 
                class="px-8 py-3 mx-auto mt-4 text-lg font-semibold tracking-wide text-white bg-black cursor-pointer select-none max-w-max rounded-xl">
                Записаться на прием 
            </div>

    </div>	

	<!-- eof main staff card container -->

</div>
</template>

<script>
export default {
	name: "StaffCard",
	props: {
		staff_member: Object,		
	},
	setup () {
		const member_image = "https://novostipmr.com/sites/default/files/filefield_paths/rpror.jpg"	
		return {
			member_image,
		}
	}
}
</script>
