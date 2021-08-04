<template>

<div class="px-5 relative bg-black py-14 rounded-md max-w-[900px] mx-auto"
	style=""
>
	<div class="z-50">	

		<div class="px-3 text-3xl font-semibold text-center text-white md:text-4xl">
			Запись на прием
		</div>

		<div class="flex flex-col items-center w-full mt-10">
			<div class="max-w-[350px] w-full">
				<input
					v-model="contact_form.name"
					placeholder="Ваше Имя"
					class="w-full py-4 pl-5 pr-3 bg-white rounded-md"
				/>
			</div>
			<div class="max-w-[350px] w-full mt-4">
				<input
					v-model="contact_form.phone_mask"
					v-maska="'+7 (###) ###-##-##'"
					@maska="setUnmaskedPhone($event)"
					placeholder="Ваше Телефон"
					class="w-full py-4 pl-5 pr-3 bg-white rounded-md"
				/>
			</div>
		</div>
		<!-- send form button -->
		<div 
		@click="sendContactRequest"
		class="select-none text-black bg-white w-full max-w-[300px] text-center mt-8 py-4 px-3 rounded-md
		text-lg tracking-wider mx-auto font-medium cursor-pointer">
			Отправить заявку		
		</div>
		<!-- eof senf form button -->
	</div>


</div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex';
// import { ElNotification } from 'element-plus';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
// custom imports
import { APIsendContactRequest } from "@/api/contact.js";

export default {
	name: "ContactFormMain",
	data () {
		return {
			contact_name: '',
			contact_phone: '',
		}
	},
	setup () {
		const store = useStore()
		const request_sent_msg = 'Ваша заявка успешно отправлена! В ближайшее время с Вами свяжется менеджер  🧑'
		const contact_form = reactive({
			name: '',
			phone: '',
			phone_mask: '',
		})
		// functions
		function validateContactInfo () {
			var is_valid = {
				status: false,
				message: ""
			}
			if (contact_form.name.length == 0) {
				is_valid.message = "Введите ваше имя"
				return is_valid
			}
			if (contact_form.phone.length != 10) {
				is_valid.message = "Корректно введите ваш номер телефона"
				return is_valid
			}
			is_valid.status = true
			return is_valid
		}
		function errorSendContactRequest (message) {
			createToast(
				message, {
				timeout: 3000,
				type: 'danger',
				showIcon: true,
			//	toastBackgroundColor: "black"
				}
			)
		}
		function successSendContactRequest () {
			createToast(
				request_sent_msg, {
				timeout: 8000,
				type: 'success',
				showIcon: true,
				}
			)
		}

		function clearForm() {
			contact_form.name = ''
			contact_form.phone = ''
			contact_form.phone_mask = ''
		}

		function setUnmaskedPhone(event) {
			var raw_phone = event.target.getAttribute("data-mask-raw-value")
			contact_form.phone = raw_phone
		}
		async function sendContactRequest () {
			var is_valid = validateContactInfo() 
			if (!is_valid.status) {
				return errorSendContactRequest(is_valid.message)
			}
			const send_status = await APIsendContactRequest(contact_form)
			if (!send_status) {
				return errorSendContactRequest('Ошибка при отправке заявки')
			}
			// close main contact popup, if it is open
			successSendContactRequest()
			clearForm()
			store.commit('setContactMainOpen', false)
		}
		return {
			contact_form,
			// functions
			setUnmaskedPhone,
			sendContactRequest,
			request_sent_msg,
		}
	}
}
</script>

