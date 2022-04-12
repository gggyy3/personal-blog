<template>
  <div>
    <Page>
      <h2>博客列表</h2>
      <div v-for="(i, index) in articleList" :key="index">
        <h3>
          <router-link :to="`/docs/${i.id}`">{{ i.title }}</router-link>
        </h3>
        <span>发布时间：{{ i.createdAt }}</span>
        <div class="content">博客内容：{{ i.content }}</div>
      </div>
    </Page>
    <ul class="pagination">
      <li @click="change">1</li>
      <li @click="change">2</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Docs",
  methods: {
    change() {
      console.log(this.testList)
    },
  },
  created() {
    this.$store.commit("fetchData");
  },
  data() {
    return {
      articleList: this.$store.state.articleList,
      testList: this.$store.state.testList
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  overflow: hidden;
}
content {
  overflow: auto;
}
.pagination {
  margin: 0 auto;
  display: flex;
  > li {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
    text-align: center;
    background-color: white;
    color: #606266;
    min-width: 30px;
    border-radius: 2px;
    margin: 0 5px;
  }
  > li:hover {
    cursor: pointer;
  }
}
</style>
