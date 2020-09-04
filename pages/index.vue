<template>
  <DefaultTemplate>
    <h2>記事一覧</h2>
    <PostCards :data="data" />

    <h2>カテゴリー</h2>
    <p>WEB技術、マーケティングなどのアウトプットブログです</p>
    <h3>
      <n-link to="tech">技術ブログ</n-link>
    </h3>
    <p>JavaScript,PHPと行ったプログラミングに関する記事です。</p>
    <h4>
      <n-link to="tech/frontend">フロントエンド</n-link>
    </h4>
    <p>おもにJavaScriptに関するブログです</p>
    <h4>
      <n-link to="tech/backend">バックエンド</n-link>
    </h4>
    <p>バックエンド言語に関するブログです</p>
  </DefaultTemplate>
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
  async asyncData({ $content }) {
    let query = $content("", { deep: true }).sortBy("date", "desc");
    const tech = await query.fetch();
    const data = tech.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    return { data };
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
      max-width: 1200px;
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
    max-width: 1200px;
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
      margin-right: 10%;
      .top-profile-container {
        background: #76d4ff75;
        text-align: center;
        img {
          width: 50%;
          border-radius: 50%;
        }
      }
    }
    .top-intoro {
      width: 50%;
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
        width: 100%;
        min-height: 180px;
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
