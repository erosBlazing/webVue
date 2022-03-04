<template>
  <div>
    <div class="container">
        <Category title="游戏">
            <template scope="tes">
                <ul>
                    <li v-for="(g, index) in tes.game" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>
        <Category title="游戏">
            <template scope="tes">
                <ol>
                    <li v-for="(g, index) in tes.game" :key="index">{{g}}</li>
                </ol>
            </template>
        </Category>
        <Category title="游戏">
            <template scope="tes">
                    <h4 v-for="(g, index) in tes.game" :key="index">{{g}}</h4>
            </template>
        </Category> 
    </div>
  </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
        name: "App",
        components: {
            Category
        },
    }
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
</style>