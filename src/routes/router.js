import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home.vue'
import Videos from '@/pages/Videos.vue'
import Sobre from '@/pages/Sobre.vue'
import Contato from '@/pages/Contato.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/videos',
        component: Videos
    },
    {
        path: '/sobre',
        component: Sobre
    },
    {
        path: '/contato',
        component: Contato
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router