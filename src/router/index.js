import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import ForgetpasswordView from '../views/ForgetpasswordView.vue'
import UserView from '../views/UserView.vue'
import UserClassList from "../views/UserClassList.vue";
import UserStar from "../views/UserStar.vue";
import UserConment from "../views/UserConment.vue";
import UserPswChange from "../views/UserPswChange.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'  // 将空路径重定向到/login
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: ForgetpasswordView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
    {
      path: '/star',
      name: 'star',
      component: UserStar
    },
    {
      path: '/conment',
      name: 'conment',
      component: UserConment
    },
    {
      path: '/classlist',
      name: 'classlist',
      component: UserClassList
    },
    {
      path: '/pswchange',
      name: 'pswchange',
      component: UserPswChange
    },
  ]
})

export default router
