<template>
  <div class="wrapper">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: auto;
  padding: 0 16px;
  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
  .wrapper {
    width: auto;
    padding: 0 16px;
  }
}
@media (max-width: 320px) {
}
</style>