import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import HomeView from '@/views/HomeView.vue'
import Signin from '@/components/Signin.vue'
import Signup from '@/components/Signup.vue'
import Overview from '@/components/Overview.vue'
import NewUser from '@/components/NewUser.vue'
import Security from '@/components/Security.vue'
import Pricing from '@/components/Pricing.vue'
import ProductsList from '@/components/ProductsList.vue'
import OrderList from '@/components/OrderList.vue'
import Referral from '@/components/Referral.vue'
import Error404 from '@/components/Error404.vue'
import CRM from '@/components/CRM.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }, 
    {
      path: '/overview',
      name: 'ProfileOverview',
      component: Overview,
      meta: { requiresAuth: true }
    },
    {
      path: '/newuser',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/security',
      name: 'Security',
      component: Security
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/productslist',
      name: 'ProductsList',
      component: ProductsList
    },
    {
      path: '/orderlist',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/referral',
      name: 'Referral',
      component: Referral
    },
    {
      path: '/error',
      name: 'Error',
      component: Error404
    },
    {
      path: '/crm',
      name: 'CRM',
      component: CRM
    }
  ]
})

const getCurrentUser = () => {
  return new Promise(( resolve, reject ) =>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach( async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)){
    if (await getCurrentUser()){
      next();
    } else {
      alert("No access allowed");
      next('/');
    }
  } else {
    next();
  }
});


export default router
