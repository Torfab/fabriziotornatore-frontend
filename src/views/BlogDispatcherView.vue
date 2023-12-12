<template>
  <div>
    <div class="blog-article">
      <div v-for="element in blog" :key="element.categoryName">
        <h1>{{ element.categoryTitle }}</h1>
        <ListTree :tree="element.articles"> </ListTree>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import blog from "@/mdFiles/blog/blog.json";
import type { ArticleDispatching } from "@/Utility/typings";
import ListTree from "@/components/ListTree.vue";

export default defineComponent({
  components: {
    ListTree,
  },
  data() {
    return {
      blog: blog as Array<ArticleDispatching>,
    };
  },
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
