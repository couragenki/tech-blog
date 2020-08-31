<template>
  <div class="sidebar">
    <div class="about">
      <p class="about__title">Welcom to Couragenki!!</p>
      <p>Courage(勇気)とGenki(元気)を届けるWEBブログです。</p>
    </div>
    <div class="intoro">
      <div class="intoro__title">Profile</div>
      <Introduction />
    </div>
    <div class="category">
      <p class="category__title">カテゴリー</p>
        <ul>
          <li>
            <n-link to="/tech">テック</n-link>
            <ul class="category__links">
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
          </li>
          <li>
            <n-link to="/marketing">マーケティング</n-link>
            <ul class="category__links">
              <li>
                <n-link to="/marketing/sns">SNS</n-link>
              </li>
              <li>
                <n-link to="/marketing/blog">ブログ</n-link>
              </li>
            </ul>
          </li>
        </ul>
    </div>
    <!-- <div class="tag">
      <p class="tag__title">ジャンル</p>
        <p>
          <n-link to="/tech/frontend/javascript/">#JavaScript</n-link>&nbsp;
          <n-link to="/tech/frontend/vue/">#Vue.js</n-link>&nbsp;
          <n-link to="/tech/frontend/gatsby/">#Gatsby.js</n-link>&nbsp;
          <n-link to="/tech/frontend/markup/">#Markup</n-link>&nbsp;
          <n-link to="/tech/backend/python/">#Python</n-link>&nbsp;
          <n-link to="/tech/infra/docker/">#Docker</n-link>&nbsp;
          <n-link to="/tech/git">#Git</n-link>&nbsp;
        </p>
    </div> -->
  </div>
</template>

<script>
import Introduction from "@/components/Molecules/introduction.vue";
import BlogCrad from "@/components/Molecules/blogcard.vue";
export default {
  name: "Sidebar",
  components: {
    BlogCrad,
    Introduction
  }
};
</script>
<style lang="scss" scoped>

.sidebar {
  width: 268px;
  padding: 0 16px;
  height: auto;
  background: gainsboro;
  border-radius: 8px;
  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .about, .intoro, .category, .tag {
    margin-top: 16px;
    margin-bottom: 16px;
    background: white;
    padding: 4px;
    border-radius: 8px;
    &__title{
      font-weight: 700;
    }
    ul {
      padding-left: 1.5rem;
    }
  }
}

@media (max-width: 912px) {
  .sidebar {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
@media (max-width: 320px) {
}
</style>