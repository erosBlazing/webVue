<template>
  <div>
    <div class="container">
        <Category :listData="foods" title="美食">
            <img src="https://s1.ax1x.com/2018/04/16/Ceqb0f.jpg" alt="" slot="content">
            <a href="https://www.baidu.com" slot="footer">更多美食</a>
        </Category>
        <Category :listData="games" title="游戏">
            <ul slot="content">
                <li v-for="(item, index) in games" :key="index">{{item}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="#">单机游戏</a>
                <a href="#">网络游戏</a>
            </div>
        </Category>
        <Category :listData="films" title="电影">
            <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls slot="content"></video>
            <template v-slot:footer>
                <div class="foot">
                    <a href="#">经典</a>
                    <a href="#">推荐</a>
                    <a href="#">热门</a>
                </div>
                <h4>欢迎观影</h4>
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
    .container, .foot {
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
    h4 {
        text-align: center;
    }
</style>