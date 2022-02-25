<template>
  <div class="matters">
      <input type="text" v-model="task" placeholder="请输入你的任务名称，按回车键确认">
  </div>
</template>

<script>
    export default {
        name: 'Taskmatters',
        data() {
            return {
                task: ''
            }
        }
    }
</script>

<style scoped>
    .matters {
        width: 370px;
        margin-bottom: 5px;
    }
    .matters input {
        width: 100%;
        height: 25px;
        line-height: 25px;
        border-radius: 5px;
        outline: 0;
        outline-color: skyblue;
    }
    .matters input:focus {
        box-shadow: 0 0 5px skyblue;
    }
</style>