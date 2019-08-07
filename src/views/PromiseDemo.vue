<template>
  <div>
    <h3>Hello, Promise Demo</h3>
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
        setTimeout(() => {
          this.list.push('request1')
          resolve()
        }, 3000)
      })
    },
    mockRequest2 () {
      return new Promise(resolve => {
        setTimeout(() => {
          this.list.push('request2')
          resolve()
        }, 1000)
      })
    }
  },
  mounted () {
    this.mockRequest1()
    this.mockRequest2()
    this.list.push('3')
  }
}
</script>

<style scoped>

</style>
