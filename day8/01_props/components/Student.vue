<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生名字：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                msg: '我正在学习Vue',
            }
        },
        //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
        props: {
            name: {
                type: String,   //name是字符串
                required: true  //name是必要的
            },
            age: {
                type:Number,
                default: 99 //默认值
            },
            sex: {
                type: String,
                required: true
            }
        }
    }
</script>