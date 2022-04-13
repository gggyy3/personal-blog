import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 数据结构: [{ id: '1', title: '测试标题', content: '测试正文', createdAt:'2022/4/11' }]
    articleList: [],
  },
  mutations: {
    increment(state, pageList) {

      // 错误处理，有时调用 state.articleList 为空
      if (state.articleList === null) {
        state.articleList = [];
      }

      state.articleList.push(pageList);
    },
    fetchData(state) {
      state.articleList = JSON.parse(window.localStorage.getItem("testList"));
    },
  },
});

export default store;
