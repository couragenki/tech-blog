<template>
  <div>
    <nuxt-link to="/books">books</nuxt-link>
    <h2>{{ catergory }}/{{ family }}</h2>

    <ul>
      <li v-for="article in books" :key="article.slug">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  watchQuery: true,
  async asyncData({ $content, route, params }) {
    const { catergory, family } = params;

    const books = await $content("books", catergory, family)
      .sortBy("date", "desc")
      .fetch();

    return {
      books,
      catergory,
      family,
    };
  },
};
</script>
