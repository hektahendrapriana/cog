import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowLeftLong)
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)


app.use(router)

app.mount('#app')
