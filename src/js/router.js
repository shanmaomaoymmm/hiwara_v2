import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import player from '../views/player.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/player',
      name: 'player',
      component: player
    }
  ]
})
export default router