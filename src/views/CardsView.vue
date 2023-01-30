<template>
  <div class="grid">
    <CardItem title="Didattica" image="pi-book" class="col-12 md:col-6"></CardItem>
    <CardItem title="Progetti" image="pi-sitemap" class="col-12 md:col-6"></CardItem>
    <CardItem title="Blog" image="pi-chart-line" class="col-12 md:col-6"></CardItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardItem from "../components/CardItem.vue"
export default defineComponent({
  components: {
    CardItem
  }
})
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
