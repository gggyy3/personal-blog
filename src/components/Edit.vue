<template>
  <div>
    <Page>
      <header>
        <div class="post-title">编辑文章</div>
        <div class="post-data">正在编写...</div>
      </header>
      <form class="edit-box">
        <textarea class="page-title" placeholder="标题" v-model="title">
        </textarea>
        <textarea class="page-content" placeholder="正文内容" v-model="text">
        </textarea>
        <button @click="release">发布</button>
      </form>
    </Page>
  </div>
</template>

<script>
import createId from "@/lib/createId.js";
import dayjs from "dayjs";

export default {
  name: "Edit",
  data() {
    return {
      title: "",
      text: "",
      id: "",
      createdAt: "",
    };
  },
  methods: {
    release() {
      // 发布功能
      if (this.text === "" || this.title === "") {
        alert("输入标题和内容不能为空");
        return;
      }

      // 基础信息
      this.id = createId();
      this.createdAt = dayjs().format("YYYY/MM/DD");

      // 更新vuex 中的数据
      this.$store.commit("increment", {
        id: this.id,
        title: this.title,
        content: this.text,
        createdAt: this.createdAt,
      });

      // 将数据存储至 localStorage
      window.localStorage.setItem(
        "testList",
        JSON.stringify(this.$store.state.articleList) // 新数据覆盖旧数据
      );

      // 成功提示及跳转
      alert("添加成功");
      this.$router.replace("/docs");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/modeSwitch.scss";

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
    padding-left: 10px;
  }
  .page-title {
    width: 20%;
    height: 30px;
    line-height: 30px;
    outline: none;
  }
  .page-content {
    height: 200px;
    padding: 10px;
  }
  button {
    height: 32px;
    color: #595959;
    padding: 4.5px 15px;
    background: $white;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    cursor: pointer;
  }
}
</style>
