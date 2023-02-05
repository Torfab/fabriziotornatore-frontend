<template>
  <div class="grid">
    <CardItem
      title="Programmazione"
      image="pi-book"
      class="col-12 md:col-6"
    ></CardItem>
    <VueMarkdown :source="content"></VueMarkdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardItem from "../components/CardItem.vue";
import VueMarkdown from "vue-markdown-render";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt()

export default defineComponent({
  components: {
    CardItem,
    VueMarkdown,
  },
  data(){
    return{
      content: ''
    }
  },
  mounted() {
    const file = import('./test.md');
    console.log("uh")

  }
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
