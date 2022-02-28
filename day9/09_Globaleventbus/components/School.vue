<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>
<script>
    // 组件交互相关的代码
    export default {
        name: 'School',
        data() {
            return {
                schoolName: '清华',
                address: '北京五道口'
            }
        },
        mounted() {
            this.$bus.$on('hello', (data) => {
                console.log('我是School组件，收到了数据：', data)
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo {
        background-color: orange;
    }
</style>