<template>
  <div class="home">
    <Page>
      <header>
        <NewBlog class="test">
          <span>新建</span>
        </NewBlog>
        <div class="post-title">创建您的第一篇个人博客吧</div>
        <div class="post-data">发布于 2022-04-11 | 作者：gy</div>
      </header>
      <article class="home-content">
        <p>欢迎来到我的个人博客网站。</p>
        <h3>用户指南</h3>
        <p>您可以通过点击"新建"按钮，来创建您的第一篇博客。</p>
        <h3>功能一览</h3>
        <ul>
          <li>创建新的文章。</li>
          <li>分页浏览文章。</li>
          <li>按标签/日期查看文章</li>
        </ul>
        <h3>扩展功能</h3>
        <ul>
          <li>访客评论功能。</li>
          <li>可视化布局，兼容移动端。</li>
          <li>搜索功能。</li>
          <li>白天/黑夜模式切换</li>
        </ul>
      </article>
    </Page>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
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
  @media (max-width:500px) {
    .test {
      top: 5px;
      left: 5px;
      font-size: 15px;
    }
  }
}
</style>
