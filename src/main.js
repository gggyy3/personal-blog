import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/views/Nav.vue'
import Home from '@/views/Home.vue'
import Docs from '@/views/Docs.vue'
import Page from '@/components/Page.vue'
import NewBlog from '@/components/NewBlog.vue'
import Pagination from '@/components/Pagination.vue'

Vue.config.productionTip = false

Vue.component("Nav", Nav);
Vue.component("NewBlog", NewBlog);
Vue.component("Home", Home);
Vue.component("Page", Page);
Vue.component("Docs", Docs);
Vue.component('Pagination',Pagination)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
