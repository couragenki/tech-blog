<template>
  <div>
    <!-- <div class="toppage-intoro">
      <Header />
      <div class="intoro-mask">
        <div class="top-container">
          <div class="top-text">
            <h1>GENKI MATSUBARA</h1>
          </div>
        </div>
      </div>
    </div> -->
    <div class="toppage-profile">
      <Header />
      <div class="top-container">
        <div class="top-profile">
          <div class="top-profile-container">
            <img
              alt="プロフィール画像"
              width="512"
              src="/common/profile-icon.jpg"
            />
          </div>
        </div>
        <div class="top-intoro">
          <h2>{{ $t("profile.intoro") }}</h2>
          <p>
            {{ $t("profile.intorotext1") }}
            <br />{{ $t("profile.intorotext2") }} <br />{{
              $t("profile.intorotext3")
            }}
          </p>
          <div class="sns">
            <ul class="sns__list">
              <li class="sns__list__icon">
                <a href="https://twitter.com/couragenki" target="_blank">
                  <img alt="twitterアイコン" src="/common/twitter.svg" />
                </a>
              </li>
              <li class="sns__list__icon">
                <a href="https://github.com/couragenki" target="_blank">
                  <img alt="Githubアイコン" src="/common/github.svg" />
                </a>
              </li>
              <li class="sns__list__icon">
                <a href="https://qiita.com/couragenki" target="_blank">
                  <img alt="Qiitaアイコン" src="/common/qiita.png" />
                </a>
              </li>
              <li class="sns__list__icon">
                <a
                  href="https://www.instagram.com/genki.matsubara/"
                  target="_blank"
                >
                  <img alt="instagramアイコン" src="/common/instagram.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import BlogCrad from "@/components/Molecules/blogcard.vue";
import PostCards from "@/components/Organisms/postcards.vue";
import Header from "@/components/Organisms/header.vue";
import Navigation from "@/components/Organisms/navigation.vue";
import Container from "@/components/Organisms/container.vue";
import Footer from "@/components/Organisms/footer.vue";

export default {
  components: {
    DefaultTemplate,
    BlogCrad,
    PostCards,
    Header,
    Navigation,
    Container,
    Footer,
  },
  watchQuery: true,
  async asyncData({ $content, route }) {
    const q = route.query.q;

    // 前投稿から投稿日が新しい順12件に取得する
    let query = $content("", { deep: true }).sortBy("date", "desc").limit(12);

    if (q) {
      query = query.search("title", q);
    }

    const tech = await query.fetch();

    return {
      q,
      tech,
    };
  },
};
</script>

<style scoped lang="scss">
.toppage-intoro {
  width: 100%;
  height: 100vh;
  background-image: url("/img/sample2.jpg");
  background-position: center;
  background-size: cover;
  .intoro-mask {
    width: 100%;
    height: 100%;
    background: #ffffff60;
    .top-container {
      max-width: 1240px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      position: relative;
      .top-text {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 20rem;
        left: 0;
        margin: auto;
        width: 80%;
        height: 3.2rem;
        h1 {
          font-size: 5rem;
          text-align: center;
        }
        p {
          font-size: 2em;
          text-align: center;
        }
      }
    }
  }

  .intoro-mask::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;

    /*ここで三角形のサイズを決める。
    必ず幅100vwにして、ブラウザサイズいっぱいにしてください。*/
    border-width: 0 0 100px 100vw;
    border-color: transparent transparent #04b7b7a1 transparent;
  }
}
.toppage-profile {
  width: 100%;
  height: 100vh;
  background-image: url("/img/sample1.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  .top-container {
    max-width: 1240px;
    display: flex;
    margin: 0 auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 80%;
    height: fit-content;
    background: #ffffff60;
    .top-profile {
      width: 40%;
      margin-right: 5%;
      .top-profile-container {
        background: #76d4ff75;
        height: 100%;
        text-align: center;
        position: relative;
        img {
          padding: 10px;
          width: 50%;
          border-radius: 50%;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
        }
      }
    }
    .top-intoro {
      width: 50%;
    }
  }
}
.sns {
  &__list {
    padding: 0;
    display: flex;
    list-style: none;
    &__icon {
      width: 10%;
      margin-left: 2%;
      margin-right: 2%;
      img {
        width: 100%;
      }
    }
  }
}
@media (max-width: 768px) {
  .toppage-intoro {
    .intoro-mask {
      .top-container {
        position: relative;
        .top-text {
          position: absolute;
          h1 {
            font-size: 2.5rem;
            text-align: center;
          }
          p {
            font-size: 1.5em;
            text-align: center;
          }
        }
      }
    }
  }
  .toppage-profile {
    .top-container {
      display: block;
      .top-profile {
        width: 100%;
        margin-right: 0;
        .top-profile-container {
          text-align: center;
          img {
            width: 50%;
          }
        }
      }
      .top-intoro {
        width: auto;
        min-height: 180px;
        padding-top: 70px;
        padding-left: 16px;
        padding-right: 16px;
      }
    }
  }
}
@media (max-width: 768px) {
  .toppage-intoro {
    .intoro-mask::before {
      content: none;
    }
  }
}
</style>
