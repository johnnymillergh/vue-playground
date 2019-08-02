<template>
  <div class="app-container">
    <h2>Vue 待办事项：</h2>
    <ol>
      <li v-for="(item,index) in todoList" :key="index">
        <label>
          <input type="checkbox"
                 v-on:change="toggle(item)"
                 v-bind:checked="item.done">
          <del v-if="item.done">
            {{ item.text }}
          </del>
          <span v-else>
          {{ item.text }}
        </span>
        </label>
      </li>
    </ol>
    <div>未完成数量：{{ calculateUnone }}</div>
    <div>已完成数量：{{ calculateDone }}</div>
    <div>已完成数量：{{ calculateDone2() }}</div>
    <button @click="accessComputed">点我访问计算属性</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoList: [
        { text: '学习 JavaScript', done: false },
        { text: '学习 ECMAScript', done: false },
        { text: '学习 Vue', done: false }
      ],
      count: 0
    }
  },
  computed: {
    calculateUnone () {
      return this.todoList.filter(item => {
        return item.done === false
      }).length
    },
    calculateDone () {
      return (
        this.todoList.filter(item => {
          return item.done
        }).length +
        '，当前时间：' +
        new Date()
      )
    }
  },
  methods: {
    toggle (todoItem) {
      todoItem.done = !todoItem.done
      this.count++
    },
    calculateDone2 () {
      return (
        this.todoList.filter(item => {
          return item.done
        }).length + '，当前时间：' + new Date()
      )
    },
    accessComputed () {
      console.log(this.calculateDone)
      this.testMethod11111()
    },
    testMethod () {
      console.log('测试方法')
    }
  }
}
</script>

<style>
body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica, serif;
}

.app-container {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}

</style>
