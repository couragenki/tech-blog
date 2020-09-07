<template>
  <DefaultTemplate>
    <div class="photopage">
      <div class="photopage__header">
        <div class="photopage__header__airplane">
          <img alt="飛行機アイコン" src="/common/airplane.svg" />
        </div>
        <nav class="photopage__header__sns">
          <ul class="photopage__header__sns__list">
            <li class="photopage__header__sns__list__icon">
              <a href="https://twitter.com/couragenki" target="_blank">
                <img alt="twitterアイコン" src="/common/twitter.svg" />
              </a>
            </li>
            <li class="photopage__header__sns__list__icon">
              <a href="https://github.com/GenkiMatsubara" target="_blank">
                <img alt="Githubアイコン" src="/common/github.svg" />
              </a>
            </li>
            <li class="photopage__header__sns__list__icon">
              <a href="https://qiita.com/GenkiMatsubara" target="_blank">
                <img alt="Qiitaアイコン" src="/common/qiita.png" />
              </a>
            </li>
            <li class="photopage__header__sns__list__icon">
              <a href="https://www.instagram.com/genki.matsubara/" target="_blank">
                <img alt="instagramアイコン" src="/common/instagram.svg" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="photopage__intoro">
        <p class="photopage__intoro__text">
          外に行こう。まだ知らない街に行こう。<br />
          新しい発見と思い出を求めて。
        </p>
      </div>

      <div class="photopage__photoblock">
        <div class="list">
          <div class="item bule">
            <div class="photopage__photoblock__location">
              <h2 class="photopage__photoblock__location__title">ひとり旅</h2>
              <p class="photopage__photoblock__location__text">少ない荷物とたくさんの楽しみと</p>
            </div>
          </div>
          <div class="item" :style="{ backgroundImage: 'url(/photos/1.jpg)'}">
            <div class="photopage__photoblock__location">
              <h3 class="photopage__photoblock__location__title">日光</h3>
              <p class="photopage__photoblock__location__text">徳川が眠る古都を求めて</p>
            </div>
          </div>
        </div>
        <div class="over" :style="{ backgroundImage: 'url(/photos/2.jpg)'}">
          <div class="photopage__photoblock__location">
            <h3 class="photopage__photoblock__location__title">福島</h3>
            <p class="photopage__photoblock__location__text">歴史豊かな街並みと温かみ</p>
          </div>
        </div>
        <div class="list">
          <div class="item red">
            <div class="photopage__photoblock__location">
              <h2 class="photopage__photoblock__location__title">東京のお出かけ</h2>
              <p class="photopage__photoblock__location__text">Oceans from above</p>
            </div>
          </div>
          <div class="item" :style="{ backgroundImage: 'url(/photos/3.jpg)'}">
            <div class="photopage__photoblock__location">
              <h3 class="photopage__photoblock__location__title">浅草</h3>
              <p class="photopage__photoblock__location__text">歴史情緒溢れる江戸っ子の町</p>
            </div>
          </div>
        </div>
        <div class="over" :style="{ backgroundImage: 'url(/photos/4.jpg)'}">
          <div class="photopage__photoblock__location">
            <h3 class="photopage__photoblock__location__title">お台場</h3>
            <p class="photopage__photoblock__location__text">海風とアトラクションを感じに</p>
          </div>
        </div>
      </div>

      <div class="photopage__end">
        <h2 class="photopage__end__words">
          次はどこに出かける？
        </h2>
        <a  href="https://www.instagram.com/genki.matsubara/" target="_blank">
          <div class="photopage__end__link">instagramの写真を見に行く</div>
        </a>
        <p class="photopage__end__messege">写真はiPhoneXとEOS kiss10で撮影。<br />またどこかで👋</p>

        <p class="photopage__end__sign">
          Genki
        </p>

        <div class="photopage__end__icon">
          <div class="photopage__end__icon__wrapper">
            <img class="photopage__end__icon__img" src="/common/profile-icon.jpg">
          </div>
        </div>

        <p class="photopage__end__name">
          Genki Matsubara
        </p>
      </div>

    </div>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
export default {
  components: {
    DefaultTemplate,
  },
};
</script>

<style lang="scss" scoped>
.photopage {
  max-width: 1200px;
  margin: 0 auto;
  // ヘッダー
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 77px;
    &__airplane {
      width: 40px;
    }
    &__sns {
      &__list {
        width: 124px;
        padding: 0;
        display: flex;
        &__icon {
          list-style: none;
          width: 19%;
          margin-left: 3%;
          margin-right: 3%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  // イントロテキスト
  &__intoro {
    &__text {
      text-align: center;
      line-height: 2.5em;
      margin-bottom: 108px;
    }
  }
  // 写真ブロック
  &__photoblock {
    margin-bottom: 159px;
    .list {
      display: flex;
      .item {
        display: table;
        width: 50%;
        height: 480px;
        background-position: center;
        background-size: cover;
      }
      .bule {
        background-color: #4F8CFF;
      }
      .red {
        background-color: #FF4F4F;
      }
    }
    .over {
      display: table;
      width: 100%;
      height: 480px;
      background-position: center;
      background-size: cover;
    }
    &__location {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      &__title {
        display: inline-block;
        font-family: YuGo-Bold;
        font-size: 30px;
        color: #FFFFFF;
        text-align: center;
        border-bottom: 2px #FFF solid;
      }
      &__text {
        font-family: YuGo-Bold;
        font-size: 18px;
        color: #FFFFFF;
        text-align: center;
      }
    }
  }
  // 終わりに
  &__end {
    text-align: center;
    &__words {
      font-weight: normal;
      margin-bottom: 28px;
      font-family: SFNS-Regular;
      font-size: 30px;
      color: #000000;
      text-align: center;
      line-height: 56px;
    }
    a {
      text-decoration-line: none;
    }
    &__link {
      display: inline-block;
      color: black;
      margin-bottom: 26px;
      padding: 11px 17px;
      border: 2px solid #E8E8E8;
      border-radius: 100px;
      font-family: SFNS-Regular;
      font-size: 15px;
      color: #000000;
      text-align: center;
    }
    &__messege {
      margin-bottom: 68px; //84-26
    }
    &__sign {
      color: #D8D8D8;
      font-size: 5em;
      font-family: cursive;
    }
    &__icon {
      margin-bottom: 27px;
      &__wrapper {
        width: 68px;
        height: 68px;
        border: 1px solid #D8D8D8;
        display: inline-block;
        border-radius: 50%;
        box-shadow: 0px 0px 6px #00000036;
      }
      &__img {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        border: 4px solid white;

      }
    }
    &__name {
      margin-bottom: 132px;
    }
  }
}

@media (max-width: 768px) {
  .photopage {
    // イントロテキスト
    &__intoro {
      &__text {
        line-height: 2.5em;
        margin-bottom: 108px;
      }
    }
    // 写真ブロック
    &__photoblock {
      margin-bottom: 159px;
      .list {
        display: block;
        .item {
          width: 100%;
        }
      }
    }
  }
}
</style>
