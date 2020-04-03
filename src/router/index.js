import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Chat from '../views/Chat'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isAuthenticated']) {
      next()
    } else {
      let accessToken = window.localStorage.getItem('feathers-jwt')
      store
        .dispatch('auth/authenticate', {
          strategy: 'jwt',
          accessToken: accessToken
        })
        .then(() => next())
        .catch(() => {
          next('Login')
        })
    }
  } else {
    next()
  }
})

export default router
