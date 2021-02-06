import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Testimony from "@/views/Testimony";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/testimony',
        name: 'testimony',
        component: Testimony
    }
]

const scrollBehavior = () => {
    return { x: 0, y: 0 }
}

const router = new VueRouter({
    scrollBehavior,
    routes,
})

export default router