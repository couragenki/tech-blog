<template>
  <div class="newsposts">
    <h3>新着記事</h3>
    <div>
      <BlogCrad />
    </div>
  </div>
</template>

<script>
import BlogCrad from "@/components/Molecules/blogcard.vue";
export default {
  name: "NewPosts",
  components: {
    BlogCrad,
  },
  async asyncData({ $content, params, route, error }) {
    let article;
    try {
      article = await $content("frontend", params.slug).fetch();
    } catch (e) {
      error({ message: "frontend-data not found" });
    }

    console.log("article");
    console.log(article);

    return {
      article,
    };
  },
};
</script>
<style lang="scss" scoped>
.newsposts {
}

@media (max-width: 768px) {
}
@media (max-width: 320px) {
}
</style>