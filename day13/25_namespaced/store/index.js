//该文件用于创建Vuex最为核心的store

import Vue from 'vue'

import Vuex from 'vuex'

import axios from 'axios'

import {nanoid} from 'nanoid'

//求和相关的配置
const countOptions = {
    namespaced: true,
    state: {
        sum: 0,
        school: 'Web',
        subJect: 'Vue',
    },
    actions: {
        add(context, value) {
            context.commit('ADD', value)
        },
        jian(context, value) {
            context.commit('JIAN', value)
        },
        incrementOdd(context, value) {
            if(countOptions.state.sum % 2) {
                context.commit('ADD', value)
            }
        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit('ADD', value)
            }, 1000)
        }
    },
    mutations: {
        ADD(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        }
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }

}

// 人员管理相关的配置
const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if(value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('请添加姓王的人')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {id: nanoid(), name: response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
    state: {
        personList: [{id: '001', name: '张三'}]
    }
}

Vue.use(Vuex)

//创建并导出 store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})