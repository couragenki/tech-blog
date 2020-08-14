<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__list__item">
        <n-link to="frontend">フロントエンド</n-link>
        <div class="hide">
          <ul>
            <li>
              <n-link to="frontend/react">React.js</n-link>
            </li>
            <li>
              <n-link to="frontend/vue">Vue.js</n-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="navigation__list__item">
        <n-link to="backend">バックエンド</n-link>
        <div class="hide">
          <ul>
            <li>
              <n-link to="php">php</n-link>
            </li>
            <li>
              <n-link to="python">python</n-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="navigation__list__item">
        <n-link to="books">本・読書</n-link>
        <div class="hide">
          <ul>
            <li>
              <n-link to="books/business">ビジネス書</n-link>
            </li>
            <li>
              <n-link to="books/novel">小説</n-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="navigation__list__item">
        <n-link to="marketing">マーケティング</n-link>
        <div class="hide">
          <ul>
            <li>
              <n-link to="marketing/web">Webマーケ</n-link>
            </li>
            <li>
              <n-link to="marketing/sns">SNSマーケ</n-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="navigation__list__item">
        <n-link to="others">その他</n-link>
        <div class="hide">
          <ul>
            <li>
              <n-link to="others/notes">雑記</n-link>
            </li>
            <li>
              <n-link to="others/word">名言</n-link>
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
    width: 80%;
    margin: 0 auto;
    list-style: none;
    text-align: center;
    &__item {
      position: relative;
      width: 200px;
      padding: 1em;
      display: inline-block;
      a {
        font-size: 1.5em;
        font-weight: bold;
        color: #716666;
        text-decoration-line: none;
      }
      &::after {
        content: "▼";
        color: #716666;
      }
      .hide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        color: #ffffff;
        background-color: #384878;
        display: none;
        animation: fadeIn 1s ease 0s 1 normal;
        -webkit-animation: fadeIn 1s ease 0s 1 normal;
        ul {
          padding: 3em 1em 1em 3em;
          list-style: none;
          text-align: left;
          li {
            padding-bottom: 1em;
            a {
              color: #fff;
            }
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
</style>