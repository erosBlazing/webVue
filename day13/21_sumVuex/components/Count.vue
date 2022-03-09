<template>
  <div>
      <h1>当前求和为：{{this.$store.state.sum}}</h1>
      <select v-model.number="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">为奇数再加</button>
      <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
    export default {
        name: 'Count',
        data() {
            return {
                number: 1
            }
        },
        methods: {
            increment() {
                this.$store.dispatch('add', this.number)
            },
            decrement() {
                this.$store.dispatch('jian', this.number)
            },
            incrementOdd() {
                if(this.$store.state.sum % 2) {
                    this.$store.dispatch('add', this.number)
                }
            },
            incrementWait() {
                setTimeout(() => {
                    this.$store.dispatch('add', this.number)
                }, 1000)
            }
        }
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>