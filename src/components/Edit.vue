<template>
  <div>
    <Page>
      <header>
        <div class="post-title">编辑文章</div>
        <div class="post-data">编写中</div>
      </header>
      <form class="edit-box">
        <textarea
          class="page-title"
          placeholder="文章标题"
          v-model="title"
        ></textarea>
        <textarea class="page-content" placeholder="正文内容" v-model="text">
        </textarea>
        <button @click="test">发布</button>
      </form>
    </Page>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    test() {
      if (this.text === "") {
        alert("输入不能为空");
        return;
      }
      console.log(this.title);
      console.log(this.text);
      this.$store.commit("increment", {id:'3',title: this.title, content: this.text});
    },
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
.edit-box {
  textarea {
    width: 100%;
    resize: none;
    padding: 5px;
  }
  .page-title {
    min-height: 10px;
  }
  .page-content {
    min-height: 200px;
  }
}
</style>
