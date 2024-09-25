import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useFirebaseAuth} from 'vuefire'
import {onAuthStateChanged} from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayoutView.vue'),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/admin/new',
          name: 'new-item',
          component: () => import('../views/admin/AddNewItemView.vue')
        },
        {
          path: '/admin/edit/:id',
          name: 'edit-item',
          component: () => import('../views/admin/EditItemView.vue')
        },
        {
          path: '/admin/items',
          name: 'current-menu',
          component: () => import('../views/admin/CurrentMenuView.vue')
        },
      ]
    },
  ]
})

//Guard
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth);
  
  if(requiresAuth){
    //check if is authenticated
    try {
      await authenticateUser();

      //if it works correctly. next
      next();

    } catch (error) {
      //Isnt authenticated
      console.log(error);
      next({name: 'login'})
    }
  }else{
    //the view doesnt need auth user. Allow.
    next();
  }
})

function authenticateUser(){
  const auth = useFirebaseAuth();

  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        resolve(user)
      }else{
        reject()
      }
    })
  })
}

export default router
