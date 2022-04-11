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
  padding: 0 126px;
  border-top: 3px solid black;
}

main {
  width: calc(100% - 252px);
  
}
</style>
