import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Import views
import Home from '../views/Home/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
   },
   {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import('../views/Error/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router