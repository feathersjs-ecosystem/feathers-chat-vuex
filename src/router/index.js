import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Chat from '../views/Chat'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  { path: '', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/chat', name: 'Chat', component: Chat,
      beforeEnter: (to, from, next)=>{
        if (store.state.auth.user) next()
        else next({name: 'Home'})
      }
  }
]

const router = new VueRouter({
  routes
})

export default router
