<template>
  <DefaultTemplate>
    <h1>こちらはエラーページです</h1>
    <h2>エラーコードは {{ error.statusCode }} です。</h2>
    <nuxt-link to="/">トップページへ戻る</nuxt-link>
  </DefaultTemplate>
</template>

<script lang="ts">
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
export default {
  components: {
    DefaultTemplate,
  },
  props: ["error"],
  layout: "error",
};
</script>
