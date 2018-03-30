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
export default router
