<template>
  <div>
    <h3>Hello, Promise Demo</h3>
    <el-button @click="onHandlePromise">点我触发Promise</el-button>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PromiseDemo',
  data () {
    return {
      list: []
    }
  },
  methods: {
    mockRequest1 () {
      return new Promise(resolve => {
        console.log('发送第1个请求')
        setTimeout(() => {
          this.list.push('request1')
          resolve()
        }, 3000)
      })
    },
    mockRequest2 () {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('发送第2个请求')
          this.list.push('request2')
          resolve()
        }, 1000)
      })
    },
    onHandlePromise () {
      return new Promise((resolve, reject) => {
        reject(new Error('发生错误！'))
      })
    },
    init () {
      this.mockRequest1()
      this.mockRequest2()
      this.list.push('3')
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>

</style>
