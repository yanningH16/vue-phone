<template>
  <div class="box">
    <h1>
      <span>规划审批</span>
    </h1>
    <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column prop="date" label="类型" align="center">
      </el-table-column>
      <el-table-column prop="name" label="项目" align="center">
        <template slot-scope="scope">
          <p @click="ceshi">{{scope.row.name}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="时间" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "planing",
  data () {
    return {
      tableData: [
        {
          date: "行政发文",
          name: "时代海岸度假公寓",
          address: "2017.8.27"
        },
        {
          date: "行政发文",
          name: "时代海岸度假公寓",
          address: "2017.8.27"
        },
        {
          date: "行政发文",
          name: "时代海岸度假公寓",
          address: "2017.8.27"
        },
        {
          date: "行政发文",
          name: "时代海岸度假公寓",
          address: "2017.8.27"
        }
      ]
    };
  },
  methods: {
    ceshi () {
      this.$router.push({ name: "planning_open" });
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.box
  margin 20px 20px 0 20px
  background white
  h1
    width 100%
    height 30px
    line-height 30px
    background gray
    border-radius 3px
    text-align left
    span
      padding-left 10px
</style>
