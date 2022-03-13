// 用于创建整个应用的路由器
import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

//创建并暴露路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})