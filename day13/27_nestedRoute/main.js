// 引入vue
import Vue from 'vue';
// 引入app组件
import App from './App.vue'

//引入Vue-router
import VueRouter from 'vue-router';

import router from './router'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})