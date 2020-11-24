<template>
  <div class="links">
    <n-link :to="$i18n.path('')">
      {{ $t("links.home") }}
    </n-link>
    <br />
    <n-link v-if="$i18n.locale === 'ja'" :to="`/en` + $route.fullPath">
      {{ $t("links.en") }}
    </n-link>
    <n-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
      {{ $t("links.ja") }}
    </n-link>
  </div>
</template>