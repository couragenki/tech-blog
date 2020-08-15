<template>
  <div class="sidebar">
    <div>目次</div>
    <div>お知らせ</div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
<style lang="scss" scoped>
.sidebar {
  width: 300px;
  height: 1000px;
  background: skyblue;
}
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: 500px;
  }
}
@media (max-width: 320px) {
}
</style>