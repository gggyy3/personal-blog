<template>
  <div>
    <Page>
      <h2>博客列表</h2>
      <div v-for="(i, index) in pageData" :key="index">
        <h3>
          <router-link :to="`/docs/${i.id}`">{{ i.title }}</router-link>
        </h3>
        <span>发布时间：{{ i.createdAt }}</span>
        <div class="content">博客内容：{{ i.content }}</div>
      </div>
    </Page>
    <Pagination :data="pageData" @add="getData($event)"/>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue';
export default {
  components: { Pagination },
  name: "Docs",
  beforeCreate(){
    // 数据初始化，防止刷新后数据未显示
    this.$store.commit("fetchData");
  },
  created() {
    // 提醒用户
    if(this.$store.state.articleList === null){
      alert('您未添加文章，请前往主页点击新建')
      this.$router.replace("/home");
    }
  },
  data() {
    return {
      pageData: this.$store.state.articleList  // 数据初始化
    };
  },
  methods: {
    getData(value){
      this.pageData = value  // 经过页码改造后的数据
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/modeSwitch.scss";

h3 {
  overflow: hidden;
}
content {
  overflow: auto;
}
</style>
