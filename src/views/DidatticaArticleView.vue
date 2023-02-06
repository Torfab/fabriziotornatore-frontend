<template>
  <component :is="dynamicComponent"></component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      dynamicComponent: undefined as any
    }
  },
  methods: {
    updateComponent(param: string) {
      // The dynamic import
      import(`@/mdFiles/${param}.md`).then((module: any) => {
        this.dynamicComponent = module.default;
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

