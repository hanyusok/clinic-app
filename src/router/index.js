import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import HomeView from '@/views/HomeView.vue'
import Signin from '@/components/Signin.vue'
import Signup from '@/components/Signup.vue'
import Overview from '@/components/Overview.vue'
import NewUser from '@/components/NewUser.vue'
import NewCall from '@/components/NewCall.vue'
import Faq from '@/components/Faq.vue'
import ProductsList from '@/components/ProductsList.vue'
import CallList from '@/components/CallList.vue'
import Clinic from '@/components/Clinic.vue'
import Error404 from '@/components/Error404.vue'
import Process from '@/components/Process.vue'
import NewClinic from '@/components/NewClinic.vue'
import CallStatus from '@/components/CallStatus.vue'

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
      path: '/newclinic',
      name: 'NewClinic',
      component: NewClinic
    }, 
    {
      path: '/overview',
      name: 'Overview',
      component: Overview,
      meta: { requiresAuth: true }
    },
    {
      path: '/newuser',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/newcall',
      name: 'NewCall',
      component: NewCall
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/callstatus',
      name: 'CallStatus',
      component: CallStatus
    },
    {
      path: '/productslist',
      name: 'ProductsList',
      component: ProductsList
    },
    {
      path: '/calllist',
      name: 'CallList',
      component: CallList
    },
    {
      path: '/clinic',
      name: 'Clinic',
      component: Clinic
    },
    {
      path: '/error',
      name: 'Error',
      component: Error404
    },
    {
      path: '/process',
      name: 'Process',
      component: Process
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
      alert("You are not allowed to access. please log in first!!");
      next('/signup');
    }
  } else {
    next();
  }
});

export default router
