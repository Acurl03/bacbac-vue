import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  // 路由跳轉後回到頂端
  scrollBehavior: () => ({ y: 0 }),  
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: () =>
        import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    },
    {
      path: '/about',
      component: () =>
        import(/* webpackChunkName: "About" */ '../components/About.vue'),
    },
    {
      path: '/news',
      component: () =>
        import(/* webpackChunkName: "News" */ '../components/News.vue'),
    },
    {
      path: '/shopping',
      component: () =>
        import(/* webpackChunkName: "Shop" */ '../components/Shop.vue'),
    },
    {
      path: '/login',
      component: () =>
        import(
          /* webpackChunkName: "LoginRegister" */ '../components/LoginRegister.vue'
        ),
    },
    {
      path: '/user_cart',
      component: () =>
        import(/* webpackChunkName: "UserCart" */ '../components/UserCart.vue'),
      beforeEnter: (to, from, next) => {
        const isLogin = sessionStorage.getItem('token') == 'ImLogin'
        if (isLogin) {
          next()
        } else {
          alert('未登入會員，請先登入會員')
          next('/login')
        }
      },
    },
    {
      path: '/finish',
      component: () =>
        import(/* webpackChunkName: "News" */ '../components/OrderFinish.vue'),
    },
    {
      path: '/404',

      component: () =>
        import(/* webpackChunkName: "Error" */ '../components/ErrorPage.vue'),
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
  // eslint-disable-next-line no-unused-vars
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     return window.scrollTo({
  //       top: document.querySelector(to.hash).offsetTop,
  //       behavior: 'smooth',
  //     })
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },

  // build: {
  //   index: path.resolve(__dirname, '../dist/index.html'),

  //   assetsRoot: path.resolve(__dirname, '../dist'),
  //   assetsSubDirectory: 'staic',
  //   assetsPublicPath: '/vue-bacbac/',
  // }
})

export default router
