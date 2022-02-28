// 项目的入口文件

//引入Vue
import Vue from 'vue'
// 引入App组件，所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// const Demo = Vue.extend({})

// const d = new Demo()

// Vue.prototype.x = d

// 创建Vue实例对象
new Vue({
  render: h => h(App)
}).$mount('#app')
