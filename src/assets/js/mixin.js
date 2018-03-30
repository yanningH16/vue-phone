export const pageCommon = {
  data () {
    return {
      pageSizeArray: [5, 10, 15, 20],
      pageNo: 1,
      pageSize: 5,
      pageTotal: null,
      total: null
      // loadingList: false
    }
  },
  mounted () {
    this.getTask()
  },
  watch: {
    pageSize (newVal, oldVal) {
      if (this.pageTotal > newVal) {
        this.getTask()
        return false
      }
      if (this.pageTotal < oldVal) {
        return false
      }
      this.getTask()
    }
  },
  methods: {
    // 修改每页显示的数据数目
    handleSizeChange (val) {
      this.pageSize = val
    },
    // 设置pageNo
    handleCurrentChange (val) {
      this.pageNo = val
      this.getTask()
    },
    // 查看数据api
    getTask () {
      // this.loadingList = true
      this.$ajax.post(this.apiUrl, this.params).then((response) => {
        // this.loadingList = false
        console.log(response)
        let mydata = response.data
        if (mydata.code === '200') {
          this.pageTotal = mydata.data.total || mydata.totalCount || mydata.data.totalCount
          let myDatas = mydata.data.data || mydata.data.datas || mydata.data.userAccountDOList || mydata.data.buyers || mydata.data || mydata.data.chargeApplys
          this.setList(myDatas)
        } else {
          this.$message.error(mydata.message)
        }
      }).catch((error) => {
        console.log(error)
        this.$message.error('网络错误，刷新下试试')
      })
    },
    isNull (val) {
      if (val) {
        return val
      }
      return '暂无数据'
    }
  }
}
