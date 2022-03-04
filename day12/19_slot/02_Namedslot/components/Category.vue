<template>
  <div class="category">
      <h3>{{title}}</h3>
      <!-- 定义一个插槽（挖个坑，等着组件的使用者填充） -->
      <slot name="content"></slot>
      <slot name="footer"></slot>
  </div>
</template>

<script>
    export default {
        name: 'Category',
        props: ['listData', 'title']
    }
</script>

<style>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
</style>