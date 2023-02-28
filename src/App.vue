<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNavigation from './components/HeaderNavigation.vue'


</script>

<template>
  <HeaderNavigation></HeaderNavigation>
  <RouterView class="mainview"></RouterView>
</template>

<style scoped>


.logo {
  display: block;
  margin: 0 auto 2rem;
}

.mainview {
  margin: auto;
  max-width: 1280px;
  padding: 0 2rem;
  padding-top: var(--height-header);
  height: 100vh;
}

</style>
