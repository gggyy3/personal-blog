<template>
  <div class="page">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Page",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/modeSwitch.scss";

.page {
  position: relative;
  background: $white;
  padding: 40px;
  margin-bottom: 10px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
}
p {
  margin-bottom: 20px;
}
h3 {
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 1px dotted #eee;
  font-weight: bold;
}
ul {
  list-style: disc;
  padding-left: 40px;
  font-size: 1.125em;
  margin: 18px 0;
}
</style>
