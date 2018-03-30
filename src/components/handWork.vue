<template>
  <div class="home">
    测试
    <Third :title="title"></Third>
  </div>
</template>
<script type="text/ecmascript-6">
import Third from '../component/third'
export default {
  components: {
    Third
  },
  name: "handWork",
  data () {
    return {
      title: [
        { price: 1 },
        { odlPrice: 3 }
      ]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
