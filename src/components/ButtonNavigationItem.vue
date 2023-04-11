<template>
  <a :href="page.name" class="p-2 lastbutton d-flex" @click.prevent="updateHistoryPage()">
      <i v-if="direction=='left'" class="my-auto mr-3 pi pi-caret-left"></i>
      <i v-if="direction=='center'" class="my-auto mr-3 pi pi-caret-up"></i>
      <div class="my-auto">{{ page.title }}</div>
      <i v-if="direction=='right'" class="my-auto ml-3 pi pi-caret-right"></i>
  </a>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type {ArticleRoute} from "@/Utility/typings"
import Button from 'primevue/button';

export default defineComponent({
  components: {
    Button
  },
  props: {
    page: {
      type: Object as ()=> ArticleRoute,
      default: {
        name: "",
        title: ""
      }
    },
    direction: {
      type: String,
    }
  },
  methods: {
    updateHistoryPage() {
      this.$router.push(this.page.name)
      this.$emit("pressed")
      return false;
    }
  }
})
</script>