<template>
  <div class="home">
    <div class="left">
      <navBar></navBar>
    </div>
    <div class="right">
      <div class="rCont">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import NavBar from "../base/navs";
export default {
  name: "home",
  components: {
    NavBar
  },
  data () {
    return {};
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.home
  height 100%
  width 100%
  display flex
  flex 1
  background #E8EBF0
  position relative
  .left
    flex 0 0 2.5rem
    background black
  .right
    // flex 1
    // display flex
    // flex-direction column
    // overflow hidden
    width 100%
    .rCont
      // flex 1
      // overflow auto
</style>
