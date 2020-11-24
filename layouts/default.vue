<template>
  <div>
    <div class="links">
      <NuxtLink :to="$i18n.path('')">
        {{ $t("links.home") }}
      </NuxtLink>
      <NuxtLink v-if="$i18n.locale === 'ja'" :to="`/en` + $route.fullPath">
        {{ $t("links.en") }}
      </NuxtLink>
      <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
        {{ $t("links.ja") }}
      </NuxtLink>
    </div>
    <nuxt />
  </div>
</template>

<script lang="ts">
export default {
  layout: "default",
};
</script>

<style lang="scss" scoped>
* {
  font-family: "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体",
    "YuGothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ",
    "Meiryo", "verdana", sans-serif;
}
body,
p,
ul,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
hr {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  color: #3f51b5;
  text-decoration: underline;
}
</style>
