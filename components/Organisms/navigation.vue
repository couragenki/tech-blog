<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__list__item">
        <n-link to="tech">tech</n-link>
      </li>
      <li class="navigation__list__item">
        <n-link to="books">books</n-link>
      </li>
      <li class="navigation__list__item">
        <n-link to="marketing">marketing</n-link>
      </li>
      <li class="navigation__list__item">
        <n-link to="others">others</n-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
.navigation {
  width: 100%;
  background: #ffdb99;
  &__list {
    width: 80%;
    margin: 0 auto;
    list-style: none;
    text-align: center;
    &__item {
      width: 200px;
      padding: 1em;
      display: inline-block;
      a {
        font-size: 1.5em;
        font-weight: bold;
        color: #716666;
        text-decoration-line: none;
      }
    }
  }
}
</style>