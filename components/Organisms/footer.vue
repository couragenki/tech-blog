<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__container__clum">
        <p class="footer__intoro">このサイトについて</p>
        <ul>
          <li>
            <n-link to="/">トップ</n-link>
          </li>
          <li>
            <n-link to="/profile">自己紹介</n-link>
          </li>
          <li>
            <n-link to="/policy">プライバシーポリシー</n-link>
          </li>
          <!-- <li>お問い合わせ</li> -->
        </ul>
      </div>
      <div class="footer__container__clum">
        <p class="footer__intoro">カテゴリー</p>
        <ul>
          <li>
            <n-link to="/tech">テック</n-link>
            <ul class="footer__links">
              <li>
                <n-link to="/tech/frontend">フロントエンド</n-link>
              </li>
              <li>
                <n-link to="/tech/backend">バックエンド</n-link>
              </li>
              <li>
                <n-link to="/tech/infra">インフラ</n-link>
              </li>
              <li>
                <n-link to="/tech/git">Git</n-link>
              </li>
            </ul>
          </li>
          <li>
            <n-link to="/marketing">マーケティング</n-link>
            <ul class="footer__links">
              <!-- <li>
                <n-link to="/marketing/web">WEBマーケ</n-link>
              </li>-->
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
        <!-- <div class="ad">
          <img src="/img/banner.png" />
        </div>-->
        <!-- <a
          class="twitter-timeline"
          href="https://twitter.com/couragenki?ref_src=twsrc%5Etfw"
        >Tweets by couragenki</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
        <p class="footer__intoro">タグ</p>
        <p class="footer__tags">
          <n-link to="/tech/frontend/javascript/">#JavaScript</n-link>&nbsp;
          <n-link to="/tech/frontend/vue/">#Vue.js</n-link>&nbsp;
          <n-link to="/tech/frontend/gatsby/">#Gatsby.js</n-link>&nbsp;
          <n-link to="/tech/frontend/markup/">#Markup</n-link>&nbsp;
          <n-link to="/tech/backend/python/">#Python</n-link>&nbsp;
          <n-link to="/tech/infra/docker/">#Docker</n-link>&nbsp;
          <n-link to="/tech/git">#Git</n-link>&nbsp;
        </p>
      </div>
      <div class="footer__container__clum">
        <Introduction />
      </div>
    </div>
    <p class="footer__copywrite">©2020 couragenki All Rights Reserved.</p>
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
  width: auto;
  background: #ffdb99;
  padding: 32px 16px;
  &__intoro {
    font-weight: 700;
    font-size: 1.5em;
  }
  &__container {
    width: 100%;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    &__clum {
      width: 23%;
      margin-right: 2%;
      height: 100%;
      .profile img {
        width: 100%;
      }
      .ad img {
        width: 100%;
      }
    }
  }
  ul {
    margin-bottom: 10px;
    a {
      color: #3f51b5;
      font-size: 1.2em;
      text-decoration: none;
    }
    li {
      ul {
        padding-left: 0.5em;
      }
    }
  }
  &__tags a {
    color: #3f51b5;
    font-size: 1.2em;
    text-decoration: none;
  }
  &__copywrite {
    text-align: center;
  }
}
.twitter-timeline {
  max-height: 400px;
  overflow: hidden;
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