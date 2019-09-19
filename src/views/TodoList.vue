<template>
  <div class="app-container">
    <h2>Vue 待办事项：</h2>
    <ol>
      <li v-for="(item,index) in todoList" :key="index">
        <label>
          <input type="checkbox" v-on:change="toggle(item)" v-bind:checked="item.done">
          <del v-if="item.done">{{ item.text }}</del>
          <span v-else>{{ item.text }}</span>
        </label>
      </li>
    </ol>
    <div>未完成数量：{{ calculateUndone }}</div>
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
      count: 0,
      myObject: {
        id: 0,
        name: 'My Object'
      }
    }
  },
  computed: {
    calculateUndone () {
      return this.todoList.filter(item => {
        return item.done === false
      }).length
    },
    calculateDone () {
      return this.todoList.filter(item => {
        return item.done
      }).length + '，当前时间：' + new Date()
    }
  },
  watch: {
    // 正确示例：Vue 能侦测到 count 变量的改变。可以在控制台中查看结果
    count: function (newValue, oldValue) {
      console.log(`count 改变了！newValue:${newValue}, oldValue${oldValue}`)
    },
    todoList: {
      deep: true,
      handler (newValue, oldValue) {
        console.log(`todoList 改变了！newValue:`, newValue, `oldValue`, oldValue)
      }
    },
    myObject: {
      deep: true,
      handler (newValue, oldValue) {
        console.log(`myObject 改变了！newValue:`, newValue, `oldValue`, oldValue)
      }
    }
  },
  methods: {
    toggle (todoItem) {
      todoItem.done = !todoItem.done
      this.count++
    },
    calculateDone2 () {
      return this.todoList.filter(item => {
        return item.done
      }).length + '，当前时间：' + new Date()
    },
    accessComputed () {
      this.todoList = [1, 2, 3]
      this.myObject.id = Math.random()
    },
    testMethod () {
      console.log('测试方法')
    }
  }
}
</script>

<style scoped>
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
