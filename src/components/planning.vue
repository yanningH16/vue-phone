<template>
  <div id="wrap" v-loading="loading">
    <!-- <div class="head">重大事项监督</div> -->
    <!-- 内容部分 -->
    <div class="content">
      <el-table :data="tableData3" style="width: 100%">
        <el-table-column prop="NUM" label="序号" align="center">
        </el-table-column>
        <el-table-column prop="UR_ZONE" label="项目类型" align="center">
        </el-table-column>
        <el-table-column prop="在办宗数" label="在办宗数" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary">查看列表</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 点击打开嵌套的表格 -->
    <div>
      <el-dialog title='' :visible.sync="dialogTableVisible" width="100%">
        <div class="search">
          <el-col :span="10">
            <el-input v-model="input" placeholder="请输入项目名称/编号"></el-input>
          </el-col>
          <el-col :span="8">
            <el-button type="success" plain @click='search'>搜索</el-button>
          </el-col>
        </div>
        <el-table :data="gridData" height='550px'>
          <el-table-column property="NUM" label="序号" align="center"></el-table-column>
          <el-table-column property="BZ_NAME" label="类型" align="center"></el-table-column>
          <el-table-column property="WI_XNAME" label="项目名称" align="center"></el-table-column>
          <el-table-column property="WI_ID" label="项目编号" align="center"></el-table-column>
          <el-table-column property="WI_RGTIME" label="日期" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.WI_RGTIME }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button @click="handleClickDetail(scope.row)" type="primary">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <p class="more" v-show="more" @click='loadMore'>点击加载更多...</p>
        <p class="more" v-show="ing">
          <i class="el-icon-loading"></i>
        </p>
        <p class="more" v-show="end">所有数据已加载完毕</p>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "planing",
  data () {
    return {
      tableData3: [],
      loading: true,
      gridData: [],
      dialogTableVisible: false,
      page: 1,
      end: false,
      more: true,
      ur_zone: '',
      ing: false,
      input: ''
    };
  },
  created () {
    this.getList()
  },
  methods: {
    // 当点击查看的时候 进行查看
    handleClick (val) {
      this.page = 1
      console.log(val)
      this.end = false
      this.ur_zone = val.UR_ZONE
      this.gridData = []
      this.dialogTableVisible = true
      this.getCoverList()
    },
    // 遮罩层出现后渲染数据
    getCoverList (type) {
      this.ing = true
      this.more = false
      this.$ajax.get('/api/ghydbg/mos/getkszblist.aspx', {
        params: {
          "ur_zone": this.ur_zone,
          "count": 15,
          "page": this.page,
          'giz': this.input
        }
      }).then((response) => {
        if (response.data !== 0) {
          if (type) {
            this.gridData = this.gridData.concat(response.data.LIST)
            this.ing = false
            this.more = true
            if (response.data.LIST.length == 0) {
              this.more = false
              this.end = true
              this.ing = false
            }
          } else {
            this.gridData = response.data.LIST
            this.ing = false
            this.more = true
            this.end = false
          }
        } else {
          this.$message({
            message: '数据请求失败，请重试',
            type: 'warning'
          });
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getList () {
      this.loading = true
      this.$ajax.get('http://192.168.1.102/ghydbg/mos/gettjfx.aspx', {
        params: {
          "count": 15,
          "page": 1
        }
      }).then((response) => {
        console.log(response)
        this.loading = false
        if (response.data !== 0) {
          this.tableData3 = response.data.LIST
        } else {
          this.$message({
            message: '数据请求失败，请重试',
            type: 'warning'
          });
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    //当点击搜索
    search () {
      this.getCoverList()
    },
    // 当点击查看详情的请求
    handleClickDetail (val) {
      console.log(val)
      if (val.BZ_NAME === '收文') {
        location.href = '/MobileOffice/officeDetail.html?wiid=' + val.WIID;
      } else {
        location.href = '/MobileOffice/planDetail.html?wiid=' + val.WIID + '&nameText=' + encodeURIComponent(val.BZ_NAME,
          'UTF-8') + '&type=' + val.BZ_IDENT + '&xc=' + val.XC;
      }
    },
    loadMore () {
      this.page++;
      this.getCoverList(1)
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
html, body
  height 100%
  font-size 30px
  #wrap
    height 100%
    .content
      margin-top 20px
      .more
        text-align center
        font-size 18px
      .search
        margin-left 30%
        margin-bottom 10px
      .cacel
        position absolute
        right 10px
        top 10px
        font-size 25px
</style>
