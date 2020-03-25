import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import(/* webpackChunkName: "Layout" */ '../views/layout/index.vue')
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '../views/dashboard/index.vue')
const Moneyflow = () => import(/* webpackChunkName: "Moneyflow" */ '../views/moneyflow/index.vue')
const Login = () => import(/* webpackChunkName: "Login" */ '../views/login/index.vue')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/', 
      redirect: '/dashboard',
      component: Layout,
      children: [
        {path: '/dashboard', component: Dashboard},
        {path: '/moneyflow', component: Moneyflow}
      ]
    },
    {path: '/login', component: Login}
  ]
})

export default router
