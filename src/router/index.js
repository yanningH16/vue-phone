import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './HelloWorld'
const defaultRouter = [{
  path: '/',
  redirect: 'HelloWorld'
}]
Vue.use(Router)

let router = new Router({
  routes: [...defaultRouter, ...HelloWorld],
  mode: 'history'
})
// 设置title
let index = 1
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.title || to.params.message) {
    document.title = to.meta.title || to.params.message.title
    if (to.name === 'handWork') {
      // alert('您无权限查看')
      next('/err')
    } else {
      next()
    }
  } else {
    document.title = '测试'
  }
})
export default router
