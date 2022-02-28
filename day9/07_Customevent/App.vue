<template>
  <div class="app">
      <h1>{{msg}}，{{studenName}}</h1>
      <!-- 通过父组件给子组件传递函数类型props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName"></School>
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
      <Student v-on:test="getStudentName" @demo="m1"></Student>

      <!-- 使用ref实现：子给父传递数据 -->
      <!-- <Student ref="student"></Student> -->
  </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name: 'App',
        components: {
            Student,
            School
        },
        data() {
            return {
                msg: 'Hello',
                studenName:''
            }
        },
        methods: {
            getSchoolName(name) {
                console.log('收到学校名为：', name)
            },
            getStudentName(name, ...params) {
                this.studenName = name
            },
            m1() {
                console.log('demo事件被触发了')
            }
        },
        // mounted() {
        //     this.$refs.student.$on('test', this.getStudentName)
        // }
    }
</script>

<style scoped>
    .app {
        background-color: gray;
    }
</style>