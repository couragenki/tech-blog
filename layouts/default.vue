<template>
  <nuxt />
</template>

<script lang="ts">
export default {
  layout: "default",
};
</script>

<style lang="scss" scoped>
*{
  font-family: "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", "YuGothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "verdana", sans-serif;
}
body,
p,ul,ol,h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.PostStyle {
  h1 {
    font-size: 2rem;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 1.6rem;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  h3 {
    font-size: 1.2rem;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  P {
    line-height: 1.5em;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  ul {
    padding-left: 1em;
    list-style:square;
    padding-left: 1.5em;
  }
  ol {
    padding-left: 1.5em;
  }
  li {
    margin-bottom: 0.5em;
  }
}

@media (max-width: 768px) {
}
@media (max-width: 320px) {
}
</style>
