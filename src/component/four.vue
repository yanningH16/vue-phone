<template>
  <div class="www">
    <!-- 装装一种布局的类型 -->
    <!-- 头部 -->
    <div>
      <h2>{{datas.titles}}</h2>
    </div>
    <!-- 内容部分 -->
    <div class="contet">
      <p>{{datas.contens}}</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'four',
  props: {
    datas: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.www
  height 100%
  h2
    margin 20px
    background #D4D4D4
    font-size 15px
    padding 10px
    border-radius 3px
  .contet
    margin 20px
    background #CDCDB4
    height 100%
    font-size 13px
    padding 5px
    padding-bottom 30px
</style>
