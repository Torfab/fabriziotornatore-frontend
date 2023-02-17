<template>
  <a :href="page.name" class="p-2 lastbutton" @click.prevent="updateHistoryPage()">
      <i v-if="direction=='left'" class="pi pi-caret-left"></i>
      {{ page.title }}
      <i v-if="direction=='right'" class="pi pi-caret-right"></i>
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