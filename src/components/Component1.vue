<template>
  <div>
    <h1>父组件传给子组件的Message: {{ messageFromParent }}</h1>
    <label>
      <input class="input-box"
             type="text"
             v-model="inputText"
             placeholder="请输入要发送给父组件的信息，然后查看控制台"
             @blur="onBlurInput"/>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  props: {
    messageFromParent: {
      type: String,
      required: true,
      validator (value) {
        return value.length !== 0
      }
    }
  },
  data () {
    return {
      inputText: ''
    }
  },
  methods: {
    onBlurInput () {
      this.$emit('send-input-text', this.inputText, '第二个参数', '第三个参数')
    }
  }
}
</script>

<style scoped>
.input-box {
  width: 250px;
}
</style>
