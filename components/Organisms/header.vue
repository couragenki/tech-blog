<template>
  <header class="header">
    <div class="header__title">
      <p class="header__title__text">ブログタイトル</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  background: #ffcd70;
  &__title {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    font-size: 32px;
    padding: 16px 0;
  }
}
@media (max-width: 768px) {
  .header__title__text {
    padding: 0 16px;
  }
}
@media (max-width: 320px) {
  .header__title__text {
    padding: 0 16px;
  }
}
</style>