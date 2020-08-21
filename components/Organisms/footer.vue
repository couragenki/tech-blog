<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__container__clum">
        <div class="ad">
          <img src="/img/banner.png" />
        </div>
      </div>

      <div class="footer__container__clum">
        <ul>
          <li>このサイトについて</li>
          <li>自己紹介</li>
          <li>
            <n-link to="/policy">プライバシーポリシー</n-link>
          </li>
          <li>お問い合わせ</li>
        </ul>
      </div>
      <div class="footer__container__clum">
        <ul>
          <li>
            <n-link to="/technology">テクノロジー</n-link>
            <ul>
              <li>
                <n-link to="/technology/frontend">フロントエンド</n-link>
              </li>
              <li>
                <n-link to="/technology/backend">バックエンド</n-link>
              </li>
              <li>
                <n-link to="/technology/infra">インフラ</n-link>
              </li>
              <li>
                <n-link to="/technology/git">Git</n-link>
              </li>
            </ul>
          </li>
          <li>
            <n-link to="/marketing">マーケティング</n-link>
            <ul>
              <li>
                <n-link to="/marketing/web">WEBマーケ</n-link>
              </li>
              <li>
                <n-link to="/marketing/sns">SNS</n-link>
              </li>
              <li>
                <n-link to="/marketing/blog">ブログ</n-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="footer__container__clum">
        <Introduction />
      </div>
    </div>
    <p class="footer__copywrite">©2020 ○○○○○○ブログ</p>
  </footer>
</template>

<script>
import Introduction from "@/components/Molecules/introduction.vue";
export default {
  name: "Footer",
  components: {
    Introduction,
  },
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
    width: 100%;
    &__container {
      width: calc(100% - 16px);
      padding: 0 8px;
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