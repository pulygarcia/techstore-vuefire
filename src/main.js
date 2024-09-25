import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//FB
import { VueFire, VueFireAuth } from 'vuefire'
import {firebaseApp} from './config/firebase.js'

//FK
import config from '../formkit.config.js'
import { plugin, defaultConfig } from '@formkit/vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
})

app.use(createPinia())
app.use(plugin, defaultConfig(config))
app.use(router)

app.mount('#app')
