<template>
  <div class="a">
    重大事项审批页面测试
    <first :text='ceshi'></first>
    <Second :title="title"></Second>
    <yd-timeline>
      <yd-timeline-item>
        <p>【南宁市】您的订单正在配送途中，请您准备签收，感谢您的耐心等待。京东扫码付，单单享立减。</p>
        <p style="margin-top: 10px;">2017-08-18 08:24:18</p>
      </yd-timeline-item>
      <yd-timeline-item>
        <p>【南宁市】您的订单已到达【南宁安吉站】</p>
        <p style="margin-top: 10px;">2017-08-18 07:25:08</p>
      </yd-timeline-item>
      <yd-timeline-item>
        <p>【南宁市】您的订单在京东【南宁分拨中心】发货完成，准备送往京东【南宁安吉站】</p>
        <p style="margin-top: 10px;">2017-08-17 21:44:08</p>
      </yd-timeline-item>
      ......
    </yd-timeline>
    <div class="cc">
      <yd-flexbox>
        <div style="background:red">左侧</div>
        <yd-flexbox-item style="background:green">
          <p style="text-aline:center">中间部分</p>
        </yd-flexbox-item>
        <div style="background:#ff3341">右侧</div>
      </yd-flexbox>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import first from '../component/first'
import Second from '../component/second'
export default {
  name: 'big',
  components: {
    first,
    Second
  },
  data () {
    return {
      title: '组件二的传值',
      ceshi:'按钮'
    }
  },
  created(){
    this.$ajax.get('/api/ghydbg/mos/zhfx.aspx',{
    }).then((data)=>{
      console.log(data)
    }).catch(()=>{

    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.cc .yd-flexbox-item-center
  text-align center
</style>
