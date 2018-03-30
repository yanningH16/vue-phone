<template>
  <div class="a">
    档案查询
    <yd-button @click.native="openConfrim" size="large">Confirm</yd-button>
    <div class="test">测试一下</div>
    <yd-button size="large" type="danger" @click.native="show4 = true">右侧弹出</yd-button>
    <yd-popup v-model="show4" position="right">
      <yd-button type="danger" style="margin: 30px;" @click.native="show4 = false">右侧关闭</yd-button>
    </yd-popup>
    <yd-backtop>返回</yd-backtop>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'search',
  data () {
    return {
      show4: false
    }
  },
  methods: {
    openConfrim () {
      this.$dialog.confirm({
        title: '选填标题',
        mes: '我有一个小毛驴我从来也不骑！',
        opts: () => {
          this.$dialog.toast({ mes: '你点了确定', timeout: 1000 })
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.test
  background black
  width 100%
  height 50px
  color white
  font-size 0.3rem
</style>
