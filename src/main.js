// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import axios from 'axios';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8081'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)

app.mount('#app')
