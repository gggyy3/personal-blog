import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Docs from '@/views/Docs.vue'
import EditDocs from '@/views/EditDocs.vue'
import NotFound from '@/views/NotFound.vue'
import Edit from '@/components/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/docs',
    component: Docs
  },
  {
    path: '/docs/:id',
    component: EditDocs
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: "*",
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
