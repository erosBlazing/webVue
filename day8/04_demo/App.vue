<template>
  <div class="box">
      <Taskmatter></Taskmatter>
      <Tasklist></Tasklist>
      <Final></Final>
  </div>
</template>

<script>
    import Taskmatter from './components/task-matters.vue'
    import Tasklist from './components/task-list.vue'
    import Final from './components/Final.vue'

    export default {
        name: 'App',
        components: {
            Taskmatter,
            Tasklist,
            Final
        }
    }
</script>

<style>
    .box {
        width: 380px;
        border: 1px solid #f3f3f3;
        margin: 0 auto;
        padding: 5px;
    }
</style>