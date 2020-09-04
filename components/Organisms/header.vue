<template>
  <header class="header">
    <div class="header__title">
      <n-link to="/">
        <p class="header__title__text">couragenki</p>
      </n-link>
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
  // width: 100%;
  background: #ff9903;
  &__title {
    // width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    font-size: 24px;
    padding: 8px 16px;
    a {
      color: #000;
      text-decoration: none;
    }
    &__text {
      font-size: 3rem;
      font-weight: 700;
      font-family: monospace;
      margin: 0;
    }
    &__text:hover {
      opacity: 0.7;
    }
  }
}
@media (max-width: 768px) {
  .header__title__text {
    // padding: 0 16px;
  }
}
@media (max-width: 320px) {
  .header__title__text {
    // padding: 0 16px;
  }
}
</style>