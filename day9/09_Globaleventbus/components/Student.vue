<template>
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: 'Tom',
            age: '18'
        }
    },
    methods: {
        sendStudentName() {
            this.$bus.$emit('hello', this.name)
        }
    }
}
</script>
