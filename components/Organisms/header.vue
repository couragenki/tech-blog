<template>
  <header class="header">
    <div class="header__wrapper">
      <!-- ロゴ -->
      <div class="header__title">
        <p class="header__title__text">
          <n-link to="/">couragenki</n-link>
        </p>
      </div>
      <!-- カテゴリー -->
      <ul class="header__category">
        <li>
          <n-link to="/">HOME</n-link>
        </li>
        <li>
          <n-link to="/profile">PROFILE</n-link>
        </li>
        <li>
          <n-link to="/tech">TECH</n-link>
        </li>
        <li>
          <n-link to="/marketing">MARKETING</n-link>
        </li>
        <li>
          <n-link to="/goout">GoOut</n-link>
        </li>
      </ul>
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
  background: #ff9903;
  &__wrapper {
    max-width: 1208px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }
  // ロゴ
  &__title {
    a {
      color: #000;
      text-decoration: none;
    }
    &__text {
      font-size: 3em;
      font-weight: 700;
      font-family: monospace;
      margin: 0;
      font-family: "Helvetica Neue", Helvetica, Arial, YuGothic, "Yu Gothic",
        游ゴシック体, "游ゴシック", "ヒラギノ角ゴ ProN W3",
        "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3",
        "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "MS ゴシック",
        "MS Gothic", sans-serif;
    }
    &__text:hover {
      opacity: 0.7;
    }
  }
  // カテゴリー
  &__category {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    li {
      margin: 0.5em 0.7em;
      font-style: italic;
      a {
        text-decoration: none;
        color: black;
        font-size: 1.5em;
        font-weight: 700;
        font-family: "Helvetica Neue", Helvetica, Arial, YuGothic, "Yu Gothic",
          游ゴシック体, "游ゴシック", "ヒラギノ角ゴ ProN W3",
          "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3",
          "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "MS ゴシック",
          "MS Gothic", sans-serif;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .header {
    &__category {
      display: none !important;
    }
  }
}
</style>