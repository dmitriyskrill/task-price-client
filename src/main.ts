import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/app/App.vue'
import { router } from '@/app/router'
import { registerPlugins } from '@/plugins'
import vuetify from '@/plugins/vuetify'

const app = createApp(App)

registerPlugins(app)
app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
