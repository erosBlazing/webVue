<template>
    <div>
        <ul>
            <!-- <li v-for="msg in messageList" :key="msg.id"> -->
                <!-- 跳转路由并携带params参数，to的对象写法 -->
                <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{msg.title}}</router-link> -->
            <!-- </li> -->

            <!-- 跳转路由并携带params参数，to的对象写法 -->
            <li v-for="msg in messageList" :key="msg.id">
                <router-link :to="{
                    name: 'xiangqing',
                    query: {
                        id: msg.id,
                        title: msg.title
                    }
                }">
                    {{msg.title}}
                </router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Message',
        data() {
            return {
                messageList: [
                    {id: '001', title: '消息001'},
                    {id: '002', title: '消息002'},
                    {id: '003', title: '消息003'},
                ]
            }
        }
    }
</script>