<template>
  <DefaultTemplate>
    <h1>こちらはエラーページです</h1>
    <h2>エラーコードは {{ error.statusCode }} です。</h2>
    <BackButton link="/" text="トップページへ戻る" />
  </DefaultTemplate>
</template>

<script lang="ts">
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
import BackButton from "@/components/Atoms/backbutton.vue";
export default {
  components: {
    DefaultTemplate,
    BackButton,
  },
  props: ["error"],
  layout: "error",
};
</script>
