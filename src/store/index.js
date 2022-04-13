import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    articleList: [], // articleList: [{ id: '1', title: '测试标题', content: '测试正文' }]
  },
  mutations: { 
    increment(state, pageList) {
      if (pageList === null) {
        console.log('添加数据为空！')
        return
      }
      state.articleList.push(pageList);
    },
    fetchData() {
      this.state.articleList = JSON.parse(
        window.localStorage.getItem("testList")
      );
    }
  },
});

export default store;
