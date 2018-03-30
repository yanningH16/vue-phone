<template>
  <div>
    <div>组件2</div>
    <h1 class="title">{{title}}</h1>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'second',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
