<template>
  <div class="sidebar">
    <div class="intoro">
      <div class="intoro__title">自己紹介</div>
      <div class="intoro__icon">
        <img class="intoro__icon__img" src="/common/profile-icon.png">
      </div>
      <div class="intoro__sectiontext">---ひとこと---</div>
      <p>
        ニワトリです。
        <br />
        名前はまだない。
      </p>
      <div class="intoro__sectiontext">---SNS---</div>
      <div class="intoro__sns">
        <ul class="intoro__sns__list">
          <li class="intoro__sns__list__icon">
            <img src="/common/twitter.svg">
          </li>
          <li class="intoro__sns__list__icon">
            <img src="/common/github.svg">
          </li>
          <li class="intoro__sns__list__icon">
            <img src="/common/qiita.png">
          </li>
          <li class="intoro__sns__list__icon">
            <img src="/common/linkedin.svg">
          </li>
        </ul>
      </div>
    </div>
    <div class="pickup">
      <div class="intoro__title">自己紹介</div>
      <div class="pickup__post">
        <div class="pickup__post__rank">第1位</div>
        <BlogCrad />
      </div>
      <div class="pickup__post">
        <div class="pickup__post__rank">第2位</div>
        <BlogCrad />
      </div>
      <div class="pickup__post">
        <div class="pickup__post__rank">第3位</div>
        <BlogCrad />
      </div>
      <div class="pickup__post">
        <div class="pickup__post__rank">第4位</div>
        <BlogCrad />
      </div>
      <div class="pickup__post">
        <div class="pickup__post__rank">第5位</div>
        <BlogCrad />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCrad from "@/components/Molecules/blogcard.vue";
export default {
  name: "Sidebar",
  components: {
    BlogCrad
  }
};
</script>
<style lang="scss" scoped>

.sidebar {
  width: 268px;
  padding: 0 16px;
  height: auto;
  background: #ebf8fd;
  .intoro {
    margin-bottom: 32px;
    &__title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 16px;
    }
    &__sectiontext {
      font-size: 20px;
      text-align: center;
      font-weight: 700;
      margin-bottom: 16px;
    }
    &__icon {
      text-align: center;
      &__img {
        width: 50%;
        border-radius: 50%;
        background-position: center ;
      }
    }
    &__sns {
      &__list {
        padding: 0;
        display: flex;
        list-style: none;
        &__icon {
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
  .pickup {
    &__post {
      &__rank {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
  .blogcard {
    width: 100%;
    margin-bottom: 16px;
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
  }
}
@media (max-width: 320px) {
}
</style>