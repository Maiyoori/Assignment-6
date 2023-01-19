import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AccountView from "../views/AccountView.vue";
import CartView from "../views/CartView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Login',
      component: LoginView
    },
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/Account',
      component: AccountView
    },
    {
      path: '/Cart',
      component: CartView
    },

  ],
});

export default router;