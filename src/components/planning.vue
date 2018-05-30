<template>
  <div class="box">
    <router-link :to="{name:'planning_open'}"><el-button>跳转吧，哈哈哈</el-button></router-link>
    <ul>
      <li v-for="(item,index) in arrText" :key="index" @click="tab(index)" :class='{active:index===num}'>{{item}}</li>
    </ul>
    <div class="text">
      <p v-for="(items,index) in arrConten" :key="index" v-show="index===num">{{items}}</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'planning',
  data () {
    return {
      arrText: ['月落', '乌啼', '霜满天', '江枫', '渔火', '对愁眠'],
      arrConten: ['月上柳枝头', '乌鸦啼血猿哀鸣', '霜叶红于二月花', '一江春水向东流','授人以鱼不如授人以渔', '春眠不觉晓'],
      num: 0
    }
  },
  methods: {
    tab (val) {
      console.log(val)
      this.num = val
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
ul
  display flex
  justify-content space-around
  margin-top 1rem
  font-size 0.3rem
  li
    // background pink
    color #8B008B
    padding 5px
    text-align center
    border-radius 3px
    cursor pointer
    width 17%
  .active
    color #C67171
    border-bottom 2px solid #C67171
    // background #C0FF3E
.text
  width 100%
  height 300px
  border 1px solid #ff3341
  margin-top 0.5rem
  padding 1rem
  font-size 0.3rem
</style>
