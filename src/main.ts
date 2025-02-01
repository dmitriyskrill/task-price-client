import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/app/App.vue'
import { router } from '@/app/router/index.ts'
import { registerPlugins } from '@/plugins/index.ts'
import vuetify from '@/plugins/vuetify.ts'

const app = createApp(App)

registerPlugins(app)
app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
