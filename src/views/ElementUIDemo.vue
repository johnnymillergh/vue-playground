<template>
  <div>
    <el-button @click="onClickButton">Click</el-button>
    <button>Click</button>
  </div>
</template>

<script>
export default {
  name: 'ElementUIDemo',
  methods: {
    onClickButton () {
      console.log('Hello')
    }
  }
}
</script>

<style scoped>

</style>
