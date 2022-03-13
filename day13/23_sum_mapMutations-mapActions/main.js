// 引入vue
import Vue from 'vue';
// 引入app组件
import App from './App.vue'

//引入插件
// import plugins from './plugins';

//应用插件
// Vue.use(plugins)

// 引入vuex
import store from './store'

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})