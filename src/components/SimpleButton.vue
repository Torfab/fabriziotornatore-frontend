<template>
  <div class="p-2 simpleButton">
    <slot>
      <i v-if="icon" :class="[iconClass, 'm-auto']"></i>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ArticleRoute } from "@/Utility/typings";
import Button from "primevue/button";

export default defineComponent({
  components: {
    Button,
  },
  props: {
    page: {
      type: Object as () => ArticleRoute,
      default: {
        name: "",
        title: "",
      },
    },
    icon: {
      type: String,
    },
  },
  computed: {
    iconClass(): string {
      return `pi pi-${this.icon} simple-button-pi`;
    },
  },
});
</script>

<style lang="scss" scoped>
.simpleButton {
  cursor: pointer;
  display: flex;
}

.simple-button-pi {
  font-size:22px
}
</style>