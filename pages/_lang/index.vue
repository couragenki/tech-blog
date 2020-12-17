<template>
  <DefaultTemplate>
    <h1 class="title">
      <!-- 編集前：ColabApp -->
    </h1>
    <h2>{{ $t("toppage.title") }}</h2>

    <PostCards :data="data" />

    <h2>{{ $t("common.category") }}</h2>

    <p>{{ $t("toppage.subtext") }}</p>
    <h3>
      <n-link :to="$i18n.path('tech')">{{ $t("toppage.techlink") }}</n-link>
    </h3>
    <p>{{ $t("toppage.techtext1") }}</p>
    <h4>
      <n-link :to="$i18n.path('tech/frontend')">{{
        $t("links.frontend")
      }}</n-link>
    </h4>
    <p>{{ $t("toppage.techtext2") }}</p>
    <h4>
      <n-link :to="$i18n.path('tech/backend')">{{
        $t("links.backend")
      }}</n-link>
    </h4>
    <p>{{ $t("toppage.techtext3") }}</p>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import BlogCrad from "@/components/Molecules/blogcard.vue";
import PostCards from "@/components/Organisms/postcards.vue";
import Header from "@/components/Organisms/header.vue";
import Container from "@/components/Organisms/container.vue";
import Footer from "@/components/Organisms/footer.vue";

export default {
  head: {
    title: "トップページ",
  },
  components: {
    DefaultTemplate,
    BlogCrad,
    PostCards,
    Header,
    Container,
    Footer,
  },
  watchQuery: true,
  async asyncData({ $content }) {
    let query;
    let tech;
    let data;

    try {
      query = $content("", { deep: true }).sortBy("date", "desc");
      tech = await query.fetch();
      data = tech.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    } catch (e) {
      error({ message: "enData not found" });
    }

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
