import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import PrimeVue from 'primevue/config';



import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css'


import 'tippy.js/dist/tippy.css' // optional for styling


import './assets/main.css'
import './assets/markdown.scss'

import VueTippy from 'vue-tippy'



const app = createApp(App)

app.use(VueTippy);

app.use(router)
app.use(PrimeVue);

router.isReady().then(()=>app.mount('#app'))
