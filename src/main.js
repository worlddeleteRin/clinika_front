import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import { store }  from './store.js'
import { createWebHashHistory, createRouter} from 'vue-router'
import { routes } from './routes.js';
// element plus library
//import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css';
// v-mask 
import Maska from 'maska'


const app = createApp(App)

//const router = createRouter({
//	history: createWebHashHistory(),
//	routes
//})

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior (to, from, savedPosition) {
	console.log(to,  from , savedPosition)
		return { top: 0 }
		// return desired position
	}
})



//app.use(ElementPlus)
app.use(Maska)
app.use(store)
app.use(router)

app.mount('#app')
