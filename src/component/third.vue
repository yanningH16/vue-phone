<template>
  <div>
    <div>组件三</div>
    <div v-for="(item,index) in title" :key="index">
      <h1>{{item.price}}</h1>
      <h2>{{item.odlPrice}}</h2>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'third',
  props: {
    title: {
      type: Array,
      default: []
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
