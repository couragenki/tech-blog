<template>
  <nav class="navigation">
    <ul class="pc navigation__list">
      <li class="navigation__list__item">
        <n-link to="/">TOP</n-link>
      </li>
      <li class="navigation__list__item">
        <n-link to="/profile">自己紹介</n-link>
      </li>
      <li class="navigation__list__item">
        <n-link to="/tech">テック ▼</n-link>
        <div class="hide">
          <ul>
            <li>
              <n-link to="/tech">テック</n-link>
            </li>
            <li>
              <n-link to="/tech/frontend">> フロントエンド</n-link>
            </li>
            <li>
              <n-link to="/tech/backend">> バックエンド</n-link>
            </li>
            <li>
              <n-link to="/tech/infra">> インフラ</n-link>
            </li>
            <li>
              <n-link to="/tech/git">> Git</n-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="mobile">
      <hr />
      <n-link to="/" tag="label" class="acd-label">TOP</n-link>
      <hr />
      <n-link to="/profile" tag="label" class="acd-label">自己紹介</n-link>
      <hr />
      <input id="acd-check1" class="acd-check" type="checkbox" />
      <label class="acd-label" for="acd-check1">テック ▼</label>
      <div class="acd-content">
        <ul>
          <li>
            <n-link to="/tech">テック</n-link>
          </li>
          <li>
            <n-link to="/tech/frontend">> フロントエンド</n-link>
          </li>
          <li>
            <n-link to="/tech/backend">> バックエンド</n-link>
          </li>
          <li>
            <n-link to="/tech/infra">> インフラ</n-link>
          </li>
          <li>
            <n-link to="/tech/git">> Git</n-link>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  background: #ffb835;
  &__list {
    width: auto;
    max-width: 1200px;
    margin: 0 auto;
    list-style: none;
    padding: 0 16px;
    &__item {
      position: relative;
      padding: 8px 16px 8px 0;
      display: inline-block;
      a {
        font-size: 1.5em;
        font-weight: 700;
        color: #3c3c3c;
        text-decoration-line: none;
      }
      // &::after {
      //   content: "▼";
      //   font-size: 0.6em;
      //   color: #3c3c3c;
      // }
      .hide {
        width: fit-content;
        position: absolute;
        top: 0;
        left: 0;
        height: auto;
        color: #ffffff;
        background-color: #ffb835;
        display: none;
        border-radius: 1em;
        animation: fadeIn 1s ease 0s 1 normal;
        -webkit-animation: fadeIn 1s ease 0s 1 normal;
        z-index: 999;
        ul {
          width: 18em;
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

.acd-check {
  display: none;
}
.acd-label {
  font-size: 1.5em;
  color: #333;
  display: block;
  margin-bottom: 1px;
  padding: 16px;
}
.acd-content {
  background: #ffc36b;
  border: 1px solid #333;
  height: 0;
  opacity: 0;
  padding: 0 16px;
  transition: 0.8s;
  visibility: hidden;
}
.acd-check:checked + .acd-label + .acd-content {
  height: auto;
  opacity: 1;
  padding: 16px;
  visibility: visible;
  li {
    font-size: 1.2em;
    margin-bottom: 1em;
  }
}

.pc {
  display: block;
}
.mobile {
  display: none;
}
hr {
  margin: 0;
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
  .pc {
    display: none;
  }
  .mobile {
    background: orange;
    display: block;
  }
}
@media (max-width: 320px) {
}
</style>