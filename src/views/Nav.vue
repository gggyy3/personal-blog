<template>
  <nav>
    <div class="welcome">
      <h3>欢迎来到gy的个人博客</h3>
      <p>请随意观看</p>
    </div>
    <ul class="nav-list">
      <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/docs">文章</router-link></li>
      <li><a href="#">搜索</a></li>
      <li><a href="#">白天 / 黑夜</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
nav {
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  background: white;
  min-width: 240px;
  height: 266px;
  margin-right: 10px;
  .welcome {
    line-height: 2;
    background: #222;
    color: white;
    padding: 20px;
    text-align: center;
  }
  .nav-list {
    padding: 16px 0;
    > li {
      padding: 5px 20px;
    }
    > li:hover {
      background: #f5f5f5;
    }
  }
}
</style>
