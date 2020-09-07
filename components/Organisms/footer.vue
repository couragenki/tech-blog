<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__container__clum__a">
        <div class="profile">
          <p class="footer__intoro">PROFILE</p>
          <div class="profile__icon">
            <img
              class="profile__icon__img"
              alt="プロフィール画像"
              width="512"
              src="/common/profile-icon.jpg"
            />
          </div>
          <p class="profile__name">GENKI MATSUBARA</p>
          <p class="footer__text">
            長崎出身の25歳。高卒で東芝に入社しその後独学でプログラミングを学習しWEB系のエンジニアに転身。写真を撮るのが好きでカメラを持って出かけています。プロフィールは
            <n-link to="/profile">こちら</n-link>から。
          </p>
        </div>
        <hr class="footer__line" />
        <p class="footer__intoro">MESSEGE</p>
        <div class="footer__button"></div>
        <p class="footer__text">ご連絡はSNSのDMにてお願い致します。</p>
        <hr class="footer__line" />
        <p class="footer__intoro">FOLLOW ME</p>
        <div class="footer__button twitter">
          <a href="https://twitter.com/couragenki" target="_blank">TWITTER</a>
        </div>
        <div class="footer__button github">
          <a href="https://github.com/GenkiMatsubara" target="_blank">GIT HUB</a>
        </div>
        <div class="footer__button qiita">
          <a href="https://qiita.com/GenkiMatsubara" target="_blank">QIITA</a>
        </div>
        <div class="footer__button instagram">
          <a href="https://www.instagram.com/genki.matsubara/" target="_blank">INSTAGRAM</a>
        </div>
      </div>
      <div class="footer__container__clum__b">
        <p class="footer__intoro">CATEGORY</p>
        <p class="footer__subintoro">ABOUT</p>
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
        </ul>
        <hr class="footer__line" />
        <n-link to="/tech" tag="div" class="footer__subintoro">TECH</n-link>
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
        <hr class="footer__line" />
        <n-link to="/marketing" tag="div" class="footer__subintoro">MARKETING</n-link>

        <ul class="footer__links">
          <li>
            <n-link to="/marketing/sns">SNS</n-link>
          </li>
          <li>
            <n-link to="/marketing/blog">ブログ</n-link>
          </li>
        </ul>
        <hr class="footer__line" />
        <p class="footer__subintoro">TAGS</p>
        <p class="footer__tags">
          <n-link to="/tech/frontend/javascript/">#JavaScript</n-link>&nbsp;
          <n-link to="/tech/frontend/vue/">#Vue.js</n-link>&nbsp;
          <n-link to="/tech/frontend/gatsby/">#Gatsby.js</n-link>&nbsp;
          <n-link to="/tech/frontend/markup/">#Markup</n-link>&nbsp;
          <n-link to="/tech/backend/python/">#Python</n-link>&nbsp;
          <n-link to="/tech/infra/docker/">#Docker</n-link>&nbsp;
          <n-link to="/tech/git">#Git</n-link>&nbsp;
        </p>
        <hr class="footer__line" />
      </div>
    </div>
    <p class="footer__copywrite">©2020 couragenki All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
.footer {
  width: auto;
  background: #efefef;
  padding: 32px 16px;
  &__intoro {
    font-family: "Fira Sans", sans-serif;
    font-size: 250%;
    text-align: left;
    margin: 50px 0px 40px 0px;
    letter-spacing: 0.8px;
    font-style: italic;
    font-weight: 700;
    font-size: 3em;
  }
  &__subintoro {
    font-family: "Fira Sans", sans-serif;
    font-weight: 700;
    font-size: 2em;
  }
  &__container {
    width: 100%;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    &__clum {
      height: 100%;
      .profile img {
        width: 100%;
      }
      .ad img {
        width: 100%;
      }
      &__a {
        width: 50%;
        padding-right: 5%;
        border-right-style: solid;
        border-color: #404040;
        border-width: 1px;
      }
      &__b {
        width: 40%;
      }
    }
    .profile {
      &__icon {
        &__img {
          width: 70%;
        }
      }
      &__name {
        font-family: "Fira Sans", sans-serif;
        font-weight: 700;
        font-size: 1.5em;
      }
    }
  }
  &__text {
    width: 100%;
    word-wrap: break-word;
  }
  &__button {
    width: 60%;
    background: gray;
    margin-bottom: 10px;
    a {
      padding-top: 10px;
      padding-bottom: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      -webkit-transition: 0.2s ease-in-out;
      transition: 0.2s ease-in-out;
      color: #fff;
      font-weight: 700;
      font-family: "Fira Sans", sans-serif;
      font-style: italic;
      text-align: center;
      text-decoration: none;
      padding: 12px 0px 12px 0px;
      line-height: 25px;
      font-size: 150%;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  &__tags a {
    color: #3f51b5;
    font-size: 1.2em;
    text-decoration: none;
  }
  &__copywrite {
    padding-top: 20px;
    text-align: center;
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
  .twitter {
    color: #fff;
    background-color: #00aced;
    border: 2px solid #00aced;
  }
  .twitter:hover {
    background-color: #fff;
    a {
      color: #00aced;
    }
  }
  .github {
    color: #fff;
    background-color: black;
    border: 2px solid black;
  }
  .github:hover {
    background-color: #fff;
    a {
      color: black;
    }
  }
  .qiita {
    color: #fff;
    background-color: #00c300;
    border: 2px solid #00c300;
  }
  .qiita:hover {
    background-color: #fff;
    a {
      color: #00c300;
    }
  }
  .instagram {
    color: #fff;
    background-color: #e91ebe;
    border: 2px solid #e91ebe;
  }
  .instagram:hover {
    background-color: #fff;
    a {
      color: #e91ebe;
    }
  }
  &__line {
    margin: 10px 0;
  }
}

@media (max-width: 768px) {
  .footer {
    width: auto;
    &__container {
      width: calc(100% - 16px);
      padding: 0 8px;
      display: block;
      &__clum {
        width: 100%;
        margin-right: 0;
        &__a, &__b {
          width: 100%;
          padding-right: 0;
          border: none;
        }
      }
    }
  }
}
@media (max-width: 320px) {
}
</style>