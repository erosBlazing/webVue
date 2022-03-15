// 用于创建整个应用的路由器
import VueRouter from "vue-router";

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props: {
                            //     a: 1,
                            //     b: 'hello'
                            // }

                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props: true
                            
                            // props的第二种写法，值为函数
                            props({query:{id, title}}) {
                                return {id, title}
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫
router.beforeEach((to, from, next) => {
    console.log(to, from)
    if(to.path === '/home/news' || to.path === '/home/message') {
        if(localStorage.getItem('school') === 'Vue') {
            next()
        }
    }else {
        next()
    }
})

export default router