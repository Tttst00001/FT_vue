import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const _import = require('./import-' + process.env.NODE_ENV)
const router = new Router({
  mode: 'hash',
  routes: []
})
var getRouter
router.beforeEach((to, from, next) => {
  if (!getRouter) {
    var jtrouter = [
      {
        path: '/',
        redirect: '/home',
        component: 'layout/index',
        children: [
          {
            path: '/home',
            name: 'dashboard',
            component: 'dashboard/index',
            mate: {
              title: '首页'
            }
          },
          {
            path: '/moneyflow',
            name: 'moneyflow',
            component: 'moneyflow/index',
            mate: {
              title: '资金走势'
            }
          }
        ]
      }
    ]

    sessionStorage.setItem('routerMap', JSON.stringify(jtrouter))
    getRouter = filterAsyncRouter(jtrouter)
    router.addRoutes(getRouter)
    next({ ...to, replace: true })
  } else {
    next()
  }
})

function filterAsyncRouter (asyncRouterMap) {
  var accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      route.component = _import(route.component)
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}

export default router
