<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TaskMatter @addTodo='addTodo'></TaskMatter>
        <TaskList :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo"></TaskList>
        <Final :todos="todos" @checkAlltodo="checkAlltodo" @clearAllTodo="clearAllTodo"></Final>
      </div>
    </div>
  </div>
</template>

<script>
import TaskMatter from "./components/task-matters.vue";
import TaskList from "./components/task-list.vue";
import Final from "./components/Final.vue";

export default {
  name: "App",
  data() {
    return {
        todos: JSON.parse(localStorage.getItem('todos')) || []
    };
    },
  components: {
    TaskMatter,
    TaskList,
    Final,
  },
  methods: {
      //添加一个todo
      addTodo(todoObj) {
          this.todos.unshift(todoObj)
      },
      //勾选or取消勾选一个todo
      checkTodo(id) {
          this.todos.forEach((todo) => {
              if(todo.id === id) {
                  todo.done = !todo.done
              }
          })
      },

      delTodo(id) {
          this.todos = this.todos.filter((todo) => {
              return todo.id !== id
          })
      },

      checkAlltodo(done) {
          this.todos.forEach((todo) => {
              todo.done = done
          })
      },

      clearAllTodo() {
         this.todos = this.todos.filter((todo) => {
              return !todo.done
          })
      }
  },
  watch: {
      todos: {
        deep: true,
        handler(value) {
          localStorage.setItem('todos', JSON.stringify(value))
        }
      }
  }
};
</script>

<style>
    /*base*/
    body {
      background: #fff;
    }

    .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
    }

    .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
    }

    .btn:focus {
      outline: none;
    }

    .todo-container {
      width: 600px;
      margin: 0 auto;
    }
    .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
</style>
