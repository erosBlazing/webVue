<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input type="text" 
        :value="todo.title" 
        v-show="todo.isEdit" 
        @blur="handelBlur(todo, $event)"
        ref="inputTitle"
        >
    </label>
    <button class="btn btn-danger" @click="del(todo.id)">删除</button>
    <button class="btn btn-edit" @click="Edit(todo)">编辑</button>
  </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
    name: "Item",
    props: ['todo'],
    methods: {
        handleCheck(id) {
            //通知App组件将对应的todo对象的done值取反
            this.$bus.$emit('checkTodo', id)
        },
        del(id) {
            if(confirm('确定删除？')) {
                pubsub.publish('delTodo', id)
            }
        },
        Edit(todo) {
            if(todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(todo,'isEdit', true)
            }
            this.$nextTick(() => this.$refs.inputTitle.focus())
        },
        //失去焦点回调，执行修改逻辑
        handelBlur(todo, e) {
            todo.isEdit = false
            if(!e.target.value.trim()) {
                return alert('输入不能为空')
            }
        }
    }
    };
</script>

<style scoped>
   /*item*/
    li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
    }

    li label {
      float: left;
      cursor: pointer;
    }

    li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }

    li button {
      float: right;
      display: none;
      margin-top: 3px;
    }

    li:before {
      content: initial;
    }

    li:last-child {
      border-bottom: none;
    }
    li:hover {
        background-color: #ddd;
    }

    li:hover button {
        display: block;
    }
</style>
