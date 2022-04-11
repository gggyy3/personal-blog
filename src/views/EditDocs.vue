<template>
  <div>
    <h3>{{dataSource.title}}</h3>
    <div>{{dataSource.content}}</div>
  </div>
</template>

<script>
export default {
  name: "EditDocs",
  created(){
    this.pageId = parseInt(this.$route.params.id) - 1
    this.dataSource = this.articleList[this.pageId]
  },
  data() {
    return {
      articleList: this.$store.state.articleList,
      pageId: 0,
      dataSource: null
    };
  }
};
</script>

<style>

</style>