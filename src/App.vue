<script setup lang="ts">
import type { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
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
  padding-top: 55px;
  max-height: 100vh;
}

</style>
