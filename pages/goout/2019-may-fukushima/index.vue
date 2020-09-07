<template>
  <DefaultTemplate :isContainer="false">
    <div class="travel">

      <div style="position: relative;">
        <div class="travel__header__wrapper">
          <div class="travel__header">
            <div class="travel__header__airplane">
              <a href="https://www.instagram.com/genki.matsubara/" target="_blank">
                <img alt="飛行機アイコン" src="/common/airplane.svg" />
              </a>
            </div>
            <nav class="travel__header__sns">
              <ul class="travel__header__sns__list">
                <li class="travel__header__sns__list__icon">
                  <a href="https://twitter.com/couragenki" target="_blank">
                    <img alt="twitterアイコン" src="/common/twitter.svg" />
                  </a>
                </li>
                <li class="travel__header__sns__list__icon">
                  <a href="https://github.com/GenkiMatsubara" target="_blank">
                    <img alt="Githubアイコン" src="/common/github.svg" />
                  </a>
                </li>
                <li class="travel__header__sns__list__icon">
                  <a href="https://qiita.com/GenkiMatsubara" target="_blank">
                    <img alt="Qiitaアイコン" src="/common/qiita.png" />
                  </a>
                </li>
                <li class="travel__header__sns__list__icon">
                  <a href="https://www.instagram.com/genki.matsubara/" target="_blank">
                    <img alt="instagramアイコン" src="/common/instagram.svg" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="travel__heroimg" :style="{ backgroundImage: 'url(/photos/1.jpg)'}">
          <h1>ひとり旅 in 福島</h1>
        </div>
      </div>

      <div class="travel__main">
        <h2 class="travel__main__title">福島ひとり旅</h2>
        <p class="travel__main__subtitle">
          Fukushima in 2019 May
        </p>
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
        <img src="/photos/2.jpg">
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
        <img src="/photos/3.jpg">
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
        <p>
          hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
        </p>
      </div>



      <div class="travel__end">
        <p class="travel__end__sign">
          Genki
        </p>
        <div class="travel__end__icon">
          <div class="travel__end__icon__wrapper">
            <img class="travel__end__icon__img" src="/common/profile-icon.jpg">
          </div>
        </div>

        <p class="travel__end__name">
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
.travel {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  // ヘッダー
  &__header {
    max-width: 1208px;
    margin: 0 auto;
    padding: 100px 16px 0;
    display: flex;
    justify-content: space-between;
    margin-bottom: 77px;
    &__wrapper {
      position: absolute;
      width: 100%;
    }
    &__airplane {
      width: 40px;
      filter: grayscale(100%);
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
            filter: grayscale(100%);
          }
        }
      }
    }
  }
  &__heroimg {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    height: 70vw;
    max-height: 900px;
    background-size: cover;
    background-position: top;
    display: table;
    h1 {
      font-family: SFNS-Regular;
      font-size: 6em;
      color: #FFFFFF;
      text-align: center;
      text-shadow: 0 2px 10px rgba(0,0,0,0.10);
      text-align: center;
      display: table-cell;
      vertical-align: middle;
    }
  }
  &__main {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    padding-top: 88px;
    text-align: center;
    &__title {
      margin-bottom: 27px;
      font-family: SFNS-Regular;
      font-size: 30px;
    }
    &__subtitle {
      font-family: SFNS-Regular;
      font-size: 18px;
      color: #999999;
      text-align: center;
      margin-bottom: 70px;
    }
    p {
      word-wrap: break-word;
    }
    img {
      width: 100%;
      margin: 63px 0;
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
  .travel {
    // ヘッダー
    &__header {
      display: none;
    }
    &__heroimg {
      width: 100%;
      max-height: 500px;
      h1 {
        font-size: 4em;
      }
    }
    &__main {
      width: auto;
      margin: 0 16px;
      &__title {
        font-size: 24px;
      }
      &__subtitle {
        font-size: 16px;
      }
    }
    // 終わりに
    &__end {
      text-align: center;
      &__words {
        font-size: 30px;
      }
    }
  }
}
</style>
