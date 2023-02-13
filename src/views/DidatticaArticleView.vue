<template>
  <div>
    <MarkdownFormatter class="blog-article" :raw="raw" @metadati="metadatiUpdated"></MarkdownFormatter>
    <div class="d-flex">
      <router-link v-if="previousPage" :to="previousPage.name">{{ previousPage.title }}</router-link>
      <router-link class="ml-auto" v-if="nextPage" :to="nextPage.name">{{ nextPage.title }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkdownFormatter from "@/components/MarkdownFormatter.vue";
import type { ArticleRoute, MetadatiDidattica } from "@/Utility/typings";
import Clock from "@/components/Clock.vue"

export default defineComponent({
  data() {
    return {
      raw: "Loading" as any,
      metadati: {} as MetadatiDidattica
    }
  },
  components: {
    MarkdownFormatter,
    Clock
  },
  methods: {
    updateComponent(param: string) {
      // The dynamic import
        import(`@/mdFiles/${param}.md?raw`).then((module: any) => {
          this.raw=module.default
        }).catch(()=>
          this.raw="Error"
        )
    },
    metadatiUpdated(metadati: Object){
      this.metadati=metadati
      window.document.title = this.metadati.title || (this.$route.params.article as string) || "Tornatore"
    }
  },
  beforeRouteEnter(to, from, next) {
    // When first entering the route
    next((vm: any) => vm.updateComponent(to.params.article));
  },
  beforeRouteUpdate(to, from, next) {
    // When changing from one dynamic route to another
    this.updateComponent((to as any).params.article);
    next();
  },
  computed:{
    nextPage(): ArticleRoute | undefined {
      if(this.metadati?.nextPage){
        let splitted = this.metadati.nextPage.split(" - ")
        if(splitted.length==1){
          return {
            title: splitted[0],
            name: splitted[0]
          }
        } else {
          return {
            title: splitted[1],
            name: splitted[0]
          }
        }
      }
      return undefined
    },
    previousPage(): ArticleRoute | undefined {
      if(this.metadati?.previousPage){
        let splitted = this.metadati.previousPage.split(" - ")
        if(splitted.length==1){
          return {
            title: splitted[0],
            name: splitted[0]
          }
        } else {
          return {
            title: splitted[1],
            name: splitted[0]
          }
        }
      }
      return undefined
    },
  }
});
</script>

<style lang="scss" scoped>
.blog-article {
  max-width: 650px;
  margin: auto;
  padding: 0 2rem;
}
</style>

