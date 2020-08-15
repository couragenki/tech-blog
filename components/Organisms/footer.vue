<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__container__clum">
        <div class="profile">
          <img src="/img/profile-icon.png">
        </div>
      </div>
      <div class="footer__container__clum">
        <ul>
          <li>このサイトについて</li>
          <li>自己紹介</li>
        </ul>
      </div>
      <div class="footer__container__clum">
        <ul>
          <li>利用規約</li>
          <li>お問い合わせ</li>
        </ul>
      </div>
      <div class="footer__container__clum">
        <div class="ad">
          <img src="/img/banner.png">
        </div>
      </div>
    </div>
    <p class="footer__copywrite">©2020 ○○○○○○ブログ</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background: #ffdb99;
  padding-top: 32px;
  padding-bottom: 32px;
  &__container {
    width: 100%;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    &__clum {
      width: 20%;
      margin-right: 5%;
      height: 100%;
      .profile img {
        width: 100%;
      }
      .ad img {
        width: 100%;
      }
    }
  }
  &__copywrite {
    text-align: center;
  }
}
@media (max-width: 768px) {
  .footer {
    &__container {
      display: block;
      &__clum {
        width: 100%;
        margin-right: 0;
      }
    }
  }
}
@media (max-width: 320px) {
}
</style>