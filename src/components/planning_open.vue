<template>
  <div class="box">
    <Four :datas='getData'></Four>
  </div>
</template>
<script type="text/ecmascript-6">
import Four from '../component/four'
export default {
  name: "planning_open",
  components:{
    Four
  },
  data() {
    return {
      getData:{
        titles:'头部信息',
        contens:'月上柳梢头,人约黄昏后'
      }
    };
  },
  methods: {
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
