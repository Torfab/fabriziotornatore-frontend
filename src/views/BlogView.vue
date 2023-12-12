<template>
  <div>
    <div class="grid">
      <CardItem
        title="Competitive Programming"
        image="pi-forward"
        class="col-12 md:col-6"
        @click="goTo('dispatcher/competitive')"
      ></CardItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardItem from "@/components/CardItem.vue";

export default defineComponent({
  components: {
    CardItem,
  },
  methods: {
    goTo(route: string){
      this.$router.push("/blog/"+route)
    }
  }
});
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
