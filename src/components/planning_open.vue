<template>
  <div class="box">
    <h1>规划审批</h1>
    <div class="conten">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <ul>
            <li>
              收文编号：
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </li>
            <li>
              文案焦办：
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </li>
            <li>
              紧急程度：
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </li>
            <li>
              来文单位：
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </li>
            <li>
              收文日期：
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </li>
            <li>
              收文来源：
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </li>
            <li>
              是否督办：
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </li>
          </ul>
          <div class="btn">
            <el-button type="primary">发送</el-button>
            <el-button type="info">保存</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "planning_open",
  data() {
    return {
      activeName2: "first",
      input: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.box {
  margin: 20px 20px 0 20px;
  background: white;

  h1 {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: gray;
    border-radius: 3px;
    text-align: left;
  }

  .conten {
    margin-top: 20px;
    margin-left: 30px;

    ul {
      padding: 20px;

      li {
        margin-bottom: 10px;
      }
    }

    .btn {
      margin-left: 100px;
    }
  }
}
</style>
