<template>
  <div class="a">
    <h1>纵览全局</h1>
    <yd-switch v-model="switch1"></yd-switch>
    <p>【model: switch1 = {{switch1}}】</p>
    <h1>底部按钮</h1>
    <div class="fix">
      <yd-button size="large" type="primary" @click.native="abc">primary</yd-button>
    </div>
    <yd-cell-item arrow>
      <span slot="left">Month：</span>
      <yd-datetime type="month" v-model="datetime3" slot="right"></yd-datetime>
    </yd-cell-item>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "lookGlobal",
  data () {
    return {
      switch1: false,
      datetime3: '2016-06',
    }
  },
  methods: {
    abc () {
      console.log(this.datetime3)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fix
  position absolute
  bottom 0
  right 0
  width 100%
h1
  font-size 0.3rem
</style>
