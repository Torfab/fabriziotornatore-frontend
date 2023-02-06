import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';

import './assets/main.css'
import './assets/markdown2.scss'


import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css'




const app = createApp(App)

app.use(router)
app.use(PrimeVue);

router.isReady().then(()=>app.mount('#app'))
