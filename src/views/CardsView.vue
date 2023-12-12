<template>
  <div>
    <div class="grid">
      <CardItem title="Didattica" image="pi-book" class="col-12 md:col-6" @click="goTo('didattica')"></CardItem>
      <CardItem disabled title="Progetti" image="pi-sitemap" class="col-12 md:col-6"></CardItem>
      <CardItem title="Blog" image="pi-chart-line" class="col-12 md:col-6" @click="goTo('blog')"></CardItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardItem from "../components/CardItem.vue"
export default defineComponent({
  components: {
    CardItem,
  },
  methods: {
    goTo(route: string){
      this.$router.push(route)
    }
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
