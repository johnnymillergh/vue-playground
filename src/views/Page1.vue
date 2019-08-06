<template>
  <div>
    <h1>Hello, Page1</h1>
    <component1 :message-from-parent="message" @send-input-text="onReceive"/>
  </div>
</template>

<script>
import Component1 from '../components/Component1.vue'

export default {
  name: 'Page1',
  components: {
    Component1
  },
  data () {
    return {
      message: '你好！这是父组件发送给子组件的信息！'
    }
  },
  methods: {
    onReceive (message) {
      console.log('父组件接收到了子组件传来的信息，message =', message)
    }
  }
}
</script>
