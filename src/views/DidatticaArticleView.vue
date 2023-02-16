<template>
  <div>
    <div class="blog-article">
      <div v-if="raw">
        <MarkdownFormatter
          :raw="raw"
          @metadati="metadatiUpdated"
          @errorBuildingMD="errorBuildingMDHandler"
        ></MarkdownFormatter>
        <div class="d-flex">
          <router-link v-if="previousPage" @click="updateHistoryPage()" :to="previousPage.name">{{
            previousPage.title
          }}</router-link>
          <router-link class="ml-auto" v-if="nextPage" @click="updateHistoryPage()" :to="nextPage.name">{{
            nextPage.title
          }}</router-link>
        </div>
      </div>
      <div class="d-flex" style="height: 100%">
        <div v-if="error || notFound" class="article-error">
          <h1>{{errorTitle}}</h1>
          <div class="d-flex">
            <img class="m-auto" :src="errorImagePath"/>
          </div>
          {{errorMessage}}
          <div>
            <span v-if="historyPage">
              <router-link :to="historyPage">Clicca qui</router-link>
              per andare alla pagina precedente o
            </span>
            <router-link :to="{ name: 'home' }">Clicca qui</router-link> per
            andare alla home
          </div>
        </div>
      </div>
      <!-- <div v-if="loading">Loading</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkdownFormatter from "@/components/MarkdownFormatter.vue";
import type { ArticleRoute, MetadatiDidattica } from "@/Utility/typings";
import Clock from "@/components/Clock.vue";

export default defineComponent({
  data() {
    return {
      raw: undefined as any,
      broke: false,
      notFound: false,
      historyPage: undefined as string | undefined,
      metadati: {} as MetadatiDidattica,
    };
  },
  components: {
    MarkdownFormatter,
    Clock,
  },
  methods: {
    updateHistoryPage(): void {
      this.historyPage=(this.$route.params.article as string)
    },
    updateComponent(param: string) {
      // The dynamic import
      import(`@/mdFiles/${param}.md?raw`)
        .then((module: any) => {
          this.broke=false;
          this.notFound=false,
          this.raw = module.default;
        })
        .catch(() => {
          window.document.title = "Error"
          this.notFound = true;
          this.raw = undefined;
        });
    },
    errorBuildingMDHandler(){
      window.document.title = "Error"
          this.broke = true;
          this.raw = undefined;
    },
    metadatiUpdated(metadati: Object) {
      this.metadati = metadati;
      window.document.title =
        this.metadati.title ||
        (this.$route.params.article as string) ||
        "Tornatore";
    },
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
  computed: {
    error(): boolean {
      return this.broke || this.notFound
    },
    errorTitle(): string {
      if(this.notFound){
        return "Risorsa non trovata"
      } 
      if(this.broke ){
        return "Oh No, Errore"
      }
      return "Absurd"
    },
    errorMessage(): string {
      if(this.notFound){
        return "L'articolo che stai cercando d'aprire non è stato trovato"
      } 
      if(this.broke ){
        return "Oops, a quanto pare hai incontrato un errore :C questo non doveva accadere"
      }
      return "non esiste alcun modo in cui tu sia riuscito a finire qui"
    },
    errorImagePath(): string {
      if(this.notFound){
        return "/src/assets/svg/error404.svg"
      } 
      if(this.broke ){
        return "/src/assets/svg/error.svg"
      }
      return "#"
      
    },
    loading(): boolean {
      return !this.raw && !this.error;
    },
    nextPage(): ArticleRoute | undefined {
      if (this.metadati?.nextPage) {
        let splitted = this.metadati.nextPage.split(" - ");
        if (splitted.length == 1) {
          return {
            title: splitted[0],
            name: splitted[0],
          };
        } else {
          return {
            title: splitted[1],
            name: splitted[0],
          };
        }
      }
      return undefined;
    },
    previousPage(): ArticleRoute | undefined {
      if (this.metadati?.previousPage) {
        let splitted = this.metadati.previousPage.split(" - ");
        if (splitted.length == 1) {
          return {
            title: splitted[0],
            name: splitted[0],
          };
        } else {
          return {
            title: splitted[1],
            name: splitted[0],
          };
        }
      }
      return undefined;
    },
  },
});
</script>

<style lang="scss" scoped>
.blog-article {
  max-width: 650px;
  margin: auto;
  padding: 0 2rem;
}
.article-error {
  margin: auto;
}
</style>

