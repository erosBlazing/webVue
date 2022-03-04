<template>
  <div>
    <div class="container">
        <Category :listData="foods" title="美食">
            <img src="https://s1.ax1x.com/2018/04/16/Ceqb0f.jpg" alt="">
        </Category>
        <Category :listData="games" title="游戏">
            <ul>
                <li v-for="(item, index) in games" :key="index">{{item}}</li>
            </ul>
        </Category>
        <Category :listData="films" title="电影">
            <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
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
        data() {
            return {
                foods: ['火锅', '烧烤', '小龙虾', '牛排'],
                games: ['埃尔登法环', '全面战争三', '英雄联盟', '劲舞团'],
                films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《浴血黑帮》']
            }
        }
    }
</script>

<style lang="css">
    .container {
        display: flex;
        justify-content: space-around;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
    img {
        width: 100%;
    }
    video {
        width: 100%;
    }
</style>