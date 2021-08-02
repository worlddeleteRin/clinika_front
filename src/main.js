import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import { store }  from './store.js'
import { createWebHashHistory, createRouter} from 'vue-router'
import { routes } from './routes.js';
// element plus library
//import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
// v-mask 
import Maska from 'maska'


const app = createApp(App)

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

//app.use(ElementPlus)
app.use(Maska)
app.use(store)
app.use(router)

app.mount('#app')
