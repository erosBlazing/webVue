//该文件用于创建Vuex最为核心的store

import Vue from 'vue'

import Vuex from 'vuex'

//准备 actions 用于响应组件中的动作
const actions = {
    add(context, value) {
        context.commit('ADD', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    }
}

//准备 mutations 用于操作数据
const mutations = {
    ADD(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//准备 state 用于存储数据
const state = {
    sum: 0,
    school: 'Web',
    subJect: 'Vue'
}

Vue.use(Vuex)

//创建并导出 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})