<template>
  <div class="a">
    <yd-tab>
      <yd-tab-panel label="选项一">土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。</yd-tab-panel>
      <yd-tab-panel label="选项二">我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。</yd-tab-panel>
      <yd-tab-panel label="选项三">时间是一切财富中最宝贵的财富。</yd-tab-panel>
      <yd-tab-panel label="选项四">真理惟一可靠的标准就是永远自相符合。</yd-tab-panel>
    </yd-tab>
    <yd-navbar title="NavBar">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
      <router-link :to="{name:'big'}" slot="right">
        <yd-navbar-next-icon></yd-navbar-next-icon>
      </router-link>
    </yd-navbar>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "notice",
  data () {
    return {}
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
