 <!-- A组件接收数据，绑定事件 -->
<template>
  <div class="com-a">
      COM-A ---{{str}}
  </div>
</template>

<script>
import eventBus from '@/eventBus'
export default {
  data () {
    return {
      str: ''
    }
  },
  created () {
    eventBus.$on('B2A', (data) => {
      this.str = data
    })
  }
}
</script>

<style>

</style>
