<template>
  <div>
    <h1 class="post__title">{{ post.title }}</h1>
    <p class="post__date">{{ setDate(post.created_at) }}</p>
    <nuxt-content :document="post" />
    <BackButton
      :link="'/' + post.type + '/' + catergory"
      :text="catergory + 'の記事一覧へ戻る'"
    />
  </div>
</template>

<script>
import BackButton from "@/components/Atoms/backbutton.vue";
export default {
  name: "PostContent",
  components: {
    BackButton,
  },
  props: {
    catergory: {
      type: String,
      default: () => {
        return null;
      },
    },
    family: {
      type: String,
      default: () => {
        return null;
      },
    },
    post: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    setDate(date) {
      if (!date) return "不明";

      const y = date.substring(0, 4);
      const m = date.substring(5, 7);
      const d = date.substring(8, 10);

      return y + "/" + m + "/" + d;
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  &__title {
    font-size: 4em;
    font-weight: 700;
  }
  &__date {
    font-weight: 700;
    text-align: right;
  }
}

@media (max-width: 768px) {
}
@media (max-width: 320px) {
}
</style>