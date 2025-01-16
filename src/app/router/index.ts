import {createRouter, createWebHistory} from 'vue-router'
import Main from '../../shared/layouts/Main.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/Home.vue'),
            meta: {
                layout: Main
            }
        }
    ]
})

export { router }