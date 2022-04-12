<template>
  <div>
    <Page>
      <header>
        <div class="post-title">{{dataSource.title}}</div>
        <div class="post-data">发布于 {{dataSource.createdAt}} | 作者：gy</div>
      </header>
      <article>
        {{dataSource.content}}
      </article>
    </Page>
  </div>
</template>

<script>
export default {
  name: "EditDocs",
  created() {
    this.pageId = parseInt(this.$route.params.id) - 1;
    this.dataSource = this.articleList[this.pageId];
  },
  data() {
    return {
      articleList: this.$store.state.articleList,
      pageId: 0,
      dataSource: null,
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
