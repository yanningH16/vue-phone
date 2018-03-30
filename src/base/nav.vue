<template>
  <div class="menu">
    <div class="router">
      <div v-for="(item,index) in navArr" :key="index">
        <router-link :to="{name:item.routerHead}">
          <div @click="clickTab(index)" :class="{'active': isActive==index}" class="style">
            <p :class="item.icon" class="navs">
              {{item.header}}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'nav',
  data () {
    return {
      isActive: 0,
      navArr: [
        {
          icon: 'el-icon-menu',
          header: '规划审批',
          routerHead: 'planning'
        },
        {
          icon: 'el-icon-message',
          header: '公文办理',
          routerHead: 'handWork'
        },
        {
          icon: 'el-icon-date',
          header: '通知公告',
          routerHead: 'notice'
        },
        {
          icon: 'el-icon-view',
          header: '档案查询',
          routerHead: 'search'
        },
        {
          icon: 'el-icon-mobile-phone',
          header: '效能统计',
          routerHead: 'statistical'
        },
        {
          icon: 'el-icon-edit',
          header: '纵览全局',
          routerHead: 'lookGlobal'
        },
        {
          icon: 'el-icon-bell',
          header: '重大事项监督',
          routerHead: 'big'
        },
      ]
    }
  },
  created () {
    let activeRouter = this.$route.path
    console.log(activeRouter)
    if (activeRouter.indexOf('planing') !== -1) {
      this.isActive = 0
    } else if (activeRouter.indexOf('handWork') !== -1) {
      this.isActive = 1
    } else if (activeRouter.indexOf('notice') !== -1) {
      this.isActive = 2
    } else if (activeRouter.indexOf('search') !== -1) {
      this.isActive = 3
    } else if (activeRouter.indexOf('statistical') !== -1) {
      this.isActive = 4
    } else if (activeRouter.indexOf('lookGlobal') !== -1) {
      this.isActive = 5
    } else if (activeRouter.indexOf('big') !== -1) {
      this.isActive = 6
    }
  },
  methods: {
    clickTab (index) {
      this.isActive = index
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.menu
  height 100%
  .router
    color white
    text-align center
    .navs
      color white
      font-size 1.2rem
    .style
      line-height 4rem
    .active
      background #ff3341
</style>
