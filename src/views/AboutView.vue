<template>
  <div class="about">
    <Clock></Clock><Clock></Clock><Clock></Clock><Clock></Clock><Clock></Clock>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Clock from "../components/Clock.vue"
export default defineComponent({
  components: {
    Clock
  }
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
