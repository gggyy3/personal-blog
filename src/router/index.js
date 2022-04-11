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
    name: 'Home',
    component: Home
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs
  },
  {
    path: '/docs/:id',
    name: 'EditDocs',
    component: EditDocs
  },
  {
    path: '/edit',
    name: 'Edit',
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
