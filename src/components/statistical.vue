<template>
  <div class="a">
    效能统计
    <div>
      <yd-cell-group>
        <yd-cell-item arrow>
          <span slot="left">所在地区：</span>
          <input slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly placeholder="请选择收货地址">
        </yd-cell-item>
      </yd-cell-group>
      <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>

      <yd-accordion>
        <yd-accordion-item title="李白《月下独酌》">
          <div style="padding: .24rem;">
            <p>花间一壶酒，独酌无相亲。</p>
            <p>举杯邀明月，对影成三人。</p>
            <p>月既不解饮，影徒随我身。</p>
            <p>暂伴月将影，行乐须及春。</p>
            <p>我歌月徘徊，我舞影零乱。</p>
            <p>醒时同交欢，醉后各分散。</p>
            <p>永结无情游，相期邈云汉。</p>
          </div>
        </yd-accordion-item>
        <yd-accordion-item title="杜甫《望岳》">
          <div style="padding: .24rem;">
            <p>岱宗夫如何，齐鲁青未了。</p>
            <p>造化钟神秀，阴阳割昏晓。</p>
            <p>荡胸生层云，决眦入归鸟。</p>
            <p>会当凌绝顶，一览众山小。</p>
          </div>
        </yd-accordion-item>
        <yd-accordion-item title="王维《青溪》">
          <div style="padding: .24rem;">
            <p>言入黄花川，每逐青溪水。</p>
            <p>随山将万转，趣途无百里。</p>
            <p>声喧乱石中，色静深松里。</p>
            <p>漾漾泛菱荇，澄澄映葭苇。</p>
            <p>我心素已闲，清川澹如此。</p>
            <p>请留盘石上，垂钓将已矣。</p>
          </div>
        </yd-accordion-item>
      </yd-accordion>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import District from 'ydui-district/dist/jd_province_city_area_id';
export default {
  name: "statistical",
  data () {
    return {
      show1: false,
      model1: '',
      district: District
    }
  },
  methods: {
    result1 (ret) {
      console.log(ret.itemName1)
      this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
