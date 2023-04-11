<template>
  <div>
    <div class="blog-article">
      <div v-if="raw">
        <div class="d-flex mt-2">
          <ButtonNavigationItem
            v-if="previousPage"
            class="maxw-50"
            direction="left"
            :page="previousPage"
            @pressed="updateHistoryPage"
          ></ButtonNavigationItem>
          <ButtonNavigationItem
            v-if="upperPage"
            class="mx-auto maxw-50"
            direction="center"
            :page="upperPage"
            @pressed="updateHistoryPage"
          ></ButtonNavigationItem>
          <ButtonNavigationItem
            v-if="nextPage"
            class="ml-auto maxw-50"
            direction="right"
            :page="nextPage"
            @pressed="updateHistoryPage"
          ></ButtonNavigationItem>
        </div>
        <hr v-if="previousPage || nextPage" />
        <MarkdownFormatter
          :raw="raw"
          @metadati="metadatiUpdated"
          @errorBuildingMD="errorBuildingMDHandler"
        ></MarkdownFormatter>
        <hr v-if="previousPage || nextPage" />
        <div class="d-flex mb-5">
          <ButtonNavigationItem
            v-if="previousPage"
            class="maxw-50"
            direction="left"
            :page="previousPage"
            @pressed="updateHistoryPage"
          ></ButtonNavigationItem>
          <ButtonNavigationItem
            v-if="upperPage"
            class="mx-auto maxw-50"
            direction="center"
            :page="upperPage"
            @pressed="updateHistoryPage"
          ></ButtonNavigationItem>
          <ButtonNavigationItem
            v-if="nextPage"
            class="ml-auto maxw-50"
            direction="right"
            :page="nextPage"
            @pressed="updateHistoryPage"
          ></ButtonNavigationItem>
        </div>
      </div>
      <div v-if="loading">Loading</div>
      <div class="d-flex" style="height: 100%">
        <div v-if="error || notFound" class="article-error">
          <h1>{{ errorTitle }}</h1>
          <div class="d-flex">
            <img class="m-auto" :src="errorImagePath" alt="image of error"/>
          </div>
          {{ errorMessage }}
          <div>
            <span v-if="historyPage">
              <router-link :to="historyPage">Clicca qui</router-link>
              per andare alla pagina precedente o
            </span>
            <router-link :to="{ name: 'didattica' }">Clicca qui</router-link> per
            andare al dispatcher
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkdownFormatter from "@/components/MarkdownFormatter.vue";
import ButtonNavigationItem from "@/components/ButtonNavigationItem.vue";
import type {
  ArticleRoute,
  Didattica,
  MetadatiDidattica,
} from "@/Utility/typings";
import didattica from "@/mdFiles/didattica.json";

export default defineComponent({
  data() {
    return {
      raw: undefined as any,
      broke: false,
      notFound: false,
      historyPage: undefined as string | undefined,
      metadati: {} as MetadatiDidattica,
      oldParam: "",
      didattica: didattica as Array<Didattica>,
    };
  },
  components: {
    MarkdownFormatter,
    ButtonNavigationItem,
  },
  methods: {
    updateHistoryPage(): void {
      this.historyPage = this.$route.params.article as string;
    },
    updateComponent(param: string) {
      if (this.oldParam != param) {
        this.raw = undefined;
      }
      this.oldParam = param;
      import(`@/mdFiles/${param}.md?raw`)
        .then((module: any) => {
          this.broke = false;
          this.notFound = false;
          this.raw = module.default;
        })
        .catch(() => {
          window.document.title = "404 Not Found";
          this.notFound = true;
          this.raw = undefined;
        });
    },
    errorBuildingMDHandler() {
      window.document.title = "Error";
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
    findDidatticaNavigation(
      elementToFind: string,
      arrayDidattica: Array<Didattica>,
      next: boolean
    ) {
      let aux = undefined;
      for (let i = 0; i < arrayDidattica.length; i++) {
        let element = arrayDidattica[i];
        aux = this.findArticleNavigation(elementToFind, element.articles, next);
        if (aux != undefined) {
          return aux;
        }
      }
      return undefined;
    },
    findUpperDidatticaNavigation(
      elementToFind: string,
      arrayDidattica: Array<Didattica>,
      next: boolean
    ) {
      let aux = undefined;
      for (let i = 0; i < arrayDidattica.length; i++) {
        let element = arrayDidattica[i];
        aux = this.findUpperArticleNavigation(elementToFind, element.articles, next);
        if(aux==true){
          return undefined
        }
        if (aux != undefined) {
          return aux;
        }
      }
      return undefined;
    },
    findArticleNavigation(
      elementToFind: string,
      arrayToCheck: Array<ArticleRoute>,
      next: boolean
    ): ArticleRoute | undefined {
      let aux = undefined;
      for (let i = 0; i < arrayToCheck.length; i++) {
        let element = arrayToCheck[i];
        if (element.name == elementToFind) {
          if (next && i != arrayToCheck.length - 1) {
            return arrayToCheck[i + 1];
          }
          if (!next && i != 0) {
            return arrayToCheck[i - 1];
          }
          return undefined;
        }
        aux = this.findArticleNavigation(elementToFind, element.subLink, next);
        if (aux != undefined) {
          return aux;
        }
      }
      return undefined;
    },
    findUpperArticleNavigation(
      elementToFind: string,
      arrayToCheck: Array<ArticleRoute>,
      next: boolean
    ): ArticleRoute | Boolean | undefined {
      let aux = undefined;
      for (let i = 0; i < arrayToCheck.length; i++) {
        let element = arrayToCheck[i];
        if (element.name == elementToFind) {
          return true;
        }
        aux = this.findUpperArticleNavigation(elementToFind, element.subLink, next);
        if (aux==true) {
          return element;
        }
        if (aux != undefined) {
          return aux;
        }
      }
      return undefined;
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
      return this.broke || this.notFound;
    },
    errorTitle(): string {
      if (this.notFound) {
        return "Risorsa non trovata";
      }
      if (this.broke) {
        return "Oh No, Errore";
      }
      return "Absurd";
    },
    errorMessage(): string {
      if (this.notFound) {
        return "L'articolo che stai cercando d'aprire non è stato trovato";
      }
      if (this.broke) {
        return "Oops, a quanto pare hai incontrato un errore :C questo non doveva accadere";
      }
      return "non esiste alcun modo in cui tu sia riuscito a finire qui";
    },
    errorImagePath(): string {
      if (this.notFound) {
        return "/svg/error404.svg";
      }
      if (this.broke) {
        return "/svg/error.svg";
      }
      return "#";
    },
    loading(): boolean {
      return !this.raw && !this.error;
    },
    nextPage(): ArticleRoute | undefined {
      return this.findDidatticaNavigation(
        (this.$route as any).params.article,
        this.didattica,
        true
      );
    },
    previousPage(): ArticleRoute | undefined {
      return this.findDidatticaNavigation(
        (this.$route as any).params.article,
        this.didattica,
        false
      );
    },
    upperPage(): ArticleRoute | undefined {
      return this.findUpperDidatticaNavigation(
        (this.$route as any).params.article,
        this.didattica,
        false
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.article-error {
  margin: auto;
}

.lastbutton {
  border: 1px solid var(--border-color);
  transition: background-color 0.25s, color 0.25s;
  color: var(--main-link-color);
  cursor: pointer;
  &:hover {
    color: white !important;
    background-color: var(--main-link-color);
  }
}
</style>

