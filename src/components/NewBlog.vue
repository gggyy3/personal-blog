<template>
  <div class="new">
    <button><router-link to="/edit">新建</router-link></button>
  </div>
</template>

<script>
export default {
  name: "NewBlog",
};
</script>

<style lang="scss" scoped>
.new {
  position: absolute;
  button {
    height: 32px;
    color: #595959;
    padding: 4.5px 15px;
    background: white;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    cursor: pointer;
  }
}
</style>
