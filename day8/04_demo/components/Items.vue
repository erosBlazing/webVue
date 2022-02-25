<template>
  <div class="item">
      <input type="checkbox" name="item">
      <span>吃饭</span>
  </div>
</template>

<script>
    export default {
        name: 'Item'
    }
</script>

<style>
    .item {
        width: 376px;
        height: 25px;
        line-height: 25px;
        border-radius: 5px;
        border: 1px solid #d7d7d7;
    }
    .item input, span {
        line-height: 25px;
    }
</style>