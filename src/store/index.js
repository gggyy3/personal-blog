import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
   state: {
     articleList: [{ id: '1', title: '测试标题', content: '测试正文' },
     { id: '2', title: '测试标题2', content: '测试正文2' }]
   },
   mutations: {
     increment(state, pageList) {
       state.articleList.push(pageList)
     }
   }
 })

 export default store