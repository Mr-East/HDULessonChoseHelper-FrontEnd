// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import axios from 'axios';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import moment from 'moment';

moment.locale('zh-cn');

const app = createApp(App)
app.config.globalProperties.$moment = moment

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)

app.mount('#app')
