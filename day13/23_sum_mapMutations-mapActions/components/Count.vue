<template>
  <div>
      <h1>当前求和为：{{sum}}</h1>
      <h1>十倍的和：{{bigSum}}</h1>
      <h1>我在{{school}}，学习{{subJect}}</h1>
      <select v-model.number="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment(number)">+</button>
      <button @click="decrement(number)">-</button>
      <button @click="incrementOdd(number)">为奇数再加</button>
      <button @click="incrementWait(number)">等一等再加</button>
  </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: 'Count',
        data() {
            return {
                number: 1
            }
        },
        computed: {

            //对象写法
            // ...mapState({
            //     sum: 'sum',
            //     school: 'school',
            //     subJect: 'subJect'
            // }),

            //数组写法,用于映射 state 中的数据为计算属性
            ...mapState(['sum', 'school', 'subJect']),
            
            // 用于映射 getters 中的数据为计算属性
            ...mapGetters(['bigSum'])
        },
        methods: {
            // increment() {
            //     this.$store.dispatch('add', this.number)
            // },
            // decrement() {
            //     this.$store.dispatch('jian', this.number)
            // },

            ...mapMutations({increment: 'ADD', decrement: 'JIAN'}),

            // incrementOdd() {
            //     if(this.$store.state.sum % 2) {
            //         this.$store.dispatch('add', this.number)
            //     }
            // },
            // incrementWait() {
            //     setTimeout(() => {
            //         this.$store.dispatch('add', this.number)
            //     }, 1000)
            // }

            ...mapActions({incrementOdd: 'odd', incrementWait: 'addWait'})
        },
        mounted() {
            const x = mapState({
                sum: 'sum',
                school: 'school',
                subJect: 'subJect'
            })
            console.log(x)
        }
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>