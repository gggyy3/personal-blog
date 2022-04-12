<template>
  <div id="app">
    <Nav />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";

#app {
  display: flex;
  align-items: start; // 解决 Nav 组件自适应问题
  padding: 0 200px;
  border-top: 3px solid black;
  main {
    width: calc(100% - 252px);
  }
  @media (max-width:1220px) {
    & {
      flex-direction: column;
      padding: 0;
    }
    > Nav, main {
      width: 100%;
    }
  }
}
</style>
