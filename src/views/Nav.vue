<template>
  <nav style="background-color: white">
    <div class="welcome">
      <h3>欢迎来到gy的个人博客</h3>
      <p>请随意观看</p>
    </div>
    <div class="menu">
      <!-- 直接 to="/"，样式错误 -->
      <router-link to="/home" class="item" active-class="selected"
        >主页</router-link
      >
      <router-link to="/docs" class="item" active-class="selected"
        >文章</router-link
      >
      <a class="item" href="#" @click="changeMode">黑夜 / 白天</a>
    </div>
  </nav>
</template>

<script>
import changeMode2 from "@/lib/changeMode.js";
export default {
  name: "Nav",
  methods: {
    // 实现最简单的换肤
    changeMode() {
      changeMode2();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/modeSwitch.scss"; // 切换皮肤

nav {
  display: flex;
  flex-direction: column;
  min-width: 240px;
  margin-right: 10px;
  background: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  .welcome {
    padding: 20px;
    line-height: 2;
    color: $white;
    background: $black;
    text-align: center;
  }
  .menu {
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    > .item {
      padding: 5px 20px;
      &:hover {
        background: #f5f5f5;
      }
    }
    > .item.selected {
      background: #f5f5f5;
    }
    a {
      cursor: pointer;
    }
  }
}
</style>
