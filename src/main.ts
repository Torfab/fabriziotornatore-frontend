import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import PrimeVue from 'primevue/config';



// theme import replaced with local placeholders
import '@/assets/primevue/saga-blue-theme.css'
import '@/assets/primevue/primevue.min.css'                 //core css
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
