<template>
  <div class="new">
    <router-link to="/edit" class="button">
      <slot />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NewBlog",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/modeSwitch.scss";

.new {
  position: absolute;
  .button {
    height: 32px;
    line-height: 32px;
    color: #595959;
    padding: 4.5px 15px;
    background: $white;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    cursor: pointer;
  }
}
</style>
