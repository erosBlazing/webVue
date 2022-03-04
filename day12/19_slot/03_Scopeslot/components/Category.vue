<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot :game="games"></slot>
  </div>
</template>

<script>
    export default {
        name: 'Category',
        props: ['listData', 'title'],
        data() {
            return {
                games: ['埃尔登法环', '全面战争三', '英雄联盟', '劲舞团'],
            }
        }
    }
</script>

<style>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
</style>