<template>
  <div>
    <MarkdownFormatter class="blog-article" :raw="raw"></MarkdownFormatter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkdownFormatter from "@/components/MarkdownFormatter.vue"
import Clock from "@/components/Clock.vue"

export default defineComponent({
  data() {
    return {
      raw: "we" as any
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
      })
    }
  },
  beforeRouteEnter(to, from, next) {
    // When first entering the route
    next((vm: any) => vm.updateComponent(to.params.article));
  },
  beforeRouteUpdate(to, from, next) {
    // When changing from one dynamic route to another
    this.updateComponent((to as any).params.dynamic);
    next();
  },
  mounted(){
    // this.dynamicComponent = Test2;
  }
});
</script>

<style lang="scss" scoped>
.blog-article {
  width: 650px;
  margin: auto;
  padding: 0 2rem;
}
</style>

