<template>
  <div class="pagination">
    <!-- <button @click="prePage">上一页</button> -->
    <!-- 页码数据 -->
    <span
      v-for="(i, index) in pageNum"
      @click="page(i)"
      :style="{ cursor: 'pointer', margin: '10px' }"
      :key="index"
      >{{ i }}</span
    >
    <!-- <button @click="nextPage">下一页</button> -->
  </div>
</template>

<script>
// 参考文章：https://blog.csdn.net/u011608672/article/details/114699582
export default {
  name: "Pagination",
  data() {
    return {
      totalPage: [], // 所有分页的数据
      pageSize: 2, // 每页显示数量
      pageNum: 1, // 共几页=所有数据/每页显示数量
      dataShow: [], //当前显示的数据
      currentPage: 0, // 默认当前显示第一页
    };
  },
  props: ["data"],
  created() {
    if (this.data === null) {
      return
    } else {
      this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1; // 向上取整,默认1页

      // 分割数据
      for (let i = 0; i < this.pageNum; i++) {
        this.totalPage[i] = this.data.slice(
          this.pageSize * i,
          this.pageSize * (i + 1)
        );
      }
      this.$emit("add", this.totalPage[this.currentPage]);
    }
  },
  methods: {
    // 下一页
    nextPage() {
      if (this.currentPage === this.pageNum - 1) {
        return;
      }
      this.$emit("add", this.totalPage[++this.currentPage]);
    },
    //上一页
    prePage() {
      if (this.currentPage === 0) {
        return;
      }
      this.$emit("add", this.totalPage[--this.currentPage]);
    },
    //点击页码
    page(i) {
      this.currentPage = i;
      this.$emit("add", this.totalPage[i - 1]);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
    text-align: center;
    background-color: white;
    color: #606266;
    min-width: 30px;
    border-radius: 2px;
    margin: 0 5px;
  }
  > span:hover,
  > button:hover {
    cursor: pointer;
  }
  button {
    border: none;
  }
}
</style>
