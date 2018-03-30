<template>
  <div class="home">
    重大事项审批页面测试
    <first></first>
    <Second :title="title"></Second>
  </div>
</template>
<script type="text/ecmascript-6">
import first from '../component/first'
import Second from '../component/second'
export default {
  name: 'big',
  components: {
    first,
    Second
  },
  data () {
    return {
      title: '组件二的传值'
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
