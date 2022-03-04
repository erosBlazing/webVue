// 引入vue
import Vue from 'vue';
// 引入app组件
import App from './App.vue'

//引入插件
// import plugins from './plugins';

//引入插件
import vueResource from 'vue-resource'
//应用插件
// Vue.use(plugins)

Vue.use(vueResource)

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})