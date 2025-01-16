import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import App from '@/app/App.vue'
import { router } from '@/app/router/index.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
