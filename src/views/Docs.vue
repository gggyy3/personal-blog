<template>
    <Page>
      <h2>文章列表</h2>
        <div v-for="(i, index) in articleList" :key="index">
          <h3>
            <router-link :to="`/docs/${i.id}`">{{i.title}}</router-link>
          </h3>
          <div>{{i.content}}</div>
        </div>
    </Page>
</template>

<script>
export default {
  name: "Docs",
  data() {
    return {
      articleList: this.$store.state.articleList,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 60px;
  .post-data {
    margin-top: 3px;
    font-size: 0.6em;
    color: #999;
  }
}
</style>
