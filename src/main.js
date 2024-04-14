import 'materialize-css/dist/css/materialize.min.css'

import router from './router'
import store from './store'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(store).use(router).mount('#app')
