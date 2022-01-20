import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Secret from '../views/Secret.vue'
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/secret',
    name: 'Secret',
    component: Secret,
    // meta: { requiresAuth: true },
    beforeEnter: checkAuth,
  },
]

const router = new VueRouter({
  mode: 'history',

  base: process.env.BASE_URL,
  routes
})

// Auth for Components
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const isAuthenticated = firebase.auth().currentUser;
//   if (requiresAuth && !isAuthenticated) {
//     next('/Login')
//   } else {
//     next()
//   }
// })

// my Way
function checkAuth(to, from, next) {
  if (localStorage.getItem('firebaseAuth')) {
    const auth = JSON.parse(localStorage.getItem('firebaseAuth'));
    if (auth.auth) {
      next();
    } else {
      next({
        path: '/register'
      })
    }
  } else {
    next({
      path: '/register'
    })
  }
}

export default router
