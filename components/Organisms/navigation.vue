<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__list__item">
        <n-link to="/frontend">フロントエンド</n-link>
        <div class="hide">
          <ul>
            <li>
              <n-link to="/frontend">フロントエンド</n-link>
            </li>
            <li>
              <n-link to="/frontend/vue">> Vue.js</n-link>
            </li>
            <li>
              <n-link to="/frontend/nuxt">> Nuxt.js</n-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="navigation__list__item">
        <n-link to="/backend">バックエンド</n-link>
        <div class="hide">
          <ul>
            <li>
              <n-link to="/backend">バックエンド</n-link>
            </li>
            <li>
              <n-link to="/backend/php">> php</n-link>
            </li>
            <li>
              <n-link to="/backend/python">> python</n-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="navigation__list__item">
        <n-link to="/books">本・読書</n-link>
        <div class="hide">
          <ul>
            <li>
              <n-link to="/books">本・読書</n-link>
            </li>
            <li>
              <n-link to="/books/business">> ビジネス書</n-link>
            </li>
            <li>
              <n-link to="/books/novel">> 小説</n-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="navigation__list__item">
        <n-link to="/marketing">マーケティング</n-link>
        <div class="hide">
          <ul>
            <li>
              <n-link to="/marketing">マーケティング</n-link>
            </li>
            <li>
              <n-link to="/marketing/web">> Webマーケ</n-link>
            </li>
            <li>
              <n-link to="/marketing/sns">> SNSマーケ</n-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="navigation__list__item">
        <n-link to="/others">その他</n-link>
        <div class="hide">
          <ul>
            <li>
              <n-link to="/others">その他</n-link>
            </li>
            <li>
              <n-link to="/others/notes">> 雑記</n-link>
            </li>
            <li>
              <n-link to="/others/word">> 名言</n-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
.navigation {
  width: 100%;
  background: #ffdb99;
  &__list {
    width: auto;
    max-width: 1200px;
    margin: 0 auto;
    list-style: none;
    padding: 0 16px;
    &__item {
      position: relative;
      padding: 16px 16px 16px 0;
      display: inline-block;
      a {
        font-size: 0.8em;
        font-weight: 700;
        color: #716666;
        text-decoration-line: none;
      }
      &::after {
        content: "▼";
        font-size: 0.6em;
        color: #716666;
      }
      .hide {
        position: absolute;
        top: 0;
        left: 0;
        height: auto;
        color: #ffffff;
        background-color: cornflowerblue;
        display: none;
        animation: fadeIn 1s ease 0s 1 normal;
        -webkit-animation: fadeIn 1s ease 0s 1 normal;
        z-index: 999;
        ul {
          width: 120px;
          padding: 1em;
          list-style: none;
          text-align: left;
          li {
            padding-bottom: 16px;
            a {
              color: #fff;
            }
          }
          li:hover {
            color: darkgray;
            opacity: 0.7;
          }
        }
      }

      &:hover {
        .hide {
          display: block;
        }
      }
    }
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .navigation {
    display: none;
  }
}
@media (max-width: 320px) {
}
</style>