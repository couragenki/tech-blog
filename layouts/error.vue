<template>
  <PageTemplate>
    <h1>こちらはエラーページです</h1>
    <h2>エラーコードは {{ error.statusCode }} です。</h2>
    <nuxt-link to="/">トップページへ戻る</nuxt-link>
  </PageTemplate>
</template>

<script lang="ts">
export default {
  props: ["error"],
  layout: "error"
};
</script>
