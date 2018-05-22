<template>
  <div class="wrap">
    <button class="btn" @mousedown="styles" ref="ress" @mouseup="up">{{text}}</button>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'first',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods:{
    styles(){
      this.$refs.ress.style.background='#76EEC6'
    },
    up(){
      this.$refs.ress.style.background='#FFE1FF'
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.btn
  width 0.8rem
  height 0.5rem
  background #FFE1FF
  line-height 0.5rem
  text-align center
  font-size 0.25rem
  outline none
  border none
  border-radius 2px
  color black
  &:hover
    color gray
</style>
