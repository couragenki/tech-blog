<template>
  <DefaultTemplate :isPostsPage="true">
    <h1>プライバシーポリシー</h1>

    <h2>当サイトに掲載されている広告について</h2>
    <p>
      当サイトでは、第三者配信の広告サービス（Googleアドセンス、A8.net、Amazonアソシエイト、バリューコマース、iTunes
      アフィリエイトプログラム）を利用しています。
      <br />このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報
      『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません)
      を使用することがあります。
      <br />またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、こちらをクリックしてください。
    </p>

    <h2>当サイトが使用しているアクセス解析ツールについて</h2>
    <p>
      当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
      <br />このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
      <br />このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
      <br />この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
      <br />この規約に関して、詳しくはこちら、またはこちらをクリックしてください。
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
    titleTemplate: "ポリシー | couragenki",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "利用規約について記載しているページになります。",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "ポリシー | couragenki",
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
