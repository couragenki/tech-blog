<template>
  <DefaultTemplate :isPostsPage="true">
    <h1>{{ $t("policy.title") }}</h1>

    <h2>{{ $t("policy.text1") }}</h2>
    <p>
      {{ $t("policy.text2") }}
      <br />{{ $t("policy.text3") }} <br />{{ $t("policy.text4") }}
    </p>

    <h2>{{ $t("policy.text5") }}</h2>
    <p>
      {{ $t("policy.text6") }}
      <br />{{ $t("policy.text7") }} <br />{{ $t("policy.text8") }} <br />{{
        $t("policy.text9")
      }}
      <br />{{ $t("policy.text10") }}
    </p>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from "@/components/Templates/defaulttemplate.vue";
export default {
  components: {
    DefaultTemplate,
  },
  head: {
    titleTemplate: "Privacy Policy | couragenki",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "利用規約について記載しているページになります。",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Privacy Policy | couragenki",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "利用規約について記載しているページになります。",
      },
    ],
  },
};
</script>

<style lang="scss" scoped></style>
